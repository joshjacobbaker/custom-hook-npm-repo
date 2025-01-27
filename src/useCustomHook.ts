import { useState, useEffect } from "react";

const useCustomHook = <T,>(initialValue: T) => {
    const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    console.log("Value changed:", value);
  }, [value]);

  return [value, setValue] as const;
};

export default useCustomHook;