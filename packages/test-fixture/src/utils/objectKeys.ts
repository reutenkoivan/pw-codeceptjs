export const objectKeys = Object.keys as <T extends object>(_obj: T) => Array<keyof T>
