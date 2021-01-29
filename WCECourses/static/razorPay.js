! function () {
    "use strict";
    ! function () {
        var s = window,
            c = s.document,
            n = s.Boolean,
            i = s.Array,
            l = s.Object,
            r = s.String,
            m = s.Number,
            u = s.Date,
            d = s.Math,
            a = s.setTimeout,
            e = s.setInterval,
            t = s.clearTimeout,
            f = s.parseInt,
            h = s.encodeURIComponent,
            v = s.btoa,
            p = s.unescape,
            _ = s.TypeError,
            y = s.navigator,
            b = s.location,
            o = s.XMLHttpRequest,
            g = s.FormData;

        function D(t) {
            return function (e, n) {
                return arguments.length < 2 ? function (n) {
                    return t.call(null, n, e)
                } : t.call(null, e, n)
            }
        }

        function S(i) {
            return function (e, t, n) {
                return arguments.length < 3 ? function (n) {
                    return i.call(null, n, e, t)
                } : i.call(null, e, t, n)
            }
        }

        function R() {
            for (var n = arguments.length, e = new i(n), t = 0; t < n; t++) e[t] = arguments[t];
            return function (n) {
                return function () {
                    var t = arguments;
                    return e.every(function (n, e) {
                        if (n(t[e])) return !0;
                        ! function () {
                            console.error.apply(console, arguments)
                        }("wrong " + e + "th argtype", t[e]), s.dispatchEvent(j("rzp_error", {
                            detail: new Error("wrong " + e + "th argtype " + t[e])
                        }))
                    }) ? n.apply(null, t) : t[0]
                }
            }
        }

        function k(n) {
            return T(n) && 1 === n.nodeType
        }

        function w() {
            var e = O();
            return function (n) {
                return O() - e
            }
        }
        var M = D(function (n, e) {
                return typeof n === e
            }),
            P = M("boolean"),
            K = M("number"),
            N = M("string"),
            L = M("function"),
            B = M("object"),
            A = i.isArray,
            T = (M("undefined"), function (n) {
                return !(null === n) && B(n)
            }),
            C = function (n) {
                return !x(l.keys(n))
            },
            E = D(function (n, e) {
                return n && n[e]
            }),
            x = E("length"),
            G = E("prototype"),
            z = D(function (n, e) {
                return n instanceof e
            }),
            O = u.now,
            F = d.random,
            I = d.floor;

        function $(n, e) {
            return {
                error: (t = e, i = {
                    description: r(n)
                }, t && (i.field = t), i)
            };
            var t, i
        }

        function H(n) {
            throw new Error(n)
        }
        var U = function (n) {
            return /data:image\/[^;]+;base64/.test(n)
        };

        function Z(n) {
            var e = function a(o, r) {
                var m = {};
                if (!T(o)) return m;
                var u = null == r;
                return l.keys(o).forEach(function (n) {
                    var e, t = o[n],
                        i = u ? n : r + "[" + n + "]";
                    "object" == typeof t ? (e = a(t, i), l.keys(e).forEach(function (n) {
                        m[n] = e[n]
                    })) : m[i] = t
                }), m
            }(n);
            return l.keys(e).map(function (n) {
                return h(n) + "=" + h(e[n])
            }).join("&")
        }

        function Y(n, e) {
            return T(e) && (e = Z(e)), e && (n += 0 < n.indexOf("?") ? "&" : "?", n += e), n
        }

        function j(n, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var t = c.createEvent("CustomEvent");
            return t.initCustomEvent(n, e.bubbles, e.cancelable, e.detail), t
        }

        function W(n) {
            return l.keys(n || {})
        }

        function q(n) {
            return Bn(Ln(n))
        }

        function V(e, i, a, o) {
            return z(e, Cn) ? console.error("use el |> _El.on(e, cb)") : function (t) {
                var n = i;
                return N(a) ? n = function (n) {
                        for (var e = n.target; !te(e, a) && e !== t;) e = xn(e);
                        e !== t && (n.delegateTarget = e, i(n))
                    } : o = a, o = !!o, t.addEventListener(e, n, o),
                    function () {
                        return t.removeEventListener(e, n, o)
                    }
            }
        }

        function J(n) {
            return N(n) ? le(n) : n
        }
        var Q, X, nn, en, tn, an, on, rn, mn, un, cn, ln, sn, dn = G(i),
            fn = dn.slice,
            hn = D(function (n, e) {
                return n && dn.forEach.call(n, e), n
            }),
            vn = (Q = "indexOf", D(function (n, e) {
                return dn[Q].call(n, e)
            })),
            pn = D(function (n, e) {
                return 0 <= vn(n, e)
            }),
            _n = D(function (n, e) {
                return fn.call(n, e)
            }),
            yn = S(function (n, e, t) {
                return dn.reduce.call(n, e, t)
            }),
            bn = function (n) {
                return n
            },
            gn = (G(Function), nn = function (n, e) {
                return n.bind(e)
            }, X = function (n) {
                if (L(n)) return nn.apply(null, arguments);
                throw new _("not a function")
            }, D(function (n, e) {
                var t = arguments;
                return N(n) && ((t = _n(t, 0))[0] = e[n]), X.apply(null, t)
            })),
            Dn = G(r).slice,
            Sn = S(function (n, e, t) {
                return Dn.call(n, e, t)
            }),
            Rn = D(function (n, e) {
                return Dn.call(n, e)
            }),
            kn = D(function (n, e) {
                return e in n
            }),
            wn = D(function (n, e) {
                return n && n.hasOwnProperty(e)
            }),
            Mn = S(function (n, e, t) {
                return n[e] = t, n
            }),
            Pn = S(function (n, e, t) {
                return t && (n[e] = t), n
            }),
            Kn = D(function (n, e) {
                return delete n[e], n
            }),
            Nn = D(function (e, t) {
                return hn(W(e), function (n) {
                    return t(e[n], n, e)
                }), e
            }),
            Ln = JSON.stringify,
            Bn = function (n) {
                try {
                    return JSON.parse(n)
                } catch (n) {}
            },
            An = D(function (t, n) {
                return Nn(n, function (n, e) {
                    return t[e] = n
                }), t
            }),
            Tn = function (n) {
                var e = {};
                return Nn(n, function (t, n) {
                    var i = (n = n.replace(/\[([^[\]]+)\]/g, ".$1")).split("."),
                        a = e;
                    hn(i, function (n, e) {
                        e < i.length - 1 ? (a[n] || (a[n] = {}), a = a[n]) : a[n] = t
                    })
                }), e
            },
            Cn = s.Element,
            En = function (n) {
                return c.createElement(n || "div")
            },
            xn = function (n) {
                return n.parentNode
            },
            Gn = R(k),
            zn = R(k, k),
            On = R(k, N),
            Fn = R(k, N, function () {
                return !0
            }),
            In = R(k, T),
            $n = (en = zn(function (n, e) {
                return e.appendChild(n)
            }), D(en)),
            Hn = (tn = zn(function (n, e) {
                var t = e;
                return $n(n)(t), n
            }), D(tn)),
            Un = Gn(function (n) {
                var e = xn(n);
                return e && e.removeChild(n), n
            }),
            Zn = (Gn(E("selectionStart")), Gn(E("selectionEnd")), on = function (n, e) {
                return n.selectionStart = n.selectionEnd = e, n
            }, an = R(k, K)(on), D(an), Gn(function (n) {
                return n.submit(), n
            })),
            Yn = S(Fn(function (n, e, t) {
                return n.setAttribute(e, t), n
            })),
            jn = S(Fn(function (n, e, t) {
                return n.style[e] = t, n
            })),
            Wn = (rn = In(function (i, n) {
                var e = n;
                return Nn(function (n, e) {
                    var t = i;
                    return Yn(e, n)(t)
                })(e), i
            }), D(rn)),
            qn = (mn = In(function (i, n) {
                var e = n;
                return Nn(function (n, e) {
                    var t = i;
                    return jn(e, n)(t)
                })(e), i
            }), D(mn)),
            Vn = (un = On(function (n, e) {
                return n.innerHTML = e, n
            }), D(un)),
            Jn = (cn = On(function (n, e) {
                var t = n;
                return jn("display", e)(t)
            }), D(cn)),
            Qn = (Jn("none"), Jn("block"), Jn("inline-block"), E("offsetWidth")),
            Xn = E("offsetHeight"),
            ne = G(Cn),
            ee = ne.matches || ne.matchesSelector || ne.webkitMatchesSelector || ne.mozMatchesSelector || ne.msMatchesSelector || ne.oMatchesSelector,
            te = (ln = On(function (n, e) {
                return ee.call(n, e)
            }), D(ln)),
            ie = c.documentElement,
            ae = c.body,
            oe = s.innerHeight,
            re = s.pageYOffset,
            me = s.scrollBy,
            ue = s.scrollTo,
            ce = s.requestAnimationFrame,
            le = gn("querySelector", c),
            se = gn("querySelectorAll", c);
        gn("getElementById", c), gn("getComputedStyle", s);

        function de(n, e, t, i) {
            var a, o, r, m, u, c;
            t && "get" === t.toLowerCase() ? (n = Y(n, e), i ? s.open(n, i) : s.location = n) : (c = {
                action: n,
                method: t
            }, i && (c.target = i), u = En("form"), m = Wn(c)(u), r = Vn(fe(e))(m), o = $n(ie)(r), a = Zn(o), Un(a))
        }

        function fe(n, t) {
            if (T(n)) {
                var i = "";
                return Nn(n, function (n, e) {
                    t && (e = t + "[" + e + "]"), i += fe(n, e)
                }), i
            }
            var e = En("input");
            return e.type = "hidden", e.value = n, e.name = t, e.outerHTML
        }

        function he(n) {
            ! function (m) {
                if (!s.requestAnimationFrame) return me(0, m);
                sn && t(sn);
                sn = a(function () {
                    var i = re,
                        a = d.min(i + m, Xn(ae) - oe);
                    m = a - i;
                    var o = 0,
                        r = s.performance.now();
                    ce(function n(e) {
                        if (1 <= (o += (e - r) / 300)) return ue(0, a);
                        var t = d.sin(ve * o / 2);
                        ue(0, i + d.round(m * t)), r = e, ce(n)
                    })
                }, 100)
            }(n - re)
        }
        var ve = d.PI;
        var pe, _e, ye, be, ge = o,
            De = $("Network error"),
            Se = 0;

        function Re(n) {
            if (!z(this, Re)) return new Re(n);
            this.options = function (n) {
                N(n) && (n = {
                    url: n
                });
                var e = n.method,
                    t = n.headers,
                    i = n.callback,
                    a = n.data;
                t || (n.headers = {});
                e || (n.method = "get");
                i || (n.callback = bn);
                T(a) && !z(a, g) && (a = Z(a));
                return n.data = a, n
            }(n), this.defer()
        }((ye = {
            setReq: function (n, e) {
                return this.abort(), this.type = n, this.req = e, this
            },
            till: function (e, t) {
                var i = this;
                return void 0 === t && (t = 0), this.setReq("timeout", a(function () {
                    i.call(function (n) {
                        n.error && 0 < t ? i.till(e, t - 1) : e(n) ? i.till(e, t) : i.options.callback(n)
                    })
                }, 3e3))
            },
            abort: function () {
                var n = this.req,
                    e = this.type;
                n && ("ajax" === e ? this.req.abort() : "jsonp" === e ? s.Razorpay[this.req] = bn : t(this.req), this.req = null)
            },
            defer: function () {
                var n = this;
                this.req = a(function () {
                    return n.call()
                })
            },
            call: function (e) {
                var n, t, i;
                void 0 === e && (e = this.options.callback);
                var a = this.options,
                    o = a.url,
                    r = a.method,
                    m = a.data,
                    u = a.headers,
                    c = new ge;
                this.setReq("ajax", c), c.open(r, o, !0), c.onreadystatechange = function () {
                    var n;
                    4 === c.readyState && c.status && ((n = Bn(c.responseText)) || ((n = $("Parsing error")).xhr = {
                        status: c.status,
                        text: c.responseText
                    }), n.error && s.dispatchEvent(j("rzp_network_error", {
                        detail: {
                            method: r,
                            url: o,
                            baseUrl: o.split("?")[0],
                            status: c.status,
                            xhrErrored: !1,
                            response: n
                        }
                    })), e(n))
                }, c.onerror = function () {
                    var n = De;
                    n.xhr = {
                        status: 0
                    }, s.dispatchEvent(j("rzp_network_error", {
                        detail: {
                            method: r,
                            url: o,
                            baseUrl: o.split("?")[0],
                            status: 0,
                            xhrErrored: !0,
                            response: n
                        }
                    })), e(n)
                }, i = u, t = Pn("X-Razorpay-SessionId", pe)(i), n = Pn("X-Razorpay-TrackId", _e)(t), Nn(function (n, e) {
                    return c.setRequestHeader(e, n)
                })(n), c.send(m)
            }
        }).constructor = Re).prototype = ye, Re.post = function (n) {
            return n.method = "post", n.headers || (n.headers = {}), n.headers["Content-type"] || (n.headers["Content-type"] = "application/x-www-form-urlencoded"), Re(n)
        }, Re.setSessionId = function (n) {
            pe = n
        }, Re.setTrackId = function (n) {
            _e = n
        }, Re.jsonp = function (u) {
            u.data || (u.data = {});
            var c = Se++,
                l = 0,
                n = new Re(u);
            return u = n.options, n.call = function (e) {
                void 0 === e && (e = u.callback);

                function n() {
                    i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0, this.onload = this.onreadystatechange = null, Un(this))
                }
                var t = "jsonp" + c + "_" + ++l,
                    i = !1,
                    a = s.Razorpay[t] = function (n) {
                        Kn(n, "http_status_code"), e(n), Kn(s.Razorpay, t)
                    };
                this.setReq("jsonp", a);
                var o = Y(u.url, u.data),
                    o = Y(o, Z({
                        callback: "Razorpay." + t
                    })),
                    r = En("script"),
                    m = An({
                        src: o,
                        async: !0,
                        onerror: function () {
                            return e(De)
                        },
                        onload: n,
                        onreadystatechange: n
                    })(r);
                $n(ie)(m)
            }, n
        };
        var ke = function (n) {
                return console.warn("Promise error:", n)
            },
            we = function (n) {
                return z(n, Me)
            };

        function Me(n) {
            if (!we(this)) throw "new Promise";
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], Ae(n, this)
        }

        function Pe(t, i) {
            for (; 3 === t._state;) t = t._value;
            0 !== t._state ? (t._handled = !0, a(function () {
                var n, e = 1 === t._state ? i.onFulfilled : i.onRejected;
                if (null !== e) {
                    try {
                        n = e(t._value)
                    } catch (n) {
                        return void Ne(i.promise, n)
                    }
                    Ke(i.promise, n)
                } else(1 === t._state ? Ke : Ne)(i.promise, t._value)
            })) : t._deferreds.push(i)
        }

        function Ke(e, n) {
            try {
                if (n === e) throw new _("promise resolved by itself");
                if (T(n) || L(n)) {
                    var t = n.then;
                    if (we(n)) return e._state = 3, e._value = n, void Le(e);
                    if (L(t)) return void Ae(gn(t, n), e)
                }
                e._state = 1, e._value = n, Le(e)
            } catch (n) {
                Ne(e, n)
            }
        }

        function Ne(n, e) {
            n._state = 2, n._value = e, Le(n)
        }

        function Le(e) {
            var n;
            2 === e._state && 0 === e._deferreds.length && a(function () {
                e._handled || ke(e._value)
            }), n = e._deferreds, hn(function (n) {
                return Pe(e, n)
            })(n), e._deferreds = null
        }

        function Be(n, e, t) {
            this.onFulfilled = L(n) ? n : null, this.onRejected = L(e) ? e : null, this.promise = t
        }

        function Ae(n, e) {
            var t = !1;
            try {
                n(function (n) {
                    t || (t = !0, Ke(e, n))
                }, function (n) {
                    t || (t = !0, Ne(e, n))
                })
            } catch (n) {
                if (t) return;
                t = !0, Ne(e, n)
            }
        }
        be = Me.prototype, An({
            catch: function (n) {
                return this.then(null, n)
            },
            then: function (n, e) {
                var t = new Me(bn);
                return Pe(this, new Be(n, e, t)), t
            },
            finally: function (e) {
                return this.then(function (n) {
                    return Me.resolve(e()).then(function () {
                        return n
                    })
                }, function (n) {
                    return Me.resolve(e()).then(function () {
                        return Me.reject(n)
                    })
                })
            }
        })(be), Me.all = function (r) {
            return new Me(function (i, a) {
                if (!r || void 0 === r.length) throw new _("Promise.all accepts an array");
                if (0 === r.length) return i([]);
                var o = r.length,
                    n = r;
                hn(function e(n, t) {
                    try {
                        if ((T(n) || L(n)) && L(n.then)) return n.then(function (n) {
                            return e(n, t)
                        }, a);
                        r[t] = n, 0 == --o && i(r)
                    } catch (n) {
                        a(n)
                    }
                })(n)
            })
        }, Me.resolve = function (e) {
            return we(e) ? e : new Me(function (n) {
                return n(e)
            })
        }, Me.reject = function (t) {
            return new Me(function (n, e) {
                return e(t)
            })
        }, Me.race = function (i) {
            return new Me(function (e, t) {
                var n = i;
                return hn(function (n) {
                    return n.then(e, t)
                })(n)
            })
        };
        var Te = s.Promise,
            Ce = Te && L(G(Te).then) && Te || Me;
        L(Ce.prototype.finally) || (Ce.prototype.finally = Me.prototype.finally);
        var Ee = {
            _storage: {},
            setItem: function (n, e) {
                this._storage[n] = e
            },
            getItem: function (n) {
                return this._storage[n] || null
            },
            removeItem: function (n) {
                delete this._storage[n]
            }
        };
        var xe, Ge = function () {
                var n = O();
                try {
                    s.localStorage.setItem("_storage", n);
                    var e = s.localStorage.getItem("_storage");
                    return s.localStorage.removeItem("_storage"), n !== f(e) ? Ee : s.localStorage
                } catch (n) {
                    return Ee
                }
            }(),
            ze = "rzp_checkout_exp";
        var Oe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            Fe = (xe = Oe, yn(function (n, e, t) {
                return Mn(n, e, t)
            }, {})(xe));

        function Ie(n) {
            for (var e = ""; n;) e = Oe[n % 62] + e, n = I(n / 62);
            return e
        }

        function $e() {
            var t, i = Ie(r(O() - 13885344e5) + Rn("000000" + I(1e6 * F()), -6)) + Ie(I(238328 * F())) + "0",
                a = 0,
                n = i;
            return hn(function (n, e) {
                t = Fe[i[i.length - 1 - e]], (i.length - e) % 2 && (t *= 2), 62 <= t && (t = t % 62 + 1), a += t
            })(n), t = (t = a % 62) && Oe[62 - t], Sn(i, 0, 13) + t
        }
        var He = $e(),
            Ue = {
                library: "checkoutjs",
                platform: "browser",
                referer: b.href
            };

        function Ze(n) {
            var t = {
                    checkout_id: n ? n.id : He
                },
                e = ["device", "env", "integration", "library", "os_version", "os", "platform_version", "platform", "referer"];
            return hn(function (n) {
                var e = t;
                return Pn(n, Ue[n])(e)
            })(e), t
        }
        var Ye, je = [],
            We = [],
            qe = function (n) {
                return je.push(n)
            },
            Ve = function (n) {
                Ye = n
            },
            Je = function () {
                var n, e, t, i;
                if (je.length) {
                    var a = kn(y, "sendBeacon"),
                        o = {
                            context: Ye,
                            addons: [{
                                name: "ua_parser",
                                input_key: "user_agent",
                                output_key: "user_agent_parsed"
                            }],
                            events: je.splice(0, je.length)
                        },
                        r = {
                            url: "https://lumberjack.razorpay.com/v1/track",
                            data: {
                                key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                                data: (i = Ln(o), t = h(i), e = p(t), n = v(e), h(n))
                            }
                        };
                    try {
                        a ? y.sendBeacon(r.url, Ln(r.data)) : Re.post(r)
                    } catch (n) {}
                }
            };
        e(function () {
            Je()
        }, 1e3);

        function Qe(r, m, u, c) {
            r ? r.isLiveMode() && a(function () {
                var n;
                u instanceof Error && (u = {
                    message: u.message,
                    stack: u.stack
                });
                var e = Ze(r);
                e.user_agent = null, e.mode = "live";
                var t = r.get("order_id");
                t && (e.order_id = t);
                var i = {},
                    a = {
                        options: i
                    };
                u && (a.data = u), i = An(i, Tn(r.get())), "function" == typeof r.get("handler") && (i.handler = !0), "string" == typeof r.get("callback_url") && (i.callback_url = !0), kn(i, "prefill") && hn(["card"], function (n) {
                    kn(i.prefill, n) && (i.prefill[n] = !0)
                }), i.image && U(i.image) && (i.image = "base64");
                var o = r.get("external.wallets") || [];
                i.external_wallets = (n = o, yn(function (n, e) {
                    var t = n;
                    return Mn(e, !0)(t)
                }, {})(n)), He && (a.local_order_id = He), a.build_number = 11539, a.experiments = function () {
                    try {
                        var n = Ge.getItem(ze),
                            e = Bn(n)
                    } catch (n) {}
                    return T(e) && !A(e) ? e : {}
                }(), qe({
                    event: m,
                    properties: a,
                    timestamp: O()
                }), Ve(e), c && Je()
            }) : We.push([m, u, c])
        }
        Qe.dispatchPendingEvents = function (n) {
            var e;
            n && (e = Qe.bind(Qe, n), We.splice(0, We.length).forEach(function (n) {
                e.apply(Qe, n)
            }))
        }, Qe.parseAnalyticsData = function (n) {
            var e;
            T(n) && (e = n, Nn(function (n, e) {
                Ue[n] = e
            })(e))
        }, Qe.makeUid = $e, Qe.common = Ze, Qe.props = Ue, Qe.id = He, Qe.updateUid = function (n) {
            Qe.id = He = n
        }, Qe.flush = Je;

        function Xe(n) {
            var t = function i(n, a) {
                void 0 === a && (a = "");
                var o = {};
                return Nn(n, function (n, e) {
                    var t = a ? a + "." + e : e;
                    T(n) ? An(o, i(n, t)) : o[t] = n
                }), o
            }(n);
            return Nn(t, function (n, e) {
                L(n) && (t[e] = n.call())
            }), t
        }
        var nt, et = {},
            tt = {},
            it = {
                setR: function (n) {
                    Qe.dispatchPendingEvents(nt = n)
                },
                track: function (n, e) {
                    var t, i = void 0 === e ? {} : e,
                        a = i.type,
                        o = i.data,
                        r = void 0 === o ? {} : o,
                        m = i.r,
                        u = void 0 === m ? nt : m,
                        c = i.immediately,
                        l = void 0 !== c && c,
                        s = Xe(et);
                    t = q(r || {}), ["token"].forEach(function (n) {
                        t[n] && (t[n] = "__REDACTED__")
                    }), (r = T(r = t) ? q(r) : {
                        data: r
                    }).meta && T(r.meta) && (s = An(s, r.meta)), r.meta = s, r.meta.request_index = tt[nt.id], a && (n = a + ":" + n), Qe(u, n, r, l)
                },
                setMeta: function (n, e) {
                    Mn(et, n, e)
                },
                removeMeta: function (n) {
                    Kn(et, n)
                },
                getMeta: function () {
                    return Tn(et)
                },
                updateRequestIndex: function (n) {
                    if (!nt || !n) return 0;
                    kn(tt, nt.id) || (tt[nt.id] = {});
                    var e = tt[nt.id];
                    return kn(e, n) || (e[n] = -1), e[n] += 1, e[n]
                }
            };

        function at() {
            return this._evts = {}, this._defs = {}, this
        }
        at.prototype = {
            onNew: bn,
            def: function (n, e) {
                this._defs[n] = e
            },
            on: function (n, e) {
                var t;
                return N(n) && L(e) && ((t = this._evts)[n] || (t[n] = []), !1 !== this.onNew(n, e) && t[n].push(e)), this
            },
            once: function (e, n) {
                var t = n,
                    i = this;
                return n = function n() {
                    t.apply(i, arguments), i.off(e, n)
                }, this.on(e, n)
            },
            off: function (t, n) {
                var e = arguments.length;
                if (!e) return at.call(this);
                var i = this._evts;
                if (2 === e) {
                    var a = i[t];
                    if (!L(n) || !A(a)) return;
                    if (a.splice(vn(a, n), 1), a.length) return
                }
                return i[t] ? delete i[t] : (t += ".", Nn(i, function (n, e) {
                    e.indexOf(t) || delete i[e]
                })), this
            },
            emit: function (n, e) {
                var t = this;
                return hn(this._evts[n], function (n) {
                    try {
                        n.call(t, e)
                    } catch (n) {
                        console.error
                    }
                }), this
            },
            emitter: function () {
                var n = arguments,
                    e = this;
                return function () {
                    e.emit.apply(e, n)
                }
            }
        };
        var ot = y.userAgent,
            rt = y.vendor;

        function mt(n) {
            return n.test(ot)
        }

        function ut(n) {
            return n.test(rt)
        }
        mt(/MSIE |Trident\//);
        var ct = mt(/iPhone/),
            lt = ct || mt(/iPad/),
            st = (mt(/Android/), mt(/iPad/), mt(/Windows NT/), mt(/Linux/), mt(/Mac OS/), mt(/^((?!chrome|android).)*safari/i) || ut(/Apple/), mt(/firefox/), mt(/Chrome/) && ut(/Google Inc/), mt(/; wv\) |Gecko\) Version\/[^ ]+ Chrome/), mt(/Instagram/)),
            dt = mt(/FB_IAB/),
            ft = mt(/FBAN/),
            ht = dt || ft;
        var vt = mt(/; wv\) |Gecko\) Version\/[^ ]+ Chrome|Windows Phone|Opera Mini|UCBrowser|CriOS/) || ht || st || lt || mt(/Android 4/),
            pt = (mt(/iPhone/), (pt = ot.match(/Chrome\/(\d+)/)) && f(pt[1], 10)),
            _t = (mt(/(Vivo|HeyTap|Realme|Oppo)Browser/), {
                key: "",
                account_id: "",
                image: "",
                amount: 100,
                currency: "INR",
                order_id: "",
                invoice_id: "",
                subscription_id: "",
                auth_link_id: "",
                payment_link_id: "",
                notes: null,
                callback_url: "",
                redirect: !1,
                description: "",
                customer_id: "",
                recurring: null,
                payout: null,
                contact_id: "",
                signature: "",
                retry: !0,
                target: "",
                subscription_card_change: null,
                display_currency: "",
                display_amount: "",
                recurring_token: {
                    max_amount: 0,
                    expire_by: 0
                },
                checkout_config_id: "",
                send_sms_hash: !1
            });

        function yt(n, e, t, i) {
            var a = e[t = t.toLowerCase()],
                o = typeof a;
            "object" == o && null === a ? N(i) && ("true" === i || "1" === i ? i = !0 : "false" !== i && "0" !== i || (i = !1)) : "string" == o && (K(i) || P(i)) ? i = r(i) : "number" == o ? i = m(i) : "boolean" == o && (N(i) ? "true" === i || "1" === i ? i = !0 : "false" !== i && "0" !== i || (i = !1) : K(i) && (i = !!i)), null !== a && o != typeof i || (n[t] = i)
        }

        function bt(i, a, o) {
            Nn(i[a], function (n, e) {
                var t = typeof n;
                "string" != t && "number" != t && "boolean" != t || (e = a + o[0] + e, 1 < o.length && (e += o[1]), i[e] = n)
            }), delete i[a]
        }

        function gt(n, i) {
            var a = {};
            return Nn(n, function (n, t) {
                t in Dt ? Nn(n, function (n, e) {
                    yt(a, i, t + "." + e, n)
                }) : yt(a, i, t, n)
            }), a
        }
        var Dt = {};

        function St(t) {
            Nn(_t, function (n, t) {
                T(n) && !C(n) && (Dt[t] = !0, Nn(n, function (n, e) {
                    _t[t + "." + e] = n
                }), delete _t[t])
            }), (t = gt(t, _t)).callback_url && vt && (t.redirect = !0), this.get = function (n) {
                return arguments.length ? n in t ? t[n] : _t[n] : t
            }, this.set = function (n, e) {
                t[n] = e
            }, this.unset = function (n) {
                delete t[n]
            }
        }
        var Rt, kt, wt, Mt = "metric",
            Pt = "rzp_device_id",
            Kt = 1,
            Nt = "",
            Lt = "",
            Bt = s.screen;
        try {
            wt = [y.userAgent, y.language, (new u).getTimezoneOffset(), y.platform, y.cpuClass, y.hardwareConcurrency, Bt.colorDepth, y.deviceMemory, Bt.width + Bt.height, Bt.width * Bt.height, s.devicePixelRatio], Rt = wt.join(), kt = new s.TextEncoder("utf-8").encode(Rt), s.crypto.subtle.digest("SHA-1", kt).then(function (n) {
                return Nt = function (n) {
                    for (var e = [], t = new s.DataView(n), i = 0; i < t.byteLength; i += 4) {
                        var a = t.getUint32(i).toString(16),
                            o = "00000000",
                            r = (o + a).slice(-o.length);
                        e.push(r)
                    }
                    return e.join("")
                }(n)
            }).then(function (n) {
                n && function (n) {
                    if (n) {
                        try {
                            Lt = Ge.getItem(Pt)
                        } catch (n) {}
                        if (!Lt) {
                            Lt = [Kt, n, u.now(), d.random().toString().slice(-8)].join(".");
                            try {
                                Ge.setItem(Pt, Lt)
                            } catch (n) {}
                        }
                    }
                }(Nt = n)
            }).catch(n)
        } catch (n) {}

        function At(n, t, e) {
            var i;
            void 0 === e && (e = {});
            var a = q(n);
            e.feesRedirect && (a.view = "html");
            var o = t.get;
            hn(["amount", "currency", "signature", "description", "order_id", "account_id", "notes", "subscription_id", "auth_link_id", "payment_link_id", "customer_id", "recurring", "subscription_card_change", "recurring_token.max_amount", "recurring_token.expire_by"], function (n) {
                var e, t = a;
                wn(n)(t) || (e = o(n)) && (P(e) && (e = 1), a[n.replace(/\.(\w+)/g, "[$1]")] = e)
            });
            var r = o("key");
            !a.key_id && r && (a.key_id = r), e.avoidPopup && "wallet" === a.method && (a["_[source]"] = "checkoutjs"), (e.tez || e.gpay) && (a["_[flow]"] = "intent", a["_[app]"] || (a["_[app]"] = "com.google.android.apps.nbu.paisa.user")), hn(["integration", "integration_version", "integration_parent_version"], function (n) {
                var e = t.get("_." + n);
                e && (a["_[" + n + "]"] = e)
            }), Nt && (a["_[shield][fhash]"] = Nt), Lt && (a["_[device_id]"] = Lt), a["_[shield][tz]"] = -(new u).getTimezoneOffset(), i = Tt, Nn(function (n, e) {
                a["_[shield][" + e + "]"] = n
            })(i), a["_[build]"] = 11539, bt(a, "notes", "[]"), bt(a, "card", "[]");
            var m = a["card[expiry]"];
            return N(m) && (a["card[expiry_month]"] = m.slice(0, 2), a["card[expiry_year]"] = m.slice(-2), delete a["card[expiry]"]), a._ = Qe.common(), bt(a, "_", "[]"), a
        }
        var Tt = {},
            Ct = {
                api: "https://api.razorpay.com/",
                version: "v1/",
                frameApi: "/",
                cdn: "https://cdn.razorpay.com/"
            };
        try {
            An(Ct, s.Razorpay.config)
        } catch (n) {}

        function Et(i, a) {
            return void 0 === a && (a = "."),
                function (n) {
                    for (var e = a, t = 0; t < i; t++) e += "0";
                    return n.replace(e, "")
                }
        }

        function xt(n, e) {
            return void 0 === e && (e = ","), n.replace(/\./, e)
        }

        function Gt(a) {
            Nn(a, function (n, e) {
                var t, i;
                $t[e] = (i = {}, t = An($t.default)(i), An($t[e] || {})(t)), $t[e].code = e, a[e] && ($t[e].symbol = a[e])
            })
        }
        var zt, Ot, Ft = {
                AED: {
                    code: "784",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "د.إ",
                    name: "Emirati Dirham"
                },
                ALL: {
                    code: "008",
                    denomination: 100,
                    min_value: 221,
                    min_auth_value: 100,
                    symbol: "Lek",
                    name: "Albanian Lek"
                },
                AMD: {
                    code: "051",
                    denomination: 100,
                    min_value: 975,
                    min_auth_value: 100,
                    symbol: "֏",
                    name: "Armenian Dram"
                },
                ARS: {
                    code: "032",
                    denomination: 100,
                    min_value: 80,
                    min_auth_value: 100,
                    symbol: "ARS",
                    name: "Argentine Peso"
                },
                AUD: {
                    code: "036",
                    denomination: 100,
                    min_value: 50,
                    min_auth_value: 100,
                    symbol: "A$",
                    name: "Australian Dollar"
                },
                AWG: {
                    code: "533",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "Afl.",
                    name: "Aruban or Dutch Guilder"
                },
                BBD: {
                    code: "052",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "Bds$",
                    name: "Barbadian or Bajan Dollar"
                },
                BDT: {
                    code: "050",
                    denomination: 100,
                    min_value: 168,
                    min_auth_value: 100,
                    symbol: "৳",
                    name: "Bangladeshi Taka"
                },
                BMD: {
                    code: "060",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "$",
                    name: "Bermudian Dollar"
                },
                BND: {
                    code: "096",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "BND",
                    name: "Bruneian Dollar"
                },
                BOB: {
                    code: "068",
                    denomination: 100,
                    min_value: 14,
                    min_auth_value: 100,
                    symbol: "Bs",
                    name: "Bolivian Bolíviano"
                },
                BSD: {
                    code: "044",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "BSD",
                    name: "Bahamian Dollar"
                },
                BWP: {
                    code: "072",
                    denomination: 100,
                    min_value: 22,
                    min_auth_value: 100,
                    symbol: "P",
                    name: "Botswana Pula"
                },
                BZD: {
                    code: "084",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "BZ$",
                    name: "Belizean Dollar"
                },
                CAD: {
                    code: "124",
                    denomination: 100,
                    min_value: 50,
                    min_auth_value: 100,
                    symbol: "C$",
                    name: "Canadian Dollar"
                },
                CHF: {
                    code: "756",
                    denomination: 100,
                    min_value: 50,
                    min_auth_value: 100,
                    symbol: "CHf",
                    name: "Swiss Franc"
                },
                CNY: {
                    code: "156",
                    denomination: 100,
                    min_value: 14,
                    min_auth_value: 100,
                    symbol: "¥",
                    name: "Chinese Yuan Renminbi"
                },
                COP: {
                    code: "170",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "COL$",
                    name: "Colombian Peso"
                },
                CRC: {
                    code: "188",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "₡",
                    name: "Costa Rican Colon"
                },
                CUP: {
                    code: "192",
                    denomination: 100,
                    min_value: 53,
                    min_auth_value: 100,
                    symbol: "$MN",
                    name: "Cuban Peso"
                },
                CZK: {
                    code: "203",
                    denomination: 100,
                    min_value: 46,
                    min_auth_value: 100,
                    symbol: "Kč",
                    name: "Czech Koruna"
                },
                DKK: {
                    code: "208",
                    denomination: 100,
                    min_value: 250,
                    min_auth_value: 100,
                    symbol: "DKK",
                    name: "Danish Krone"
                },
                DOP: {
                    code: "214",
                    denomination: 100,
                    min_value: 102,
                    min_auth_value: 100,
                    symbol: "RD$",
                    name: "Dominican Peso"
                },
                DZD: {
                    code: "012",
                    denomination: 100,
                    min_value: 239,
                    min_auth_value: 100,
                    symbol: "د.ج",
                    name: "Algerian Dinar"
                },
                EGP: {
                    code: "818",
                    denomination: 100,
                    min_value: 35,
                    min_auth_value: 100,
                    symbol: "E£",
                    name: "Egyptian Pound"
                },
                ETB: {
                    code: "230",
                    denomination: 100,
                    min_value: 57,
                    min_auth_value: 100,
                    symbol: "ብር",
                    name: "Ethiopian Birr"
                },
                EUR: {
                    code: "978",
                    denomination: 100,
                    min_value: 50,
                    min_auth_value: 100,
                    symbol: "€",
                    name: "Euro"
                },
                FJD: {
                    code: "242",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "FJ$",
                    name: "Fijian Dollar"
                },
                GBP: {
                    code: "826",
                    denomination: 100,
                    min_value: 30,
                    min_auth_value: 100,
                    symbol: "£",
                    name: "British Pound"
                },
                GIP: {
                    code: "292",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "GIP",
                    name: "Gibraltar Pound"
                },
                GMD: {
                    code: "270",
                    denomination: 100,
                    min_value: 100,
                    min_auth_value: 100,
                    symbol: "D",
                    name: "Gambian Dalasi"
                },
                GTQ: {
                    code: "320",
                    denomination: 100,
                    min_value: 16,
                    min_auth_value: 100,
                    symbol: "Q",
                    name: "Guatemalan Quetzal"
                },
                GYD: {
                    code: "328",
                    denomination: 100,
                    min_value: 418,
                    min_auth_value: 100,
                    symbol: "G$",
                    name: "Guyanese Dollar"
                },
                HKD: {
                    code: "344",
                    denomination: 100,
                    min_value: 400,
                    min_auth_value: 100,
                    symbol: "HK$",
                    name: "Hong Kong Dollar"
                },
                HNL: {
                    code: "340",
                    denomination: 100,
                    min_value: 49,
                    min_auth_value: 100,
                    symbol: "HNL",
                    name: "Honduran Lempira"
                },
                HRK: {
                    code: "191",
                    denomination: 100,
                    min_value: 14,
                    min_auth_value: 100,
                    symbol: "kn",
                    name: "Croatian Kuna"
                },
                HTG: {
                    code: "332",
                    denomination: 100,
                    min_value: 167,
                    min_auth_value: 100,
                    symbol: "G",
                    name: "Haitian Gourde"
                },
                HUF: {
                    code: "348",
                    denomination: 100,
                    min_value: 555,
                    min_auth_value: 100,
                    symbol: "Ft",
                    name: "Hungarian Forint"
                },
                IDR: {
                    code: "360",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "Rp",
                    name: "Indonesian Rupiah"
                },
                ILS: {
                    code: "376",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "₪",
                    name: "Israeli Shekel"
                },
                INR: {
                    code: "356",
                    denomination: 100,
                    min_value: 100,
                    min_auth_value: 100,
                    symbol: "₹",
                    name: "Indian Rupee"
                },
                JMD: {
                    code: "388",
                    denomination: 100,
                    min_value: 250,
                    min_auth_value: 100,
                    symbol: "J$",
                    name: "Jamaican Dollar"
                },
                KES: {
                    code: "404",
                    denomination: 100,
                    min_value: 201,
                    min_auth_value: 100,
                    symbol: "Ksh",
                    name: "Kenyan Shilling"
                },
                KGS: {
                    code: "417",
                    denomination: 100,
                    min_value: 140,
                    min_auth_value: 100,
                    symbol: "Лв",
                    name: "Kyrgyzstani Som"
                },
                KHR: {
                    code: "116",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "៛",
                    name: "Cambodian Riel"
                },
                KYD: {
                    code: "136",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "CI$",
                    name: "Caymanian Dollar"
                },
                KZT: {
                    code: "398",
                    denomination: 100,
                    min_value: 759,
                    min_auth_value: 100,
                    symbol: "₸",
                    name: "Kazakhstani Tenge"
                },
                LAK: {
                    code: "418",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "₭",
                    name: "Lao Kip"
                },
                LBP: {
                    code: "422",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "&#1604;.&#1604;.",
                    name: "Lebanese Pound"
                },
                LKR: {
                    code: "144",
                    denomination: 100,
                    min_value: 358,
                    min_auth_value: 100,
                    symbol: "රු",
                    name: "Sri Lankan Rupee"
                },
                LRD: {
                    code: "430",
                    denomination: 100,
                    min_value: 325,
                    min_auth_value: 100,
                    symbol: "L$",
                    name: "Liberian Dollar"
                },
                LSL: {
                    code: "426",
                    denomination: 100,
                    min_value: 29,
                    min_auth_value: 100,
                    symbol: "LSL",
                    name: "Basotho Loti"
                },
                MAD: {
                    code: "504",
                    denomination: 100,
                    min_value: 20,
                    min_auth_value: 100,
                    symbol: "د.م.",
                    name: "Moroccan Dirham"
                },
                MDL: {
                    code: "498",
                    denomination: 100,
                    min_value: 35,
                    min_auth_value: 100,
                    symbol: "MDL",
                    name: "Moldovan Leu"
                },
                MKD: {
                    code: "807",
                    denomination: 100,
                    min_value: 109,
                    min_auth_value: 100,
                    symbol: "ден",
                    name: "Macedonian Denar"
                },
                MMK: {
                    code: "104",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "MMK",
                    name: "Burmese Kyat"
                },
                MNT: {
                    code: "496",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "₮",
                    name: "Mongolian Tughrik"
                },
                MOP: {
                    code: "446",
                    denomination: 100,
                    min_value: 17,
                    min_auth_value: 100,
                    symbol: "MOP$",
                    name: "Macau Pataca"
                },
                MUR: {
                    code: "480",
                    denomination: 100,
                    min_value: 70,
                    min_auth_value: 100,
                    symbol: "₨",
                    name: "Mauritian Rupee"
                },
                MVR: {
                    code: "462",
                    denomination: 100,
                    min_value: 31,
                    min_auth_value: 100,
                    symbol: "Rf",
                    name: "Maldivian Rufiyaa"
                },
                MWK: {
                    code: "454",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "MK",
                    name: "Malawian Kwacha"
                },
                MXN: {
                    code: "484",
                    denomination: 100,
                    min_value: 39,
                    min_auth_value: 100,
                    symbol: "Mex$",
                    name: "Mexican Peso"
                },
                MYR: {
                    code: "458",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "RM",
                    name: "Malaysian Ringgit"
                },
                NAD: {
                    code: "516",
                    denomination: 100,
                    min_value: 29,
                    min_auth_value: 100,
                    symbol: "N$",
                    name: "Namibian Dollar"
                },
                NGN: {
                    code: "566",
                    denomination: 100,
                    min_value: 723,
                    min_auth_value: 100,
                    symbol: "₦",
                    name: "Nigerian Naira"
                },
                NIO: {
                    code: "558",
                    denomination: 100,
                    min_value: 66,
                    min_auth_value: 100,
                    symbol: "NIO",
                    name: "Nicaraguan Cordoba"
                },
                NOK: {
                    code: "578",
                    denomination: 100,
                    min_value: 300,
                    min_auth_value: 100,
                    symbol: "NOK",
                    name: "Norwegian Krone"
                },
                NPR: {
                    code: "524",
                    denomination: 100,
                    min_value: 221,
                    min_auth_value: 100,
                    symbol: "रू",
                    name: "Nepalese Rupee"
                },
                NZD: {
                    code: "554",
                    denomination: 100,
                    min_value: 50,
                    min_auth_value: 100,
                    symbol: "NZ$",
                    name: "New Zealand Dollar"
                },
                PEN: {
                    code: "604",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "S/",
                    name: "Peruvian Sol"
                },
                PGK: {
                    code: "598",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "PGK",
                    name: "Papua New Guinean Kina"
                },
                PHP: {
                    code: "608",
                    denomination: 100,
                    min_value: 106,
                    min_auth_value: 100,
                    symbol: "₱",
                    name: "Philippine Peso"
                },
                PKR: {
                    code: "586",
                    denomination: 100,
                    min_value: 227,
                    min_auth_value: 100,
                    symbol: "₨",
                    name: "Pakistani Rupee"
                },
                QAR: {
                    code: "634",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "QR",
                    name: "Qatari Riyal"
                },
                RUB: {
                    code: "643",
                    denomination: 100,
                    min_value: 130,
                    min_auth_value: 100,
                    symbol: "₽",
                    name: "Russian Ruble"
                },
                SAR: {
                    code: "682",
                    denomination: 100,
                    min_value: 10,
                    min_auth_value: 100,
                    symbol: "SR",
                    name: "Saudi Arabian Riyal"
                },
                SCR: {
                    code: "690",
                    denomination: 100,
                    min_value: 28,
                    min_auth_value: 100,
                    symbol: "SRe",
                    name: "Seychellois Rupee"
                },
                SEK: {
                    code: "752",
                    denomination: 100,
                    min_value: 300,
                    min_auth_value: 100,
                    symbol: "SEK",
                    name: "Swedish Krona"
                },
                SGD: {
                    code: "702",
                    denomination: 100,
                    min_value: 50,
                    min_auth_value: 100,
                    symbol: "S$",
                    name: "Singapore Dollar"
                },
                SLL: {
                    code: "694",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "Le",
                    name: "Sierra Leonean Leone"
                },
                SOS: {
                    code: "706",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "Sh.so.",
                    name: "Somali Shilling"
                },
                SSP: {
                    code: "728",
                    denomination: 100,
                    min_value: 100,
                    min_auth_value: 100,
                    symbol: "SS£",
                    name: "South Sudanese Pound"
                },
                SVC: {
                    code: "222",
                    denomination: 100,
                    min_value: 18,
                    min_auth_value: 100,
                    symbol: "₡",
                    name: "Salvadoran Colon"
                },
                SZL: {
                    code: "748",
                    denomination: 100,
                    min_value: 29,
                    min_auth_value: 100,
                    symbol: "E",
                    name: "Swazi Lilangeni"
                },
                THB: {
                    code: "764",
                    denomination: 100,
                    min_value: 64,
                    min_auth_value: 100,
                    symbol: "฿",
                    name: "Thai Baht"
                },
                TTD: {
                    code: "780",
                    denomination: 100,
                    min_value: 14,
                    min_auth_value: 100,
                    symbol: "TT$",
                    name: "Trinidadian Dollar"
                },
                TZS: {
                    code: "834",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "Sh",
                    name: "Tanzanian Shilling"
                },
                USD: {
                    code: "840",
                    denomination: 100,
                    min_value: 50,
                    min_auth_value: 100,
                    symbol: "$",
                    name: "US Dollar"
                },
                UYU: {
                    code: "858",
                    denomination: 100,
                    min_value: 67,
                    min_auth_value: 100,
                    symbol: "$U",
                    name: "Uruguayan Peso"
                },
                UZS: {
                    code: "860",
                    denomination: 100,
                    min_value: 1e3,
                    min_auth_value: 100,
                    symbol: "so'm",
                    name: "Uzbekistani Som"
                },
                YER: {
                    code: "886",
                    denomination: 100,
                    min_value: 501,
                    min_auth_value: 100,
                    symbol: "﷼",
                    name: "Yemeni Rial"
                },
                ZAR: {
                    code: "710",
                    denomination: 100,
                    min_value: 29,
                    min_auth_value: 100,
                    symbol: "R",
                    name: "South African Rand"
                }
            },
            It = {
                three: function (n, e) {
                    var t = r(n).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"), "$1,");
                    return Et(e)(t)
                },
                threecommadecimal: function (n, e) {
                    var t = xt(r(n)).replace(new RegExp("(.{1,3})(?=(...)+(\\,.{" + e + "})$)", "g"), "$1.");
                    return Et(e, ",")(t)
                },
                threespaceseparator: function (n, e) {
                    var t = r(n).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"), "$1 ");
                    return Et(e)(t)
                },
                threespacecommadecimal: function (n, e) {
                    var t = xt(r(n)).replace(new RegExp("(.{1,3})(?=(...)+(\\,.{" + e + "})$)", "g"), "$1 ");
                    return Et(e, ",")(t)
                },
                szl: function (n, e) {
                    var t = r(n).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"), "$1, ");
                    return Et(e)(t)
                },
                chf: function (n, e) {
                    var t = r(n).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + e + "})$)", "g"), "$1'");
                    return Et(e)(t)
                },
                inr: function (n, e) {
                    var t = r(n).replace(new RegExp("(.{1,2})(?=.(..)+(\\..{" + e + "})$)", "g"), "$1,");
                    return Et(e)(t)
                },
                none: function (n) {
                    return r(n)
                }
            },
            $t = {
                default: {
                    decimals: 2,
                    format: It.three,
                    minimum: 100
                },
                AED: {
                    minor: "fil",
                    minimum: 10
                },
                AFN: {
                    minor: "pul"
                },
                ALL: {
                    minor: "qindarka",
                    minimum: 221
                },
                AMD: {
                    minor: "luma",
                    minimum: 975
                },
                ANG: {
                    minor: "cent"
                },
                AOA: {
                    minor: "lwei"
                },
                ARS: {
                    format: It.threecommadecimal,
                    minor: "centavo",
                    minimum: 80
                },
                AUD: {
                    format: It.threespaceseparator,
                    minimum: 50,
                    minor: "cent"
                },
                AWG: {
                    minor: "cent",
                    minimum: 10
                },
                AZN: {
                    minor: "qäpik"
                },
                BAM: {
                    minor: "fenning"
                },
                BBD: {
                    minor: "cent",
                    minimum: 10
                },
                BDT: {
                    minor: "paisa",
                    minimum: 168
                },
                BGN: {
                    minor: "stotinki"
                },
                BHD: {
                    decimals: 3,
                    minor: "fils"
                },
                BIF: {
                    decimals: 0,
                    major: "franc",
                    minor: "centime"
                },
                BMD: {
                    minor: "cent",
                    minimum: 10
                },
                BND: {
                    minor: "sen",
                    minimum: 10
                },
                BOB: {
                    minor: "centavo",
                    minimum: 14
                },
                BRL: {
                    format: It.threecommadecimal,
                    minimum: 50,
                    minor: "centavo"
                },
                BSD: {
                    minor: "cent",
                    minimum: 10
                },
                BTN: {
                    minor: "chetrum"
                },
                BWP: {
                    minor: "thebe",
                    minimum: 22
                },
                BYR: {
                    decimals: 0,
                    major: "ruble"
                },
                BZD: {
                    minor: "cent",
                    minimum: 10
                },
                CAD: {
                    minimum: 50,
                    minor: "cent"
                },
                CDF: {
                    minor: "centime"
                },
                CHF: {
                    format: It.chf,
                    minimum: 50,
                    minor: "rappen"
                },
                CLP: {
                    decimals: 0,
                    format: It.none,
                    major: "peso",
                    minor: "centavo"
                },
                CNY: {
                    minor: "jiao",
                    minimum: 14
                },
                COP: {
                    format: It.threecommadecimal,
                    minor: "centavo",
                    minimum: 1e3
                },
                CRC: {
                    format: It.threecommadecimal,
                    minor: "centimo",
                    minimum: 1e3
                },
                CUC: {
                    minor: "centavo"
                },
                CUP: {
                    minor: "centavo",
                    minimum: 53
                },
                CVE: {
                    minor: "centavo"
                },
                CZK: {
                    format: It.threecommadecimal,
                    minor: "haler",
                    minimum: 46
                },
                DJF: {
                    decimals: 0,
                    major: "franc",
                    minor: "centime"
                },
                DKK: {
                    minimum: 250,
                    minor: "øre"
                },
                DOP: {
                    minor: "centavo",
                    minimum: 102
                },
                DZD: {
                    minor: "centime",
                    minimum: 239
                },
                EGP: {
                    minor: "piaster",
                    minimum: 35
                },
                ERN: {
                    minor: "cent"
                },
                ETB: {
                    minor: "cent",
                    minimum: 57
                },
                EUR: {
                    minimum: 50,
                    minor: "cent"
                },
                FJD: {
                    minor: "cent",
                    minimum: 10
                },
                FKP: {
                    minor: "pence"
                },
                GBP: {
                    minimum: 30,
                    minor: "pence"
                },
                GEL: {
                    minor: "tetri"
                },
                GHS: {
                    minor: "pesewas",
                    minimum: 3
                },
                GIP: {
                    minor: "pence",
                    minimum: 10
                },
                GMD: {
                    minor: "butut"
                },
                GTQ: {
                    minor: "centavo",
                    minimum: 16
                },
                GYD: {
                    minor: "cent",
                    minimum: 418
                },
                HKD: {
                    minimum: 400,
                    minor: "cent"
                },
                HNL: {
                    minor: "centavo",
                    minimum: 49
                },
                HRK: {
                    format: It.threecommadecimal,
                    minor: "lipa",
                    minimum: 14
                },
                HTG: {
                    minor: "centime",
                    minimum: 167
                },
                HUF: {
                    decimals: 0,
                    format: It.none,
                    major: "forint",
                    minimum: 555
                },
                IDR: {
                    format: It.threecommadecimal,
                    minor: "sen",
                    minimum: 1e3
                },
                ILS: {
                    minor: "agorot",
                    minimum: 10
                },
                INR: {
                    format: It.inr,
                    minor: "paise"
                },
                IQD: {
                    decimals: 3,
                    minor: "fil"
                },
                IRR: {
                    minor: "rials"
                },
                ISK: {
                    decimals: 0,
                    format: It.none,
                    major: "króna",
                    minor: "aurar"
                },
                JMD: {
                    minor: "cent",
                    minimum: 250
                },
                JOD: {
                    decimals: 3,
                    minor: "fil"
                },
                JPY: {
                    decimals: 0,
                    minimum: 50,
                    minor: "sen"
                },
                KES: {
                    minor: "cent",
                    minimum: 201
                },
                KGS: {
                    minor: "tyyn",
                    minimum: 140
                },
                KHR: {
                    minor: "sen",
                    minimum: 1e3
                },
                KMF: {
                    decimals: 0,
                    major: "franc",
                    minor: "centime"
                },
                KPW: {
                    minor: "chon"
                },
                KRW: {
                    decimals: 0,
                    major: "won",
                    minor: "chon"
                },
                KWD: {
                    decimals: 3,
                    minor: "fil"
                },
                KYD: {
                    minor: "cent",
                    minimum: 10
                },
                KZT: {
                    minor: "tiyn",
                    minimum: 759
                },
                LAK: {
                    minor: "at",
                    minimum: 1e3
                },
                LBP: {
                    format: It.threespaceseparator,
                    minor: "piastre",
                    minimum: 1e3
                },
                LKR: {
                    minor: "cent",
                    minimum: 358
                },
                LRD: {
                    minor: "cent",
                    minimum: 325
                },
                LSL: {
                    minor: "lisente",
                    minimum: 29
                },
                LTL: {
                    format: It.threespacecommadecimal,
                    minor: "centu"
                },
                LVL: {
                    minor: "santim"
                },
                LYD: {
                    decimals: 3,
                    minor: "dirham"
                },
                MAD: {
                    minor: "centime",
                    minimum: 20
                },
                MDL: {
                    minor: "ban",
                    minimum: 35
                },
                MGA: {
                    decimals: 0,
                    major: "ariary"
                },
                MKD: {
                    minor: "deni"
                },
                MMK: {
                    minor: "pya",
                    minimum: 1e3
                },
                MNT: {
                    minor: "mongo",
                    minimum: 1e3
                },
                MOP: {
                    minor: "avo",
                    minimum: 17
                },
                MRO: {
                    minor: "khoum"
                },
                MUR: {
                    minor: "cent",
                    minimum: 70
                },
                MVR: {
                    minor: "lari",
                    minimum: 31
                },
                MWK: {
                    minor: "tambala",
                    minimum: 1e3
                },
                MXN: {
                    minor: "centavo",
                    minimum: 39
                },
                MYR: {
                    minor: "sen",
                    minimum: 10
                },
                MZN: {
                    decimals: 0,
                    major: "metical"
                },
                NAD: {
                    minor: "cent",
                    minimum: 29
                },
                NGN: {
                    minor: "kobo",
                    minimum: 723
                },
                NIO: {
                    minor: "centavo",
                    minimum: 66
                },
                NOK: {
                    format: It.threecommadecimal,
                    minimum: 300,
                    minor: "øre"
                },
                NPR: {
                    minor: "paise",
                    minimum: 221
                },
                NZD: {
                    minimum: 50,
                    minor: "cent"
                },
                OMR: {
                    minor: "baiza",
                    decimals: 3
                },
                PAB: {
                    minor: "centesimo"
                },
                PEN: {
                    minor: "centimo",
                    minimum: 10
                },
                PGK: {
                    minor: "toea",
                    minimum: 10
                },
                PHP: {
                    minor: "centavo",
                    minimum: 106
                },
                PKR: {
                    minor: "paisa",
                    minimum: 227
                },
                PLN: {
                    format: It.threespacecommadecimal,
                    minor: "grosz"
                },
                PYG: {
                    decimals: 0,
                    major: "guarani",
                    minor: "centimo"
                },
                QAR: {
                    minor: "dirham",
                    minimum: 10
                },
                RON: {
                    format: It.threecommadecimal,
                    minor: "bani"
                },
                RUB: {
                    format: It.threecommadecimal,
                    minor: "kopeck",
                    minimum: 130
                },
                RWF: {
                    decimals: 0,
                    major: "franc",
                    minor: "centime"
                },
                SAR: {
                    minor: "halalat",
                    minimum: 10
                },
                SBD: {
                    minor: "cent"
                },
                SCR: {
                    minor: "cent",
                    minimum: 28
                },
                SEK: {
                    format: It.threespacecommadecimal,
                    minimum: 300,
                    minor: "öre"
                },
                SGD: {
                    minimum: 50,
                    minor: "cent"
                },
                SHP: {
                    minor: "new pence"
                },
                SLL: {
                    minor: "cent",
                    minimum: 1e3
                },
                SOS: {
                    minor: "centesimi",
                    minimum: 1e3
                },
                SRD: {
                    minor: "cent"
                },
                STD: {
                    minor: "centimo"
                },
                SSP: {
                    minor: "piaster"
                },
                SVC: {
                    minor: "centavo",
                    minimum: 18
                },
                SYP: {
                    minor: "piaster"
                },
                SZL: {
                    format: It.szl,
                    minor: "cent",
                    minimum: 29
                },
                THB: {
                    minor: "satang",
                    minimum: 64
                },
                TJS: {
                    minor: "diram"
                },
                TMT: {
                    minor: "tenga"
                },
                TND: {
                    decimals: 3,
                    minor: "millime"
                },
                TOP: {
                    minor: "seniti"
                },
                TRY: {
                    minor: "kurus"
                },
                TTD: {
                    minor: "cent",
                    minimum: 14
                },
                TWD: {
                    minor: "cent"
                },
                TZS: {
                    minor: "cent",
                    minimum: 1e3
                },
                UAH: {
                    format: It.threespacecommadecimal,
                    minor: "kopiyka"
                },
                UGX: {
                    minor: "cent"
                },
                USD: {
                    minimum: 50,
                    minor: "cent"
                },
                UYU: {
                    format: It.threecommadecimal,
                    minor: "centé",
                    minimum: 67
                },
                UZS: {
                    minor: "tiyin",
                    minimum: 1e3
                },
                VND: {
                    format: It.none,
                    minor: "hao,xu"
                },
                VUV: {
                    decimals: 0,
                    major: "vatu",
                    minor: "centime"
                },
                WST: {
                    minor: "sene"
                },
                XAF: {
                    decimals: 0,
                    major: "franc",
                    minor: "centime"
                },
                XCD: {
                    minor: "cent"
                },
                XPF: {
                    decimals: 0,
                    major: "franc",
                    minor: "centime"
                },
                YER: {
                    minor: "fil",
                    minimum: 501
                },
                ZAR: {
                    format: It.threespaceseparator,
                    minor: "cent",
                    minimum: 29
                },
                ZMK: {
                    minor: "ngwee"
                }
            },
            Ht = function (n) {
                return $t[n] ? $t[n] : $t.default
            },
            Ut = ["AED", "ALL", "AMD", "ARS", "AUD", "AWG", "BBD", "BDT", "BMD", "BND", "BOB", "BSD", "BWP", "BZD", "CAD", "CHF", "CNY", "COP", "CRC", "CUP", "CZK", "DKK", "DOP", "DZD", "EGP", "ETB", "EUR", "FJD", "GBP", "GHS", "GIP", "GMD", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "JMD", "KES", "KGS", "KHR", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "MAD", "MDL", "MKD", "MMK", "MNT", "MOP", "MUR", "MVR", "MWK", "MXN", "MYR", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "PEN", "PGK", "PHP", "PKR", "QAR", "RUB", "SAR", "SCR", "SEK", "SGD", "SLL", "SOS", "SSP", "SVC", "SZL", "THB", "TTD", "TZS", "USD", "UYU", "UZS", "YER", "ZAR"],
            Zt = {
                AED: "د.إ",
                AFN: "&#x60b;",
                ALL: "Lek",
                AMD: "֏",
                ANG: "NAƒ",
                AOA: "Kz",
                ARS: "ARS",
                AUD: "A$",
                AWG: "Afl.",
                AZN: "ман",
                BAM: "KM",
                BBD: "Bds$",
                BDT: "৳",
                BGN: "лв",
                BHD: "د.ب",
                BIF: "FBu",
                BMD: "$",
                BND: "BND",
                BOB: "Bs.",
                BRL: "R$",
                BSD: "BSD",
                BTN: "Nu.",
                BWP: "P",
                BYR: "Br",
                BZD: "BZ$",
                CAD: "C$",
                CDF: "FC",
                CHF: "CHf",
                CLP: "CLP$",
                CNY: "¥",
                COP: "COL$",
                CRC: "₡",
                CUC: "&#x20b1;",
                CUP: "$MN",
                CVE: "Esc",
                CZK: "Kč",
                DJF: "Fdj",
                DKK: "DKK",
                DOP: "RD$",
                DZD: "د.ج",
                EGP: "E£",
                ERN: "Nfa",
                ETB: "ብር",
                EUR: "€",
                FJD: "FJ$",
                FKP: "FK&#163;",
                GBP: "£",
                GEL: "ლ",
                GHS: "&#x20b5;",
                GIP: "GIP",
                GMD: "D",
                GNF: "FG",
                GTQ: "Q",
                GYD: "G$",
                HKD: "HK$",
                HNL: "HNL",
                HRK: "kn",
                HTG: "G",
                HUF: "Ft",
                IDR: "Rp",
                ILS: "₪",
                INR: "₹",
                IQD: "ع.د",
                IRR: "&#xfdfc;",
                ISK: "ISK",
                JMD: "J$",
                JOD: "د.ا",
                JPY: "&#165;",
                KES: "Ksh",
                KGS: "Лв",
                KHR: "៛",
                KMF: "CF",
                KPW: "KPW",
                KRW: "KRW",
                KWD: "د.ك",
                KYD: "CI$",
                KZT: "₸",
                LAK: "₭",
                LBP: "&#1604;.&#1604;.",
                LD: "LD",
                LKR: "රු",
                LRD: "L$",
                LSL: "LSL",
                LTL: "Lt",
                LVL: "Ls",
                LYD: "LYD",
                MAD: "د.م.",
                MDL: "MDL",
                MGA: "Ar",
                MKD: "ден",
                MMK: "MMK",
                MNT: "₮",
                MOP: "MOP$",
                MRO: "UM",
                MUR: "₨",
                MVR: "Rf",
                MWK: "MK",
                MXN: "Mex$",
                MYR: "RM",
                MZN: "MT",
                NAD: "N$",
                NGN: "₦",
                NIO: "NIO",
                NOK: "NOK",
                NPR: "रू",
                NZD: "NZ$",
                OMR: "ر.ع.",
                PAB: "B/.",
                PEN: "S/",
                PGK: "PGK",
                PHP: "₱",
                PKR: "₨",
                PLN: "Zł",
                PYG: "&#x20b2;",
                QAR: "QR",
                RON: "RON",
                RSD: "Дин.",
                RUB: "₽",
                RWF: "RF",
                SAR: "SR",
                SBD: "SI$",
                SCR: "SRe",
                SDG: "&#163;Sd",
                SEK: "SEK",
                SFR: "Fr",
                SGD: "S$",
                SHP: "&#163;",
                SLL: "Le",
                SOS: "Sh.so.",
                SRD: "Sr$",
                SSP: "SS£",
                STD: "Db",
                SVC: "₡",
                SYP: "S&#163;",
                SZL: "E",
                THB: "฿",
                TJS: "SM",
                TMT: "M",
                TND: "د.ت",
                TOP: "T$",
                TRY: "TL",
                TTD: "TT$",
                TWD: "NT$",
                TZS: "Sh",
                UAH: "&#x20b4;",
                UGX: "USh",
                USD: "$",
                UYU: "$U",
                UZS: "so'm",
                VEF: "Bs",
                VND: "&#x20ab;",
                VUV: "VT",
                WST: "T",
                XAF: "FCFA",
                XCD: "EC$",
                XOF: "CFA",
                XPF: "CFPF",
                YER: "﷼",
                ZAR: "R",
                ZMK: "ZK",
                ZWL: "Z$"
            };
        Ot = {}, Nn(zt = Ft, function (n, e) {
            Ft[e] = n, $t[e] = $t[e] || {}, zt[e].min_value && ($t[e].minimum = zt[e].min_value), zt[e].denomination && ($t[e].decimals = d.LOG10E * d.log(zt[e].denomination)), Ot[e] = zt[e].symbol
        }), An(Zt, Ot), Gt(Ot), Gt(Zt);
        yn(Ut, function (n, e) {
            return n[e] = Zt[e], n
        }, {});

        function Yt(n, e, t) {
            return void 0 === t && (t = !0), [Zt[e], (i = n, a = Ht(e), o = i / d.pow(10, a.decimals), a.format(o.toFixed(a.decimals), a.decimals))].join(t ? " " : "");
            var i, a, o
        }

        function jt(n) {
            return void 0 === n && (n = ""), Ct.api + Ct.version + n
        }
        var Wt = ["key", "order_id", "invoice_id", "subscription_id", "auth_link_id", "payment_link_id", "contact_id", "checkout_config_id"];

        function qt(e) {
            var t, i = this;
            if (!z(this, qt)) return new qt(e);
            at.call(this), this.id = Qe.makeUid(), it.setR(this);
            try {
                t = function (n) {
                    n && "object" == typeof n || H("Invalid options");
                    var e = new St(n);
                    return function (i, a) {
                            void 0 === a && (a = []);
                            var o = !0;
                            i = i.get(), Nn(Xt, function (n, e) {
                                var t;
                                pn(a, e) || e in i && ((t = n(i[e], i)) && (o = !1, H("Invalid " + e + " (" + t + ")")))
                            })
                        }(e, ["amount"]),
                        function (n) {
                            var t = n.get("notes");
                            Nn(t, function (n, e) {
                                N(n) ? 254 < n.length && (t[e] = n.slice(0, 254)) : K(n) || P(n) || delete t[e]
                            })
                        }(e), e
                }(e), this.get = t.get, this.set = t.set
            } catch (n) {
                var a = n.message;
                this.get && this.isLiveMode() || T(e) && !e.parent && s.alert(a), H(a)
            }
            hn(["integration", "integration_version", "integration_parent_version"], function (n) {
                var e = i.get("_." + n);
                e && (Qe.props[n] = e)
            }), Wt.every(function (n) {
                return !t.get(n)
            }) && H("No key passed"), this.postInit()
        }
        var Vt = qt.prototype = new at;

        function Jt(n, e) {
            return Re.jsonp({
                url: jt("preferences"),
                data: n,
                callback: e
            })
        }
        Vt.postInit = bn, Vt.onNew = function (n, e) {
            var t = this;
            "ready" === n && (this.prefs ? e(n, this.prefs) : Jt(Qt(this), function (n) {
                n.methods && (t.prefs = n, t.methods = n.methods), e(t.prefs, n)
            }))
        }, Vt.emi_calculator = function (n, e) {
            return qt.emi.calculator(this.get("amount") / 100, n, e)
        }, qt.emi = {
            calculator: function (n, e, t) {
                if (!t) return d.ceil(n / e);
                t /= 1200;
                var i = d.pow(1 + t, e);
                return f(n * t * i / (i - 1), 10)
            }
        };
        qt.payment = {
            getMethods: function (e) {
                return Jt({
                    key_id: qt.defaults.key
                }, function (n) {
                    e(n.methods || n)
                })
            },
            getPrefs: function (e, t) {
                var i = w();
                return it.track("prefs:start", {
                    type: Mt
                }), T(e) && (e["_[request_index]"] = it.updateRequestIndex("preferences")), Re({
                    url: Y(jt("preferences"), e),
                    callback: function (n) {
                        if (it.track("prefs:end", {
                                type: Mt,
                                data: {
                                    time: i()
                                }
                            }), n.xhr && 0 === n.xhr.status) return Jt(e, t);
                        t(n)
                    }
                })
            },
            getRewards: function (n, e) {
                var t = w();
                return it.track("rewards:start", {
                    type: Mt
                }), Re({
                    url: Y(jt("checkout/rewards"), n),
                    callback: function (n) {
                        it.track("rewards:end", {
                            type: Mt,
                            data: {
                                time: t()
                            }
                        }), e(n)
                    }
                })
            }
        };

        function Qt(n) {
            if (n) {
                var t = n.get,
                    i = {},
                    e = t("key");
                e && (i.key_id = e);
                var a = [t("currency")],
                    o = t("display_currency"),
                    r = t("display_amount");
                return o && ("" + r).length && a.push(o), i.currency = a, hn(["order_id", "customer_id", "invoice_id", "payment_link_id", "subscription_id", "auth_link_id", "recurring", "subscription_card_change", "account_id", "contact_id", "checkout_config_id", "amount"], function (n) {
                    var e = t(n);
                    e && (i[n] = e)
                }), i["_[build]"] = 11539, i["_[checkout_id]"] = n.id, i["_[library]"] = Qe.props.library, i["_[platform]"] = Qe.props.platform, i
            }
        }
        Vt.isLiveMode = function () {
            var n = this.preferences;
            return !n && /^rzp_l/.test(this.get("key")) || n && "live" === n.mode
        }, Vt.calculateFees = function (n) {
            var i = this;
            return new Ce(function (e, t) {
                n = At(n, i), Re.post({
                    url: jt("payments/calculate/fees"),
                    data: n,
                    callback: function (n) {
                        return (n.error ? t : e)(n)
                    }
                })
            })
        };
        var Xt = {
            notes: function (n) {
                if (T(n) && 15 < x(W(n))) return "At most 15 notes are allowed"
            },
            amount: function (n, e) {
                var t, i, a = e.display_currency || e.currency || "INR",
                    o = Ht(a),
                    r = o.minimum,
                    m = "";
                if (o.decimals && o.minor ? m = " " + o.minor : o.major && (m = " " + o.major), void 0 === (i = r) && (i = 100), (/[^0-9]/.test(t = n) || !(i <= (t = f(t, 10)))) && !e.recurring) return "should be passed in integer" + m + ". Minimum value is " + r + m + ", i.e. " + Yt(r, a)
            },
            currency: function (n) {
                if (!pn(Ut, n)) return "The provided currency is not currently supported"
            },
            display_currency: function (n) {
                if (!(n in Zt) && n !== qt.defaults.display_currency) return "This display currency is not supported"
            },
            display_amount: function (n) {
                if (!(n = r(n).replace(/([^0-9.])/g, "")) && n !== qt.defaults.display_amount) return ""
            },
            payout: function (n, e) {
                if (n) {
                    if (!e.key) return "key is required for a Payout";
                    if (!e.contact_id) return "contact_id is required for a Payout"
                }
            }
        };
        qt.configure = function (n, e) {
            void 0 === e && (e = {}), Nn(gt(n, _t), function (n, e) {
                typeof _t[e] == typeof n && (_t[e] = n)
            }), e.library && (Qe.props.library = e.library), e.referer && (Qe.props.referer = e.referer)
        }, qt.defaults = _t, s.Razorpay = qt, _t.timeout = 0, _t.name = "", _t.partnership_logo = "", _t.nativeotp = !0, _t.remember_customer = !1, _t.personalization = !1, _t.paused = !1, _t.fee_label = "", _t.min_amount_label = "", _t.partial_payment = {
            min_amount_label: "",
            full_amount_label: "",
            partial_amount_label: "",
            partial_amount_description: "",
            select_partial: !1
        }, _t.method = {
            netbanking: null,
            card: !0,
            credit_card: !0,
            debit_card: !0,
            cardless_emi: null,
            wallet: null,
            emi: !0,
            upi: null,
            upi_intent: !0,
            qr: !0,
            bank_transfer: !0,
            upi_otm: !0
        }, _t.prefill = {
            amount: "",
            wallet: "",
            provider: "",
            method: "",
            name: "",
            contact: "",
            email: "",
            vpa: "",
            "card[number]": "",
            "card[expiry]": "",
            "card[cvv]": "",
            bank: "",
            "bank_account[name]": "",
            "bank_account[account_number]": "",
            "bank_account[account_type]": "",
            "bank_account[ifsc]": "",
            auth_type: ""
        }, _t.features = {
            cardsaving: !0
        }, _t.readonly = {
            contact: !1,
            email: !1,
            name: !1
        }, _t.hidden = {
            contact: !1,
            email: !1
        }, _t.modal = {
            confirm_close: !1,
            ondismiss: bn,
            onhidden: bn,
            escape: !0,
            animation: !s.matchMedia("(prefers-reduced-motion: reduce)").matches,
            backdropclose: !1,
            handleback: !0
        }, _t.external = {
            wallets: [],
            handler: bn
        }, _t.theme = {
            upi_only: !1,
            color: "",
            backdrop_color: "rgba(0,0,0,0.6)",
            image_padding: !0,
            image_frame: !0,
            close_button: !0,
            close_method_back: !1,
            hide_topbar: !1,
            branding: "",
            debit_card: !1
        }, _t._ = {
            integration: null,
            integration_version: null,
            integration_parent_version: null
        }, _t.config = {
            display: {}
        };
        var ni, ei, ti, ii, ai = s.screen,
            oi = s.scrollTo,
            ri = ct,
            mi = {
                overflow: "",
                metas: null,
                orientationchange: function () {
                    mi.resize.call(this), mi.scroll.call(this)
                },
                resize: function () {
                    var n = s.innerHeight || ai.height;
                    li.container.style.position = n < 450 ? "absolute" : "fixed", this.el.style.height = d.max(n, 460) + "px"
                },
                scroll: function () {
                    var n;
                    "number" == typeof s.pageYOffset && (s.innerHeight < 460 ? (n = 460 - s.innerHeight, s.pageYOffset > 120 + n && he(n)) : this.isFocused || he(0))
                }
            };

        function ui() {
            return mi.metas || (mi.metas = se('head meta[name=viewport],head meta[name="theme-color"]')), mi.metas
        }

        function ci(n) {
            try {
                li.backdrop.style.background = n
            } catch (n) {}
        }

        function li(n) {
            if (ni = c.body, ei = c.head, ti = ni.style, n) return this.getEl(n), this.openRzp(n);
            this.getEl(), this.time = O()
        }
        li.prototype = {
            getEl: function (n) {
                var e, t, i, a, o, r;
                return this.el || (t = {
                    style: "opacity: 1; height: 100%; position: relative; background: none; display: block; border: 0 none transparent; margin: 0px; padding: 0px; z-index: 2;",
                    allowtransparency: !0,
                    frameborder: 0,
                    width: "100%",
                    height: "100%",
                    allowpaymentrequest: !0,
                    src: (i = n, o = Ct.frame, r = F() < .1, o || (o = jt("checkout"), (a = Qt(i)) ? o = Y(o, a) : (o += "/public", r && (o += "/canary"))), r && (o = Y(o, {
                        canary: 1
                    })), o),
                    class: "razorpay-checkout-frame"
                }, this.el = (e = En("iframe"), Wn(t)(e))), this.el
            },
            openRzp: function (n) {
                var e, t, i, a, o, r = (e = this.el, qn({
                        width: "100%",
                        height: "100%"
                    })(e)),
                    m = n.get("parent"),
                    u = (m = m && J(m)) || li.container;
                ! function (n, e) {
                    if (!ii) try {
                        var t;
                        (ii = c.createElement("div")).className = "razorpay-loader";
                        var i = "margin:-25px 0 0 -25px;height:50px;width:50px;animation:rzp-rot 1s infinite linear;-webkit-animation:rzp-rot 1s infinite linear;border: 1px solid rgba(255, 255, 255, 0.2);border-top-color: rgba(255, 255, 255, 0.7);border-radius: 50%;";
                        i += e ? "margin: 100px auto -150px;border: 1px solid rgba(0, 0, 0, 0.2);border-top-color: rgba(0, 0, 0, 0.7);" : "position:absolute;left:50%;top:50%;", ii.setAttribute("style", i), t = ii, $n(n)(t)
                    } catch (n) {}
                }(u, m), n !== this.rzp && (xn(r) !== u && (t = u, Hn(r)(t)), this.rzp = n), m ? (i = r, jn("minHeight", "530px")(i), this.embedded = !0) : (a = u, o = jn("display", "block")(a), Qn(o), ci(n.get("theme.backdrop_color")), /^rzp_t/.test(n.get("key")) && li.ribbon && (li.ribbon.style.opacity = 1), this.setMetaAndOverflow()), this.bind(), this.onload()
            },
            makeMessage: function () {
                var n = this.rzp,
                    t = n.get(),
                    e = {
                        integration: Qe.props.integration,
                        referer: Qe.props.referer || b.href,
                        options: t,
                        library: Qe.props.library,
                        id: n.id
                    };
                return n.metadata && (e.metadata = n.metadata), Nn(n.modal.options, function (n, e) {
                        t["modal." + e] = n
                    }), this.embedded && (delete t.parent, e.embedded = !0),
                    function (n) {
                        var e, t, i = n.image;
                        if (i && N(i)) {
                            if (U(i)) return;
                            i.indexOf("http") && (e = b.protocol + "//" + b.hostname + (b.port ? ":" + b.port : ""), t = "", "/" !== i[0] && "/" !== (t += b.pathname.replace(/[^/]*$/g, ""))[0] && (t = "/" + t), n.image = e + t + i)
                        }
                    }(t), e
            },
            close: function () {
                ci(""), li.ribbon && (li.ribbon.style.opacity = 0),
                    function (n) {
                        n && hn(n, Un);
                        var e = ui();
                        e && hn(e, $n(ei))
                    }(this.$metas), ti.overflow = mi.overflow, this.unbind(), ri && oi(0, mi.oldY), Qe.flush()
            },
            bind: function () {
                var n, i = this;
                this.listeners || (this.listeners = [], n = {}, ri && (n.orientationchange = mi.orientationchange, this.rzp.get("parent") || (n.resize = mi.resize)), Nn(n, function (n, e) {
                    var t;
                    i.listeners.push((t = window, V(e, gn(n, i))(t)))
                }))
            },
            unbind: function () {
                var n = this.listeners;
                hn(n, function (n) {
                    return n()
                }), this.listeners = null
            },
            setMetaAndOverflow: function () {
                var n, e;
                ei && (hn(ui(), function (n) {
                    return Un(n)
                }), this.$metas = [(n = En("meta"), Wn({
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                })(n)), (e = En("meta"), Wn({
                    name: "theme-color",
                    content: this.rzp.get("theme.color")
                })(e))], hn(this.$metas, $n(ei)), mi.overflow = ti.overflow, ti.overflow = "hidden", ri && (mi.oldY = s.pageYOffset, s.scrollTo(0, 0), mi.orientationchange.call(this)))
            },
            postMessage: function (n) {
                n.id = this.rzp.id, n = Ln(n), this.el.contentWindow.postMessage(n, "*")
            },
            onmessage: function (n) {
                var e, t, i = Bn(n.data);
                i && (e = i.event, t = this.rzp, n.origin && "frame" === i.source && n.source === this.el.contentWindow && (i = i.data, this["on" + e](i), "dismiss" !== e && "fault" !== e || it.track(e, {
                    data: i,
                    r: t,
                    immediately: !0
                })))
            },
            onload: function () {
                this.rzp && this.postMessage(this.makeMessage())
            },
            onfocus: function () {
                this.isFocused = !0
            },
            onblur: function () {
                this.isFocused = !1, mi.orientationchange.call(this)
            },
            onrender: function () {
                ii && (Un(ii), ii = null), this.rzp.emit("render")
            },
            onevent: function (n) {
                this.rzp.emit(n.event, n.data)
            },
            onredirect: function (n) {
                Qe.flush(), n.target || (n.target = this.rzp.get("target") || "_top"),
                    function (n) {
                        if (!n.target && s !== s.parent) return s.Razorpay.sendMessage({
                            event: "redirect",
                            data: n
                        });
                        de(n.url, n.content, n.method, n.target)
                    }(n)
            },
            onsubmit: function (e) {
                Qe.flush();
                var t = this.rzp;
                "wallet" === e.method && hn(t.get("external.wallets"), function (n) {
                    if (n === e.wallet) try {
                        t.get("external.handler").call(t, e)
                    } catch (n) {}
                }), t.emit("payment.submit", {
                    method: e.method
                })
            },
            ondismiss: function (n) {
                this.close();
                var e = this.rzp.get("modal.ondismiss");
                L(e) && a(function () {
                    return e(n)
                })
            },
            onhidden: function () {
                Qe.flush(), this.afterClose();
                var n = this.rzp.get("modal.onhidden");
                L(n) && n()
            },
            oncomplete: function (n) {
                this.close();
                var e = this.rzp,
                    t = e.get("handler");
                it.track("checkout_success", {
                    r: e,
                    data: n,
                    immediately: !0
                }), L(t) && a(function () {
                    t.call(e, n)
                }, 200)
            },
            onpaymenterror: function (n) {
                Qe.flush();
                try {
                    this.rzp.emit("payment.error", n), this.rzp.emit("payment.failed", n)
                } catch (n) {}
            },
            onfailure: function (n) {
                this.ondismiss(), s.alert("Payment Failed.\n" + n.error.description), this.onhidden()
            },
            onfault: function (n) {
                var e = "Something went wrong.";
                N(n) ? e = n : B(n) && (n.message || n.description) && (e = n.message || n.description), Qe.flush(), this.rzp.close();
                var t = this.rzp.get("callback_url");
                (this.rzp.get("redirect") || vt) && t ? de(t, {
                    error: n
                }, "post") : s.alert("Oops! Something went wrong.\n" + e), this.afterClose()
            },
            afterClose: function () {
                li.container.style.display = "none"
            },
            onflush: function () {
                Qe.flush()
            }
        };
        var si, di = G(qt);

        function fi(e) {
            return function n() {
                return si ? e.call(this) : (a(gn(n, this), 99), this)
            }
        }! function n() {
            (si = c.body || c.getElementsByTagName("body")[0]) || a(n, 99)
        }();
        var hi, vi = c.currentScript || (hi = se("script"))[hi.length - 1];

        function pi(n) {
            var e, t = xn(vi),
                i = Hn((e = En(), Vn(fe(n))(e)))(t),
                a = Mn("onsubmit", bn)(i);
            Zn(a)
        }

        function _i(m) {
            var n, e = xn(vi),
                t = Hn((n = En("input"), An({
                    type: "submit",
                    value: m.get("buttontext"),
                    className: "razorpay-payment-button btn btn-primary"
                })(n)))(e);
            Mn("onsubmit", function (n) {
                n.preventDefault();
                var e = this.action,
                    t = this.method,
                    i = this.target,
                    a = m.get();
                if (N(e) && e && !a.callback_url) {
                    var o = {
                        url: e,
                        content: yn(this.querySelectorAll("[name]"), function (n, e) {
                            return n[e.name] = e.value, n
                        }, {}),
                        method: N(t) ? t : "get",
                        target: N(i) && i
                    };
                    try {
                        var r = v(Ln({
                            request: o,
                            options: Ln(a),
                            back: b.href
                        }));
                        a.callback_url = jt("checkout/onyx") + "?data=" + r
                    } catch (n) {}
                }
                return m.open(), !1
            })(t)
        }
        var yi, bi;

        function gi() {
            var n, e, t, i, a, o, r, m, u, c, l, s, d, f, h, v;
            return yi || (n = En(), e = Mn("className", "razorpay-container")(n), t = Mn("innerHTML", "<style>@keyframes rzp-rot{to{transform: rotate(360deg);}}@-webkit-keyframes rzp-rot{to{-webkit-transform: rotate(360deg);}}</style>")(e), i = qn({
                zIndex: 1e9,
                position: "fixed",
                top: 0,
                display: "none",
                left: 0,
                height: "100%",
                width: "100%",
                "-webkit-overflow-scrolling": "touch",
                "-webkit-backface-visibility": "hidden",
                "overflow-y": "visible"
            })(t), yi = $n(si)(i), d = li.container = yi, v = En(), h = Mn("className", "razorpay-backdrop")(v), f = qn({
                "min-height": "100%",
                transition: "0.3s ease-out",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            })(h), a = $n(d)(f), r = li.backdrop = a, l = "rotate(45deg)", s = "opacity 0.3s ease-in", c = En("span"), u = Mn("innerHTML", "Test Mode")(c), m = qn({
                "text-decoration": "none",
                background: "#D64444",
                border: "1px dashed white",
                padding: "3px",
                opacity: "0",
                "-webkit-transform": l,
                "-moz-transform": l,
                "-ms-transform": l,
                "-o-transform": l,
                transform: l,
                "-webkit-transition": s,
                "-moz-transition": s,
                transition: s,
                "font-family": "lato,ubuntu,helvetica,sans-serif",
                color: "white",
                position: "absolute",
                width: "200px",
                "text-align": "center",
                right: "-50px",
                top: "50px"
            })(u), o = $n(r)(m), li.ribbon = o), yi
        }

        function Di(n) {
            var e, t;
            return bi ? bi.openRzp(n) : (bi = new li(n), e = s, V("message", gn("onmessage", bi))(e), t = yi, Hn(bi.el)(t)), bi
        }
        qt.open = function (n) {
            return qt(n).open()
        }, di.postInit = function () {
            this.modal = {
                options: {}
            }, this.get("parent") && this.open()
        };
        var Si = di.onNew;
        di.onNew = function (n, e) {
            "payment.error" === n && Qe(this, "event_paymenterror", b.href), L(Si) && Si.call(this, n, e)
        }, di.open = fi(function () {
            this.metadata || (this.metadata = {}), this.metadata.openedAt = u.now();
            var n = this.checkoutFrame = Di(this);
            return Qe(this, "open"), n.el.contentWindow || (n.close(), n.afterClose(), s.alert("This browser is not supported.\nPlease try payment in another browser.")), "-new.js" === vi.src.slice(-7) && Qe(this, "oldscript", b.href), this
        }), di.resume = function (n) {
            var e = this.checkoutFrame;
            e && e.postMessage({
                event: "resume",
                data: n
            })
        }, di.close = function () {
            var n = this.checkoutFrame;
            n && n.postMessage({
                event: "close"
            })
        };
        var Ri = fi(function () {
            gi(), bi = Di();
            try {
                ! function () {
                    var a = {};
                    Nn(vi.attributes, function (n) {
                        var e, t, i = n.name.toLowerCase();
                        /^data-/.test(i) && (e = a, i = i.replace(/^data-/, ""), "true" === (t = n.value) ? t = !0 : "false" === t && (t = !1), /^notes\./.test(i) && (a.notes || (a.notes = {}), e = a.notes, i = i.replace(/^notes\./, "")), e[i] = t)
                    });
                    var n, e = a.key;
                    e && 0 < e.length && (a.handler = pi, n = qt(a), a.parent || _i(n))
                }()
            } catch (n) {}
        });
        s.addEventListener("rzp_error", function (n) {
            var e = n.detail;
            it.track("cfu_error", {
                data: {
                    error: e
                },
                immediately: !0
            })
        }), s.addEventListener("rzp_network_error", function (n) {
            var e = n.detail;
            e && "https://lumberjack.razorpay.com/v1/track" === e.baseUrl || it.track("network_error", {
                data: e,
                immediately: !0
            })
        }), Qe.props.library = "checkoutjs", _t.handler = function (n) {
            var e;
            !z(this, qt) || (e = this.get("callback_url")) && de(e, n, "post")
        }, _t.buttontext = "Pay Now", _t.parent = null, Xt.parent = function (n) {
            if (!J(n)) return "parent provided for embedded mode doesn't exist"
        }, Ri()
    }()
}();