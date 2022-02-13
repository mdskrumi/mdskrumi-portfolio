export const setCache = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
export const getCache = (key: string) =>
  JSON.parse(localStorage.getItem(key) || "");
export const removeCache = (key: string) => localStorage.removeItem(key);
export const clearCache = () => localStorage.clear();
