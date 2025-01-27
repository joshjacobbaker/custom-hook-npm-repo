declare function useCustomHook<T>(initialValue: T): [T, (value: T) => void];

export { useCustomHook };
