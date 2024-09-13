import { Flattened } from "../types/types";

export function flattenObject<T extends object>(obj: T): Flattened<T> {
  const result = {} as Flattened<T>;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key as keyof T];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        const flattenedChild = flattenObject(value);
        Object.assign(result, flattenedChild);
      } else {
        (result as Flattened<T>)[key as keyof T] = value;
      }
    }
  }

  return result;
}
