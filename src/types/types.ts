
export type Flattened<T> = {
  [K in keyof T]: T[K] extends object
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? T[K] extends Array<any>
      ? T[K]
      : Flattened<T[K]>
    : T[K];
};

export type FlattenedWithId<T> = Flattened<T> & {id: number}

export type FlatDataType<T> = Flattened<T>;