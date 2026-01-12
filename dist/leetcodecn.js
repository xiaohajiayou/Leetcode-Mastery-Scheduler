/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 150:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.12.0 - Tue May 14 2024 18:01:29 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
    throw new Error("This script should only be loaded in a browser extension.");
  }
  if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };
      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }
        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }
          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };
      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }
          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }
          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };
      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },
          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }
            if (!(prop in target)) {
              return undefined;
            }
            let value = target[prop];
            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });
              return value;
            }
            cache[prop] = value;
            return value;
          },
          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },
          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },
          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },
        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },
        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });
      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */
        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {} /* wrappers */, {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      });
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }
          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }
              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });
      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };
      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }
        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }
        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };
      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ 188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(867);





const getCloudStorageData = async (key) => {
    try {
        const result = await browser.storage.sync.get(key);
        if (result === undefined || result[key] === undefined) {
            throw new Error(key);
        }
        return result[key];
    } catch (error) {
        console.log(`get sync storage data failed for key = ${key}`);
    }
}

const setCloudStorageData = async (key, val) => {

    console.log("set to cloud");
    console.log([key, val]);

    try {
        await browser.storage.sync.set({ [key]: val });
    } catch (error) {
        console.log(error);
    }
}

const batchSetCloudStorageDate = async (object) => {
    try {
        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.storage.sync.set(object);
    } catch (error) {
        console.log(error);
    }
}

const batchGetCloudStorageDate = async (keyArr) => {
    try {
        const result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.storage.sync.get(keyArr);
        if (result === undefined) {
            throw new Error(keyArr);
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

/**
 * sharding
 */

const shardCount = 20;

const hashKeyToShardIdx = (key) => {
    const hash = (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__/* .simpleStringHash */ .zJ)(key);
    const shardIndex = (hash % shardCount + shardCount) % shardCount;
    return shardIndex;
}

const isJsonObj = (obj) => {
    return Object.getPrototypeOf(obj) === Object.prototype;
}

const shardedSetCloudStorageData = async (key, val) => {
    // val should be a JSON object
    if (!isJsonObj(val)) {
        throw "shardedSet only supports JSON type val";
    }
    const shardedVal = {};
    const objectKeys = Object.keys(val);
    Array.prototype.forEach.call(objectKeys, (objKey) => {
        const shardedIdx = hashKeyToShardIdx(objKey);
        const shardedKey = `${key}#${shardedIdx}`;
        if (!(shardedKey in shardedVal)) {
            shardedVal[shardedKey] = {};
        }
        shardedVal[shardedKey][objKey] = val[objKey];
    })
    
    console.log("set shareded data to cloud:");
    console.log(shardedVal);

    await batchSetCloudStorageDate(shardedVal);
}

const shardedGetCloudStorageData = async (key) => {
    const shardedKeyArr = [];
    for (let i = 0; i < shardCount; i++) {
        shardedKeyArr.push(`${key}#${i}`);
    }

    const vals = await batchGetCloudStorageDate(shardedKeyArr);    
    const res = {};

    if (vals === undefined) return res;
    for (const shardKey in vals) {
        Object.assign(res, vals[shardKey]);
    } 
    console.log(`get ${key} sharded from cloud`)
    console.log(res);
    return res;
}

class CloudStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_2__/* .StorageDelegate */ .i {
    constructor(){
        super();
        this.get = shardedGetCloudStorageData;
        this.set = shardedSetCloudStorageData;
    }
}

const cloudStorageDelegate = new CloudStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudStorageDelegate);

/***/ }),

/***/ 891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cy: () => (/* binding */ getLocalStorageData),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   qy: () => (/* binding */ setLocalStorageData)
/* harmony export */ });
/* harmony import */ var _storageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(648);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(867);



const getLocalStorageData = async (key) => {
    try {
        const result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get(key);
        if (result === undefined || result[key] === undefined) {
            throw new Error(key);
        }
        return result[key];
    } catch (error) {
        console.log(`get local storage data failed for key = ${key}`);
    }
}

const setLocalStorageData = async (key, val) => {
    try {
        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({ [key]: val });
    } catch (error) {
        console.log(error);
    }
}

class LocalStorageDelegate extends _storageDelegate__WEBPACK_IMPORTED_MODULE_1__/* .StorageDelegate */ .i {
    constructor(){
        super();
        this.get = getLocalStorageData;
        this.set = setLocalStorageData;
    }
}

const localStorageDelegate = new LocalStorageDelegate();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageDelegate);

/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ StorageDelegate)
/* harmony export */ });
class StorageDelegate {
    constructor(){
        this.get = async (key) => null;
        this.set = async (key, val) => {};
    }
}



/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports OperationHistory, OPS_TYPE */
class OperationHistory {
    constructor(before, isInCnMode, type, time) {
        this.before = before;
        this.isInCnMode = isInCnMode;
        this.type = type;
        this.time = time;
    }
}

const OPS_TYPE = Object.freeze({
    MASTER: "mark as mastered",
    RESET: "reset progress",
    DELETE: "delete record"
});

/***/ }),

/***/ 875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tc: () => (/* binding */ Problem)
/* harmony export */ });
/* unused harmony exports getDeletedProblem, copy */
class Problem {
    constructor(index, name, level, url, submissionTime, proficiency, modificationTime) {
        this.index = index;
        this.name = name;
        this.level = level;
        this.url = url;
        this.submissionTime = submissionTime;
        this.proficiency = proficiency;
        this.modificationTime = modificationTime;
        this.isDeleted = false;

        // 更新 FSRS 状态结构
        this.fsrsState = {
            difficulty: null,        // 用户反馈的难度 (1-5)
            quality: null,           // 答题质量 (1-5)
            lastReview: null,        // 上次复习时间
            nextReview: null,        // 下次复习时间
            reviewCount: 0,          // 复习次数
            stability: 0,            // 记忆稳定性
            state: 'New',           // FSRS 状态
            lapses: 0               // 遗忘次数
        };
    }
};

const getDeletedProblem = (problemId) => {
    const deletedProblem = new Problem(problemId, '', '', '', 0, 0, Date.now());
    deletedProblem.isDeleted = true;
    return deletedProblem;
}

const copy = (p) => {
    const newProblem = new Problem(
        p.index, 
        p.name, 
        p.level, 
        p.url, 
        p.submissionTime, 
        p.proficiency, 
        p.modificationTime
    );
    
    // 复制 isDeleted 状态
    newProblem.isDeleted = p.isDeleted;
    
    // 深拷贝 fsrsState 对象
    // 深拷贝 fsrsState 对象，兼容旧版本
    newProblem.fsrsState = {
        difficulty: p.fsrsState ? p.fsrsState.difficulty : null,
        quality: p.fsrsState ? p.fsrsState.quality : null,
        lastReview: p.fsrsState ? p.fsrsState.lastReview : null,
        nextReview: p.fsrsState ? p.fsrsState.nextReview : null,
        reviewCount: p.fsrsState ? p.fsrsState.reviewCount : 0,
        stability: p.fsrsState ? p.fsrsState.stability : 0,
        state: p.fsrsState ? p.fsrsState.state : 'New',
        lapses: p.fsrsState ? p.fsrsState.lapses : 0
    };
    
    return newProblem;
}

/***/ }),

/***/ 597:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _service_configService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(970);
/* harmony import */ var _submission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(853);



console.log(`Hello Leetcode-Mastery-Scheduler!`);

await (0,_service_configService__WEBPACK_IMPORTED_MODULE_0__/* .loadConfigs */ .O1)();



document.addEventListener('DOMContentLoaded', _submission__WEBPACK_IMPORTED_MODULE_1__/* .addRecordButton */ .EB);

// 检查并确保按钮存在
const ensureButton = () => {
    // 如果按钮不存在，添加按钮
    if (!document.querySelector('.Leetcode-Mastery-Scheduler-record-btn')) {
        (0,_submission__WEBPACK_IMPORTED_MODULE_1__/* .addRecordButton */ .EB)();
    }
};

// 创建观察器实例
const observer = new MutationObserver(() => {
    // 每次 DOM 变化时检查按钮
    ensureButton();
});

// 开始观察
const startObserving = () => {
    if (document.body) {
        observer.observe(document.body, {
            childList: true,  // 观察子节点变化
            subtree: true     // 观察所有后代节点
        });
        // 初始检查
        ensureButton();
    } else {
        // 如果 body 还不存在，等待后重试
        setTimeout(startObserving, 100);
    }
};

// 启动观察
startObserving();

// 在页面卸载时停止观察
window.addEventListener('unload', () => {
    observer.disconnect();
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EB: () => (/* binding */ addRecordButton)
/* harmony export */ });
/* unused harmony exports handleFeedbackSubmission, handleAddProblem, handleAddBlankProblem */
/* harmony import */ var _util_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _service_problemService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(820);
/* harmony import */ var _entity_problem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(875);
/* harmony import */ var _service_fsrsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(990);










const addRecordButton = () => {
    // 添加按钮样式
    const style = document.createElement('style');
    style.textContent = `
        .Leetcode-Mastery-Scheduler-record-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 8px 12px;  /* 减小内边距 */
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 6px;  /* 稍微减小圆角 */
            cursor: pointer;
            font-size: 13px;  /* 减小字体大小 */
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
            transition: background 0.2s ease, box-shadow 0.2s ease;
            z-index: 9999;
            user-select: none;
            display: flex;
            align-items: center;
            line-height: 1;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn:hover {
            box-shadow: 0 3px 10px rgba(37, 99, 235, 0.3);
        }
        
        .Leetcode-Mastery-Scheduler-record-btn.dragging {
            opacity: 0.8;
            cursor: grabbing;
            transition: none;
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .drag-handle {
            display: inline-block;
            margin-right: 6px;  /* 减小间距 */
            cursor: grab;
            opacity: 0.7;
            font-size: 12px;  /* 减小拖动手柄大小 */
        }
        
        .Leetcode-Mastery-Scheduler-record-btn .drag-handle:hover {
            opacity: 1;
        }
        
        /* reset-position removed */

        .Leetcode-Mastery-Scheduler-record-btn .separator {
            margin: 0 6px;
            opacity: 0.6;
            user-select: none;
        }

        .Leetcode-Mastery-Scheduler-record-btn .add-today {
            margin-left: 4px;
            opacity: 0.95;
            cursor: pointer;
            font-size: 12px;
            font-weight: 700;
            padding: 2px 6px;
            border-radius: 6px;
            border: 1px solid rgba(255,255,255,0.35);
            background: rgba(255,255,255,0.12);
        }
        .Leetcode-Mastery-Scheduler-record-btn .add-today:hover {
            background: rgba(255,255,255,0.22);
            border-color: rgba(255,255,255,0.55);
        }

        .Leetcode-Mastery-Scheduler-record-btn .star-icon {
            margin-right: 4px;
            font-size: 11px;
        }
    `;
    document.head.appendChild(style);

    // 从localStorage获取保存的位置
    const savedPosition = JSON.parse(localStorage.getItem('LMS_rateButtonPosition') || '{"bottom": 20, "right": 20}');
    
    // 创建按钮
    const button = document.createElement('button');
    button.className = 'Leetcode-Mastery-Scheduler-record-btn';
    button.innerHTML = `
        <span class="drag-handle">⋮</span>
        <i class="fas fa-star star-icon"></i>Rate
        <span class="separator">|</span>
        <span class="add-today" title="加入待复习题目队列 | Add to review queue">＋</span>
    `;
    
    // 设置保存的位置
    button.style.bottom = `${savedPosition.bottom}px`;
    button.style.right = `${savedPosition.right}px`;
    
    // 添加点击事件
    button.addEventListener('click', async (e) => {
        // 如果点击的是拖动手柄、分隔符或“加入今日”，不触发评分
        const t = e.target;
        if (t && t.classList && (t.classList.contains('drag-handle') ||
            t.classList.contains('separator') ||
            t.classList.contains('add-today'))) {
            return;
        }
        
        const result = await handleFeedbackSubmission();
        if (result) {
            console.log("Submission successfully tracked!");
            console.log("难度记录成功！");
        }
    });
    
    // reset button removed

    // 加入今日待复习（不触发评分）
    const addTodayBtn = button.querySelector('.add-today');
    if (addTodayBtn) {
        addTodayBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            try {
                const result = await handleAddProblem(window.location.href);
                if (result) {
                    showToast('已加入待复习题目队列\nAdded to review queue.', 'success');
                }
            } catch (error) {
                if (error?.message && error.message.includes('Duplicate')) {
                    showToast('题目已存在，未进行改动\nAlready exists. No changes made.', 'warning');
                } else {
                    showToast(`加入失败：${error?.message || 'Unknown error'}`, 'error');
                }
            }
        });
    }
    
    // 添加拖拽功能
    let isDragging = false;
    let startX, startY, startBottom, startRight;
    
    const dragHandle = button.querySelector('.drag-handle');
    
    // 鼠标按下事件
    const onMouseDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        isDragging = true;
        button.classList.add('dragging');
        
        // 记录初始位置
        startX = e.clientX;
        startY = e.clientY;
        startBottom = parseInt(getComputedStyle(button).bottom);
        startRight = parseInt(getComputedStyle(button).right);
        
        // 添加鼠标移动和松开事件
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    
    // 鼠标移动事件
    const onMouseMove = (e) => {
        if (!isDragging) return;
        
        // 计算新位置
        const deltaX = startX - e.clientX;
        const deltaY = e.clientY - startY;  // 修正垂直方向
        
        const newRight = Math.max(10, startRight + deltaX);
        const newBottom = Math.max(10, startBottom - deltaY);
        
        // 确保按钮不会超出屏幕
        const maxRight = window.innerWidth - button.offsetWidth - 10;
        const maxBottom = window.innerHeight - button.offsetHeight - 10;
        
        button.style.right = `${Math.min(newRight, maxRight)}px`;
        button.style.bottom = `${Math.min(newBottom, maxBottom)}px`;
    };
    
    // 鼠标松开事件
    const onMouseUp = () => {
        if (!isDragging) return;
        
        isDragging = false;
        button.classList.remove('dragging');
        
        // 保存新位置到localStorage
        localStorage.setItem('LMS_rateButtonPosition', JSON.stringify({
            bottom: parseInt(button.style.bottom),
            right: parseInt(button.style.right)
        }));
        
        // 移除事件监听器
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };
    
    // 添加事件监听器
    dragHandle.addEventListener('mousedown', onMouseDown);
    
    // 添加到页面
    document.body.appendChild(button);

    // 添加窗口大小变化监听器
    window.addEventListener('resize', () => {
        const buttonRect = button.getBoundingClientRect();
        const maxRight = window.innerWidth - button.offsetWidth - 10;
        const maxBottom = window.innerHeight - button.offsetHeight - 10;
        
        // 如果按钮超出可视区域，调整位置
        if (parseInt(button.style.right) > maxRight) {
            button.style.right = `${maxRight}px`;
        }
        if (parseInt(button.style.bottom) > maxBottom) {
            button.style.bottom = `${maxBottom}px`;
        }
        
        // 保存调整后的位置
        localStorage.setItem('LMS_rateButtonPosition', JSON.stringify({
            bottom: parseInt(button.style.bottom),
            right: parseInt(button.style.right)
        }));
    });
};


// 抽取成通用的处理函数
async function handleFeedbackSubmission(problem = null, fromPopup = false) {
    try {
        // 记录是否为页面提交（在 LeetCode 页面上点击 Rate 按钮）
        // 只有当没有传入 problem 且不是从 popup 调用时，才是页面提交
        const isPageSubmission = !problem && !fromPopup;
        
        // 显示难度反馈弹窗
        const feedback = await showDifficultyFeedbackDialog().catch(error => {
            console.log(error);  // "用户取消评分"
            return null;  // 返回 null 表示用户取消
        });

        // 如果用户取消，直接返回
        if (!feedback) {
            return null;
        }

        // 如果没有传入 problem，说明是页面提交，需要获取题目信息
        if (!problem) {
            await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .syncProblems */ .xd)();   // 同步云端数据
            const { problemIndex, problemName, problemLevel, problemUrl } = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentProblemInfoFromLeetCodeByHref */ .cp)();
            const problems = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
            problem = problems[problemIndex];
            
            // 如果是新题目，创建新的 problem 对象
            if (!problem || problem.isDeleted == true) {
                problem = new _entity_problem__WEBPACK_IMPORTED_MODULE_3__/* .Problem */ .tc(problemIndex, problemName, problemLevel, problemUrl, Date.now(), (0,_util_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDifficultyBasedSteps */ .tL)(problemLevel)[0], Date.now());
                // 新题目标记，跳过今日复习检查
                problem.isNewProblem = true;
            }
        }
        
        // 检查上次复习时间是否是今天，如果是则不允许再次复习（新题目跳过此检查）
        if (!problem.isNewProblem && problem.fsrsState && problem.fsrsState.lastReview) {
            const lastReviewDate = new Date(problem.fsrsState.lastReview);
            const today = new Date();
            
            // 比较年、月、日是否相同（考虑时区影响）
            if (lastReviewDate.getFullYear() === today.getFullYear() &&
                lastReviewDate.getMonth() === today.getMonth() &&
                lastReviewDate.getDate() === today.getDate()) {
                
                // 显示双语警告提示
                showToast("今天已经复习过这道题了，请明天再来！\nYou've already reviewed this problem today. Please come back tomorrow!", "warning");
                return null;
            }
        }
        
        // 清除新题目标记
        delete problem.isNewProblem;
        
        problem = await (0,_service_fsrsService__WEBPACK_IMPORTED_MODULE_2__/* .updateProblemWithFSRS */ .Gq)(problem, feedback);
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .createOrUpdateProblem */ .qu)(problem);

        // 只有在页面提交时才显示成功提示
        if (isPageSubmission) {
            // 计算下次复习时间与今天的天数差
            const nextReviewDate = new Date(problem.fsrsState.nextReview);
            const today = new Date();
            const diffTime = nextReviewDate.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // 显示复习成功提示，包含下次复习时间
            showToast(`复习成功！下次复习时间：${nextReviewDate.toLocaleDateString()}（${diffDays}天后）\nReview successful! Next review: ${nextReviewDate.toLocaleDateString()} (in ${diffDays} days)`, "success");
        }

        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .syncProblems */ .xd)(); // 同步到云端
        console.log("提交成功！");
        return problem;
    } catch (error) {
        console.error("提交时出错：", error);
        return null;
    }
}

// 添加一个更醒目的提示框函数，支持不同类型的提示
function showToast(message, type = "info", duration = 4000) {
    // 检查是否已存在toast样式
    if (!document.getElementById('lms-toast-style')) {
        const style = document.createElement('style');
        style.id = 'lms-toast-style';
        style.textContent = `
            .lms-toast {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 12px 24px;
                border-radius: 4px;
                z-index: 10000;
                font-size: 14px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                animation: lms-toast-in 0.3s ease;
                max-width: 80%;
                text-align: center;
                white-space: pre-line;
                font-weight: 500;
            }
            
            .lms-toast-info {
                background-color: #1890ff;
                color: white;
                border-left: 4px solid #096dd9;
            }
            
            .lms-toast-success {
                background-color: #52c41a;
                color: white;
                border-left: 4px solid #389e0d;
            }
            
            .lms-toast-warning {
                background-color: #ffd666;
                color: #874d00;
                border-left: 4px solid #faad14;
                font-weight: bold;
            }
            
            .lms-toast-error {
                background-color: #ff4d4f;
                color: white;
                border-left: 4px solid #cf1322;
                font-weight: bold;
            }
            
            @keyframes lms-toast-in {
                from {
                    opacity: 0;
                    transform: translate(-50%, -20px);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, 0);
                }
            }
            
            .lms-toast-icon {
                margin-right: 8px;
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
    }
    
    // 移除可能存在的旧提示
    const existingToast = document.querySelector('.lms-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `lms-toast lms-toast-${type}`;
    
    // 添加图标
    let icon = '';
    switch(type) {
        case 'info': icon = 'ℹ️'; break;
        case 'success': icon = '✅'; break;
        case 'warning': icon = '⚠️'; break;
        case 'error': icon = '❌'; break;
    }
    
    toast.innerHTML = `<span class="lms-toast-icon">${icon}</span>${message}`;
    document.body.appendChild(toast);
    
    // 添加点击关闭功能
    toast.addEventListener('click', () => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    });
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// 6. 显示评分对话框
const showDifficultyFeedbackDialog = () => {
    return new Promise((resolve) => {
        addDialogStyles();

        const overlay = document.createElement('div');
        overlay.className = 'fsrs-modal-overlay';

        const dialog = document.createElement('div');
        dialog.className = 'feedback-dialog';
        dialog.innerHTML = `
            <button class="close-button">&times;</button>
            <h3>How difficult was this problem for you?</h3>
            <div class="quality-buttons">
                <button data-quality="1">Very Hard</button>
                <button data-quality="2">Hard</button>
                <button data-quality="3">Medium</button>
                <button data-quality="4">Easy</button>
            </div>
        `;
        // 点击遮罩层关闭
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
                resolve(null);
            }
        });

        // 单独设置关闭按钮的事件
        const closeButton = dialog.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            overlay.remove();
            resolve(null);
        });

        // 只为难度按钮设置事件
        dialog.querySelectorAll('.quality-buttons button').forEach(button => {
            button.addEventListener('click', () => {
                const quality = parseInt(button.dataset.quality);
                resolve({ quality });
                overlay.remove();
            });
        });

        

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    });
};

// 7. 添加样式
const addDialogStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        .fsrs-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            backdrop-filter: blur(2px);
        }

        .feedback-dialog {
            background: #ffffff;
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            min-width: 320px;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .close-button {
            float: right;           /* 使用浮动靠右 */
            margin: -12px -12px 0 0;  /* 调整位置，抵消父元素的 padding */
            background: none;
            border: none;
            font-size: 24px;
            color: #666;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s;
        }

        .close-button:hover {
            background: #f3f4f6;
            color: #1f2937;
        }

        .feedback-dialog h3 {
            color: #2c3e50;
            font-size: 18px;
            margin: 0 0 20px 0;  /* 添加底部间距 */
            text-align: center;
            font-weight: 600;
            clear: both;           /* 清除浮动 */
        }

        .quality-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .quality-buttons button {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            background: #f8f9fa;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 15px;
            color: #495057;
            border: 1px solid #e9ecef;
        }

        .quality-buttons button:hover {
            background: #2563eb;
            color: white;
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
        }

        .quality-buttons button:nth-child(1) { border-left: 4px solid #dc2626; }
        .quality-buttons button:nth-child(2) { border-left: 4px solid #ea580c; }
        .quality-buttons button:nth-child(3) { border-left: 4px solid #16a34a; }
        .quality-buttons button:nth-child(4) { border-left: 4px solid #2563eb; }

        .quality-buttons button:nth-child(1):hover { background: #dc2626; }
        .quality-buttons button:nth-child(2):hover { background: #ea580c; }
        .quality-buttons button:nth-child(3):hover { background: #16a34a; }
        .quality-buttons button:nth-child(4):hover { background: #2563eb; }
    `;
    document.head.appendChild(style);
};






// 处理新建题目 - 设置为今天待复习
async function handleAddProblem(url) {
    try {
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .syncProblems */ .xd)();  // 同步云端数据
        const problems = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
        
        // 使用新的API获取题目信息
        const problemInfo = await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentProblemInfoFromLeetCodeByUrl */ .Oo)(url);
        
        const { problemIndex, problemName, problemLevel, problemUrl } = problemInfo;
        
        // 检查是否已存在
        if (problems[problemIndex] && !problems[problemIndex].isDeleted) {
            throw new Error('Duplicate problem name exists.');
        }
        
        const now = Date.now();
        // 创建新问题
        const problem = new _entity_problem__WEBPACK_IMPORTED_MODULE_3__/* .Problem */ .tc(
            problemIndex,
            problemName,
            problemLevel,
            problemUrl,
            now,    // createTime
            0,      // nextStep
            null    // lastReviewTime
        );
        
        // 设置初始状态
        problem.proficiency = 0;
        problem.isDeleted = false;
        problem.modificationTime = now;
        
        // 设置初始 FSRS 状态 - 设置 nextReview 为今天
        problem.fsrsState = {
            difficulty: null,
            stability: null,
            state: 'New',
            lastReview: null,
            nextReview: now,    // 设置为当前时间，使其显示在今天的待复习列表中
            reviewCount: 0,
            lapses: 0,
            quality: null
        };
        
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .createOrUpdateProblem */ .qu)(problem);
        await (0,_service_problemService__WEBPACK_IMPORTED_MODULE_1__/* .syncProblems */ .xd)();
        
        return problem;
    } catch (error) {
        console.error('Failed to add card:', error);
        throw error;
    }
}

// 处理添加空白卡片
async function handleAddBlankProblem(name, level, customUrl = '') {
    try {
        await syncProblems();  // 同步云端数据
        const problems = await getAllProblems();
        
        // 获取当前自定义题目的数量，用于生成递增的索引
        const customProblems = Object.values(problems).filter(p => 
            p.index && p.index.startsWith('custom_') && !p.isDeleted);
        const customCount = customProblems.length + 1;
        
        // 生成有规律的索引: custom_年月日_序号
        const today = new Date();
        const dateStr = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
        const customIndex = `custom_${dateStr}_${String(customCount).padStart(3, '0')}`;
        
        // 检查名称是否已存在
        const existingProblem = Object.values(problems).find(p => 
            p.name === name && !p.isDeleted);
        
        if (existingProblem) {
            throw new Error('Duplicate problem name exists.');
        }
        
        const now = Date.now();
        // 创建新问题，在名称前添加索引前缀
        const formattedName = `Ext-${customCount}. ${name}`;
        
        const problem = new Problem(
            customIndex,
            formattedName,  // 名称前添加索引前缀
            level,
            customUrl,
            now,    // createTime
            0,      // nextStep
            null    // lastReviewTime
        );
        
        // 设置初始状态
        problem.proficiency = 0;
        problem.isDeleted = false;
        problem.modificationTime = now;
        problem.isCustom = true;  // 标记为自定义题目
        
        // 设置初始 FSRS 状态 - 设置 nextReview 为今天
        problem.fsrsState = {
            difficulty: null,
            stability: null,
            state: 'New',
            lastReview: null,
            nextReview: now,    // 设置为当前时间，使其显示在今天的待复习列表中
            reviewCount: 0,
            lapses: 0,
            quality: null
        };
        
        await createOrUpdateProblem(problem);
        await syncProblems();
        
        return problem;
    } catch (error) {
        console.error('Failed to add blank card:', error);
        throw error;
    }
}


/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O1: () => (/* binding */ loadConfigs)
/* harmony export */ });
/* unused harmony exports getReviewIntervals, setReviewIntervals, loadReviewIntervals, getProblemSorter, setProblemSorter, loadProblemSorter, isCloudSyncEnabled, switchCloudSyncEnabled, setCloudSyncEnabled, loadCloudSyncConfig, getDefaultCardLimit, setDefaultCardLimit, loadDefaultCardLimit, setReminderEnabled, isReminderEnabled, loadReminderConfig */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(214);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(134);
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(867);






// configurable review intervals (to be integrated)

const getReviewIntervals = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .REVIEW_INTV_KEY */ .FB);
}

const setReviewIntervals = async (customIntv) => {
    if (customIntv == null || customIntv == undefined) return;
    const {easyIntv, mediumIntv, hardIntv} = store;
    customIntv.easyIntv = customIntv.easyIntv || easyIntv;
    customIntv.mediumIntv = customIntv.mediumIntv || mediumIntv;
    customIntv.hardIntv = customIntv.hardIntv || hardIntv;
    await setLocalStorageData(REVIEW_INTV_KEY, customIntv);
}

const loadReviewIntervals = async () => {
    const customIntv = await getReviewIntervals();
    if (customIntv !== undefined) {
        Object.assign(_store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h, customIntv);
    }
}


// configurable problem sort by
const getProblemSorter = async () => {
    return await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .PROBLEM_SORT_BY_KEY */ .ql);
}

const setProblemSorter = async (sorterId) => {
    await setLocalStorageData(PROBLEM_SORT_BY_KEY, sorterId);
}

const loadProblemSorter = async () => {
    const sorterId = await getProblemSorter() | (0,_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .idOf */ .jD)(_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .problemSorters */ .SL.sortByReviewTimeAsc);
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.problemSortBy = (0,_util_sort__WEBPACK_IMPORTED_MODULE_2__/* .getSorterById */ .HF)(sorterId);
}



// config cloud sync
const isCloudSyncEnabled = async () => {
    const configs = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .CONFIG_KEY */ .fR);
    const isEnabled = configs !== undefined ? configs[_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .CONFIG_INNER_KEY_ENABLE_CLOUD */ .$z] : false;
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    return isEnabled;
}

const switchCloudSyncEnabled = async () => {
    const configs = await getLocalStorageData(CONFIG_KEY);
    const isEnabled = configs[CONFIG_INNER_KEY_ENABLE_CLOUD];
    if (isEnabled === undefined) {
        isEnabled = false;
    }
    configs[CONFIG_INNER_KEY_ENABLE_CLOUD] = !isEnabled;
    await setLocalStorageData(CONFIG_KEY, configs);
}

const setCloudSyncEnabled = async (isEnabled) => {
    const configs = await getLocalStorageData(CONFIG_KEY) || {
        CONFIG_INNER_KEY_ENABLE_CLOUD: false
    };
    configs[CONFIG_INNER_KEY_ENABLE_CLOUD] = isEnabled;
    await setLocalStorageData(CONFIG_KEY, configs);
}


const loadCloudSyncConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.isCloudSyncEnabled = await isCloudSyncEnabled();
}

// 获取默认卡片数量
const getDefaultCardLimit = async () => {
    const limit = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_CARD_LIMIT_KEY */ .hr);
    return limit !== undefined ? limit : _util_keys__WEBPACK_IMPORTED_MODULE_4__/* .DEFAULT_CARD_LIMIT_VALUE */ .pD;
}

// 设置默认卡片数量
const setDefaultCardLimit = async (limit) => {
    if (limit == null || limit == undefined) return;
    await setLocalStorageData(DEFAULT_CARD_LIMIT_KEY, limit);
}

// 加载默认卡片数量到 store
const loadDefaultCardLimit = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.defaultCardLimit = await getDefaultCardLimit();
}

// 添加新的配置项和方法
async function setReminderEnabled(enabled) {
    await browser.storage.local.set({ reminderEnabled: enabled });
}

async function isReminderEnabled() {
    const { reminderEnabled } = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.storage.local.get('reminderEnabled');
    return reminderEnabled || false;
}
// 添加加载提醒设置到 store 的函数
const loadReminderConfig = async () => {
    _store__WEBPACK_IMPORTED_MODULE_1__/* .store */ .h.isReminderEnabled = await isReminderEnabled();
}

// 更新 loadConfigs 函数
const loadConfigs = async () => {
    await loadReviewIntervals();
    await loadProblemSorter();
    await loadCloudSyncConfig();
    await loadDefaultCardLimit();
    await loadReminderConfig();  // 添加这一行
}

/***/ }),

/***/ 990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gq: () => (/* binding */ updateProblemWithFSRS)
/* harmony export */ });
/* unused harmony exports getFSRSInstance, updateFSRSInstance, calculateNextReview, getRevlogCount, optimizeParameters, syncFSRSHistory, syncFSRSParams, syncRevlogs */
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(878);
/* harmony import */ var _util_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(384);
/* harmony import */ var _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(214);










// 创建FSRS实例
let fsrsInstance = null;

// 获取FSRS实例
const getFSRSInstance = async () => {
    if (fsrsInstance) {
        return fsrsInstance;
    }
    
    // 获取本地参数
    const localParams = await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .getFSRSParams */ .JF)();
    
    // 创建新的FSRS实例
    fsrsInstance = new ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .FSRS */ .Ke(localParams);
    console.log('创建新的FSRS实例，参数:', localParams);
    
    return fsrsInstance;
};

// 更新FSRS实例
const updateFSRSInstance = async (newParams) => {
    // 创建新的FSRS实例
    fsrsInstance = new FSRS(newParams);
    console.log('更新FSRS实例，新参数:', newParams);
    
    return fsrsInstance;
};

// 计算下次复习时间
const calculateNextReview = async (problem, feedback) => {
    try {
        const now = new Date();
        
        // 确保有一个有效的 lastReview 日期
        let lastReview;
        if (problem.fsrsState && problem.fsrsState.lastReview) {
            lastReview = new Date(problem.fsrsState.lastReview);
        } else if (problem.submissionTime) {
            lastReview = new Date(problem.submissionTime);
        } else {
            lastReview = new Date(now.getTime()); // 默认为昨天
        }
        
        // 检查日期是否有效
        if (isNaN(lastReview.getTime())) {
            lastReview = new Date(now.getTime()); // 如果无效，使用昨天
        }

        // 如果没有 fsrsState，创建一个默认的
        if (!problem.fsrsState) {
            problem.fsrsState = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .createEmptyCard */ .tl)(lastReview, (card) => {
                return {
                    nextReview: +card.due,
                    stability: card.stability,
                    difficulty: card.difficulty,
                    state: card.state,
                    reviewCount: card.reps,
                    lapses: card.lapses,
                    lastReview: +lastReview  // 存储为时间戳
                }
            });
        }
        let card = problem.fsrsState;
        
        // 确保 nextReview 有效
        if (!card.nextReview || isNaN(card.nextReview)) {
            card.nextReview = +lastReview; // 默认为一天后
        }

        const rating = (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .qualityToRating */ .uY)(feedback.quality);
        
        // 确保所有参数都有有效值
        const scheduledDays = Math.max(0, Math.floor((card.nextReview - card.lastReview) / (1000 * 60 * 60 * 24)));
        const elapsedDays = Math.max(0, (now.getTime() - lastReview.getTime()) / (1000 * 60 * 60 * 24));
        
        // 获取FSRS实例
        const fsrs = await getFSRSInstance();
        
        const result = fsrs.next({
            due: card.nextReview,
            stability: card.stability,
            difficulty: card.difficulty,
            elapsed_days: elapsedDays,
            scheduled_days: scheduledDays,
            reps: card.reviewCount,
            lapse_count: card.lapses,
            state: card.state,
            last_review: lastReview,  // 使用已经转换好的 Date 对象
        }, now, rating);

        return {
            /**长期调度模式，ivl一定大于1d */
            nextReview: +result.card.due,
            stability: result.card.stability,
            difficulty: result.card.difficulty,
            state: result.card.state,
            reviewCount: result.card.reps,
            lapses: result.card.lapses
        };
    } catch (error) {
        console.error('Error in calculateNextReview:', error);
        const now = new Date(); // 在 catch 块中定义 now 变量
        return {
            nextReview: now.getTime() + (24 * 60 * 60 * 1000),
            stability: problem.fsrsState.stability || ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .S_MIN */ .sH,
            /** ref: https://github.com/open-spaced-repetition/ts-fsrs/blob/5eabd189d4740027ce1018cc968e67ca46c048a3/src/fsrs/default.ts#L20-L40 */
            difficulty: problem.fsrsState.difficulty || _util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultParams */ .Tb.w[4],
            /** 长期调度下状态一定是New或Review */
            state: problem.fsrsState.state || ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM.Review,
            reviewCount: (problem.fsrsState.reviewCount || 0) + 1,
            lapses: problem.fsrsState.lapses || 0
        };
    }
};

// 更新问题状态
const updateProblemWithFSRS = async (problem, feedback) => {
    const now = Date.now();
    const fsrsResult = await calculateNextReview(problem, feedback);
    
    // 创建新的复习日志条目，只包含必要字段
    const newRevlog = {
        card_id: problem.index, // 使用问题索引作为卡片ID
        review_time: now, // 复习时间（毫秒时间戳）
        review_rating: (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .qualityToRating */ .uY)(feedback.quality), // 复习评分 (1-4)
        review_state: ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .TypeConvert */ .mc.state(problem.fsrsState ? problem.fsrsState?.state ?? ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .State */ .ZM.New : 'New') // 复习状态 (0-3)
    };
    
    // 将复习日志存储到单独的 localStorage 键中
    await (0,_util_fsrs_js__WEBPACK_IMPORTED_MODULE_1__/* .saveRevlog */ .Vd)(problem.index, newRevlog);
    
    // 更新问题状态（不修改原有结构）
    problem.fsrsState = {
        ...problem.fsrsState,
        difficulty: fsrsResult.difficulty,
        stability: fsrsResult.stability,
        state: fsrsResult.state,
        lastReview: now,
        nextReview: fsrsResult.nextReview,
        reviewCount: fsrsResult.reps,
        lapses: fsrsResult.lapses,
        quality: feedback.quality
    };

    problem.modificationTime = now;
    return problem;
};

// 获取复习记录数量
const getRevlogCount = async () => {
    try {
        const allRevlogs = await getAllRevlogs();
        let totalCount = 0;
        
        // 计算所有卡片的复习记录总数
        Object.values(allRevlogs).forEach(cardRevlogs => {
            totalCount += cardRevlogs.length;
        });
        
        return totalCount;
    } catch (error) {
        console.error('Error getting revlog count:', error);
        return 0;
    }
};

// 优化FSRS参数
const optimizeParameters = async (onProgress) => {
    try {
        // 获取并导出CSV格式的复习记录
        const csvContent = await exportRevlogsToCSV();
        
        // 调用API进行参数优化
        const result = await optimizeFSRSParams(csvContent, onProgress);
        
        // 检查结果是否包含params字段（来自done标签）
        if (result && result.params) {
            console.log('获取到优化后的FSRS参数:', result.params);
            
            // 不再自动保存参数，而是返回结果供用户确认
            return {
                type: 'Success',
                params: result.params,
                metrics: result.metrics || {}
            };
        }
        
        // 如果是进度信息
        if (result && result.type === 'Progress') {
            return result;
        }
        
        // 如果是训练结果
        if (result && result.type === 'Train') {
            return {
                type: 'Train',
                message: '训练完成，但未获取到完整参数'
            };
        }
        
        // 其他情况
        return result;
    } catch (error) {
        console.error('Error optimizing parameters:', error);
        throw error;
    }
};

// 同步FSRS历史记录
const syncFSRSHistory = async () => {
    try {
        // 检查是否启用了云同步
        if (!store.isCloudSyncEnabled) {
            console.log('云同步未启用，跳过FSRS历史记录同步');
            return;
        }

        // 同步FSRS参数和复习日志
        await syncFSRSParams();
        await syncRevlogs();
        
        // 更新FSRS实例
        const updatedParams = await getFSRSParams();
        await updateFSRSInstance(updatedParams);
        
        console.log('FSRS历史记录同步完成');
    } catch (error) {
        console.error('同步FSRS历史记录失败:', error);
    }
}; 


const syncFSRSParams = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_params', mergeFSRSParams);
}

const syncRevlogs = async () => {
    if (!store.isCloudSyncEnabled) return;
    await syncLocalAndCloudStorage('fsrs_revlogs', mergeRevlogs);
}

/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ isInCnMode)
/* harmony export */ });
/* unused harmony export toggleMode */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);



const isInCnMode = async () => {
    let cnMode = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .getLocalStorageData */ .Cy)(_util_keys__WEBPACK_IMPORTED_MODULE_1__/* .CN_MODE */ .dw);
    console.log(`current cnMode is ${cnMode}`);
    if (cnMode === undefined) {
        await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__/* .setLocalStorageData */ .qy)(_util_keys__WEBPACK_IMPORTED_MODULE_1__/* .CN_MODE */ .dw, false);
        cnMode = false;
    }
    return cnMode;
}

const toggleMode = async () => {
    const cnMode = await isInCnMode();
    console.log(`got current cnMode before toggle}`);
    await setLocalStorageData(CN_MODE, !cnMode);
    console.log("cnMode toggled");
}

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports addNewOperationHistory, popLatestOperationHistory, undoLatestOperation, hasOperationHistory */
/* harmony import */ var _entity_operationHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(733);
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(891);
/* harmony import */ var _problemService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(820);







const CACHE_SIZE = 10;

const addNewOperationHistory = async (before, type, time) => {
    const snapShot = copy(before);
    snapShot.isDeleted = false;
    const newOperationHistory = new OperationHistory(snapShot, await isInCnMode(), type, time);
    let opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    if (opsHistory === undefined) {
        opsHistory = [];
    }
    if (opsHistory.length === CACHE_SIZE) {
        opsHistory.shift();
    }
    opsHistory.push(newOperationHistory);
    await setLocalStorageData(OPS_HISTORY_KEY, opsHistory);
}

const popLatestOperationHistory = async () => {
    const opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    if (opsHistory === undefined || opsHistory.length === 0) {
        return undefined;
    }

    const latestOpsHistory = opsHistory.pop();
    await setLocalStorageData(OPS_HISTORY_KEY, opsHistory);
    return latestOpsHistory;
}

const undoLatestOperation = async () => {
    const operationHistory = await popLatestOperationHistory();
    if (operationHistory === undefined) {
        return;
    }
    const { before: problemBefore, isInCnMode } = operationHistory;
    problemBefore.modificationTime = Date.now();    // need to update the mod time to make this latest change to override cloud data

    const problems = await getProblemsByMode(isInCnMode);
    problems[problemBefore.index] = problemBefore;
    await setProblemsByMode(problems, isInCnMode);
}

const hasOperationHistory = async () => {
    const opsHistory = await getLocalStorageData(OPS_HISTORY_KEY);
    return opsHistory !== undefined && opsHistory.length > 0;
}

/***/ }),

/***/ 820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qu: () => (/* binding */ createOrUpdateProblem),
  getAllProblems: () => (/* binding */ getAllProblems),
  cp: () => (/* binding */ getCurrentProblemInfoFromLeetCodeByHref),
  Oo: () => (/* binding */ getCurrentProblemInfoFromLeetCodeByUrl),
  xd: () => (/* binding */ syncProblems)
});

// UNUSED EXPORTS: batchUpdateProblems, deleteProblem, getAllProblemsInCloud, getProblemsByMode, markProblemAsMastered, resetProblem, setProblems, setProblemsByMode, setProblemsToCloud

;// CONCATENATED MODULE: ./src/popup/delegate/leetCodeDelegate.js
const user_agent =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36";
const params = {
    operationName: "questionTitle",
    variables: { titleSlug: "" }
};
const headers = {
    'User-Agent': user_agent,
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Referer': "",
};

const queryProblemInfo = async (slug, site) => {
    const baseUrl = `https://leetcode.${site}`;
    params.variables.titleSlug = slug;
    params.query = `query questionTitle($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
          questionFrontendId
          ${site === "cn" ? "translatedTitle" : "title"}
          difficulty
        }
      }`
    headers.Referer = `${baseUrl}/problems/${slug}`

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
        timeout: 10000
    };

    const response = await fetch(`${baseUrl}/graphql`, requestOptions);
    const content = await response.json();

    return content.data.question;
}

// 从URL获取站点和题目标识
function extractProblemInfo(url) {
    const match = url.match(/(com|cn)(\/|$)/);
    const site = match ? match[1] : "com";
    console.log(`site is ${site}`);

    let cleanUrl = url;
    const possible_suffix = ["/submissions/", "/description/", "/discussion/", "/solutions/"];
    for (const suffix of possible_suffix) {
        if (cleanUrl.includes(suffix)) {
            cleanUrl = cleanUrl.substring(0, cleanUrl.lastIndexOf(suffix) + 1);
            break;
        }
    }

    const problemSlug = cleanUrl.split("/").splice(-2)[0];
    return { site, problemSlug, cleanUrl };
}

// 基础的获取题目信息函数
const getProblemInfo = async (url) => {
    const { site, problemSlug, cleanUrl } = extractProblemInfo(url);
    
    const question = await queryProblemInfo(problemSlug, site);

    return {
        problemIndex: question.questionFrontendId,
        problemName: `${question.questionFrontendId}. ${site === "cn" ? question.translatedTitle : question.title}`,
        problemLevel: question.difficulty,
        problemUrl: cleanUrl
    };
}

// 从当前页面URL获取题目信息
const getProblemInfoByHref = async () => {
    const currentUrl = window.location.href;
    return await getProblemInfo(currentUrl);
}

// 从指定URL获取题目信息
const getProblemInfoByUrl = async (url) => {
    if (!url.includes('leetcode.com/problems/') && !url.includes('leetcode.cn/problems/')) {
        throw new Error('请输入有效的 LeetCode 题目链接');
    }
    return await getProblemInfo(url);
}


// EXTERNAL MODULE: ./src/popup/delegate/localStorageDelegate.js
var localStorageDelegate = __webpack_require__(891);
// EXTERNAL MODULE: ./src/popup/service/operationHistoryService.js
var operationHistoryService = __webpack_require__(809);
// EXTERNAL MODULE: ./src/popup/entity/operationHistory.js
var operationHistory = __webpack_require__(196);
// EXTERNAL MODULE: ./src/popup/util/keys.js
var keys = __webpack_require__(134);
// EXTERNAL MODULE: ./src/popup/service/modeService.js
var modeService = __webpack_require__(733);
// EXTERNAL MODULE: ./src/popup/store.js
var store = __webpack_require__(214);
// EXTERNAL MODULE: ./src/popup/util/utils.js
var utils = __webpack_require__(384);
// EXTERNAL MODULE: ./src/popup/delegate/cloudStorageDelegate.js
var delegate_cloudStorageDelegate = __webpack_require__(188);
// EXTERNAL MODULE: ./src/popup/service/webdavEnhancedService.js
var webdavEnhancedService = __webpack_require__(189);
// EXTERNAL MODULE: ./src/popup/service/syncManager.js
var service_syncManager = __webpack_require__(584);
;// CONCATENATED MODULE: ./src/popup/service/problemService.js














const getAllProblems = async () => {
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    const queryKey = cnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    let problems = await (0,localStorageDelegate/* getLocalStorageData */.Cy)(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getAllProblemsInCloud = async () => {
    let cnMode = await isInCnMode();
    const queryKey = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await cloudStorageDelegate.get(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

const getProblemsByMode = async (useCnMode) => {
    const queryKey = useCnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    let problems = await getLocalStorageData(queryKey);
    if (problems === undefined) problems = {};
    return problems;
}

// 从当前页面获取题目信息
const getCurrentProblemInfoFromLeetCodeByHref = async () => {
    return await getProblemInfoByHref();
}

// 从指定URL获取题目信息
const getCurrentProblemInfoFromLeetCodeByUrl = async (url) => {
    return await getProblemInfoByUrl(url);
}


const setProblems = async (problems) => {
    let cnMode = await (0,modeService/* isInCnMode */.B)();
    const key = cnMode ? keys/* CN_PROBLEM_KEY */.Q$ : keys/* PROBLEM_KEY */.y0;
    await (0,localStorageDelegate/* setLocalStorageData */.qy)(key, problems);
}

const setProblemsToCloud = async (problems) => {
    let cnMode = await isInCnMode();
    const key = cnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await cloudStorageDelegate.set(key, problems);
}

const setProblemsByMode = async (problems, useCnMode) => {
    const key = useCnMode ? CN_PROBLEM_KEY : PROBLEM_KEY;
    await setLocalStorageData(key, problems);
}

const createOrUpdateProblem = async (problem) => {
    problem.modificationTime = Date.now();
    const problems = await getAllProblems();
    problems[problem.index] = problem;
    await setProblems(problems);
    
    // 触发同步
    service_syncManager/* syncManager */.D.debouncedSync(problem.index);
}

const markProblemAsMastered = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    await addNewOperationHistory(problem, OPS_TYPE.MASTER, Date.now());

    problem.proficiency = forggettingCurve.length;
    problem.modificationTime = Date.now();

    problems[problemId] = problem;

    await setProblems(problems);
    
    // 触发同步
    syncManager.debouncedSync(problemId);
};

const deleteProblem = async (problemId) => {

    let problems = await getAllProblems();
    const problem = problems[problemId];
    
    // soft delete
    if (problem) {
        problem.isDeleted = true;
        problem.modificationTime = Date.now();
        await addNewOperationHistory(problem, OPS_TYPE.DELETE, Date.now());
        problems[problemId] = problem;
        await setProblems(problems);
        
        // 触发同步
        syncManager.debouncedSync(problemId);
    }
};

const resetProblem = async (problemId) => {
    let problems = await getAllProblems();
    let problem = problems[problemId];

    problem.proficiency = 0;
    problem.submissionTime = Date.now() - 24 * 60 * 60 * 1000;
    problem.modificationTime = Date.now();

    await addNewOperationHistory(problem, OPS_TYPE.RESET, Date.now());

    problems[problemId] = problem;

    await setProblems(problems);
    
    // 触发同步
    syncManager.debouncedSync(problemId);
};

const syncProblems = async () => {
    // 使用新的同步管理器
    await service_syncManager/* syncManager */.D.performSync();
}

/**
 * 批量更新问题（用于批量操作）
 */
const batchUpdateProblems = async (updates) => {
    const problems = await getAllProblems();
    
    for (const update of updates) {
        if (problems[update.id]) {
            problems[update.id] = {
                ...problems[update.id],
                ...update.data,
                modificationTime: Date.now()
            };
        }
    }
    
    await setProblems(problems);
    
    // 批量操作立即同步
    await syncManager.immediateSync();
}

/***/ }),

/***/ 584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ syncManager)
/* harmony export */ });
/* harmony import */ var _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _problemService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(820);
/* harmony import */ var _modeService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(733);
/* harmony import */ var _util_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(134);
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(214);
/**
 * Sync Manager for coordinating data synchronization between local, Chrome Sync, and WebDAV
 */









class SyncManager {
    constructor() {
        this.syncTimer = null;
        this.syncQueue = new Set();
        this.SYNC_DELAY = 2000; // 2秒防抖
        this.AUTO_SYNC_INTERVAL = 5 * 60 * 1000; // 5分钟自动同步
        this.isSyncing = false;
        this.lastSyncTime = null;
        this.syncStatus = 'idle'; // idle, syncing, success, error
        this.syncListeners = new Set();
        this.conflictResolver = null;
        this.autoSyncTimer = null;
    }

    /**
     * 初始化同步管理器
     */
    async initialize() {
        // 加载 WebDAV 配置
        const webdavLoaded = await _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.loadConfig();
        this.activeWebdavService = _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n;

        // 启动时异步执行一次同步，不阻塞初始化
        if (webdavLoaded || _store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            setTimeout(() => {
                this.performSync().catch(error => {
                    console.error('Initial sync failed:', error);
                });
            }, 1000); // 延迟1秒执行，让UI先加载完成
        }
        
        // 启动自动同步
        this.startAutoSync();
        
        // 监听窗口关闭事件
        window.addEventListener('beforeunload', async (e) => {
            if (this.hasPendingChanges()) {
                e.preventDefault();
                await this.immediateSync();
            }
        });
    }

    /**
     * 启动自动同步
     */
    startAutoSync() {
        this.stopAutoSync();
        this.autoSyncTimer = setInterval(() => {
            this.performSync();
        }, this.AUTO_SYNC_INTERVAL);
    }

    /**
     * 停止自动同步
     */
    stopAutoSync() {
        if (this.autoSyncTimer) {
            clearInterval(this.autoSyncTimer);
            this.autoSyncTimer = null;
        }
    }

    /**
     * 添加同步状态监听器
     */
    addSyncListener(listener) {
        this.syncListeners.add(listener);
    }

    /**
     * 移除同步状态监听器
     */
    removeSyncListener(listener) {
        this.syncListeners.delete(listener);
    }

    /**
     * 通知同步状态变化
     */
    notifySyncStatusChange(status, data = {}) {
        this.syncStatus = status;
        this.syncListeners.forEach(listener => {
            try {
                listener({ status, ...data });
            } catch (error) {
                console.error('Sync listener error:', error);
            }
        });
    }

    /**
     * 设置冲突解决器
     */
    setConflictResolver(resolver) {
        this.conflictResolver = resolver;
    }

    /**
     * 防抖同步
     */
    debouncedSync(problemId = null) {
        if (problemId) {
            this.syncQueue.add(problemId);
        }
        
        clearTimeout(this.syncTimer);
        this.syncTimer = setTimeout(() => {
            this.performSync();
        }, this.SYNC_DELAY);
    }

    /**
     * 立即同步
     */
    async immediateSync() {
        clearTimeout(this.syncTimer);
        await this.performSync();
    }

    /**
     * 检查是否有待同步的更改
     */
    hasPendingChanges() {
        return this.syncQueue.size > 0 || this.syncTimer !== null;
    }

    /**
     * 执行同步
     */
    async performSync() {
        if (this.isSyncing) return;
        
        // 检查是否有任何同步方式启用
        if (!_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured && !_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            return;
        }
        
        this.isSyncing = true;
        this.notifySyncStatusChange('syncing');
        
        try {
            const cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_2__/* .isInCnMode */ .B)();
            const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .CN_PROBLEM_KEY */ .Q$ : _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .PROBLEM_KEY */ .y0;
            
            // 1. 获取本地数据
            const localData = await this.getLocalData(key);
            
            // 2. 获取所有云端数据（Chrome Sync + WebDAV）
            const cloudData = await this.getAllCloudData(key);
            
            // 3. 合并数据
            const mergedData = await this.mergeAllData(localData, cloudData);
            
            // 4. 处理冲突
            if (mergedData.conflicts.length > 0) {
                await this.handleConflicts(mergedData.conflicts);
            }
            
            // 5. 保存合并后的数据到所有位置
            await this.saveDataEverywhere(key, mergedData.problems);
            
            // 6. 清空同步队列
            this.syncQueue.clear();
            this.lastSyncTime = new Date().toISOString();
            
            this.notifySyncStatusChange('success', { 
                syncedCount: Object.keys(mergedData.problems).length 
            });
        } catch (error) {
            console.error('Sync failed:', error);
            this.notifySyncStatusChange('error', { error: error.message });
            this.handleSyncError(error);
        } finally {
            this.isSyncing = false;
        }
    }

    /**
     * 获取本地数据
     */
    async getLocalData(key) {
        const data = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .getLocalStorageData */ .Cy)(key);
        return data || {};
    }

    /**
     * 获取所有云端数据
     */
    async getAllCloudData(key) {
        const cloudData = {
            chromeSync: null,
            webdav: null
        };
        
        // 获取Chrome Sync数据
        if (_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            try {
                cloudData.chromeSync = await _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get(key);
            } catch (error) {
                console.warn('Failed to get Chrome Sync data:', error);
            }
        }
        
        // 获取WebDAV数据
        if (_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured) {
            try {
                const webdavData = await _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.downloadData('problems_sync.json');
                if (webdavData && webdavData.problems) {
                    cloudData.webdav = webdavData.problems;
                }
            } catch (error) {
                console.warn('Failed to get WebDAV data:', error);
            }
        }
        
        return cloudData;
    }

    /**
     * 合并所有数据源
     */
    async mergeAllData(localData, cloudData) {
        const merged = new Map();
        const conflicts = [];
        const allProblems = {};
        
        // 收集所有数据源
        const dataSources = [
            { name: 'local', data: localData },
            { name: 'chromeSync', data: cloudData.chromeSync },
            { name: 'webdav', data: cloudData.webdav }
        ].filter(source => source.data);
        
        // 收集所有问题ID
        const allIds = new Set();
        dataSources.forEach(source => {
            if (source.data) {
                Object.keys(source.data).forEach(id => allIds.add(id));
            }
        });
        
        // 对每个问题进行合并
        for (const id of allIds) {
            const versions = dataSources
                .filter(source => source.data && source.data[id])
                .map(source => ({
                    source: source.name,
                    problem: source.data[id]
                }));
            
            if (versions.length === 0) continue;
            
            if (versions.length === 1) {
                // 只有一个版本，直接使用
                merged.set(id, versions[0].problem);
            } else {
                // 多个版本，需要合并
                const mergedProblem = this.mergeSingleProblem(versions);
                if (mergedProblem.hasConflict) {
                    conflicts.push({
                        id,
                        versions: versions
                    });
                } else {
                    merged.set(id, mergedProblem.data);
                }
            }
        }
        
        // 转换为对象格式
        merged.forEach((value, key) => {
            allProblems[key] = value;
        });
        
        return {
            problems: allProblems,
            conflicts
        };
    }

    /**
     * 合并单个问题的多个版本
     */
    mergeSingleProblem(versions) {
        // 找出最新修改的版本
        let latestVersion = versions[0];
        let latestTime = this.getModificationTime(versions[0].problem);
        
        for (let i = 1; i < versions.length; i++) {
            const time = this.getModificationTime(versions[i].problem);
            if (time > latestTime) {
                latestTime = time;
                latestVersion = versions[i];
            }
        }
        
        // 检查是否有冲突（相同时间但不同内容）
        const hasConflict = versions.some(v => {
            const time = this.getModificationTime(v.problem);
            return time === latestTime && 
                   JSON.stringify(v.problem) !== JSON.stringify(latestVersion.problem);
        });
        
        // 特殊字段合并
        const mergedProblem = { ...latestVersion.problem };
        
        // 合并笔记（保留最长的）
        versions.forEach(v => {
            if (v.problem.note && v.problem.note.length > (mergedProblem.note || '').length) {
                mergedProblem.note = v.problem.note;
            }
        });
        
        // 合并复习记录（合并所有记录）
        const allReviews = new Set();
        versions.forEach(v => {
            if (v.problem.reviews && Array.isArray(v.problem.reviews)) {
                v.problem.reviews.forEach(review => {
                    allReviews.add(JSON.stringify(review));
                });
            }
        });
        if (allReviews.size > 0) {
            mergedProblem.reviews = Array.from(allReviews).map(r => JSON.parse(r));
        }
        
        return {
            hasConflict,
            data: mergedProblem
        };
    }

    /**
     * 获取问题的修改时间
     */
    getModificationTime(problem) {
        return problem.modificationTime || 
               problem.lastModified || 
               problem.submissionTime || 
               0;
    }

    /**
     * 处理冲突
     */
    async handleConflicts(conflicts) {
        if (!this.conflictResolver) {
            console.warn('No conflict resolver set, using latest version');
            return;
        }
        
        for (const conflict of conflicts) {
            try {
                const resolved = await this.conflictResolver(conflict);
                if (resolved) {
                    // 更新解决后的数据
                    conflict.resolved = resolved;
                }
            } catch (error) {
                console.error('Conflict resolution failed:', error);
            }
        }
    }

    /**
     * 保存数据到所有位置
     */
    async saveDataEverywhere(key, problems) {
        const savePromises = [];
        
        // 保存到本地
        savePromises.push((0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .setLocalStorageData */ .qy)(key, problems));
        
        // 保存到Chrome Sync
        if (_store__WEBPACK_IMPORTED_MODULE_5__/* .store */ .h.isCloudSyncEnabled) {
            savePromises.push(_delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.set(key, problems).catch(error => {
                console.warn('Failed to save to Chrome Sync:', error);
            }));
        }
        
        // 保存到WebDAV
        if (_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured) {
            const syncData = {
                version: '2.0',
                lastSync: new Date().toISOString(),
                deviceId: await this.getDeviceId(),
                problems: problems,
                metadata: {
                    totalProblems: Object.keys(problems).length,
                    lastModified: new Date().toISOString(),
                    syncVersion: 1
                }
            };
            
            savePromises.push(
                _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.uploadData('problems_sync.json', syncData).catch(error => {
                    console.warn('Failed to save to WebDAV:', error);
                })
            );
        }
        
        await Promise.all(savePromises);
    }

    /**
     * 获取设备ID
     */
    async getDeviceId() {
        let deviceId = await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .getLocalStorageData */ .Cy)('deviceId');
        if (!deviceId) {
            deviceId = `device-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            await (0,_delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_3__/* .setLocalStorageData */ .qy)('deviceId', deviceId);
        }
        return deviceId;
    }

    /**
     * 处理同步错误
     */
    handleSyncError(error) {
        // 记录错误
        console.error('Sync error:', error);
        
        // 可以在这里添加错误重试逻辑
        // 或者通知用户同步失败
    }

    /**
     * 增量同步（性能优化）
     */
    async incrementalSync() {
        if (!this.lastSyncTime) {
            // 首次同步，执行完整同步
            return this.performSync();
        }
        
        const cnMode = await (0,_modeService__WEBPACK_IMPORTED_MODULE_2__/* .isInCnMode */ .B)();
        const key = cnMode ? _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .CN_PROBLEM_KEY */ .Q$ : _util_keys__WEBPACK_IMPORTED_MODULE_6__/* .PROBLEM_KEY */ .y0;
        
        // 获取自上次同步以来的更改
        const changes = await this.getChangesSince(this.lastSyncTime);
        
        if (changes.length === 0) return;
        
        // 只同步变化的数据
        const syncData = {
            changes: changes,
            lastSyncTime: new Date().toISOString(),
            deviceId: await this.getDeviceId()
        };
        
        if (_webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.isConfigured) {
            await _webdavEnhancedService__WEBPACK_IMPORTED_MODULE_0__/* .webdavEnhancedService */ .n.uploadData('incremental.json', syncData);
        }
    }

    /**
     * 获取指定时间后的更改
     */
    async getChangesSince(timestamp) {
        const problems = await (0,_problemService__WEBPACK_IMPORTED_MODULE_1__.getAllProblems)();
        const changes = [];
        
        Object.entries(problems).forEach(([id, problem]) => {
            const modTime = this.getModificationTime(problem);
            if (modTime > new Date(timestamp).getTime()) {
                changes.push({
                    id,
                    problem,
                    timestamp: modTime
                });
            }
        });
        
        return changes;
    }
}

// 导出单例
const syncManager = new SyncManager();

/***/ }),

/***/ 189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ webdavEnhancedService)
/* harmony export */ });
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(867);
/**
 * Enhanced WebDAV Service with Auto-fallback and Method Disguise
 * Supports automatic HTTPS->HTTP fallback and PROPFIND->POST disguise
 */



class WebDAVEnhancedService {
    constructor() {
        this.baseUrl = null;
        this.username = null;
        this.password = null;
        this.isConfigured = false;
        this.isAuthenticated = false;
        this.folderPath = '/LeetcodeMasteryScheduler/';
        this.onAuthStatusChange = null;

        // 连接策略配置
        this.connectionStrategy = {
            protocol: 'auto', // 'auto', 'https', 'http'
            method: 'auto',    // 'auto', 'native', 'disguised'
            currentProtocol: null,
            currentMethod: null,
            lastSuccessfulStrategy: null
        };

        // 错误检测模式
        this.errorPatterns = {
            encryptionBlocked: ['ECONNRESET', 'ETIMEDOUT', 'CERT', 'SSL', 'TLS'],
            methodBlocked: ['405', '403', 'Method Not Allowed', 'Forbidden'],
            networkError: ['ENOTFOUND', 'ECONNREFUSED', 'Network']
        };

        // 重试配置
        this.retryConfig = {
            maxRetries: 3,
            retryDelay: 1000,
            timeout: 10000
        };
    }

    /**
     * 配置 WebDAV 连接，支持自动降级
     */
    async configure(config) {
        // 保存基础配置
        this.username = config.username;
        this.password = config.password;

        // 设置连接策略
        if (config.connectionMode) {
            this.connectionStrategy.protocol = config.connectionMode.protocol || 'auto';
            this.connectionStrategy.method = config.connectionMode.method || 'auto';
        }

        // 设置重试配置
        if (config.retryConfig) {
            Object.assign(this.retryConfig, config.retryConfig);
        }

        // 构建基础 URL（不含协议）
        const baseHost = config.serverUrl || 'dav.jianguoyun.com/dav';
        this.baseUrl = baseHost.replace(/^https?:\/\//, '');

        // 保存配置
        await this.saveConfig({
            ...config,
            connectionStrategy: this.connectionStrategy
        });
        this.isConfigured = true;

        // 智能连接测试
        const isValid = await this.smartConnect();
        this.isAuthenticated = isValid;

        if (isValid) {
            await this.ensureFolderExists();
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(true);
            }
            console.log('WebDAV connected successfully with strategy:', this.connectionStrategy.lastSuccessfulStrategy);
        } else {
            if (this.onAuthStatusChange) {
                this.onAuthStatusChange(false);
            }
        }
        return isValid;
    }

    /**
     * 智能连接测试，自动尝试不同策略
     */
    async smartConnect() {
        const strategies = this.generateStrategies();

        for (const strategy of strategies) {
            console.log(`Trying connection strategy: ${strategy.protocol} + ${strategy.method}`);

            try {
                const success = await this.testConnectionWithStrategy(strategy);
                if (success) {
                    // 保存成功的策略
                    this.connectionStrategy.currentProtocol = strategy.protocol;
                    this.connectionStrategy.currentMethod = strategy.method;
                    this.connectionStrategy.lastSuccessfulStrategy = {
                        protocol: strategy.protocol,
                        method: strategy.method,
                        timestamp: new Date().toISOString()
                    };
                    await this.saveStrategy();
                    return true;
                }
            } catch (error) {
                console.log(`Strategy failed: ${error.message}`);
                continue;
            }
        }

        return false;
    }

    /**
     * 生成连接策略列表
     */
    generateStrategies() {
        const strategies = [];

        // 根据配置生成策略
        const protocols = this.connectionStrategy.protocol === 'auto'
            ? ['https', 'http']
            : [this.connectionStrategy.protocol];

        const methods = this.connectionStrategy.method === 'auto'
            ? ['native', 'disguised']
            : [this.connectionStrategy.method];

        // 如果不是自动模式，用户的选择优先
        if (this.connectionStrategy.protocol !== 'auto') {
            // 用户指定了协议，严格按照用户选择
            for (const method of methods) {
                strategies.push({ protocol: protocols[0], method, priority: 0 });
            }
            return strategies; // 直接返回，只使用用户选择的协议
        }

        // 自动模式：如果有上次成功的策略，优先尝试
        if (this.connectionStrategy.lastSuccessfulStrategy) {
            strategies.push({
                protocol: this.connectionStrategy.lastSuccessfulStrategy.protocol,
                method: this.connectionStrategy.lastSuccessfulStrategy.method,
                priority: 0
            });
        }

        // 然后添加其他策略
        for (const protocol of protocols) {
            for (const method of methods) {
                // 跳过已经添加的优先策略
                if (this.connectionStrategy.lastSuccessfulStrategy &&
                    protocol === this.connectionStrategy.lastSuccessfulStrategy.protocol &&
                    method === this.connectionStrategy.lastSuccessfulStrategy.method) {
                    continue;
                }
                strategies.push({ protocol, method, priority: 1 });
            }
        }

        return strategies;
    }

    /**
     * 使用特定策略测试连接
     */
    async testConnectionWithStrategy(strategy) {
        try {
            const response = await this.requestWithStrategy('PROPFIND', '/', {
                headers: { 'Depth': '0' }
            }, strategy);

            return response.ok;
        } catch (error) {
            // 分析错误类型，用于优化后续策略
            this.analyzeError(error);
            return false;
        }
    }

    /**
     * 使用特定策略发送请求
     */
    async requestWithStrategy(method, path, options = {}, strategy = null) {
        // 如果没有指定策略，使用当前策略
        if (!strategy) {
            strategy = {
                protocol: this.connectionStrategy.currentProtocol || 'https',
                method: this.connectionStrategy.currentMethod || 'native'
            };
        }

        // 构建 URL
        const protocol = strategy.protocol;
        const url = `${protocol}://${this.baseUrl}${path}`;

        // 准备请求参数
        let actualMethod = method;
        let headers = this.buildHeaders(options.headers);

        // 如果使用伪装模式
        if (strategy.method === 'disguised' && ['PROPFIND', 'PROPPATCH', 'MKCOL'].includes(method)) {
            actualMethod = 'POST';
            headers['X-HTTP-Method-Override'] = method;
            headers['X-Original-Method'] = method;
            // 添加自定义标记，后端可以识别
            headers['X-WebDAV-Disguised'] = 'true';
        }

        // 通过 background script 发送请求
        const response = await this.sendRequest(actualMethod, url, headers, options.body);
        return response;
    }

    /**
     * 发送实际请求（通过 background script）
     */
    async sendRequest(method, url, headers, body) {
        const response = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.runtime.sendMessage({
            action: 'webdavRequest',
            params: {
                method,
                url,
                headers,
                body,
                timeout: this.retryConfig.timeout
            }
        });

        if (!response.success) {
            const error = new Error(response.error || 'WebDAV request failed');
            error.details = response;
            throw error;
        }

        return this.wrapResponse(response.data);
    }

    /**
     * 包装响应对象
     */
    wrapResponse(data) {
        return {
            ok: data.ok,
            status: data.status,
            statusText: data.statusText,
            data: data.data,
            text: async () => {
                if (typeof data.data === 'object') {
                    return JSON.stringify(data.data);
                }
                return data.data;
            },
            json: async () => {
                if (typeof data.data === 'string') {
                    try {
                        return JSON.parse(data.data);
                    } catch {
                        throw new Error('Invalid JSON response');
                    }
                }
                return data.data;
            }
        };
    }

    /**
     * 构建请求头
     */
    buildHeaders(customHeaders = {}) {
        const auth = btoa(`${this.username}:${this.password}`);

        return {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/xml; charset=utf-8',
            'User-Agent': 'LeetcodeMasteryScheduler/1.0',
            ...customHeaders
        };
    }

    /**
     * 分析错误类型，优化后续策略
     */
    analyzeError(error) {
        const errorMsg = error.message.toLowerCase();

        for (const [type, patterns] of Object.entries(this.errorPatterns)) {
            if (patterns.some(pattern => errorMsg.includes(pattern.toLowerCase()))) {
                console.log(`Detected error type: ${type}`);

                // 根据错误类型调整策略
                if (type === 'encryptionBlocked') {
                    // 加密被阻止，优先使用 HTTP
                    this.connectionStrategy.currentProtocol = 'http';
                } else if (type === 'methodBlocked') {
                    // 方法被阻止，使用伪装模式
                    this.connectionStrategy.currentMethod = 'disguised';
                }
                break;
            }
        }
    }

    /**
     * 智能请求方法 - 带自动重试和降级
     */
    async request(method, path, options = {}) {
        let retries = 0;
        let lastError = null;

        while (retries < this.retryConfig.maxRetries) {
            try {
                // 如果有当前成功的策略，先尝试
                if (this.connectionStrategy.currentProtocol && this.connectionStrategy.currentMethod) {
                    try {
                        return await this.requestWithStrategy(method, path, options);
                    } catch (error) {
                        console.log('Current strategy failed, trying alternatives...');
                        lastError = error;
                    }
                }

                // 尝试所有可能的策略
                const strategies = this.generateStrategies();

                for (const strategy of strategies) {
                    try {
                        const response = await this.requestWithStrategy(method, path, options, strategy);

                        // 如果成功，更新当前策略
                        if (response.ok || response.status < 500) {
                            this.connectionStrategy.currentProtocol = strategy.protocol;
                            this.connectionStrategy.currentMethod = strategy.method;
                            return response;
                        }
                    } catch (error) {
                        lastError = error;
                        continue;
                    }
                }

                retries++;
                if (retries < this.retryConfig.maxRetries) {
                    await this.delay(this.retryConfig.retryDelay * retries);
                }
            } catch (error) {
                lastError = error;
                retries++;
            }
        }

        // 所有策略都失败
        throw lastError || new Error('All connection strategies failed');
    }

    /**
     * 延迟函数
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 确保文件夹存在
     */
    async ensureFolderExists() {
        try {
            const response = await this.request('PROPFIND', this.folderPath, {
                headers: { 'Depth': '0' }
            });

            if (!response.ok && response.status === 404) {
                await this.request('MKCOL', this.folderPath);
                console.log('Created folder:', this.folderPath);
            }
        } catch (error) {
            console.error('Error ensuring folder exists:', error);
        }
    }

    /**
     * 上传数据
     */
    async uploadData(filename, data) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const jsonData = JSON.stringify(data, null, 2);

        const response = await this.request('PUT', path, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        });

        if (response.ok || response.status === 201 || response.status === 204) {
            console.log(`Data uploaded to ${path}`);
            return true;
        } else {
            throw new Error(`Upload failed: ${response.status}`);
        }
    }

    /**
     * 下载数据
     */
    async downloadData(filename) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const response = await this.request('GET', path, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            if (response.data !== undefined) {
                if (typeof response.data === 'string') {
                    try {
                        return JSON.parse(response.data);
                    } catch {
                        return response.data;
                    }
                }
                return response.data;
            }
            return await response.json();
        } else if (response.status === 404) {
            return null;
        } else {
            throw new Error(`Download failed: ${response.status}`);
        }
    }

    /**
     * 列出文件
     */
    async listFiles() {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const response = await this.request('PROPFIND', this.folderPath, {
            headers: { 'Depth': '1' }
        });

        if (response.ok) {
            let xmlText;
            if (response.data !== undefined) {
                xmlText = typeof response.data === 'object' ? JSON.stringify(response.data) : response.data;
            } else {
                xmlText = await response.text();
            }
            return this.parseFileList(xmlText);
        } else {
            throw new Error(`List files failed: ${response.status}`);
        }
    }

    /**
     * 解析文件列表
     */
    parseFileList(xmlText) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(xmlText, 'text/xml');
        const responses = doc.getElementsByTagNameNS('DAV:', 'response');

        const files = [];
        for (let i = 1; i < responses.length; i++) {
            const response = responses[i];
            const href = response.getElementsByTagNameNS('DAV:', 'href')[0]?.textContent;
            const displayName = response.getElementsByTagNameNS('DAV:', 'displayname')[0]?.textContent;
            const lastModified = response.getElementsByTagNameNS('DAV:', 'getlastmodified')[0]?.textContent;
            const contentLength = response.getElementsByTagNameNS('DAV:', 'getcontentlength')[0]?.textContent;

            if (href && displayName) {
                files.push({
                    name: displayName,
                    path: href,
                    lastModified: lastModified ? new Date(lastModified) : null,
                    size: contentLength ? parseInt(contentLength) : 0
                });
            }
        }

        return files;
    }

    /**
     * 删除文件
     */
    async deleteFile(filename) {
        if (!this.isConfigured) {
            throw new Error('WebDAV not configured');
        }

        const path = `${this.folderPath}${filename}`;
        const response = await this.request('DELETE', path);
        return response.ok || response.status === 204;
    }

    /**
     * 保存配置
     */
    async saveConfig(config) {
        const encryptedConfig = {
            username: config.username,
            password: btoa(config.password),
            serverUrl: config.serverUrl || 'dav.jianguoyun.com/dav',
            connectionStrategy: config.connectionStrategy || this.connectionStrategy,
            retryConfig: config.retryConfig || this.retryConfig,
            enabled: true
        };

        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({
            webdavEnhancedConfig: encryptedConfig
        });
    }

    /**
     * 保存连接策略
     */
    async saveStrategy() {
        const result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get('webdavEnhancedConfig');
        if (result.webdavEnhancedConfig) {
            result.webdavEnhancedConfig.connectionStrategy = this.connectionStrategy;
            await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({
                webdavEnhancedConfig: result.webdavEnhancedConfig
            });
        }
    }

    /**
     * 加载配置
     */
    async loadConfig() {
        try {
            // 优先加载增强版配置
            let result = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get('webdavEnhancedConfig');
            let config = result.webdavEnhancedConfig;

            // 如果没有增强版配置，尝试迁移旧版配置
            if (!config || !config.enabled) {
                const oldResult = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.get('webdavConfig');
                if (oldResult.webdavConfig && oldResult.webdavConfig.enabled) {
                    console.log('Migrating from old WebDAV config to enhanced config');
                    // 迁移旧配置
                    config = {
                        ...oldResult.webdavConfig,
                        connectionStrategy: this.connectionStrategy,
                        retryConfig: this.retryConfig
                    };
                    // 保存为增强版配置
                    await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.set({ webdavEnhancedConfig: config });
                    // 删除旧配置
                    await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.remove('webdavConfig');
                }
            }

            if (config && config.enabled) {

                this.baseUrl = config.serverUrl || 'dav.jianguoyun.com/dav';
                this.baseUrl = this.baseUrl.replace(/^https?:\/\//, '');
                this.username = config.username;
                this.password = atob(config.password);
                this.isConfigured = true;

                // 恢复连接策略
                if (config.connectionStrategy) {
                    this.connectionStrategy = config.connectionStrategy;
                    // 如果有成功的策略记录，认为已认证
                    if (config.connectionStrategy.lastSuccessfulStrategy) {
                        this.isAuthenticated = true;

                        // 如果策略较老（超过1小时），后台静默验证
                        const strategyTime = new Date(config.connectionStrategy.lastSuccessfulStrategy.timestamp).getTime();
                        if (Date.now() - strategyTime > 60 * 60 * 1000) {
                            // 后台验证，不影响当前状态显示
                            this.smartConnect().then(isValid => {
                                this.isAuthenticated = isValid;
                                if (this.onAuthStatusChange && !isValid) {
                                    // 只在认证失败时通知
                                    this.onAuthStatusChange(false);
                                }
                            }).catch(error => {
                                console.error('WebDAV background connection test error:', error);
                            });
                        }
                    } else {
                        // 没有成功的策略记录，需要测试连接
                        this.isAuthenticated = false;
                    }
                }

                // 恢复重试配置
                if (config.retryConfig) {
                    this.retryConfig = config.retryConfig;
                }

                return true;
            }
        } catch (error) {
            console.error('Error loading WebDAV config:', error);
        }
        return false;
    }

    /**
     * 清除配置
     */
    async clearConfig() {
        this.baseUrl = null;
        this.username = null;
        this.password = null;
        this.isConfigured = false;
        this.connectionStrategy = {
            protocol: 'auto',
            method: 'auto',
            currentProtocol: null,
            currentMethod: null,
            lastSuccessfulStrategy: null
        };

        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.storage.local.remove('webdavEnhancedConfig');
    }

    /**
     * 获取连接状态信息
     */
    getConnectionStatus() {
        return {
            isConfigured: this.isConfigured,
            isAuthenticated: this.isAuthenticated,
            strategy: this.connectionStrategy.lastSuccessfulStrategy,
            currentProtocol: this.connectionStrategy.currentProtocol,
            currentMethod: this.connectionStrategy.currentMethod
        };
    }

    // 保留原有的备份、恢复、同步等方法...
    async backupProblems(problems) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filename = `problems_backup_${timestamp}.json`;

        const backupData = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            problemCount: problems.length,
            problems: problems
        };

        await this.uploadData(filename, backupData);
        await this.maintainBackupHistory();

        return filename;
    }

    async restoreProblems(filename) {
        const data = await this.downloadData(filename);
        if (data && data.problems) {
            return data.problems;
        }
        throw new Error('Invalid backup file');
    }

    async getBackupList() {
        const files = await this.listFiles();
        return files.filter(file =>
            file.name.startsWith('problems_backup_') &&
            file.name.endsWith('.json')
        ).sort((a, b) => b.lastModified - a.lastModified);
    }

    async maintainBackupHistory() {
        const backups = await this.getBackupList();
        if (backups.length > 10) {
            for (let i = 10; i < backups.length; i++) {
                await this.deleteFile(backups[i].name);
            }
        }
    }

    async syncData(localProblems, lastSyncTime) {
        const syncFilename = 'problems_sync.json';
        const cloudData = await this.downloadData(syncFilename);

        if (!cloudData) {
            await this.uploadData(syncFilename, {
                lastSync: new Date().toISOString(),
                problems: localProblems
            });
            return { problems: localProblems, conflicts: [] };
        }

        const mergedData = this.mergeProblems(localProblems, cloudData.problems);

        await this.uploadData(syncFilename, {
            lastSync: new Date().toISOString(),
            problems: mergedData.problems
        });

        return mergedData;
    }

    mergeProblems(localProblems, cloudProblems) {
        const merged = new Map();
        const conflicts = [];

        cloudProblems.forEach(problem => {
            merged.set(problem.id || problem.name, problem);
        });

        localProblems.forEach(problem => {
            const key = problem.id || problem.name;
            const cloudProblem = merged.get(key);

            if (!cloudProblem) {
                merged.set(key, problem);
            } else {
                const localTime = new Date(problem.lastModified || 0).getTime();
                const cloudTime = new Date(cloudProblem.lastModified || 0).getTime();

                if (localTime > cloudTime) {
                    merged.set(key, problem);
                } else if (localTime < cloudTime) {
                    // Keep cloud version
                } else if (JSON.stringify(problem) !== JSON.stringify(cloudProblem)) {
                    conflicts.push({
                        problemId: key,
                        local: problem,
                        cloud: cloudProblem
                    });
                }
            }
        });

        return {
            problems: Array.from(merged.values()),
            conflicts
        };
    }
}

// 导出单例
const webdavEnhancedService = new WebDAVEnhancedService();

/***/ }),

/***/ 214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ store)
/* harmony export */ });
/* unused harmony export daily_store */
/* harmony import */ var _util_sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(192);


const store = {
    needReviewProblems: null,
    reviewScheduledProblems: null,
    completedProblems: null,
    toReviewPage: 1,
    scheduledPage: 1,
    completedPage: 1,
    toReviewMaxPage: null,
    scheduledMaxPage: null,
    completedMaxPage: null,
    tooltipTriggerList: null,
    tooltipList: null,
    easyIntv: [1, 3],
    mediumIntv: [1, 3, 4],
    hardIntv: [0, 1, 2, 3, 4],
    problemSortBy: _util_sort__WEBPACK_IMPORTED_MODULE_0__/* .problemSorters */ .SL.sortByReviewTimeAsc,
    isCloudSyncEnabled: false,
    defaultCardLimit: 1,
    isReminderEnabled: false
}

const daily_store = {
    dailyReviewProblems: null,
    reviewScheduledProblems: null

}

/***/ }),

/***/ 497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mq: () => (/* binding */ forggettingCurve)
/* harmony export */ });
/* unused harmony exports months, PAGE_SIZE, CN_LABLE, GL_LABLE, SUBMIT_BUTTON_ATTRIBUTE_NAME, SUBMIT_BUTTON_ATTRIBUTE_VALUE, SUCCESS_CLASSNAME_CN, WRONG_ANSWER_CLASSNAME_CN, COMPILE_ERROR_AND_TLE_CLASSNAME_CN, SUCCESS_CLASSNAME, WRONG_ANSWER_CLASSNAME, COMPILE_ERROR_AND_TLE_CLASSNAME, SUCCESS_CLASSNAME_NEW, WRONG_ANSWER_CLASSNAME_NEW, COMPILE_ERROR_AND_TLE_CLASSNAME_NEW */
const forggettingCurve = [
    1 * 24 * 60,    // 1 day
    2 * 24 * 60,    // 2 day
    4 * 24 * 60,    // 4 day
    7 * 24 * 60,    // 7 day
    15 * 24 * 60    // 15 day
];

const months = (/* unused pure expression or super */ null && (["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]));

const PAGE_SIZE = 5;

const CN_LABLE = 'LeetCode - China ';
const GL_LABLE = 'LeetCode - Global';

const SUBMIT_BUTTON_ATTRIBUTE_NAME = "data-e2e-locator";
const SUBMIT_BUTTON_ATTRIBUTE_VALUE = "console-submit-button";

// leetcode UI classnames

// cn
const SUCCESS_CLASSNAME_CN = "text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";
const WRONG_ANSWER_CLASSNAME_CN = "whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";
const COMPILE_ERROR_AND_TLE_CLASSNAME_CN = "mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";

// global
// old UI
const SUCCESS_CLASSNAME = "success__3Ai7";
const WRONG_ANSWER_CLASSNAME = "error__2Ft1";
const COMPILE_ERROR_AND_TLE_CLASSNAME = "error__10k9";

// new UI
const SUCCESS_CLASSNAME_NEW = "text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";
const WRONG_ANSWER_CLASSNAME_NEW = "whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";
const COMPILE_ERROR_AND_TLE_CLASSNAME_NEW = "mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s";

/***/ }),

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JF: () => (/* binding */ getFSRSParams),
/* harmony export */   Tb: () => (/* binding */ defaultParams),
/* harmony export */   Vd: () => (/* binding */ saveRevlog),
/* harmony export */   uY: () => (/* binding */ qualityToRating)
/* harmony export */ });
/* unused harmony exports saveFSRSParams, getAllRevlogs, exportRevlogsToCSV */
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214);
/* harmony import */ var _shared_browser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(867);






// 1. 创建自定义参数
const defaultParams = (0,ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .generatorParameters */ .EI)({
    request_retention: 0.9,          // 期望记忆保持率 90%
    maximum_interval: 365,           // 最大间隔天数
    enable_fuzz: false,              // 禁用时间模糊化
    enable_short_term: false          // 启用短期记忆影响
});

// 2. 评分映射（4个等级）
const qualityToRating = (quality) => {
    switch(quality) {
        case 1: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Again;  // 完全不会
        case 2: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Hard;   // 有点难
        case 3: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Good;   // 正常
        case 4: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Easy;   // 简单
        default: return ts_fsrs__WEBPACK_IMPORTED_MODULE_0__/* .Rating */ .iG.Good;
    }
};

// 3. 获取本地FSRS参数
const getFSRSParams = async () => {
    try {
        const result = await _delegate_localStorageDelegate_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.get('fsrs_params');
        console.log('找到本地FSRS参数:', result);
        if (!result) {
            console.log('未找到本地FSRS参数，使用默认参数');
            return defaultParams;
        }
        
        // 如果结果是字符串，尝试解析它
        if (typeof result === 'string') {
            try {
                const localParams = JSON.parse(result);
                console.log('获取到本地FSRS参数:', localParams);
                return localParams;
            } catch (e) {
                console.error('解析本地FSRS参数失败:', e);
                return defaultParams;
            }
        }
        
        // 如果结果已经是对象，直接返回
        return result;
    } catch (error) {
        console.error('获取本地FSRS参数失败:', error);
        return defaultParams;
    }
};

// 4. 保存FSRS参数到本地存储
const saveFSRSParams = async (newParams) => {
    try {
        // 为参数添加时间戳
        const paramsWithTimestamp = {
            ...newParams,
            timestamp: Date.now()
        };
        
        // 保存到本地存储（字符串格式）
        await localStorageDelegate.set('fsrs_params', JSON.stringify(paramsWithTimestamp));
        console.log('FSRS参数已保存到本地存储');
        
        // 保存到云端存储（对象格式）
        if (store.isCloudSyncEnabled) {
            await cloudStorageDelegate.set('fsrs_params', paramsWithTimestamp);
            console.log('FSRS参数已保存到云端存储');
        }
        
        return true;
    } catch (error) {
        console.error('保存FSRS参数失败:', error);
        return false;
    }
};

// 5. 保存单个复习日志
const saveRevlog = async (cardId, revlog) => {
    try {
        // 从 localStorage 获取现有的复习日志
        const { fsrs_revlogs: existingRevlogsStr = '{}' } = await _shared_browser_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.storage.local.get('fsrs_revlogs');

        
        let existingRevlogs;
        try {
            existingRevlogs = JSON.parse(existingRevlogsStr);
        } catch (e) {
            console.error('Error parsing revlogs:', e);
            existingRevlogs = {};
        }
        
        // 确保该卡片的日志数组存在
        if (!existingRevlogs[cardId]) {
            existingRevlogs[cardId] = [];
        }
        
        // 添加新的复习日志
        existingRevlogs[cardId].push(revlog);
        
        // 保存到本地存储
        await _shared_browser_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.storage.local.set({ 'fsrs_revlogs': JSON.stringify(existingRevlogs) });

        
        // 如果启用了云同步，同时保存到云端
        if (_store__WEBPACK_IMPORTED_MODULE_3__/* .store */ .h.isCloudSyncEnabled) {
            await _delegate_cloudStorageDelegate_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.set('fsrs_revlogs', existingRevlogs);
        }
        
        return true;
    } catch (error) {
        console.error('Error saving revlog:', error);
        return false;
    }
};

// 6. 获取所有复习日志
const getAllRevlogs = async () => {
    try {
        let result;
        
        // 如果启用了云同步，优先从云端获取
        if (store.isCloudSyncEnabled) {
            result = await cloudStorageDelegate.get('fsrs_revlogs');
            if (result && Object.keys(result).length > 0) {
                console.log('从云端获取复习日志:', result);
                return result;
            }
        }
        
        // 如果云端没有数据或未启用云同步，从本地获取
        const { fsrs_revlogs: localRevlogs = '{}' } = await browser.storage.local.get('fsrs_revlogs');
        result = localRevlogs;

        
        // 如果结果是字符串，尝试解析它
        if (typeof result === 'string') {
            try {
                return JSON.parse(result);
            } catch (e) {
                console.error('Error parsing revlogs:', e);
                return {};
            }
        }
        
        // 如果结果已经是对象，直接返回
        return result || {};
    } catch (error) {
        console.error('Error getting revlogs:', error);
        return {};
    }
};

// 7. 导出复习日志为CSV格式
const exportRevlogsToCSV = async () => {
    try {
        // 获取所有复习日志
        const allRevlogs = await getAllRevlogs();
        
        // CSV 头部 - 只包含必要字段
        const csvHeader = 'card_id,review_time,review_rating,review_state\n';
        
        // 收集所有卡片的复习日志
        let csvContent = csvHeader;
        
        Object.keys(allRevlogs).forEach(cardId => {
            const cardRevlogs = allRevlogs[cardId] || [];
            cardRevlogs.forEach(log => {
                // 只导出必要字段
                csvContent += `${log.card_id},${log.review_time},${log.review_rating},${log.review_state}\n`;
            });
        });
        
        return csvContent;
    } catch (error) {
        console.error('Error exporting revlogs to CSV:', error);
        return '';
    }
};


/***/ }),

/***/ 134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $z: () => (/* binding */ CONFIG_INNER_KEY_ENABLE_CLOUD),
/* harmony export */   FB: () => (/* binding */ REVIEW_INTV_KEY),
/* harmony export */   Q$: () => (/* binding */ CN_PROBLEM_KEY),
/* harmony export */   dw: () => (/* binding */ CN_MODE),
/* harmony export */   fR: () => (/* binding */ CONFIG_KEY),
/* harmony export */   hr: () => (/* binding */ DEFAULT_CARD_LIMIT_KEY),
/* harmony export */   pD: () => (/* binding */ DEFAULT_CARD_LIMIT_VALUE),
/* harmony export */   ql: () => (/* binding */ PROBLEM_SORT_BY_KEY),
/* harmony export */   y0: () => (/* binding */ PROBLEM_KEY)
/* harmony export */ });
/* unused harmony export OPS_HISTORY_KEY */
const CN_MODE = 'cn_mode';
const CN_PROBLEM_KEY = 'cn_records';
const PROBLEM_KEY = 'records';
const REVIEW_INTV_KEY = 'review_intervals';
const OPS_HISTORY_KEY = 'operation_history';
const PROBLEM_SORT_BY_KEY = 'problem_sort_by';
const CONFIG_KEY = 'configs';
const CONFIG_INNER_KEY_ENABLE_CLOUD = 'enable_cloud';
// 添加新的常量
const DEFAULT_CARD_LIMIT_KEY = 'defaultCardLimit';
const DEFAULT_CARD_LIMIT_VALUE = 3;

/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HF: () => (/* binding */ getSorterById),
/* harmony export */   SL: () => (/* binding */ problemSorters),
/* harmony export */   jD: () => (/* binding */ idOf)
/* harmony export */ });
/* unused harmony exports problemSorterArr, descriptionOf */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);


const reverse = (sorter) => {
    return (p1, p2) => -sorter(p1, p2)
}

const problemReviewTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getNextReviewTime */ .xt)(p1).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getNextReviewTime */ .xt)(p2).valueOf();
}

const problemDelayTimeComparator = (p1, p2) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDelayedHours */ .J1)(p2).valueOf() - (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getDelayedHours */ .J1)(p1).valueOf();
}

// functions used to sort problems
const problemSorters = {
    // reviewTimeSorter:
    sortByReviewTimeDesc:   reverse(problemReviewTimeComparator),
    sortByReviewTimeAsc:    problemReviewTimeComparator,
    sortByDelayHoursDesc:   problemDelayTimeComparator,
    sortByDelayHoursAsc:    reverse(problemDelayTimeComparator)
}

const problemSorterArr = [
    problemSorters.sortByReviewTimeAsc, 
    problemSorters.sortByReviewTimeDesc,
    problemSorters.sortByDelayHoursAsc,
    problemSorters.sortByDelayHoursDesc
];

const idOf = (sorter) => {
    return problemSorterArr.indexOf(sorter);
}

const getSorterById = (id) => {
    return problemSorterArr[id];
}

const descriptionOf = (sorter) => {
    let description;
    switch (sorter) {
        case problemSorters.sortByDelayHoursAsc:
            description = "Sort By Review Delayed Hours (ASC)";
            break;
        case problemSorters.sortByDelayHoursDesc:
            description = "Sort By Review Delayed Hours (DESC)";
            break;
        case problemSorters.sortByReviewTimeAsc:
            description = "Sort By Next Scheduled Review Time (ASC)";
            break;
        case problemSorters.sortByReviewTimeDesc:
            description = "Sort By Next Scheduled Review Time (DESC)";
            break;
        default:
            description = "";
    }
    return description;
} 

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J1: () => (/* binding */ getDelayedHours),
/* harmony export */   tL: () => (/* binding */ getDifficultyBasedSteps),
/* harmony export */   xt: () => (/* binding */ getNextReviewTime),
/* harmony export */   zJ: () => (/* binding */ simpleStringHash)
/* harmony export */ });
/* unused harmony exports needReview, scheduledReview, isCompleted, calculatePageNum, getLevelColor, isSubmitButton, getSubmissionResult, isSubmissionSuccess, updateProblemUponSuccessSubmission, mergeProblem, mergeProblems, syncStorage, syncLocalAndCloudStorage, getCurrentRetrievability, mergeFSRSParams, mergeRevlogs */
/* harmony import */ var _delegate_localStorageDelegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _delegate_cloudStorageDelegate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(188);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(497);
/* harmony import */ var ts_fsrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);






const needReview = (problem) => {
    if (problem.proficiency >= forggettingCurve.length) {
        return false;
    }

    const currentTime = Date.now();
    const timeDiffInMinute = (currentTime - problem.submissionTime) / (1000 * 60);
    return timeDiffInMinute >= forggettingCurve[problem.proficiency];
};

const scheduledReview = (problem) => {
    // return !needReview(problem) && problem.proficiency < 5;
    return true;
};

const isCompleted = (problem) => {
    return problem.proficiency === 5;
};

const calculatePageNum = (problems) => {
    return Math.max(Math.ceil(problems.length / PAGE_SIZE), 1);;
}

const getLevelColor = (level) => {
    switch (level) {
        case "Easy":
            return "rgb(67, 1 71)";  // 绿色
        case "Medium":
            return "#ff9800";  // 橙色
        case "Hard":
            return "rgb(233, 30, 99)";  // 红色
        default:
            return "inherit";
    }
};


const getNextReviewTime = (problem) => {
    // 如果有 FSRS 的 nextReview，优先使用它
    let date;
    if (problem.fsrsState && problem.fsrsState.nextReview) {
        date = new Date(problem.fsrsState.nextReview);
    } else {
        // 否则使用旧的计算方式（向后兼容）
        date = new Date(problem.submissionTime + _constants__WEBPACK_IMPORTED_MODULE_4__/* .forggettingCurve */ .mq[problem.proficiency] * 60 * 1000);
    }
    
    return date;
}


const getDelayedHours = (problem) => {
    const nextReviewDate = getNextReviewTime(problem);
    return Math.round((Date.now() - nextReviewDate) / (60 * 60 * 1000));
}

const getDifficultyBasedSteps = (diffculty) => {
    if (diffculty === "Easy") {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.easyIntv;
    } else if (diffculty === "Medium") {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.mediumIntv;
    } else {
        return _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h.hardIntv;
    }
}

const isSubmitButton = (element) => {
    return element.getAttribute(SUBMIT_BUTTON_ATTRIBUTE_NAME) === SUBMIT_BUTTON_ATTRIBUTE_VALUE;
}

const getSubmissionResult = () => {
    return document.getElementsByClassName(SUCCESS_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME_CN)[0] ||
    document.getElementsByClassName(SUCCESS_CLASSNAME)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME)[0] ||
    document.getElementsByClassName(SUCCESS_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(WRONG_ANSWER_CLASSNAME_NEW)[0] ||
    document.getElementsByClassName(COMPILE_ERROR_AND_TLE_CLASSNAME_NEW)[0];
}

const isSubmissionSuccess = (submissionResult) => {
    return submissionResult.className.includes(SUCCESS_CLASSNAME_CN) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME_NEW) ||
    submissionResult.className.includes(SUCCESS_CLASSNAME);
}

const updateProblemUponSuccessSubmission = (problem) => {
    const steps = getDifficultyBasedSteps(problem.problemLevel);
    let nextProficiencyIndex;
    for (const i of steps) {
        if (i > problem.proficiency) {
            nextProficiencyIndex = i;
            break;
        }
    }

    // further review needed
    if (nextProficiencyIndex !== undefined) {
        problem.proficiency = nextProficiencyIndex;
        // already completed all review
    } else {
        problem.proficiency = forggettingCurve.length;
    }
    problem.submissionTime = Date.now();
    problem.modificationTime = Date.now();
    return problem;
}

// for sync data over cloud & local
const mergeProblem = (p1, p2) => {
    if (p2 === undefined || p2 === null) return p1;
    if (p1 === undefined || p1 === null) return p2;
    if (p2.modificationTime === undefined || p2.modificationTime === null) return p1;
    if (p1.modificationTime === undefined || p1.modificationTime === null) return p2;

    return p1.modificationTime > p2.modificationTime ? p1 : p2;
}

const mergeProblems = (ps1, ps2) => {
    const problemIdSet = new Set([...Object.keys(ps1), ...Object.keys(ps2)]);
    const ps = {}
    problemIdSet.forEach(id => {
        const p1 = ps1[id], p2 = ps2[id];
        const p = mergeProblem(p1, p2);
        ps[id] = p;
    })

    return ps;
}

const syncStorage = async (sd1, sd2, key, merger) => {
    if (!store.isCloudSyncEnabled) return;
    const data1 = await sd1.get(key) || {};
    const data2 = await sd2.get(key) || {};
    const merged = merger(data1, data2);

    console.log("merging data from local and from cloud. local:")
    console.log(data1);
    console.log("merging data from local and from cloud. cloud:")
    console.log(data2);
    await sd1.set(key, merged);
    await sd2.set(key, merged);
}

const syncLocalAndCloudStorage = async (key, merger) => {
    await syncStorage(localStorageDelegate, cloudStorageDelegate, key, merger);
}

const simpleStringHash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
}

// 获取当前可检索性的辅助函数
const getCurrentRetrievability = (problem) => {
    if (!problem.fsrsState?.stability || !problem.fsrsState?.lastReview) {
        return 1;
    }
    
    const elapsedDays = dateDiffInDays(new Date(problem.fsrsState.lastReview), new Date());
    return forgetting_curve(elapsedDays, problem.fsrsState.stability);
};

const mergeFSRSParams = (params1, params2) => {
    if (params2 === undefined || params2 === null) return params1;
    if (params1 === undefined || params1 === null) return params2;
    
    // 如果云端数据比本地数据新，使用云端数据
    const timestamp1 = params1.timestamp || 0;
    const timestamp2 = params2.timestamp || 0;
    
    // 返回较新的数据
    const mergedParams = timestamp1 > timestamp2 ? params1 : params2;
    
    // 确保返回的数据包含最新的时间戳
    mergedParams.timestamp = Date.now();
    
    return mergedParams;
}

const mergeRevlogs = (revlogs1, revlogs2) => {
    if (revlogs2 === undefined || revlogs2 === null) return revlogs1 || {};
    if (revlogs1 === undefined || revlogs1 === null) return revlogs2 || {};
    
    // 确保 revlogs1 和 revlogs2 是对象
    revlogs1 = typeof revlogs1 === 'object' ? revlogs1 : {};
    revlogs2 = typeof revlogs2 === 'object' ? revlogs2 : {};
    
    // 合并复习日志
    const mergedRevlogs = { ...revlogs1 };
    
    // 遍历第二个复习日志集合
    Object.keys(revlogs2).forEach(cardId => {
        if (!mergedRevlogs[cardId]) {
            // 如果第一个集合没有该卡片的复习日志，直接使用第二个集合的
            mergedRevlogs[cardId] = Array.isArray(revlogs2[cardId]) ? revlogs2[cardId] : [];
        } else {
            // 如果两个集合都有该卡片的复习日志，合并两边的日志
            const logs2 = Array.isArray(revlogs2[cardId]) ? revlogs2[cardId] : [];
            const logs1 = Array.isArray(mergedRevlogs[cardId]) ? mergedRevlogs[cardId] : [];
            
            // 创建一个Map来存储唯一的复习日志
            const uniqueLogsMap = new Map();
            
            // 添加第一个集合的日志
            logs1.forEach(log => {
                if (log && typeof log === 'object') {
                    const key = `${log.card_id}_${log.review_time}_${log.review_rating}`;
                    uniqueLogsMap.set(key, log);
                }
            });
            
            // 添加第二个集合的日志
            logs2.forEach(log => {
                if (log && typeof log === 'object') {
                    const key = `${log.card_id}_${log.review_time}_${log.review_rating}`;
                    uniqueLogsMap.set(key, log);
                }
            });
            
            // 转换回数组并按时间排序
            mergedRevlogs[cardId] = Array.from(uniqueLogsMap.values())
                .sort((a, b) => b.review_time - a.review_time);
        }
    });
    
    return mergedRevlogs;
}




/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ 61:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EI: () => (/* binding */ $),
/* harmony export */   Ke: () => (/* binding */ W),
/* harmony export */   ZM: () => (/* binding */ c),
/* harmony export */   iG: () => (/* binding */ l),
/* harmony export */   mc: () => (/* binding */ h),
/* harmony export */   sH: () => (/* binding */ _),
/* harmony export */   tl: () => (/* binding */ x)
/* harmony export */ });
/* unused harmony exports AbstractScheduler, CLAMP_PARAMETERS, DECAY, DefaultInitSeedStrategy, FACTOR, FSRSAlgorithm, FSRSVersion, GenSeedStrategyWithCardId, Grades, INIT_S_MAX, StrategyMode, clamp, dateDiffInDays, date_diff, date_scheduler, default_enable_fuzz, default_enable_short_term, default_maximum_interval, default_request_retention, default_w, fixDate, fixRating, fixState, forgetting_curve, formatDate, fsrs, get_fuzz_range, show_diff_message */
var c=(s=>(s[s.New=0]="New",s[s.Learning=1]="Learning",s[s.Review=2]="Review",s[s.Relearning=3]="Relearning",s))(c||{}),l=(s=>(s[s.Manual=0]="Manual",s[s.Again=1]="Again",s[s.Hard=2]="Hard",s[s.Good=3]="Good",s[s.Easy=4]="Easy",s))(l||{});class h{static card(t){return{...t,state:h.state(t.state),due:h.time(t.due),last_review:t.last_review?h.time(t.last_review):void 0}}static rating(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=l[`${e}${i}`];if(a===void 0)throw new Error(`Invalid rating:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid rating:[${t}]`)}static state(t){if(typeof t=="string"){const e=t.charAt(0).toUpperCase(),i=t.slice(1).toLowerCase(),a=c[`${e}${i}`];if(a===void 0)throw new Error(`Invalid state:[${t}]`);return a}else if(typeof t=="number")return t;throw new Error(`Invalid state:[${t}]`)}static time(t){if(typeof t=="object"&&t instanceof Date)return t;if(typeof t=="string"){const e=Date.parse(t);if(isNaN(e))throw new Error(`Invalid date:[${t}]`);return new Date(e)}else if(typeof t=="number")return new Date(t);throw new Error(`Invalid date:[${t}]`)}static review_log(t){return{...t,due:h.time(t.due),rating:h.rating(t.rating),state:h.state(t.state),review:h.time(t.review)}}}const X="4.7.0";Date.prototype.scheduler=function(s,t){return L(this,s,t)},Date.prototype.diff=function(s,t){return I(this,s,t)},Date.prototype.format=function(){return G(this)},Date.prototype.dueFormat=function(s,t,e){return N(this,s,t,e)};function L(s,t,e){return new Date(e?h.time(s).getTime()+t*24*60*60*1e3:h.time(s).getTime()+t*60*1e3)}function I(s,t,e){if(!s||!t)throw new Error("Invalid date");const i=h.time(s).getTime()-h.time(t).getTime();let a=0;switch(e){case"days":a=Math.floor(i/(24*60*60*1e3));break;case"minutes":a=Math.floor(i/(60*1e3));break}return a}function G(s){const t=h.time(s),e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate(),r=t.getHours(),n=t.getMinutes(),d=t.getSeconds();return`${e}-${p(i)}-${p(a)} ${p(r)}:${p(n)}:${p(d)}`}function p(s){return s<10?`0${s}`:`${s}`}const S=[60,60,24,31,12],E=["second","min","hour","day","month","year"];function N(s,t,e,i=E){s=h.time(s),t=h.time(t),i.length!==E.length&&(i=E);let a=s.getTime()-t.getTime(),r;for(a/=1e3,r=0;r<S.length&&!(a<S[r]);r++)a/=S[r];return`${Math.floor(a)}${e?i[r]:""}`}function J(s){return h.time(s)}function K(s){return h.state(s)}function Q(s){return h.rating(s)}const k=[l.Again,l.Hard,l.Good,l.Easy],Z=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function C(s,t,e){let i=1;for(const n of Z)i+=n.factor*Math.max(Math.min(s,n.end)-n.start,0);s=Math.min(s,e);let a=Math.max(2,Math.round(s-i));const r=Math.min(Math.round(s+i),e);return s>t&&(a=Math.max(a,t+1)),a=Math.min(a,r),{min_ivl:a,max_ivl:r}}function m(s,t,e){return Math.min(Math.max(s,t),e)}function z(s,t){const e=Date.UTC(s.getUTCFullYear(),s.getUTCMonth(),s.getUTCDate()),i=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());return Math.floor((i-e)/864e5)}const T=.9,U=36500,q=[.40255,1.18385,3.173,15.69105,7.1949,.5345,1.4604,.0046,1.54575,.1192,1.01925,1.9395,.11,.29605,2.2698,.2315,2.9898,.51655,.6621],P=!1,Y=!0,tt=(/* unused pure expression or super */ null && (`v${X} using FSRS-5.0`)),_=.01,v=100,R=[[_,v],[_,v],[_,v],[_,v],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,2],[0,2]],$=s=>{let t=q;return s?.w&&(s.w.length===19?t=s?.w:s.w.length===17&&(t=s?.w.concat([0,0]),t[4]=+(t[5]*2+t[4]).toFixed(8),t[5]=+(Math.log(t[5]*3+1)/3).toFixed(8),t[6]=+(t[6]+.5).toFixed(8),console.debug("[FSRS V5]auto fill w to 19 length"))),t=t.map((e,i)=>m(e,R[i][0],R[i][1])),{request_retention:s?.request_retention||T,maximum_interval:s?.maximum_interval||U,w:t,enable_fuzz:s?.enable_fuzz??P,enable_short_term:s?.enable_short_term??Y}};function x(s,t){const e={due:s?h.time(s):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,state:c.New,last_review:void 0};return t&&typeof t=="function"?t(e):e}class et{c;s0;s1;s2;constructor(t){const e=it();this.c=1,this.s0=e(" "),this.s1=e(" "),this.s2=e(" "),t==null&&(t=+new Date),this.s0-=e(t),this.s0<0&&(this.s0+=1),this.s1-=e(t),this.s1<0&&(this.s1+=1),this.s2-=e(t),this.s2<0&&(this.s2+=1)}next(){const t=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.s2=t-(this.c=t|0),this.s2}set state(t){this.c=t.c,this.s0=t.s0,this.s1=t.s1,this.s2=t.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}}function it(){let s=4022871197;return function(t){t=String(t);for(let e=0;e<t.length;e++){s+=t.charCodeAt(e);let i=.02519603282416938*s;s=i>>>0,i-=s,i*=s,s=i>>>0,i-=s,s+=i*4294967296}return(s>>>0)*23283064365386963e-26}}function at(s){const t=new et(s),e=()=>t.next();return e.int32=()=>t.next()*4294967296|0,e.double=()=>e()+(e()*2097152|0)*11102230246251565e-32,e.state=()=>t.state,e.importState=i=>(t.state=i,e),e}const D=-.5,H=19/81;function O(s,t){return+Math.pow(1+H*s/t,D).toFixed(8)}class V{param;intervalModifier;_seed;constructor(t){this.param=new Proxy($(t),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention)}get interval_modifier(){return this.intervalModifier}set seed(t){this._seed=t}calculate_interval_modifier(t){if(t<=0||t>1)throw new Error("Requested retention rate should be in the range (0,1]");return+((Math.pow(t,1/D)-1)/H).toFixed(8)}get parameters(){return this.param}set parameters(t){this.update_parameters(t)}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)&&(t.intervalModifier=t.calculate_interval_modifier(Number(a))),Reflect.set(e,i,a),!0}}}update_parameters(t){const e=$(t);for(const i in e)if(i in this.param){const a=i;this.param[a]=e[a]}}init_stability(t){return Math.max(this.param.w[t-1],.1)}init_difficulty(t){return this.constrain_difficulty(this.param.w[4]-Math.exp((t-1)*this.param.w[5])+1)}apply_fuzz(t,e){if(!this.param.enable_fuzz||t<2.5)return Math.round(t);const i=at(this._seed)(),{min_ivl:a,max_ivl:r}=C(t,e,this.param.maximum_interval);return Math.floor(i*(r-a+1)+a)}next_interval(t,e){const i=Math.min(Math.max(1,Math.round(t*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(i,e)}linear_damping(t,e){return+(t*(10-e)/9).toFixed(8)}next_difficulty(t,e){const i=-this.param.w[6]*(e-3),a=t+this.linear_damping(i,t);return this.constrain_difficulty(this.mean_reversion(this.init_difficulty(l.Easy),a))}constrain_difficulty(t){return Math.min(Math.max(+t.toFixed(8),1),10)}mean_reversion(t,e){return+(this.param.w[7]*t+(1-this.param.w[7])*e).toFixed(8)}next_recall_stability(t,e,i,a){const r=l.Hard===a?this.param.w[15]:1,n=l.Easy===a?this.param.w[16]:1;return+m(e*(1+Math.exp(this.param.w[8])*(11-t)*Math.pow(e,-this.param.w[9])*(Math.exp((1-i)*this.param.w[10])-1)*r*n),_,36500).toFixed(8)}next_forget_stability(t,e,i){return+m(this.param.w[11]*Math.pow(t,-this.param.w[12])*(Math.pow(e+1,this.param.w[13])-1)*Math.exp((1-i)*this.param.w[14]),_,36500).toFixed(8)}next_short_term_stability(t,e){return+m(t*Math.exp(this.param.w[17]*(e-3+this.param.w[18])),_,36500).toFixed(8)}forgetting_curve=O;next_state(t,e,i){const{difficulty:a,stability:r}=t??{difficulty:0,stability:0};if(e<0)throw new Error(`Invalid delta_t "${e}"`);if(i<0||i>4)throw new Error(`Invalid grade "${i}"`);if(a===0&&r===0)return{difficulty:this.init_difficulty(i),stability:this.init_stability(i)};if(i===0)return{difficulty:a,stability:r};if(a<1||r<_)throw new Error(`Invalid memory state { difficulty: ${a}, stability: ${r} }`);const n=this.forgetting_curve(e,r),d=this.next_recall_stability(a,r,n,i),u=this.next_forget_stability(a,r,n),o=this.next_short_term_stability(r,i);let f=d;if(i===1){let[y,w]=[0,0];this.param.enable_short_term&&(y=this.param.w[17],w=this.param.w[18]);const g=r/Math.exp(y*w);f=m(+g.toFixed(8),_,u)}return e===0&&this.param.enable_short_term&&(f=o),{difficulty:this.next_difficulty(a,i),stability:f}}}function A(){const s=this.review_time.getTime(),t=this.current.reps,e=this.current.difficulty*this.current.stability;return`${s}_${t}_${e}`}function rt(s){return function(){const t=Reflect.get(this.current,s)??0,e=this.current.reps;return String(t+e||0)}}var b=(s=>(s.SCHEDULER="Scheduler",s.SEED="Seed",s))(b||{});class F{last;current;review_time;next=new Map;algorithm;initSeedStrategy;constructor(t,e,i,a={seed:A}){this.algorithm=i,this.initSeedStrategy=a.seed.bind(this),this.last=h.card(t),this.current=h.card(t),this.review_time=h.time(e),this.init()}init(){const{state:t,last_review:e}=this.current;let i=0;t!==c.New&&e&&(i=z(e,this.review_time)),this.current.last_review=this.review_time,this.current.elapsed_days=i,this.current.reps+=1,this.algorithm.seed=this.initSeedStrategy()}preview(){return{[l.Again]:this.review(l.Again),[l.Hard]:this.review(l.Hard),[l.Good]:this.review(l.Good),[l.Easy]:this.review(l.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(const t of k)yield this.review(t)}review(t){const{state:e}=this.last;let i;switch(e){case c.New:i=this.newState(t);break;case c.Learning:case c.Relearning:i=this.learningState(t);break;case c.Review:i=this.reviewState(t);break}if(i)return i;throw new Error("Invalid grade")}buildLog(t){const{last_review:e,due:i,elapsed_days:a}=this.last;return{rating:t,state:this.current.state,due:e||i,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.current.elapsed_days,last_elapsed_days:a,scheduled_days:this.current.scheduled_days,review:this.review_time}}}class j extends F{newState(t){const e=this.next.get(t);if(e)return e;const i=h.card(this.current);switch(i.difficulty=this.algorithm.init_difficulty(t),i.stability=this.algorithm.init_stability(t),t){case l.Again:i.scheduled_days=0,i.due=this.review_time.scheduler(1),i.state=c.Learning;break;case l.Hard:i.scheduled_days=0,i.due=this.review_time.scheduler(5),i.state=c.Learning;break;case l.Good:i.scheduled_days=0,i.due=this.review_time.scheduler(10),i.state=c.Learning;break;case l.Easy:{const r=this.algorithm.next_interval(i.stability,this.current.elapsed_days);i.scheduled_days=r,i.due=this.review_time.scheduler(r,!0),i.state=c.Review;break}default:throw new Error("Invalid grade")}const a={card:i,log:this.buildLog(t)};return this.next.set(t,a),a}learningState(t){const e=this.next.get(t);if(e)return e;const{state:i,difficulty:a,stability:r}=this.last,n=h.card(this.current),d=this.current.elapsed_days;switch(n.difficulty=this.algorithm.next_difficulty(a,t),n.stability=this.algorithm.next_short_term_stability(r,t),t){case l.Again:{n.scheduled_days=0,n.due=this.review_time.scheduler(5,!1),n.state=i;break}case l.Hard:{n.scheduled_days=0,n.due=this.review_time.scheduler(10),n.state=i;break}case l.Good:{const o=this.algorithm.next_interval(n.stability,d);n.scheduled_days=o,n.due=this.review_time.scheduler(o,!0),n.state=c.Review;break}case l.Easy:{const o=this.algorithm.next_short_term_stability(r,l.Good),f=this.algorithm.next_interval(o,d),y=Math.max(this.algorithm.next_interval(n.stability,d),f+1);n.scheduled_days=y,n.due=this.review_time.scheduler(y,!0),n.state=c.Review;break}default:throw new Error("Invalid grade")}const u={card:n,log:this.buildLog(t)};return this.next.set(t,u),u}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:r}=this.last,n=this.algorithm.forgetting_curve(i,r),d=h.card(this.current),u=h.card(this.current),o=h.card(this.current),f=h.card(this.current);this.next_ds(d,u,o,f,a,r,n),this.next_interval(d,u,o,f,i),this.next_state(d,u,o,f),d.lapses+=1;const y={card:d,log:this.buildLog(l.Again)},w={card:u,log:super.buildLog(l.Hard)},g={card:o,log:super.buildLog(l.Good)},M={card:f,log:super.buildLog(l.Easy)};return this.next.set(l.Again,y),this.next.set(l.Hard,w),this.next.set(l.Good,g),this.next.set(l.Easy,M),this.next.get(t)}next_ds(t,e,i,a,r,n,d){t.difficulty=this.algorithm.next_difficulty(r,l.Again);const u=n/Math.exp(this.algorithm.parameters.w[17]*this.algorithm.parameters.w[18]),o=this.algorithm.next_forget_stability(r,n,d);t.stability=m(+u.toFixed(8),_,o),e.difficulty=this.algorithm.next_difficulty(r,l.Hard),e.stability=this.algorithm.next_recall_stability(r,n,d,l.Hard),i.difficulty=this.algorithm.next_difficulty(r,l.Good),i.stability=this.algorithm.next_recall_stability(r,n,d,l.Good),a.difficulty=this.algorithm.next_difficulty(r,l.Easy),a.stability=this.algorithm.next_recall_stability(r,n,d,l.Easy)}next_interval(t,e,i,a,r){let n,d;n=this.algorithm.next_interval(e.stability,r),d=this.algorithm.next_interval(i.stability,r),n=Math.min(n,d),d=Math.max(d,n+1);const u=Math.max(this.algorithm.next_interval(a.stability,r),d+1);t.scheduled_days=0,t.due=this.review_time.scheduler(5),e.scheduled_days=n,e.due=this.review_time.scheduler(n,!0),i.scheduled_days=d,i.due=this.review_time.scheduler(d,!0),a.scheduled_days=u,a.due=this.review_time.scheduler(u,!0)}next_state(t,e,i,a){t.state=c.Relearning,e.state=c.Review,i.state=c.Review,a.state=c.Review}}class B extends F{newState(t){const e=this.next.get(t);if(e)return e;this.current.scheduled_days=0,this.current.elapsed_days=0;const i=h.card(this.current),a=h.card(this.current),r=h.card(this.current),n=h.card(this.current);return this.init_ds(i,a,r,n),this.next_interval(i,a,r,n,0),this.next_state(i,a,r,n),this.update_next(i,a,r,n),this.next.get(t)}init_ds(t,e,i,a){t.difficulty=this.algorithm.init_difficulty(l.Again),t.stability=this.algorithm.init_stability(l.Again),e.difficulty=this.algorithm.init_difficulty(l.Hard),e.stability=this.algorithm.init_stability(l.Hard),i.difficulty=this.algorithm.init_difficulty(l.Good),i.stability=this.algorithm.init_stability(l.Good),a.difficulty=this.algorithm.init_difficulty(l.Easy),a.stability=this.algorithm.init_stability(l.Easy)}learningState(t){return this.reviewState(t)}reviewState(t){const e=this.next.get(t);if(e)return e;const i=this.current.elapsed_days,{difficulty:a,stability:r}=this.last,n=this.algorithm.forgetting_curve(i,r),d=h.card(this.current),u=h.card(this.current),o=h.card(this.current),f=h.card(this.current);return this.next_ds(d,u,o,f,a,r,n),this.next_interval(d,u,o,f,i),this.next_state(d,u,o,f),d.lapses+=1,this.update_next(d,u,o,f),this.next.get(t)}next_ds(t,e,i,a,r,n,d){t.difficulty=this.algorithm.next_difficulty(r,l.Again);const u=this.algorithm.next_forget_stability(r,n,d);t.stability=m(n,_,u),e.difficulty=this.algorithm.next_difficulty(r,l.Hard),e.stability=this.algorithm.next_recall_stability(r,n,d,l.Hard),i.difficulty=this.algorithm.next_difficulty(r,l.Good),i.stability=this.algorithm.next_recall_stability(r,n,d,l.Good),a.difficulty=this.algorithm.next_difficulty(r,l.Easy),a.stability=this.algorithm.next_recall_stability(r,n,d,l.Easy)}next_interval(t,e,i,a,r){let n,d,u,o;n=this.algorithm.next_interval(t.stability,r),d=this.algorithm.next_interval(e.stability,r),u=this.algorithm.next_interval(i.stability,r),o=this.algorithm.next_interval(a.stability,r),n=Math.min(n,d),d=Math.max(d,n+1),u=Math.max(u,d+1),o=Math.max(o,u+1),t.scheduled_days=n,t.due=this.review_time.scheduler(n,!0),e.scheduled_days=d,e.due=this.review_time.scheduler(d,!0),i.scheduled_days=u,i.due=this.review_time.scheduler(u,!0),a.scheduled_days=o,a.due=this.review_time.scheduler(o,!0)}next_state(t,e,i,a){t.state=c.Review,e.state=c.Review,i.state=c.Review,a.state=c.Review}update_next(t,e,i,a){const r={card:t,log:this.buildLog(l.Again)},n={card:e,log:super.buildLog(l.Hard)},d={card:i,log:super.buildLog(l.Good)},u={card:a,log:super.buildLog(l.Easy)};this.next.set(l.Again,r),this.next.set(l.Hard,n),this.next.set(l.Good,d),this.next.set(l.Easy,u)}}class st{fsrs;constructor(t){this.fsrs=t}replay(t,e,i){return this.fsrs.next(t,e,i)}handleManualRating(t,e,i,a,r,n,d){if(typeof e>"u")throw new Error("reschedule: state is required for manual rating");let u,o;if(e===c.New)u={rating:l.Manual,state:e,due:d??i,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},o=x(i),o.last_review=i;else{if(typeof d>"u")throw new Error("reschedule: due is required for manual rating");const f=d.diff(i,"days");u={rating:l.Manual,state:t.state,due:t.last_review||t.due,stability:t.stability,difficulty:t.difficulty,elapsed_days:a,last_elapsed_days:t.elapsed_days,scheduled_days:t.scheduled_days,review:i},o={...t,state:e,due:d,last_review:i,stability:r||t.stability,difficulty:n||t.difficulty,elapsed_days:a,scheduled_days:f,reps:t.reps+1}}return{card:o,log:u}}reschedule(t,e){const i=[];let a=x(t.due);for(const r of e){let n;if(r.review=h.time(r.review),r.rating===l.Manual){let d=0;a.state!==c.New&&a.last_review&&(d=r.review.diff(a.last_review,"days")),n=this.handleManualRating(a,r.state,r.review,d,r.stability,r.difficulty,r.due?h.time(r.due):void 0)}else n=this.replay(a,r.review,r.rating);i.push(n),a=n.card}return i}calculateManualRecord(t,e,i,a){if(!i)return null;const{card:r,log:n}=i,d=h.card(t);return d.due.getTime()===r.due.getTime()?null:(d.scheduled_days=r.due.diff(d.due,"days"),this.handleManualRating(d,r.state,h.time(e),n.elapsed_days,a?r.stability:void 0,a?r.difficulty:void 0,r.due))}}class W extends V{strategyHandler=new Map;Scheduler;constructor(t){super(t);const{enable_short_term:e}=this.parameters;this.Scheduler=e?j:B}params_handler_proxy(){const t=this;return{set:function(e,i,a){return i==="request_retention"&&Number.isFinite(a)?t.intervalModifier=t.calculate_interval_modifier(Number(a)):i==="enable_short_term"&&(t.Scheduler=a===!0?j:B),Reflect.set(e,i,a),!0}}}useStrategy(t,e){return this.strategyHandler.set(t,e),this}clearStrategy(t){return t?this.strategyHandler.delete(t):this.strategyHandler.clear(),this}getScheduler(t,e){const i=this.strategyHandler.get(b.SEED),a=this.strategyHandler.get(b.SCHEDULER)||this.Scheduler,r=i||A;return new a(t,e,this,{seed:r})}repeat(t,e,i){const a=this.getScheduler(t,e).preview();return i&&typeof i=="function"?i(a):a}next(t,e,i,a){const r=this.getScheduler(t,e),n=h.rating(i);if(n===l.Manual)throw new Error("Cannot review a manual rating");const d=r.review(n);return a&&typeof a=="function"?a(d):d}get_retrievability(t,e,i=!0){const a=h.card(t);e=e?h.time(e):new Date;const r=a.state!==c.New?Math.max(e.diff(a.last_review,"days"),0):0,n=a.state!==c.New?this.forgetting_curve(r,+a.stability.toFixed(8)):0;return i?`${(n*100).toFixed(2)}%`:n}rollback(t,e,i){const a=h.card(t),r=h.review_log(e);if(r.rating===l.Manual)throw new Error("Cannot rollback a manual rating");let n,d,u;switch(r.state){case c.New:n=r.due,d=void 0,u=0;break;case c.Learning:case c.Relearning:case c.Review:n=r.review,d=r.due,u=a.lapses-(r.rating===l.Again&&r.state===c.Review?1:0);break}const o={...a,due:n,stability:r.stability,difficulty:r.difficulty,elapsed_days:r.last_elapsed_days,scheduled_days:r.scheduled_days,reps:Math.max(0,a.reps-1),lapses:Math.max(0,u),state:r.state,last_review:d};return i&&typeof i=="function"?i(o):o}forget(t,e,i=!1,a){const r=h.card(t);e=h.time(e);const n=r.state===c.New?0:e.diff(r.last_review,"days"),d={rating:l.Manual,state:r.state,due:r.due,stability:r.stability,difficulty:r.difficulty,elapsed_days:0,last_elapsed_days:r.elapsed_days,scheduled_days:n,review:e},u={card:{...r,due:e,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:i?0:r.reps,lapses:i?0:r.lapses,state:c.New,last_review:r.last_review},log:d};return a&&typeof a=="function"?a(u):u}reschedule(t,e=[],i={}){const{recordLogHandler:a,reviewsOrderBy:r,skipManual:n=!0,now:d=new Date,update_memory_state:u=!1}=i;r&&typeof r=="function"&&e.sort(r),n&&(e=e.filter(M=>M.rating!==l.Manual));const o=new st(this),f=o.reschedule(i.first_card||x(),e),y=f.length,w=h.card(t),g=o.calculateManualRecord(w,d,y?f[y-1]:void 0,u);return a&&typeof a=="function"?{collections:f.map(a),reschedule_item:g?a(g):null}:{collections:f,reschedule_item:g}}}const nt=s=>new W(s||{});
//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(597);
/******/ 	
/******/ })()
;
//# sourceMappingURL=leetcodecn.js.map