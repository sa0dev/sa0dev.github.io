(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[849],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},695:function(e,r,t){"use strict";var n=t(2982),o=(t(2791),t(1889)),a=t(3517),i=t(890),s=t(3767),u=t(8333),l=t(3060),c=t(184);function d(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function v(e){return(0,c.jsx)(l.Z,{underline:"hover",color:"inherit",href:e.href,onClick:d,children:e.text},e.id)}function f(e){return(0,c.jsx)(i.Z,{color:"text.primary",children:e.text},e.id)}function p(e){console.log(e.breadcrumbs.slice(0,-1)),console.log(e.breadcrumbs[e.breadcrumbs.length-1]);var r=[].concat((0,n.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,c.jsx)(v,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,c.jsx)(f,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,c.jsx)(s.Z,{spacing:2,children:(0,c.jsx)(a.Z,{separator:(0,c.jsx)(u.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:r})})}r.Z=function(e){return(0,c.jsxs)("div",{children:[(0,c.jsx)(o.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,c.jsx)(p,{breadcrumbs:e.breadcrumbs})}),(0,c.jsx)(o.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},2849:function(e,r,t){"use strict";t.r(r);t(2791);var n=t(4663),o=t(703),a=t(7621),i=t(1889),s=t(890),u=t(9504),l=t(695),c=t(184);r.default=function(){return(0,c.jsxs)(l.Z,{breadcrumbs:[{id:1,text:"Home",href:"/"},{id:1,text:"Dashboard"}],children:[(0,c.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,c.jsx)(i.ZP,{item:!0,xs:12,sm:4,children:(0,c.jsx)(a.Z,{variant:"outlined",children:(0,c.jsx)(u.Z,{children:"Total Leads"})})}),(0,c.jsx)(i.ZP,{item:!0,xs:12,sm:4,children:(0,c.jsx)(a.Z,{variant:"outlined",children:(0,c.jsx)(u.Z,{children:"Fresh Leads"})})}),(0,c.jsx)(i.ZP,{item:!0,xs:12,sm:4,children:(0,c.jsx)(a.Z,{variant:"outlined",children:(0,c.jsx)(u.Z,{children:"Active Leads"})})})]}),(0,c.jsx)(o.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,c.jsxs)(a.Z,{variant:"outlined",children:[(0,c.jsx)(n.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,c.jsx)(s.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div"})}),(0,c.jsx)(u.Z,{})]})})]})}},8333:function(e,r,t){"use strict";var n=t(5318);r.Z=void 0;var o=n(t(5649)),a=t(184),i=(0,o.default)((0,a.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");r.Z=i},5649:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=t(4421)},3517:function(e,r,t){"use strict";t.d(r,{Z:function(){return k}});var n=t(2982),o=t(885),a=t(4942),i=t(7462),s=t(3366),u=t(2791),l=(t(7441),t(8182)),c=t(767),d=t(7630),v=t(1046),f=t(890),p=t(2065),m=t(9201),Z=t(184),x=(0,m.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=t(533),b=(0,d.ZP)(h.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,p._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(r.palette.grey[600],.12)})})})),g=(0,d.ZP)(x)({width:24,height:16});var j=function(e){var r=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(b,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,Z.jsx)(g,{ownerState:r})}))})},w=t(5159);function C(e){return(0,w.Z)("MuiBreadcrumbs",e)}var M=(0,t(208).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),R=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,d.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,a.Z)({},"& .".concat(M.li),r.li),r.root]}})({}),P=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),y=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,r,t,n){return e.reduce((function(o,a,i){return i<e.length-1?o=o.concat(a,(0,Z.jsx)(y,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):o.push(a),o}),[])}var k=u.forwardRef((function(e,r){var t=(0,v.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,d=t.className,f=t.component,p=void 0===f?"nav":f,m=t.expandText,x=void 0===m?"Show path":m,h=t.itemsAfterCollapse,b=void 0===h?1:h,g=t.itemsBeforeCollapse,w=void 0===g?1:g,M=t.maxItems,y=void 0===M?8:M,k=t.separator,_=void 0===k?"/":k,q=(0,s.Z)(t,R),B=u.useState(!1),I=(0,o.Z)(B,2),T=I[0],F=I[1],L=(0,i.Z)({},t,{component:p,expanded:T,expandText:x,itemsAfterCollapse:b,itemsBeforeCollapse:w,maxItems:y,separator:_}),z=function(e){var r=e.classes;return(0,c.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,r)}(L),G=u.useRef(null),A=u.Children.toArray(a).filter((function(e){return u.isValidElement(e)})).map((function(e,r){return(0,Z.jsx)("li",{className:z.li,children:e},"child-".concat(r))}));return(0,Z.jsx)(S,(0,i.Z)({ref:r,component:p,color:"text.secondary",className:(0,l.Z)(z.root,d),ownerState:L},q,{children:(0,Z.jsx)(P,{className:z.ol,ref:G,ownerState:L,children:N(T||y&&A.length<=y?A:function(e){return w+b>=e.length?e:[].concat((0,n.Z)(e.slice(0,w)),[(0,Z.jsx)(j,{"aria-label":x,onClick:function(){F(!0);var e=G.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-b,e.length)))}(A),z.separator,_,L)})}))}))},7621:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var n=t(7462),o=t(3366),a=t(2791),i=t(8182),s=t(767),u=t(7630),l=t(1046),c=t(703),d=t(5159);function v(e){return(0,d.Z)("MuiCard",e)}(0,t(208).Z)("MuiCard",["root"]);var f=t(184),p=["className","raised"],m=(0,u.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=a.forwardRef((function(e,r){var t=(0,l.Z)({props:e,name:"MuiCard"}),a=t.className,u=t.raised,c=void 0!==u&&u,d=(0,o.Z)(t,p),Z=(0,n.Z)({},t,{raised:c}),x=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},v,r)}(Z);return(0,f.jsx)(m,(0,n.Z)({className:(0,i.Z)(x.root,a),elevation:c?8:void 0,ref:r,ownerState:Z},d))}))},9504:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(7462),o=t(3366),a=t(2791),i=t(8182),s=t(767),u=t(7630),l=t(1046),c=t(5159);function d(e){return(0,c.Z)("MuiCardContent",e)}(0,t(208).Z)("MuiCardContent",["root"]);var v=t(184),f=["className","component"],p=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=a.forwardRef((function(e,r){var t=(0,l.Z)({props:e,name:"MuiCardContent"}),a=t.className,u=t.component,c=void 0===u?"div":u,m=(0,o.Z)(t,f),Z=(0,n.Z)({},t,{component:c}),x=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},d,r)}(Z);return(0,v.jsx)(p,(0,n.Z)({as:c,className:(0,i.Z)(x.root,a),ownerState:Z,ref:r},m))}))},703:function(e,r,t){"use strict";t.d(r,{Z:function(){return x}});var n=t(3366),o=t(7462),a=t(2791),i=t(8182),s=t(767),u=t(2065),l=t(7630),c=t(1046),d=t(5159);function v(e){return(0,d.Z)("MuiPaper",e)}(0,t(208).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=t(184),p=["className","component","elevation","square","variant"],m=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},Z=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],!t.square&&r.rounded,"elevation"===t.variant&&r["elevation".concat(t.elevation)]]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({backgroundColor:r.palette.background.paper,color:r.palette.text.primary,transition:r.transitions.create("box-shadow")},!t.square&&{borderRadius:r.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat(r.palette.divider)},"elevation"===t.variant&&(0,o.Z)({boxShadow:r.shadows[t.elevation]},"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,u.Fq)("#fff",m(t.elevation)),", ").concat((0,u.Fq)("#fff",m(t.elevation)),")")}))})),x=a.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiPaper"}),a=t.className,u=t.component,l=void 0===u?"div":u,d=t.elevation,m=void 0===d?1:d,x=t.square,h=void 0!==x&&x,b=t.variant,g=void 0===b?"elevation":b,j=(0,n.Z)(t,p),w=(0,o.Z)({},t,{component:l,elevation:m,square:h,variant:g}),C=function(e){var r=e.square,t=e.elevation,n=e.variant,o=e.classes,a={root:["root",n,!r&&"rounded","elevation"===n&&"elevation".concat(t)]};return(0,s.Z)(a,v,o)}(w);return(0,f.jsx)(Z,(0,o.Z)({as:l,ownerState:w,className:(0,i.Z)(C.root,a),ref:r},j))}))},4663:function(e,r,t){"use strict";t.d(r,{Z:function(){return Z}});var n=t(4942),o=t(3366),a=t(7462),i=t(2791),s=t(8182),u=t(767),l=t(1046),c=t(7630),d=t(5159);function v(e){return(0,d.Z)("MuiToolbar",e)}(0,t(208).Z)("MuiToolbar",["root","gutters","regular","dense"]);var f=t(184),p=["className","component","disableGutters","variant"],m=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})((function(e){var r=e.theme,t=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&(0,n.Z)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}),"dense"===t.variant&&{minHeight:48})}),(function(e){var r=e.theme;return"regular"===e.ownerState.variant&&r.mixins.toolbar})),Z=i.forwardRef((function(e,r){var t=(0,l.Z)({props:e,name:"MuiToolbar"}),n=t.className,i=t.component,c=void 0===i?"div":i,d=t.disableGutters,Z=void 0!==d&&d,x=t.variant,h=void 0===x?"regular":x,b=(0,o.Z)(t,p),g=(0,a.Z)({},t,{component:c,disableGutters:Z,variant:h}),j=function(e){var r=e.classes,t={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,u.Z)(t,v,r)}(g);return(0,f.jsx)(m,(0,a.Z)({as:c,className:(0,s.Z)(j.root,n),ref:r,ownerState:g},b))}))},4421:function(e,r,t){"use strict";t.r(r),t.d(r,{capitalize:function(){return n.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return a.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return c.Z},requirePropFactory:function(){return d},setRef:function(){return v},unstable_ClassNameGenerator:function(){return g.Z},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return m},useControlled:function(){return Z.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return b.Z}});var n=t(4036),o=t(8949).Z,a=t(9201),i=t(3199);var s=function(e,r){return function(){return null}},u=t(9103),l=t(8301),c=t(7602);t(7462);var d=function(e,r){return function(){return null}},v=t(2971).Z,f=t(162),p=t(7384);var m=function(e,r,t,n,o){return null},Z=t(8744),x=t(9683),h=t(2071),b=t(3031),g=t(7125)},7384:function(e,r,t){"use strict";var n=t(6248);r.Z=n.Z}}]);
//# sourceMappingURL=849.38220bc2.chunk.js.map