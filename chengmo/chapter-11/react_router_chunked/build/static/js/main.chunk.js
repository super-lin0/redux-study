(window.webpackJsonpreact_router_basic=window.webpackJsonpreact_router_basic||[]).push([["main"],{"./src/Router.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./node_modules/react-router-dom/esm/react-router-dom.js"),a=n("./node_modules/@loadable/component/dist/loadable.esm.js"),u=n("./src/layout/index.js"),l=n("./src/components/loading.js"),c=Object(a.default)(function(){return n.e(2).then(n.bind(null,"./src/pages/Home.js"))},{fallback:l.default}),d=Object(a.default)(function(){return n.e(1).then(n.bind(null,"./src/pages/About.js"))}),i=Object(a.default)(function(){return n.e(3).then(n.bind(null,"./src/pages/NotFound.js"))});t.default=function(){return o.a.createElement(s.BrowserRouter,null,o.a.createElement(u.default,null),o.a.createElement(s.Switch,null,o.a.createElement(s.Route,{exact:!0,path:"/",component:c}),o.a.createElement(s.Route,{exact:!0,path:"/home",component:c}),o.a.createElement(s.Route,{exact:!0,path:"/about",component:d}),o.a.createElement(s.Route,{exact:!0,path:"*",component:i})))}},"./src/Store.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/redux/es/redux.js"),o=n("./node_modules/react-router-redux/lib/index.js"),s=Object(r.combineReducers)({routing:o.routerReducer}),a=window,u=Object(r.compose)(a&&a.devToolsExtension?a.devToolsExtension():function(e){return e});t.default=Object(r.createStore)(s,{},u)},"./src/components/loading.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r);t.default=function(e){var t=e.isLoading,n=e.error;return t?o.a.createElement("div",null,"Loading..."):n?o.a.createElement("div",null,"Sorry, there was a problem loading the page."):null}},"./src/index.css":function(e,t,n){},"./src/index.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),s=n("./node_modules/react-dom/index.js"),a=n.n(s),u=n("./node_modules/react-redux/es/index.js"),l=(n("./src/index.css"),n("./src/Router.js")),c=n("./src/Store.js");a.a.render(o.a.createElement(u.Provider,{store:c.default},o.a.createElement(l.default,null)),document.getElementById("root"))},"./src/layout/index.js":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),s=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),a=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),u=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),l=n("./node_modules/react/index.js"),c=n.n(l),d=n("./node_modules/react-router-dom/esm/react-router-dom.js"),i=function(e){function t(){return Object(r.default)(this,t),Object(s.default)(this,Object(a.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(o.default)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(d.Link,{to:"/home"},"Home")),c.a.createElement("li",null,c.a.createElement(d.Link,{to:"/about"},"About")))))}}]),t}(l.Component);t.default=i},0:function(e,t,n){e.exports=n("./src/index.js")}},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map