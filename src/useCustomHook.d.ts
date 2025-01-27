export default function useCustomHook<T>(initialValue: T): [T, (value: T) => void];
