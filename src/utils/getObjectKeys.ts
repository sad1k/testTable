export const getObjectKeys = <T extends { [key: string]: unknown }>(obj: T) => {
  let res: string[] = [];
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      res = res.concat(getObjectKeys(obj[key] as { [key: string]: unknown }));
    } else if (
      typeof obj[key] === "string" ||
      typeof obj[key] === "number" ||
      typeof obj[key] === "boolean"
    ) {
      res.push(key);
    }
  }
  return res;
};
