// Exclude keys from user
export function exclude(objectData: object, keys: string[]) {
  const data = Object.fromEntries(
    Object.entries(objectData).filter(([key]) => !keys.includes(key)),
  );
  return data;
}
