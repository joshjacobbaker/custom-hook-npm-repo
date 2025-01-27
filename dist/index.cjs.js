'use strict';

var react = require('react');

var useCustomHook = function (initialValue) {
    var _a = react.useState(initialValue), value = _a[0], setValue = _a[1];
    react.useEffect(function () {
        console.log("Value changed:", value);
        console.log("Patched 1");
    }, [value]);
    return [value, setValue];
};

exports.useCustomHook = useCustomHook;
//# sourceMappingURL=index.cjs.js.map
