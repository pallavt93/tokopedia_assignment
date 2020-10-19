(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};require("babel-polyfill");const t=require("express");var r=e.n(t);const n=require("react");var o=e.n(n);const a=require("react-dom/server"),c=require("react-router-dom"),i=require("react-redux"),u=require("react-router-config"),l=require("serialize-javascript");var s=e.n(l);const p=require("axios");var m=e.n(p);const d="Fetch_Products",f="Fetch_Initial_App_Data",h="Fetch_Product";function y(e,t,r,n,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,o)}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:f,payload:e}},g=function(){return function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m().get("https://node-sample-api.herokuapp.com/api/home");case 2:return r=e.sent,e.abrupt("return",t(v(r.data)));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){y(a,n,o,c,i,"next",e)}function i(e){y(a,n,o,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}()};const b=require("react-bootstrap"),E=(require("react-bootstrap/Navbar"),function(e){var t=e.history;return o().createElement("header",{className:"header"},o().createElement("div",null,o().createElement("img",{src:e.logo,width:"100",height:"30",className:"headerlogo",alt:"logo"})),o().createElement("div",{className:"navbuttons"},"/"!==t.location.pathname?o().createElement(b.Button,{variant:"outline-primary",className:"nav-buttons",onClick:function(){t.push("/")}},"Back"):null))});require("react-bootstrap/Container");const w=function(){return o().createElement(o().Fragment,null,o().createElement("footer",{className:"footer"},o().createElement("div",null,o().createElement("span",{className:"text-muted"},"footer content here."))))},P={loadData:function(e,t){return e.dispatch(g())},component:(0,i.connect)((function(e){return{initialAppData:e.initialAppData}}),{fetchInitialAppData:g})((function(e){var t=e.route,r=e.history,n=e.initialAppData;return o().createElement("div",null,o().createElement(E,{logo:n.logo,history:r}),o().createElement(b.Container,null,(0,u.renderRoutes)(t.routes)),o().createElement(w,null))}))};function O(e,t,r,n,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,o)}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:d,payload:e}},k=function(e){return function(){var t,r=(t=regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m().get("https://node-sample-api.herokuapp.com/api/products?page=".concat(e));case 2:return n=t.sent,t.abrupt("return",r(j(n.data.data)));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(e){O(a,n,o,c,i,"next",e)}function i(e){O(a,n,o,c,i,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}()};const R=require("react-bootstrap/Card");var C=e.n(R);const D=function(e){var t=e.product;return o().createElement("div",{onClick:function(){e.history.push("/pdp/".concat(t.id))}},o().createElement(C(),null,o().createElement(C().Img,{variant:"top",src:t.img}),o().createElement(C().Body,null,o().createElement(C().Title,null,t.name),o().createElement(C().Text,null,o().createElement("p",null,"Price: Rs.",t.price)))))};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?q(e):t}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(i,e);var t,r,n,a,c=(n=i,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(a){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return N(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=c.call(this,e)).state={productPage:1},t.handleLoadMore=t.handleLoadMore.bind(q(t)),t}return t=i,(r=[{key:"componentDidMount",value:function(){0===this.props.products.length?(this.props.fetchProducts(this.state.productPage),this.setState((function(e){return{productPage:e.productPage+1}}))):this.setState((function(e){return{productPage:e.productPage+1}}))}},{key:"renderProducts",value:function(){var e=this;return this.props.products.map((function(t){return o().createElement(b.Col,{key:t.id},o().createElement(D,{product:t,history:e.props.history}))}))}},{key:"handleLoadMore",value:function(){this.props.fetchProducts(this.state.productPage),this.setState((function(e){return{productPage:e.productPage+1}}))}},{key:"render",value:function(){return o().createElement(o().Fragment,null,o().createElement(b.Row,{className:"justify-content-md-center",md:{cols:5,noGutters:!1},xs:{cols:1,noGutters:!1}},this.renderProducts()),o().createElement(b.Row,{className:"loadContent"},o().createElement(b.Col,{md:{span:6,offset:3}},o().createElement(b.Button,{variant:"dark",onClick:this.handleLoadMore,size:"lg",block:!0},"Load More"))))}}])&&x(t.prototype,r),i}(o().Component);const F=(0,i.connect)((function(e){return{products:e.products}}),{fetchProducts:k})(_),T=require("react-bootstrap/Carousel");var M=e.n(T);const L=(0,i.connect)((function(e){return{initialAppData:e.initialAppData}}))((function(e){return o().createElement(o().Fragment,null,o().createElement(b.Row,null,o().createElement(b.Col,null,o().createElement(M(),null,o().createElement(M().Item,null,o().createElement("img",{className:"d-block w-100",src:e.initialAppData.carousel[0].url,alt:"First slide"})),o().createElement(M().Item,null,o().createElement("img",{className:"d-block w-100",src:e.initialAppData.carousel[1].url,alt:"Second slide"})),o().createElement(M().Item,null,o().createElement("img",{className:"d-block w-100",src:e.initialAppData.carousel[2].url,alt:"Third slide"})),o().createElement(M().Item,null,o().createElement("img",{className:"d-block w-100",src:e.initialAppData.carousel[3].url,alt:"Fourth slide"})),o().createElement(M().Item,null,o().createElement("img",{className:"d-block w-100",src:e.initialAppData.carousel[4].url,alt:"Fifth slide"}))))))})),W={loadData:function(e){return e.dispatch(k())},component:function(e){return o().createElement("div",null,o().createElement(L,null),o().createElement("hr",null),o().createElement(F,{history:e.history}))}};function B(e,t,r,n,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,o)}var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:h,payload:e}},Y=function(e){return function(){var t,r=(t=regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m().get("https://node-sample-api.herokuapp.com/api/products/".concat(e));case 2:return n=t.sent,t.abrupt("return",r(G(n.data)));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(e){B(a,n,o,c,i,"next",e)}function i(e){B(a,n,o,c,i,"throw",e)}c(void 0)}))});return function(e){return r.apply(this,arguments)}}()};const z=require("react-rating");var U=e.n(z);const H=function(e){var t=e.product;return o().createElement(b.Container,null,o().createElement(b.Row,{className:"justify-content-md-center",md:{cols:2,noGutters:!1}},o().createElement(b.Col,{md:{span:2}},o().createElement(b.Image,{src:t.img,fluid:!0,rounded:!0})),o().createElement(b.Col,{md:{span:10}},o().createElement(b.Row,null,o().createElement(b.Col,{md:{span:2}},o().createElement("div",{style:{fontWeight:600}},"Name")),o().createElement(b.Col,{md:{span:10}},t.name,o().createElement("hr",null))),o().createElement(b.Row,null,o().createElement(b.Col,{md:{span:2}},o().createElement("div",{style:{fontWeight:600}},"Rating")),o().createElement(b.Col,{md:{span:10}},o().createElement(U(),{emptySymbol:o().createElement("img",{src:"http://dreyescat.github.io/react-rating/assets/images/star-empty.png",className:"icon"}),fullSymbol:o().createElement("img",{src:"http://dreyescat.github.io/react-rating/assets/images/star-full.png",className:"icon"}),initialRating:t.rating,readonly:!0}),o().createElement("hr",null))),o().createElement(b.Row,null,o().createElement(b.Col,{md:{span:2}},o().createElement("div",{style:{fontWeight:600}},"Price")),o().createElement(b.Col,{md:{span:10}},t.price,o().createElement("hr",null))),o().createElement(b.Row,null,o().createElement(b.Col,{md:{span:2}},o().createElement("div",{style:{fontWeight:600}},"Description")),o().createElement(b.Col,{md:{span:10}},t.description,o().createElement("hr",null))))))},K={loadData:function(e,t){return e.dispatch(Y(t.params.id))},component:(0,i.connect)((function(e){return{product:e.product}}),{fetchProduct:Y})((function(e){return(0,n.useEffect)((function(){e.fetchProduct(e.match.params.id)}),[]),o().createElement("div",null,o().createElement(H,{product:e.product}))}))};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const J=[Z(Z({},P),{},{routes:[Z(Z({},W),{},{path:"/",exact:!0}),Z(Z({},K),{},{path:"/pdp/:id",exact:!0})]})],V=require("redux"),X=require("redux-thunk");var ee=e.n(X);function te(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return re(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?re(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const ne=(0,V.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return[].concat(te(e),te(t.payload));default:return e}},initialAppData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}}});var oe=r()();oe.use(r().static("public")),oe.get("*",(function(e,t){var r=(0,V.createStore)(ne,{},(0,V.applyMiddleware)(ee())),n=(0,u.matchRoutes)(J,e.path).map((function(e){var t=e.route,n=e.match;return t.loadData?t.loadData(r,n):null})).map((function(e){if(e)return new Promise((function(t,r){e.then(t).catch(t)}))}));Promise.all(n).then((function(){var n={},l=function(e,t,r){var n=(0,a.renderToString)(o().createElement(i.Provider,{store:t},o().createElement(c.StaticRouter,{location:e.path,context:r},o().createElement("div",null,(0,u.renderRoutes)(J)))));return'\n    <!DOCTYPE html>\n    <html>\n        <head>\n            <link\n                rel="stylesheet"\n                type="text/css"\n                href="/styles.css"\n            />\n            <link\n                rel="stylesheet"\n                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"\n                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"\n                crossorigin="anonymous"\n            />\n        </head>\n        <body>\n            <div id="root">'.concat(n,"</div>\n            <script>\n                window.INITIAL_STATE=").concat(s()(t.getState()),' \n            <\/script>\n            <script src="/bundle.js"><\/script>\n            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin><\/script>\n            <script\n            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"\n            crossorigin><\/script>\n            <script\n            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"\n            crossorigin><\/script>\n        </body>\n    </html>')}(e,r,n);n.notFound&&t.status(404),t.send(l)}))})),oe.listen(3e3,(function(){console.log("Listening on port 3000")}))})();