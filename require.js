/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/node-module-import
 * License: MIT, see file 'LICENSE'
 */
if (!window.require) {
    const nodeModulesUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf("/node_modules/") + 14)
    window.require = async function (path) {
        if (path.startsWith("/")) {
            path = path.substring(1)
        }
        return await import(nodeModulesUrl + path)
    }
}
