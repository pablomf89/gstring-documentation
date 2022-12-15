(this["webpackJsonpgstring-documentation"] = this["webpackJsonpgstring-documentation"] || []).push([
  [0],
  {
    400: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        i = n.n(a),
        s = n(24),
        r = n.n(s),
        c = n(3),
        o = n(4),
        l = n(6),
        u = n(5),
        d = (n(79), n(80), n(9)),
        m = n(18),
        p = n(7),
        b = n.n(p),
        j = n(10),
        h = [
          { N: "Home", id: "home", parentId: null, nicename: "", type: "home", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          ,
          { N: "Global elements", id: "global-elements", parentId: null, nicename: "global-elements", type: "global-elements", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Forms", id: "forms", parentId: null, nicename: "forms", type: "forms", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Input types", id: "input-types", parentId: "forms", nicename: "input-types", type: "forms", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Form wizard", id: "form-wizard", parentId: null, nicename: "form-wizard", type: "form-wizard", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Results", id: "results", parentId: null, nicename: "results", type: "results", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Messages", id: "messages", parentId: null, nicename: "messages", type: "messages", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Tabs", id: "tabs", parentId: null, nicename: "tabs", type: "tabs", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Modals", id: "modals", parentId: null, nicename: "modals", type: "modals", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Buttons", id: "buttons", parentId: null, nicename: "buttons", type: "buttons", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Wysiwyg", id: "wysiwyg", parentId: null, nicename: "wysiwyg", type: "wysiwyg", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Calendar", id: "calendar", parentId: null, nicename: "calendar", type: "calendar", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Accordions", id: "accordions", parentId: null, nicename: "accordions", type: "accordions", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Notifications", id: "notifications", parentId: null, nicename: "notifications", type: "notifications", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
          { N: "Date picker", id: "date-picker", parentId: null, nicename: "date-picker", type: "date-picker", showInNav: !0, showInSecondaryNav: !0, isPrivate: !1, profilesAllowed: 1 },
        ],
        v = (function () {
          var e = Object(j.a)(
            b.a.mark(function e() {
              var t;
              return b.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = h.map(function (e) {
                          return Object(m.a)(Object(m.a)({}, e), {}, { url: O(e, h) });
                        })),
                        e.abrupt("return", t)
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = Object(j.a)(
            b.a.mark(function e(t) {
              var n, a;
              return b.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), v();
                    case 2:
                      return (
                        (n = e.sent),
                        (a = n.filter(function (e) {
                          return null === e.parentId && e.showInNav;
                        })),
                        e.abrupt("return", a)
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        x = (function () {
          var e = Object(j.a)(
            b.a.mark(function e(t) {
              var n, a;
              return b.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), v();
                    case 2:
                      return (
                        (n = e.sent),
                        (a = n.filter(function (e) {
                          return e.parentId === (null === t || void 0 === t ? void 0 : t.id) && e.showInNav;
                        })),
                        e.abrupt("return", a)
                      );
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        O = function e(t, n) {
          var a = "",
            i = g(t, n);
          null != i && (a = e(i, n));
          var s = null !== t.nicename ? a + "/" + t.nicename : a + "/";
          return (s = s.replace("//", "/"));
        },
        g = function (e, t) {
          if (e && null !== e.parentId) {
            var n = t.filter(function (t) {
              return t.id === e.parentId;
            });
            if (n && n.length) return n[0];
          }
          return null;
        },
        y = function (e, t, n) {
          if (e && t) {
            if (t.id === e.id) return !0;
            if (n && n.length)
              if (
                n.find(function (t) {
                  return t.id === e.id;
                })
              )
                return !0;
          }
          return !1;
        },
        N =
          (n(74),
          n(66),
          n(67),
          function (e, t) {
            return Object(d.e)(t, { path: e, exact: !0 });
          }),
        w = function (e) {
          var t = null;
          if (e && e.length)
            return (
              e.forEach(function (e) {
                null != N(e.url, window.location.pathname.replace("/gstring-documentation", "")) && (t = e);
              }),
              (t = null !== t ? t : null)
            );
        },
        S = n(0),
        I = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return this.props.visible
                    ? Object(S.jsx)("div", {
                        className: "spinner",
                        children: Object(S.jsxs)("div", {
                          className: "spinner-content",
                          children: [Object(S.jsx)("i", { className: "icon fa fa-spinner  fa-spin" }), this.props.message && Object(S.jsx)("p", { children: this.props.message })],
                        }),
                      })
                    : null;
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        k = i.a.createContext({}),
        q = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
            return ((e = t.call.apply(t, [this].concat(i))).state = { pages: null, currentPage: null }), e;
          }
          return (
            Object(o.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this._isMounted = !0),
                    this.getPages(),
                    this.props.history.listen(function (t) {
                      e.updateNavState(e.state.pages);
                    });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  (JSON.stringify(this.props.location) === JSON.stringify(e.location) && JSON.stringify(this.state.pages) === JSON.stringify(t.pages)) || this.updateNavState(this.state.pages);
                },
              },
              {
                key: "getPages",
                value: (function () {
                  var e = Object(j.a)(
                    b.a.mark(function e() {
                      var t;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), v();
                              case 2:
                                (t = e.sent), this.updateNavState(t);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "updateNavState",
                value: (function () {
                  var e = Object(j.a)(
                    b.a.mark(function e(t) {
                      var n, a;
                      return b.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this._isMounted && ((n = w(t)), (a = { pages: t, currentPage: n }), JSON.stringify(a) !== JSON.stringify(this.state) && this.setState(a));
                              case 1:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "render",
                value: function () {
                  if (this.state.currentPage) {
                    var e = Object(m.a)({}, this.state);
                    return Object(S.jsx)(k.Provider, { value: e, children: Object(S.jsxs)(S.Fragment, { children: [" ", this.props.children, " "] }) });
                  }
                  return Object(S.jsx)(I, { visible: !0, message: "Loading navigation..." });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        C = Object(d.f)(q),
        D = i.a.createContext({}),
        F = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var a;
            return (
              Object(c.a)(this, n),
              ((a = t.call(this, e)).renderPage = function () {
                return Object(S.jsx)(C, { children: Object(S.jsxs)(S.Fragment, { children: [" ", a.props.children, " "] }) });
              }),
              (a.state = { user: void 0, isAuth: !1 }),
              a
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsx)(D.Provider, { value: this.state, children: this.renderPage() });
                },
              },
            ]),
            n
          );
        })(a.Component),
        A = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsx)("div", {
                    className: "box-container",
                    children: Object(S.jsx)("div", {
                      className: "box-12",
                      children: Object(S.jsx)("div", {
                        className: "inner",
                        children: Object(S.jsx)("div", {
                          className: "box-12",
                          children: Object(S.jsxs)("div", {
                            className: "inner",
                            children: [Object(S.jsx)("h1", { className: "display-1", children: "404" }), Object(S.jsx)("p", { children: " The page you requested is not found." })],
                          }),
                        }),
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        R = function () {
          return Object(S.jsxs)(S.Fragment, {
            children: [
              Object(S.jsx)("h1", { children: "h1 Lorem ipsum" }),
              Object(S.jsx)("h2", { children: "h2 Lorem ipsum" }),
              Object(S.jsx)("h3", { children: "h3 Lorem ipsum" }),
              Object(S.jsx)("h4", { children: "h4 Lorem ipsum" }),
              Object(S.jsx)("h5", { children: "h5 Lorem ipsum" }),
              Object(S.jsx)("h6", { children: "h6 Lorem ipsum" }),
              Object(S.jsx)("p", { children: "Parragraph" }),
              Object(S.jsx)("p", {
                children:
                  "Parragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              }),
              Object(S.jsx)("p", { children: Object(S.jsx)("a", { href: "#1", title: "link to", children: "Link" }) }),
              Object(S.jsxs)("p", { children: [Object(S.jsx)("strong", { children: "Strong" }), " ", Object(S.jsx)("em", { children: "Italic" }), " ", Object(S.jsx)("small", { children: "Small" })] }),
              Object(S.jsxs)("ul", { children: [Object(S.jsx)("li", { children: "Lorem ipsum" }), Object(S.jsx)("li", { children: "Lorem ipsum" })] }),
              Object(S.jsxs)("ol", { children: [Object(S.jsx)("li", { children: "Lorem ipsum" }), Object(S.jsx)("li", { children: "Lorem ipsum" })] }),
              Object(S.jsxs)("div", { className: " mb20", children: [Object(S.jsx)("h3", { className: "title", children: "DIVIDER" }), Object(S.jsx)("hr", { className: "mb-4" })] }),
              Object(S.jsxs)("div", {
                className: "mb20",
                children: [
                  Object(S.jsx)("h3", { className: "title", children: "TABLE" }),
                  Object(S.jsxs)("table", {
                    children: [
                      Object(S.jsx)("thead", {
                        children: Object(S.jsxs)("tr", {
                          children: [
                            Object(S.jsx)("th", { scope: "col", children: "First" }),
                            Object(S.jsx)("th", { scope: "col", children: "Second" }),
                            Object(S.jsx)("th", { scope: "col", children: "Last" }),
                            Object(S.jsx)("th", { scope: "col", children: "Handle" }),
                          ],
                        }),
                      }),
                      Object(S.jsxs)("tbody", {
                        children: [
                          Object(S.jsxs)("tr", {
                            children: [Object(S.jsx)("td", { children: "Mark" }), Object(S.jsx)("td", { children: "John" }), Object(S.jsx)("td", { children: "Otto" }), Object(S.jsx)("td", { children: "@mdo" })],
                          }),
                          Object(S.jsxs)("tr", {
                            children: [Object(S.jsx)("td", { children: "Jacob" }), Object(S.jsx)("td", { children: "Charles" }), Object(S.jsx)("td", { children: "Thornton" }), Object(S.jsx)("td", { children: "@fat" })],
                          }),
                          Object(S.jsxs)("tr", {
                            children: [Object(S.jsx)("td", { children: "Larry" }), Object(S.jsx)("td", { children: "Tim" }), Object(S.jsx)("td", { children: "the Bird" }), Object(S.jsx)("td", { children: "@twitter" })],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        P = n(402),
        T = n(401),
        M = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)("div", {
                    className: "inner",
                    children: [
                      Object(S.jsx)(R, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import React, { ReactElement } from "react";\n\nexport const GlobalStyles: React.FC = (): ReactElement => {\n  return (\n    <>\n      <h1>h1 Lorem ipsum</h1>\n      <h2>h2 Lorem ipsum</h2>\n      <h3>h3 Lorem ipsum</h3>\n      <h4>h4 Lorem ipsum</h4>\n      <h5>h5 Lorem ipsum</h5>\n      <h6>h6 Lorem ipsum</h6>\n      <p>Parragraph</p>\n      <p>\n        Parragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\n        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n        officia deserunt mollit anim id est laborum.\n      </p>\n      <p>\n        <a href="#1" title="link to">\n          Link\n        </a>\n      </p>\n      <p>\n        <strong>Strong</strong> <em>Italic</em> <small>Small</small>\n      </p>\n      <ul>\n        <li>Lorem ipsum</li>\n        <li>Lorem ipsum</li>\n      </ul>\n      <ol>\n        <li>Lorem ipsum</li>\n        <li>Lorem ipsum</li>\n      </ol>\n\n      {/* <div className="row ui-section  mb20">\n        <div className="inner">\n          <h3 className="title">COLOR PALETTE</h3>\n          <div className="d-flex justify-content-between">\n            <div className="d-flex">\n              <div className="color-palette bg-primary">\n                <span className="color-grey">Primary</span>\n              </div>\n              <div className="color-palette bg-active">\n                <span className="color-grey">Accent</span>\n              </div>\n            </div>\n            <div className="d-flex">\n              <div className="color-palette bg-error">\n                <span className="color-grey">error</span>\n              </div>\n              <div className="color-palette bg-info">\n                <span className="color-grey">info</span>\n              </div>\n              <div className="color-palette bg-success">\n                <span className="color-grey">success</span>\n              </div>\n              <div className="color-palette bg-warning">\n                <span className="color-grey">warning</span>\n              </div>\n            </div>\n            <div className="d-flex">\n              <div\n                className="color-palette bg-white"\n                style={{ border: "1px solid grey" }}\n              >\n                <span>white</span>\n              </div>\n              <div className="color-palette bg-input-grey">\n                <span>\n                  input\n                  <br />\n                  bg\n                </span>\n              </div>\n              <div className="color-palette bg-light-grey">\n                <span>\n                  light\n                  <br />\n                  grey\n                </span>\n              </div>\n              <div className="color-palette bg-grey">\n                <span className="color-grey">grey</span>\n              </div>\n              <div className="color-palette bg-dark-grey">\n                <span className="color-grey">\n                  dark\n                  <br />\n                  grey\n                </span>\n              </div>\n              <div className="color-palette bg-black">\n                <span className="color-grey">black</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> */}\n      <div className=" mb20">\n        <h3 className="title">DIVIDER</h3>\n\n        <hr className="mb-4" />\n      </div>\n      <div className="mb20">\n        <h3 className="title">TABLE</h3>\n        <table>\n          <thead>\n            <tr>\n              {/* <th scope="col">#</th> */}\n              <th scope="col">First</th>\n              <th scope="col">Second</th>\n              <th scope="col">Last</th>\n              <th scope="col">Handle</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Mark</td>\n              <td>John</td>\n              <td>Otto</td>\n              <td>@mdo</td>\n            </tr>\n            <tr>\n              <td>Jacob</td>\n              <td>Charles</td>\n              <td>Thornton</td>\n              <td>@fat</td>\n            </tr>\n            <tr>\n              <td>Larry</td>\n              <td>Tim</td>\n              <td>the Bird</td>\n              <td>@twitter</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </>\n  );\n};\n\nexport default GlobalStyles;\n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        L = n(2),
        W = void 0,
        E = (function () {
          var e = Object(j.a)(
            b.a.mark(function e(t) {
              var n, a;
              return b.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.target.isValid), (a = Object(L.serializeForm)(t.target)), n ? console.log(a) : console.log("Form is invalid");
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        B = (function () {
          var e = Object(j.a)(
            b.a.mark(function e(t) {
              var n, a;
              return b.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = W.current), (a = n.serialize()), console.info("Input changed", a);
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Y = function () {
          return (
            (W = i.a.createRef()),
            Object(S.jsxs)(L.Form, {
              ref: W,
              onSubmit: E,
              onChange: B,
              children: [
                Object(S.jsx)(L.TextInput, { validations: [L.required], label: "Text input", placeholder: "enabled", name: "textInput", type: "text", validateOnChange: !0 }),
                Object(S.jsx)(L.TextInput, { validations: [L.required], label: "Nested props example", placeholder: "enabled", name: "nestedObject[0].property", type: "text", validateOnChange: !0 }),
                Object(S.jsx)(L.TextArea, { validations: [L.required], label: "Textarea", placeholder: "example", name: "textarea", type: "text" }),
                Object(S.jsxs)(L.SelectInput, {
                  label: "Select",
                  className: "",
                  name: "myselect",
                  validations: [L.required],
                  children: [Object(S.jsx)("option", { value: "", children: "Select" }), Object(S.jsx)("option", { value: "1", children: "Select value 1" })],
                }),
                Object(S.jsxs)(L.SelectFilter, {
                  showSelectAllOption: !0,
                  tooltip: "tooltip example",
                  label: "Select Colour (multiple)",
                  validations: [L.required],
                  value: ["1", "5"],
                  multiple: !0,
                  name: "color",
                  children: [
                    Object(S.jsx)(L.SelectFilterOption, { value: "1", label: "Red" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "2", label: "Yellow" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "3", label: "Orange" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "4", label: "Pink" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "5", label: "Purple" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "6", label: "Blue" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "7", label: "Grey" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "8", label: "White" }),
                    Object(S.jsx)(L.SelectFilterOption, { value: "9", label: "Black" }),
                  ],
                }),
                Object(S.jsx)(L.CheckboxInput, { validations: [L.required], name: "checkboxName", label: "checkbox 1", value: "value1" }),
                Object(S.jsx)(L.CheckboxInput, { validations: [L.required], name: "checkboxName", label: "checkbox 1", value: "value2" }),
                Object(S.jsx)(L.CheckboxInput, { validations: [L.required], name: "checkboxName", label: "checkbox 2", value: "value 3" }),
                Object(S.jsx)(L.RadioInput, { validations: [L.required], name: "radio", label: "Radio 1", value: "value 1", className: "radio1" }),
                Object(S.jsx)(L.RadioInput, { validations: [L.required], name: "radio", label: "Radio 2", value: "value 2" }),
                Object(S.jsx)(L.Wysiwyg, {
                  undo: !0,
                  redo: !0,
                  headers: !0,
                  bold: !0,
                  italic: !0,
                  strikeThrough: !0,
                  justifyCenter: !0,
                  justifyLeft: !0,
                  justifyRight: !0,
                  justifyFull: !0,
                  unorderedList: !0,
                  orderedList: !0,
                  label: "Wysiwyg",
                  tooltip: "Tooltip example",
                  validations: [L.required],
                  name: "exampleWysiwig",
                }),
                Object(S.jsx)(L.SwitchInput, { name: "termsandcond", value: "true", label: "I accept terms and conditions", validations: [L.required] }),
                Object(S.jsx)("input", { type: "submit", value: "Submit" }),
              ],
            })
          );
        },
        U = function () {
          return Object(S.jsxs)("div", {
            className: "inner",
            children: [
              Object(S.jsx)(Y, {}),
              Object(S.jsx)(P.a, {
                language: "typescript",
                style: T.a,
                children:
                  'import React, { ReactElement } from "react"; \nimport { required } from "../forms/utilities/validations"; \nimport { Form, TextInput, CheckboxInput, RadioInput, SelectInput, TextArea, serializeForm, SelectFilter, SelectFilterOption as Option, SwitchInput } from "../forms"; \nimport Wysiwyg from "../wysiwyg/wysiwyg"; \n \nlet formRef: any = undefined; \nconst handleSubmit = async (event: any) => { \n  const isValid_HTML = event.target.isValid; \n  const values_HTML = serializeForm(event.target); \n  if (isValid_HTML) { \n    console.log(values_HTML); \n  } else { \n    console.log("Form is invalid"); \n  } \n}; \n \nconst handleOnChange = async (event: any) => { \n  const _form = formRef.current as Form; \n  const values_react = _form.serialize();  \n  console.info("Input changed", values_react); \n}; \n \nexport const FormExample: React.FC = (): ReactElement => { \n  formRef = React.createRef(); \n  return ( \n    <Form ref={formRef} onSubmit={handleSubmit} onChange={handleOnChange}> \n      <TextInput validations={[required]} label="Text input" placeholder="enabled" name="textInput" type="text" validateOnChange={true} /> \n      <TextInput validations={[required]} label="Nested props example" placeholder="enabled" name="nestedObject[0].property" type="text" validateOnChange={true} /> \n      <TextArea validations={[required]} label="Textarea" placeholder="example" name="textarea" type="text" /> \n      <SelectInput label="Select" className="" name="myselect" validations={[required]}> <option value="">Select</option> <option value="1">Select value 1</option> \n      </SelectInput> \n      <SelectFilter showSelectAllOption={true} tooltip="tooltip example" label="Select Colour (multiple)" validations={[required]} value={["1", "5"]} multiple={true} name="color"> <Option value="1" label="Red" /> <Option value="2" label="Yellow" /> <Option value="3" label="Orange" /> <Option value="4" label="Pink" /> <Option value="5" label="Purple" /> <Option value="6" label="Blue" /> <Option value="7" label="Grey" /> <Option value="8" label="White" /> <Option value="9" label="Black" /> \n      </SelectFilter> \n      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 1" value="value1" /> \n      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 1" value="value2" /> \n      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 2" value="value 3" /> \n      <RadioInput validations={[required]} name="radio" label="Radio 1" value="value 1" className="radio1" /> \n      <RadioInput validations={[required]} name="radio" label="Radio 2" value="value 2" /> \n      <Wysiwyg undo redo headers bold italic strikeThrough justifyCenter justifyLeft justifyRight justifyFull unorderedList orderedList label="Wysiwyg" tooltip="Tooltip example" validations={[required]} name="exampleWysiwig" /> \n      <SwitchInput name="termsandcond" value="true" label="I accept terms and conditions" validations={[required]} /> \n      <input type="submit" value="Submit" /> \n    </Form> \n  ); \n}; \n \nexport default FormExample; \n',
              }),
            ],
          });
        },
        V = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = { values: null }),
              (e.submitWizard = function (t) {
                e.setState({ values: t });
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return this.state.values
                    ? Object(S.jsx)("div", {
                        className: "row ui-section",
                        children: Object(S.jsx)("div", {
                          className: "inner",
                          children: Object(S.jsxs)("div", { children: [Object(S.jsx)("h3", { children: "Thank you for your submission" }), Object(S.jsx)("p", { children: JSON.stringify(this.state.values) })] }),
                        }),
                      })
                    : Object(S.jsx)("div", {
                        className: "row ui-section",
                        children: Object(S.jsx)("div", {
                          className: "inner",
                          children: Object(S.jsxs)(L.FormWizard, {
                            onSubmit: function (t) {
                              return e.submitWizard(t);
                            },
                            hideSubmitButton: !1,
                            children: [
                              Object(S.jsx)(L.FormStep, {
                                children: Object(S.jsxs)("div", {
                                  children: [
                                    Object(S.jsx)("p", { className: "h4", children: "Step 1" }),
                                    Object(S.jsx)(L.TextInput, { label: "Name", name: "name", type: "text", validations: [L.required] }, 1),
                                    Object(S.jsx)(L.TextInput, { label: "Surname", name: "surname", type: "text", validations: [] }, 2),
                                    Object(S.jsx)(L.TextInput, { label: "Email", name: "email", type: "email", validations: [L.required, L.email] }, 4),
                                  ],
                                }),
                              }),
                              Object(S.jsx)(L.FormStep, {
                                children: Object(S.jsxs)("div", {
                                  children: [
                                    Object(S.jsx)("p", { className: "h4", children: "Step 2" }),
                                    Object(S.jsx)(L.TextArea, { validations: [L.required], placeholder: "Default text", name: "myTextArea", label: "Default Textarea", validateBeforeSubmit: !1 }, 3),
                                    Object(S.jsxs)(L.SelectFilter, {
                                      label: "Select Colour (multiple)",
                                      validations: [L.required],
                                      multiple: !0,
                                      name: "color",
                                      children: [
                                        Object(S.jsx)(L.SelectFilterOption, { value: "1", label: "Red" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "2", label: "Yellow" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "3", label: "Orange" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "4", label: "Pink" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "5", label: "Purple" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "6", label: "Blue" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "7", label: "Grey" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "8", label: "White" }),
                                        Object(S.jsx)(L.SelectFilterOption, { value: "9", label: "Black" }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(S.jsx)(L.FormStep, {
                                children: Object(S.jsxs)("div", {
                                  children: [
                                    Object(S.jsx)("p", { className: "h4", children: "Step 3" }),
                                    Object(S.jsx)(L.TextInput, { label: "Address line 1", name: "addr1", type: "text", validations: [L.required] }),
                                    Object(S.jsx)(L.TextInput, { label: "Address line 1", name: "addr2", type: "text", validations: [L.required] }),
                                    Object(S.jsx)(L.TextInput, { label: "Address line 1", name: "addr3", type: "text", validations: [L.required] }),
                                  ],
                                }),
                              }),
                              Object(S.jsx)(L.FormStep, {
                                children: Object(S.jsxs)("div", {
                                  children: [
                                    Object(S.jsx)("p", { className: "h4", children: "Step 4" }),
                                    Object(S.jsx)("div", { children: Object(S.jsx)(L.CheckboxInput, { name: "timeSensitive", type: "checkbox", label: "Once a week", value: "1" }) }),
                                    Object(S.jsx)("div", { children: Object(S.jsx)(L.CheckboxInput, { name: "temperatureSensitive", type: "checkbox", label: "Potatoes", value: "1" }) }),
                                    Object(S.jsx)("div", { children: Object(S.jsx)(L.CheckboxInput, { name: "critical", type: "checkbox", label: "Critical", value: "1" }) }),
                                    Object(S.jsxs)("div", {
                                      children: [
                                        Object(S.jsx)(L.RadioInput, { validations: [L.required], name: "myRadio", validateBeforeSubmit: !1, label: "radio 1", value: "radio1" }),
                                        Object(S.jsx)(L.RadioInput, { validations: [L.required], name: "myRadio", validateBeforeSubmit: !1, label: "radio 2", value: "radio2" }),
                                        Object(S.jsx)(L.RadioInput, { className: "mb20", validations: [L.required], name: "myRadio", validateBeforeSubmit: !1, label: "radio 3", value: "radio3" }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              Object(S.jsx)(L.FormStep, {
                                children: Object(S.jsxs)("div", {
                                  className: "mb-4",
                                  children: [Object(S.jsx)("h3", { children: "Thanks for your interest" }), Object(S.jsx)("button", { type: "submit", className: "btn btn-primary ", children: "Submit my data" })],
                                }),
                              }),
                            ],
                          }),
                        }),
                      });
                },
              },
            ]),
            n
          );
        })(a.Component),
        z = function () {
          return Object(S.jsxs)(S.Fragment, {
            children: [
              Object(S.jsx)(V, {}),
              Object(S.jsx)(P.a, {
                language: "typescript",
                style: T.a,
                children:
                  'import React, { Component } from "react"; \nimport FormWizard, { FormStep } from "../formWizard/form-wizard"; \nimport { TextInput, CheckboxInput, RadioInput, TextArea } from "../forms"; \nimport SelectFilter, { Option } from "../select-filter/select-filter"; \nimport { required, email } from "../forms/utilities/validations"; \nexport default class FormWizardExample extends Component { \n  state = { \n    values: null, \n  }; \n  submitWizard = (data: any) => { \n    this.setState({ values: data }); \n  }; \n  render() { \n    if (this.state.values) { \n      return ( \n        <div className="row ui-section"> \n          <div className="inner"> \n            <div> \n              <h3>Thank you for your submission</h3> \n              <p>{JSON.stringify(this.state.values)}</p> \n            </div> \n          </div> \n        </div> \n      ); \n    } else { \n      return ( \n        <div className="row ui-section"> \n          <div className="inner"> \n            <FormWizard onSubmit={(data: any) => this.submitWizard(data)} hideSubmitButton={false}> \n              <FormStep> \n                <div> \n                  <p className="h4">Step 1</p> \n                  <TextInput label={"Name"} name="name" type="text" key={1} validations={[required]} /> \n                  <TextInput label={"Surname"} name="surname" type="text" key={2} validations={[]} /> \n                  <TextInput label={"Email"} name="email" type="email" key={4} validations={[required, email]} /> \n                </div> \n              </FormStep> \n              <FormStep> \n                <div> \n                  <p className="h4">Step 2</p> \n                  <TextArea validations={[required]} placeholder="Default text" key={3} name="myTextArea" label="Default Textarea" validateBeforeSubmit={false} /> \n \n                  <SelectFilter label="Select Colour (multiple)" validations={[required]} multiple={true} name="color"> \n                    <Option value="1" label="Red" /> \n                    <Option value="2" label="Yellow" /> \n                    <Option value="3" label="Orange" /> \n                    <Option value="4" label="Pink" /> \n                    <Option value="5" label="Purple" /> \n                    <Option value="6" label="Blue" /> \n                    <Option value="7" label="Grey" /> \n                    <Option value="8" label="White" /> \n                    <Option value="9" label="Black" /> \n                  </SelectFilter> \n                </div> \n              </FormStep> \n              <FormStep> \n                <div> \n                  <p className="h4">Step 3</p> \n                  <TextInput label={"Address line 1"} name="addr1" type="text" validations={[required]} /> \n                  <TextInput label={"Address line 1"} name="addr2" type="text" validations={[required]} /> \n                  <TextInput label={"Address line 1"} name="addr3" type="text" validations={[required]} /> \n                </div> \n              </FormStep> \n \n              <FormStep> \n                <div> \n                  <p className="h4">Step 4</p> \n                  <div> \n                    <CheckboxInput name="timeSensitive" type="checkbox" label="Once a week" value={"1"} /> \n                  </div> \n                  <div> \n                    <CheckboxInput name="temperatureSensitive" type="checkbox" label="Potatoes" value={"1"} /> \n                  </div> \n                  <div> \n                    <CheckboxInput name="critical" type="checkbox" label="Critical" value={"1"} /> \n                  </div> \n                  <div> \n                    <RadioInput validations={[required]} name="myRadio" validateBeforeSubmit={false} label="radio 1" value="radio1" /> \n                    <RadioInput validations={[required]} name="myRadio" validateBeforeSubmit={false} label="radio 2" value="radio2" /> \n                    <RadioInput className="mb20" validations={[required]} name="myRadio" validateBeforeSubmit={false} label="radio 3" value="radio3" /> \n                  </div> \n                </div> \n              </FormStep> \n              <FormStep> \n                <div className="mb-4"> \n                  <h3>Thanks for your interest</h3> \n                  <button type="submit" className="btn btn-primary "> \n                    Submit my data \n                  </button> \n                </div> \n              </FormStep> \n            </FormWizard> \n          </div> \n        </div> \n      ); \n    } \n  } \n} \n',
              }),
            ],
          });
        },
        _ = function () {
          return Object(S.jsxs)(S.Fragment, {
            children: [
              Object(S.jsxs)("div", {
                className: "message message-info mb-2  shadow",
                children: [
                  Object(S.jsx)("div", { className: "icon", children: Object(S.jsx)("i", { className: "fa fa-cog fa-spin" }) }),
                  Object(S.jsx)("div", { className: "copy", children: Object(S.jsxs)("p", { children: [Object(S.jsx)("strong", { children: "Loading:" }), " Please wait"] }) }),
                ],
              }),
              Object(S.jsxs)("div", {
                className: "message message-info mb-2  shadow",
                children: [
                  Object(S.jsx)("div", { className: "icon", children: Object(S.jsx)("i", { className: "fa fa fa-exclamation-circle" }) }),
                  Object(S.jsx)("div", { className: "copy", children: Object(S.jsxs)("p", { children: [Object(S.jsx)("strong", { children: "Info:" }), " No results found"] }) }),
                ],
              }),
              Object(S.jsxs)("div", {
                className: "message message-warning mb-2  shadow",
                children: [
                  Object(S.jsx)("div", { className: "icon", children: Object(S.jsx)("i", { className: "fa fa-exclamation-triangle" }) }),
                  Object(S.jsx)("div", { className: "copy", children: Object(S.jsxs)("p", { children: [Object(S.jsx)("strong", { children: "Info:" }), " There was an error submiting your enquiry"] }) }),
                ],
              }),
              Object(S.jsxs)("div", {
                className: "message message-error mb-2  shadow",
                children: [
                  Object(S.jsx)("div", { className: "icon", children: Object(S.jsx)("i", { className: "fa fa-times" }) }),
                  Object(S.jsx)("div", { className: "copy", children: Object(S.jsxs)("p", { children: [Object(S.jsx)("strong", { children: "Error:" }), " Check your entries"] }) }),
                ],
              }),
              Object(S.jsxs)("div", {
                className: "message message-success mb-2  shadow",
                children: [
                  Object(S.jsx)("div", { className: "icon", children: Object(S.jsx)("i", { className: "fa fa-check" }) }),
                  Object(S.jsx)("div", { className: "copy", children: Object(S.jsxs)("p", { children: [Object(S.jsx)("strong", { children: "Success:" }), " Your enquiry has been submited"] }) }),
                ],
              }),
            ],
          });
        },
        J = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)(_, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import React, { ReactElement } from "react"; \n \nexport const MessagesExample: React.FC = (): ReactElement => { \n  return ( \n    <> \n      <div className="message message-info mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-cog fa-spin"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Loading:</strong> Please wait \n          </p> \n        </div> \n      </div> \n      <div className="message message-info mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa fa-exclamation-circle"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Info:</strong> No results found \n          </p> \n        </div> \n      </div> \n      <div className="message message-warning mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-exclamation-triangle"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Info:</strong> There was an error submiting your enquiry \n          </p> \n        </div> \n      </div> \n      <div className="message message-error mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-times"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Error:</strong> Check your entries \n          </p> \n        </div> \n      </div> \n      <div className="message message-success mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-check"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Success:</strong> Your enquiry has been submited \n          </p> \n        </div> \n      </div> \n    </> \n  ); \n}; \n \nexport default MessagesExample; \n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        G = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).state = { openDefault: !1 }),
              (e.changeOpenDefaultModal = function (t) {
                e.setState({ openDefault: t });
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)("input", {
                        type: "button",
                        value: "Open Default Modal",
                        onClick: function () {
                          e.changeOpenDefaultModal(!0);
                        },
                      }),
                      Object(S.jsxs)(L.Modal, {
                        open: this.state.openDefault,
                        close: function () {
                          e.changeOpenDefaultModal(!1);
                        },
                        children: [
                          Object(S.jsx)("div", { className: "modal-header", children: "Default Modal" }),
                          Object(S.jsxs)("div", {
                            className: "modal-body",
                            children: [
                              Object(S.jsx)("h4", { children: "Lorem ipsum" }),
                              Object(S.jsx)("h5", { children: "Euismod tristique" }),
                              Object(S.jsx)("p", {
                                children:
                                  "Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu aliquam elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec suscipit lacus. Praesent vel ipsum vulputate, gravida augue vel, pulvinar mauris. Nulla facilisi. Fusce malesuada lectus vel nisl imperdiet porta. Proin ac nisi ex. Mauris vestibulum augue facilisis lorem tempor pretium.",
                              }),
                              "Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu aliquam elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec suscipit lacus. Praesent vel ipsum vulputate, gravida augue vel, pulvinar mauris. Nulla facilisi. Fusce malesuada lectus vel nisl imperdiet porta. Proin ac nisi ex. Mauris vestibulum augue facilisis lorem tempor pretium.",
                              Object(S.jsx)("hr", { className: "mb20 mt20" }),
                              "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                              Object(S.jsx)("hr", { className: "mb20 mt20" }),
                              "Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu aliquam elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec suscipit lacus.",
                            ],
                          }),
                          Object(S.jsx)("div", {
                            className: "modal-footer",
                            children: Object(S.jsx)("button", {
                              className: "m0",
                              onClick: function () {
                                e.changeOpenDefaultModal(!1);
                              },
                              children: "Cancel",
                            }),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        H = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)(G, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import React from "react"; \nimport Modal from "../modals/modal"; \nexport interface IState { \n  openDefault?: boolean; \n  [others: string]: any; \n} \nexport default class ModalExample extends React.Component<IState> { \n  state: Readonly<IState> = { \n    openDefault: false, \n  }; \n \n  changeOpenDefaultModal = (bool: boolean) => { \n    this.setState({ openDefault: bool }); \n  }; \n  render() { \n    return ( \n      <> \n        <input \n          type="button" \n          value="Open Default Modal" \n          onClick={() => { \n            this.changeOpenDefaultModal(true); \n          }} \n        /> \n        <Modal \n          open={this.state.openDefault} \n          close={() => { \n            this.changeOpenDefaultModal(false); \n          }} \n        > \n          <div className="modal-header">Default Modal</div> \n          <div className="modal-body"> \n            <h4>Lorem ipsum</h4> \n            <h5>Euismod tristique</h5> \n            <p> \n              Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu \n              aliquam elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec \n              suscipit lacus. Praesent vel ipsum vulputate, gravida augue vel, pulvinar mauris. Nulla facilisi. Fusce malesuada lectus vel nisl imperdiet porta. Proin ac nisi ex. Mauris vestibulum augue facilisis lorem \n              tempor pretium. \n            </p> \n            Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu aliquam \n            elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec suscipit \n            lacus. Praesent vel ipsum vulputate, gravida augue vel, pulvinar mauris. Nulla facilisi. Fusce malesuada lectus vel nisl imperdiet porta. Proin ac nisi ex. Mauris vestibulum augue facilisis lorem tempor \n            pretium. \n            <hr className="mb20 mt20" /> \n            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis \n            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n            <hr className="mb20 mt20" /> \n            Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu aliquam \n            elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec suscipit \n            lacus. \n          </div> \n          <div className="modal-footer"> \n            <button \n              className="m0" \n              onClick={() => { \n                this.changeOpenDefaultModal(false); \n              }} \n            > \n              Cancel \n            </button> \n          </div> \n        </Modal> \n      </> \n    ); \n  } \n} \n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        X = function () {
          return Object(S.jsx)(S.Fragment, {
            children: Object(S.jsx)("div", {
              className: "row ui-section",
              children: Object(S.jsxs)("div", {
                className: "inner",
                children: [
                  Object(S.jsxs)("p", {
                    children: [
                      Object(S.jsx)("a", { href: "#1", className: "btn mr10", children: "Link as button" }),
                      Object(S.jsx)("input", { type: "button", value: "Button", className: "mr10" }),
                      Object(S.jsx)("input", { type: "submit", value: "Submit", className: "mr10" }),
                      Object(S.jsxs)("button", { className: "btn mr10", children: [Object(S.jsx)("i", { className: "fa fa-check" }), " Button with icon"] }),
                      Object(S.jsx)("button", { className: "btn mr10", children: Object(S.jsx)("i", { className: "fa fa-check-circle" }) }),
                      Object(S.jsx)("a", { href: "#1", className: "btn btn-outline mr10", children: "Outline button" }),
                      Object(S.jsx)("a", { href: "#1", className: "btn btn-transparent mr10", children: "Transparent button" }),
                      Object(S.jsx)("small", { children: Object(S.jsx)("input", { type: "button", value: "Small button mr10", className: "" }) }),
                    ],
                  }),
                  Object(S.jsxs)("p", {
                    children: [
                      Object(S.jsx)("button", { className: "mr10 btn-success ", children: Object(S.jsx)("i", { className: "fa fa-check-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 btn-success-outline ", children: Object(S.jsx)("i", { className: "fa fa-check-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 btn-success ", children: "Success Button" }),
                      Object(S.jsx)("button", { className: "mr10 btn-success ", disabled: !0, children: "Success Disabled" }),
                      Object(S.jsx)("button", { className: "mr10 btn-success-outline ", children: "Success Outline" }),
                      Object(S.jsx)("button", { className: "mr10 btn-success-outline ", disabled: !0, children: "Success Disabled" }),
                    ],
                  }),
                  Object(S.jsxs)("p", {
                    children: [
                      Object(S.jsx)("button", { className: "mr10 btn-warning ", children: Object(S.jsx)("i", { className: "fa fa-exclamation-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 btn-warning-outline ", children: Object(S.jsx)("i", { className: "fa fa-exclamation-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 btn-warning ", children: "Warning Button" }),
                      Object(S.jsx)("button", { className: "mr10 btn-warning ", disabled: !0, children: "Warning Disabled" }),
                      Object(S.jsx)("button", { className: "mr10 btn-warning-outline ", children: "Warning Outline" }),
                      Object(S.jsx)("button", { className: "mr10 btn-warning-outline ", disabled: !0, children: "Warning Disabled" }),
                    ],
                  }),
                  Object(S.jsxs)("p", {
                    children: [
                      Object(S.jsx)("button", { className: "mr10 button btn-error ", children: Object(S.jsx)("i", { className: "fa fa-times-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 button btn-error-outline ", children: Object(S.jsx)("i", { className: "fa fa-times-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 button btn-error ", children: "Error Button" }),
                      Object(S.jsx)("button", { className: "mr10 button btn-error ", disabled: !0, children: "Error Disabled" }),
                      Object(S.jsx)("button", { className: "mr10 btn-error-outline ", children: "Error Outline" }),
                      Object(S.jsx)("button", { className: "mr10 btn-error-outline ", disabled: !0, children: "Error Disabled" }),
                    ],
                  }),
                  Object(S.jsxs)("p", {
                    children: [
                      Object(S.jsx)("button", { className: "mr10 btn-info ", children: Object(S.jsx)("i", { className: "fa fa-info-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 btn-info-outline ", children: Object(S.jsx)("i", { className: "fa fa-info-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 btn-info ", children: "Info Button" }),
                      Object(S.jsx)("button", { className: "mr10 btn-info ", disabled: !0, children: "Info Disabled" }),
                      Object(S.jsx)("button", { className: "mr10 btn-info-outline ", children: "Info Outline" }),
                      Object(S.jsx)("button", { className: "mr10 btn-info-outline ", disabled: !0, children: "Info Disabled" }),
                    ],
                  }),
                  Object(S.jsxs)("p", {
                    children: [
                      Object(S.jsx)("button", { className: "mr10 btn-grey ", children: Object(S.jsx)("i", { className: "fa fa-circle" }) }),
                      Object(S.jsx)("button", { className: "mr10 btn-grey-outline ", children: Object(S.jsx)("i", { className: "fa fa-info-circle" }) }),
                      Object(S.jsxs)("button", { className: "mr10 btn-grey ", children: [Object(S.jsx)("i", { className: "fa fa-circle" }), " Grey Button"] }),
                      Object(S.jsx)("button", { className: "mr10 btn-grey ", disabled: !0, children: "Grey Disabled" }),
                      Object(S.jsx)("button", { className: "mr10 btn-grey-outline ", children: "Grey Outline" }),
                      Object(S.jsx)("button", { className: "mr10 btn-grey-outline ", disabled: !0, children: "Grey Disabled" }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        K = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)(X, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import React, { ReactElement } from "react";\n\nexport const ButtonStyles: React.FC = (): ReactElement => {\n  return (\n    <>\n      <div className="row ui-section">\n        <div className="inner">\n          <p>\n            <a href="#1" className="btn mr10">\n              Link as button\n            </a>\n            <input type="button" value="Button" className="mr10" />\n            <input type="submit" value="Submit" className="mr10" />\n            <button className="btn mr10">\n              <i className="fa fa-check"></i> Button with icon\n            </button>\n            <button className="btn mr10">\n              <i className="fa fa-check-circle"></i>\n            </button>\n            <a href="#1" className="btn btn-outline mr10">\n              Outline button\n            </a>\n            <a href="#1" className="btn btn-transparent mr10">\n              Transparent button\n            </a>\n\n            <small>\n              <input type="button" value="Small button mr10" className="" />\n            </small>\n          </p>\n\n          <p>\n            <button className="mr10 btn-success ">\n              <i className="fa fa-check-circle"></i>\n            </button>\n            <button className="mr10 btn-success-outline ">\n              <i className="fa fa-check-circle"></i>\n            </button>\n            <button className="mr10 btn-success ">Success Button</button>\n            <button className="mr10 btn-success " disabled>\n              Success Disabled\n            </button>\n            <button className="mr10 btn-success-outline ">\n              Success Outline\n            </button>\n            <button className="mr10 btn-success-outline " disabled>\n              Success Disabled\n            </button>\n          </p>\n          <p>\n            <button className="mr10 btn-warning ">\n              <i className="fa fa-exclamation-circle"></i>\n            </button>\n            <button className="mr10 btn-warning-outline ">\n              <i className="fa fa-exclamation-circle"></i>\n            </button>\n            <button className="mr10 btn-warning ">Warning Button</button>\n            <button className="mr10 btn-warning " disabled>\n              Warning Disabled\n            </button>\n            <button className="mr10 btn-warning-outline ">\n              Warning Outline\n            </button>\n            <button className="mr10 btn-warning-outline " disabled>\n              Warning Disabled\n            </button>\n          </p>\n\n          <p>\n            <button className="mr10 button btn-error ">\n              <i className="fa fa-times-circle"></i>\n            </button>\n            <button className="mr10 button btn-error-outline ">\n              <i className="fa fa-times-circle"></i>\n            </button>\n            <button className="mr10 button btn-error ">Error Button</button>\n            <button className="mr10 button btn-error " disabled>\n              Error Disabled\n            </button>\n            <button className="mr10 btn-error-outline ">Error Outline</button>\n            <button className="mr10 btn-error-outline " disabled>\n              Error Disabled\n            </button>\n          </p>\n          <p>\n            <button className="mr10 btn-info ">\n              <i className="fa fa-info-circle"></i>\n            </button>\n            <button className="mr10 btn-info-outline ">\n              <i className="fa fa-info-circle"></i>\n            </button>\n            <button className="mr10 btn-info ">Info Button</button>\n            <button className="mr10 btn-info " disabled>\n              Info Disabled\n            </button>\n            <button className="mr10 btn-info-outline ">Info Outline</button>\n            <button className="mr10 btn-info-outline " disabled>\n              Info Disabled\n            </button>\n          </p>\n          <p>\n            <button className="mr10 btn-grey ">\n              <i className="fa fa-circle"></i>\n            </button>\n            <button className="mr10 btn-grey-outline ">\n              <i className="fa fa-info-circle"></i>\n            </button>\n            <button className="mr10 btn-grey ">\n              <i className="fa fa-circle"></i> Grey Button\n            </button>\n            <button className="mr10 btn-grey " disabled>\n              Grey Disabled\n            </button>\n            <button className="mr10 btn-grey-outline ">Grey Outline</button>\n            <button className="mr10 btn-grey-outline " disabled>\n              Grey Disabled\n            </button>\n          </p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default ButtonStyles;\n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        Q = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsx)("div", {
                    className: "row ui-section",
                    children: Object(S.jsx)("div", {
                      className: "inner",
                      children: Object(S.jsx)(L.Wysiwyg, {
                        label: "Wysiwyg field example",
                        tooltip: "Add here something",
                        validations: [L.required],
                        value: "This is an example of a <b>wysiwyg</b> ",
                        name: "exampleWysiwig",
                      }),
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        Z = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)("div", {
                    className: "inner",
                    children: [
                      Object(S.jsx)(Q, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import React from "react"; \nimport { required } from "../forms/utilities/validations"; \nimport Wysiwyg from "../wysiwyg/wysiwyg"; \nexport interface IState { \n  [others: string]: any; \n} \n \nexport default class WysiwygExample extends React.Component<IState> { \n  render() { \n    return ( \n      <div className="row ui-section"> \n        <div className="inner"> \n          <Wysiwyg \n            label="Wysiwyg field example" \n            tooltip="Add here something" \n            validations={[required]} \n            value={"This is an example of a <b>wysiwyg</b> "} \n            name="exampleWysiwig" \n          /> \n        </div> \n      </div> \n    ); \n  } \n} \n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        $ = n(17),
        ee = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var a;
            return (
              Object(c.a)(this, n),
              ((a = t.call(this, e)).state = { active: void 0, open: void 0, navItems: void 0 }),
              (a.openSection = Object(j.a)(
                b.a.mark(function e() {
                  var t;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = !a.state.open || !a.state.open), a.setState({ open: t });
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.getChildrenNodes = Object(j.a)(
                b.a.mark(function e() {
                  var t;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), x(a.props.currentNode);
                        case 2:
                          (t = e.sent), a.setState({ navItems: t });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.componentDidMount = function () {
                a.processStatus();
              }),
              (a.componentDidUpdate = function (e, t) {
                (t.open === a.state.open && JSON.stringify(e) === JSON.stringify(a.props)) || a.processStatus();
              }),
              (a.processStatus = Object(j.a)(
                b.a.mark(function e() {
                  var t, n;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!((t = y(a.props.navItem, a.props.currentNode, a.props.currentNodeAncestors)) || a.state.open || a.props.preloadChildren)) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 4), a.getChildrenNodes();
                        case 4:
                          t && ((n = "undefined" === typeof a.state.open || a.state.open), a.setState({ active: t, open: n }));
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.state = { active: void 0, open: void 0, navItems: void 0 }),
              a
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    a,
                    i,
                    s,
                    r,
                    c,
                    o = this,
                    l = y(this.props.navItem, this.props.currentPage, this.props.currentNodeAncestors),
                    u = (null === (e = this.props.navItem) || void 0 === e ? void 0 : e.id) === (null === (t = this.props.currentPage) || void 0 === t ? void 0 : t.id),
                    d = this.state.open || (void 0 === typeof this.state.open && l) || this.props.forceOpen,
                    m =
                      (null === (a = this.props) || void 0 === a || null === (i = a.navItem) || void 0 === i ? void 0 : i.id) === (null === (s = this.props.currentPage) || void 0 === s ? void 0 : s.id)
                        ? null === (r = this.props) || void 0 === r
                          ? void 0
                          : r.currentPage
                        : null === (c = this.props) || void 0 === c
                        ? void 0
                        : c.navItem;
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)("span", {
                        className: "menu-item-icon  "
                          .concat(l && "active", " ")
                          .concat(u && "current-nav", " fa  ")
                          .concat(null === m || void 0 === m ? void 0 : m.definitionIcon),
                      }),
                      Object(S.jsx)($.b, {
                        onClick: function () {
                          return document.getElementsByClassName("main-area")[0].scroll({ top: 0, behavior: "smooth" });
                        },
                        className: "menu-link ".concat(l && "active", " ").concat(u && "current-nav"),
                        to: null === m || void 0 === m ? void 0 : m.url,
                        children: null === m || void 0 === m ? void 0 : m.N,
                      }),
                      this.state.navItems && this.state.navItems.length
                        ? Object(S.jsxs)(S.Fragment, {
                            children: [
                              Object(S.jsx)("span", {
                                title: "Expand submenu",
                                onClick: function () {
                                  return o.openSection();
                                },
                                className: "indicator js-submenu-indicator ".concat(d && "active"),
                                children: Object(S.jsx)("span", { className: d ? "fa fa-angle-up" : "fa fa-angle-down" }),
                              }),
                              Object(S.jsx)("div", {
                                className: "sub-menu js-submenu  ".concat(!d && "hidden"),
                                children:
                                  this.state.navItems &&
                                  this.state.navItems.length &&
                                  this.state.navItems.map(function (e, t) {
                                    return Object(S.jsx)(n, { preloadChildren: d, navItem: e, currentNode: o.props.currentNode, currentNodeAncestors: o.props.currentNodeAncestors }, e.id);
                                  }),
                              }),
                            ],
                          })
                        : Object(S.jsx)(S.Fragment, {}),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component);
      ee.contextType = k;
      var te = ee,
        ne = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n(e) {
            var a;
            return (
              Object(c.a)(this, n),
              ((a = t.call(this, e)).state = { navSections: void 0, currentNode: void 0, open: !1 }),
              (a.getNavState = Object(j.a)(
                b.a.mark(function e() {
                  var t;
                  return b.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), f();
                        case 2:
                          (t = e.sent), a.setState({ navSections: t, currentNode: a.context.currentPage });
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.state = { navSections: void 0, currentNode: void 0, open: !1, developerMode: !1 }),
              a
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getNavState();
                },
              },
              {
                key: "togglenav",
                value: function () {
                  this.setState({ open: !this.state.open });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)("button", {
                        className: "nav-toggle-button",
                        type: "button",
                        onClick: function () {
                          return e.togglenav();
                        },
                        children: Object(S.jsx)("i", { className: "fa fa-bars" }),
                      }),
                      Object(S.jsx)("div", {
                        className: "tree-nav-wrapper ".concat(this.state.open ? "open" : ""),
                        children:
                          this.state.navSections && this.state.navSections.length
                            ? this.state.navSections.map(function (t, n) {
                                return Object(S.jsx)("div", {
                                  className: "menu-item js-accordion",
                                  id: null === t || void 0 === t ? void 0 : t.id,
                                  "data-order": n,
                                  children: Object(S.jsx)(
                                    te,
                                    { preloadChildren: !0, navItem: t, nodeId: null === t || void 0 === t ? void 0 : t.id, currentNode: e.context.currentNode, currentNodeAncestors: e.props.currentNodeAncestors },
                                    t.id
                                  ),
                                });
                              })
                            : Object(S.jsx)("div", {
                                className: "menu-item",
                                children: Object(S.jsxs)("span", { className: "menu-link", children: [Object(S.jsx)("i", { className: "icon fa fa-spinner fa-spin" }), " Loading..."] }),
                              }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component);
      ne.contextType = k;
      var ae = Object(d.f)(ne),
        ie = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsx)(S.Fragment, {
                    children: Object(S.jsxs)("div", {
                      className: "inner",
                      children: [
                        Object(S.jsxs)("h1", { children: ["Welcome to ", Object(S.jsx)("strong", { children: "Gstring" })] }),
                        Object(S.jsx)("h3", { children: "Step 1: Download the npm package" }),
                        Object(S.jsxs)("ol", {
                          children: [
                            Object(S.jsx)("li", { children: Object(S.jsx)("p", { children: "Open a terminal window and navigate to your React project directory." }) }),
                            Object(S.jsx)("li", {
                              children: Object(S.jsxs)("p", { children: ["Install the gstring library from npm by running the following command: ", Object(S.jsx)("code", { children: "npm install gstring" })] }),
                            }),
                            Object(S.jsx)("li", {
                              children: Object(S.jsxs)("p", {
                                children: [
                                  "Import the gstring library into your React component where you want to use it by adding the following line at the top of your file: ",
                                  Object(S.jsx)("code", { children: "import gstring from 'gstring';" }),
                                ],
                              }),
                            }),
                            Object(S.jsx)("li", {
                              children: Object(S.jsxs)("p", {
                                children: [
                                  "Use the gstring library in your React component by calling its methods and passing any required arguments. For example, if gstring has a method called ",
                                  Object(S.jsx)("code", { children: "baz" }),
                                  " that takes a string as an argument, you can use it like this:",
                                  " ",
                                  Object(S.jsx)("code", { children: "gstring.baz('Hello, world!')" }),
                                ],
                              }),
                            }),
                            Object(S.jsx)("li", {
                              children: Object(S.jsx)("p", { children: "Once you have finished using the gstring library in your React component, you can save your changes and test them by running your React app." }),
                            }),
                          ],
                        }),
                        Object(S.jsx)("h3", { children: "Step 2. Take a look to the gstring features" }),
                        Object(S.jsx)("div", { className: "mb20", children: Object(S.jsx)(ae, {}) }),
                        Object(S.jsx)("h3", { children: "Step 3. Copy the examples and start using it" }),
                        Object(S.jsxs)("div", {
                          className: "request-:R2d6:-4 markdown prose dark:prose-invert break-words light",
                          children: [
                            Object(S.jsx)("p", {
                              children:
                                "To use the examples from gstring in your React project, you will first need to install the gstring library and its dependencies by running the following command in your terminal:",
                            }),
                            Object(S.jsx)("pre", {
                              children: Object(S.jsx)("div", {
                                className: "bg-grey mb-4 rounded-md",
                                children: Object(S.jsx)("div", { className: "p-4", children: Object(S.jsxs)("code", { className: "!whitespace-pre-wrap hljs", children: ["npm install gstring", "\n"] }) }),
                              }),
                            }),
                            Object(S.jsxs)("p", {
                              children: [
                                "Once the gstring library is installed, you can import the individual components that you want to use in your React component files. For example, to use the ",
                                Object(S.jsx)("code", { children: "Button" }),
                                " component from gstring, you would import it like this:",
                              ],
                            }),
                            Object(S.jsx)("pre", {
                              children: Object(S.jsxs)("div", {
                                className: "bg-grey mb-4 rounded-md",
                                children: [
                                  Object(S.jsx)("div", { className: "flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans" }),
                                  Object(S.jsx)("div", {
                                    className: "p-4",
                                    children: Object(S.jsxs)("code", {
                                      className: "!whitespace-pre-wrap hljs language-python",
                                      children: [
                                        Object(S.jsx)("span", { className: "hljs-keyword", children: "import" }),
                                        " Button",
                                        " ",
                                        Object(S.jsx)("span", { className: "hljs-keyword", children: "from" }),
                                        " ",
                                        Object(S.jsx)("span", { className: "hljs-string", children: "'react-gstring/Button'" }),
                                        ";",
                                        "\n",
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            Object(S.jsxs)("p", {
                              children: [
                                "You can then use the ",
                                Object(S.jsx)("code", { children: "Button" }),
                                " component in your React components by using the ",
                                Object(S.jsx)("code", { children: "<Button>" }),
                                " JSX tag. For example:",
                              ],
                            }),
                            Object(S.jsx)("pre", {
                              children: Object(S.jsx)("div", {
                                className: "bg-grey mb-4 rounded-md",
                                children: Object(S.jsx)("div", {
                                  className: "p-4",
                                  children: Object(S.jsx)("code", {
                                    className: "!whitespace-pre-wrap hljs language-php-template",
                                    children: Object(S.jsxs)("span", {
                                      className: "xml",
                                      children: [
                                        Object(S.jsxs)("span", {
                                          className: "hljs-tag",
                                          children: [
                                            "<",
                                            Object(S.jsx)("span", { className: "hljs-name", children: "Button" }),
                                            " ",
                                            Object(S.jsx)("span", { className: "hljs-attr", children: "variant" }),
                                            "=",
                                            Object(S.jsx)("span", { className: "hljs-string", children: '"primary"' }),
                                            ">",
                                          ],
                                        }),
                                        "Click me!",
                                        Object(S.jsxs)("span", { className: "hljs-tag", children: ["</", Object(S.jsx)("span", { className: "hljs-name", children: "Button" }), ">"] }),
                                        "\n",
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            Object(S.jsxs)("p", {
                              children: [
                                "In addition to importing the individual components that you want to use, you will also need to include the gstring CSS styles in your project. This can be done by importing the gstring CSS file in the entry point of your app, such as the ",
                                Object(S.jsx)("code", { children: "index.js" }),
                                " ",
                                "file.",
                              ],
                            }),
                            Object(S.jsx)("pre", {
                              children: Object(S.jsx)("div", {
                                className: "bg-grey mb-4 rounded-md",
                                children: Object(S.jsx)("div", {
                                  className: "p-4",
                                  children: Object(S.jsxs)("code", {
                                    className: "!whitespace-pre-wrap hljs language-python",
                                    children: [
                                      Object(S.jsx)("span", { className: "hljs-keyword", children: "import" }),
                                      " ",
                                      Object(S.jsx)("span", { className: "hljs-string", children: "'gstring/dist/css/gstring.min.css'" }),
                                      ";",
                                      "\n",
                                    ],
                                  }),
                                }),
                              }),
                            }),
                            Object(S.jsx)("p", {
                              children:
                                "After importing the gstring CSS, you should be able to use the gstring components and styles in your React project. I hope this helps! Let me know if you have any other questions.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        se = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsx)("div", { children: Object(S.jsx)("h1", { children: "Page type not implemented" }) });
                },
              },
            ]),
            n
          );
        })(a.Component),
        re = new Date(Date.now()),
        ce = new Date(re.setDate(re.getDate() + 1)),
        oe = new Date(re.setDate(re.getDate() + 5)),
        le = function () {
          return Object(S.jsx)(L.Calendar, { activeDates: [ce], disabledDates: [oe], defaultDate: re });
        },
        ue = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)("div", {
                    className: "inner",
                    children: [
                      Object(S.jsx)(le, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import React, { ReactElement } from "react"; \nimport Calendar from "../calendar/calendar"; \n \nlet defaultDate = new Date(Date.now()); \nlet activeDate = new Date(defaultDate.setDate(defaultDate.getDate() + 1)); \nlet disabledDate = new Date(defaultDate.setDate(defaultDate.getDate() + 5)); \n \nexport const CalendarExample: React.FC = (): ReactElement => { \n  return <Calendar activeDates={[activeDate]} disabledDates={[disabledDate]} defaultDate={defaultDate} />; \n}; \n \nexport default CalendarExample; \n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component);
      function de() {
        return Object(S.jsxs)(L.Accordion, {
          openedIndexes: [0],
          children: [
            Object(S.jsxs)(L.AccordionItem, {
              className: "",
              icon: { className: "fa fa-chevron-down", rotate: !0 },
              children: [
                Object(S.jsx)(L.AccordionHeader, { children: "Lorem ipsum dolor sit amet" }),
                Object(S.jsx)(L.AccordionContent, {
                  children:
                    "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }),
              ],
            }),
            Object(S.jsxs)(L.AccordionItem, {
              icon: { className: "fa fa-chevron-down", rotate: !0 },
              children: [
                Object(S.jsx)(L.AccordionHeader, { children: "Lorem ipsum dolor sit amet" }),
                Object(S.jsx)(L.AccordionContent, {
                  children:
                    "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                }),
              ],
            }),
          ],
        });
      }
      var me = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)("div", {
                    className: "inner",
                    children: [
                      Object(S.jsx)(de, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import Accordion, {\n  AccordionItem,\n  AccordionHeader,\n  AccordionContent,\n} from "../accordion/accordion";\n\nexport default function AccordionExample() {\n  return (\n    <Accordion openedIndexes={[0]}>\n      <AccordionItem\n        className=""\n        icon={{ className: "fa fa-chevron-down", rotate: true }}\n      >\n        <AccordionHeader>Lorem ipsum dolor sit amet</AccordionHeader>\n        <AccordionContent>\n          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est\n          laborum.\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem icon={{ className: "fa fa-chevron-down", rotate: true }}>\n        <AccordionHeader>Lorem ipsum dolor sit amet</AccordionHeader>\n        <AccordionContent>\n          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n          proident, sunt in culpa qui officia deserunt mollit anim id est\n          laborum.\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n  );\n}\n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        pe = n(35),
        be = Object(pe.b)({
          name: "notifications",
          initialState: [],
          reducers: {
            addNotification: function (e, t) {
              var n = t.payload;
              if (n) {
                var a = e;
                (n.id = n.id ? n.id : Date.now().toString()), a ? a.push(n) : (a = [n]), (e = a);
              }
            },
            removeNotification: function (e, t) {
              return (e = e.filter(function (e) {
                return e.id !== t.payload;
              }));
            },
          },
        }),
        je = be.actions,
        he = je.addNotification,
        ve = (je.removeNotification, be.reducer),
        fe = n(16),
        xe = Object(fe.b)({ notifications: ve }),
        Oe = Object(pe.a)({ reducer: xe }),
        ge = function (e) {
          Oe && Oe.dispatch(he(e));
        },
        ye = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)("button", {
                        className: "btn mr10",
                        onClick: function () {
                          ge({ type: "success", content: "Lorem ipsum dolor", timer: 3 });
                        },
                        children: "Add Success Notification",
                      }),
                      Object(S.jsx)("button", {
                        className: "btn mr10",
                        onClick: function () {
                          ge({ type: "error", content: "Lorem ipsum dolor", timer: 3 });
                        },
                        children: "Add Error Notification",
                      }),
                      Object(S.jsx)("button", {
                        className: "btn mr10",
                        onClick: function () {
                          ge({ type: "warning", content: "Lorem ipsum dolor", timer: 3 });
                        },
                        children: "Add Warning Notification",
                      }),
                      Object(S.jsx)("button", {
                        className: "btn mr10",
                        onClick: function () {
                          ge({ type: "info", content: "Lorem ipsum dolor", timer: 3 });
                        },
                        children: "Add Info Notification",
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        Ne = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)("div", {
                    className: "inner",
                    children: [
                      Object(S.jsx)(ye, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import React from "react"; \nimport { addNotification } from "../notifications/notifications-service"; \n \nexport default class NotificationsExample extends React.Component { \n  render() { \n    return ( \n      <> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "success", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Success Notification \n        </button> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "error", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Error Notification \n        </button> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "warning", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Warning Notification \n        </button> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "info", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Info Notification \n        </button> \n      </> \n    ); \n  } \n} \n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        we = function (e) {
          return Object(S.jsxs)("div", {
            className: " row ",
            children: [
              Object(S.jsx)("div", {
                className: "box-4 ",
                children: Object(S.jsx)("div", {
                  className: "inner",
                  children: Object(S.jsx)(L.DateInput, {
                    disableFutureDates: !0,
                    dateFormat: "DD MMMM YYYY",
                    disabledDates: new Date(Date.now()),
                    defaultValue: new Date(Date.now()),
                    validations: [L.required, L.date],
                    placeholder: "date",
                    name: "myDate",
                    customCalendar: !0,
                    validateBeforeSubmit: !1,
                    label: "Simple date picker",
                  }),
                }),
              }),
              Object(S.jsx)("div", {
                className: "box-4 ",
                children: Object(S.jsx)("div", {
                  className: "inner",
                  children: Object(S.jsx)(L.DateInput, {
                    label: "Range date picker",
                    disablePastDates: !0,
                    mode: L.datePickerMode.RANGE,
                    dateFormat: "DD MMMM YYYY",
                    validations: [L.required],
                    placeholder: "date",
                    name: "myDate1",
                    customCalendar: !0,
                    validateBeforeSubmit: !1,
                  }),
                }),
              }),
              Object(S.jsx)("div", {
                className: "box-4 ",
                children: Object(S.jsx)("div", {
                  className: "inner",
                  children: Object(S.jsx)(L.DateInput, {
                    label: "Multiple date picker",
                    mode: L.datePickerMode.MULTIPLE,
                    dateFormat: "DD MMMM YYYY",
                    validations: [L.required],
                    placeholder: "date",
                    name: "myDate2",
                    customCalendar: !0,
                    validateBeforeSubmit: !1,
                  }),
                }),
              }),
            ],
          });
        },
        Se = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)(we, {}),
                      Object(S.jsx)("div", {
                        className: "inner",
                        children: Object(S.jsx)(P.a, {
                          language: "typescript",
                          style: T.a,
                          children:
                            'import React, { ReactElement } from "react"; \nimport DateInput, { datePickerMode } from "../forms/date-input"; \nimport { required, date } from "../forms/utilities/validations"; \n \nexport const DatePickerExample: React.FC = (props): ReactElement => { \n  return ( \n    <div className=" row "> \n      <div className="box-4 "> \n        <div className="inner"> \n          <DateInput \n            disableFutureDates={true} \n            dateFormat={"DD MMMM YYYY"} \n            disabledDates={new Date(Date.now())} \n            defaultValue={new Date(Date.now())} \n            validations={[required, date]} \n            placeholder="date" \n            name="myDate" \n            customCalendar={true} \n            validateBeforeSubmit={false} \n            label="Simple date picker" \n          /> \n        </div> \n      </div> \n      <div className="box-4 "> \n        <div className="inner"> \n          <DateInput \n            label="Range date picker" \n            disablePastDates={true} \n            mode={datePickerMode.RANGE} \n            dateFormat={"DD MMMM YYYY"} \n            validations={[required]} \n            placeholder="date" \n            name="myDate1" \n            customCalendar={true} \n            validateBeforeSubmit={false} \n          /> \n        </div> \n      </div> \n      <div className="box-4 "> \n        <div className="inner"> \n          <DateInput \n            label="Multiple date picker" \n            mode={datePickerMode.MULTIPLE} \n            dateFormat={"DD MMMM YYYY"} \n            validations={[required]} \n            placeholder="date" \n            name="myDate2" \n            customCalendar={true} \n            validateBeforeSubmit={false} \n          /> \n        </div> \n      </div> \n    </div> \n  ); \n}; \n \nexport default DatePickerExample; \n',
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component),
        Ie = (function () {
          var e = Object(j.a)(
            b.a.mark(function e(t) {
              var n, a, i, s, r;
              return b.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = [
                          { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Mart\xedn", createdOn: "01/01/2022" },
                          { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
                          { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
                          { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
                          { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
                        ]).sort(function (e, n) {
                          var a = e[t.sortBy],
                            i = n[t.sortBy],
                            s = a && "object" === typeof a ? a.label : a,
                            r = i && "object" === typeof i ? i.label : i;
                          if ("asc" === t.sortDirection) {
                            if (s < r) return -1;
                            if (s > r) return 1;
                          } else {
                            if (s > r) return -1;
                            if (s < r) return 1;
                          }
                          return 0;
                        }),
                        (a = n.filter(function (e) {
                          return !t.categoryId || e.categoryId === t.categoryId;
                        })),
                        (i = t ? t.page * t.perPage - t.perPage : 0),
                        (s = t ? t.page * t.perPage : 0),
                        (r = a ? a.slice(i, s) : a),
                        e.abrupt("return", { count: a.length, data: r })
                      );
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        ke = [
          { title: "Name", columnKey: "title", sortable: !0, filterOptions: [] },
          { title: "Category", columnKey: "categoryId", sortable: !0, filterOptions: [] },
          { title: "Created by", columnKey: "createdByUser", sortable: !0, filterOptions: [], type: "object" },
          { title: "Created on", columnKey: "createdOn", sortable: !0, filterOptions: [], type: "date" },
        ],
        qe = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(i))).fetchData = (function () {
                var e = Object(j.a)(
                  b.a.mark(function e(t) {
                    return b.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Ie(t);
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)("div", {
                    className: "g-item_16 g-item-tablet_8 g-item-mobile_4 mb8",
                    children: [
                      Object(S.jsx)("h3", { className: "hero mb2", children: "Results" }),
                      Object(S.jsx)(L.Results, {
                        reactRouterHistory: this.props.history,
                        clientFiltering: !1,
                        filterOnChange: !0,
                        columns: ke,
                        itemsPerPage: [2, 5, 10],
                        defaultColumns: ke,
                        fetchResults: this.fetchData,
                        children: Object(S.jsxs)(L.SelectInput, {
                          label: "Sample category filter",
                          name: "categoryId",
                          children: [
                            Object(S.jsx)("option", { value: "", children: "Select a category" }),
                            Object(S.jsx)("option", { value: "Ipsum", children: "Ipsum" }),
                            Object(S.jsx)("option", { value: "Lorem", children: "Lorem" }),
                            Object(S.jsx)("option", { value: "Dolor", children: "Dolor" }),
                          ],
                        }),
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Ce = Object(d.f)(qe),
        De = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsxs)("div", {
                    className: "inner",
                    children: [
                      Object(S.jsx)(Ce, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import { Component } from "react";\nimport { SelectInput } from "@3ffect/gstring";\nimport { Results } from "@3ffect/gstring";\nimport { RouteComponentProps, withRouter } from "react-router-dom";\nimport { mockAPICall } from "./results-example-service";\n\nconst columnsExample = [\n  { title: "Name", columnKey: "title", sortable: true, filterOptions: [] },\n  { title: "Category", columnKey: "categoryId", sortable: true, filterOptions: [] },\n  { title: "Created by", columnKey: "createdByUser", sortable: true, filterOptions: [], type: "object" },\n  { title: "Created on", columnKey: "createdOn", sortable: true, filterOptions: [], type: "date" },\n];\n\nclass ResultsExample extends Component<RouteComponentProps> {\n  fetchData = async (filters: any) => {\n    return await mockAPICall(filters);\n  };\n\n  render() {\n    return (\n      <div className="g-item_16 g-item-tablet_8 g-item-mobile_4 mb8">\n        <h3 className="hero mb2">Results</h3>\n        {/* Please check the results PROPS interface for extra options. */}\n        <Results reactRouterHistory={this.props.history} clientFiltering={false} filterOnChange={true} columns={columnsExample} itemsPerPage={[2, 5, 10]} defaultColumns={columnsExample} fetchResults={this.fetchData}>\n          {/* In this area you can add anything you want, it will appear on top of the table.\n          If you add form INPUTS theyll be automatically serialize and sent to fetchResults function as the filters. */}\n          <SelectInput label="Sample category filter" name="categoryId">\n            <option value="">Select a category</option>\n            <option value="Ipsum">Ipsum</option>\n            <option value="Lorem">Lorem</option>\n            <option value="Dolor">Dolor</option>\n          </SelectInput>\n        </Results>\n      </div>\n    );\n  }\n}\n\nexport default withRouter(ResultsExample);\n',
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component);
      function Fe() {
        return Object(S.jsxs)(L.Tabs, {
          defaultActiveTab: "tab1",
          children: [
            Object(S.jsx)(
              L.TabItem,
              {
                id: "tab1",
                title: "Tab 1",
                children:
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nulla quia tempore dolore? Voluptas totam cupiditate quam, sint doloribus voluptatibus provident sed excepturi, amet, blanditiis dolore? Fuga magnam ducimus quis!",
              },
              "tab1"
            ),
            Object(S.jsx)(
              L.TabItem,
              {
                id: "tab2",
                title: "Tab 2",
                children:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates qui ullam repudiandae aperiam fugit dicta dignissimos magni quia rerum quae natus. Ipsum voluptas et inventore voluptates atque totam dignissimos error, iste, ea harum, sapiente quas praesentium soluta voluptatum sint beatae voluptatibus asperiores architecto dolor? Assumenda commodi aperiam vel. Pariatur.",
              },
              "tab2"
            ),
          ],
        });
      }
      var Ae = (function (e) {
        Object(l.a)(n, e);
        var t = Object(u.a)(n);
        function n() {
          return Object(c.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(o.a)(n, [
            {
              key: "render",
              value: function () {
                return Object(S.jsx)(S.Fragment, {
                  children: Object(S.jsxs)("div", {
                    className: "inner",
                    children: [
                      Object(S.jsx)(Fe, {}),
                      Object(S.jsx)(P.a, {
                        language: "typescript",
                        style: T.a,
                        children:
                          'import Tabs, { TabItem } from "components/shared/tabs/tabs";\nimport React from "react";\n\nexport default function TabsExample() {\n  return (\n    <Tabs className="m2" defaultActiveTab="tab1">\n      <TabItem id="tab1" key="tab1" title="Tab 1">\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nulla quia tempore dolore? Voluptas totam cupiditate quam, sint doloribus voluptatibus provident sed excepturi, amet, blanditiis dolore? Fuga magnam\n        ducimus quis!\n      </TabItem>\n      <TabItem id="tab2" key="tab2" title="Tab 2">\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates qui ullam repudiandae aperiam fugit dicta dignissimos magni quia rerum quae natus. Ipsum voluptas et inventore voluptates atque totam\n        dignissimos error, iste, ea harum, sapiente quas praesentium soluta voluptatum sint beatae voluptatibus asperiores architecto dolor? Assumenda commodi aperiam vel. Pariatur.\n      </TabItem>\n    </Tabs>\n  );\n}\n',
                      }),
                    ],
                  }),
                });
              },
            },
          ]),
          n
        );
      })(i.a.Component);
      function Re(e, t, n) {
        switch (e.type) {
          case "global-elements":
            return M;
          case "forms":
            return U;
          case "form-wizard":
            return z;
          case "messages":
            return J;
          case "modals":
            return H;
          case "buttons":
            return K;
          case "wysiwyg":
            return Z;
          case "home":
            return ie;
          case "calendar":
            return ue;
          case "accordions":
            return me;
          case "notifications":
            return Ne;
          case "date-picker":
            return Se;
          case "results":
            return De;
          case "tabs":
            return Ae;
          default:
            return se;
        }
      }
      var Pe = function (e, t, n) {
          return Object(S.jsx)(d.b, { exact: !0, path: e.url, component: Re(e) }, e.id);
        },
        Te = function (e) {
          return Object(S.jsx)(d.b, { exact: !0, component: A }, e ? e.type : null);
        },
        Me = function (e) {
          var t = e.url;
          return (
            -1 !== t.indexOf(":") && (t = t.split(":")[0] + window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)),
            "/auth" !== new URL(window.location.href).pathname ? Object(S.jsx)(d.a, { to: "/auth?ref=" + t + window.location.search }) : Object(S.jsx)(d.b, { exact: !0, path: e.url, component: Re(e) }, e.id)
          );
        },
        Le = function () {
          var e = new URL(window.location.href),
            t = e.searchParams.get("ref"),
            n = t || "/";
          return t && (n = e.search.replace("?ref=", "")), Object(S.jsx)(d.a, { to: n });
        },
        We = function (e) {
          var t = Object(a.useContext)(D),
            n = Object(a.useContext)(k);
          if (t) {
            var i = t,
              s = n;
            if (s && s.pages && s.pages.length) {
              if (s.currentPage) {
                var r = !(!i || !i.user),
                  c = new URL(window.location.href);
                return r && N("/auth", c.pathname)
                  ? Le()
                  : s.currentPage.isPrivate && !r
                  ? Me(s.currentPage)
                  : s.pages.map(function (e) {
                      var t = e.isPrivate && !r;
                      s.currentPage && (e.url, s.currentPage.url);
                      return t ? null : Pe(e, null, s.pages);
                    });
              }
              return Te(null);
            }
            return null;
          }
          return "Loading...";
        },
        Ee = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(S.jsx)("div", { className: "box-2 sidebar dark-bg", children: Object(S.jsx)(ae, {}) });
                },
              },
            ]),
            n
          );
        })(a.Component),
        Be = n(34),
        Ye = function (e) {
          var t = Object(Be.b)(function (e) {
            return e.notifications;
          });
          return Object(S.jsxs)("div", {
            className: "notifcations-container container",
            children: [
              e.children,
              t &&
                t.map(function (e) {
                  return Object(S.jsx)(L.Notification, { type: e.type, id: e.id, timer: e.timer, richText: e.richText, content: e.content }, e.id);
                }),
            ],
          });
        },
        Ue = (function (e) {
          Object(l.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(o.a)(n, [
              {
                key: "render",
                value: function () {
                  var e,
                    t = (function () {
                      var e = "";
                      if (window.screen && window.screen.width) {
                        var t = window.screen;
                        e += (t.width ? t.width : "") + " x " + (t.height ? t.height : "");
                      }
                      var n,
                        a,
                        i,
                        s = navigator.appVersion,
                        r = navigator.userAgent,
                        c = navigator.appName,
                        o = "" + parseFloat(navigator.appVersion),
                        l = parseInt(navigator.appVersion, 10);
                      -1 !== (a = r.indexOf("Opera")) && ((c = "Opera"), (o = r.substring(a + 6)), -1 !== (a = r.indexOf("Version")) && (o = r.substring(a + 8))),
                        -1 !== (a = r.indexOf("OPR"))
                          ? ((c = "Opera"), (o = r.substring(a + 4)))
                          : -1 !== (a = r.indexOf("Edge"))
                          ? ((c = "Microsoft Edge"), (o = r.substring(a + 5)))
                          : -1 !== (a = r.indexOf("MSIE"))
                          ? ((c = "Microsoft Internet Explorer"), (o = r.substring(a + 5)))
                          : -1 !== (a = r.indexOf("Chrome"))
                          ? ((c = "Chrome"), (o = r.substring(a + 7)))
                          : -1 !== (a = r.indexOf("Safari"))
                          ? ((c = "Safari"), (o = r.substring(a + 7)), -1 !== (a = r.indexOf("Version")) && (o = r.substring(a + 8)))
                          : -1 !== (a = r.indexOf("Firefox"))
                          ? ((c = "Firefox"), (o = r.substring(a + 8)))
                          : -1 !== r.indexOf("Trident/")
                          ? ((c = "Microsoft Internet Explorer"), (o = r.substring(r.indexOf("rv:") + 3)))
                          : (n = r.lastIndexOf(" ") + 1) < (a = r.lastIndexOf("/")) && ((c = r.substring(n, a)), (o = r.substring(a + 1)), c.toLowerCase() === c.toUpperCase() && (c = navigator.appName)),
                        -1 !== (i = o.indexOf(";")) && (o = o.substring(0, i)),
                        -1 !== (i = o.indexOf(" ")) && (o = o.substring(0, i)),
                        -1 !== (i = o.indexOf(")")) && (o = o.substring(0, i)),
                        (l = parseInt("" + o, 10)),
                        isNaN(l) && ((o = "" + parseFloat(navigator.appVersion)), (l = parseInt(navigator.appVersion, 10)));
                      var u = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(s),
                        d = !!navigator.cookieEnabled;
                      "undefined" !== typeof navigator.cookieEnabled || d || ((document.cookie = "testcookie"), (d = -1 !== document.cookie.indexOf("testcookie")));
                      var m = "-",
                        p = [
                          { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
                          { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
                          { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
                          { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
                          { s: "Windows Vista", r: /Windows NT 6.0/ },
                          { s: "Windows Server 2003", r: /Windows NT 5.2/ },
                          { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
                          { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
                          { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
                          { s: "Windows 98", r: /(Windows 98|Win98)/ },
                          { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
                          { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                          { s: "Windows CE", r: /Windows CE/ },
                          { s: "Windows 3.11", r: /Win16/ },
                          { s: "Android", r: /Android/ },
                          { s: "Open BSD", r: /OpenBSD/ },
                          { s: "Sun OS", r: /SunOS/ },
                          { s: "Linux", r: /(Linux|X11)/ },
                          { s: "iOS", r: /(iPhone|iPad|iPod)/ },
                          { s: "Mac OS X", r: /Mac OS X/ },
                          { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                          { s: "QNX", r: /QNX/ },
                          { s: "UNIX", r: /UNIX/ },
                          { s: "BeOS", r: /BeOS/ },
                          { s: "OS/2", r: /OS\/2/ },
                          { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ },
                        ];
                      for (var b in p) {
                        var j = p[b];
                        if (j.r.test(r)) {
                          m = j.s;
                          break;
                        }
                      }
                      var h = "-";
                      switch ((/Windows/.test(m) && ((h = /Windows (.*)/.exec(m)[1]), (m = "Windows")), m)) {
                        case "Android":
                          h = /Android ([\d]+)/.exec(r)[1];
                          break;
                        case "iOS":
                          h = (h = /OS (\d+)_(\d+)_?(\d+)?/.exec(s))[1] + "." + h[2] + "." + (0 | h[3]);
                      }
                      var v = window.swfobject,
                        f = "no check";
                      if ("undefined" !== typeof v) {
                        var x = v.getFlashPlayerVersion();
                        f = x.major > 0 ? x.major + "." + x.minor + " r" + x.release : "-";
                      }
                      return { screen: e, browser: c, browserVersion: o, browserMajorVersion: l, mobile: u, os: m, osVersion: h, cookies: d, flashVersion: f };
                    })(),
                    n = t.browser ? t.browser : "default",
                    a = t.browserMajorVersion ? t.browserMajorVersion : "default";
                  return Object(S.jsxs)(S.Fragment, {
                    children: [
                      Object(S.jsx)("div", {
                        className: "container-wrapper",
                        "data-browser": n,
                        "data-version": a,
                        children: Object(S.jsx)("div", {
                          className: "container ",
                          children: Object(S.jsxs)("div", {
                            className: "global-wrapper",
                            children: [
                              Object(S.jsx)(Ee, {}),
                              Object(S.jsxs)("div", {
                                className: "box-10 main-area js-dashboard",
                                children: [
                                  Object(S.jsxs)("div", {
                                    className: "header",
                                    children: [
                                      Object(S.jsx)("div", {
                                        className: "box-mobile-12",
                                        style: { flex: "1 1 0%" },
                                        children: Object(S.jsx)("div", {
                                          className: "inner mb0 mt0 pb0",
                                          children: Object(S.jsx)("ul", {
                                            className: "list-inline  p10",
                                            children: Object(S.jsx)("li", { className: "h5", children: null === (e = this.context.currentPage) || void 0 === e ? void 0 : e.N }),
                                          }),
                                        }),
                                      }),
                                      Object(S.jsx)("div", { className: "clearfix" }),
                                    ],
                                  }),
                                  Object(S.jsx)("div", { className: "p10 mt20", children: Object(S.jsx)(We, {}) }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      Object(S.jsx)(Ye, {}),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(i.a.Component);
      Ue.contextType = k;
      var Ve = Ue,
        ze = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 403))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  i = t.getFCP,
                  s = t.getLCP,
                  r = t.getTTFB;
                n(e), a(e), i(e), s(e), r(e);
              });
        },
        _e = n(73),
        Je = Object(_e.a)();
      r.a.render(
        Object(S.jsx)(Be.a, {
          store: Oe,
          children: Object(S.jsx)(i.a.StrictMode, {
            children: Object(S.jsx)(d.c, { history: Je, children: Object(S.jsx)($.a, { basename: "/gstring-documentation", children: Object(S.jsx)(F, { children: Object(S.jsx)(Ve, {}) }) }) }),
          }),
        }),
        document.getElementById("root")
      ),
        ze();
    },
    80: function (e, t, n) {},
  },
  [[400, 1, 2]],
]);
//# sourceMappingURL=main.9bd925c3.chunk.js.map
