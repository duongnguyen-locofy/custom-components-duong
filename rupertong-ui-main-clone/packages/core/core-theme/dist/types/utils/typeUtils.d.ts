export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] ? RecursivePartial<U>[] : RecursivePartial<T[P]>;
};
//# sourceMappingURL=typeUtils.d.ts.map