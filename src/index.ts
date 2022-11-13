import process = require('process');
import path = require('path');

export function appendTelepresenceRootToPath(p: string): string {
  const telepresenceRoot = process.env.TELEPRESENCE_ROOT;
  if (telepresenceRoot) {
    return path.join(telepresenceRoot, p);
  }
  return p;
}
