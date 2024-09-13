export const filterBy = <T extends { [key: string]: unknown }>(
  array: T[],
  key: string,
  value: string
) => {
  return array.filter((item) => item[key] === value);
};
