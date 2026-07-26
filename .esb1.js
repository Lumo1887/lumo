"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@supabase/ssr/dist/main/version.js
var require_version = __commonJS({
  "node_modules/@supabase/ssr/dist/main/version.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VERSION = void 0;
    exports2.VERSION = "0.5.2";
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports2) {
    "use strict";
    exports2.parse = parse;
    exports2.serialize = serialize;
    var __toString = Object.prototype.toString;
    var __hasOwnProperty = Object.prototype.hasOwnProperty;
    var cookieNameRegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    var cookieValueRegExp = /^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    function parse(str, opt) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var len = str.length;
      if (len < 2) return obj;
      var dec = opt && opt.decode || decode;
      var index = 0;
      var eqIdx = 0;
      var endIdx = 0;
      do {
        eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break;
        endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = len;
        } else if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var keyStartIdx = startIndex(str, index, eqIdx);
        var keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        var key = str.slice(keyStartIdx, keyEndIdx);
        if (!__hasOwnProperty.call(obj, key)) {
          var valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          var valEndIdx = endIndex(str, endIdx, valStartIdx);
          if (str.charCodeAt(valStartIdx) === 34 && str.charCodeAt(valEndIdx - 1) === 34) {
            valStartIdx++;
            valEndIdx--;
          }
          var val = str.slice(valStartIdx, valEndIdx);
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        var code = str.charCodeAt(index);
        if (code !== 32 && code !== 9) return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        var code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9) return index + 1;
      }
      return min;
    }
    function serialize(name, val, opt) {
      var enc = opt && opt.encode || encodeURIComponent;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (!opt) return str;
      if (null != opt.maxAge) {
        var maxAge = Math.floor(opt.maxAge);
        if (!isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + maxAge;
      }
      if (opt.domain) {
        if (!domainValueRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!pathValueRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/@supabase/ssr/dist/main/utils/helpers.js
var require_helpers = __commonJS({
  "node_modules/@supabase/ssr/dist/main/utils/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isBrowser = exports2.serializeCookieHeader = exports2.parseCookieHeader = exports2.serialize = exports2.parse = void 0;
    var cookie_1 = require_cookie();
    exports2.parse = cookie_1.parse;
    exports2.serialize = cookie_1.serialize;
    function parseCookieHeader(header) {
      const parsed = (0, cookie_1.parse)(header);
      return Object.keys(parsed ?? {}).map((name) => ({
        name,
        value: parsed[name]
      }));
    }
    exports2.parseCookieHeader = parseCookieHeader;
    function serializeCookieHeader(name, value, options) {
      return (0, cookie_1.serialize)(name, value, options);
    }
    exports2.serializeCookieHeader = serializeCookieHeader;
    function isBrowser() {
      return typeof window !== "undefined" && typeof window.document !== "undefined";
    }
    exports2.isBrowser = isBrowser;
  }
});

// node_modules/@supabase/ssr/dist/main/utils/constants.js
var require_constants = __commonJS({
  "node_modules/@supabase/ssr/dist/main/utils/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_COOKIE_OPTIONS = void 0;
    exports2.DEFAULT_COOKIE_OPTIONS = {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      // https://developer.chrome.com/blog/cookie-max-age-expires
      // https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html#name-cookie-lifetime-limits
      maxAge: 400 * 24 * 60 * 60
    };
  }
});

// node_modules/@supabase/ssr/dist/main/utils/chunker.js
var require_chunker = __commonJS({
  "node_modules/@supabase/ssr/dist/main/utils/chunker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.deleteChunks = exports2.combineChunks = exports2.createChunks = exports2.isChunkLike = exports2.MAX_CHUNK_SIZE = void 0;
    exports2.MAX_CHUNK_SIZE = 3180;
    var CHUNK_LIKE_REGEX = /^(.*)[.](0|[1-9][0-9]*)$/;
    function isChunkLike(cookieName, key) {
      if (cookieName === key) {
        return true;
      }
      const chunkLike = cookieName.match(CHUNK_LIKE_REGEX);
      if (chunkLike && chunkLike[1] === key) {
        return true;
      }
      return false;
    }
    exports2.isChunkLike = isChunkLike;
    function createChunks(key, value, chunkSize) {
      const resolvedChunkSize = chunkSize ?? exports2.MAX_CHUNK_SIZE;
      let encodedValue = encodeURIComponent(value);
      if (encodedValue.length <= resolvedChunkSize) {
        return [{ name: key, value }];
      }
      const chunks = [];
      while (encodedValue.length > 0) {
        let encodedChunkHead = encodedValue.slice(0, resolvedChunkSize);
        const lastEscapePos = encodedChunkHead.lastIndexOf("%");
        if (lastEscapePos > resolvedChunkSize - 3) {
          encodedChunkHead = encodedChunkHead.slice(0, lastEscapePos);
        }
        let valueHead = "";
        while (encodedChunkHead.length > 0) {
          try {
            valueHead = decodeURIComponent(encodedChunkHead);
            break;
          } catch (error) {
            if (error instanceof URIError && encodedChunkHead.at(-3) === "%" && encodedChunkHead.length > 3) {
              encodedChunkHead = encodedChunkHead.slice(0, encodedChunkHead.length - 3);
            } else {
              throw error;
            }
          }
        }
        chunks.push(valueHead);
        encodedValue = encodedValue.slice(encodedChunkHead.length);
      }
      return chunks.map((value2, i) => ({ name: `${key}.${i}`, value: value2 }));
    }
    exports2.createChunks = createChunks;
    async function combineChunks(key, retrieveChunk) {
      const value = await retrieveChunk(key);
      if (value) {
        return value;
      }
      let values = [];
      for (let i = 0; ; i++) {
        const chunkName = `${key}.${i}`;
        const chunk = await retrieveChunk(chunkName);
        if (!chunk) {
          break;
        }
        values.push(chunk);
      }
      if (values.length > 0) {
        return values.join("");
      }
      return null;
    }
    exports2.combineChunks = combineChunks;
    async function deleteChunks(key, retrieveChunk, removeChunk) {
      const value = await retrieveChunk(key);
      if (value) {
        await removeChunk(key);
      }
      for (let i = 0; ; i++) {
        const chunkName = `${key}.${i}`;
        const chunk = await retrieveChunk(chunkName);
        if (!chunk) {
          break;
        }
        await removeChunk(chunkName);
      }
    }
    exports2.deleteChunks = deleteChunks;
  }
});

// node_modules/@supabase/ssr/dist/main/utils/base64url.js
var require_base64url = __commonJS({
  "node_modules/@supabase/ssr/dist/main/utils/base64url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringFromUTF8 = exports2.stringToUTF8 = exports2.codepointToUTF8 = exports2.stringFromBase64URL = exports2.stringToBase64URL = void 0;
    var TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
    var IGNORE_BASE64URL = " 	\n\r=".split("");
    var FROM_BASE64URL = (() => {
      const charMap = new Array(128);
      for (let i = 0; i < charMap.length; i += 1) {
        charMap[i] = -1;
      }
      for (let i = 0; i < IGNORE_BASE64URL.length; i += 1) {
        charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
      }
      for (let i = 0; i < TO_BASE64URL.length; i += 1) {
        charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
      }
      return charMap;
    })();
    function stringToBase64URL(str) {
      const base64 = [];
      let queue = 0;
      let queuedBits = 0;
      const emitter = (byte) => {
        queue = queue << 8 | byte;
        queuedBits += 8;
        while (queuedBits >= 6) {
          const pos = queue >> queuedBits - 6 & 63;
          base64.push(TO_BASE64URL[pos]);
          queuedBits -= 6;
        }
      };
      stringToUTF8(str, emitter);
      if (queuedBits > 0) {
        queue = queue << 6 - queuedBits;
        queuedBits = 6;
        while (queuedBits >= 6) {
          const pos = queue >> queuedBits - 6 & 63;
          base64.push(TO_BASE64URL[pos]);
          queuedBits -= 6;
        }
      }
      return base64.join("");
    }
    exports2.stringToBase64URL = stringToBase64URL;
    function stringFromBase64URL(str) {
      const conv = [];
      const emit = (codepoint) => {
        conv.push(String.fromCodePoint(codepoint));
      };
      const state = {
        utf8seq: 0,
        codepoint: 0
      };
      let queue = 0;
      let queuedBits = 0;
      for (let i = 0; i < str.length; i += 1) {
        const codepoint = str.charCodeAt(i);
        const bits = FROM_BASE64URL[codepoint];
        if (bits > -1) {
          queue = queue << 6 | bits;
          queuedBits += 6;
          while (queuedBits >= 8) {
            stringFromUTF8(queue >> queuedBits - 8 & 255, state, emit);
            queuedBits -= 8;
          }
        } else if (bits === -2) {
          continue;
        } else {
          throw new Error(`Invalid Base64-URL character "${str.at(i)}" at position ${i}`);
        }
      }
      return conv.join("");
    }
    exports2.stringFromBase64URL = stringFromBase64URL;
    function codepointToUTF8(codepoint, emit) {
      if (codepoint <= 127) {
        emit(codepoint);
        return;
      } else if (codepoint <= 2047) {
        emit(192 | codepoint >> 6);
        emit(128 | codepoint & 63);
        return;
      } else if (codepoint <= 65535) {
        emit(224 | codepoint >> 12);
        emit(128 | codepoint >> 6 & 63);
        emit(128 | codepoint & 63);
        return;
      } else if (codepoint <= 1114111) {
        emit(240 | codepoint >> 18);
        emit(128 | codepoint >> 12 & 63);
        emit(128 | codepoint >> 6 & 63);
        emit(128 | codepoint & 63);
        return;
      }
      throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
    }
    exports2.codepointToUTF8 = codepointToUTF8;
    function stringToUTF8(str, emit) {
      for (let i = 0; i < str.length; i += 1) {
        let codepoint = str.charCodeAt(i);
        if (codepoint > 55295 && codepoint <= 56319) {
          const highSurrogate = (codepoint - 55296) * 1024 & 65535;
          const lowSurrogate = str.charCodeAt(i + 1) - 56320 & 65535;
          codepoint = (lowSurrogate | highSurrogate) + 65536;
          i += 1;
        }
        codepointToUTF8(codepoint, emit);
      }
    }
    exports2.stringToUTF8 = stringToUTF8;
    function stringFromUTF8(byte, state, emit) {
      if (state.utf8seq === 0) {
        if (byte <= 127) {
          emit(byte);
          return;
        }
        for (let leadingBit = 1; leadingBit < 6; leadingBit += 1) {
          if ((byte >> 7 - leadingBit & 1) === 0) {
            state.utf8seq = leadingBit;
            break;
          }
        }
        if (state.utf8seq === 2) {
          state.codepoint = byte & 31;
        } else if (state.utf8seq === 3) {
          state.codepoint = byte & 15;
        } else if (state.utf8seq === 4) {
          state.codepoint = byte & 7;
        } else {
          throw new Error("Invalid UTF-8 sequence");
        }
        state.utf8seq -= 1;
      } else if (state.utf8seq > 0) {
        if (byte <= 127) {
          throw new Error("Invalid UTF-8 sequence");
        }
        state.codepoint = state.codepoint << 6 | byte & 63;
        state.utf8seq -= 1;
        if (state.utf8seq === 0) {
          emit(state.codepoint);
        }
      }
    }
    exports2.stringFromUTF8 = stringFromUTF8;
  }
});

// node_modules/@supabase/ssr/dist/main/utils/index.js
var require_utils = __commonJS({
  "node_modules/@supabase/ssr/dist/main/utils/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_helpers(), exports2);
    __exportStar(require_constants(), exports2);
    __exportStar(require_chunker(), exports2);
    __exportStar(require_base64url(), exports2);
  }
});

// node_modules/@supabase/ssr/dist/main/cookies.js
var require_cookies = __commonJS({
  "node_modules/@supabase/ssr/dist/main/cookies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.applyServerStorage = exports2.createStorageFromOptions = void 0;
    var cookie_1 = require_cookie();
    var utils_1 = require_utils();
    var BASE64_PREFIX = "base64-";
    function createStorageFromOptions(options, isServerClient) {
      const cookies2 = options.cookies ?? null;
      const cookieEncoding = options.cookieEncoding;
      const setItems = {};
      const removedItems = {};
      let getAll;
      let setAll;
      if (cookies2) {
        if ("get" in cookies2) {
          const getWithHints = async (keyHints) => {
            const chunkNames = keyHints.flatMap((keyHint) => [
              keyHint,
              ...Array.from({ length: 5 }).map((_, i) => `${keyHint}.${i}`)
            ]);
            const chunks = [];
            for (let i = 0; i < chunkNames.length; i += 1) {
              const value = await cookies2.get(chunkNames[i]);
              if (!value && typeof value !== "string") {
                continue;
              }
              chunks.push({ name: chunkNames[i], value });
            }
            return chunks;
          };
          getAll = async (keyHints) => await getWithHints(keyHints);
          if ("set" in cookies2 && "remove" in cookies2) {
            setAll = async (setCookies) => {
              for (let i = 0; i < setCookies.length; i += 1) {
                const { name, value, options: options2 } = setCookies[i];
                if (value) {
                  await cookies2.set(name, value, options2);
                } else {
                  await cookies2.remove(name, options2);
                }
              }
            };
          } else if (isServerClient) {
            setAll = async () => {
              console.warn("@supabase/ssr: createServerClient was configured without set and remove cookie methods, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness. Consider switching to the getAll and setAll cookie methods instead of get, set and remove which are deprecated and can be difficult to use correctly.");
            };
          } else {
            throw new Error("@supabase/ssr: createBrowserClient requires configuring a getAll and setAll cookie method (deprecated: alternatively both get, set and remove can be used)");
          }
        } else if ("getAll" in cookies2) {
          getAll = async () => await cookies2.getAll();
          if ("setAll" in cookies2) {
            setAll = cookies2.setAll;
          } else if (isServerClient) {
            setAll = async () => {
              console.warn("@supabase/ssr: createServerClient was configured without the setAll cookie method, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness.");
            };
          } else {
            throw new Error("@supabase/ssr: createBrowserClient requires configuring both getAll and setAll cookie methods (deprecated: alternatively both get, set and remove can be used)");
          }
        } else {
          throw new Error(`@supabase/ssr: ${isServerClient ? "createServerClient" : "createBrowserClient"} requires configuring getAll and setAll cookie methods (deprecated: alternatively use get, set and remove).${(0, utils_1.isBrowser)() ? " As this is called in a browser runtime, consider removing the cookies option object to use the document.cookie API automatically." : ""}`);
        }
      } else if (!isServerClient && (0, utils_1.isBrowser)()) {
        const noHintGetAll = () => {
          const parsed = (0, cookie_1.parse)(document.cookie);
          return Object.keys(parsed).map((name) => ({ name, value: parsed[name] }));
        };
        getAll = () => noHintGetAll();
        setAll = (setCookies) => {
          setCookies.forEach(({ name, value, options: options2 }) => {
            document.cookie = (0, cookie_1.serialize)(name, value, options2);
          });
        };
      } else if (isServerClient) {
        throw new Error("@supabase/ssr: createServerClient must be initialized with cookie options that specify getAll and setAll functions (deprecated, not recommended: alternatively use get, set and remove)");
      } else {
        getAll = () => {
          return [];
        };
        setAll = () => {
          throw new Error("@supabase/ssr: createBrowserClient in non-browser runtimes (including Next.js pre-rendering mode) was not initialized cookie options that specify getAll and setAll functions (deprecated: alternatively use get, set and remove), but they were needed");
        };
      }
      if (!isServerClient) {
        return {
          getAll,
          // for type consistency
          setAll,
          // for type consistency
          setItems,
          // for type consistency
          removedItems,
          // for type consistency
          storage: {
            isServer: false,
            getItem: async (key) => {
              const allCookies = await getAll([key]);
              const chunkedCookie = await (0, utils_1.combineChunks)(key, async (chunkName) => {
                const cookie = allCookies?.find(({ name }) => name === chunkName) || null;
                if (!cookie) {
                  return null;
                }
                return cookie.value;
              });
              if (!chunkedCookie) {
                return null;
              }
              let decoded = chunkedCookie;
              if (chunkedCookie.startsWith(BASE64_PREFIX)) {
                decoded = (0, utils_1.stringFromBase64URL)(chunkedCookie.substring(BASE64_PREFIX.length));
              }
              return decoded;
            },
            setItem: async (key, value) => {
              const allCookies = await getAll([key]);
              const cookieNames = allCookies?.map(({ name }) => name) || [];
              const removeCookies = new Set(cookieNames.filter((name) => (0, utils_1.isChunkLike)(name, key)));
              let encoded = value;
              if (cookieEncoding === "base64url") {
                encoded = BASE64_PREFIX + (0, utils_1.stringToBase64URL)(value);
              }
              const setCookies = (0, utils_1.createChunks)(key, encoded);
              setCookies.forEach(({ name }) => {
                removeCookies.delete(name);
              });
              const removeCookieOptions = {
                ...utils_1.DEFAULT_COOKIE_OPTIONS,
                ...options?.cookieOptions,
                maxAge: 0
              };
              const setCookieOptions = {
                ...utils_1.DEFAULT_COOKIE_OPTIONS,
                ...options?.cookieOptions,
                maxAge: utils_1.DEFAULT_COOKIE_OPTIONS.maxAge
              };
              delete removeCookieOptions.name;
              delete setCookieOptions.name;
              const allToSet = [
                ...[...removeCookies].map((name) => ({
                  name,
                  value: "",
                  options: removeCookieOptions
                })),
                ...setCookies.map(({ name, value: value2 }) => ({
                  name,
                  value: value2,
                  options: setCookieOptions
                }))
              ];
              if (allToSet.length > 0) {
                await setAll(allToSet);
              }
            },
            removeItem: async (key) => {
              const allCookies = await getAll([key]);
              const cookieNames = allCookies?.map(({ name }) => name) || [];
              const removeCookies = cookieNames.filter((name) => (0, utils_1.isChunkLike)(name, key));
              const removeCookieOptions = {
                ...utils_1.DEFAULT_COOKIE_OPTIONS,
                ...options?.cookieOptions,
                maxAge: 0
              };
              delete removeCookieOptions.name;
              if (removeCookies.length > 0) {
                await setAll(removeCookies.map((name) => ({
                  name,
                  value: "",
                  options: removeCookieOptions
                })));
              }
            }
          }
        };
      }
      return {
        getAll,
        setAll,
        setItems,
        removedItems,
        storage: {
          // to signal to the libraries that these cookies are
          // coming from a server environment and their value
          // should not be trusted
          isServer: true,
          getItem: async (key) => {
            if (typeof setItems[key] === "string") {
              return setItems[key];
            }
            if (removedItems[key]) {
              return null;
            }
            const allCookies = await getAll([key]);
            const chunkedCookie = await (0, utils_1.combineChunks)(key, async (chunkName) => {
              const cookie = allCookies?.find(({ name }) => name === chunkName) || null;
              if (!cookie) {
                return null;
              }
              return cookie.value;
            });
            if (!chunkedCookie) {
              return null;
            }
            let decoded = chunkedCookie;
            if (typeof chunkedCookie === "string" && chunkedCookie.startsWith(BASE64_PREFIX)) {
              decoded = (0, utils_1.stringFromBase64URL)(chunkedCookie.substring(BASE64_PREFIX.length));
            }
            return decoded;
          },
          setItem: async (key, value) => {
            if (key.endsWith("-code-verifier")) {
              await applyServerStorage({
                getAll,
                setAll,
                // pretend only that the code verifier was set
                setItems: { [key]: value },
                // pretend that nothing was removed
                removedItems: {}
              }, {
                cookieOptions: options?.cookieOptions ?? null,
                cookieEncoding
              });
            }
            setItems[key] = value;
            delete removedItems[key];
          },
          removeItem: async (key) => {
            delete setItems[key];
            removedItems[key] = true;
          }
        }
      };
    }
    exports2.createStorageFromOptions = createStorageFromOptions;
    async function applyServerStorage({ getAll, setAll, setItems, removedItems }, options) {
      const cookieEncoding = options.cookieEncoding;
      const cookieOptions = options.cookieOptions ?? null;
      const allCookies = await getAll([
        ...setItems ? Object.keys(setItems) : [],
        ...removedItems ? Object.keys(removedItems) : []
      ]);
      const cookieNames = allCookies?.map(({ name }) => name) || [];
      const removeCookies = Object.keys(removedItems).flatMap((itemName) => {
        return cookieNames.filter((name) => (0, utils_1.isChunkLike)(name, itemName));
      });
      const setCookies = Object.keys(setItems).flatMap((itemName) => {
        const removeExistingCookiesForItem = new Set(cookieNames.filter((name) => (0, utils_1.isChunkLike)(name, itemName)));
        let encoded = setItems[itemName];
        if (cookieEncoding === "base64url") {
          encoded = BASE64_PREFIX + (0, utils_1.stringToBase64URL)(encoded);
        }
        const chunks = (0, utils_1.createChunks)(itemName, encoded);
        chunks.forEach((chunk) => {
          removeExistingCookiesForItem.delete(chunk.name);
        });
        removeCookies.push(...removeExistingCookiesForItem);
        return chunks;
      });
      const removeCookieOptions = {
        ...utils_1.DEFAULT_COOKIE_OPTIONS,
        ...cookieOptions,
        maxAge: 0
      };
      const setCookieOptions = {
        ...utils_1.DEFAULT_COOKIE_OPTIONS,
        ...cookieOptions,
        maxAge: utils_1.DEFAULT_COOKIE_OPTIONS.maxAge
      };
      delete removeCookieOptions.name;
      delete setCookieOptions.name;
      await setAll([
        ...removeCookies.map((name) => ({
          name,
          value: "",
          options: removeCookieOptions
        })),
        ...setCookies.map(({ name, value }) => ({
          name,
          value,
          options: setCookieOptions
        }))
      ]);
    }
    exports2.applyServerStorage = applyServerStorage;
  }
});

// node_modules/@supabase/ssr/dist/main/createBrowserClient.js
var require_createBrowserClient = __commonJS({
  "node_modules/@supabase/ssr/dist/main/createBrowserClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createBrowserClient = void 0;
    var supabase_js_1 = require("@supabase/supabase-js");
    var version_1 = require_version();
    var utils_1 = require_utils();
    var cookies_1 = require_cookies();
    var cachedBrowserClient;
    function createBrowserClient(supabaseUrl, supabaseKey, options) {
      const shouldUseSingleton = options?.isSingleton === true || (!options || !("isSingleton" in options)) && (0, utils_1.isBrowser)();
      if (shouldUseSingleton && cachedBrowserClient) {
        return cachedBrowserClient;
      }
      if (!supabaseUrl || !supabaseKey) {
        throw new Error(`@supabase/ssr: Your project's URL and API key are required to create a Supabase client!

Check your Supabase project's API settings to find these values

https://supabase.com/dashboard/project/_/settings/api`);
      }
      const { storage } = (0, cookies_1.createStorageFromOptions)({
        ...options,
        cookieEncoding: options?.cookieEncoding ?? "base64url"
      }, false);
      const client = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
        ...options,
        global: {
          ...options?.global,
          headers: {
            ...options?.global?.headers,
            "X-Client-Info": `supabase-ssr/${version_1.VERSION}`
          }
        },
        auth: {
          ...options?.auth,
          ...options?.cookieOptions?.name ? { storageKey: options.cookieOptions.name } : null,
          flowType: "pkce",
          autoRefreshToken: (0, utils_1.isBrowser)(),
          detectSessionInUrl: (0, utils_1.isBrowser)(),
          persistSession: true,
          storage
        }
      });
      if (shouldUseSingleton) {
        cachedBrowserClient = client;
      }
      return client;
    }
    exports2.createBrowserClient = createBrowserClient;
  }
});

// node_modules/@supabase/ssr/dist/main/createServerClient.js
var require_createServerClient = __commonJS({
  "node_modules/@supabase/ssr/dist/main/createServerClient.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createServerClient = void 0;
    var supabase_js_1 = require("@supabase/supabase-js");
    var version_1 = require_version();
    var cookies_1 = require_cookies();
    function createServerClient2(supabaseUrl, supabaseKey, options) {
      if (!supabaseUrl || !supabaseKey) {
        throw new Error(`Your project's URL and Key are required to create a Supabase client!

Check your Supabase project's API settings to find these values

https://supabase.com/dashboard/project/_/settings/api`);
      }
      const { storage, getAll, setAll, setItems, removedItems } = (0, cookies_1.createStorageFromOptions)({
        ...options,
        cookieEncoding: options?.cookieEncoding ?? "base64url"
      }, true);
      const client = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey, {
        ...options,
        global: {
          ...options?.global,
          headers: {
            ...options?.global?.headers,
            "X-Client-Info": `supabase-ssr/${version_1.VERSION}`
          }
        },
        auth: {
          ...options?.cookieOptions?.name ? { storageKey: options.cookieOptions.name } : null,
          ...options?.auth,
          flowType: "pkce",
          autoRefreshToken: false,
          detectSessionInUrl: false,
          persistSession: true,
          storage
        }
      });
      client.auth.onAuthStateChange(async (event) => {
        const hasStorageChanges = Object.keys(setItems).length > 0 || Object.keys(removedItems).length > 0;
        if (hasStorageChanges && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "USER_UPDATED" || event === "PASSWORD_RECOVERY" || event === "SIGNED_OUT" || event === "MFA_CHALLENGE_VERIFIED")) {
          await (0, cookies_1.applyServerStorage)({ getAll, setAll, setItems, removedItems }, {
            cookieOptions: options?.cookieOptions ?? null,
            cookieEncoding: options?.cookieEncoding ?? "base64url"
          });
        }
      });
      return client;
    }
    exports2.createServerClient = createServerClient2;
  }
});

// node_modules/@supabase/ssr/dist/main/types.js
var require_types = __commonJS({
  "node_modules/@supabase/ssr/dist/main/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@supabase/ssr/dist/main/index.js
var require_main = __commonJS({
  "node_modules/@supabase/ssr/dist/main/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_createBrowserClient(), exports2);
    __exportStar(require_createServerClient(), exports2);
    __exportStar(require_types(), exports2);
    __exportStar(require_utils(), exports2);
  }
});

// node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var require_cookies2 = __commonJS({
  "node_modules/next/dist/compiled/@edge-runtime/cookies/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export2(src_exports, {
      RequestCookies: () => RequestCookies,
      ResponseCookies: () => ResponseCookies,
      parseCookie: () => parseCookie,
      parseSetCookie: () => parseSetCookie,
      stringifyCookie: () => stringifyCookie
    });
    module2.exports = __toCommonJS2(src_exports);
    function stringifyCookie(c) {
      var _a;
      const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
      ].filter(Boolean);
      const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
      return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
    }
    function parseCookie(cookie) {
      const map = /* @__PURE__ */ new Map();
      for (const pair of cookie.split(/; */)) {
        if (!pair)
          continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
          map.set(pair, "true");
          continue;
        }
        const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
        try {
          map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch {
        }
      }
      return map;
    }
    function parseSetCookie(setCookie) {
      if (!setCookie) {
        return void 0;
      }
      const [[name, value], ...attributes] = parseCookie(setCookie);
      const {
        domain,
        expires,
        httponly,
        maxage,
        path,
        samesite,
        secure,
        partitioned,
        priority
      } = Object.fromEntries(
        attributes.map(([key, value2]) => [key.toLowerCase(), value2])
      );
      const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && { expires: new Date(expires) },
        ...httponly && { httpOnly: true },
        ...typeof maxage === "string" && { maxAge: Number(maxage) },
        path,
        ...samesite && { sameSite: parseSameSite(samesite) },
        ...secure && { secure: true },
        ...priority && { priority: parsePriority(priority) },
        ...partitioned && { partitioned: true }
      };
      return compact(cookie);
    }
    function compact(t) {
      const newT = {};
      for (const key in t) {
        if (t[key]) {
          newT[key] = t[key];
        }
      }
      return newT;
    }
    var SAME_SITE = ["strict", "lax", "none"];
    function parseSameSite(string) {
      string = string.toLowerCase();
      return SAME_SITE.includes(string) ? string : void 0;
    }
    var PRIORITY = ["low", "medium", "high"];
    function parsePriority(string) {
      string = string.toLowerCase();
      return PRIORITY.includes(string) ? string : void 0;
    }
    function splitCookiesString(cookiesString) {
      if (!cookiesString)
        return [];
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    var RequestCookies = class {
      constructor(requestHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
          const parsed = parseCookie(header);
          for (const [name, value] of parsed) {
            this._parsed.set(name, { name, value });
          }
        }
      }
      [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
      }
      /**
       * The amount of cookies received from the client
       */
      get size() {
        return this._parsed.size;
      }
      get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
      }
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
          return all.map(([_, value]) => value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n]) => n === name).map(([_, value]) => value);
      }
      has(name) {
        return this._parsed.has(name);
      }
      set(...args) {
        const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
        const map = this._parsed;
        map.set(name, { name, value });
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
        );
        return this;
      }
      /**
       * Delete the cookies matching the passed name or names in the request.
       */
      delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
        );
        return result;
      }
      /**
       * Delete all the cookies in the cookies in the request.
       */
      clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
      }
      /**
       * Format the cookies in the request as a string for logging
       */
      [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
      }
    };
    var ResponseCookies = class {
      constructor(responseHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings) {
          const parsed = parseSetCookie(cookieString);
          if (parsed)
            this._parsed.set(parsed.name, parsed);
        }
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
       */
      get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
       */
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
          return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c) => c.name === key);
      }
      has(name) {
        return this._parsed.has(name);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
       */
      set(...args) {
        const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({ name, value, ...cookie }));
        replace(map, this._headers);
        return this;
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
       */
      delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0].path, args[0].domain];
        return this.set({ name, path, domain, value: "", expires: /* @__PURE__ */ new Date(0) });
      }
      [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map(stringifyCookie).join("; ");
      }
    };
    function replace(bag, headers) {
      headers.delete("set-cookie");
      for (const [, value] of bag) {
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
      }
    }
    function normalizeCookie(cookie = { name: "", value: "" }) {
      if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
      }
      if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
      }
      if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
      }
      return cookie;
    }
  }
});

// node_modules/next/dist/server/web/spec-extension/cookies.js
var require_cookies3 = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/cookies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      RequestCookies: function() {
        return _cookies.RequestCookies;
      },
      ResponseCookies: function() {
        return _cookies.ResponseCookies;
      }
    });
    var _cookies = require_cookies2();
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/reflect.js
var require_reflect = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/reflect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ReflectAdapter", {
      enumerable: true,
      get: function() {
        return ReflectAdapter;
      }
    });
    var ReflectAdapter = class {
      static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
          return value.bind(target);
        }
        return value;
      }
      static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
      }
      static has(target, prop) {
        return Reflect.has(target, prop);
      }
      static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
      }
    };
  }
});

// node_modules/next/dist/client/components/async-local-storage.js
var require_async_local_storage = __commonJS({
  "node_modules/next/dist/client/components/async-local-storage.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "createAsyncLocalStorage", {
      enumerable: true,
      get: function() {
        return createAsyncLocalStorage;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
    };
    var maybeGlobalAsyncLocalStorage = globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/static-generation-async-storage-instance.js
var require_static_generation_async_storage_instance = __commonJS({
  "node_modules/next/dist/client/components/static-generation-async-storage-instance.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "staticGenerationAsyncStorage", {
      enumerable: true,
      get: function() {
        return staticGenerationAsyncStorage;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var staticGenerationAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/static-generation-async-storage.external.js
var require_static_generation_async_storage_external = __commonJS({
  "node_modules/next/dist/client/components/static-generation-async-storage.external.js"(exports2, module2) {
    "TURBOPACK { transition: next-shared }";
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "staticGenerationAsyncStorage", {
      enumerable: true,
      get: function() {
        return _staticgenerationasyncstorageinstance.staticGenerationAsyncStorage;
      }
    });
    var _staticgenerationasyncstorageinstance = require_static_generation_async_storage_instance();
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js
var require_request_cookies = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
      },
      ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
      },
      RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
      },
      appendMutableCookies: function() {
        return appendMutableCookies;
      },
      getModifiedCookieValues: function() {
        return getModifiedCookieValues;
      }
    });
    var _cookies = require_cookies3();
    var _reflect = require_reflect();
    var _staticgenerationasyncstorageexternal = require_static_generation_async_storage_external();
    var ReadonlyRequestCookiesError = class _ReadonlyRequestCookiesError extends Error {
      constructor() {
        super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
      }
      static callable() {
        throw new _ReadonlyRequestCookiesError();
      }
    };
    var RequestCookiesAdapter = class {
      static seal(cookies2) {
        return new Proxy(cookies2, {
          get(target, prop, receiver) {
            switch (prop) {
              case "clear":
              case "delete":
              case "set":
                return ReadonlyRequestCookiesError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
    };
    var SYMBOL_MODIFY_COOKIE_VALUES = /* @__PURE__ */ Symbol.for("next.mutated.cookies");
    function getModifiedCookieValues(cookies2) {
      const modified = cookies2[SYMBOL_MODIFY_COOKIE_VALUES];
      if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
      }
      return modified;
    }
    function appendMutableCookies(headers, mutableCookies) {
      const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
      if (modifiedCookieValues.length === 0) {
        return false;
      }
      const resCookies = new _cookies.ResponseCookies(headers);
      const returnedCookies = resCookies.getAll();
      for (const cookie of modifiedCookieValues) {
        resCookies.set(cookie);
      }
      for (const cookie of returnedCookies) {
        resCookies.set(cookie);
      }
      return true;
    }
    var MutableRequestCookiesAdapter = class {
      static wrap(cookies2, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies2.getAll()) {
          responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = /* @__PURE__ */ new Set();
        const updateResponseCookies = () => {
          const staticGenerationAsyncStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
          if (staticGenerationAsyncStore) {
            staticGenerationAsyncStore.pathWasRevalidated = true;
          }
          const allCookies = responseCookies.getAll();
          modifiedValues = allCookies.filter((c) => modifiedCookies.has(c.name));
          if (onUpdateCookies) {
            const serializedCookies = [];
            for (const cookie of modifiedValues) {
              const tempCookies = new _cookies.ResponseCookies(new Headers());
              tempCookies.set(cookie);
              serializedCookies.push(tempCookies.toString());
            }
            onUpdateCookies(serializedCookies);
          }
        };
        return new Proxy(responseCookies, {
          get(target, prop, receiver) {
            switch (prop) {
              // A special symbol to get the modified cookie values
              case SYMBOL_MODIFY_COOKIE_VALUES:
                return modifiedValues;
              // TODO: Throw error if trying to set a cookie after the response
              // headers have been set.
              case "delete":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    target.delete(...args);
                  } finally {
                    updateResponseCookies();
                  }
                };
              case "set":
                return function(...args) {
                  modifiedCookies.add(typeof args[0] === "string" ? args[0] : args[0].name);
                  try {
                    return target.set(...args);
                  } finally {
                    updateResponseCookies();
                  }
                };
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
    };
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/headers.js
var require_headers = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/headers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      HeadersAdapter: function() {
        return HeadersAdapter;
      },
      ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
      }
    });
    var _reflect = require_reflect();
    var ReadonlyHeadersError = class _ReadonlyHeadersError extends Error {
      constructor() {
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
      }
      static callable() {
        throw new _ReadonlyHeadersError();
      }
    };
    var HeadersAdapter = class _HeadersAdapter extends Headers {
      constructor(headers) {
        super();
        this.headers = new Proxy(headers, {
          get(target, prop, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return;
            return _reflect.ReflectAdapter.get(target, original, receiver);
          },
          set(target, prop, value, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.set(target, prop, value, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
          },
          has(target, prop) {
            if (typeof prop === "symbol") return _reflect.ReflectAdapter.has(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return false;
            return _reflect.ReflectAdapter.has(target, original);
          },
          deleteProperty(target, prop) {
            if (typeof prop === "symbol") return _reflect.ReflectAdapter.deleteProperty(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined") return true;
            return _reflect.ReflectAdapter.deleteProperty(target, original);
          }
        });
      }
      /**
      * Seals a Headers instance to prevent modification by throwing an error when
      * any mutating method is called.
      */
      static seal(headers) {
        return new Proxy(headers, {
          get(target, prop, receiver) {
            switch (prop) {
              case "append":
              case "delete":
              case "set":
                return ReadonlyHeadersError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
      /**
      * Merges a header value into a string. This stores multiple values as an
      * array, so we need to merge them into a string.
      *
      * @param value a header value
      * @returns a merged header value (a string)
      */
      merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
      }
      /**
      * Creates a Headers instance from a plain object or a Headers instance.
      *
      * @param headers a plain object or a Headers instance
      * @returns a headers instance
      */
      static from(headers) {
        if (headers instanceof Headers) return headers;
        return new _HeadersAdapter(headers);
      }
      append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
          this.headers[name] = [
            existing,
            value
          ];
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          this.headers[name] = value;
        }
      }
      delete(name) {
        delete this.headers[name];
      }
      get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
      }
      has(name) {
        return typeof this.headers[name] !== "undefined";
      }
      set(name, value) {
        this.headers[name] = value;
      }
      forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()) {
          callbackfn.call(thisArg, value, name, this);
        }
      }
      *entries() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          const value = this.get(name);
          yield [
            name,
            value
          ];
        }
      }
      *keys() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          yield name;
        }
      }
      *values() {
        for (const key of Object.keys(this.headers)) {
          const value = this.get(key);
          yield value;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
  }
});

// node_modules/next/dist/client/components/action-async-storage-instance.js
var require_action_async_storage_instance = __commonJS({
  "node_modules/next/dist/client/components/action-async-storage-instance.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return actionAsyncStorage;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var actionAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/action-async-storage.external.js
var require_action_async_storage_external = __commonJS({
  "node_modules/next/dist/client/components/action-async-storage.external.js"(exports2, module2) {
    "TURBOPACK { transition: next-shared }";
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "actionAsyncStorage", {
      enumerable: true,
      get: function() {
        return _actionasyncstorageinstance.actionAsyncStorage;
      }
    });
    var _actionasyncstorageinstance = require_action_async_storage_instance();
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l = /* @__PURE__ */ Symbol.for("react.element");
    var n = /* @__PURE__ */ Symbol.for("react.portal");
    var p = /* @__PURE__ */ Symbol.for("react.fragment");
    var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var r = /* @__PURE__ */ Symbol.for("react.profiler");
    var t = /* @__PURE__ */ Symbol.for("react.provider");
    var u = /* @__PURE__ */ Symbol.for("react.context");
    var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var w = /* @__PURE__ */ Symbol.for("react.suspense");
    var x = /* @__PURE__ */ Symbol.for("react.memo");
    var y = /* @__PURE__ */ Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l:
            case n:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
        return a2;
      })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a)) for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = d + Q(k, g);
        h += R(k, b, e, f, c);
      }
      else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports2.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports2.Component = E;
    exports2.Fragment = p;
    exports2.Profiler = r;
    exports2.PureComponent = G;
    exports2.StrictMode = q;
    exports2.Suspense = w;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports2.act = X;
    exports2.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports2.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports2.createElement = M;
    exports2.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports2.isValidElement = O;
    exports2.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports2.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports2.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports2.unstable_act = X;
    exports2.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports2.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports2.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports2.useId = function() {
      return U.current.useId();
    };
    exports2.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports2.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports2.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports2.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports2.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports2.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports2.useState = function(a) {
      return U.current.useState(a);
    };
    exports2.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports2.useTransition = function() {
      return U.current.useTransition();
    };
    exports2.version = "18.3.1";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.3.1";
        var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.element");
        var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = /* @__PURE__ */ Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
        var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = /* @__PURE__ */ Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports2.Children = Children;
        exports2.Component = Component;
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.Profiler = REACT_PROFILER_TYPE;
        exports2.PureComponent = PureComponent;
        exports2.StrictMode = REACT_STRICT_MODE_TYPE;
        exports2.Suspense = REACT_SUSPENSE_TYPE;
        exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports2.act = act;
        exports2.cloneElement = cloneElement$1;
        exports2.createContext = createContext;
        exports2.createElement = createElement$1;
        exports2.createFactory = createFactory;
        exports2.createRef = createRef;
        exports2.forwardRef = forwardRef;
        exports2.isValidElement = isValidElement;
        exports2.lazy = lazy;
        exports2.memo = memo;
        exports2.startTransition = startTransition;
        exports2.unstable_act = act;
        exports2.useCallback = useCallback;
        exports2.useContext = useContext;
        exports2.useDebugValue = useDebugValue;
        exports2.useDeferredValue = useDeferredValue;
        exports2.useEffect = useEffect;
        exports2.useId = useId;
        exports2.useImperativeHandle = useImperativeHandle;
        exports2.useInsertionEffect = useInsertionEffect;
        exports2.useLayoutEffect = useLayoutEffect;
        exports2.useMemo = useMemo;
        exports2.useReducer = useReducer;
        exports2.useRef = useRef;
        exports2.useState = useState;
        exports2.useSyncExternalStore = useSyncExternalStore;
        exports2.useTransition = useTransition;
        exports2.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS({
  "node_modules/next/dist/client/components/hooks-server-context.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      DynamicServerError: function() {
        return DynamicServerError;
      },
      isDynamicServerError: function() {
        return isDynamicServerError;
      }
    });
    var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
    var DynamicServerError = class extends Error {
      constructor(description) {
        super("Dynamic server usage: " + description);
        this.description = description;
        this.digest = DYNAMIC_ERROR_CODE;
      }
    };
    function isDynamicServerError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
      }
      return err.digest === DYNAMIC_ERROR_CODE;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS({
  "node_modules/next/dist/client/components/static-generation-bailout.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      StaticGenBailoutError: function() {
        return StaticGenBailoutError;
      },
      isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
      }
    });
    var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
    var StaticGenBailoutError = class extends Error {
      constructor(...args) {
        super(...args);
        this.code = NEXT_STATIC_GEN_BAILOUT;
      }
    };
    function isStaticGenBailoutError(error) {
      if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
      }
      return error.code === NEXT_STATIC_GEN_BAILOUT;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/lib/url.js
var require_url = __commonJS({
  "node_modules/next/dist/lib/url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getPathname: function() {
        return getPathname;
      },
      isFullStringUrl: function() {
        return isFullStringUrl;
      }
    });
    var DUMMY_ORIGIN = "http://n";
    function getUrlWithoutHost(url) {
      return new URL(url, DUMMY_ORIGIN);
    }
    function getPathname(url) {
      return getUrlWithoutHost(url).pathname;
    }
    function isFullStringUrl(url) {
      return /https?:\/\//.test(url);
    }
  }
});

// node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS({
  "node_modules/next/dist/server/app-render/dynamic-rendering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      Postpone: function() {
        return Postpone;
      },
      createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
      },
      createPrerenderState: function() {
        return createPrerenderState;
      },
      formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
      },
      markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
      },
      trackDynamicDataAccessed: function() {
        return trackDynamicDataAccessed;
      },
      trackDynamicFetch: function() {
        return trackDynamicFetch;
      },
      usedDynamicAPIs: function() {
        return usedDynamicAPIs;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    var _hooksservercontext = require_hooks_server_context();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _url = require_url();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasPostpone = typeof _react.default.unstable_postpone === "function";
    function createPrerenderState(isDebugSkeleton) {
      return {
        isDebugSkeleton,
        dynamicAccesses: []
      };
    }
    function markCurrentScopeAsDynamic(store, expression) {
      const pathname = (0, _url.getPathname)(store.urlPathname);
      if (store.isUnstableCacheCallback) {
        return;
      } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
      } else if (
        // We are in a prerender (PPR enabled, during build)
        store.prerenderState
      ) {
        postponeWithTracking(store.prerenderState, expression, pathname);
      } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
          const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
          store.dynamicUsageDescription = expression;
          store.dynamicUsageStack = err.stack;
          throw err;
        }
      }
    }
    function trackDynamicDataAccessed(store, expression) {
      const pathname = (0, _url.getPathname)(store.urlPathname);
      if (store.isUnstableCacheCallback) {
        throw new Error(`Route ${pathname} used "${expression}" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "${expression}" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);
      } else if (store.dynamicShouldError) {
        throw new _staticgenerationbailout.StaticGenBailoutError(`Route ${pathname} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
      } else if (
        // We are in a prerender (PPR enabled, during build)
        store.prerenderState
      ) {
        postponeWithTracking(store.prerenderState, expression, pathname);
      } else {
        store.revalidate = 0;
        if (store.isStaticGeneration) {
          const err = new _hooksservercontext.DynamicServerError(`Route ${pathname} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
          store.dynamicUsageDescription = expression;
          store.dynamicUsageStack = err.stack;
          throw err;
        }
      }
    }
    function Postpone({ reason, prerenderState, pathname }) {
      postponeWithTracking(prerenderState, reason, pathname);
    }
    function trackDynamicFetch(store, expression) {
      if (store.prerenderState) {
        postponeWithTracking(store.prerenderState, expression, store.urlPathname);
      }
    }
    function postponeWithTracking(prerenderState, expression, pathname) {
      assertPostpone();
      const reason = `Route ${pathname} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
      prerenderState.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: prerenderState.isDebugSkeleton ? new Error().stack : void 0,
        expression
      });
      _react.default.unstable_postpone(reason);
    }
    function usedDynamicAPIs(prerenderState) {
      return prerenderState.dynamicAccesses.length > 0;
    }
    function formatDynamicAPIAccesses(prerenderState) {
      return prerenderState.dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
        stack = stack.split("\n").slice(4).filter((line) => {
          if (line.includes("node_modules/next/")) {
            return false;
          }
          if (line.includes(" (<anonymous>)")) {
            return false;
          }
          if (line.includes(" (node:")) {
            return false;
          }
          return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:
${stack}`;
      });
    }
    function assertPostpone() {
      if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
      }
    }
    function createPostponedAbortSignal(reason) {
      assertPostpone();
      const controller = new AbortController();
      try {
        _react.default.unstable_postpone(reason);
      } catch (x) {
        controller.abort(x);
      }
      return controller.signal;
    }
  }
});

// node_modules/next/dist/client/components/draft-mode.js
var require_draft_mode = __commonJS({
  "node_modules/next/dist/client/components/draft-mode.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "DraftMode", {
      enumerable: true,
      get: function() {
        return DraftMode;
      }
    });
    var _staticgenerationasyncstorageexternal = require_static_generation_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var DraftMode = class {
      get isEnabled() {
        return this._provider.isEnabled;
      }
      enable() {
        const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
        if (store) {
          (0, _dynamicrendering.trackDynamicDataAccessed)(store, "draftMode().enable()");
        }
        return this._provider.enable();
      }
      disable() {
        const store = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
        if (store) {
          (0, _dynamicrendering.trackDynamicDataAccessed)(store, "draftMode().disable()");
        }
        return this._provider.disable();
      }
      constructor(provider) {
        this._provider = provider;
      }
    };
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/request-async-storage-instance.js
var require_request_async_storage_instance = __commonJS({
  "node_modules/next/dist/client/components/request-async-storage-instance.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "requestAsyncStorage", {
      enumerable: true,
      get: function() {
        return requestAsyncStorage;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var requestAsyncStorage = (0, _asynclocalstorage.createAsyncLocalStorage)();
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/request-async-storage.external.js
var require_request_async_storage_external = __commonJS({
  "node_modules/next/dist/client/components/request-async-storage.external.js"(exports2, module2) {
    "TURBOPACK { transition: next-shared }";
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      getExpectedRequestStore: function() {
        return getExpectedRequestStore;
      },
      requestAsyncStorage: function() {
        return _requestasyncstorageinstance.requestAsyncStorage;
      }
    });
    var _requestasyncstorageinstance = require_request_async_storage_instance();
    function getExpectedRequestStore(callingExpression) {
      const store = _requestasyncstorageinstance.requestAsyncStorage.getStore();
      if (store) return store;
      throw new Error("`" + callingExpression + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/dist/client/components/headers.js
var require_headers2 = __commonJS({
  "node_modules/next/dist/client/components/headers.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all) Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
      });
    }
    _export(exports2, {
      cookies: function() {
        return cookies2;
      },
      draftMode: function() {
        return draftMode;
      },
      headers: function() {
        return headers;
      }
    });
    var _requestcookies = require_request_cookies();
    var _headers = require_headers();
    var _cookies = require_cookies3();
    var _actionasyncstorageexternal = require_action_async_storage_external();
    var _draftmode = require_draft_mode();
    var _dynamicrendering = require_dynamic_rendering();
    var _staticgenerationasyncstorageexternal = require_static_generation_async_storage_external();
    var _requestasyncstorageexternal = require_request_async_storage_external();
    function headers() {
      const callingExpression = "headers";
      const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
      if (staticGenerationStore) {
        if (staticGenerationStore.forceStatic) {
          return _headers.HeadersAdapter.seal(new Headers({}));
        } else {
          (0, _dynamicrendering.trackDynamicDataAccessed)(staticGenerationStore, callingExpression);
        }
      }
      return (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression).headers;
    }
    function cookies2() {
      const callingExpression = "cookies";
      const staticGenerationStore = _staticgenerationasyncstorageexternal.staticGenerationAsyncStorage.getStore();
      if (staticGenerationStore) {
        if (staticGenerationStore.forceStatic) {
          return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
        } else {
          (0, _dynamicrendering.trackDynamicDataAccessed)(staticGenerationStore, callingExpression);
        }
      }
      const requestStore = (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression);
      const asyncActionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
      if ((asyncActionStore == null ? void 0 : asyncActionStore.isAction) || (asyncActionStore == null ? void 0 : asyncActionStore.isAppRoute)) {
        return requestStore.mutableCookies;
      }
      return requestStore.cookies;
    }
    function draftMode() {
      const callingExpression = "draftMode";
      const requestStore = (0, _requestasyncstorageexternal.getExpectedRequestStore)(callingExpression);
      return new _draftmode.DraftMode(requestStore.draftMode);
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// node_modules/next/headers.js
var require_headers3 = __commonJS({
  "node_modules/next/headers.js"(exports2, module2) {
    module2.exports = require_headers2();
  }
});

// app/api/admin/receipts/route.ts
var route_exports = {};
__export(route_exports, {
  GET: () => GET
});
module.exports = __toCommonJS(route_exports);
var import_server = require("next/server");

// lib/supabaseServer.ts
var import_ssr = __toESM(require_main());
var import_headers = __toESM(require_headers3());
function createClient() {
  const cookieStore = (0, import_headers.cookies)();
  return (0, import_ssr.createServerClient)(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(
              ({ name, value, options }) => cookieStore.set(name, value, options)
            );
          } catch {
          }
        }
      }
    }
  );
}

// lib/supabaseAdmin.ts
var import_supabase_js = require("@supabase/supabase-js");
var supabaseAdmin = (0, import_supabase_js.createClient)(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// lib/admin.ts
var ADMIN_EMAILS = ["carlopochert@gmail.com"];
function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.some((e) => e.toLowerCase() === email.toLowerCase());
}

// lib/modules.ts
var modules = [
  {
    slug: "statistik-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Statistik I",
    subtitle: "Deskriptive Statistik, Wahrscheinlichkeitsrechnung, Zufallsvariablen & Verteilungsmodelle",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Deskriptive Statistik",
      "Wahrscheinlichkeitsrechnung",
      "Zufallsvariablen",
      "Verteilungsmodelle"
    ],
    questionCount: 45,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Statistik",
    number: "I",
    popular: true,
    exampleQuestion: "Erkl\xE4r mir den Satz von Bayes an einem Beispiel."
  },
  {
    slug: "vwl-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "VWL 2: Makro\xF6konomie",
    subtitle: "BIP, Wachstum, Arbeitslosigkeit, Geld & Inflation, Konjunktur (IS-LM), offene Volkswirtschaften & Gesamtangebot",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Methodik & BIP",
      "Geld, Inflation & Bankensystem",
      "Arbeitslosigkeit",
      "Wachstum I & II (inkl. KI & Klima)",
      "Konjunktur I & II",
      "Gesamtwirtschaftliches Angebot",
      "Offene Volkswirtschaften I & II (inkl. Z\xF6lle)"
    ],
    questionCount: 53,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "VWL",
    number: "2",
    popular: true,
    exampleQuestion: "Erkl\xE4r mir das IS-LM-Modell an einem Beispiel."
  },
  {
    slug: "statistik-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Statistik II",
    subtitle: "Sch\xE4tzen, Testen, Regression",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Statistik",
    number: "II"
  },
  {
    slug: "vwl-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "VWL 1: Mikro\xF6konomie",
    subtitle: "Haushalte, Unternehmen, M\xE4rkte & Wettbewerb",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Markt und Budgetmenge",
      "Pr\xE4ferenzen und Nutzen",
      "Optimale Entscheidung und Nachfrage",
      "Konsumentenrente, Marktnachfrage und Marktgleichgewicht",
      "Bekundete Pr\xE4ferenzen und Slutsky-Zerlegung",
      "Technologie und Gewinnmaximierung der Unternehmung",
      "Kostenminimierung und Kostenkurven",
      "Angebot der Unternehmung und Marktangebot der Branche",
      "Monopol",
      "Oligopoltheorie",
      "Spieltheorie",
      "Tausch, Wohlfahrtstheorie und intertemporale Entscheidung"
    ],
    questionCount: 62,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "VWL",
    number: "1",
    exampleQuestion: "Erkl\xE4r mir das Gewinnmaximierungsproblem des Monopolisten an einem Beispiel."
  },
  {
    slug: "mathematik-1-semester",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 1: Semesterklausur",
    subtitle: "Aussagenlogik, Mengenlehre, Relationen, Abbildungen, Folgen, Reihen & Potenzreihen \u2014 Stoff der Semesterklausur (1. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Aussagenlogik",
      "Mengenlehre",
      "Exkurs: Algebraische Strukturen",
      "Kombinatorik und das Laplace-Modell",
      "Relationen",
      "Vollst\xE4ndige Induktion und die nat\xFCrlichen Zahlen",
      "Abbildungen",
      "Die reellen Zahlen",
      "Folgen",
      "Teilfolgen, H\xE4ufungspunkte und Cauchy-Folgen",
      "Reihen",
      "Potenzreihen und spezielle Funktionen"
    ],
    questionCount: 77,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "1 \u2013 Semesterklausur",
    popular: true,
    exampleQuestion: "Erkl\xE4r mir die vollst\xE4ndige Induktion an einem Beispiel."
  },
  {
    slug: "mathematik-1-abschluss",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 1: Abschlussklausur",
    subtitle: "Grundlagen der Analysis und linearen Algebra \u2014 Stoff der Abschlussklausur (2. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Lineare Gleichungssysteme und der Gau\xDF-Algorithmus",
      "Vektorr\xE4ume und Untervektorr\xE4ume",
      "Funktionsgrenzwerte und Stetigkeit",
      "Exkurs: Exponential- und Logarithmusfunktionen",
      "Lineare Abbildungen und Matrizen",
      "Differenzierbarkeit und Ableitungsregeln",
      "Extremwerte, Mittelwertsatz und Kurvendiskussion",
      "Exkurs: Die Regel von de l'Hospital und der Satz von Taylor",
      "Skalarprodukte und Orthogonalit\xE4t",
      "Integralrechnung"
    ],
    questionCount: 81,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "1 \u2013 Abschlussklausur",
    exampleQuestion: "Erkl\xE4r mir den Hauptsatz der Differential- und Integralrechnung an einem Beispiel."
  },
  {
    slug: "mathematik-2-semester",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 2: Semesterklausur",
    subtitle: "Fortf\xFChrung Analysis & lineare Algebra \u2014 Stoff der Semesterklausur (1. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Komplexe Zahlen",
      "Folgen und H\xE4ufungspunkte im R\u207F",
      "Determinanten",
      "Basisdarstellung und Basiswechsel",
      "Eigenwerte und Eigenr\xE4ume",
      "Definite Matrizen",
      "Normen, Skalarprodukte und Orthogonalit\xE4t",
      "Stetigkeit mehrdimensionaler Funktionen",
      "Gradient, Richtungsableitung und Tangentialebene"
    ],
    questionCount: 72,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "2 \u2013 Semesterklausur",
    exampleQuestion: "Erkl\xE4r mir, wie man die dritten Wurzeln einer komplexen Zahl berechnet."
  },
  {
    slug: "mathematik-2-abschluss",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 2: Abschlussklausur",
    subtitle: "Mehrdimensionale Funktionen & Fortf\xFChrung \u2014 Stoff der Abschlussklausur (2. Pr\xFCfungsteil)",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Partielle Ableitungen und der Gradient",
      "Richtungsableitungen und der Gradient als steilster Anstieg",
      "Totale Differenzierbarkeit und die Tangentialebene",
      "Kettenregel, Jacobi-Matrix und vektorwertige Funktionen",
      "H\xF6here Ableitungen, der Satz von Schwarz und Taylorpolynome",
      "Lokale Extrema, die Hessematrix und Sattelpunkte",
      "Jordan-Inhalt und das Riemann-Integral im R\u207F",
      "Normalbereiche, das Prinzip von Cavalieri und der Transformationssatz"
    ],
    questionCount: 70,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "2 \u2013 Abschlussklausur",
    exampleQuestion: "Erkl\xE4r mir die Hessematrix und Sattelpunkte an einem Beispiel."
  },
  {
    slug: "mathematik-3",
    faculty: "WiWi-Fakult\xE4t",
    title: "Mathematik 3",
    subtitle: "Vertiefende Mathematik f\xFCr Wirtschaftsingenieure",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Mathematik",
    number: "3"
  },
  {
    slug: "bwl-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Management und Marketing",
    subtitle: "Grundlagen des Managements und Marketings",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Grundlagen: Was Unternehmer und Unternehmen leisten",
      "Gr\xFCnderpersonen, Motive und unternehmerische Gelegenheiten",
      "Entscheiden unter Risiko und Unsicherheit",
      "Gesch\xE4ftsmodelle systematisch entwickeln und planen",
      "Vom Prototyp zum Pivot: Lean Startup und Design Thinking",
      "Organisation des Unternehmens",
      "Strategische Analyse und strategische Optionen",
      "Corporate Governance und Personalf\xFChrung",
      "Kundenverhalten verstehen: von Daten zu Erkenntnissen",
      "Produktgestaltung, Preispolitik und Kommunikationspolitik",
      "Erfolg beim Kunden messen: CLV und Customer Equity"
    ],
    questionCount: 91,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "BWL",
    number: "1",
    exampleQuestion: "Wie berechne ich den Customer Lifetime Value bei bekannter Wiederkaufrate?"
  },
  {
    slug: "bwl-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Finanzierung und Rechnungswesen",
    subtitle: "Grundlagen der Finanzbuchhaltung und Unternehmensfinanzierung",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Zeitwert des Geldes: Barwert und Endwert",
      "Rentenformeln: Ewige und endliche Renten",
      "Investitionsrechnung I: Kapitalwert und Amortisationsdauer",
      "Investitionsrechnung II: Interner Zinssatz und Kapitalwertrate",
      "Bewertung von Anleihen",
      "Eigenkapitalfinanzierung: Aktien und Aussch\xFCttungspolitik",
      "Portfoliotheorie und CAPM",
      "Grunds\xE4tze ordnungsm\xE4\xDFiger Buchf\xFChrung und das Buchungssystem",
      "Bewertungswahlrechte im externen Rechnungswesen",
      "Grundlagen der Kosten- und Leistungsrechnung",
      "Der Betriebsabrechnungsbogen und Kalkulationsverfahren",
      "Deckungsbeitragsrechnung"
    ],
    questionCount: 69,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "BWL",
    number: "2",
    exampleQuestion: "Wie berechne ich den Kapitalwert einer Investition bei bekanntem Zahlungsstrom und Zinssatz?"
  },
  {
    slug: "bwl-3",
    faculty: "WiWi-Fakult\xE4t",
    title: "Produktion, Logistik und Wirtschaftsinformatik",
    subtitle: "Produktionswirtschaft, Logistik und Wirtschaftsinformatik",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "BWL",
    number: "3"
  },
  {
    slug: "informatik-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Programmieren 1: Java",
    subtitle: "Java-Grundlagen und objektorientierte Programmierung",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Kontrollstrukturen: Verzweigungen und Schleifen",
      "Einfache Datentypen, Operatoren und Typumwandlung",
      "Methoden: Aufbau, Parameter und G\xFCltigkeitsbereiche",
      "Rekursive Methoden",
      "Referenzdatentypen: Arrays und Strings",
      "Einf\xFChrung in die Objektorientierung",
      "Klassen im Detail: Konstruktoren und Kapselung",
      "Vererbung",
      "Polymorphismus und besondere Klassen im JDK",
      "Ausnahmebehandlung",
      "Listen, B\xE4ume und rekursive Datenstrukturen"
    ],
    questionCount: 87,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Informatik",
    number: "1",
    exampleQuestion: "Erkl\xE4r mir Polymorphismus und dynamisches Binden an einem Beispiel."
  },
  {
    slug: "informatik-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Grundlagen der Informatik",
    subtitle: "Logik, Algorithmen, Datenstrukturen, Sortieren, Komplexit\xE4t & UML",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Aussagenlogik",
      "Pr\xE4dikatenlogik",
      "Boolesche Algebra",
      "Algorithmen: Grundbegriffe und Eigenschaften",
      "Entwurfsprinzipien und Testen von Algorithmen",
      "Datenstrukturen I: Abstrakte Datentypen, Listen, Keller und Schlangen",
      "Datenstrukturen II: Graphen, B\xE4ume und bin\xE4re Suchb\xE4ume",
      "Sortierverfahren",
      "Datenstrukturen III: K\xFCrzeste Wege und minimale Spannb\xE4ume",
      "Komplexit\xE4t von Algorithmen",
      "UML: Anwendungsfall-, Klassen- und Objektdiagramme",
      "UML: Verhaltensdiagramme"
    ],
    questionCount: 86,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Informatik",
    number: "2",
    exampleQuestion: "Erkl\xE4r mir bin\xE4re Suchb\xE4ume an einem Beispiel."
  },
  {
    slug: "or-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Einf\xFChrung in das Operations Research",
    subtitle: "Lineare Optimierung, Netzplantechnik & Entscheidungsmodelle",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Operations Research",
    number: ""
  },
  {
    slug: "ing-1",
    faculty: "WiWi-Fakult\xE4t",
    title: "Werkstoffkunde",
    subtitle: "Werkstoffe und ihre Eigenschaften f\xFCr Ingenieuranwendungen",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "1"
  },
  {
    slug: "ing-2",
    faculty: "WiWi-Fakult\xE4t",
    title: "Technische Mechanik",
    subtitle: "Statik und Festigkeitslehre",
    status: "active",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [
      "Kr\xE4fte, Axiome und der starre K\xF6rper",
      "Kraftgruppen, Hebelgesetz und das Moment einer Kraft",
      "Gleichgewicht, Lagerarten und statische Bestimmtheit",
      "Haftreibung, Seilreibung und der Kraftkegel",
      "Fachwerke: Knotenschnitt- und Rittersches Verfahren",
      "Schnittgr\xF6\xDFen am geraden Balken",
      "Spannungen, Dehnungen und das Hookesche Gesetz",
      "Fl\xE4chentr\xE4gheitsmoment und der Satz von Steiner",
      "Gerade Biegung und die Biegelinie",
      "Mehrteilige Tragwerke und der Gelenkbalken",
      "Exkurs: Mehrachsiger Spannungszustand und der Mohrsche Spannungskreis",
      "Exkurs: Knicken von St\xE4ben nach Euler"
    ],
    questionCount: 61,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "2",
    exampleQuestion: "Erkl\xE4r mir den Satz von Steiner an einem Beispiel."
  },
  {
    slug: "ing-3",
    faculty: "WiWi-Fakult\xE4t",
    title: "Elektrotechnik",
    subtitle: "Grundlagen der Elektrotechnik",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "3"
  },
  {
    slug: "ing-4",
    faculty: "WiWi-Fakult\xE4t",
    title: "Weiterf\xFChrende ingenieurwissenschaftliche Grundlagen",
    subtitle: "Vertiefende ingenieurwissenschaftliche Inhalte",
    status: "coming-soon",
    priceCent: 499,
    compareAtCent: 1500,
    chapters: [],
    questionCount: 0,
    studiengang: "Wirtschaftsingenieurwesen",
    subject: "Ingenieurwissenschaften",
    number: "4"
  }
];
function getModule(slug) {
  return modules.find((m) => m.slug === slug);
}

// app/api/admin/receipts/route.ts
var SIGNED_URL_TTL_SECONDS = 60 * 60;
async function GET() {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  if (!user || !isAdminEmail(user.email)) {
    return import_server.NextResponse.json({ error: "Kein Zugriff." }, { status: 403 });
  }
  const { data: receiptRows, error: receiptsError } = await supabaseAdmin.from("receipts").select("id, user_id, module_slug, stripe_session_id, amount_cent, storage_path, created_at").order("created_at", { ascending: false });
  if (receiptsError) {
    console.error("Admin: Fehler beim Laden der Belege:", receiptsError);
    return import_server.NextResponse.json({ error: "Belege konnten nicht geladen werden." }, { status: 500 });
  }
  const { data: usersPage, error: usersError } = await supabaseAdmin.auth.admin.listUsers({ page: 1, perPage: 1e3 });
  if (usersError) {
    console.error("Admin: Fehler beim Laden der Nutzer:innen f\xFCr Belege:", usersError);
  }
  const emailByUserId = /* @__PURE__ */ new Map();
  for (const u of usersPage?.users ?? []) {
    if (u.email) emailByUserId.set(u.id, u.email);
  }
  const receipts = await Promise.all(
    (receiptRows ?? []).map(async (row) => {
      let downloadUrl = null;
      if (row.storage_path) {
        const { data: signed, error: signError } = await supabaseAdmin.storage.from("receipts").createSignedUrl(row.storage_path, SIGNED_URL_TTL_SECONDS);
        if (signError) {
          console.error(`Admin: Signierter Link fehlgeschlagen f\xFCr ${row.storage_path}:`, signError);
        } else {
          downloadUrl = signed?.signedUrl ?? null;
        }
      }
      const receiptNumber = `LUMO-${new Date(row.created_at).getFullYear()}-${String(row.id).padStart(6, "0")}`;
      return {
        id: row.id,
        receiptNumber,
        createdAt: row.created_at,
        moduleSlug: row.module_slug,
        moduleTitle: getModule(row.module_slug)?.title ?? row.module_slug,
        customerEmail: emailByUserId.get(row.user_id) ?? "(unbekannt)",
        amountCent: row.amount_cent,
        stripeSessionId: row.stripe_session_id,
        downloadUrl
      };
    })
  );
  return import_server.NextResponse.json({ receipts });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GET
});
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
