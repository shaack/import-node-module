/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/node-module-import
 * License: MIT, see file 'LICENSE'
 */
if (!window.nodeModulesUrl) {
    window.nodeModulesUrl = import.meta.url.substring(0, import.meta.url.lastIndexOf("/node_modules/") + 14)
}
