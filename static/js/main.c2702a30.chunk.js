(this["webpackJsonpreact-2021-10-08"]=this["webpackJsonpreact-2021-10-08"]||[]).push([[0],{14:function(e,t,r){e.exports={basketItem:"basket-item_basketItem__Ei069",counter:"basket-item_counter__3ae4-",count:"basket-item_count__1PMoO",price:"basket-item_price__hwmVy",button:"basket-item_button__wPafo",name:"basket-item_name__3ZEsE",info:"basket-item_info__8g5h5"}},17:function(e,t,r){e.exports={product:"product_product__3kfjq",content:"product_content__3SJnw",title:"product_title__3Wk4c",description:"product_description__1l8Ij",price:"product_price__2AtTn",counter:"product_counter__234_5",count:"product_count__3rWw_",buttons:"product_buttons__1d8XO"}},18:function(e,t,r){e.exports={reviewForm:"review-form_reviewForm__m1lEM",reviewFormItem:"review-form_reviewFormItem__ZWkl1",rateWrap:"review-form_rateWrap__xFtWF",addReviewTitle:"review-form_addReviewTitle__Cx8mn",message:"review-form_message__3m5LZ",publish:"review-form_publish__hWPD6",submitButton:"review-form_submitButton__2NfSL"}},22:function(e,t,r){e.exports={basket:"basket_basket__1xrL0",hr:"basket_hr__20D1o",title:"basket_title__1NOhF",button:"basket_button__2fmr9",loading:"basket_loading__2M6q_"}},29:function(e,t,r){e.exports={button:"button_button__3_GL1",primary:"button_primary__17m96",secondary:"button_secondary__3v91q",small:"button_small__14mQu",block:"button_block__yiIqr"}},30:function(e,t,r){e.exports={review:"review_review__3NLiZ",content:"review_content__tNRaI",name:"review_name__2_t_D",comment:"review_comment__1XcdB",rate:"review_rate__3UeVh"}},33:function(e,t,r){e.exports={star:"rate_star__2lA_N",checked:"rate_checked__aRwx4",unknown:"rate_unknown__3B6wx",clickable:"rate_clickable__7OGYH"}},34:function(e,t,r){e.exports={banner:"banner_banner__-R6DW",img:"banner_img__39USH",caption:"banner_caption__1Rp9z",heading:"banner_heading__3MvRh"}},36:function(e,t,r){e.exports={loader:"loader_loader__31U88",bounce1:"loader_bounce1__3tnG1",bounce2:"loader_bounce2__31li3","sk-bounce":"loader_sk-bounce__LRB5V"}},37:function(e,t,r){e.exports={tabs:"tabs_tabs__3hOO2",tab:"tabs_tab__xx9z8",active:"tabs_active__3IcAw"}},41:function(e,t,r){e.exports={switcher:"currency-switcher_switcher__3xoG1",switcherBtn:"currency-switcher_switcherBtn__2Bs0p"}},42:function(e,t,r){e.exports={page:"order-success_page__zBJrG",actions:"order-success_actions__TT0Hz"}},43:function(e,t,r){e.exports={page:"order-error_page__2e1xU",actions:"order-error_actions__1Lvpr"}},50:function(e,t,r){e.exports={menu:"menu_menu__2lX_i"}},51:function(e,t,r){e.exports={reviews:"reviews_reviews__n9n4q"}},52:function(e,t,r){e.exports={enter:"reviews-animation_enter__1O-kf",enterActive:"reviews-animation_enterActive__3DPD1"}},53:function(e,t,r){e.exports={header:"header_header__v9FKw"}},71:function(e,t,r){},74:function(e,t,r){},79:function(e,t,r){"use strict";r.r(t);var n=r(19),a=r.n(n),c=r(6),i=r(23),s=(r(71),r(16)),o=r(5),u=r(1),l=r(47),d=r(48),b=r(59),j=r(57),O=r(15),f=r.n(O),v=r(27),p=r(10),h="INCREMENT",m="DECREMENT",x="REMOVE",_="ADD_REVIEW",g="CHANGE_RESTAURANT",w="LOAD_RESTAURANTS",y="LOAD_PRODUCTS",k="LOAD_REVIEWS",I="LOAD_USERS",N="CREATE_ORDER",E="_REQUEST",C="_SUCCESS",L="_FAILURE",R=r(7),P=r(2),S=r(21),D=function(e){return e.restaurants.entities},A=function(e){return e.products.entities},H=function(e){return e.order.entities},M=function(e){return e.reviews.entities},U=function(e){return e.restaurants.loading},F=function(e){return e.restaurants.loaded},B=function(e){return e.order.loading},T=function(e){return e.order.error},V=function(e,t){return e.products.loading[t.restId]},Z=function(e,t){return e.products.loaded[t.restId]},W=function(e,t){return e.reviews.loading[t.restId]},z=function(e,t){return e.reviews.loaded[t.restId]},G=function(e){return e.users.loading},q=function(e){return e.users.loaded},J=Object(S.a)(D,Object.values),Y=function(e,t){var r=t.id;return D(e)[r]},X=function(e,t){var r=t.id;return A(e)[r]},Q=function(e,t){var r=t.id;return H(e)[r]||0},$=Object(S.a)(J,(function(e){return e.flatMap((function(e){return e.menu.map((function(t){return{productId:t,restId:e.id}}))})).reduce((function(e,t){var r=t.productId,n=t.restId;return Object(P.a)(Object(P.a)({},e),{},Object(R.a)({},r,n))}),{})})),K=Object(S.a)(H,A,$,(function(e,t,r){return Object.keys(e).filter((function(t){return e[t]>0})).map((function(e){return t[e]})).map((function(t){return{product:t,amount:e[t.id],subtotal:e[t.id]*t.price,restId:r[t.id]}}))})),ee=Object(S.a)([K],(function(e){return e.reduce((function(e,t){return e+t.subtotal}),0)})),te=Object(S.a)((function(e,t){var r=t.id;return M(e)[r]}),(function(e){return e.users.entities}),(function(e,t){var r;return Object(P.a)(Object(P.a)({},e),{},{user:null===(r=t[e.userId])||void 0===r?void 0:r.name})})),re=Object(S.a)(M,Y,(function(e,t){var r=t.reviews.map((function(t){var r;return(null===(r=e[t])||void 0===r?void 0:r.rating)||0}));return Math.round(r.reduce((function(e,t){return e+t}),0)/r.length)})),ne=Object(S.a)(H,(function(e){return Object.entries(e).map((function(e){var t=Object(s.a)(e,2);return{id:t[0],amount:t[1]}}))})),ae=function(e){return{type:h,id:e}},ce=function(e){return{type:m,id:e}},ie=r(36),se=r.n(ie),oe=r(0);var ue,le=function(){return Object(oe.jsxs)("div",{className:se.a.loader,children:[Object(oe.jsx)("div",{className:se.a.bounce1}),Object(oe.jsx)("div",{className:se.a.bounce2})]})},de=r(17),be=r.n(de),je=r(26),Oe=r(24),fe=r.n(Oe),ve=r(29),pe=r.n(ve),he=["title","titleId"];function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},me.apply(this,arguments)}function xe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _e(e,t){var r=e.title,n=e.titleId,a=xe(e,he);return u.createElement("svg",me({fill:"none",height:12,viewBox:"0 0 18 17",width:14,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?u.createElement("title",{id:n},r):null,ue||(ue=u.createElement("path",{d:"m.92445 10.2v-3.21h6.12v-6.390001h3.90005v6.390001h6.12v3.21h-6.12v6.48h-3.90005v-6.48z",fill:"#fff"})))}var ge,we=u.forwardRef(_e),ye=(r.p,["title","titleId"]);function ke(){return ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ke.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Ne(e,t){var r=e.title,n=e.titleId,a=Ie(e,ye);return u.createElement("svg",ke({fill:"none",height:4,viewBox:"0 0 10 4",width:10,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?u.createElement("title",{id:n},r):null,ge||(ge=u.createElement("path",{d:"m.764347 3.59v-3.39h8.670003v3.39z",fill:"#fff"})))}var Ee,Ce=u.forwardRef(Ne),Le=(r.p,["title","titleId"]);function Re(){return Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Re.apply(this,arguments)}function Pe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Se(e,t){var r=e.title,n=e.titleId,a=Pe(e,Le);return u.createElement("svg",Re({xmlns:"http://www.w3.org/2000/svg",width:"10px",height:"10px",viewBox:"0 0 348.333 348.334",ref:t,"aria-labelledby":n},a),r?u.createElement("title",{id:n},r):null,Ee||(Ee=u.createElement("path",{d:"M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z",fill:"#fff"})))}var De=u.forwardRef(Se),Ae=(r.p,["icon","children","primary","secondary","small","block"]),He={plus:we,minus:Ce,delete:De},Me=function(e){var t,r=e.icon,n=e.children,a=e.primary,c=void 0!==a&&a,i=e.secondary,s=void 0!==i&&i,o=e.small,u=void 0!==o&&o,l=e.block,d=void 0!==l&&l,b=Object(je.a)(e,Ae),j=He[r];return Object(oe.jsxs)("button",Object(P.a)(Object(P.a)({className:fe()(pe.a.button,(t={},Object(R.a)(t,pe.a.primary,c),Object(R.a)(t,pe.a.secondary,s),Object(R.a)(t,pe.a.small,u),Object(R.a)(t,pe.a.block,d),t))},b),{},{children:[j&&Object(oe.jsx)(j,{}),n]}))},Ue=Object(u.createContext)(),Fe=Ue.Provider,Be={USD:{label:"USD",rate:1,sign:"$"},EUR:{label:"EUR",rate:1/1.15,sign:"\u20ac"},RUB:{label:"RUB",rate:72,sign:"\u20bd"},UAH:{label:"UAH",rate:26,sign:"\u20b4"}},Te=Object.entries(Be).map((function(e){var t=Object(s.a)(e,2);return{key:t[0],label:t[1].label}}));function Ve(e){var t=e.children,r=Object(u.useState)("USD"),n=Object(s.a)(r,2),a=n[0],c=n[1],i=Be[a],o=i.rate,l=i.sign;return Object(oe.jsx)(Fe,{value:{currencies:Te,currency:a,setCurrency:c,convert:function(e){return"".concat((o*e).toFixed(2)," ").concat(l)}},children:t})}function Ze(e){var t=e.value;return(0,Object(u.useContext)(Ue).convert)(t)}var We=Ue;var ze=Object(c.c)((function(e,t){return{amount:Q(e,t),product:X(e,t)}}),(function(e,t){return{increment:function(){return e(ae(t.id))},decrement:function(){return e(ce(t.id))}}}))((function(e){var t=e.product,r=e.amount,n=e.decrement,a=e.increment;return Object(oe.jsx)("div",{className:be.a.product,"data-id":"product",children:Object(oe.jsxs)("div",{className:be.a.content,children:[Object(oe.jsxs)("div",{children:[Object(oe.jsx)("h4",{className:be.a.title,children:t.name}),Object(oe.jsx)("p",{className:be.a.description,children:t.ingredients.join(", ")}),Object(oe.jsx)("div",{className:be.a.price,children:Object(oe.jsx)(Ze,{value:t.price})})]}),Object(oe.jsx)("div",{children:Object(oe.jsxs)("div",{className:be.a.counter,children:[Object(oe.jsx)("div",{className:be.a.count,"data-id":"product-amount",children:r}),Object(oe.jsxs)("div",{className:be.a.buttons,children:[Object(oe.jsx)(Me,{onClick:n,icon:"minus","data-id":"product-decrement"}),Object(oe.jsx)(Me,{onClick:a,icon:"plus","data-id":"product-increment"})]})]})})]})})})),Ge=r(12),qe=r(83),Je=r(81),Ye=r(22),Xe=r.n(Ye),Qe=(r(74),r(14)),$e=r.n(Qe);function Ke(){return Object(u.useContext)(We).convert}var et=Object(c.c)(null,(function(e,t){return{increment:function(){return e(ae(t.product.id))},decrement:function(){return e(ce(t.product.id))},remove:function(){return e((r=t.product.id,{type:x,id:r}));var r}}}))((function(e){var t=e.product,r=e.amount,n=e.subtotal,a=e.restId,c=e.increment,i=e.decrement,s=e.remove,o=Ke();return Object(oe.jsxs)("div",{className:$e.a.basketItem,children:[Object(oe.jsx)("div",{className:$e.a.name,children:Object(oe.jsx)(Ge.a,{to:"/restaurants/".concat(a,"/menu"),children:t.name})}),Object(oe.jsxs)("div",{className:$e.a.info,children:[Object(oe.jsxs)("div",{className:$e.a.counter,children:[Object(oe.jsx)(Me,{onClick:i,icon:"minus",secondary:!0,small:!0}),Object(oe.jsx)("span",{className:$e.a.count,children:r}),Object(oe.jsx)(Me,{onClick:c,icon:"plus",secondary:!0,small:!0})]}),Object(oe.jsx)("p",{className:fe()($e.a.count,$e.a.price),children:o(n)}),Object(oe.jsx)(Me,{onClick:s,icon:"delete",secondary:!0,small:!0})]})]})})),tt=Object(u.createContext)("Default user"),rt=tt.Provider,nt=tt.Consumer;var at,ct={createOrder:function(){return function(){var e=Object(v.a)(f.a.mark((function e(t,r){var n,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r(),a=ne(n),e.prev=2,e.next=5,t({type:N,CallAPI:"/api/order",postData:a});case 5:t(Object(p.d)("/order-success")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t(Object(p.d)("/order-error"));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,r){return e.apply(this,arguments)}}()}},it=Object(c.c)((function(e){return{total:ee(e),orderProducts:K(e),loading:B(e)}}),ct)((function(e){var t=e.title,r=void 0===t?"Basket":t,n=e.total,a=e.orderProducts,c=e.createOrder,i=e.loading,s=Ke();return n?Object(oe.jsxs)("div",{className:Xe.a.basket,children:[i&&Object(oe.jsx)("div",{className:Xe.a.loading,children:Object(oe.jsx)(le,{})}),Object(oe.jsx)("h4",{className:Xe.a.title,children:Object(oe.jsx)(nt,{children:function(e){var t=e.name;return"".concat(t,"'s ").concat(r)}})}),Object(oe.jsx)(qe.a,{children:a.map((function(e){var t=e.product,r=e.amount,n=e.subtotal,a=e.restId;return Object(oe.jsx)(Je.a,{timeout:500,classNames:"basket-item",children:Object(oe.jsx)(et,{product:t,amount:r,subtotal:n,restId:a})},t.id)}))}),Object(oe.jsx)("hr",{className:Xe.a.hr}),Object(oe.jsxs)("div",{className:$e.a.basketItem,children:[Object(oe.jsx)("div",{className:$e.a.name,children:Object(oe.jsx)("p",{children:"Total"})}),Object(oe.jsx)("div",{className:$e.a.info,children:Object(oe.jsx)("p",{children:s(n)})})]}),Object(oe.jsxs)(o.d,{children:[Object(oe.jsx)(o.b,{path:"/checkout",children:Object(oe.jsx)(Me,{primary:!0,block:!0,onClick:c,children:"send order"})}),Object(oe.jsx)(o.b,{children:Object(oe.jsx)(Ge.a,{to:"/checkout",children:Object(oe.jsx)(Me,{primary:!0,block:!0,children:"go to checkout"})})})]})]}):Object(oe.jsx)("div",{className:Xe.a.basket,children:Object(oe.jsx)("h4",{className:Xe.a.title,children:"Select a meal from the list"})})})),st=r(50),ot=r.n(st),ut=function(e){Object(b.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={error:null},e.loadProductsIfNeeded=function(){var t=e.props,r=t.loadProducts,n=t.restId,a=t.loading,c=t.loaded;a||c||r(n)},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){this.loadProductsIfNeeded()}},{key:"componentDidUpdate",value:function(e,t){e.restId!==this.props.restId&&this.loadProductsIfNeeded()}},{key:"componentDidCatch",value:function(e){this.setState({error:e})}},{key:"render",value:function(){var e=this.props,t=e.menu,r=e.loading,n=e.loaded;return r?Object(oe.jsx)(le,{}):this.state.error||!n?Object(oe.jsx)("p",{children:"\u041c\u0435\u043d\u044e \u044d\u0442\u043e\u0433\u043e \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e :("}):Object(oe.jsxs)("div",{className:ot.a.menu,children:[Object(oe.jsx)("div",{children:t.map((function(e){return Object(oe.jsx)(ze,{id:e},e)}))}),Object(oe.jsx)("div",{children:Object(oe.jsx)(it,{})})]})}}]),r}(u.Component),lt={loadProducts:function(e){return{type:y,CallAPI:"/api/products?id=".concat(e),restId:e}}},dt=Object(c.c)((function(e,t){return{loading:V(e,t),loaded:Z(e,t)}}),lt)(ut),bt=r(58),jt=["title","titleId"];function Ot(){return Ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ot.apply(this,arguments)}function ft(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function vt(e,t){var r=e.title,n=e.titleId,a=ft(e,jt);return u.createElement("svg",Ot({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?u.createElement("title",{id:n},r):null,at||(at=u.createElement("path",{d:"M8 12.8395L3.04225 16L4.35681 10.0741L0 6.08395L5.74648 5.57037L8 0L10.2535 5.57037L16 6.08395L11.6432 10.0741L12.9577 16L8 12.8395Z"})))}var pt=u.forwardRef(vt),ht=(r.p,r(33)),mt=r.n(ht),xt=function(e){var t=e.value,r=e.onChange;return Object(oe.jsx)("div",{children:Object(bt.a)(Array(5)).map((function(e,n){var a;return Object(oe.jsx)(pt,{"data-id":n<=t-1?"full-star":"empty-star",className:fe()(mt.a.star,(a={},Object(R.a)(a,mt.a.checked,n<=t-1),Object(R.a)(a,mt.a.unknown,0===t),Object(R.a)(a,mt.a.clickable,!!r),a)),onClick:r?function(){return r(n+1)}:void 0},n)}))})},_t=r(30),gt=r.n(_t),wt=function(e){var t=e.user,r=e.text,n=e.rating;return Object(oe.jsx)("div",{className:gt.a.review,"data-id":"review",children:Object(oe.jsxs)("div",{className:gt.a.content,children:[Object(oe.jsxs)("div",{children:[Object(oe.jsx)("h4",{className:gt.a.name,"data-id":"review-user",children:t}),Object(oe.jsx)("p",{className:gt.a.comment,"data-id":"review-text",children:r})]}),Object(oe.jsx)("div",{className:gt.a.rate,children:Object(oe.jsx)(xt,{value:n})})]})})};wt.defaultProps={user:"Anonymous"};var yt=te,kt=Object(c.c)(yt)(wt);var It=r(18),Nt=r.n(It),Et={name:"",text:"",rating:3},Ct=Object(c.c)(null,(function(e,t){return{onSubmit:function(r){return e(function(e,t){return{type:_,review:e,restId:t,generateId:["reviewId","userId"]}}(r,t.restId))}}}))((function(e){var t=e.onSubmit,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(u.useState)(e),r=Object(s.a)(t,2),n=r[0],a=r[1],c=function(e,t){return a(Object(P.a)(Object(P.a)({},n),{},Object(R.a)({},e,t)))},i=function(e){return function(t){return c(e,t.target?t.target.value:t)}};return{values:n,reset:function(){return a(e)},handlers:Object.keys(n).reduce((function(e,t){return Object(P.a)(Object(P.a)({},e),{},Object(R.a)({},t,{value:n[t],onChange:i(t)}))}),{})}}(Et),n=r.values,a=r.handlers,c=r.reset;return Object(oe.jsxs)("div",{className:Nt.a.reviewForm,children:[Object(oe.jsx)("h4",{className:Nt.a.addReviewTitle,children:"Leave your review"}),Object(oe.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(n),c()},children:[Object(oe.jsx)("div",{className:Nt.a.reviewFormItem,children:Object(oe.jsx)("input",Object(P.a)({placeholder:"Your name",className:Nt.a.message},a.name))}),Object(oe.jsx)("div",{className:Nt.a.reviewFormItem,children:Object(oe.jsx)("textarea",Object(P.a)({placeholder:"Your review",className:Nt.a.message},a.text))}),Object(oe.jsxs)("div",{className:Nt.a.rateWrap,children:[Object(oe.jsx)("span",{children:"Rating: "}),Object(oe.jsx)("span",{children:Object(oe.jsx)(xt,Object(P.a)({},a.rating))})]}),Object(oe.jsx)("div",{className:Nt.a.publish,children:Object(oe.jsx)(Me,{primary:!0,block:!0,children:"PUBLISH REVIEW"})})]})]})})),Lt=r(51),Rt=r.n(Lt),Pt=r(52),St=r.n(Pt),Dt={loadReviews:function(e){return function(){var t=Object(v.a)(f.a.mark((function t(r,n){var a,c,i,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n(),c=W(a,{restId:e}),i=z(a,{restId:e}),!c&&!i){t.next=5;break}return t.abrupt("return");case 5:return r({type:k+E,restId:e}),t.prev=6,t.next=9,fetch("/api/reviews?id=".concat(e)).then((function(e){return e.json()}));case 9:s=t.sent,r({type:k+C,restId:e,data:s}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),r({type:k+L,restId:e,error:t.t0}),r(Object(p.e)("/error"));case 17:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(e,r){return t.apply(this,arguments)}}()},loadUsers:function(){return function(){var e=Object(v.a)(f.a.mark((function e(t,r){var n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),a=G(n),c=q(n),!a&&!c){e.next=5;break}return e.abrupt("return");case 5:t({type:I,CallAPI:"/api/users"});case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}},At=Object(c.c)((function(e,t){return{reviewsLoaded:z(e,t),usersLoaded:q(e)}}),Dt)((function(e){var t=e.reviews,r=e.restId,n=e.loadReviews,a=e.loadUsers,c=e.usersLoaded,i=e.reviewsLoaded;return Object(u.useEffect)((function(){a(),n(r)}),[r,n,a]),c&&i?Object(oe.jsxs)("div",{className:Rt.a.reviews,children:[Object(oe.jsx)(qe.a,{children:t.map((function(e){return Object(oe.jsx)(Je.a,{timeout:500,classNames:St.a,children:Object(oe.jsx)(kt,{id:e})},e)}))}),Object(oe.jsx)(Ct,{restId:r})]}):Object(oe.jsx)(le,{})})),Ht=r(34),Mt=r.n(Ht),Ut=r.p+"static/media/banner.40e0021b.jpg",Ft=function(e){var t=e.heading,r=e.children;return Object(oe.jsxs)("div",{className:Mt.a.banner,children:[Object(oe.jsx)("img",{src:Ut,className:Mt.a.img,alt:"banner"}),Object(oe.jsxs)("div",{className:Mt.a.caption,children:[Object(oe.jsx)("h2",{className:Mt.a.heading,children:t}),Object(oe.jsx)("div",{children:r})]})]})},Bt=r(37),Tt=r.n(Bt);var Vt=function(e){var t=e.tabs;return Object(oe.jsx)("div",{className:Tt.a.tabs,children:t.map((function(e){var t=e.label,r=e.url;return Object(oe.jsx)(Ge.b,{to:r,className:Tt.a.tab,activeClassName:Tt.a.active,children:t},t)}))})},Zt=Object(c.c)((function(e,t){return{restaurant:Y(e,t),averageRating:re(e,t)}}))((function(e){var t=e.restaurant,r=e.averageRating,n=t.id,a=t.name,c=t.menu,i=t.reviews,s=[{label:"Menu",url:"/restaurants/".concat(n,"/menu")},{label:"Reviews",url:"/restaurants/".concat(n,"/reviews")}];return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(Ft,{heading:a,children:Object(oe.jsx)(xt,{value:r})}),Object(oe.jsx)(Vt,{tabs:s}),Object(oe.jsxs)(o.d,{children:[Object(oe.jsx)(o.b,{path:"/restaurants/:restId/menu",children:Object(oe.jsx)(dt,{menu:c,restId:n})}),Object(oe.jsx)(o.b,{path:"/restaurants/:restId/reviews",children:Object(oe.jsx)(At,{reviews:i,restId:n})}),Object(oe.jsx)(o.a,{to:"/restaurants/:restId/menu"})]})]})}));var Wt,zt,Gt,qt,Jt,Yt,Xt,Qt,$t,Kt={loadRestaurants:function(){return{type:w,CallAPI:"/api/restaurants"}}},er=Object(c.c)((function(e){return{restaurants:J(e),loading:U(e),loaded:F(e)}}),Kt)((function(e){var t,r=e.restaurants,n=e.loading,a=e.loaded,c=e.loadRestaurants;Object(u.useEffect)((function(){n||a||c()}),[n,a,c]);var i=Object(o.g)("/restaurants/:restId/:tabId"),s=(null===i||void 0===i?void 0:i.params.tabId)||"";if(n)return Object(oe.jsx)(le,{});if(!a)return"No data :(";var l=r.map((function(e){var t=e.id;return{label:e.name,url:"/restaurants/".concat(t,"/").concat(s)}}));return Object(oe.jsxs)("div",{children:[Object(oe.jsx)(Vt,{tabs:l}),Object(oe.jsxs)(o.d,{children:[Object(oe.jsx)(o.b,{path:"/restaurants/:restId",children:function(e){var t=e.match;return Object(oe.jsx)(Zt,{id:t.params.restId})}}),Object(oe.jsx)(o.a,{to:"/restaurants/".concat(null===(t=r[0])||void 0===t?void 0:t.id)})]})]})})),tr=["title","titleId"];function rr(){return rr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rr.apply(this,arguments)}function nr(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ar(e,t){var r=e.title,n=e.titleId,a=nr(e,tr);return u.createElement("svg",rr({width:115,height:18,viewBox:"0 0 115 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},a),r?u.createElement("title",{id:n},r):null,Wt||(Wt=u.createElement("path",{d:"M60.2043 3.47599V0.761993H49.4633V17H52.4763V10.123H114.261V7.52399H52.4763V3.47599H60.2043Z",fill:"white"})),zt||(zt=u.createElement("path",{d:"M97.3408 0V16.238H103.482C108.266 16.238 111.095 13.455 111.095 8.257C111.095 2.438 107.507 0 103.666 0H97.3408ZM100.377 2.737H102.884C105.897 2.737 107.875 4.255 107.875 8.257C107.875 12.834 105.782 13.501 102.263 13.501H100.377V2.737Z",fill:"white"})),Gt||(Gt=u.createElement("path",{d:"M77.9976 8.556C77.9976 13.11 80.9416 17.066 85.7256 17.066C91.5676 17.066 93.5686 12.121 93.5686 8.441C93.5686 4.048 90.7396 0 85.7946 0C81.1026 0 77.9976 3.795 77.9976 8.556ZM81.1256 8.441C81.1256 4.876 83.1036 2.783 85.7716 2.783C88.9916 2.783 90.5096 5.796 90.5096 8.694C90.5096 12.374 88.2326 14.237 85.8176 14.237C82.3446 14.237 81.1256 10.971 81.1256 8.441Z",fill:"#FFD25E"})),qt||(qt=u.createElement("path",{d:"M61.6893 8.556C61.6893 13.11 64.6333 17.066 69.4173 17.066C75.2593 17.066 77.2603 12.121 77.2603 8.441C77.2603 4.048 74.4313 0 69.4863 0C64.7943 0 61.6893 3.795 61.6893 8.556ZM64.8173 8.441C64.8173 4.876 66.7953 2.783 69.4633 2.783C72.6833 2.783 74.2013 5.796 74.2013 8.694C74.2013 12.374 71.9243 14.237 69.5093 14.237C66.0363 14.237 64.8173 10.971 64.8173 8.441Z",fill:"#FFD25E"})),Jt||(Jt=u.createElement("path",{d:"M14.49 17L8.947 0.761993H5.497L0 17H3.266L4.209 13.826H10.304L11.247 17H14.49ZM9.499 11.158H5.014L7.268 3.68299L9.499 11.158Z",fill:"white"})),Yt||(Yt=u.createElement("path",{d:"M30.2451 17V0.761993H27.2551C27.2781 1.12999 27.6231 12.216 27.6231 12.216L20.4241 0.761993H17.6871V17H20.6541C20.6541 16.701 20.4701 5.61499 20.4701 5.61499L27.5771 17H30.2451Z",fill:"white"})),Xt||(Xt=u.createElement("path",{d:"M46.007 0.761993H42.603L39.061 7.47799L35.542 0.761993H32.092L37.52 10.583V17H40.533V10.583L46.007 0.761993Z",fill:"white"})),Qt||(Qt=u.createElement("ellipse",{cx:69.5,cy:8.5,rx:5.5,ry:6.5,fill:"#FFD25D"})),$t||($t=u.createElement("ellipse",{cx:85.5,cy:8.5,rx:5.5,ry:6.5,fill:"#FFD25D"})))}var cr=u.forwardRef(ar),ir=(r.p,r(53)),sr=r.n(ir),or=r(41),ur=r.n(or),lr=function(){var e=Object(u.useContext)(We),t=e.currency,r=e.currencies,n=e.setCurrency,a=function(e){return n(e.target.value)};return Object(oe.jsx)("fieldset",{className:ur.a.switcher,children:r.map((function(e){var r=e.key,n=e.label;return Object(oe.jsxs)("label",{className:ur.a.switcherBtn,children:[Object(oe.jsx)("input",{type:"radio",value:r,checked:r===t,onChange:a}),Object(oe.jsx)("span",{children:n})]},r)}))})},dr=function(){return Object(oe.jsxs)("header",{className:sr.a.header,children:[Object(oe.jsx)(Ge.a,{to:"/restaurants",children:Object(oe.jsx)(cr,{})}),Object(oe.jsx)(lr,{})]})},br=r(42),jr=r.n(br),Or=function(){return Object(oe.jsxs)("h1",{className:jr.a.page,children:[Object(oe.jsx)("p",{children:"Congratulations! Your order has been successfully created!"}),Object(oe.jsx)("div",{className:jr.a.actions,children:Object(oe.jsx)(Ge.a,{to:"/restaurants",children:Object(oe.jsx)(Me,{primary:!0,block:!0,children:"back to restaurants"})})})]})},fr=r(43),vr=r.n(fr),pr=Object(c.c)((function(e){return{error:T(e)}}))((function(e){var t=e.error,r=Ke(),n=null===t||void 0===t?void 0:t.replace(/\$(\d+)/gi,(function(e,t){return r(t)}));return Object(oe.jsxs)("h1",{className:vr.a.page,children:[Object(oe.jsx)("p",{children:n}),Object(oe.jsx)("div",{className:vr.a.actions,children:Object(oe.jsx)(Ge.a,{to:"/checkout",children:Object(oe.jsx)(Me,{primary:!0,block:!0,children:"back to checkout"})})})]})})),hr=function(){var e=Object(u.useState)("Andrey"),t=Object(s.a)(e,2),r=t[0],n=t[1];return Object(oe.jsx)("div",{children:Object(oe.jsxs)(rt,{value:{name:r,setName:n},children:[Object(oe.jsx)(dr,{}),Object(oe.jsxs)(o.d,{children:[Object(oe.jsx)(o.a,{exact:!0,from:"/",to:"/restaurants"}),Object(oe.jsx)(o.b,{path:"/checkout",component:it}),Object(oe.jsx)(o.b,{path:"/restaurants",component:er}),Object(oe.jsx)(o.b,{path:"/order-success",component:Or}),Object(oe.jsx)(o.b,{path:"/order-error",component:pr}),Object(oe.jsx)(o.b,{path:"/error",component:function(){return Object(oe.jsx)("h2",{children:"Error Page!"})}}),Object(oe.jsx)(o.b,{component:function(){return Object(oe.jsx)("h2",{children:"404 - Not found :("})}})]})]})})},mr=r(25),xr=r(56),_r=r(45),gr=r(54),wr=r(82),yr=["generateId"],kr=["CallAPI","type","postData"],Ir=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}},Nr={loading:!1,loaded:!1,error:null,entities:{}},Er=r(20),Cr=function(e){return e.reduce((function(e,t){return Object(P.a)(Object(P.a)({},e),{},Object(R.a)({},t.id,t))}),{})},Lr={activeId:null,loading:!1,loaded:!1,entities:{},error:null},Rr={entities:{},loading:{},loaded:{},error:null},Pr={entities:{},loading:{},loaded:{},error:null},Sr=Object(Er.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pr,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.review,a=t.reviewId,c=t.userId,i=t.restId,s=t.data,o=t.error;switch(r){case k+E:e.error=null,e.loading[i]=!0;break;case k+C:e.loading[i]=!1,e.loaded[i]=!0,Object.assign(e.entities,Cr(s));break;case k+L:e.loading[i]=!1,e.loaded[i]=!1,e.error=o;break;case _:var u=n.text,l=n.rating;e.entities[a]={id:a,userId:c,text:u,rating:l};break;default:return e}})),Dr={entities:{},loading:!1,loaded:!1,error:null},Ar=Object(Er.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dr,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.review,a=t.userId,c=t.data,i=t.error;switch(r){case I+E:e.error=null,e.loading=!0;break;case I+C:e.loading=!1,e.loaded=!0,e.entities=Cr(c);break;case I+L:e.loading=!1,e.loaded=!1,e.error=i;break;case _:var s=n.name;e.entities[a]={id:a,name:s};break;default:return e}})),Hr=r(11),Mr=Object(Hr.a)(),Ur=Object(mr.combineReducers)({router:Object(i.b)(Mr),order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nr,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.id,a=t.error,c=e.entities;switch(r){case h:return Object(P.a)(Object(P.a)({},e),{},{entities:Object(P.a)(Object(P.a)({},c),{},Object(R.a)({},n,(c[n]||0)+1))});case m:return Object(P.a)(Object(P.a)({},e),{},{entities:Object(P.a)(Object(P.a)({},c),{},Object(R.a)({},n,c[n]>0?(c[n]||0)-1:0))});case x:return Object(P.a)(Object(P.a)({},e),{},{entities:Object(P.a)(Object(P.a)({},c),{},Object(R.a)({},n,0))});case N+E:return Object(P.a)(Object(P.a)({},e),{},{loading:!0,error:null});case N+C:return Object(P.a)(Object(P.a)({},e),{},{loading:!1,loaded:!0,entities:{}});case N+L:return Object(P.a)(Object(P.a)({},e),{},{loading:!1,loaded:!1,error:a});default:return e}},restaurants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lr,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.restId,a=t.reviewId,c=t.activeId,i=t.data,s=t.error;switch(r){case w+E:return Object(P.a)(Object(P.a)({},e),{},{loading:!0,error:null});case w+C:return Object(P.a)(Object(P.a)({},e),{},{activeId:i[0].id,entities:Cr(i),loading:!1,loaded:!0});case w+L:return Object(P.a)(Object(P.a)({},e),{},{loading:!1,loaded:!1,error:s});case g:return Object(P.a)(Object(P.a)({},e),{},{activeId:c});case _:return Object(Er.a)(e,(function(e){e.entities[n].reviews.push(a)}));default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rr,t=arguments.length>1?arguments[1]:void 0;return Object(Er.a)(e,(function(e){var r=t.type,n=t.restId,a=t.data,c=t.error;switch(r){case y+E:e.loading[n]=!0;break;case y+C:e.loading[n]=!1,e.loaded[n]=!0,e.error=null,Object.assign(e.entities,Cr(a));break;case y+L:e.loading[n]=!1,e.loaded[n]=!1,e.error=c;break;default:return}}))},reviews:Sr,users:Ar}),Fr=Object(mr.applyMiddleware)(xr.a,Object(_r.a)(Mr),(function(e){return function(e){return function(){var t=Object(v.a)(f.a.mark((function t(r){var n,a,c,i,s,o,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.CallAPI){t.next=2;break}return t.abrupt("return",e(r));case 2:return n=r.CallAPI,a=r.type,c=r.postData,i=Object(je.a)(r,kr),e(Object(P.a)(Object(P.a)({},i),{},{type:a+E})),t.prev=4,s=c?Ir(c):{},t.next=8,fetch(n,s);case 8:return o=t.sent,t.next=11,o.json();case 11:if(u=t.sent,o.ok){t.next=14;break}throw u;case 14:e(Object(P.a)(Object(P.a)({},i),{},{type:a+C,data:u})),t.next=20;break;case 17:throw t.prev=17,t.t0=t.catch(4),e(Object(P.a)(Object(P.a)({},i),{},{type:a+L,error:t.t0}));case 20:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}()}}),(function(e){return function(e){return function(t){if(!t.generateId)return e(t);var r=t.generateId,n=Object(je.a)(t,yr);e(Object(P.a)(Object(P.a)({},n),r.reduce((function(e,t){return Object(P.a)(Object(P.a)({},e),{},Object(R.a)({},t,Object(wr.a)()))}),{})))}}}),(function(e){return function(e){return function(t){e(t)}}})),Br=Object(mr.createStore)(Ur,Object(gr.composeWithDevTools)(Fr));window.store=Br,a.a.render(Object(oe.jsx)(c.a,{store:Br,children:Object(oe.jsx)(i.a,{history:Mr,children:Object(oe.jsx)(Ve,{children:Object(oe.jsx)(hr,{})})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.c2702a30.chunk.js.map