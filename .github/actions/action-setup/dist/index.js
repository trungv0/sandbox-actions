/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 371:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(959);
const tc = __nccwpck_require__(637);

function getDownloadURL(version) {
  return `https://builds.dotnet.microsoft.com/dotnet/Sdk/${version}/dotnet-sdk-${version}-linux-x64.tar.gz`;
}

async function setup() {
  const version = core.getInput('version');

  const pathToTarball = await tc.downloadTool(getDownloadURL(version));

  const pathToCLI = await tc.extractTar(pathToTarball);

  core.addPath(pathToCLI)
}

module.exports = setup


/***/ }),

/***/ 959:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 637:
/***/ ((module) => {

module.exports = eval("require")("@actions/tool-cache");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(371);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;