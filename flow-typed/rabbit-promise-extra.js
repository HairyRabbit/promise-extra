declare module "rabbit-promise-extra" {
  declare module.exports: {
    PromiseMap<A, O: { [key: string]: Promise<A> }>(map: O): Promise<$ObjMap<O, typeof $await>>,
    isPromise(obj: *): boolean
  }
}
