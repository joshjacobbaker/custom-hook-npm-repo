declare const useCustomHook: <T>(initialValue: T) => readonly [T, import("react").Dispatch<import("react").SetStateAction<T>>];
export default useCustomHook;
