import { Atomic } from "../typings/Atomic";
import { ClassProperties } from "../typings/ClassProperties";
import { Writable } from "../typings/Writable";

import { ArrayUtil } from "../utils/ArrayUtil";

import { IMetadata } from "./IMetadata";
import { IMetadataDefinition } from "./IMetadataDefinition";
import { IMetadataObject } from "./IMetadataObject";
import { MetadataConstant } from "./MetadataConstant";
import { MetadataDefinition } from "./MetadataDefinition";
import { MetadataObject } from "./MetadataObject";
import { MetadataProperty } from "./MetadataProperty";

export class Metadata {
    public readonly any: boolean;
    public readonly required: boolean;
    public readonly optional: boolean;
    public readonly nullable: boolean;
    public readonly functional: boolean;

    public readonly resolved: Metadata | null;
    public readonly atomics: Atomic.Literal[];
    public readonly constants: MetadataConstant[];
    public readonly templates: Metadata[][];

    public readonly rest: Metadata | null;
    public readonly arrays: Metadata[];
    public readonly tuples: Metadata[][];
    public readonly objects: MetadataObject[];
    public readonly definitions: MetadataDefinition[];

    public readonly natives: string[];
    public readonly sets: Metadata[];
    public readonly maps: Metadata.Entry[];

    /**
     * @internal
     */
    private name_: string | undefined = undefined;

    /**
     * @internal
     */
    private parent_resolved_: boolean = false;

    /**
     * @internal
     */
    public union_index?: number;

    /* -----------------------------------------------------------
        CONSTRUCTORS
    ----------------------------------------------------------- */
    /**
     * @hidden
     */
    private constructor(props: ClassProperties<Metadata>) {
        this.any = props.any;
        this.required = props.required;
        this.optional = props.optional;
        this.nullable = props.nullable;
        this.functional = props.functional;

        this.resolved = props.resolved;
        this.atomics = props.atomics;
        this.constants = props.constants;
        this.templates = props.templates;

        this.rest = props.rest;
        this.arrays = props.arrays;
        this.tuples = props.tuples;
        this.objects = props.objects;
        this.definitions = props.definitions;

        this.natives = props.natives;
        this.sets = props.sets;
        this.maps = props.maps;
    }

    /**
     * @internal
     */
    public static create(props: ClassProperties<Metadata>): Metadata {
        return new Metadata(props);
    }

    /**
     * @internal
     */
    public static initialize(parentResolved: boolean = false): Metadata {
        const meta: Metadata = this.create({
            any: false,
            nullable: false,
            required: true,
            optional: false,
            functional: false,

            resolved: null,
            constants: [],
            atomics: [],
            templates: [],
            arrays: [],
            tuples: [],
            objects: [],
            definitions: [],

            rest: null,
            natives: [],
            sets: [],
            maps: [],
        });
        meta.parent_resolved_ = parentResolved;
        return meta;
    }

    public absorb(): void {
        this._Absorb(new Set());
    }

    /**
     * @internal
     */
    private _Absorb(used: Set<string>): void {
        if (this.definitions.length === 0) return;

        if (this.resolved) this.resolved.absorb();
        if (this.rest) this.rest.absorb();
        for (const array of this.arrays) array._Absorb(used);
        for (const tuple of this.tuples)
            for (const meta of tuple) meta._Absorb(used);
        for (const obj of this.objects)
            for (const p of obj.properties) p.value.absorb();
        for (const set of this.sets) set._Absorb(used);
        for (const entry of this.maps) entry.value._Absorb(used);

        for (const def of this.definitions) {
            if (used.has(def.name)) continue;

            used.add(def.name);
            def.value._Absorb(used);
            Metadata.assign(this, def.value);
        }
    }

    public static assign(source: Metadata, target: Metadata): void {
        // FLAGS
        Writable(source).any ||= target.any;
        Writable(source).nullable ||= target.any;
        Writable(source).optional ||= target.optional;
        Writable(source).required &&= target.required;

        // ATOMIC VALUES
        for (const atomic of target.atomics)
            ArrayUtil.add(source.atomics, atomic);
        for (const constant of target.constants) {
            const container = source.constants.find(
                (elem) => elem.type === constant.type,
            );
            if (container)
                for (const value of constant.values)
                    ArrayUtil.add(container.values, value);
            else
                source.constants.push({
                    type: constant.type,
                    values: constant.values.slice() as any[],
                });
        }
        for (const template of target.templates) {
            const duplicated = source.templates.find(
                (elem) =>
                    elem.length === template.length &&
                    elem.every((child, i) => child === template[i]),
            );
            if (duplicated === undefined) source.templates.push(template);
        }

        // INSTANCES
        for (const array of target.arrays)
            ArrayUtil.add(
                source.arrays,
                array,
                (x, y) => x.getName() === y.getName(),
            );
        for (const tuple of target.tuples)
            ArrayUtil.add(
                source.tuples,
                tuple,
                (x, y) =>
                    x.map((t) => t.getName()).join(",") ===
                    y.map((t) => t.getName()).join(","),
            );
        for (const obj of target.objects)
            ArrayUtil.add(source.objects, obj, (x, y) => x.name === y.name);
        for (const def of target.definitions)
            ArrayUtil.add(source.definitions, def, (x, y) => x.name === y.name);
        for (const native of target.natives)
            ArrayUtil.add(source.natives, native);
        for (const set of target.sets)
            ArrayUtil.add(
                source.sets,
                set,
                (x, y) => x.getName() === y.getName(),
            );
        for (const map of target.maps)
            ArrayUtil.add(
                source.maps,
                map,
                (x, y) =>
                    [x.key.getName(), x.value.getName()].join(",") ===
                    [y.key.getName(), y.value.getName()].join(","),
            );
        source.name_ = getName(source);
        source.parent_resolved_ ||= target.parent_resolved_;
    }

    public toJSON(): IMetadata {
        return {
            any: this.any,
            required: this.required,
            optional: this.optional,
            nullable: this.nullable,
            functional: this.functional,

            atomics: this.atomics.slice(),
            constants: JSON.parse(JSON.stringify(this.constants)),
            templates: this.templates.map((tpl) =>
                tpl.map((meta) => meta.toJSON()),
            ),
            resolved: this.resolved ? this.resolved.toJSON() : null,

            rest: this.rest ? this.rest.toJSON() : null,
            arrays: this.arrays.map((meta) => meta.toJSON()),
            tuples: this.tuples.map((meta) =>
                meta.map((meta) => meta.toJSON()),
            ),
            objects: this.objects.map((obj) => obj.name),
            definitions: this.definitions.map((def) => def.name),

            natives: this.natives.slice(),
            sets: this.sets.map((meta) => meta.toJSON()),
            maps: this.maps.map((entry) => ({
                key: entry.key.toJSON(),
                value: entry.value.toJSON(),
            })),
        };
    }

    public static from(
        meta: IMetadata,
        objects: IMetadataObject[],
        definitions: IMetadataDefinition[],
    ): Metadata {
        const objDict: Map<string, MetadataObject> = new Map(
            objects.map((obj) => [
                obj.name,
                MetadataObject._From_without_properties(obj),
            ]),
        );
        const defDict: Map<string, MetadataDefinition> = new Map(
            definitions.map((def) => [
                def.name,
                MetadataDefinition._From_without_value(def),
            ]),
        );

        for (const obj of objects) {
            const initialized = objDict.get(obj.name)!;
            initialized.properties.push(
                ...obj.properties.map((prop) =>
                    MetadataProperty._From(prop, objDict, defDict),
                ),
            );
        }
        for (const def of definitions)
            Writable(defDict.get(def.name)!).value = this._From(
                def.value,
                objDict,
                defDict,
            );
        return this._From(meta, objDict, defDict);
    }

    /**
     * @internal
     */
    public static _From(
        meta: IMetadata,
        objects: Map<string, MetadataObject>,
        definitions: Map<string, MetadataDefinition>,
    ): Metadata {
        return this.create({
            any: meta.any,
            required: meta.required,
            optional: meta.optional,
            nullable: meta.nullable,
            functional: meta.functional,

            constants: JSON.parse(JSON.stringify(meta.constants)),
            atomics: meta.atomics.slice(),
            templates: meta.templates.map((tpl) =>
                tpl.map((meta) => this._From(meta, objects, definitions)),
            ),
            resolved: meta.resolved
                ? this._From(meta.resolved, objects, definitions)
                : null,

            rest: meta.rest
                ? this._From(meta.rest, objects, definitions)
                : null,
            arrays: meta.arrays.map((meta) =>
                this._From(meta, objects, definitions),
            ),
            tuples: meta.tuples.map((tuple) =>
                tuple.map((meta) => this._From(meta, objects, definitions)),
            ),
            objects: meta.objects.map((name) => {
                const found = objects.get(name);
                if (found === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find object "${name}".`,
                    );
                return found;
            }),
            definitions: meta.definitions.map((def) => {
                const found = definitions.get(def);
                if (found === undefined)
                    throw new Error(
                        `Error on Metadata.from(): failed to find definition "${def}".`,
                    );
                return found;
            }),

            natives: meta.natives.slice(),
            sets: meta.sets.map((meta) =>
                this._From(meta, objects, definitions),
            ),
            maps: meta.maps.map((entry) => ({
                key: this._From(entry.key, objects, definitions),
                value: this._From(entry.value, objects, definitions),
            })),
        });
    }

    /* -----------------------------------------------------------
        ACCESSORS
    ----------------------------------------------------------- */
    public getName(): string {
        this.name_ ||= getName(this);
        return this.name_;
    }

    public empty(): boolean {
        return this.bucket() === 0 || this.size() === 0;
    }
    public size(): number {
        return (
            (this.resolved ? 1 : 0) +
            (this.functional ? 1 : 0) +
            this.templates.length +
            this.atomics.length +
            this.constants
                .map((c) => c.values.length)
                .reduce((x, y) => x + y, 0) +
            (this.rest ? this.rest.size() : 0) +
            this.arrays.length +
            this.tuples.length +
            this.objects.length +
            this.definitions.length +
            this.natives.length +
            this.sets.length +
            this.maps.length
        );
    }
    public bucket(): number {
        return (
            (this.resolved ? 1 : 0) +
            (this.functional ? 1 : 0) +
            (this.templates.length ? 1 : 0) +
            (this.atomics.length ? 1 : 0) +
            (this.constants.length ? 1 : 0) +
            (this.rest ? this.rest.size() : 0) +
            (this.arrays.length ? 1 : 0) +
            (this.tuples.length ? 1 : 0) +
            (this.objects.length ? 1 : 0) +
            (this.natives.length ? 1 : 0) +
            (this.sets.length ? 1 : 0) +
            (this.maps.length ? 1 : 0)
        );
    }
    public isConstant(): boolean {
        return this.bucket() === (this.constants.length ? 1 : 0);
    }

    /**
     * @internal
     */
    public isUnionBucket(): boolean {
        const size: number = this.bucket();
        const emended: number = this.constants.length ? size - 1 : size;
        return emended > 1;
    }

    /**
     * @internal
     */
    public getSoleLiteral(): string | null {
        if (
            this.size() === 1 &&
            this.constants.length === 1 &&
            this.constants[0]!.type === "string" &&
            this.constants[0]!.values.length === 1
        )
            return this.constants[0]!.values[0] as string;
        else return null;
    }

    /**
     * @internal
     */
    public isSoleLiteral(): boolean {
        return this.getSoleLiteral() !== null;
    }

    /**
     * @internal
     */
    public isParentResolved(): boolean {
        return this.parent_resolved_;
    }
}
export namespace Metadata {
    export const intersects = (
        x: Metadata,
        y: Metadata,
        deep: boolean,
    ): boolean => {
        // CHECK ANY & OPTIONAL
        if (x.any || y.any) return true;
        if (x.required === false && false === y.required) return true;
        if (x.nullable === true && true === y.nullable) return true;

        //----
        // INSTANCES
        //----
        // ARRAYS AND OBJECTS
        if (deep === true) {
            for (const xa of x.arrays)
                for (const ya of y.arrays)
                    if (intersects(xa, ya, deep)) {
                        return true;
                    }
            for (const xo of x.objects)
                for (const yo of y.objects)
                    if (MetadataObject.intersects(xo, yo)) {
                        return true;
                    }
        } else {
            if (x.arrays.length && y.arrays.length) return true;
            if (x.objects.length && y.objects.length) return true;
        }

        // DEFINITIONS - @todo

        // TUPLES
        for (const xt of x.tuples)
            for (const yt of y.tuples)
                if (xt.length === 0 || yt.length === 0)
                    return xt.length === 0 && yt.length === 0;
                else if (
                    xt
                        .slice(0, Math.min(xt.length, yt.length))
                        .some((xv, i) => intersects(xv, yt[i]!, deep))
                )
                    return true;

        //----
        // VALUES
        //----
        // ATOMICS
        for (const atomic of x.atomics)
            if (y.atomics.includes(atomic)) return true;

        // CONSTANTS
        for (const constant of x.constants) {
            const opposite: MetadataConstant | undefined = y.constants.find(
                (elem) => elem.type === constant.type,
            );
            if (opposite === undefined) continue;

            const values: Set<any> = new Set([
                ...constant.values,
                ...opposite.values,
            ]);
            if (values.size !== constant.values.length + opposite.values.length)
                return true;
        }

        // FUNCTIONAL
        if (x.functional === true && y.functional === true) return true;

        return false;
    };

    export const covers = (x: Metadata, y: Metadata): boolean => {
        // CHECK ANY
        if (x.any) return true;
        else if (y.any) return false;

        //----
        // INSTANCES
        //----
        // ARRAYS
        for (const ya of y.arrays)
            if (x.arrays.some((xa) => covers(xa, ya) === true) === false)
                return false;

        // OBJECTS
        for (const yo of y.objects)
            if (x.objects.some((xo) => MetadataObject.covers(xo, yo)) === false)
                return false;

        // DEFINITIONS - @todo

        // TUPLES
        for (const yt of y.tuples)
            if (
                yt.length !== 0 &&
                x.tuples.some(
                    (xt) =>
                        xt.length >= yt.length &&
                        xt
                            .slice(yt.length)
                            .every((xv, i) => covers(xv, yt[i]!)),
                ) === false
            )
                return false;

        // NATIVES - @todo

        // SETS
        for (const ys of y.sets)
            if (x.sets.some((xs) => covers(xs, ys)) === false) return false;

        //----
        // VALUES
        //----
        // ATOMICS
        if (y.atomics.some((atomic) => x.atomics.includes(atomic) === false))
            return false;

        // CONSTANTS
        for (const yc of y.constants) {
            const xc: MetadataConstant | undefined = x.constants.find(
                (elem) => elem.type === yc.type,
            );
            if (xc === undefined) return false;
            else if (
                (yc.values as number[]).some(
                    (yv) => xc.values.includes(yv as never) === false,
                )
            )
                return false;
        }

        // FUNCTIONAL
        if (x.functional === false && y.functional) return false;

        // SUCCESS
        return true;
    };

    export const merge = (x: Metadata, y: Metadata): Metadata => {
        const output: Metadata = Metadata.create({
            any: x.any || y.any,
            nullable: x.nullable || y.nullable,
            required: x.required && y.required,
            optional: x.optional || y.optional,
            functional: x.functional || y.functional,

            resolved:
                x.resolved !== null && y.resolved !== null
                    ? merge(x.resolved, y.resolved)
                    : x.resolved || y.resolved,
            atomics: [...new Set([...x.atomics, ...y.atomics])],
            constants: [...x.constants],
            templates: x.templates.slice(),

            rest:
                x.rest !== null && y.rest !== null
                    ? merge(x.rest, y.rest)
                    : x.rest ?? y.rest,
            arrays: x.arrays.slice(),
            tuples: x.tuples.slice(),
            objects: x.objects.slice(),
            definitions: x.definitions.slice(),

            natives: [...new Set([...x.natives, ...y.natives])],
            sets: x.sets.slice(),
            maps: x.maps.slice(),
        });
        for (const constant of y.constants) {
            const target: MetadataConstant = ArrayUtil.take(
                output.constants,
                (elem) => elem.type === constant.type,
                () => ({
                    type: constant.type,
                    values: [],
                }),
            );
            for (const value of constant.values)
                ArrayUtil.add(target.values, value);
        }
        for (const array of y.arrays)
            ArrayUtil.set(output.arrays, array, (elem) => elem.getName());
        for (const obj of y.objects)
            ArrayUtil.set(output.objects, obj, (elem) => elem.name);
        for (const def of y.definitions)
            ArrayUtil.set(output.definitions, def, (elem) => elem.name);

        if (x.rest !== null)
            ArrayUtil.set(output.arrays, x.rest, (elem) => elem.getName());
        if (y.rest !== null)
            ArrayUtil.set(output.arrays, y.rest, (elem) => elem.getName());

        return output;
    };
}

const getName = (metadata: Metadata): string => {
    if (metadata.any === true) return "any";

    const elements: string[] = [];

    // OPTIONAL
    if (metadata.nullable === true) elements.push("null");
    if (metadata.required === false) elements.push("undefined");

    // ATOMIC
    for (const type of metadata.atomics) {
        elements.push(type);
    }
    for (const constant of metadata.constants)
        for (const value of constant.values)
            elements.push(JSON.stringify(value));
    for (const template of metadata.templates)
        elements.push(
            "`" +
                template
                    .map((child) =>
                        child.isConstant() && child.size() === 1
                            ? child.constants[0]!.values[0]!
                            : `$\{${child.getName()}\}`,
                    )
                    .join("")
                    .split("`")
                    .join("\\`") +
                "`",
        );

    // NATIVES
    for (const native of metadata.natives) elements.push(native);
    for (const set of metadata.sets) elements.push(`Set<${set.getName()}>`);
    for (const map of metadata.maps)
        elements.push(`Map<${map.key.getName()}, ${map.value.getName()}>`);

    // ARRAY
    if (metadata.rest !== null) elements.push(`...${metadata.rest.getName()}`);
    for (const tuple of metadata.tuples)
        elements.push(`[${tuple.map((elem) => elem.getName()).join(", ")}]`);
    for (const array of metadata.arrays)
        elements.push(`Array<${array.getName()}>`);

    // OBJECT
    for (const object of metadata.objects) elements.push(object.name);
    for (const def of metadata.definitions) elements.push(def.name);
    if (metadata.resolved !== null) elements.push(metadata.resolved.getName());

    // RETURNS
    if (elements.length === 0) return "unknown";
    else if (elements.length === 1) return elements[0]!;

    elements.sort();
    return `(${elements.join(" | ")})`;
};
export namespace Metadata {
    export interface Entry {
        key: Metadata;
        value: Metadata;
    }
}
