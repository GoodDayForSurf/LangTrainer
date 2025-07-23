function _OverloadYield(e, d) {
  this.v = e, this.k = d;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _asyncIterator(r) {
  var n,
    t,
    o,
    e = 2;
  for ("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;) {
    if (t && null != (n = r[t])) return n.call(r);
    if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
    t = "@@asyncIterator", o = "@@iterator";
  }
  throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
  function AsyncFromSyncIteratorContinuation(r) {
    if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
    var n = r.done;
    return Promise.resolve(r.value).then(function (r) {
      return {
        value: r,
        done: n
      };
    });
  }
  return AsyncFromSyncIterator = function (r) {
    this.s = r, this.n = r.next;
  }, AsyncFromSyncIterator.prototype = {
    s: null,
    n: null,
    next: function () {
      return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
    },
    return: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.resolve({
        value: r,
        done: !0
      }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    },
    throw: function (r) {
      var n = this.s.return;
      return void 0 === n ? Promise.reject(r) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
    }
  }, new AsyncFromSyncIterator(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _awaitAsyncGenerator(e) {
  return new _OverloadYield(e, 0);
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapAsyncGenerator(e) {
  return function () {
    return new AsyncGenerator(e.apply(this, arguments));
  };
}
function AsyncGenerator(e) {
  var r, t;
  function resume(r, t) {
    try {
      var n = e[r](t),
        o = n.value,
        u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(function (t) {
        if (u) {
          var i = "return" === r ? "return" : "next";
          if (!o.k || t.done) return resume(i, t);
          t = e[i](t).value;
        }
        settle(n.done ? "return" : "normal", t);
      }, function (e) {
        resume("throw", e);
      });
    } catch (e) {
      settle("throw", e);
    }
  }
  function settle(e, n) {
    switch (e) {
      case "return":
        r.resolve({
          value: n,
          done: !0
        });
        break;
      case "throw":
        r.reject(n);
        break;
      default:
        r.resolve({
          value: n,
          done: !1
        });
    }
    (r = r.next) ? resume(r.key, r.arg) : t = null;
  }
  this._invoke = function (e, n) {
    return new Promise(function (o, u) {
      var i = {
        key: e,
        arg: n,
        resolve: o,
        reject: u,
        next: null
      };
      t ? t = t.next = i : (r = t = i, resume(e, n));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function () {
  return this;
}, AsyncGenerator.prototype.next = function (e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function (e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function (e) {
  return this._invoke("return", e);
};
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

var default_format = 'RFC3986';
var formatters = {
  RFC1738: function RFC1738(v) {
    return String(v).replace(/%20/g, '+');
  },
  RFC3986: function RFC3986(v) {
    return String(v);
  }
};
var RFC1738 = 'RFC1738';

var is_array$1 = Array.isArray;
var hex_table = function () {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }
  return array;
}();
var limit = 1024;
var encode = function encode(str, _defaultEncoder, charset, _kind, format) {
  // This code was originally written by Brian White for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }
  var string = str;
  if (_typeof(str) === 'symbol') {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== 'string') {
    string = String(str);
  }
  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
  }
  var out = '';
  for (var j = 0; j < string.length; j += limit) {
    var segment = string.length >= limit ? string.slice(j, j + limit) : string;
    var arr = [];
    for (var i = 0; i < segment.length; ++i) {
      var c = segment.charCodeAt(i);
      if (c === 0x2d ||
      // -
      c === 0x2e ||
      // .
      c === 0x5f ||
      // _
      c === 0x7e ||
      // ~
      c >= 0x30 && c <= 0x39 ||
      // 0-9
      c >= 0x41 && c <= 0x5a ||
      // a-z
      c >= 0x61 && c <= 0x7a ||
      // A-Z
      format === RFC1738 && (c === 0x28 || c === 0x29) // ( )
      ) {
        arr[arr.length] = segment.charAt(i);
        continue;
      }
      if (c < 0x80) {
        arr[arr.length] = hex_table[c];
        continue;
      }
      if (c < 0x800) {
        arr[arr.length] = hex_table[0xc0 | c >> 6] + hex_table[0x80 | c & 0x3f];
        continue;
      }
      if (c < 0xd800 || c >= 0xe000) {
        arr[arr.length] = hex_table[0xe0 | c >> 12] + hex_table[0x80 | c >> 6 & 0x3f] + hex_table[0x80 | c & 0x3f];
        continue;
      }
      i += 1;
      c = 0x10000 + ((c & 0x3ff) << 10 | segment.charCodeAt(i) & 0x3ff);
      arr[arr.length] = hex_table[0xf0 | c >> 18] + hex_table[0x80 | c >> 12 & 0x3f] + hex_table[0x80 | c >> 6 & 0x3f] + hex_table[0x80 | c & 0x3f];
    }
    out += arr.join('');
  }
  return out;
};
function is_buffer(obj) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
}
function maybe_map(val, fn) {
  if (is_array$1(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
}

var has = Object.prototype.hasOwnProperty;
var array_prefix_generators = {
  brackets: function brackets(prefix) {
    return String(prefix) + '[]';
  },
  comma: 'comma',
  indices: function indices(prefix, key) {
    return String(prefix) + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    return String(prefix);
  }
};
var is_array = Array.isArray;
var push = Array.prototype.push;
var push_to_array = function push_to_array(arr, value_or_array) {
  push.apply(arr, is_array(value_or_array) ? value_or_array : [value_or_array]);
};
var to_ISO = Date.prototype.toISOString;
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: 'indices',
  charset: 'utf-8',
  charsetSentinel: false,
  delimiter: '&',
  encode: true,
  encodeDotInKeys: false,
  encoder: encode,
  encodeValuesOnly: false,
  format: default_format,
  formatter: formatters[default_format],
  /** @deprecated */
  indices: false,
  serializeDate: function serializeDate(date) {
    return to_ISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
function is_non_nullish_primitive(v) {
  return typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' || _typeof(v) === 'symbol' || typeof v === 'bigint';
}
var sentinel = {};
function inner_stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
  var obj = object;
  var tmp_sc = sideChannel;
  var step = 0;
  var find_flag = false;
  while ((tmp_sc = tmp_sc.get(sentinel)) !== void undefined && !find_flag) {
    // Where object last appeared in the ref tree
    var pos = tmp_sc.get(object);
    step += 1;
    if (typeof pos !== 'undefined') {
      if (pos === step) {
        throw new RangeError('Cyclic object value');
      } else {
        find_flag = true; // Break while
      }
    }
    if (typeof tmp_sc.get(sentinel) === 'undefined') {
      step = 0;
    }
  }
  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate === null || serializeDate === void 0 ? void 0 : serializeDate(obj);
  } else if (generateArrayPrefix === 'comma' && is_array(obj)) {
    obj = maybe_map(obj, function (value) {
      if (value instanceof Date) {
        return serializeDate === null || serializeDate === void 0 ? void 0 : serializeDate(value);
      }
      return value;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ?
      // @ts-expect-error
      encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
    }
    obj = '';
  }
  if (is_non_nullish_primitive(obj) || is_buffer(obj)) {
    if (encoder) {
      var key_value = encodeValuesOnly ? prefix
      // @ts-expect-error
      : encoder(prefix, defaults.encoder, charset, 'key', format);
      return [(formatter === null || formatter === void 0 ? void 0 : formatter(key_value)) + '=' + (// @ts-expect-error
      formatter === null || formatter === void 0 ? void 0 : formatter(encoder(obj, defaults.encoder, charset, 'value', format)))];
    }
    return [(formatter === null || formatter === void 0 ? void 0 : formatter(prefix)) + '=' + (formatter === null || formatter === void 0 ? void 0 : formatter(String(obj)))];
  }
  var values = [];
  if (typeof obj === 'undefined') {
    return values;
  }
  var obj_keys;
  if (generateArrayPrefix === 'comma' && is_array(obj)) {
    // we need to join elements in
    if (encodeValuesOnly && encoder) {
      // @ts-expect-error values only
      obj = maybe_map(obj, encoder);
    }
    obj_keys = [{
      value: obj.length > 0 ? obj.join(',') || null : void undefined
    }];
  } else if (is_array(filter)) {
    obj_keys = filter;
  } else {
    var keys = Object.keys(obj);
    obj_keys = sort ? keys.sort(sort) : keys;
  }
  var encoded_prefix = encodeDotInKeys ? String(prefix).replace(/\./g, '%2E') : String(prefix);
  var adjusted_prefix = commaRoundTrip && is_array(obj) && obj.length === 1 ? encoded_prefix + '[]' : encoded_prefix;
  if (allowEmptyArrays && is_array(obj) && obj.length === 0) {
    return adjusted_prefix + '[]';
  }
  for (var j = 0; j < obj_keys.length; ++j) {
    var key = obj_keys[j];
    var value =
    // @ts-ignore
    _typeof(key) === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    // @ts-ignore
    var encoded_key = allowDots && encodeDotInKeys ? key.replace(/\./g, '%2E') : key;
    var key_prefix = is_array(obj) ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjusted_prefix, encoded_key) : adjusted_prefix : adjusted_prefix + (allowDots ? '.' + encoded_key : '[' + encoded_key + ']');
    sideChannel.set(object, step);
    var valueSideChannel = new WeakMap();
    valueSideChannel.set(sentinel, sideChannel);
    push_to_array(values, inner_stringify(value, key_prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys,
    // @ts-ignore
    generateArrayPrefix === 'comma' && encodeValuesOnly && is_array(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
  }
  return values;
}
function normalize_stringify_options() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  if (typeof opts.allowEmptyArrays !== 'undefined' && typeof opts.allowEmptyArrays !== 'boolean') {
    throw new TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
  }
  if (typeof opts.encodeDotInKeys !== 'undefined' && typeof opts.encodeDotInKeys !== 'boolean') {
    throw new TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
  }
  if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }
  var charset = opts.charset || defaults.charset;
  if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
    throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
  }
  var format = default_format;
  if (typeof opts.format !== 'undefined') {
    if (!has.call(formatters, opts.format)) {
      throw new TypeError('Unknown format option provided.');
    }
    format = opts.format;
  }
  var formatter = formatters[format];
  var filter = defaults.filter;
  if (typeof opts.filter === 'function' || is_array(opts.filter)) {
    filter = opts.filter;
  }
  var arrayFormat;
  if (opts.arrayFormat && opts.arrayFormat in array_prefix_generators) {
    arrayFormat = opts.arrayFormat;
  } else if ('indices' in opts) {
    arrayFormat = opts.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = defaults.arrayFormat;
  }
  if ('commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
    throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
  }
  var allowDots = typeof opts.allowDots === 'undefined' ? !!opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
    // @ts-ignore
    allowDots: allowDots,
    allowEmptyArrays: typeof opts.allowEmptyArrays === 'boolean' ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
    arrayFormat: arrayFormat,
    charset: charset,
    charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
    commaRoundTrip: !!opts.commaRoundTrip,
    delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
    encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
    encodeDotInKeys: typeof opts.encodeDotInKeys === 'boolean' ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
    encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
    filter: filter,
    format: format,
    formatter: formatter,
    serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
    skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
    // @ts-ignore
    sort: typeof opts.sort === 'function' ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
  };
}
function stringify(object) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var obj = object;
  var options = normalize_stringify_options(opts);
  var obj_keys;
  var filter;
  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (is_array(options.filter)) {
    filter = options.filter;
    obj_keys = filter;
  }
  var keys = [];
  if (_typeof(obj) !== 'object' || obj === null) {
    return '';
  }
  var generateArrayPrefix = array_prefix_generators[options.arrayFormat];
  var commaRoundTrip = generateArrayPrefix === 'comma' && options.commaRoundTrip;
  if (!obj_keys) {
    obj_keys = Object.keys(obj);
  }
  if (options.sort) {
    obj_keys.sort(options.sort);
  }
  var sideChannel = new WeakMap();
  for (var i = 0; i < obj_keys.length; ++i) {
    var key = obj_keys[i];
    if (options.skipNulls && obj[key] === null) {
      continue;
    }
    push_to_array(keys, inner_stringify(obj[key], key,
    // @ts-expect-error
    generateArrayPrefix, commaRoundTrip, options.allowEmptyArrays, options.strictNullHandling, options.skipNulls, options.encodeDotInKeys, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
  }
  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';
  if (options.charsetSentinel) {
    if (options.charset === 'iso-8859-1') {
      // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
      prefix += 'utf8=%26%2310003%3B&';
    } else {
      // encodeURIComponent('✓')
      prefix += 'utf8=%E2%9C%93&';
    }
  }
  return joined.length > 0 ? prefix + joined : '';
}

var VERSION = '4.73.1'; // x-release-please-version

var auto = false;
var kind = undefined;
var fetch$1 = undefined;
var FormData$1 = undefined;
var File$1 = undefined;
var ReadableStream$1 = undefined;
var getMultipartRequestOptions = undefined;
var getDefaultAgent = undefined;
var fileFromPath = undefined;
var isFsReadStream = undefined;
function setShims(shims) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    auto: false
  };
  if (auto) {
    throw new Error("you must `import 'openai/shims/".concat(shims.kind, "'` before importing anything else from openai"));
  }
  if (kind) {
    throw new Error("can't `import 'openai/shims/".concat(shims.kind, "'` after `import 'openai/shims/").concat(kind, "'`"));
  }
  auto = options.auto;
  kind = shims.kind;
  fetch$1 = shims.fetch;
  shims.Request;
  shims.Response;
  shims.Headers;
  FormData$1 = shims.FormData;
  shims.Blob;
  File$1 = shims.File;
  ReadableStream$1 = shims.ReadableStream;
  getMultipartRequestOptions = shims.getMultipartRequestOptions;
  getDefaultAgent = shims.getDefaultAgent;
  fileFromPath = shims.fileFromPath;
  isFsReadStream = shims.isFsReadStream;
}

/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
var MultipartBody = /*#__PURE__*/function () {
  function MultipartBody(body) {
    _classCallCheck(this, MultipartBody);
    this.body = body;
  }
  return _createClass(MultipartBody, [{
    key: Symbol.toStringTag,
    get: function get() {
      return 'MultipartBody';
    }
  }]);
}();

function getRuntime() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    manuallyImported = _ref.manuallyImported;
  var recommendation = manuallyImported ? "You may need to use polyfills" : "Add one of these imports before your first `import \u2026 from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";
  var _fetch, _Request, _Response, _Headers;
  try {
    // @ts-ignore
    _fetch = fetch;
    // @ts-ignore
    _Request = Request;
    // @ts-ignore
    _Response = Response;
    // @ts-ignore
    _Headers = Headers;
  } catch (error) {
    throw new Error("this environment is missing the following Web Fetch API type: ".concat(error.message, ". ").concat(recommendation));
  }
  return {
    kind: 'web',
    fetch: _fetch,
    Request: _Request,
    Response: _Response,
    Headers: _Headers,
    FormData:
    // @ts-ignore
    typeof FormData !== 'undefined' ? FormData : /*#__PURE__*/_createClass(
    // @ts-ignore
    function FormData() {
      _classCallCheck(this, FormData);
      throw new Error("file uploads aren't supported in this environment yet as 'FormData' is undefined. ".concat(recommendation));
    }),
    Blob: typeof Blob !== 'undefined' ? Blob : /*#__PURE__*/_createClass(function Blob() {
      _classCallCheck(this, Blob);
      throw new Error("file uploads aren't supported in this environment yet as 'Blob' is undefined. ".concat(recommendation));
    }),
    File:
    // @ts-ignore
    typeof File !== 'undefined' ? File : /*#__PURE__*/_createClass(
    // @ts-ignore
    function File() {
      _classCallCheck(this, File);
      throw new Error("file uploads aren't supported in this environment yet as 'File' is undefined. ".concat(recommendation));
    }),
    ReadableStream:
    // @ts-ignore
    typeof ReadableStream !== 'undefined' ? ReadableStream : /*#__PURE__*/_createClass(
    // @ts-ignore
    function ReadableStream() {
      _classCallCheck(this, ReadableStream);
      throw new Error("streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ".concat(recommendation));
    }),
    getMultipartRequestOptions: function () {
      var _getMultipartRequestOptions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(
      // @ts-ignore
      form, opts) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", _objectSpread2(_objectSpread2({}, opts), {}, {
                body: new MultipartBody(form)
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getMultipartRequestOptions(_x, _x2) {
        return _getMultipartRequestOptions.apply(this, arguments);
      }
      return getMultipartRequestOptions;
    }(),
    getDefaultAgent: function getDefaultAgent(url) {
      return undefined;
    },
    fileFromPath: function fileFromPath() {
      throw new Error('The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads');
    },
    isFsReadStream: function isFsReadStream(value) {
      return false;
    }
  };
}

/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
if (!kind) setShims(getRuntime(), {
  auto: true
});

var OpenAIError = /*#__PURE__*/function (_Error) {
  function OpenAIError() {
    _classCallCheck(this, OpenAIError);
    return _callSuper(this, OpenAIError, arguments);
  }
  _inherits(OpenAIError, _Error);
  return _createClass(OpenAIError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var APIError = /*#__PURE__*/function (_OpenAIError) {
  function APIError(status, error, message, headers) {
    var _this;
    _classCallCheck(this, APIError);
    _this = _callSuper(this, APIError, ["".concat(APIError.makeMessage(status, error, message))]);
    _this.status = status;
    _this.headers = headers;
    _this.request_id = headers === null || headers === void 0 ? void 0 : headers['x-request-id'];
    var data = error;
    _this.error = data;
    _this.code = data === null || data === void 0 ? void 0 : data['code'];
    _this.param = data === null || data === void 0 ? void 0 : data['param'];
    _this.type = data === null || data === void 0 ? void 0 : data['type'];
    return _this;
  }
  _inherits(APIError, _OpenAIError);
  return _createClass(APIError, null, [{
    key: "makeMessage",
    value: function makeMessage(status, error, message) {
      var msg = error !== null && error !== void 0 && error.message ? typeof error.message === 'string' ? error.message : JSON.stringify(error.message) : error ? JSON.stringify(error) : message;
      if (status && msg) {
        return "".concat(status, " ").concat(msg);
      }
      if (status) {
        return "".concat(status, " status code (no body)");
      }
      if (msg) {
        return msg;
      }
      return '(no status code or body)';
    }
  }, {
    key: "generate",
    value: function generate(status, errorResponse, message, headers) {
      if (!status) {
        return new APIConnectionError({
          message: message,
          cause: castToError(errorResponse)
        });
      }
      var error = errorResponse === null || errorResponse === void 0 ? void 0 : errorResponse['error'];
      if (status === 400) {
        return new BadRequestError(status, error, message, headers);
      }
      if (status === 401) {
        return new AuthenticationError(status, error, message, headers);
      }
      if (status === 403) {
        return new PermissionDeniedError(status, error, message, headers);
      }
      if (status === 404) {
        return new NotFoundError(status, error, message, headers);
      }
      if (status === 409) {
        return new ConflictError(status, error, message, headers);
      }
      if (status === 422) {
        return new UnprocessableEntityError(status, error, message, headers);
      }
      if (status === 429) {
        return new RateLimitError(status, error, message, headers);
      }
      if (status >= 500) {
        return new InternalServerError(status, error, message, headers);
      }
      return new APIError(status, error, message, headers);
    }
  }]);
}(OpenAIError);
var APIUserAbortError = /*#__PURE__*/function (_APIError) {
  function APIUserAbortError() {
    var _this2;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      message = _ref.message;
    _classCallCheck(this, APIUserAbortError);
    _this2 = _callSuper(this, APIUserAbortError, [undefined, undefined, message || 'Request was aborted.', undefined]);
    _this2.status = undefined;
    return _this2;
  }
  _inherits(APIUserAbortError, _APIError);
  return _createClass(APIUserAbortError);
}(APIError);
var APIConnectionError = /*#__PURE__*/function (_APIError2) {
  function APIConnectionError(_ref2) {
    var _this3;
    var message = _ref2.message,
      cause = _ref2.cause;
    _classCallCheck(this, APIConnectionError);
    _this3 = _callSuper(this, APIConnectionError, [undefined, undefined, message || 'Connection error.', undefined]);
    _this3.status = undefined;
    // in some environments the 'cause' property is already declared
    // @ts-ignore
    if (cause) _this3.cause = cause;
    return _this3;
  }
  _inherits(APIConnectionError, _APIError2);
  return _createClass(APIConnectionError);
}(APIError);
var APIConnectionTimeoutError = /*#__PURE__*/function (_APIConnectionError) {
  function APIConnectionTimeoutError() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      message = _ref3.message;
    _classCallCheck(this, APIConnectionTimeoutError);
    return _callSuper(this, APIConnectionTimeoutError, [{
      message: message !== null && message !== void 0 ? message : 'Request timed out.'
    }]);
  }
  _inherits(APIConnectionTimeoutError, _APIConnectionError);
  return _createClass(APIConnectionTimeoutError);
}(APIConnectionError);
var BadRequestError = /*#__PURE__*/function (_APIError3) {
  function BadRequestError() {
    var _this4;
    _classCallCheck(this, BadRequestError);
    _this4 = _callSuper(this, BadRequestError, arguments);
    _this4.status = 400;
    return _this4;
  }
  _inherits(BadRequestError, _APIError3);
  return _createClass(BadRequestError);
}(APIError);
var AuthenticationError = /*#__PURE__*/function (_APIError4) {
  function AuthenticationError() {
    var _this5;
    _classCallCheck(this, AuthenticationError);
    _this5 = _callSuper(this, AuthenticationError, arguments);
    _this5.status = 401;
    return _this5;
  }
  _inherits(AuthenticationError, _APIError4);
  return _createClass(AuthenticationError);
}(APIError);
var PermissionDeniedError = /*#__PURE__*/function (_APIError5) {
  function PermissionDeniedError() {
    var _this6;
    _classCallCheck(this, PermissionDeniedError);
    _this6 = _callSuper(this, PermissionDeniedError, arguments);
    _this6.status = 403;
    return _this6;
  }
  _inherits(PermissionDeniedError, _APIError5);
  return _createClass(PermissionDeniedError);
}(APIError);
var NotFoundError = /*#__PURE__*/function (_APIError6) {
  function NotFoundError() {
    var _this7;
    _classCallCheck(this, NotFoundError);
    _this7 = _callSuper(this, NotFoundError, arguments);
    _this7.status = 404;
    return _this7;
  }
  _inherits(NotFoundError, _APIError6);
  return _createClass(NotFoundError);
}(APIError);
var ConflictError = /*#__PURE__*/function (_APIError7) {
  function ConflictError() {
    var _this8;
    _classCallCheck(this, ConflictError);
    _this8 = _callSuper(this, ConflictError, arguments);
    _this8.status = 409;
    return _this8;
  }
  _inherits(ConflictError, _APIError7);
  return _createClass(ConflictError);
}(APIError);
var UnprocessableEntityError = /*#__PURE__*/function (_APIError8) {
  function UnprocessableEntityError() {
    var _this9;
    _classCallCheck(this, UnprocessableEntityError);
    _this9 = _callSuper(this, UnprocessableEntityError, arguments);
    _this9.status = 422;
    return _this9;
  }
  _inherits(UnprocessableEntityError, _APIError8);
  return _createClass(UnprocessableEntityError);
}(APIError);
var RateLimitError = /*#__PURE__*/function (_APIError9) {
  function RateLimitError() {
    var _this10;
    _classCallCheck(this, RateLimitError);
    _this10 = _callSuper(this, RateLimitError, arguments);
    _this10.status = 429;
    return _this10;
  }
  _inherits(RateLimitError, _APIError9);
  return _createClass(RateLimitError);
}(APIError);
var InternalServerError = /*#__PURE__*/function (_APIError10) {
  function InternalServerError() {
    _classCallCheck(this, InternalServerError);
    return _callSuper(this, InternalServerError, arguments);
  }
  _inherits(InternalServerError, _APIError10);
  return _createClass(InternalServerError);
}(APIError);
var LengthFinishReasonError = /*#__PURE__*/function (_OpenAIError2) {
  function LengthFinishReasonError() {
    _classCallCheck(this, LengthFinishReasonError);
    return _callSuper(this, LengthFinishReasonError, ["Could not parse response content as the length limit was reached"]);
  }
  _inherits(LengthFinishReasonError, _OpenAIError2);
  return _createClass(LengthFinishReasonError);
}(OpenAIError);
var ContentFilterFinishReasonError = /*#__PURE__*/function (_OpenAIError3) {
  function ContentFilterFinishReasonError() {
    _classCallCheck(this, ContentFilterFinishReasonError);
    return _callSuper(this, ContentFilterFinishReasonError, ["Could not parse response content as the request was rejected by the content filter"]);
  }
  _inherits(ContentFilterFinishReasonError, _OpenAIError3);
  return _createClass(ContentFilterFinishReasonError);
}(OpenAIError);

/**
 * A re-implementation of httpx's `LineDecoder` in Python that handles incrementally
 * reading lines from text.
 *
 * https://github.com/encode/httpx/blob/920333ea98118e9cf617f246905d7b202510941c/httpx/_decoders.py#L258
 */
var LineDecoder = /*#__PURE__*/function () {
  function LineDecoder() {
    _classCallCheck(this, LineDecoder);
    this.buffer = [];
    this.trailingCR = false;
  }
  return _createClass(LineDecoder, [{
    key: "decode",
    value: function decode(chunk) {
      var text = this.decodeText(chunk);
      if (this.trailingCR) {
        text = '\r' + text;
        this.trailingCR = false;
      }
      if (text.endsWith('\r')) {
        this.trailingCR = true;
        text = text.slice(0, -1);
      }
      if (!text) {
        return [];
      }
      var trailingNewline = LineDecoder.NEWLINE_CHARS.has(text[text.length - 1] || '');
      var lines = text.split(LineDecoder.NEWLINE_REGEXP);
      // if there is a trailing new line then the last entry will be an empty
      // string which we don't care about
      if (trailingNewline) {
        lines.pop();
      }
      if (lines.length === 1 && !trailingNewline) {
        this.buffer.push(lines[0]);
        return [];
      }
      if (this.buffer.length > 0) {
        lines = [this.buffer.join('') + lines[0]].concat(_toConsumableArray(lines.slice(1)));
        this.buffer = [];
      }
      if (!trailingNewline) {
        this.buffer = [lines.pop() || ''];
      }
      return lines;
    }
  }, {
    key: "decodeText",
    value: function decodeText(bytes) {
      if (bytes == null) return '';
      if (typeof bytes === 'string') return bytes;
      // Node:
      if (typeof Buffer !== 'undefined') {
        if (bytes instanceof Buffer) {
          return bytes.toString();
        }
        if (bytes instanceof Uint8Array) {
          return Buffer.from(bytes).toString();
        }
        throw new OpenAIError("Unexpected: received non-Uint8Array (".concat(bytes.constructor.name, ") stream chunk in an environment with a global \"Buffer\" defined, which this library assumes to be Node. Please report this error."));
      }
      // Browser
      if (typeof TextDecoder !== 'undefined') {
        if (bytes instanceof Uint8Array || bytes instanceof ArrayBuffer) {
          var _this$textDecoder;
          (_this$textDecoder = this.textDecoder) !== null && _this$textDecoder !== void 0 ? _this$textDecoder : this.textDecoder = new TextDecoder('utf8');
          return this.textDecoder.decode(bytes);
        }
        throw new OpenAIError("Unexpected: received non-Uint8Array/ArrayBuffer (".concat(bytes.constructor.name, ") in a web platform. Please report this error."));
      }
      throw new OpenAIError("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.");
    }
  }, {
    key: "flush",
    value: function flush() {
      if (!this.buffer.length && !this.trailingCR) {
        return [];
      }
      var lines = [this.buffer.join('')];
      this.buffer = [];
      this.trailingCR = false;
      return lines;
    }
  }]);
}();
// prettier-ignore
LineDecoder.NEWLINE_CHARS = new Set(['\n', '\r']);
LineDecoder.NEWLINE_REGEXP = /\r\n|[\n\r]/g;

var Stream = /*#__PURE__*/function () {
  function Stream(iterator, controller) {
    _classCallCheck(this, Stream);
    this.iterator = iterator;
    this.controller = controller;
  }
  return _createClass(Stream, [{
    key: Symbol.asyncIterator,
    value: function value() {
      return this.iterator();
    }
    /**
     * Splits the stream into two streams which can be
     * independently read from at different speeds.
     */
  }, {
    key: "tee",
    value: function tee() {
      var left = [];
      var right = [];
      var iterator = this.iterator();
      var teeIterator = function teeIterator(queue) {
        return {
          next: function next() {
            if (queue.length === 0) {
              var result = iterator.next();
              left.push(result);
              right.push(result);
            }
            return queue.shift();
          }
        };
      };
      return [new Stream(function () {
        return teeIterator(left);
      }, this.controller), new Stream(function () {
        return teeIterator(right);
      }, this.controller)];
    }
    /**
     * Converts this stream to a newline-separated ReadableStream of
     * JSON stringified values in the stream
     * which can be turned back into a Stream with `Stream.fromReadableStream()`.
     */
  }, {
    key: "toReadableStream",
    value: function toReadableStream() {
      var self = this;
      var iter;
      var encoder = new TextEncoder();
      return new ReadableStream$1({
        start: function start() {
          return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  iter = self[Symbol.asyncIterator]();
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        },
        pull: function pull(ctrl) {
          return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _yield$iter$next, value, done, bytes;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return iter.next();
                case 3:
                  _yield$iter$next = _context2.sent;
                  value = _yield$iter$next.value;
                  done = _yield$iter$next.done;
                  if (!done) {
                    _context2.next = 8;
                    break;
                  }
                  return _context2.abrupt("return", ctrl.close());
                case 8:
                  bytes = encoder.encode(JSON.stringify(value) + '\n');
                  ctrl.enqueue(bytes);
                  _context2.next = 15;
                  break;
                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](0);
                  ctrl.error(_context2.t0);
                case 15:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 12]]);
          }))();
        },
        cancel: function cancel() {
          return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _iter$return, _iter;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (_iter$return = (_iter = iter).return) === null || _iter$return === void 0 ? void 0 : _iter$return.call(_iter);
                case 2:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }))();
        }
      });
    }
  }], [{
    key: "fromSSEResponse",
    value: function fromSSEResponse(response, controller) {
      var consumed = false;
      function iterator() {
        return _iterator2.apply(this, arguments);
      }
      function _iterator2() {
        _iterator2 = _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var done, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, sse, data, _data;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!consumed) {
                  _context4.next = 2;
                  break;
                }
                throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
              case 2:
                consumed = true;
                done = false;
                _context4.prev = 4;
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context4.prev = 7;
                _iterator = _asyncIterator(_iterSSEMessages(response, controller));
              case 9:
                _context4.next = 11;
                return _awaitAsyncGenerator(_iterator.next());
              case 11:
                if (!(_iteratorAbruptCompletion = !(_step = _context4.sent).done)) {
                  _context4.next = 52;
                  break;
                }
                sse = _step.value;
                if (!done) {
                  _context4.next = 15;
                  break;
                }
                return _context4.abrupt("continue", 49);
              case 15:
                if (!sse.data.startsWith('[DONE]')) {
                  _context4.next = 18;
                  break;
                }
                done = true;
                return _context4.abrupt("continue", 49);
              case 18:
                if (!(sse.event === null)) {
                  _context4.next = 35;
                  break;
                }
                data = void 0;
                _context4.prev = 20;
                data = JSON.parse(sse.data);
                _context4.next = 29;
                break;
              case 24:
                _context4.prev = 24;
                _context4.t0 = _context4["catch"](20);
                console.error("Could not parse message into JSON:", sse.data);
                console.error("From chunk:", sse.raw);
                throw _context4.t0;
              case 29:
                if (!(data && data.error)) {
                  _context4.next = 31;
                  break;
                }
                throw new APIError(undefined, data.error, undefined, undefined);
              case 31:
                _context4.next = 33;
                return data;
              case 33:
                _context4.next = 49;
                break;
              case 35:
                _data = void 0;
                _context4.prev = 36;
                _data = JSON.parse(sse.data);
                _context4.next = 45;
                break;
              case 40:
                _context4.prev = 40;
                _context4.t1 = _context4["catch"](36);
                console.error("Could not parse message into JSON:", sse.data);
                console.error("From chunk:", sse.raw);
                throw _context4.t1;
              case 45:
                if (!(sse.event == 'error')) {
                  _context4.next = 47;
                  break;
                }
                throw new APIError(undefined, _data.error, _data.message, undefined);
              case 47:
                _context4.next = 49;
                return {
                  event: sse.event,
                  data: _data
                };
              case 49:
                _iteratorAbruptCompletion = false;
                _context4.next = 9;
                break;
              case 52:
                _context4.next = 58;
                break;
              case 54:
                _context4.prev = 54;
                _context4.t2 = _context4["catch"](7);
                _didIteratorError = true;
                _iteratorError = _context4.t2;
              case 58:
                _context4.prev = 58;
                _context4.prev = 59;
                if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                  _context4.next = 63;
                  break;
                }
                _context4.next = 63;
                return _awaitAsyncGenerator(_iterator.return());
              case 63:
                _context4.prev = 63;
                if (!_didIteratorError) {
                  _context4.next = 66;
                  break;
                }
                throw _iteratorError;
              case 66:
                return _context4.finish(63);
              case 67:
                return _context4.finish(58);
              case 68:
                done = true;
                _context4.next = 76;
                break;
              case 71:
                _context4.prev = 71;
                _context4.t3 = _context4["catch"](4);
                if (!(_context4.t3 instanceof Error && _context4.t3.name === 'AbortError')) {
                  _context4.next = 75;
                  break;
                }
                return _context4.abrupt("return");
              case 75:
                throw _context4.t3;
              case 76:
                _context4.prev = 76;
                // If the user `break`s, abort the ongoing request.
                if (!done) controller.abort();
                return _context4.finish(76);
              case 79:
              case "end":
                return _context4.stop();
            }
          }, _callee4, null, [[4, 71, 76, 79], [7, 54, 58, 68], [20, 24], [36, 40], [59,, 63, 67]]);
        }));
        return _iterator2.apply(this, arguments);
      }
      return new Stream(iterator, controller);
    }
    /**
     * Generates a Stream from a newline-separated ReadableStream
     * where each item is a JSON value.
     */
  }, {
    key: "fromReadableStream",
    value: function fromReadableStream(readableStream, controller) {
      var consumed = false;
      function iterLines() {
        return _iterLines.apply(this, arguments);
      }
      function _iterLines() {
        _iterLines = _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var lineDecoder, iter, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator3, _step2, chunk, _iterator8, _step6, line, _iterator9, _step7, _line;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                lineDecoder = new LineDecoder();
                iter = readableStreamAsyncIterable(readableStream);
                _iteratorAbruptCompletion2 = false;
                _didIteratorError2 = false;
                _context5.prev = 4;
                _iterator3 = _asyncIterator(iter);
              case 6:
                _context5.next = 8;
                return _awaitAsyncGenerator(_iterator3.next());
              case 8:
                if (!(_iteratorAbruptCompletion2 = !(_step2 = _context5.sent).done)) {
                  _context5.next = 30;
                  break;
                }
                chunk = _step2.value;
                _iterator8 = _createForOfIteratorHelper(lineDecoder.decode(chunk));
                _context5.prev = 11;
                _iterator8.s();
              case 13:
                if ((_step6 = _iterator8.n()).done) {
                  _context5.next = 19;
                  break;
                }
                line = _step6.value;
                _context5.next = 17;
                return line;
              case 17:
                _context5.next = 13;
                break;
              case 19:
                _context5.next = 24;
                break;
              case 21:
                _context5.prev = 21;
                _context5.t0 = _context5["catch"](11);
                _iterator8.e(_context5.t0);
              case 24:
                _context5.prev = 24;
                _iterator8.f();
                return _context5.finish(24);
              case 27:
                _iteratorAbruptCompletion2 = false;
                _context5.next = 6;
                break;
              case 30:
                _context5.next = 36;
                break;
              case 32:
                _context5.prev = 32;
                _context5.t1 = _context5["catch"](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context5.t1;
              case 36:
                _context5.prev = 36;
                _context5.prev = 37;
                if (!(_iteratorAbruptCompletion2 && _iterator3.return != null)) {
                  _context5.next = 41;
                  break;
                }
                _context5.next = 41;
                return _awaitAsyncGenerator(_iterator3.return());
              case 41:
                _context5.prev = 41;
                if (!_didIteratorError2) {
                  _context5.next = 44;
                  break;
                }
                throw _iteratorError2;
              case 44:
                return _context5.finish(41);
              case 45:
                return _context5.finish(36);
              case 46:
                _iterator9 = _createForOfIteratorHelper(lineDecoder.flush());
                _context5.prev = 47;
                _iterator9.s();
              case 49:
                if ((_step7 = _iterator9.n()).done) {
                  _context5.next = 55;
                  break;
                }
                _line = _step7.value;
                _context5.next = 53;
                return _line;
              case 53:
                _context5.next = 49;
                break;
              case 55:
                _context5.next = 60;
                break;
              case 57:
                _context5.prev = 57;
                _context5.t2 = _context5["catch"](47);
                _iterator9.e(_context5.t2);
              case 60:
                _context5.prev = 60;
                _iterator9.f();
                return _context5.finish(60);
              case 63:
              case "end":
                return _context5.stop();
            }
          }, _callee5, null, [[4, 32, 36, 46], [11, 21, 24, 27], [37,, 41, 45], [47, 57, 60, 63]]);
        }));
        return _iterLines.apply(this, arguments);
      }
      function iterator() {
        return _iterator5.apply(this, arguments);
      }
      function _iterator5() {
        _iterator5 = _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
          var done, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator4, _step3, line;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                if (!consumed) {
                  _context6.next = 2;
                  break;
                }
                throw new Error('Cannot iterate over a consumed stream, use `.tee()` to split the stream.');
              case 2:
                consumed = true;
                done = false;
                _context6.prev = 4;
                _iteratorAbruptCompletion3 = false;
                _didIteratorError3 = false;
                _context6.prev = 7;
                _iterator4 = _asyncIterator(iterLines());
              case 9:
                _context6.next = 11;
                return _awaitAsyncGenerator(_iterator4.next());
              case 11:
                if (!(_iteratorAbruptCompletion3 = !(_step3 = _context6.sent).done)) {
                  _context6.next = 21;
                  break;
                }
                line = _step3.value;
                if (!done) {
                  _context6.next = 15;
                  break;
                }
                return _context6.abrupt("continue", 18);
              case 15:
                if (!line) {
                  _context6.next = 18;
                  break;
                }
                _context6.next = 18;
                return JSON.parse(line);
              case 18:
                _iteratorAbruptCompletion3 = false;
                _context6.next = 9;
                break;
              case 21:
                _context6.next = 27;
                break;
              case 23:
                _context6.prev = 23;
                _context6.t0 = _context6["catch"](7);
                _didIteratorError3 = true;
                _iteratorError3 = _context6.t0;
              case 27:
                _context6.prev = 27;
                _context6.prev = 28;
                if (!(_iteratorAbruptCompletion3 && _iterator4.return != null)) {
                  _context6.next = 32;
                  break;
                }
                _context6.next = 32;
                return _awaitAsyncGenerator(_iterator4.return());
              case 32:
                _context6.prev = 32;
                if (!_didIteratorError3) {
                  _context6.next = 35;
                  break;
                }
                throw _iteratorError3;
              case 35:
                return _context6.finish(32);
              case 36:
                return _context6.finish(27);
              case 37:
                done = true;
                _context6.next = 45;
                break;
              case 40:
                _context6.prev = 40;
                _context6.t1 = _context6["catch"](4);
                if (!(_context6.t1 instanceof Error && _context6.t1.name === 'AbortError')) {
                  _context6.next = 44;
                  break;
                }
                return _context6.abrupt("return");
              case 44:
                throw _context6.t1;
              case 45:
                _context6.prev = 45;
                // If the user `break`s, abort the ongoing request.
                if (!done) controller.abort();
                return _context6.finish(45);
              case 48:
              case "end":
                return _context6.stop();
            }
          }, _callee6, null, [[4, 40, 45, 48], [7, 23, 27, 37], [28,, 32, 36]]);
        }));
        return _iterator5.apply(this, arguments);
      }
      return new Stream(iterator, controller);
    }
  }]);
}();
function _iterSSEMessages(_x, _x2) {
  return _iterSSEMessages2.apply(this, arguments);
}
/**
 * Given an async iterable iterator, iterates over it and yields full
 * SSE chunks, i.e. yields when a double new-line is encountered.
 */
function _iterSSEMessages2() {
  _iterSSEMessages2 = _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(response, controller) {
    var sseDecoder, lineDecoder, iter, _iteratorAbruptCompletion4, _didIteratorError4, _iteratorError4, _iterator6, _step4, sseChunk, _iterator10, _step8, line, sse, _iterator11, _step9, _line2, _sse;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (response.body) {
            _context7.next = 3;
            break;
          }
          controller.abort();
          throw new OpenAIError("Attempted to iterate over a response with no body");
        case 3:
          sseDecoder = new SSEDecoder();
          lineDecoder = new LineDecoder();
          iter = readableStreamAsyncIterable(response.body);
          _iteratorAbruptCompletion4 = false;
          _didIteratorError4 = false;
          _context7.prev = 8;
          _iterator6 = _asyncIterator(iterSSEChunks(iter));
        case 10:
          _context7.next = 12;
          return _awaitAsyncGenerator(_iterator6.next());
        case 12:
          if (!(_iteratorAbruptCompletion4 = !(_step4 = _context7.sent).done)) {
            _context7.next = 36;
            break;
          }
          sseChunk = _step4.value;
          _iterator10 = _createForOfIteratorHelper(lineDecoder.decode(sseChunk));
          _context7.prev = 15;
          _iterator10.s();
        case 17:
          if ((_step8 = _iterator10.n()).done) {
            _context7.next = 25;
            break;
          }
          line = _step8.value;
          sse = sseDecoder.decode(line);
          if (!sse) {
            _context7.next = 23;
            break;
          }
          _context7.next = 23;
          return sse;
        case 23:
          _context7.next = 17;
          break;
        case 25:
          _context7.next = 30;
          break;
        case 27:
          _context7.prev = 27;
          _context7.t0 = _context7["catch"](15);
          _iterator10.e(_context7.t0);
        case 30:
          _context7.prev = 30;
          _iterator10.f();
          return _context7.finish(30);
        case 33:
          _iteratorAbruptCompletion4 = false;
          _context7.next = 10;
          break;
        case 36:
          _context7.next = 42;
          break;
        case 38:
          _context7.prev = 38;
          _context7.t1 = _context7["catch"](8);
          _didIteratorError4 = true;
          _iteratorError4 = _context7.t1;
        case 42:
          _context7.prev = 42;
          _context7.prev = 43;
          if (!(_iteratorAbruptCompletion4 && _iterator6.return != null)) {
            _context7.next = 47;
            break;
          }
          _context7.next = 47;
          return _awaitAsyncGenerator(_iterator6.return());
        case 47:
          _context7.prev = 47;
          if (!_didIteratorError4) {
            _context7.next = 50;
            break;
          }
          throw _iteratorError4;
        case 50:
          return _context7.finish(47);
        case 51:
          return _context7.finish(42);
        case 52:
          _iterator11 = _createForOfIteratorHelper(lineDecoder.flush());
          _context7.prev = 53;
          _iterator11.s();
        case 55:
          if ((_step9 = _iterator11.n()).done) {
            _context7.next = 63;
            break;
          }
          _line2 = _step9.value;
          _sse = sseDecoder.decode(_line2);
          if (!_sse) {
            _context7.next = 61;
            break;
          }
          _context7.next = 61;
          return _sse;
        case 61:
          _context7.next = 55;
          break;
        case 63:
          _context7.next = 68;
          break;
        case 65:
          _context7.prev = 65;
          _context7.t2 = _context7["catch"](53);
          _iterator11.e(_context7.t2);
        case 68:
          _context7.prev = 68;
          _iterator11.f();
          return _context7.finish(68);
        case 71:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[8, 38, 42, 52], [15, 27, 30, 33], [43,, 47, 51], [53, 65, 68, 71]]);
  }));
  return _iterSSEMessages2.apply(this, arguments);
}
function iterSSEChunks(_x3) {
  return _iterSSEChunks.apply(this, arguments);
}
function _iterSSEChunks() {
  _iterSSEChunks = _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(iterator) {
    var data, _iteratorAbruptCompletion5, _didIteratorError5, _iteratorError5, _iterator7, _step5, chunk, binaryChunk, newData, patternIndex;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          data = new Uint8Array();
          _iteratorAbruptCompletion5 = false;
          _didIteratorError5 = false;
          _context8.prev = 3;
          _iterator7 = _asyncIterator(iterator);
        case 5:
          _context8.next = 7;
          return _awaitAsyncGenerator(_iterator7.next());
        case 7:
          if (!(_iteratorAbruptCompletion5 = !(_step5 = _context8.sent).done)) {
            _context8.next = 26;
            break;
          }
          chunk = _step5.value;
          if (!(chunk == null)) {
            _context8.next = 11;
            break;
          }
          return _context8.abrupt("continue", 23);
        case 11:
          binaryChunk = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : typeof chunk === 'string' ? new TextEncoder().encode(chunk) : chunk;
          newData = new Uint8Array(data.length + binaryChunk.length);
          newData.set(data);
          newData.set(binaryChunk, data.length);
          data = newData;
          patternIndex = void 0;
        case 17:
          if (!((patternIndex = findDoubleNewlineIndex(data)) !== -1)) {
            _context8.next = 23;
            break;
          }
          _context8.next = 20;
          return data.slice(0, patternIndex);
        case 20:
          data = data.slice(patternIndex);
          _context8.next = 17;
          break;
        case 23:
          _iteratorAbruptCompletion5 = false;
          _context8.next = 5;
          break;
        case 26:
          _context8.next = 32;
          break;
        case 28:
          _context8.prev = 28;
          _context8.t0 = _context8["catch"](3);
          _didIteratorError5 = true;
          _iteratorError5 = _context8.t0;
        case 32:
          _context8.prev = 32;
          _context8.prev = 33;
          if (!(_iteratorAbruptCompletion5 && _iterator7.return != null)) {
            _context8.next = 37;
            break;
          }
          _context8.next = 37;
          return _awaitAsyncGenerator(_iterator7.return());
        case 37:
          _context8.prev = 37;
          if (!_didIteratorError5) {
            _context8.next = 40;
            break;
          }
          throw _iteratorError5;
        case 40:
          return _context8.finish(37);
        case 41:
          return _context8.finish(32);
        case 42:
          if (!(data.length > 0)) {
            _context8.next = 45;
            break;
          }
          _context8.next = 45;
          return data;
        case 45:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[3, 28, 32, 42], [33,, 37, 41]]);
  }));
  return _iterSSEChunks.apply(this, arguments);
}
function findDoubleNewlineIndex(buffer) {
  // This function searches the buffer for the end patterns (\r\r, \n\n, \r\n\r\n)
  // and returns the index right after the first occurrence of any pattern,
  // or -1 if none of the patterns are found.
  var newline = 0x0a; // \n
  var carriage = 0x0d; // \r
  for (var i = 0; i < buffer.length - 2; i++) {
    if (buffer[i] === newline && buffer[i + 1] === newline) {
      // \n\n
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === carriage) {
      // \r\r
      return i + 2;
    }
    if (buffer[i] === carriage && buffer[i + 1] === newline && i + 3 < buffer.length && buffer[i + 2] === carriage && buffer[i + 3] === newline) {
      // \r\n\r\n
      return i + 4;
    }
  }
  return -1;
}
var SSEDecoder = /*#__PURE__*/function () {
  function SSEDecoder() {
    _classCallCheck(this, SSEDecoder);
    this.event = null;
    this.data = [];
    this.chunks = [];
  }
  return _createClass(SSEDecoder, [{
    key: "decode",
    value: function decode(line) {
      if (line.endsWith('\r')) {
        line = line.substring(0, line.length - 1);
      }
      if (!line) {
        // empty line and we didn't previously encounter any messages
        if (!this.event && !this.data.length) return null;
        var sse = {
          event: this.event,
          data: this.data.join('\n'),
          raw: this.chunks
        };
        this.event = null;
        this.data = [];
        this.chunks = [];
        return sse;
      }
      this.chunks.push(line);
      if (line.startsWith(':')) {
        return null;
      }
      var _partition = partition(line, ':'),
        _partition2 = _slicedToArray(_partition, 3),
        fieldname = _partition2[0];
        _partition2[1];
        var value = _partition2[2];
      if (value.startsWith(' ')) {
        value = value.substring(1);
      }
      if (fieldname === 'event') {
        this.event = value;
      } else if (fieldname === 'data') {
        this.data.push(value);
      }
      return null;
    }
  }]);
}();
function partition(str, delimiter) {
  var index = str.indexOf(delimiter);
  if (index !== -1) {
    return [str.substring(0, index), delimiter, str.substring(index + delimiter.length)];
  }
  return [str, '', ''];
}
/**
 * Most browsers don't yet have async iterable support for ReadableStream,
 * and Node has a very different way of reading bytes from its "ReadableStream".
 *
 * This polyfill was pulled from https://github.com/MattiasBuelens/web-streams-polyfill/pull/122#issuecomment-1627354490
 */
function readableStreamAsyncIterable(stream) {
  if (stream[Symbol.asyncIterator]) return stream;
  var reader = stream.getReader();
  return _defineProperty({
    next: function next() {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var result;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;
              _context9.next = 3;
              return reader.read();
            case 3:
              result = _context9.sent;
              if (result !== null && result !== void 0 && result.done) reader.releaseLock(); // release lock when stream becomes closed
              return _context9.abrupt("return", result);
            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9["catch"](0);
              reader.releaseLock(); // release lock when stream becomes errored
              throw _context9.t0;
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9, null, [[0, 8]]);
      }))();
    },
    return: function _return() {
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var cancelPromise;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              cancelPromise = reader.cancel();
              reader.releaseLock();
              _context10.next = 4;
              return cancelPromise;
            case 4:
              return _context10.abrupt("return", {
                done: true,
                value: undefined
              });
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    }
  }, Symbol.asyncIterator, function () {
    return this;
  });
}

var isResponseLike = function isResponseLike(value) {
  return value != null && _typeof(value) === 'object' && typeof value.url === 'string' && typeof value.blob === 'function';
};
var isFileLike = function isFileLike(value) {
  return value != null && _typeof(value) === 'object' && typeof value.name === 'string' && typeof value.lastModified === 'number' && isBlobLike(value);
};
/**
 * The BlobLike type omits arrayBuffer() because @types/node-fetch@^2.6.4 lacks it; but this check
 * adds the arrayBuffer() method type because it is available and used at runtime
 */
var isBlobLike = function isBlobLike(value) {
  return value != null && _typeof(value) === 'object' && typeof value.size === 'number' && typeof value.type === 'string' && typeof value.text === 'function' && typeof value.slice === 'function' && typeof value.arrayBuffer === 'function';
};
var isUploadable = function isUploadable(value) {
  return isFileLike(value) || isResponseLike(value) || isFsReadStream(value);
};
/**
 * Helper for creating a {@link File} to pass to an SDK upload method from a variety of different data formats
 * @param value the raw content of the file.  Can be an {@link Uploadable}, {@link BlobLikePart}, or {@link AsyncIterable} of {@link BlobLikePart}s
 * @param {string=} name the name of the file. If omitted, toFile will try to determine a file name from bits if possible
 * @param {Object=} options additional properties
 * @param {string=} options.type the MIME type of the content
 * @param {number=} options.lastModified the last modified timestamp
 * @returns a {@link File} with the given properties
 */
function toFile(_x, _x2, _x3) {
  return _toFile.apply(this, arguments);
}
function _toFile() {
  _toFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(value, name, options) {
    var _getName, _options;
    var _URL$pathname$split$p, blob, data, bits, _bits$, type;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return value;
        case 2:
          value = _context5.sent;
          if (!isFileLike(value)) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", value);
        case 5:
          if (!isResponseLike(value)) {
            _context5.next = 20;
            break;
          }
          _context5.next = 8;
          return value.blob();
        case 8:
          blob = _context5.sent;
          name || (name = (_URL$pathname$split$p = new URL(value.url).pathname.split(/[\\/]/).pop()) !== null && _URL$pathname$split$p !== void 0 ? _URL$pathname$split$p : 'unknown_file');
          // we need to convert the `Blob` into an array buffer because the `Blob` class
          // that `node-fetch` defines is incompatible with the web standard which results
          // in `new File` interpreting it as a string instead of binary data.
          if (!isBlobLike(blob)) {
            _context5.next = 17;
            break;
          }
          _context5.next = 13;
          return blob.arrayBuffer();
        case 13:
          _context5.t1 = _context5.sent;
          _context5.t0 = [_context5.t1];
          _context5.next = 18;
          break;
        case 17:
          _context5.t0 = [blob];
        case 18:
          data = _context5.t0;
          return _context5.abrupt("return", new File$1(data, name, options));
        case 20:
          _context5.next = 22;
          return getBytes(value);
        case 22:
          bits = _context5.sent;
          name || (name = (_getName = getName(value)) !== null && _getName !== void 0 ? _getName : 'unknown_file');
          if (!((_options = options) !== null && _options !== void 0 && _options.type)) {
            type = (_bits$ = bits[0]) === null || _bits$ === void 0 ? void 0 : _bits$.type;
            if (typeof type === 'string') {
              options = _objectSpread2(_objectSpread2({}, options), {}, {
                type: type
              });
            }
          }
          return _context5.abrupt("return", new File$1(bits, name, options));
        case 26:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _toFile.apply(this, arguments);
}
function getBytes(_x4) {
  return _getBytes.apply(this, arguments);
}
function _getBytes() {
  _getBytes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(value) {
    var parts, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk, _value$constructor;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          parts = [];
          if (!(typeof value === 'string' || ArrayBuffer.isView(value) ||
          // includes Uint8Array, Buffer, etc.
          value instanceof ArrayBuffer)) {
            _context6.next = 5;
            break;
          }
          parts.push(value);
          _context6.next = 45;
          break;
        case 5:
          if (!isBlobLike(value)) {
            _context6.next = 13;
            break;
          }
          _context6.t0 = parts;
          _context6.next = 9;
          return value.arrayBuffer();
        case 9:
          _context6.t1 = _context6.sent;
          _context6.t0.push.call(_context6.t0, _context6.t1);
          _context6.next = 45;
          break;
        case 13:
          if (!isAsyncIterableIterator(value) // includes Readable, ReadableStream, etc.
          ) {
            _context6.next = 44;
            break;
          }
          _iteratorAbruptCompletion = false;
          _didIteratorError = false;
          _context6.prev = 16;
          _iterator = _asyncIterator(value);
        case 18:
          _context6.next = 20;
          return _iterator.next();
        case 20:
          if (!(_iteratorAbruptCompletion = !(_step = _context6.sent).done)) {
            _context6.next = 26;
            break;
          }
          chunk = _step.value;
          parts.push(chunk); // TODO, consider validating?
        case 23:
          _iteratorAbruptCompletion = false;
          _context6.next = 18;
          break;
        case 26:
          _context6.next = 32;
          break;
        case 28:
          _context6.prev = 28;
          _context6.t2 = _context6["catch"](16);
          _didIteratorError = true;
          _iteratorError = _context6.t2;
        case 32:
          _context6.prev = 32;
          _context6.prev = 33;
          if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
            _context6.next = 37;
            break;
          }
          _context6.next = 37;
          return _iterator.return();
        case 37:
          _context6.prev = 37;
          if (!_didIteratorError) {
            _context6.next = 40;
            break;
          }
          throw _iteratorError;
        case 40:
          return _context6.finish(37);
        case 41:
          return _context6.finish(32);
        case 42:
          _context6.next = 45;
          break;
        case 44:
          throw new Error("Unexpected data type: ".concat(_typeof(value), "; constructor: ").concat(value === null || value === void 0 || (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name, "; props: ").concat(propsForError(value)));
        case 45:
          return _context6.abrupt("return", parts);
        case 46:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[16, 28, 32, 42], [33,, 37, 41]]);
  }));
  return _getBytes.apply(this, arguments);
}
function propsForError(value) {
  var props = Object.getOwnPropertyNames(value);
  return "[".concat(props.map(function (p) {
    return "\"".concat(p, "\"");
  }).join(', '), "]");
}
function getName(value) {
  var _getStringFromMaybeBu;
  return getStringFromMaybeBuffer(value.name) || getStringFromMaybeBuffer(value.filename) || (// For fs.ReadStream
  (_getStringFromMaybeBu = getStringFromMaybeBuffer(value.path)) === null || _getStringFromMaybeBu === void 0 ? void 0 : _getStringFromMaybeBu.split(/[\\/]/).pop());
}
var getStringFromMaybeBuffer = function getStringFromMaybeBuffer(x) {
  if (typeof x === 'string') return x;
  if (typeof Buffer !== 'undefined' && x instanceof Buffer) return String(x);
  return undefined;
};
var isAsyncIterableIterator = function isAsyncIterableIterator(value) {
  return value != null && _typeof(value) === 'object' && typeof value[Symbol.asyncIterator] === 'function';
};
var isMultipartBody = function isMultipartBody(body) {
  return body && _typeof(body) === 'object' && body.body && body[Symbol.toStringTag] === 'MultipartBody';
};
var multipartFormRequestOptions = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(opts) {
    var form;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return createForm(opts.body);
        case 2:
          form = _context2.sent;
          return _context2.abrupt("return", getMultipartRequestOptions(form, opts));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function multipartFormRequestOptions(_x6) {
    return _ref2.apply(this, arguments);
  };
}();
var createForm = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(body) {
    var form;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          form = new FormData$1();
          _context3.next = 3;
          return Promise.all(Object.entries(body || {}).map(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
              key = _ref5[0],
              value = _ref5[1];
            return _addFormValue(form, key, value);
          }));
        case 3:
          return _context3.abrupt("return", form);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function createForm(_x7) {
    return _ref3.apply(this, arguments);
  };
}();
var _addFormValue = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(form, key, value) {
    var file;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(value === undefined)) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return");
        case 2:
          if (!(value == null)) {
            _context4.next = 4;
            break;
          }
          throw new TypeError("Received null for \"".concat(key, "\"; to pass null in FormData, you must use the string 'null'"));
        case 4:
          if (!(typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean')) {
            _context4.next = 8;
            break;
          }
          form.append(key, String(value));
          _context4.next = 26;
          break;
        case 8:
          if (!isUploadable(value)) {
            _context4.next = 15;
            break;
          }
          _context4.next = 11;
          return toFile(value);
        case 11:
          file = _context4.sent;
          form.append(key, file);
          _context4.next = 26;
          break;
        case 15:
          if (!Array.isArray(value)) {
            _context4.next = 20;
            break;
          }
          _context4.next = 18;
          return Promise.all(value.map(function (entry) {
            return _addFormValue(form, key + '[]', entry);
          }));
        case 18:
          _context4.next = 26;
          break;
        case 20:
          if (!(_typeof(value) === 'object')) {
            _context4.next = 25;
            break;
          }
          _context4.next = 23;
          return Promise.all(Object.entries(value).map(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
              name = _ref8[0],
              prop = _ref8[1];
            return _addFormValue(form, "".concat(key, "[").concat(name, "]"), prop);
          }));
        case 23:
          _context4.next = 26;
          break;
        case 25:
          throw new TypeError("Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ".concat(value, " instead"));
        case 26:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function addFormValue(_x8, _x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

var _excluded$4 = ["signal"];
var __classPrivateFieldSet$3 = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet$4 = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractPage_client;
function defaultParseResponse(_x) {
  return _defaultParseResponse.apply(this, arguments);
}
function _defaultParseResponse() {
  _defaultParseResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(props) {
    var response, contentType, isJSON, json, text;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          response = props.response;
          if (!props.options.stream) {
            _context14.next = 6;
            break;
          }
          debug('response', response.status, response.url, response.headers, response.body);
          // Note: there is an invariant here that isn't represented in the type system
          // that if you set `stream: true` the response type must also be `Stream<T>`
          if (!props.options.__streamClass) {
            _context14.next = 5;
            break;
          }
          return _context14.abrupt("return", props.options.__streamClass.fromSSEResponse(response, props.controller));
        case 5:
          return _context14.abrupt("return", Stream.fromSSEResponse(response, props.controller));
        case 6:
          if (!(response.status === 204)) {
            _context14.next = 8;
            break;
          }
          return _context14.abrupt("return", null);
        case 8:
          if (!props.options.__binaryResponse) {
            _context14.next = 10;
            break;
          }
          return _context14.abrupt("return", response);
        case 10:
          contentType = response.headers.get('content-type');
          isJSON = (contentType === null || contentType === void 0 ? void 0 : contentType.includes('application/json')) || (contentType === null || contentType === void 0 ? void 0 : contentType.includes('application/vnd.api+json'));
          if (!isJSON) {
            _context14.next = 18;
            break;
          }
          _context14.next = 15;
          return response.json();
        case 15:
          json = _context14.sent;
          debug('response', response.status, response.url, response.headers, json);
          return _context14.abrupt("return", _addRequestID(json, response));
        case 18:
          _context14.next = 20;
          return response.text();
        case 20:
          text = _context14.sent;
          debug('response', response.status, response.url, response.headers, text);
          // TODO handle blob, arraybuffer, other content types, etc.
          return _context14.abrupt("return", text);
        case 23:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _defaultParseResponse.apply(this, arguments);
}
function _addRequestID(value, response) {
  if (!value || _typeof(value) !== 'object' || Array.isArray(value)) {
    return value;
  }
  return Object.defineProperty(value, '_request_id', {
    value: response.headers.get('x-request-id'),
    enumerable: false
  });
}
/**
 * A subclass of `Promise` providing additional helper methods
 * for interacting with the SDK.
 */
var APIPromise = /*#__PURE__*/function (_Promise) {
  function APIPromise(responsePromise) {
    var _this4;
    var parseResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultParseResponse;
    _classCallCheck(this, APIPromise);
    _this4 = _callSuper(this, APIPromise, [function (resolve) {
      // this is maybe a bit weird but this has to be a no-op to not implicitly
      // parse the response body; instead .then, .catch, .finally are overridden
      // to parse the response
      resolve(null);
    }]);
    _this4.responsePromise = responsePromise;
    _this4.parseResponse = parseResponse;
    return _this4;
  }
  _inherits(APIPromise, _Promise);
  return _createClass(APIPromise, [{
    key: "_thenUnwrap",
    value: function _thenUnwrap(transform) {
      var _this5 = this;
      return new APIPromise(this.responsePromise, /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(props) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = _addRequestID;
                _context.t1 = transform;
                _context.next = 4;
                return _this5.parseResponse(props);
              case 4:
                _context.t2 = _context.sent;
                _context.t3 = props;
                _context.t4 = (0, _context.t1)(_context.t2, _context.t3);
                _context.t5 = props.response;
                return _context.abrupt("return", (0, _context.t0)(_context.t4, _context.t5));
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    /**
     * Gets the raw `Response` instance instead of parsing the response
     * data.
     *
     * If you want to parse the response body but still get the `Response`
     * instance, you can use {@link withResponse()}.
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */
  }, {
    key: "asResponse",
    value: function asResponse() {
      return this.responsePromise.then(function (p) {
        return p.response;
      });
    }
    /**
     * Gets the parsed response data, the raw `Response` instance and the ID of the request,
     * returned via the X-Request-ID header which is useful for debugging requests and reporting
     * issues to OpenAI.
     *
     * If you just want to get the raw `Response` instance without parsing it,
     * you can use {@link asResponse()}.
     *
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */
  }, {
    key: "withResponse",
    value: (function () {
      var _withResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$Promise$all, _yield$Promise$all2, data, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Promise.all([this.parse(), this.asResponse()]);
            case 2:
              _yield$Promise$all = _context2.sent;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              data = _yield$Promise$all2[0];
              response = _yield$Promise$all2[1];
              return _context2.abrupt("return", {
                data: data,
                response: response,
                request_id: response.headers.get('x-request-id')
              });
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function withResponse() {
        return _withResponse.apply(this, arguments);
      }
      return withResponse;
    }())
  }, {
    key: "parse",
    value: function parse() {
      if (!this.parsedPromise) {
        this.parsedPromise = this.responsePromise.then(this.parseResponse);
      }
      return this.parsedPromise;
    }
  }, {
    key: "then",
    value: function then(onfulfilled, onrejected) {
      return this.parse().then(onfulfilled, onrejected);
    }
  }, {
    key: "catch",
    value: function _catch(onrejected) {
      return this.parse().catch(onrejected);
    }
  }, {
    key: "finally",
    value: function _finally(onfinally) {
      return this.parse().finally(onfinally);
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(Promise));
var APIClient = /*#__PURE__*/function () {
  function APIClient(_ref2) {
    var baseURL = _ref2.baseURL,
      _ref2$maxRetries = _ref2.maxRetries,
      maxRetries = _ref2$maxRetries === void 0 ? 2 : _ref2$maxRetries,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === void 0 ? 600000 : _ref2$timeout,
      httpAgent = _ref2.httpAgent,
      overridenFetch = _ref2.fetch;
    _classCallCheck(this, APIClient);
    this.baseURL = baseURL;
    this.maxRetries = validatePositiveInteger('maxRetries', maxRetries);
    this.timeout = validatePositiveInteger('timeout', timeout);
    this.httpAgent = httpAgent;
    this.fetch = overridenFetch !== null && overridenFetch !== void 0 ? overridenFetch : fetch$1;
  }
  return _createClass(APIClient, [{
    key: "authHeaders",
    value: function authHeaders(opts) {
      return {};
    }
    /**
     * Override this to add your own default headers, for example:
     *
     *  {
     *    ...super.defaultHeaders(),
     *    Authorization: 'Bearer 123',
     *  }
     */
  }, {
    key: "defaultHeaders",
    value: function defaultHeaders(opts) {
      return _objectSpread2(_objectSpread2({
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': this.getUserAgent()
      }, getPlatformHeaders()), this.authHeaders(opts));
    }
    /**
     * Override this to add your own headers validation:
     */
  }, {
    key: "validateHeaders",
    value: function validateHeaders(headers, customHeaders) {}
  }, {
    key: "defaultIdempotencyKey",
    value: function defaultIdempotencyKey() {
      return "stainless-node-retry-".concat(uuid4());
    }
  }, {
    key: "get",
    value: function get(path, opts) {
      return this.methodRequest('get', path, opts);
    }
  }, {
    key: "post",
    value: function post(path, opts) {
      return this.methodRequest('post', path, opts);
    }
  }, {
    key: "patch",
    value: function patch(path, opts) {
      return this.methodRequest('patch', path, opts);
    }
  }, {
    key: "put",
    value: function put(path, opts) {
      return this.methodRequest('put', path, opts);
    }
  }, {
    key: "delete",
    value: function _delete(path, opts) {
      return this.methodRequest('delete', path, opts);
    }
  }, {
    key: "methodRequest",
    value: function methodRequest(method, path, opts) {
      return this.request(Promise.resolve(opts).then(/*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(opts) {
          var body;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(opts && isBlobLike(opts === null || opts === void 0 ? void 0 : opts.body))) {
                  _context3.next = 8;
                  break;
                }
                _context3.t1 = DataView;
                _context3.next = 4;
                return opts.body.arrayBuffer();
              case 4:
                _context3.t2 = _context3.sent;
                _context3.t0 = new _context3.t1(_context3.t2);
                _context3.next = 9;
                break;
              case 8:
                _context3.t0 = (opts === null || opts === void 0 ? void 0 : opts.body) instanceof DataView ? opts.body : (opts === null || opts === void 0 ? void 0 : opts.body) instanceof ArrayBuffer ? new DataView(opts.body) : opts && ArrayBuffer.isView(opts === null || opts === void 0 ? void 0 : opts.body) ? new DataView(opts.body.buffer) : opts === null || opts === void 0 ? void 0 : opts.body;
              case 9:
                body = _context3.t0;
                return _context3.abrupt("return", _objectSpread2(_objectSpread2({
                  method: method,
                  path: path
                }, opts), {}, {
                  body: body
                }));
              case 11:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }()));
    }
  }, {
    key: "getAPIList",
    value: function getAPIList(path, Page, opts) {
      return this.requestAPIList(Page, _objectSpread2({
        method: 'get',
        path: path
      }, opts));
    }
  }, {
    key: "calculateContentLength",
    value: function calculateContentLength(body) {
      if (typeof body === 'string') {
        if (typeof Buffer !== 'undefined') {
          return Buffer.byteLength(body, 'utf8').toString();
        }
        if (typeof TextEncoder !== 'undefined') {
          var encoder = new TextEncoder();
          var encoded = encoder.encode(body);
          return encoded.length.toString();
        }
      } else if (ArrayBuffer.isView(body)) {
        return body.byteLength.toString();
      }
      return null;
    }
  }, {
    key: "buildRequest",
    value: function buildRequest(options) {
      var _options$timeout, _ref5, _options$httpAgent, _httpAgent$options, _httpAgent$options$ti, _options$signal;
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$retryCount = _ref4.retryCount,
        retryCount = _ref4$retryCount === void 0 ? 0 : _ref4$retryCount;
      var method = options.method,
        path = options.path,
        query = options.query,
        _options$headers = options.headers,
        headers = _options$headers === void 0 ? {} : _options$headers;
      var body = ArrayBuffer.isView(options.body) || options.__binaryRequest && typeof options.body === 'string' ? options.body : isMultipartBody(options.body) ? options.body.body : options.body ? JSON.stringify(options.body, null, 2) : null;
      var contentLength = this.calculateContentLength(body);
      var url = this.buildURL(path, query);
      if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
      var timeout = (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : this.timeout;
      var httpAgent = (_ref5 = (_options$httpAgent = options.httpAgent) !== null && _options$httpAgent !== void 0 ? _options$httpAgent : this.httpAgent) !== null && _ref5 !== void 0 ? _ref5 : getDefaultAgent(url);
      var minAgentTimeout = timeout + 1000;
      if (typeof (httpAgent === null || httpAgent === void 0 || (_httpAgent$options = httpAgent.options) === null || _httpAgent$options === void 0 ? void 0 : _httpAgent$options.timeout) === 'number' && minAgentTimeout > ((_httpAgent$options$ti = httpAgent.options.timeout) !== null && _httpAgent$options$ti !== void 0 ? _httpAgent$options$ti : 0)) {
        // Allow any given request to bump our agent active socket timeout.
        // This may seem strange, but leaking active sockets should be rare and not particularly problematic,
        // and without mutating agent we would need to create more of them.
        // This tradeoff optimizes for performance.
        httpAgent.options.timeout = minAgentTimeout;
      }
      if (this.idempotencyHeader && method !== 'get') {
        if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
        headers[this.idempotencyHeader] = options.idempotencyKey;
      }
      var reqHeaders = this.buildHeaders({
        options: options,
        headers: headers,
        contentLength: contentLength,
        retryCount: retryCount
      });
      var req = _objectSpread2(_objectSpread2(_objectSpread2({
        method: method
      }, body && {
        body: body
      }), {}, {
        headers: reqHeaders
      }, httpAgent && {
        agent: httpAgent
      }), {}, {
        // @ts-ignore node-fetch uses a custom AbortSignal type that is
        // not compatible with standard web types
        signal: (_options$signal = options.signal) !== null && _options$signal !== void 0 ? _options$signal : null
      });
      return {
        req: req,
        url: url,
        timeout: timeout
      };
    }
  }, {
    key: "buildHeaders",
    value: function buildHeaders(_ref6) {
      var options = _ref6.options,
        headers = _ref6.headers,
        contentLength = _ref6.contentLength,
        retryCount = _ref6.retryCount;
      var reqHeaders = {};
      if (contentLength) {
        reqHeaders['content-length'] = contentLength;
      }
      var defaultHeaders = this.defaultHeaders(options);
      applyHeadersMut(reqHeaders, defaultHeaders);
      applyHeadersMut(reqHeaders, headers);
      // let builtin fetch set the Content-Type for multipart bodies
      if (isMultipartBody(options.body) && kind !== 'node') {
        delete reqHeaders['content-type'];
      }
      // Don't set the retry count header if it was already set or removed through default headers or by the
      // caller. We check `defaultHeaders` and `headers`, which can contain nulls, instead of `reqHeaders` to
      // account for the removal case.
      if (getHeader(defaultHeaders, 'x-stainless-retry-count') === undefined && getHeader(headers, 'x-stainless-retry-count') === undefined) {
        reqHeaders['x-stainless-retry-count'] = String(retryCount);
      }
      this.validateHeaders(reqHeaders, headers);
      return reqHeaders;
    }
    /**
     * Used as a callback for mutating the given `FinalRequestOptions` object.
     */
  }, {
    key: "prepareOptions",
    value: (function () {
      var _prepareOptions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(options) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function prepareOptions(_x4) {
        return _prepareOptions.apply(this, arguments);
      }
      return prepareOptions;
    }()
    /**
     * Used as a callback for mutating the given `RequestInit` object.
     *
     * This is useful for cases where you want to add certain headers based off of
     * the request properties, e.g. `method` or `url`.
     */
    )
  }, {
    key: "prepareRequest",
    value: (function () {
      var _prepareRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(request, _ref7) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _ref7.url, _ref7.options;
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function prepareRequest(_x5, _x6) {
        return _prepareRequest.apply(this, arguments);
      }
      return prepareRequest;
    }())
  }, {
    key: "parseHeaders",
    value: function parseHeaders(headers) {
      return !headers ? {} : Symbol.iterator in headers ? Object.fromEntries(Array.from(headers).map(function (header) {
        return _toConsumableArray(header);
      })) : _objectSpread2({}, headers);
    }
  }, {
    key: "makeStatusError",
    value: function makeStatusError(status, error, message, headers) {
      return APIError.generate(status, error, message, headers);
    }
  }, {
    key: "request",
    value: function request(options) {
      var remainingRetries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return new APIPromise(this.makeRequest(options, remainingRetries));
    }
  }, {
    key: "makeRequest",
    value: function () {
      var _makeRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(optionsInput, retriesRemaining) {
        var _options$maxRetries, _options$signal2;
        var options, maxRetries, _this$buildRequest, req, url, timeout, controller, response, _options$signal3, responseHeaders, _retryMessage, errText, errJSON, errMessage, retryMessage, err;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return optionsInput;
            case 2:
              options = _context6.sent;
              maxRetries = (_options$maxRetries = options.maxRetries) !== null && _options$maxRetries !== void 0 ? _options$maxRetries : this.maxRetries;
              if (retriesRemaining == null) {
                retriesRemaining = maxRetries;
              }
              _context6.next = 7;
              return this.prepareOptions(options);
            case 7:
              _this$buildRequest = this.buildRequest(options, {
                retryCount: maxRetries - retriesRemaining
              }), req = _this$buildRequest.req, url = _this$buildRequest.url, timeout = _this$buildRequest.timeout;
              _context6.next = 10;
              return this.prepareRequest(req, {
                url: url,
                options: options
              });
            case 10:
              debug('request', url, options, req.headers);
              if (!((_options$signal2 = options.signal) !== null && _options$signal2 !== void 0 && _options$signal2.aborted)) {
                _context6.next = 13;
                break;
              }
              throw new APIUserAbortError();
            case 13:
              controller = new AbortController();
              _context6.next = 16;
              return this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
            case 16:
              response = _context6.sent;
              if (!(response instanceof Error)) {
                _context6.next = 25;
                break;
              }
              if (!((_options$signal3 = options.signal) !== null && _options$signal3 !== void 0 && _options$signal3.aborted)) {
                _context6.next = 20;
                break;
              }
              throw new APIUserAbortError();
            case 20:
              if (!retriesRemaining) {
                _context6.next = 22;
                break;
              }
              return _context6.abrupt("return", this.retryRequest(options, retriesRemaining));
            case 22:
              if (!(response.name === 'AbortError')) {
                _context6.next = 24;
                break;
              }
              throw new APIConnectionTimeoutError();
            case 24:
              throw new APIConnectionError({
                cause: response
              });
            case 25:
              responseHeaders = createResponseHeaders(response.headers);
              if (response.ok) {
                _context6.next = 40;
                break;
              }
              if (!(retriesRemaining && this.shouldRetry(response))) {
                _context6.next = 31;
                break;
              }
              _retryMessage = "retrying, ".concat(retriesRemaining, " attempts remaining");
              debug("response (error; ".concat(_retryMessage, ")"), response.status, url, responseHeaders);
              return _context6.abrupt("return", this.retryRequest(options, retriesRemaining, responseHeaders));
            case 31:
              _context6.next = 33;
              return response.text().catch(function (e) {
                return castToError(e).message;
              });
            case 33:
              errText = _context6.sent;
              errJSON = safeJSON(errText);
              errMessage = errJSON ? undefined : errText;
              retryMessage = retriesRemaining ? "(error; no more retries left)" : "(error; not retryable)";
              debug("response (error; ".concat(retryMessage, ")"), response.status, url, responseHeaders, errMessage);
              err = this.makeStatusError(response.status, errJSON, errMessage, responseHeaders);
              throw err;
            case 40:
              return _context6.abrupt("return", {
                response: response,
                options: options,
                controller: controller
              });
            case 41:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function makeRequest(_x7, _x8) {
        return _makeRequest.apply(this, arguments);
      }
      return makeRequest;
    }()
  }, {
    key: "requestAPIList",
    value: function requestAPIList(Page, options) {
      var request = this.makeRequest(options, null);
      return new PagePromise(this, request, Page);
    }
  }, {
    key: "buildURL",
    value: function buildURL(path, query) {
      var url = isAbsoluteURL(path) ? new URL(path) : new URL(this.baseURL + (this.baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));
      var defaultQuery = this.defaultQuery();
      if (!isEmptyObj(defaultQuery)) {
        query = _objectSpread2(_objectSpread2({}, defaultQuery), query);
      }
      if (_typeof(query) === 'object' && query && !Array.isArray(query)) {
        url.search = this.stringifyQuery(query);
      }
      return url.toString();
    }
  }, {
    key: "stringifyQuery",
    value: function stringifyQuery(query) {
      return Object.entries(query).filter(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2);
          _ref9[0];
          var value = _ref9[1];
        return typeof value !== 'undefined';
      }).map(function (_ref10) {
        var _ref11 = _slicedToArray(_ref10, 2),
          key = _ref11[0],
          value = _ref11[1];
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
        }
        if (value === null) {
          return "".concat(encodeURIComponent(key), "=");
        }
        throw new OpenAIError("Cannot stringify type ".concat(_typeof(value), "; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case."));
      }).join('&');
    }
  }, {
    key: "fetchWithTimeout",
    value: function () {
      var _fetchWithTimeout = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(url, init, ms, controller) {
        var _ref12, signal, options, timeout;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _ref12 = init || {}, signal = _ref12.signal, options = _objectWithoutProperties(_ref12, _excluded$4);
              if (signal) signal.addEventListener('abort', function () {
                return controller.abort();
              });
              timeout = setTimeout(function () {
                return controller.abort();
              }, ms);
              return _context7.abrupt("return", this.getRequestClient()
              // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
              .fetch.call(undefined, url, _objectSpread2({
                signal: controller.signal
              }, options)).finally(function () {
                clearTimeout(timeout);
              }));
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function fetchWithTimeout(_x9, _x10, _x11, _x12) {
        return _fetchWithTimeout.apply(this, arguments);
      }
      return fetchWithTimeout;
    }()
  }, {
    key: "getRequestClient",
    value: function getRequestClient() {
      return {
        fetch: this.fetch
      };
    }
  }, {
    key: "shouldRetry",
    value: function shouldRetry(response) {
      // Note this is not a standard header.
      var shouldRetryHeader = response.headers.get('x-should-retry');
      // If the server explicitly says whether or not to retry, obey.
      if (shouldRetryHeader === 'true') return true;
      if (shouldRetryHeader === 'false') return false;
      // Retry on request timeouts.
      if (response.status === 408) return true;
      // Retry on lock timeouts.
      if (response.status === 409) return true;
      // Retry on rate limits.
      if (response.status === 429) return true;
      // Retry internal errors.
      if (response.status >= 500) return true;
      return false;
    }
  }, {
    key: "retryRequest",
    value: function () {
      var _retryRequest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(options, retriesRemaining, responseHeaders) {
        var timeoutMillis, retryAfterMillisHeader, timeoutMs, retryAfterHeader, timeoutSeconds, _options$maxRetries2, maxRetries;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
              retryAfterMillisHeader = responseHeaders === null || responseHeaders === void 0 ? void 0 : responseHeaders['retry-after-ms'];
              if (retryAfterMillisHeader) {
                timeoutMs = parseFloat(retryAfterMillisHeader);
                if (!Number.isNaN(timeoutMs)) {
                  timeoutMillis = timeoutMs;
                }
              }
              // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
              retryAfterHeader = responseHeaders === null || responseHeaders === void 0 ? void 0 : responseHeaders['retry-after'];
              if (retryAfterHeader && !timeoutMillis) {
                timeoutSeconds = parseFloat(retryAfterHeader);
                if (!Number.isNaN(timeoutSeconds)) {
                  timeoutMillis = timeoutSeconds * 1000;
                } else {
                  timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
                }
              }
              // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
              // just do what it says, but otherwise calculate a default
              if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
                maxRetries = (_options$maxRetries2 = options.maxRetries) !== null && _options$maxRetries2 !== void 0 ? _options$maxRetries2 : this.maxRetries;
                timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
              }
              _context8.next = 7;
              return sleep(timeoutMillis);
            case 7:
              return _context8.abrupt("return", this.makeRequest(options, retriesRemaining - 1));
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function retryRequest(_x13, _x14, _x15) {
        return _retryRequest.apply(this, arguments);
      }
      return retryRequest;
    }()
  }, {
    key: "calculateDefaultRetryTimeoutMillis",
    value: function calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries) {
      var initialRetryDelay = 0.5;
      var maxRetryDelay = 8.0;
      var numRetries = maxRetries - retriesRemaining;
      // Apply exponential backoff, but not more than the max.
      var sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);
      // Apply some jitter, take up to at most 25 percent of the retry time.
      var jitter = 1 - Math.random() * 0.25;
      return sleepSeconds * jitter * 1000;
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return "".concat(this.constructor.name, "/JS ").concat(VERSION);
    }
  }]);
}();
var AbstractPage = /*#__PURE__*/function (_ref13) {
  function AbstractPage(client, response, body, options) {
    _classCallCheck(this, AbstractPage);
    _AbstractPage_client.set(this, void 0);
    __classPrivateFieldSet$3(this, _AbstractPage_client, client, "f");
    this.options = options;
    this.response = response;
    this.body = body;
  }
  return _createClass(AbstractPage, [{
    key: "hasNextPage",
    value: function hasNextPage() {
      var items = this.getPaginatedItems();
      if (!items.length) return false;
      return this.nextPageInfo() != null;
    }
  }, {
    key: "getNextPage",
    value: function () {
      var _getNextPage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var nextInfo, nextOptions, params, _iterator3, _step3, _step3$value, key, value;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              nextInfo = this.nextPageInfo();
              if (nextInfo) {
                _context9.next = 3;
                break;
              }
              throw new OpenAIError('No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.');
            case 3:
              nextOptions = _objectSpread2({}, this.options);
              if ('params' in nextInfo && _typeof(nextOptions.query) === 'object') {
                nextOptions.query = _objectSpread2(_objectSpread2({}, nextOptions.query), nextInfo.params);
              } else if ('url' in nextInfo) {
                params = [].concat(_toConsumableArray(Object.entries(nextOptions.query || {})), _toConsumableArray(nextInfo.url.searchParams.entries()));
                _iterator3 = _createForOfIteratorHelper(params);
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    _step3$value = _slicedToArray(_step3.value, 2), key = _step3$value[0], value = _step3$value[1];
                    nextInfo.url.searchParams.set(key, value);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
                nextOptions.query = undefined;
                nextOptions.path = nextInfo.url.toString();
              }
              _context9.next = 7;
              return __classPrivateFieldGet$4(this, _AbstractPage_client, "f").requestAPIList(this.constructor, nextOptions);
            case 7:
              return _context9.abrupt("return", _context9.sent);
            case 8:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getNextPage() {
        return _getNextPage.apply(this, arguments);
      }
      return getNextPage;
    }()
  }, {
    key: "iterPages",
    value: function iterPages() {
      var _this = this;
      return _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var page;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              // eslint-disable-next-line @typescript-eslint/no-this-alias
              page = _this;
              _context10.next = 3;
              return page;
            case 3:
              if (!page.hasNextPage()) {
                _context10.next = 11;
                break;
              }
              _context10.next = 6;
              return _awaitAsyncGenerator(page.getNextPage());
            case 6:
              page = _context10.sent;
              _context10.next = 9;
              return page;
            case 9:
              _context10.next = 3;
              break;
            case 11:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }))();
    }
  }, {
    key: _ref13,
    value: function value() {
      var _this2 = this;
      return _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, page, _iterator4, _step4, item;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context11.prev = 2;
              _iterator = _asyncIterator(_this2.iterPages());
            case 4:
              _context11.next = 6;
              return _awaitAsyncGenerator(_iterator.next());
            case 6:
              if (!(_iteratorAbruptCompletion = !(_step = _context11.sent).done)) {
                _context11.next = 28;
                break;
              }
              page = _step.value;
              _iterator4 = _createForOfIteratorHelper(page.getPaginatedItems());
              _context11.prev = 9;
              _iterator4.s();
            case 11:
              if ((_step4 = _iterator4.n()).done) {
                _context11.next = 17;
                break;
              }
              item = _step4.value;
              _context11.next = 15;
              return item;
            case 15:
              _context11.next = 11;
              break;
            case 17:
              _context11.next = 22;
              break;
            case 19:
              _context11.prev = 19;
              _context11.t0 = _context11["catch"](9);
              _iterator4.e(_context11.t0);
            case 22:
              _context11.prev = 22;
              _iterator4.f();
              return _context11.finish(22);
            case 25:
              _iteratorAbruptCompletion = false;
              _context11.next = 4;
              break;
            case 28:
              _context11.next = 34;
              break;
            case 30:
              _context11.prev = 30;
              _context11.t1 = _context11["catch"](2);
              _didIteratorError = true;
              _iteratorError = _context11.t1;
            case 34:
              _context11.prev = 34;
              _context11.prev = 35;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context11.next = 39;
                break;
              }
              _context11.next = 39;
              return _awaitAsyncGenerator(_iterator.return());
            case 39:
              _context11.prev = 39;
              if (!_didIteratorError) {
                _context11.next = 42;
                break;
              }
              throw _iteratorError;
            case 42:
              return _context11.finish(39);
            case 43:
              return _context11.finish(34);
            case 44:
            case "end":
              return _context11.stop();
          }
        }, _callee11, null, [[2, 30, 34, 44], [9, 19, 22, 25], [35,, 39, 43]]);
      }))();
    }
  }]);
}((_AbstractPage_client = new WeakMap(), Symbol.asyncIterator));
/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
var PagePromise = /*#__PURE__*/function (_APIPromise) {
  function PagePromise(client, request, Page) {
    _classCallCheck(this, PagePromise);
    return _callSuper(this, PagePromise, [request, (/*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(props) {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.t0 = Page;
              _context12.t1 = client;
              _context12.t2 = props.response;
              _context12.next = 5;
              return defaultParseResponse(props);
            case 5:
              _context12.t3 = _context12.sent;
              _context12.t4 = props.options;
              return _context12.abrupt("return", new _context12.t0(_context12.t1, _context12.t2, _context12.t3, _context12.t4));
            case 8:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      return function (_x16) {
        return _ref14.apply(this, arguments);
      };
    }())]);
  }
  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  _inherits(PagePromise, _APIPromise);
  return _createClass(PagePromise, [{
    key: Symbol.asyncIterator,
    value: function value() {
      var _this3 = this;
      return _wrapAsyncGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var page, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return _awaitAsyncGenerator(_this3);
            case 2:
              page = _context13.sent;
              _iteratorAbruptCompletion2 = false;
              _didIteratorError2 = false;
              _context13.prev = 5;
              _iterator2 = _asyncIterator(page);
            case 7:
              _context13.next = 9;
              return _awaitAsyncGenerator(_iterator2.next());
            case 9:
              if (!(_iteratorAbruptCompletion2 = !(_step2 = _context13.sent).done)) {
                _context13.next = 16;
                break;
              }
              item = _step2.value;
              _context13.next = 13;
              return item;
            case 13:
              _iteratorAbruptCompletion2 = false;
              _context13.next = 7;
              break;
            case 16:
              _context13.next = 22;
              break;
            case 18:
              _context13.prev = 18;
              _context13.t0 = _context13["catch"](5);
              _didIteratorError2 = true;
              _iteratorError2 = _context13.t0;
            case 22:
              _context13.prev = 22;
              _context13.prev = 23;
              if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                _context13.next = 27;
                break;
              }
              _context13.next = 27;
              return _awaitAsyncGenerator(_iterator2.return());
            case 27:
              _context13.prev = 27;
              if (!_didIteratorError2) {
                _context13.next = 30;
                break;
              }
              throw _iteratorError2;
            case 30:
              return _context13.finish(27);
            case 31:
              return _context13.finish(22);
            case 32:
            case "end":
              return _context13.stop();
          }
        }, _callee13, null, [[5, 18, 22, 32], [23,, 27, 31]]);
      }))();
    }
  }]);
}(APIPromise);
var createResponseHeaders = function createResponseHeaders(headers) {
  return new Proxy(Object.fromEntries(
  // @ts-ignore
  headers.entries()), {
    get: function get(target, name) {
      var key = name.toString();
      return target[key.toLowerCase()] || target[key];
    }
  });
};
// This is required so that we can determine if a given object matches the RequestOptions
// type at runtime. While this requires duplication, it is enforced by the TypeScript
// compiler such that any missing / extraneous keys will cause an error.
var requestOptionsKeys = {
  method: true,
  path: true,
  query: true,
  body: true,
  headers: true,
  maxRetries: true,
  stream: true,
  timeout: true,
  httpAgent: true,
  signal: true,
  idempotencyKey: true,
  __binaryRequest: true,
  __binaryResponse: true,
  __streamClass: true
};
var isRequestOptions = function isRequestOptions(obj) {
  return _typeof(obj) === 'object' && obj !== null && !isEmptyObj(obj) && Object.keys(obj).every(function (k) {
    return hasOwn(requestOptionsKeys, k);
  });
};
var getPlatformProperties = function getPlatformProperties() {
  if (typeof Deno !== 'undefined' && Deno.build != null) {
    var _Deno$version$deno, _Deno$version;
    return {
      'X-Stainless-Lang': 'js',
      'X-Stainless-Package-Version': VERSION,
      'X-Stainless-OS': normalizePlatform(Deno.build.os),
      'X-Stainless-Arch': normalizeArch(Deno.build.arch),
      'X-Stainless-Runtime': 'deno',
      'X-Stainless-Runtime-Version': typeof Deno.version === 'string' ? Deno.version : (_Deno$version$deno = (_Deno$version = Deno.version) === null || _Deno$version === void 0 ? void 0 : _Deno$version.deno) !== null && _Deno$version$deno !== void 0 ? _Deno$version$deno : 'unknown'
    };
  }
  if (typeof EdgeRuntime !== 'undefined') {
    return {
      'X-Stainless-Lang': 'js',
      'X-Stainless-Package-Version': VERSION,
      'X-Stainless-OS': 'Unknown',
      'X-Stainless-Arch': "other:".concat(EdgeRuntime),
      'X-Stainless-Runtime': 'edge',
      'X-Stainless-Runtime-Version': process.version
    };
  }
  // Check if Node.js
  if (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') {
    return {
      'X-Stainless-Lang': 'js',
      'X-Stainless-Package-Version': VERSION,
      'X-Stainless-OS': normalizePlatform(process.platform),
      'X-Stainless-Arch': normalizeArch(process.arch),
      'X-Stainless-Runtime': 'node',
      'X-Stainless-Runtime-Version': process.version
    };
  }
  var browserInfo = getBrowserInfo();
  if (browserInfo) {
    return {
      'X-Stainless-Lang': 'js',
      'X-Stainless-Package-Version': VERSION,
      'X-Stainless-OS': 'Unknown',
      'X-Stainless-Arch': 'unknown',
      'X-Stainless-Runtime': "browser:".concat(browserInfo.browser),
      'X-Stainless-Runtime-Version': browserInfo.version
    };
  }
  // TODO add support for Cloudflare workers, etc.
  return {
    'X-Stainless-Lang': 'js',
    'X-Stainless-Package-Version': VERSION,
    'X-Stainless-OS': 'Unknown',
    'X-Stainless-Arch': 'unknown',
    'X-Stainless-Runtime': 'unknown',
    'X-Stainless-Runtime-Version': 'unknown'
  };
};
// Note: modified from https://github.com/JS-DevTools/host-environment/blob/b1ab79ecde37db5d6e163c050e54fe7d287d7c92/src/isomorphic.browser.ts
function getBrowserInfo() {
  if (typeof navigator === 'undefined' || !navigator) {
    return null;
  }
  // NOTE: The order matters here!
  var browserPatterns = [{
    key: 'edge',
    pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: 'ie',
    pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: 'ie',
    pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: 'chrome',
    pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: 'firefox',
    pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/
  }, {
    key: 'safari',
    pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/
  }];
  // Find the FIRST matching browser
  for (var _i = 0, _browserPatterns = browserPatterns; _i < _browserPatterns.length; _i++) {
    var _browserPatterns$_i = _browserPatterns[_i],
      key = _browserPatterns$_i.key,
      pattern = _browserPatterns$_i.pattern;
    var match = pattern.exec(navigator.userAgent);
    if (match) {
      var major = match[1] || 0;
      var minor = match[2] || 0;
      var patch = match[3] || 0;
      return {
        browser: key,
        version: "".concat(major, ".").concat(minor, ".").concat(patch)
      };
    }
  }
  return null;
}
var normalizeArch = function normalizeArch(arch) {
  // Node docs:
  // - https://nodejs.org/api/process.html#processarch
  // Deno docs:
  // - https://doc.deno.land/deno/stable/~/Deno.build
  if (arch === 'x32') return 'x32';
  if (arch === 'x86_64' || arch === 'x64') return 'x64';
  if (arch === 'arm') return 'arm';
  if (arch === 'aarch64' || arch === 'arm64') return 'arm64';
  if (arch) return "other:".concat(arch);
  return 'unknown';
};
var normalizePlatform = function normalizePlatform(platform) {
  // Node platforms:
  // - https://nodejs.org/api/process.html#processplatform
  // Deno platforms:
  // - https://doc.deno.land/deno/stable/~/Deno.build
  // - https://github.com/denoland/deno/issues/14799
  platform = platform.toLowerCase();
  // NOTE: this iOS check is untested and may not work
  // Node does not work natively on IOS, there is a fork at
  // https://github.com/nodejs-mobile/nodejs-mobile
  // however it is unknown at the time of writing how to detect if it is running
  if (platform.includes('ios')) return 'iOS';
  if (platform === 'android') return 'Android';
  if (platform === 'darwin') return 'MacOS';
  if (platform === 'win32') return 'Windows';
  if (platform === 'freebsd') return 'FreeBSD';
  if (platform === 'openbsd') return 'OpenBSD';
  if (platform === 'linux') return 'Linux';
  if (platform) return "Other:".concat(platform);
  return 'Unknown';
};
var _platformHeaders;
var getPlatformHeaders = function getPlatformHeaders() {
  var _platformHeaders2;
  return (_platformHeaders2 = _platformHeaders) !== null && _platformHeaders2 !== void 0 ? _platformHeaders2 : _platformHeaders = getPlatformProperties();
};
var safeJSON = function safeJSON(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    return undefined;
  }
};
// https://stackoverflow.com/a/19709846
var startsWithSchemeRegexp = new RegExp('^(?:[a-z]+:)?//', 'i');
var isAbsoluteURL = function isAbsoluteURL(url) {
  return startsWithSchemeRegexp.test(url);
};
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var validatePositiveInteger = function validatePositiveInteger(name, n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    throw new OpenAIError("".concat(name, " must be an integer"));
  }
  if (n < 0) {
    throw new OpenAIError("".concat(name, " must be a positive integer"));
  }
  return n;
};
var castToError = function castToError(err) {
  if (err instanceof Error) return err;
  if (_typeof(err) === 'object' && err !== null) {
    try {
      return new Error(JSON.stringify(err));
    } catch (_unused) {}
  }
  return new Error(err);
};
/**
 * Read an environment variable.
 *
 * Trims beginning and trailing whitespace.
 *
 * Will return undefined if the environment variable doesn't exist or cannot be accessed.
 */
var readEnv = function readEnv(env) {
  if (typeof process !== 'undefined') {
    var _process$env$env$trim, _process$env;
    return (_process$env$env$trim = (_process$env = process.env) === null || _process$env === void 0 || (_process$env = _process$env[env]) === null || _process$env === void 0 ? void 0 : _process$env.trim()) !== null && _process$env$env$trim !== void 0 ? _process$env$env$trim : undefined;
  }
  if (typeof Deno !== 'undefined') {
    var _Deno$env, _Deno$env$get;
    return (_Deno$env = Deno.env) === null || _Deno$env === void 0 || (_Deno$env$get = _Deno$env.get) === null || _Deno$env$get === void 0 || (_Deno$env$get = _Deno$env$get.call(_Deno$env, env)) === null || _Deno$env$get === void 0 ? void 0 : _Deno$env$get.trim();
  }
  return undefined;
};
// https://stackoverflow.com/a/34491287
function isEmptyObj(obj) {
  if (!obj) return true;
  for (var _k in obj) return false;
  return true;
}
// https://eslint.org/docs/latest/rules/no-prototype-builtins
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * Copies headers from "newHeaders" onto "targetHeaders",
 * using lower-case for all properties,
 * ignoring any keys with undefined values,
 * and deleting any keys with null values.
 */
function applyHeadersMut(targetHeaders, newHeaders) {
  for (var k in newHeaders) {
    if (!hasOwn(newHeaders, k)) continue;
    var lowerKey = k.toLowerCase();
    if (!lowerKey) continue;
    var val = newHeaders[k];
    if (val === null) {
      delete targetHeaders[lowerKey];
    } else if (val !== undefined) {
      targetHeaders[lowerKey] = val;
    }
  }
}
function debug(action) {
  var _process;
  if (typeof process !== 'undefined' && ((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process['DEBUG']) === 'true') {
    var _console;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    (_console = console).log.apply(_console, ["OpenAI:DEBUG:".concat(action)].concat(args));
  }
}
/**
 * https://stackoverflow.com/a/2117523
 */
var uuid4 = function uuid4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};
var isRunningInBrowser = function isRunningInBrowser() {
  return (
    // @ts-ignore
    typeof window !== 'undefined' &&
    // @ts-ignore
    typeof window.document !== 'undefined' &&
    // @ts-ignore
    typeof navigator !== 'undefined'
  );
};
var isHeadersProtocol = function isHeadersProtocol(headers) {
  return typeof (headers === null || headers === void 0 ? void 0 : headers.get) === 'function';
};
var getHeader = function getHeader(headers, header) {
  var lowerCasedHeader = header.toLowerCase();
  if (isHeadersProtocol(headers)) {
    var _header$;
    // to deal with the case where the header looks like Stainless-Event-Id
    var intercapsHeader = ((_header$ = header[0]) === null || _header$ === void 0 ? void 0 : _header$.toUpperCase()) + header.substring(1).replace(/([^\w])(\w)/g, function (_m, g1, g2) {
      return g1 + g2.toUpperCase();
    });
    for (var _i2 = 0, _arr = [header, lowerCasedHeader, header.toUpperCase(), intercapsHeader]; _i2 < _arr.length; _i2++) {
      var key = _arr[_i2];
      var value = headers.get(key);
      if (value) {
        return value;
      }
    }
  }
  for (var _i3 = 0, _Object$entries = Object.entries(headers); _i3 < _Object$entries.length; _i3++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
      _key2 = _Object$entries$_i[0],
      _value = _Object$entries$_i[1];
    if (_key2.toLowerCase() === lowerCasedHeader) {
      if (Array.isArray(_value)) {
        if (_value.length <= 1) return _value[0];
        console.warn("Received ".concat(_value.length, " entries for the ").concat(header, " header, using the first entry."));
        return _value[0];
      }
      return _value;
    }
  }
  return undefined;
};
function isObj(obj) {
  return obj != null && _typeof(obj) === 'object' && !Array.isArray(obj);
}

/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
var Page = /*#__PURE__*/function (_AbstractPage) {
  function Page(client, response, body, options) {
    var _this;
    _classCallCheck(this, Page);
    _this = _callSuper(this, Page, [client, response, body, options]);
    _this.data = body.data || [];
    _this.object = body.object;
    return _this;
  }
  _inherits(Page, _AbstractPage);
  return _createClass(Page, [{
    key: "getPaginatedItems",
    value: function getPaginatedItems() {
      var _this$data;
      return (_this$data = this.data) !== null && _this$data !== void 0 ? _this$data : [];
    }
    // @deprecated Please use `nextPageInfo()` instead
    /**
     * This page represents a response that isn't actually paginated at the API level
     * so there will never be any next page params.
     */
  }, {
    key: "nextPageParams",
    value: function nextPageParams() {
      return null;
    }
  }, {
    key: "nextPageInfo",
    value: function nextPageInfo() {
      return null;
    }
  }]);
}(AbstractPage);
var CursorPage = /*#__PURE__*/function (_AbstractPage2) {
  function CursorPage(client, response, body, options) {
    var _this2;
    _classCallCheck(this, CursorPage);
    _this2 = _callSuper(this, CursorPage, [client, response, body, options]);
    _this2.data = body.data || [];
    return _this2;
  }
  _inherits(CursorPage, _AbstractPage2);
  return _createClass(CursorPage, [{
    key: "getPaginatedItems",
    value: function getPaginatedItems() {
      var _this$data2;
      return (_this$data2 = this.data) !== null && _this$data2 !== void 0 ? _this$data2 : [];
    }
    // @deprecated Please use `nextPageInfo()` instead
  }, {
    key: "nextPageParams",
    value: function nextPageParams() {
      var info = this.nextPageInfo();
      if (!info) return null;
      if ('params' in info) return info.params;
      var params = Object.fromEntries(info.url.searchParams);
      if (!Object.keys(params).length) return null;
      return params;
    }
  }, {
    key: "nextPageInfo",
    value: function nextPageInfo() {
      var _data;
      var data = this.getPaginatedItems();
      if (!data.length) {
        return null;
      }
      var id = (_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.id;
      if (!id) {
        return null;
      }
      return {
        params: {
          after: id
        }
      };
    }
  }]);
}(AbstractPage);

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var APIResource = /*#__PURE__*/_createClass(function APIResource(client) {
  _classCallCheck(this, APIResource);
  this._client = client;
});

var Completions$2 = /*#__PURE__*/function (_APIResource) {
  function Completions() {
    _classCallCheck(this, Completions);
    return _callSuper(this, Completions, arguments);
  }
  _inherits(Completions, _APIResource);
  return _createClass(Completions, [{
    key: "create",
    value: function create(body, options) {
      var _body$stream;
      return this._client.post('/chat/completions', _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        stream: (_body$stream = body.stream) !== null && _body$stream !== void 0 ? _body$stream : false
      }));
    }
  }]);
}(APIResource);

var Chat$1 = /*#__PURE__*/function (_APIResource) {
  function Chat() {
    var _this;
    _classCallCheck(this, Chat);
    _this = _callSuper(this, Chat, arguments);
    _this.completions = new Completions$2(_this._client);
    return _this;
  }
  _inherits(Chat, _APIResource);
  return _createClass(Chat);
}(APIResource);
Chat$1.Completions = Completions$2;

var Speech = /*#__PURE__*/function (_APIResource) {
  function Speech() {
    _classCallCheck(this, Speech);
    return _callSuper(this, Speech, arguments);
  }
  _inherits(Speech, _APIResource);
  return _createClass(Speech, [{
    key: "create",
    value:
    /**
     * Generates audio from the input text.
     */
    function create(body, options) {
      return this._client.post('/audio/speech', _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        __binaryResponse: true
      }));
    }
  }]);
}(APIResource);

var Transcriptions = /*#__PURE__*/function (_APIResource) {
  function Transcriptions() {
    _classCallCheck(this, Transcriptions);
    return _callSuper(this, Transcriptions, arguments);
  }
  _inherits(Transcriptions, _APIResource);
  return _createClass(Transcriptions, [{
    key: "create",
    value: function create(body, options) {
      return this._client.post('/audio/transcriptions', multipartFormRequestOptions(_objectSpread2({
        body: body
      }, options)));
    }
  }]);
}(APIResource);

var Translations = /*#__PURE__*/function (_APIResource) {
  function Translations() {
    _classCallCheck(this, Translations);
    return _callSuper(this, Translations, arguments);
  }
  _inherits(Translations, _APIResource);
  return _createClass(Translations, [{
    key: "create",
    value: function create(body, options) {
      return this._client.post('/audio/translations', multipartFormRequestOptions(_objectSpread2({
        body: body
      }, options)));
    }
  }]);
}(APIResource);

var Audio = /*#__PURE__*/function (_APIResource) {
  function Audio() {
    var _this;
    _classCallCheck(this, Audio);
    _this = _callSuper(this, Audio, arguments);
    _this.transcriptions = new Transcriptions(_this._client);
    _this.translations = new Translations(_this._client);
    _this.speech = new Speech(_this._client);
    return _this;
  }
  _inherits(Audio, _APIResource);
  return _createClass(Audio);
}(APIResource);
Audio.Transcriptions = Transcriptions;
Audio.Translations = Translations;
Audio.Speech = Speech;

var Batches = /*#__PURE__*/function (_APIResource) {
  function Batches() {
    _classCallCheck(this, Batches);
    return _callSuper(this, Batches, arguments);
  }
  _inherits(Batches, _APIResource);
  return _createClass(Batches, [{
    key: "create",
    value:
    /**
     * Creates and executes a batch from an uploaded file of requests
     */
    function create(body, options) {
      return this._client.post('/batches', _objectSpread2({
        body: body
      }, options));
    }
    /**
     * Retrieves a batch.
     */
  }, {
    key: "retrieve",
    value: function retrieve(batchId, options) {
      return this._client.get("/batches/".concat(batchId), options);
    }
  }, {
    key: "list",
    value: function list() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;
      if (isRequestOptions(query)) {
        return this.list({}, query);
      }
      return this._client.getAPIList('/batches', BatchesPage, _objectSpread2({
        query: query
      }, options));
    }
    /**
     * Cancels an in-progress batch. The batch will be in status `cancelling` for up to
     * 10 minutes, before changing to `cancelled`, where it will have partial results
     * (if any) available in the output file.
     */
  }, {
    key: "cancel",
    value: function cancel(batchId, options) {
      return this._client.post("/batches/".concat(batchId, "/cancel"), options);
    }
  }]);
}(APIResource);
var BatchesPage = /*#__PURE__*/function (_CursorPage) {
  function BatchesPage() {
    _classCallCheck(this, BatchesPage);
    return _callSuper(this, BatchesPage, arguments);
  }
  _inherits(BatchesPage, _CursorPage);
  return _createClass(BatchesPage);
}(CursorPage);
Batches.BatchesPage = BatchesPage;

var Assistants = /*#__PURE__*/function (_APIResource) {
  function Assistants() {
    _classCallCheck(this, Assistants);
    return _callSuper(this, Assistants, arguments);
  }
  _inherits(Assistants, _APIResource);
  return _createClass(Assistants, [{
    key: "create",
    value:
    /**
     * Create an assistant with a model and instructions.
     */
    function create(body, options) {
      return this._client.post('/assistants', _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Retrieves an assistant.
     */
  }, {
    key: "retrieve",
    value: function retrieve(assistantId, options) {
      return this._client.get("/assistants/".concat(assistantId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Modifies an assistant.
     */
  }, {
    key: "update",
    value: function update(assistantId, body, options) {
      return this._client.post("/assistants/".concat(assistantId), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }, {
    key: "list",
    value: function list() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;
      if (isRequestOptions(query)) {
        return this.list({}, query);
      }
      return this._client.getAPIList('/assistants', AssistantsPage, _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Delete an assistant.
     */
  }, {
    key: "del",
    value: function del(assistantId, options) {
      return this._client.delete("/assistants/".concat(assistantId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }]);
}(APIResource);
var AssistantsPage = /*#__PURE__*/function (_CursorPage) {
  function AssistantsPage() {
    _classCallCheck(this, AssistantsPage);
    return _callSuper(this, AssistantsPage, arguments);
  }
  _inherits(AssistantsPage, _CursorPage);
  return _createClass(AssistantsPage);
}(CursorPage);
Assistants.AssistantsPage = AssistantsPage;

function isRunnableFunctionWithParse(fn) {
  return typeof fn.parse === 'function';
}

var isAssistantMessage = function isAssistantMessage(message) {
  return (message === null || message === void 0 ? void 0 : message.role) === 'assistant';
};
var isFunctionMessage = function isFunctionMessage(message) {
  return (message === null || message === void 0 ? void 0 : message.role) === 'function';
};
var isToolMessage = function isToolMessage(message) {
  return (message === null || message === void 0 ? void 0 : message.role) === 'tool';
};

var __classPrivateFieldSet$2 = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet$3 = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EventStream_instances, _EventStream_connectedPromise, _EventStream_resolveConnectedPromise, _EventStream_rejectConnectedPromise, _EventStream_endPromise, _EventStream_resolveEndPromise, _EventStream_rejectEndPromise, _EventStream_listeners, _EventStream_ended, _EventStream_errored, _EventStream_aborted, _EventStream_catchingPromiseCreated, _EventStream_handleError;
var EventStream = /*#__PURE__*/function () {
  function EventStream() {
    var _this = this;
    _classCallCheck(this, EventStream);
    _EventStream_instances.add(this);
    this.controller = new AbortController();
    _EventStream_connectedPromise.set(this, void 0);
    _EventStream_resolveConnectedPromise.set(this, function () {});
    _EventStream_rejectConnectedPromise.set(this, function () {});
    _EventStream_endPromise.set(this, void 0);
    _EventStream_resolveEndPromise.set(this, function () {});
    _EventStream_rejectEndPromise.set(this, function () {});
    _EventStream_listeners.set(this, {});
    _EventStream_ended.set(this, false);
    _EventStream_errored.set(this, false);
    _EventStream_aborted.set(this, false);
    _EventStream_catchingPromiseCreated.set(this, false);
    __classPrivateFieldSet$2(this, _EventStream_connectedPromise, new Promise(function (resolve, reject) {
      __classPrivateFieldSet$2(_this, _EventStream_resolveConnectedPromise, resolve, "f");
      __classPrivateFieldSet$2(_this, _EventStream_rejectConnectedPromise, reject, "f");
    }), "f");
    __classPrivateFieldSet$2(this, _EventStream_endPromise, new Promise(function (resolve, reject) {
      __classPrivateFieldSet$2(_this, _EventStream_resolveEndPromise, resolve, "f");
      __classPrivateFieldSet$2(_this, _EventStream_rejectEndPromise, reject, "f");
    }), "f");
    // Don't let these promises cause unhandled rejection errors.
    // we will manually cause an unhandled rejection error later
    // if the user hasn't registered any error listener or called
    // any promise-returning method.
    __classPrivateFieldGet$3(this, _EventStream_connectedPromise, "f").catch(function () {});
    __classPrivateFieldGet$3(this, _EventStream_endPromise, "f").catch(function () {});
  }
  return _createClass(EventStream, [{
    key: "_run",
    value: function _run(executor) {
      var _this2 = this;
      // Unfortunately if we call `executor()` immediately we get runtime errors about
      // references to `this` before the `super()` constructor call returns.
      setTimeout(function () {
        executor().then(function () {
          _this2._emitFinal();
          _this2._emit('end');
        }, __classPrivateFieldGet$3(_this2, _EventStream_instances, "m", _EventStream_handleError).bind(_this2));
      }, 0);
    }
  }, {
    key: "_connected",
    value: function _connected() {
      if (this.ended) return;
      __classPrivateFieldGet$3(this, _EventStream_resolveConnectedPromise, "f").call(this);
      this._emit('connect');
    }
  }, {
    key: "ended",
    get: function get() {
      return __classPrivateFieldGet$3(this, _EventStream_ended, "f");
    }
  }, {
    key: "errored",
    get: function get() {
      return __classPrivateFieldGet$3(this, _EventStream_errored, "f");
    }
  }, {
    key: "aborted",
    get: function get() {
      return __classPrivateFieldGet$3(this, _EventStream_aborted, "f");
    }
  }, {
    key: "abort",
    value: function abort() {
      this.controller.abort();
    }
    /**
     * Adds the listener function to the end of the listeners array for the event.
     * No checks are made to see if the listener has already been added. Multiple calls passing
     * the same combination of event and listener will result in the listener being added, and
     * called, multiple times.
     * @returns this ChatCompletionStream, so that calls can be chained
     */
  }, {
    key: "on",
    value: function on(event, listener) {
      var listeners = __classPrivateFieldGet$3(this, _EventStream_listeners, "f")[event] || (__classPrivateFieldGet$3(this, _EventStream_listeners, "f")[event] = []);
      listeners.push({
        listener: listener
      });
      return this;
    }
    /**
     * Removes the specified listener from the listener array for the event.
     * off() will remove, at most, one instance of a listener from the listener array. If any single
     * listener has been added multiple times to the listener array for the specified event, then
     * off() must be called multiple times to remove each instance.
     * @returns this ChatCompletionStream, so that calls can be chained
     */
  }, {
    key: "off",
    value: function off(event, listener) {
      var listeners = __classPrivateFieldGet$3(this, _EventStream_listeners, "f")[event];
      if (!listeners) return this;
      var index = listeners.findIndex(function (l) {
        return l.listener === listener;
      });
      if (index >= 0) listeners.splice(index, 1);
      return this;
    }
    /**
     * Adds a one-time listener function for the event. The next time the event is triggered,
     * this listener is removed and then invoked.
     * @returns this ChatCompletionStream, so that calls can be chained
     */
  }, {
    key: "once",
    value: function once(event, listener) {
      var listeners = __classPrivateFieldGet$3(this, _EventStream_listeners, "f")[event] || (__classPrivateFieldGet$3(this, _EventStream_listeners, "f")[event] = []);
      listeners.push({
        listener: listener,
        once: true
      });
      return this;
    }
    /**
     * This is similar to `.once()`, but returns a Promise that resolves the next time
     * the event is triggered, instead of calling a listener callback.
     * @returns a Promise that resolves the next time given event is triggered,
     * or rejects if an error is emitted.  (If you request the 'error' event,
     * returns a promise that resolves with the error).
     *
     * Example:
     *
     *   const message = await stream.emitted('message') // rejects if the stream errors
     */
  }, {
    key: "emitted",
    value: function emitted(event) {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        __classPrivateFieldSet$2(_this3, _EventStream_catchingPromiseCreated, true, "f");
        if (event !== 'error') _this3.once('error', reject);
        _this3.once(event, resolve);
      });
    }
  }, {
    key: "done",
    value: function () {
      var _done = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              __classPrivateFieldSet$2(this, _EventStream_catchingPromiseCreated, true, "f");
              _context.next = 3;
              return __classPrivateFieldGet$3(this, _EventStream_endPromise, "f");
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function done() {
        return _done.apply(this, arguments);
      }
      return done;
    }()
  }, {
    key: "_emit",
    value: function _emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      // make sure we don't emit any events after end
      if (__classPrivateFieldGet$3(this, _EventStream_ended, "f")) {
        return;
      }
      if (event === 'end') {
        __classPrivateFieldSet$2(this, _EventStream_ended, true, "f");
        __classPrivateFieldGet$3(this, _EventStream_resolveEndPromise, "f").call(this);
      }
      var listeners = __classPrivateFieldGet$3(this, _EventStream_listeners, "f")[event];
      if (listeners) {
        __classPrivateFieldGet$3(this, _EventStream_listeners, "f")[event] = listeners.filter(function (l) {
          return !l.once;
        });
        listeners.forEach(function (_ref) {
          var listener = _ref.listener;
          return listener.apply(void 0, args);
        });
      }
      if (event === 'abort') {
        var error = args[0];
        if (!__classPrivateFieldGet$3(this, _EventStream_catchingPromiseCreated, "f") && !(listeners !== null && listeners !== void 0 && listeners.length)) {
          Promise.reject(error);
        }
        __classPrivateFieldGet$3(this, _EventStream_rejectConnectedPromise, "f").call(this, error);
        __classPrivateFieldGet$3(this, _EventStream_rejectEndPromise, "f").call(this, error);
        this._emit('end');
        return;
      }
      if (event === 'error') {
        // NOTE: _emit('error', error) should only be called from #handleError().
        var _error = args[0];
        if (!__classPrivateFieldGet$3(this, _EventStream_catchingPromiseCreated, "f") && !(listeners !== null && listeners !== void 0 && listeners.length)) {
          // Trigger an unhandled rejection if the user hasn't registered any error handlers.
          // If you are seeing stack traces here, make sure to handle errors via either:
          // - runner.on('error', () => ...)
          // - await runner.done()
          // - await runner.finalChatCompletion()
          // - etc.
          Promise.reject(_error);
        }
        __classPrivateFieldGet$3(this, _EventStream_rejectConnectedPromise, "f").call(this, _error);
        __classPrivateFieldGet$3(this, _EventStream_rejectEndPromise, "f").call(this, _error);
        this._emit('end');
      }
    }
  }, {
    key: "_emitFinal",
    value: function _emitFinal() {}
  }]);
}();
_EventStream_connectedPromise = new WeakMap(), _EventStream_resolveConnectedPromise = new WeakMap(), _EventStream_rejectConnectedPromise = new WeakMap(), _EventStream_endPromise = new WeakMap(), _EventStream_resolveEndPromise = new WeakMap(), _EventStream_rejectEndPromise = new WeakMap(), _EventStream_listeners = new WeakMap(), _EventStream_ended = new WeakMap(), _EventStream_errored = new WeakMap(), _EventStream_aborted = new WeakMap(), _EventStream_catchingPromiseCreated = new WeakMap(), _EventStream_instances = new WeakSet(), _EventStream_handleError = function _EventStream_handleError(error) {
  __classPrivateFieldSet$2(this, _EventStream_errored, true, "f");
  if (error instanceof Error && error.name === 'AbortError') {
    error = new APIUserAbortError();
  }
  if (error instanceof APIUserAbortError) {
    __classPrivateFieldSet$2(this, _EventStream_aborted, true, "f");
    return this._emit('abort', error);
  }
  if (error instanceof OpenAIError) {
    return this._emit('error', error);
  }
  if (error instanceof Error) {
    var openAIError = new OpenAIError(error.message);
    // @ts-ignore
    openAIError.cause = error;
    return this._emit('error', openAIError);
  }
  return this._emit('error', new OpenAIError(String(error)));
};

function isAutoParsableResponseFormat(response_format) {
  return (response_format === null || response_format === void 0 ? void 0 : response_format['$brand']) === 'auto-parseable-response-format';
}
function isAutoParsableTool(tool) {
  return (tool === null || tool === void 0 ? void 0 : tool['$brand']) === 'auto-parseable-tool';
}
function maybeParseChatCompletion(completion, params) {
  if (!params || !hasAutoParseableInput(params)) {
    return _objectSpread2(_objectSpread2({}, completion), {}, {
      choices: completion.choices.map(function (choice) {
        var _choice$message$tool_;
        return _objectSpread2(_objectSpread2({}, choice), {}, {
          message: _objectSpread2(_objectSpread2({}, choice.message), {}, {
            parsed: null,
            tool_calls: (_choice$message$tool_ = choice.message.tool_calls) !== null && _choice$message$tool_ !== void 0 ? _choice$message$tool_ : []
          })
        });
      })
    });
  }
  return parseChatCompletion(completion, params);
}
function parseChatCompletion(completion, params) {
  var choices = completion.choices.map(function (choice) {
    var _choice$message$tool_2, _choice$message$tool_3;
    if (choice.finish_reason === 'length') {
      throw new LengthFinishReasonError();
    }
    if (choice.finish_reason === 'content_filter') {
      throw new ContentFilterFinishReasonError();
    }
    return _objectSpread2(_objectSpread2({}, choice), {}, {
      message: _objectSpread2(_objectSpread2({}, choice.message), {}, {
        tool_calls: (_choice$message$tool_2 = (_choice$message$tool_3 = choice.message.tool_calls) === null || _choice$message$tool_3 === void 0 ? void 0 : _choice$message$tool_3.map(function (toolCall) {
          return parseToolCall(params, toolCall);
        })) !== null && _choice$message$tool_2 !== void 0 ? _choice$message$tool_2 : [],
        parsed: choice.message.content && !choice.message.refusal ? parseResponseFormat(params, choice.message.content) : null
      })
    });
  });
  return _objectSpread2(_objectSpread2({}, completion), {}, {
    choices: choices
  });
}
function parseResponseFormat(params, content) {
  var _params$response_form, _params$response_form2;
  if (((_params$response_form = params.response_format) === null || _params$response_form === void 0 ? void 0 : _params$response_form.type) !== 'json_schema') {
    return null;
  }
  if (((_params$response_form2 = params.response_format) === null || _params$response_form2 === void 0 ? void 0 : _params$response_form2.type) === 'json_schema') {
    if ('$parseRaw' in params.response_format) {
      var response_format = params.response_format;
      return response_format.$parseRaw(content);
    }
    return JSON.parse(content);
  }
  return null;
}
function parseToolCall(params, toolCall) {
  var _params$tools;
  var inputTool = (_params$tools = params.tools) === null || _params$tools === void 0 ? void 0 : _params$tools.find(function (inputTool) {
    var _inputTool$function;
    return ((_inputTool$function = inputTool.function) === null || _inputTool$function === void 0 ? void 0 : _inputTool$function.name) === toolCall.function.name;
  });
  return _objectSpread2(_objectSpread2({}, toolCall), {}, {
    function: _objectSpread2(_objectSpread2({}, toolCall.function), {}, {
      parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCall.function.arguments) : inputTool !== null && inputTool !== void 0 && inputTool.function.strict ? JSON.parse(toolCall.function.arguments) : null
    })
  });
}
function shouldParseToolCall(params, toolCall) {
  var _params$tools2;
  if (!params) {
    return false;
  }
  var inputTool = (_params$tools2 = params.tools) === null || _params$tools2 === void 0 ? void 0 : _params$tools2.find(function (inputTool) {
    var _inputTool$function2;
    return ((_inputTool$function2 = inputTool.function) === null || _inputTool$function2 === void 0 ? void 0 : _inputTool$function2.name) === toolCall.function.name;
  });
  return isAutoParsableTool(inputTool) || (inputTool === null || inputTool === void 0 ? void 0 : inputTool.function.strict) || false;
}
function hasAutoParseableInput(params) {
  var _params$tools$some, _params$tools3;
  if (isAutoParsableResponseFormat(params.response_format)) {
    return true;
  }
  return (_params$tools$some = (_params$tools3 = params.tools) === null || _params$tools3 === void 0 ? void 0 : _params$tools3.some(function (t) {
    return isAutoParsableTool(t) || t.type === 'function' && t.function.strict === true;
  })) !== null && _params$tools$some !== void 0 ? _params$tools$some : false;
}
function validateInputTools(tools) {
  var _iterator = _createForOfIteratorHelper(tools !== null && tools !== void 0 ? tools : []),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tool = _step.value;
      if (tool.type !== 'function') {
        throw new OpenAIError("Currently only `function` tool types support auto-parsing; Received `".concat(tool.type, "`"));
      }
      if (tool.function.strict !== true) {
        throw new OpenAIError("The `".concat(tool.function.name, "` tool is not marked with `strict: true`. Only strict function tools can be auto-parsed"));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

var _excluded$3 = ["function_call", "stream"],
  _excluded2$2 = ["tool_choice", "stream"],
  _excluded3$1 = ["function_call"];
var __classPrivateFieldGet$2 = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractChatCompletionRunner_instances, _AbstractChatCompletionRunner_getFinalContent, _AbstractChatCompletionRunner_getFinalMessage, _AbstractChatCompletionRunner_getFinalFunctionCall, _AbstractChatCompletionRunner_getFinalFunctionCallResult, _AbstractChatCompletionRunner_calculateTotalUsage, _AbstractChatCompletionRunner_validateParams, _AbstractChatCompletionRunner_stringifyFunctionCallResult;
var DEFAULT_MAX_CHAT_COMPLETIONS = 10;
var AbstractChatCompletionRunner = /*#__PURE__*/function (_EventStream) {
  function AbstractChatCompletionRunner() {
    var _this;
    _classCallCheck(this, AbstractChatCompletionRunner);
    _this = _callSuper(this, AbstractChatCompletionRunner, arguments);
    _AbstractChatCompletionRunner_instances.add(_this);
    _this._chatCompletions = [];
    _this.messages = [];
    return _this;
  }
  _inherits(AbstractChatCompletionRunner, _EventStream);
  return _createClass(AbstractChatCompletionRunner, [{
    key: "_addChatCompletion",
    value: function _addChatCompletion(chatCompletion) {
      var _chatCompletion$choic;
      this._chatCompletions.push(chatCompletion);
      this._emit('chatCompletion', chatCompletion);
      var message = (_chatCompletion$choic = chatCompletion.choices[0]) === null || _chatCompletion$choic === void 0 ? void 0 : _chatCompletion$choic.message;
      if (message) this._addMessage(message);
      return chatCompletion;
    }
  }, {
    key: "_addMessage",
    value: function _addMessage(message) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!('content' in message)) message.content = null;
      this.messages.push(message);
      if (emit) {
        this._emit('message', message);
        if ((isFunctionMessage(message) || isToolMessage(message)) && message.content) {
          // Note, this assumes that {role: 'tool', content: …} is always the result of a call of tool of type=function.
          this._emit('functionCallResult', message.content);
        } else if (isAssistantMessage(message) && message.function_call) {
          this._emit('functionCall', message.function_call);
        } else if (isAssistantMessage(message) && message.tool_calls) {
          var _iterator = _createForOfIteratorHelper(message.tool_calls),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var tool_call = _step.value;
              if (tool_call.type === 'function') {
                this._emit('functionCall', tool_call.function);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
    }
    /**
     * @returns a promise that resolves with the final ChatCompletion, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletion.
     */
  }, {
    key: "finalChatCompletion",
    value: (function () {
      var _finalChatCompletion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var completion;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.done();
            case 2:
              completion = this._chatCompletions[this._chatCompletions.length - 1];
              if (completion) {
                _context.next = 5;
                break;
              }
              throw new OpenAIError('stream ended without producing a ChatCompletion');
            case 5:
              return _context.abrupt("return", completion);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function finalChatCompletion() {
        return _finalChatCompletion.apply(this, arguments);
      }
      return finalChatCompletion;
    }()
    /**
     * @returns a promise that resolves with the content of the final ChatCompletionMessage, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */
    )
  }, {
    key: "finalContent",
    value: (function () {
      var _finalContent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.done();
            case 2:
              return _context2.abrupt("return", __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function finalContent() {
        return _finalContent.apply(this, arguments);
      }
      return finalContent;
    }()
    /**
     * @returns a promise that resolves with the the final assistant ChatCompletionMessage response,
     * or rejects if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */
    )
  }, {
    key: "finalMessage",
    value: (function () {
      var _finalMessage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.done();
            case 2:
              return _context3.abrupt("return", __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this));
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function finalMessage() {
        return _finalMessage.apply(this, arguments);
      }
      return finalMessage;
    }()
    /**
     * @returns a promise that resolves with the content of the final FunctionCall, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */
    )
  }, {
    key: "finalFunctionCall",
    value: (function () {
      var _finalFunctionCall = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.done();
            case 2:
              return _context4.abrupt("return", __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function finalFunctionCall() {
        return _finalFunctionCall.apply(this, arguments);
      }
      return finalFunctionCall;
    }())
  }, {
    key: "finalFunctionCallResult",
    value: function () {
      var _finalFunctionCallResult = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.done();
            case 2:
              return _context5.abrupt("return", __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function finalFunctionCallResult() {
        return _finalFunctionCallResult.apply(this, arguments);
      }
      return finalFunctionCallResult;
    }()
  }, {
    key: "totalUsage",
    value: function () {
      var _totalUsage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.done();
            case 2:
              return _context6.abrupt("return", __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this));
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function totalUsage() {
        return _totalUsage.apply(this, arguments);
      }
      return totalUsage;
    }()
  }, {
    key: "allChatCompletions",
    value: function allChatCompletions() {
      return _toConsumableArray(this._chatCompletions);
    }
  }, {
    key: "_emitFinal",
    value: function _emitFinal() {
      var completion = this._chatCompletions[this._chatCompletions.length - 1];
      if (completion) this._emit('finalChatCompletion', completion);
      var finalMessage = __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this);
      if (finalMessage) this._emit('finalMessage', finalMessage);
      var finalContent = __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalContent).call(this);
      if (finalContent) this._emit('finalContent', finalContent);
      var finalFunctionCall = __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCall).call(this);
      if (finalFunctionCall) this._emit('finalFunctionCall', finalFunctionCall);
      var finalFunctionCallResult = __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalFunctionCallResult).call(this);
      if (finalFunctionCallResult != null) this._emit('finalFunctionCallResult', finalFunctionCallResult);
      if (this._chatCompletions.some(function (c) {
        return c.usage;
      })) {
        this._emit('totalUsage', __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_calculateTotalUsage).call(this));
      }
    }
  }, {
    key: "_createChatCompletion",
    value: function () {
      var _createChatCompletion2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(client, params, options) {
        var _this2 = this;
        var signal, chatCompletion;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              signal = options === null || options === void 0 ? void 0 : options.signal;
              if (signal) {
                if (signal.aborted) this.controller.abort();
                signal.addEventListener('abort', function () {
                  return _this2.controller.abort();
                });
              }
              __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_validateParams).call(this, params);
              _context7.next = 5;
              return client.chat.completions.create(_objectSpread2(_objectSpread2({}, params), {}, {
                stream: false
              }), _objectSpread2(_objectSpread2({}, options), {}, {
                signal: this.controller.signal
              }));
            case 5:
              chatCompletion = _context7.sent;
              this._connected();
              return _context7.abrupt("return", this._addChatCompletion(parseChatCompletion(chatCompletion, params)));
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function _createChatCompletion(_x, _x2, _x3) {
        return _createChatCompletion2.apply(this, arguments);
      }
      return _createChatCompletion;
    }()
  }, {
    key: "_runChatCompletion",
    value: function () {
      var _runChatCompletion2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(client, params, options) {
        var _iterator2, _step2, message;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _iterator2 = _createForOfIteratorHelper(params.messages);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  message = _step2.value;
                  this._addMessage(message, false);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _context8.next = 4;
              return this._createChatCompletion(client, params, options);
            case 4:
              return _context8.abrupt("return", _context8.sent);
            case 5:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function _runChatCompletion(_x4, _x5, _x6) {
        return _runChatCompletion2.apply(this, arguments);
      }
      return _runChatCompletion;
    }()
  }, {
    key: "_runFunctions",
    value: function () {
      var _runFunctions2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(client, params, options) {
        var role, _params$function_call, function_call, restParams, singleFunctionToCall, _ref, _ref$maxChatCompletio, maxChatCompletions, functionsByName, _iterator3, _step3, f, functions, _iterator4, _step4, _message, i, _chatCompletion$choic2, chatCompletion, message, _message$function_cal, name, args, fn, _content, _content2, parsed, rawContent, content;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              role = 'function';
              _params$function_call = params.function_call, function_call = _params$function_call === void 0 ? 'auto' : _params$function_call, params.stream, restParams = _objectWithoutProperties(params, _excluded$3);
              singleFunctionToCall = typeof function_call !== 'string' && (function_call === null || function_call === void 0 ? void 0 : function_call.name);
              _ref = options || {}, _ref$maxChatCompletio = _ref.maxChatCompletions, maxChatCompletions = _ref$maxChatCompletio === void 0 ? DEFAULT_MAX_CHAT_COMPLETIONS : _ref$maxChatCompletio;
              functionsByName = {};
              _iterator3 = _createForOfIteratorHelper(params.functions);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  f = _step3.value;
                  functionsByName[f.name || f.function.name] = f;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              functions = params.functions.map(function (f) {
                return {
                  name: f.name || f.function.name,
                  parameters: f.parameters,
                  description: f.description
                };
              });
              _iterator4 = _createForOfIteratorHelper(params.messages);
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  _message = _step4.value;
                  this._addMessage(_message, false);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              i = 0;
            case 11:
              if (!(i < maxChatCompletions)) {
                _context9.next = 58;
                break;
              }
              _context9.next = 14;
              return this._createChatCompletion(client, _objectSpread2(_objectSpread2({}, restParams), {}, {
                function_call: function_call,
                functions: functions,
                messages: _toConsumableArray(this.messages)
              }), options);
            case 14:
              chatCompletion = _context9.sent;
              message = (_chatCompletion$choic2 = chatCompletion.choices[0]) === null || _chatCompletion$choic2 === void 0 ? void 0 : _chatCompletion$choic2.message;
              if (message) {
                _context9.next = 18;
                break;
              }
              throw new OpenAIError("missing message in ChatCompletion response");
            case 18:
              if (message.function_call) {
                _context9.next = 20;
                break;
              }
              return _context9.abrupt("return");
            case 20:
              _message$function_cal = message.function_call, name = _message$function_cal.name, args = _message$function_cal.arguments;
              fn = functionsByName[name];
              if (fn) {
                _context9.next = 28;
                break;
              }
              _content = "Invalid function_call: ".concat(JSON.stringify(name), ". Available options are: ").concat(functions.map(function (f) {
                return JSON.stringify(f.name);
              }).join(', '), ". Please try again");
              this._addMessage({
                role: role,
                name: name,
                content: _content
              });
              return _context9.abrupt("continue", 55);
            case 28:
              if (!(singleFunctionToCall && singleFunctionToCall !== name)) {
                _context9.next = 32;
                break;
              }
              _content2 = "Invalid function_call: ".concat(JSON.stringify(name), ". ").concat(JSON.stringify(singleFunctionToCall), " requested. Please try again");
              this._addMessage({
                role: role,
                name: name,
                content: _content2
              });
              return _context9.abrupt("continue", 55);
            case 32:
              parsed = void 0;
              _context9.prev = 33;
              if (!isRunnableFunctionWithParse(fn)) {
                _context9.next = 40;
                break;
              }
              _context9.next = 37;
              return fn.parse(args);
            case 37:
              _context9.t0 = _context9.sent;
              _context9.next = 41;
              break;
            case 40:
              _context9.t0 = args;
            case 41:
              parsed = _context9.t0;
              _context9.next = 48;
              break;
            case 44:
              _context9.prev = 44;
              _context9.t1 = _context9["catch"](33);
              this._addMessage({
                role: role,
                name: name,
                content: _context9.t1 instanceof Error ? _context9.t1.message : String(_context9.t1)
              });
              return _context9.abrupt("continue", 55);
            case 48:
              _context9.next = 50;
              return fn.function(parsed, this);
            case 50:
              rawContent = _context9.sent;
              content = __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
              this._addMessage({
                role: role,
                name: name,
                content: content
              });
              if (!singleFunctionToCall) {
                _context9.next = 55;
                break;
              }
              return _context9.abrupt("return");
            case 55:
              ++i;
              _context9.next = 11;
              break;
            case 58:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[33, 44]]);
      }));
      function _runFunctions(_x7, _x8, _x9) {
        return _runFunctions2.apply(this, arguments);
      }
      return _runFunctions;
    }()
  }, {
    key: "_runTools",
    value: function () {
      var _runTools2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(client, params, options) {
        var _tool_choice$function;
        var role, _params$tool_choice, tool_choice, restParams, singleFunctionToCall, _ref2, _ref2$maxChatCompleti, maxChatCompletions, inputTools, functionsByName, _iterator5, _step5, f, tools, _iterator6, _step6, _message2, i, _chatCompletion$choic3, _message$tool_calls, chatCompletion, message, _iterator7, _step7, tool_call, tool_call_id, _tool_call$function, name, args, fn, _content3, _content4, parsed, _content5, rawContent, content;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              role = 'tool';
              _params$tool_choice = params.tool_choice, tool_choice = _params$tool_choice === void 0 ? 'auto' : _params$tool_choice, params.stream, restParams = _objectWithoutProperties(params, _excluded2$2);
              singleFunctionToCall = typeof tool_choice !== 'string' && (tool_choice === null || tool_choice === void 0 || (_tool_choice$function = tool_choice.function) === null || _tool_choice$function === void 0 ? void 0 : _tool_choice$function.name);
              _ref2 = options || {}, _ref2$maxChatCompleti = _ref2.maxChatCompletions, maxChatCompletions = _ref2$maxChatCompleti === void 0 ? DEFAULT_MAX_CHAT_COMPLETIONS : _ref2$maxChatCompleti; // TODO(someday): clean this logic up
              inputTools = params.tools.map(function (tool) {
                if (isAutoParsableTool(tool)) {
                  if (!tool.$callback) {
                    throw new OpenAIError('Tool given to `.runTools()` that does not have an associated function');
                  }
                  return {
                    type: 'function',
                    function: {
                      function: tool.$callback,
                      name: tool.function.name,
                      description: tool.function.description || '',
                      parameters: tool.function.parameters,
                      parse: tool.$parseRaw,
                      strict: true
                    }
                  };
                }
                return tool;
              });
              functionsByName = {};
              _iterator5 = _createForOfIteratorHelper(inputTools);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  f = _step5.value;
                  if (f.type === 'function') {
                    functionsByName[f.function.name || f.function.function.name] = f.function;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              tools = 'tools' in params ? inputTools.map(function (t) {
                return t.type === 'function' ? {
                  type: 'function',
                  function: {
                    name: t.function.name || t.function.function.name,
                    parameters: t.function.parameters,
                    description: t.function.description,
                    strict: t.function.strict
                  }
                } : t;
              }) : undefined;
              _iterator6 = _createForOfIteratorHelper(params.messages);
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  _message2 = _step6.value;
                  this._addMessage(_message2, false);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              i = 0;
            case 12:
              if (!(i < maxChatCompletions)) {
                _context10.next = 78;
                break;
              }
              _context10.next = 15;
              return this._createChatCompletion(client, _objectSpread2(_objectSpread2({}, restParams), {}, {
                tool_choice: tool_choice,
                tools: tools,
                messages: _toConsumableArray(this.messages)
              }), options);
            case 15:
              chatCompletion = _context10.sent;
              message = (_chatCompletion$choic3 = chatCompletion.choices[0]) === null || _chatCompletion$choic3 === void 0 ? void 0 : _chatCompletion$choic3.message;
              if (message) {
                _context10.next = 19;
                break;
              }
              throw new OpenAIError("missing message in ChatCompletion response");
            case 19:
              if ((_message$tool_calls = message.tool_calls) !== null && _message$tool_calls !== void 0 && _message$tool_calls.length) {
                _context10.next = 21;
                break;
              }
              return _context10.abrupt("return");
            case 21:
              _iterator7 = _createForOfIteratorHelper(message.tool_calls);
              _context10.prev = 22;
              _iterator7.s();
            case 24:
              if ((_step7 = _iterator7.n()).done) {
                _context10.next = 67;
                break;
              }
              tool_call = _step7.value;
              if (!(tool_call.type !== 'function')) {
                _context10.next = 28;
                break;
              }
              return _context10.abrupt("continue", 65);
            case 28:
              tool_call_id = tool_call.id;
              _tool_call$function = tool_call.function, name = _tool_call$function.name, args = _tool_call$function.arguments;
              fn = functionsByName[name];
              if (fn) {
                _context10.next = 37;
                break;
              }
              _content3 = "Invalid tool_call: ".concat(JSON.stringify(name), ". Available options are: ").concat(Object.keys(functionsByName).map(function (name) {
                return JSON.stringify(name);
              }).join(', '), ". Please try again");
              this._addMessage({
                role: role,
                tool_call_id: tool_call_id,
                content: _content3
              });
              return _context10.abrupt("continue", 65);
            case 37:
              if (!(singleFunctionToCall && singleFunctionToCall !== name)) {
                _context10.next = 41;
                break;
              }
              _content4 = "Invalid tool_call: ".concat(JSON.stringify(name), ". ").concat(JSON.stringify(singleFunctionToCall), " requested. Please try again");
              this._addMessage({
                role: role,
                tool_call_id: tool_call_id,
                content: _content4
              });
              return _context10.abrupt("continue", 65);
            case 41:
              parsed = void 0;
              _context10.prev = 42;
              if (!isRunnableFunctionWithParse(fn)) {
                _context10.next = 49;
                break;
              }
              _context10.next = 46;
              return fn.parse(args);
            case 46:
              _context10.t0 = _context10.sent;
              _context10.next = 50;
              break;
            case 49:
              _context10.t0 = args;
            case 50:
              parsed = _context10.t0;
              _context10.next = 58;
              break;
            case 53:
              _context10.prev = 53;
              _context10.t1 = _context10["catch"](42);
              _content5 = _context10.t1 instanceof Error ? _context10.t1.message : String(_context10.t1);
              this._addMessage({
                role: role,
                tool_call_id: tool_call_id,
                content: _content5
              });
              return _context10.abrupt("continue", 65);
            case 58:
              _context10.next = 60;
              return fn.function(parsed, this);
            case 60:
              rawContent = _context10.sent;
              content = __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_stringifyFunctionCallResult).call(this, rawContent);
              this._addMessage({
                role: role,
                tool_call_id: tool_call_id,
                content: content
              });
              if (!singleFunctionToCall) {
                _context10.next = 65;
                break;
              }
              return _context10.abrupt("return");
            case 65:
              _context10.next = 24;
              break;
            case 67:
              _context10.next = 72;
              break;
            case 69:
              _context10.prev = 69;
              _context10.t2 = _context10["catch"](22);
              _iterator7.e(_context10.t2);
            case 72:
              _context10.prev = 72;
              _iterator7.f();
              return _context10.finish(72);
            case 75:
              ++i;
              _context10.next = 12;
              break;
            case 78:
              return _context10.abrupt("return");
            case 79:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[22, 69, 72, 75], [42, 53]]);
      }));
      function _runTools(_x10, _x11, _x12) {
        return _runTools2.apply(this, arguments);
      }
      return _runTools;
    }()
  }]);
}(EventStream);
_AbstractChatCompletionRunner_instances = new WeakSet(), _AbstractChatCompletionRunner_getFinalContent = function _AbstractChatCompletionRunner_getFinalContent() {
  var _classPrivateFieldGe;
  return (_classPrivateFieldGe = __classPrivateFieldGet$2(this, _AbstractChatCompletionRunner_instances, "m", _AbstractChatCompletionRunner_getFinalMessage).call(this).content) !== null && _classPrivateFieldGe !== void 0 ? _classPrivateFieldGe : null;
}, _AbstractChatCompletionRunner_getFinalMessage = function _AbstractChatCompletionRunner_getFinalMessage() {
  var i = this.messages.length;
  while (i-- > 0) {
    var message = this.messages[i];
    if (isAssistantMessage(message)) {
      var _message$content, _message$refusal;
      var function_call = message.function_call,
        rest = _objectWithoutProperties(message, _excluded3$1);
      // TODO: support audio here
      var ret = _objectSpread2(_objectSpread2({}, rest), {}, {
        content: (_message$content = message.content) !== null && _message$content !== void 0 ? _message$content : null,
        refusal: (_message$refusal = message.refusal) !== null && _message$refusal !== void 0 ? _message$refusal : null
      });
      if (function_call) {
        ret.function_call = function_call;
      }
      return ret;
    }
  }
  throw new OpenAIError('stream ended without producing a ChatCompletionMessage with role=assistant');
}, _AbstractChatCompletionRunner_getFinalFunctionCall = function _AbstractChatCompletionRunner_getFinalFunctionCall() {
  for (var i = this.messages.length - 1; i >= 0; i--) {
    var _message$tool_calls2;
    var message = this.messages[i];
    if (isAssistantMessage(message) && message !== null && message !== void 0 && message.function_call) {
      return message.function_call;
    }
    if (isAssistantMessage(message) && message !== null && message !== void 0 && (_message$tool_calls2 = message.tool_calls) !== null && _message$tool_calls2 !== void 0 && _message$tool_calls2.length) {
      var _message$tool_calls$a;
      return (_message$tool_calls$a = message.tool_calls.at(-1)) === null || _message$tool_calls$a === void 0 ? void 0 : _message$tool_calls$a.function;
    }
  }
  return;
}, _AbstractChatCompletionRunner_getFinalFunctionCallResult = function _AbstractChatCompletionRunner_getFinalFunctionCallResult() {
  var _this3 = this;
  var _loop = function _loop() {
      var message = _this3.messages[i];
      if (isFunctionMessage(message) && message.content != null) {
        return {
          v: message.content
        };
      }
      if (isToolMessage(message) && message.content != null && typeof message.content === 'string' && _this3.messages.some(function (x) {
        var _x$tool_calls;
        return x.role === 'assistant' && ((_x$tool_calls = x.tool_calls) === null || _x$tool_calls === void 0 ? void 0 : _x$tool_calls.some(function (y) {
          return y.type === 'function' && y.id === message.tool_call_id;
        }));
      })) {
        return {
          v: message.content
        };
      }
    },
    _ret;
  for (var i = this.messages.length - 1; i >= 0; i--) {
    _ret = _loop();
    if (_ret) return _ret.v;
  }
  return;
}, _AbstractChatCompletionRunner_calculateTotalUsage = function _AbstractChatCompletionRunner_calculateTotalUsage() {
  var total = {
    completion_tokens: 0,
    prompt_tokens: 0,
    total_tokens: 0
  };
  var _iterator8 = _createForOfIteratorHelper(this._chatCompletions),
    _step8;
  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var usage = _step8.value.usage;
      if (usage) {
        total.completion_tokens += usage.completion_tokens;
        total.prompt_tokens += usage.prompt_tokens;
        total.total_tokens += usage.total_tokens;
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
  return total;
}, _AbstractChatCompletionRunner_validateParams = function _AbstractChatCompletionRunner_validateParams(params) {
  if (params.n != null && params.n > 1) {
    throw new OpenAIError('ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.');
  }
}, _AbstractChatCompletionRunner_stringifyFunctionCallResult = function _AbstractChatCompletionRunner_stringifyFunctionCallResult(rawContent) {
  return typeof rawContent === 'string' ? rawContent : rawContent === undefined ? 'undefined' : JSON.stringify(rawContent);
};

var ChatCompletionRunner = /*#__PURE__*/function (_AbstractChatCompleti) {
  function ChatCompletionRunner() {
    _classCallCheck(this, ChatCompletionRunner);
    return _callSuper(this, ChatCompletionRunner, arguments);
  }
  _inherits(ChatCompletionRunner, _AbstractChatCompleti);
  return _createClass(ChatCompletionRunner, [{
    key: "_addMessage",
    value: function _addMessage(message) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      _superPropGet(ChatCompletionRunner, "_addMessage", this, 3)([message, emit]);
      if (isAssistantMessage(message) && message.content) {
        this._emit('content', message.content);
      }
    }
  }], [{
    key: "runFunctions",
    value: /** @deprecated - please use `runTools` instead. */
    function runFunctions(client, params, options) {
      var runner = new ChatCompletionRunner();
      var opts = _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
          'X-Stainless-Helper-Method': 'runFunctions'
        })
      });
      runner._run(function () {
        return runner._runFunctions(client, params, opts);
      });
      return runner;
    }
  }, {
    key: "runTools",
    value: function runTools(client, params, options) {
      var runner = new ChatCompletionRunner();
      var opts = _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
          'X-Stainless-Helper-Method': 'runTools'
        })
      });
      runner._run(function () {
        return runner._runTools(client, params, opts);
      });
      return runner;
    }
  }]);
}(AbstractChatCompletionRunner);

var STR = 1;
var NUM = 2;
var ARR = 4;
var OBJ = 8;
var NULL = 16;
var BOOL = 32;
var NAN = 64;
var INFINITY = 128;
var MINUS_INFINITY = 256;
var INF = INFINITY | MINUS_INFINITY;
var SPECIAL = NULL | BOOL | INF | NAN;
var ATOM = STR | NUM | SPECIAL;
var COLLECTION = ARR | OBJ;
var ALL = ATOM | COLLECTION;
var Allow = {
  STR: STR,
  NUM: NUM,
  ARR: ARR,
  OBJ: OBJ,
  NULL: NULL,
  BOOL: BOOL,
  NAN: NAN,
  INFINITY: INFINITY,
  MINUS_INFINITY: MINUS_INFINITY,
  INF: INF,
  SPECIAL: SPECIAL,
  ATOM: ATOM,
  COLLECTION: COLLECTION,
  ALL: ALL
};
// The JSON string segment was unable to be parsed completely
var PartialJSON = /*#__PURE__*/function (_Error) {
  function PartialJSON() {
    _classCallCheck(this, PartialJSON);
    return _callSuper(this, PartialJSON, arguments);
  }
  _inherits(PartialJSON, _Error);
  return _createClass(PartialJSON);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var MalformedJSON = /*#__PURE__*/function (_Error2) {
  function MalformedJSON() {
    _classCallCheck(this, MalformedJSON);
    return _callSuper(this, MalformedJSON, arguments);
  }
  _inherits(MalformedJSON, _Error2);
  return _createClass(MalformedJSON);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Parse incomplete JSON
 * @param {string} jsonString Partial JSON to be parsed
 * @param {number} allowPartial Specify what types are allowed to be partial, see {@link Allow} for details
 * @returns The parsed JSON
 * @throws {PartialJSON} If the JSON is incomplete (related to the `allow` parameter)
 * @throws {MalformedJSON} If the JSON is malformed
 */
function parseJSON(jsonString) {
  var allowPartial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Allow.ALL;
  if (typeof jsonString !== 'string') {
    throw new TypeError("expecting str, got ".concat(_typeof(jsonString)));
  }
  if (!jsonString.trim()) {
    throw new Error("".concat(jsonString, " is empty"));
  }
  return _parseJSON(jsonString.trim(), allowPartial);
}
var _parseJSON = function _parseJSON(jsonString, allow) {
  var length = jsonString.length;
  var index = 0;
  var markPartialJSON = function markPartialJSON(msg) {
    throw new PartialJSON("".concat(msg, " at position ").concat(index));
  };
  var throwMalformedError = function throwMalformedError(msg) {
    throw new MalformedJSON("".concat(msg, " at position ").concat(index));
  };
  var parseAny = function parseAny() {
    skipBlank();
    if (index >= length) markPartialJSON('Unexpected end of input');
    if (jsonString[index] === '"') return parseStr();
    if (jsonString[index] === '{') return parseObj();
    if (jsonString[index] === '[') return parseArr();
    if (jsonString.substring(index, index + 4) === 'null' || Allow.NULL & allow && length - index < 4 && 'null'.startsWith(jsonString.substring(index))) {
      index += 4;
      return null;
    }
    if (jsonString.substring(index, index + 4) === 'true' || Allow.BOOL & allow && length - index < 4 && 'true'.startsWith(jsonString.substring(index))) {
      index += 4;
      return true;
    }
    if (jsonString.substring(index, index + 5) === 'false' || Allow.BOOL & allow && length - index < 5 && 'false'.startsWith(jsonString.substring(index))) {
      index += 5;
      return false;
    }
    if (jsonString.substring(index, index + 8) === 'Infinity' || Allow.INFINITY & allow && length - index < 8 && 'Infinity'.startsWith(jsonString.substring(index))) {
      index += 8;
      return Infinity;
    }
    if (jsonString.substring(index, index + 9) === '-Infinity' || Allow.MINUS_INFINITY & allow && 1 < length - index && length - index < 9 && '-Infinity'.startsWith(jsonString.substring(index))) {
      index += 9;
      return -Infinity;
    }
    if (jsonString.substring(index, index + 3) === 'NaN' || Allow.NAN & allow && length - index < 3 && 'NaN'.startsWith(jsonString.substring(index))) {
      index += 3;
      return NaN;
    }
    return parseNum();
  };
  var parseStr = function parseStr() {
    var start = index;
    var escape = false;
    index++; // skip initial quote
    while (index < length && (jsonString[index] !== '"' || escape && jsonString[index - 1] === '\\')) {
      escape = jsonString[index] === '\\' ? !escape : false;
      index++;
    }
    if (jsonString.charAt(index) == '"') {
      try {
        return JSON.parse(jsonString.substring(start, ++index - Number(escape)));
      } catch (e) {
        throwMalformedError(String(e));
      }
    } else if (Allow.STR & allow) {
      try {
        return JSON.parse(jsonString.substring(start, index - Number(escape)) + '"');
      } catch (e) {
        // SyntaxError: Invalid escape sequence
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf('\\')) + '"');
      }
    }
    markPartialJSON('Unterminated string literal');
  };
  var parseObj = function parseObj() {
    index++; // skip initial brace
    skipBlank();
    var obj = {};
    try {
      while (jsonString[index] !== '}') {
        skipBlank();
        if (index >= length && Allow.OBJ & allow) return obj;
        var key = parseStr();
        skipBlank();
        index++; // skip colon
        try {
          var value = parseAny();
          Object.defineProperty(obj, key, {
            value: value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        } catch (e) {
          if (Allow.OBJ & allow) return obj;else throw e;
        }
        skipBlank();
        if (jsonString[index] === ',') index++; // skip comma
      }
    } catch (e) {
      if (Allow.OBJ & allow) return obj;else markPartialJSON("Expected '}' at end of object");
    }
    index++; // skip final brace
    return obj;
  };
  var parseArr = function parseArr() {
    index++; // skip initial bracket
    var arr = [];
    try {
      while (jsonString[index] !== ']') {
        arr.push(parseAny());
        skipBlank();
        if (jsonString[index] === ',') {
          index++; // skip comma
        }
      }
    } catch (e) {
      if (Allow.ARR & allow) {
        return arr;
      }
      markPartialJSON("Expected ']' at end of array");
    }
    index++; // skip final bracket
    return arr;
  };
  var parseNum = function parseNum() {
    if (index === 0) {
      if (jsonString === '-' && Allow.NUM & allow) markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString);
      } catch (e) {
        if (Allow.NUM & allow) {
          try {
            if ('.' === jsonString[jsonString.length - 1]) return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf('.')));
            return JSON.parse(jsonString.substring(0, jsonString.lastIndexOf('e')));
          } catch (e) {}
        }
        throwMalformedError(String(e));
      }
    }
    var start = index;
    if (jsonString[index] === '-') index++;
    while (jsonString[index] && !',]}'.includes(jsonString[index])) index++;
    if (index == length && !(Allow.NUM & allow)) markPartialJSON('Unterminated number literal');
    try {
      return JSON.parse(jsonString.substring(start, index));
    } catch (e) {
      if (jsonString.substring(start, index) === '-' && Allow.NUM & allow) markPartialJSON("Not sure what '-' is");
      try {
        return JSON.parse(jsonString.substring(start, jsonString.lastIndexOf('e')));
      } catch (e) {
        throwMalformedError(String(e));
      }
    }
  };
  var skipBlank = function skipBlank() {
    while (index < length && ' \n\r\t'.includes(jsonString[index])) {
      index++;
    }
  };
  return parseAny();
};
// using this function with malformed JSON is undefined behavior
var partialParse = function partialParse(input) {
  return parseJSON(input, Allow.ALL ^ Allow.NUM);
};

var _excluded$2 = ["choices"],
  _excluded2$1 = ["delta", "finish_reason", "index", "logprobs"],
  _excluded3 = ["content", "refusal"],
  _excluded4 = ["content", "refusal", "function_call", "role", "tool_calls"],
  _excluded5 = ["index", "id", "type", "function"],
  _excluded6 = ["id", "choices", "created", "model", "system_fingerprint"],
  _excluded7 = ["message", "finish_reason", "index", "logprobs"],
  _excluded8 = ["content", "function_call", "tool_calls"],
  _excluded9 = ["function", "type", "id"],
  _excluded10 = ["arguments", "name"];
var __classPrivateFieldSet$1 = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet$1 = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChatCompletionStream_instances, _ChatCompletionStream_params, _ChatCompletionStream_choiceEventStates, _ChatCompletionStream_currentChatCompletionSnapshot, _ChatCompletionStream_beginRequest, _ChatCompletionStream_getChoiceEventState, _ChatCompletionStream_addChunk, _ChatCompletionStream_emitToolCallDoneEvent, _ChatCompletionStream_emitContentDoneEvents, _ChatCompletionStream_endRequest, _ChatCompletionStream_getAutoParseableResponseFormat, _ChatCompletionStream_accumulateChatCompletion;
var ChatCompletionStream = /*#__PURE__*/function (_AbstractChatCompleti, _ref) {
  function ChatCompletionStream(params) {
    var _this;
    _classCallCheck(this, ChatCompletionStream);
    _this = _callSuper(this, ChatCompletionStream);
    _ChatCompletionStream_instances.add(_this);
    _ChatCompletionStream_params.set(_this, void 0);
    _ChatCompletionStream_choiceEventStates.set(_this, void 0);
    _ChatCompletionStream_currentChatCompletionSnapshot.set(_this, void 0);
    __classPrivateFieldSet$1(_this, _ChatCompletionStream_params, params, "f");
    __classPrivateFieldSet$1(_this, _ChatCompletionStream_choiceEventStates, [], "f");
    return _this;
  }
  _inherits(ChatCompletionStream, _AbstractChatCompleti);
  return _createClass(ChatCompletionStream, [{
    key: "currentChatCompletionSnapshot",
    get: function get() {
      return __classPrivateFieldGet$1(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
    }
    /**
     * Intended for use on the frontend, consuming a stream produced with
     * `.toReadableStream()` on the backend.
     *
     * Note that messages sent to the model do not appear in `.on('message')`
     * in this context.
     */
  }, {
    key: "_createChatCompletion",
    value: function () {
      var _createChatCompletion2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(client, params, options) {
        var _this2 = this,
          _stream$controller$si;
        var signal, stream, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, chunk;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _superPropGet(ChatCompletionStream, "_createChatCompletion", this, 1);
              signal = options === null || options === void 0 ? void 0 : options.signal;
              if (signal) {
                if (signal.aborted) this.controller.abort();
                signal.addEventListener('abort', function () {
                  return _this2.controller.abort();
                });
              }
              __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
              _context.next = 6;
              return client.chat.completions.create(_objectSpread2(_objectSpread2({}, params), {}, {
                stream: true
              }), _objectSpread2(_objectSpread2({}, options), {}, {
                signal: this.controller.signal
              }));
            case 6:
              stream = _context.sent;
              this._connected();
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context.prev = 10;
              _iterator = _asyncIterator(stream);
            case 12:
              _context.next = 14;
              return _iterator.next();
            case 14:
              if (!(_iteratorAbruptCompletion = !(_step = _context.sent).done)) {
                _context.next = 20;
                break;
              }
              chunk = _step.value;
              __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
            case 17:
              _iteratorAbruptCompletion = false;
              _context.next = 12;
              break;
            case 20:
              _context.next = 26;
              break;
            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](10);
              _didIteratorError = true;
              _iteratorError = _context.t0;
            case 26:
              _context.prev = 26;
              _context.prev = 27;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context.next = 31;
                break;
              }
              _context.next = 31;
              return _iterator.return();
            case 31:
              _context.prev = 31;
              if (!_didIteratorError) {
                _context.next = 34;
                break;
              }
              throw _iteratorError;
            case 34:
              return _context.finish(31);
            case 35:
              return _context.finish(26);
            case 36:
              if (!((_stream$controller$si = stream.controller.signal) !== null && _stream$controller$si !== void 0 && _stream$controller$si.aborted)) {
                _context.next = 38;
                break;
              }
              throw new APIUserAbortError();
            case 38:
              return _context.abrupt("return", this._addChatCompletion(__classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this)));
            case 39:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[10, 22, 26, 36], [27,, 31, 35]]);
      }));
      function _createChatCompletion(_x2, _x3, _x4) {
        return _createChatCompletion2.apply(this, arguments);
      }
      return _createChatCompletion;
    }()
  }, {
    key: "_fromReadableStream",
    value: function () {
      var _fromReadableStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(readableStream, options) {
        var _this3 = this,
          _stream$controller$si2;
        var signal, stream, chatId, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, chunk;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              signal = options === null || options === void 0 ? void 0 : options.signal;
              if (signal) {
                if (signal.aborted) this.controller.abort();
                signal.addEventListener('abort', function () {
                  return _this3.controller.abort();
                });
              }
              __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_beginRequest).call(this);
              this._connected();
              stream = Stream.fromReadableStream(readableStream, this.controller);
              _iteratorAbruptCompletion2 = false;
              _didIteratorError2 = false;
              _context2.prev = 7;
              _iterator2 = _asyncIterator(stream);
            case 9:
              _context2.next = 11;
              return _iterator2.next();
            case 11:
              if (!(_iteratorAbruptCompletion2 = !(_step2 = _context2.sent).done)) {
                _context2.next = 19;
                break;
              }
              chunk = _step2.value;
              if (chatId && chatId !== chunk.id) {
                // A new request has been made.
                this._addChatCompletion(__classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this));
              }
              __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_addChunk).call(this, chunk);
              chatId = chunk.id;
            case 16:
              _iteratorAbruptCompletion2 = false;
              _context2.next = 9;
              break;
            case 19:
              _context2.next = 25;
              break;
            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](7);
              _didIteratorError2 = true;
              _iteratorError2 = _context2.t0;
            case 25:
              _context2.prev = 25;
              _context2.prev = 26;
              if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                _context2.next = 30;
                break;
              }
              _context2.next = 30;
              return _iterator2.return();
            case 30:
              _context2.prev = 30;
              if (!_didIteratorError2) {
                _context2.next = 33;
                break;
              }
              throw _iteratorError2;
            case 33:
              return _context2.finish(30);
            case 34:
              return _context2.finish(25);
            case 35:
              if (!((_stream$controller$si2 = stream.controller.signal) !== null && _stream$controller$si2 !== void 0 && _stream$controller$si2.aborted)) {
                _context2.next = 37;
                break;
              }
              throw new APIUserAbortError();
            case 37:
              return _context2.abrupt("return", this._addChatCompletion(__classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_endRequest).call(this)));
            case 38:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[7, 21, 25, 35], [26,, 30, 34]]);
      }));
      function _fromReadableStream(_x5, _x6) {
        return _fromReadableStream2.apply(this, arguments);
      }
      return _fromReadableStream;
    }()
  }, {
    key: _ref,
    value: function value() {
      var _this4 = this;
      var pushQueue = [];
      var readQueue = [];
      var done = false;
      this.on('chunk', function (chunk) {
        var reader = readQueue.shift();
        if (reader) {
          reader.resolve(chunk);
        } else {
          pushQueue.push(chunk);
        }
      });
      this.on('end', function () {
        done = true;
        for (var _i = 0, _readQueue = readQueue; _i < _readQueue.length; _i++) {
          var reader = _readQueue[_i];
          reader.resolve(undefined);
        }
        readQueue.length = 0;
      });
      this.on('abort', function (err) {
        done = true;
        for (var _i2 = 0, _readQueue2 = readQueue; _i2 < _readQueue2.length; _i2++) {
          var reader = _readQueue2[_i2];
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      this.on('error', function (err) {
        done = true;
        for (var _i3 = 0, _readQueue3 = readQueue; _i3 < _readQueue3.length; _i3++) {
          var reader = _readQueue3[_i3];
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      return {
        next: function () {
          var _next = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var chunk;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (pushQueue.length) {
                    _context3.next = 4;
                    break;
                  }
                  if (!done) {
                    _context3.next = 3;
                    break;
                  }
                  return _context3.abrupt("return", {
                    value: undefined,
                    done: true
                  });
                case 3:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    return readQueue.push({
                      resolve: resolve,
                      reject: reject
                    });
                  }).then(function (chunk) {
                    return chunk ? {
                      value: chunk,
                      done: false
                    } : {
                      value: undefined,
                      done: true
                    };
                  }));
                case 4:
                  chunk = pushQueue.shift();
                  return _context3.abrupt("return", {
                    value: chunk,
                    done: false
                  });
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function next() {
            return _next.apply(this, arguments);
          }
          return next;
        }(),
        return: function () {
          var _return2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _this4.abort();
                  return _context4.abrupt("return", {
                    value: undefined,
                    done: true
                  });
                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function _return() {
            return _return2.apply(this, arguments);
          }
          return _return;
        }()
      };
    }
  }, {
    key: "toReadableStream",
    value: function toReadableStream() {
      var stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
      return stream.toReadableStream();
    }
  }], [{
    key: "fromReadableStream",
    value: function fromReadableStream(stream) {
      var runner = new ChatCompletionStream(null);
      runner._run(function () {
        return runner._fromReadableStream(stream);
      });
      return runner;
    }
  }, {
    key: "createChatCompletion",
    value: function createChatCompletion(client, params, options) {
      var runner = new ChatCompletionStream(params);
      runner._run(function () {
        return runner._runChatCompletion(client, _objectSpread2(_objectSpread2({}, params), {}, {
          stream: true
        }), _objectSpread2(_objectSpread2({}, options), {}, {
          headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
            'X-Stainless-Helper-Method': 'stream'
          })
        }));
      });
      return runner;
    }
  }]);
}(AbstractChatCompletionRunner, (_ChatCompletionStream_params = new WeakMap(), _ChatCompletionStream_choiceEventStates = new WeakMap(), _ChatCompletionStream_currentChatCompletionSnapshot = new WeakMap(), _ChatCompletionStream_instances = new WeakSet(), _ChatCompletionStream_beginRequest = function _ChatCompletionStream_beginRequest() {
  if (this.ended) return;
  __classPrivateFieldSet$1(this, _ChatCompletionStream_currentChatCompletionSnapshot, undefined, "f");
}, _ChatCompletionStream_getChoiceEventState = function _ChatCompletionStream_getChoiceEventState(choice) {
  var state = __classPrivateFieldGet$1(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index];
  if (state) {
    return state;
  }
  state = {
    content_done: false,
    refusal_done: false,
    logprobs_content_done: false,
    logprobs_refusal_done: false,
    done_tool_calls: new Set(),
    current_tool_call_index: null
  };
  __classPrivateFieldGet$1(this, _ChatCompletionStream_choiceEventStates, "f")[choice.index] = state;
  return state;
}, _ChatCompletionStream_addChunk = function _ChatCompletionStream_addChunk(chunk) {
  if (this.ended) return;
  var completion = __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_accumulateChatCompletion).call(this, chunk);
  this._emit('chunk', chunk, completion);
  var _iterator3 = _createForOfIteratorHelper(chunk.choices),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _choiceSnapshot$messa, _choiceSnapshot$messa2, _choiceSnapshot$messa3, _choiceSnapshot$messa4, _choice$logprobs, _choiceSnapshot$messa5, _choice$logprobs3, _choiceSnapshot$messa6, _choice$delta$tool_ca, _choice$delta$tool_ca2;
      var choice = _step3.value;
      var choiceSnapshot = completion.choices[choice.index];
      if (choice.delta.content != null && ((_choiceSnapshot$messa = choiceSnapshot.message) === null || _choiceSnapshot$messa === void 0 ? void 0 : _choiceSnapshot$messa.role) === 'assistant' && (_choiceSnapshot$messa2 = choiceSnapshot.message) !== null && _choiceSnapshot$messa2 !== void 0 && _choiceSnapshot$messa2.content) {
        this._emit('content', choice.delta.content, choiceSnapshot.message.content);
        this._emit('content.delta', {
          delta: choice.delta.content,
          snapshot: choiceSnapshot.message.content,
          parsed: choiceSnapshot.message.parsed
        });
      }
      if (choice.delta.refusal != null && ((_choiceSnapshot$messa3 = choiceSnapshot.message) === null || _choiceSnapshot$messa3 === void 0 ? void 0 : _choiceSnapshot$messa3.role) === 'assistant' && (_choiceSnapshot$messa4 = choiceSnapshot.message) !== null && _choiceSnapshot$messa4 !== void 0 && _choiceSnapshot$messa4.refusal) {
        this._emit('refusal.delta', {
          delta: choice.delta.refusal,
          snapshot: choiceSnapshot.message.refusal
        });
      }
      if (((_choice$logprobs = choice.logprobs) === null || _choice$logprobs === void 0 ? void 0 : _choice$logprobs.content) != null && ((_choiceSnapshot$messa5 = choiceSnapshot.message) === null || _choiceSnapshot$messa5 === void 0 ? void 0 : _choiceSnapshot$messa5.role) === 'assistant') {
        var _choice$logprobs2, _choiceSnapshot$logpr, _choiceSnapshot$logpr2;
        this._emit('logprobs.content.delta', {
          content: (_choice$logprobs2 = choice.logprobs) === null || _choice$logprobs2 === void 0 ? void 0 : _choice$logprobs2.content,
          snapshot: (_choiceSnapshot$logpr = (_choiceSnapshot$logpr2 = choiceSnapshot.logprobs) === null || _choiceSnapshot$logpr2 === void 0 ? void 0 : _choiceSnapshot$logpr2.content) !== null && _choiceSnapshot$logpr !== void 0 ? _choiceSnapshot$logpr : []
        });
      }
      if (((_choice$logprobs3 = choice.logprobs) === null || _choice$logprobs3 === void 0 ? void 0 : _choice$logprobs3.refusal) != null && ((_choiceSnapshot$messa6 = choiceSnapshot.message) === null || _choiceSnapshot$messa6 === void 0 ? void 0 : _choiceSnapshot$messa6.role) === 'assistant') {
        var _choice$logprobs4, _choiceSnapshot$logpr3, _choiceSnapshot$logpr4;
        this._emit('logprobs.refusal.delta', {
          refusal: (_choice$logprobs4 = choice.logprobs) === null || _choice$logprobs4 === void 0 ? void 0 : _choice$logprobs4.refusal,
          snapshot: (_choiceSnapshot$logpr3 = (_choiceSnapshot$logpr4 = choiceSnapshot.logprobs) === null || _choiceSnapshot$logpr4 === void 0 ? void 0 : _choiceSnapshot$logpr4.refusal) !== null && _choiceSnapshot$logpr3 !== void 0 ? _choiceSnapshot$logpr3 : []
        });
      }
      var state = __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
      if (choiceSnapshot.finish_reason) {
        __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
        if (state.current_tool_call_index != null) {
          __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
        }
      }
      var _iterator4 = _createForOfIteratorHelper((_choice$delta$tool_ca = choice.delta.tool_calls) !== null && _choice$delta$tool_ca !== void 0 ? _choice$delta$tool_ca : []),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var toolCall = _step4.value;
          if (state.current_tool_call_index !== toolCall.index) {
            __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitContentDoneEvents).call(this, choiceSnapshot);
            // new tool call started, the previous one is done
            if (state.current_tool_call_index != null) {
              __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_emitToolCallDoneEvent).call(this, choiceSnapshot, state.current_tool_call_index);
            }
          }
          state.current_tool_call_index = toolCall.index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var _iterator5 = _createForOfIteratorHelper((_choice$delta$tool_ca2 = choice.delta.tool_calls) !== null && _choice$delta$tool_ca2 !== void 0 ? _choice$delta$tool_ca2 : []),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _choiceSnapshot$messa7;
          var toolCallDelta = _step5.value;
          var toolCallSnapshot = (_choiceSnapshot$messa7 = choiceSnapshot.message.tool_calls) === null || _choiceSnapshot$messa7 === void 0 ? void 0 : _choiceSnapshot$messa7[toolCallDelta.index];
          if (!(toolCallSnapshot !== null && toolCallSnapshot !== void 0 && toolCallSnapshot.type)) {
            continue;
          }
          if ((toolCallSnapshot === null || toolCallSnapshot === void 0 ? void 0 : toolCallSnapshot.type) === 'function') {
            var _toolCallSnapshot$fun, _toolCallDelta$functi, _toolCallDelta$functi2;
            this._emit('tool_calls.function.arguments.delta', {
              name: (_toolCallSnapshot$fun = toolCallSnapshot.function) === null || _toolCallSnapshot$fun === void 0 ? void 0 : _toolCallSnapshot$fun.name,
              index: toolCallDelta.index,
              arguments: toolCallSnapshot.function.arguments,
              parsed_arguments: toolCallSnapshot.function.parsed_arguments,
              arguments_delta: (_toolCallDelta$functi = (_toolCallDelta$functi2 = toolCallDelta.function) === null || _toolCallDelta$functi2 === void 0 ? void 0 : _toolCallDelta$functi2.arguments) !== null && _toolCallDelta$functi !== void 0 ? _toolCallDelta$functi : ''
            });
          } else {
            assertNever(toolCallSnapshot === null || toolCallSnapshot === void 0 ? void 0 : toolCallSnapshot.type);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}, _ChatCompletionStream_emitToolCallDoneEvent = function _ChatCompletionStream_emitToolCallDoneEvent(choiceSnapshot, toolCallIndex) {
  var _choiceSnapshot$messa8;
  var state = __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
  if (state.done_tool_calls.has(toolCallIndex)) {
    // we've already fired the done event
    return;
  }
  var toolCallSnapshot = (_choiceSnapshot$messa8 = choiceSnapshot.message.tool_calls) === null || _choiceSnapshot$messa8 === void 0 ? void 0 : _choiceSnapshot$messa8[toolCallIndex];
  if (!toolCallSnapshot) {
    throw new Error('no tool call snapshot');
  }
  if (!toolCallSnapshot.type) {
    throw new Error('tool call snapshot missing `type`');
  }
  if (toolCallSnapshot.type === 'function') {
    var _classPrivateFieldGe;
    var inputTool = (_classPrivateFieldGe = __classPrivateFieldGet$1(this, _ChatCompletionStream_params, "f")) === null || _classPrivateFieldGe === void 0 || (_classPrivateFieldGe = _classPrivateFieldGe.tools) === null || _classPrivateFieldGe === void 0 ? void 0 : _classPrivateFieldGe.find(function (tool) {
      return tool.type === 'function' && tool.function.name === toolCallSnapshot.function.name;
    });
    this._emit('tool_calls.function.arguments.done', {
      name: toolCallSnapshot.function.name,
      index: toolCallIndex,
      arguments: toolCallSnapshot.function.arguments,
      parsed_arguments: isAutoParsableTool(inputTool) ? inputTool.$parseRaw(toolCallSnapshot.function.arguments) : inputTool !== null && inputTool !== void 0 && inputTool.function.strict ? JSON.parse(toolCallSnapshot.function.arguments) : null
    });
  } else {
    assertNever(toolCallSnapshot.type);
  }
}, _ChatCompletionStream_emitContentDoneEvents = function _ChatCompletionStream_emitContentDoneEvents(choiceSnapshot) {
  var _choiceSnapshot$logpr5, _choiceSnapshot$logpr6;
  var state = __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getChoiceEventState).call(this, choiceSnapshot);
  if (choiceSnapshot.message.content && !state.content_done) {
    state.content_done = true;
    var responseFormat = __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this);
    this._emit('content.done', {
      content: choiceSnapshot.message.content,
      parsed: responseFormat ? responseFormat.$parseRaw(choiceSnapshot.message.content) : null
    });
  }
  if (choiceSnapshot.message.refusal && !state.refusal_done) {
    state.refusal_done = true;
    this._emit('refusal.done', {
      refusal: choiceSnapshot.message.refusal
    });
  }
  if ((_choiceSnapshot$logpr5 = choiceSnapshot.logprobs) !== null && _choiceSnapshot$logpr5 !== void 0 && _choiceSnapshot$logpr5.content && !state.logprobs_content_done) {
    state.logprobs_content_done = true;
    this._emit('logprobs.content.done', {
      content: choiceSnapshot.logprobs.content
    });
  }
  if ((_choiceSnapshot$logpr6 = choiceSnapshot.logprobs) !== null && _choiceSnapshot$logpr6 !== void 0 && _choiceSnapshot$logpr6.refusal && !state.logprobs_refusal_done) {
    state.logprobs_refusal_done = true;
    this._emit('logprobs.refusal.done', {
      refusal: choiceSnapshot.logprobs.refusal
    });
  }
}, _ChatCompletionStream_endRequest = function _ChatCompletionStream_endRequest() {
  if (this.ended) {
    throw new OpenAIError("stream has ended, this shouldn't happen");
  }
  var snapshot = __classPrivateFieldGet$1(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
  if (!snapshot) {
    throw new OpenAIError("request ended without sending any chunks");
  }
  __classPrivateFieldSet$1(this, _ChatCompletionStream_currentChatCompletionSnapshot, undefined, "f");
  __classPrivateFieldSet$1(this, _ChatCompletionStream_choiceEventStates, [], "f");
  return finalizeChatCompletion(snapshot, __classPrivateFieldGet$1(this, _ChatCompletionStream_params, "f"));
}, _ChatCompletionStream_getAutoParseableResponseFormat = function _ChatCompletionStream_getAutoParseableResponseFormat() {
  var _classPrivateFieldGe2;
  var responseFormat = (_classPrivateFieldGe2 = __classPrivateFieldGet$1(this, _ChatCompletionStream_params, "f")) === null || _classPrivateFieldGe2 === void 0 ? void 0 : _classPrivateFieldGe2.response_format;
  if (isAutoParsableResponseFormat(responseFormat)) {
    return responseFormat;
  }
  return null;
}, _ChatCompletionStream_accumulateChatCompletion = function _ChatCompletionStream_accumulateChatCompletion(chunk) {
  var _a, _b, _c, _d;
  var snapshot = __classPrivateFieldGet$1(this, _ChatCompletionStream_currentChatCompletionSnapshot, "f");
  chunk.choices;
    var rest = _objectWithoutProperties(chunk, _excluded$2);
  if (!snapshot) {
    snapshot = __classPrivateFieldSet$1(this, _ChatCompletionStream_currentChatCompletionSnapshot, _objectSpread2(_objectSpread2({}, rest), {}, {
      choices: []
    }), "f");
  } else {
    Object.assign(snapshot, rest);
  }
  var _iterator6 = _createForOfIteratorHelper(chunk.choices),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _ref2 = _step6.value;
      var delta = _ref2.delta,
        finish_reason = _ref2.finish_reason,
        index = _ref2.index,
        _ref2$logprobs = _ref2.logprobs,
        logprobs = _ref2$logprobs === void 0 ? null : _ref2$logprobs,
        other = _objectWithoutProperties(_ref2, _excluded2$1);
      var choice = snapshot.choices[index];
      if (!choice) {
        choice = snapshot.choices[index] = _objectSpread2({
          finish_reason: finish_reason,
          index: index,
          message: {},
          logprobs: logprobs
        }, other);
      }
      if (logprobs) {
        if (!choice.logprobs) {
          choice.logprobs = Object.assign({}, logprobs);
        } else {
          var _content = logprobs.content,
            _refusal = logprobs.refusal,
            _rest = _objectWithoutProperties(logprobs, _excluded3);
          assertIsEmpty(_rest);
          Object.assign(choice.logprobs, _rest);
          if (_content) {
            var _a$content, _choice$logprobs$cont;
            (_a$content = (_a = choice.logprobs).content) !== null && _a$content !== void 0 ? _a$content : _a.content = [];
            (_choice$logprobs$cont = choice.logprobs.content).push.apply(_choice$logprobs$cont, _toConsumableArray(_content));
          }
          if (_refusal) {
            var _b$refusal, _choice$logprobs$refu;
            (_b$refusal = (_b = choice.logprobs).refusal) !== null && _b$refusal !== void 0 ? _b$refusal : _b.refusal = [];
            (_choice$logprobs$refu = choice.logprobs.refusal).push.apply(_choice$logprobs$refu, _toConsumableArray(_refusal));
          }
        }
      }
      if (finish_reason) {
        choice.finish_reason = finish_reason;
        if (__classPrivateFieldGet$1(this, _ChatCompletionStream_params, "f") && hasAutoParseableInput(__classPrivateFieldGet$1(this, _ChatCompletionStream_params, "f"))) {
          if (finish_reason === 'length') {
            throw new LengthFinishReasonError();
          }
          if (finish_reason === 'content_filter') {
            throw new ContentFilterFinishReasonError();
          }
        }
      }
      Object.assign(choice, other);
      if (!delta) continue; // Shouldn't happen; just in case.
      var content = delta.content,
        refusal = delta.refusal,
        function_call = delta.function_call,
        role = delta.role,
        tool_calls = delta.tool_calls,
        _rest2 = _objectWithoutProperties(delta, _excluded4);
      assertIsEmpty(_rest2);
      Object.assign(choice.message, _rest2);
      if (refusal) {
        choice.message.refusal = (choice.message.refusal || '') + refusal;
      }
      if (role) choice.message.role = role;
      if (function_call) {
        if (!choice.message.function_call) {
          choice.message.function_call = function_call;
        } else {
          if (function_call.name) choice.message.function_call.name = function_call.name;
          if (function_call.arguments) {
            var _c$arguments;
            (_c$arguments = (_c = choice.message.function_call).arguments) !== null && _c$arguments !== void 0 ? _c$arguments : _c.arguments = '';
            choice.message.function_call.arguments += function_call.arguments;
          }
        }
      }
      if (content) {
        choice.message.content = (choice.message.content || '') + content;
        if (!choice.message.refusal && __classPrivateFieldGet$1(this, _ChatCompletionStream_instances, "m", _ChatCompletionStream_getAutoParseableResponseFormat).call(this)) {
          choice.message.parsed = partialParse(choice.message.content);
        }
      }
      if (tool_calls) {
        if (!choice.message.tool_calls) choice.message.tool_calls = [];
        var _iterator7 = _createForOfIteratorHelper(tool_calls),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _d$_index, _tool_call$function, _fn$name;
            var _ref3 = _step7.value;
            var _index = _ref3.index,
              id = _ref3.id,
              type = _ref3.type,
              fn = _ref3.function,
              _rest3 = _objectWithoutProperties(_ref3, _excluded5);
            var tool_call = (_d$_index = (_d = choice.message.tool_calls)[_index]) !== null && _d$_index !== void 0 ? _d$_index : _d[_index] = {};
            Object.assign(tool_call, _rest3);
            if (id) tool_call.id = id;
            if (type) tool_call.type = type;
            if (fn) (_tool_call$function = tool_call.function) !== null && _tool_call$function !== void 0 ? _tool_call$function : tool_call.function = {
              name: (_fn$name = fn.name) !== null && _fn$name !== void 0 ? _fn$name : '',
              arguments: ''
            };
            if (fn !== null && fn !== void 0 && fn.name) tool_call.function.name = fn.name;
            if (fn !== null && fn !== void 0 && fn.arguments) {
              tool_call.function.arguments += fn.arguments;
              if (shouldParseToolCall(__classPrivateFieldGet$1(this, _ChatCompletionStream_params, "f"), tool_call)) {
                tool_call.function.parsed_arguments = partialParse(tool_call.function.arguments);
              }
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return snapshot;
}, Symbol.asyncIterator));
function finalizeChatCompletion(snapshot, params) {
  var id = snapshot.id,
    choices = snapshot.choices,
    created = snapshot.created,
    model = snapshot.model,
    system_fingerprint = snapshot.system_fingerprint,
    rest = _objectWithoutProperties(snapshot, _excluded6);
  var completion = _objectSpread2(_objectSpread2({}, rest), {}, {
    id: id,
    choices: choices.map(function (_ref4) {
      var _message$refusal3;
      var message = _ref4.message,
        finish_reason = _ref4.finish_reason,
        index = _ref4.index,
        logprobs = _ref4.logprobs,
        choiceRest = _objectWithoutProperties(_ref4, _excluded7);
      if (!finish_reason) {
        throw new OpenAIError("missing finish_reason for choice ".concat(index));
      }
      var _message$content = message.content,
        content = _message$content === void 0 ? null : _message$content,
        function_call = message.function_call,
        tool_calls = message.tool_calls,
        messageRest = _objectWithoutProperties(message, _excluded8);
      var role = message.role; // this is what we expect; in theory it could be different which would make our types a slight lie but would be fine.
      if (!role) {
        throw new OpenAIError("missing role for choice ".concat(index));
      }
      if (function_call) {
        var _message$refusal;
        var args = function_call.arguments,
          name = function_call.name;
        if (args == null) {
          throw new OpenAIError("missing function_call.arguments for choice ".concat(index));
        }
        if (!name) {
          throw new OpenAIError("missing function_call.name for choice ".concat(index));
        }
        return _objectSpread2(_objectSpread2({}, choiceRest), {}, {
          message: {
            content: content,
            function_call: {
              arguments: args,
              name: name
            },
            role: role,
            refusal: (_message$refusal = message.refusal) !== null && _message$refusal !== void 0 ? _message$refusal : null
          },
          finish_reason: finish_reason,
          index: index,
          logprobs: logprobs
        });
      }
      if (tool_calls) {
        var _message$refusal2;
        return _objectSpread2(_objectSpread2({}, choiceRest), {}, {
          index: index,
          finish_reason: finish_reason,
          logprobs: logprobs,
          message: _objectSpread2(_objectSpread2({}, messageRest), {}, {
            role: role,
            content: content,
            refusal: (_message$refusal2 = message.refusal) !== null && _message$refusal2 !== void 0 ? _message$refusal2 : null,
            tool_calls: tool_calls.map(function (tool_call, i) {
              var fn = tool_call.function,
                type = tool_call.type,
                id = tool_call.id,
                toolRest = _objectWithoutProperties(tool_call, _excluded9);
              var _ref5 = fn || {},
                args = _ref5.arguments,
                name = _ref5.name,
                fnRest = _objectWithoutProperties(_ref5, _excluded10);
              if (id == null) {
                throw new OpenAIError("missing choices[".concat(index, "].tool_calls[").concat(i, "].id\n").concat(str(snapshot)));
              }
              if (type == null) {
                throw new OpenAIError("missing choices[".concat(index, "].tool_calls[").concat(i, "].type\n").concat(str(snapshot)));
              }
              if (name == null) {
                throw new OpenAIError("missing choices[".concat(index, "].tool_calls[").concat(i, "].function.name\n").concat(str(snapshot)));
              }
              if (args == null) {
                throw new OpenAIError("missing choices[".concat(index, "].tool_calls[").concat(i, "].function.arguments\n").concat(str(snapshot)));
              }
              return _objectSpread2(_objectSpread2({}, toolRest), {}, {
                id: id,
                type: type,
                function: _objectSpread2(_objectSpread2({}, fnRest), {}, {
                  name: name,
                  arguments: args
                })
              });
            })
          })
        });
      }
      return _objectSpread2(_objectSpread2({}, choiceRest), {}, {
        message: _objectSpread2(_objectSpread2({}, messageRest), {}, {
          content: content,
          role: role,
          refusal: (_message$refusal3 = message.refusal) !== null && _message$refusal3 !== void 0 ? _message$refusal3 : null
        }),
        finish_reason: finish_reason,
        index: index,
        logprobs: logprobs
      });
    }),
    created: created,
    model: model,
    object: 'chat.completion'
  }, system_fingerprint ? {
    system_fingerprint: system_fingerprint
  } : {});
  return maybeParseChatCompletion(completion, params);
}
function str(x) {
  return JSON.stringify(x);
}
/**
 * Ensures the given argument is an empty object, useful for
 * asserting that all known properties on an object have been
 * destructured.
 */
function assertIsEmpty(obj) {
  return;
}
function assertNever(_x) {}

var ChatCompletionStreamingRunner = /*#__PURE__*/function (_ChatCompletionStream) {
  function ChatCompletionStreamingRunner() {
    _classCallCheck(this, ChatCompletionStreamingRunner);
    return _callSuper(this, ChatCompletionStreamingRunner, arguments);
  }
  _inherits(ChatCompletionStreamingRunner, _ChatCompletionStream);
  return _createClass(ChatCompletionStreamingRunner, null, [{
    key: "fromReadableStream",
    value: function fromReadableStream(stream) {
      var runner = new ChatCompletionStreamingRunner(null);
      runner._run(function () {
        return runner._fromReadableStream(stream);
      });
      return runner;
    }
    /** @deprecated - please use `runTools` instead. */
  }, {
    key: "runFunctions",
    value: function runFunctions(client, params, options) {
      var runner = new ChatCompletionStreamingRunner(null);
      var opts = _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
          'X-Stainless-Helper-Method': 'runFunctions'
        })
      });
      runner._run(function () {
        return runner._runFunctions(client, params, opts);
      });
      return runner;
    }
  }, {
    key: "runTools",
    value: function runTools(client, params, options) {
      var runner = new ChatCompletionStreamingRunner(
      // @ts-expect-error TODO these types are incompatible
      params);
      var opts = _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
          'X-Stainless-Helper-Method': 'runTools'
        })
      });
      runner._run(function () {
        return runner._runTools(client, params, opts);
      });
      return runner;
    }
  }]);
}(ChatCompletionStream);

var Completions$1 = /*#__PURE__*/function (_APIResource) {
  function Completions() {
    _classCallCheck(this, Completions);
    return _callSuper(this, Completions, arguments);
  }
  _inherits(Completions, _APIResource);
  return _createClass(Completions, [{
    key: "parse",
    value: function parse(body, options) {
      validateInputTools(body.tools);
      return this._client.chat.completions.create(body, _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
          'X-Stainless-Helper-Method': 'beta.chat.completions.parse'
        })
      }))._thenUnwrap(function (completion) {
        return parseChatCompletion(completion, body);
      });
    }
  }, {
    key: "runFunctions",
    value: function runFunctions(body, options) {
      if (body.stream) {
        return ChatCompletionStreamingRunner.runFunctions(this._client, body, options);
      }
      return ChatCompletionRunner.runFunctions(this._client, body, options);
    }
  }, {
    key: "runTools",
    value: function runTools(body, options) {
      if (body.stream) {
        return ChatCompletionStreamingRunner.runTools(this._client, body, options);
      }
      return ChatCompletionRunner.runTools(this._client, body, options);
    }
    /**
     * Creates a chat completion stream
     */
  }, {
    key: "stream",
    value: function stream(body, options) {
      return ChatCompletionStream.createChatCompletion(this._client, body, options);
    }
  }]);
}(APIResource);

var Chat = /*#__PURE__*/function (_APIResource) {
  function Chat() {
    var _this;
    _classCallCheck(this, Chat);
    _this = _callSuper(this, Chat, arguments);
    _this.completions = new Completions$1(_this._client);
    return _this;
  }
  _inherits(Chat, _APIResource);
  return _createClass(Chat);
}(APIResource);
(function (Chat) {
  Chat.Completions = Completions$1;
})(Chat || (Chat = {}));

var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _AssistantStream_instances, _AssistantStream_events, _AssistantStream_runStepSnapshots, _AssistantStream_messageSnapshots, _AssistantStream_messageSnapshot, _AssistantStream_finalRun, _AssistantStream_currentContentIndex, _AssistantStream_currentContent, _AssistantStream_currentToolCallIndex, _AssistantStream_currentToolCall, _AssistantStream_currentEvent, _AssistantStream_currentRunSnapshot, _AssistantStream_currentRunStepSnapshot, _AssistantStream_addEvent, _AssistantStream_endRequest, _AssistantStream_handleMessage, _AssistantStream_handleRunStep, _AssistantStream_handleEvent, _AssistantStream_accumulateRunStep, _AssistantStream_accumulateMessage, _AssistantStream_accumulateContent, _AssistantStream_handleRun;
var AssistantStream = /*#__PURE__*/function (_EventStream, _ref) {
  function AssistantStream() {
    var _this;
    _classCallCheck(this, AssistantStream);
    _this = _callSuper(this, AssistantStream, arguments);
    _AssistantStream_instances.add(_this);
    //Track all events in a single list for reference
    _AssistantStream_events.set(_this, []);
    //Used to accumulate deltas
    //We are accumulating many types so the value here is not strict
    _AssistantStream_runStepSnapshots.set(_this, {});
    _AssistantStream_messageSnapshots.set(_this, {});
    _AssistantStream_messageSnapshot.set(_this, void 0);
    _AssistantStream_finalRun.set(_this, void 0);
    _AssistantStream_currentContentIndex.set(_this, void 0);
    _AssistantStream_currentContent.set(_this, void 0);
    _AssistantStream_currentToolCallIndex.set(_this, void 0);
    _AssistantStream_currentToolCall.set(_this, void 0);
    //For current snapshot methods
    _AssistantStream_currentEvent.set(_this, void 0);
    _AssistantStream_currentRunSnapshot.set(_this, void 0);
    _AssistantStream_currentRunStepSnapshot.set(_this, void 0);
    return _this;
  }
  _inherits(AssistantStream, _EventStream);
  return _createClass(AssistantStream, [{
    key: _ref,
    value: function value() {
      var _this2 = this;
      var pushQueue = [];
      var readQueue = [];
      var done = false;
      //Catch all for passing along all events
      this.on('event', function (event) {
        var reader = readQueue.shift();
        if (reader) {
          reader.resolve(event);
        } else {
          pushQueue.push(event);
        }
      });
      this.on('end', function () {
        done = true;
        for (var _i = 0, _readQueue = readQueue; _i < _readQueue.length; _i++) {
          var reader = _readQueue[_i];
          reader.resolve(undefined);
        }
        readQueue.length = 0;
      });
      this.on('abort', function (err) {
        done = true;
        for (var _i2 = 0, _readQueue2 = readQueue; _i2 < _readQueue2.length; _i2++) {
          var reader = _readQueue2[_i2];
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      this.on('error', function (err) {
        done = true;
        for (var _i3 = 0, _readQueue3 = readQueue; _i3 < _readQueue3.length; _i3++) {
          var reader = _readQueue3[_i3];
          reader.reject(err);
        }
        readQueue.length = 0;
      });
      return {
        next: function () {
          var _next = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var chunk;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (pushQueue.length) {
                    _context.next = 4;
                    break;
                  }
                  if (!done) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return", {
                    value: undefined,
                    done: true
                  });
                case 3:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    return readQueue.push({
                      resolve: resolve,
                      reject: reject
                    });
                  }).then(function (chunk) {
                    return chunk ? {
                      value: chunk,
                      done: false
                    } : {
                      value: undefined,
                      done: true
                    };
                  }));
                case 4:
                  chunk = pushQueue.shift();
                  return _context.abrupt("return", {
                    value: chunk,
                    done: false
                  });
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function next() {
            return _next.apply(this, arguments);
          }
          return next;
        }(),
        return: function () {
          var _return2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _this2.abort();
                  return _context2.abrupt("return", {
                    value: undefined,
                    done: true
                  });
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function _return() {
            return _return2.apply(this, arguments);
          }
          return _return;
        }()
      };
    }
  }, {
    key: "_fromReadableStream",
    value: function () {
      var _fromReadableStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(readableStream, options) {
        var _this3 = this,
          _stream$controller$si;
        var signal, stream, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              signal = options === null || options === void 0 ? void 0 : options.signal;
              if (signal) {
                if (signal.aborted) this.controller.abort();
                signal.addEventListener('abort', function () {
                  return _this3.controller.abort();
                });
              }
              this._connected();
              stream = Stream.fromReadableStream(readableStream, this.controller);
              _iteratorAbruptCompletion = false;
              _didIteratorError = false;
              _context3.prev = 6;
              _iterator = _asyncIterator(stream);
            case 8:
              _context3.next = 10;
              return _iterator.next();
            case 10:
              if (!(_iteratorAbruptCompletion = !(_step = _context3.sent).done)) {
                _context3.next = 16;
                break;
              }
              event = _step.value;
              __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
            case 13:
              _iteratorAbruptCompletion = false;
              _context3.next = 8;
              break;
            case 16:
              _context3.next = 22;
              break;
            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](6);
              _didIteratorError = true;
              _iteratorError = _context3.t0;
            case 22:
              _context3.prev = 22;
              _context3.prev = 23;
              if (!(_iteratorAbruptCompletion && _iterator.return != null)) {
                _context3.next = 27;
                break;
              }
              _context3.next = 27;
              return _iterator.return();
            case 27:
              _context3.prev = 27;
              if (!_didIteratorError) {
                _context3.next = 30;
                break;
              }
              throw _iteratorError;
            case 30:
              return _context3.finish(27);
            case 31:
              return _context3.finish(22);
            case 32:
              if (!((_stream$controller$si = stream.controller.signal) !== null && _stream$controller$si !== void 0 && _stream$controller$si.aborted)) {
                _context3.next = 34;
                break;
              }
              throw new APIUserAbortError();
            case 34:
              return _context3.abrupt("return", this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this)));
            case 35:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[6, 18, 22, 32], [23,, 27, 31]]);
      }));
      function _fromReadableStream(_x, _x2) {
        return _fromReadableStream2.apply(this, arguments);
      }
      return _fromReadableStream;
    }()
  }, {
    key: "toReadableStream",
    value: function toReadableStream() {
      var stream = new Stream(this[Symbol.asyncIterator].bind(this), this.controller);
      return stream.toReadableStream();
    }
  }, {
    key: "_createToolAssistantStream",
    value: function () {
      var _createToolAssistantStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(run, threadId, runId, params, options) {
        var _this4 = this,
          _stream$controller$si2;
        var signal, body, stream, _iteratorAbruptCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, event;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              signal = options === null || options === void 0 ? void 0 : options.signal;
              if (signal) {
                if (signal.aborted) this.controller.abort();
                signal.addEventListener('abort', function () {
                  return _this4.controller.abort();
                });
              }
              body = _objectSpread2(_objectSpread2({}, params), {}, {
                stream: true
              });
              _context4.next = 5;
              return run.submitToolOutputs(threadId, runId, body, _objectSpread2(_objectSpread2({}, options), {}, {
                signal: this.controller.signal
              }));
            case 5:
              stream = _context4.sent;
              this._connected();
              _iteratorAbruptCompletion2 = false;
              _didIteratorError2 = false;
              _context4.prev = 9;
              _iterator2 = _asyncIterator(stream);
            case 11:
              _context4.next = 13;
              return _iterator2.next();
            case 13:
              if (!(_iteratorAbruptCompletion2 = !(_step2 = _context4.sent).done)) {
                _context4.next = 19;
                break;
              }
              event = _step2.value;
              __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
            case 16:
              _iteratorAbruptCompletion2 = false;
              _context4.next = 11;
              break;
            case 19:
              _context4.next = 25;
              break;
            case 21:
              _context4.prev = 21;
              _context4.t0 = _context4["catch"](9);
              _didIteratorError2 = true;
              _iteratorError2 = _context4.t0;
            case 25:
              _context4.prev = 25;
              _context4.prev = 26;
              if (!(_iteratorAbruptCompletion2 && _iterator2.return != null)) {
                _context4.next = 30;
                break;
              }
              _context4.next = 30;
              return _iterator2.return();
            case 30:
              _context4.prev = 30;
              if (!_didIteratorError2) {
                _context4.next = 33;
                break;
              }
              throw _iteratorError2;
            case 33:
              return _context4.finish(30);
            case 34:
              return _context4.finish(25);
            case 35:
              if (!((_stream$controller$si2 = stream.controller.signal) !== null && _stream$controller$si2 !== void 0 && _stream$controller$si2.aborted)) {
                _context4.next = 37;
                break;
              }
              throw new APIUserAbortError();
            case 37:
              return _context4.abrupt("return", this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this)));
            case 38:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[9, 21, 25, 35], [26,, 30, 34]]);
      }));
      function _createToolAssistantStream(_x3, _x4, _x5, _x6, _x7) {
        return _createToolAssistantStream2.apply(this, arguments);
      }
      return _createToolAssistantStream;
    }()
  }, {
    key: "currentEvent",
    value: function currentEvent() {
      return __classPrivateFieldGet(this, _AssistantStream_currentEvent, "f");
    }
  }, {
    key: "currentRun",
    value: function currentRun() {
      return __classPrivateFieldGet(this, _AssistantStream_currentRunSnapshot, "f");
    }
  }, {
    key: "currentMessageSnapshot",
    value: function currentMessageSnapshot() {
      return __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f");
    }
  }, {
    key: "currentRunStepSnapshot",
    value: function currentRunStepSnapshot() {
      return __classPrivateFieldGet(this, _AssistantStream_currentRunStepSnapshot, "f");
    }
  }, {
    key: "finalRunSteps",
    value: function () {
      var _finalRunSteps = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.done();
            case 2:
              return _context5.abrupt("return", Object.values(__classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function finalRunSteps() {
        return _finalRunSteps.apply(this, arguments);
      }
      return finalRunSteps;
    }()
  }, {
    key: "finalMessages",
    value: function () {
      var _finalMessages = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.done();
            case 2:
              return _context6.abrupt("return", Object.values(__classPrivateFieldGet(this, _AssistantStream_messageSnapshots, "f")));
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function finalMessages() {
        return _finalMessages.apply(this, arguments);
      }
      return finalMessages;
    }()
  }, {
    key: "finalRun",
    value: function () {
      var _finalRun = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.done();
            case 2:
              if (__classPrivateFieldGet(this, _AssistantStream_finalRun, "f")) {
                _context7.next = 4;
                break;
              }
              throw Error('Final run was not received.');
            case 4:
              return _context7.abrupt("return", __classPrivateFieldGet(this, _AssistantStream_finalRun, "f"));
            case 5:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function finalRun() {
        return _finalRun.apply(this, arguments);
      }
      return finalRun;
    }()
  }, {
    key: "_createThreadAssistantStream",
    value: function () {
      var _createThreadAssistantStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(thread, params, options) {
        var _this5 = this,
          _stream$controller$si3;
        var signal, body, stream, _iteratorAbruptCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, event;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              signal = options === null || options === void 0 ? void 0 : options.signal;
              if (signal) {
                if (signal.aborted) this.controller.abort();
                signal.addEventListener('abort', function () {
                  return _this5.controller.abort();
                });
              }
              body = _objectSpread2(_objectSpread2({}, params), {}, {
                stream: true
              });
              _context8.next = 5;
              return thread.createAndRun(body, _objectSpread2(_objectSpread2({}, options), {}, {
                signal: this.controller.signal
              }));
            case 5:
              stream = _context8.sent;
              this._connected();
              _iteratorAbruptCompletion3 = false;
              _didIteratorError3 = false;
              _context8.prev = 9;
              _iterator3 = _asyncIterator(stream);
            case 11:
              _context8.next = 13;
              return _iterator3.next();
            case 13:
              if (!(_iteratorAbruptCompletion3 = !(_step3 = _context8.sent).done)) {
                _context8.next = 19;
                break;
              }
              event = _step3.value;
              __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
            case 16:
              _iteratorAbruptCompletion3 = false;
              _context8.next = 11;
              break;
            case 19:
              _context8.next = 25;
              break;
            case 21:
              _context8.prev = 21;
              _context8.t0 = _context8["catch"](9);
              _didIteratorError3 = true;
              _iteratorError3 = _context8.t0;
            case 25:
              _context8.prev = 25;
              _context8.prev = 26;
              if (!(_iteratorAbruptCompletion3 && _iterator3.return != null)) {
                _context8.next = 30;
                break;
              }
              _context8.next = 30;
              return _iterator3.return();
            case 30:
              _context8.prev = 30;
              if (!_didIteratorError3) {
                _context8.next = 33;
                break;
              }
              throw _iteratorError3;
            case 33:
              return _context8.finish(30);
            case 34:
              return _context8.finish(25);
            case 35:
              if (!((_stream$controller$si3 = stream.controller.signal) !== null && _stream$controller$si3 !== void 0 && _stream$controller$si3.aborted)) {
                _context8.next = 37;
                break;
              }
              throw new APIUserAbortError();
            case 37:
              return _context8.abrupt("return", this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this)));
            case 38:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[9, 21, 25, 35], [26,, 30, 34]]);
      }));
      function _createThreadAssistantStream(_x8, _x9, _x10) {
        return _createThreadAssistantStream2.apply(this, arguments);
      }
      return _createThreadAssistantStream;
    }()
  }, {
    key: "_createAssistantStream",
    value: function () {
      var _createAssistantStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(run, threadId, params, options) {
        var _this6 = this,
          _stream$controller$si4;
        var signal, body, stream, _iteratorAbruptCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, event;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              signal = options === null || options === void 0 ? void 0 : options.signal;
              if (signal) {
                if (signal.aborted) this.controller.abort();
                signal.addEventListener('abort', function () {
                  return _this6.controller.abort();
                });
              }
              body = _objectSpread2(_objectSpread2({}, params), {}, {
                stream: true
              });
              _context9.next = 5;
              return run.create(threadId, body, _objectSpread2(_objectSpread2({}, options), {}, {
                signal: this.controller.signal
              }));
            case 5:
              stream = _context9.sent;
              this._connected();
              _iteratorAbruptCompletion4 = false;
              _didIteratorError4 = false;
              _context9.prev = 9;
              _iterator4 = _asyncIterator(stream);
            case 11:
              _context9.next = 13;
              return _iterator4.next();
            case 13:
              if (!(_iteratorAbruptCompletion4 = !(_step4 = _context9.sent).done)) {
                _context9.next = 19;
                break;
              }
              event = _step4.value;
              __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_addEvent).call(this, event);
            case 16:
              _iteratorAbruptCompletion4 = false;
              _context9.next = 11;
              break;
            case 19:
              _context9.next = 25;
              break;
            case 21:
              _context9.prev = 21;
              _context9.t0 = _context9["catch"](9);
              _didIteratorError4 = true;
              _iteratorError4 = _context9.t0;
            case 25:
              _context9.prev = 25;
              _context9.prev = 26;
              if (!(_iteratorAbruptCompletion4 && _iterator4.return != null)) {
                _context9.next = 30;
                break;
              }
              _context9.next = 30;
              return _iterator4.return();
            case 30:
              _context9.prev = 30;
              if (!_didIteratorError4) {
                _context9.next = 33;
                break;
              }
              throw _iteratorError4;
            case 33:
              return _context9.finish(30);
            case 34:
              return _context9.finish(25);
            case 35:
              if (!((_stream$controller$si4 = stream.controller.signal) !== null && _stream$controller$si4 !== void 0 && _stream$controller$si4.aborted)) {
                _context9.next = 37;
                break;
              }
              throw new APIUserAbortError();
            case 37:
              return _context9.abrupt("return", this._addRun(__classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_endRequest).call(this)));
            case 38:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[9, 21, 25, 35], [26,, 30, 34]]);
      }));
      function _createAssistantStream(_x11, _x12, _x13, _x14) {
        return _createAssistantStream2.apply(this, arguments);
      }
      return _createAssistantStream;
    }()
  }, {
    key: "_addRun",
    value: function _addRun(run) {
      return run;
    }
  }, {
    key: "_threadAssistantStream",
    value: function () {
      var _threadAssistantStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(params, thread, options) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this._createThreadAssistantStream(thread, params, options);
            case 2:
              return _context10.abrupt("return", _context10.sent);
            case 3:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function _threadAssistantStream(_x15, _x16, _x17) {
        return _threadAssistantStream2.apply(this, arguments);
      }
      return _threadAssistantStream;
    }()
  }, {
    key: "_runAssistantStream",
    value: function () {
      var _runAssistantStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(threadId, runs, params, options) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this._createAssistantStream(runs, threadId, params, options);
            case 2:
              return _context11.abrupt("return", _context11.sent);
            case 3:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function _runAssistantStream(_x18, _x19, _x20, _x21) {
        return _runAssistantStream2.apply(this, arguments);
      }
      return _runAssistantStream;
    }()
  }, {
    key: "_runToolAssistantStream",
    value: function () {
      var _runToolAssistantStream2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(threadId, runId, runs, params, options) {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this._createToolAssistantStream(runs, threadId, runId, params, options);
            case 2:
              return _context12.abrupt("return", _context12.sent);
            case 3:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function _runToolAssistantStream(_x22, _x23, _x24, _x25, _x26) {
        return _runToolAssistantStream2.apply(this, arguments);
      }
      return _runToolAssistantStream;
    }()
  }], [{
    key: "fromReadableStream",
    value: function fromReadableStream(stream) {
      var runner = new AssistantStream();
      runner._run(function () {
        return runner._fromReadableStream(stream);
      });
      return runner;
    }
  }, {
    key: "createToolAssistantStream",
    value: function createToolAssistantStream(threadId, runId, runs, params, options) {
      var runner = new AssistantStream();
      runner._run(function () {
        return runner._runToolAssistantStream(threadId, runId, runs, params, _objectSpread2(_objectSpread2({}, options), {}, {
          headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
            'X-Stainless-Helper-Method': 'stream'
          })
        }));
      });
      return runner;
    }
  }, {
    key: "createThreadAssistantStream",
    value: function createThreadAssistantStream(params, thread, options) {
      var runner = new AssistantStream();
      runner._run(function () {
        return runner._threadAssistantStream(params, thread, _objectSpread2(_objectSpread2({}, options), {}, {
          headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
            'X-Stainless-Helper-Method': 'stream'
          })
        }));
      });
      return runner;
    }
  }, {
    key: "createAssistantStream",
    value: function createAssistantStream(threadId, runs, params, options) {
      var runner = new AssistantStream();
      runner._run(function () {
        return runner._runAssistantStream(threadId, runs, params, _objectSpread2(_objectSpread2({}, options), {}, {
          headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
            'X-Stainless-Helper-Method': 'stream'
          })
        }));
      });
      return runner;
    }
  }, {
    key: "accumulateDelta",
    value: function accumulateDelta(acc, delta) {
      for (var _i4 = 0, _Object$entries = Object.entries(delta); _i4 < _Object$entries.length; _i4++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
          key = _Object$entries$_i[0],
          deltaValue = _Object$entries$_i[1];
        if (!acc.hasOwnProperty(key)) {
          acc[key] = deltaValue;
          continue;
        }
        var accValue = acc[key];
        if (accValue === null || accValue === undefined) {
          acc[key] = deltaValue;
          continue;
        }
        // We don't accumulate these special properties
        if (key === 'index' || key === 'type') {
          acc[key] = deltaValue;
          continue;
        }
        // Type-specific accumulation logic
        if (typeof accValue === 'string' && typeof deltaValue === 'string') {
          accValue += deltaValue;
        } else if (typeof accValue === 'number' && typeof deltaValue === 'number') {
          accValue += deltaValue;
        } else if (isObj(accValue) && isObj(deltaValue)) {
          accValue = this.accumulateDelta(accValue, deltaValue);
        } else if (Array.isArray(accValue) && Array.isArray(deltaValue)) {
          if (accValue.every(function (x) {
            return typeof x === 'string' || typeof x === 'number';
          })) {
            var _accValue;
            (_accValue = accValue).push.apply(_accValue, _toConsumableArray(deltaValue)); // Use spread syntax for efficient addition
            continue;
          }
          var _iterator5 = _createForOfIteratorHelper(deltaValue),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var deltaEntry = _step5.value;
              if (!isObj(deltaEntry)) {
                throw new Error("Expected array delta entry to be an object but got: ".concat(deltaEntry));
              }
              var index = deltaEntry['index'];
              if (index == null) {
                console.error(deltaEntry);
                throw new Error('Expected array delta entry to have an `index` property');
              }
              if (typeof index !== 'number') {
                throw new Error("Expected array delta entry `index` property to be a number but got ".concat(index));
              }
              var accEntry = accValue[index];
              if (accEntry == null) {
                accValue.push(deltaEntry);
              } else {
                accValue[index] = this.accumulateDelta(accEntry, deltaEntry);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          continue;
        } else {
          throw Error("Unhandled record type: ".concat(key, ", deltaValue: ").concat(deltaValue, ", accValue: ").concat(accValue));
        }
        acc[key] = accValue;
      }
      return acc;
    }
  }]);
}(EventStream, (_AssistantStream_events = new WeakMap(), _AssistantStream_runStepSnapshots = new WeakMap(), _AssistantStream_messageSnapshots = new WeakMap(), _AssistantStream_messageSnapshot = new WeakMap(), _AssistantStream_finalRun = new WeakMap(), _AssistantStream_currentContentIndex = new WeakMap(), _AssistantStream_currentContent = new WeakMap(), _AssistantStream_currentToolCallIndex = new WeakMap(), _AssistantStream_currentToolCall = new WeakMap(), _AssistantStream_currentEvent = new WeakMap(), _AssistantStream_currentRunSnapshot = new WeakMap(), _AssistantStream_currentRunStepSnapshot = new WeakMap(), _AssistantStream_instances = new WeakSet(), Symbol.asyncIterator));
_AssistantStream_addEvent = function _AssistantStream_addEvent(event) {
  if (this.ended) return;
  __classPrivateFieldSet(this, _AssistantStream_currentEvent, event, "f");
  __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleEvent).call(this, event);
  switch (event.event) {
    case 'thread.created':
      //No action on this event.
      break;
    case 'thread.run.created':
    case 'thread.run.queued':
    case 'thread.run.in_progress':
    case 'thread.run.requires_action':
    case 'thread.run.completed':
    case 'thread.run.failed':
    case 'thread.run.cancelling':
    case 'thread.run.cancelled':
    case 'thread.run.expired':
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleRun).call(this, event);
      break;
    case 'thread.run.step.created':
    case 'thread.run.step.in_progress':
    case 'thread.run.step.delta':
    case 'thread.run.step.completed':
    case 'thread.run.step.failed':
    case 'thread.run.step.cancelled':
    case 'thread.run.step.expired':
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleRunStep).call(this, event);
      break;
    case 'thread.message.created':
    case 'thread.message.in_progress':
    case 'thread.message.delta':
    case 'thread.message.completed':
    case 'thread.message.incomplete':
      __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_handleMessage).call(this, event);
      break;
    case 'error':
      //This is included for completeness, but errors are processed in the SSE event processing so this should not occur
      throw new Error('Encountered an error event in event processing - errors should be processed earlier');
  }
}, _AssistantStream_endRequest = function _AssistantStream_endRequest() {
  if (this.ended) {
    throw new OpenAIError("stream has ended, this shouldn't happen");
  }
  if (!__classPrivateFieldGet(this, _AssistantStream_finalRun, "f")) throw Error('Final run has not been received');
  return __classPrivateFieldGet(this, _AssistantStream_finalRun, "f");
}, _AssistantStream_handleMessage = function _AssistantStream_handleMessage(event) {
  var _classPrivateFieldGe = __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_accumulateMessage).call(this, event, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f")),
    _classPrivateFieldGe2 = _slicedToArray(_classPrivateFieldGe, 2),
    accumulatedMessage = _classPrivateFieldGe2[0],
    newContent = _classPrivateFieldGe2[1];
  __classPrivateFieldSet(this, _AssistantStream_messageSnapshot, accumulatedMessage, "f");
  __classPrivateFieldGet(this, _AssistantStream_messageSnapshots, "f")[accumulatedMessage.id] = accumulatedMessage;
  var _iterator6 = _createForOfIteratorHelper(newContent),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _content = _step6.value;
      var snapshotContent = accumulatedMessage.content[_content.index];
      if ((snapshotContent === null || snapshotContent === void 0 ? void 0 : snapshotContent.type) == 'text') {
        this._emit('textCreated', snapshotContent.text);
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  switch (event.event) {
    case 'thread.message.created':
      this._emit('messageCreated', event.data);
      break;
    case 'thread.message.in_progress':
      break;
    case 'thread.message.delta':
      this._emit('messageDelta', event.data.delta, accumulatedMessage);
      if (event.data.delta.content) {
        var _iterator7 = _createForOfIteratorHelper(event.data.delta.content),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var content = _step7.value;
            //If it is text delta, emit a text delta event
            if (content.type == 'text' && content.text) {
              var textDelta = content.text;
              var snapshot = accumulatedMessage.content[content.index];
              if (snapshot && snapshot.type == 'text') {
                this._emit('textDelta', textDelta, snapshot.text);
              } else {
                throw Error('The snapshot associated with this text delta is not text or missing');
              }
            }
            if (content.index != __classPrivateFieldGet(this, _AssistantStream_currentContentIndex, "f")) {
              //See if we have in progress content
              if (__classPrivateFieldGet(this, _AssistantStream_currentContent, "f")) {
                switch (__classPrivateFieldGet(this, _AssistantStream_currentContent, "f").type) {
                  case 'text':
                    this._emit('textDone', __classPrivateFieldGet(this, _AssistantStream_currentContent, "f").text, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
                    break;
                  case 'image_file':
                    this._emit('imageFileDone', __classPrivateFieldGet(this, _AssistantStream_currentContent, "f").image_file, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
                    break;
                }
              }
              __classPrivateFieldSet(this, _AssistantStream_currentContentIndex, content.index, "f");
            }
            __classPrivateFieldSet(this, _AssistantStream_currentContent, accumulatedMessage.content[content.index], "f");
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
      break;
    case 'thread.message.completed':
    case 'thread.message.incomplete':
      //We emit the latest content we were working on on completion (including incomplete)
      if (__classPrivateFieldGet(this, _AssistantStream_currentContentIndex, "f") !== undefined) {
        var currentContent = event.data.content[__classPrivateFieldGet(this, _AssistantStream_currentContentIndex, "f")];
        if (currentContent) {
          switch (currentContent.type) {
            case 'image_file':
              this._emit('imageFileDone', currentContent.image_file, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
              break;
            case 'text':
              this._emit('textDone', currentContent.text, __classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f"));
              break;
          }
        }
      }
      if (__classPrivateFieldGet(this, _AssistantStream_messageSnapshot, "f")) {
        this._emit('messageDone', event.data);
      }
      __classPrivateFieldSet(this, _AssistantStream_messageSnapshot, undefined, "f");
  }
}, _AssistantStream_handleRunStep = function _AssistantStream_handleRunStep(event) {
  var accumulatedRunStep = __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_accumulateRunStep).call(this, event);
  __classPrivateFieldSet(this, _AssistantStream_currentRunStepSnapshot, accumulatedRunStep, "f");
  switch (event.event) {
    case 'thread.run.step.created':
      this._emit('runStepCreated', event.data);
      break;
    case 'thread.run.step.delta':
      var delta = event.data.delta;
      if (delta.step_details && delta.step_details.type == 'tool_calls' && delta.step_details.tool_calls && accumulatedRunStep.step_details.type == 'tool_calls') {
        var _iterator8 = _createForOfIteratorHelper(delta.step_details.tool_calls),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var toolCall = _step8.value;
            if (toolCall.index == __classPrivateFieldGet(this, _AssistantStream_currentToolCallIndex, "f")) {
              this._emit('toolCallDelta', toolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index]);
            } else {
              if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f")) {
                this._emit('toolCallDone', __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
              }
              __classPrivateFieldSet(this, _AssistantStream_currentToolCallIndex, toolCall.index, "f");
              __classPrivateFieldSet(this, _AssistantStream_currentToolCall, accumulatedRunStep.step_details.tool_calls[toolCall.index], "f");
              if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f")) this._emit('toolCallCreated', __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      this._emit('runStepDelta', event.data.delta, accumulatedRunStep);
      break;
    case 'thread.run.step.completed':
    case 'thread.run.step.failed':
    case 'thread.run.step.cancelled':
    case 'thread.run.step.expired':
      __classPrivateFieldSet(this, _AssistantStream_currentRunStepSnapshot, undefined, "f");
      var details = event.data.step_details;
      if (details.type == 'tool_calls') {
        if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f")) {
          this._emit('toolCallDone', __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
          __classPrivateFieldSet(this, _AssistantStream_currentToolCall, undefined, "f");
        }
      }
      this._emit('runStepDone', event.data, accumulatedRunStep);
      break;
  }
}, _AssistantStream_handleEvent = function _AssistantStream_handleEvent(event) {
  __classPrivateFieldGet(this, _AssistantStream_events, "f").push(event);
  this._emit('event', event);
}, _AssistantStream_accumulateRunStep = function _AssistantStream_accumulateRunStep(event) {
  switch (event.event) {
    case 'thread.run.step.created':
      __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      return event.data;
    case 'thread.run.step.delta':
      var snapshot = __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
      if (!snapshot) {
        throw Error('Received a RunStepDelta before creation of a snapshot');
      }
      var data = event.data;
      if (data.delta) {
        var accumulated = AssistantStream.accumulateDelta(snapshot, data.delta);
        __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = accumulated;
      }
      return __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
    case 'thread.run.step.completed':
    case 'thread.run.step.failed':
    case 'thread.run.step.cancelled':
    case 'thread.run.step.expired':
    case 'thread.run.step.in_progress':
      __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id] = event.data;
      break;
  }
  if (__classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id]) return __classPrivateFieldGet(this, _AssistantStream_runStepSnapshots, "f")[event.data.id];
  throw new Error('No snapshot available');
}, _AssistantStream_accumulateMessage = function _AssistantStream_accumulateMessage(event, snapshot) {
  var newContent = [];
  switch (event.event) {
    case 'thread.message.created':
      //On creation the snapshot is just the initial message
      return [event.data, newContent];
    case 'thread.message.delta':
      if (!snapshot) {
        throw Error('Received a delta with no existing snapshot (there should be one from message creation)');
      }
      var data = event.data;
      //If this delta does not have content, nothing to process
      if (data.delta.content) {
        var _iterator9 = _createForOfIteratorHelper(data.delta.content),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var contentElement = _step9.value;
            if (contentElement.index in snapshot.content) {
              var currentContent = snapshot.content[contentElement.index];
              snapshot.content[contentElement.index] = __classPrivateFieldGet(this, _AssistantStream_instances, "m", _AssistantStream_accumulateContent).call(this, contentElement, currentContent);
            } else {
              snapshot.content[contentElement.index] = contentElement;
              // This is a new element
              newContent.push(contentElement);
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
      return [snapshot, newContent];
    case 'thread.message.in_progress':
    case 'thread.message.completed':
    case 'thread.message.incomplete':
      //No changes on other thread events
      if (snapshot) {
        return [snapshot, newContent];
      } else {
        throw Error('Received thread message event with no existing snapshot');
      }
  }
  throw Error('Tried to accumulate a non-message event');
}, _AssistantStream_accumulateContent = function _AssistantStream_accumulateContent(contentElement, currentContent) {
  return AssistantStream.accumulateDelta(currentContent, contentElement);
}, _AssistantStream_handleRun = function _AssistantStream_handleRun(event) {
  __classPrivateFieldSet(this, _AssistantStream_currentRunSnapshot, event.data, "f");
  switch (event.event) {
    case 'thread.run.created':
      break;
    case 'thread.run.queued':
      break;
    case 'thread.run.in_progress':
      break;
    case 'thread.run.requires_action':
    case 'thread.run.cancelled':
    case 'thread.run.failed':
    case 'thread.run.completed':
    case 'thread.run.expired':
      __classPrivateFieldSet(this, _AssistantStream_finalRun, event.data, "f");
      if (__classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f")) {
        this._emit('toolCallDone', __classPrivateFieldGet(this, _AssistantStream_currentToolCall, "f"));
        __classPrivateFieldSet(this, _AssistantStream_currentToolCall, undefined, "f");
      }
      break;
  }
};

var Messages = /*#__PURE__*/function (_APIResource) {
  function Messages() {
    _classCallCheck(this, Messages);
    return _callSuper(this, Messages, arguments);
  }
  _inherits(Messages, _APIResource);
  return _createClass(Messages, [{
    key: "create",
    value:
    /**
     * Create a message.
     */
    function create(threadId, body, options) {
      return this._client.post("/threads/".concat(threadId, "/messages"), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Retrieve a message.
     */
  }, {
    key: "retrieve",
    value: function retrieve(threadId, messageId, options) {
      return this._client.get("/threads/".concat(threadId, "/messages/").concat(messageId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Modifies a message.
     */
  }, {
    key: "update",
    value: function update(threadId, messageId, body, options) {
      return this._client.post("/threads/".concat(threadId, "/messages/").concat(messageId), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }, {
    key: "list",
    value: function list(threadId) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      if (isRequestOptions(query)) {
        return this.list(threadId, {}, query);
      }
      return this._client.getAPIList("/threads/".concat(threadId, "/messages"), MessagesPage, _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Deletes a message.
     */
  }, {
    key: "del",
    value: function del(threadId, messageId, options) {
      return this._client.delete("/threads/".concat(threadId, "/messages/").concat(messageId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }]);
}(APIResource);
var MessagesPage = /*#__PURE__*/function (_CursorPage) {
  function MessagesPage() {
    _classCallCheck(this, MessagesPage);
    return _callSuper(this, MessagesPage, arguments);
  }
  _inherits(MessagesPage, _CursorPage);
  return _createClass(MessagesPage);
}(CursorPage);
Messages.MessagesPage = MessagesPage;

var Steps = /*#__PURE__*/function (_APIResource) {
  function Steps() {
    _classCallCheck(this, Steps);
    return _callSuper(this, Steps, arguments);
  }
  _inherits(Steps, _APIResource);
  return _createClass(Steps, [{
    key: "retrieve",
    value: function retrieve(threadId, runId, stepId) {
      var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var options = arguments.length > 4 ? arguments[4] : undefined;
      if (isRequestOptions(query)) {
        return this.retrieve(threadId, runId, stepId, {}, query);
      }
      return this._client.get("/threads/".concat(threadId, "/runs/").concat(runId, "/steps/").concat(stepId), _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }, {
    key: "list",
    value: function list(threadId, runId) {
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      if (isRequestOptions(query)) {
        return this.list(threadId, runId, {}, query);
      }
      return this._client.getAPIList("/threads/".concat(threadId, "/runs/").concat(runId, "/steps"), RunStepsPage, _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }]);
}(APIResource);
var RunStepsPage = /*#__PURE__*/function (_CursorPage) {
  function RunStepsPage() {
    _classCallCheck(this, RunStepsPage);
    return _callSuper(this, RunStepsPage, arguments);
  }
  _inherits(RunStepsPage, _CursorPage);
  return _createClass(RunStepsPage);
}(CursorPage);
Steps.RunStepsPage = RunStepsPage;

var _excluded$1 = ["include"];
var Runs = /*#__PURE__*/function (_APIResource) {
  function Runs() {
    var _this;
    _classCallCheck(this, Runs);
    _this = _callSuper(this, Runs, arguments);
    _this.steps = new Steps(_this._client);
    return _this;
  }
  _inherits(Runs, _APIResource);
  return _createClass(Runs, [{
    key: "create",
    value: function create(threadId, params, options) {
      var _params$stream;
      var include = params.include,
        body = _objectWithoutProperties(params, _excluded$1);
      return this._client.post("/threads/".concat(threadId, "/runs"), _objectSpread2(_objectSpread2({
        query: {
          include: include
        },
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers),
        stream: (_params$stream = params.stream) !== null && _params$stream !== void 0 ? _params$stream : false
      }));
    }
    /**
     * Retrieves a run.
     */
  }, {
    key: "retrieve",
    value: function retrieve(threadId, runId, options) {
      return this._client.get("/threads/".concat(threadId, "/runs/").concat(runId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Modifies a run.
     */
  }, {
    key: "update",
    value: function update(threadId, runId, body, options) {
      return this._client.post("/threads/".concat(threadId, "/runs/").concat(runId), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }, {
    key: "list",
    value: function list(threadId) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      if (isRequestOptions(query)) {
        return this.list(threadId, {}, query);
      }
      return this._client.getAPIList("/threads/".concat(threadId, "/runs"), RunsPage, _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Cancels a run that is `in_progress`.
     */
  }, {
    key: "cancel",
    value: function cancel(threadId, runId, options) {
      return this._client.post("/threads/".concat(threadId, "/runs/").concat(runId, "/cancel"), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * A helper to create a run an poll for a terminal state. More information on Run
     * lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */
  }, {
    key: "createAndPoll",
    value: (function () {
      var _createAndPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(threadId, body, options) {
        var run;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.create(threadId, body, options);
            case 2:
              run = _context.sent;
              _context.next = 5;
              return this.poll(threadId, run.id, options);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createAndPoll(_x, _x2, _x3) {
        return _createAndPoll.apply(this, arguments);
      }
      return createAndPoll;
    }()
    /**
     * Create a Run stream
     *
     * @deprecated use `stream` instead
     */
    )
  }, {
    key: "createAndStream",
    value: function createAndStream(threadId, body, options) {
      return AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
    }
    /**
     * A helper to poll a run status until it reaches a terminal state. More
     * information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */
  }, {
    key: "poll",
    value: (function () {
      var _poll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(threadId, runId, options) {
        var headers, _yield$this$retrieve$, run, response, sleepInterval, headerInterval, headerIntervalMs;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              headers = _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
                'X-Stainless-Poll-Helper': 'true'
              });
              if (options !== null && options !== void 0 && options.pollIntervalMs) {
                headers['X-Stainless-Custom-Poll-Interval'] = options.pollIntervalMs.toString();
              }
            case 2:
              _context2.next = 5;
              return this.retrieve(threadId, runId, _objectSpread2(_objectSpread2({}, options), {}, {
                headers: _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), headers)
              })).withResponse();
            case 5:
              _yield$this$retrieve$ = _context2.sent;
              run = _yield$this$retrieve$.data;
              response = _yield$this$retrieve$.response;
              _context2.t0 = run.status;
              _context2.next = _context2.t0 === 'queued' ? 11 : _context2.t0 === 'in_progress' ? 11 : _context2.t0 === 'cancelling' ? 11 : _context2.t0 === 'requires_action' ? 16 : _context2.t0 === 'incomplete' ? 16 : _context2.t0 === 'cancelled' ? 16 : _context2.t0 === 'completed' ? 16 : _context2.t0 === 'failed' ? 16 : _context2.t0 === 'expired' ? 16 : 17;
              break;
            case 11:
              sleepInterval = 5000;
              if (options !== null && options !== void 0 && options.pollIntervalMs) {
                sleepInterval = options.pollIntervalMs;
              } else {
                headerInterval = response.headers.get('openai-poll-after-ms');
                if (headerInterval) {
                  headerIntervalMs = parseInt(headerInterval);
                  if (!isNaN(headerIntervalMs)) {
                    sleepInterval = headerIntervalMs;
                  }
                }
              }
              _context2.next = 15;
              return sleep(sleepInterval);
            case 15:
              return _context2.abrupt("break", 17);
            case 16:
              return _context2.abrupt("return", run);
            case 17:
              _context2.next = 2;
              break;
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function poll(_x4, _x5, _x6) {
        return _poll.apply(this, arguments);
      }
      return poll;
    }()
    /**
     * Create a Run stream
     */
    )
  }, {
    key: "stream",
    value: function stream(threadId, body, options) {
      return AssistantStream.createAssistantStream(threadId, this._client.beta.threads.runs, body, options);
    }
  }, {
    key: "submitToolOutputs",
    value: function submitToolOutputs(threadId, runId, body, options) {
      var _body$stream;
      return this._client.post("/threads/".concat(threadId, "/runs/").concat(runId, "/submit_tool_outputs"), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers),
        stream: (_body$stream = body.stream) !== null && _body$stream !== void 0 ? _body$stream : false
      }));
    }
    /**
     * A helper to submit a tool output to a run and poll for a terminal run state.
     * More information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */
  }, {
    key: "submitToolOutputsAndPoll",
    value: (function () {
      var _submitToolOutputsAndPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(threadId, runId, body, options) {
        var run;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.submitToolOutputs(threadId, runId, body, options);
            case 2:
              run = _context3.sent;
              _context3.next = 5;
              return this.poll(threadId, run.id, options);
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function submitToolOutputsAndPoll(_x7, _x8, _x9, _x10) {
        return _submitToolOutputsAndPoll.apply(this, arguments);
      }
      return submitToolOutputsAndPoll;
    }()
    /**
     * Submit the tool outputs from a previous run and stream the run to a terminal
     * state. More information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */
    )
  }, {
    key: "submitToolOutputsStream",
    value: function submitToolOutputsStream(threadId, runId, body, options) {
      return AssistantStream.createToolAssistantStream(threadId, runId, this._client.beta.threads.runs, body, options);
    }
  }]);
}(APIResource);
var RunsPage = /*#__PURE__*/function (_CursorPage) {
  function RunsPage() {
    _classCallCheck(this, RunsPage);
    return _callSuper(this, RunsPage, arguments);
  }
  _inherits(RunsPage, _CursorPage);
  return _createClass(RunsPage);
}(CursorPage);
Runs.RunsPage = RunsPage;
Runs.Steps = Steps;
Runs.RunStepsPage = RunStepsPage;

var Threads = /*#__PURE__*/function (_APIResource) {
  function Threads() {
    var _this;
    _classCallCheck(this, Threads);
    _this = _callSuper(this, Threads, arguments);
    _this.runs = new Runs(_this._client);
    _this.messages = new Messages(_this._client);
    return _this;
  }
  _inherits(Threads, _APIResource);
  return _createClass(Threads, [{
    key: "create",
    value: function create() {
      var body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;
      if (isRequestOptions(body)) {
        return this.create({}, body);
      }
      return this._client.post('/threads', _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Retrieves a thread.
     */
  }, {
    key: "retrieve",
    value: function retrieve(threadId, options) {
      return this._client.get("/threads/".concat(threadId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Modifies a thread.
     */
  }, {
    key: "update",
    value: function update(threadId, body, options) {
      return this._client.post("/threads/".concat(threadId), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Delete a thread.
     */
  }, {
    key: "del",
    value: function del(threadId, options) {
      return this._client.delete("/threads/".concat(threadId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }, {
    key: "createAndRun",
    value: function createAndRun(body, options) {
      var _body$stream;
      return this._client.post('/threads/runs', _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers),
        stream: (_body$stream = body.stream) !== null && _body$stream !== void 0 ? _body$stream : false
      }));
    }
    /**
     * A helper to create a thread, start a run and then poll for a terminal state.
     * More information on Run lifecycles can be found here:
     * https://platform.openai.com/docs/assistants/how-it-works/runs-and-run-steps
     */
  }, {
    key: "createAndRunPoll",
    value: (function () {
      var _createAndRunPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(body, options) {
        var run;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.createAndRun(body, options);
            case 2:
              run = _context.sent;
              _context.next = 5;
              return this.runs.poll(run.thread_id, run.id, options);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createAndRunPoll(_x, _x2) {
        return _createAndRunPoll.apply(this, arguments);
      }
      return createAndRunPoll;
    }()
    /**
     * Create a thread and stream the run back
     */
    )
  }, {
    key: "createAndRunStream",
    value: function createAndRunStream(body, options) {
      return AssistantStream.createThreadAssistantStream(body, this._client.beta.threads, options);
    }
  }]);
}(APIResource);
Threads.Runs = Runs;
Threads.RunsPage = RunsPage;
Threads.Messages = Messages;
Threads.MessagesPage = MessagesPage;

/**
 * Like `Promise.allSettled()` but throws an error if any promises are rejected.
 */
var allSettledWithThrow = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(promises) {
    var results, rejected, _iterator, _step, result, values, _iterator2, _step2, _result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.allSettled(promises);
        case 2:
          results = _context.sent;
          rejected = results.filter(function (result) {
            return result.status === 'rejected';
          });
          if (!rejected.length) {
            _context.next = 8;
            break;
          }
          _iterator = _createForOfIteratorHelper(rejected);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              result = _step.value;
              console.error(result.reason);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          throw new Error("".concat(rejected.length, " promise(s) failed - see the above errors"));
        case 8:
          // Note: TS was complaining about using `.filter().map()` here for some reason
          values = [];
          _iterator2 = _createForOfIteratorHelper(results);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _result = _step2.value;
              if (_result.status === 'fulfilled') {
                values.push(_result.value);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return _context.abrupt("return", values);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function allSettledWithThrow(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Files$1 = /*#__PURE__*/function (_APIResource) {
  function Files() {
    _classCallCheck(this, Files);
    return _callSuper(this, Files, arguments);
  }
  _inherits(Files, _APIResource);
  return _createClass(Files, [{
    key: "create",
    value:
    /**
     * Create a vector store file by attaching a
     * [File](https://platform.openai.com/docs/api-reference/files) to a
     * [vector store](https://platform.openai.com/docs/api-reference/vector-stores/object).
     */
    function create(vectorStoreId, body, options) {
      return this._client.post("/vector_stores/".concat(vectorStoreId, "/files"), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Retrieves a vector store file.
     */
  }, {
    key: "retrieve",
    value: function retrieve(vectorStoreId, fileId, options) {
      return this._client.get("/vector_stores/".concat(vectorStoreId, "/files/").concat(fileId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }, {
    key: "list",
    value: function list(vectorStoreId) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      if (isRequestOptions(query)) {
        return this.list(vectorStoreId, {}, query);
      }
      return this._client.getAPIList("/vector_stores/".concat(vectorStoreId, "/files"), VectorStoreFilesPage, _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Delete a vector store file. This will remove the file from the vector store but
     * the file itself will not be deleted. To delete the file, use the
     * [delete file](https://platform.openai.com/docs/api-reference/files/delete)
     * endpoint.
     */
  }, {
    key: "del",
    value: function del(vectorStoreId, fileId, options) {
      return this._client.delete("/vector_stores/".concat(vectorStoreId, "/files/").concat(fileId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Attach a file to the given vector store and wait for it to be processed.
     */
  }, {
    key: "createAndPoll",
    value: (function () {
      var _createAndPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(vectorStoreId, body, options) {
        var file;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.create(vectorStoreId, body, options);
            case 2:
              file = _context.sent;
              _context.next = 5;
              return this.poll(vectorStoreId, file.id, options);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createAndPoll(_x, _x2, _x3) {
        return _createAndPoll.apply(this, arguments);
      }
      return createAndPoll;
    }()
    /**
     * Wait for the vector store file to finish processing.
     *
     * Note: this will return even if the file failed to process, you need to check
     * file.last_error and file.status to handle these cases
     */
    )
  }, {
    key: "poll",
    value: (function () {
      var _poll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(vectorStoreId, fileId, options) {
        var headers, fileResponse, file, sleepInterval, headerInterval, headerIntervalMs;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              headers = _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
                'X-Stainless-Poll-Helper': 'true'
              });
              if (options !== null && options !== void 0 && options.pollIntervalMs) {
                headers['X-Stainless-Custom-Poll-Interval'] = options.pollIntervalMs.toString();
              }
            case 2:
              _context2.next = 5;
              return this.retrieve(vectorStoreId, fileId, _objectSpread2(_objectSpread2({}, options), {}, {
                headers: headers
              })).withResponse();
            case 5:
              fileResponse = _context2.sent;
              file = fileResponse.data;
              _context2.t0 = file.status;
              _context2.next = _context2.t0 === 'in_progress' ? 10 : _context2.t0 === 'failed' ? 15 : _context2.t0 === 'completed' ? 15 : 16;
              break;
            case 10:
              sleepInterval = 5000;
              if (options !== null && options !== void 0 && options.pollIntervalMs) {
                sleepInterval = options.pollIntervalMs;
              } else {
                headerInterval = fileResponse.response.headers.get('openai-poll-after-ms');
                if (headerInterval) {
                  headerIntervalMs = parseInt(headerInterval);
                  if (!isNaN(headerIntervalMs)) {
                    sleepInterval = headerIntervalMs;
                  }
                }
              }
              _context2.next = 14;
              return sleep(sleepInterval);
            case 14:
              return _context2.abrupt("break", 16);
            case 15:
              return _context2.abrupt("return", file);
            case 16:
              _context2.next = 2;
              break;
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function poll(_x4, _x5, _x6) {
        return _poll.apply(this, arguments);
      }
      return poll;
    }()
    /**
     * Upload a file to the `files` API and then attach it to the given vector store.
     *
     * Note the file will be asynchronously processed (you can use the alternative
     * polling helper method to wait for processing to complete).
     */
    )
  }, {
    key: "upload",
    value: (function () {
      var _upload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(vectorStoreId, file, options) {
        var fileInfo;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this._client.files.create({
                file: file,
                purpose: 'assistants'
              }, options);
            case 2:
              fileInfo = _context3.sent;
              return _context3.abrupt("return", this.create(vectorStoreId, {
                file_id: fileInfo.id
              }, options));
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function upload(_x7, _x8, _x9) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
    /**
     * Add a file to a vector store and poll until processing is complete.
     */
    )
  }, {
    key: "uploadAndPoll",
    value: (function () {
      var _uploadAndPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(vectorStoreId, file, options) {
        var fileInfo;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.upload(vectorStoreId, file, options);
            case 2:
              fileInfo = _context4.sent;
              _context4.next = 5;
              return this.poll(vectorStoreId, fileInfo.id, options);
            case 5:
              return _context4.abrupt("return", _context4.sent);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function uploadAndPoll(_x10, _x11, _x12) {
        return _uploadAndPoll.apply(this, arguments);
      }
      return uploadAndPoll;
    }())
  }]);
}(APIResource);
var VectorStoreFilesPage = /*#__PURE__*/function (_CursorPage) {
  function VectorStoreFilesPage() {
    _classCallCheck(this, VectorStoreFilesPage);
    return _callSuper(this, VectorStoreFilesPage, arguments);
  }
  _inherits(VectorStoreFilesPage, _CursorPage);
  return _createClass(VectorStoreFilesPage);
}(CursorPage);
Files$1.VectorStoreFilesPage = VectorStoreFilesPage;

var FileBatches = /*#__PURE__*/function (_APIResource) {
  function FileBatches() {
    _classCallCheck(this, FileBatches);
    return _callSuper(this, FileBatches, arguments);
  }
  _inherits(FileBatches, _APIResource);
  return _createClass(FileBatches, [{
    key: "create",
    value:
    /**
     * Create a vector store file batch.
     */
    function create(vectorStoreId, body, options) {
      return this._client.post("/vector_stores/".concat(vectorStoreId, "/file_batches"), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Retrieves a vector store file batch.
     */
  }, {
    key: "retrieve",
    value: function retrieve(vectorStoreId, batchId, options) {
      return this._client.get("/vector_stores/".concat(vectorStoreId, "/file_batches/").concat(batchId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Cancel a vector store file batch. This attempts to cancel the processing of
     * files in this batch as soon as possible.
     */
  }, {
    key: "cancel",
    value: function cancel(vectorStoreId, batchId, options) {
      return this._client.post("/vector_stores/".concat(vectorStoreId, "/file_batches/").concat(batchId, "/cancel"), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Create a vector store batch and poll until all files have been processed.
     */
  }, {
    key: "createAndPoll",
    value: (function () {
      var _createAndPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(vectorStoreId, body, options) {
        var batch;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.create(vectorStoreId, body);
            case 2:
              batch = _context.sent;
              _context.next = 5;
              return this.poll(vectorStoreId, batch.id, options);
            case 5:
              return _context.abrupt("return", _context.sent);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createAndPoll(_x, _x2, _x3) {
        return _createAndPoll.apply(this, arguments);
      }
      return createAndPoll;
    }())
  }, {
    key: "listFiles",
    value: function listFiles(vectorStoreId, batchId) {
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = arguments.length > 3 ? arguments[3] : undefined;
      if (isRequestOptions(query)) {
        return this.listFiles(vectorStoreId, batchId, {}, query);
      }
      return this._client.getAPIList("/vector_stores/".concat(vectorStoreId, "/file_batches/").concat(batchId, "/files"), VectorStoreFilesPage, _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Wait for the given file batch to be processed.
     *
     * Note: this will return even if one of the files failed to process, you need to
     * check batch.file_counts.failed_count to handle this case.
     */
  }, {
    key: "poll",
    value: (function () {
      var _poll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(vectorStoreId, batchId, options) {
        var headers, _yield$this$retrieve$, batch, response, sleepInterval, headerInterval, headerIntervalMs;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              headers = _objectSpread2(_objectSpread2({}, options === null || options === void 0 ? void 0 : options.headers), {}, {
                'X-Stainless-Poll-Helper': 'true'
              });
              if (options !== null && options !== void 0 && options.pollIntervalMs) {
                headers['X-Stainless-Custom-Poll-Interval'] = options.pollIntervalMs.toString();
              }
            case 2:
              _context2.next = 5;
              return this.retrieve(vectorStoreId, batchId, _objectSpread2(_objectSpread2({}, options), {}, {
                headers: headers
              })).withResponse();
            case 5:
              _yield$this$retrieve$ = _context2.sent;
              batch = _yield$this$retrieve$.data;
              response = _yield$this$retrieve$.response;
              _context2.t0 = batch.status;
              _context2.next = _context2.t0 === 'in_progress' ? 11 : _context2.t0 === 'failed' ? 16 : _context2.t0 === 'cancelled' ? 16 : _context2.t0 === 'completed' ? 16 : 17;
              break;
            case 11:
              sleepInterval = 5000;
              if (options !== null && options !== void 0 && options.pollIntervalMs) {
                sleepInterval = options.pollIntervalMs;
              } else {
                headerInterval = response.headers.get('openai-poll-after-ms');
                if (headerInterval) {
                  headerIntervalMs = parseInt(headerInterval);
                  if (!isNaN(headerIntervalMs)) {
                    sleepInterval = headerIntervalMs;
                  }
                }
              }
              _context2.next = 15;
              return sleep(sleepInterval);
            case 15:
              return _context2.abrupt("break", 17);
            case 16:
              return _context2.abrupt("return", batch);
            case 17:
              _context2.next = 2;
              break;
            case 19:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function poll(_x4, _x5, _x6) {
        return _poll.apply(this, arguments);
      }
      return poll;
    }()
    /**
     * Uploads the given files concurrently and then creates a vector store file batch.
     *
     * The concurrency limit is configurable using the `maxConcurrency` parameter.
     */
    )
  }, {
    key: "uploadAndPoll",
    value: (function () {
      var _uploadAndPoll = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(vectorStoreId, _ref, options) {
        var _options$maxConcurren;
        var files, _ref$fileIds, fileIds, configuredConcurrency, concurrencyLimit, client, fileIterator, allFileIds, processFiles, _processFiles, workers;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _processFiles = function _processFiles3() {
                _processFiles = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(iterator) {
                  var _iterator, _step, item, fileObj;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _iterator = _createForOfIteratorHelper(iterator);
                        _context3.prev = 1;
                        _iterator.s();
                      case 3:
                        if ((_step = _iterator.n()).done) {
                          _context3.next = 11;
                          break;
                        }
                        item = _step.value;
                        _context3.next = 7;
                        return client.files.create({
                          file: item,
                          purpose: 'assistants'
                        }, options);
                      case 7:
                        fileObj = _context3.sent;
                        allFileIds.push(fileObj.id);
                      case 9:
                        _context3.next = 3;
                        break;
                      case 11:
                        _context3.next = 16;
                        break;
                      case 13:
                        _context3.prev = 13;
                        _context3.t0 = _context3["catch"](1);
                        _iterator.e(_context3.t0);
                      case 16:
                        _context3.prev = 16;
                        _iterator.f();
                        return _context3.finish(16);
                      case 19:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3, null, [[1, 13, 16, 19]]);
                }));
                return _processFiles.apply(this, arguments);
              };
              processFiles = function _processFiles2(_x10) {
                return _processFiles.apply(this, arguments);
              };
              files = _ref.files, _ref$fileIds = _ref.fileIds, fileIds = _ref$fileIds === void 0 ? [] : _ref$fileIds;
              if (!(files == null || files.length == 0)) {
                _context4.next = 5;
                break;
              }
              throw new Error("No `files` provided to process. If you've already uploaded files you should use `.createAndPoll()` instead");
            case 5:
              configuredConcurrency = (_options$maxConcurren = options === null || options === void 0 ? void 0 : options.maxConcurrency) !== null && _options$maxConcurren !== void 0 ? _options$maxConcurren : 5; // We cap the number of workers at the number of files (so we don't start any unnecessary workers)
              concurrencyLimit = Math.min(configuredConcurrency, files.length);
              client = this._client;
              fileIterator = files.values();
              allFileIds = _toConsumableArray(fileIds); // This code is based on this design. The libraries don't accommodate our environment limits.
              // https://stackoverflow.com/questions/40639432/what-is-the-best-way-to-limit-concurrency-when-using-es6s-promise-all
              // Start workers to process results
              workers = Array(concurrencyLimit).fill(fileIterator).map(processFiles); // Wait for all processing to complete.
              _context4.next = 13;
              return allSettledWithThrow(workers);
            case 13:
              _context4.next = 15;
              return this.createAndPoll(vectorStoreId, {
                file_ids: allFileIds
              });
            case 15:
              return _context4.abrupt("return", _context4.sent);
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function uploadAndPoll(_x7, _x8, _x9) {
        return _uploadAndPoll.apply(this, arguments);
      }
      return uploadAndPoll;
    }())
  }]);
}(APIResource);

var VectorStores = /*#__PURE__*/function (_APIResource) {
  function VectorStores() {
    var _this;
    _classCallCheck(this, VectorStores);
    _this = _callSuper(this, VectorStores, arguments);
    _this.files = new Files$1(_this._client);
    _this.fileBatches = new FileBatches(_this._client);
    return _this;
  }
  /**
   * Create a vector store.
   */
  _inherits(VectorStores, _APIResource);
  return _createClass(VectorStores, [{
    key: "create",
    value: function create(body, options) {
      return this._client.post('/vector_stores', _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Retrieves a vector store.
     */
  }, {
    key: "retrieve",
    value: function retrieve(vectorStoreId, options) {
      return this._client.get("/vector_stores/".concat(vectorStoreId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Modifies a vector store.
     */
  }, {
    key: "update",
    value: function update(vectorStoreId, body, options) {
      return this._client.post("/vector_stores/".concat(vectorStoreId), _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }, {
    key: "list",
    value: function list() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;
      if (isRequestOptions(query)) {
        return this.list({}, query);
      }
      return this._client.getAPIList('/vector_stores', VectorStoresPage, _objectSpread2(_objectSpread2({
        query: query
      }, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Delete a vector store.
     */
  }, {
    key: "del",
    value: function del(vectorStoreId, options) {
      return this._client.delete("/vector_stores/".concat(vectorStoreId), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          'OpenAI-Beta': 'assistants=v2'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
  }]);
}(APIResource);
var VectorStoresPage = /*#__PURE__*/function (_CursorPage) {
  function VectorStoresPage() {
    _classCallCheck(this, VectorStoresPage);
    return _callSuper(this, VectorStoresPage, arguments);
  }
  _inherits(VectorStoresPage, _CursorPage);
  return _createClass(VectorStoresPage);
}(CursorPage);
VectorStores.VectorStoresPage = VectorStoresPage;
VectorStores.Files = Files$1;
VectorStores.VectorStoreFilesPage = VectorStoreFilesPage;
VectorStores.FileBatches = FileBatches;

var Beta = /*#__PURE__*/function (_APIResource) {
  function Beta() {
    var _this;
    _classCallCheck(this, Beta);
    _this = _callSuper(this, Beta, arguments);
    _this.vectorStores = new VectorStores(_this._client);
    _this.chat = new Chat(_this._client);
    _this.assistants = new Assistants(_this._client);
    _this.threads = new Threads(_this._client);
    return _this;
  }
  _inherits(Beta, _APIResource);
  return _createClass(Beta);
}(APIResource);
Beta.VectorStores = VectorStores;
Beta.VectorStoresPage = VectorStoresPage;
Beta.Assistants = Assistants;
Beta.AssistantsPage = AssistantsPage;
Beta.Threads = Threads;

var Completions = /*#__PURE__*/function (_APIResource) {
  function Completions() {
    _classCallCheck(this, Completions);
    return _callSuper(this, Completions, arguments);
  }
  _inherits(Completions, _APIResource);
  return _createClass(Completions, [{
    key: "create",
    value: function create(body, options) {
      var _body$stream;
      return this._client.post('/completions', _objectSpread2(_objectSpread2({
        body: body
      }, options), {}, {
        stream: (_body$stream = body.stream) !== null && _body$stream !== void 0 ? _body$stream : false
      }));
    }
  }]);
}(APIResource);

var Embeddings = /*#__PURE__*/function (_APIResource) {
  function Embeddings() {
    _classCallCheck(this, Embeddings);
    return _callSuper(this, Embeddings, arguments);
  }
  _inherits(Embeddings, _APIResource);
  return _createClass(Embeddings, [{
    key: "create",
    value:
    /**
     * Creates an embedding vector representing the input text.
     */
    function create(body, options) {
      return this._client.post('/embeddings', _objectSpread2({
        body: body
      }, options));
    }
  }]);
}(APIResource);

var Files = /*#__PURE__*/function (_APIResource) {
  function Files() {
    _classCallCheck(this, Files);
    return _callSuper(this, Files, arguments);
  }
  _inherits(Files, _APIResource);
  return _createClass(Files, [{
    key: "create",
    value:
    /**
     * Upload a file that can be used across various endpoints. Individual files can be
     * up to 512 MB, and the size of all files uploaded by one organization can be up
     * to 100 GB.
     *
     * The Assistants API supports files up to 2 million tokens and of specific file
     * types. See the
     * [Assistants Tools guide](https://platform.openai.com/docs/assistants/tools) for
     * details.
     *
     * The Fine-tuning API only supports `.jsonl` files. The input also has certain
     * required formats for fine-tuning
     * [chat](https://platform.openai.com/docs/api-reference/fine-tuning/chat-input) or
     * [completions](https://platform.openai.com/docs/api-reference/fine-tuning/completions-input)
     * models.
     *
     * The Batch API only supports `.jsonl` files up to 200 MB in size. The input also
     * has a specific required
     * [format](https://platform.openai.com/docs/api-reference/batch/request-input).
     *
     * Please [contact us](https://help.openai.com/) if you need to increase these
     * storage limits.
     */
    function create(body, options) {
      return this._client.post('/files', multipartFormRequestOptions(_objectSpread2({
        body: body
      }, options)));
    }
    /**
     * Returns information about a specific file.
     */
  }, {
    key: "retrieve",
    value: function retrieve(fileId, options) {
      return this._client.get("/files/".concat(fileId), options);
    }
  }, {
    key: "list",
    value: function list() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;
      if (isRequestOptions(query)) {
        return this.list({}, query);
      }
      return this._client.getAPIList('/files', FileObjectsPage, _objectSpread2({
        query: query
      }, options));
    }
    /**
     * Delete a file.
     */
  }, {
    key: "del",
    value: function del(fileId, options) {
      return this._client.delete("/files/".concat(fileId), options);
    }
    /**
     * Returns the contents of the specified file.
     */
  }, {
    key: "content",
    value: function content(fileId, options) {
      return this._client.get("/files/".concat(fileId, "/content"), _objectSpread2(_objectSpread2({}, options), {}, {
        __binaryResponse: true
      }));
    }
    /**
     * Returns the contents of the specified file.
     *
     * @deprecated The `.content()` method should be used instead
     */
  }, {
    key: "retrieveContent",
    value: function retrieveContent(fileId, options) {
      return this._client.get("/files/".concat(fileId, "/content"), _objectSpread2(_objectSpread2({}, options), {}, {
        headers: _objectSpread2({
          Accept: 'application/json'
        }, options === null || options === void 0 ? void 0 : options.headers)
      }));
    }
    /**
     * Waits for the given file to be processed, default timeout is 30 mins.
     */
  }, {
    key: "waitForProcessing",
    value: (function () {
      var _waitForProcessing = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
        var _ref,
          _ref$pollInterval,
          pollInterval,
          _ref$maxWait,
          maxWait,
          TERMINAL_STATES,
          start,
          file,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref$pollInterval = _ref.pollInterval, pollInterval = _ref$pollInterval === void 0 ? 5000 : _ref$pollInterval, _ref$maxWait = _ref.maxWait, maxWait = _ref$maxWait === void 0 ? 30 * 60 * 1000 : _ref$maxWait;
              TERMINAL_STATES = new Set(['processed', 'error', 'deleted']);
              start = Date.now();
              _context.next = 5;
              return this.retrieve(id);
            case 5:
              file = _context.sent;
            case 6:
              if (!(!file.status || !TERMINAL_STATES.has(file.status))) {
                _context.next = 16;
                break;
              }
              _context.next = 9;
              return sleep(pollInterval);
            case 9:
              _context.next = 11;
              return this.retrieve(id);
            case 11:
              file = _context.sent;
              if (!(Date.now() - start > maxWait)) {
                _context.next = 14;
                break;
              }
              throw new APIConnectionTimeoutError({
                message: "Giving up on waiting for file ".concat(id, " to finish processing after ").concat(maxWait, " milliseconds.")
              });
            case 14:
              _context.next = 6;
              break;
            case 16:
              return _context.abrupt("return", file);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function waitForProcessing(_x) {
        return _waitForProcessing.apply(this, arguments);
      }
      return waitForProcessing;
    }())
  }]);
}(APIResource);
var FileObjectsPage = /*#__PURE__*/function (_CursorPage) {
  function FileObjectsPage() {
    _classCallCheck(this, FileObjectsPage);
    return _callSuper(this, FileObjectsPage, arguments);
  }
  _inherits(FileObjectsPage, _CursorPage);
  return _createClass(FileObjectsPage);
}(CursorPage);
Files.FileObjectsPage = FileObjectsPage;

var Checkpoints = /*#__PURE__*/function (_APIResource) {
  function Checkpoints() {
    _classCallCheck(this, Checkpoints);
    return _callSuper(this, Checkpoints, arguments);
  }
  _inherits(Checkpoints, _APIResource);
  return _createClass(Checkpoints, [{
    key: "list",
    value: function list(fineTuningJobId) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      if (isRequestOptions(query)) {
        return this.list(fineTuningJobId, {}, query);
      }
      return this._client.getAPIList("/fine_tuning/jobs/".concat(fineTuningJobId, "/checkpoints"), FineTuningJobCheckpointsPage, _objectSpread2({
        query: query
      }, options));
    }
  }]);
}(APIResource);
var FineTuningJobCheckpointsPage = /*#__PURE__*/function (_CursorPage) {
  function FineTuningJobCheckpointsPage() {
    _classCallCheck(this, FineTuningJobCheckpointsPage);
    return _callSuper(this, FineTuningJobCheckpointsPage, arguments);
  }
  _inherits(FineTuningJobCheckpointsPage, _CursorPage);
  return _createClass(FineTuningJobCheckpointsPage);
}(CursorPage);
Checkpoints.FineTuningJobCheckpointsPage = FineTuningJobCheckpointsPage;

var Jobs = /*#__PURE__*/function (_APIResource) {
  function Jobs() {
    var _this;
    _classCallCheck(this, Jobs);
    _this = _callSuper(this, Jobs, arguments);
    _this.checkpoints = new Checkpoints(_this._client);
    return _this;
  }
  /**
   * Creates a fine-tuning job which begins the process of creating a new model from
   * a given dataset.
   *
   * Response includes details of the enqueued job including job status and the name
   * of the fine-tuned models once complete.
   *
   * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
   */
  _inherits(Jobs, _APIResource);
  return _createClass(Jobs, [{
    key: "create",
    value: function create(body, options) {
      return this._client.post('/fine_tuning/jobs', _objectSpread2({
        body: body
      }, options));
    }
    /**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */
  }, {
    key: "retrieve",
    value: function retrieve(fineTuningJobId, options) {
      return this._client.get("/fine_tuning/jobs/".concat(fineTuningJobId), options);
    }
  }, {
    key: "list",
    value: function list() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;
      if (isRequestOptions(query)) {
        return this.list({}, query);
      }
      return this._client.getAPIList('/fine_tuning/jobs', FineTuningJobsPage, _objectSpread2({
        query: query
      }, options));
    }
    /**
     * Immediately cancel a fine-tune job.
     */
  }, {
    key: "cancel",
    value: function cancel(fineTuningJobId, options) {
      return this._client.post("/fine_tuning/jobs/".concat(fineTuningJobId, "/cancel"), options);
    }
  }, {
    key: "listEvents",
    value: function listEvents(fineTuningJobId) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 ? arguments[2] : undefined;
      if (isRequestOptions(query)) {
        return this.listEvents(fineTuningJobId, {}, query);
      }
      return this._client.getAPIList("/fine_tuning/jobs/".concat(fineTuningJobId, "/events"), FineTuningJobEventsPage, _objectSpread2({
        query: query
      }, options));
    }
  }]);
}(APIResource);
var FineTuningJobsPage = /*#__PURE__*/function (_CursorPage) {
  function FineTuningJobsPage() {
    _classCallCheck(this, FineTuningJobsPage);
    return _callSuper(this, FineTuningJobsPage, arguments);
  }
  _inherits(FineTuningJobsPage, _CursorPage);
  return _createClass(FineTuningJobsPage);
}(CursorPage);
var FineTuningJobEventsPage = /*#__PURE__*/function (_CursorPage2) {
  function FineTuningJobEventsPage() {
    _classCallCheck(this, FineTuningJobEventsPage);
    return _callSuper(this, FineTuningJobEventsPage, arguments);
  }
  _inherits(FineTuningJobEventsPage, _CursorPage2);
  return _createClass(FineTuningJobEventsPage);
}(CursorPage);
Jobs.FineTuningJobsPage = FineTuningJobsPage;
Jobs.FineTuningJobEventsPage = FineTuningJobEventsPage;
Jobs.Checkpoints = Checkpoints;
Jobs.FineTuningJobCheckpointsPage = FineTuningJobCheckpointsPage;

var FineTuning = /*#__PURE__*/function (_APIResource) {
  function FineTuning() {
    var _this;
    _classCallCheck(this, FineTuning);
    _this = _callSuper(this, FineTuning, arguments);
    _this.jobs = new Jobs(_this._client);
    return _this;
  }
  _inherits(FineTuning, _APIResource);
  return _createClass(FineTuning);
}(APIResource);
FineTuning.Jobs = Jobs;
FineTuning.FineTuningJobsPage = FineTuningJobsPage;
FineTuning.FineTuningJobEventsPage = FineTuningJobEventsPage;

var Images = /*#__PURE__*/function (_APIResource) {
  function Images() {
    _classCallCheck(this, Images);
    return _callSuper(this, Images, arguments);
  }
  _inherits(Images, _APIResource);
  return _createClass(Images, [{
    key: "createVariation",
    value:
    /**
     * Creates a variation of a given image.
     */
    function createVariation(body, options) {
      return this._client.post('/images/variations', multipartFormRequestOptions(_objectSpread2({
        body: body
      }, options)));
    }
    /**
     * Creates an edited or extended image given an original image and a prompt.
     */
  }, {
    key: "edit",
    value: function edit(body, options) {
      return this._client.post('/images/edits', multipartFormRequestOptions(_objectSpread2({
        body: body
      }, options)));
    }
    /**
     * Creates an image given a prompt.
     */
  }, {
    key: "generate",
    value: function generate(body, options) {
      return this._client.post('/images/generations', _objectSpread2({
        body: body
      }, options));
    }
  }]);
}(APIResource);

var Models = /*#__PURE__*/function (_APIResource) {
  function Models() {
    _classCallCheck(this, Models);
    return _callSuper(this, Models, arguments);
  }
  _inherits(Models, _APIResource);
  return _createClass(Models, [{
    key: "retrieve",
    value:
    /**
     * Retrieves a model instance, providing basic information about the model such as
     * the owner and permissioning.
     */
    function retrieve(model, options) {
      return this._client.get("/models/".concat(model), options);
    }
    /**
     * Lists the currently available models, and provides basic information about each
     * one such as the owner and availability.
     */
  }, {
    key: "list",
    value: function list(options) {
      return this._client.getAPIList('/models', ModelsPage, options);
    }
    /**
     * Delete a fine-tuned model. You must have the Owner role in your organization to
     * delete a model.
     */
  }, {
    key: "del",
    value: function del(model, options) {
      return this._client.delete("/models/".concat(model), options);
    }
  }]);
}(APIResource);
/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */
var ModelsPage = /*#__PURE__*/function (_Page) {
  function ModelsPage() {
    _classCallCheck(this, ModelsPage);
    return _callSuper(this, ModelsPage, arguments);
  }
  _inherits(ModelsPage, _Page);
  return _createClass(ModelsPage);
}(Page);
Models.ModelsPage = ModelsPage;

var Moderations = /*#__PURE__*/function (_APIResource) {
  function Moderations() {
    _classCallCheck(this, Moderations);
    return _callSuper(this, Moderations, arguments);
  }
  _inherits(Moderations, _APIResource);
  return _createClass(Moderations, [{
    key: "create",
    value:
    /**
     * Classifies if text and/or image inputs are potentially harmful. Learn more in
     * the [moderation guide](https://platform.openai.com/docs/guides/moderation).
     */
    function create(body, options) {
      return this._client.post('/moderations', _objectSpread2({
        body: body
      }, options));
    }
  }]);
}(APIResource);

var Parts = /*#__PURE__*/function (_APIResource) {
  function Parts() {
    _classCallCheck(this, Parts);
    return _callSuper(this, Parts, arguments);
  }
  _inherits(Parts, _APIResource);
  return _createClass(Parts, [{
    key: "create",
    value:
    /**
     * Adds a
     * [Part](https://platform.openai.com/docs/api-reference/uploads/part-object) to an
     * [Upload](https://platform.openai.com/docs/api-reference/uploads/object) object.
     * A Part represents a chunk of bytes from the file you are trying to upload.
     *
     * Each Part can be at most 64 MB, and you can add Parts until you hit the Upload
     * maximum of 8 GB.
     *
     * It is possible to add multiple Parts in parallel. You can decide the intended
     * order of the Parts when you
     * [complete the Upload](https://platform.openai.com/docs/api-reference/uploads/complete).
     */
    function create(uploadId, body, options) {
      return this._client.post("/uploads/".concat(uploadId, "/parts"), multipartFormRequestOptions(_objectSpread2({
        body: body
      }, options)));
    }
  }]);
}(APIResource);

var Uploads = /*#__PURE__*/function (_APIResource) {
  function Uploads() {
    var _this;
    _classCallCheck(this, Uploads);
    _this = _callSuper(this, Uploads, arguments);
    _this.parts = new Parts(_this._client);
    return _this;
  }
  /**
   * Creates an intermediate
   * [Upload](https://platform.openai.com/docs/api-reference/uploads/object) object
   * that you can add
   * [Parts](https://platform.openai.com/docs/api-reference/uploads/part-object) to.
   * Currently, an Upload can accept at most 8 GB in total and expires after an hour
   * after you create it.
   *
   * Once you complete the Upload, we will create a
   * [File](https://platform.openai.com/docs/api-reference/files/object) object that
   * contains all the parts you uploaded. This File is usable in the rest of our
   * platform as a regular File object.
   *
   * For certain `purpose`s, the correct `mime_type` must be specified. Please refer
   * to documentation for the supported MIME types for your use case:
   *
   * - [Assistants](https://platform.openai.com/docs/assistants/tools/file-search#supported-files)
   *
   * For guidance on the proper filename extensions for each purpose, please follow
   * the documentation on
   * [creating a File](https://platform.openai.com/docs/api-reference/files/create).
   */
  _inherits(Uploads, _APIResource);
  return _createClass(Uploads, [{
    key: "create",
    value: function create(body, options) {
      return this._client.post('/uploads', _objectSpread2({
        body: body
      }, options));
    }
    /**
     * Cancels the Upload. No Parts may be added after an Upload is cancelled.
     */
  }, {
    key: "cancel",
    value: function cancel(uploadId, options) {
      return this._client.post("/uploads/".concat(uploadId, "/cancel"), options);
    }
    /**
     * Completes the
     * [Upload](https://platform.openai.com/docs/api-reference/uploads/object).
     *
     * Within the returned Upload object, there is a nested
     * [File](https://platform.openai.com/docs/api-reference/files/object) object that
     * is ready to use in the rest of the platform.
     *
     * You can specify the order of the Parts by passing in an ordered list of the Part
     * IDs.
     *
     * The number of bytes uploaded upon completion must match the number of bytes
     * initially specified when creating the Upload object. No Parts may be added after
     * an Upload is completed.
     */
  }, {
    key: "complete",
    value: function complete(uploadId, body, options) {
      return this._client.post("/uploads/".concat(uploadId, "/complete"), _objectSpread2({
        body: body
      }, options));
    }
  }]);
}(APIResource);
Uploads.Parts = Parts;

var _excluded = ["baseURL", "apiKey", "organization", "project"],
  _excluded2 = ["baseURL", "apiKey", "apiVersion", "endpoint", "deployment", "azureADTokenProvider", "dangerouslyAllowBrowser"];
// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
var _a;
/**
 * API Client for interfacing with the OpenAI API.
 */
var OpenAI = /*#__PURE__*/function (_Core$APIClient) {
  /**
   * API Client for interfacing with the OpenAI API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['OPENAI_API_KEY'] ?? undefined]
   * @param {string | null | undefined} [opts.organization=process.env['OPENAI_ORG_ID'] ?? null]
   * @param {string | null | undefined} [opts.project=process.env['OPENAI_PROJECT_ID'] ?? null]
   * @param {string} [opts.baseURL=process.env['OPENAI_BASE_URL'] ?? https://api.openai.com/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   */
  function OpenAI() {
    var _Core$readEnv, _Core$readEnv2, _options$timeout;
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$baseURL = _ref.baseURL,
      baseURL = _ref$baseURL === void 0 ? readEnv('OPENAI_BASE_URL') : _ref$baseURL,
      _ref$apiKey = _ref.apiKey,
      apiKey = _ref$apiKey === void 0 ? readEnv('OPENAI_API_KEY') : _ref$apiKey,
      _ref$organization = _ref.organization,
      organization = _ref$organization === void 0 ? (_Core$readEnv = readEnv('OPENAI_ORG_ID')) !== null && _Core$readEnv !== void 0 ? _Core$readEnv : null : _ref$organization,
      _ref$project = _ref.project,
      project = _ref$project === void 0 ? (_Core$readEnv2 = readEnv('OPENAI_PROJECT_ID')) !== null && _Core$readEnv2 !== void 0 ? _Core$readEnv2 : null : _ref$project,
      opts = _objectWithoutProperties(_ref, _excluded);
    _classCallCheck(this, OpenAI);
    if (apiKey === undefined) {
      throw new OpenAIError("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");
    }
    var options = _objectSpread2(_objectSpread2({
      apiKey: apiKey,
      organization: organization,
      project: project
    }, opts), {}, {
      baseURL: baseURL || "https://api.openai.com/v1"
    });
    if (!options.dangerouslyAllowBrowser && isRunningInBrowser()) {
      throw new OpenAIError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");
    }
    _this = _callSuper(this, OpenAI, [{
      baseURL: options.baseURL,
      timeout: (_options$timeout = options.timeout) !== null && _options$timeout !== void 0 ? _options$timeout : 600000 /* 10 minutes */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch
    }]);
    _this.completions = new Completions(_this);
    _this.chat = new Chat$1(_this);
    _this.embeddings = new Embeddings(_this);
    _this.files = new Files(_this);
    _this.images = new Images(_this);
    _this.audio = new Audio(_this);
    _this.moderations = new Moderations(_this);
    _this.models = new Models(_this);
    _this.fineTuning = new FineTuning(_this);
    _this.beta = new Beta(_this);
    _this.batches = new Batches(_this);
    _this.uploads = new Uploads(_this);
    _this._options = options;
    _this.apiKey = apiKey;
    _this.organization = organization;
    _this.project = project;
    return _this;
  }
  _inherits(OpenAI, _Core$APIClient);
  return _createClass(OpenAI, [{
    key: "defaultQuery",
    value: function defaultQuery() {
      return this._options.defaultQuery;
    }
  }, {
    key: "defaultHeaders",
    value: function defaultHeaders(opts) {
      return _objectSpread2(_objectSpread2({}, _superPropGet(OpenAI, "defaultHeaders", this, 3)([opts])), {}, {
        'OpenAI-Organization': this.organization,
        'OpenAI-Project': this.project
      }, this._options.defaultHeaders);
    }
  }, {
    key: "authHeaders",
    value: function authHeaders(opts) {
      return {
        Authorization: "Bearer ".concat(this.apiKey)
      };
    }
  }, {
    key: "stringifyQuery",
    value: function stringifyQuery(query) {
      return stringify(query, {
        arrayFormat: 'brackets'
      });
    }
  }]);
}(APIClient);
_a = OpenAI;
OpenAI.OpenAI = _a;
OpenAI.DEFAULT_TIMEOUT = 600000; // 10 minutes
OpenAI.OpenAIError = OpenAIError;
OpenAI.APIError = APIError;
OpenAI.APIConnectionError = APIConnectionError;
OpenAI.APIConnectionTimeoutError = APIConnectionTimeoutError;
OpenAI.APIUserAbortError = APIUserAbortError;
OpenAI.NotFoundError = NotFoundError;
OpenAI.ConflictError = ConflictError;
OpenAI.RateLimitError = RateLimitError;
OpenAI.BadRequestError = BadRequestError;
OpenAI.AuthenticationError = AuthenticationError;
OpenAI.InternalServerError = InternalServerError;
OpenAI.PermissionDeniedError = PermissionDeniedError;
OpenAI.UnprocessableEntityError = UnprocessableEntityError;
OpenAI.toFile = toFile;
OpenAI.fileFromPath = fileFromPath;
OpenAI.Completions = Completions;
OpenAI.Chat = Chat$1;
OpenAI.Embeddings = Embeddings;
OpenAI.Files = Files;
OpenAI.FileObjectsPage = FileObjectsPage;
OpenAI.Images = Images;
OpenAI.Audio = Audio;
OpenAI.Moderations = Moderations;
OpenAI.Models = Models;
OpenAI.ModelsPage = ModelsPage;
OpenAI.FineTuning = FineTuning;
OpenAI.Beta = Beta;
OpenAI.Batches = Batches;
OpenAI.BatchesPage = BatchesPage;
OpenAI.Uploads = Uploads;
/** API Client for interfacing with the Azure OpenAI API. */
var AzureOpenAI = /*#__PURE__*/function (_OpenAI) {
  /**
   * API Client for interfacing with the Azure OpenAI API.
   *
   * @param {string | undefined} [opts.apiVersion=process.env['OPENAI_API_VERSION'] ?? undefined]
   * @param {string | undefined} [opts.endpoint=process.env['AZURE_OPENAI_ENDPOINT'] ?? undefined] - Your Azure endpoint, including the resource, e.g. `https://example-resource.azure.openai.com/`
   * @param {string | undefined} [opts.apiKey=process.env['AZURE_OPENAI_API_KEY'] ?? undefined]
   * @param {string | undefined} opts.deployment - A model deployment, if given, sets the base client URL to include `/deployments/{deployment}`.
   * @param {string | null | undefined} [opts.organization=process.env['OPENAI_ORG_ID'] ?? null]
   * @param {string} [opts.baseURL=process.env['OPENAI_BASE_URL']] - Sets the base URL for the API, e.g. `https://example-resource.azure.openai.com/openai/`.
   * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
   */
  function AzureOpenAI() {
    var _apiKey;
    var _this2;
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$baseURL = _ref2.baseURL,
      baseURL = _ref2$baseURL === void 0 ? readEnv('OPENAI_BASE_URL') : _ref2$baseURL,
      _ref2$apiKey = _ref2.apiKey,
      apiKey = _ref2$apiKey === void 0 ? readEnv('AZURE_OPENAI_API_KEY') : _ref2$apiKey,
      _ref2$apiVersion = _ref2.apiVersion,
      apiVersion = _ref2$apiVersion === void 0 ? readEnv('OPENAI_API_VERSION') : _ref2$apiVersion,
      endpoint = _ref2.endpoint,
      deployment = _ref2.deployment,
      azureADTokenProvider = _ref2.azureADTokenProvider,
      dangerouslyAllowBrowser = _ref2.dangerouslyAllowBrowser,
      opts = _objectWithoutProperties(_ref2, _excluded2);
    _classCallCheck(this, AzureOpenAI);
    if (!apiVersion) {
      throw new OpenAIError("The OPENAI_API_VERSION environment variable is missing or empty; either provide it, or instantiate the AzureOpenAI client with an apiVersion option, like new AzureOpenAI({ apiVersion: 'My API Version' }).");
    }
    if (typeof azureADTokenProvider === 'function') {
      dangerouslyAllowBrowser = true;
    }
    if (!azureADTokenProvider && !apiKey) {
      throw new OpenAIError('Missing credentials. Please pass one of `apiKey` and `azureADTokenProvider`, or set the `AZURE_OPENAI_API_KEY` environment variable.');
    }
    if (azureADTokenProvider && apiKey) {
      throw new OpenAIError('The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.');
    }
    // define a sentinel value to avoid any typing issues
    (_apiKey = apiKey) !== null && _apiKey !== void 0 ? _apiKey : apiKey = API_KEY_SENTINEL;
    opts.defaultQuery = _objectSpread2(_objectSpread2({}, opts.defaultQuery), {}, {
      'api-version': apiVersion
    });
    if (!baseURL) {
      if (!endpoint) {
        endpoint = process.env['AZURE_OPENAI_ENDPOINT'];
      }
      if (!endpoint) {
        throw new OpenAIError('Must provide one of the `baseURL` or `endpoint` arguments, or the `AZURE_OPENAI_ENDPOINT` environment variable');
      }
      baseURL = "".concat(endpoint, "/openai");
    } else {
      if (endpoint) {
        throw new OpenAIError('baseURL and endpoint are mutually exclusive');
      }
    }
    _this2 = _callSuper(this, AzureOpenAI, [_objectSpread2(_objectSpread2({
      apiKey: apiKey,
      baseURL: baseURL
    }, opts), dangerouslyAllowBrowser !== undefined ? {
      dangerouslyAllowBrowser: dangerouslyAllowBrowser
    } : {})]);
    _this2.apiVersion = '';
    _this2._azureADTokenProvider = azureADTokenProvider;
    _this2.apiVersion = apiVersion;
    _this2._deployment = deployment;
    return _this2;
  }
  _inherits(AzureOpenAI, _OpenAI);
  return _createClass(AzureOpenAI, [{
    key: "buildRequest",
    value: function buildRequest(options) {
      if (_deployments_endpoints.has(options.path) && options.method === 'post' && options.body !== undefined) {
        if (!isObj(options.body)) {
          throw new Error('Expected request body to be an object');
        }
        var model = this._deployment || options.body['model'];
        if (model !== undefined && !this.baseURL.includes('/deployments')) {
          options.path = "/deployments/".concat(model).concat(options.path);
        }
      }
      return _superPropGet(AzureOpenAI, "buildRequest", this, 3)([options]);
    }
  }, {
    key: "_getAzureADToken",
    value: function () {
      var _getAzureADToken2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var token;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof this._azureADTokenProvider === 'function')) {
                _context.next = 7;
                break;
              }
              _context.next = 3;
              return this._azureADTokenProvider();
            case 3:
              token = _context.sent;
              if (!(!token || typeof token !== 'string')) {
                _context.next = 6;
                break;
              }
              throw new OpenAIError("Expected 'azureADTokenProvider' argument to return a string but it returned ".concat(token));
            case 6:
              return _context.abrupt("return", token);
            case 7:
              return _context.abrupt("return", undefined);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _getAzureADToken() {
        return _getAzureADToken2.apply(this, arguments);
      }
      return _getAzureADToken;
    }()
  }, {
    key: "authHeaders",
    value: function authHeaders(opts) {
      return {};
    }
  }, {
    key: "prepareOptions",
    value: function () {
      var _prepareOptions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(opts) {
        var _opts$headers, _opts$headers2;
        var token;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!((_opts$headers = opts.headers) !== null && _opts$headers !== void 0 && _opts$headers['api-key'])) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return", _superPropGet(AzureOpenAI, "prepareOptions", this, 3)([opts]));
            case 2:
              _context2.next = 4;
              return this._getAzureADToken();
            case 4:
              token = _context2.sent;
              (_opts$headers2 = opts.headers) !== null && _opts$headers2 !== void 0 ? _opts$headers2 : opts.headers = {};
              if (!token) {
                _context2.next = 10;
                break;
              }
              opts.headers['Authorization'] = "Bearer ".concat(token);
              _context2.next = 15;
              break;
            case 10:
              if (!(this.apiKey !== API_KEY_SENTINEL)) {
                _context2.next = 14;
                break;
              }
              opts.headers['api-key'] = this.apiKey;
              _context2.next = 15;
              break;
            case 14:
              throw new OpenAIError('Unable to handle auth');
            case 15:
              return _context2.abrupt("return", _superPropGet(AzureOpenAI, "prepareOptions", this, 3)([opts]));
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function prepareOptions(_x) {
        return _prepareOptions.apply(this, arguments);
      }
      return prepareOptions;
    }()
  }]);
}(OpenAI);
var _deployments_endpoints = new Set(['/completions', '/chat/completions', '/embeddings', '/audio/transcriptions', '/audio/translations', '/audio/speech', '/images/generations']);
var API_KEY_SENTINEL = '<Missing Key>';

export { APIConnectionError, APIConnectionTimeoutError, APIError, APIUserAbortError, AuthenticationError, AzureOpenAI, BadRequestError, ConflictError, InternalServerError, NotFoundError, OpenAI, OpenAIError, PermissionDeniedError, RateLimitError, UnprocessableEntityError, OpenAI as default, fileFromPath, toFile };
