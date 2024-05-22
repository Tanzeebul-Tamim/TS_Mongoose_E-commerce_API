export const generateSearchableFieldPath = (
  product: Record<string, unknown>,
): string[] => {
  const result: string[] = [];

  const generateSearchableFields = (obj: typeof product): void => {
    // Storing the keys of the object
    const keys: string[] = Object.keys(obj);

    keys.map((key) => {
      // getting the value of each field using the key
      const value = obj[key];

      // checking for string data types
      if (typeof value === 'string') {
        result.push(key);
      }
    });
  };

  generateSearchableFields(product);
  return result;
};
