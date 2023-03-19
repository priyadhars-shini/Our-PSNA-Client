(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    103: function (e, t, n) {
      e.exports = n(159);
    },
    147: function (e, t, n) {},
    153: function (e, t, n) {},
    156: function (e, t, n) {},
    159: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(1),
        a = n.n(r),
        o = n(29),
        i = n.n(o),
        c = n(11),
        l = n(68),
        u = n(102),
        s = n(101),
        f = n(26),
        p = Object(l.combineReducers)({
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_LOGIN_REQUEST":
                return { loading: !0 };
              case "USER_LOGIN_SUCCESS":
                return { loading: !1, userInfo: t.payload };
              case "USER_LOGIN_FAIL":
                return { loading: !1, error: t.payload };
              case "USER_LOGOUT":
                return {};
              default:
                return e;
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_REGISTER_REQUEST":
                return { loading: !0 };
              case "USER_REGISTER_SUCCESS":
                return { loading: !1, userInfo: t.payload };
              case "USER_REGISTER_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_REGISTER_REQUEST":
                return Object(f.a)({}, e, { loading: !0 });
              case "USER_REGISTER_SUCCESS":
                return { loading: !1, user: t.payload };
              case "USER_REGISTER_FAIL":
                return { loading: !1, error: t.payload };
              case "USER_REGISTER_RESET":
                return { user: {} };
              default:
                return e;
            }
          },
          userUpdateProfile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_UPDATE_PROFILE_REQUEST":
                return Object(f.a)({}, e, { loading: !0 });
              case "USER_UPDATE_PROFILE_SUCCESS":
                return { loading: !1, success: !0, userInfo: t.payload };
              case "USER_UPDATE_PROFILE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { users: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_LIST_REQUEST":
                return { loading: !0 };
              case "USER_LIST_SUCCESS":
                return { loading: !1, users: t.payload };
              case "USER_LIST_FAIL":
                return { loading: !1, error: t.payload };
              case "USER_LIST_RESET":
                return { users: [] };
              default:
                return e;
            }
          },
          userDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_DELETE_REQUEST":
                return { loading: !0 };
              case "USER_DELETE_SUCCESS":
                return { loading: !1, success: !0 };
              case "USER_DELETE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { user: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_UPDATE_REQUEST":
                return { loading: !0 };
              case "USER_UPDATE_SUCCESS":
                return { loading: !1, success: !0 };
              case "USER_UPDATE_FAIL":
                return { loading: !1, error: t.payload };
              case "USER_UPDATE_RESET":
                return { user: {} };
              default:
                return e;
            }
          },
          developerList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { developers: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_DEVELOPER_REQUEST":
                return { loading: !0 };
              case "USER_DEVELOPER_SUCCESS":
                return { loading: !1, developers: t.payload };
              case "USER_DEVELOPER_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          postList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { posts: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "POST_LIST_REQUEST":
                return { loading: !0, posts: [] };
              case "POST_LIST_SUCCESS":
                return {
                  loading: !1,
                  posts: t.payload.posts,
                  pages: t.payload.pages,
                  page: t.payload.page,
                };
              case "POST_LIST_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          postDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { post: { reviews: [] } },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "POST_DETAILS_REQUEST":
                return Object(f.a)({ loading: !0 }, e);
              case "POST_DETAILS_SUCCESS":
                return { loading: !1, post: t.payload };
              case "POST_DETAILS_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          postDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "POST_DELETE_REQUEST":
                return { loading: !0 };
              case "POST_DELETE_SUCCESS":
                return { loading: !1, success: !0 };
              case "POST_DELETE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          postCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "POST_CREATE_REQUEST":
                return { loading: !0 };
              case "POST_CREATE_SUCCESS":
                return { loading: !1, success: !0, post: t.payload };
              case "POST_CREATE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          postUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { POST: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "POST_UPDATE_REQUEST":
                return { loading: !0 };
              case "POST_UPDATE_SUCCESS":
                return { loading: !1, success: !0, post: t.payload };
              case "POST_UPDATE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          postReviewCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "POST_CREATE_REVIEW_REQUEST":
                return { loading: !0 };
              case "POST_CREATE_REVIEW_SUCCESS":
                return { loading: !1, success: !0 };
              case "POST_CREATE_REVIEW_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          postTopRated: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { POSTs: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "POST_TOP_REQUEST":
                return { loading: !0, POSTs: [] };
              case "POST_TOP_SUCCESS":
                return { loading: !1, POSTs: t.payload };
              case "POST_TOP_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          eventList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { events: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "EVENT_LIST_REQUEST":
                return { loading: !0, events: [] };
              case "EVENT_LIST_SUCCESS":
                return {
                  loading: !1,
                  events: t.payload.events,
                  pages: t.payload.pages,
                  page: t.payload.page,
                };
              case "EVENT_LIST_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          eventDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { event: { reviews: [] } },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "EVENT_DETAILS_REQUEST":
                return Object(f.a)({ loading: !0 }, e);
              case "EVENT_DETAILS_SUCCESS":
                return { loading: !1, event: t.payload };
              case "EVENT_DETAILS_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          eventDelete: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "EVENT_DELETE_REQUEST":
                return { loading: !0 };
              case "EVENT_DELETE_SUCCESS":
                return { loading: !1, success: !0 };
              case "EVENT_DELETE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          eventCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "EVENT_CREATE_REQUEST":
                return { loading: !0 };
              case "EVENT_CREATE_SUCCESS":
                return { loading: !1, success: !0, event: t.payload };
              case "EVENT_CREATE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          eventUpdate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { event: {} },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "EVENT_UPDATE_REQUEST":
                return { loading: !0 };
              case "EVENT_UPDATE_SUCCESS":
                return { loading: !1, success: !0, event: t.payload };
              case "EVENT_UPDATE_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          eventReviewCreate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "EVENT_CREATE_REVIEW_REQUEST":
                return { loading: !0 };
              case "EVENT_CREATE_REVIEW_SUCCESS":
                return { loading: !1, success: !0 };
              case "EVENT_CREATE_REVIEW_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          eventTopRated: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { events: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "EVENT_TOP_REQUEST":
                return { loading: !0, events: [] };
              case "EVENT_TOP_SUCCESS":
                return { loading: !1, events: t.payload };
              case "EVENT_TOP_FAIL":
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
        }),
        h = {
          userLogin: {
            userInfo: localStorage.getItem("userInfo")
              ? JSON.parse(localStorage.getItem("userInfo"))
              : null,
          },
        },
        m = [u.a],
        d = Object(l.createStore)(
          p,
          h,
          Object(s.composeWithDevTools)(l.applyMiddleware.apply(void 0, m))
        ),
        v = n(4),
        E = n(5),
        g = n(168),
        y = n(169),
        b = n(43),
        w = n(177),
        _ = n(17),
        S = n(18),
        x = n(20),
        L = n(14),
        O = n(19),
        j = n(180),
        T = n(167),
        k = n(120),
        C = n(9),
        N = n(176),
        I = function (e) {
          var t = e.history,
            n = Object(r.useState)(""),
            o = Object(C.a)(n, 2),
            i = o[0],
            c = o[1],
            l = function (e) {
              e.preventDefault(),
                i.trim() ? t.push("/profile/".concat(i)) : t.push("/"),
                c("");
            };
          return a.a.createElement(
            N.a,
            { onSubmit: l, className: "d-flex", inline: !0 },
            a.a.createElement(N.a.Control, {
              type: "search",
              name: "q",
              onChange: function (e) {
                return c(e.target.value);
              },
              placeholder: "Search",
              className: "mr-sm-2 ml-sm-5 me-2",
              "aria-label": "Search",
            }),
            a.a.createElement(
              k.a,
              { onClick: l, variant: "outline-success" },
              "Search"
            )
          );
        },
        R = n(10),
        U = n(70),
        A = n.n(U),
        P = A.a.create({ baseURL: "https://our-psna-campus.onrender.com" });
      function F() {
        F = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var G = function (e) {
          return (function () {
            var t = Object(R.a)(
              F().mark(function t(n, r) {
                var a, o, i, c, l;
                return F().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            n({ type: "USER_REGISTER_REQUEST" }),
                            (a = r()),
                            (o = a.userLogin.userInfo),
                            (i = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(o.token),
                              },
                            }),
                            (t.next = 6),
                            P.get("/users/".concat(e), i)
                          );
                        case 6:
                          (c = t.sent),
                            (l = c.data),
                            n({ type: "USER_REGISTER_SUCCESS", payload: l }),
                            (t.next = 14);
                          break;
                        case 11:
                          (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            n({
                              type: "USER_REGISTER_FAIL",
                              payload:
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message,
                            });
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })();
        },
        D = function (e) {
          return (function () {
            var t = Object(R.a)(
              F().mark(function t(n, r) {
                var a, o, i, c, l;
                return F().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.log(e),
                            (t.prev = 1),
                            n({ type: "USER_UPDATE_PROFILE_REQUEST" }),
                            (a = r()),
                            (o = a.userLogin.userInfo),
                            (e._id = o._id),
                            (i = {
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(o.token),
                              },
                            }),
                            (t.next = 8),
                            P.put("/users/profile", e, i)
                          );
                        case 8:
                          (c = t.sent),
                            (l = c.data),
                            n({
                              type: "USER_UPDATE_PROFILE_SUCCESS",
                              payload: l,
                            }),
                            (t.next = 16);
                          break;
                        case 13:
                          (t.prev = 13),
                            (t.t0 = t.catch(1)),
                            n({
                              type: "USER_UPDATE_PROFILE_FAIL",
                              payload:
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message,
                            });
                        case 16:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 13]]
                );
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })();
        },
        z = "psnacet.edu.in",
        V = (function (e) {
          function t() {
            var e, n;
            Object(_.a)(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              ((n = Object(x.a)(
                this,
                (e = Object(L.a)(t)).call.apply(e, [this].concat(a))
              )).onAuthChange = function (e) {
                e
                  ? ((n.username = window.gapi.auth2
                      .getAuthInstance()
                      .currentUser.get()
                      .getBasicProfile()
                      .getEmail()
                      .split("@")[0]),
                    console.log(n.props.isSignedIn),
                    n.props.login(n.username).then(function () {
                      if (
                        window.gapi.auth2
                          .getAuthInstance()
                          .currentUser.get()
                          .getHostedDomain() === z &&
                        !n.props.isSignedIn
                      ) {
                        var e = window.gapi.auth2
                            .getAuthInstance()
                            .currentUser.get()
                            .getBasicProfile(),
                          t = e.getName(),
                          r = e.getGivenName().match(/^\d/) ? 1 : 2,
                          a = e.getEmail().split("@")[0];
                        console.log(t, r, a),
                          n.props.register(t, r, a),
                          (n.username = a);
                      }
                    }))
                  : n.props.logout();
              }),
              (n.onSignInClick = function () {
                n.auth.signIn(), console.log(n.props.isSignedIn);
              }),
              (n.onSignOutClick = function () {
                n.auth.signOut();
              }),
              n
            );
          }
          return (
            Object(O.a)(t, e),
            Object(S.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  window.gapi.load("client:auth2", function () {
                    window.gapi.client
                      .init({
                        clientId:
                          "643531290096-d0qt2hmkj5bjkgq986cf43qo6mtstr03.apps.googleusercontent.com",
                        scope: "email",
                      })
                      .then(function () {
                        (e.auth = window.gapi.auth2.getAuthInstance()),
                          e.onAuthChange(e.auth.isSignedIn.get()),
                          e.auth.isSignedIn.listen(e.onAuthChange);
                      });
                  });
                },
              },
              {
                key: "renderAuthButton",
                value: function () {
                  return this.props.isSignedIn
                    ? a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement(w.a.Toggle, {
                          "aria-controls": "basic-navbar-nav",
                        }),
                        a.a.createElement(
                          w.a.Collapse,
                          { id: "basic-navbar-nav" },
                          a.a.createElement(
                            j.a,
                            { className: "me-5" },
                            a.a.createElement(E.d, {
                              render: function (e) {
                                var t = e.history;
                                return a.a.createElement(I, { history: t });
                              },
                            })
                          ),
                          a.a.createElement(
                            j.a,
                            { className: "ms-5" },
                            a.a.createElement(
                              b.LinkContainer,
                              { to: "/" },
                              a.a.createElement(
                                j.a.Link,
                                null,
                                a.a.createElement("i", {
                                  className: "fas fa-home",
                                }),
                                " Home"
                              )
                            ),
                            a.a.createElement(
                              b.LinkContainer,
                              { to: "/chats" },
                              a.a.createElement(
                                j.a.Link,
                                null,
                                a.a.createElement("i", {
                                  className: "fas fa-comment-alt",
                                }),
                                " Message"
                              )
                            ),
                            a.a.createElement(
                              b.LinkContainer,
                              { to: "/event" },
                              a.a.createElement(
                                j.a.Link,
                                null,
                                a.a.createElement("i", {
                                  className: "fas fa-calendar-week",
                                }),
                                " Event"
                              )
                            ),
                            a.a.createElement(
                              T.a,
                              {
                                id: "nav-dropdown-dark-example",
                                title: "".concat(this.username),
                                menuVariant: "dark",
                              },
                              a.a.createElement(
                                b.LinkContainer,
                                { to: "/profile" },
                                a.a.createElement(
                                  T.a.Item,
                                  null,
                                  a.a.createElement("i", {
                                    className: "fas fa-user",
                                  }),
                                  " Profile"
                                )
                              ),
                              a.a.createElement(
                                b.LinkContainer,
                                { to: "/clubs" },
                                a.a.createElement(
                                  T.a.Item,
                                  null,
                                  a.a.createElement("i", {
                                    className: "fas fa-users",
                                  }),
                                  " Clubs"
                                )
                              ),
                              a.a.createElement(
                                b.LinkContainer,
                                { to: "/settings" },
                                a.a.createElement(
                                  T.a.Item,
                                  null,
                                  a.a.createElement("i", {
                                    className: "fas fa-cogs",
                                  }),
                                  " Settings"
                                )
                              ),
                              a.a.createElement(
                                b.LinkContainer,
                                { to: "/help" },
                                a.a.createElement(
                                  T.a.Item,
                                  null,
                                  a.a.createElement("i", {
                                    className: "fas fa-question-circle",
                                  }),
                                  " Help"
                                )
                              ),
                              a.a.createElement(T.a.Divider, null),
                              a.a.createElement(
                                b.LinkContainer,
                                { to: "/" },
                                a.a.createElement(
                                  T.a.Item,
                                  { onClick: this.onSignOutClick },
                                  a.a.createElement("i", {
                                    className: "fas fa-sign-out-alt",
                                  }),
                                  " Logout"
                                )
                              )
                            )
                          )
                        )
                      )
                    : a.a.createElement(
                        k.a,
                        {
                          onClick: this.onSignInClick,
                          variant: "danger",
                          className: "text-center",
                        },
                        a.a.createElement("i", {
                          className: "fab fa-google-plus fa-2x me-3",
                        }),
                        " ",
                        a.a.createElement("span", null, " Sign In with Google")
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  return a.a.createElement(
                    "div",
                    null,
                    this.renderAuthButton()
                  );
                },
              },
            ]),
            t
          );
        })(a.a.Component),
        B = Object(c.b)(
          function (e) {
            return { isSignedIn: e.userLogin.userInfo };
          },
          {
            login: function (e) {
              return (function () {
                var t = Object(R.a)(
                  F().mark(function t(n) {
                    var r, a, o;
                    return F().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                n({ type: "USER_LOGIN_REQUEST" }),
                                (r = {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (t.next = 5),
                                P.post("/users/login", { username: e }, r)
                              );
                            case 5:
                              (a = t.sent),
                                (o = a.data),
                                n({ type: "USER_LOGIN_SUCCESS", payload: o }),
                                localStorage.setItem(
                                  "userInfo",
                                  JSON.stringify(o)
                                ),
                                (t.next = 14);
                              break;
                            case 11:
                              (t.prev = 11),
                                (t.t0 = t.catch(0)),
                                n({
                                  type: "USER_LOGIN_FAIL",
                                  payload:
                                    t.t0.response && t.t0.response.data.message
                                      ? t.t0.response.data.message
                                      : t.t0.message,
                                });
                            case 14:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 11]]
                    );
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })();
            },
            logout: function () {
              return function (e) {
                localStorage.removeItem("userInfo"),
                  e({ type: "USER_LOGOUT" }),
                  e({ type: "USER_REGISTER_RESET" }),
                  e({ type: "USER_LIST_RESET" });
              };
            },
            register: function (e, t, n) {
              return (function () {
                var r = Object(R.a)(
                  F().mark(function r(a) {
                    var o, i, c;
                    return F().wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (
                                (r.prev = 0),
                                a({ type: "USER_REGISTER_REQUEST" }),
                                (o = {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }),
                                (r.next = 5),
                                P.post(
                                  "/users",
                                  { name: e, userType: t, username: n },
                                  o
                                )
                              );
                            case 5:
                              (i = r.sent),
                                (c = i.data),
                                a({
                                  type: "USER_REGISTER_SUCCESS",
                                  payload: c,
                                }),
                                a({ type: "USER_LOGIN_SUCCESS", payload: c }),
                                localStorage.setItem(
                                  "userInfo",
                                  JSON.stringify(c)
                                ),
                                (r.next = 15);
                              break;
                            case 12:
                              (r.prev = 12),
                                (r.t0 = r.catch(0)),
                                a({
                                  type: "USER_REGISTER_FAIL",
                                  payload:
                                    r.t0.response && r.t0.response.data.message
                                      ? r.t0.response.data.message
                                      : r.t0.message,
                                });
                            case 15:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[0, 12]]
                    );
                  })
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })();
            },
          }
        )(V),
        Q = function (e) {
          var t = e.setUser;
          return a.a.createElement(
            "header",
            null,
            a.a.createElement(
              w.a,
              {
                sticky: "top",
                bg: "dark",
                variant: "dark",
                expand: "lg",
                collapseOnSelect: !0,
              },
              a.a.createElement(
                g.a,
                null,
                a.a.createElement(
                  b.LinkContainer,
                  { to: "/" },
                  a.a.createElement(
                    w.a.Brand,
                    null,
                    a.a.createElement("img", {
                      src: "logo4.png",
                      alt: "Our Campus",
                      width: "45",
                      height: "30",
                      className: "d-inline-block align-top",
                    }),
                    " ",
                    "Our Campus"
                  )
                ),
                a.a.createElement(B, { setUser: t })
              )
            )
          );
        },
        H = n(119),
        Y = function () {
          return a.a.createElement(
            "footer",
            null,
            a.a.createElement(
              g.a,
              null,
              a.a.createElement(
                y.a,
                null,
                a.a.createElement(
                  H.a,
                  { className: "text-center py-3" },
                  "Copyright \xa9 Our Campus"
                )
              )
            )
          );
        },
        q = n(175),
        W = n(181),
        M = n(172);
      function K() {
        K = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var J = n(170),
        X = function (e) {
          var t = e.variant,
            n = e.children;
          return a.a.createElement(
            J.a,
            { variant: t, className: "text-center" },
            n
          );
        };
      X.defaultProps = { variant: "info" };
      var Z = X,
        $ = n(171),
        ee = function () {
          return a.a.createElement(
            $.a,
            {
              animation: "border",
              role: "status",
              style: {
                width: "100px",
                height: "100px",
                margin: "auto",
                display: "block",
              },
            },
            a.a.createElement("span", { className: "sr-only" }, "Loading")
          );
        };
      n(143);
      function te() {
        te = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var ne = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return (function () {
            var t = Object(R.a)(
              te().mark(function t(n) {
                var r, a;
                return te().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            n({ type: "EVENT_LIST_REQUEST" }),
                            (t.next = 4),
                            P.get("/events?keyword=".concat(e))
                          );
                        case 4:
                          (r = t.sent),
                            (a = r.data),
                            n({ type: "EVENT_LIST_SUCCESS", payload: a }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            n({
                              type: "EVENT_LIST_FAIL",
                              payload:
                                t.t0.response && t.t0.response.data.message
                                  ? t.t0.response.data.message
                                  : t.t0.message,
                            });
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        },
        re = function (e) {
          var t = e.children;
          return a.a.createElement(
            g.a,
            null,
            a.a.createElement(
              y.a,
              { classname: "justify-content-md-center" },
              a.a.createElement(H.a, { xs: 12, md: 6 }, t)
            )
          );
        },
        ae = function (e) {
          var t = e.history,
            n = e.post,
            o = e.event,
            i = e.onHide,
            l = Object(r.useState)(""),
            u = Object(C.a)(l, 2),
            s = u[0],
            f = u[1],
            p = Object(r.useState)(""),
            h = Object(C.a)(p, 2),
            m = h[0],
            d = h[1],
            v = Object(c.c)(),
            E = Object(c.d)(function (e) {
              return e.userLogin;
            }).userInfo,
            g = Object(c.d)(function (e) {
              return e.postUpdate;
            }),
            y = g.loading,
            b = g.success;
          Object(r.useEffect)(
            function () {
              E
                ? E.name
                  ? (n && (f(n.caption), d(n._id)),
                    o && (f(o.caption), d(o._id)))
                  : v(G("Profile"))
                : t.push("/login");
            },
            [v, t, E, n, o]
          );
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              re,
              null,
              a.a.createElement("h1", null, "Edit ", n && "Post", o && "Event"),
              b &&
                a.a.createElement(
                  Z,
                  { variant: "success" },
                  n && "Post Updated",
                  o && "Event Updated"
                ),
              y && a.a.createElement(ee, null),
              a.a.createElement(
                N.a,
                {
                  onSubmit: function (e) {
                    e.preventDefault(),
                      n &&
                        v(
                          (function (e) {
                            return (function () {
                              var t = Object(R.a)(
                                K().mark(function t(n, r) {
                                  var a, o, i, c, l;
                                  return K().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              n({
                                                type: "POST_UPDATE_REQUEST",
                                              }),
                                              (a = r()),
                                              (o = a.userLogin.userInfo),
                                              (i = {
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer ".concat(o.token),
                                                },
                                              }),
                                              (t.next = 6),
                                              P.put(
                                                "/posts/".concat(e._id),
                                                e,
                                                i
                                              )
                                            );
                                          case 6:
                                            (c = t.sent),
                                              (l = c.data),
                                              n({
                                                type: "POST_UPDATE_SUCCESS",
                                                payload: l,
                                              }),
                                              (t.next = 14);
                                            break;
                                          case 11:
                                            (t.prev = 11),
                                              (t.t0 = t.catch(0)),
                                              n({
                                                type: "POST_UPDATE_FAIL",
                                                payload:
                                                  t.t0.response &&
                                                  t.t0.response.data.message
                                                    ? t.t0.response.data.message
                                                    : t.t0.message,
                                              });
                                          case 14:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 11]]
                                  );
                                })
                              );
                              return function (e, n) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })({ caption: s, _id: m })
                        ),
                      o &&
                        v(
                          (function (e) {
                            return (function () {
                              var t = Object(R.a)(
                                te().mark(function t(n, r) {
                                  var a, o, i, c, l;
                                  return te().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              n({
                                                type: "EVENT_UPDATE_REQUEST",
                                              }),
                                              (a = r()),
                                              (o = a.userLogin.userInfo),
                                              (i = {
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                  Authorization:
                                                    "Bearer ".concat(o.token),
                                                },
                                              }),
                                              (t.next = 6),
                                              P.put(
                                                "/events/".concat(e._id),
                                                { event: e, userInfo: o },
                                                i
                                              )
                                            );
                                          case 6:
                                            (c = t.sent),
                                              (l = c.data),
                                              n({
                                                type: "EVENT_UPDATE_SUCCESS",
                                                payload: l,
                                              }),
                                              (t.next = 14);
                                            break;
                                          case 11:
                                            (t.prev = 11),
                                              (t.t0 = t.catch(0)),
                                              n({
                                                type: "EVENT_UPDATE_FAIL",
                                                payload:
                                                  t.t0.response &&
                                                  t.t0.response.data.message
                                                    ? t.t0.response.data.message
                                                    : t.t0.message,
                                              });
                                          case 14:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 11]]
                                  );
                                })
                              );
                              return function (e, n) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })({ caption: s, _id: m })
                        ),
                      i();
                  },
                },
                a.a.createElement(
                  N.a.Group,
                  { controlId: "Caption" },
                  a.a.createElement(N.a.Label, null, "Caption"),
                  a.a.createElement(N.a.Control, {
                    type: "Caption",
                    placeholder: "Enter Caption",
                    value: s,
                    onChange: function (e) {
                      return f(e.target.value);
                    },
                  })
                ),
                a.a.createElement("br", null),
                a.a.createElement(
                  k.a,
                  { type: "submit", variant: "primary" },
                  "Update"
                )
              )
            )
          );
        },
        oe = Object(c.b)(function (e) {
          return { profile: e.userLogin.userInfo };
        })(function (e) {
          var t = e.post,
            n = e.profile,
            o = Object(c.c)(),
            i = Object(r.useState)(!1),
            l = Object(C.a)(i, 2),
            u = l[0],
            s = l[1],
            p = Object(r.useState)(t.likes.includes(n._id)),
            h = Object(C.a)(p, 2),
            m = h[0],
            d = h[1],
            E = Object(r.useState)(!1),
            g = Object(C.a)(E, 2),
            b = g[0],
            w = g[1],
            _ = Object(r.useState)(""),
            S = Object(C.a)(_, 2),
            x = S[0],
            L = S[1];
          var O = function (e) {
            var r, a;
            e.preventDefault(),
              o(
                ((r = t._id),
                (a = { comment: x }),
                (function () {
                  var e = Object(R.a)(
                    K().mark(function e(t, n) {
                      var o, i, c, l, u;
                      return K().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  t({ type: "POST_CREATE_REVIEW_REQUEST" }),
                                  (o = n()),
                                  (i = o.userLogin.userInfo),
                                  (c = i._id),
                                  (l = i.username),
                                  (a = Object(f.a)({}, a, {
                                    userId: c,
                                    username: l,
                                  })),
                                  (u = {
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization: "Bearer ".concat(i.token),
                                    },
                                  }),
                                  (e.next = 9),
                                  P.post("/posts/".concat(r, "/comments"), a, u)
                                );
                              case 9:
                                t({ type: "POST_CREATE_REVIEW_SUCCESS" }),
                                  (e.next = 15);
                                break;
                              case 12:
                                (e.prev = 12),
                                  (e.t0 = e.catch(0)),
                                  t({
                                    type: "POST_CREATE_REVIEW_FAIL",
                                    payload:
                                      e.t0.response &&
                                      e.t0.response.data.message
                                        ? e.t0.response.data.message
                                        : e.t0.message,
                                  });
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 12]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })())
              );
            var i = n.username;
            t.comments.push({ comment: x, name: i }), L("");
          };
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              function (e) {
                return a.a.createElement(
                  q.a,
                  Object.assign({}, e, {
                    size: "lg",
                    "aria-labelledby": "contained-modal-title-vcenter",
                    centered: !0,
                  }),
                  a.a.createElement(
                    q.a.Header,
                    { closeButton: !0 },
                    a.a.createElement(
                      q.a.Title,
                      { id: "contained-modal-title-vcenter" },
                      "Edit Post"
                    )
                  ),
                  a.a.createElement(
                    q.a.Body,
                    null,
                    a.a.createElement(ae, { post: e.post, onHide: e.onHide })
                  ),
                  a.a.createElement(
                    q.a.Footer,
                    null,
                    a.a.createElement(k.a, { onClick: e.onHide }, "Close")
                  )
                );
              },
              {
                post: t,
                show: u,
                onHide: function () {
                  return s(!1);
                },
              }
            ),
            a.a.createElement(
              W.a,
              {
                bg: "dark",
                text: "white",
                className: "my-3 p-3 rounded",
                style: { width: "50vw" },
              },
              a.a.createElement(
                W.a.Header,
                null,
                a.a.createElement(
                  y.a,
                  null,
                  a.a.createElement(
                    H.a,
                    null,
                    a.a.createElement(M.a, {
                      src: t.dp,
                      width: "48px",
                      height: "48px",
                      roundedCircle: !0,
                    })
                  ),
                  a.a.createElement(
                    H.a,
                    null,
                    a.a.createElement(
                      v.Link,
                      {
                        to: "/profile/".concat(t.username),
                        className: "username me-auto",
                      },
                      t.username
                    )
                  ),
                  a.a.createElement(
                    H.a,
                    { className: "text-center" },
                    n &&
                      n.username === t.username &&
                      a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement(
                          k.a,
                          {
                            onClick: function () {
                              s(!0);
                            },
                            className: "mx-auto py-1 px-2 me-2",
                            size: "small",
                            variant: "info",
                          },
                          a.a.createElement("small", null, "Edit")
                        ),
                        a.a.createElement(
                          k.a,
                          {
                            onClick: function () {
                              var e;
                              o(
                                ((e = t._id),
                                (function () {
                                  var t = Object(R.a)(
                                    K().mark(function t(n, r) {
                                      var a, o, i;
                                      return K().wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  n({
                                                    type: "POST_DELETE_REQUEST",
                                                  }),
                                                  (a = r()),
                                                  (o = a.userLogin.userInfo),
                                                  (i = {
                                                    headers: {
                                                      Authorization:
                                                        "Bearer ".concat(
                                                          o.token
                                                        ),
                                                      username: o.username,
                                                    },
                                                  }),
                                                  (t.next = 6),
                                                  P.delete(
                                                    "/posts/".concat(e),
                                                    i
                                                  )
                                                );
                                              case 6:
                                                n({
                                                  type: "POST_DELETE_SUCCESS",
                                                }),
                                                  (t.next = 12);
                                                break;
                                              case 9:
                                                (t.prev = 9),
                                                  (t.t0 = t.catch(0)),
                                                  n({
                                                    type: "POST_DELETE_FAIL",
                                                    payload:
                                                      t.t0.response &&
                                                      t.t0.response.data.message
                                                        ? t.t0.response.data
                                                            .message
                                                        : t.t0.message,
                                                  });
                                              case 12:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 9]]
                                      );
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })())
                              );
                            },
                            className: "mx-auto py-1 px-2",
                            size: "small",
                            variant: "danger",
                          },
                          a.a.createElement("small", null, "Delete")
                        )
                      )
                  )
                )
              ),
              a.a.createElement(
                v.Link,
                { to: "/post/".concat(t._id) },
                a.a.createElement(W.a.Img, {
                  src: t.image,
                  variant: "top",
                  style: {
                    width: "90%",
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                  },
                })
              ),
              a.a.createElement(
                W.a.Body,
                null,
                a.a.createElement(
                  W.a.Title,
                  { as: "div" },
                  a.a.createElement("strong", null, t.caption)
                ),
                a.a.createElement(
                  k.a,
                  {
                    variant: "dark",
                    onClick: function () {
                      if (m) {
                        o(
                          (function (e) {
                            return (function () {
                              var t = Object(R.a)(
                                K().mark(function t(n, r) {
                                  var a, o, i, c;
                                  return K().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              n({
                                                type: "POST_UNLIKE_REQUEST",
                                              }),
                                              (a = r()),
                                              (o = a.userLogin.userInfo),
                                              (i = o._id),
                                              (c = {
                                                "Content-Type":
                                                  "application/json",
                                                headers: {
                                                  Authorization:
                                                    "Bearer ".concat(o.token),
                                                },
                                              }),
                                              (t.next = 7),
                                              P.post(
                                                "/posts/".concat(
                                                  e._id,
                                                  "/unlike"
                                                ),
                                                { _id: i },
                                                c
                                              )
                                            );
                                          case 7:
                                            n({ type: "POST_UNLIKE_SUCCESS" }),
                                              (t.next = 13);
                                            break;
                                          case 10:
                                            (t.prev = 10),
                                              (t.t0 = t.catch(0)),
                                              n({
                                                type: "POST_UNLIKE_FAIL",
                                                payload:
                                                  t.t0.response &&
                                                  t.t0.response.data.message
                                                    ? t.t0.response.data.message
                                                    : t.t0.message,
                                              });
                                          case 13:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 10]]
                                  );
                                })
                              );
                              return function (e, n) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(t)
                        );
                        var e = t.likes.indexOf(n._id);
                        e > -1 && t.likes.splice(e, 1);
                      } else
                        o(
                          (function (e) {
                            return (function () {
                              var t = Object(R.a)(
                                K().mark(function t(n, r) {
                                  var a, o, i, c, l;
                                  return K().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              n({ type: "POST_LIKE_REQUEST" }),
                                              (a = r()),
                                              (o = a.userLogin.userInfo),
                                              (i = o._id),
                                              (c = o.token),
                                              (l = {
                                                "Content-Type":
                                                  "application/json",
                                                headers: {
                                                  Authorization:
                                                    "Bearer ".concat(c),
                                                },
                                              }),
                                              (t.next = 6),
                                              P.post(
                                                "/posts/".concat(
                                                  e._id,
                                                  "/like"
                                                ),
                                                { _id: i },
                                                l
                                              )
                                            );
                                          case 6:
                                            n({ type: "POST_LIKE_SUCCESS" }),
                                              (t.next = 12);
                                            break;
                                          case 9:
                                            (t.prev = 9),
                                              (t.t0 = t.catch(0)),
                                              n({
                                                type: "POST_LIKE_FAIL",
                                                payload:
                                                  t.t0.response &&
                                                  t.t0.response.data.message
                                                    ? t.t0.response.data.message
                                                    : t.t0.message,
                                              });
                                          case 12:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[0, 9]]
                                  );
                                })
                              );
                              return function (e, n) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(t)
                        ),
                          t.likes.push(n._id);
                      d(!m);
                    },
                  },
                  a.a.createElement(
                    y.a,
                    null,
                    a.a.createElement("i", {
                      className: "".concat(
                        m ? "like fas" : "far",
                        " fa-heart fa-2x"
                      ),
                    }),
                    " "
                  ),
                  a.a.createElement(
                    y.a,
                    { className: "my-1 mx-3" },
                    t.likes.length
                  )
                ),
                a.a.createElement(
                  k.a,
                  {
                    variant: "dark",
                    onClick: function () {
                      return w(!0);
                    },
                  },
                  a.a.createElement(
                    y.a,
                    null,
                    a.a.createElement("i", {
                      className: "far fa-comment fa-2x",
                    }),
                    " "
                  ),
                  a.a.createElement(
                    y.a,
                    { className: "my-1 mx-3" },
                    t.comments.length
                  )
                ),
                a.a.createElement(
                  k.a,
                  { variant: "dark" },
                  a.a.createElement("i", { className: "fas fa-share fa-2x" }),
                  " "
                )
              ),
              b &&
                a.a.createElement(
                  W.a.Footer,
                  null,
                  a.a.createElement(
                    y.a,
                    null,
                    t.comments.map(function (e) {
                      return a.a.createElement(
                        y.a,
                        { className: "my-1 border border-secondary" },
                        a.a.createElement(
                          v.Link,
                          { to: "/profile/".concat(e.name) },
                          a.a.createElement(
                            "strong",
                            { className: "text-muted" },
                            e.name
                          )
                        ),
                        a.a.createElement("p", { className: "ms-3" }, e.comment)
                      );
                    })
                  ),
                  a.a.createElement(
                    y.a,
                    { className: "my-3 text-center" },
                    a.a.createElement(
                      H.a,
                      { md: 2, className: "my-2" },
                      "Comment"
                    ),
                    a.a.createElement(
                      H.a,
                      { md: 6, className: "my-2" },
                      a.a.createElement("input", {
                        value: x,
                        onChange: function (e) {
                          return L(e.target.value);
                        },
                        style: { border: "none", width: "20vw" },
                      })
                    ),
                    a.a.createElement(
                      H.a,
                      { md: 3 },
                      a.a.createElement(
                        k.a,
                        {
                          className: "ms-3",
                          size: "sm",
                          variant: "light",
                          onClick: function (e) {
                            return O(e);
                          },
                        },
                        "Comment"
                      )
                    )
                  )
                )
            )
          );
        }),
        ie = function (e) {
          var t = e.posts;
          e.type;
          return a.a.createElement(
            g.a,
            null,
            t.length > 0
              ? t.map(function (e) {
                  return a.a.createElement(
                    y.a,
                    { key: e._id },
                    a.a.createElement(oe, { post: e })
                  );
                })
              : a.a.createElement(Z, { variant: "info" }, "Have Not Posted Yet")
          );
        },
        ce = function (e) {
          var t = e.value,
            n = e.text,
            r = e.color;
          return a.a.createElement(
            "div",
            { className: "rating" },
            a.a.createElement("span", null, n && n),
            " ",
            a.a.createElement(
              "span",
              null,
              a.a.createElement("i", {
                style: { color: r },
                className:
                  t >= 1
                    ? "fas fa-star"
                    : t >= 0.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              })
            ),
            a.a.createElement(
              "span",
              null,
              a.a.createElement("i", {
                style: { color: r },
                className:
                  t >= 2
                    ? "fas fa-star"
                    : t >= 1.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              })
            ),
            a.a.createElement(
              "span",
              null,
              a.a.createElement("i", {
                style: { color: r },
                className:
                  t >= 3
                    ? "fas fa-star"
                    : t >= 2.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              })
            ),
            a.a.createElement(
              "span",
              null,
              a.a.createElement("i", {
                style: { color: r },
                className:
                  t >= 4
                    ? "fas fa-star"
                    : t >= 3.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              })
            ),
            a.a.createElement(
              "span",
              null,
              a.a.createElement("i", {
                style: { color: r },
                className:
                  t >= 5
                    ? "fas fa-star"
                    : t >= 4.5
                    ? "fas fa-star-half-alt"
                    : "far fa-star",
              })
            )
          );
        };
      ce.defaultProps = { color: "#f8e825", value: 1 };
      var le = ce;
      function ue() {
        ue = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var se = function (e) {
        var t = e.hide,
          n = Object(r.useState)(""),
          o = Object(C.a)(n, 2),
          i = o[0],
          l = o[1],
          u = Object(r.useState)(""),
          s = Object(C.a)(u, 2),
          f = s[0],
          p = s[1],
          h = Object(r.useState)(""),
          m = Object(C.a)(h, 2),
          d = m[0],
          v = m[1],
          g = Object(r.useState)(""),
          y = Object(C.a)(g, 2),
          b = y[0],
          w = y[1],
          _ = Object(r.useState)(!1),
          S = Object(C.a)(_, 2),
          x = S[0],
          L = S[1],
          O = Object(E.k)(),
          j = Object(c.c)(),
          T = Object(c.d)(function (e) {
            return e.userLogin;
          }).userInfo,
          I = Object(c.d)(function (e) {
            return e.postCreate;
          }),
          U = I.loading,
          A = I.success,
          F = I.error;
        Object(r.useEffect)(
          function () {
            T
              ? T.name
                ? (v(T.dp), l(T.username))
                : j(G("Profile"))
              : O.push("/login");
          },
          [j, O, T]
        );
        var D = (function () {
          var e = Object(R.a)(
            ue().mark(function e(t) {
              var n, r, a, o, i;
              return ue().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = t.target.files[0]),
                          L(!0),
                          (r = new FormData()).append("file", n),
                          r.append("upload_preset", "ztrde8oo"),
                          (e.prev = 5),
                          (e.next = 8),
                          fetch(
                            "https://api.cloudinary.com/v1_1/dhk3utwzv/image/upload",
                            { method: "POST", body: r }
                          )
                        );
                      case 8:
                        return (a = e.sent), (e.next = 11), a.json();
                      case 11:
                        return (o = e.sent), (e.next = 14), o.secure_url;
                      case 14:
                        (i = e.sent),
                          p(
                            i.replace(
                              "dhk3utwzv/image/upload",
                              "dhk3utwzv/image/upload/ar_1:1,c_thumb,z_0.75"
                            )
                          ),
                          L(!1),
                          (e.next = 23);
                        break;
                      case 19:
                        (e.prev = 19),
                          (e.t0 = e.catch(5)),
                          console.error(e.t0),
                          L(!1);
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[5, 19]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            re,
            null,
            a.a.createElement("h1", null, "Add Post"),
            A && a.a.createElement(Z, { variant: "success" }, "Post Added"),
            F && a.a.createElement(Z, { variant: "danger" }, F),
            U && a.a.createElement(ee, null),
            a.a.createElement(
              N.a,
              {
                onSubmit: function (e) {
                  var n;
                  e.preventDefault(),
                    j(
                      ((n = { username: i, image: f, dp: d, caption: b }),
                      (function () {
                        var e = Object(R.a)(
                          K().mark(function e(t, r) {
                            var a, o, i, c, l;
                            return K().wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        t({ type: "POST_CREATE_REQUEST" }),
                                        (a = r()),
                                        (o = a.userLogin.userInfo),
                                        (i = {
                                          headers: {
                                            Authorization: "Bearer ".concat(
                                              o.token
                                            ),
                                          },
                                        }),
                                        (e.next = 6),
                                        P.post("/posts", n, i)
                                      );
                                    case 6:
                                      (c = e.sent),
                                        (l = c.data),
                                        t({
                                          type: "POST_CREATE_SUCCESS",
                                          payload: l,
                                        }),
                                        (e.next = 14);
                                      break;
                                    case 11:
                                      (e.prev = 11),
                                        (e.t0 = e.catch(0)),
                                        t({
                                          type: "POST_CREATE_FAIL",
                                          payload:
                                            e.t0.response &&
                                            e.t0.response.data.message
                                              ? e.t0.response.data.message
                                              : e.t0.message,
                                        });
                                    case 14:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })())
                    ),
                    A && (t(), O.push("/profile"));
                },
              },
              a.a.createElement(
                N.a.Group,
                { controlId: "image" },
                a.a.createElement(N.a.Label, null, "Select Image"),
                a.a.createElement(N.a.Control, {
                  type: "text",
                  placeholder: "Enter Image URL",
                  value: f,
                  onChange: function (e) {
                    return p(e.target.value);
                  },
                }),
                a.a.createElement(N.a.File, {
                  id: "image-file",
                  label: "Choose File",
                  custom: !0,
                  onChange: D,
                }),
                x && a.a.createElement(ee, null)
              ),
              a.a.createElement(
                N.a.Group,
                { controlId: "Caption" },
                a.a.createElement(N.a.Label, null, "Caption"),
                a.a.createElement(N.a.Control, {
                  type: "Caption",
                  placeholder: "Enter Caption",
                  value: b,
                  onChange: function (e) {
                    return w(e.target.value);
                  },
                })
              ),
              a.a.createElement("br", null),
              a.a.createElement(
                k.a,
                { type: "submit", variant: "primary" },
                "Add"
              )
            )
          )
        );
      };
      function fe() {
        fe = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var pe = function (e) {
          e.match;
          var t = e.history,
            n = Object(r.useState)(""),
            o = Object(C.a)(n, 2),
            i = o[0],
            l = o[1],
            u = Object(r.useState)(""),
            s = Object(C.a)(u, 2),
            f = s[0],
            p = s[1],
            h = Object(r.useState)(""),
            m = Object(C.a)(h, 2),
            d = m[0],
            v = m[1],
            E = Object(r.useState)(!1),
            g = Object(C.a)(E, 2),
            y = g[0],
            b = g[1],
            w = Object(c.c)(),
            _ = Object(c.d)(function (e) {
              return e.userLogin;
            }).userInfo,
            S = Object(c.d)(function (e) {
              return e.postCreate;
            }),
            x = S.loading,
            L = S.success;
          Object(r.useEffect)(
            function () {
              _ ? (_.name ? l(_.username) : w(G("Profile"))) : t.push("/login");
            },
            [w, t, _]
          );
          var O = (function () {
            var e = Object(R.a)(
              fe().mark(function e(t) {
                var n, r, a, o, i;
                return fe().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.target.files[0]),
                            b(!0),
                            (r = new FormData()).append("file", n),
                            r.append("upload_preset", "ztrde8oo"),
                            (e.prev = 5),
                            (e.next = 8),
                            fetch(
                              "https://api.cloudinary.com/v1_1/dhk3utwzv/image/upload",
                              { method: "POST", body: r }
                            )
                          );
                        case 8:
                          return (a = e.sent), (e.next = 11), a.json();
                        case 11:
                          return (o = e.sent), (e.next = 14), o.secure_url;
                        case 14:
                          (i = e.sent),
                            p(
                              i.replace(
                                "dhk3utwzv/image/upload",
                                "dhk3utwzv/image/upload/ar_1:1,c_thumb,z_0.75"
                              )
                            ),
                            b(!1),
                            (e.next = 23);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(5)),
                            console.error(e.t0),
                            b(!1);
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 19]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              re,
              null,
              a.a.createElement("h1", null, "Add Event"),
              L && a.a.createElement(Z, { variant: "success" }, "Event Added"),
              x && a.a.createElement(ee, null),
              a.a.createElement(
                N.a,
                {
                  onSubmit: function (e) {
                    var t;
                    e.preventDefault(),
                      w(
                        ((t = { username: i, image: f, caption: d }),
                        (function () {
                          var e = Object(R.a)(
                            te().mark(function e(n, r) {
                              var a, o, i, c, l;
                              return te().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          n({ type: "EVENT_CREATE_REQUEST" }),
                                          (a = r()),
                                          (o = a.userLogin.userInfo),
                                          (i = {
                                            headers: {
                                              Authorization: "Bearer ".concat(
                                                o.token
                                              ),
                                            },
                                          }),
                                          (e.next = 6),
                                          P.post(
                                            "/events",
                                            { userInfo: o, event: t },
                                            i
                                          )
                                        );
                                      case 6:
                                        (c = e.sent),
                                          (l = c.data),
                                          n({
                                            type: "EVENT_CREATE_SUCCESS",
                                            payload: l,
                                          }),
                                          (e.next = 14);
                                        break;
                                      case 11:
                                        (e.prev = 11),
                                          (e.t0 = e.catch(0)),
                                          n({
                                            type: "EVENT_CREATE_FAIL",
                                            payload:
                                              e.t0.response &&
                                              e.t0.response.data.message
                                                ? e.t0.response.data.message
                                                : e.t0.message,
                                          });
                                      case 14:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 11]]
                              );
                            })
                          );
                          return function (t, n) {
                            return e.apply(this, arguments);
                          };
                        })())
                      );
                  },
                },
                a.a.createElement(
                  N.a.Group,
                  { controlId: "image" },
                  a.a.createElement(N.a.Label, null, "Select Image"),
                  a.a.createElement(N.a.Control, {
                    type: "text",
                    placeholder: "Enter Image URL",
                    value: f,
                    onChange: function (e) {
                      return p(e.target.value);
                    },
                  }),
                  a.a.createElement(N.a.File, {
                    id: "image-file",
                    label: "Choose File",
                    custom: !0,
                    onChange: O,
                  }),
                  y && a.a.createElement(ee, null)
                ),
                a.a.createElement(
                  N.a.Group,
                  { controlId: "Caption" },
                  a.a.createElement(N.a.Label, null, "Caption"),
                  a.a.createElement(N.a.Control, {
                    type: "Caption",
                    placeholder: "Enter Caption",
                    value: d,
                    onChange: function (e) {
                      return v(e.target.value);
                    },
                  })
                ),
                a.a.createElement("br", null),
                a.a.createElement(
                  k.a,
                  { type: "submit", variant: "primary" },
                  "Add"
                )
              )
            )
          );
        },
        he = n(31),
        me = n(158),
        de = {
          1: "Web Development",
          2: "Machine Learning",
          3: "Artificial Intelligence",
          4: "Data Science",
          5: "Data Analytics",
          6: "Internet of Things",
          7: "Automation",
          8: "Embedded System",
          9: "Robotics",
          10: "Physics",
          11: "Chemistry",
          12: "Crafts & Arts",
          13: "Literature",
          14: "Automobiles & Services",
          15: "Yoga",
          16: "Sports",
          17: "Dance",
          18: "Music",
          19: "Cinematic Skills",
          20: "Athletics",
        },
        ve = function (e) {
          var t = e.user,
            n = e.children,
            o = e.openModel,
            i = a.a.useState(!1),
            l = Object(C.a)(i, 2),
            u = l[0],
            s = l[1],
            f = a.a.useState([]),
            p = Object(C.a)(f, 2),
            h = p[0],
            m = p[1],
            d = a.a.useState(""),
            v = Object(C.a)(d, 2),
            E = (v[0], v[1], Object(c.c)()),
            b = function () {
              return s(!1);
            },
            w = function () {
              return s(!0);
            };
          Object(r.useEffect)(
            function () {
              m(t ? t.skills : []), o && w();
            },
            [t]
          );
          return a.a.createElement(
            a.a.Fragment,
            null,
            n
              ? a.a.createElement(
                  k.a,
                  {
                    variant: "link",
                    size: "sm",
                    className: "me-3 mt-1",
                    onClick: w,
                  },
                  n
                )
              : a.a.createElement(
                  k.a,
                  {
                    variant: "secondary",
                    size: "sm",
                    className: "me-3 mt-1",
                    onClick: w,
                  },
                  "+ Skills"
                ),
            t &&
              a.a.createElement(
                q.a,
                { show: u, onHide: b },
                a.a.createElement(
                  q.a.Header,
                  { closeButton: !0 },
                  a.a.createElement(q.a.Title, null, t.name, "'s Skill Set")
                ),
                a.a.createElement(
                  q.a.Body,
                  null,
                  a.a.createElement(
                    me.a,
                    { className: "d-inline mx-2" },
                    a.a.createElement(
                      me.a.Toggle,
                      { id: "dropdown-autoclose-true" },
                      "Select Your Skill"
                    ),
                    a.a.createElement(
                      me.a.Menu,
                      null,
                      (function () {
                        var e = Object.keys(de);
                        return (e = e.filter(function (e) {
                          return !h.includes(parseInt(e));
                        })).map(function (e) {
                          return a.a.createElement(
                            me.a.Item,
                            {
                              onClick: function () {
                                var t;
                                (t = parseInt(e)),
                                  m([].concat(Object(he.a)(h), [t]));
                              },
                            },
                            de[e]
                          );
                        });
                      })()
                    )
                  ),
                  a.a.createElement(
                    g.a,
                    { className: "mt-1 rounded" },
                    a.a.createElement(
                      y.a,
                      { xs: "auto" },
                      h.map(function (e, t) {
                        return a.a.createElement(
                          H.a,
                          {
                            key: t,
                            className: "p-2 m-1 bg-light rounded-pill",
                          },
                          de[e],
                          a.a.createElement(
                            "span",
                            {
                              className: "bg-danger mx-2 px-2 rounded-pill",
                              style: { cursor: "pointer" },
                              onClick: function () {
                                var e;
                                (e = t),
                                  m(
                                    h.filter(function (t, n) {
                                      return n !== e;
                                    })
                                  );
                              },
                            },
                            "x"
                          )
                        );
                      })
                    )
                  )
                ),
                a.a.createElement(
                  q.a.Footer,
                  null,
                  a.a.createElement(
                    k.a,
                    {
                      variant: "info",
                      onClick: function (e) {
                        e.preventDefault(), E(D({ id: t._id, skills: h })), b();
                      },
                    },
                    "Update"
                  ),
                  a.a.createElement(
                    k.a,
                    { variant: "secondary", onClick: b },
                    "Close"
                  )
                )
              )
          );
        },
        Ee = function (e) {
          var t = e.profile,
            n = a.a.useState(!1),
            r = Object(C.a)(n, 2),
            o = r[0],
            i = r[1],
            c = a.a.useState(!1),
            l = Object(C.a)(c, 2),
            u = l[0],
            s = l[1];
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              function (e) {
                return a.a.createElement(
                  q.a,
                  Object.assign({}, e, {
                    size: "lg",
                    "aria-labelledby": "contained-modal-title-vcenter",
                    centered: !0,
                  }),
                  a.a.createElement(
                    q.a.Header,
                    { closeButton: !0 },
                    a.a.createElement(
                      q.a.Title,
                      { id: "contained-modal-title-vcenter" },
                      "Add Post"
                    )
                  ),
                  a.a.createElement(
                    q.a.Body,
                    null,
                    a.a.createElement(se, { hide: e.onHide })
                  ),
                  a.a.createElement(
                    q.a.Footer,
                    null,
                    a.a.createElement(k.a, { onClick: e.onHide }, "Close")
                  )
                );
              },
              {
                show: o,
                onHide: function () {
                  return i(!1);
                },
              }
            ),
            a.a.createElement(
              function (e) {
                return a.a.createElement(
                  q.a,
                  Object.assign({}, e, {
                    size: "lg",
                    "aria-labelledby": "contained-modal-title-vcenter",
                    centered: !0,
                  }),
                  a.a.createElement(
                    q.a.Header,
                    { closeButton: !0 },
                    a.a.createElement(
                      q.a.Title,
                      { id: "contained-modal-title-vcenter" },
                      "Add Event"
                    )
                  ),
                  a.a.createElement(
                    q.a.Body,
                    null,
                    a.a.createElement(pe, null)
                  ),
                  a.a.createElement(
                    q.a.Footer,
                    null,
                    a.a.createElement(k.a, { onClick: e.onHide }, "Close")
                  )
                );
              },
              {
                show: u,
                onHide: function () {
                  return s(!1);
                },
              }
            ),
            a.a.createElement(
              W.a,
              { bg: "dark", text: "white", className: "my-3 p-3 rounded" },
              a.a.createElement(
                W.a.Header,
                { className: "mx-auto" },
                a.a.createElement(M.a, {
                  src: t.dp,
                  width: "64px",
                  height: "64px",
                  roundedCircle: !0,
                })
              ),
              a.a.createElement(
                W.a.Body,
                null,
                a.a.createElement(
                  g.a,
                  null,
                  a.a.createElement(
                    y.a,
                    null,
                    a.a.createElement(H.a, null),
                    a.a.createElement(
                      H.a,
                      { xl: "auto", md: "auto" },
                      a.a.createElement(
                        v.Link,
                        {
                          to: "/profile/".concat(t.username),
                          className: "username",
                        },
                        t.name
                      )
                    ),
                    a.a.createElement(H.a, null)
                  ),
                  a.a.createElement(
                    y.a,
                    null,
                    a.a.createElement(
                      "small",
                      {
                        className:
                          "text-muted align-items-center d-flex justify-content-center",
                      },
                      t.tagline
                    )
                  ),
                  a.a.createElement("br", null),
                  a.a.createElement(
                    y.a,
                    null,
                    a.a.createElement(le, {
                      text: "Rating : ",
                      value: t.rating,
                    })
                  )
                )
              ),
              a.a.createElement(
                W.a.Footer,
                null,
                a.a.createElement(
                  v.Link,
                  { to: "/edit" },
                  a.a.createElement(
                    k.a,
                    { size: "sm", variant: "info", className: "me-3" },
                    "Edit Profile"
                  )
                ),
                a.a.createElement(
                  v.Link,
                  { to: "/events/enrollments" },
                  a.a.createElement(
                    k.a,
                    { size: "sm", variant: "outline-light" },
                    "Enrollments"
                  )
                ),
                a.a.createElement(
                  y.a,
                  { className: "my-2" },
                  a.a.createElement(
                    k.a,
                    {
                      onClick: function () {
                        return i(!0);
                      },
                      size: "sm",
                      variant: "danger",
                    },
                    "+ Add Post"
                  ),
                  t.userType > 1 &&
                    a.a.createElement(
                      k.a,
                      {
                        className: "my-2",
                        onClick: function () {
                          return s(!0);
                        },
                        size: "sm",
                        variant: "success",
                      },
                      "+ Add Event"
                    ),
                  a.a.createElement(ve, {
                    user: t,
                    openModel: t && t.skills && t.skills.length < 1,
                  })
                )
              )
            )
          );
        },
        ge = function (e) {
          var t = e.profile;
          e.history;
          return a.a.createElement(
            y.a,
            { className: "mb-3" },
            a.a.createElement(
              H.a,
              { xs: "3" },
              a.a.createElement(M.a, {
                src: t.dp,
                width: "48px",
                height: "48px",
                roundedCircle: !0,
              })
            ),
            a.a.createElement(
              H.a,
              { xs: "8", className: "d-flex align-items-center" },
              a.a.createElement(
                H.a,
                { xs: "8" },
                a.a.createElement(
                  y.a,
                  null,
                  a.a.createElement(
                    v.Link,
                    {
                      to: "/profile/".concat(t.username),
                      className: "username",
                    },
                    a.a.createElement(
                      "small",
                      { style: { fontSize: "1.3vh" } },
                      t.name
                    )
                  )
                ),
                a.a.createElement(
                  y.a,
                  null,
                  a.a.createElement(
                    "small",
                    { className: "text-muted" },
                    t.username
                  )
                )
              ),
              a.a.createElement(
                H.a,
                { className: "mx-2" },
                a.a.createElement(
                  v.Link,
                  { to: "/profile/".concat(t.username), className: "username" },
                  a.a.createElement(
                    k.a,
                    { size: "sm", variant: "secondary" },
                    "View"
                  )
                )
              )
            )
          );
        },
        ye = function (e) {
          var t = e.profiles;
          return (
            console.log(t),
            a.a.createElement(
              W.a,
              { bg: "dark", text: "white", className: "my-3 rounded" },
              a.a.createElement(W.a.Header, null, "Suggestions"),
              t && t.length > 0
                ? a.a.createElement(
                    W.a.Body,
                    null,
                    t.map(function (e) {
                      return a.a.createElement(ge, { profile: e });
                    })
                  )
                : a.a.createElement(
                    Z,
                    { variant: "warning" },
                    "No Suggestions Available"
                  )
            )
          );
        },
        be = Object(c.b)(function (e) {
          return {
            userInfo: e.userLogin.userInfo,
            loading: e.userLogin.loading,
          };
        })(function (e) {
          var t = e.userInfo,
            n = e.loading;
          return a.a.createElement(
            g.a,
            null,
            n && a.a.createElement(ee, null),
            a.a.createElement(
              y.a,
              null,
              a.a.createElement(
                H.a,
                { md: 3 },
                a.a.createElement(Ee, { profile: t })
              ),
              a.a.createElement(
                H.a,
                { md: 6 },
                t && t.home && t.home.length > 0
                  ? a.a.createElement(ie, { posts: t.home })
                  : a.a.createElement(Z, null, "No Feeds")
              ),
              a.a.createElement(
                H.a,
                { md: 3 },
                a.a.createElement(ye, { profiles: t.suggestions })
              )
            )
          );
        });
      function we() {
        we = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var _e = function (e) {
          e.match;
          var t = e.history,
            n = Object(r.useState)(""),
            o = Object(C.a)(n, 2),
            i = o[0],
            l = o[1],
            u = Object(r.useState)(""),
            s = Object(C.a)(u, 2),
            f = s[0],
            p = s[1],
            h = Object(r.useState)(""),
            m = Object(C.a)(h, 2),
            d = m[0],
            v = m[1],
            E = Object(r.useState)(""),
            g = Object(C.a)(E, 2),
            y = g[0],
            b = g[1],
            w = Object(r.useState)(""),
            _ = Object(C.a)(w, 2),
            S = _[0],
            x = _[1],
            L = Object(r.useState)(!1),
            O = Object(C.a)(L, 2),
            j = O[0],
            T = O[1],
            I = Object(c.c)(),
            U = Object(c.d)(function (e) {
              return e.userLogin;
            }).userInfo,
            A = Object(c.d)(function (e) {
              return e.userUpdateProfile;
            }).success;
          Object(r.useEffect)(
            function () {
              U
                ? U.name
                  ? (l(U.name),
                    x(U.about),
                    b(U.dp),
                    v(U.tagline),
                    p(U.username))
                  : I(G("Profile"))
                : t.push("/login");
            },
            [I, t, U]
          );
          var P = (function () {
            var e = Object(R.a)(
              we().mark(function e(t) {
                var n, r, a, o, i;
                return we().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.target.files[0]),
                            T(!0),
                            (r = new FormData()).append("file", n),
                            r.append("upload_preset", "ztrde8oo"),
                            (e.prev = 5),
                            (e.next = 8),
                            fetch(
                              "https://api.cloudinary.com/v1_1/dhk3utwzv/image/upload",
                              { method: "POST", body: r }
                            )
                          );
                        case 8:
                          return (a = e.sent), (e.next = 11), a.json();
                        case 11:
                          return (o = e.sent), (e.next = 14), o.secure_url;
                        case 14:
                          (i = e.sent),
                            b(
                              i.replace(
                                "dhk3utwzv/image/upload",
                                "dhk3utwzv/image/upload/ar_1:1,c_thumb,z_0.75"
                              )
                            ),
                            T(!1),
                            (e.next = 23);
                          break;
                        case 19:
                          (e.prev = 19),
                            (e.t0 = e.catch(5)),
                            console.error(e.t0),
                            T(!1);
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[5, 19]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              re,
              null,
              a.a.createElement("h1", null, "Edit Profile"),
              A &&
                a.a.createElement(Z, { variant: "success" }, "Profile Updated"),
              a.a.createElement(
                N.a,
                {
                  onSubmit: function (e) {
                    e.preventDefault(),
                      I(
                        D({
                          id: U._id,
                          name: i,
                          userName: f,
                          tagline: d,
                          dp: y,
                          about: S,
                        })
                      );
                  },
                },
                a.a.createElement(
                  N.a.Group,
                  { controlId: "name" },
                  a.a.createElement(N.a.Label, null, "Name"),
                  a.a.createElement(N.a.Control, {
                    type: "name",
                    placeholder: "Enter name",
                    value: i,
                    onChange: function (e) {
                      return l(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  N.a.Group,
                  { controlId: "tagline" },
                  a.a.createElement(N.a.Label, null, "Tagline"),
                  a.a.createElement(N.a.Control, {
                    type: "tagline",
                    placeholder: "Enter tagline",
                    value: d,
                    onChange: function (e) {
                      return v(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  N.a.Group,
                  { controlId: "About" },
                  a.a.createElement(N.a.Label, null, "About"),
                  a.a.createElement(N.a.Control, {
                    type: "About",
                    placeholder: "Enter About",
                    value: S,
                    onChange: function (e) {
                      return x(e.target.value);
                    },
                    as: "textarea",
                  })
                ),
                a.a.createElement(
                  N.a.Group,
                  { controlId: "userName" },
                  a.a.createElement(N.a.Label, null, "Username"),
                  a.a.createElement(N.a.Control, {
                    disabled: !0,
                    type: "userName",
                    placeholder: "Enter UserName",
                    value: f,
                    onChange: function (e) {
                      return p(e.target.value);
                    },
                  })
                ),
                a.a.createElement(
                  N.a.Group,
                  { controlId: "image" },
                  a.a.createElement(N.a.Label, null, "Display Picture"),
                  a.a.createElement(N.a.Control, {
                    type: "text",
                    placeholder: "Enter Image URL",
                    value: y,
                    onChange: function (e) {
                      return b(e.target.value);
                    },
                  }),
                  a.a.createElement(N.a.File, {
                    id: "image-file",
                    label: "Choose File",
                    custom: !0,
                    onChange: P,
                  }),
                  j && a.a.createElement(ee, null)
                ),
                a.a.createElement("br", null),
                a.a.createElement(
                  k.a,
                  { type: "submit", variant: "primary" },
                  "Update"
                )
              )
            )
          );
        },
        Se = function (e) {
          var t = e.match,
            n = e.history,
            o = Object(c.c)(),
            i = Object(r.useState)(0),
            l = Object(C.a)(i, 2),
            u = l[0],
            s = l[1],
            f = Object(r.useState)(0),
            p = Object(C.a)(f, 2),
            h = p[0],
            m = p[1],
            d = Object(r.useState)(t.params.username),
            E = Object(C.a)(d, 2),
            b = E[0],
            w = E[1],
            _ = Object(c.d)(function (e) {
              return e.userLogin;
            }).userInfo,
            S = Object(c.d)(function (e) {
              return e.userDetails;
            }),
            x = S.loading,
            L = S.user,
            O = S.error;
          return (
            Object(r.useEffect)(
              function () {
                if (_)
                  if (b !== t.params.username) w(t.params.username);
                  else if (L && b === L.username) {
                    var e =
                      L.followers && L.followers.includes(_._id)
                        ? 2
                        : L.requests && L.requests.includes(_._id)
                        ? 1
                        : 0;
                    s(e);
                  } else b && o(G(b));
                else n.push("/login");
              },
              [_, L, b, n, t.params.username, o]
            ),
            b || t.params.username || (L = _),
            a.a.createElement(
              g.a,
              null,
              x && a.a.createElement(ee, null),
              O && a.a.createElement(Z, { variant: "danger" }, O),
              L
                ? a.a.createElement(
                    a.a.Fragment,
                    null,
                    L &&
                      L.requested &&
                      L.requested.includes(_._id) &&
                      0 === h &&
                      a.a.createElement(
                        y.a,
                        { className: "text-center" },
                        a.a.createElement(
                          Z,
                          { variant: "info" },
                          a.a.createElement(
                            H.a,
                            null,
                            "".concat(L.name, " has requested to follow you"),
                            a.a.createElement(
                              k.a,
                              {
                                className: "ms-4 me-2",
                                variant: "success",
                                onClick: function () {
                                  o(
                                    (function (e) {
                                      return (function () {
                                        var t = Object(R.a)(
                                          F().mark(function t(n, r) {
                                            var a, o, i, c;
                                            return F().wrap(
                                              function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        (t.prev = 0),
                                                        n({
                                                          type: "USER_ACCEPT_REQUEST",
                                                        }),
                                                        (a = r()),
                                                        (o =
                                                          a.userLogin.userInfo),
                                                        (i = o.username),
                                                        (c = {
                                                          "Content-Type":
                                                            "application/json",
                                                          headers: {
                                                            Authorization:
                                                              "Bearer ".concat(
                                                                o.token
                                                              ),
                                                          },
                                                        }),
                                                        (t.next = 7),
                                                        P.post(
                                                          "/users/".concat(
                                                            e.username,
                                                            "/accept"
                                                          ),
                                                          { username: i },
                                                          c
                                                        )
                                                      );
                                                    case 7:
                                                      n({
                                                        type: "USER_ACCEPT_SUCCESS",
                                                      }),
                                                        (t.next = 13);
                                                      break;
                                                    case 10:
                                                      (t.prev = 10),
                                                        (t.t0 = t.catch(0)),
                                                        n({
                                                          type: "USER_ACCEPT_FAIL",
                                                          payload:
                                                            t.t0.response &&
                                                            t.t0.response.data
                                                              .message
                                                              ? t.t0.response
                                                                  .data.message
                                                              : t.t0.message,
                                                        });
                                                    case 13:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              },
                                              t,
                                              null,
                                              [[0, 10]]
                                            );
                                          })
                                        );
                                        return function (e, n) {
                                          return t.apply(this, arguments);
                                        };
                                      })();
                                    })(L)
                                  ),
                                    m(1);
                                },
                              },
                              "Accept"
                            ),
                            a.a.createElement(
                              k.a,
                              {
                                className: "ml-2",
                                variant: "danger",
                                onClick: function () {
                                  o(
                                    (function (e) {
                                      return (function () {
                                        var t = Object(R.a)(
                                          F().mark(function t(n, r) {
                                            var a, o, i, c;
                                            return F().wrap(
                                              function (t) {
                                                for (;;)
                                                  switch ((t.prev = t.next)) {
                                                    case 0:
                                                      return (
                                                        (t.prev = 0),
                                                        n({
                                                          type: "USER_DECLINE_REQUEST",
                                                        }),
                                                        (a = r()),
                                                        (o =
                                                          a.userLogin.userInfo),
                                                        (i = o.username),
                                                        (c = {
                                                          "Content-Type":
                                                            "application/json",
                                                          headers: {
                                                            Authorization:
                                                              "Bearer ".concat(
                                                                o.token
                                                              ),
                                                          },
                                                        }),
                                                        (t.next = 7),
                                                        P.post(
                                                          "/users/".concat(
                                                            e.username,
                                                            "/decline"
                                                          ),
                                                          { username: i },
                                                          c
                                                        )
                                                      );
                                                    case 7:
                                                      n({
                                                        type: "USER_DECLINE_SUCCESS",
                                                      }),
                                                        (t.next = 13);
                                                      break;
                                                    case 10:
                                                      (t.prev = 10),
                                                        (t.t0 = t.catch(0)),
                                                        n({
                                                          type: "USER_DECLINE_FAIL",
                                                          payload:
                                                            t.t0.response &&
                                                            t.t0.response.data
                                                              .message
                                                              ? t.t0.response
                                                                  .data.message
                                                              : t.t0.message,
                                                        });
                                                    case 13:
                                                    case "end":
                                                      return t.stop();
                                                  }
                                              },
                                              t,
                                              null,
                                              [[0, 10]]
                                            );
                                          })
                                        );
                                        return function (e, n) {
                                          return t.apply(this, arguments);
                                        };
                                      })();
                                    })(L)
                                  ),
                                    m(0);
                                },
                              },
                              "Decline"
                            )
                          )
                        )
                      ),
                    a.a.createElement(
                      W.a,
                      {
                        bg: "dark",
                        text: "white",
                        className: "my-3 p-3 rounded",
                      },
                      a.a.createElement(
                        W.a.Body,
                        null,
                        a.a.createElement(
                          g.a,
                          null,
                          a.a.createElement(
                            y.a,
                            null,
                            a.a.createElement(
                              H.a,
                              { md: 3 },
                              a.a.createElement(
                                g.a,
                                null,
                                a.a.createElement(M.a, {
                                  src: L.dp,
                                  width: "256px",
                                  height: "256px",
                                  roundedCircle: !0,
                                  className: "mx-auto",
                                }),
                                a.a.createElement(
                                  y.a,
                                  { className: "my-2 text-center" },
                                  a.a.createElement(
                                    v.Link,
                                    {
                                      to: "/profile/".concat(L.username),
                                      className: "username",
                                    },
                                    L.name
                                  )
                                ),
                                a.a.createElement(
                                  y.a,
                                  null,
                                  a.a.createElement(
                                    "small",
                                    {
                                      className: "text-muted mb-1 text-center",
                                    },
                                    L.tagline
                                  )
                                )
                              )
                            ),
                            a.a.createElement(
                              H.a,
                              { className: "offset-2 my-3 text-center", md: 6 },
                              a.a.createElement(
                                y.a,
                                { className: "my-5" },
                                a.a.createElement(
                                  H.a,
                                  null,
                                  a.a.createElement(
                                    "span",
                                    null,
                                    L.posts && L.posts.length
                                  ),
                                  a.a.createElement("br", null),
                                  a.a.createElement("span", null, "Posts")
                                ),
                                a.a.createElement(
                                  H.a,
                                  null,
                                  a.a.createElement(
                                    "span",
                                    null,
                                    L.followers && L.followers.length
                                  ),
                                  a.a.createElement("br", null),
                                  a.a.createElement("span", null, "Followers")
                                ),
                                a.a.createElement(
                                  H.a,
                                  null,
                                  a.a.createElement(
                                    "span",
                                    null,
                                    L.following && L.following.length
                                  ),
                                  a.a.createElement("br", null),
                                  a.a.createElement("span", null, "Following")
                                )
                              ),
                              a.a.createElement(
                                y.a,
                                { className: "my-3 text-center" },
                                a.a.createElement(le, {
                                  text: "Rating : ",
                                  value: L.rating,
                                })
                              ),
                              L._id === _._id
                                ? a.a.createElement(
                                    a.a.Fragment,
                                    null,
                                    a.a.createElement(
                                      v.Link,
                                      { to: "/edit" },
                                      a.a.createElement(
                                        k.a,
                                        {
                                          size: "sm",
                                          variant: "info",
                                          className: "me-3",
                                        },
                                        "Edit Profile"
                                      )
                                    ),
                                    a.a.createElement(
                                      v.Link,
                                      { to: "/events/enrollments" },
                                      a.a.createElement(
                                        k.a,
                                        {
                                          size: "sm",
                                          variant: "outline-light",
                                        },
                                        "Enrollments"
                                      )
                                    )
                                  )
                                : 0 === u
                                ? a.a.createElement(
                                    k.a,
                                    {
                                      variant: "info",
                                      onClick: function () {
                                        o(
                                          (function (e) {
                                            return (function () {
                                              var t = Object(R.a)(
                                                F().mark(function t(n, r) {
                                                  var a, o, i, c, l;
                                                  return F().wrap(
                                                    function (t) {
                                                      for (;;)
                                                        switch (
                                                          (t.prev = t.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (t.prev = 0),
                                                              n({
                                                                type: "USER_REQUEST_REQUEST",
                                                              }),
                                                              (a = r()),
                                                              (o =
                                                                a.userLogin
                                                                  .userInfo),
                                                              (i = o.username),
                                                              (c = o.token),
                                                              (l = {
                                                                "Content-Type":
                                                                  "application/json",
                                                                headers: {
                                                                  Authorization:
                                                                    "Bearer ".concat(
                                                                      c
                                                                    ),
                                                                },
                                                              }),
                                                              (t.next = 6),
                                                              P.post(
                                                                "/users/".concat(
                                                                  e.username,
                                                                  "/request"
                                                                ),
                                                                { username: i },
                                                                l
                                                              )
                                                            );
                                                          case 6:
                                                            n({
                                                              type: "USER_REQUEST_SUCCESS",
                                                            }),
                                                              (t.next = 12);
                                                            break;
                                                          case 9:
                                                            (t.prev = 9),
                                                              (t.t0 =
                                                                t.catch(0)),
                                                              n({
                                                                type: "USER_REQUEST_FAIL",
                                                                payload:
                                                                  t.t0
                                                                    .response &&
                                                                  t.t0.response
                                                                    .data
                                                                    .message
                                                                    ? t.t0
                                                                        .response
                                                                        .data
                                                                        .message
                                                                    : t.t0
                                                                        .message,
                                                              });
                                                          case 12:
                                                          case "end":
                                                            return t.stop();
                                                        }
                                                    },
                                                    t,
                                                    null,
                                                    [[0, 9]]
                                                  );
                                                })
                                              );
                                              return function (e, n) {
                                                return t.apply(this, arguments);
                                              };
                                            })();
                                          })(L)
                                        ),
                                          s(1);
                                      },
                                    },
                                    "Request"
                                  )
                                : 1 === u
                                ? a.a.createElement(
                                    k.a,
                                    {
                                      variant: "outline-info",
                                      onClick: function () {
                                        o(
                                          (function (e) {
                                            return (function () {
                                              var t = Object(R.a)(
                                                F().mark(function t(n, r) {
                                                  var a, o, i, c;
                                                  return F().wrap(
                                                    function (t) {
                                                      for (;;)
                                                        switch (
                                                          (t.prev = t.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (t.prev = 0),
                                                              n({
                                                                type: "USER_UNREQUEST_REQUEST",
                                                              }),
                                                              (a = r()),
                                                              (o =
                                                                a.userLogin
                                                                  .userInfo),
                                                              (i = o.username),
                                                              (c = {
                                                                "Content-Type":
                                                                  "application/json",
                                                                headers: {
                                                                  Authorization:
                                                                    "Bearer ".concat(
                                                                      o.token
                                                                    ),
                                                                },
                                                              }),
                                                              (t.next = 7),
                                                              P.post(
                                                                "/users/".concat(
                                                                  e.username,
                                                                  "/unrequest"
                                                                ),
                                                                { username: i },
                                                                c
                                                              )
                                                            );
                                                          case 7:
                                                            n({
                                                              type: "USER_UNREQUEST_SUCCESS",
                                                            }),
                                                              (t.next = 13);
                                                            break;
                                                          case 10:
                                                            (t.prev = 10),
                                                              (t.t0 =
                                                                t.catch(0)),
                                                              n({
                                                                type: "USER_UNREQUEST_FAIL",
                                                                payload:
                                                                  t.t0
                                                                    .response &&
                                                                  t.t0.response
                                                                    .data
                                                                    .message
                                                                    ? t.t0
                                                                        .response
                                                                        .data
                                                                        .message
                                                                    : t.t0
                                                                        .message,
                                                              });
                                                          case 13:
                                                          case "end":
                                                            return t.stop();
                                                        }
                                                    },
                                                    t,
                                                    null,
                                                    [[0, 10]]
                                                  );
                                                })
                                              );
                                              return function (e, n) {
                                                return t.apply(this, arguments);
                                              };
                                            })();
                                          })(L)
                                        ),
                                          s(0);
                                      },
                                    },
                                    "Un Request"
                                  )
                                : a.a.createElement(
                                    k.a,
                                    { variant: "light" },
                                    "Following"
                                  ),
                              a.a.createElement(
                                g.a,
                                { className: "mt-4 pt-2" },
                                a.a.createElement(
                                  y.a,
                                  { xs: "auto" },
                                  a.a.createElement(
                                    H.a,
                                    { className: "p-2 m-1 text-muted" },
                                    "Skills : "
                                  ),
                                  L.skills
                                    ? L.skills.map(function (e, t) {
                                        return a.a.createElement(
                                          H.a,
                                          {
                                            key: t,
                                            className:
                                              "p-2 m-1 bg-light text-primary rounded-pill",
                                          },
                                          de[e]
                                        );
                                      })
                                    : a.a.createElement(
                                        "p",
                                        null,
                                        "Not yet Added"
                                      )
                                )
                              )
                            )
                          ),
                          a.a.createElement(
                            y.a,
                            { xs: "auto", className: "px-4 mx-4 mt-4" },
                            a.a.createElement(
                              H.a,
                              { className: "text-muted" },
                              "About : "
                            ),
                            L.about
                          )
                        )
                      )
                    ),
                    a.a.createElement(
                      y.a,
                      null,
                      a.a.createElement(
                        H.a,
                        { className: "offset-2", md: 8 },
                        (L.followers && L.followers.includes(_._id)) ||
                          L._id === _._id
                          ? a.a.createElement(ie, { posts: L.posts })
                          : a.a.createElement(
                              Z,
                              { variant: "danger" },
                              "Private Account"
                            )
                      )
                    )
                  )
                : a.a.createElement(
                    Z,
                    { variant: "danger" },
                    "Username Doesnot exsist"
                  )
            )
          );
        },
        xe = n(178),
        Le = function () {
          var e = Object(c.c)(),
            t = Object(c.d)(function (e) {
              return e.eventTopRated;
            }),
            n = t.loading,
            o = t.error,
            i = t.events;
          return (
            Object(r.useEffect)(
              function () {
                e(
                  (function () {
                    var e = Object(R.a)(
                      te().mark(function e(t) {
                        var n, r;
                        return te().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.prev = 0),
                                    t({ type: "EVENT_TOP_REQUEST" }),
                                    (e.next = 4),
                                    P.get("/events/top")
                                  );
                                case 4:
                                  (n = e.sent),
                                    (r = n.data),
                                    t({
                                      type: "EVENT_TOP_SUCCESS",
                                      payload: r,
                                    }),
                                    (e.next = 12);
                                  break;
                                case 9:
                                  (e.prev = 9),
                                    (e.t0 = e.catch(0)),
                                    t({
                                      type: "EVENT_TOP_FAIL",
                                      payload:
                                        e.t0.response &&
                                        e.t0.response.data.message
                                          ? e.t0.response.data.message
                                          : e.t0.message,
                                    });
                                case 12:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
              },
              [e]
            ),
            n
              ? a.a.createElement(ee, null)
              : o
              ? a.a.createElement(Z, null, o)
              : a.a.createElement(
                  xe.a,
                  { pause: "hover", className: "bg-dark" },
                  i.map(function (e) {
                    return a.a.createElement(
                      xe.a.Item,
                      { key: e._id },
                      a.a.createElement(
                        v.Link,
                        { to: "/event/".concat(e._id) },
                        a.a.createElement(M.a, {
                          src: e.image,
                          alt: e.name,
                          fluid: !0,
                        }),
                        a.a.createElement(
                          xe.a.Caption,
                          { className: "carousel-caption" },
                          a.a.createElement("h2", null, e.name)
                        )
                      )
                    );
                  })
                )
          );
        },
        Oe = Object(c.b)(function (e) {
          return { profile: e.userLogin.userInfo };
        })(function (e) {
          var t = e.event,
            n = e.profile,
            o = Object(c.c)(),
            i = Object(r.useState)(!1),
            l = Object(C.a)(i, 2),
            u = l[0],
            s = l[1],
            f = Object(r.useState)(!1),
            p = Object(C.a)(f, 2),
            h = p[0],
            m = p[1];
          Object(r.useEffect)(
            function () {
              t && n && m(t.enrolled.includes(n._id));
            },
            [h]
          );
          var d = function (e) {
            o(
              (function (e) {
                return (function () {
                  var t = Object(R.a)(
                    te().mark(function t(n, r) {
                      var a, o, i, c, l, u;
                      return te().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0),
                                  n({ type: "EVENT_ENROLL_REQUEST" }),
                                  (a = r()),
                                  (o = a.userLogin.userInfo),
                                  (i = {
                                    headers: {
                                      "Content-Type": "application/json",
                                      Authorization: "Bearer ".concat(o.token),
                                    },
                                  }),
                                  (c = o._id),
                                  (t.next = 7),
                                  P.post(
                                    "/events/".concat(e, "/enroll"),
                                    { userId: c },
                                    i
                                  )
                                );
                              case 7:
                                (l = t.sent),
                                  (u = l.data),
                                  n({
                                    type: "EVENT_ENROLL_SUCCESS",
                                    payload: u,
                                  }),
                                  (t.next = 15);
                                break;
                              case 12:
                                (t.prev = 12),
                                  (t.t0 = t.catch(0)),
                                  n({
                                    type: "EVENT_ENROLL_FAIL",
                                    payload:
                                      t.t0.response &&
                                      t.t0.response.data.message
                                        ? t.t0.response.data.message
                                        : t.t0.message,
                                  });
                              case 15:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        null,
                        [[0, 12]]
                      );
                    })
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })();
              })(e)
            ),
              m(!0);
          };
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              function (e) {
                return a.a.createElement(
                  q.a,
                  Object.assign({}, e, {
                    size: "lg",
                    "aria-labelledby": "contained-modal-title-vcenter",
                    centered: !0,
                  }),
                  a.a.createElement(
                    q.a.Header,
                    { closeButton: !0 },
                    a.a.createElement(
                      q.a.Title,
                      { id: "contained-modal-title-vcenter" },
                      "Edit Event"
                    )
                  ),
                  a.a.createElement(
                    q.a.Body,
                    null,
                    a.a.createElement(ae, { event: e.event, onHide: e.onHide })
                  ),
                  a.a.createElement(
                    q.a.Footer,
                    null,
                    a.a.createElement(k.a, { onClick: e.onHide }, "Close")
                  )
                );
              },
              {
                event: t,
                show: u,
                onHide: function () {
                  return s(!1);
                },
              }
            ),
            a.a.createElement(
              W.a,
              { bg: "dark", text: "white", className: "my-3 p-3 rounded" },
              a.a.createElement(
                W.a.Header,
                null,
                a.a.createElement(
                  y.a,
                  null,
                  a.a.createElement(H.a, null),
                  a.a.createElement(H.a, null),
                  a.a.createElement(
                    H.a,
                    { className: "text-center" },
                    n &&
                      n.username === t.username &&
                      a.a.createElement(
                        a.a.Fragment,
                        null,
                        a.a.createElement(
                          k.a,
                          {
                            onClick: function () {
                              s(!0);
                            },
                            className: "mx-auto py-1 px-2 me-2",
                            size: "small",
                            variant: "info",
                          },
                          a.a.createElement("small", null, "Edit")
                        ),
                        a.a.createElement(
                          k.a,
                          {
                            onClick: function () {
                              var e;
                              o(
                                ((e = t._id),
                                (function () {
                                  var t = Object(R.a)(
                                    te().mark(function t(n, r) {
                                      var a, o, i;
                                      return te().wrap(
                                        function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                return (
                                                  (t.prev = 0),
                                                  n({
                                                    type: "EVENT_DELETE_REQUEST",
                                                  }),
                                                  (a = r()),
                                                  (o = a.userLogin.userInfo),
                                                  (i = {
                                                    headers: {
                                                      Authorization:
                                                        "Bearer ".concat(
                                                          o.token
                                                        ),
                                                    },
                                                  }),
                                                  (t.next = 6),
                                                  P.delete(
                                                    "/events/".concat(e),
                                                    i
                                                  )
                                                );
                                              case 6:
                                                n({
                                                  type: "EVENT_DELETE_SUCCESS",
                                                }),
                                                  (t.next = 12);
                                                break;
                                              case 9:
                                                (t.prev = 9),
                                                  (t.t0 = t.catch(0)),
                                                  n({
                                                    type: "EVENT_DELETE_FAIL",
                                                    payload:
                                                      t.t0.response &&
                                                      t.t0.response.data.message
                                                        ? t.t0.response.data
                                                            .message
                                                        : t.t0.message,
                                                  });
                                              case 12:
                                              case "end":
                                                return t.stop();
                                            }
                                        },
                                        t,
                                        null,
                                        [[0, 9]]
                                      );
                                    })
                                  );
                                  return function (e, n) {
                                    return t.apply(this, arguments);
                                  };
                                })())
                              );
                            },
                            className: "mx-auto py-1 px-2",
                            size: "small",
                            variant: "danger",
                          },
                          a.a.createElement("small", null, "Delete")
                        )
                      )
                  )
                )
              ),
              a.a.createElement(
                v.Link,
                { to: "/event/".concat(t._id) },
                a.a.createElement(W.a.Img, { src: t.image, variant: "top" })
              ),
              a.a.createElement(
                W.a.Body,
                null,
                a.a.createElement(
                  W.a.Title,
                  { as: "div" },
                  a.a.createElement("strong", null, t.caption)
                )
              ),
              a.a.createElement(
                W.a.Footer,
                null,
                h
                  ? a.a.createElement(k.a, { variant: "info" }, "Enrolled")
                  : a.a.createElement(
                      k.a,
                      {
                        variant: "info",
                        onClick: function () {
                          return d(t._id);
                        },
                      },
                      "Enroll"
                    )
              )
            )
          );
        }),
        je = Object(c.b)(function (e) {
          return { userInfo: e.userLogin.userInfo };
        })(function (e) {
          var t = e.match,
            n = e.userInfo,
            o = Object(c.c)(),
            i = t.params.keyword,
            l = t.params.pageNumber || 1,
            u = Object(c.d)(function (e) {
              return e.eventList;
            }),
            s = u.loading,
            f = u.error,
            p = u.events;
          return (
            Object(r.useEffect)(
              function () {
                o(ne(i, l));
              },
              [o, i, l]
            ),
            a.a.createElement(
              a.a.Fragment,
              null,
              i
                ? a.a.createElement(
                    v.Link,
                    { to: "/", className: "btn btn-light" },
                    "Go Back"
                  )
                : a.a.createElement(Le, null),
              a.a.createElement("h1", null, "Latest Events"),
              s
                ? a.a.createElement(ee, null)
                : f
                ? a.a.createElement(Z, { variant: "danger" }, f)
                : a.a.createElement(
                    g.a,
                    null,
                    a.a.createElement(
                      y.a,
                      null,
                      a.a.createElement(
                        H.a,
                        { md: 3 },
                        a.a.createElement(Ee, { profile: n })
                      ),
                      a.a.createElement(
                        H.a,
                        { className: "offset-1" },
                        p.length > 0
                          ? p.map(function (e) {
                              return a.a.createElement(
                                y.a,
                                { key: e._id },
                                a.a.createElement(Oe, { event: e })
                              );
                            })
                          : a.a.createElement(
                              Z,
                              { variant: "info" },
                              "No Events Hosted or Available"
                            )
                      )
                    )
                  )
            )
          );
        }),
        Te = function (e) {
          var t = e.user;
          return a.a.createElement(
            W.a,
            { bg: "dark", text: "white", className: "my-3 p-3 rounded" },
            a.a.createElement(
              W.a.Body,
              null,
              a.a.createElement(
                y.a,
                { className: "text-center" },
                a.a.createElement(
                  g.a,
                  { className: "text-center" },
                  a.a.createElement(M.a, {
                    src: t.dp,
                    width: "200px",
                    height: "200px",
                    roundedCircle: !0,
                    className: "mx-auto",
                  })
                ),
                a.a.createElement(
                  y.a,
                  { className: "my-2 text-center" },
                  a.a.createElement(
                    v.Link,
                    {
                      to: "/profile/".concat(t.username),
                      className: "username",
                    },
                    t.name
                  )
                ),
                a.a.createElement(
                  y.a,
                  null,
                  a.a.createElement(
                    "small",
                    { className: "text-muted mb-1 text-center" },
                    t.tagline
                  )
                ),
                a.a.createElement(
                  y.a,
                  {
                    className: "my-2 text-center",
                    style: { fontSize: "11px" },
                  },
                  a.a.createElement(
                    H.a,
                    null,
                    a.a.createElement("span", null, t.posts && t.posts.length),
                    a.a.createElement("br", null),
                    a.a.createElement("span", null, "Posts")
                  ),
                  a.a.createElement(
                    H.a,
                    null,
                    a.a.createElement(
                      "span",
                      null,
                      t.followers && t.followers.length
                    ),
                    a.a.createElement("br", null),
                    a.a.createElement("span", null, "Followers")
                  ),
                  a.a.createElement(
                    H.a,
                    null,
                    a.a.createElement(
                      "span",
                      null,
                      t.following && t.following.length
                    ),
                    a.a.createElement("br", null),
                    a.a.createElement("span", null, "Following")
                  )
                ),
                a.a.createElement(
                  y.a,
                  {
                    className: "my-3 text-justify",
                    style: { fontSize: "14px" },
                  },
                  a.a.createElement("small", null, t.about)
                ),
                a.a.createElement(
                  y.a,
                  { className: "my-1 text-center" },
                  a.a.createElement(le, { text: "Rating : ", value: 5 })
                )
              )
            )
          );
        },
        ke = function () {
          var e = Object(c.c)(),
            t = Object(c.d)(function (e) {
              return e.developerList;
            }),
            n = t.loading,
            o = t.developers;
          return (
            Object(r.useEffect)(
              function () {
                (o && 0 !== o.length) ||
                  e(
                    (function () {
                      var e = Object(R.a)(
                        F().mark(function e(t) {
                          var n, r;
                          return F().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      t({ type: "USER_DEVELOPER_REQUEST" }),
                                      (e.next = 4),
                                      P.get("/users/developers")
                                    );
                                  case 4:
                                    (n = e.sent),
                                      (r = n.data),
                                      t({
                                        type: "USER_DEVELOPER_SUCCESS",
                                        payload: r,
                                      }),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      t({
                                        type: "USER_DEVELOPER_FAIL",
                                        payload:
                                          e.t0.response &&
                                          e.t0.response.data.message
                                            ? e.t0.response.data.message
                                            : e.t0.message,
                                      });
                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
              },
              [o, e]
            ),
            a.a.createElement(
              g.a,
              null,
              n && a.a.createElement(ee, null),
              a.a.createElement(y.a, null, "Developed By"),
              a.a.createElement(
                y.a,
                null,
                o &&
                  o.map(function (e) {
                    return a.a.createElement(
                      H.a,
                      { md: 4 },
                      a.a.createElement(Te, { user: e })
                    );
                  })
              )
            )
          );
        },
        Ce = function () {
          var e = Object(r.useState)(""),
            t = Object(C.a)(e, 2),
            n = t[0],
            o = t[1];
          return a.a.createElement(
            g.a,
            null,
            a.a.createElement(Z, { variant: "info" }, "Welcome To Help Center"),
            a.a.createElement(
              re,
              null,
              a.a.createElement("h1", null, "Make your Queries Here"),
              a.a.createElement(
                N.a,
                null,
                a.a.createElement(
                  N.a.Group,
                  { controlId: "Help" },
                  a.a.createElement(N.a.Label, null, "Help"),
                  a.a.createElement(N.a.Control, {
                    type: "Help",
                    placeholder: "Enter the Help Required",
                    value: n,
                    onChange: function (e) {
                      return o(e.target.value);
                    },
                  })
                ),
                a.a.createElement("br", null),
                a.a.createElement(
                  v.Link,
                  { to: "/" },
                  a.a.createElement(
                    k.a,
                    { type: "submit", variant: "primary" },
                    "Submit"
                  )
                )
              )
            )
          );
        },
        Ne = n(174),
        Ie =
          (n(117),
          n(121),
          function () {
            var e = localStorage.getItem("userInfo");
            return e ? JSON.parse(e) : null;
          }),
        Re = A.a.create({ baseURL: "https://our-psna-campus.onrender.com" });
      Re.interceptors.request.use(function (e) {
        var t = Ie();
        return (
          t && (e.headers.common.Authorization = "Bearer ".concat(t.token)), e
        );
      });
      var Ue = Re,
        Ae = n(33),
        Pe = function () {
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 }),
            a.a.createElement(Ae.a, { height: 45 })
          );
        },
        Fe = n(182),
        Ge = n(173),
        De = function (e) {
          var t = e.user,
            n = e.handleFunction;
          return a.a.createElement(
            Fe.a.Item,
            {
              action: !0,
              onClick: n,
              variant: "info",
              style: { cursor: "pointer", borderRadius: "5px" },
              className: "d-flex align-items-center",
            },
            a.a.createElement(M.a, {
              style: {
                maxWidth: "10vw",
                maxHeight: "10vh",
                paddingRight: "10px",
              },
              className: "mr-3",
              size: "sm",
              src: t.dp,
              name: t.username,
              roundedCircle: !0,
            }),
            a.a.createElement(
              "div",
              null,
              a.a.createElement(Ge.a, { variant: "secondary" }, t.username),
              a.a.createElement("br", null),
              a.a.createElement(
                "small",
                null,
                a.a.createElement("b", null, "Name: "),
                t.name
              )
            )
          );
        },
        ze = function (e) {
          var t = e.user,
            n = e.children,
            r = a.a.useState(!1),
            o = Object(C.a)(r, 2),
            i = o[0],
            c = o[1],
            l = function () {
              return c(!1);
            },
            u = function () {
              return c(!0);
            };
          return a.a.createElement(
            a.a.Fragment,
            null,
            n
              ? a.a.createElement(k.a, { variant: "link", onClick: u }, n)
              : a.a.createElement(
                  k.a,
                  { variant: "secondary", onClick: u },
                  "View Profile"
                ),
            t &&
              a.a.createElement(
                q.a,
                { show: i, onHide: l },
                a.a.createElement(
                  q.a.Header,
                  { closeButton: !0 },
                  a.a.createElement(q.a.Title, null, t.username)
                ),
                a.a.createElement(
                  q.a.Body,
                  { className: "text-center" },
                  a.a.createElement(M.a, {
                    src: t.dp,
                    width: "200px",
                    height: "200px",
                    roundedCircle: !0,
                    className: "mx-auto",
                  }),
                  a.a.createElement("p", null, t.name)
                ),
                a.a.createElement(
                  q.a.Footer,
                  null,
                  a.a.createElement(
                    k.a,
                    { variant: "secondary", onClick: l },
                    "Close"
                  )
                )
              )
          );
        },
        Ve = function (e, t) {
          return t[0]._id === e._id ? t[1].username : t[0].username;
        },
        Be = function (e, t, n, r) {
          return n < e.length - 1 &&
            e[n + 1].sender._id === t.sender._id &&
            e[n].sender._id !== r
            ? 33
            : (n < e.length - 1 &&
                e[n + 1].sender._id !== t.sender._id &&
                e[n].sender._id !== r) ||
              (n === e.length - 1 && e[n].sender._id !== r)
            ? 0
            : "auto";
        },
        Qe = function (e, t, n) {
          return n > 0 && e[n - 1].sender._id === t.sender._id;
        };
      n(179);
      var He = n(79),
        Ye = function (e) {
          var t = e.user,
            n = e.handleFunction,
            r = e.admin;
          return a.a.createElement(
            Ge.a,
            { pill: !0, variant: "primary", className: "m-1", onClick: n },
            t.username,
            r === t._id && a.a.createElement("span", null, " (Admin)"),
            a.a.createElement(He.b, { size: 12, style: { marginLeft: "5px" } })
          );
        };
      n(160);
      function qe() {
        qe = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var We = function (e) {
          var t = e.selectedChat,
            n = e.setSelectedChat,
            o = e.fetchAgain,
            i = e.chats,
            c = e.setChats,
            l = Object(r.useState)(),
            u = Object(C.a)(l, 2),
            s = u[0],
            f = u[1],
            p = Object(r.useState)([]),
            h = Object(C.a)(p, 2),
            m = h[0],
            d = h[1],
            v = Object(r.useState)(""),
            E = Object(C.a)(v, 2),
            b = E[0],
            w = E[1],
            _ = (function () {
              var e = Object(R.a)(
                qe().mark(function e() {
                  var n, r;
                  return qe().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              console.log(t),
                              (e.next = 4),
                              Ue.get("/api/v1/chat")
                            );
                          case 4:
                            (n = e.sent), (r = n.data), c(r), (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(r.useEffect)(
            function () {
              f(Ie()), _();
            },
            [o]
          );
          var S = (function () {
              var e = Object(R.a)(
                qe().mark(function e(t) {
                  var n, r;
                  return qe().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((t.preventDefault(), b)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              (e.prev = 3),
                              (e.next = 6),
                              Ue.get("/users/chat?search=".concat(b))
                            );
                          case 6:
                            (n = e.sent), (r = n.data), d(r), (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(3)),
                              console.error(e.t0);
                          case 14:
                            w("");
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 11]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            x = (function () {
              var e = Object(R.a)(
                qe().mark(function e(t) {
                  var r, a;
                  return qe().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              console.log(t),
                              (e.next = 4),
                              Ue.post("/api/v1/chat", { userId: t })
                            );
                          case 4:
                            (r = e.sent),
                              (a = r.data),
                              console.log(a),
                              i.find(function (e) {
                                return e._id === a._id;
                              }) || c([a].concat(Object(he.a)(i))),
                              n(a),
                              d([]),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return a.a.createElement(
            g.a,
            { style: { display: "flex" } },
            a.a.createElement(
              y.a,
              null,
              a.a.createElement(
                H.a,
                null,
                a.a.createElement(
                  "h3",
                  { className: "text-center mt-3 mb-3" },
                  "My Chats"
                ),
                a.a.createElement(
                  N.a,
                  { onSubmit: S, className: "d-flex", inline: !0 },
                  a.a.createElement(N.a.Control, {
                    type: "search",
                    name: "q",
                    onChange: function (e) {
                      return w(e.target.value);
                    },
                    placeholder: "Search",
                    className: "mr-sm-2 ml-sm-5 me-2",
                    "aria-label": "Search",
                  }),
                  a.a.createElement(
                    k.a,
                    { onClick: S, variant: "outline-success" },
                    "Search"
                  )
                ),
                m &&
                  m.length > 0 &&
                  a.a.createElement(
                    Fe.a,
                    {
                      style: {
                        overflowY: "scroll",
                        height: "50vh",
                        width: "25vw",
                        paddingTop: "2vh",
                      },
                    },
                    m.map(function (e) {
                      return a.a.createElement(De, {
                        key: e._id,
                        user: e,
                        handleFunction: function () {
                          return x(e._id);
                        },
                      });
                    })
                  ),
                m &&
                  m.length < 1 &&
                  a.a.createElement(
                    Fe.a,
                    {
                      className: "pt-3 mt-3",
                      style: {
                        overflowY: "scroll",
                        height: "50vh",
                        msOverflowStyle: "none",
                        WebkitScrollBar: "none",
                      },
                    },
                    i
                      ? i.map(function (e) {
                          return a.a.createElement(
                            Fe.a.Item,
                            {
                              variant: t === e ? "info" : "light",
                              onClick: function () {
                                return n(e);
                              },
                              key: e && e._id,
                              className: "mt-2",
                              action: !0,
                            },
                            e && !e.isGroupChat ? Ve(s, e.users) : e.chatName
                          );
                        })
                      : a.a.createElement(Pe, null)
                  )
              )
            )
          );
        },
        Me = (n(147), n(123)),
        Ke = Object(c.b)(function (e) {
          return { user: e.userLogin.userInfo, loading: e.userLogin.loading };
        })(function (e) {
          var t = e.messages,
            n = e.user,
            o = Object(r.useRef)(null);
          return (
            Object(r.useEffect)(
              function () {
                o.current && o.current.scrollIntoView({ behavior: "smooth" });
              },
              [t]
            ),
            a.a.createElement(
              "div",
              null,
              t &&
                t.map(function (e, r) {
                  return a.a.createElement(
                    "div",
                    { style: { display: "flex" }, key: e._id },
                    ((function (e, t, n, r) {
                      return (
                        n < e.length - 1 &&
                        (e[n + 1].sender._id !== t.sender._id ||
                          void 0 === e[n + 1].sender._id) &&
                        e[n].sender._id !== r
                      );
                    })(t, e, r, n._id) ||
                      (function (e, t, n) {
                        return (
                          t === e.length - 1 &&
                          e[e.length - 1].sender._id !== n &&
                          e[e.length - 1].sender._id
                        );
                      })(t, r, n._id)) &&
                      a.a.createElement(M.a, {
                        src: e.sender.dp,
                        width: "20px",
                        height: "20px",
                        roundedCircle: !0,
                      }),
                    a.a.createElement(
                      "span",
                      {
                        style: {
                          backgroundColor: "".concat(
                            e.sender._id === n._id ? "#BEE3F8" : "#B9F5D0"
                          ),
                          marginLeft: Be(t, e, r, n._id),
                          marginTop: Qe(t, e, r, n._id) ? 3 : 10,
                          borderRadius: "20px",
                          padding: "5px 15px",
                          maxWidth: "50vw",
                        },
                      },
                      e.message
                    )
                  );
                }),
              a.a.createElement("div", { ref: o })
            )
          );
        });
      function Je() {
        Je = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var Xe,
        Ze,
        $e = function (e) {
          var t = e.fetchMessages,
            n = e.fetchAgain,
            o = e.setFetchAgain,
            i = {},
            c = i.selectedChat,
            l = i.setSelectedChat,
            u = i.user,
            s = Object(Ne.a)(),
            f = s.isOpen,
            p = s.onOpen,
            h = s.onClose,
            m = Object(r.useState)(),
            d = Object(C.a)(m, 2),
            v = d[0],
            E = d[1],
            y = Object(r.useState)(""),
            b = Object(C.a)(y, 2),
            w = b[0],
            _ = b[1],
            S = Object(r.useState)([]),
            x = Object(C.a)(S, 2),
            L = x[0],
            O = x[1],
            j = Object(r.useState)(!1),
            T = Object(C.a)(j, 2),
            I = T[0],
            U = T[1],
            A = Object(r.useState)(!1),
            P = Object(C.a)(A, 2),
            F = (P[0], P[1]),
            G = (function () {
              var e = Object(R.a)(
                Je().mark(function e(r) {
                  var a, i;
                  return Je().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (c.groupAdmin._id === u._id || r._id === u._id) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.prev = 2),
                              U(!0),
                              (e.next = 6),
                              Ue.patch("/api/v1/chat/removeFromGroup", {
                                chatId: c._id,
                                userId: r._id,
                              })
                            );
                          case 6:
                            (a = e.sent),
                              (i = a.data),
                              r._id === u._id ? l() : l(i),
                              o(!n),
                              t(),
                              U(!1),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14), (e.t0 = e.catch(2)), U(!1);
                          case 17:
                            E("");
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            D = (function () {
              var e = Object(R.a)(
                Je().mark(function e(t) {
                  var n, r;
                  return Je().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ((_(t), t)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              (e.prev = 3),
                              U(!0),
                              (e.next = 7),
                              Ue.get("/api/v1/auth/users?search=".concat(w))
                            );
                          case 7:
                            (n = e.sent),
                              (r = n.data),
                              U(!1),
                              O(r),
                              (e.next = 15);
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(3));
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 13]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            z = (function () {
              var e = Object(R.a)(
                Je().mark(function e() {
                  var t, r;
                  return Je().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (v) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.prev = 2),
                              F(!0),
                              (e.next = 6),
                              Ue.patch("/api/v1/chat/renameGroup", {
                                chatId: c._id,
                                chatName: v,
                              })
                            );
                          case 6:
                            (t = e.sent),
                              (r = t.data),
                              l(r),
                              o(!n),
                              F(!1),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(2)), F(!1);
                          case 16:
                            E("");
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 13]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            V = (function () {
              var e = Object(R.a)(
                Je().mark(function e(t) {
                  var r, a;
                  return Je().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !c.users.find(function (e) {
                                return e._id === t._id;
                              })
                            ) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            if (c.groupAdmin._id === u._id) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              (e.prev = 4),
                              U(!0),
                              (e.next = 8),
                              Ue.patch("/api/v1/chat/addUserToGroup", {
                                chatId: c._id,
                                userId: t._id,
                              })
                            );
                          case 8:
                            (r = e.sent),
                              (a = r.data),
                              l(a),
                              o(!n),
                              U(!1),
                              (e.next = 18);
                            break;
                          case 15:
                            (e.prev = 15), (e.t0 = e.catch(4)), U(!1);
                          case 18:
                            E("");
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(
              k.a,
              { onClick: p },
              a.a.createElement(M.a, { icon: "fa-bell" })
            ),
            a.a.createElement(
              q.a,
              { show: f, onHide: h, centered: !0 },
              a.a.createElement(
                q.a.Header,
                { closeButton: !0 },
                a.a.createElement(q.a.Title, null, c.chatName)
              ),
              a.a.createElement(
                q.a.Body,
                null,
                a.a.createElement(
                  g.a,
                  null,
                  c.users.map(function (e) {
                    return a.a.createElement(Ye, {
                      key: e._id,
                      user: e,
                      admin: c.groupAdmin,
                      handleFunction: function () {
                        return G(e);
                      },
                    });
                  })
                ),
                a.a.createElement(
                  N.a,
                  null,
                  a.a.createElement(
                    N.a.Group,
                    { controlId: "formBasicEmail" },
                    a.a.createElement(N.a.Control, {
                      type: "text",
                      placeholder: "Chat Name",
                      value: v,
                      onChange: function (e) {
                        return E(e.target.value);
                      },
                    })
                  ),
                  a.a.createElement(
                    k.a,
                    { variant: "primary", onClick: z },
                    "Update"
                  )
                ),
                a.a.createElement(
                  N.a,
                  null,
                  a.a.createElement(
                    N.a.Group,
                    { controlId: "formBasicEmail" },
                    a.a.createElement(N.a.Control, {
                      type: "text",
                      placeholder: "Add User to group",
                      onChange: function (e) {
                        return D(e.target.value);
                      },
                    })
                  )
                ),
                I
                  ? a.a.createElement($.a, {
                      animation: "border",
                      role: "status",
                    })
                  : L &&
                      L.map(function (e) {
                        return a.a.createElement(De, {
                          key: e._id,
                          user: e,
                          handleFunction: function () {
                            return V(e);
                          },
                        });
                      })
              ),
              a.a.createElement(
                q.a.Footer,
                null,
                a.a.createElement(
                  k.a,
                  {
                    variant: "danger",
                    onClick: function () {
                      return G(u);
                    },
                  },
                  "Leave Group"
                )
              )
            )
          );
        };
      function et() {
        et = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (T) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof p ? t : p,
            i = Object.create(o.prototype),
            c = new L(a || []);
          return r(i, "_invoke", { value: w(e, n, c) }), i;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (T) {
            return { type: "throw", arg: T };
          }
        }
        e.wrap = u;
        var f = {};
        function p() {}
        function h() {}
        function m() {}
        var d = {};
        l(d, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          E = v && v(v(O([])));
        E && E !== t && n.call(E, o) && (d = E);
        var g = (m.prototype = p.prototype = Object.create(d));
        function y(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, c) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        f = u.value;
                      return f && "object" == typeof f && n.call(f, "__await")
                        ? t.resolve(f.__await).then(
                            function (e) {
                              r("next", e, i, c);
                            },
                            function (e) {
                              r("throw", e, i, c);
                            }
                          )
                        : t.resolve(f).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, c);
                            }
                          );
                    }
                    c(l.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var c = _(i, n);
                if (c) {
                  if (c === f) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === f)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function S(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(S, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = m),
          r(g, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: h, configurable: !0 }),
          (h.displayName = l(m, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          y(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          y(g),
          l(g, c, "Generator"),
          l(g, o, function () {
            return this;
          }),
          l(g, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var c = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      var tt = function (e) {
          var t = e.fetchAgain,
            n = e.setFetchAgain,
            o = e.selectedChat,
            i = e.setSelectedChat,
            c = e.user,
            l = e.notification,
            u = e.setNotification,
            s = Object(r.useState)([]),
            f = Object(C.a)(s, 2),
            p = f[0],
            h = f[1],
            m = Object(r.useState)(!1),
            d = Object(C.a)(m, 2),
            v = d[0],
            E = d[1],
            g = Object(r.useState)(""),
            y = Object(C.a)(g, 2),
            b = y[0],
            w = y[1],
            _ = Object(r.useState)(!1),
            S = Object(C.a)(_, 2),
            x = S[0],
            L = S[1],
            O = Object(r.useState)(!1),
            j = Object(C.a)(O, 2),
            T = j[0],
            k = j[1],
            N = Object(r.useState)(!1),
            I = Object(C.a)(N, 2),
            U = I[0],
            A = I[1],
            P = (function () {
              var e = Object(R.a)(
                et().mark(function e() {
                  var t, n;
                  return et().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (o) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (e.prev = 2),
                              E(!0),
                              (e.next = 6),
                              Ue.get("/api/v1/message/".concat(o._id))
                            );
                          case 6:
                            (t = e.sent),
                              (n = t.data),
                              h(n),
                              E(!1),
                              Xe.emit("join-chat", o._id),
                              (e.next = 15);
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(2));
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 13]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            F = (function () {
              var e = Object(R.a)(
                et().mark(function e(t) {
                  var n, r;
                  return et().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("Enter" !== t.key || !b) {
                              e.next = 14;
                              break;
                            }
                            return (
                              Xe.emit("stop-typing", o._id),
                              (e.prev = 2),
                              (e.next = 5),
                              Ue.post("/api/v1/message/", {
                                message: b,
                                chatId: o._id,
                              })
                            );
                          case 5:
                            (n = e.sent),
                              (r = n.data),
                              w(""),
                              Xe.emit("new-message", r),
                              h([].concat(Object(he.a)(p), [r])),
                              (e.next = 14);
                            break;
                          case 12:
                            (e.prev = 12), (e.t0 = e.catch(2));
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 12]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(r.useEffect)(function () {
            (Xe = Object(Me.a)("https://our-skcet.onrender.com")).emit(
              "setup",
              c
            ),
              Xe.on("connected", function () {
                return L(!0);
              }),
              Xe.on("typing", function () {
                return A(!0);
              }),
              Xe.on("stop-typing", function () {
                return A(!1);
              });
          }, []),
            Object(r.useEffect)(
              function () {
                P(), (Ze = o);
              },
              [o]
            ),
            Object(r.useEffect)(function () {
              Xe.on("message-received", function (e) {
                Ze && Ze._id === e.chat._id
                  ? h([].concat(Object(he.a)(p), [e]))
                  : l.includes(e) || (u([e].concat(Object(he.a)(l))), n(!t));
              });
            });
          var G, D;
          return a.a.createElement(
            a.a.Fragment,
            null,
            o
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "3px",
                        paddingLeft: "2px",
                        width: "100%",
                        fontSize: window.innerWidth >= 768 ? "30px" : "28px",
                        fontFamily: "Poppins",
                      },
                    },
                    a.a.createElement(
                      "button",
                      {
                        style: {
                          display: window.innerWidth >= 768 ? "none" : "flex",
                        },
                        onClick: function () {
                          return i("");
                        },
                      },
                      a.a.createElement(He.a, null)
                    ),
                    o.isGroupChat
                      ? a.a.createElement(
                          a.a.Fragment,
                          null,
                          o.chatName.toUpperCase(),
                          a.a.createElement($e, {
                            fetchAgain: t,
                            setFetchAgain: n,
                            fetchMessages: P,
                          })
                        )
                      : a.a.createElement(
                          a.a.Fragment,
                          null,
                          Ve(c, o.users),
                          a.a.createElement(ze, {
                            user:
                              ((G = c),
                              (D = o.users),
                              D[0]._id === G._id ? D[1] : D[0]),
                          })
                        )
                  ),
                  a.a.createElement(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "3px",
                        backgroundColor: "#E8E8E8",
                        width: "100%",
                        height: "100%",
                        borderRadius: "lg",
                        overflowY: "hidden",
                      },
                    },
                    v
                      ? a.a.createElement(
                          "div",
                          {
                            style: {
                              width: "20px",
                              height: "20px",
                              margin: "auto",
                              alignSelf: "center",
                            },
                          },
                          a.a.createElement($.a, { size: "xl" })
                        )
                      : a.a.createElement(
                          "div",
                          {
                            className: "message",
                            style: { overflow: "auto", height: "60vh" },
                          },
                          a.a.createElement(Ke, { messages: p })
                        ),
                    a.a.createElement(
                      "div",
                      { style: { height: "15%", marginTop: "3px" } },
                      U
                        ? a.a.createElement("div", null, "Typing ...")
                        : a.a.createElement(a.a.Fragment, null),
                      a.a.createElement("input", {
                        style: {
                          backgroundColor: "#E0E0E0",
                          padding: "10px",
                          borderRadius: "5px",
                          width: "100%",
                          fontSize: "16px",
                        },
                        type: "text",
                        placeholder: "Enter a message..",
                        value: b,
                        onChange: function (e) {
                          if ((w(e.target.value), x)) {
                            T || (k(!0), Xe.emit("typing", o._id));
                            var t = new Date().getTime();
                            setTimeout(function () {
                              new Date().getTime() - t >= 3e3 &&
                                T &&
                                (Xe.emit("stop-typing", o._id), k(!1));
                            }, 3e3);
                          }
                        },
                        onKeyDown: F,
                        required: !0,
                      })
                    )
                  )
                )
              : a.a.createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    },
                  },
                  a.a.createElement(
                    "div",
                    {
                      style: {
                        fontSize: "3xl",
                        paddingBottom: "3px",
                        fontFamily: "Poppins",
                      },
                    },
                    "Click On Users to Start Conversation"
                  )
                )
          );
        },
        nt = function (e) {
          var t = e.fetchAgain,
            n = e.setFetchAgain,
            r = e.selectedChat,
            o = e.setSelectedChat,
            i = e.user,
            c = e.notifications,
            l = e.setNotifications;
          return a.a.createElement(
            g.a,
            {
              className: "d-flex",
              style: {
                alignItems: "center",
                flexDirection: "column",
                padding: "1rem",
                background: "white",
                width: "68%",
                height: "70vh",
                borderRadius: "1rem",
                border: "1px solid #dee2e6",
              },
            },
            a.a.createElement(tt, {
              fetchAgain: t,
              setFetchAgain: n,
              selectedChat: r,
              setSelectedChat: o,
              notification: c,
              setNotification: l,
              user: i,
            })
          );
        },
        rt = Object(c.b)(function (e) {
          return { user: e.userLogin.userInfo, loading: e.userLogin.loading };
        })(function (e) {
          var t = e.user,
            n = (e.loading, Object(r.useState)(null)),
            o = Object(C.a)(n, 2),
            i = o[0],
            c = o[1],
            l = Object(r.useState)(!1),
            u = Object(C.a)(l, 2),
            s = u[0],
            f = u[1],
            p = Object(r.useState)([]),
            h = Object(C.a)(p, 2),
            m = h[0],
            d = h[1],
            v = Object(r.useState)([]),
            b = Object(C.a)(v, 2),
            w = b[0],
            _ = b[1],
            S = Object(E.k)();
          return (
            Object(r.useEffect)(
              function () {
                Ie() || S.push("/signin");
              },
              [S]
            ),
            a.a.createElement(
              g.a,
              null,
              a.a.createElement(
                y.a,
                null,
                a.a.createElement(
                  H.a,
                  { md: 4 },
                  t &&
                    a.a.createElement(We, {
                      setChats: _,
                      setSelectedChat: c,
                      selectedChat: i,
                      fetchAgain: s,
                      setFetchAgain: f,
                      chats: w,
                    })
                ),
                a.a.createElement(
                  H.a,
                  { md: 8 },
                  t &&
                    a.a.createElement(nt, {
                      fetchAgain: s,
                      setFetchAgain: f,
                      selectedChat: i,
                      setSelectedChat: c,
                      notifications: m,
                      setNotifications: d,
                      user: t,
                    })
                )
              )
            )
          );
        }),
        at = Object(c.b)(function (e) {
          return { userInfo: e.userLogin.userInfo };
        })(function (e) {
          var t = e.match,
            n = e.userInfo,
            o = Object(c.c)(),
            i = t.params.keyword,
            l = t.params.pageNumber || 1,
            u = t.params.id,
            s = Object(c.d)(function (e) {
              return e.eventList;
            }),
            f = s.loading,
            p = s.error,
            h = s.events;
          return (
            Object(r.useEffect)(
              function () {
                o(ne(i, l));
              },
              [o, i, l]
            ),
            a.a.createElement(
              a.a.Fragment,
              null,
              i || u
                ? a.a.createElement(
                    v.Link,
                    { to: "/", className: "btn btn-light" },
                    "Go Back"
                  )
                : a.a.createElement(Le, null),
              a.a.createElement("h1", null, "Latest Events"),
              f
                ? a.a.createElement(ee, null)
                : p
                ? a.a.createElement(Z, { variant: "danger" }, p)
                : a.a.createElement(
                    g.a,
                    null,
                    a.a.createElement(
                      y.a,
                      null,
                      a.a.createElement(
                        H.a,
                        { md: 3 },
                        a.a.createElement(Ee, { profile: n })
                      ),
                      a.a.createElement(
                        H.a,
                        { className: "offset-1" },
                        h.length > 0
                          ? h.map(function (e) {
                              return (
                                e._id === u &&
                                a.a.createElement(
                                  y.a,
                                  { key: e._id },
                                  a.a.createElement(Oe, { event: e })
                                )
                              );
                            })
                          : a.a.createElement(
                              Z,
                              { variant: "info" },
                              "No Events Hosted or Available"
                            )
                      )
                    )
                  )
            )
          );
        });
      var ot = Object(c.b)(function (e) {
        return { userInfo: e.userLogin.userInfo };
      })(function (e) {
        var t = e.userInfo;
        return a.a.createElement(
          v.BrowserRouter,
          null,
          a.a.createElement(Q, null),
          a.a.createElement(
            "main",
            { className: "py-3" },
            a.a.createElement(
              g.a,
              null,
              t
                ? a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(E.d, {
                      path: "/",
                      component: be,
                      exact: !0,
                    }),
                    a.a.createElement(E.d, {
                      path: "/profile",
                      component: Se,
                      exact: !0,
                    }),
                    a.a.createElement(E.d, {
                      path: "/profile/:username",
                      component: Se,
                      exact: !0,
                    }),
                    a.a.createElement(E.d, {
                      path: "/edit",
                      component: _e,
                      exact: !0,
                    }),
                    a.a.createElement(E.d, {
                      path: "/settings",
                      component: _e,
                      exact: !0,
                    }),
                    a.a.createElement(E.d, {
                      path: "/event",
                      component: je,
                      exact: !0,
                    }),
                    a.a.createElement(E.d, {
                      path: "/event/:id",
                      component: at,
                      exact: !0,
                    }),
                    a.a.createElement(E.d, { path: "/chats", component: rt }),
                    a.a.createElement(E.d, { path: "/help", component: Ce }),
                    a.a.createElement(E.d, {
                      path: "/clubs",
                      component: function () {
                        return a.a.createElement(
                          y.a,
                          { id: "content" },
                          a.a.createElement("iframe", {
                            width: "100%",
                            src: "https://www.psnacet.edu.in/index.php",
                          })
                        );
                      },
                    })
                  )
                : a.a.createElement(
                    a.a.Fragment,
                    null,
                    a.a.createElement(
                      Z,
                      { variant: "danger" },
                      "Login With PSNA Mail Id to Continue"
                    ),
                    a.a.createElement(ke, null)
                  )
            )
          ),
          a.a.createElement(Y, null)
        );
      });
      n(153), n(156);
      i.a.render(
        a.a.createElement(c.a, { store: d }, a.a.createElement(ot, null)),
        document.getElementById("root")
      );
    },
  },
  [[103, 2, 1]],
]);
//# sourceMappingURL=main.38fe094f.chunk.js.map
