export const setCache = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
export const getCache = (key: string) =>
  localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || "{}")
    : null;
export const removeCache = (key: string) => localStorage.removeItem(key);
export const clearCache = () => localStorage.clear();
