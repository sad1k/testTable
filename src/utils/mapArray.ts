export const mapArray = <T extends {id: number}>(array: T[], editData: T, formData: FormData) => {
  const result = array.map((val) => {
    if (editData.id === val.id) {
      return { ...val, ...Object.fromEntries(formData.entries()) };
    }
    return val;
  });
  return result
}

