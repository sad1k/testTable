export type Flattened<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<unknown>
      ? T[K]
      : Flattened<T[K]>
    : T[K];
};

export type FlattenedWithId<T> = Flattened<T> & { id: number };

export type FlatDataType<T> = Flattened<T>;
