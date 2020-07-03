type Keys<T, K> = K extends keyof T ? keyof T[K] : never;

type TargetType<T, K> = K extends keyof T ? T[K] : T;

type GetRest<K extends any[]> =
  ((...args: K) => any) extends (argA: any, ...rest: infer Rest) => any ?
    Rest : never;

type GetFirst<K extends any[]> = 
  ((...args: K) => any) extends (argA: infer A, ...rest: any[]) => any ?
    A : never;
  
type GetTargetTypeByKey<O, K> = 
  K extends string[] 
  ? GetTargetTypeByKey2<TargetType<O, GetFirst<K>>, GetRest<K>> 
  : TargetType<O, K>

type GetTargetTypeByKey2<O, K> = 
  K extends string[] 
  ? GetTargetTypeByKey3<TargetType<O, GetFirst<K>>, GetRest<K>> 
  : TargetType<O, K>

type GetTargetTypeByKey3<O, K> = 
  K extends string[] 
  ? TargetType<O, GetFirst<K>>
  : TargetType<O, K>
