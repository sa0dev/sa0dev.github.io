(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88,910],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},695:function(e,r,n){"use strict";var t=n(2982),i=(n(2791),n(1889)),o=n(3517),c=n(890),s=n(3767),a=n(8333),u=n(3060),l=n(184);function d(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function f(e){return(0,l.jsx)(u.Z,{underline:"hover",color:"inherit",href:e.href,onClick:d,children:e.text},e.id)}function m(e){return(0,l.jsx)(c.Z,{color:"text.primary",children:e.text},e.id)}function x(e){console.log(e.breadcrumbs.slice(0,-1)),console.log(e.breadcrumbs[e.breadcrumbs.length-1]);var r=[].concat((0,t.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,l.jsx)(f,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,l.jsx)(m,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,l.jsx)(s.Z,{spacing:2,children:(0,l.jsx)(o.Z,{separator:(0,l.jsx)(a.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:r})})}r.Z=function(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,l.jsx)(x,{breadcrumbs:e.breadcrumbs})}),(0,l.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},910:function(e,r,n){"use strict";n.r(r);n(2791);var t=n(695),i=n(1030),o=n(1650),c=n(184);r.default=function(e){var r=e.breadcrumbs?e.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents"}];return(0,c.jsx)(i.Z,{modules:[{id:"agents",reducerMap:{leads:o.Z},sagas:[]}],children:(0,c.jsx)(t.Z,{breadcrumbs:r,children:e.children})})}},7088:function(e,r,n){"use strict";n.r(r);n(2791);var t=n(6151),i=n(1889),o=n(7391),c=n(7689),s=n(910),a=n(184);r.default=function(e){return(0,a.jsx)("div",{children:(0,a.jsx)(s.default,{breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents",href:"/dashboard/agents"},{id:3,text:"Add"}],children:(0,a.jsxs)(i.ZP,{item:!0,xs:12,md:12,lg:6,sx:{m:1},children:[(0,a.jsx)(c.ZP,{children:(0,a.jsx)(o.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})}),(0,a.jsx)("div",{style:{display:"flex",justifyContent:"right",margin:"0px"},children:(0,a.jsx)(t.Z,{variant:"contained",children:"Submit"})})]})})})}},1650:function(e,r,n){"use strict";n.d(r,{y:function(){return u}});var t=n(6459),i=n(7947),o=n(4569),c=n.n(o),s=n(4758),a=(0,i.oM)({name:"agents",initialState:{},reducers:{}}),u=function(){return function(e,r){c().post(s.SX).then((function(e){200===e.status&&e.data.success})).catch((function(e){console.log(e)}))}};(0,t.Z)(a.actions),r.Z=a.reducer},7689:function(e,r,n){"use strict";n.d(r,{gQ:function(){return c}});var t=n(3767),i=n(9658),o=n(184),c=function(e){return(0,o.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,o.jsx)(t.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,o.jsx)(i.Z,{severity:"error",children:(0,o.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,o.jsx)("li",{children:e.msg})})})}):null]})};r.ZP=function(e){return(0,o.jsxs)(o.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,o.jsx)(t.Z,{sx:{width:"100%"},spacing:2,children:(0,o.jsx)(i.Z,{severity:"error",children:(0,o.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,r){return(0,o.jsx)("li",{children:e},r)}))})})}):null]})}},1030:function(e,r,n){"use strict";var t=n(885),i=n(2791),o=n(6022),c=n(184);r.Z=function(e){var r=i.useState(!1),n=(0,t.Z)(r,2),s=n[0],a=n[1];return i.useEffect((function(){a(!0)}),[]),(0,c.jsx)(c.Fragment,{children:void 0!==e.modules?(0,c.jsx)(o.DynamicModuleLoader,{modules:e.modules,children:!0===s?e.children:null}):(0,c.jsx)("div",{children:!0===s?e.children:null})})}},8333:function(e,r,n){"use strict";var t=n(5318);r.Z=void 0;var i=t(n(5649)),o=n(184),c=(0,i.default)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");r.Z=c},5649:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=n(4421)},3517:function(e,r,n){"use strict";n.d(r,{Z:function(){return B}});var t=n(2982),i=n(885),o=n(4942),c=n(7462),s=n(3366),a=n(2791),u=(n(7441),n(8182)),l=n(767),d=n(7630),f=n(1046),m=n(890),x=n(2065),h=n(9201),p=n(184),b=(0,h.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),g=n(3701),Z=(0,d.ZP)(g.Z)((function(e){var r=e.theme;return(0,c.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,c.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,c.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,x._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(r.palette.grey[600],.12)})})})),v=(0,d.ZP)(b)({width:24,height:16});var j=function(e){var r=e;return(0,p.jsx)("li",{children:(0,p.jsx)(Z,(0,c.Z)({focusRipple:!0},e,{ownerState:r,children:(0,p.jsx)(v,{ownerState:r})}))})},y=n(5159);function C(e){return(0,y.Z)("MuiBreadcrumbs",e)}var w=(0,n(208).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],M=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(w.li),r.li),r.root]}})({}),k=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),P=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,r,n,t){return e.reduce((function(i,o,c){return c<e.length-1?i=i.concat(o,(0,p.jsx)(P,{"aria-hidden":!0,className:r,ownerState:t,children:n},"separator-".concat(c))):i.push(o),i}),[])}var B=a.forwardRef((function(e,r){var n=(0,f.Z)({props:e,name:"MuiBreadcrumbs"}),o=n.children,d=n.className,m=n.component,x=void 0===m?"nav":m,h=n.expandText,b=void 0===h?"Show path":h,g=n.itemsAfterCollapse,Z=void 0===g?1:g,v=n.itemsBeforeCollapse,y=void 0===v?1:v,w=n.maxItems,P=void 0===w?8:w,B=n.separator,_=void 0===B?"/":B,z=(0,s.Z)(n,S),N=a.useState(!1),E=(0,i.Z)(N,2),I=E[0],A=E[1],F=(0,c.Z)({},n,{component:x,expanded:I,expandText:b,itemsAfterCollapse:Z,itemsBeforeCollapse:y,maxItems:P,separator:_}),D=function(e){var r=e.classes;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,r)}(F),T=a.useRef(null),W=a.Children.toArray(o).filter((function(e){return a.isValidElement(e)})).map((function(e,r){return(0,p.jsx)("li",{className:D.li,children:e},"child-".concat(r))}));return(0,p.jsx)(M,(0,c.Z)({ref:r,component:x,color:"text.secondary",className:(0,u.Z)(D.root,d),ownerState:F},z,{children:(0,p.jsx)(k,{className:D.ol,ref:T,ownerState:F,children:R(I||P&&W.length<=P?W:function(e){return y+Z>=e.length?e:[].concat((0,t.Z)(e.slice(0,y)),[(0,p.jsx)(j,{"aria-label":b,onClick:function(){A(!0);var e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-Z,e.length)))}(W),D.separator,_,F)})}))}))},4421:function(e,r,n){"use strict";n.r(r),n.d(r,{capitalize:function(){return t.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return o.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return a.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return l.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return v.Z},unstable_useEnhancedEffect:function(){return m.Z},unstable_useId:function(){return x.Z},unsupportedProp:function(){return h},useControlled:function(){return p.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return Z.Z}});var t=n(4036),i=n(8949).Z,o=n(9201),c=n(3199);var s=function(e,r){return function(){return null}},a=n(9103),u=n(8301),l=n(7602);n(7462);var d=function(e,r){return function(){return null}},f=n(2971).Z,m=n(162),x=n(7384);var h=function(e,r,n,t,i){return null},p=n(8744),b=n(9683),g=n(2071),Z=n(3031),v=n(7125)},7384:function(e,r,n){"use strict";var t=n(6248);r.Z=t.Z},6459:function(e,r,n){"use strict";function t(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(r,{Z:function(){return t}})}}]);
//# sourceMappingURL=88.06f64b8f.chunk.js.map