// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/@fortawesome/fontawesome-free/css/all.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\webfonts\\fa-brands-400.eot":[["fa-brands-400.7b5acd02.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"./..\\webfonts\\fa-brands-400.woff2":[["fa-brands-400.34cc846b.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"./..\\webfonts\\fa-brands-400.woff":[["fa-brands-400.75159956.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"./..\\webfonts\\fa-brands-400.ttf":[["fa-brands-400.f885063e.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"./..\\webfonts\\fa-brands-400.svg":[["fa-brands-400.1f0eb095.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"./..\\webfonts\\fa-regular-400.eot":[["fa-regular-400.d4b9b17f.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"./..\\webfonts\\fa-regular-400.woff2":[["fa-regular-400.82c42f2f.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"./..\\webfonts\\fa-regular-400.woff":[["fa-regular-400.adc5c7aa.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"./..\\webfonts\\fa-regular-400.ttf":[["fa-regular-400.b073eab5.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"./..\\webfonts\\fa-regular-400.svg":[["fa-regular-400.16d6ac71.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"./..\\webfonts\\fa-solid-900.eot":[["fa-solid-900.0b60ff24.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"./..\\webfonts\\fa-solid-900.woff2":[["fa-solid-900.55d5ef42.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"./..\\webfonts\\fa-solid-900.woff":[["fa-solid-900.f824330b.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"./..\\webfonts\\fa-solid-900.ttf":[["fa-solid-900.47a039f3.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"./..\\webfonts\\fa-solid-900.svg":[["fa-solid-900.d08d5f59.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"@fortawesome/fontawesome-free/css/all.css":"../node_modules/@fortawesome/fontawesome-free/css/all.css","_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"../node_modules/@material/base/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCFoundation = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation =
/** @class */
function () {
  function MDCFoundation(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }

    this.adapter_ = adapter;
  }

  Object.defineProperty(MDCFoundation, "cssClasses", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "strings", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "numbers", {
    get: function () {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFoundation, "defaultAdapter", {
    get: function () {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    },
    enumerable: true,
    configurable: true
  });

  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
  };

  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
  };

  return MDCFoundation;
}();

exports.MDCFoundation = MDCFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCFoundation;
exports.default = _default;
},{}],"../node_modules/@material/base/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCComponent = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, tslib_1.__spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation.MDCFoundation({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

exports.MDCComponent = MDCComponent;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCComponent;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./foundation":"../node_modules/@material/base/foundation.js"}],"../node_modules/@material/dom/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyPassive = applyPassive;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }

  return supportsPassiveOption(globalObj) ? {
    passive: true
  } : false;
}

function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  } // See
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


  var passiveSupported = false;

  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }

    };

    var handler = function () {};

    globalObj.document.addEventListener('test', handler, options);
    globalObj.document.removeEventListener('test', handler, options);
  } catch (err) {
    passiveSupported = false;
  }

  return passiveSupported;
}
},{}],"../node_modules/@material/dom/ponyfill.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closest = closest;
exports.matches = matches;
exports.estimateScrollWidth = estimateScrollWidth;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }

  var el = element;

  while (el) {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement;
  }

  return null;
}

function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */


function estimateScrollWidth(element) {
  // Check the offsetParent. If the element inherits display: none from any
  // parent, the offsetParent property will be null (see
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
  // This check ensures we only clone the node when necessary.
  var htmlEl = element;

  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }

  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty('position', 'absolute');
  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
},{}],"../node_modules/@material/floating-label/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
  LABEL_SHAKE: 'mdc-floating-label--shake',
  ROOT: 'mdc-floating-label'
};
exports.cssClasses = cssClasses;
},{}],"../node_modules/@material/floating-label/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCFloatingLabelFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFloatingLabelFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCFloatingLabelFoundation, _super);

  function MDCFloatingLabelFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;

    _this.shakeAnimationEndHandler_ = function () {
      return _this.handleShakeAnimationEnd_();
    };

    return _this;
  }

  Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
    /**
     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        getWidth: function () {
          return 0;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCFloatingLabelFoundation.prototype.init = function () {
    this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };

  MDCFloatingLabelFoundation.prototype.destroy = function () {
    this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
  };
  /**
   * Returns the width of the label element.
   */


  MDCFloatingLabelFoundation.prototype.getWidth = function () {
    return this.adapter_.getWidth();
  };
  /**
   * Styles the label to produce a shake animation to indicate an error.
   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
   */


  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

    if (shouldShake) {
      this.adapter_.addClass(LABEL_SHAKE);
    } else {
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };
  /**
   * Styles the label to float or dock.
   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
   */


  MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
    var _a = MDCFloatingLabelFoundation.cssClasses,
        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
        LABEL_SHAKE = _a.LABEL_SHAKE;

    if (shouldFloat) {
      this.adapter_.addClass(LABEL_FLOAT_ABOVE);
    } else {
      this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
      this.adapter_.removeClass(LABEL_SHAKE);
    }
  };

  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
    this.adapter_.removeClass(LABEL_SHAKE);
  };

  return MDCFloatingLabelFoundation;
}(_foundation.MDCFoundation);

exports.MDCFloatingLabelFoundation = MDCFloatingLabelFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCFloatingLabelFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/floating-label/constants.js"}],"../node_modules/@material/floating-label/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFloatingLabel = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _ponyfill = require("@material/dom/ponyfill");

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFloatingLabel =
/** @class */
function (_super) {
  tslib_1.__extends(MDCFloatingLabel, _super);

  function MDCFloatingLabel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFloatingLabel.attachTo = function (root) {
    return new MDCFloatingLabel(root);
  };
  /**
   * Styles the label to produce the label shake for errors.
   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
   */


  MDCFloatingLabel.prototype.shake = function (shouldShake) {
    this.foundation_.shake(shouldShake);
  };
  /**
   * Styles the label to float/dock.
   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
   */


  MDCFloatingLabel.prototype.float = function (shouldFloat) {
    this.foundation_.float(shouldFloat);
  };

  MDCFloatingLabel.prototype.getWidth = function () {
    return this.foundation_.getWidth();
  };

  MDCFloatingLabel.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      getWidth: function () {
        return (0, _ponyfill.estimateScrollWidth)(_this.root_);
      },
      registerInteractionHandler: function (evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation.MDCFloatingLabelFoundation(adapter);
  };

  return MDCFloatingLabel;
}(_component.MDCComponent);

exports.MDCFloatingLabel = MDCFloatingLabel;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/dom/ponyfill":"../node_modules/@material/dom/ponyfill.js","./foundation":"../node_modules/@material/floating-label/foundation.js"}],"../node_modules/@material/line-ripple/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
};
exports.cssClasses = cssClasses;
},{}],"../node_modules/@material/line-ripple/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCLineRippleFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCLineRippleFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCLineRippleFoundation, _super);

  function MDCLineRippleFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;

    _this.transitionEndHandler_ = function (evt) {
      return _this.handleTransitionEnd(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
    /**
     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setStyle: function () {
          return undefined;
        },
        registerEventHandler: function () {
          return undefined;
        },
        deregisterEventHandler: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCLineRippleFoundation.prototype.init = function () {
    this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.destroy = function () {
    this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
  };

  MDCLineRippleFoundation.prototype.activate = function () {
    this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
    this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
  };

  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
    this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
  };

  MDCLineRippleFoundation.prototype.deactivate = function () {
    this.adapter_.addClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
  };

  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
    // Wait for the line ripple to be either transparent or opaque
    // before emitting the animation end event
    var isDeactivating = this.adapter_.hasClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);

    if (evt.propertyName === 'opacity') {
      if (isDeactivating) {
        this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_ACTIVE);
        this.adapter_.removeClass(_constants.cssClasses.LINE_RIPPLE_DEACTIVATING);
      }
    }
  };

  return MDCLineRippleFoundation;
}(_foundation.MDCFoundation);

exports.MDCLineRippleFoundation = MDCLineRippleFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCLineRippleFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/line-ripple/constants.js"}],"../node_modules/@material/line-ripple/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCLineRipple = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCLineRipple =
/** @class */
function (_super) {
  tslib_1.__extends(MDCLineRipple, _super);

  function MDCLineRipple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCLineRipple.attachTo = function (root) {
    return new MDCLineRipple(root);
  };
  /**
   * Activates the line ripple
   */


  MDCLineRipple.prototype.activate = function () {
    this.foundation_.activate();
  };
  /**
   * Deactivates the line ripple
   */


  MDCLineRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Sets the transform origin given a user's click location.
   * The `rippleCenter` is the x-coordinate of the middle of the ripple.
   */


  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
    this.foundation_.setRippleCenter(xCoordinate);
  };

  MDCLineRipple.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root_.classList.contains(className);
      },
      setStyle: function (propertyName, value) {
        return _this.root_.style.setProperty(propertyName, value);
      },
      registerEventHandler: function (evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterEventHandler: function (evtType, handler) {
        return _this.unlisten(evtType, handler);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation.MDCLineRippleFoundation(adapter);
  };

  return MDCLineRipple;
}(_component.MDCComponent);

exports.MDCLineRipple = MDCLineRipple;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","./foundation":"../node_modules/@material/line-ripple/foundation.js"}],"../node_modules/@material/notched-outline/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.numbers = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
};
exports.strings = strings;
var numbers = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
};
exports.numbers = numbers;
var cssClasses = {
  NO_LABEL: 'mdc-notched-outline--no-label',
  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
};
exports.cssClasses = cssClasses;
},{}],"../node_modules/@material/notched-outline/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCNotchedOutlineFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCNotchedOutlineFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCNotchedOutlineFoundation, _super);

  function MDCNotchedOutlineFoundation(adapter) {
    return _super.call(this, tslib_1.__assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
    /**
     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        setNotchWidthProperty: function () {
          return undefined;
        },
        removeNotchWidthProperty: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
   */

  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

    if (notchWidth > 0) {
      notchWidth += _constants.numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
    }

    this.adapter_.setNotchWidthProperty(notchWidth);
    this.adapter_.addClass(OUTLINE_NOTCHED);
  };
  /**
   * Removes notched outline selector to close the notch in the outline.
   */


  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
    this.adapter_.removeClass(OUTLINE_NOTCHED);
    this.adapter_.removeNotchWidthProperty();
  };

  return MDCNotchedOutlineFoundation;
}(_foundation.MDCFoundation);

exports.MDCNotchedOutlineFoundation = MDCNotchedOutlineFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCNotchedOutlineFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/notched-outline/constants.js"}],"../node_modules/@material/notched-outline/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCNotchedOutline = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _foundation = require("@material/floating-label/foundation");

var _constants = require("./constants");

var _foundation2 = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCNotchedOutline =
/** @class */
function (_super) {
  tslib_1.__extends(MDCNotchedOutline, _super);

  function MDCNotchedOutline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCNotchedOutline.attachTo = function (root) {
    return new MDCNotchedOutline(root);
  };

  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
    this.notchElement_ = this.root_.querySelector(_constants.strings.NOTCH_ELEMENT_SELECTOR);
    var label = this.root_.querySelector('.' + _foundation.MDCFloatingLabelFoundation.cssClasses.ROOT);

    if (label) {
      label.style.transitionDuration = '0s';
      this.root_.classList.add(_constants.cssClasses.OUTLINE_UPGRADED);
      requestAnimationFrame(function () {
        label.style.transitionDuration = '';
      });
    } else {
      this.root_.classList.add(_constants.cssClasses.NO_LABEL);
    }
  };
  /**
   * Updates classes and styles to open the notch to the specified width.
   * @param notchWidth The notch width in the outline.
   */


  MDCNotchedOutline.prototype.notch = function (notchWidth) {
    this.foundation_.notch(notchWidth);
  };
  /**
   * Updates classes and styles to close the notch.
   */


  MDCNotchedOutline.prototype.closeNotch = function () {
    this.foundation_.closeNotch();
  };

  MDCNotchedOutline.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      setNotchWidthProperty: function (width) {
        return _this.notchElement_.style.setProperty('width', width + 'px');
      },
      removeNotchWidthProperty: function () {
        return _this.notchElement_.style.removeProperty('width');
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation2.MDCNotchedOutlineFoundation(adapter);
  };

  return MDCNotchedOutline;
}(_component.MDCComponent);

exports.MDCNotchedOutline = MDCNotchedOutline;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/floating-label/foundation":"../node_modules/@material/floating-label/foundation.js","./constants":"../node_modules/@material/notched-outline/constants.js","./foundation":"../node_modules/@material/notched-outline/foundation.js"}],"../node_modules/@material/ripple/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
};
exports.cssClasses = cssClasses;
var strings = {
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top'
};
exports.strings = strings;
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
exports.numbers = numbers;
},{}],"../node_modules/@material/ripple/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsCssVariables = supportsCssVariables;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;

function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }

  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

  if (!supportsFunctionPresent) {
    return false;
  }

  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari

  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }

  return supportsCssVars;
}

function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }

  var x = pageOffset.x,
      y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY; // Determine touch point relative to the ripple container.

  if (evt.type === 'touchstart') {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return {
    x: normalizedX,
    y: normalizedY
  };
}
},{}],"../node_modules/@material/ripple/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCRippleFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

var _util = require("./util");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

var activatedTargets = [];

var MDCRippleFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCRippleFoundation, _super);

  function MDCRippleFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

    _this.activationAnimationHasEnded_ = false;
    _this.activationTimer_ = 0;
    _this.fgDeactivationRemovalTimer_ = 0;
    _this.fgScale_ = '0';
    _this.frame_ = {
      width: 0,
      height: 0
    };
    _this.initialSize_ = 0;
    _this.layoutFrame_ = 0;
    _this.maxRadius_ = 0;
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.activationState_ = _this.defaultActivationState_();

    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;

      _this.runDeactivationUXLogicIfReady_();
    };

    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    return _this;
  }

  Object.defineProperty(MDCRippleFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
    get: function () {
      return {
        addClass: function () {
          return undefined;
        },
        browserSupportsCssVars: function () {
          return true;
        },
        computeBoundingRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        containsEventTarget: function () {
          return true;
        },
        deregisterDocumentInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        deregisterResizeHandler: function () {
          return undefined;
        },
        getWindowPageOffset: function () {
          return {
            x: 0,
            y: 0
          };
        },
        isSurfaceActive: function () {
          return true;
        },
        isSurfaceDisabled: function () {
          return true;
        },
        isUnbounded: function () {
          return true;
        },
        registerDocumentInteractionHandler: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        registerResizeHandler: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        updateCssVariable: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCRippleFoundation.prototype.init = function () {
    var _this = this;

    var supportsPressRipple = this.supportsPressRipple_();
    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      var _a = MDCRippleFoundation.cssClasses,
          ROOT_1 = _a.ROOT,
          UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.addClass(ROOT_1);

        if (_this.adapter_.isUnbounded()) {
          _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


          _this.layoutInternal_();
        }
      });
    }
  };

  MDCRippleFoundation.prototype.destroy = function () {
    var _this = this;

    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
      }

      var _a = MDCRippleFoundation.cssClasses,
          ROOT_2 = _a.ROOT,
          UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function () {
        _this.adapter_.removeClass(ROOT_2);

        _this.adapter_.removeClass(UNBOUNDED_2);

        _this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  };
  /**
   * @param evt Optional event containing position information.
   */


  MDCRippleFoundation.prototype.activate = function (evt) {
    this.activate_(evt);
  };

  MDCRippleFoundation.prototype.deactivate = function () {
    this.deactivate_();
  };

  MDCRippleFoundation.prototype.layout = function () {
    var _this = this;

    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }

    this.layoutFrame_ = requestAnimationFrame(function () {
      _this.layoutInternal_();

      _this.layoutFrame_ = 0;
    });
  };

  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  };

  MDCRippleFoundation.prototype.handleFocus = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };

  MDCRippleFoundation.prototype.handleBlur = function () {
    var _this = this;

    requestAnimationFrame(function () {
      return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
    });
  };
  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   */


  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
    return this.adapter_.browserSupportsCssVars();
  };

  MDCRippleFoundation.prototype.defaultActivationState_ = function () {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  /**
   * supportsPressRipple Passed from init to save a redundant function call
   */


  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
    var _this = this;

    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
      });

      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
    this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
  };

  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
    var _this = this;

    if (evt.type === 'keydown') {
      this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
        _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
      });
    }
  };

  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
    var _this = this;

    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
    });
    this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
    this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  };

  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
    var _this = this;

    this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
      _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
    });
  };

  MDCRippleFoundation.prototype.removeCssVars_ = function () {
    var _this = this;

    var rippleStrings = MDCRippleFoundation.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function (key) {
      if (key.indexOf('VAR_') === 0) {
        _this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  };

  MDCRippleFoundation.prototype.activate_ = function (evt) {
    var _this = this;

    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    var activationState = this.activationState_;

    if (activationState.isActivated) {
      return;
    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


    var previousActivationEvent = this.previousActivationEvent_;
    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
      return _this.adapter_.containsEventTarget(target);
    });

    if (hasActivatedChild) {
      // Immediately reset activation state, while preserving logic that prevents touch follow-on events
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(function () {
      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
      activatedTargets = [];

      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
        // If space was pressed, try again within an rAF call to detect :active, because different UAs report
        // active states inconsistently when they're called within event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
        // variable is set within a rAF callback for a submit button interaction (#2241).
        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

        if (activationState.wasElementMadeActive) {
          _this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        _this.activationState_ = _this.defaultActivationState_();
      }
    });
  };

  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
    return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
  };

  MDCRippleFoundation.prototype.animateActivation_ = function () {
    var _this = this;

    var _a = MDCRippleFoundation.strings,
        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation.cssClasses,
        FG_DEACTIVATION = _b.FG_DEACTIVATION,
        FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal_();
    var translateStart = '';
    var translateEnd = '';

    if (!this.adapter_.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates_(),
          startPoint = _c.startPoint,
          endPoint = _c.endPoint;

      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(function () {
      return _this.activationTimerCallback_();
    }, DEACTIVATION_TIMEOUT_MS);
  };

  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
    var _a = this.activationState_,
        activationEvent = _a.activationEvent,
        wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;

    if (wasActivatedByPointer) {
      startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    } // Center the element around the start point.


    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };
    var endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };
    return {
      startPoint: startPoint,
      endPoint: endPoint
    };
  };

  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
    // The deactivation animation should only run after both of those occur.


    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState_,
        hasDeactivationUXRun = _a.hasDeactivationUXRun,
        isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(FG_DEACTIVATION);
      }, _constants.numbers.FG_DEACTIVATION_MS);
    }
  };

  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  };

  MDCRippleFoundation.prototype.resetActivationState_ = function () {
    var _this = this;

    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
    // Store the previous event until it's safe to assume that subsequent events are for new interactions.

    setTimeout(function () {
      return _this.previousActivationEvent_ = undefined;
    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
  };

  MDCRippleFoundation.prototype.deactivate_ = function () {
    var _this = this;

    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

    if (!activationState.isActivated) {
      return;
    }

    var state = tslib_1.__assign({}, activationState);

    if (activationState.isProgrammatic) {
      requestAnimationFrame(function () {
        return _this.animateDeactivation_(state);
      });
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(function () {
        _this.activationState_.hasDeactivationUXRun = true;

        _this.animateDeactivation_(state);

        _this.resetActivationState_();
      });
    }
  };

  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer,
        wasElementMadeActive = _a.wasElementMadeActive;

    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  };

  MDCRippleFoundation.prototype.layoutInternal_ = function () {
    var _this = this;

    this.frame_ = this.adapter_.computeBoundingRect();
    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
    // `overflow: hidden`.

    var getBoundedRadius = function () {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.

    if (this.adapter_.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize_ = initialSize - 1;
    } else {
      this.initialSize_ = initialSize;
    }

    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
    this.updateLayoutCssVars_();
  };

  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
    var _a = MDCRippleFoundation.strings,
        VAR_FG_SIZE = _a.VAR_FG_SIZE,
        VAR_LEFT = _a.VAR_LEFT,
        VAR_TOP = _a.VAR_TOP,
        VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };
      this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
      this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
    }
  };

  return MDCRippleFoundation;
}(_foundation.MDCFoundation);

exports.MDCRippleFoundation = MDCRippleFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCRippleFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/ripple/constants.js","./util":"../node_modules/@material/ripple/util.js"}],"../node_modules/@material/ripple/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRipple = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _events = require("@material/dom/events");

var _ponyfill = require("@material/dom/ponyfill");

var _foundation = require("./foundation");

var util = _interopRequireWildcard(require("./util"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCRipple =
/** @class */
function (_super) {
  tslib_1.__extends(MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function (className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function () {
        return util.supportsCssVariables(window);
      },
      computeBoundingRect: function () {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function (target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterResizeHandler: function (handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function () {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function () {
        return (0, _ponyfill.matches)(instance.root_, ':active');
      },
      isSurfaceDisabled: function () {
        return Boolean(instance.disabled);
      },
      isUnbounded: function () {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function (evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerInteractionHandler: function (evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      registerResizeHandler: function (handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function (className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function () {
      return Boolean(this.unbounded_);
    },
    set: function (unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation.MDCRippleFoundation(MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_component.MDCComponent);

exports.MDCRipple = MDCRipple;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/dom/events":"../node_modules/@material/dom/events.js","@material/dom/ponyfill":"../node_modules/@material/dom/ponyfill.js","./foundation":"../node_modules/@material/ripple/foundation.js","./util":"../node_modules/@material/ripple/util.js"}],"../node_modules/@material/textfield/character-counter/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssClasses = exports.strings = void 0;

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ROOT: 'mdc-text-field-character-counter'
};
exports.cssClasses = cssClasses;
var strings = {
  ROOT_SELECTOR: "." + cssClasses.ROOT
};
exports.strings = strings;
},{}],"../node_modules/@material/textfield/character-counter/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTextFieldCharacterCounterFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTextFieldCharacterCounterFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextFieldCharacterCounterFoundation, _super);

  function MDCTextFieldCharacterCounterFoundation(adapter) {
    return _super.call(this, tslib_1.__assign({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
     */
    get: function () {
      return {
        setContent: function () {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
    currentLength = Math.min(currentLength, maxLength);
    this.adapter_.setContent(currentLength + " / " + maxLength);
  };

  return MDCTextFieldCharacterCounterFoundation;
}(_foundation.MDCFoundation);

exports.MDCTextFieldCharacterCounterFoundation = MDCTextFieldCharacterCounterFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTextFieldCharacterCounterFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/textfield/character-counter/constants.js"}],"../node_modules/@material/textfield/character-counter/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldCharacterCounter = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTextFieldCharacterCounter =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextFieldCharacterCounter, _super);

  function MDCTextFieldCharacterCounter() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldCharacterCounter.attachTo = function (root) {
    return new MDCTextFieldCharacterCounter(root);
  };

  Object.defineProperty(MDCTextFieldCharacterCounter.prototype, "foundation", {
    get: function () {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      setContent: function (content) {
        _this.root_.textContent = content;
      }
    };
    return new _foundation.MDCTextFieldCharacterCounterFoundation(adapter);
  };

  return MDCTextFieldCharacterCounter;
}(_component.MDCComponent);

exports.MDCTextFieldCharacterCounter = MDCTextFieldCharacterCounter;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","./foundation":"../node_modules/@material/textfield/character-counter/foundation.js"}],"../node_modules/@material/textfield/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALWAYS_FLOAT_TYPES = exports.VALIDATION_ATTR_WHITELIST = exports.numbers = exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  ARIA_CONTROLS: 'aria-controls',
  INPUT_SELECTOR: '.mdc-text-field__input',
  LABEL_SELECTOR: '.mdc-floating-label',
  LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',
  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
  OUTLINE_SELECTOR: '.mdc-notched-outline',
  TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'
};
exports.strings = strings;
var cssClasses = {
  DENSE: 'mdc-text-field--dense',
  DISABLED: 'mdc-text-field--disabled',
  FOCUSED: 'mdc-text-field--focused',
  FULLWIDTH: 'mdc-text-field--fullwidth',
  HELPER_LINE: 'mdc-text-field-helper-line',
  INVALID: 'mdc-text-field--invalid',
  NO_LABEL: 'mdc-text-field--no-label',
  OUTLINED: 'mdc-text-field--outlined',
  ROOT: 'mdc-text-field',
  TEXTAREA: 'mdc-text-field--textarea',
  WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
  WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon'
};
exports.cssClasses = cssClasses;
var numbers = {
  DENSE_LABEL_SCALE: 0.923,
  LABEL_SCALE: 0.75
};
/**
 * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
 * under the "Validation-related attributes" section.
 */

exports.numbers = numbers;
var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];
/**
 * Label should always float for these types as they show some UI even if value is empty.
 */

exports.VALIDATION_ATTR_WHITELIST = VALIDATION_ATTR_WHITELIST;
var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];
exports.ALWAYS_FLOAT_TYPES = ALWAYS_FLOAT_TYPES;
},{}],"../node_modules/@material/textfield/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTextFieldFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextFieldFoundation, _super);
  /**
   * @param adapter
   * @param foundationMap Map from subcomponent names to their subfoundations.
   */


  function MDCTextFieldFoundation(adapter, foundationMap) {
    if (foundationMap === void 0) {
      foundationMap = {};
    }

    var _this = _super.call(this, tslib_1.__assign({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;

    _this.isFocused_ = false;
    _this.receivedUserInput_ = false;
    _this.isValid_ = true;
    _this.useNativeValidation_ = true;
    _this.helperText_ = foundationMap.helperText;
    _this.characterCounter_ = foundationMap.characterCounter;
    _this.leadingIcon_ = foundationMap.leadingIcon;
    _this.trailingIcon_ = foundationMap.trailingIcon;

    _this.inputFocusHandler_ = function () {
      return _this.activateFocus();
    };

    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus();
    };

    _this.inputInputHandler_ = function () {
      return _this.handleInput();
    };

    _this.setPointerXOffset_ = function (evt) {
      return _this.setTransformOrigin(evt);
    };

    _this.textFieldInteractionHandler_ = function () {
      return _this.handleTextFieldInteraction();
    };

    _this.validationAttributeChangeHandler_ = function (attributesList) {
      return _this.handleValidationAttributeChange(attributesList);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
    get: function () {
      var type = this.getNativeInput_().type;
      return _constants.ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
    get: function () {
      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
    get: function () {
      return !this.isFocused_ && !this.isValid() && !!this.getValue();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return true;
        },
        registerTextFieldInteractionHandler: function () {
          return undefined;
        },
        deregisterTextFieldInteractionHandler: function () {
          return undefined;
        },
        registerInputInteractionHandler: function () {
          return undefined;
        },
        deregisterInputInteractionHandler: function () {
          return undefined;
        },
        registerValidationAttributeChangeHandler: function () {
          return new MutationObserver(function () {
            return undefined;
          });
        },
        deregisterValidationAttributeChangeHandler: function () {
          return undefined;
        },
        getNativeInput: function () {
          return null;
        },
        isFocused: function () {
          return false;
        },
        activateLineRipple: function () {
          return undefined;
        },
        deactivateLineRipple: function () {
          return undefined;
        },
        setLineRippleTransformOrigin: function () {
          return undefined;
        },
        shakeLabel: function () {
          return undefined;
        },
        floatLabel: function () {
          return undefined;
        },
        hasLabel: function () {
          return false;
        },
        getLabelWidth: function () {
          return 0;
        },
        hasOutline: function () {
          return false;
        },
        notchOutline: function () {
          return undefined;
        },
        closeOutline: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldFoundation.prototype.init = function () {
    var _this = this;

    if (this.adapter_.isFocused()) {
      this.inputFocusHandler_();
    } else if (this.adapter_.hasLabel() && this.shouldFloat) {
      this.notchOutline(true);
      this.adapter_.floatLabel(true);
    }

    this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
    this.setCharacterCounter_(this.getValue().length);
  };

  MDCTextFieldFoundation.prototype.destroy = function () {
    var _this = this;

    this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
    this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
    this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
    POINTERDOWN_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
    });
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
    });
    this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
  };
  /**
   * Handles user interactions with the Text Field.
   */


  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
    var nativeInput = this.adapter_.getNativeInput();

    if (nativeInput && nativeInput.disabled) {
      return;
    }

    this.receivedUserInput_ = true;
  };
  /**
   * Handles validation attribute changes
   */


  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
    var _this = this;

    attributesList.some(function (attributeName) {
      if (_constants.VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
        _this.styleValidity_(true);

        return true;
      }

      return false;
    });

    if (attributesList.indexOf('maxlength') > -1) {
      this.setCharacterCounter_(this.getValue().length);
    }
  };
  /**
   * Opens/closes the notched outline.
   */


  MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
    if (!this.adapter_.hasOutline()) {
      return;
    }

    if (openNotch) {
      var isDense = this.adapter_.hasClass(_constants.cssClasses.DENSE);
      var labelScale = isDense ? _constants.numbers.DENSE_LABEL_SCALE : _constants.numbers.LABEL_SCALE;
      var labelWidth = this.adapter_.getLabelWidth() * labelScale;
      this.adapter_.notchOutline(labelWidth);
    } else {
      this.adapter_.closeOutline();
    }
  };
  /**
   * Activates the text field focus state.
   */


  MDCTextFieldFoundation.prototype.activateFocus = function () {
    this.isFocused_ = true;
    this.styleFocused_(this.isFocused_);
    this.adapter_.activateLineRipple();

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (this.helperText_) {
      this.helperText_.showToScreenReader();
    }
  };
  /**
   * Sets the line ripple's transform origin, so that the line ripple activate
   * animation will animate out from the user's click location.
   */


  MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
    var touches = evt.touches;
    var targetEvent = touches ? touches[0] : evt;
    var targetClientRect = targetEvent.target.getBoundingClientRect();
    var normalizedX = targetEvent.clientX - targetClientRect.left;
    this.adapter_.setLineRippleTransformOrigin(normalizedX);
  };
  /**
   * Handles input change of text input and text area.
   */


  MDCTextFieldFoundation.prototype.handleInput = function () {
    this.autoCompleteFocus();
    this.setCharacterCounter_(this.getValue().length);
  };
  /**
   * Activates the Text Field's focus state in cases when the input value
   * changes without user input (e.g. programmatically).
   */


  MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
    if (!this.receivedUserInput_) {
      this.activateFocus();
    }
  };
  /**
   * Deactivates the Text Field's focus state.
   */


  MDCTextFieldFoundation.prototype.deactivateFocus = function () {
    this.isFocused_ = false;
    this.adapter_.deactivateLineRipple();
    var isValid = this.isValid();
    this.styleValidity_(isValid);
    this.styleFocused_(this.isFocused_);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }

    if (!this.shouldFloat) {
      this.receivedUserInput_ = false;
    }
  };

  MDCTextFieldFoundation.prototype.getValue = function () {
    return this.getNativeInput_().value;
  };
  /**
   * @param value The value to set on the input Element.
   */


  MDCTextFieldFoundation.prototype.setValue = function (value) {
    // Prevent Safari from moving the caret to the end of the input when the value has not changed.
    if (this.getValue() !== value) {
      this.getNativeInput_().value = value;
    }

    this.setCharacterCounter_(value.length);
    var isValid = this.isValid();
    this.styleValidity_(isValid);

    if (this.adapter_.hasLabel()) {
      this.notchOutline(this.shouldFloat);
      this.adapter_.floatLabel(this.shouldFloat);
      this.adapter_.shakeLabel(this.shouldShake);
    }
  };
  /**
   * @return The custom validity state, if set; otherwise, the result of a native validity check.
   */


  MDCTextFieldFoundation.prototype.isValid = function () {
    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
  };
  /**
   * @param isValid Sets the custom validity state of the Text Field.
   */


  MDCTextFieldFoundation.prototype.setValid = function (isValid) {
    this.isValid_ = isValid;
    this.styleValidity_(isValid);
    var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();

    if (this.adapter_.hasLabel()) {
      this.adapter_.shakeLabel(shouldShake);
    }
  };
  /**
   * Enables or disables the use of native validation. Use this for custom validation.
   * @param useNativeValidation Set this to false to ignore native input validation.
   */


  MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
    this.useNativeValidation_ = useNativeValidation;
  };

  MDCTextFieldFoundation.prototype.isDisabled = function () {
    return this.getNativeInput_().disabled;
  };
  /**
   * @param disabled Sets the text-field disabled or enabled.
   */


  MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
    this.getNativeInput_().disabled = disabled;
    this.styleDisabled_(disabled);
  };
  /**
   * @param content Sets the content of the helper text.
   */


  MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
    if (this.helperText_) {
      this.helperText_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the leading icon.
   */


  MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
    if (this.leadingIcon_) {
      this.leadingIcon_.setContent(content);
    }
  };
  /**
   * Sets the aria label of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setAriaLabel(label);
    }
  };
  /**
   * Sets the text content of the trailing icon.
   */


  MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
    if (this.trailingIcon_) {
      this.trailingIcon_.setContent(content);
    }
  };
  /**
   * Sets character counter values that shows characters used and the total character limit.
   */


  MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
    if (!this.characterCounter_) {
      return;
    }

    var maxLength = this.getNativeInput_().maxLength;

    if (maxLength === -1) {
      throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
    }

    this.characterCounter_.setCounterValue(currentLength, maxLength);
  };
  /**
   * @return True if the Text Field input fails in converting the user-supplied value.
   */


  MDCTextFieldFoundation.prototype.isBadInput_ = function () {
    // The badInput property is not supported in IE 11 💩.
    return this.getNativeInput_().validity.badInput || false;
  };
  /**
   * @return The result of native validity checking (ValidityState.valid).
   */


  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
    return this.getNativeInput_().validity.valid;
  };
  /**
   * Styles the component based on the validity state.
   */


  MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

    if (isValid) {
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.addClass(INVALID);
    }

    if (this.helperText_) {
      this.helperText_.setValidity(isValid);
    }
  };
  /**
   * Styles the component based on the focused state.
   */


  MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

    if (isFocused) {
      this.adapter_.addClass(FOCUSED);
    } else {
      this.adapter_.removeClass(FOCUSED);
    }
  };
  /**
   * Styles the component based on the disabled state.
   */


  MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
    var _a = MDCTextFieldFoundation.cssClasses,
        DISABLED = _a.DISABLED,
        INVALID = _a.INVALID;

    if (isDisabled) {
      this.adapter_.addClass(DISABLED);
      this.adapter_.removeClass(INVALID);
    } else {
      this.adapter_.removeClass(DISABLED);
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.setDisabled(isDisabled);
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.setDisabled(isDisabled);
    }
  };
  /**
   * @return The native text input element from the host environment, or an object with the same shape for unit tests.
   */


  MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
    // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
    // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
    // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
    var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
    return nativeInput || {
      disabled: false,
      maxLength: -1,
      type: 'input',
      validity: {
        badInput: false,
        valid: true
      },
      value: ''
    };
  };

  return MDCTextFieldFoundation;
}(_foundation.MDCFoundation);

exports.MDCTextFieldFoundation = MDCTextFieldFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTextFieldFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/textfield/constants.js"}],"../node_modules/@material/textfield/helper-text/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssClasses = exports.strings = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
  ROOT: 'mdc-text-field-helper-text'
};
exports.cssClasses = cssClasses;
var strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  ROOT_SELECTOR: "." + cssClasses.ROOT
};
exports.strings = strings;
},{}],"../node_modules/@material/textfield/helper-text/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTextFieldHelperTextFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTextFieldHelperTextFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextFieldHelperTextFoundation, _super);

  function MDCTextFieldHelperTextFoundation(adapter) {
    return _super.call(this, tslib_1.__assign({}, MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setAttr: function () {
          return undefined;
        },
        removeAttr: function () {
          return undefined;
        },
        setContent: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Sets the content of the helper text field.
   */

  MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };
  /**
   * @param isPersistent Sets the persistency of the helper text.
   */


  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
    if (isPersistent) {
      this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
    } else {
      this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
    }
  };
  /**
   * @param isValidation True to make the helper text act as an error validation message.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
    if (isValidation) {
      this.adapter_.addClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
    } else {
      this.adapter_.removeClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
    }
  };
  /**
   * Makes the helper text visible to the screen reader.
   */


  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
    this.adapter_.removeAttr(_constants.strings.ARIA_HIDDEN);
  };
  /**
   * Sets the validity of the helper text based on the input validity.
   */


  MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
    var helperTextIsPersistent = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_PERSISTENT);
    var helperTextIsValidationMsg = this.adapter_.hasClass(_constants.cssClasses.HELPER_TEXT_VALIDATION_MSG);
    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

    if (validationMsgNeedsDisplay) {
      this.adapter_.setAttr(_constants.strings.ROLE, 'alert');
    } else {
      this.adapter_.removeAttr(_constants.strings.ROLE);
    }

    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
      this.hide_();
    }
  };
  /**
   * Hides the help text from screen readers.
   */


  MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
    this.adapter_.setAttr(_constants.strings.ARIA_HIDDEN, 'true');
  };

  return MDCTextFieldHelperTextFoundation;
}(_foundation.MDCFoundation);

exports.MDCTextFieldHelperTextFoundation = MDCTextFieldHelperTextFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTextFieldHelperTextFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/textfield/helper-text/constants.js"}],"../node_modules/@material/textfield/helper-text/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldHelperText = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTextFieldHelperText =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextFieldHelperText, _super);

  function MDCTextFieldHelperText() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldHelperText.attachTo = function (root) {
    return new MDCTextFieldHelperText(root);
  };

  Object.defineProperty(MDCTextFieldHelperText.prototype, "foundation", {
    get: function () {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root_.classList.contains(className);
      },
      setAttr: function (attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function (attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function (content) {
        _this.root_.textContent = content;
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation.MDCTextFieldHelperTextFoundation(adapter);
  };

  return MDCTextFieldHelperText;
}(_component.MDCComponent);

exports.MDCTextFieldHelperText = MDCTextFieldHelperText;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","./foundation":"../node_modules/@material/textfield/helper-text/foundation.js"}],"../node_modules/@material/textfield/icon/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cssClasses = exports.strings = void 0;

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  ICON_EVENT: 'MDCTextField:icon',
  ICON_ROLE: 'button'
};
exports.strings = strings;
var cssClasses = {
  ROOT: 'mdc-text-field__icon'
};
exports.cssClasses = cssClasses;
},{}],"../node_modules/@material/textfield/icon/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTextFieldIconFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var INTERACTION_EVENTS = ['click', 'keydown'];

var MDCTextFieldIconFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextFieldIconFoundation, _super);

  function MDCTextFieldIconFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCTextFieldIconFoundation.defaultAdapter, adapter)) || this;

    _this.savedTabIndex_ = null;

    _this.interactionHandler_ = function (evt) {
      return _this.handleInteraction(evt);
    };

    return _this;
  }

  Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
    /**
     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
     */
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        getAttr: function () {
          return null;
        },
        setAttr: function () {
          return undefined;
        },
        removeAttr: function () {
          return undefined;
        },
        setContent: function () {
          return undefined;
        },
        registerInteractionHandler: function () {
          return undefined;
        },
        deregisterInteractionHandler: function () {
          return undefined;
        },
        notifyIconAction: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIconFoundation.prototype.init = function () {
    var _this = this;

    this.savedTabIndex_ = this.adapter_.getAttr('tabindex');
    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.registerInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.destroy = function () {
    var _this = this;

    INTERACTION_EVENTS.forEach(function (evtType) {
      _this.adapter_.deregisterInteractionHandler(evtType, _this.interactionHandler_);
    });
  };

  MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
    if (!this.savedTabIndex_) {
      return;
    }

    if (disabled) {
      this.adapter_.setAttr('tabindex', '-1');
      this.adapter_.removeAttr('role');
    } else {
      this.adapter_.setAttr('tabindex', this.savedTabIndex_);
      this.adapter_.setAttr('role', _constants.strings.ICON_ROLE);
    }
  };

  MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
    this.adapter_.setAttr('aria-label', label);
  };

  MDCTextFieldIconFoundation.prototype.setContent = function (content) {
    this.adapter_.setContent(content);
  };

  MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;

    if (evt.type === 'click' || isEnterKey) {
      evt.preventDefault(); // stop click from causing host label to focus
      // input

      this.adapter_.notifyIconAction();
    }
  };

  return MDCTextFieldIconFoundation;
}(_foundation.MDCFoundation);

exports.MDCTextFieldIconFoundation = MDCTextFieldIconFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTextFieldIconFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/textfield/icon/constants.js"}],"../node_modules/@material/textfield/icon/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextFieldIcon = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTextFieldIcon =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextFieldIcon, _super);

  function MDCTextFieldIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextFieldIcon.attachTo = function (root) {
    return new MDCTextFieldIcon(root);
  };

  Object.defineProperty(MDCTextFieldIcon.prototype, "foundation", {
    get: function () {
      return this.foundation_;
    },
    enumerable: true,
    configurable: true
  });

  MDCTextFieldIcon.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      getAttr: function (attr) {
        return _this.root_.getAttribute(attr);
      },
      setAttr: function (attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      removeAttr: function (attr) {
        return _this.root_.removeAttribute(attr);
      },
      setContent: function (content) {
        _this.root_.textContent = content;
      },
      registerInteractionHandler: function (evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      notifyIconAction: function () {
        return _this.emit(_foundation.MDCTextFieldIconFoundation.strings.ICON_EVENT, {}
        /* evtData */
        , true
        /* shouldBubble */
        );
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation.MDCTextFieldIconFoundation(adapter);
  };

  return MDCTextFieldIcon;
}(_component.MDCComponent);

exports.MDCTextFieldIcon = MDCTextFieldIcon;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","./foundation":"../node_modules/@material/textfield/icon/foundation.js"}],"../node_modules/@material/textfield/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextField = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _events = require("@material/dom/events");

var ponyfill = _interopRequireWildcard(require("@material/dom/ponyfill"));

var _component2 = require("@material/floating-label/component");

var _component3 = require("@material/line-ripple/component");

var _component4 = require("@material/notched-outline/component");

var _component5 = require("@material/ripple/component");

var _foundation = require("@material/ripple/foundation");

var _component6 = require("./character-counter/component");

var _foundation2 = require("./character-counter/foundation");

var _constants = require("./constants");

var _foundation3 = require("./foundation");

var _component7 = require("./helper-text/component");

var _foundation4 = require("./helper-text/foundation");

var _component8 = require("./icon/component");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTextField =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTextField, _super);

  function MDCTextField() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTextField.attachTo = function (root) {
    return new MDCTextField(root);
  };

  MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function (el, foundation) {
        return new _component5.MDCRipple(el, foundation);
      };
    }

    if (lineRippleFactory === void 0) {
      lineRippleFactory = function (el) {
        return new _component3.MDCLineRipple(el);
      };
    }

    if (helperTextFactory === void 0) {
      helperTextFactory = function (el) {
        return new _component7.MDCTextFieldHelperText(el);
      };
    }

    if (characterCounterFactory === void 0) {
      characterCounterFactory = function (el) {
        return new _component6.MDCTextFieldCharacterCounter(el);
      };
    }

    if (iconFactory === void 0) {
      iconFactory = function (el) {
        return new _component8.MDCTextFieldIcon(el);
      };
    }

    if (labelFactory === void 0) {
      labelFactory = function (el) {
        return new _component2.MDCFloatingLabel(el);
      };
    }

    if (outlineFactory === void 0) {
      outlineFactory = function (el) {
        return new _component4.MDCNotchedOutline(el);
      };
    }

    this.input_ = this.root_.querySelector(_constants.strings.INPUT_SELECTOR);
    var labelElement = this.root_.querySelector(_constants.strings.LABEL_SELECTOR);
    this.label_ = labelElement ? labelFactory(labelElement) : null;
    var lineRippleElement = this.root_.querySelector(_constants.strings.LINE_RIPPLE_SELECTOR);
    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
    var outlineElement = this.root_.querySelector(_constants.strings.OUTLINE_SELECTOR);
    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null; // Helper text

    var helperTextStrings = _foundation4.MDCTextFieldHelperTextFoundation.strings;
    var nextElementSibling = this.root_.nextElementSibling;
    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(_constants.cssClasses.HELPER_LINE);
    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);
    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null; // Character counter

    var characterCounterStrings = _foundation2.MDCTextFieldCharacterCounterFoundation.strings;
    var characterCounterEl = this.root_.querySelector(characterCounterStrings.ROOT_SELECTOR); // If character counter is not found in root element search in sibling element.

    if (!characterCounterEl && hasHelperLine && nextElementSibling) {
      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);
    }

    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null; // Leading icon

    var leadingIconEl = this.root_.querySelector(_constants.strings.LEADING_ICON_SELECTOR);
    this.leadingIcon_ = leadingIconEl ? iconFactory(leadingIconEl) : null; // Trailing icon

    var trailingIconEl = this.root_.querySelector(_constants.strings.TRAILING_ICON_SELECTOR);
    this.trailingIcon_ = trailingIconEl ? iconFactory(trailingIconEl) : null;
    this.ripple = this.createRipple_(rippleFactory);
  };

  MDCTextField.prototype.destroy = function () {
    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.lineRipple_) {
      this.lineRipple_.destroy();
    }

    if (this.helperText_) {
      this.helperText_.destroy();
    }

    if (this.characterCounter_) {
      this.characterCounter_.destroy();
    }

    if (this.leadingIcon_) {
      this.leadingIcon_.destroy();
    }

    if (this.trailingIcon_) {
      this.trailingIcon_.destroy();
    }

    if (this.label_) {
      this.label_.destroy();
    }

    if (this.outline_) {
      this.outline_.destroy();
    }

    _super.prototype.destroy.call(this);
  };
  /**
   * Initializes the Text Field's internal state based on the environment's
   * state.
   */


  MDCTextField.prototype.initialSyncWithDOM = function () {
    this.disabled = this.input_.disabled;
  };

  Object.defineProperty(MDCTextField.prototype, "value", {
    get: function () {
      return this.foundation_.getValue();
    },

    /**
     * @param value The value to set on the input.
     */
    set: function (value) {
      this.foundation_.setValue(value);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "disabled", {
    get: function () {
      return this.foundation_.isDisabled();
    },

    /**
     * @param disabled Sets the Text Field disabled or enabled.
     */
    set: function (disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "valid", {
    get: function () {
      return this.foundation_.isValid();
    },

    /**
     * @param valid Sets the Text Field valid or invalid.
     */
    set: function (valid) {
      this.foundation_.setValid(valid);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "required", {
    get: function () {
      return this.input_.required;
    },

    /**
     * @param required Sets the Text Field to required.
     */
    set: function (required) {
      this.input_.required = required;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "pattern", {
    get: function () {
      return this.input_.pattern;
    },

    /**
     * @param pattern Sets the input element's validation pattern.
     */
    set: function (pattern) {
      this.input_.pattern = pattern;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "minLength", {
    get: function () {
      return this.input_.minLength;
    },

    /**
     * @param minLength Sets the input element's minLength.
     */
    set: function (minLength) {
      this.input_.minLength = minLength;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "maxLength", {
    get: function () {
      return this.input_.maxLength;
    },

    /**
     * @param maxLength Sets the input element's maxLength.
     */
    set: function (maxLength) {
      // Chrome throws exception if maxLength is set to a value less than zero
      if (maxLength < 0) {
        this.input_.removeAttribute('maxLength');
      } else {
        this.input_.maxLength = maxLength;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "min", {
    get: function () {
      return this.input_.min;
    },

    /**
     * @param min Sets the input element's min.
     */
    set: function (min) {
      this.input_.min = min;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "max", {
    get: function () {
      return this.input_.max;
    },

    /**
     * @param max Sets the input element's max.
     */
    set: function (max) {
      this.input_.max = max;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "step", {
    get: function () {
      return this.input_.step;
    },

    /**
     * @param step Sets the input element's step.
     */
    set: function (step) {
      this.input_.step = step;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "helperTextContent", {
    /**
     * Sets the helper text element content.
     */
    set: function (content) {
      this.foundation_.setHelperTextContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconAriaLabel", {
    /**
     * Sets the aria label of the leading icon.
     */
    set: function (label) {
      this.foundation_.setLeadingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "leadingIconContent", {
    /**
     * Sets the text content of the leading icon.
     */
    set: function (content) {
      this.foundation_.setLeadingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconAriaLabel", {
    /**
     * Sets the aria label of the trailing icon.
     */
    set: function (label) {
      this.foundation_.setTrailingIconAriaLabel(label);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "trailingIconContent", {
    /**
     * Sets the text content of the trailing icon.
     */
    set: function (content) {
      this.foundation_.setTrailingIconContent(content);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTextField.prototype, "useNativeValidation", {
    /**
     * Enables or disables the use of native validation. Use this for custom validation.
     * @param useNativeValidation Set this to false to ignore native input validation.
     */
    set: function (useNativeValidation) {
      this.foundation_.setUseNativeValidation(useNativeValidation);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Focuses the input element.
   */

  MDCTextField.prototype.focus = function () {
    this.input_.focus();
  };
  /**
   * Recomputes the outline SVG path for the outline element.
   */


  MDCTextField.prototype.layout = function () {
    var openNotch = this.foundation_.shouldFloat;
    this.foundation_.notchOutline(openNotch);
  };

  MDCTextField.prototype.getDefaultFoundation = function () {
    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
    var adapter = tslib_1.__assign({}, this.getRootAdapterMethods_(), this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()); // tslint:enable:object-literal-sort-keys


    return new _foundation3.MDCTextFieldFoundation(adapter, this.getFoundationMap_());
  };

  MDCTextField.prototype.getRootAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root_.classList.contains(className);
      },
      registerTextFieldInteractionHandler: function (evtType, handler) {
        return _this.listen(evtType, handler);
      },
      deregisterTextFieldInteractionHandler: function (evtType, handler) {
        return _this.unlisten(evtType, handler);
      },
      registerValidationAttributeChangeHandler: function (handler) {
        var getAttributesList = function (mutationsList) {
          return mutationsList.map(function (mutation) {
            return mutation.attributeName;
          }).filter(function (attributeName) {
            return attributeName;
          });
        };

        var observer = new MutationObserver(function (mutationsList) {
          return handler(getAttributesList(mutationsList));
        });
        var config = {
          attributes: true
        };
        observer.observe(_this.input_, config);
        return observer;
      },
      deregisterValidationAttributeChangeHandler: function (observer) {
        return observer.disconnect();
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getInputAdapterMethods_ = function () {
    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    return {
      getNativeInput: function () {
        return _this.input_;
      },
      isFocused: function () {
        return document.activeElement === _this.input_;
      },
      registerInputInteractionHandler: function (evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterInputInteractionHandler: function (evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      }
    }; // tslint:enable:object-literal-sort-keys
  };

  MDCTextField.prototype.getLabelAdapterMethods_ = function () {
    var _this = this;

    return {
      floatLabel: function (shouldFloat) {
        return _this.label_ && _this.label_.float(shouldFloat);
      },
      getLabelWidth: function () {
        return _this.label_ ? _this.label_.getWidth() : 0;
      },
      hasLabel: function () {
        return Boolean(_this.label_);
      },
      shakeLabel: function (shouldShake) {
        return _this.label_ && _this.label_.shake(shouldShake);
      }
    };
  };

  MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {
    var _this = this;

    return {
      activateLineRipple: function () {
        if (_this.lineRipple_) {
          _this.lineRipple_.activate();
        }
      },
      deactivateLineRipple: function () {
        if (_this.lineRipple_) {
          _this.lineRipple_.deactivate();
        }
      },
      setLineRippleTransformOrigin: function (normalizedX) {
        if (_this.lineRipple_) {
          _this.lineRipple_.setRippleCenter(normalizedX);
        }
      }
    };
  };

  MDCTextField.prototype.getOutlineAdapterMethods_ = function () {
    var _this = this;

    return {
      closeOutline: function () {
        return _this.outline_ && _this.outline_.closeNotch();
      },
      hasOutline: function () {
        return Boolean(_this.outline_);
      },
      notchOutline: function (labelWidth) {
        return _this.outline_ && _this.outline_.notch(labelWidth);
      }
    };
  };
  /**
   * @return A map of all subcomponents to subfoundations.
   */


  MDCTextField.prototype.getFoundationMap_ = function () {
    return {
      characterCounter: this.characterCounter_ ? this.characterCounter_.foundation : undefined,
      helperText: this.helperText_ ? this.helperText_.foundation : undefined,
      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined
    };
  };

  MDCTextField.prototype.createRipple_ = function (rippleFactory) {
    var _this = this;

    var isTextArea = this.root_.classList.contains(_constants.cssClasses.TEXTAREA);
    var isOutlined = this.root_.classList.contains(_constants.cssClasses.OUTLINED);

    if (isTextArea || isOutlined) {
      return null;
    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = tslib_1.__assign({}, _component5.MDCRipple.createAdapter(this), {
      isSurfaceActive: function () {
        return ponyfill.matches(_this.input_, ':active');
      },
      registerInteractionHandler: function (evtType, handler) {
        return _this.input_.addEventListener(evtType, handler, (0, _events.applyPassive)());
      },
      deregisterInteractionHandler: function (evtType, handler) {
        return _this.input_.removeEventListener(evtType, handler, (0, _events.applyPassive)());
      }
    }); // tslint:enable:object-literal-sort-keys


    return rippleFactory(this.root_, new _foundation.MDCRippleFoundation(adapter));
  };

  return MDCTextField;
}(_component.MDCComponent);

exports.MDCTextField = MDCTextField;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/dom/events":"../node_modules/@material/dom/events.js","@material/dom/ponyfill":"../node_modules/@material/dom/ponyfill.js","@material/floating-label/component":"../node_modules/@material/floating-label/component.js","@material/line-ripple/component":"../node_modules/@material/line-ripple/component.js","@material/notched-outline/component":"../node_modules/@material/notched-outline/component.js","@material/ripple/component":"../node_modules/@material/ripple/component.js","@material/ripple/foundation":"../node_modules/@material/ripple/foundation.js","./character-counter/component":"../node_modules/@material/textfield/character-counter/component.js","./character-counter/foundation":"../node_modules/@material/textfield/character-counter/foundation.js","./constants":"../node_modules/@material/textfield/constants.js","./foundation":"../node_modules/@material/textfield/foundation.js","./helper-text/component":"../node_modules/@material/textfield/helper-text/component.js","./helper-text/foundation":"../node_modules/@material/textfield/helper-text/foundation.js","./icon/component":"../node_modules/@material/textfield/icon/component.js"}],"../node_modules/@material/textfield/character-counter/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  characterCountCssClasses: true,
  characterCountStrings: true
};
Object.defineProperty(exports, "characterCountCssClasses", {
  enumerable: true,
  get: function () {
    return _constants.cssClasses;
  }
});
Object.defineProperty(exports, "characterCountStrings", {
  enumerable: true,
  get: function () {
    return _constants.strings;
  }
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

var _constants = require("./constants");
},{"./component":"../node_modules/@material/textfield/character-counter/component.js","./foundation":"../node_modules/@material/textfield/character-counter/foundation.js","./constants":"../node_modules/@material/textfield/character-counter/constants.js"}],"../node_modules/@material/textfield/helper-text/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  helperTextCssClasses: true,
  helperTextStrings: true
};
Object.defineProperty(exports, "helperTextCssClasses", {
  enumerable: true,
  get: function () {
    return _constants.cssClasses;
  }
});
Object.defineProperty(exports, "helperTextStrings", {
  enumerable: true,
  get: function () {
    return _constants.strings;
  }
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

var _constants = require("./constants");
},{"./component":"../node_modules/@material/textfield/helper-text/component.js","./foundation":"../node_modules/@material/textfield/helper-text/foundation.js","./constants":"../node_modules/@material/textfield/helper-text/constants.js"}],"../node_modules/@material/textfield/icon/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  iconCssClasses: true,
  iconStrings: true
};
Object.defineProperty(exports, "iconCssClasses", {
  enumerable: true,
  get: function () {
    return _constants.cssClasses;
  }
});
Object.defineProperty(exports, "iconStrings", {
  enumerable: true,
  get: function () {
    return _constants.strings;
  }
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

var _constants = require("./constants");
},{"./component":"../node_modules/@material/textfield/icon/component.js","./foundation":"../node_modules/@material/textfield/icon/foundation.js","./constants":"../node_modules/@material/textfield/icon/constants.js"}],"../node_modules/@material/textfield/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

var _index = require("./character-counter/index");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

var _index2 = require("./helper-text/index");

Object.keys(_index2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index2[key];
    }
  });
});

var _index3 = require("./icon/index");

Object.keys(_index3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index3[key];
    }
  });
});
},{"./component":"../node_modules/@material/textfield/component.js","./constants":"../node_modules/@material/textfield/constants.js","./foundation":"../node_modules/@material/textfield/foundation.js","./character-counter/index":"../node_modules/@material/textfield/character-counter/index.js","./helper-text/index":"../node_modules/@material/textfield/helper-text/index.js","./icon/index":"../node_modules/@material/textfield/icon/index.js"}],"../node_modules/@material/ripple/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  util: true
};
exports.util = void 0;

var util = _interopRequireWildcard(require("./util"));

exports.util = util;

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
},{"./util":"../node_modules/@material/ripple/util.js","./component":"../node_modules/@material/ripple/component.js","./constants":"../node_modules/@material/ripple/constants.js","./foundation":"../node_modules/@material/ripple/foundation.js"}],"../node_modules/@material/tab-scroller/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ANIMATING: 'mdc-tab-scroller--animating',
  SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
  SCROLL_TEST: 'mdc-tab-scroller__test'
};
exports.cssClasses = cssClasses;
var strings = {
  AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
  CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content'
};
exports.strings = strings;
},{}],"../node_modules/@material/tab-scroller/rtl-scroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabScrollerRTL = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerRTL =
/** @class */
function () {
  function MDCTabScrollerRTL(adapter) {
    this.adapter_ = adapter;
  }

  return MDCTabScrollerRTL;
}();

exports.MDCTabScrollerRTL = MDCTabScrollerRTL;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabScrollerRTL;
exports.default = _default;
},{}],"../node_modules/@material/tab-scroller/rtl-default-scroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabScrollerRTLDefault = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _rtlScroller = require("./rtl-scroller");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerRTLDefault =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabScrollerRTLDefault, _super);

  function MDCTabScrollerRTLDefault() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var right = this.calculateScrollEdges_().right; // Scroll values on most browsers are ints instead of floats so we round

    return Math.round(right - currentScrollLeft);
  };

  MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
    return scrollX;
  };

  MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };

  MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };

  return MDCTabScrollerRTLDefault;
}(_rtlScroller.MDCTabScrollerRTL);

exports.MDCTabScrollerRTLDefault = MDCTabScrollerRTLDefault;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabScrollerRTLDefault;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./rtl-scroller":"../node_modules/@material/tab-scroller/rtl-scroller.js"}],"../node_modules/@material/tab-scroller/rtl-negative-scroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabScrollerRTLNegative = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _rtlScroller = require("./rtl-scroller");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerRTLNegative =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabScrollerRTLNegative, _super);

  function MDCTabScrollerRTLNegative() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return Math.round(translateX - currentScrollLeft);
  };

  MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(-scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: clampedScrollLeft - currentScrollLeft
    };
  };

  MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
    return scrollX - translateX;
  };

  MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: rootWidth - contentWidth,
      right: 0
    };
  };

  MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.max(Math.min(edges.right, scrollX), edges.left);
  };

  return MDCTabScrollerRTLNegative;
}(_rtlScroller.MDCTabScrollerRTL);

exports.MDCTabScrollerRTLNegative = MDCTabScrollerRTLNegative;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabScrollerRTLNegative;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./rtl-scroller":"../node_modules/@material/tab-scroller/rtl-scroller.js"}],"../node_modules/@material/tab-scroller/rtl-reverse-scroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabScrollerRTLReverse = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _rtlScroller = require("./rtl-scroller");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerRTLReverse =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabScrollerRTLReverse, _super);

  function MDCTabScrollerRTLReverse() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // Scroll values on most browsers are ints instead of floats so we round

    return Math.round(currentScrollLeft - translateX);
  };

  MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };

  MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
    var currentScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
    return {
      finalScrollPosition: clampedScrollLeft,
      scrollDelta: currentScrollLeft - clampedScrollLeft
    };
  };

  MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
    return scrollX + translateX;
  };

  MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: contentWidth - rootWidth,
      right: 0
    };
  };

  MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.right, scrollX), edges.left);
  };

  return MDCTabScrollerRTLReverse;
}(_rtlScroller.MDCTabScrollerRTL);

exports.MDCTabScrollerRTLReverse = MDCTabScrollerRTLReverse;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabScrollerRTLReverse;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./rtl-scroller":"../node_modules/@material/tab-scroller/rtl-scroller.js"}],"../node_modules/@material/tab-scroller/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabScrollerFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

var _rtlDefaultScroller = require("./rtl-default-scroller");

var _rtlNegativeScroller = require("./rtl-negative-scroller");

var _rtlReverseScroller = require("./rtl-reverse-scroller");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScrollerFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabScrollerFoundation, _super);

  function MDCTabScrollerFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCTabScrollerFoundation.defaultAdapter, adapter)) || this;
    /**
     * Controls whether we should handle the transitionend and interaction events during the animation.
     */


    _this.isAnimating_ = false;
    return _this;
  }

  Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        eventTargetMatchesSelector: function () {
          return false;
        },
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        addScrollAreaClass: function () {
          return undefined;
        },
        setScrollAreaStyleProperty: function () {
          return undefined;
        },
        setScrollContentStyleProperty: function () {
          return undefined;
        },
        getScrollContentStyleValue: function () {
          return '';
        },
        setScrollAreaScrollLeft: function () {
          return undefined;
        },
        getScrollAreaScrollLeft: function () {
          return 0;
        },
        getScrollContentOffsetWidth: function () {
          return 0;
        },
        getScrollAreaOffsetWidth: function () {
          return 0;
        },
        computeScrollAreaClientRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        computeScrollContentClientRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        computeHorizontalScrollbarHeight: function () {
          return 0;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabScrollerFoundation.prototype.init = function () {
    // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
    // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
    var horizontalScrollbarHeight = this.adapter_.computeHorizontalScrollbarHeight();
    this.adapter_.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
    this.adapter_.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
  };
  /**
   * Computes the current visual scroll position
   */


  MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
    if (this.isRTL_()) {
      return this.computeCurrentScrollPositionRTL_();
    }

    var currentTranslateX = this.calculateCurrentTranslateX_();
    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();
    return scrollLeft - currentTranslateX;
  };
  /**
   * Handles interaction events that occur during transition
   */


  MDCTabScrollerFoundation.prototype.handleInteraction = function () {
    // Early exit if we aren't animating
    if (!this.isAnimating_) {
      return;
    } // Prevent other event listeners from handling this event


    this.stopScrollAnimation_();
  };
  /**
   * Handles the transitionend event
   */


  MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
    // Early exit if we aren't animating or the event was triggered by a different element.
    var evtTarget = evt.target;

    if (!this.isAnimating_ || !this.adapter_.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
      return;
    }

    this.isAnimating_ = false;
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
  };
  /**
   * Increment the scroll value by the scrollXIncrement using animation.
   * @param scrollXIncrement The value by which to increment the scroll position
   */


  MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
    // Early exit for non-operational increment values
    if (scrollXIncrement === 0) {
      return;
    }

    this.animate_(this.getIncrementScrollOperation_(scrollXIncrement));
  };
  /**
   * Increment the scroll value by the scrollXIncrement without animation.
   * @param scrollXIncrement The value by which to increment the scroll position
   */


  MDCTabScrollerFoundation.prototype.incrementScrollImmediate = function (scrollXIncrement) {
    // Early exit for non-operational increment values
    if (scrollXIncrement === 0) {
      return;
    }

    var operation = this.getIncrementScrollOperation_(scrollXIncrement);

    if (operation.scrollDelta === 0) {
      return;
    }

    this.stopScrollAnimation_();
    this.adapter_.setScrollAreaScrollLeft(operation.finalScrollPosition);
  };
  /**
   * Scrolls to the given scrollX value
   */


  MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
    if (this.isRTL_()) {
      return this.scrollToRTL_(scrollX);
    }

    this.scrollTo_(scrollX);
  };
  /**
   * @return Browser-specific {@link MDCTabScrollerRTL} instance.
   */


  MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
    if (!this.rtlScrollerInstance_) {
      this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
    }

    return this.rtlScrollerInstance_;
  };
  /**
   * @return translateX value from a CSS matrix transform function string.
   */


  MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
    var transformValue = this.adapter_.getScrollContentStyleValue('transform'); // Early exit if no transform is present

    if (transformValue === 'none') {
      return 0;
    } // The transform value comes back as a matrix transformation in the form
    // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
    // we're going to grab all the parenthesized values, strip out tx, and
    // parse it.


    var match = /\((.+?)\)/.exec(transformValue);

    if (!match) {
      return 0;
    }

    var matrixParams = match[1]; // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
    // @ts-ignore These unused variables should retain their semantic names for clarity.

    var _a = tslib_1.__read(matrixParams.split(','), 6),
        a = _a[0],
        b = _a[1],
        c = _a[2],
        d = _a[3],
        tx = _a[4],
        ty = _a[5];

    return parseFloat(tx); // tslint:disable-line:ban
  };
  /**
   * Calculates a safe scroll value that is > 0 and < the max scroll value
   * @param scrollX The distance to scroll
   */


  MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
    var edges = this.calculateScrollEdges_();
    return Math.min(Math.max(edges.left, scrollX), edges.right);
  };

  MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
    var translateX = this.calculateCurrentTranslateX_();
    return this.getRTLScroller().getScrollPositionRTL(translateX);
  };

  MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
    var contentWidth = this.adapter_.getScrollContentOffsetWidth();
    var rootWidth = this.adapter_.getScrollAreaOffsetWidth();
    return {
      left: 0,
      right: contentWidth - rootWidth
    };
  };
  /**
   * Internal scroll method
   * @param scrollX The new scroll position
   */


  MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
    var currentScrollX = this.getScrollPosition();
    var safeScrollX = this.clampScrollValue_(scrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    this.animate_({
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta
    });
  };
  /**
   * Internal RTL scroll method
   * @param scrollX The new scroll position
   */


  MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
    var animation = this.getRTLScroller().scrollToRTL(scrollX);
    this.animate_(animation);
  };
  /**
   * Internal method to compute the increment scroll operation values.
   * @param scrollX The desired scroll position increment
   * @return MDCTabScrollerAnimation with the sanitized values for performing the scroll operation.
   */


  MDCTabScrollerFoundation.prototype.getIncrementScrollOperation_ = function (scrollX) {
    if (this.isRTL_()) {
      return this.getRTLScroller().incrementScrollRTL(scrollX);
    }

    var currentScrollX = this.getScrollPosition();
    var targetScrollX = scrollX + currentScrollX;
    var safeScrollX = this.clampScrollValue_(targetScrollX);
    var scrollDelta = safeScrollX - currentScrollX;
    return {
      finalScrollPosition: safeScrollX,
      scrollDelta: scrollDelta
    };
  };
  /**
   * Animates the tab scrolling
   * @param animation The animation to apply
   */


  MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
    var _this = this; // Early exit if translateX is 0, which means there's no animation to perform


    if (animation.scrollDelta === 0) {
      return;
    }

    this.stopScrollAnimation_(); // This animation uses the FLIP approach.
    // Read more here: https://aerotwist.com/blog/flip-your-animations/

    this.adapter_.setScrollAreaScrollLeft(animation.finalScrollPosition);
    this.adapter_.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)"); // Force repaint

    this.adapter_.computeScrollAreaClientRect();
    requestAnimationFrame(function () {
      _this.adapter_.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);

      _this.adapter_.setScrollContentStyleProperty('transform', 'none');
    });
    this.isAnimating_ = true;
  };
  /**
   * Stops scroll animation
   */


  MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
    this.isAnimating_ = false;
    var currentScrollPosition = this.getAnimatingScrollPosition_();
    this.adapter_.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    this.adapter_.setScrollContentStyleProperty('transform', 'translateX(0px)');
    this.adapter_.setScrollAreaScrollLeft(currentScrollPosition);
  };
  /**
   * Gets the current scroll position during animation
   */


  MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
    var currentTranslateX = this.calculateCurrentTranslateX_();
    var scrollLeft = this.adapter_.getScrollAreaScrollLeft();

    if (this.isRTL_()) {
      return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
    }

    return scrollLeft - currentTranslateX;
  };
  /**
   * Determines the RTL Scroller to use
   */


  MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
    // Browsers have three different implementations of scrollLeft in RTL mode,
    // dependent on the browser. The behavior is based off the max LTR
    // scrollLeft value and 0.
    //
    // * Default scrolling in RTL *
    //    - Left-most value: 0
    //    - Right-most value: Max LTR scrollLeft value
    //
    // * Negative scrolling in RTL *
    //    - Left-most value: Negated max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // * Reverse scrolling in RTL *
    //    - Left-most value: Max LTR scrollLeft value
    //    - Right-most value: 0
    //
    // We use those principles below to determine which RTL scrollLeft
    // behavior is implemented in the current browser.
    var initialScrollLeft = this.adapter_.getScrollAreaScrollLeft();
    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft - 1);
    var newScrollLeft = this.adapter_.getScrollAreaScrollLeft(); // If the newScrollLeft value is negative,then we know that the browser has
    // implemented negative RTL scrolling, since all other implementations have
    // only positive values.

    if (newScrollLeft < 0) {
      // Undo the scrollLeft test check
      this.adapter_.setScrollAreaScrollLeft(initialScrollLeft);
      return new _rtlNegativeScroller.MDCTabScrollerRTLNegative(this.adapter_);
    }

    var rootClientRect = this.adapter_.computeScrollAreaClientRect();
    var contentClientRect = this.adapter_.computeScrollContentClientRect();
    var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right); // Undo the scrollLeft test check

    this.adapter_.setScrollAreaScrollLeft(initialScrollLeft); // By calculating the clientRect of the root element and the clientRect of
    // the content element, we can determine how much the scroll value changed
    // when we performed the scrollLeft subtraction above.

    if (rightEdgeDelta === newScrollLeft) {
      return new _rtlReverseScroller.MDCTabScrollerRTLReverse(this.adapter_);
    }

    return new _rtlDefaultScroller.MDCTabScrollerRTLDefault(this.adapter_);
  };

  MDCTabScrollerFoundation.prototype.isRTL_ = function () {
    return this.adapter_.getScrollContentStyleValue('direction') === 'rtl';
  };

  return MDCTabScrollerFoundation;
}(_foundation.MDCFoundation);

exports.MDCTabScrollerFoundation = MDCTabScrollerFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabScrollerFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/tab-scroller/constants.js","./rtl-default-scroller":"../node_modules/@material/tab-scroller/rtl-default-scroller.js","./rtl-negative-scroller":"../node_modules/@material/tab-scroller/rtl-negative-scroller.js","./rtl-reverse-scroller":"../node_modules/@material/tab-scroller/rtl-reverse-scroller.js"}],"../node_modules/@material/tab-scroller/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeHorizontalScrollbarHeight = computeHorizontalScrollbarHeight;

var _constants = require("./constants");

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */
var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */

function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
  if (shouldCacheResult === void 0) {
    shouldCacheResult = true;
  }

  if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
    return horizontalScrollbarHeight_;
  }

  var el = documentObj.createElement('div');
  el.classList.add(_constants.cssClasses.SCROLL_TEST);
  documentObj.body.appendChild(el);
  var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
  documentObj.body.removeChild(el);

  if (shouldCacheResult) {
    horizontalScrollbarHeight_ = horizontalScrollbarHeight;
  }

  return horizontalScrollbarHeight;
}
},{"./constants":"../node_modules/@material/tab-scroller/constants.js"}],"../node_modules/@material/tab-scroller/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTabScroller = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _events = require("@material/dom/events");

var _ponyfill = require("@material/dom/ponyfill");

var _foundation = require("./foundation");

var util = _interopRequireWildcard(require("./util"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabScroller =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabScroller, _super);

  function MDCTabScroller() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabScroller.attachTo = function (root) {
    return new MDCTabScroller(root);
  };

  MDCTabScroller.prototype.initialize = function () {
    this.area_ = this.root_.querySelector(_foundation.MDCTabScrollerFoundation.strings.AREA_SELECTOR);
    this.content_ = this.root_.querySelector(_foundation.MDCTabScrollerFoundation.strings.CONTENT_SELECTOR);
  };

  MDCTabScroller.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleInteraction_ = function () {
      return _this.foundation_.handleInteraction();
    };

    this.handleTransitionEnd_ = function (evt) {
      return _this.foundation_.handleTransitionEnd(evt);
    };

    this.area_.addEventListener('wheel', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.addEventListener('touchstart', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.addEventListener('pointerdown', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.addEventListener('mousedown', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.addEventListener('keydown', this.handleInteraction_, (0, _events.applyPassive)());
    this.content_.addEventListener('transitionend', this.handleTransitionEnd_);
  };

  MDCTabScroller.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.area_.removeEventListener('wheel', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.removeEventListener('touchstart', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.removeEventListener('pointerdown', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.removeEventListener('mousedown', this.handleInteraction_, (0, _events.applyPassive)());
    this.area_.removeEventListener('keydown', this.handleInteraction_, (0, _events.applyPassive)());
    this.content_.removeEventListener('transitionend', this.handleTransitionEnd_);
  };

  MDCTabScroller.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      eventTargetMatchesSelector: function (evtTarget, selector) {
        return (0, _ponyfill.matches)(evtTarget, selector);
      },
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      addScrollAreaClass: function (className) {
        return _this.area_.classList.add(className);
      },
      setScrollAreaStyleProperty: function (prop, value) {
        return _this.area_.style.setProperty(prop, value);
      },
      setScrollContentStyleProperty: function (prop, value) {
        return _this.content_.style.setProperty(prop, value);
      },
      getScrollContentStyleValue: function (propName) {
        return window.getComputedStyle(_this.content_).getPropertyValue(propName);
      },
      setScrollAreaScrollLeft: function (scrollX) {
        return _this.area_.scrollLeft = scrollX;
      },
      getScrollAreaScrollLeft: function () {
        return _this.area_.scrollLeft;
      },
      getScrollContentOffsetWidth: function () {
        return _this.content_.offsetWidth;
      },
      getScrollAreaOffsetWidth: function () {
        return _this.area_.offsetWidth;
      },
      computeScrollAreaClientRect: function () {
        return _this.area_.getBoundingClientRect();
      },
      computeScrollContentClientRect: function () {
        return _this.content_.getBoundingClientRect();
      },
      computeHorizontalScrollbarHeight: function () {
        return util.computeHorizontalScrollbarHeight(document);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation.MDCTabScrollerFoundation(adapter);
  };
  /**
   * Returns the current visual scroll position
   */


  MDCTabScroller.prototype.getScrollPosition = function () {
    return this.foundation_.getScrollPosition();
  };
  /**
   * Returns the width of the scroll content
   */


  MDCTabScroller.prototype.getScrollContentWidth = function () {
    return this.content_.offsetWidth;
  };
  /**
   * Increments the scroll value by the given amount
   * @param scrollXIncrement The pixel value by which to increment the scroll value
   */


  MDCTabScroller.prototype.incrementScroll = function (scrollXIncrement) {
    this.foundation_.incrementScroll(scrollXIncrement);
  };
  /**
   * Scrolls to the given pixel position
   * @param scrollX The pixel value to scroll to
   */


  MDCTabScroller.prototype.scrollTo = function (scrollX) {
    this.foundation_.scrollTo(scrollX);
  };

  return MDCTabScroller;
}(_component.MDCComponent);

exports.MDCTabScroller = MDCTabScroller;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/dom/events":"../node_modules/@material/dom/events.js","@material/dom/ponyfill":"../node_modules/@material/dom/ponyfill.js","./foundation":"../node_modules/@material/tab-scroller/foundation.js","./util":"../node_modules/@material/tab-scroller/util.js"}],"../node_modules/@material/tab-indicator/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ACTIVE: 'mdc-tab-indicator--active',
  FADE: 'mdc-tab-indicator--fade',
  NO_TRANSITION: 'mdc-tab-indicator--no-transition'
};
exports.cssClasses = cssClasses;
var strings = {
  CONTENT_SELECTOR: '.mdc-tab-indicator__content'
};
exports.strings = strings;
},{}],"../node_modules/@material/tab-indicator/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabIndicatorFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabIndicatorFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabIndicatorFoundation, _super);

  function MDCTabIndicatorFoundation(adapter) {
    return _super.call(this, tslib_1.__assign({}, MDCTabIndicatorFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        computeContentClientRect: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        setContentStyleProperty: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
    return this.adapter_.computeContentClientRect();
  };

  return MDCTabIndicatorFoundation;
}(_foundation.MDCFoundation);

exports.MDCTabIndicatorFoundation = MDCTabIndicatorFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabIndicatorFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/tab-indicator/constants.js"}],"../node_modules/@material/tab-indicator/fading-foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCFadingTabIndicatorFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* istanbul ignore next: subclass is not a branch statement */
var MDCFadingTabIndicatorFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCFadingTabIndicatorFoundation, _super);

  function MDCFadingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCFadingTabIndicatorFoundation.prototype.activate = function () {
    this.adapter_.addClass(_foundation.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };

  MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(_foundation.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };

  return MDCFadingTabIndicatorFoundation;
}(_foundation.MDCTabIndicatorFoundation);

exports.MDCFadingTabIndicatorFoundation = MDCFadingTabIndicatorFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCFadingTabIndicatorFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./foundation":"../node_modules/@material/tab-indicator/foundation.js"}],"../node_modules/@material/tab-indicator/sliding-foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCSlidingTabIndicatorFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* istanbul ignore next: subclass is not a branch statement */
var MDCSlidingTabIndicatorFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCSlidingTabIndicatorFoundation, _super);

  function MDCSlidingTabIndicatorFoundation() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
    // Early exit if no indicator is present to handle cases where an indicator
    // may be activated without a prior indicator state
    if (!previousIndicatorClientRect) {
      this.adapter_.addClass(_foundation.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
      return;
    } // This animation uses the FLIP approach. You can read more about it at the link below:
    // https://aerotwist.com/blog/flip-your-animations/
    // Calculate the dimensions based on the dimensions of the previous indicator


    var currentClientRect = this.computeContentClientRect();
    var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    this.adapter_.addClass(_foundation.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
    this.adapter_.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")"); // Force repaint before updating classes and transform to ensure the transform properly takes effect

    this.computeContentClientRect();
    this.adapter_.removeClass(_foundation.MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
    this.adapter_.addClass(_foundation.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    this.adapter_.setContentStyleProperty('transform', '');
  };

  MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
    this.adapter_.removeClass(_foundation.MDCTabIndicatorFoundation.cssClasses.ACTIVE);
  };

  return MDCSlidingTabIndicatorFoundation;
}(_foundation.MDCTabIndicatorFoundation);

exports.MDCSlidingTabIndicatorFoundation = MDCSlidingTabIndicatorFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCSlidingTabIndicatorFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","./foundation":"../node_modules/@material/tab-indicator/foundation.js"}],"../node_modules/@material/tab-indicator/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTabIndicator = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _fadingFoundation = require("./fading-foundation");

var _foundation = require("./foundation");

var _slidingFoundation = require("./sliding-foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabIndicator =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabIndicator, _super);

  function MDCTabIndicator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabIndicator.attachTo = function (root) {
    return new MDCTabIndicator(root);
  };

  MDCTabIndicator.prototype.initialize = function () {
    this.content_ = this.root_.querySelector(_foundation.MDCTabIndicatorFoundation.strings.CONTENT_SELECTOR);
  };

  MDCTabIndicator.prototype.computeContentClientRect = function () {
    return this.foundation_.computeContentClientRect();
  };

  MDCTabIndicator.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      computeContentClientRect: function () {
        return _this.content_.getBoundingClientRect();
      },
      setContentStyleProperty: function (prop, value) {
        return _this.content_.style.setProperty(prop, value);
      }
    }; // tslint:enable:object-literal-sort-keys

    if (this.root_.classList.contains(_foundation.MDCTabIndicatorFoundation.cssClasses.FADE)) {
      return new _fadingFoundation.MDCFadingTabIndicatorFoundation(adapter);
    } // Default to the sliding indicator


    return new _slidingFoundation.MDCSlidingTabIndicatorFoundation(adapter);
  };

  MDCTabIndicator.prototype.activate = function (previousIndicatorClientRect) {
    this.foundation_.activate(previousIndicatorClientRect);
  };

  MDCTabIndicator.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  return MDCTabIndicator;
}(_component.MDCComponent);

exports.MDCTabIndicator = MDCTabIndicator;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","./fading-foundation":"../node_modules/@material/tab-indicator/fading-foundation.js","./foundation":"../node_modules/@material/tab-indicator/foundation.js","./sliding-foundation":"../node_modules/@material/tab-indicator/sliding-foundation.js"}],"../node_modules/@material/tab/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ACTIVE: 'mdc-tab--active'
};
exports.cssClasses = cssClasses;
var strings = {
  ARIA_SELECTED: 'aria-selected',
  CONTENT_SELECTOR: '.mdc-tab__content',
  INTERACTED_EVENT: 'MDCTab:interacted',
  RIPPLE_SELECTOR: '.mdc-tab__ripple',
  TABINDEX: 'tabIndex',
  TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator'
};
exports.strings = strings;
},{}],"../node_modules/@material/tab/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTabFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabFoundation, _super);

  function MDCTabFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCTabFoundation.defaultAdapter, adapter)) || this;

    _this.focusOnActivate_ = true;
    return _this;
  }

  Object.defineProperty(MDCTabFoundation, "cssClasses", {
    get: function () {
      return _constants.cssClasses;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        addClass: function () {
          return undefined;
        },
        removeClass: function () {
          return undefined;
        },
        hasClass: function () {
          return false;
        },
        setAttr: function () {
          return undefined;
        },
        activateIndicator: function () {
          return undefined;
        },
        deactivateIndicator: function () {
          return undefined;
        },
        notifyInteracted: function () {
          return undefined;
        },
        getOffsetLeft: function () {
          return 0;
        },
        getOffsetWidth: function () {
          return 0;
        },
        getContentOffsetLeft: function () {
          return 0;
        },
        getContentOffsetWidth: function () {
          return 0;
        },
        focus: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });

  MDCTabFoundation.prototype.handleClick = function () {
    // It's up to the parent component to keep track of the active Tab and
    // ensure we don't activate a Tab that's already active.
    this.adapter_.notifyInteracted();
  };

  MDCTabFoundation.prototype.isActive = function () {
    return this.adapter_.hasClass(_constants.cssClasses.ACTIVE);
  };
  /**
   * Sets whether the tab should focus itself when activated
   */


  MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
    this.focusOnActivate_ = focusOnActivate;
  };
  /**
   * Activates the Tab
   */


  MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
    this.adapter_.addClass(_constants.cssClasses.ACTIVE);
    this.adapter_.setAttr(_constants.strings.ARIA_SELECTED, 'true');
    this.adapter_.setAttr(_constants.strings.TABINDEX, '0');
    this.adapter_.activateIndicator(previousIndicatorClientRect);

    if (this.focusOnActivate_) {
      this.adapter_.focus();
    }
  };
  /**
   * Deactivates the Tab
   */


  MDCTabFoundation.prototype.deactivate = function () {
    // Early exit
    if (!this.isActive()) {
      return;
    }

    this.adapter_.removeClass(_constants.cssClasses.ACTIVE);
    this.adapter_.setAttr(_constants.strings.ARIA_SELECTED, 'false');
    this.adapter_.setAttr(_constants.strings.TABINDEX, '-1');
    this.adapter_.deactivateIndicator();
  };
  /**
   * Returns the dimensions of the Tab
   */


  MDCTabFoundation.prototype.computeDimensions = function () {
    var rootWidth = this.adapter_.getOffsetWidth();
    var rootLeft = this.adapter_.getOffsetLeft();
    var contentWidth = this.adapter_.getContentOffsetWidth();
    var contentLeft = this.adapter_.getContentOffsetLeft();
    return {
      contentLeft: rootLeft + contentLeft,
      contentRight: rootLeft + contentLeft + contentWidth,
      rootLeft: rootLeft,
      rootRight: rootLeft + rootWidth
    };
  };

  return MDCTabFoundation;
}(_foundation.MDCFoundation);

exports.MDCTabFoundation = MDCTabFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/tab/constants.js"}],"../node_modules/@material/tab/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTab = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _component2 = require("@material/ripple/component");

var _foundation = require("@material/ripple/foundation");

var _component3 = require("@material/tab-indicator/component");

var _foundation2 = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTab =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTab, _super);

  function MDCTab() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTab.attachTo = function (root) {
    return new MDCTab(root);
  };

  MDCTab.prototype.initialize = function (rippleFactory, tabIndicatorFactory) {
    if (rippleFactory === void 0) {
      rippleFactory = function (el, foundation) {
        return new _component2.MDCRipple(el, foundation);
      };
    }

    if (tabIndicatorFactory === void 0) {
      tabIndicatorFactory = function (el) {
        return new _component3.MDCTabIndicator(el);
      };
    }

    this.id = this.root_.id;
    var rippleSurface = this.root_.querySelector(_foundation2.MDCTabFoundation.strings.RIPPLE_SELECTOR);

    var rippleAdapter = tslib_1.__assign({}, _component2.MDCRipple.createAdapter(this), {
      addClass: function (className) {
        return rippleSurface.classList.add(className);
      },
      removeClass: function (className) {
        return rippleSurface.classList.remove(className);
      },
      updateCssVariable: function (varName, value) {
        return rippleSurface.style.setProperty(varName, value);
      }
    });

    var rippleFoundation = new _foundation.MDCRippleFoundation(rippleAdapter);
    this.ripple_ = rippleFactory(this.root_, rippleFoundation);
    var tabIndicatorElement = this.root_.querySelector(_foundation2.MDCTabFoundation.strings.TAB_INDICATOR_SELECTOR);
    this.tabIndicator_ = tabIndicatorFactory(tabIndicatorElement);
    this.content_ = this.root_.querySelector(_foundation2.MDCTabFoundation.strings.CONTENT_SELECTOR);
  };

  MDCTab.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleClick_ = function () {
      return _this.foundation_.handleClick();
    };

    this.listen('click', this.handleClick_);
  };

  MDCTab.prototype.destroy = function () {
    this.unlisten('click', this.handleClick_);
    this.ripple_.destroy();

    _super.prototype.destroy.call(this);
  };

  MDCTab.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      setAttr: function (attr, value) {
        return _this.root_.setAttribute(attr, value);
      },
      addClass: function (className) {
        return _this.root_.classList.add(className);
      },
      removeClass: function (className) {
        return _this.root_.classList.remove(className);
      },
      hasClass: function (className) {
        return _this.root_.classList.contains(className);
      },
      activateIndicator: function (previousIndicatorClientRect) {
        return _this.tabIndicator_.activate(previousIndicatorClientRect);
      },
      deactivateIndicator: function () {
        return _this.tabIndicator_.deactivate();
      },
      notifyInteracted: function () {
        return _this.emit(_foundation2.MDCTabFoundation.strings.INTERACTED_EVENT, {
          tabId: _this.id
        }, true
        /* bubble */
        );
      },
      getOffsetLeft: function () {
        return _this.root_.offsetLeft;
      },
      getOffsetWidth: function () {
        return _this.root_.offsetWidth;
      },
      getContentOffsetLeft: function () {
        return _this.content_.offsetLeft;
      },
      getContentOffsetWidth: function () {
        return _this.content_.offsetWidth;
      },
      focus: function () {
        return _this.root_.focus();
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation2.MDCTabFoundation(adapter);
  };

  Object.defineProperty(MDCTab.prototype, "active", {
    /**
     * Getter for the active state of the tab
     */
    get: function () {
      return this.foundation_.isActive();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTab.prototype, "focusOnActivate", {
    set: function (focusOnActivate) {
      this.foundation_.setFocusOnActivate(focusOnActivate);
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Activates the tab
   */

  MDCTab.prototype.activate = function (computeIndicatorClientRect) {
    this.foundation_.activate(computeIndicatorClientRect);
  };
  /**
   * Deactivates the tab
   */


  MDCTab.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };
  /**
   * Returns the indicator's client rect
   */


  MDCTab.prototype.computeIndicatorClientRect = function () {
    return this.tabIndicator_.computeContentClientRect();
  };

  MDCTab.prototype.computeDimensions = function () {
    return this.foundation_.computeDimensions();
  };
  /**
   * Focuses the tab
   */


  MDCTab.prototype.focus = function () {
    this.root_.focus();
  };

  return MDCTab;
}(_component.MDCComponent);

exports.MDCTab = MDCTab;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/ripple/component":"../node_modules/@material/ripple/component.js","@material/ripple/foundation":"../node_modules/@material/ripple/foundation.js","@material/tab-indicator/component":"../node_modules/@material/tab-indicator/component.js","./foundation":"../node_modules/@material/tab/foundation.js"}],"../node_modules/@material/tab-bar/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.numbers = void 0;

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = {
  ARROW_LEFT_KEY: 'ArrowLeft',
  ARROW_RIGHT_KEY: 'ArrowRight',
  END_KEY: 'End',
  ENTER_KEY: 'Enter',
  HOME_KEY: 'Home',
  SPACE_KEY: 'Space',
  TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
  TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
  TAB_SELECTOR: '.mdc-tab'
};
exports.strings = strings;
var numbers = {
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  ENTER_KEYCODE: 13,
  EXTRA_SCROLL_AMOUNT: 20,
  HOME_KEYCODE: 36,
  SPACE_KEYCODE: 32
};
exports.numbers = numbers;
},{}],"../node_modules/@material/tab-bar/foundation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MDCTabBarFoundation = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _foundation = require("@material/base/foundation");

var _constants = require("./constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACCEPTABLE_KEYS = new Set(); // IE11 has no support for new Set with iterable so we need to initialize this by hand

ACCEPTABLE_KEYS.add(_constants.strings.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.END_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.HOME_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.ENTER_KEY);
ACCEPTABLE_KEYS.add(_constants.strings.SPACE_KEY);
var KEYCODE_MAP = new Map(); // IE11 has no support for new Map with iterable so we need to initialize this by hand

KEYCODE_MAP.set(_constants.numbers.ARROW_LEFT_KEYCODE, _constants.strings.ARROW_LEFT_KEY);
KEYCODE_MAP.set(_constants.numbers.ARROW_RIGHT_KEYCODE, _constants.strings.ARROW_RIGHT_KEY);
KEYCODE_MAP.set(_constants.numbers.END_KEYCODE, _constants.strings.END_KEY);
KEYCODE_MAP.set(_constants.numbers.HOME_KEYCODE, _constants.strings.HOME_KEY);
KEYCODE_MAP.set(_constants.numbers.ENTER_KEYCODE, _constants.strings.ENTER_KEY);
KEYCODE_MAP.set(_constants.numbers.SPACE_KEYCODE, _constants.strings.SPACE_KEY);

var MDCTabBarFoundation =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabBarFoundation, _super);

  function MDCTabBarFoundation(adapter) {
    var _this = _super.call(this, tslib_1.__assign({}, MDCTabBarFoundation.defaultAdapter, adapter)) || this;

    _this.useAutomaticActivation_ = false;
    return _this;
  }

  Object.defineProperty(MDCTabBarFoundation, "strings", {
    get: function () {
      return _constants.strings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabBarFoundation, "numbers", {
    get: function () {
      return _constants.numbers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
    get: function () {
      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
      return {
        scrollTo: function () {
          return undefined;
        },
        incrementScroll: function () {
          return undefined;
        },
        getScrollPosition: function () {
          return 0;
        },
        getScrollContentWidth: function () {
          return 0;
        },
        getOffsetWidth: function () {
          return 0;
        },
        isRTL: function () {
          return false;
        },
        setActiveTab: function () {
          return undefined;
        },
        activateTabAtIndex: function () {
          return undefined;
        },
        deactivateTabAtIndex: function () {
          return undefined;
        },
        focusTabAtIndex: function () {
          return undefined;
        },
        getTabIndicatorClientRectAtIndex: function () {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
          };
        },
        getTabDimensionsAtIndex: function () {
          return {
            rootLeft: 0,
            rootRight: 0,
            contentLeft: 0,
            contentRight: 0
          };
        },
        getPreviousActiveTabIndex: function () {
          return -1;
        },
        getFocusedTabIndex: function () {
          return -1;
        },
        getIndexOfTabById: function () {
          return -1;
        },
        getTabListLength: function () {
          return 0;
        },
        notifyTabActivated: function () {
          return undefined;
        }
      }; // tslint:enable:object-literal-sort-keys
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Switches between automatic and manual activation modes.
   * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
   */

  MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
    this.useAutomaticActivation_ = useAutomaticActivation;
  };

  MDCTabBarFoundation.prototype.activateTab = function (index) {
    var previousActiveIndex = this.adapter_.getPreviousActiveTabIndex();

    if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
      return;
    }

    var previousClientRect;

    if (previousActiveIndex !== -1) {
      this.adapter_.deactivateTabAtIndex(previousActiveIndex);
      previousClientRect = this.adapter_.getTabIndicatorClientRectAtIndex(previousActiveIndex);
    }

    this.adapter_.activateTabAtIndex(index, previousClientRect);
    this.scrollIntoView(index);
    this.adapter_.notifyTabActivated(index);
  };

  MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
    // Get the key from the event
    var key = this.getKeyFromEvent_(evt); // Early exit if the event key isn't one of the keyboard navigation keys

    if (key === undefined) {
      return;
    } // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple


    if (!this.isActivationKey_(key)) {
      evt.preventDefault();
    }

    if (this.useAutomaticActivation_) {
      if (this.isActivationKey_(key)) {
        return;
      }

      var index = this.determineTargetFromKey_(this.adapter_.getPreviousActiveTabIndex(), key);
      this.adapter_.setActiveTab(index);
      this.scrollIntoView(index);
    } else {
      var focusedTabIndex = this.adapter_.getFocusedTabIndex();

      if (this.isActivationKey_(key)) {
        this.adapter_.setActiveTab(focusedTabIndex);
      } else {
        var index = this.determineTargetFromKey_(focusedTabIndex, key);
        this.adapter_.focusTabAtIndex(index);
        this.scrollIntoView(index);
      }
    }
  };
  /**
   * Handles the MDCTab:interacted event
   */


  MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
    this.adapter_.setActiveTab(this.adapter_.getIndexOfTabById(evt.detail.tabId));
  };
  /**
   * Scrolls the tab at the given index into view
   * @param index The tab index to make visible
   */


  MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
    // Early exit if the index is out of range
    if (!this.indexIsInRange_(index)) {
      return;
    } // Always scroll to 0 if scrolling to the 0th index


    if (index === 0) {
      return this.adapter_.scrollTo(0);
    } // Always scroll to the max value if scrolling to the Nth index
    // MDCTabScroller.scrollTo() will never scroll past the max possible value


    if (index === this.adapter_.getTabListLength() - 1) {
      return this.adapter_.scrollTo(this.adapter_.getScrollContentWidth());
    }

    if (this.isRTL_()) {
      return this.scrollIntoViewRTL_(index);
    }

    this.scrollIntoView_(index);
  };
  /**
   * Private method for determining the index of the destination tab based on what key was pressed
   * @param origin The original index from which to determine the destination
   * @param key The name of the key
   */


  MDCTabBarFoundation.prototype.determineTargetFromKey_ = function (origin, key) {
    var isRTL = this.isRTL_();
    var maxIndex = this.adapter_.getTabListLength() - 1;
    var shouldGoToEnd = key === _constants.strings.END_KEY;
    var shouldDecrement = key === _constants.strings.ARROW_LEFT_KEY && !isRTL || key === _constants.strings.ARROW_RIGHT_KEY && isRTL;
    var shouldIncrement = key === _constants.strings.ARROW_RIGHT_KEY && !isRTL || key === _constants.strings.ARROW_LEFT_KEY && isRTL;
    var index = origin;

    if (shouldGoToEnd) {
      index = maxIndex;
    } else if (shouldDecrement) {
      index -= 1;
    } else if (shouldIncrement) {
      index += 1;
    } else {
      index = 0;
    }

    if (index < 0) {
      index = maxIndex;
    } else if (index > maxIndex) {
      index = 0;
    }

    return index;
  };
  /**
   * Calculates the scroll increment that will make the tab at the given index visible
   * @param index The index of the tab
   * @param nextIndex The index of the next tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the Tab Bar
   */


  MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function (index, nextIndex, scrollPosition, barWidth) {
    var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
    var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
    var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
    var leftIncrement = relativeContentRight - _constants.numbers.EXTRA_SCROLL_AMOUNT;
    var rightIncrement = relativeContentLeft + _constants.numbers.EXTRA_SCROLL_AMOUNT;

    if (nextIndex < index) {
      return Math.min(leftIncrement, 0);
    }

    return Math.max(rightIncrement, 0);
  };
  /**
   * Calculates the scroll increment that will make the tab at the given index visible in RTL
   * @param index The index of the tab
   * @param nextIndex The index of the next tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the Tab Bar
   * @param scrollContentWidth The width of the scroll content
   */


  MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
    var nextTabDimensions = this.adapter_.getTabDimensionsAtIndex(nextIndex);
    var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
    var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
    var leftIncrement = relativeContentRight + _constants.numbers.EXTRA_SCROLL_AMOUNT;
    var rightIncrement = relativeContentLeft - _constants.numbers.EXTRA_SCROLL_AMOUNT;

    if (nextIndex > index) {
      return Math.max(leftIncrement, 0);
    }

    return Math.min(rightIncrement, 0);
  };
  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab Bar
   * @param index The index of the tab
   * @param tabDimensions The dimensions of the tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the tab bar
   */


  MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function (index, tabDimensions, scrollPosition, barWidth) {
    /**
     * Tabs are laid out in the Tab Scroller like this:
     *
     *    Scroll Position
     *    +---+
     *    |   |   Bar Width
     *    |   +-----------------------------------+
     *    |   |                                   |
     *    |   V                                   V
     *    |   +-----------------------------------+
     *    V   |             Tab Scroller          |
     *    +------------+--------------+-------------------+
     *    |    Tab     |      Tab     |        Tab        |
     *    +------------+--------------+-------------------+
     *        |                                   |
     *        +-----------------------------------+
     *
     * To determine the next adjacent index, we look at the Tab root left and
     * Tab root right, both relative to the scroll position. If the Tab root
     * left is less than 0, then we know it's out of view to the left. If the
     * Tab root right minus the bar width is greater than 0, we know the Tab is
     * out of view to the right. From there, we either increment or decrement
     * the index.
     */
    var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
    var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
    var relativeRootDelta = relativeRootLeft + relativeRootRight;
    var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
    var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;

    if (leftEdgeIsCloser) {
      return index - 1;
    }

    if (rightEdgeIsCloser) {
      return index + 1;
    }

    return -1;
  };
  /**
   * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
   * @param index The index of the tab
   * @param tabDimensions The dimensions of the tab
   * @param scrollPosition The current scroll position
   * @param barWidth The width of the tab bar
   * @param scrollContentWidth The width of the scroller content
   */


  MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
    var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
    var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
    var rootDelta = rootLeft + rootRight;
    var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
    var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;

    if (leftEdgeIsCloser) {
      return index + 1;
    }

    if (rightEdgeIsCloser) {
      return index - 1;
    }

    return -1;
  };
  /**
   * Returns the key associated with a keydown event
   * @param evt The keydown event
   */


  MDCTabBarFoundation.prototype.getKeyFromEvent_ = function (evt) {
    if (ACCEPTABLE_KEYS.has(evt.key)) {
      return evt.key;
    }

    return KEYCODE_MAP.get(evt.keyCode);
  };

  MDCTabBarFoundation.prototype.isActivationKey_ = function (key) {
    return key === _constants.strings.SPACE_KEY || key === _constants.strings.ENTER_KEY;
  };
  /**
   * Returns whether a given index is inclusively between the ends
   * @param index The index to test
   */


  MDCTabBarFoundation.prototype.indexIsInRange_ = function (index) {
    return index >= 0 && index < this.adapter_.getTabListLength();
  };
  /**
   * Returns the view's RTL property
   */


  MDCTabBarFoundation.prototype.isRTL_ = function () {
    return this.adapter_.isRTL();
  };
  /**
   * Scrolls the tab at the given index into view for left-to-right user agents.
   * @param index The index of the tab to scroll into view
   */


  MDCTabBarFoundation.prototype.scrollIntoView_ = function (index) {
    var scrollPosition = this.adapter_.getScrollPosition();
    var barWidth = this.adapter_.getOffsetWidth();
    var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
    var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);

    if (!this.indexIsInRange_(nextIndex)) {
      return;
    }

    var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
    this.adapter_.incrementScroll(scrollIncrement);
  };
  /**
   * Scrolls the tab at the given index into view in RTL
   * @param index The tab index to make visible
   */


  MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function (index) {
    var scrollPosition = this.adapter_.getScrollPosition();
    var barWidth = this.adapter_.getOffsetWidth();
    var tabDimensions = this.adapter_.getTabDimensionsAtIndex(index);
    var scrollWidth = this.adapter_.getScrollContentWidth();
    var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);

    if (!this.indexIsInRange_(nextIndex)) {
      return;
    }

    var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
    this.adapter_.incrementScroll(scrollIncrement);
  };

  return MDCTabBarFoundation;
}(_foundation.MDCFoundation);

exports.MDCTabBarFoundation = MDCTabBarFoundation;
// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
var _default = MDCTabBarFoundation;
exports.default = _default;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/foundation":"../node_modules/@material/base/foundation.js","./constants":"../node_modules/@material/tab-bar/constants.js"}],"../node_modules/@material/tab-bar/component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTabBar = void 0;

var tslib_1 = _interopRequireWildcard(require("tslib"));

var _component = require("@material/base/component");

var _component2 = require("@material/tab-scroller/component");

var _component3 = require("@material/tab/component");

var _foundation = require("@material/tab/foundation");

var _foundation2 = require("./foundation");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var strings = _foundation2.MDCTabBarFoundation.strings;
var tabIdCounter = 0;

var MDCTabBar =
/** @class */
function (_super) {
  tslib_1.__extends(MDCTabBar, _super);

  function MDCTabBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCTabBar.attachTo = function (root) {
    return new MDCTabBar(root);
  };

  Object.defineProperty(MDCTabBar.prototype, "focusOnActivate", {
    set: function (focusOnActivate) {
      this.tabList_.forEach(function (tab) {
        return tab.focusOnActivate = focusOnActivate;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCTabBar.prototype, "useAutomaticActivation", {
    set: function (useAutomaticActivation) {
      this.foundation_.setUseAutomaticActivation(useAutomaticActivation);
    },
    enumerable: true,
    configurable: true
  });

  MDCTabBar.prototype.initialize = function (tabFactory, tabScrollerFactory) {
    if (tabFactory === void 0) {
      tabFactory = function (el) {
        return new _component3.MDCTab(el);
      };
    }

    if (tabScrollerFactory === void 0) {
      tabScrollerFactory = function (el) {
        return new _component2.MDCTabScroller(el);
      };
    }

    this.tabList_ = this.instantiateTabs_(tabFactory);
    this.tabScroller_ = this.instantiateTabScroller_(tabScrollerFactory);
  };

  MDCTabBar.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleTabInteraction_ = function (evt) {
      return _this.foundation_.handleTabInteraction(evt);
    };

    this.handleKeyDown_ = function (evt) {
      return _this.foundation_.handleKeyDown(evt);
    };

    this.listen(_foundation.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.listen('keydown', this.handleKeyDown_);

    for (var i = 0; i < this.tabList_.length; i++) {
      if (this.tabList_[i].active) {
        this.scrollIntoView(i);
        break;
      }
    }
  };

  MDCTabBar.prototype.destroy = function () {
    _super.prototype.destroy.call(this);

    this.unlisten(_foundation.MDCTabFoundation.strings.INTERACTED_EVENT, this.handleTabInteraction_);
    this.unlisten('keydown', this.handleKeyDown_);
    this.tabList_.forEach(function (tab) {
      return tab.destroy();
    });

    if (this.tabScroller_) {
      this.tabScroller_.destroy();
    }
  };

  MDCTabBar.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      scrollTo: function (scrollX) {
        return _this.tabScroller_.scrollTo(scrollX);
      },
      incrementScroll: function (scrollXIncrement) {
        return _this.tabScroller_.incrementScroll(scrollXIncrement);
      },
      getScrollPosition: function () {
        return _this.tabScroller_.getScrollPosition();
      },
      getScrollContentWidth: function () {
        return _this.tabScroller_.getScrollContentWidth();
      },
      getOffsetWidth: function () {
        return _this.root_.offsetWidth;
      },
      isRTL: function () {
        return window.getComputedStyle(_this.root_).getPropertyValue('direction') === 'rtl';
      },
      setActiveTab: function (index) {
        return _this.foundation_.activateTab(index);
      },
      activateTabAtIndex: function (index, clientRect) {
        return _this.tabList_[index].activate(clientRect);
      },
      deactivateTabAtIndex: function (index) {
        return _this.tabList_[index].deactivate();
      },
      focusTabAtIndex: function (index) {
        return _this.tabList_[index].focus();
      },
      getTabIndicatorClientRectAtIndex: function (index) {
        return _this.tabList_[index].computeIndicatorClientRect();
      },
      getTabDimensionsAtIndex: function (index) {
        return _this.tabList_[index].computeDimensions();
      },
      getPreviousActiveTabIndex: function () {
        for (var i = 0; i < _this.tabList_.length; i++) {
          if (_this.tabList_[i].active) {
            return i;
          }
        }

        return -1;
      },
      getFocusedTabIndex: function () {
        var tabElements = _this.getTabElements_();

        var activeElement = document.activeElement;
        return tabElements.indexOf(activeElement);
      },
      getIndexOfTabById: function (id) {
        for (var i = 0; i < _this.tabList_.length; i++) {
          if (_this.tabList_[i].id === id) {
            return i;
          }
        }

        return -1;
      },
      getTabListLength: function () {
        return _this.tabList_.length;
      },
      notifyTabActivated: function (index) {
        return _this.emit(strings.TAB_ACTIVATED_EVENT, {
          index: index
        }, true);
      }
    }; // tslint:enable:object-literal-sort-keys

    return new _foundation2.MDCTabBarFoundation(adapter);
  };
  /**
   * Activates the tab at the given index
   * @param index The index of the tab
   */


  MDCTabBar.prototype.activateTab = function (index) {
    this.foundation_.activateTab(index);
  };
  /**
   * Scrolls the tab at the given index into view
   * @param index THe index of the tab
   */


  MDCTabBar.prototype.scrollIntoView = function (index) {
    this.foundation_.scrollIntoView(index);
  };
  /**
   * Returns all the tab elements in a nice clean array
   */


  MDCTabBar.prototype.getTabElements_ = function () {
    return [].slice.call(this.root_.querySelectorAll(strings.TAB_SELECTOR));
  };
  /**
   * Instantiates tab components on all child tab elements
   */


  MDCTabBar.prototype.instantiateTabs_ = function (tabFactory) {
    return this.getTabElements_().map(function (el) {
      el.id = el.id || "mdc-tab-" + ++tabIdCounter;
      return tabFactory(el);
    });
  };
  /**
   * Instantiates tab scroller component on the child tab scroller element
   */


  MDCTabBar.prototype.instantiateTabScroller_ = function (tabScrollerFactory) {
    var tabScrollerElement = this.root_.querySelector(strings.TAB_SCROLLER_SELECTOR);

    if (tabScrollerElement) {
      return tabScrollerFactory(tabScrollerElement);
    }

    return null;
  };

  return MDCTabBar;
}(_component.MDCComponent);

exports.MDCTabBar = MDCTabBar;
},{"tslib":"../node_modules/tslib/tslib.es6.js","@material/base/component":"../node_modules/@material/base/component.js","@material/tab-scroller/component":"../node_modules/@material/tab-scroller/component.js","@material/tab/component":"../node_modules/@material/tab/component.js","@material/tab/foundation":"../node_modules/@material/tab/foundation.js","./foundation":"../node_modules/@material/tab-bar/foundation.js"}],"../node_modules/@material/tab-bar/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _component[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _foundation = require("./foundation");

Object.keys(_foundation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _foundation[key];
    }
  });
});
},{"./component":"../node_modules/@material/tab-bar/component.js","./constants":"../node_modules/@material/tab-bar/constants.js","./foundation":"../node_modules/@material/tab-bar/foundation.js"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./index.scss");

require("@fortawesome/fontawesome-free/css/all.css");

var textfield_1 = require("@material/textfield");

var ripple_1 = require("@material/ripple");

var tab_bar_1 = require("@material/tab-bar"); //import MDCAutoInit from '@material/auto-init';
//MDCAutoInit.register('MDCTextField', MDCTextField);
//MDCAutoInit();
// Essentially our 'page has loaded!' event
//document.addEventListener('MDCAutoInit:End', () => {

/** Initialize MDC Web components. */


var greetButtonEl = document.getElementById('container-greet-button');
ripple_1.MDCRipple.attachTo(greetButtonEl);
var fnameTextfield = new textfield_1.MDCTextField(document.getElementById('container-fname-text-field'));
var lnameTextfield = new textfield_1.MDCTextField(document.getElementById('container-lname-text-field'));
/** Custom javascript code. */

var greetMessageEl = document.getElementById('container-greet-message');
greetButtonEl.addEventListener('click', function () {
  var name;

  if (fnameTextfield.value || lnameTextfield.value) {
    name = fnameTextfield.value + ' ' + lnameTextfield.value;
  } else {
    name = 'Anonymous';
  }

  greetMessageEl.textContent = "Hello, " + name + "!";
}); // Instantiate single textfield component rendered in the document

new textfield_1.MDCTextField(document.getElementById('container-my-text-field'));
console.log("Hello, World!");
document.write("Hello, from TypeScript!");
var tabs = [];
var tabBar = new tab_bar_1.MDCTabBar(document.getElementById('container-osTabs')); //})
},{"./index.scss":"index.scss","@fortawesome/fontawesome-free/css/all.css":"../node_modules/@fortawesome/fontawesome-free/css/all.css","@material/textfield":"../node_modules/@material/textfield/index.js","@material/ripple":"../node_modules/@material/ripple/index.js","@material/tab-bar":"../node_modules/@material/tab-bar/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57045" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/src.77de5100.js.map