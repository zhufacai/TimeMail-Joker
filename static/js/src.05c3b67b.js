parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
                r.exports = t
            }, {}
        ]
    };
    for (var c = 0; c < t.length; c++) try {
            f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "amqR": [function(require, module, exports) {

        }, {
            "./../images/header@1x.png": [
                ["header@1x.f3f2eda3.png", "Q2eg"], "Q2eg"
            ],
            "./../images/landing2@1x.png": [
                ["landing2@1x.00a840ab.png", "f257"], "f257"
            ]
        }
    ],
    "nNB2": [function(require, module, exports) {

        }, {}],
    "KIG8": [function(require, module, exports) {

            var t, e, n = module.exports = {};

            function r() {
                throw new Error("setTimeout has not been defined")
            }
            function o() {
                throw new Error("clearTimeout has not been defined")
            }
            function i(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }
            function u(t) {
                if (e === clearTimeout) return clearTimeout(t);
                if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
                try {
                    return e(t)
                } catch (n) {
                    try {
                        return e.call(null, t)
                    } catch (n) {
                        return e.call(this, t)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : r
                } catch (n) {
                    t = r
                }
                try {
                    e = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (n) {
                    e = o
                }
            }();
            var c, s = [],
                l = !1,
                a = -1;

            function f() {
                l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
            }
            function h() {
                if (!l) {
                    var t = i(f);
                    l = !0;
                    for (var e = s.length; e;) {
                        for (c = s, s = []; ++a < e;) c && c[a].run();
                        a = -1, e = s.length
                    }
                    c = null, l = !1, u(t)
                }
            }
            function m(t, e) {
                this.fun = t, this.array = e
            }
            function p() {}
            n.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                s.push(new m(t, e)), 1 !== s.length || l || i(h)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(t) {
                return []
            }, n.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, n.cwd = function() {
                return "/"
            }, n.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, n.umask = function() {
                return 0
            };
        }, {}
    ],
    "juYr": [function(require, module, exports) {
            var global = arguments[3];
            var process = require("process");
            var define;
            var e, t = arguments[3],
                n = require("process");
            ! function(e, t) {
                "use strict";
                "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e)
                } : t(e)
            }("undefined" != typeof window ? window : this, function(t, n) {
                "use strict";
                var r = [],
                    i = t.document,
                    o = Object.getPrototypeOf,
                    a = r.slice,
                    s = r.concat,
                    u = r.push,
                    l = r.indexOf,
                    c = {}, f = c.toString,
                    p = c.hasOwnProperty,
                    d = p.toString,
                    h = d.call(Object),
                    g = {}, v = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType
                    }, y = function(e) {
                        return null != e && e === e.window
                    }, m = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function x(e, t, n) {
                    var r, o, a = (n = n || i).createElement("script");
                    if (a.text = e, t) for (r in m)(o = t[r] || t.getAttribute && t.getAttribute(r)) && a.setAttribute(r, o);
                    n.head.appendChild(a).parentNode.removeChild(a)
                }
                function b(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[f.call(e)] || "object" : typeof e
                }
                var w = function(e, t) {
                    return new w.fn.init(e, t)
                }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

                function C(e) {
                    var t = !! e && "length" in e && e.length,
                        n = b(e);
                    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                w.fn = w.prototype = {
                    jquery: "3.4.1",
                    constructor: w,
                    length: 0,
                    toArray: function() {
                        return a.call(this)
                    },
                    get: function(e) {
                        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = w.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    },
                    each: function(e) {
                        return w.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(w.map(this, function(t, n) {
                            return e.call(t, n, t)
                        }))
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: u,
                    sort: r.sort,
                    splice: r.splice
                }, w.extend = w.fn.extend = function() {
                    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1,
                        u = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                    return a
                }, w.extend({
                    expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== f.call(e)) && (!(t = o(e)) || "function" == typeof(n = p.call(t, "constructor") && t.constructor) && d.call(n) === h)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t) {
                        x(e, {
                            nonce: t && t.nonce
                        })
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e
                    },
                    trim: function(e) {
                        return null == e ? "" : (e + "").replace(T, "")
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : l.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return e.length = i, e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0,
                            a = [];
                        if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                        return s.apply([], a)
                    },
                    guid: 1,
                    support: g
                }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                    c["[object " + t + "]"] = t.toLowerCase()
                });
                var E = function(e) {
                    var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
                        w = e.document,
                        T = 0,
                        C = 0,
                        E = ue(),
                        k = ue(),
                        S = ue(),
                        N = ue(),
                        A = function(e, t) {
                            return e === t && (f = !0), 0
                        }, D = {}.hasOwnProperty,
                        j = [],
                        q = j.pop,
                        L = j.push,
                        H = j.push,
                        O = j.slice,
                        P = function(e, t) {
                            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                            return -1
                        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        M = "[\\x20\\t\\r\\n\\f]",
                        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
                        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                        F = new RegExp(M + "+", "g"),
                        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                        _ = new RegExp("^" + M + "*," + M + "*"),
                        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                        U = new RegExp(M + "|>"),
                        X = new RegExp($),
                        V = new RegExp("^" + I + "$"),
                        G = {
                            ID: new RegExp("^#(" + I + ")"),
                            CLASS: new RegExp("^\\.(" + I + ")"),
                            TAG: new RegExp("^(" + I + "|[*])"),
                            ATTR: new RegExp("^" + W),
                            PSEUDO: new RegExp("^" + $),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + R + ")$", "i"),
                            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                        }, Y = /HTML$/i,
                        Q = /^(?:input|select|textarea|button)$/i,
                        J = /^h\d$/i,
                        K = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ee = /[+~]/,
                        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                        ne = function(e, t, n) {
                            var r = "0x" + t - 65536;
                            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ie = function(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        }, oe = function() {
                            p()
                        }, ae = be(function(e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }, {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        H.apply(j = O.call(w.childNodes), w.childNodes), j[w.childNodes.length].nodeType
                    } catch (ke) {
                        H = {
                            apply: j.length ? function(e, t) {
                                L.apply(e, O.call(t))
                            } : function(e, t) {
                                for (var n = e.length, r = 0; e[n++] = t[r++];);
                                e.length = n - 1
                            }
                        }
                    }
                    function se(e, t, r, i) {
                        var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                            T = t ? t.nodeType : 9;
                        if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                        if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                            if (11 !== T && (f = Z.exec(e))) if (o = f[1]) {
                                    if (9 === T) {
                                        if (!(l = t.getElementById(o))) return r;
                                        if (l.id === o) return r.push(l), r
                                    } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                                } else {
                                    if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                                    if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                                }
                            if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                                if (y = e, m = t, 1 === T && U.test(e)) {
                                    for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), s = (h = a(e)).length; s--;) h[s] = "#" + c + " " + xe(h[s]);
                                    y = h.join(","), m = ee.test(e) && ye(t.parentNode) || t
                                }
                                try {
                                    return H.apply(r, m.querySelectorAll(y)), r
                                } catch (C) {
                                    N(e, !0)
                                } finally {
                                    c === b && t.removeAttribute("id")
                                }
                            }
                        }
                        return u(e.replace(B, "$1"), t, r, i)
                    }
                    function ue() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }
                    }
                    function le(e) {
                        return e[b] = !0, e
                    }
                    function ce(e) {
                        var t = d.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (ke) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }
                    function fe(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                    }
                    function pe(e, t) {
                        var n = t && e,
                            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (r) return r;
                        if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                        return e ? 1 : -1
                    }
                    function de(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }
                    function he(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }
                    function ge(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                        }
                    }
                    function ve(e) {
                        return le(function(t) {
                            return t = +t, le(function(n, r) {
                                for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                            })
                        })
                    }
                    function ye(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = se.support = {}, o = se.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !Y.test(t || n && n.nodeName || "HTML")
                    }, p = se.setDocument = function(e) {
                        var t, i, a = e ? e.ownerDocument || e : w;
                        return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = ce(function(e) {
                            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function(e) {
                            return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                        }), n.getById ? (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && g) {
                                var n, r, i, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return o
                        }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                        }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
                        }), ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                        })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                            n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", $)
                        }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function(e, t) {
                            if (t) for (; t = t.parentNode;) if (t === e) return !0;
                            return !1
                        }, A = t ? function(e, t) {
                            if (e === t) return f = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return f = !0, 0;
                            var n, r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                a = [e],
                                s = [t];
                            if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                            if (i === o) return pe(e, t);
                            for (n = e; n = n.parentNode;) a.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; a[r] === s[r];) r++;
                            return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
                        }, d) : d
                    }, se.matches = function(e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !N[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                                var r = m.call(e, t);
                                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (ke) {
                            N(t, !0)
                        }
                        return se(t, d, null, [e]).length > 0
                    }, se.contains = function(e, t) {
                        return (e.ownerDocument || e) !== d && p(e), x(e, t)
                    }, se.attr = function(e, t) {
                        (e.ownerDocument || e) !== d && p(e);
                        var i = r.attrHandle[t.toLowerCase()],
                            o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                        return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }, se.escape = function(e) {
                        return (e + "").replace(re, ie)
                    }, se.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function(e) {
                        var t, r = [],
                            i = 0,
                            o = 0;
                        if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
                            for (; t = e[o++];) t === e[o] && (i = r.push(o));
                            for (; i--;) e.splice(r[i], 1)
                        }
                        return c = null, e
                    }, i = se.getText = function(e) {
                        var t, n = "",
                            r = 0,
                            o = e.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                            } else if (3 === o || 4 === o) return e.nodeValue
                        } else for (; t = e[r++];) n += i(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: G,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = E[e + " "];
                                return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(r) {
                                    var i = se.attr(r, e);
                                    return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, r, i) {
                                var o = "nth" !== e.slice(0, 3),
                                    a = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === i ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, u) {
                                    var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                        v = t.parentNode,
                                        y = s && t.nodeName.toLowerCase(),
                                        m = !u && !s,
                                        x = !1;
                                    if (v) {
                                        if (o) {
                                            for (; g;) {
                                                for (p = t; p = p[g];) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                h = g = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                            for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                                                    c[e] = [T, d, x];
                                                    break
                                                }
                                        } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) for (;
                                            (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                        return (x -= i) === r || x % r == 0 && x / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                                    for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                                }) : function(e) {
                                    return i(e, 0, n)
                                }) : i
                            }
                        },
                        pseudos: {
                            not: le(function(e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(B, "$1"));
                                return r[b] ? le(function(e, t, n, i) {
                                    for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                }) : function(e, i, o) {
                                    return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: le(function(e) {
                                return function(t) {
                                    return se(e, t).length > 0
                                }
                            }),
                            contains: le(function(e) {
                                return e = e.replace(te, ne),
                                function(t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                }
                            }),
                            lang: le(function(e) {
                                return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                function(t) {
                                    var n;
                                    do {
                                        if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === h
                            },
                            focus: function(e) {
                                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !! e.checked || "option" === t && !! e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function(e) {
                                return J.test(e.nodeName)
                            },
                            input: function(e) {
                                return Q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: ve(function() {
                                return [0]
                            }),
                            last: ve(function(e, t) {
                                return [t - 1]
                            }),
                            eq: ve(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: ve(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: ve(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: ve(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: ve(function(e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = de(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                    function me() {}
                    function xe(e) {
                        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                        return r
                    }
                    function be(e, t, n) {
                        var r = t.dir,
                            i = t.next,
                            o = i || r,
                            a = n && "parentNode" === o,
                            s = C++;
                        return t.first ? function(t, n, i) {
                            for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                            return !1
                        } : function(t, n, u) {
                            var l, c, f, p = [T, s];
                            if (u) {
                                for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                            } else for (; t = t[r];) if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                        else {
                                            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                            if (c[o] = p, p[2] = e(t, n, u)) return !0
                                        } return !1
                        }
                    }
                    function we(e) {
                        return e.length > 1 ? function(t, n, r) {
                            for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                            return !0
                        } : e[0]
                    }
                    function Te(e, t, n, r, i) {
                        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                        return a
                    }
                    function Ce(e, t, n, r, i, o) {
                        return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function(o, a, s, u) {
                            var l, c, f, p = [],
                                d = [],
                                h = a.length,
                                g = o || function(e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                v = !e || !o && t ? g : Te(g, p, e, s, u),
                                y = n ? i || (o ? e : h || r) ? [] : a : v;
                            if (n && n(v, y, s, u), r) for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                            if (o) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                        i(null, y = [], l, u)
                                    }
                                    for (c = y.length; c--;)(f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                                }
                            } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                        })
                    }
                    function Ee(e) {
                        for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                                return e === t
                            }, s, !0), f = be(function(e) {
                                return P(t, e) > -1
                            }, s, !0), p = [function(e, n, r) {
                                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                                    return t = null, i
                                }
                            ]; u < o; u++) if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                            else {
                                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                    for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                    return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                        value: " " === e[u - 2].type ? "*" : ""
                                    })).replace(B, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                                }
                                p.push(n)
                            }
                        return we(p)
                    }
                    return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
                        var n, i, o, a, s, u, l, c = k[e + " "];
                        if (c) return t ? 0 : c.slice(0);
                        for (s = e, u = [], l = r.preFilter; s;) {
                            for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                                value: n,
                                type: i[0].replace(B, " ")
                            }), s = s.slice(n.length)), r.filter)!(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                                value: n,
                                type: a,
                                matches: i
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? se.error(e) : k(e, u).slice(0)
                    }, s = se.compile = function(e, t) {
                        var n, i = [],
                            o = [],
                            s = S[e + " "];
                        if (!s) {
                            for (t || (t = a(e)), n = t.length; n--;)(s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                            (s = S(e, function(e, t) {
                                var n = t.length > 0,
                                    i = e.length > 0,
                                    o = function(o, a, s, u, c) {
                                        var f, h, v, y = 0,
                                            m = "0",
                                            x = o && [],
                                            b = [],
                                            w = l,
                                            C = o || i && r.find.TAG("*", c),
                                            E = T += null == w ? 1 : Math.random() || .1,
                                            k = C.length;
                                        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                                            if (i && f) {
                                                for (h = 0, a || f.ownerDocument === d || (p(f), s = !g); v = e[h++];) if (v(f, a || d, s)) {
                                                        u.push(f);
                                                        break
                                                    }
                                                c && (T = E)
                                            }
                                            n && ((f = !v && f) && y--, o && x.push(f))
                                        }
                                        if (y += m, n && m !== y) {
                                            for (h = 0; v = t[h++];) v(x, b, a, s);
                                            if (o) {
                                                if (y > 0) for (; m--;) x[m] || b[m] || (b[m] = q.call(u));
                                                b = Te(b)
                                            }
                                            H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                                        }
                                        return c && (T = E, l = w), x
                                    };
                                return n ? le(o) : o
                            }(o, i))).selector = e
                        }
                        return s
                    }, u = se.select = function(e, t, n, i) {
                        var o, u, l, c, f, p = "function" == typeof e && e,
                            d = !i && a(e = p.selector || e);
                        if (n = n || [], 1 === d.length) {
                            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                                if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                            }
                            for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);) if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                                    if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                                    break
                                }
                        }
                        return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
                    }, n.sortStable = b.split("").sort(A).join("") === b, n.detectDuplicates = !! f, p(), n.sortDetached = ce(function(e) {
                        return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                    }), ce(function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    }) || fe("type|href|height|width", function(e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }), n.attributes && ce(function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    }) || fe("value", function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    }), ce(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || fe(R, function(e, t, n) {
                        var r;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }), se
                }(t);
                w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
                var k = function(e, t, n) {
                    for (var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                            if (i && w(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                }, S = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    }, N = w.expr.match.needsContext;

                function A(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function j(e, t, n) {
                    return v(t) ? w.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n
                    }) : t.nodeType ? w.grep(e, function(e) {
                        return e === t !== n
                    }) : "string" != typeof t ? w.grep(e, function(e) {
                        return l.call(t, e) > -1 !== n
                    }) : w.filter(t, e, n)
                }
                w.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function(e) {
                        return 1 === e.nodeType
                    }))
                }, w.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length,
                            i = this;
                        if ("string" != typeof e) return this.pushStack(w(e).filter(function() {
                                for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0
                            }));
                        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                        return r > 1 ? w.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(j(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(j(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!j(this, "string" == typeof e && N.test(e) ? w(e) : e || [], !1).length
                    }
                });
                var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (w.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || q, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(r[1]) && w.isPlainObject(t)) for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (o = i.getElementById(r[2])) && (this[0] = o, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
                }).prototype = w.fn, q = w(i);
                var H = /^(?:parents|prev(?:Until|All))/,
                    O = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function P(e, t) {
                    for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }
                w.fn.extend({
                    has: function(e) {
                        var t = w(e, this),
                            n = t.length;
                        return this.filter(function() {
                            for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
                        })
                    },
                    closest: function(e, t) {
                        var n, r = 0,
                            i = this.length,
                            o = [],
                            a = "string" != typeof e && w(e);
                        if (!N.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), w.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return k(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return k(e, "parentNode", n)
                    },
                    next: function(e) {
                        return P(e, "nextSibling")
                    },
                    prev: function(e) {
                        return P(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return k(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return k(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return k(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return k(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return S((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return S(e.firstChild)
                    },
                    contents: function(e) {
                        return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                    }
                }, function(e, t) {
                    w.fn[e] = function(n, r) {
                        var i = w.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
                    }
                });
                var R = /[^\x20\t\r\n\f]+/g;

                function M(e) {
                    return e
                }
                function I(e) {
                    throw e
                }
                function W(e, t, n, r) {
                    var i;
                    try {
                        e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                w.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return w.each(e.match(R) || [], function(e, n) {
                            t[n] = !0
                        }), t
                    }(e) : w.extend({}, e);
                    var t, n, r, i, o = [],
                        a = [],
                        s = -1,
                        u = function() {
                            for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;)!1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                        }, l = {
                            add: function() {
                                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                    w.each(n, function(n, r) {
                                        v(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
                                    })
                                }(arguments), n && !t && u()), this
                            },
                            remove: function() {
                                return w.each(arguments, function(e, t) {
                                    for (var n;
                                    (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                }), this
                            },
                            has: function(e) {
                                return e ? w.inArray(e, o) > -1 : o.length > 0
                            },
                            empty: function() {
                                return o && (o = []), this
                            },
                            disable: function() {
                                return i = a = [], o = n = "", this
                            },
                            disabled: function() {
                                return !o
                            },
                            lock: function() {
                                return i = a = [], n || t || (o = n = ""), this
                            },
                            locked: function() {
                                return !!i
                            },
                            fireWith: function(e, n) {
                                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                            },
                            fire: function() {
                                return l.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!r
                            }
                        };
                    return l
                }, w.extend({
                    Deferred: function(e) {
                        var n = [
                            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                        ],
                            r = "pending",
                            i = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return i.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return w.Deferred(function(t) {
                                        w.each(n, function(n, r) {
                                            var i = v(e[r[4]]) && e[r[4]];
                                            o[r[1]](function() {
                                                var e = i && i.apply(this, arguments);
                                                e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                            })
                                        }), e = null
                                    }).promise()
                                },
                                then: function(e, r, i) {
                                    var o = 0;

                                    function a(e, n, r, i) {
                                        return function() {
                                            var s = this,
                                                u = arguments,
                                                l = function() {
                                                    var t, l;
                                                    if (!(e < o)) {
                                                        if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                        l = t && ("object" == typeof t || "function" == typeof t) && t.then, v(l) ? i ? l.call(t, a(o, n, M, i), a(o, n, I, i)) : (o++, l.call(t, a(o, n, M, i), a(o, n, I, i), a(o, n, M, n.notifyWith))) : (r !== M && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
                                                    }
                                                }, c = i ? l : function() {
                                                    try {
                                                        l()
                                                    } catch (t) {
                                                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== I && (s = void 0, u = [t]), n.rejectWith(s, u))
                                                    }
                                                };
                                            e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                                        }
                                    }
                                    return w.Deferred(function(t) {
                                        n[0][3].add(a(0, t, v(i) ? i : M, t.notifyWith)), n[1][3].add(a(0, t, v(e) ? e : M)), n[2][3].add(a(0, t, v(r) ? r : I))
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? w.extend(e, i) : i
                                }
                            }, o = {};
                        return w.each(n, function(e, t) {
                            var a = t[2],
                                s = t[5];
                            i[t[1]] = a.add, s && a.add(function() {
                                r = s
                            }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                            }, o[t[0] + "With"] = a.fireWith
                        }), i.promise(o), e && e.call(o, o), o
                    },
                    when: function(e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = a.call(arguments),
                            o = w.Deferred(),
                            s = function(e) {
                                return function(n) {
                                    r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i)
                                }
                            };
                        if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(i[n] && i[n].then))) return o.then();
                        for (; n--;) W(i[n], s(n), o.reject);
                        return o.promise()
                    }
                });
                var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                w.Deferred.exceptionHook = function(e, n) {
                    t.console && t.console.warn && e && $.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
                }, w.readyException = function(e) {
                    t.setTimeout(function() {
                        throw e
                    })
                };
                var F = w.Deferred();

                function B() {
                    i.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), w.ready()
                }
                w.fn.ready = function(e) {
                    return F.then(e).
                    catch (function(e) {
                        w.readyException(e)
                    }), this
                }, w.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(i, [w]))
                    }
                }), w.ready.then = F.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
                var _ = function(e, t, n, r, i, o, a) {
                    var s = 0,
                        u = e.length,
                        l = null == n;
                    if ("object" === b(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
                    else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                        return l.call(w(e), n)
                    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                }, z = /^-ms-/,
                    U = /-([a-z])/g;

                function X(e, t) {
                    return t.toUpperCase()
                }
                function V(e) {
                    return e.replace(z, "ms-").replace(U, X)
                }
                var G = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function Y() {
                    this.expando = w.expando + Y.uid++
                }
                Y.uid = 1, Y.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t) i[V(t)] = n;
                        else for (r in t) i[V(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                                for (; n--;) delete r[t[n]]
                            }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !w.isEmptyObject(t)
                    }
                };
                var Q = new Y,
                    J = new Y,
                    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    Z = /[A-Z]/g;

                function ee(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (i) {}
                            J.set(e, t, n)
                        } else n = void 0;
                    return n
                }
                w.extend({
                    hasData: function(e) {
                        return J.hasData(e) || Q.hasData(e)
                    },
                    data: function(e, t, n) {
                        return J.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        J.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return Q.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        Q.remove(e, t)
                    }
                }), w.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0],
                            a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                                Q.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each(function() {
                            J.set(this, e)
                        }) : _(this, function(t) {
                            var n;
                            if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                            this.each(function() {
                                J.set(this, e, t)
                            })
                        }, null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            J.remove(this, e)
                        })
                    }
                }), w.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, w.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = w.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = w._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                            w.dequeue(e, t)
                        }, o)), !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return Q.get(e, n) || Q.access(e, n, {
                            empty: w.Callbacks("once memory").add(function() {
                                Q.remove(e, [t + "queue", n])
                            })
                        })
                    }
                }), w.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                            var n = w.queue(this, e, t);
                            w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                        })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            w.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            i = w.Deferred(),
                            o = this,
                            a = this.length,
                            s = function() {
                                --r || i.resolveWith(o, [o])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), i.promise(t)
                    }
                });
                var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
                    re = ["Top", "Right", "Bottom", "Left"],
                    ie = i.documentElement,
                    oe = function(e) {
                        return w.contains(e.ownerDocument, e)
                    }, ae = {
                        composed: !0
                    };
                ie.getRootNode && (oe = function(e) {
                    return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
                });
                var se = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === w.css(e, "display")
                }, ue = function(e, t, n, r) {
                        var i, o, a = {};
                        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                        for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
                        return i
                    };

                function le(e, t, n, r) {
                    var i, o, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return w.css(e, t, "")
                        }, u = s(),
                        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && ne.exec(w.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, w.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                }
                var ce = {};

                function fe(e) {
                    var t, n = e.ownerDocument,
                        r = e.nodeName,
                        i = ce[r];
                    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
                }
                function pe(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && se(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));
                    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                w.fn.extend({
                    show: function() {
                        return pe(this, !0)
                    },
                    hide: function() {
                        return pe(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                            se(this) ? w(this).show() : w(this).hide()
                        })
                    }
                });
                var de = /^(?:checkbox|radio)$/i,
                    he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    ge = /^$|^module$|\/(?:java|ecma)script/i,
                    ve = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                function ye(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
                }
                function me(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
                }
                ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
                var xe, be, we = /<|&#?\w+;/;

                function Te(e, t, n, r, i) {
                    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o);
                            else if (we.test(o)) {
                        for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                        w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                    } else p.push(t.createTextNode(o));
                    for (f.textContent = "", d = 0; o = p[d++];) if (r && w.inArray(o, r) > -1) i && i.push(o);
                        else if (l = oe(o), a = ye(f.appendChild(o), "script"), l && me(a), n) for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);
                    return f
                }
                xe = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), g.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !! xe.cloneNode(!0).lastChild.defaultValue;
                var Ce = /^key/,
                    Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    ke = /^([^.]*)(?:\.(.+)|)/;

                function Se() {
                    return !0
                }
                function Ne() {
                    return !1
                }
                function Ae(e, t) {
                    return e === function() {
                        try {
                            return i.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }
                function De(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) De(e, s, n, r, t[s], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;
                    else if (!i) return e;
                    return 1 === o && (a = i, (i = function(e) {
                        return w().off(e), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = w.guid++)), e.each(function() {
                        w.event.add(this, t, i, r, n)
                    })
                }
                function je(e, t, n) {
                    n ? (Q.set(e, t, !1), w.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var r, i, o = Q.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (o.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (o = a.call(arguments), Q.set(this, t, o), r = n(this, t), this[t](), o !== (i = Q.get(this, t)) || r ? Q.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                            } else o.length && (Q.set(this, t, {
                                    value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
                                }), e.stopImmediatePropagation())
                        }
                    })) : void 0 === Q.get(e, t) && w.event.add(e, t, Se)
                }
                w.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(e);
                        if (v) for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(ie, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(R) || [""]).length; l--;) d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && w.expr.match.needsContext.test(i),
                                    namespace: h.join(".")
                                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
                        if (v && (u = v.events)) {
                            for (l = (t = (t || "").match(R) || [""]).length; l--;) if (d = g = (s = ke.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                    for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
                                } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                            w.isEmptyObject(u) && Q.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a, s = w.event.fix(e),
                            u = new Array(arguments.length),
                            l = (Q.get(this, "events") || {})[s.type] || [],
                            c = w.event.special[s.type] || {};
                        for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                            for (a = w.event.handlers.call(this, s, l), t = 0;
                            (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, s), s.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [],
                            u = t.delegateCount,
                            l = e.target;
                        if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        return l = this, u < t.length && s.push({
                            elem: l,
                            handlers: t.slice(u)
                        }), s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(w.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[w.expando] ? e : new w.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return de.test(t.type) && t.click && A(t, "input") && je(t, "click", Se), !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return de.test(t.type) && t.click && A(t, "input") && je(t, "click"), !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return de.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, w.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, w.Event = function(e, t) {
                    if (!(this instanceof w.Event)) return new w.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
                }, w.Event.prototype = {
                    constructor: w.Event,
                    isDefaultPrevented: Ne,
                    isPropagationStopped: Ne,
                    isImmediatePropagationStopped: Ne,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Se, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Se, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Se, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, w.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function(e) {
                        var t = e.button;
                        return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                    }
                }, w.event.addProp), w.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    w.event.special[e] = {
                        setup: function() {
                            return je(this, e, Ae), !1
                        },
                        trigger: function() {
                            return je(this, e), !0
                        },
                        delegateType: t
                    }
                }), w.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, function(e, t) {
                    w.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = e.relatedTarget,
                                i = e.handleObj;
                            return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                }), w.fn.extend({
                    on: function(e, t, n, r) {
                        return De(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return De(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function() {
                            w.event.remove(this, e, n, t)
                        })
                    }
                });
                var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                    Le = /<script|<style|<link/i,
                    He = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function Pe(e, t) {
                    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
                }
                function Re(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }
                function Me(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }
                function Ie(e, t) {
                    var n, r, i, o, a, s, u, l;
                    if (1 === t.nodeType) {
                        if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
                        J.hasData(e) && (s = J.access(e), u = w.extend({}, s), J.set(t, u))
                    }
                }
                function We(e, t, n, r) {
                    t = s.apply([], t);
                    var i, o, a, u, l, c, f = 0,
                        p = e.length,
                        d = p - 1,
                        h = t[0],
                        y = v(h);
                    if (y || p > 1 && "string" == typeof h && !g.checkClone && He.test(h)) return e.each(function(i) {
                            var o = e.eq(i);
                            y && (t[0] = h.call(this, i, o.html())), We(o, t, n, r)
                        });
                    if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                        for (u = (a = w.map(ye(i, "script"), Re)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(a, ye(l, "script"))), n.call(e[f], l, f);
                        if (u) for (c = a[a.length - 1].ownerDocument, w.map(a, Me), f = 0; f < u; f++) l = a[f], ge.test(l.type || "") && !Q.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {
                                    nonce: l.nonce || l.getAttribute("nonce")
                                }) : x(l.textContent.replace(Oe, ""), l, c))
                    }
                    return e
                }
                function $e(e, t, n) {
                    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && oe(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
                    return e
                }
                w.extend({
                    htmlPrefilter: function(e) {
                        return e.replace(qe, "<$1></$2>")
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                            f = oe(e);
                        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                        if (t) if (n) for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Ie(o[r], a[r]);
                            else Ie(e, c);
                        return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
                                if (t = n[Q.expando]) {
                                    if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                    n[Q.expando] = void 0
                                }
                                n[J.expando] && (n[J.expando] = void 0)
                            }
                    }
                }), w.fn.extend({
                    detach: function(e) {
                        return $e(this, e, !0)
                    },
                    remove: function(e) {
                        return $e(this, e)
                    },
                    text: function(e) {
                        return _(this, function(e) {
                            return void 0 === e ? w.text(this) : this.empty().each(function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            })
                        }, null, e, arguments.length)
                    },
                    append: function() {
                        return We(this, arguments, function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
                        })
                    },
                    prepend: function() {
                        return We(this, arguments, function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Pe(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        })
                    },
                    before: function() {
                        return We(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        })
                    },
                    after: function() {
                        return We(this, arguments, function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        })
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map(function() {
                            return w.clone(this, e, t)
                        })
                    },
                    html: function(e) {
                        return _(this, function(e) {
                            var t = this[0] || {}, n = 0,
                                r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !Le.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = w.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (i) {}
                            }
                            t && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return We(this, arguments, function(t) {
                            var n = this.parentNode;
                            w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
                        }, e)
                    }
                }), w.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, function(e, t) {
                    w.fn[e] = function(e) {
                        for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), u.apply(r, n.get());
                        return this.pushStack(r)
                    }
                });
                var Fe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
                    Be = function(e) {
                        var n = e.ownerDocument.defaultView;
                        return n && n.opener || (n = t), n.getComputedStyle(e)
                    }, _e = new RegExp(re.join("|"), "i");

                function ze(e, t, n) {
                    var r, i, o, a, s = e.style;
                    return (n = n || Be(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = w.style(e, t)), !g.pixelBoxStyles() && Fe.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
                }
                function Ue(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function e() {
                        if (c) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(l).appendChild(c);
                            var e = t.getComputedStyle(c);
                            r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", a = 12 === n(c.offsetWidth / 3), ie.removeChild(l), c = null
                        }
                    }
                    function n(e) {
                        return Math.round(parseFloat(e))
                    }
                    var r, o, a, s, u, l = i.createElement("div"),
                        c = i.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(g, {
                        boxSizingReliable: function() {
                            return e(), o
                        },
                        pixelBoxStyles: function() {
                            return e(), s
                        },
                        pixelPosition: function() {
                            return e(), r
                        },
                        reliableMarginLeft: function() {
                            return e(), u
                        },
                        scrollboxSize: function() {
                            return e(), a
                        }
                    }))
                }();
                var Xe = ["Webkit", "Moz", "ms"],
                    Ve = i.createElement("div").style,
                    Ge = {};

                function Ye(e) {
                    var t = w.cssProps[e] || Ge[e];
                    return t || (e in Ve ? e : Ge[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;) if ((e = Xe[n] + t) in Ve) return e
                    }(e) || e)
                }
                var Qe = /^(none|table(?!-c[ea]).+)/,
                    Je = /^--/,
                    Ke = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    }, Ze = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function et(e, t, n) {
                    var r = ne.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }
                function tt(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0,
                        s = 0,
                        u = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, i))) : (u += w.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += w.css(e, "border" + re[a] + "Width", !0, i) : s += w.css(e, "border" + re[a] + "Width", !0, i));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
                }
                function nt(e, t, n) {
                    var r = Be(e),
                        i = (!g.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                        o = i,
                        a = ze(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Fe.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!g.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }
                function rt(e, t, n, r, i) {
                    return new rt.prototype.init(e, t, n, r, i)
                }
                w.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = ze(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, a, s = V(t),
                                u = Je.test(t),
                                l = e.style;
                            if (u || (t = Ye(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                            "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, a, s = V(t);
                        return Je.test(t) || (t = Ye(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = ze(e, t, r)), "normal" === i && t in Ze && (i = Ze[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }), w.each(["height", "width"], function(e, t) {
                    w.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !Qe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, r) : ue(e, Ke, function() {
                                    return nt(e, t, r)
                                })
                        },
                        set: function(e, n, r) {
                            var i, o = Be(e),
                                a = !g.scrollboxSize() && "absolute" === o.position,
                                s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o),
                                u = r ? tt(e, t, r, s, o) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), u && (i = ne.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), et(0, n, u)
                        }
                    }
                }), w.cssHooks.marginLeft = Ue(g.reliableMarginLeft, function(e, t) {
                    if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                            marginLeft: 0
                        }, function() {
                            return e.getBoundingClientRect().left
                        })) + "px"
                }), w.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, function(e, t) {
                    w.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    }, "margin" !== e && (w.cssHooks[e + t].set = et)
                }), w.fn.extend({
                    css: function(e, t) {
                        return _(this, function(e, t, n) {
                            var r, i, o = {}, a = 0;
                            if (Array.isArray(t)) {
                                for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                        }, e, t, arguments.length > 1)
                    }
                }), w.Tween = rt, rt.prototype = {
                    constructor: rt,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = rt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : rt.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = rt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rt.propHooks._default.set(this), this
                    }
                }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, w.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, w.fx = rt.prototype.init, w.fx.step = {};
                var it, ot, at = /^(?:toggle|show|hide)$/,
                    st = /queueHooks$/;

                function ut() {
                    ot && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ut) : t.setTimeout(ut, w.fx.interval), w.fx.tick())
                }
                function lt() {
                    return t.setTimeout(function() {
                        it = void 0
                    }), it = Date.now()
                }
                function ct(e, t) {
                    var n, r = 0,
                        i = {
                            height: e
                        };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }
                function ft(e, t, n) {
                    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
                }
                function pt(e, t, n) {
                    var r, i, o = 0,
                        a = pt.prefilters.length,
                        s = w.Deferred().always(function() {
                            delete u.elem
                        }),
                        u = function() {
                            if (i) return !1;
                            for (var t = it || lt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                        }, l = s.promise({
                            elem: e,
                            props: w.extend({}, t),
                            opts: w.extend(!0, {
                                specialEasing: {},
                                easing: w.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: it || lt(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                return l.tweens.push(r), r
                            },
                            stop: function(t) {
                                var n = 0,
                                    r = t ? l.tweens.length : 0;
                                if (i) return this;
                                for (i = !0; n < r; n++) l.tweens[n].run(1);
                                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                            }
                        }),
                        c = l.props;
                    for (! function(e, t) {
                        var n, r, i, o, a;
                        for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++) if (r = pt.prefilters[o].call(l, e, c, l.opts)) return v(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                    return w.map(c, ft, l), v(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })), l
                }
                w.Animation = w.extend(pt, {
                    tweeners: {
                        "*": [function(e, t) {
                                var n = this.createTween(e, t);
                                return le(n.elem, e, ne.exec(t), n), n
                            }
                        ]
                    },
                    tweener: function(e, t) {
                        v(e) ? (t = e, e = ["*"]) : e = e.match(R);
                        for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                                p = this,
                                d = {}, h = e.style,
                                g = e.nodeType && se(e),
                                v = Q.get(e, "fxshow");
                            for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                a.unqueued || s()
                            }), a.unqueued++, p.always(function() {
                                p.always(function() {
                                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
                                })
                            })), t) if (i = t[r], at.test(i)) {
                                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                        if ("show" !== i || !v || void 0 === v[r]) continue;
                                        g = !0
                                    }
                                    d[r] = v && v[r] || w.style(e, r)
                                }
                            if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = w.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function() {
                                    h.display = l
                                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                                        display: l
                                    }), o && (v.hidden = !g), g && pe([e], !0), p.done(function() {
                                        for (r in g || pe([e]), Q.remove(e, "fxshow"), d) w.style(e, r, d[r])
                                    })), u = ft(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                        }
                    ],
                    prefilter: function(e, t) {
                        t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                    }
                }), w.speed = function(e, t, n) {
                    var r = e && "object" == typeof e ? w.extend({}, e) : {
                        complete: n || !n && t || v(e) && e,
                        duration: e,
                        easing: n && t || t && !v(t) && t
                    };
                    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        v(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                    }, r
                }, w.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(se).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = w.isEmptyObject(e),
                            o = w.speed(t, n, r),
                            a = function() {
                                var t = pt(this, w.extend({}, e), o);
                                (i || Q.get(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = null != e && e + "queueHooks",
                                o = w.timers,
                                a = Q.get(this);
                            if (i) a[i] && a[i].stop && r(a[i]);
                            else for (i in a) a[i] && a[i].stop && st.test(i) && r(a[i]);
                            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                            !t && n || w.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each(function() {
                            var t, n = Q.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = w.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), w.each(["toggle", "show", "hide"], function(e, t) {
                    var n = w.fn[t];
                    w.fn[t] = function(e, r, i) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, r, i)
                    }
                }), w.each({
                    slideDown: ct("show"),
                    slideUp: ct("hide"),
                    slideToggle: ct("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    w.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), w.timers = [], w.fx.tick = function() {
                    var e, t = 0,
                        n = w.timers;
                    for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || w.fx.stop(), it = void 0
                }, w.fx.timer = function(e) {
                    w.timers.push(e), w.fx.start()
                }, w.fx.interval = 13, w.fx.start = function() {
                    ot || (ot = !0, ut())
                }, w.fx.stop = function() {
                    ot = null
                }, w.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, w.fn.delay = function(e, n) {
                    return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, r) {
                        var i = t.setTimeout(n, e);
                        r.stop = function() {
                            t.clearTimeout(i)
                        }
                    })
                },
                function() {
                    var e = i.createElement("input"),
                        t = i.createElement("select").appendChild(i.createElement("option"));
                    e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
                }();
                var dt, ht = w.expr.attrHandle;
                w.fn.extend({
                    attr: function(e, t) {
                        return _(this, w.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            w.removeAttr(this, e)
                        })
                    }
                }), w.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!g.radioValue && "radio" === t && A(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0,
                            i = t && t.match(R);
                        if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
                    }
                }), dt = {
                    set: function(e, t, n) {
                        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, t) {
                    var n = ht[t] || w.find.attr;
                    ht[t] = function(e, t, r) {
                        var i, o, a = t.toLowerCase();
                        return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
                    }
                });
                var gt = /^(?:input|select|textarea|button)$/i,
                    vt = /^(?:a|area)$/i;

                function yt(e) {
                    return (e.match(R) || []).join(" ")
                }
                function mt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }
                function xt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
                }
                w.fn.extend({
                    prop: function(e, t) {
                        return _(this, w.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each(function() {
                            delete this[w.propFix[e] || e]
                        })
                    }
                }), w.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = w.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), g.optSelected || (w.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                    w.propFix[this.toLowerCase()] = this
                }), w.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (v(e)) return this.each(function(t) {
                                w(this).addClass(e.call(this, t, mt(this)))
                            });
                        if ((t = xt(e)).length) for (; n = this[u++];) if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    i !== (s = yt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (v(e)) return this.each(function(t) {
                                w(this).removeClass(e.call(this, t, mt(this)))
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = xt(e)).length) for (; n = this[u++];) if (i = mt(n), r = 1 === n.nodeType && " " + yt(i) + " ") {
                                    for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                    i !== (s = yt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e,
                            r = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function(n) {
                            w(this).toggleClass(e.call(this, n, mt(this), t), t)
                        }) : this.each(function() {
                            var t, i, o, a;
                            if (r) for (i = 0, o = w(this), a = xt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else void 0 !== e && "boolean" !== n || ((t = mt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""))
                        })
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + yt(mt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1
                    }
                });
                var bt = /\r/g;
                w.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = v(e), this.each(function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
                    }
                }), w.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = w.find.attr(e, "value");
                                return null != t ? t : yt(w.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options,
                                    o = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                        if (t = w(n).val(), a) return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o
                            }
                        }
                    }
                }), w.each(["radio", "checkbox"], function() {
                    w.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                        }
                    }, g.checkOn || (w.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                }), g.focusin = "onfocusin" in t;
                var wt = /^(?:focusinfocus|focusoutblur)$/,
                    Tt = function(e) {
                        e.stopPropagation()
                    };
                w.extend(w.event, {
                    trigger: function(e, n, r, o) {
                        var a, s, u, l, c, f, d, h, g = [r || i],
                            m = p.call(e, "type") ? e.type : e,
                            x = p.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = h = u = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                            if (!o && !d.noBubble && !y(r)) {
                                for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) g.push(s), u = s;
                                u === (r.ownerDocument || i) && g.push(u.defaultView || u.parentWindow || t)
                            }
                            for (a = 0;
                            (s = g[a++]) && !e.isPropagationStopped();) h = s, e.type = a > 1 ? l : d.bindType || m, (f = (Q.get(s, "events") || {})[e.type] && Q.get(s, "handle")) && f.apply(s, n), (f = c && s[c]) && f.apply && G(s) && (e.result = f.apply(s, n), !1 === e.result && e.preventDefault());
                            return e.type = m, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), n) || !G(r) || c && v(r[m]) && !y(r) && ((u = r[c]) && (r[c] = null), w.event.triggered = m, e.isPropagationStopped() && h.addEventListener(m, Tt), r[m](), e.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (r[c] = u)), e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = w.extend(new w.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        w.event.trigger(r, null, t)
                    }
                }), w.fn.extend({
                    trigger: function(e, t) {
                        return this.each(function() {
                            w.event.trigger(e, t, this)
                        })
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return w.event.trigger(e, t, n, !0)
                    }
                }), g.focusin || w.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(e, t) {
                    var n = function(e) {
                        w.event.simulate(t, e.target, w.event.fix(e))
                    };
                    w.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this,
                                i = Q.access(r, t);
                            i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this,
                                i = Q.access(r, t) - 1;
                            i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                        }
                    }
                });
                var Ct = t.location,
                    Et = Date.now(),
                    kt = /\?/;
                w.parseXML = function(e) {
                    var n;
                    if (!e || "string" != typeof e) return null;
                    try {
                        n = (new t.DOMParser).parseFromString(e, "text/xml")
                    } catch (r) {
                        n = void 0
                    }
                    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + e), n
                };
                var St = /\[\]$/,
                    Nt = /\r?\n/g,
                    At = /^(?:submit|button|image|reset|file)$/i,
                    Dt = /^(?:input|select|textarea|keygen)/i;

                function jt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t)) w.each(t, function(t, i) {
                            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                        });
                    else if (n || "object" !== b(t)) r(e, t);
                    else for (i in t) jt(e + "[" + i + "]", t[i], n, r)
                }
                w.param = function(e, t) {
                    var n, r = [],
                        i = function(e, t) {
                            var n = v(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function() {
                            i(this.name, this.value)
                        });
                    else for (n in e) jt(n, e[n], t, i);
                    return r.join("&")
                }, w.fn.extend({
                    serialize: function() {
                        return w.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var e = w.prop(this, "elements");
                            return e ? w.makeArray(e) : this
                        }).filter(function() {
                            var e = this.type;
                            return this.name && !w(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !de.test(e))
                        }).map(function(e, t) {
                            var n = w(this).val();
                            return null == n ? null : Array.isArray(n) ? w.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Nt, "\r\n")
                                }
                            }) : {
                                name: t.name,
                                value: n.replace(Nt, "\r\n")
                            }
                        }).get()
                    }
                });
                var qt = /%20/g,
                    Lt = /#.*$/,
                    Ht = /([?&])_=[^&]*/,
                    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Pt = /^(?:GET|HEAD)$/,
                    Rt = /^\/\//,
                    Mt = {}, It = {}, Wt = "*/".concat("*"),
                    $t = i.createElement("a");

                function Ft(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, i = 0,
                            o = t.toLowerCase().match(R) || [];
                        if (v(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }
                function Bt(e, t, n, r) {
                    var i = {}, o = e === It;

                    function a(s) {
                        var u;
                        return i[s] = !0, w.each(e[s] || [], function(e, s) {
                            var l = s(t, n, r);
                            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                        }), u
                    }
                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }
                function _t(e, t) {
                    var n, r, i = w.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && w.extend(!0, e, r), e
                }
                $t.href = Ct.href, w.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Ct.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Wt,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": w.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? _t(_t(e, w.ajaxSettings), t) : _t(w.ajaxSettings, e)
                    },
                    ajaxPrefilter: Ft(Mt),
                    ajaxTransport: Ft(It),
                    ajax: function(e, n) {
                        "object" == typeof e && (n = e, e = void 0), n = n || {};
                        var r, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                            g = h.context || h,
                            v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                            y = w.Deferred(),
                            m = w.Callbacks("once memory"),
                            x = h.statusCode || {}, b = {}, T = {}, C = "canceled",
                            E = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (c) {
                                        if (!s) for (s = {}; t = Ot.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = s[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return c ? a : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == c && (h.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e) if (c) E.always(e[E.status]);
                                        else for (t in e) x[t] = [x[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || C;
                                    return r && r.abort(t), k(0, t), this
                                }
                            };
                        if (y.promise(E), h.url = ((e || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
                            l = i.createElement("a");
                            try {
                                l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host
                            } catch (S) {
                                h.crossDomain = !0
                            }
                        }
                        if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Mt, h, n, E), c) return E;
                        for (p in (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et+++d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(p, h.headers[p]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                        if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), r = Bt(It, h, n, E)) {
                            if (E.readyState = 1, f && v.trigger("ajaxSend", [E, h]), c) return E;
                            h.async && h.timeout > 0 && (u = t.setTimeout(function() {
                                E.abort("timeout")
                            }, h.timeout));
                            try {
                                c = !1, r.send(b, k)
                            } catch (S) {
                                if (c) throw S;
                                k(-1, S)
                            }
                        } else k(-1, "No Transport");

                        function k(e, n, i, s) {
                            var l, p, d, b, T, C = n;
                            c || (c = !0, u && t.clearTimeout(u), r = void 0, a = s || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (b = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r) for (i in s) if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    o = o || a
                                } if (o) return o !== u[0] && u.unshift(o), n[o]
                            }(h, E, i)), b = function(e, t, n, r) {
                                var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                                if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
                                        else if ("*" !== u && u !== o) {
                                    if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a) if (a && e.throws) t = a(t);
                                        else try {
                                                t = a(t)
                                        } catch (S) {
                                        return {
                                            state: "parsererror",
                                            error: a ? S : "No conversion from " + u + " to " + o
                                        }
                                    }
                                }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === e || "HEAD" === h.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (v.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
                        }
                        return E
                    },
                    getJSON: function(e, t, n) {
                        return w.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return w.get(e, void 0, t, "script")
                    }
                }), w.each(["get", "post"], function(e, t) {
                    w[t] = function(e, n, r, i) {
                        return v(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, w.isPlainObject(e) && e))
                    }
                }), w._evalUrl = function(e, t) {
                    return w.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            w.globalEval(e, t)
                        }
                    })
                }, w.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (v(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        }).append(this)), this
                    },
                    wrapInner: function(e) {
                        return v(e) ? this.each(function(t) {
                            w(this).wrapInner(e.call(this, t))
                        }) : this.each(function() {
                            var t = w(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) {
                        var t = v(e);
                        return this.each(function(n) {
                            w(this).wrapAll(t ? e.call(this, n) : e)
                        })
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each(function() {
                            w(this).replaceWith(this.childNodes)
                        }), this
                    }
                }), w.expr.pseudos.hidden = function(e) {
                    return !w.expr.pseudos.visible(e)
                }, w.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, w.ajaxSettings.xhr = function() {
                    try {
                        return new t.XMLHttpRequest
                    } catch (e) {}
                };
                var zt = {
                    0: 200,
                    1223: 204
                }, Ut = w.ajaxSettings.xhr();
                g.cors = !! Ut && "withCredentials" in Ut, g.ajax = Ut = !! Ut, w.ajaxTransport(function(e) {
                    var n, r;
                    if (g.cors || Ut && !e.crossDomain) return {
                            send: function(i, o) {
                                var a, s = e.xhr();
                                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                                for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                                n = function(e) {
                                    return function() {
                                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                            binary: s.response
                                        } : {
                                            text: s.responseText
                                        }, s.getAllResponseHeaders()))
                                    }
                                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                    4 === s.readyState && t.setTimeout(function() {
                                        n && r()
                                    })
                                }, n = n("abort");
                                try {
                                    s.send(e.hasContent && e.data || null)
                                } catch (u) {
                                    if (n) throw u
                                }
                            },
                            abort: function() {
                                n && n()
                            }
                    }
                }), w.ajaxPrefilter(function(e) {
                    e.crossDomain && (e.contents.script = !1)
                }), w.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return w.globalEval(e), e
                        }
                    }
                }), w.ajaxPrefilter("script", function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                }), w.ajaxTransport("script", function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                            send: function(r, o) {
                                t = w("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                                }), i.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                    }
                });
                var Xt, Vt = [],
                    Gt = /(=)\?(?=&|$)|\?\?/;
                w.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Vt.pop() || w.expando + "_" + Et++;
                        return this[e] = !0, e
                    }
                }), w.ajaxPrefilter("json jsonp", function(e, n, r) {
                    var i, o, a, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                            return a || w.error(i + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", o = t[i], t[i] = function() {
                        a = arguments
                    }, r.always(function() {
                        void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, Vt.push(i)), a && v(o) && o(a[0]), a = o = void 0
                    }), "script"
                }), g.createHTMLDocument = ((Xt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), w.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((r = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(r)) : t = i), a = !n && [], (o = D.exec(e)) ? [t.createElement(o[1])] : (o = Te([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
                    var r, o, a
                }, w.fn.load = function(e, t, n) {
                    var r, i, o, a = this,
                        s = e.indexOf(" ");
                    return s > -1 && (r = yt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done(function(e) {
                        o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                    }).always(n && function(e, t) {
                        a.each(function() {
                            n.apply(this, o || [e.responseText, t, e])
                        })
                    }), this
                }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                    w.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }), w.expr.pseudos.animated = function(e) {
                    return w.grep(w.timers, function(t) {
                        return e === t.elem
                    }).length
                }, w.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, a, s, u, l = w.css(e, "position"),
                            c = w(e),
                            f = {};
                        "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                    }
                }, w.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                                w.offset.setOffset(this, e, t)
                            });
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0],
                                i = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - w.css(r, "marginTop", !0),
                                left: t.left - i.left - w.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                            return e || ie
                        })
                    }
                }), w.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(e, t) {
                    var n = "pageYOffset" === t;
                    w.fn[e] = function(r) {
                        return _(this, function(e, r, i) {
                            var o;
                            if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }, e, r, arguments.length)
                    }
                }), w.each(["top", "left"], function(e, t) {
                    w.cssHooks[t] = Ue(g.pixelPosition, function(e, n) {
                        if (n) return n = ze(e, t), Fe.test(n) ? w(e).position()[t] + "px" : n
                    })
                }), w.each({
                    Height: "height",
                    Width: "width"
                }, function(e, t) {
                    w.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function(n, r) {
                        w.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" != typeof i),
                                s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return _(this, function(t, n, i) {
                                var o;
                                return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                            }, t, a ? i : void 0, a)
                        }
                    })
                }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
                    w.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }), w.fn.extend({
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }), w.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    }
                }), w.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = a.call(arguments, 2), (i = function() {
                            return e.apply(t || this, r.concat(a.call(arguments)))
                        }).guid = e.guid = e.guid || w.guid++, i
                }, w.holdReady = function(e) {
                    e ? w.readyWait++ : w.ready(!0)
                }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = v, w.isWindow = y, w.camelCase = V, w.type = b, w.now = Date.now, w.isNumeric = function(e) {
                    var t = w.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, "function" == typeof e && e.amd && e("jquery", [], function() {
                    return w
                });
                var Yt = t.jQuery,
                    Qt = t.$;
                return w.noConflict = function(e) {
                    return t.$ === w && (t.$ = Qt), e && t.jQuery === w && (t.jQuery = Yt), w
                }, n || (t.jQuery = t.$ = w), w
            });
        }, {
            "process": "KIG8"
        }
    ],
    "vQJB": [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.
            default = void 0;
            var t = "http://127.0.0.1:7001/api/v1/";
            /timemail.net/.test(location.host) && (t = "https://api.timemail.net/api/v1/");
            var e = {
                getTotal: t + "total",
                putLetter: t + "letter"
            };
            exports.
            default = e;
        }, {}
    ],
    "ejps": [function(require, module, exports) {
            exports.formatDate = function(t) {
                var e = t.getDate(),
                    a = t.getMonth() + 1,
                    n = t.getFullYear();
                return "".concat(n, "年").concat(a, "月").concat(e, "日")
            }, exports.countFromStart = function() {
                var t = +new Date("2018.7.16");
                return Math.ceil((+new Date - t) / 864e5)
            };
        }, {}
    ],
    "TNuW": [function(require, module, exports) {
            ! function(t) {
                t.extend(t.easing, {
                    spincrementEasing: function(t, a, e, n, r) {
                        return a === r ? e + n : n * (1 - Math.pow(2, -10 * a / r)) + e
                    }
                }), t.fn.spincrement = function(a) {
                    function e(t, a) {
                        if (t = t.toFixed(a), a > 0 && "." !== n.decimalPoint && (t = t.replace(".", n.decimalPoint)), n.thousandSeparator) for (; r.test(t);) t = t.replace(r, "$1" + n.thousandSeparator + "$2");
                        return t
                    }
                    var n = t.extend({
                        from: 0,
                        to: null,
                        decimalPlaces: null,
                        decimalPoint: ".",
                        thousandSeparator: ",",
                        duration: 1e3,
                        leeway: 50,
                        easing: "spincrementEasing",
                        fade: !0,
                        complete: null
                    }, a),
                        r = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
                    return this.each(function() {
                        var a, r = t(this),
                            o = n.from;
                        if (r.attr("data-from") && (o = parseFloat(r.attr("data-from"))), r.attr("data-to")) a = parseFloat(r.attr("data-to"));
                        else if (null !== n.to) a = n.to;
                        else {
                            var i = t.inArray(n.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) > -1 ? "\\" + n.thousandSeparator : n.thousandSeparator,
                                l = new RegExp(i, "g");
                            a = parseFloat(r.text().replace(l, ""))
                        }
                        var c, s = n.duration;
                        if (n.leeway && (s += Math.round(n.duration * (2 * Math.random() - 1) * n.leeway / 100)), r.attr("data-dp")) c = parseInt(r.attr("data-dp"), 10);
                        else if (null !== n.decimalPlaces) c = n.decimalPlaces;
                        else {
                            var d = r.text().indexOf(n.decimalPoint);
                            c = d > -1 ? r.text().length - (d + 1) : 0
                        }
                        r.css("counter", o), n.fade && r.css("opacity", 0), r.animate({
                            counter: a,
                            opacity: 1
                        }, {
                            easing: n.easing,
                            duration: s,
                            step: function(t) {
                                r.html(e(t * a, c))
                            },
                            complete: function() {
                                r.css("counter", null), r.html(e(a, c)), n.complete && n.complete(r)
                            }
                        })
                    })
                }
            }(jQuery);
        }, {}
    ],
    "VJtr": [function(require, module, exports) {
            ! function(t) {
                var n = function() {
                    function t() {}
                    return t.prototype.init = function(t) {
                        this.$container = t, this.bind()
                    }, t.prototype.bind = function() {}, t
                }();
                t.BaseController = n
            }(n || (n = {})), $(function() {
                $(".js-controller").each(function() {
                    var t = $(this);
                    t.data("controller").split(" ").forEach(function(e) {
                        (new n[e]).init(t)
                    })
                })
            });
            var t = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, n) {
                        t.__proto__ = n
                    } || function(t, n) {
                        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                    };
                    return function(n, e) {
                        function o() {
                            this.constructor = n
                        }
                        t(n, e), n.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
                    }
                }();
            ! function(n) {
                var e = function(n) {
                    function e() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.activeAccountInTable = "free", t.sel = {
                            navDesktop: ".js-nav-desktop",
                            navMobile: ".js-nav-mobile",
                            navLink: ".js-nav-link",
                            body: "body",
                            logo: ".js-logo-main",
                            nav: ".js-nav",
                            menuButton: ".js-button-menu",
                            mobileMenu: ".js-menu",
                            featureBlock: ".js-feature-block",
                            animatedIcon: ".js-icon",
                            featuresSection: "#features",
                            aboutSection: "#about",
                            tableHeader: ".js-table-header"
                        }, t
                    }
                    return t(e, n), e.prototype.init = function(t) {
                        n.prototype.init.call(this, t), this.$featuresSection = this.$container.find(this.sel.featuresSection), this.$aboutSection = this.$container.find(this.sel.aboutSection), this.$container.find(this.sel.logo).parent().removeAttr("href"), this.$container.find(this.sel.logo).parent().css("pointer-events", "none"), this.handleScroll()
                    }, e.prototype.bind = function() {
                        var t = this;
                        n.prototype.bind.call(this), this.$container.find(this.sel.navDesktop).find(this.sel.navLink).on("click", function(n) {
                            n.preventDefault();
                            var e = $(n.currentTarget);
                            e.hasClass("active") || t.scrollToElement(e, t.$container.find(t.sel.navDesktop).outerHeight())
                        }), this.$container.find(this.sel.navMobile).find(this.sel.navLink).on("click", function(n) {
                            var e = $(n.currentTarget);
                            n.preventDefault(), e.hasClass("active") || (t.closeMenu(), t.scrollToElement(e, t.$container.find(t.sel.navMobile).outerHeight()))
                        }), this.$container.find(this.sel.logo).on("click", function(n) {
                            t.$container.find(t.sel.navMobile).hasClass("active") && t.$container.find(t.sel.navMobile).removeClass("active"), $("html, body").animate({
                                scrollTop: 0
                            }, 300)
                        }), $(window).on("scroll touchmove resize", function() {
                            $(window).scrollTop() > 0 ? (t.$container.find(t.sel.nav).addClass("scroll"), t.$container.find(t.sel.logo).css("cursor", "pointer"), t.$container.find(t.sel.logo).parent().css("pointer-events", "auto")) : (t.$container.find(t.sel.nav).removeClass("scroll"), t.$container.find(t.sel.logo).css("cursor", "default"), t.$container.find(t.sel.logo).parent().css("pointer-events", "none")), t.handleScroll()
                        })
                    }, e.prototype.scrollToElement = function(t, n) {}, e.prototype.handleScroll = function() {
                        var t = $(window).scrollTop(),
                            n = this.$container.find(this.sel.navDesktop),
                            e = $(window).height();
                        this.$container.find(this.sel.navMobile).is(":visible") && (n = this.$container.find(this.sel.navMobile)), (t += n.outerHeight()) >= $(this.sel.featureBlock).first().position().top - .9 * e && this.animateBlocks(this.sel.featureBlock, "fadeInUp", 200) && this.animateIcons(this.$aboutSection, "upper bounceInUp", 500)
                    }, e.prototype.closeMenu = function() {
                        this.$container.find(this.sel.mobileMenu).removeClass("show"), this.$container.find(this.sel.menuButton).removeClass("close")
                    }, e.prototype.animateBlocks = function(t, n, e) {
                        this.$container.find(t).each(function(t, o) {
                            setTimeout(function() {
                                $(o).addClass("animated " + n)
                            }, t * e)
                        })
                    }, e.prototype.animateIcons = function(t, n, e) {
                        t.find(this.sel.animatedIcon).each(function(t, o) {
                            setTimeout(function() {
                                $(o).attr("class", "js-icon animated " + n)
                            }, t * e)
                        })
                    }, e
                }(n.BaseController);
                n.LandingPageController = e
            }(n || (n = {}));
            var n;
            t = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                };
                return function(n, e) {
                    function o() {
                        this.constructor = n
                    }
                    t(n, e), n.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
                }
            }();
            ! function(n) {
                var e = function(n) {
                    function e() {
                        var t = null !== n && n.apply(this, arguments) || this;
                        return t.sel = {
                            menuButton: ".js-button-menu",
                            mobileMenu: ".js-menu",
                            body: "body",
                            navMobile: ".js-nav-mobile",
                            navDesktop: ".js-nav-desktop",
                            nav: ".js-header",
                            comparisonTableDesktop: ".js-desktop-comparison-table",
                            tableHeader: ".js-table-header",
                            tableBlock: ".js-table-block",
                            hideTableButton: ".js-hide-table-button",
                            contentTable: ".js-content-table"
                        }, t
                    }
                    return t(e, n), e.prototype.init = function(t) {
                        n.prototype.init.call(this, t)
                    }, e.prototype.bind = function() {
                        var t = this;
                        n.prototype.bind.call(this), this.displayNav(), this.$container.find(this.sel.menuButton).on("click", function() {
                            t.$container.find(t.sel.menuButton).hasClass("close") ? t.closeMenu() : t.openMenu()
                        }), $(this.sel.body).on("click", function(n) {
                            0 == $(n.target).closest(".js-nav-mobile").length && t.closeMenu()
                        }), $(window).on("scroll touchmove resize", function() {
                            t.displayNav()
                        })
                    }, e.prototype.closeMenu = function() {
                        this.$container.find(this.sel.mobileMenu).removeClass("show"), this.$container.find(this.sel.menuButton).removeClass("close")
                    }, e.prototype.openMenu = function() {
                        this.$container.find(this.sel.mobileMenu).addClass("show"), this.$container.find(this.sel.menuButton).addClass("close")
                    }, e.prototype.displayNav = function() {
                        var t = $(window).scrollTop(),
                            n = $(this.sel.body).find(this.sel.navDesktop),
                            e = $(this.sel.body).find(this.sel.comparisonTableDesktop);
                        $(this.sel.body).find(this.sel.navMobile).is(":visible") && (n = $(this.sel.body).find(this.sel.navMobile));
                        var o = e.find(this.sel.tableHeader),
                            i = e.find(this.sel.tableBlock).last();
                        n.toggleClass("scroll shadow", t > 0), t > 0 ? "0px" == e.find(this.sel.contentTable).css("margin-top") && t >= o.parent().offset().top - n.outerHeight() && t <= i.offset().top - n.outerHeight() - 50 ? (n.removeClass("shadow"), o.addClass("fixed"), e.find(this.sel.hideTableButton).addClass("show")) : (n.addClass("shadow"), o.removeClass("fixed"), e.find(this.sel.hideTableButton).removeClass("show")) : o.removeClass("fixed")
                    }, e
                }(n.BaseController);
                n.PageHeaderController = e
            }(n || (n = {}));
        }, {}
    ],
    "vfsJ": [function(require, module, exports) {
            var define;
            var global = arguments[3];
            var e, t = arguments[3];
            ! function(t, n) {
                "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof e && e.amd ? e(n) : (t = t || self).flatpickr = n()
            }(this, function() {
                "use strict";
                var e = function() {
                    return (e = Object.assign || function(e) {
                        for (var t, n = 1, a = arguments.length; n < a; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                }, t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
                    n = {
                        _disable: [],
                        _enable: [],
                        allowInput: !1,
                        altFormat: "F j, Y",
                        altInput: !1,
                        altInputClass: "form-control input",
                        animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
                        ariaDateFormat: "F j, Y",
                        clickOpens: !0,
                        closeOnSelect: !0,
                        conjunction: ", ",
                        dateFormat: "Y-m-d",
                        defaultHour: 12,
                        defaultMinute: 0,
                        defaultSeconds: 0,
                        disable: [],
                        disableMobile: !1,
                        enable: [],
                        enableSeconds: !1,
                        enableTime: !1,
                        errorHandler: function(e) {
                            return "undefined" != typeof console && console.warn(e)
                        },
                        getWeek: function(e) {
                            var t = new Date(e.getTime());
                            t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                            var n = new Date(t.getFullYear(), 0, 4);
                            return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
                        },
                        hourIncrement: 1,
                        ignoredFocusElements: [],
                        inline: !1,
                        locale: "default",
                        minuteIncrement: 5,
                        mode: "single",
                        monthSelectorType: "dropdown",
                        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
                        noCalendar: !1,
                        now: new Date,
                        onChange: [],
                        onClose: [],
                        onDayCreate: [],
                        onDestroy: [],
                        onKeyDown: [],
                        onMonthChange: [],
                        onOpen: [],
                        onParseConfig: [],
                        onReady: [],
                        onValueUpdate: [],
                        onYearChange: [],
                        onPreCalendarPosition: [],
                        plugins: [],
                        position: "auto",
                        positionElement: void 0,
                        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
                        shorthandCurrentMonth: !1,
                        showMonths: 1,
                        static: !1,
                        time_24hr: !1,
                        weekNumbers: !1,
                        wrap: !1
                    }, a = {
                        weekdays: {
                            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        },
                        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                        firstDayOfWeek: 0,
                        ordinal: function(e) {
                            var t = e % 100;
                            if (t > 3 && t < 21) return "th";
                            switch (t % 10) {
                                case 1:
                                    return "st";
                                case 2:
                                    return "nd";
                                case 3:
                                    return "rd";
                                default:
                                    return "th"
                            }
                        },
                        rangeSeparator: " to ",
                        weekAbbreviation: "Wk",
                        scrollTitle: "Scroll to increment",
                        toggleTitle: "Click to toggle",
                        amPM: ["AM", "PM"],
                        yearAriaLabel: "Year",
                        hourAriaLabel: "Hour",
                        minuteAriaLabel: "Minute",
                        time_24hr: !1
                    }, i = function(e) {
                        return ("0" + e).slice(-2)
                    }, o = function(e) {
                        return !0 === e ? 1 : 0
                    };

                function r(e, t, n) {
                    var a;
                    return void 0 === n && (n = !1),
                    function() {
                        var i = this,
                            o = arguments;
                        null !== a && clearTimeout(a), a = window.setTimeout(function() {
                            a = null, n || e.apply(i, o)
                        }, t), n && !a && e.apply(i, o)
                    }
                }
                var l = function(e) {
                    return e instanceof Array ? e : [e]
                };

                function c(e, t, n) {
                    if (!0 === n) return e.classList.add(t);
                    e.classList.remove(t)
                }
                function d(e, t, n) {
                    var a = window.document.createElement(e);
                    return t = t || "", n = n || "", a.className = t, void 0 !== n && (a.textContent = n), a
                }
                function s(e) {
                    for (; e.firstChild;) e.removeChild(e.firstChild)
                }
                function u(e, t) {
                    var n = d("div", "numInputWrapper"),
                        a = d("input", "numInput " + e),
                        i = d("span", "arrowUp"),
                        o = d("span", "arrowDown");
                    if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number" : (a.type = "text", a.pattern = "\\d*"), void 0 !== t) for (var r in t) a.setAttribute(r, t[r]);
                    return n.appendChild(a), n.appendChild(i), n.appendChild(o), n
                }
                var f = function() {}, m = function(e, t, n) {
                        return n.months[t ? "shorthand" : "longhand"][e]
                    }, g = {
                        D: f,
                        F: function(e, t, n) {
                            e.setMonth(n.months.longhand.indexOf(t))
                        },
                        G: function(e, t) {
                            e.setHours(parseFloat(t))
                        },
                        H: function(e, t) {
                            e.setHours(parseFloat(t))
                        },
                        J: function(e, t) {
                            e.setDate(parseFloat(t))
                        },
                        K: function(e, t, n) {
                            e.setHours(e.getHours() % 12 + 12 * o(new RegExp(n.amPM[1], "i").test(t)))
                        },
                        M: function(e, t, n) {
                            e.setMonth(n.months.shorthand.indexOf(t))
                        },
                        S: function(e, t) {
                            e.setSeconds(parseFloat(t))
                        },
                        U: function(e, t) {
                            return new Date(1e3 * parseFloat(t))
                        },
                        W: function(e, t, n) {
                            var a = parseInt(t),
                                i = new Date(e.getFullYear(), 0, 2 + 7 * (a - 1), 0, 0, 0, 0);
                            return i.setDate(i.getDate() - i.getDay() + n.firstDayOfWeek), i
                        },
                        Y: function(e, t) {
                            e.setFullYear(parseFloat(t))
                        },
                        Z: function(e, t) {
                            return new Date(t)
                        },
                        d: function(e, t) {
                            e.setDate(parseFloat(t))
                        },
                        h: function(e, t) {
                            e.setHours(parseFloat(t))
                        },
                        i: function(e, t) {
                            e.setMinutes(parseFloat(t))
                        },
                        j: function(e, t) {
                            e.setDate(parseFloat(t))
                        },
                        l: f,
                        m: function(e, t) {
                            e.setMonth(parseFloat(t) - 1)
                        },
                        n: function(e, t) {
                            e.setMonth(parseFloat(t) - 1)
                        },
                        s: function(e, t) {
                            e.setSeconds(parseFloat(t))
                        },
                        u: function(e, t) {
                            return new Date(parseFloat(t))
                        },
                        w: f,
                        y: function(e, t) {
                            e.setFullYear(2e3 + parseFloat(t))
                        }
                    }, p = {
                        D: "(\\w+)",
                        F: "(\\w+)",
                        G: "(\\d\\d|\\d)",
                        H: "(\\d\\d|\\d)",
                        J: "(\\d\\d|\\d)\\w+",
                        K: "",
                        M: "(\\w+)",
                        S: "(\\d\\d|\\d)",
                        U: "(.+)",
                        W: "(\\d\\d|\\d)",
                        Y: "(\\d{4})",
                        Z: "(.+)",
                        d: "(\\d\\d|\\d)",
                        h: "(\\d\\d|\\d)",
                        i: "(\\d\\d|\\d)",
                        j: "(\\d\\d|\\d)",
                        l: "(\\w+)",
                        m: "(\\d\\d|\\d)",
                        n: "(\\d\\d|\\d)",
                        s: "(\\d\\d|\\d)",
                        u: "(.+)",
                        w: "(\\d\\d|\\d)",
                        y: "(\\d{2})"
                    }, h = {
                        Z: function(e) {
                            return e.toISOString()
                        },
                        D: function(e, t, n) {
                            return t.weekdays.shorthand[h.w(e, t, n)]
                        },
                        F: function(e, t, n) {
                            return m(h.n(e, t, n) - 1, !1, t)
                        },
                        G: function(e, t, n) {
                            return i(h.h(e, t, n))
                        },
                        H: function(e) {
                            return i(e.getHours())
                        },
                        J: function(e, t) {
                            return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
                        },
                        K: function(e, t) {
                            return t.amPM[o(e.getHours() > 11)]
                        },
                        M: function(e, t) {
                            return m(e.getMonth(), !0, t)
                        },
                        S: function(e) {
                            return i(e.getSeconds())
                        },
                        U: function(e) {
                            return e.getTime() / 1e3
                        },
                        W: function(e, t, n) {
                            return n.getWeek(e)
                        },
                        Y: function(e) {
                            return e.getFullYear()
                        },
                        d: function(e) {
                            return i(e.getDate())
                        },
                        h: function(e) {
                            return e.getHours() % 12 ? e.getHours() % 12 : 12
                        },
                        i: function(e) {
                            return i(e.getMinutes())
                        },
                        j: function(e) {
                            return e.getDate()
                        },
                        l: function(e, t) {
                            return t.weekdays.longhand[e.getDay()]
                        },
                        m: function(e) {
                            return i(e.getMonth() + 1)
                        },
                        n: function(e) {
                            return e.getMonth() + 1
                        },
                        s: function(e) {
                            return e.getSeconds()
                        },
                        u: function(e) {
                            return e.getTime()
                        },
                        w: function(e) {
                            return e.getDay()
                        },
                        y: function(e) {
                            return String(e.getFullYear()).substring(2)
                        }
                    }, v = function(e) {
                        var t = e.config,
                            i = void 0 === t ? n : t,
                            o = e.l10n,
                            r = void 0 === o ? a : o;
                        return function(e, t, n) {
                            var a = n || r;
                            return void 0 !== i.formatDate ? i.formatDate(e, t, a) : t.split("").map(function(t, n, o) {
                                return h[t] && "\\" !== o[n - 1] ? h[t](e, a, i) : "\\" !== t ? t : ""
                            }).join("")
                        }
                    }, D = function(e) {
                        var t = e.config,
                            i = void 0 === t ? n : t,
                            o = e.l10n,
                            r = void 0 === o ? a : o;
                        return function(e, t, a, o) {
                            if (0 === e || e) {
                                var l, c = o || r,
                                    d = e;
                                if (e instanceof Date) l = new Date(e.getTime());
                                else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e);
                                else if ("string" == typeof e) {
                                    var s = t || (i || n).dateFormat,
                                        u = String(e).trim();
                                    if ("today" === u) l = new Date, a = !0;
                                    else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
                                    else if (i && i.parseDate) l = i.parseDate(e, s);
                                    else {
                                        l = i && i.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0);
                                        for (var f = void 0, m = [], h = 0, v = 0, D = ""; h < s.length; h++) {
                                            var w = s[h],
                                                b = "\\" === w,
                                                C = "\\" === s[h - 1] || b;
                                            if (p[w] && !C) {
                                                D += p[w];
                                                var M = new RegExp(D).exec(e);
                                                M && (f = !0) && m["Y" !== w ? "push" : "unshift"]({
                                                    fn: g[w],
                                                    val: M[++v]
                                                })
                                            } else b || (D += ".");
                                            m.forEach(function(e) {
                                                var t = e.fn,
                                                    n = e.val;
                                                return l = t(l, n, c) || l
                                            })
                                        }
                                        l = f ? l : void 0
                                    }
                                }
                                if (l instanceof Date && !isNaN(l.getTime())) return !0 === a && l.setHours(0, 0, 0, 0), l;
                                i.errorHandler(new Error("Invalid date provided: " + d))
                            }
                        }
                    };

                function w(e, t, n) {
                    return void 0 === n && (n = !0), !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
                }
                var b = function(e, t, n) {
                    return e > Math.min(t, n) && e < Math.max(t, n)
                }, C = {
                        DAY: 864e5
                    };
                "function" != typeof Object.assign && (Object.assign = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    if (!e) throw TypeError("Cannot convert undefined or null to object");
                    for (var a = function(t) {
                        t && Object.keys(t).forEach(function(n) {
                            return e[n] = t[n]
                        })
                    }, i = 0, o = t; i < o.length; i++) {
                        a(o[i])
                    }
                    return e
                });
                var M = 300;

                function y(f, g) {
                    var h = {
                        config: e({}, n, E.defaultConfig),
                        l10n: a
                    };

                    function y(e) {
                        return e.bind(h)
                    }
                    function x() {
                        var e = h.config;
                        !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame(function() {
                            if (void 0 !== h.calendarContainer && (h.calendarContainer.style.visibility = "hidden", h.calendarContainer.style.display = "block"), void 0 !== h.daysContainer) {
                                var t = (h.days.offsetWidth + 1) * e.showMonths;
                                h.daysContainer.style.width = t + "px", h.calendarContainer.style.width = t + (void 0 !== h.weekWrapper ? h.weekWrapper.offsetWidth : 0) + "px", h.calendarContainer.style.removeProperty("visibility"), h.calendarContainer.style.removeProperty("display")
                            }
                        })
                    }
                    function T(e) {
                        0 === h.selectedDates.length && ie(), void 0 !== e && "blur" !== e.type && function(e) {
                            e.preventDefault();
                            var t = "keydown" === e.type,
                                n = e.target;
                            void 0 !== h.amPM && e.target === h.amPM && (h.amPM.textContent = h.l10n.amPM[o(h.amPM.textContent === h.l10n.amPM[0])]);
                            var a = parseFloat(n.getAttribute("min")),
                                r = parseFloat(n.getAttribute("max")),
                                l = parseFloat(n.getAttribute("step")),
                                c = parseInt(n.value, 10),
                                d = e.delta || (t ? 38 === e.which ? 1 : -1 : 0),
                                s = c + l * d;
                            if (void 0 !== n.value && 2 === n.value.length) {
                                var u = n === h.hourElement,
                                    f = n === h.minuteElement;
                                s < a ? (s = r + s + o(!u) + (o(u) && o(!h.amPM)), f && j(void 0, -1, h.hourElement)) : s > r && (s = n === h.hourElement ? s - r - o(!h.amPM) : a, f && j(void 0, 1, h.hourElement)), h.amPM && u && (1 === l ? s + c === 23 : Math.abs(s - c) > l) && (h.amPM.textContent = h.l10n.amPM[o(h.amPM.textContent === h.l10n.amPM[0])]), n.value = i(s)
                            }
                        }(e);
                        var t = h._input.value;
                        k(), we(), h._input.value !== t && h._debouncedChange()
                    }
                    function k() {
                        if (void 0 !== h.hourElement && void 0 !== h.minuteElement) {
                            var e, t, n = (parseInt(h.hourElement.value.slice(-2), 10) || 0) % 24,
                                a = (parseInt(h.minuteElement.value, 10) || 0) % 60,
                                i = void 0 !== h.secondElement ? (parseInt(h.secondElement.value, 10) || 0) % 60 : 0;
                            void 0 !== h.amPM && (e = n, t = h.amPM.textContent, n = e % 12 + 12 * o(t === h.l10n.amPM[1]));
                            var r = void 0 !== h.config.minTime || h.config.minDate && h.minDateHasTime && h.latestSelectedDateObj && 0 === w(h.latestSelectedDateObj, h.config.minDate, !0);
                            if (void 0 !== h.config.maxTime || h.config.maxDate && h.maxDateHasTime && h.latestSelectedDateObj && 0 === w(h.latestSelectedDateObj, h.config.maxDate, !0)) {
                                var l = void 0 !== h.config.maxTime ? h.config.maxTime : h.config.maxDate;
                                (n = Math.min(n, l.getHours())) === l.getHours() && (a = Math.min(a, l.getMinutes())), a === l.getMinutes() && (i = Math.min(i, l.getSeconds()))
                            }
                            if (r) {
                                var c = void 0 !== h.config.minTime ? h.config.minTime : h.config.minDate;
                                (n = Math.max(n, c.getHours())) === c.getHours() && (a = Math.max(a, c.getMinutes())), a === c.getMinutes() && (i = Math.max(i, c.getSeconds()))
                            }
                            O(n, a, i)
                        }
                    }
                    function I(e) {
                        var t = e || h.latestSelectedDateObj;
                        t && O(t.getHours(), t.getMinutes(), t.getSeconds())
                    }
                    function S() {
                        var e = h.config.defaultHour,
                            t = h.config.defaultMinute,
                            n = h.config.defaultSeconds;
                        if (void 0 !== h.config.minDate) {
                            var a = h.config.minDate.getHours(),
                                i = h.config.minDate.getMinutes();
                            (e = Math.max(e, a)) === a && (t = Math.max(i, t)), e === a && t === i && (n = h.config.minDate.getSeconds())
                        }
                        if (void 0 !== h.config.maxDate) {
                            var o = h.config.maxDate.getHours(),
                                r = h.config.maxDate.getMinutes();
                            (e = Math.min(e, o)) === o && (t = Math.min(r, t)), e === o && t === r && (n = h.config.maxDate.getSeconds())
                        }
                        O(e, t, n)
                    }
                    function O(e, t, n) {
                        void 0 !== h.latestSelectedDateObj && h.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0), h.hourElement && h.minuteElement && !h.isMobile && (h.hourElement.value = i(h.config.time_24hr ? e : (12 + e) % 12 + 12 * o(e % 12 == 0)), h.minuteElement.value = i(t), void 0 !== h.amPM && (h.amPM.textContent = h.l10n.amPM[o(e >= 12)]), void 0 !== h.secondElement && (h.secondElement.value = i(n)))
                    }
                    function _(e) {
                        var t = parseInt(e.target.value) + (e.delta || 0);
                        (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && Q(t)
                    }
                    function F(e, t, n, a) {
                        return t instanceof Array ? t.forEach(function(t) {
                            return F(e, t, n, a)
                        }) : e instanceof Array ? e.forEach(function(e) {
                            return F(e, t, n, a)
                        }) : (e.addEventListener(t, n, a), void h._handlers.push({
                            element: e,
                            event: t,
                            handler: n,
                            options: a
                        }))
                    }
                    function N(e) {
                        return function(t) {
                            1 === t.which && e(t)
                        }
                    }
                    function Y() {
                        ge("onChange")
                    }
                    function A(e, t) {
                        var n = void 0 !== e ? h.parseDate(e) : h.latestSelectedDateObj || (h.config.minDate && h.config.minDate > h.now ? h.config.minDate : h.config.maxDate && h.config.maxDate < h.now ? h.config.maxDate : h.now),
                            a = h.currentYear,
                            i = h.currentMonth;
                        try {
                            void 0 !== n && (h.currentYear = n.getFullYear(), h.currentMonth = n.getMonth())
                        } catch (o) {
                            o.message = "Invalid date supplied: " + n, h.config.errorHandler(o)
                        }
                        t && h.currentYear !== a && (ge("onYearChange"), K()), !t || h.currentYear === a && h.currentMonth === i || ge("onMonthChange"), h.redraw()
                    }
                    function P(e) {~
                        e.target.className.indexOf("arrow") && j(e, e.target.classList.contains("arrowUp") ? 1 : -1)
                    }
                    function j(e, t, n) {
                        var a = e && e.target,
                            i = n || a && a.parentNode && a.parentNode.firstChild,
                            o = pe("increment");
                        o.delta = t, i && i.dispatchEvent(o)
                    }
                    function H(e, t, n, a) {
                        var i = X(t, !0),
                            o = d("span", "flatpickr-day " + e, t.getDate().toString());
                        return o.dateObj = t, o.$i = a, o.setAttribute("aria-label", h.formatDate(t, h.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === w(t, h.now) && (h.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")), i ? (o.tabIndex = -1, he(t) && (o.classList.add("selected"), h.selectedDateElem = o, "range" === h.config.mode && (c(o, "startRange", h.selectedDates[0] && 0 === w(t, h.selectedDates[0], !0)), c(o, "endRange", h.selectedDates[1] && 0 === w(t, h.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("flatpickr-disabled"), "range" === h.config.mode && function(e) {
                            return !("range" !== h.config.mode || h.selectedDates.length < 2) && w(e, h.selectedDates[0]) >= 0 && w(e, h.selectedDates[1]) <= 0
                        }(t) && !he(t) && o.classList.add("inRange"), h.weekNumbers && 1 === h.config.showMonths && "prevMonthDay" !== e && n % 7 == 1 && h.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + h.config.getWeek(t) + "</span>"), ge("onDayCreate", o), o
                    }
                    function L(e) {
                        e.focus(), "range" === h.config.mode && ne(e)
                    }
                    function W(e) {
                        for (var t = e > 0 ? 0 : h.config.showMonths - 1, n = e > 0 ? h.config.showMonths : -1, a = t; a != n; a += e) for (var i = h.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length : -1, l = o; l != r; l += e) {
                                var c = i.children[l];
                                if (-1 === c.className.indexOf("hidden") && X(c.dateObj)) return c
                        }
                    }
                    function R(e, t) {
                        var n = ee(document.activeElement || document.body),
                            a = void 0 !== e ? e : n ? document.activeElement : void 0 !== h.selectedDateElem && ee(h.selectedDateElem) ? h.selectedDateElem : void 0 !== h.todayDateElem && ee(h.todayDateElem) ? h.todayDateElem : W(t > 0 ? 1 : -1);
                        return void 0 === a ? h._input.focus() : n ? void
                        function(e, t) {
                            for (var n = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : h.currentMonth, a = t > 0 ? h.config.showMonths : -1, i = t > 0 ? 1 : -1, o = n - h.currentMonth; o != a; o += i) for (var r = h.daysContainer.children[o], l = n - h.currentMonth === o ? e.$i + t : t < 0 ? r.children.length - 1 : 0, c = r.children.length, d = l; d >= 0 && d < c && d != (t > 0 ? c : -1); d += i) {
                                    var s = r.children[d];
                                    if (-1 === s.className.indexOf("hidden") && X(s.dateObj) && Math.abs(e.$i - d) >= Math.abs(t)) return L(s)
                            }
                            h.changeMonth(i), R(W(i), 0)
                        }(a, t) : L(a)
                    }
                    function B(e, t) {
                        for (var n = (new Date(e, t, 1).getDay() - h.l10n.firstDayOfWeek + 7) % 7, a = h.utils.getDaysInMonth((t - 1 + 12) % 12), i = h.utils.getDaysInMonth(t), o = window.document.createDocumentFragment(), r = h.config.showMonths > 1, l = r ? "prevMonthDay hidden" : "prevMonthDay", c = r ? "nextMonthDay hidden" : "nextMonthDay", s = a + 1 - n, u = 0; s <= a; s++, u++) o.appendChild(H(l, new Date(e, t - 1, s), s, u));
                        for (s = 1; s <= i; s++, u++) o.appendChild(H("", new Date(e, t, s), s, u));
                        for (var f = i + 1; f <= 42 - n && (1 === h.config.showMonths || u % 7 != 0); f++, u++) o.appendChild(H(c, new Date(e, t + 1, f % i), f, u));
                        var m = d("div", "dayContainer");
                        return m.appendChild(o), m
                    }
                    function J() {
                        if (void 0 !== h.daysContainer) {
                            s(h.daysContainer), h.weekNumbers && s(h.weekNumbers);
                            for (var e = document.createDocumentFragment(), t = 0; t < h.config.showMonths; t++) {
                                var n = new Date(h.currentYear, h.currentMonth, 1);
                                n.setMonth(h.currentMonth + t), e.appendChild(B(n.getFullYear(), n.getMonth()))
                            }
                            h.daysContainer.appendChild(e), h.days = h.daysContainer.firstChild, "range" === h.config.mode && 1 === h.selectedDates.length && ne()
                        }
                    }
                    function K() {
                        if (!(h.config.showMonths > 1 || "dropdown" !== h.config.monthSelectorType)) {
                            var e = function(e) {
                                return !(void 0 !== h.config.minDate && h.currentYear === h.config.minDate.getFullYear() && e < h.config.minDate.getMonth()) && !(void 0 !== h.config.maxDate && h.currentYear === h.config.maxDate.getFullYear() && e > h.config.maxDate.getMonth())
                            };
                            h.monthsDropdownContainer.tabIndex = -1, h.monthsDropdownContainer.innerHTML = "";
                            for (var t = 0; t < 12; t++) if (e(t)) {
                                    var n = d("option", "flatpickr-monthDropdown-month");
                                    n.value = new Date(h.currentYear, t).getMonth().toString(), n.textContent = m(t, h.config.shorthandCurrentMonth, h.l10n), n.tabIndex = -1, h.currentMonth === t && (n.selected = !0), h.monthsDropdownContainer.appendChild(n)
                                }
                        }
                    }
                    function U() {
                        var e, t = d("div", "flatpickr-month"),
                            n = window.document.createDocumentFragment();
                        h.config.showMonths > 1 || "static" === h.config.monthSelectorType ? e = d("span", "cur-month") : (h.monthsDropdownContainer = d("select", "flatpickr-monthDropdown-months"), F(h.monthsDropdownContainer, "change", function(e) {
                            var t = e.target,
                                n = parseInt(t.value, 10);
                            h.changeMonth(n - h.currentMonth), ge("onMonthChange")
                        }), K(), e = h.monthsDropdownContainer);
                        var a = u("cur-year", {
                            tabindex: "-1"
                        }),
                            i = a.getElementsByTagName("input")[0];
                        i.setAttribute("aria-label", h.l10n.yearAriaLabel), h.config.minDate && i.setAttribute("min", h.config.minDate.getFullYear().toString()), h.config.maxDate && (i.setAttribute("max", h.config.maxDate.getFullYear().toString()), i.disabled = !! h.config.minDate && h.config.minDate.getFullYear() === h.config.maxDate.getFullYear());
                        var o = d("div", "flatpickr-current-month");
                        return o.appendChild(e), o.appendChild(a), n.appendChild(o), t.appendChild(n), {
                            container: t,
                            yearElement: i,
                            monthElement: e
                        }
                    }
                    function q() {
                        s(h.monthNav), h.monthNav.appendChild(h.prevMonthNav), h.config.showMonths && (h.yearElements = [], h.monthElements = []);
                        for (var e = h.config.showMonths; e--;) {
                            var t = U();
                            h.yearElements.push(t.yearElement), h.monthElements.push(t.monthElement), h.monthNav.appendChild(t.container)
                        }
                        h.monthNav.appendChild(h.nextMonthNav)
                    }
                    function $() {
                        h.weekdayContainer ? s(h.weekdayContainer) : h.weekdayContainer = d("div", "flatpickr-weekdays");
                        for (var e = h.config.showMonths; e--;) {
                            var t = d("div", "flatpickr-weekdaycontainer");
                            h.weekdayContainer.appendChild(t)
                        }
                        return z(), h.weekdayContainer
                    }
                    function z() {
                        if (h.weekdayContainer) {
                            var e = h.l10n.firstDayOfWeek,
                                t = h.l10n.weekdays.shorthand.slice();
                            e > 0 && e < t.length && (t = t.splice(e, t.length).concat(t.splice(0, e)));
                            for (var n = h.config.showMonths; n--;) h.weekdayContainer.children[n].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
                        }
                    }
                    function G(e, t) {
                        void 0 === t && (t = !0);
                        var n = t ? e : e - h.currentMonth;
                        n < 0 && !0 === h._hidePrevMonthArrow || n > 0 && !0 === h._hideNextMonthArrow || (h.currentMonth += n, (h.currentMonth < 0 || h.currentMonth > 11) && (h.currentYear += h.currentMonth > 11 ? 1 : -1, h.currentMonth = (h.currentMonth + 12) % 12, ge("onYearChange"), K()), J(), ge("onMonthChange"), ve())
                    }
                    function V(e) {
                        return !(!h.config.appendTo || !h.config.appendTo.contains(e)) || h.calendarContainer.contains(e)
                    }
                    function Z(e) {
                        if (h.isOpen && !h.config.inline) {
                            var t = "function" == typeof(r = e).composedPath ? r.composedPath()[0] : r.target,
                                n = V(t),
                                a = t === h.input || t === h.altInput || h.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(h.input) || ~e.path.indexOf(h.altInput)),
                                i = "blur" === e.type ? a && e.relatedTarget && !V(e.relatedTarget) : !a && !n && !V(e.relatedTarget),
                                o = !h.config.ignoredFocusElements.some(function(e) {
                                    return e.contains(t)
                                });
                            i && o && (void 0 !== h.timeContainer && void 0 !== h.minuteElement && void 0 !== h.hourElement && T(), h.close(), "range" === h.config.mode && 1 === h.selectedDates.length && (h.clear(!1), h.redraw()))
                        }
                        var r
                    }
                    function Q(e) {
                        if (!(!e || h.config.minDate && e < h.config.minDate.getFullYear() || h.config.maxDate && e > h.config.maxDate.getFullYear())) {
                            var t = e,
                                n = h.currentYear !== t;
                            h.currentYear = t || h.currentYear, h.config.maxDate && h.currentYear === h.config.maxDate.getFullYear() ? h.currentMonth = Math.min(h.config.maxDate.getMonth(), h.currentMonth) : h.config.minDate && h.currentYear === h.config.minDate.getFullYear() && (h.currentMonth = Math.max(h.config.minDate.getMonth(), h.currentMonth)), n && (h.redraw(), ge("onYearChange"), K())
                        }
                    }
                    function X(e, t) {
                        void 0 === t && (t = !0);
                        var n = h.parseDate(e, void 0, t);
                        if (h.config.minDate && n && w(n, h.config.minDate, void 0 !== t ? t : !h.minDateHasTime) < 0 || h.config.maxDate && n && w(n, h.config.maxDate, void 0 !== t ? t : !h.maxDateHasTime) > 0) return !1;
                        if (0 === h.config.enable.length && 0 === h.config.disable.length) return !0;
                        if (void 0 === n) return !1;
                        for (var a = h.config.enable.length > 0, i = a ? h.config.enable : h.config.disable, o = 0, r = void 0; o < i.length; o++) {
                            if ("function" == typeof(r = i[o]) && r(n)) return a;
                            if (r instanceof Date && void 0 !== n && r.getTime() === n.getTime()) return a;
                            if ("string" == typeof r && void 0 !== n) {
                                var l = h.parseDate(r, void 0, !0);
                                return l && l.getTime() === n.getTime() ? a : !a
                            }
                            if ("object" == typeof r && void 0 !== n && r.from && r.to && n.getTime() >= r.from.getTime() && n.getTime() <= r.to.getTime()) return a
                        }
                        return !a
                    }
                    function ee(e) {
                        return void 0 !== h.daysContainer && (-1 === e.className.indexOf("hidden") && h.daysContainer.contains(e))
                    }
                    function te(e) {
                        var t = e.target === h._input,
                            n = h.config.allowInput,
                            a = h.isOpen && (!n || !t),
                            i = h.config.inline && t && !n;
                        if (13 === e.keyCode && t) {
                            if (n) return h.setDate(h._input.value, !0, e.target === h.altInput ? h.config.altFormat : h.config.dateFormat), e.target.blur();
                            h.open()
                        } else if (V(e.target) || a || i) {
                            var o = !! h.timeContainer && h.timeContainer.contains(e.target);
                            switch (e.keyCode) {
                                case 13:
                                    o ? (e.preventDefault(), T(), de()) : se(e);
                                    break;
                                case 27:
                                    e.preventDefault(), de();
                                    break;
                                case 8:
                                case 46:
                                    t && !h.config.allowInput && (e.preventDefault(), h.clear());
                                    break;
                                case 37:
                                case 39:
                                    if (o || t) h.hourElement && h.hourElement.focus();
                                    else if (e.preventDefault(), void 0 !== h.daysContainer && (!1 === n || document.activeElement && ee(document.activeElement))) {
                                        var r = 39 === e.keyCode ? 1 : -1;
                                        e.ctrlKey ? (e.stopPropagation(), G(r), R(W(1), 0)) : R(void 0, r)
                                    }
                                    break;
                                case 38:
                                case 40:
                                    e.preventDefault();
                                    var l = 40 === e.keyCode ? 1 : -1;
                                    h.daysContainer && void 0 !== e.target.$i || e.target === h.input || e.target === h.altInput ? e.ctrlKey ? (e.stopPropagation(), Q(h.currentYear - l), R(W(1), 0)) : o || R(void 0, 7 * l) : e.target === h.currentYearElement ? Q(h.currentYear - l) : h.config.enableTime && (!o && h.hourElement && h.hourElement.focus(), T(e), h._debouncedChange());
                                    break;
                                case 9:
                                    if (o) {
                                        var c = [h.hourElement, h.minuteElement, h.secondElement, h.amPM].concat(h.pluginElements).filter(function(e) {
                                            return e
                                        }),
                                            d = c.indexOf(e.target);
                                        if (-1 !== d) {
                                            var s = c[d + (e.shiftKey ? -1 : 1)];
                                            e.preventDefault(), (s || h._input).focus()
                                        }
                                    } else !h.config.noCalendar && h.daysContainer && h.daysContainer.contains(e.target) && e.shiftKey && (e.preventDefault(), h._input.focus())
                            }
                        }
                        if (void 0 !== h.amPM && e.target === h.amPM) switch (e.key) {
                                case h.l10n.amPM[0].charAt(0):
                                case h.l10n.amPM[0].charAt(0).toLowerCase():
                                    h.amPM.textContent = h.l10n.amPM[0], k(), we();
                                    break;
                                case h.l10n.amPM[1].charAt(0):
                                case h.l10n.amPM[1].charAt(0).toLowerCase():
                                    h.amPM.textContent = h.l10n.amPM[1], k(), we()
                        }(t || V(e.target)) && ge("onKeyDown", e)
                    }
                    function ne(e) {
                        if (1 === h.selectedDates.length && (!e || e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled"))) {
                            for (var t = e ? e.dateObj.getTime() : h.days.firstElementChild.dateObj.getTime(), n = h.parseDate(h.selectedDates[0], void 0, !0).getTime(), a = Math.min(t, h.selectedDates[0].getTime()), i = Math.max(t, h.selectedDates[0].getTime()), o = !1, r = 0, l = 0, c = a; c < i; c += C.DAY) X(new Date(c), !0) || (o = o || c > a && c < i, c < n && (!r || c > r) ? r = c : c > n && (!l || c < l) && (l = c));
                            for (var d = 0; d < h.config.showMonths; d++) for (var s = h.daysContainer.children[d], u = function(a, i) {
                                        var c = s.children[a],
                                            d = c.dateObj.getTime(),
                                            u = r > 0 && d < r || l > 0 && d > l;
                                        return u ? (c.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(e) {
                                            c.classList.remove(e)
                                        }), "continue") : o && !u ? "continue" : (["startRange", "inRange", "endRange", "notAllowed"].forEach(function(e) {
                                            c.classList.remove(e)
                                        }), void(void 0 !== e && (e.classList.add(t <= h.selectedDates[0].getTime() ? "startRange" : "endRange"), n < t && d === n ? c.classList.add("startRange") : n > t && d === n && c.classList.add("endRange"), d >= r && (0 === l || d <= l) && b(d, n, t) && c.classList.add("inRange"))))
                                    }, f = 0, m = s.children.length; f < m; f++) u(f)
                        }
                    }
                    function ae() {
                        !h.isOpen || h.config.static || h.config.inline || le()
                    }
                    function ie() {
                        h.setDate(void 0 !== h.config.minDate ? new Date(h.config.minDate.getTime()) : new Date, !0), S(), we()
                    }
                    function oe(e) {
                        return function(t) {
                            var n = h.config["_" + e + "Date"] = h.parseDate(t, h.config.dateFormat),
                                a = h.config["_" + ("min" === e ? "max" : "min") + "Date"];
                            void 0 !== n && (h["min" === e ? "minDateHasTime" : "maxDateHasTime"] = n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0), h.selectedDates && (h.selectedDates = h.selectedDates.filter(function(e) {
                                return X(e)
                            }), h.selectedDates.length || "min" !== e || I(n), we()), h.daysContainer && (ce(), void 0 !== n ? h.currentYearElement[e] = n.getFullYear().toString() : h.currentYearElement.removeAttribute(e), h.currentYearElement.disabled = !! a && void 0 !== n && a.getFullYear() === n.getFullYear())
                        }
                    }
                    function re() {
                        "object" != typeof h.config.locale && void 0 === E.l10ns[h.config.locale] && h.config.errorHandler(new Error("flatpickr: invalid locale " + h.config.locale)), h.l10n = e({}, E.l10ns.
                        default, "object" == typeof h.config.locale ? h.config.locale : "default" !== h.config.locale ? E.l10ns[h.config.locale] : void 0), p.K = "(" + h.l10n.amPM[0] + "|" + h.l10n.amPM[1] + "|" + h.l10n.amPM[0].toLowerCase() + "|" + h.l10n.amPM[1].toLowerCase() + ")", void 0 === e({}, g, JSON.parse(JSON.stringify(f.dataset || {}))).time_24hr && void 0 === E.defaultConfig.time_24hr && (h.config.time_24hr = h.l10n.time_24hr), h.formatDate = v(h), h.parseDate = D({
                            config: h.config,
                            l10n: h.l10n
                        })
                    }
                    function le(e) {
                        if (void 0 !== h.calendarContainer) {
                            ge("onPreCalendarPosition");
                            var t = e || h._positionElement,
                                n = Array.prototype.reduce.call(h.calendarContainer.children, function(e, t) {
                                    return e + t.offsetHeight
                                }, 0),
                                a = h.calendarContainer.offsetWidth,
                                i = h.config.position.split(" "),
                                o = i[0],
                                r = i.length > 1 ? i[1] : null,
                                l = t.getBoundingClientRect(),
                                d = window.innerHeight - l.bottom,
                                s = "above" === o || "below" !== o && d < n && l.top > n,
                                u = window.pageYOffset + l.top + (s ? -n - 2 : t.offsetHeight + 2);
                            if (c(h.calendarContainer, "arrowTop", !s), c(h.calendarContainer, "arrowBottom", s), !h.config.inline) {
                                var f = window.pageXOffset + l.left - (null != r && "center" === r ? (a - l.width) / 2 : 0),
                                    m = window.document.body.offsetWidth - (window.pageXOffset + l.right),
                                    g = f + a > window.document.body.offsetWidth,
                                    p = m + a > window.document.body.offsetWidth;
                                if (c(h.calendarContainer, "rightMost", g), !h.config.static) if (h.calendarContainer.style.top = u + "px", g) if (p) {
                                            var v = document.styleSheets[0];
                                            if (void 0 === v) return;
                                            var D = window.document.body.offsetWidth,
                                                w = Math.max(0, D / 2 - a / 2),
                                                b = v.cssRules.length,
                                                C = "{left:" + l.left + "px;right:auto;}";
                                            c(h.calendarContainer, "rightMost", !1), c(h.calendarContainer, "centerMost", !0), v.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + C, b), h.calendarContainer.style.left = w + "px", h.calendarContainer.style.right = "auto"
                                        } else h.calendarContainer.style.left = "auto", h.calendarContainer.style.right = m + "px";
                                        else h.calendarContainer.style.left = f + "px", h.calendarContainer.style.right = "auto"
                            }
                        }
                    }
                    function ce() {
                        h.config.noCalendar || h.isMobile || (ve(), J())
                    }
                    function de() {
                        h._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(h.close, 0) : h.close()
                    }
                    function se(e) {
                        e.preventDefault(), e.stopPropagation();
                        var t = function e(t, n) {
                            return n(t) ? t : t.parentNode ? e(t.parentNode, n) : void 0
                        }(e.target, function(e) {
                            return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
                        });
                        if (void 0 !== t) {
                            var n = t,
                                a = h.latestSelectedDateObj = new Date(n.dateObj.getTime()),
                                i = (a.getMonth() < h.currentMonth || a.getMonth() > h.currentMonth + h.config.showMonths - 1) && "range" !== h.config.mode;
                            if (h.selectedDateElem = n, "single" === h.config.mode) h.selectedDates = [a];
                            else if ("multiple" === h.config.mode) {
                                var o = he(a);
                                o ? h.selectedDates.splice(parseInt(o), 1) : h.selectedDates.push(a)
                            } else "range" === h.config.mode && (2 === h.selectedDates.length && h.clear(!1, !1), h.latestSelectedDateObj = a, h.selectedDates.push(a), 0 !== w(a, h.selectedDates[0], !0) && h.selectedDates.sort(function(e, t) {
                                    return e.getTime() - t.getTime()
                                })); if (k(), i) {
                                var r = h.currentYear !== a.getFullYear();
                                h.currentYear = a.getFullYear(), h.currentMonth = a.getMonth(), r && (ge("onYearChange"), K()), ge("onMonthChange")
                            }
                            if (ve(), J(), we(), h.config.enableTime && setTimeout(function() {
                                return h.showTimeInput = !0
                            }, 50), i || "range" === h.config.mode || 1 !== h.config.showMonths ? void 0 !== h.selectedDateElem && void 0 === h.hourElement && h.selectedDateElem && h.selectedDateElem.focus() : L(n), void 0 !== h.hourElement && void 0 !== h.hourElement && h.hourElement.focus(), h.config.closeOnSelect) {
                                var l = "single" === h.config.mode && !h.config.enableTime,
                                    c = "range" === h.config.mode && 2 === h.selectedDates.length && !h.config.enableTime;
                                (l || c) && de()
                            }
                            Y()
                        }
                    }
                    h.parseDate = D({
                        config: h.config,
                        l10n: h.l10n
                    }), h._handlers = [], h.pluginElements = [], h.loadedPlugins = [], h._bind = F, h._setHoursFromDate = I, h._positionCalendar = le, h.changeMonth = G, h.changeYear = Q, h.clear = function(e, t) {
                        void 0 === e && (e = !0);
                        void 0 === t && (t = !0);
                        h.input.value = "", void 0 !== h.altInput && (h.altInput.value = "");
                        void 0 !== h.mobileInput && (h.mobileInput.value = "");
                        h.selectedDates = [], h.latestSelectedDateObj = void 0, !0 === t && (h.currentYear = h._initialDate.getFullYear(), h.currentMonth = h._initialDate.getMonth());
                        h.showTimeInput = !1, !0 === h.config.enableTime && S();
                        h.redraw(), e && ge("onChange")
                    }, h.close = function() {
                        h.isOpen = !1, h.isMobile || (void 0 !== h.calendarContainer && h.calendarContainer.classList.remove("open"), void 0 !== h._input && h._input.classList.remove("active"));
                        ge("onClose")
                    }, h._createElement = d, h.destroy = function() {
                        void 0 !== h.config && ge("onDestroy");
                        for (var e = h._handlers.length; e--;) {
                            var t = h._handlers[e];
                            t.element.removeEventListener(t.event, t.handler, t.options)
                        }
                        if (h._handlers = [], h.mobileInput) h.mobileInput.parentNode && h.mobileInput.parentNode.removeChild(h.mobileInput), h.mobileInput = void 0;
                        else if (h.calendarContainer && h.calendarContainer.parentNode) if (h.config.static && h.calendarContainer.parentNode) {
                                var n = h.calendarContainer.parentNode;
                                if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                                    for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                                    n.parentNode.removeChild(n)
                                }
                            } else h.calendarContainer.parentNode.removeChild(h.calendarContainer);
                        h.altInput && (h.input.type = "text", h.altInput.parentNode && h.altInput.parentNode.removeChild(h.altInput), delete h.altInput);
                        h.input && (h.input.type = h.input._type, h.input.classList.remove("flatpickr-input"), h.input.removeAttribute("readonly"), h.input.value = "");
                        ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function(e) {
                            try {
                                delete h[e]
                            } catch (t) {}
                        })
                    }, h.isEnabled = X, h.jumpToDate = A, h.open = function(e, t) {
                        void 0 === t && (t = h._positionElement);
                        if (!0 === h.isMobile) return e && (e.preventDefault(), e.target && e.target.blur()), void 0 !== h.mobileInput && (h.mobileInput.focus(), h.mobileInput.click()), void ge("onOpen");
                        if (h._input.disabled || h.config.inline) return;
                        var n = h.isOpen;
                        h.isOpen = !0, n || (h.calendarContainer.classList.add("open"), h._input.classList.add("active"), ge("onOpen"), le(t));
                        !0 === h.config.enableTime && !0 === h.config.noCalendar && (0 === h.selectedDates.length && ie(), !1 !== h.config.allowInput || void 0 !== e && h.timeContainer.contains(e.relatedTarget) || setTimeout(function() {
                            return h.hourElement.select()
                        }, 50))
                    }, h.redraw = ce, h.set = function(e, n) {
                        if (null !== e && "object" == typeof e) for (var a in Object.assign(h.config, e), e) void 0 !== ue[a] && ue[a].forEach(function(e) {
                                    return e()
                                });
                        else h.config[e] = n, void 0 !== ue[e] ? ue[e].forEach(function(e) {
                                return e()
                            }) : t.indexOf(e) > -1 && (h.config[e] = l(n));
                        h.redraw(), we(!1)
                    }, h.setDate = function(e, t, n) {
                        void 0 === t && (t = !1);
                        void 0 === n && (n = h.config.dateFormat);
                        if (0 !== e && !e || e instanceof Array && 0 === e.length) return h.clear(t);
                        fe(e, n), h.showTimeInput = h.selectedDates.length > 0, h.latestSelectedDateObj = h.selectedDates[h.selectedDates.length - 1], h.redraw(), A(), I(), 0 === h.selectedDates.length && h.clear(!1);
                        we(t), t && ge("onChange")
                    }, h.toggle = function(e) {
                        if (!0 === h.isOpen) return h.close();
                        h.open(e)
                    };
                    var ue = {
                        locale: [re, z],
                        showMonths: [q, x, $],
                        minDate: [A],
                        maxDate: [A]
                    };

                    function fe(e, t) {
                        var n = [];
                        if (e instanceof Array) n = e.map(function(e) {
                                return h.parseDate(e, t)
                            });
                        else if (e instanceof Date || "number" == typeof e) n = [h.parseDate(e, t)];
                        else if ("string" == typeof e) switch (h.config.mode) {
                                case "single":
                                case "time":
                                    n = [h.parseDate(e, t)];
                                    break;
                                case "multiple":
                                    n = e.split(h.config.conjunction).map(function(e) {
                                        return h.parseDate(e, t)
                                    });
                                    break;
                                case "range":
                                    n = e.split(h.l10n.rangeSeparator).map(function(e) {
                                        return h.parseDate(e, t)
                                    })
                        } else h.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
                        h.selectedDates = n.filter(function(e) {
                            return e instanceof Date && X(e, !1)
                        }), "range" === h.config.mode && h.selectedDates.sort(function(e, t) {
                            return e.getTime() - t.getTime()
                        })
                    }
                    function me(e) {
                        return e.slice().map(function(e) {
                            return "string" == typeof e || "number" == typeof e || e instanceof Date ? h.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                                from: h.parseDate(e.from, void 0),
                                to: h.parseDate(e.to, void 0)
                            } : e
                        }).filter(function(e) {
                            return e
                        })
                    }
                    function ge(e, t) {
                        if (void 0 !== h.config) {
                            var n = h.config[e];
                            if (void 0 !== n && n.length > 0) for (var a = 0; n[a] && a < n.length; a++) n[a](h.selectedDates, h.input.value, h, t);
                            "onChange" === e && (h.input.dispatchEvent(pe("change")), h.input.dispatchEvent(pe("input")))
                        }
                    }
                    function pe(e) {
                        var t = document.createEvent("Event");
                        return t.initEvent(e, !0, !0), t
                    }
                    function he(e) {
                        for (var t = 0; t < h.selectedDates.length; t++) if (0 === w(h.selectedDates[t], e)) return "" + t;
                        return !1
                    }
                    function ve() {
                        h.config.noCalendar || h.isMobile || !h.monthNav || (h.yearElements.forEach(function(e, t) {
                            var n = new Date(h.currentYear, h.currentMonth, 1);
                            n.setMonth(h.currentMonth + t), h.config.showMonths > 1 || "static" === h.config.monthSelectorType ? h.monthElements[t].textContent = m(n.getMonth(), h.config.shorthandCurrentMonth, h.l10n) + " " : h.monthsDropdownContainer.value = n.getMonth().toString(), e.value = n.getFullYear().toString()
                        }), h._hidePrevMonthArrow = void 0 !== h.config.minDate && (h.currentYear === h.config.minDate.getFullYear() ? h.currentMonth <= h.config.minDate.getMonth() : h.currentYear < h.config.minDate.getFullYear()), h._hideNextMonthArrow = void 0 !== h.config.maxDate && (h.currentYear === h.config.maxDate.getFullYear() ? h.currentMonth + 1 > h.config.maxDate.getMonth() : h.currentYear > h.config.maxDate.getFullYear()))
                    }
                    function De(e) {
                        return h.selectedDates.map(function(t) {
                            return h.formatDate(t, e)
                        }).filter(function(e, t, n) {
                            return "range" !== h.config.mode || h.config.enableTime || n.indexOf(e) === t
                        }).join("range" !== h.config.mode ? h.config.conjunction : h.l10n.rangeSeparator)
                    }
                    function we(e) {
                        void 0 === e && (e = !0), void 0 !== h.mobileInput && h.mobileFormatStr && (h.mobileInput.value = void 0 !== h.latestSelectedDateObj ? h.formatDate(h.latestSelectedDateObj, h.mobileFormatStr) : ""), h.input.value = De(h.config.dateFormat), void 0 !== h.altInput && (h.altInput.value = De(h.config.altFormat)), !1 !== e && ge("onValueUpdate")
                    }
                    function be(e) {
                        var t = h.prevMonthNav.contains(e.target),
                            n = h.nextMonthNav.contains(e.target);
                        t || n ? G(t ? -1 : 1) : h.yearElements.indexOf(e.target) >= 0 ? e.target.select() : e.target.classList.contains("arrowUp") ? h.changeYear(h.currentYear + 1) : e.target.classList.contains("arrowDown") && h.changeYear(h.currentYear - 1)
                    }
                    return function() {
                        h.element = h.input = f, h.isOpen = !1,
                        function() {
                            var a = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                                i = e({}, g, JSON.parse(JSON.stringify(f.dataset || {}))),
                                o = {};
                            h.config.parseDate = i.parseDate, h.config.formatDate = i.formatDate, Object.defineProperty(h.config, "enable", {
                                get: function() {
                                    return h.config._enable
                                },
                                set: function(e) {
                                    h.config._enable = me(e)
                                }
                            }), Object.defineProperty(h.config, "disable", {
                                get: function() {
                                    return h.config._disable
                                },
                                set: function(e) {
                                    h.config._disable = me(e)
                                }
                            });
                            var r = "time" === i.mode;
                            if (!i.dateFormat && (i.enableTime || r)) {
                                var c = E.defaultConfig.dateFormat || n.dateFormat;
                                o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S" : "") : c + " H:i" + (i.enableSeconds ? ":S" : "")
                            }
                            if (i.altInput && (i.enableTime || r) && !i.altFormat) {
                                var d = E.defaultConfig.altFormat || n.altFormat;
                                o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K" : " K") : d + " h:i" + (i.enableSeconds ? ":S" : "") + " K"
                            }
                            i.altInputClass || (h.config.altInputClass = h.input.className + " " + h.config.altInputClass), Object.defineProperty(h.config, "minDate", {
                                get: function() {
                                    return h.config._minDate
                                },
                                set: oe("min")
                            }), Object.defineProperty(h.config, "maxDate", {
                                get: function() {
                                    return h.config._maxDate
                                },
                                set: oe("max")
                            });
                            var s = function(e) {
                                return function(t) {
                                    h.config["min" === e ? "_minTime" : "_maxTime"] = h.parseDate(t, "H:i:S")
                                }
                            };
                            Object.defineProperty(h.config, "minTime", {
                                get: function() {
                                    return h.config._minTime
                                },
                                set: s("min")
                            }), Object.defineProperty(h.config, "maxTime", {
                                get: function() {
                                    return h.config._maxTime
                                },
                                set: s("max")
                            }), "time" === i.mode && (h.config.noCalendar = !0, h.config.enableTime = !0), Object.assign(h.config, o, i);
                            for (var u = 0; u < a.length; u++) h.config[a[u]] = !0 === h.config[a[u]] || "true" === h.config[a[u]];
                            t.filter(function(e) {
                                return void 0 !== h.config[e]
                            }).forEach(function(e) {
                                h.config[e] = l(h.config[e] || []).map(y)
                            }), h.isMobile = !h.config.disableMobile && !h.config.inline && "single" === h.config.mode && !h.config.disable.length && !h.config.enable.length && !h.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                            for (var u = 0; u < h.config.plugins.length; u++) {
                                var m = h.config.plugins[u](h) || {};
                                for (var p in m) t.indexOf(p) > -1 ? h.config[p] = l(m[p]).map(y).concat(h.config[p]) : void 0 === i[p] && (h.config[p] = m[p])
                            }
                            ge("onParseConfig")
                        }(), re(), h.input = h.config.wrap ? f.querySelector("[data-input]") : f, h.input ? (h.input._type = h.input.type, h.input.type = "text", h.input.classList.add("flatpickr-input"), h._input = h.input, h.config.altInput && (h.altInput = d(h.input.nodeName, h.config.altInputClass), h._input = h.altInput, h.altInput.placeholder = h.input.placeholder, h.altInput.disabled = h.input.disabled, h.altInput.required = h.input.required, h.altInput.tabIndex = h.input.tabIndex, h.altInput.type = "text", h.input.setAttribute("type", "hidden"), !h.config.static && h.input.parentNode && h.input.parentNode.insertBefore(h.altInput, h.input.nextSibling)), h.config.allowInput || h._input.setAttribute("readonly", "readonly"), h._positionElement = h.config.positionElement || h._input) : h.config.errorHandler(new Error("Invalid input element specified")),
                        function() {
                            h.selectedDates = [], h.now = h.parseDate(h.config.now) || new Date;
                            var e = h.config.defaultDate || ("INPUT" !== h.input.nodeName && "TEXTAREA" !== h.input.nodeName || !h.input.placeholder || h.input.value !== h.input.placeholder ? h.input.value : null);
                            e && fe(e, h.config.dateFormat), h._initialDate = h.selectedDates.length > 0 ? h.selectedDates[0] : h.config.minDate && h.config.minDate.getTime() > h.now.getTime() ? h.config.minDate : h.config.maxDate && h.config.maxDate.getTime() < h.now.getTime() ? h.config.maxDate : h.now, h.currentYear = h._initialDate.getFullYear(), h.currentMonth = h._initialDate.getMonth(), h.selectedDates.length > 0 && (h.latestSelectedDateObj = h.selectedDates[0]), void 0 !== h.config.minTime && (h.config.minTime = h.parseDate(h.config.minTime, "H:i")), void 0 !== h.config.maxTime && (h.config.maxTime = h.parseDate(h.config.maxTime, "H:i")), h.minDateHasTime = !! h.config.minDate && (h.config.minDate.getHours() > 0 || h.config.minDate.getMinutes() > 0 || h.config.minDate.getSeconds() > 0), h.maxDateHasTime = !! h.config.maxDate && (h.config.maxDate.getHours() > 0 || h.config.maxDate.getMinutes() > 0 || h.config.maxDate.getSeconds() > 0), Object.defineProperty(h, "showTimeInput", {
                                get: function() {
                                    return h._showTimeInput
                                },
                                set: function(e) {
                                    h._showTimeInput = e, h.calendarContainer && c(h.calendarContainer, "showTimeInput", e), h.isOpen && le()
                                }
                            })
                        }(), h.utils = {
                            getDaysInMonth: function(e, t) {
                                return void 0 === e && (e = h.currentMonth), void 0 === t && (t = h.currentYear), 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : h.l10n.daysInMonth[e]
                            }
                        }, h.isMobile || function() {
                            var e = window.document.createDocumentFragment();
                            if (h.calendarContainer = d("div", "flatpickr-calendar"), h.calendarContainer.tabIndex = -1, !h.config.noCalendar) {
                                if (e.appendChild((h.monthNav = d("div", "flatpickr-months"), h.yearElements = [], h.monthElements = [], h.prevMonthNav = d("span", "flatpickr-prev-month"), h.prevMonthNav.innerHTML = h.config.prevArrow, h.nextMonthNav = d("span", "flatpickr-next-month"), h.nextMonthNav.innerHTML = h.config.nextArrow, q(), Object.defineProperty(h, "_hidePrevMonthArrow", {
                                    get: function() {
                                        return h.__hidePrevMonthArrow
                                    },
                                    set: function(e) {
                                        h.__hidePrevMonthArrow !== e && (c(h.prevMonthNav, "flatpickr-disabled", e), h.__hidePrevMonthArrow = e)
                                    }
                                }), Object.defineProperty(h, "_hideNextMonthArrow", {
                                    get: function() {
                                        return h.__hideNextMonthArrow
                                    },
                                    set: function(e) {
                                        h.__hideNextMonthArrow !== e && (c(h.nextMonthNav, "flatpickr-disabled", e), h.__hideNextMonthArrow = e)
                                    }
                                }), h.currentYearElement = h.yearElements[0], ve(), h.monthNav)), h.innerContainer = d("div", "flatpickr-innerContainer"), h.config.weekNumbers) {
                                    var t = function() {
                                        h.calendarContainer.classList.add("hasWeeks");
                                        var e = d("div", "flatpickr-weekwrapper");
                                        e.appendChild(d("span", "flatpickr-weekday", h.l10n.weekAbbreviation));
                                        var t = d("div", "flatpickr-weeks");
                                        return e.appendChild(t), {
                                            weekWrapper: e,
                                            weekNumbers: t
                                        }
                                    }(),
                                        n = t.weekWrapper,
                                        a = t.weekNumbers;
                                    h.innerContainer.appendChild(n), h.weekNumbers = a, h.weekWrapper = n
                                }
                                h.rContainer = d("div", "flatpickr-rContainer"), h.rContainer.appendChild($()), h.daysContainer || (h.daysContainer = d("div", "flatpickr-days"), h.daysContainer.tabIndex = -1), J(), h.rContainer.appendChild(h.daysContainer), h.innerContainer.appendChild(h.rContainer), e.appendChild(h.innerContainer)
                            }
                            h.config.enableTime && e.appendChild(function() {
                                h.calendarContainer.classList.add("hasTime"), h.config.noCalendar && h.calendarContainer.classList.add("noCalendar"), h.timeContainer = d("div", "flatpickr-time"), h.timeContainer.tabIndex = -1;
                                var e = d("span", "flatpickr-time-separator", ":"),
                                    t = u("flatpickr-hour", {
                                        "aria-label": h.l10n.hourAriaLabel
                                    });
                                h.hourElement = t.getElementsByTagName("input")[0];
                                var n = u("flatpickr-minute", {
                                    "aria-label": h.l10n.minuteAriaLabel
                                });
                                if (h.minuteElement = n.getElementsByTagName("input")[0], h.hourElement.tabIndex = h.minuteElement.tabIndex = -1, h.hourElement.value = i(h.latestSelectedDateObj ? h.latestSelectedDateObj.getHours() : h.config.time_24hr ? h.config.defaultHour : function(e) {
                                    switch (e % 24) {
                                        case 0:
                                        case 12:
                                            return 12;
                                        default:
                                            return e % 12
                                    }
                                }(h.config.defaultHour)), h.minuteElement.value = i(h.latestSelectedDateObj ? h.latestSelectedDateObj.getMinutes() : h.config.defaultMinute), h.hourElement.setAttribute("step", h.config.hourIncrement.toString()), h.minuteElement.setAttribute("step", h.config.minuteIncrement.toString()), h.hourElement.setAttribute("min", h.config.time_24hr ? "0" : "1"), h.hourElement.setAttribute("max", h.config.time_24hr ? "23" : "12"), h.minuteElement.setAttribute("min", "0"), h.minuteElement.setAttribute("max", "59"), h.timeContainer.appendChild(t), h.timeContainer.appendChild(e), h.timeContainer.appendChild(n), h.config.time_24hr && h.timeContainer.classList.add("time24hr"), h.config.enableSeconds) {
                                    h.timeContainer.classList.add("hasSeconds");
                                    var a = u("flatpickr-second");
                                    h.secondElement = a.getElementsByTagName("input")[0], h.secondElement.value = i(h.latestSelectedDateObj ? h.latestSelectedDateObj.getSeconds() : h.config.defaultSeconds), h.secondElement.setAttribute("step", h.minuteElement.getAttribute("step")), h.secondElement.setAttribute("min", "0"), h.secondElement.setAttribute("max", "59"), h.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")), h.timeContainer.appendChild(a)
                                }
                                return h.config.time_24hr || (h.amPM = d("span", "flatpickr-am-pm", h.l10n.amPM[o((h.latestSelectedDateObj ? h.hourElement.value : h.config.defaultHour) > 11)]), h.amPM.title = h.l10n.toggleTitle, h.amPM.tabIndex = -1, h.timeContainer.appendChild(h.amPM)), h.timeContainer
                            }()), c(h.calendarContainer, "rangeMode", "range" === h.config.mode), c(h.calendarContainer, "animate", !0 === h.config.animate), c(h.calendarContainer, "multiMonth", h.config.showMonths > 1), h.calendarContainer.appendChild(e);
                            var r = void 0 !== h.config.appendTo && void 0 !== h.config.appendTo.nodeType;
                            if ((h.config.inline || h.config.static) && (h.calendarContainer.classList.add(h.config.inline ? "inline" : "static"), h.config.inline && (!r && h.element.parentNode ? h.element.parentNode.insertBefore(h.calendarContainer, h._input.nextSibling) : void 0 !== h.config.appendTo && h.config.appendTo.appendChild(h.calendarContainer)), h.config.static)) {
                                var l = d("div", "flatpickr-wrapper");
                                h.element.parentNode && h.element.parentNode.insertBefore(l, h.element), l.appendChild(h.element), h.altInput && l.appendChild(h.altInput), l.appendChild(h.calendarContainer)
                            }
                            h.config.static || h.config.inline || (void 0 !== h.config.appendTo ? h.config.appendTo : window.document.body).appendChild(h.calendarContainer)
                        }(),
                        function() {
                            if (h.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(e) {
                                Array.prototype.forEach.call(h.element.querySelectorAll("[data-" + e + "]"), function(t) {
                                    return F(t, "click", h[e])
                                })
                            }), h.isMobile)! function() {
                                var e = h.config.enableTime ? h.config.noCalendar ? "time" : "datetime-local" : "date";
                                h.mobileInput = d("input", h.input.className + " flatpickr-mobile"), h.mobileInput.step = h.input.getAttribute("step") || "any", h.mobileInput.tabIndex = 1, h.mobileInput.type = e, h.mobileInput.disabled = h.input.disabled, h.mobileInput.required = h.input.required, h.mobileInput.placeholder = h.input.placeholder, h.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", h.selectedDates.length > 0 && (h.mobileInput.defaultValue = h.mobileInput.value = h.formatDate(h.selectedDates[0], h.mobileFormatStr)), h.config.minDate && (h.mobileInput.min = h.formatDate(h.config.minDate, "Y-m-d")), h.config.maxDate && (h.mobileInput.max = h.formatDate(h.config.maxDate, "Y-m-d")), h.input.type = "hidden", void 0 !== h.altInput && (h.altInput.type = "hidden");
                                try {
                                    h.input.parentNode && h.input.parentNode.insertBefore(h.mobileInput, h.input.nextSibling)
                                } catch (t) {}
                                F(h.mobileInput, "change", function(e) {
                                    h.setDate(e.target.value, !1, h.mobileFormatStr), ge("onChange"), ge("onClose")
                                })
                            }();
                            else {
                                var e = r(ae, 50);
                                h._debouncedChange = r(Y, M), h.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && F(h.daysContainer, "mouseover", function(e) {
                                    "range" === h.config.mode && ne(e.target)
                                }), F(window.document.body, "keydown", te), h.config.inline || h.config.static || F(window, "resize", e), void 0 !== window.ontouchstart ? F(window.document, "touchstart", Z) : F(window.document, "mousedown", N(Z)), F(window.document, "focus", Z, {
                                    capture: !0
                                }), !0 === h.config.clickOpens && (F(h._input, "focus", h.open), F(h._input, "mousedown", N(h.open))), void 0 !== h.daysContainer && (F(h.monthNav, "mousedown", N(be)), F(h.monthNav, ["keyup", "increment"], _), F(h.daysContainer, "mousedown", N(se))), void 0 !== h.timeContainer && void 0 !== h.minuteElement && void 0 !== h.hourElement && (F(h.timeContainer, ["increment"], T), F(h.timeContainer, "blur", T, {
                                    capture: !0
                                }), F(h.timeContainer, "mousedown", N(P)), F([h.hourElement, h.minuteElement], ["focus", "click"], function(e) {
                                    return e.target.select()
                                }), void 0 !== h.secondElement && F(h.secondElement, "focus", function() {
                                    return h.secondElement && h.secondElement.select()
                                }), void 0 !== h.amPM && F(h.amPM, "mousedown", N(function(e) {
                                    T(e), Y()
                                })))
                            }
                        }(), (h.selectedDates.length || h.config.noCalendar) && (h.config.enableTime && I(h.config.noCalendar ? h.latestSelectedDateObj || h.config.minDate : void 0), we(!1)), x(), h.showTimeInput = h.selectedDates.length > 0 || h.config.noCalendar;
                        var a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                        !h.isMobile && a && le(), ge("onReady")
                    }(), h
                }
                function x(e, t) {
                    for (var n = Array.prototype.slice.call(e).filter(function(e) {
                        return e instanceof HTMLElement
                    }), a = [], i = 0; i < n.length; i++) {
                        var o = n[i];
                        try {
                            if (null !== o.getAttribute("data-fp-omit")) continue;
                            void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0), o._flatpickr = y(o, t || {}), a.push(o._flatpickr)
                        } catch (r) {
                            console.error(r)
                        }
                    }
                    return 1 === a.length ? a[0] : a
                }
                "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
                    return x(this, e)
                }, HTMLElement.prototype.flatpickr = function(e) {
                    return x([this], e)
                });
                var E = function(e, t) {
                    return "string" == typeof e ? x(window.document.querySelectorAll(e), t) : e instanceof Node ? x([e], t) : x(e, t)
                };
                return E.defaultConfig = {}, E.l10ns = {
                    en: e({}, a),
                    default: e({}, a)
                }, E.localize = function(t) {
                    E.l10ns.
                    default = e({}, E.l10ns.
                    default, t)
                }, E.setDefaults = function(t) {
                    E.defaultConfig = e({}, E.defaultConfig, t)
                }, E.parseDate = D({}), E.formatDate = v({}), E.compareDates = w, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function(e) {
                    return x(this, e)
                }), Date.prototype.fp_incr = function(e) {
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
                }, "undefined" != typeof window && (window.flatpickr = E), E
            });
        }, {}
    ],
    "R39t": [function(require, module, exports) {
            var define;
            var global = arguments[3];
            var e, n = arguments[3];
            ! function(n, t) {
                "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof e && e.amd ? e(["exports"], t) : t((n = n || self).zh = {})
            }(this, function(e) {
                "use strict";
                var n = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {
                    l10ns: {}
                }, t = {
                        weekdays: {
                            shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                            longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                        },
                        months: {
                            shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                            longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                        },
                        rangeSeparator: " 至 ",
                        weekAbbreviation: "周",
                        scrollTitle: "滚动切换",
                        toggleTitle: "点击切换 12/24 小时时制"
                    };
                n.l10ns.zh = t;
                var o = n.l10ns;
                e.Mandarin = t, e.
                default = o, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            });
        }, {}
    ],
    "mfQb": [function(require, module, exports) {
            var define;
            var global = arguments[3];
            var e, n = arguments[3];
            ! function(n, t) {
                "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof e && e.amd ? e(t) : (n = n || self).confirmDatePlugin = t()
            }(this, function() {
                "use strict";
                var e = function() {
                    return (e = Object.assign || function(e) {
                        for (var n, t = 1, i = arguments.length; t < i; t++) for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        return e
                    }).apply(this, arguments)
                }, n = {
                        confirmIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /> </svg>",
                        confirmText: "OK ",
                        showAlways: !1,
                        theme: "light"
                    };
                return function(t) {
                    var i, o = e({}, n, t);
                    return function(n) {
                        return n.config.noCalendar || n.isMobile ? {} : e({
                            onKeyDown: function(e, t, o, r) {
                                n.config.enableTime && "Tab" === r.key && r.target === n.amPM ? (r.preventDefault(), i.focus()) : "Enter" === r.key && r.target === i && n.close()
                            },
                            onReady: function() {
                                (i = n._createElement("div", "flatpickr-confirm " + (o.showAlways ? "visible" : "") + " " + o.theme + "Theme", o.confirmText)).tabIndex = -1, i.innerHTML += o.confirmIcon, i.addEventListener("click", n.close), n.calendarContainer.appendChild(i), n.loadedPlugins.push("confirmDate")
                            }
                        }, o.showAlways ? {} : {
                            onChange: function(e, t) {
                                var i = n.config.enableTime || "multiple" === n.config.mode || -1 !== n.loadedPlugins.indexOf("monthSelect"),
                                    o = n.calendarContainer.querySelector(".flatpickr-confirm");
                                if (o) return t && !n.config.inline && i && o ? o.classList.add("visible") : void o.classList.remove("visible")
                            }
                        })
                    }
                }
            });
        }, {}
    ],
    "UJKF": [function(require, module, exports) {
            var process = require("process");
            var define;
            var e, t = require("process");

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            "classList" in document.createElement("_") || function(e) {
                "use strict";
                if ("Element" in e) {
                    var t = "classList",
                        n = "prototype",
                        i = e.Element[n],
                        o = Object,
                        s = String[n].trim || function() {
                            return this.replace(/^\s+|\s+$/g, "")
                        }, r = Array[n].indexOf || function(e) {
                            for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
                            return -1
                        }, a = function(e, t) {
                            this.name = e, this.code = DOMException[e], this.message = t
                        }, l = function(e, t) {
                            if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                            if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                            return r.call(e, t)
                        }, c = function(e) {
                            for (var t = s.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, o = n.length; o > i; i++) this.push(n[i]);
                            this._updateClassName = function() {
                                e.setAttribute("class", this.toString())
                            }
                        }, u = c[n] = [],
                        d = function() {
                            return new c(this)
                        };
                    if (a[n] = Error[n], u.item = function(e) {
                        return this[e] || null
                    }, u.contains = function(e) {
                        return -1 !== l(this, e += "")
                    }, u.add = function() {
                        var e, t = arguments,
                            n = 0,
                            i = t.length,
                            o = !1;
                        do {
                            e = t[n] + "", -1 === l(this, e) && (this.push(e), o = !0)
                        } while (++n < i);
                        o && this._updateClassName()
                    }, u.remove = function() {
                        var e, t, n = arguments,
                            i = 0,
                            o = n.length,
                            s = !1;
                        do {
                            for (e = n[i] + "", t = l(this, e); - 1 !== t;) this.splice(t, 1), s = !0, t = l(this, e)
                        } while (++i < o);
                        s && this._updateClassName()
                    }, u.toggle = function(e, t) {
                        e += "";
                        var n = this.contains(e),
                            i = n ? !0 !== t && "remove" : !1 !== t && "add";
                        return i && this[i](e), !0 === t || !1 === t ? t : !n
                    }, u.toString = function() {
                        return this.join(" ")
                    }, o.defineProperty) {
                        var h = {
                            get: d,
                            enumerable: !0,
                            configurable: !0
                        };
                        try {
                            o.defineProperty(i, t, h)
                        } catch (m) {
                            -2146823252 === m.number && (h.enumerable = !1, o.defineProperty(i, t, h))
                        }
                    } else o[n].__defineGetter__ && i.__defineGetter__(t, d)
                }
            }(self),
            function(e) {
                "use strict";
                if (e.URL = e.URL || e.webkitURL, e.Blob && e.URL) try {
                        return void new Blob
                } catch (i) {}
                var t = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || function(e) {
                        var t = function(e) {
                            return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]
                        }, n = function() {
                                this.data = []
                            }, i = function(e, t, n) {
                                this.data = e, this.size = e.length, this.type = t, this.encoding = n
                            }, o = n.prototype,
                            s = i.prototype,
                            r = e.FileReaderSync,
                            a = function(e) {
                                this.code = this[this.name = e]
                            }, l = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
                            c = l.length,
                            u = e.URL || e.webkitURL || e,
                            d = u.createObjectURL,
                            h = u.revokeObjectURL,
                            m = u,
                            f = e.btoa,
                            p = e.atob,
                            g = e.ArrayBuffer,
                            b = e.Uint8Array,
                            v = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
                        for (i.fake = s.fake = !0; c--;) a.prototype[l[c]] = c + 1;
                        return u.createObjectURL || (m = e.URL = function(e) {
                            var t, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                            return n.href = e, "origin" in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null : (t = e.match(v), n.origin = t && t[1])), n
                        }), m.createObjectURL = function(e) {
                            var t, n = e.type;
                            return null === n && (n = "application/octet-stream"), e instanceof i ? (t = "data:" + n, "base64" === e.encoding ? t + ";base64," + e.data : "URI" === e.encoding ? t + "," + decodeURIComponent(e.data) : f ? t + ";base64," + f(e.data) : t + "," + encodeURIComponent(e.data)) : d ? d.call(u, e) : void 0
                        }, m.revokeObjectURL = function(e) {
                            "data:" !== e.substring(0, 5) && h && h.call(u, e)
                        }, o.append = function(e) {
                            var n = this.data;
                            if (b && (e instanceof g || e instanceof b)) {
                                for (var o = "", s = new b(e), l = 0, c = s.length; c > l; l++) o += String.fromCharCode(s[l]);
                                n.push(o)
                            } else if ("Blob" === t(e) || "File" === t(e)) {
                                if (!r) throw new a("NOT_READABLE_ERR");
                                var u = new r;
                                n.push(u.readAsBinaryString(e))
                            } else e instanceof i ? "base64" === e.encoding && p ? n.push(p(e.data)) : "URI" === e.encoding ? n.push(decodeURIComponent(e.data)) : "raw" === e.encoding && n.push(e.data) : ("string" != typeof e && (e += ""), n.push(unescape(encodeURIComponent(e))))
                        }, o.getBlob = function(e) {
                            return arguments.length || (e = null), new i(this.data.join(""), e, "raw")
                        }, o.toString = function() {
                            return "[object BlobBuilder]"
                        }, s.slice = function(e, t, n) {
                            var o = arguments.length;
                            return 3 > o && (n = null), new i(this.data.slice(e, o > 1 ? t : this.data.length), n, this.encoding)
                        }, s.toString = function() {
                            return "[object Blob]"
                        }, s.close = function() {
                            this.size = 0, delete this.data
                        }, n
                    }(e);
                e.Blob = function(e, n) {
                    var i = n && n.type || "",
                        o = new t;
                    if (e) for (var s = 0, r = e.length; r > s; s++) Uint8Array && e[s] instanceof Uint8Array ? o.append(e[s].buffer) : o.append(e[s]);
                    var a = o.getBlob(i);
                    return !a.slice && a.webkitSlice && (a.slice = a.webkitSlice), a
                };
                var n = Object.getPrototypeOf || function(e) {
                        return e.__proto__
                    };
                e.Blob.prototype = n(new e.Blob)
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content || this),
            function(i, o) {
                "use strict";
                "object" == ("undefined" == typeof module ? "undefined" : n(module)) && void 0 !== t && t && t.versions && t.versions.electron || "object" != ("undefined" == typeof module ? "undefined" : n(module)) ? "function" == typeof e && e.amd ? e(function() {
                    return o
                }) : i.MediumEditor = o : module.exports = o
            }(this, function() {
                "use strict";

                function e(e, t) {
                    return this.init(e, t)
                }
                return e.extensions = {},
                function(t) {
                    function n(e, t) {
                        var n, i = Array.prototype.slice.call(arguments, 2);
                        t = t || {};
                        for (var o = 0; o < i.length; o++) {
                            var s = i[o];
                            if (s) for (n in s) s.hasOwnProperty(n) && void 0 !== s[n] && (e || !1 === t.hasOwnProperty(n)) && (t[n] = s[n])
                        }
                        return t
                    }
                    var i = !1;
                    try {
                        var o = document.createElement("div"),
                            s = document.createTextNode(" ");
                        o.appendChild(s), i = o.contains(s)
                    } catch (a) {}
                    var r = {
                        isIE: "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && null !== new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),
                        isEdge: null !== /Edge\/\d+/.exec(navigator.userAgent),
                        isFF: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                        isMac: t.navigator.platform.toUpperCase().indexOf("MAC") >= 0,
                        keyCode: {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            ESCAPE: 27,
                            SPACE: 32,
                            DELETE: 46,
                            K: 75,
                            M: 77,
                            V: 86
                        },
                        isMetaCtrlKey: function(e) {
                            return !!(r.isMac && e.metaKey || !r.isMac && e.ctrlKey)
                        },
                        isKey: function(e, t) {
                            var n = r.getKeyCode(e);
                            return !1 === Array.isArray(t) ? n === t : -1 !== t.indexOf(n)
                        },
                        getKeyCode: function(e) {
                            var t = e.which;
                            return null === t && (t = null !== e.charCode ? e.charCode : e.keyCode), t
                        },
                        blockContainerElementNames: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre", "ul", "li", "ol", "address", "article", "aside", "audio", "canvas", "dd", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "header", "hgroup", "main", "nav", "noscript", "output", "section", "video", "table", "thead", "tbody", "tfoot", "tr", "th", "td"],
                        emptyElementNames: ["br", "col", "colgroup", "hr", "img", "input", "source", "wbr"],
                        extend: function() {
                            var e = [!0].concat(Array.prototype.slice.call(arguments));
                            return n.apply(this, e)
                        },
                        defaults: function() {
                            var e = [!1].concat(Array.prototype.slice.call(arguments));
                            return n.apply(this, e)
                        },
                        createLink: function(e, t, n, i) {
                            var o = e.createElement("a");
                            return r.moveTextRangeIntoElement(t[0], t[t.length - 1], o), o.setAttribute("href", n), i && ("_blank" === i && o.setAttribute("rel", "noopener noreferrer"), o.setAttribute("target", i)), o
                        },
                        findOrCreateMatchingTextNodes: function(e, t, n) {
                            for (var i = e.createTreeWalker(t, NodeFilter.SHOW_ALL, null, !1), o = [], s = 0, a = !1, l = null, c = null; null !== (l = i.nextNode());) if (!(l.nodeType > 3)) if (3 === l.nodeType) {
                                        if (!a && n.start < s + l.nodeValue.length && (a = !0, c = r.splitStartNodeIfNeeded(l, n.start, s)), a && r.splitEndNodeIfNeeded(l, c, n.end, s), a && s === n.end) break;
                                        if (a && s > n.end + 1) throw new Error("PerformLinking overshot the target!");
                                        a && o.push(c || l), s += l.nodeValue.length, null !== c && (s += c.nodeValue.length, i.nextNode()), c = null
                                    } else "img" === l.tagName.toLowerCase() && (!a && n.start <= s && (a = !0), a && o.push(l));
                            return o
                        },
                        splitStartNodeIfNeeded: function(e, t, n) {
                            return t !== n ? e.splitText(t - n) : null
                        },
                        splitEndNodeIfNeeded: function(e, t, n, i) {
                            var o, s;
                            o = i + e.nodeValue.length + (t ? t.nodeValue.length : 0) - 1, s = n - i - (t ? e.nodeValue.length : 0), o >= n && i !== o && 0 !== s && (t || e).splitText(s)
                        },
                        splitByBlockElements: function(t) {
                            if (3 !== t.nodeType && 1 !== t.nodeType) return [];
                            var n = [],
                                i = e.util.blockContainerElementNames.join(",");
                            if (3 === t.nodeType || 0 === t.querySelectorAll(i).length) return [t];
                            for (var o = 0; o < t.childNodes.length; o++) {
                                var s = t.childNodes[o];
                                if (3 === s.nodeType) n.push(s);
                                else if (1 === s.nodeType) {
                                    0 === s.querySelectorAll(i).length ? n.push(s) : n = n.concat(e.util.splitByBlockElements(s))
                                }
                            }
                            return n
                        },
                        findAdjacentTextNodeWithContent: function(e, t, n) {
                            var i, o = !1,
                                s = n.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1);
                            for (i = s.nextNode(); i;) {
                                if (i === t) o = !0;
                                else if (o && 3 === i.nodeType && i.nodeValue && i.nodeValue.trim().length > 0) break;
                                i = s.nextNode()
                            }
                            return i
                        },
                        findPreviousSibling: function(e) {
                            if (!e || r.isMediumEditorElement(e)) return !1;
                            for (var t = e.previousSibling; !t && !r.isMediumEditorElement(e.parentNode);) t = (e = e.parentNode).previousSibling;
                            return t
                        },
                        isDescendant: function(e, t, n) {
                            if (!e || !t) return !1;
                            if (e === t) return !!n;
                            if (1 !== e.nodeType) return !1;
                            if (i || 3 !== t.nodeType) return e.contains(t);
                            for (var o = t.parentNode; null !== o;) {
                                if (o === e) return !0;
                                o = o.parentNode
                            }
                            return !1
                        },
                        isElement: function(e) {
                            return !(!e || 1 !== e.nodeType)
                        },
                        throttle: function(e, t) {
                            var n, i, o, s = null,
                                r = 0,
                                a = function() {
                                    r = Date.now(), s = null, o = e.apply(n, i), s || (n = i = null)
                                };
                            return t || 0 === t || (t = 50),
                            function() {
                                var l = Date.now(),
                                    c = t - (l - r);
                                return n = this, i = arguments, 0 >= c || c > t ? (s && (clearTimeout(s), s = null), r = l, o = e.apply(n, i), s || (n = i = null)) : s || (s = setTimeout(a, c)), o
                            }
                        },
                        traverseUp: function(e, t) {
                            if (!e) return !1;
                            do {
                                if (1 === e.nodeType) {
                                    if (t(e)) return e;
                                    if (r.isMediumEditorElement(e)) return !1
                                }
                                e = e.parentNode
                            } while (e);
                            return !1
                        },
                        htmlEntities: function(e) {
                            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                        },
                        insertHTMLCommand: function(t, n) {
                            var i, o, s, a, l, c, u, d = !1,
                                h = ["insertHTML", !1, n];
                            if (!e.util.isEdge && t.queryCommandSupported("insertHTML")) try {
                                    return t.execCommand.apply(t, h)
                            } catch (m) {}
                            if ((i = t.getSelection()).rangeCount) {
                                if (u = (o = i.getRangeAt(0)).commonAncestorContainer, r.isMediumEditorElement(u) && !u.firstChild) o.selectNode(u.appendChild(t.createTextNode("")));
                                else if (3 === u.nodeType && 0 === o.startOffset && o.endOffset === u.nodeValue.length || 3 !== u.nodeType && u.innerHTML === o.toString()) {
                                    for (; !r.isMediumEditorElement(u) && u.parentNode && 1 === u.parentNode.childNodes.length && !r.isMediumEditorElement(u.parentNode);) u = u.parentNode;
                                    o.selectNode(u)
                                }
                                for (o.deleteContents(), (s = t.createElement("div")).innerHTML = n, a = t.createDocumentFragment(); s.firstChild;) l = s.firstChild, c = a.appendChild(l);
                                o.insertNode(a), c && ((o = o.cloneRange()).setStartAfter(c), o.collapse(!0), e.selection.selectRange(t, o)), d = !0
                            }
                            return t.execCommand.callListeners && t.execCommand.callListeners(h, d), d
                        },
                        execFormatBlock: function(t, n) {
                            var i = r.getTopBlockContainer(e.selection.getSelectionStart(t));
                            if ("blockquote" === n) {
                                if (i && Array.prototype.slice.call(i.childNodes).some(function(e) {
                                    return r.isBlockContainer(e)
                                })) return t.execCommand("outdent", !1, null);
                                if (r.isIE) return t.execCommand("indent", !1, n)
                            }
                            if (i && n === i.nodeName.toLowerCase() && (n = "p"), r.isIE && (n = "<" + n + ">"), i && "blockquote" === i.nodeName.toLowerCase()) {
                                if (r.isIE && "<p>" === n) return t.execCommand("outdent", !1, n);
                                if ((r.isFF || r.isEdge) && "p" === n) return Array.prototype.slice.call(i.childNodes).some(function(e) {
                                        return !r.isBlockContainer(e)
                                    }) && t.execCommand("formatBlock", !1, n), t.execCommand("outdent", !1, n)
                            }
                            return t.execCommand("formatBlock", !1, n)
                        },
                        setTargetBlank: function(e, t) {
                            var n, i = t || !1;
                            if ("a" === e.nodeName.toLowerCase()) e.target = "_blank", e.rel = "noopener noreferrer";
                            else for (e = e.getElementsByTagName("a"), n = 0; n < e.length; n += 1)!1 !== i && i !== e[n].attributes.href.value || (e[n].target = "_blank", e[n].rel = "noopener noreferrer")
                        },
                        removeTargetBlank: function(e, t) {
                            var n;
                            if ("a" === e.nodeName.toLowerCase()) e.removeAttribute("target"), e.removeAttribute("rel");
                            else for (e = e.getElementsByTagName("a"), n = 0; n < e.length; n += 1) t === e[n].attributes.href.value && (e[n].removeAttribute("target"), e[n].removeAttribute("rel"))
                        },
                        addClassToAnchors: function(e, t) {
                            var n, i, o = t.split(" ");
                            if ("a" === e.nodeName.toLowerCase()) for (i = 0; i < o.length; i += 1) e.classList.add(o[i]);
                            else {
                                var s = e.getElementsByTagName("a");
                                if (0 === s.length) {
                                    var a = r.getClosestTag(e, "a");
                                    e = a ? [a] : []
                                } else e = s;
                                for (n = 0; n < e.length; n += 1) for (i = 0; i < o.length; i += 1) e[n].classList.add(o[i])
                            }
                        },
                        isListItem: function(e) {
                            if (!e) return !1;
                            if ("li" === e.nodeName.toLowerCase()) return !0;
                            for (var t = e.parentNode, n = t.nodeName.toLowerCase();
                            "li" === n || !r.isBlockContainer(t) && "div" !== n;) {
                                if ("li" === n) return !0;
                                if (!(t = t.parentNode)) return !1;
                                n = t.nodeName.toLowerCase()
                            }
                            return !1
                        },
                        cleanListDOM: function(t, n) {
                            if ("li" === n.nodeName.toLowerCase()) {
                                var i = n.parentElement;
                                "p" === i.parentElement.nodeName.toLowerCase() && (r.unwrap(i.parentElement, t), e.selection.moveCursor(t, n.firstChild, n.firstChild.textContent.length))
                            }
                        },
                        splitOffDOMTree: function(e, t, n) {
                            for (var i = t, o = null, s = !n; i !== e;) {
                                var r, a = i.parentNode,
                                    l = a.cloneNode(!1),
                                    c = s ? i : a.firstChild;
                                for (o && (s ? l.appendChild(o) : r = o), o = l; c;) {
                                    var u = c.nextSibling;
                                    c === i ? (c.hasChildNodes() ? c = c.cloneNode(!1) : c.parentNode.removeChild(c), c.textContent && o.appendChild(c), c = s ? u : null) : (c.parentNode.removeChild(c), (c.hasChildNodes() || c.textContent) && o.appendChild(c), c = u)
                                }
                                r && o.appendChild(r), i = a
                            }
                            return o
                        },
                        moveTextRangeIntoElement: function(e, t, n) {
                            if (!e || !t) return !1;
                            var i = r.findCommonRoot(e, t);
                            if (!i) return !1;
                            if (t === e) {
                                var o = e.parentNode,
                                    s = e.nextSibling;
                                return o.removeChild(e), n.appendChild(e), s ? o.insertBefore(n, s) : o.appendChild(n), n.hasChildNodes()
                            }
                            for (var a, l, c, u = [], d = 0; d < i.childNodes.length; d++) if (c = i.childNodes[d], a) {
                                    if (r.isDescendant(c, t, !0)) {
                                        l = c;
                                        break
                                    }
                                    u.push(c)
                                } else r.isDescendant(c, e, !0) && (a = c);
                            var h = l.nextSibling,
                                m = i.ownerDocument.createDocumentFragment();
                            return a === e ? (a.parentNode.removeChild(a), m.appendChild(a)) : m.appendChild(r.splitOffDOMTree(a, e)), u.forEach(function(e) {
                                e.parentNode.removeChild(e), m.appendChild(e)
                            }), l === t ? (l.parentNode.removeChild(l), m.appendChild(l)) : m.appendChild(r.splitOffDOMTree(l, t, !0)), n.appendChild(m), l.parentNode === i ? i.insertBefore(n, l) : h ? i.insertBefore(n, h) : i.appendChild(n), n.hasChildNodes()
                        },
                        depthOfNode: function(e) {
                            for (var t = 0, n = e; null !== n.parentNode;) n = n.parentNode, t++;
                            return t
                        },
                        findCommonRoot: function(e, t) {
                            for (var n = r.depthOfNode(e), i = r.depthOfNode(t), o = e, s = t; n !== i;) n > i ? (o = o.parentNode, n -= 1) : (s = s.parentNode, i -= 1);
                            for (; o !== s;) o = o.parentNode, s = s.parentNode;
                            return o
                        },
                        isElementAtBeginningOfBlock: function(e) {
                            for (var t; !r.isBlockContainer(e) && !r.isMediumEditorElement(e);) {
                                for (t = e; t = t.previousSibling;) if ((3 === t.nodeType ? t.nodeValue : t.textContent).length > 0) return !1;
                                e = e.parentNode
                            }
                            return !0
                        },
                        isMediumEditorElement: function(e) {
                            return e && e.getAttribute && !! e.getAttribute("data-medium-editor-element")
                        },
                        getContainerEditorElement: function(e) {
                            return r.traverseUp(e, function(e) {
                                return r.isMediumEditorElement(e)
                            })
                        },
                        isBlockContainer: function(e) {
                            return e && 3 !== e.nodeType && -1 !== r.blockContainerElementNames.indexOf(e.nodeName.toLowerCase())
                        },
                        getClosestBlockContainer: function(e) {
                            return r.traverseUp(e, function(e) {
                                return r.isBlockContainer(e) || r.isMediumEditorElement(e)
                            })
                        },
                        getTopBlockContainer: function(e) {
                            var t = !! r.isBlockContainer(e) && e;
                            return r.traverseUp(e, function(e) {
                                return r.isBlockContainer(e) && (t = e), !(t || !r.isMediumEditorElement(e)) && (t = e, !0)
                            }), t
                        },
                        getFirstSelectableLeafNode: function(e) {
                            for (; e && e.firstChild;) e = e.firstChild;
                            if ("table" === (e = r.traverseUp(e, function(e) {
                                return -1 === r.emptyElementNames.indexOf(e.nodeName.toLowerCase())
                            })).nodeName.toLowerCase()) {
                                var t = e.querySelector("th, td");
                                t && (e = t)
                            }
                            return e
                        },
                        getFirstTextNode: function(e) {
                            return r.warn("getFirstTextNode is deprecated and will be removed in version 6.0.0"), r._getFirstTextNode(e)
                        },
                        _getFirstTextNode: function(e) {
                            if (3 === e.nodeType) return e;
                            for (var t = 0; t < e.childNodes.length; t++) {
                                var n = r._getFirstTextNode(e.childNodes[t]);
                                if (null !== n) return n
                            }
                            return null
                        },
                        ensureUrlHasProtocol: function(e) {
                            return -1 === e.indexOf("://") ? "http://" + e : e
                        },
                        warn: function() {
                            void 0 !== t.console && "function" == typeof t.console.warn && t.console.warn.apply(t.console, arguments)
                        },
                        deprecated: function(e, t, n) {
                            var i = e + " is deprecated, please use " + t + " instead.";
                            n && (i += " Will be removed in " + n), r.warn(i)
                        },
                        deprecatedMethod: function(e, t, n, i) {
                            r.deprecated(e, t, i), "function" == typeof this[t] && this[t].apply(this, n)
                        },
                        cleanupAttrs: function(e, t) {
                            t.forEach(function(t) {
                                e.removeAttribute(t)
                            })
                        },
                        cleanupTags: function(e, t) {
                            -1 !== t.indexOf(e.nodeName.toLowerCase()) && e.parentNode.removeChild(e)
                        },
                        unwrapTags: function(t, n) {
                            -1 !== n.indexOf(t.nodeName.toLowerCase()) && e.util.unwrap(t, document)
                        },
                        getClosestTag: function(e, t) {
                            return r.traverseUp(e, function(e) {
                                return e.nodeName.toLowerCase() === t.toLowerCase()
                            })
                        },
                        unwrap: function(e, t) {
                            for (var n = t.createDocumentFragment(), i = Array.prototype.slice.call(e.childNodes), o = 0; o < i.length; o++) n.appendChild(i[o]);
                            n.childNodes.length ? e.parentNode.replaceChild(n, e) : e.parentNode.removeChild(e)
                        },
                        guid: function() {
                            function e() {
                                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                            }
                            return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                        }
                    };
                    e.util = r
                }(window), (t = function(t) {
                    e.util.extend(this, t)
                }).extend = function(t) {
                    var n, i = this;
                    n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return i.apply(this, arguments)
                    }, e.util.extend(n, i);
                    var o = function() {
                        this.constructor = n
                    };
                    return o.prototype = i.prototype, n.prototype = new o, t && e.util.extend(n.prototype, t), n
                }, t.prototype = {
                    init: function() {},
                    base: void 0,
                    name: void 0,
                    checkState: void 0,
                    destroy: void 0,
                    queryCommandState: void 0,
                    isActive: void 0,
                    isAlreadyApplied: void 0,
                    setActive: void 0,
                    setInactive: void 0,
                    getInteractionElements: void 0,
                    window: void 0,
                    document: void 0,
                    getEditorElements: function() {
                        return this.base.elements
                    },
                    getEditorId: function() {
                        return this.base.id
                    },
                    getEditorOption: function(e) {
                        return this.base.options[e]
                    }
                }, ["execAction", "on", "off", "subscribe", "trigger"].forEach(function(e) {
                    t.prototype[e] = function() {
                        return this.base[e].apply(this.base, arguments)
                    }
                }), e.Extension = t,
                function() {
                    function t(t) {
                        return e.util.isBlockContainer(t) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    }
                    var n = {
                        findMatchingSelectionParent: function(t, n) {
                            var i, o = n.getSelection();
                            return 0 !== o.rangeCount && (i = o.getRangeAt(0).commonAncestorContainer, e.util.traverseUp(i, t))
                        },
                        getSelectionElement: function(t) {
                            return this.findMatchingSelectionParent(function(t) {
                                return e.util.isMediumEditorElement(t)
                            }, t)
                        },
                        exportSelection: function(e, t) {
                            if (!e) return null;
                            var n = null,
                                i = t.getSelection();
                            if (i.rangeCount > 0) {
                                var o, s = i.getRangeAt(0),
                                    r = s.cloneRange();
                                r.selectNodeContents(e), r.setEnd(s.startContainer, s.startOffset), n = {
                                    start: o = r.toString().length,
                                    end: o + s.toString().length
                                }, this.doesRangeStartWithImages(s, t) && (n.startsWithImage = !0);
                                var a = this.getTrailingImageCount(e, n, s.endContainer, s.endOffset);
                                if (a && (n.trailingImageCount = a), 0 !== o) {
                                    var l = this.getIndexRelativeToAdjacentEmptyBlocks(t, e, s.startContainer, s.startOffset); - 1 !== l && (n.emptyBlocksIndex = l)
                                }
                            }
                            return n
                        },
                        importSelection: function(e, t, n, i) {
                            if (e && t) {
                                var o = n.createRange();
                                o.setStart(t, 0), o.collapse(!0);
                                var s, r = t,
                                    a = [],
                                    l = 0,
                                    c = !1,
                                    u = !1,
                                    d = 0,
                                    h = !1,
                                    m = !1,
                                    f = null;
                                for ((i || e.startsWithImage || void 0 !== e.emptyBlocksIndex) && (m = !0); !h && r;) if (r.nodeType > 3) r = a.pop();
                                    else {
                                        if (3 !== r.nodeType || u) {
                                            if (e.trailingImageCount && u && ("img" === r.nodeName.toLowerCase() && d++, d === e.trailingImageCount)) {
                                                for (var p = 0; r.parentNode.childNodes[p] !== r;) p++;
                                                o.setEnd(r.parentNode, p + 1), h = !0
                                            }
                                            if (!h && 1 === r.nodeType) for (var g = r.childNodes.length - 1; g >= 0;) a.push(r.childNodes[g]), g -= 1
                                        } else s = l + r.length, !c && e.start >= l && e.start <= s && (m || e.start < s ? (o.setStart(r, e.start - l), c = !0) : f = r), c && e.end >= l && e.end <= s && (e.trailingImageCount ? u = !0 : (o.setEnd(r, e.end - l), h = !0)), l = s;
                                        h || (r = a.pop())
                                    }!c && f && (o.setStart(f, f.length), o.setEnd(f, f.length)), void 0 !== e.emptyBlocksIndex && (o = this.importSelectionMoveCursorPastBlocks(n, t, e.emptyBlocksIndex, o)), i && (o = this.importSelectionMoveCursorPastAnchor(e, o)), this.selectRange(n, o)
                            }
                        },
                        importSelectionMoveCursorPastAnchor: function(t, n) {
                            if (t.start === t.end && 3 === n.startContainer.nodeType && n.startOffset === n.startContainer.nodeValue.length && e.util.traverseUp(n.startContainer, function(e) {
                                return "a" === e.nodeName.toLowerCase()
                            })) {
                                for (var i = n.startContainer, o = n.startContainer.parentNode; null !== o && "a" !== o.nodeName.toLowerCase();) o.childNodes[o.childNodes.length - 1] !== i ? o = null : (i = o, o = o.parentNode);
                                if (null !== o && "a" === o.nodeName.toLowerCase()) {
                                    for (var s = null, r = 0; null === s && r < o.parentNode.childNodes.length; r++) o.parentNode.childNodes[r] === o && (s = r);
                                    n.setStart(o.parentNode, s + 1), n.collapse(!0)
                                }
                            }
                            return n
                        },
                        importSelectionMoveCursorPastBlocks: function(n, i, o, s) {
                            var r, a, l = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1),
                                c = s.startContainer,
                                u = 0;
                            for (o = o || 1, r = 3 === c.nodeType && e.util.isBlockContainer(c.previousSibling) ? c.previousSibling : e.util.getClosestBlockContainer(c); l.nextNode();) if (a) {
                                    if (a = l.currentNode, ++u === o) break;
                                    if (a.textContent.length > 0) break
                                } else r === l.currentNode && (a = l.currentNode);
                            return a || (a = r), s.setStart(e.util.getFirstSelectableLeafNode(a), 0), s
                        },
                        getIndexRelativeToAdjacentEmptyBlocks: function(n, i, o, s) {
                            if (o.textContent.length > 0 && s > 0) return -1;
                            var r = o;
                            if (3 !== r.nodeType && (r = o.childNodes[s]), r) {
                                if (!e.util.isElementAtBeginningOfBlock(r)) return -1;
                                var a = e.util.findPreviousSibling(r);
                                if (!a) return -1;
                                if (a.nodeValue) return -1
                            }
                            for (var l = e.util.getClosestBlockContainer(o), c = n.createTreeWalker(i, NodeFilter.SHOW_ELEMENT, t, !1), u = 0; c.nextNode();) {
                                var d = "" === c.currentNode.textContent;
                                if ((d || u > 0) && (u += 1), c.currentNode === l) return u;
                                d || (u = 0)
                            }
                            return u
                        },
                        doesRangeStartWithImages: function(e, t) {
                            if (0 !== e.startOffset || 1 !== e.startContainer.nodeType) return !1;
                            if ("img" === e.startContainer.nodeName.toLowerCase()) return !0;
                            var n = e.startContainer.querySelector("img");
                            if (!n) return !1;
                            for (var i = t.createTreeWalker(e.startContainer, NodeFilter.SHOW_ALL, null, !1); i.nextNode();) {
                                var o = i.currentNode;
                                if (o === n) break;
                                if (o.nodeValue) return !1
                            }
                            return !0
                        },
                        getTrailingImageCount: function(e, t, n, i) {
                            if (0 === i || 1 !== n.nodeType) return 0;
                            if ("img" !== n.nodeName.toLowerCase() && !n.querySelector("img")) return 0;
                            for (var o = n.childNodes[i - 1]; o.hasChildNodes();) o = o.lastChild;
                            for (var s, r = e, a = [], l = 0, c = !1, u = !1, d = !1, h = 0; !d && r;) if (r.nodeType > 3) r = a.pop();
                                else {
                                    if (3 !== r.nodeType || u) {
                                        if ("img" === r.nodeName.toLowerCase() && h++, r === o) d = !0;
                                        else if (1 === r.nodeType) for (var m = r.childNodes.length - 1; m >= 0;) a.push(r.childNodes[m]), m -= 1
                                    } else h = 0, s = l + r.length, !c && t.start >= l && t.start <= s && (c = !0), c && t.end >= l && t.end <= s && (u = !0), l = s;
                                    d || (r = a.pop())
                                }
                            return h
                        },
                        selectionContainsContent: function(e) {
                            var t = e.getSelection();
                            if (!t || t.isCollapsed || !t.rangeCount) return !1;
                            if ("" !== t.toString().trim()) return !0;
                            var n = this.getSelectedParentElement(t.getRangeAt(0));
                            return !(!n || !("img" === n.nodeName.toLowerCase() || 1 === n.nodeType && n.querySelector("img")))
                        },
                        selectionInContentEditableFalse: function(e) {
                            var t, n = this.findMatchingSelectionParent(function(e) {
                                    var n = e && e.getAttribute("contenteditable");
                                    return "true" === n && (t = !0), "#text" !== e.nodeName && "false" === n
                                }, e);
                            return !t && n
                        },
                        getSelectionHtml: function(e) {
                            var t, n, i, o = "",
                                s = e.getSelection();
                            if (s.rangeCount) {
                                for (i = e.createElement("div"), t = 0, n = s.rangeCount; n > t; t += 1) i.appendChild(s.getRangeAt(t).cloneContents());
                                o = i.innerHTML
                            }
                            return o
                        },
                        getCaretOffsets: function(e, t) {
                            var n, i;
                            return t || (t = window.getSelection().getRangeAt(0)), n = t.cloneRange(), i = t.cloneRange(), n.selectNodeContents(e), n.setEnd(t.endContainer, t.endOffset), i.selectNodeContents(e), i.setStart(t.endContainer, t.endOffset), {
                                left: n.toString().length,
                                right: i.toString().length
                            }
                        },
                        rangeSelectsSingleNode: function(e) {
                            var t = e.startContainer;
                            return t === e.endContainer && t.hasChildNodes() && e.endOffset === e.startOffset + 1
                        },
                        getSelectedParentElement: function(e) {
                            return e ? this.rangeSelectsSingleNode(e) && 3 !== e.startContainer.childNodes[e.startOffset].nodeType ? e.startContainer.childNodes[e.startOffset] : 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer : null
                        },
                        getSelectedElements: function(e) {
                            var t, n, i, o = e.getSelection();
                            if (!o.rangeCount || o.isCollapsed || !o.getRangeAt(0).commonAncestorContainer) return [];
                            if (3 === (t = o.getRangeAt(0)).commonAncestorContainer.nodeType) {
                                for (n = [], i = t.commonAncestorContainer; i.parentNode && 1 === i.parentNode.childNodes.length;) n.push(i.parentNode), i = i.parentNode;
                                return n
                            }
                            return [].filter.call(t.commonAncestorContainer.getElementsByTagName("*"), function(e) {
                                return "function" != typeof o.containsNode || o.containsNode(e, !0)
                            })
                        },
                        selectNode: function(e, t) {
                            var n = t.createRange();
                            n.selectNodeContents(e), this.selectRange(t, n)
                        },
                        select: function(e, t, n, i, o) {
                            var s = e.createRange();
                            return s.setStart(t, n), i ? s.setEnd(i, o) : s.collapse(!0), this.selectRange(e, s), s
                        },
                        clearSelection: function(e, t) {
                            t ? e.getSelection().collapseToStart() : e.getSelection().collapseToEnd()
                        },
                        moveCursor: function(e, t, n) {
                            this.select(e, t, n)
                        },
                        getSelectionRange: function(e) {
                            var t = e.getSelection();
                            return 0 === t.rangeCount ? null : t.getRangeAt(0)
                        },
                        selectRange: function(e, t) {
                            var n = e.getSelection();
                            n.removeAllRanges(), n.addRange(t)
                        },
                        getSelectionStart: function(e) {
                            var t = e.getSelection().anchorNode;
                            return t && 3 === t.nodeType ? t.parentNode : t
                        }
                    };
                    e.selection = n
                }(),
                function() {
                    function t(t, n) {
                        return !!t && t.some(function(t) {
                            if ("function" != typeof t.getInteractionElements) return !1;
                            var i = t.getInteractionElements();
                            return !!i && (Array.isArray(i) || (i = [i]), i.some(function(t) {
                                return e.util.isDescendant(t, n, !0)
                            }))
                        })
                    }
                    var n = function(e) {
                        this.base = e, this.options = this.base.options, this.events = [], this.disabledEvents = {}, this.customEvents = {}, this.listeners = {}
                    };
                    n.prototype = {
                        InputEventOnContenteditableSupported: !e.util.isIE && !e.util.isEdge,
                        attachDOMEvent: function(t, n, i, o) {
                            var s = this.base.options.contentWindow,
                                r = this.base.options.ownerDocument;
                            t = e.util.isElement(t) || [s, r].indexOf(t) > -1 ? [t] : t, Array.prototype.forEach.call(t, function(e) {
                                e.addEventListener(n, i, o), this.events.push([e, n, i, o])
                            }.bind(this))
                        },
                        detachDOMEvent: function(t, n, i, o) {
                            var s, r, a = this.base.options.contentWindow,
                                l = this.base.options.ownerDocument;
                            t && (t = e.util.isElement(t) || [a, l].indexOf(t) > -1 ? [t] : t, Array.prototype.forEach.call(t, function(e) {
                                -1 !== (s = this.indexOfListener(e, n, i, o)) && (r = this.events.splice(s, 1)[0])[0].removeEventListener(r[1], r[2], r[3])
                            }.bind(this)))
                        },
                        indexOfListener: function(e, t, n, i) {
                            var o, s, r;
                            for (o = 0, s = this.events.length; s > o; o += 1) if ((r = this.events[o])[0] === e && r[1] === t && r[2] === n && r[3] === i) return o;
                            return -1
                        },
                        detachAllDOMEvents: function() {
                            for (var e = this.events.pop(); e;) e[0].removeEventListener(e[1], e[2], e[3]), e = this.events.pop()
                        },
                        detachAllEventsFromElement: function(e) {
                            for (var t = this.events.filter(function(t) {
                                return t && t[0].getAttribute && t[0].getAttribute("medium-editor-index") === e.getAttribute("medium-editor-index")
                            }), n = 0, i = t.length; i > n; n++) {
                                var o = t[n];
                                this.detachDOMEvent(o[0], o[1], o[2], o[3])
                            }
                        },
                        attachAllEventsToElement: function(e) {
                            this.listeners.editableInput && (this.contentCache[e.getAttribute("medium-editor-index")] = e.innerHTML), this.eventsCache && this.eventsCache.forEach(function(t) {
                                this.attachDOMEvent(e, t.name, t.handler.bind(this))
                            }, this)
                        },
                        enableCustomEvent: function(e) {
                            void 0 !== this.disabledEvents[e] && delete this.disabledEvents[e]
                        },
                        disableCustomEvent: function(e) {
                            this.disabledEvents[e] = !0
                        },
                        attachCustomEvent: function(e, t) {
                            this.setupListener(e), this.customEvents[e] || (this.customEvents[e] = []), this.customEvents[e].push(t)
                        },
                        detachCustomEvent: function(e, t) {
                            var n = this.indexOfCustomListener(e, t); - 1 !== n && this.customEvents[e].splice(n, 1)
                        },
                        indexOfCustomListener: function(e, t) {
                            return this.customEvents[e] && this.customEvents[e].length ? this.customEvents[e].indexOf(t) : -1
                        },
                        detachAllCustomEvents: function() {
                            this.customEvents = {}
                        },
                        triggerCustomEvent: function(e, t, n) {
                            this.customEvents[e] && !this.disabledEvents[e] && this.customEvents[e].forEach(function(e) {
                                e(t, n)
                            })
                        },
                        destroy: function() {
                            this.detachAllDOMEvents(), this.detachAllCustomEvents(), this.detachExecCommand(), this.base.elements && this.base.elements.forEach(function(e) {
                                e.removeAttribute("data-medium-focused")
                            })
                        },
                        attachToExecCommand: function() {
                            this.execCommandListener || (this.execCommandListener = function(e) {
                                this.handleDocumentExecCommand(e)
                            }.bind(this), this.wrapExecCommand(), this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))
                        },
                        detachExecCommand: function() {
                            var e = this.options.ownerDocument;
                            if (this.execCommandListener && e.execCommand.listeners) {
                                var t = e.execCommand.listeners.indexOf(this.execCommandListener); - 1 !== t && e.execCommand.listeners.splice(t, 1), e.execCommand.listeners.length || this.unwrapExecCommand()
                            }
                        },
                        wrapExecCommand: function() {
                            var e = this.options.ownerDocument;
                            if (!e.execCommand.listeners) {
                                var t = function(t, n) {
                                    e.execCommand.listeners && e.execCommand.listeners.forEach(function(e) {
                                        e({
                                            command: t[0],
                                            value: t[2],
                                            args: t,
                                            result: n
                                        })
                                    })
                                }, n = function() {
                                        var n = e.execCommand.orig.apply(this, arguments);
                                        if (!e.execCommand.listeners) return n;
                                        var i = Array.prototype.slice.call(arguments);
                                        return t(i, n), n
                                    };
                                n.orig = e.execCommand, n.listeners = [], n.callListeners = t, e.execCommand = n
                            }
                        },
                        unwrapExecCommand: function() {
                            var e = this.options.ownerDocument;
                            e.execCommand.orig && (e.execCommand = e.execCommand.orig)
                        },
                        setupListener: function(e) {
                            if (!this.listeners[e]) {
                                switch (e) {
                                    case "externalInteraction":
                                        this.attachDOMEvent(this.options.ownerDocument.body, "mousedown", this.handleBodyMousedown.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "click", this.handleBodyClick.bind(this), !0), this.attachDOMEvent(this.options.ownerDocument.body, "focus", this.handleBodyFocus.bind(this), !0);
                                        break;
                                    case "blur":
                                    case "focus":
                                        this.setupListener("externalInteraction");
                                        break;
                                    case "editableInput":
                                        this.contentCache = {}, this.base.elements.forEach(function(e) {
                                            this.contentCache[e.getAttribute("medium-editor-index")] = e.innerHTML
                                        }, this), this.InputEventOnContenteditableSupported && this.attachToEachElement("input", this.handleInput), this.InputEventOnContenteditableSupported || (this.setupListener("editableKeypress"), this.keypressUpdateInput = !0, this.attachDOMEvent(document, "selectionchange", this.handleDocumentSelectionChange.bind(this)), this.attachToExecCommand());
                                        break;
                                    case "editableClick":
                                        this.attachToEachElement("click", this.handleClick);
                                        break;
                                    case "editableBlur":
                                        this.attachToEachElement("blur", this.handleBlur);
                                        break;
                                    case "editableKeypress":
                                        this.attachToEachElement("keypress", this.handleKeypress);
                                        break;
                                    case "editableKeyup":
                                        this.attachToEachElement("keyup", this.handleKeyup);
                                        break;
                                    case "editableKeydown":
                                        this.attachToEachElement("keydown", this.handleKeydown);
                                        break;
                                    case "editableKeydownSpace":
                                    case "editableKeydownEnter":
                                    case "editableKeydownTab":
                                    case "editableKeydownDelete":
                                        this.setupListener("editableKeydown");
                                        break;
                                    case "editableMouseover":
                                        this.attachToEachElement("mouseover", this.handleMouseover);
                                        break;
                                    case "editableDrag":
                                        this.attachToEachElement("dragover", this.handleDragging), this.attachToEachElement("dragleave", this.handleDragging);
                                        break;
                                    case "editableDrop":
                                        this.attachToEachElement("drop", this.handleDrop);
                                        break;
                                    case "editablePaste":
                                        this.attachToEachElement("paste", this.handlePaste)
                                }
                                this.listeners[e] = !0
                            }
                        },
                        attachToEachElement: function(e, t) {
                            this.eventsCache || (this.eventsCache = []), this.base.elements.forEach(function(n) {
                                this.attachDOMEvent(n, e, t.bind(this))
                            }, this), this.eventsCache.push({
                                name: e,
                                handler: t
                            })
                        },
                        cleanupElement: function(e) {
                            var t = e.getAttribute("medium-editor-index");
                            t && (this.detachAllEventsFromElement(e), this.contentCache && delete this.contentCache[t])
                        },
                        focusElement: function(e) {
                            e.focus(), this.updateFocus(e, {
                                target: e,
                                type: "focus"
                            })
                        },
                        updateFocus: function(n, i) {
                            var o, s = this.base.getFocusedElement();
                            s && "click" === i.type && this.lastMousedownTarget && (e.util.isDescendant(s, this.lastMousedownTarget, !0) || t(this.base.extensions, this.lastMousedownTarget)) && (o = s), o || this.base.elements.some(function(t) {
                                return !o && e.util.isDescendant(t, n, !0) && (o = t), !! o
                            }, this);
                            var r = !e.util.isDescendant(s, n, !0) && !t(this.base.extensions, n);
                            o !== s && (s && r && (s.removeAttribute("data-medium-focused"), this.triggerCustomEvent("blur", i, s)), o && (o.setAttribute("data-medium-focused", !0), this.triggerCustomEvent("focus", i, o))), r && this.triggerCustomEvent("externalInteraction", i)
                        },
                        updateInput: function(e, t) {
                            if (this.contentCache) {
                                var n = e.getAttribute("medium-editor-index"),
                                    i = e.innerHTML;
                                i !== this.contentCache[n] && this.triggerCustomEvent("editableInput", t, e), this.contentCache[n] = i
                            }
                        },
                        handleDocumentSelectionChange: function(t) {
                            if (t.currentTarget && t.currentTarget.activeElement) {
                                var n, i = t.currentTarget.activeElement;
                                this.base.elements.some(function(t) {
                                    return !!e.util.isDescendant(t, i, !0) && (n = t, !0)
                                }, this), n && this.updateInput(n, {
                                    target: i,
                                    currentTarget: n
                                })
                            }
                        },
                        handleDocumentExecCommand: function() {
                            var e = this.base.getFocusedElement();
                            e && this.updateInput(e, {
                                target: e,
                                currentTarget: e
                            })
                        },
                        handleBodyClick: function(e) {
                            this.updateFocus(e.target, e)
                        },
                        handleBodyFocus: function(e) {
                            this.updateFocus(e.target, e)
                        },
                        handleBodyMousedown: function(e) {
                            this.lastMousedownTarget = e.target
                        },
                        handleInput: function(e) {
                            this.updateInput(e.currentTarget, e)
                        },
                        handleClick: function(e) {
                            this.triggerCustomEvent("editableClick", e, e.currentTarget)
                        },
                        handleBlur: function(e) {
                            this.triggerCustomEvent("editableBlur", e, e.currentTarget)
                        },
                        handleKeypress: function(e) {
                            if (this.triggerCustomEvent("editableKeypress", e, e.currentTarget), this.keypressUpdateInput) {
                                var t = {
                                    target: e.target,
                                    currentTarget: e.currentTarget
                                };
                                setTimeout(function() {
                                    this.updateInput(t.currentTarget, t)
                                }.bind(this), 0)
                            }
                        },
                        handleKeyup: function(e) {
                            this.triggerCustomEvent("editableKeyup", e, e.currentTarget)
                        },
                        handleMouseover: function(e) {
                            this.triggerCustomEvent("editableMouseover", e, e.currentTarget)
                        },
                        handleDragging: function(e) {
                            this.triggerCustomEvent("editableDrag", e, e.currentTarget)
                        },
                        handleDrop: function(e) {
                            this.triggerCustomEvent("editableDrop", e, e.currentTarget)
                        },
                        handlePaste: function(e) {
                            this.triggerCustomEvent("editablePaste", e, e.currentTarget)
                        },
                        handleKeydown: function(t) {
                            return this.triggerCustomEvent("editableKeydown", t, t.currentTarget), e.util.isKey(t, e.util.keyCode.SPACE) ? this.triggerCustomEvent("editableKeydownSpace", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.ENTER) || t.ctrlKey && e.util.isKey(t, e.util.keyCode.M) ? this.triggerCustomEvent("editableKeydownEnter", t, t.currentTarget) : e.util.isKey(t, e.util.keyCode.TAB) ? this.triggerCustomEvent("editableKeydownTab", t, t.currentTarget) : e.util.isKey(t, [e.util.keyCode.DELETE, e.util.keyCode.BACKSPACE]) ? this.triggerCustomEvent("editableKeydownDelete", t, t.currentTarget) : void 0
                        }
                    }, e.Events = n
                }(),
                function() {
                    var t = e.Extension.extend({
                        action: void 0,
                        aria: void 0,
                        tagNames: void 0,
                        style: void 0,
                        useQueryState: void 0,
                        contentDefault: void 0,
                        contentFA: void 0,
                        classList: void 0,
                        attrs: void 0,
                        constructor: function(n) {
                            t.isBuiltInButton(n) ? e.Extension.call(this, this.defaults[n]) : e.Extension.call(this, n)
                        },
                        init: function() {
                            e.Extension.prototype.init.apply(this, arguments), this.button = this.createButton(), this.on(this.button, "click", this.handleClick.bind(this))
                        },
                        getButton: function() {
                            return this.button
                        },
                        getAction: function() {
                            return "function" == typeof this.action ? this.action(this.base.options) : this.action
                        },
                        getAria: function() {
                            return "function" == typeof this.aria ? this.aria(this.base.options) : this.aria
                        },
                        getTagNames: function() {
                            return "function" == typeof this.tagNames ? this.tagNames(this.base.options) : this.tagNames
                        },
                        createButton: function() {
                            var e = this.document.createElement("button"),
                                t = this.contentDefault,
                                n = this.getAria(),
                                i = this.getEditorOption("buttonLabels");
                            return e.classList.add("medium-editor-action"), e.classList.add("medium-editor-action-" + this.name), this.classList && this.classList.forEach(function(t) {
                                e.classList.add(t)
                            }), e.setAttribute("data-action", this.getAction()), n && (e.setAttribute("title", n), e.setAttribute("aria-label", n)), this.attrs && Object.keys(this.attrs).forEach(function(t) {
                                e.setAttribute(t, this.attrs[t])
                            }, this), "fontawesome" === i && this.contentFA && (t = this.contentFA), e.innerHTML = t, e
                        },
                        handleClick: function(e) {
                            e.preventDefault(), e.stopPropagation();
                            var t = this.getAction();
                            t && this.execAction(t)
                        },
                        isActive: function() {
                            return this.button.classList.contains(this.getEditorOption("activeButtonClass"))
                        },
                        setInactive: function() {
                            this.button.classList.remove(this.getEditorOption("activeButtonClass")), delete this.knownState
                        },
                        setActive: function() {
                            this.button.classList.add(this.getEditorOption("activeButtonClass")), delete this.knownState
                        },
                        queryCommandState: function() {
                            var e = null;
                            return this.useQueryState && (e = this.base.queryCommandState(this.getAction())), e
                        },
                        isAlreadyApplied: function(e) {
                            var t, n, i = !1,
                                o = this.getTagNames();
                            return !1 === this.knownState || !0 === this.knownState ? this.knownState : (o && o.length > 0 && (i = -1 !== o.indexOf(e.nodeName.toLowerCase())), !i && this.style && (t = this.style.value.split("|"), n = this.window.getComputedStyle(e, null).getPropertyValue(this.style.prop), t.forEach(function(e) {
                                this.knownState || ((i = -1 !== n.indexOf(e)) || "text-decoration" !== this.style.prop) && (this.knownState = i)
                            }, this)), i)
                        }
                    });
                    t.isBuiltInButton = function(t) {
                        return "string" == typeof t && e.extensions.button.prototype.defaults.hasOwnProperty(t)
                    }, e.extensions.button = t
                }(), e.extensions.button.prototype.defaults = {
                    bold: {
                        name: "bold",
                        action: "bold",
                        aria: "bold",
                        tagNames: ["b", "strong"],
                        style: {
                            prop: "font-weight",
                            value: "700|bold"
                        },
                        useQueryState: !0,
                        contentDefault: "<b>B</b>",
                        contentFA: '<i class="fa fa-bold"></i>'
                    },
                    italic: {
                        name: "italic",
                        action: "italic",
                        aria: "italic",
                        tagNames: ["i", "em"],
                        style: {
                            prop: "font-style",
                            value: "italic"
                        },
                        useQueryState: !0,
                        contentDefault: "<b><i>I</i></b>",
                        contentFA: '<i class="fa fa-italic"></i>'
                    },
                    underline: {
                        name: "underline",
                        action: "underline",
                        aria: "underline",
                        tagNames: ["u"],
                        style: {
                            prop: "text-decoration",
                            value: "underline"
                        },
                        useQueryState: !0,
                        contentDefault: "<b><u>U</u></b>",
                        contentFA: '<i class="fa fa-underline"></i>'
                    },
                    strikethrough: {
                        name: "strikethrough",
                        action: "strikethrough",
                        aria: "strike through",
                        tagNames: ["strike"],
                        style: {
                            prop: "text-decoration",
                            value: "line-through"
                        },
                        useQueryState: !0,
                        contentDefault: "<s>A</s>",
                        contentFA: '<i class="fa fa-strikethrough"></i>'
                    },
                    superscript: {
                        name: "superscript",
                        action: "superscript",
                        aria: "superscript",
                        tagNames: ["sup"],
                        contentDefault: "<b>x<sup>1</sup></b>",
                        contentFA: '<i class="fa fa-superscript"></i>'
                    },
                    subscript: {
                        name: "subscript",
                        action: "subscript",
                        aria: "subscript",
                        tagNames: ["sub"],
                        contentDefault: "<b>x<sub>1</sub></b>",
                        contentFA: '<i class="fa fa-subscript"></i>'
                    },
                    image: {
                        name: "image",
                        action: "image",
                        aria: "image",
                        tagNames: ["img"],
                        contentDefault: "<b>image</b>",
                        contentFA: '<i class="fa fa-picture-o"></i>'
                    },
                    html: {
                        name: "html",
                        action: "html",
                        aria: "evaluate html",
                        tagNames: ["iframe", "object"],
                        contentDefault: "<b>html</b>",
                        contentFA: '<i class="fa fa-code"></i>'
                    },
                    orderedlist: {
                        name: "orderedlist",
                        action: "insertorderedlist",
                        aria: "ordered list",
                        tagNames: ["ol"],
                        useQueryState: !0,
                        contentDefault: "<b>1.</b>",
                        contentFA: '<i class="fa fa-list-ol"></i>'
                    },
                    unorderedlist: {
                        name: "unorderedlist",
                        action: "insertunorderedlist",
                        aria: "unordered list",
                        tagNames: ["ul"],
                        useQueryState: !0,
                        contentDefault: "<b>&bull;</b>",
                        contentFA: '<i class="fa fa-list-ul"></i>'
                    },
                    indent: {
                        name: "indent",
                        action: "indent",
                        aria: "indent",
                        tagNames: [],
                        contentDefault: "<b>&rarr;</b>",
                        contentFA: '<i class="fa fa-indent"></i>'
                    },
                    outdent: {
                        name: "outdent",
                        action: "outdent",
                        aria: "outdent",
                        tagNames: [],
                        contentDefault: "<b>&larr;</b>",
                        contentFA: '<i class="fa fa-outdent"></i>'
                    },
                    justifyCenter: {
                        name: "justifyCenter",
                        action: "justifyCenter",
                        aria: "center justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "center"
                        },
                        contentDefault: "<b>C</b>",
                        contentFA: '<i class="fa fa-align-center"></i>'
                    },
                    justifyFull: {
                        name: "justifyFull",
                        action: "justifyFull",
                        aria: "full justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "justify"
                        },
                        contentDefault: "<b>J</b>",
                        contentFA: '<i class="fa fa-align-justify"></i>'
                    },
                    justifyLeft: {
                        name: "justifyLeft",
                        action: "justifyLeft",
                        aria: "left justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "left"
                        },
                        contentDefault: "<b>L</b>",
                        contentFA: '<i class="fa fa-align-left"></i>'
                    },
                    justifyRight: {
                        name: "justifyRight",
                        action: "justifyRight",
                        aria: "right justify",
                        tagNames: [],
                        style: {
                            prop: "text-align",
                            value: "right"
                        },
                        contentDefault: "<b>R</b>",
                        contentFA: '<i class="fa fa-align-right"></i>'
                    },
                    removeFormat: {
                        name: "removeFormat",
                        aria: "remove formatting",
                        action: "removeFormat",
                        contentDefault: "<b>X</b>",
                        contentFA: '<i class="fa fa-eraser"></i>'
                    },
                    quote: {
                        name: "quote",
                        action: "append-blockquote",
                        aria: "blockquote",
                        tagNames: ["blockquote"],
                        contentDefault: "<b>&ldquo;</b>",
                        contentFA: '<i class="fa fa-quote-right"></i>'
                    },
                    pre: {
                        name: "pre",
                        action: "append-pre",
                        aria: "preformatted text",
                        tagNames: ["pre"],
                        contentDefault: "<b>0101</b>",
                        contentFA: '<i class="fa fa-code fa-lg"></i>'
                    },
                    h1: {
                        name: "h1",
                        action: "append-h1",
                        aria: "header type one",
                        tagNames: ["h1"],
                        contentDefault: "<b>H1</b>",
                        contentFA: '<i class="fa fa-header"><sup>1</sup>'
                    },
                    h2: {
                        name: "h2",
                        action: "append-h2",
                        aria: "header type two",
                        tagNames: ["h2"],
                        contentDefault: "<b>H2</b>",
                        contentFA: '<i class="fa fa-header"><sup>2</sup>'
                    },
                    h3: {
                        name: "h3",
                        action: "append-h3",
                        aria: "header type three",
                        tagNames: ["h3"],
                        contentDefault: "<b>H3</b>",
                        contentFA: '<i class="fa fa-header"><sup>3</sup>'
                    },
                    h4: {
                        name: "h4",
                        action: "append-h4",
                        aria: "header type four",
                        tagNames: ["h4"],
                        contentDefault: "<b>H4</b>",
                        contentFA: '<i class="fa fa-header"><sup>4</sup>'
                    },
                    h5: {
                        name: "h5",
                        action: "append-h5",
                        aria: "header type five",
                        tagNames: ["h5"],
                        contentDefault: "<b>H5</b>",
                        contentFA: '<i class="fa fa-header"><sup>5</sup>'
                    },
                    h6: {
                        name: "h6",
                        action: "append-h6",
                        aria: "header type six",
                        tagNames: ["h6"],
                        contentDefault: "<b>H6</b>",
                        contentFA: '<i class="fa fa-header"><sup>6</sup>'
                    }
                },
                function() {
                    var t = e.extensions.button.extend({
                        init: function() {
                            e.extensions.button.prototype.init.apply(this, arguments)
                        },
                        formSaveLabel: "&#10003;",
                        formCloseLabel: "&times;",
                        activeClass: "medium-editor-toolbar-form-active",
                        hasForm: !0,
                        getForm: function() {},
                        isDisplayed: function() {
                            return !!this.hasForm && this.getForm().classList.contains(this.activeClass)
                        },
                        showForm: function() {
                            this.hasForm && this.getForm().classList.add(this.activeClass)
                        },
                        hideForm: function() {
                            this.hasForm && this.getForm().classList.remove(this.activeClass)
                        },
                        showToolbarDefaultActions: function() {
                            var e = this.base.getExtensionByName("toolbar");
                            e && e.showToolbarDefaultActions()
                        },
                        hideToolbarDefaultActions: function() {
                            var e = this.base.getExtensionByName("toolbar");
                            e && e.hideToolbarDefaultActions()
                        },
                        setToolbarPosition: function() {
                            var e = this.base.getExtensionByName("toolbar");
                            e && e.setToolbarPosition()
                        }
                    });
                    e.extensions.form = t
                }(),
                function() {
                    var t = e.extensions.form.extend({
                        customClassOption: null,
                        customClassOptionText: "Button",
                        linkValidation: !1,
                        placeholderText: "Paste or type a link",
                        targetCheckbox: !1,
                        targetCheckboxText: "Open in new window",
                        name: "anchor",
                        action: "createLink",
                        aria: "link",
                        tagNames: ["a"],
                        contentDefault: "<b>#</b>",
                        contentFA: '<i class="fa fa-link"></i>',
                        init: function() {
                            e.extensions.form.prototype.init.apply(this, arguments), this.subscribe("editableKeydown", this.handleKeydown.bind(this))
                        },
                        handleClick: function(t) {
                            t.preventDefault(), t.stopPropagation();
                            var n = e.selection.getSelectionRange(this.document);
                            return "a" === n.startContainer.nodeName.toLowerCase() || "a" === n.endContainer.nodeName.toLowerCase() || e.util.getClosestTag(e.selection.getSelectedParentElement(n), "a") ? this.execAction("unlink") : (this.isDisplayed() || this.showForm(), !1)
                        },
                        handleKeydown: function(t) {
                            e.util.isKey(t, e.util.keyCode.K) && e.util.isMetaCtrlKey(t) && !t.shiftKey && this.handleClick(t)
                        },
                        getForm: function() {
                            return this.form || (this.form = this.createForm()), this.form
                        },
                        getTemplate: function() {
                            var e = ['<input type="text" class="medium-editor-toolbar-input" placeholder="', this.placeholderText, '">'];
                            return e.push('<a href="#" class="medium-editor-toolbar-save">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : this.formSaveLabel, "</a>"), e.push('<a href="#" class="medium-editor-toolbar-close">', "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : this.formCloseLabel, "</a>"), this.targetCheckbox && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-target" id="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', '<label for="medium-editor-toolbar-anchor-target-field-' + this.getEditorId() + '">', this.targetCheckboxText, "</label>", "</div>"), this.customClassOption && e.push('<div class="medium-editor-toolbar-form-row">', '<input type="checkbox" class="medium-editor-toolbar-anchor-button">', "<label>", this.customClassOptionText, "</label>", "</div>"), e.join("")
                        },
                        isDisplayed: function() {
                            return e.extensions.form.prototype.isDisplayed.apply(this)
                        },
                        hideForm: function() {
                            e.extensions.form.prototype.hideForm.apply(this), this.getInput().value = ""
                        },
                        showForm: function(t) {
                            var n = this.getInput(),
                                i = this.getAnchorTargetCheckbox(),
                                o = this.getAnchorButtonCheckbox();
                            if ("string" == typeof(t = t || {
                                value: ""
                            }) && (t = {
                                value: t
                            }), this.base.saveSelection(), this.hideToolbarDefaultActions(), e.extensions.form.prototype.showForm.apply(this), this.setToolbarPosition(), n.value = t.value, n.focus(), i && (i.checked = "_blank" === t.target), o) {
                                var s = t.buttonClass ? t.buttonClass.split(" ") : [];
                                o.checked = -1 !== s.indexOf(this.customClassOption)
                            }
                        },
                        destroy: function() {
                            return !!this.form && (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form)
                        },
                        getFormOpts: function() {
                            var e = this.getAnchorTargetCheckbox(),
                                t = this.getAnchorButtonCheckbox(),
                                n = {
                                    value: this.getInput().value.trim()
                                };
                            return this.linkValidation && (n.value = this.checkLinkFormat(n.value)), n.target = "_self", e && e.checked && (n.target = "_blank"), t && t.checked && (n.buttonClass = this.customClassOption), n
                        },
                        doFormSave: function() {
                            var e = this.getFormOpts();
                            this.completeFormSave(e)
                        },
                        completeFormSave: function(e) {
                            this.base.restoreSelection(), this.execAction(this.action, e), this.base.checkSelection()
                        },
                        ensureEncodedUri: function(e) {
                            return e === decodeURI(e) ? encodeURI(e) : e
                        },
                        ensureEncodedUriComponent: function(e) {
                            return e === decodeURIComponent(e) ? encodeURIComponent(e) : e
                        },
                        ensureEncodedParam: function(e) {
                            var t = e.split("="),
                                n = t[0],
                                i = t[1];
                            return n + (void 0 === i ? "" : "=" + this.ensureEncodedUriComponent(i))
                        },
                        ensureEncodedQuery: function(e) {
                            return e.split("&").map(this.ensureEncodedParam.bind(this)).join("&")
                        },
                        checkLinkFormat: function(e) {
                            var t = /^([a-z]+:)?\/\/|^(mailto|tel|maps):|^\#/i.test(e),
                                n = "",
                                i = e.match(/^(.*?)(?:\?(.*?))?(?:#(.*))?$/),
                                o = i[1],
                                s = i[2],
                                r = i[3];
                            if (/^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/.test(e)) return "tel:" + e;
                            if (!t) {
                                var a = o.split("/")[0];
                                (a.match(/.+(\.|:).+/) || "localhost" === a) && (n = "http://")
                            }
                            return n + this.ensureEncodedUri(o) + (void 0 === s ? "" : "?" + this.ensureEncodedQuery(s)) + (void 0 === r ? "" : "#" + r)
                        },
                        doFormCancel: function() {
                            this.base.restoreSelection(), this.base.checkSelection()
                        },
                        attachFormEvents: function(e) {
                            var t = e.querySelector(".medium-editor-toolbar-close"),
                                n = e.querySelector(".medium-editor-toolbar-save"),
                                i = e.querySelector(".medium-editor-toolbar-input");
                            this.on(e, "click", this.handleFormClick.bind(this)), this.on(i, "keyup", this.handleTextboxKeyup.bind(this)), this.on(t, "click", this.handleCloseClick.bind(this)), this.on(n, "click", this.handleSaveClick.bind(this), !0)
                        },
                        createForm: function() {
                            var e = this.document.createElement("div");
                            return e.className = "medium-editor-toolbar-form", e.id = "medium-editor-toolbar-form-anchor-" + this.getEditorId(), e.innerHTML = this.getTemplate(), this.attachFormEvents(e), e
                        },
                        getInput: function() {
                            return this.getForm().querySelector("input.medium-editor-toolbar-input")
                        },
                        getAnchorTargetCheckbox: function() {
                            return this.getForm().querySelector(".medium-editor-toolbar-anchor-target")
                        },
                        getAnchorButtonCheckbox: function() {
                            return this.getForm().querySelector(".medium-editor-toolbar-anchor-button")
                        },
                        handleTextboxKeyup: function(t) {
                            return t.keyCode === e.util.keyCode.ENTER ? (t.preventDefault(), void this.doFormSave()) : void(t.keyCode === e.util.keyCode.ESCAPE && (t.preventDefault(), this.doFormCancel()))
                        },
                        handleFormClick: function(e) {
                            e.stopPropagation()
                        },
                        handleSaveClick: function(e) {
                            e.preventDefault(), this.doFormSave()
                        },
                        handleCloseClick: function(e) {
                            e.preventDefault(), this.doFormCancel()
                        }
                    });
                    e.extensions.anchor = t
                }(),
                function() {
                    var t = e.Extension.extend({
                        name: "anchor-preview",
                        hideDelay: 500,
                        previewValueSelector: "a",
                        showWhenToolbarIsVisible: !1,
                        showOnEmptyLinks: !0,
                        init: function() {
                            this.anchorPreview = this.createPreview(), this.getEditorOption("elementsContainer").appendChild(this.anchorPreview), this.attachToEditables()
                        },
                        getInteractionElements: function() {
                            return this.getPreviewElement()
                        },
                        getPreviewElement: function() {
                            return this.anchorPreview
                        },
                        createPreview: function() {
                            var e = this.document.createElement("div");
                            return e.id = "medium-editor-anchor-preview-" + this.getEditorId(), e.className = "medium-editor-anchor-preview", e.innerHTML = this.getTemplate(), this.on(e, "click", this.handleClick.bind(this)), e
                        },
                        getTemplate: function() {
                            return '<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'
                        },
                        destroy: function() {
                            this.anchorPreview && (this.anchorPreview.parentNode && this.anchorPreview.parentNode.removeChild(this.anchorPreview), delete this.anchorPreview)
                        },
                        hidePreview: function() {
                            this.anchorPreview && this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"), this.activeAnchor = null
                        },
                        showPreview: function(e) {
                            return !(!this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") && !e.getAttribute("data-disable-preview")) || (this.previewValueSelector && (this.anchorPreview.querySelector(this.previewValueSelector).textContent = e.attributes.href.value, this.anchorPreview.querySelector(this.previewValueSelector).href = e.attributes.href.value), this.anchorPreview.classList.add("medium-toolbar-arrow-over"), this.anchorPreview.classList.remove("medium-toolbar-arrow-under"), this.anchorPreview.classList.contains("medium-editor-anchor-preview-active") || this.anchorPreview.classList.add("medium-editor-anchor-preview-active"), this.activeAnchor = e, this.positionPreview(), this.attachPreviewHandlers(), this)
                        },
                        positionPreview: function(e) {
                            e = e || this.activeAnchor;
                            var t, n, i, o, s, r = this.window.innerWidth,
                                a = this.anchorPreview.offsetHeight,
                                l = e.getBoundingClientRect(),
                                c = this.diffLeft,
                                u = this.diffTop,
                                d = this.getEditorOption("elementsContainer"),
                                h = ["absolute", "fixed"].indexOf(window.getComputedStyle(d).getPropertyValue("position")) > -1,
                                m = {};
                            t = this.anchorPreview.offsetWidth / 2;
                            var f = this.base.getExtensionByName("toolbar");
                            f && (c = f.diffLeft, u = f.diffTop), n = c - t, h ? (o = d.getBoundingClientRect(), ["top", "left"].forEach(function(e) {
                                m[e] = l[e] - o[e]
                            }), m.width = l.width, m.height = l.height, l = m, r = o.width, s = d.scrollTop) : s = this.window.pageYOffset, i = l.left + l.width / 2, s += a + l.top + l.height - u - this.anchorPreview.offsetHeight, this.anchorPreview.style.top = Math.round(s) + "px", this.anchorPreview.style.right = "initial", t > i ? (this.anchorPreview.style.left = n + t + "px", this.anchorPreview.style.right = "initial") : t > r - i ? (this.anchorPreview.style.left = "auto", this.anchorPreview.style.right = 0) : (this.anchorPreview.style.left = n + i + "px", this.anchorPreview.style.right = "initial")
                        },
                        attachToEditables: function() {
                            this.subscribe("editableMouseover", this.handleEditableMouseover.bind(this)), this.subscribe("positionedToolbar", this.handlePositionedToolbar.bind(this))
                        },
                        handlePositionedToolbar: function() {
                            this.showWhenToolbarIsVisible || this.hidePreview()
                        },
                        handleClick: function(e) {
                            var t = this.base.getExtensionByName("anchor"),
                                n = this.activeAnchor;
                            t && n && (e.preventDefault(), this.base.selectElement(this.activeAnchor), this.base.delay(function() {
                                if (n) {
                                    var e = {
                                        value: n.attributes.href.value,
                                        target: n.getAttribute("target"),
                                        buttonClass: n.getAttribute("class")
                                    };
                                    t.showForm(e), n = null
                                }
                            }.bind(this))), this.hidePreview()
                        },
                        handleAnchorMouseout: function() {
                            this.anchorToPreview = null, this.off(this.activeAnchor, "mouseout", this.instanceHandleAnchorMouseout), this.instanceHandleAnchorMouseout = null
                        },
                        handleEditableMouseover: function(t) {
                            var n = e.util.getClosestTag(t.target, "a");
                            if (!1 !== n) {
                                if (!this.showOnEmptyLinks && (!/href=["']\S+["']/.test(n.outerHTML) || /href=["']#\S+["']/.test(n.outerHTML))) return !0;
                                var i = this.base.getExtensionByName("toolbar");
                                if (!this.showWhenToolbarIsVisible && i && i.isDisplayed && i.isDisplayed()) return !0;
                                this.activeAnchor && this.activeAnchor !== n && this.detachPreviewHandlers(), this.anchorToPreview = n, this.instanceHandleAnchorMouseout = this.handleAnchorMouseout.bind(this), this.on(this.anchorToPreview, "mouseout", this.instanceHandleAnchorMouseout), this.base.delay(function() {
                                    this.anchorToPreview && this.showPreview(this.anchorToPreview)
                                }.bind(this))
                            }
                        },
                        handlePreviewMouseover: function() {
                            this.lastOver = (new Date).getTime(), this.hovering = !0
                        },
                        handlePreviewMouseout: function(e) {
                            e.relatedTarget && /anchor-preview/.test(e.relatedTarget.className) || (this.hovering = !1)
                        },
                        updatePreview: function() {
                            if (this.hovering) return !0;
                            (new Date).getTime() - this.lastOver > this.hideDelay && this.detachPreviewHandlers()
                        },
                        detachPreviewHandlers: function() {
                            clearInterval(this.intervalTimer), this.instanceHandlePreviewMouseover && (this.off(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.activeAnchor && (this.off(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.off(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout))), this.hidePreview(), this.hovering = this.instanceHandlePreviewMouseover = this.instanceHandlePreviewMouseout = null
                        },
                        attachPreviewHandlers: function() {
                            this.lastOver = (new Date).getTime(), this.hovering = !0, this.instanceHandlePreviewMouseover = this.handlePreviewMouseover.bind(this), this.instanceHandlePreviewMouseout = this.handlePreviewMouseout.bind(this), this.intervalTimer = setInterval(this.updatePreview.bind(this), 200), this.on(this.anchorPreview, "mouseover", this.instanceHandlePreviewMouseover), this.on(this.anchorPreview, "mouseout", this.instanceHandlePreviewMouseout), this.on(this.activeAnchor, "mouseover", this.instanceHandlePreviewMouseover), this.on(this.activeAnchor, "mouseout", this.instanceHandlePreviewMouseout)
                        }
                    });
                    e.extensions.anchorPreview = t
                }(),
                function() {
                    function t(t) {
                        return !e.util.getClosestTag(t, "a")
                    }
                    var n, i, o, s;
                    n = [" ", "\t", "\n", "\r", " ", " ", " ", " ", " ", "\u2028", "\u2029"], i = "com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw", o = new RegExp("^(" + i + ")$", "i"), s = new RegExp("(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.](com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.(com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw))", "gi");
                    var r = e.Extension.extend({
                        init: function() {
                            e.Extension.prototype.init.apply(this, arguments), this.disableEventHandling = !1, this.subscribe("editableKeypress", this.onKeypress.bind(this)), this.subscribe("editableBlur", this.onBlur.bind(this)), this.document.execCommand("AutoUrlDetect", !1, !1)
                        },
                        isLastInstance: function() {
                            for (var e = 0, t = 0; t < this.window._mediumEditors.length; t++) {
                                var n = this.window._mediumEditors[t];
                                null !== n && void 0 !== n.getExtensionByName("autoLink") && e++
                            }
                            return 1 === e
                        },
                        destroy: function() {
                            this.document.queryCommandSupported("AutoUrlDetect") && this.isLastInstance() && this.document.execCommand("AutoUrlDetect", !1, !0)
                        },
                        onBlur: function(e, t) {
                            this.performLinking(t)
                        },
                        onKeypress: function(t) {
                            this.disableEventHandling || e.util.isKey(t, [e.util.keyCode.SPACE, e.util.keyCode.ENTER]) && (clearTimeout(this.performLinkingTimeout), this.performLinkingTimeout = setTimeout(function() {
                                try {
                                    var e = this.base.exportSelection();
                                    this.performLinking(t.target) && this.base.importSelection(e, !0)
                                } catch (n) {
                                    window.console && window.console.error("Failed to perform linking", n), this.disableEventHandling = !0
                                }
                            }.bind(this), 0))
                        },
                        performLinking: function(t) {
                            var n = e.util.splitByBlockElements(t),
                                i = !1;
                            0 === n.length && (n = [t]);
                            for (var o = 0; o < n.length; o++) i = this.removeObsoleteAutoLinkSpans(n[o]) || i, i = this.performLinkingWithinElement(n[o]) || i;
                            return this.base.events.updateInput(t, {
                                target: t,
                                currentTarget: t
                            }), i
                        },
                        removeObsoleteAutoLinkSpans: function(n) {
                            if (!n || 3 === n.nodeType) return !1;
                            for (var i = n.querySelectorAll('span[data-auto-link="true"]'), o = !1, s = 0; s < i.length; s++) {
                                var r = i[s].textContent;
                                if (-1 === r.indexOf("://") && (r = e.util.ensureUrlHasProtocol(r)), i[s].getAttribute("data-href") !== r && t(i[s])) {
                                    o = !0;
                                    var a = r.replace(/\s+$/, "");
                                    if (i[s].getAttribute("data-href") === a) {
                                        var l = r.length - a.length,
                                            c = e.util.splitOffDOMTree(i[s], this.splitTextBeforeEnd(i[s], l));
                                        i[s].parentNode.insertBefore(c, i[s].nextSibling)
                                    } else e.util.unwrap(i[s], this.document)
                                }
                            }
                            return o
                        },
                        splitTextBeforeEnd: function(e, t) {
                            for (var n = this.document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1), i = !0; i;) i = null !== n.lastChild();
                            for (var o, s, r; t > 0 && null !== r;)(s = (o = n.currentNode).nodeValue).length > t ? (r = o.splitText(s.length - t), t = 0) : (r = n.previousNode(), t -= s.length);
                            return r
                        },
                        performLinkingWithinElement: function(t) {
                            for (var n = this.findLinkableText(t), i = 0; i < n.length; i++) {
                                var o = e.util.findOrCreateMatchingTextNodes(this.document, t, n[i]);
                                this.shouldNotLink(o) || this.createAutoLink(o, n[i].href)
                            }
                            return !1
                        },
                        shouldNotLink: function(t) {
                            for (var n = !1, i = 0; i < t.length && !1 === n; i++) n = !! e.util.traverseUp(t[i], function(e) {
                                    return "a" === e.nodeName.toLowerCase() || e.getAttribute && "true" === e.getAttribute("data-auto-link")
                                });
                            return n
                        },
                        findLinkableText: function(e) {
                            for (var t = e.textContent, i = null, r = []; null !== (i = s.exec(t));) {
                                var a = i.index + i[0].length;
                                !(0 !== i.index && -1 === n.indexOf(t[i.index - 1]) || a !== t.length && -1 === n.indexOf(t[a])) && (-1 !== i[0].indexOf("/") || o.test(i[0].split(".").pop().split("?").shift())) && r.push({
                                    href: i[0],
                                    start: i.index,
                                    end: a
                                })
                            }
                            return r
                        },
                        createAutoLink: function(t, n) {
                            n = e.util.ensureUrlHasProtocol(n);
                            var i = e.util.createLink(this.document, t, n, this.getEditorOption("targetBlank") ? "_blank" : null),
                                o = this.document.createElement("span");
                            for (o.setAttribute("data-auto-link", "true"), o.setAttribute("data-href", n), i.insertBefore(o, i.firstChild); i.childNodes.length > 1;) o.appendChild(i.childNodes[1])
                        }
                    });
                    e.extensions.autoLink = r
                }(),
                function() {
                    function t(t) {
                        var i = e.util.getContainerEditorElement(t);
                        Array.prototype.slice.call(i.parentElement.querySelectorAll("." + n)).forEach(function(e) {
                            e.classList.remove(n)
                        })
                    }
                    var n = "medium-editor-dragover",
                        i = e.Extension.extend({
                            name: "fileDragging",
                            allowedTypes: ["image"],
                            init: function() {
                                e.Extension.prototype.init.apply(this, arguments), this.subscribe("editableDrag", this.handleDrag.bind(this)), this.subscribe("editableDrop", this.handleDrop.bind(this))
                            },
                            handleDrag: function(e) {
                                e.preventDefault(), e.dataTransfer.dropEffect = "copy";
                                var i = e.target.classList ? e.target : e.target.parentElement;
                                t(i), "dragover" === e.type && i.classList.add(n)
                            },
                            handleDrop: function(e) {
                                e.preventDefault(), e.stopPropagation(), this.base.selectElement(e.target);
                                var n = this.base.exportSelection();
                                n.start = n.end, this.base.importSelection(n), e.dataTransfer.files && Array.prototype.slice.call(e.dataTransfer.files).forEach(function(e) {
                                    this.isAllowedFile(e) && e.type.match("image") && this.insertImageFile(e)
                                }, this), t(e.target)
                            },
                            isAllowedFile: function(e) {
                                return this.allowedTypes.some(function(t) {
                                    return !!e.type.match(t)
                                })
                            },
                            insertImageFile: function(t) {
                                if ("function" == typeof FileReader) {
                                    var n = new FileReader;
                                    n.readAsDataURL(t), n.addEventListener("load", function(t) {
                                        var n = this.document.createElement("img");
                                        n.src = t.target.result, e.util.insertHTMLCommand(this.document, n.outerHTML)
                                    }.bind(this))
                                }
                            }
                        });
                    e.extensions.fileDragging = i
                }(),
                function() {
                    var t = e.Extension.extend({
                        name: "keyboard-commands",
                        commands: [{
                                command: "bold",
                                key: "B",
                                meta: !0,
                                shift: !1,
                                alt: !1
                            }, {
                                command: "italic",
                                key: "I",
                                meta: !0,
                                shift: !1,
                                alt: !1
                            }, {
                                command: "underline",
                                key: "U",
                                meta: !0,
                                shift: !1,
                                alt: !1
                            }
                        ],
                        init: function() {
                            e.Extension.prototype.init.apply(this, arguments), this.subscribe("editableKeydown", this.handleKeydown.bind(this)), this.keys = {}, this.commands.forEach(function(e) {
                                var t = e.key.charCodeAt(0);
                                this.keys[t] || (this.keys[t] = []), this.keys[t].push(e)
                            }, this)
                        },
                        handleKeydown: function(t) {
                            var n = e.util.getKeyCode(t);
                            if (this.keys[n]) {
                                var i = e.util.isMetaCtrlKey(t),
                                    o = !! t.shiftKey,
                                    s = !! t.altKey;
                                this.keys[n].forEach(function(e) {
                                    e.meta !== i || e.shift !== o || e.alt !== s && void 0 !== e.alt || (t.preventDefault(), t.stopPropagation(), "function" == typeof e.command ? e.command.apply(this) : !1 !== e.command && this.execAction(e.command))
                                }, this)
                            }
                        }
                    });
                    e.extensions.keyboardCommands = t
                }(),
                function() {
                    var t = e.extensions.form.extend({
                        name: "fontname",
                        action: "fontName",
                        aria: "change font name",
                        contentDefault: "&#xB1;",
                        contentFA: '<i class="fa fa-font"></i>',
                        fonts: ["", "Arial", "Verdana", "Times New Roman"],
                        init: function() {
                            e.extensions.form.prototype.init.apply(this, arguments)
                        },
                        handleClick: function(e) {
                            if (e.preventDefault(), e.stopPropagation(), !this.isDisplayed()) {
                                var t = this.document.queryCommandValue("fontName") + "";
                                this.showForm(t)
                            }
                            return !1
                        },
                        getForm: function() {
                            return this.form || (this.form = this.createForm()), this.form
                        },
                        isDisplayed: function() {
                            return "block" === this.getForm().style.display
                        },
                        hideForm: function() {
                            this.getForm().style.display = "none", this.getSelect().value = ""
                        },
                        showForm: function(e) {
                            var t = this.getSelect();
                            this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.setToolbarPosition(), t.value = e || "", t.focus()
                        },
                        destroy: function() {
                            return !!this.form && (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form)
                        },
                        doFormSave: function() {
                            this.base.restoreSelection(), this.base.checkSelection()
                        },
                        doFormCancel: function() {
                            this.base.restoreSelection(), this.clearFontName(), this.base.checkSelection()
                        },
                        createForm: function() {
                            var e, t = this.document,
                                n = t.createElement("div"),
                                i = t.createElement("select"),
                                o = t.createElement("a"),
                                s = t.createElement("a");
                            n.className = "medium-editor-toolbar-form", n.id = "medium-editor-toolbar-form-fontname-" + this.getEditorId(), this.on(n, "click", this.handleFormClick.bind(this));
                            for (var r = 0; r < this.fonts.length; r++)(e = t.createElement("option")).innerHTML = this.fonts[r], e.value = this.fonts[r], i.appendChild(e);
                            return i.className = "medium-editor-toolbar-select", n.appendChild(i), this.on(i, "change", this.handleFontChange.bind(this)), s.setAttribute("href", "#"), s.className = "medium-editor-toobar-save", s.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;", n.appendChild(s), this.on(s, "click", this.handleSaveClick.bind(this), !0), o.setAttribute("href", "#"), o.className = "medium-editor-toobar-close", o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;", n.appendChild(o), this.on(o, "click", this.handleCloseClick.bind(this)), n
                        },
                        getSelect: function() {
                            return this.getForm().querySelector("select.medium-editor-toolbar-select")
                        },
                        clearFontName: function() {
                            e.selection.getSelectedElements(this.document).forEach(function(e) {
                                "font" === e.nodeName.toLowerCase() && e.hasAttribute("face") && e.removeAttribute("face")
                            })
                        },
                        handleFontChange: function() {
                            var e = this.getSelect().value;
                            "" === e ? this.clearFontName() : this.execAction("fontName", {
                                value: e
                            })
                        },
                        handleFormClick: function(e) {
                            e.stopPropagation()
                        },
                        handleSaveClick: function(e) {
                            e.preventDefault(), this.doFormSave()
                        },
                        handleCloseClick: function(e) {
                            e.preventDefault(), this.doFormCancel()
                        }
                    });
                    e.extensions.fontName = t
                }(),
                function() {
                    var t = e.extensions.form.extend({
                        name: "fontsize",
                        action: "fontSize",
                        aria: "increase/decrease font size",
                        contentDefault: "&#xB1;",
                        contentFA: '<i class="fa fa-text-height"></i>',
                        init: function() {
                            e.extensions.form.prototype.init.apply(this, arguments)
                        },
                        handleClick: function(e) {
                            if (e.preventDefault(), e.stopPropagation(), !this.isDisplayed()) {
                                var t = this.document.queryCommandValue("fontSize") + "";
                                this.showForm(t)
                            }
                            return !1
                        },
                        getForm: function() {
                            return this.form || (this.form = this.createForm()), this.form
                        },
                        isDisplayed: function() {
                            return "block" === this.getForm().style.display
                        },
                        hideForm: function() {
                            this.getForm().style.display = "none", this.getInput().value = ""
                        },
                        showForm: function(e) {
                            var t = this.getInput();
                            this.base.saveSelection(), this.hideToolbarDefaultActions(), this.getForm().style.display = "block", this.setToolbarPosition(), t.value = e || "", t.focus()
                        },
                        destroy: function() {
                            return !!this.form && (this.form.parentNode && this.form.parentNode.removeChild(this.form), void delete this.form)
                        },
                        doFormSave: function() {
                            this.base.restoreSelection(), this.base.checkSelection()
                        },
                        doFormCancel: function() {
                            this.base.restoreSelection(), this.clearFontSize(), this.base.checkSelection()
                        },
                        createForm: function() {
                            var e = this.document,
                                t = e.createElement("div"),
                                n = e.createElement("input"),
                                i = e.createElement("a"),
                                o = e.createElement("a");
                            return t.className = "medium-editor-toolbar-form", t.id = "medium-editor-toolbar-form-fontsize-" + this.getEditorId(), this.on(t, "click", this.handleFormClick.bind(this)), n.setAttribute("type", "range"), n.setAttribute("min", "1"), n.setAttribute("max", "7"), n.className = "medium-editor-toolbar-input", t.appendChild(n), this.on(n, "change", this.handleSliderChange.bind(this)), o.setAttribute("href", "#"), o.className = "medium-editor-toobar-save", o.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-check"></i>' : "&#10003;", t.appendChild(o), this.on(o, "click", this.handleSaveClick.bind(this), !0), i.setAttribute("href", "#"), i.className = "medium-editor-toobar-close", i.innerHTML = "fontawesome" === this.getEditorOption("buttonLabels") ? '<i class="fa fa-times"></i>' : "&times;", t.appendChild(i), this.on(i, "click", this.handleCloseClick.bind(this)), t
                        },
                        getInput: function() {
                            return this.getForm().querySelector("input.medium-editor-toolbar-input")
                        },
                        clearFontSize: function() {
                            e.selection.getSelectedElements(this.document).forEach(function(e) {
                                "font" === e.nodeName.toLowerCase() && e.hasAttribute("size") && e.removeAttribute("size")
                            })
                        },
                        handleSliderChange: function() {
                            var e = this.getInput().value;
                            "4" === e ? this.clearFontSize() : this.execAction("fontSize", {
                                value: e
                            })
                        },
                        handleFormClick: function(e) {
                            e.stopPropagation()
                        },
                        handleSaveClick: function(e) {
                            e.preventDefault(), this.doFormSave()
                        },
                        handleCloseClick: function(e) {
                            e.preventDefault(), this.doFormCancel()
                        }
                    });
                    e.extensions.fontSize = t
                }(),
                function() {
                    function t(e, t, n) {
                        var i = e.clipboardData || t.clipboardData || n.dataTransfer,
                            o = {};
                        if (!i) return o;
                        if (i.getData) {
                            var s = i.getData("Text");
                            s && s.length > 0 && (o["text/plain"] = s)
                        }
                        if (i.types) for (var r = 0; r < i.types.length; r++) {
                                var a = i.types[r];
                                o[a] = i.getData(a)
                        }
                        return o
                    }
                    var n = "%ME_PASTEBIN%",
                        i = null,
                        o = null,
                        s = function(e) {
                            e.stopPropagation()
                        }, r = e.Extension.extend({
                            forcePlainText: !0,
                            cleanPastedHTML: !1,
                            preCleanReplacements: [],
                            cleanReplacements: [],
                            cleanAttrs: ["class", "style", "dir"],
                            cleanTags: ["meta"],
                            unwrapTags: [],
                            init: function() {
                                e.Extension.prototype.init.apply(this, arguments), (this.forcePlainText || this.cleanPastedHTML) && (this.subscribe("editableKeydown", this.handleKeydown.bind(this)), this.getEditorElements().forEach(function(e) {
                                    this.on(e, "paste", this.handlePaste.bind(this))
                                }, this), this.subscribe("addElement", this.handleAddElement.bind(this)))
                            },
                            handleAddElement: function(e, t) {
                                this.on(t, "paste", this.handlePaste.bind(this))
                            },
                            destroy: function() {
                                (this.forcePlainText || this.cleanPastedHTML) && this.removePasteBin()
                            },
                            handlePaste: function(e, n) {
                                if (!e.defaultPrevented) {
                                    var i = t(e, this.window, this.document),
                                        o = i["text/html"],
                                        s = i["text/plain"];
                                    this.window.clipboardData && void 0 === e.clipboardData && !o && (o = s), (o || s) && (e.preventDefault(), this.doPaste(o, s, n))
                                }
                            },
                            doPaste: function(t, n, i) {
                                var o, s, r = "";
                                if (this.cleanPastedHTML && t) return this.cleanPaste(t);
                                if (n) {
                                    if (this.getEditorOption("disableReturn") || i && i.getAttribute("data-disable-return")) r = e.util.htmlEntities(n);
                                    else if ((o = n.split(/[\r\n]+/g)).length > 1) for (s = 0; s < o.length; s += 1) "" !== o[s] && (r += "<p>" + e.util.htmlEntities(o[s]) + "</p>");
                                    else r = e.util.htmlEntities(o[0]);
                                    e.util.insertHTMLCommand(this.document, r)
                                }
                            },
                            handlePasteBinPaste: function(e) {
                                if (!e.defaultPrevented) {
                                    var n = t(e, this.window, this.document),
                                        i = n["text/html"],
                                        s = n["text/plain"],
                                        r = o;
                                    return !this.cleanPastedHTML || i ? (e.preventDefault(), this.removePasteBin(), this.doPaste(i, s, r), void this.trigger("editablePaste", {
                                        currentTarget: r,
                                        target: r
                                    }, r)) : void setTimeout(function() {
                                        this.cleanPastedHTML && (i = this.getPasteBinHtml()), this.removePasteBin(), this.doPaste(i, s, r), this.trigger("editablePaste", {
                                            currentTarget: r,
                                            target: r
                                        }, r)
                                    }.bind(this), 0)
                                }
                                this.removePasteBin()
                            },
                            handleKeydown: function(t, n) {
                                e.util.isKey(t, e.util.keyCode.V) && e.util.isMetaCtrlKey(t) && (t.stopImmediatePropagation(), this.removePasteBin(), this.createPasteBin(n))
                            },
                            createPasteBin: function(t) {
                                var r, a = e.selection.getSelectionRange(this.document),
                                    l = this.window.pageYOffset;
                                o = t, a && (l += (r = a.getClientRects()).length ? r[0].top : void 0 !== a.startContainer.getBoundingClientRect ? a.startContainer.getBoundingClientRect().top : a.getBoundingClientRect().top), i = a;
                                var c = this.document.createElement("div");
                                c.id = this.pasteBinId = "medium-editor-pastebin-" + +Date.now(), c.setAttribute("style", "border: 1px red solid; position: absolute; top: " + l + "px; width: 10px; height: 10px; overflow: hidden; opacity: 0"), c.setAttribute("contentEditable", !0), c.innerHTML = n, this.document.body.appendChild(c), this.on(c, "focus", s), this.on(c, "focusin", s), this.on(c, "focusout", s), c.focus(), e.selection.selectNode(c, this.document), this.boundHandlePaste || (this.boundHandlePaste = this.handlePasteBinPaste.bind(this)), this.on(c, "paste", this.boundHandlePaste)
                            },
                            removePasteBin: function() {
                                null !== i && (e.selection.selectRange(this.document, i), i = null), null !== o && (o = null);
                                var t = this.getPasteBin();
                                t && t && (this.off(t, "focus", s), this.off(t, "focusin", s), this.off(t, "focusout", s), this.off(t, "paste", this.boundHandlePaste), t.parentElement.removeChild(t))
                            },
                            getPasteBin: function() {
                                return this.document.getElementById(this.pasteBinId)
                            },
                            getPasteBinHtml: function() {
                                var e = this.getPasteBin();
                                if (!e) return !1;
                                if (e.firstChild && "mcepastebin" === e.firstChild.id) return !1;
                                var t = e.innerHTML;
                                return !(!t || t === n) && t
                            },
                            cleanPaste: function(e) {
                                var t, n, i, o, s = /<p|<br|<div/.test(e),
                                    r = [].concat(this.preCleanReplacements || [], [
                                        [new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g), ""],
                                        [new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g), ""],
                                        [new RegExp(/<br>$/i), ""],
                                        [new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi), ""],
                                        [new RegExp(/<\/b>(<br[^>]*>)?$/gi), ""],
                                        [new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g), " "],
                                        [new RegExp(/<br class="Apple-interchange-newline">/g), "<br>"],
                                        [new RegExp(/<span[^>]*(font-style:italic;font-weight:(bold|700)|font-weight:(bold|700);font-style:italic)[^>]*>/gi), '<span class="replace-with italic bold">'],
                                        [new RegExp(/<span[^>]*font-style:italic[^>]*>/gi), '<span class="replace-with italic">'],
                                        [new RegExp(/<span[^>]*font-weight:(bold|700)[^>]*>/gi), '<span class="replace-with bold">'],
                                        [new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi), "<$1$2>"],
                                        [new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi), '<a href="$1">'],
                                        [new RegExp(/<\/p>\n+/gi), "</p>"],
                                        [new RegExp(/\n+<p/gi), "<p"],
                                        [new RegExp(/<\/?o:[a-z]*>/gi), ""],
                                        [new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi), "$1"]
                                    ], this.cleanReplacements || []);
                                for (t = 0; t < r.length; t += 1) e = e.replace(r[t][0], r[t][1]);
                                if (!s) return this.pasteHTML(e);
                                for ((i = this.document.createElement("div")).innerHTML = "<p>" + e.split("<br><br>").join("</p><p>") + "</p>", n = i.querySelectorAll("a,p,div,br"), t = 0; t < n.length; t += 1) switch ((o = n[t]).innerHTML = o.innerHTML.replace(/\n/gi, " "), o.nodeName.toLowerCase()) {
                                        case "p":
                                        case "div":
                                            this.filterCommonBlocks(o);
                                            break;
                                        case "br":
                                            this.filterLineBreak(o)
                                }
                                this.pasteHTML(i.innerHTML)
                            },
                            pasteHTML: function(t, n) {
                                n = e.util.defaults({}, n, {
                                    cleanAttrs: this.cleanAttrs,
                                    cleanTags: this.cleanTags,
                                    unwrapTags: this.unwrapTags
                                });
                                var i, o, s, r, a = this.document.createDocumentFragment();
                                for (a.appendChild(this.document.createElement("body")), (r = a.querySelector("body")).innerHTML = t, this.cleanupSpans(r), i = r.querySelectorAll("*"), s = 0; s < i.length; s += 1) "a" === (o = i[s]).nodeName.toLowerCase() && this.getEditorOption("targetBlank") && e.util.setTargetBlank(o), e.util.cleanupAttrs(o, n.cleanAttrs), e.util.cleanupTags(o, n.cleanTags), e.util.unwrapTags(o, n.unwrapTags);
                                e.util.insertHTMLCommand(this.document, r.innerHTML.replace(/&nbsp;/g, " "))
                            },
                            isCommonBlock: function(e) {
                                return e && ("p" === e.nodeName.toLowerCase() || "div" === e.nodeName.toLowerCase())
                            },
                            filterCommonBlocks: function(e) {
                                /^\s*$/.test(e.textContent) && e.parentNode && e.parentNode.removeChild(e)
                            },
                            filterLineBreak: function(e) {
                                this.isCommonBlock(e.previousElementSibling) ? this.removeWithParent(e) : !this.isCommonBlock(e.parentNode) || e.parentNode.firstChild !== e && e.parentNode.lastChild !== e ? e.parentNode && 1 === e.parentNode.childElementCount && "" === e.parentNode.textContent && this.removeWithParent(e) : this.removeWithParent(e)
                            },
                            removeWithParent: function(e) {
                                e && e.parentNode && (e.parentNode.parentNode && 1 === e.parentNode.childElementCount ? e.parentNode.parentNode.removeChild(e.parentNode) : e.parentNode.removeChild(e))
                            },
                            cleanupSpans: function(t) {
                                var n, i, o, s = t.querySelectorAll(".replace-with"),
                                    r = function(e) {
                                        return e && "#text" !== e.nodeName && "false" === e.getAttribute("contenteditable")
                                    };
                                for (n = 0; n < s.length; n += 1) i = s[n], o = this.document.createElement(i.classList.contains("bold") ? "b" : "i"), i.classList.contains("bold") && i.classList.contains("italic") ? o.innerHTML = "<i>" + i.innerHTML + "</i>" : o.innerHTML = i.innerHTML, i.parentNode.replaceChild(o, i);
                                for (s = t.querySelectorAll("span"), n = 0; n < s.length; n += 1) {
                                    if (i = s[n], e.util.traverseUp(i, r)) return !1;
                                    e.util.unwrap(i, this.document)
                                }
                            }
                        });
                    e.extensions.paste = r
                }(),
                function() {
                    var t = e.Extension.extend({
                        name: "placeholder",
                        text: "Type your text",
                        hideOnClick: !0,
                        init: function() {
                            e.Extension.prototype.init.apply(this, arguments), this.initPlaceholders(), this.attachEventHandlers()
                        },
                        initPlaceholders: function() {
                            this.getEditorElements().forEach(this.initElement, this)
                        },
                        handleAddElement: function(e, t) {
                            this.initElement(t)
                        },
                        initElement: function(e) {
                            e.getAttribute("data-placeholder") || e.setAttribute("data-placeholder", this.text), this.updatePlaceholder(e)
                        },
                        destroy: function() {
                            this.getEditorElements().forEach(this.cleanupElement, this)
                        },
                        handleRemoveElement: function(e, t) {
                            this.cleanupElement(t)
                        },
                        cleanupElement: function(e) {
                            e.getAttribute("data-placeholder") === this.text && e.removeAttribute("data-placeholder")
                        },
                        showPlaceholder: function(t) {
                            t && (e.util.isFF && 0 === t.childNodes.length ? (t.classList.add("medium-editor-placeholder-relative"), t.classList.remove("medium-editor-placeholder")) : (t.classList.add("medium-editor-placeholder"), t.classList.remove("medium-editor-placeholder-relative")))
                        },
                        hidePlaceholder: function(e) {
                            e && (e.classList.remove("medium-editor-placeholder"), e.classList.remove("medium-editor-placeholder-relative"))
                        },
                        updatePlaceholder: function(e, t) {
                            return e.querySelector("img, blockquote, ul, ol, table") || "" !== e.textContent.replace(/^\s+|\s+$/g, "") ? this.hidePlaceholder(e) : void(t || this.showPlaceholder(e))
                        },
                        attachEventHandlers: function() {
                            this.hideOnClick && this.subscribe("focus", this.handleFocus.bind(this)), this.subscribe("editableInput", this.handleInput.bind(this)), this.subscribe("blur", this.handleBlur.bind(this)), this.subscribe("addElement", this.handleAddElement.bind(this)), this.subscribe("removeElement", this.handleRemoveElement.bind(this))
                        },
                        handleInput: function(e, t) {
                            var n = this.hideOnClick && t === this.base.getFocusedElement();
                            this.updatePlaceholder(t, n)
                        },
                        handleFocus: function(e, t) {
                            this.hidePlaceholder(t)
                        },
                        handleBlur: function(e, t) {
                            this.updatePlaceholder(t)
                        }
                    });
                    e.extensions.placeholder = t
                }(),
                function() {
                    var t = e.Extension.extend({
                        name: "toolbar",
                        align: "center",
                        allowMultiParagraphSelection: !0,
                        buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
                        diffLeft: 0,
                        diffTop: -10,
                        firstButtonClass: "medium-editor-button-first",
                        lastButtonClass: "medium-editor-button-last",
                        standardizeSelectionStart: !1,
                        static: !1,
                        sticky: !1,
                        stickyTopOffset: 0,
                        updateOnEmptySelection: !1,
                        relativeContainer: null,
                        init: function() {
                            e.Extension.prototype.init.apply(this, arguments), this.initThrottledMethods(), this.relativeContainer ? this.relativeContainer.appendChild(this.getToolbarElement()) : this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement())
                        },
                        forEachExtension: function(e, t) {
                            return this.base.extensions.forEach(function(n) {
                                return n !== this ? e.apply(t || this, arguments) : void 0
                            }, this)
                        },
                        createToolbar: function() {
                            var e = this.document.createElement("div");
                            return e.id = "medium-editor-toolbar-" + this.getEditorId(), e.className = "medium-editor-toolbar", this.static ? e.className += " static-toolbar" : this.relativeContainer ? e.className += " medium-editor-relative-toolbar" : e.className += " medium-editor-stalker-toolbar", e.appendChild(this.createToolbarButtons()), this.forEachExtension(function(t) {
                                t.hasForm && e.appendChild(t.getForm())
                            }), this.attachEventHandlers(), e
                        },
                        createToolbarButtons: function() {
                            var t, n, i, o, s, r, a = this.document.createElement("ul");
                            return a.id = "medium-editor-toolbar-actions" + this.getEditorId(), a.className = "medium-editor-toolbar-actions", a.style.display = "block", this.buttons.forEach(function(i) {
                                "string" == typeof i ? (s = i, r = null) : (s = i.name, r = i), (o = this.base.addBuiltInExtension(s, r)) && "function" == typeof o.getButton && (n = o.getButton(this.base), t = this.document.createElement("li"), e.util.isElement(n) ? t.appendChild(n) : t.innerHTML = n, a.appendChild(t))
                            }, this), (i = a.querySelectorAll("button")).length > 0 && (i[0].classList.add(this.firstButtonClass), i[i.length - 1].classList.add(this.lastButtonClass)), a
                        },
                        destroy: function() {
                            this.toolbar && (this.toolbar.parentNode && this.toolbar.parentNode.removeChild(this.toolbar), delete this.toolbar)
                        },
                        getInteractionElements: function() {
                            return this.getToolbarElement()
                        },
                        getToolbarElement: function() {
                            return this.toolbar || (this.toolbar = this.createToolbar()), this.toolbar
                        },
                        getToolbarActionsElement: function() {
                            return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions")
                        },
                        initThrottledMethods: function() {
                            this.throttledPositionToolbar = e.util.throttle(function() {
                                this.base.isActive && this.positionToolbarIfShown()
                            }.bind(this))
                        },
                        attachEventHandlers: function() {
                            this.subscribe("blur", this.handleBlur.bind(this)), this.subscribe("focus", this.handleFocus.bind(this)), this.subscribe("editableClick", this.handleEditableClick.bind(this)), this.subscribe("editableKeyup", this.handleEditableKeyup.bind(this)), this.on(this.document.documentElement, "mouseup", this.handleDocumentMouseup.bind(this)), this.static && this.sticky && this.on(this.window, "scroll", this.handleWindowScroll.bind(this), !0), this.on(this.window, "resize", this.handleWindowResize.bind(this))
                        },
                        handleWindowScroll: function() {
                            this.positionToolbarIfShown()
                        },
                        handleWindowResize: function() {
                            this.throttledPositionToolbar()
                        },
                        handleDocumentMouseup: function(t) {
                            return !(t && t.target && e.util.isDescendant(this.getToolbarElement(), t.target)) && void this.checkState()
                        },
                        handleEditableClick: function() {
                            setTimeout(function() {
                                this.checkState()
                            }.bind(this), 0)
                        },
                        handleEditableKeyup: function() {
                            this.checkState()
                        },
                        handleBlur: function() {
                            clearTimeout(this.hideTimeout), clearTimeout(this.delayShowTimeout), this.hideTimeout = setTimeout(function() {
                                this.hideToolbar()
                            }.bind(this), 1)
                        },
                        handleFocus: function() {
                            this.checkState()
                        },
                        isDisplayed: function() {
                            return this.getToolbarElement().classList.contains("medium-editor-toolbar-active")
                        },
                        showToolbar: function() {
                            clearTimeout(this.hideTimeout), this.isDisplayed() || (this.getToolbarElement().classList.add("medium-editor-toolbar-active"), this.trigger("showToolbar", {}, this.base.getFocusedElement()))
                        },
                        hideToolbar: function() {
                            this.isDisplayed() && (this.getToolbarElement().classList.remove("medium-editor-toolbar-active"), this.trigger("hideToolbar", {}, this.base.getFocusedElement()))
                        },
                        isToolbarDefaultActionsDisplayed: function() {
                            return "block" === this.getToolbarActionsElement().style.display
                        },
                        hideToolbarDefaultActions: function() {
                            this.isToolbarDefaultActionsDisplayed() && (this.getToolbarActionsElement().style.display = "none")
                        },
                        showToolbarDefaultActions: function() {
                            this.hideExtensionForms(), this.isToolbarDefaultActionsDisplayed() || (this.getToolbarActionsElement().style.display = "block"), this.delayShowTimeout = this.base.delay(function() {
                                this.showToolbar()
                            }.bind(this))
                        },
                        hideExtensionForms: function() {
                            this.forEachExtension(function(e) {
                                e.hasForm && e.isDisplayed() && e.hideForm()
                            })
                        },
                        multipleBlockElementsSelected: function() {
                            var t = new RegExp("<(" + e.util.blockContainerElementNames.join("|") + ")[^>]*>", "g"),
                                n = e.selection.getSelectionHtml(this.document).replace(/<[^\/>][^>]*><\/[^>]+>/gim, "").match(t);
                            return !!n && n.length > 1
                        },
                        modifySelection: function() {
                            var t = this.window.getSelection().getRangeAt(0);
                            if (this.standardizeSelectionStart && t.startContainer.nodeValue && t.startOffset === t.startContainer.nodeValue.length) {
                                var n = e.util.findAdjacentTextNodeWithContent(e.selection.getSelectionElement(this.window), t.startContainer, this.document);
                                if (n) {
                                    for (var i = 0; 0 === n.nodeValue.substr(i, 1).trim().length;) i += 1;
                                    t = e.selection.select(this.document, n, i, t.endContainer, t.endOffset)
                                }
                            }
                        },
                        checkState: function() {
                            if (!this.base.preventSelectionUpdates) {
                                if (!this.base.getFocusedElement() || e.selection.selectionInContentEditableFalse(this.window)) return this.hideToolbar();
                                var t = e.selection.getSelectionElement(this.window);
                                return !t || -1 === this.getEditorElements().indexOf(t) || t.getAttribute("data-disable-toolbar") ? this.hideToolbar() : this.updateOnEmptySelection && this.static ? this.showAndUpdateToolbar() : !e.selection.selectionContainsContent(this.document) || !1 === this.allowMultiParagraphSelection && this.multipleBlockElementsSelected() ? this.hideToolbar() : void this.showAndUpdateToolbar()
                            }
                        },
                        showAndUpdateToolbar: function() {
                            this.modifySelection(), this.setToolbarButtonStates(), this.trigger("positionToolbar", {}, this.base.getFocusedElement()), this.showToolbarDefaultActions(), this.setToolbarPosition()
                        },
                        setToolbarButtonStates: function() {
                            this.forEachExtension(function(e) {
                                "function" == typeof e.isActive && "function" == typeof e.setInactive && e.setInactive()
                            }), this.checkActiveButtons()
                        },
                        checkActiveButtons: function() {
                            var t, n = [],
                                i = null,
                                o = e.selection.getSelectionRange(this.document),
                                s = function(e) {
                                    "function" == typeof e.checkState ? e.checkState(t) : "function" == typeof e.isActive && "function" == typeof e.isAlreadyApplied && "function" == typeof e.setActive && !e.isActive() && e.isAlreadyApplied(t) && e.setActive()
                                };
                            if (o && (this.forEachExtension(function(e) {
                                return "function" == typeof e.queryCommandState && null !== (i = e.queryCommandState()) ? void(i && "function" == typeof e.setActive && e.setActive()) : void n.push(e)
                            }), t = e.selection.getSelectedParentElement(o), this.getEditorElements().some(function(n) {
                                return e.util.isDescendant(n, t, !0)
                            }))) for (; t && (n.forEach(s), !e.util.isMediumEditorElement(t));) t = t.parentNode
                        },
                        positionToolbarIfShown: function() {
                            this.isDisplayed() && this.setToolbarPosition()
                        },
                        setToolbarPosition: function() {
                            var e = this.base.getFocusedElement(),
                                t = this.window.getSelection();
                            return e ? void(!this.static && t.isCollapsed || (this.showToolbar(), this.relativeContainer || (this.static ? this.positionStaticToolbar(e) : this.positionToolbar(t)), this.trigger("positionedToolbar", {}, this.base.getFocusedElement()))) : this
                        },
                        positionStaticToolbar: function(e) {
                            this.getToolbarElement().style.left = "0";
                            var t, n = this.document.documentElement && this.document.documentElement.scrollTop || this.document.body.scrollTop,
                                i = this.window.innerWidth,
                                o = this.getToolbarElement(),
                                s = e.getBoundingClientRect(),
                                r = s.top + n,
                                a = s.left + s.width / 2,
                                l = o.offsetHeight,
                                c = o.offsetWidth,
                                u = c / 2;
                            switch (this.sticky ? n > r + e.offsetHeight - l - this.stickyTopOffset ? (o.style.top = r + e.offsetHeight - l + "px", o.classList.remove("medium-editor-sticky-toolbar")) : n > r - l - this.stickyTopOffset ? (o.classList.add("medium-editor-sticky-toolbar"), o.style.top = this.stickyTopOffset + "px") : (o.classList.remove("medium-editor-sticky-toolbar"), o.style.top = r - l + "px") : o.style.top = r - l + "px", this.align) {
                                case "left":
                                    t = s.left;
                                    break;
                                case "right":
                                    t = s.right - c;
                                    break;
                                case "center":
                                    t = a - u
                            }
                            0 > t ? t = 0 : t + c > i && (t = i - Math.ceil(c) - 1), o.style.left = t + "px"
                        },
                        positionToolbar: function(e) {
                            this.getToolbarElement().style.left = "0", this.getToolbarElement().style.right = "initial";
                            var t = e.getRangeAt(0),
                                n = t.getBoundingClientRect();
                            (!n || 0 === n.height && 0 === n.width && t.startContainer === t.endContainer) && (n = 1 === t.startContainer.nodeType && t.startContainer.querySelector("img") ? t.startContainer.querySelector("img").getBoundingClientRect() : t.startContainer.getBoundingClientRect());
                            var i, o, s = this.window.innerWidth,
                                r = this.getToolbarElement(),
                                a = r.offsetHeight,
                                l = r.offsetWidth / 2,
                                c = this.diffLeft - l,
                                u = this.getEditorOption("elementsContainer"),
                                d = ["absolute", "fixed"].indexOf(window.getComputedStyle(u).getPropertyValue("position")) > -1,
                                h = {}, m = {};
                            d ? (o = u.getBoundingClientRect(), ["top", "left"].forEach(function(e) {
                                m[e] = n[e] - o[e]
                            }), m.width = n.width, m.height = n.height, n = m, s = o.width, h.top = u.scrollTop) : h.top = this.window.pageYOffset, i = n.left + n.width / 2, h.top += n.top - a, n.top < 50 ? (r.classList.add("medium-toolbar-arrow-over"), r.classList.remove("medium-toolbar-arrow-under"), h.top += 50 + n.height - this.diffTop) : (r.classList.add("medium-toolbar-arrow-under"), r.classList.remove("medium-toolbar-arrow-over"), h.top += this.diffTop), l > i ? (h.left = c + l, h.right = "initial") : l > s - i ? (h.left = "auto", h.right = 0) : (h.left = c + i, h.right = "initial"), ["top", "left", "right"].forEach(function(e) {
                                r.style[e] = h[e] + (isNaN(h[e]) ? "" : "px")
                            })
                        }
                    });
                    e.extensions.toolbar = t
                }(),
                function() {
                    var t = e.Extension.extend({
                        init: function() {
                            e.Extension.prototype.init.apply(this, arguments), this.subscribe("editableDrag", this.handleDrag.bind(this)), this.subscribe("editableDrop", this.handleDrop.bind(this))
                        },
                        handleDrag: function(e) {
                            var t = "medium-editor-dragover";
                            e.preventDefault(), e.dataTransfer.dropEffect = "copy", "dragover" === e.type ? e.target.classList.add(t) : "dragleave" === e.type && e.target.classList.remove(t)
                        },
                        handleDrop: function(t) {
                            t.preventDefault(), t.stopPropagation(), t.dataTransfer.files && Array.prototype.slice.call(t.dataTransfer.files, 0).some(function(t) {
                                var n, i;
                                t.type.match("image") && ((n = new FileReader).readAsDataURL(t), i = "medium-img-" + +new Date, e.util.insertHTMLCommand(this.document, '<img class="medium-editor-image-loading" id="' + i + '" />'), n.onload = function() {
                                    var e = this.document.getElementById(i);
                                    e && (e.removeAttribute("id"), e.removeAttribute("class"), e.src = n.result)
                                }.bind(this))
                            }.bind(this)), t.target.classList.remove("medium-editor-dragover")
                        }
                    });
                    e.extensions.imageDragging = t
                }(),
                function() {
                    function t(t, n) {
                        if (this.options.disableReturn || n.getAttribute("data-disable-return")) t.preventDefault();
                        else if (this.options.disableDoubleReturn || n.getAttribute("data-disable-double-return")) {
                            var i = e.selection.getSelectionStart(this.options.ownerDocument);
                            (i && "" === i.textContent.trim() && "li" !== i.nodeName.toLowerCase() || i.previousElementSibling && "br" !== i.previousElementSibling.nodeName.toLowerCase() && "" === i.previousElementSibling.textContent.trim()) && t.preventDefault()
                        }
                    }
                    function n(t) {
                        var n, i = e.selection.getSelectionStart(this.options.ownerDocument),
                            o = i.nodeName.toLowerCase(),
                            s = /^(\s+|<br\/?>)?$/i,
                            r = /h\d/i;
                        e.util.isKey(t, [e.util.keyCode.BACKSPACE, e.util.keyCode.ENTER]) && i.previousElementSibling && r.test(o) && 0 === e.selection.getCaretOffsets(i).left ? e.util.isKey(t, e.util.keyCode.BACKSPACE) && s.test(i.previousElementSibling.innerHTML) ? (i.previousElementSibling.parentNode.removeChild(i.previousElementSibling), t.preventDefault()) : !this.options.disableDoubleReturn && e.util.isKey(t, e.util.keyCode.ENTER) && ((n = this.options.ownerDocument.createElement("p")).innerHTML = "<br>", i.previousElementSibling.parentNode.insertBefore(n, i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.DELETE) && i.nextElementSibling && i.previousElementSibling && !r.test(o) && s.test(i.innerHTML) && r.test(i.nextElementSibling.nodeName.toLowerCase()) ? (e.selection.moveCursor(this.options.ownerDocument, i.nextElementSibling), i.previousElementSibling.parentNode.removeChild(i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && "li" === o && s.test(i.innerHTML) && !i.previousElementSibling && !i.parentElement.previousElementSibling && i.nextElementSibling && "li" === i.nextElementSibling.nodeName.toLowerCase() ? ((n = this.options.ownerDocument.createElement("p")).innerHTML = "<br>", i.parentElement.parentElement.insertBefore(n, i.parentElement), e.selection.moveCursor(this.options.ownerDocument, n), i.parentElement.removeChild(i), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && !1 !== e.util.getClosestTag(i, "blockquote") && 0 === e.selection.getCaretOffsets(i).left ? (t.preventDefault(), e.util.execFormatBlock(this.options.ownerDocument, "p")) : e.util.isKey(t, e.util.keyCode.ENTER) && !1 !== e.util.getClosestTag(i, "blockquote") && 0 === e.selection.getCaretOffsets(i).right ? ((n = this.options.ownerDocument.createElement("p")).innerHTML = "<br>", i.parentElement.insertBefore(n, i.nextSibling), e.selection.moveCursor(this.options.ownerDocument, n), t.preventDefault()) : e.util.isKey(t, e.util.keyCode.BACKSPACE) && e.util.isMediumEditorElement(i.parentElement) && !i.previousElementSibling && i.nextElementSibling && s.test(i.innerHTML) && (t.preventDefault(), e.selection.moveCursor(this.options.ownerDocument, i.nextSibling), i.parentElement.removeChild(i))
                    }
                    function i(t, n, i) {
                        var o = [];
                        if (t || (t = []), "string" == typeof t && (t = n.querySelectorAll(t)), e.util.isElement(t) && (t = [t]), i) for (var s = 0; s < t.length; s++) {
                                var r = t[s];
                                !e.util.isElement(r) || r.getAttribute("data-medium-editor-element") || r.getAttribute("medium-editor-textarea-id") || o.push(r)
                        } else o = Array.prototype.slice.apply(t);
                        return o
                    }
                    function o(e) {
                        var t = e.parentNode.querySelector('textarea[medium-editor-textarea-id="' + e.getAttribute("medium-editor-textarea-id") + '"]');
                        t && (t.classList.remove("medium-editor-hidden"), t.removeAttribute("medium-editor-textarea-id")), e.parentNode && e.parentNode.removeChild(e)
                    }
                    function s(e, t, n) {
                        return "function" == typeof(e = function(e, t) {
                            return Object.keys(t).forEach(function(n) {
                                void 0 === e[n] && (e[n] = t[n])
                            }), e
                        }(e, {
                            window: n.options.contentWindow,
                            document: n.options.ownerDocument,
                            base: n
                        })).init && e.init(), e.name || (e.name = t), e
                    }
                    function r() {
                        return !this.elements.every(function(e) {
                            return !!e.getAttribute("data-disable-toolbar")
                        }) && !1 !== this.options.toolbar
                    }
                    function a() {
                        return !!r.call(this) && !1 !== this.options.anchorPreview
                    }
                    function l() {
                        return !1 !== this.options.placeholder
                    }
                    function c() {
                        return !1 !== this.options.autoLink
                    }
                    function u() {
                        return !1 !== this.options.keyboardCommands
                    }
                    function d(n, i) {
                        if (!n.getAttribute("data-medium-editor-element")) {
                            "textarea" === n.nodeName.toLowerCase() && (n = function(e) {
                                for (var t = this.options.ownerDocument.createElement("div"), n = Date.now(), i = "medium-editor-" + n, o = e.attributes; this.options.ownerDocument.getElementById(i);) i = "medium-editor-" + ++n;
                                t.className = e.className, t.id = i, t.innerHTML = e.value, e.setAttribute("medium-editor-textarea-id", i);
                                for (var s = 0, r = o.length; r > s; s++) t.hasAttribute(o[s].nodeName) || t.setAttribute(o[s].nodeName, o[s].value);
                                return e.form && this.on(e.form, "reset", function(e) {
                                    e.defaultPrevented || this.resetContent(this.options.ownerDocument.getElementById(i))
                                }.bind(this)), e.classList.add("medium-editor-hidden"), e.parentNode.insertBefore(t, e), t
                            }.call(this, n), this.instanceHandleEditableInput || (this.instanceHandleEditableInput = function(e, t) {
                                var n = t.parentNode.querySelector('textarea[medium-editor-textarea-id="' + t.getAttribute("medium-editor-textarea-id") + '"]');
                                n && (n.value = t.innerHTML.trim())
                            }.bind(this), this.subscribe("editableInput", this.instanceHandleEditableInput))), this.options.disableEditing || n.getAttribute("data-disable-editing") || (n.setAttribute("contentEditable", !0), n.setAttribute("spellcheck", this.options.spellcheck)), this.instanceHandleEditableKeydownEnter || (n.getAttribute("data-disable-return") || n.getAttribute("data-disable-double-return")) && (this.instanceHandleEditableKeydownEnter = t.bind(this), this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter)), this.options.disableReturn || n.getAttribute("data-disable-return") || this.on(n, "keyup", function(t) {
                                var n = e.selection.getSelectionStart(this.options.ownerDocument);
                                n && (e.util.isMediumEditorElement(n) && 0 === n.children.length && !e.util.isBlockContainer(n) && this.options.ownerDocument.execCommand("formatBlock", !1, "p"), !e.util.isKey(t, e.util.keyCode.ENTER) || e.util.isListItem(n) || e.util.isBlockContainer(n) || ("a" === n.nodeName.toLowerCase() ? this.options.ownerDocument.execCommand("unlink", !1, null) : t.shiftKey || t.ctrlKey || this.options.ownerDocument.execCommand("formatBlock", !1, "p")))
                            }.bind(this));
                            var o = e.util.guid();
                            n.setAttribute("data-medium-editor-element", !0), n.classList.add("medium-editor-element"), n.setAttribute("role", "textbox"), n.setAttribute("aria-multiline", !0), n.setAttribute("data-medium-editor-editor-index", i), n.setAttribute("medium-editor-index", o), p[o] = n.innerHTML, this.events.attachAllEventsToElement(n)
                        }
                        return n
                    }
                    function h() {
                        this.subscribe("editableKeydownTab", function(t) {
                            var n = e.selection.getSelectionStart(this.options.ownerDocument);
                            "pre" === (n && n.nodeName.toLowerCase()) && (t.preventDefault(), e.util.insertHTMLCommand(this.options.ownerDocument, "    ")), e.util.isListItem(n) && (t.preventDefault(), t.shiftKey ? this.options.ownerDocument.execCommand("outdent", !1, null) : this.options.ownerDocument.execCommand("indent", !1, null))
                        }.bind(this)), this.subscribe("editableKeydownDelete", n.bind(this)), this.subscribe("editableKeydownEnter", n.bind(this)), this.options.disableExtraSpaces && this.subscribe("editableKeydownSpace", function(t) {
                            var n = e.selection.getSelectionStart(this.options.ownerDocument),
                                i = n.textContent,
                                o = e.selection.getCaretOffsets(n);
                            (void 0 === i[o.left - 1] || "" === i[o.left - 1].trim() || void 0 !== i[o.left] && "" === i[o.left].trim()) && t.preventDefault()
                        }.bind(this)), this.instanceHandleEditableKeydownEnter || (this.options.disableReturn || this.options.disableDoubleReturn) && (this.instanceHandleEditableKeydownEnter = t.bind(this), this.subscribe("editableKeydownEnter", this.instanceHandleEditableKeydownEnter))
                    }
                    function m(t, n) {
                        return n && [
                            ["allowMultiParagraphSelection", "toolbar.allowMultiParagraphSelection"]
                        ].forEach(function(t) {
                            n.hasOwnProperty(t[0]) && void 0 !== n[t[0]] && e.util.deprecated(t[0], t[1], "v6.0.0")
                        }), e.util.defaults({}, n, t)
                    }
                    function f(t, n) {
                        var i, o;
                        if (i = /^append-(.+)$/gi.exec(t)) return e.util.execFormatBlock(this.options.ownerDocument, i[1]);
                        if ("fontSize" === t) return n.size && e.util.deprecated(".size option for fontSize command", ".value", "6.0.0"), o = n.value || n.size, this.options.ownerDocument.execCommand("fontSize", !1, o);
                        if ("fontName" === t) return n.name && e.util.deprecated(".name option for fontName command", ".value", "6.0.0"), o = n.value || n.name, this.options.ownerDocument.execCommand("fontName", !1, o);
                        if ("createLink" === t) return this.createLink(n);
                        if ("image" === t) {
                            var s = this.options.contentWindow.getSelection().toString().trim();
                            return this.options.ownerDocument.execCommand("insertImage", !1, s)
                        }
                        if ("html" === t) {
                            var r = this.options.contentWindow.getSelection().toString().trim();
                            return e.util.insertHTMLCommand(this.options.ownerDocument, r)
                        }
                        if (/justify([A-Za-z]*)$/g.exec(t)) {
                            var a = this.options.ownerDocument.execCommand(t, !1, null),
                                l = e.selection.getSelectedParentElement(e.selection.getSelectionRange(this.options.ownerDocument));
                            return l && function(t) {
                                if (t) {
                                    var n, i = Array.prototype.slice.call(t.childNodes).filter(function(e) {
                                            var t = "div" === e.nodeName.toLowerCase();
                                            return t && !n && (n = e.style.textAlign), t
                                        });
                                    i.length && (this.saveSelection(), i.forEach(function(t) {
                                        if (t.style.textAlign === n) {
                                            var i = t.lastChild;
                                            if (i) {
                                                e.util.unwrap(t, this.options.ownerDocument);
                                                var o = this.options.ownerDocument.createElement("BR");
                                                i.parentNode.insertBefore(o, i.nextSibling)
                                            }
                                        }
                                    }, this), t.style.textAlign = n, this.restoreSelection())
                                }
                            }.call(this, e.util.getTopBlockContainer(l)), a
                        }
                        return o = n && n.value, this.options.ownerDocument.execCommand(t, !1, o)
                    }
                    var p = {};
                    e.prototype = {
                        init: function(e, t) {
                            return this.options = m.call(this, this.defaults, t), this.origElements = e, this.options.elementsContainer || (this.options.elementsContainer = this.options.ownerDocument.body), this.setup()
                        },
                        setup: function() {
                            this.isActive || (function(e) {
                                e._mediumEditors || (e._mediumEditors = [null]), this.id || (this.id = e._mediumEditors.length), e._mediumEditors[this.id] = this
                            }.call(this, this.options.contentWindow), this.events = new e.Events(this), this.elements = [], this.addElements(this.origElements), 0 !== this.elements.length && (this.isActive = !0, function() {
                                if (this.extensions = [], Object.keys(this.options.extensions).forEach(function(e) {
                                    "toolbar" !== e && this.options.extensions[e] && this.extensions.push(s(this.options.extensions[e], e, this))
                                }, this), function() {
                                    return !this.options.extensions.imageDragging
                                }.call(this)) {
                                    var t = this.options.fileDragging;
                                    t || (t = {}, function() {
                                        return !1 !== this.options.imageDragging
                                    }.call(this) || (t.allowedTypes = [])), this.addBuiltInExtension("fileDragging", t)
                                }
                                var n = {
                                    paste: !0,
                                    "anchor-preview": a.call(this),
                                    autoLink: c.call(this),
                                    keyboardCommands: u.call(this),
                                    placeholder: l.call(this)
                                };
                                Object.keys(n).forEach(function(e) {
                                    n[e] && this.addBuiltInExtension(e)
                                }, this);
                                var i = this.options.extensions.toolbar;
                                if (!i && r.call(this)) {
                                    var o = e.util.extend({}, this.options.toolbar, {
                                        allowMultiParagraphSelection: this.options.allowMultiParagraphSelection
                                    });
                                    i = new e.extensions.toolbar(o)
                                }
                                i && this.extensions.push(s(i, "toolbar", this))
                            }.call(this), h.call(this)))
                        },
                        destroy: function() {
                            this.isActive && (this.isActive = !1, this.extensions.forEach(function(e) {
                                "function" == typeof e.destroy && e.destroy()
                            }, this), this.events.destroy(), this.elements.forEach(function(e) {
                                this.options.spellcheck && (e.innerHTML = e.innerHTML), e.removeAttribute("contentEditable"), e.removeAttribute("spellcheck"), e.removeAttribute("data-medium-editor-element"), e.classList.remove("medium-editor-element"), e.removeAttribute("role"), e.removeAttribute("aria-multiline"), e.removeAttribute("medium-editor-index"), e.removeAttribute("data-medium-editor-editor-index"), e.getAttribute("medium-editor-textarea-id") && o(e)
                            }, this), this.elements = [], this.instanceHandleEditableKeydownEnter = null, this.instanceHandleEditableInput = null, function(e) {
                                e._mediumEditors && e._mediumEditors[this.id] && (e._mediumEditors[this.id] = null)
                            }.call(this, this.options.contentWindow))
                        },
                        on: function(e, t, n, i) {
                            return this.events.attachDOMEvent(e, t, n, i), this
                        },
                        off: function(e, t, n, i) {
                            return this.events.detachDOMEvent(e, t, n, i), this
                        },
                        subscribe: function(e, t) {
                            return this.events.attachCustomEvent(e, t), this
                        },
                        unsubscribe: function(e, t) {
                            return this.events.detachCustomEvent(e, t), this
                        },
                        trigger: function(e, t, n) {
                            return this.events.triggerCustomEvent(e, t, n), this
                        },
                        delay: function(e) {
                            var t = this;
                            return setTimeout(function() {
                                t.isActive && e()
                            }, this.options.delay)
                        },
                        serialize: function() {
                            var e, t = {}, n = this.elements.length;
                            for (e = 0; n > e; e += 1) t["" !== this.elements[e].id ? this.elements[e].id : "element-" + e] = {
                                    value: this.elements[e].innerHTML.trim()
                            };
                            return t
                        },
                        getExtensionByName: function(e) {
                            var t;
                            return this.extensions && this.extensions.length && this.extensions.some(function(n) {
                                return n.name === e && (t = n, !0)
                            }), t
                        },
                        addBuiltInExtension: function(t, n) {
                            var i, o = this.getExtensionByName(t);
                            if (o) return o;
                            switch (t) {
                                case "anchor":
                                    i = e.util.extend({}, this.options.anchor, n), o = new e.extensions.anchor(i);
                                    break;
                                case "anchor-preview":
                                    o = new e.extensions.anchorPreview(this.options.anchorPreview);
                                    break;
                                case "autoLink":
                                    o = new e.extensions.autoLink;
                                    break;
                                case "fileDragging":
                                    o = new e.extensions.fileDragging(n);
                                    break;
                                case "fontname":
                                    o = new e.extensions.fontName(this.options.fontName);
                                    break;
                                case "fontsize":
                                    o = new e.extensions.fontSize(n);
                                    break;
                                case "keyboardCommands":
                                    o = new e.extensions.keyboardCommands(this.options.keyboardCommands);
                                    break;
                                case "paste":
                                    o = new e.extensions.paste(this.options.paste);
                                    break;
                                case "placeholder":
                                    o = new e.extensions.placeholder(this.options.placeholder);
                                    break;
                                default:
                                    e.extensions.button.isBuiltInButton(t) && (n ? (i = e.util.defaults({}, n, e.extensions.button.prototype.defaults[t]), o = new e.extensions.button(i)) : o = new e.extensions.button(t))
                            }
                            return o && this.extensions.push(s(o, t, this)), o
                        },
                        stopSelectionUpdates: function() {
                            this.preventSelectionUpdates = !0
                        },
                        startSelectionUpdates: function() {
                            this.preventSelectionUpdates = !1
                        },
                        checkSelection: function() {
                            var e = this.getExtensionByName("toolbar");
                            return e && e.checkState(), this
                        },
                        queryCommandState: function(e) {
                            var t, i = null;
                            (t = /^full-(.+)$/gi.exec(e)) && (e = t[1]);
                            try {
                                i = this.options.ownerDocument.queryCommandState(e)
                            } catch (n) {
                                i = null
                            }
                            return i
                        },
                        execAction: function(t, n) {
                            var i, o;
                            return (i = /^full-(.+)$/gi.exec(t)) ? (this.saveSelection(), this.selectAllContents(), o = f.call(this, i[1], n), this.restoreSelection()) : o = f.call(this, t, n), "insertunorderedlist" !== t && "insertorderedlist" !== t || e.util.cleanListDOM(this.options.ownerDocument, this.getSelectedParentElement()), this.checkSelection(), o
                        },
                        getSelectedParentElement: function(t) {
                            return void 0 === t && (t = this.options.contentWindow.getSelection().getRangeAt(0)), e.selection.getSelectedParentElement(t)
                        },
                        selectAllContents: function() {
                            var t = e.selection.getSelectionElement(this.options.contentWindow);
                            if (t) {
                                for (; 1 === t.children.length;) t = t.children[0];
                                this.selectElement(t)
                            }
                        },
                        selectElement: function(t) {
                            e.selection.selectNode(t, this.options.ownerDocument);
                            var n = e.selection.getSelectionElement(this.options.contentWindow);
                            n && this.events.focusElement(n)
                        },
                        getFocusedElement: function() {
                            var e;
                            return this.elements.some(function(t) {
                                return !e && t.getAttribute("data-medium-focused") && (e = t), !! e
                            }, this), e
                        },
                        exportSelection: function() {
                            var t = e.selection.getSelectionElement(this.options.contentWindow),
                                n = this.elements.indexOf(t),
                                i = null;
                            return n >= 0 && (i = e.selection.exportSelection(t, this.options.ownerDocument)), null !== i && 0 !== n && (i.editableElementIndex = n), i
                        },
                        saveSelection: function() {
                            this.selectionState = this.exportSelection()
                        },
                        importSelection: function(t, n) {
                            if (t) {
                                var i = this.elements[t.editableElementIndex || 0];
                                e.selection.importSelection(t, i, this.options.ownerDocument, n)
                            }
                        },
                        restoreSelection: function() {
                            this.importSelection(this.selectionState)
                        },
                        createLink: function(t) {
                            var n, i = e.selection.getSelectionElement(this.options.contentWindow),
                                o = {};
                            if (-1 !== this.elements.indexOf(i)) {
                                try {
                                    if (this.events.disableCustomEvent("editableInput"), t.url && e.util.deprecated(".url option for createLink", ".value", "6.0.0"), (n = t.url || t.value) && n.trim().length > 0) {
                                        var s = this.options.contentWindow.getSelection();
                                        if (s) {
                                            var r, a, l, c, u = s.getRangeAt(0),
                                                d = u.commonAncestorContainer;
                                            if (3 === u.endContainer.nodeType && 3 !== u.startContainer.nodeType && 0 === u.startOffset && u.startContainer.firstChild === u.endContainer && (d = u.endContainer), a = e.util.getClosestBlockContainer(u.startContainer), l = e.util.getClosestBlockContainer(u.endContainer), 3 !== d.nodeType && 0 !== d.textContent.length && a === l) {
                                                var h = a || i,
                                                    m = this.options.ownerDocument.createDocumentFragment();
                                                this.execAction("unlink"), r = this.exportSelection(), m.appendChild(h.cloneNode(!0)), i === h ? e.selection.select(this.options.ownerDocument, h.firstChild, 0, h.lastChild, 3 === h.lastChild.nodeType ? h.lastChild.nodeValue.length : h.lastChild.childNodes.length) : e.selection.select(this.options.ownerDocument, h, 0, h, h.childNodes.length);
                                                var f = this.exportSelection();
                                                0 === (c = e.util.findOrCreateMatchingTextNodes(this.options.ownerDocument, m, {
                                                    start: r.start - f.start,
                                                    end: r.end - f.start,
                                                    editableElementIndex: r.editableElementIndex
                                                })).length && ((m = this.options.ownerDocument.createDocumentFragment()).appendChild(d.cloneNode(!0)), c = [m.firstChild.firstChild, m.firstChild.lastChild]), e.util.createLink(this.options.ownerDocument, c, n.trim());
                                                var p = (m.firstChild.innerHTML.match(/^\s+/) || [""])[0].length;
                                                e.util.insertHTMLCommand(this.options.ownerDocument, m.firstChild.innerHTML.replace(/^\s+/, "")), r.start -= p, r.end -= p, this.importSelection(r)
                                            } else this.options.ownerDocument.execCommand("createLink", !1, n);
                                            this.options.targetBlank || "_blank" === t.target ? e.util.setTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), n) : e.util.removeTargetBlank(e.selection.getSelectionStart(this.options.ownerDocument), n), t.buttonClass && e.util.addClassToAnchors(e.selection.getSelectionStart(this.options.ownerDocument), t.buttonClass)
                                        }
                                    }
                                    if (this.options.targetBlank || "_blank" === t.target || t.buttonClass) {
                                        (o = this.options.ownerDocument.createEvent("HTMLEvents")).initEvent("input", !0, !0, this.options.contentWindow);
                                        for (var g = 0, b = this.elements.length; b > g; g += 1) this.elements[g].dispatchEvent(o)
                                    }
                                } finally {
                                    this.events.enableCustomEvent("editableInput")
                                }
                                this.events.triggerCustomEvent("editableInput", o, i)
                            }
                        },
                        cleanPaste: function(e) {
                            this.getExtensionByName("paste").cleanPaste(e)
                        },
                        pasteHTML: function(e, t) {
                            this.getExtensionByName("paste").pasteHTML(e, t)
                        },
                        setContent: function(e, t) {
                            if (t = t || 0, this.elements[t]) {
                                var n = this.elements[t];
                                n.innerHTML = e, this.checkContentChanged(n)
                            }
                        },
                        getContent: function(e) {
                            return e = e || 0, this.elements[e] ? this.elements[e].innerHTML.trim() : null
                        },
                        checkContentChanged: function(t) {
                            t = t || e.selection.getSelectionElement(this.options.contentWindow), this.events.updateInput(t, {
                                target: t,
                                currentTarget: t
                            })
                        },
                        resetContent: function(e) {
                            if (e) {
                                var t = this.elements.indexOf(e); - 1 !== t && this.setContent(p[e.getAttribute("medium-editor-index")], t)
                            } else this.elements.forEach(function(e, t) {
                                    this.setContent(p[e.getAttribute("medium-editor-index")], t)
                                }, this)
                        },
                        addElements: function(e) {
                            var t = i(e, this.options.ownerDocument, !0);
                            return 0 !== t.length && void t.forEach(function(e) {
                                e = d.call(this, e, this.id), this.elements.push(e), this.trigger("addElement", {
                                    target: e,
                                    currentTarget: e
                                }, e)
                            }, this)
                        },
                        removeElements: function(e) {
                            var t = i(e, this.options.ownerDocument).map(function(e) {
                                return e.getAttribute("medium-editor-textarea-id") && e.parentNode ? e.parentNode.querySelector('div[medium-editor-textarea-id="' + e.getAttribute("medium-editor-textarea-id") + '"]') : e
                            });
                            this.elements = this.elements.filter(function(e) {
                                return -1 === t.indexOf(e) || (this.events.cleanupElement(e), e.getAttribute("medium-editor-textarea-id") && o(e), this.trigger("removeElement", {
                                    target: e,
                                    currentTarget: e
                                }, e), !1)
                            }, this)
                        }
                    }, e.getEditorFromElement = function(e) {
                        var t = e.getAttribute("data-medium-editor-editor-index"),
                            n = e && e.ownerDocument && (e.ownerDocument.defaultView || e.ownerDocument.parentWindow);
                        return n && n._mediumEditors && n._mediumEditors[t] ? n._mediumEditors[t] : null
                    }
                }(), e.prototype.defaults = {
                    activeButtonClass: "medium-editor-button-active",
                    buttonLabels: !1,
                    delay: 0,
                    disableReturn: !1,
                    disableDoubleReturn: !1,
                    disableExtraSpaces: !1,
                    disableEditing: !1,
                    autoLink: !1,
                    elementsContainer: !1,
                    contentWindow: window,
                    ownerDocument: document,
                    targetBlank: !1,
                    extensions: {},
                    spellcheck: !0
                }, e.parseVersionString = function(e) {
                    var t = e.split("-"),
                        n = t[0].split("."),
                        i = t.length > 1 ? t[1] : "";
                    return {
                        major: parseInt(n[0], 10),
                        minor: parseInt(n[1], 10),
                        revision: parseInt(n[2], 10),
                        preRelease: i,
                        toString: function() {
                            return [n[0], n[1], n[2]].join(".") + (i ? "-" + i : "")
                        }
                    }
                }, e.version = e.parseVersionString.call(this, "5.23.3"), e;
                var t
            }());
        }, {
            "process": "KIG8"
        }
    ],
    "RKrv": [function(require, module, exports) {
            "use strict";

            function t(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function e(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            function n(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.
            default = void 0;
            var r = {
                isNotEmpty: function(t, e) {
                    if ("" === t || null == t) return e
                },
                isEmail: function(t, e) {
                    if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t)) return e
                },
                maxValue: function(t, e, n) {
                    if (t.length > e) return n
                },
                minValue: function(t, e, n) {
                    if (t.length < e) return n
                }
            }, i = function() {
                    function e() {
                        t(this, e), this.caches = []
                    }
                    return n(e, [{
                            key: "add",
                            value: function(t, e) {
                                var n = this;
                                Object.keys(e).forEach(function(i) {
                                    n.caches.push(function() {
                                        var n = i.split(":"),
                                            u = n.shift();
                                        return n.unshift(t), n.push(e[i]), r[u].apply(null, n)
                                    })
                                })
                            }
                        }, {
                            key: "start",
                            value: function() {
                                for (var t = 0; t < this.caches.length; ++t) {
                                    var e = this.caches[t]();
                                    if (e) return e
                                }
                            }
                        }
                    ]), e
                }();
            exports.
            default = i;
        }, {}
    ],
    "fqE1": [function(require, module, exports) {
            "use strict";
            require("flatpickr/dist/flatpickr.min.css"), require("flatpickr/dist/plugins/confirmDate/confirmDate.css"), require("../plugins/medium-editor/css/medium-editor.min.css"), require("../plugins/medium-editor/css/themes/custom.css"), require("../css/editor.styl");
            var e = n(require("flatpickr")),
                t = require("flatpickr/dist/l10n/zh.js"),
                i = n(require("flatpickr/dist/plugins/confirmDate/confirmDate.js")),
                r = n(require("../plugins/medium-editor/js/medium-editor.min.js")),
                a = require("./libs/untils"),
                l = n(require("./libs/validator")),
                s = n(require("./libs/urls"));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u, d, o = 1728e6,
                c = new r.
            default (".editor", {
                targetBlank: !0,
                toolbar: {
                    buttons: ["bold", "italic", "h1", "quote", "justifyLeft", "justifyCenter", "justifyRight", "anchor"]
                },
                anchor: {
                    placeholderText: "输入链接",
                    targetCheckboxText: "在新窗口打开"
                },
                placeholder: !1
            }), m = (0, e.
            default)(".J_deliverTime", {
                locale: t.Mandarin,
                dateFormat: "📅 Y年m月d日",
                minDate: +new Date + o,
                plugins: [new i.
                    default ({})
                ],
                disableMobile: !0
            });
            $(".J_title").val("一封来自" + (0, a.formatDate)(new Date) + "的信"), $(".deliver-pub").on("click", function() {
                _hmt.push(["_trackEvent", "Editor", "click", "Pub Or Private Btn"]), $(".deliver-pub").removeClass("active"), $(this).addClass("active")
            }), $(".deliver-btn").on("click", function() {
                if (true) {
                    var t = {
                        title: $(".J_title").val(),
                        content: c.getContent(),
                        deliverTime: $("#tmex").val(), 
                        email: $(".J_deliverEmail").val()
                    }, i = new l.
                    default;
                    i.add(t.title, {
                        isNotEmpty: "忘了写标题？😅",
                        "maxValue:50": "标题不能超过50个字哦😅"
                    }), i.add(t.content, {
                        "minValue:30": "信件内容太少了，再写点吧~~😉😉😉"
                    }), i.add(t.deliverTime, {
                        isNotEmpty: "投递时间不能为空哦😘"
                    }), i.add(t.email, {
                        isNotEmpty: "邮箱忘了写？↑↑↑😋",
                        isEmail: "检查一下邮箱是不是写错了？↑↑↑🤣"
                    });
                    var r = i.start();
                    if (r) return clearTimeout(u), u = setTimeout(function() {
                            $(".J_warning").text("")
                        }, 3e3), void $(".J_warning").text("* " + r);
                    d = !0, $("#loading").css("display", "flex"), 
                    $.ajax({
                        type: "POST",
                        url: 'submit.php', 
                        data: t,
                        success: function(e) {
                            $(".success-info").show()
                        },
                        statusCode: {
                            403: function(e) {
                                clearTimeout(u), u = setTimeout(function() {
                                    $(".J_warning").text("")
                                }, 3e3), $(".J_warning").text("* " + e.responseJSON.errMsg)
                            }
                        },
                        complete: function() {
                            d = !1, $("#loading").hide()
                        }
                    })
                }
            });
        }, {
            "flatpickr/dist/flatpickr.min.css": "nNB2",
            "flatpickr/dist/plugins/confirmDate/confirmDate.css": "nNB2",
            "../plugins/medium-editor/css/medium-editor.min.css": "nNB2",
            "../plugins/medium-editor/css/themes/custom.css": "nNB2",
            "../css/editor.styl": "nNB2",
            "flatpickr": "vfsJ",
            "flatpickr/dist/l10n/zh.js": "R39t",
            "flatpickr/dist/plugins/confirmDate/confirmDate.js": "mfQb",
            "../plugins/medium-editor/js/medium-editor.min.js": "UJKF",
            "./libs/untils": "ejps",
            "./libs/validator": "RKrv",
            "./libs/urls": "vQJB"
        }
    ],
    "Focm": [function(require, module, exports) {
            "use strict";
            require("./css/style.css"), require("./css/custom.styl");
            var e = r(require("./js/libs/urls")),
                t = require("./js/libs/untils");

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = require("jquery");
            window.$ = window.jQuery = s, $.ajaxSetup({
                timeout: 1e4
            }), $.get(e.
            default.getTotal, function(e) {
                $("#get-started .count").eq(0).text(e.unDeliver), $("#get-started .count").eq(1).text(e.delivered), $("#get-started .count").eq(2).text((0, t.countFromStart)()), $(".spincrement").spincrement({
                    from: 0,
                    to: null,
                    duration: 1e3,
                    leeway: 0
                })
            }), require("./js/spincrement.js"), require("./js/scripts.js"), require("./js/editor.js"), $(".js-write").on("click", function() {
                $(".success-info").hide();
                var e = $(".js-nav-link.js-write");
                e.hasClass("opened") ? ($("#editor-container").fadeOut(300), $(".js-doc").fadeIn(300), e.removeClass("opened"), e.text("撰写信件"), _hmt.push(["_trackEvent", "Editor", "click", "Return Index"])) : ($(".js-doc").fadeOut(300), $("#editor-container").fadeIn(300), e.addClass("opened"), e.text("返回首页"),'')
            });
        }, {
            "./css/style.css": "amqR",
            "./css/custom.styl": "nNB2",
            "jquery": "juYr",
            "./js/libs/urls": "vQJB",
            "./js/libs/untils": "ejps",
            "./js/spincrement.js": "TNuW",
            "./js/scripts.js": "VJtr",
            "./js/editor.js": "fqE1"
        }
    ]
}, {}, ["Focm"], null)
//# sourceMappingURL=/src.05c3b67b.js.map