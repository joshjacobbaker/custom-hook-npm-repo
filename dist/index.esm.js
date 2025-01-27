import { useState, useEffect } from 'react';

var useCustomHook = function (initialValue) {
    var _a = useState(initialValue), value = _a[0], setValue = _a[1];
    useEffect(function () {
        console.log("Value changed:", value);
        console.log("Patched 1");
    }, [value]);
    return [value, setValue];
};

export { useCustomHook };
//# sourceMappingURL=index.esm.js.map
