"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[657],{695:function(e,n,t){var r=t(2982),a=(t(2791),t(1889)),i=t(3517),o=t(890),l=t(3767),d=t(8333),s=t(3060),c=t(184);function u(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function v(e){return(0,c.jsx)(s.Z,{underline:"hover",color:"inherit",href:e.href,onClick:u,children:e.text},e.id)}function x(e){return(0,c.jsx)(o.Z,{color:"text.primary",children:e.text},e.id)}function m(e){var n=[].concat((0,r.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,c.jsx)(v,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,c.jsx)(x,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,c.jsx)(l.Z,{spacing:2,children:(0,c.jsx)(i.Z,{separator:(0,c.jsx)(d.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:n})})}n.Z=function(e){return(0,c.jsxs)("div",{children:[(0,c.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,c.jsx)(m,{breadcrumbs:e.breadcrumbs})}),(0,c.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},2657:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});t(2791);var r=t(4663),a=t(703),i=t(7621),o=t(890),l=t(9504),d=t(695),s=t(1030),c=t(6459),u=(0,t(7947).oM)({name:"appointements",initialState:{},reducers:{}});(0,c.Z)(u.actions);var v=u.reducer,x=t(184);var m=function(e){var n=e.breadcrumbs?e.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Appointments"}];return(0,x.jsx)(s.Z,{modules:[{id:"appointments",reducerMap:{leads:v},sagas:[]}],children:(0,x.jsx)(d.Z,{breadcrumbs:n,children:(0,x.jsx)(a.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,x.jsxs)(i.Z,{variant:"outlined",children:[(0,x.jsx)(r.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,x.jsx)(o.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Appointments"})}),(0,x.jsx)(l.Z,{children:e.children})]})})})})}},1030:function(e,n,t){var r=t(885),a=t(2791),i=t(6022),o=t(184);n.Z=function(e){var n=a.useState(!1),t=(0,r.Z)(n,2),l=t[0],d=t[1];return a.useEffect((function(){d(!0)}),[]),(0,o.jsx)(o.Fragment,{children:void 0!==e.modules?(0,o.jsx)(i.DynamicModuleLoader,{modules:e.modules,children:!0===l?e.children:null}):(0,o.jsx)("div",{children:!0===l?e.children:null})})}},703:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(3366),a=t(7462),i=t(2791),o=t(8182),l=t(767),d=t(2065),s=t(7630),c=t(1046),u=t(5159);function v(e){return(0,u.Z)("MuiPaper",e)}(0,t(208).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var x=t(184),m=["className","component","elevation","square","variant"],p=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},b=(0,s.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!t.square&&n.rounded,"elevation"===t.variant&&n["elevation".concat(t.elevation)]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow")},!t.square&&{borderRadius:n.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat(n.palette.divider)},"elevation"===t.variant&&(0,a.Z)({boxShadow:n.shadows[t.elevation]},"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,d.Fq)("#fff",p(t.elevation)),", ").concat((0,d.Fq)("#fff",p(t.elevation)),")")}))})),f=i.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiPaper"}),i=t.className,d=t.component,s=void 0===d?"div":d,u=t.elevation,p=void 0===u?1:u,f=t.square,h=void 0!==f&&f,Z=t.variant,j=void 0===Z?"elevation":Z,g=(0,r.Z)(t,m),w=(0,a.Z)({},t,{component:s,elevation:p,square:h,variant:j}),k=function(e){var n=e.square,t=e.elevation,r=e.variant,a=e.classes,i={root:["root",r,!n&&"rounded","elevation"===r&&"elevation".concat(t)]};return(0,l.Z)(i,v,a)}(w);return(0,x.jsx)(b,(0,a.Z)({as:s,ownerState:w,className:(0,o.Z)(k.root,i),ref:n},g))}))}}]);
//# sourceMappingURL=657.9a9623a2.chunk.js.map