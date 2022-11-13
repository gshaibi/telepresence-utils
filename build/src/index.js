"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendTelepresenceRootToPath = void 0;
const process = require("process");
const path = require("path");
function appendTelepresenceRootToPath(p) {
    const telepresenceRoot = process.env.TELEPRESENCE_ROOT;
    if (telepresenceRoot) {
        return path.join(telepresenceRoot, p);
    }
    return p;
}
exports.appendTelepresenceRootToPath = appendTelepresenceRootToPath;
//# sourceMappingURL=index.js.map