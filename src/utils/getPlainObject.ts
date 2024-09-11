export const getPlainObject = <T extends { [key: string]: unknown }>(obj: T, link: T) => {
  const refLink: { [key: string]: unknown } = link;
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      refLink[key] = getPlainObject(obj[key] as T, refLink);
    } else if (
      typeof obj[key] === "string" ||
      typeof obj[key] === "number" ||
      typeof obj[key] === "boolean"
    ) {
      refLink[key] = obj[key];
    }
  }
  return link;
}