"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[374],{695:function(e,t,n){var r=n(2982),i=(n(2791),n(1889)),a=n(3517),d=n(890),o=n(3767),s=n(8333),c=n(3060),l=n(184);function u(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function x(e){return(0,l.jsx)(c.Z,{underline:"hover",color:"inherit",href:e.href,onClick:u,children:e.text},e.id)}function m(e){return(0,l.jsx)(d.Z,{color:"text.primary",children:e.text},e.id)}function h(e){var t=[].concat((0,r.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,l.jsx)(x,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,l.jsx)(m,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,l.jsx)(o.Z,{spacing:2,children:(0,l.jsx)(a.Z,{separator:(0,l.jsx)(s.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:t})})}t.Z=function(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,l.jsx)(h,{breadcrumbs:e.breadcrumbs})}),(0,l.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},6154:function(e,t,n){n(2791);var r=n(4663),i=n(703),a=n(7621),d=n(890),o=n(9504),s=n(184);t.Z=function(e){return(0,s.jsx)(i.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,s.jsxs)(a.Z,{variant:"outlined",children:[(0,s.jsx)(r.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,s.jsx)(d.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:e.heading})}),(0,s.jsx)(o.Z,{children:e.children})]})})}},910:function(e,t,n){n.r(t);n(2791);var r=n(695),i=n(1030),a=n(1650),d=n(184);t.default=function(e){var t=e.breadcrumbs?e.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents"}];return(0,d.jsx)(i.Z,{modules:[{id:"agents",reducerMap:{agents:a.ZP},sagas:[]}],children:(0,d.jsx)(r.Z,{breadcrumbs:t,children:e.children})})}},8374:function(e,t,n){n.r(t);n(2791);var r=n(3786),i=n(8096),a=n(9321),d=n(6151),o=n(1889),s=n(7391),c=n(4925),l=n(7689),u=n(910),x=n(6154),m=n(184);t.default=function(e){return(0,m.jsx)("div",{children:(0,m.jsx)(u.default,{breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents",href:"/dashboard/agents"},{id:3,text:"Add"}],children:(0,m.jsx)(x.Z,{heading:"Add Agents",children:(0,m.jsxs)(o.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(l.ZP,{children:(0,m.jsx)(s.Z,{sx:{mb:1},id:"first_name",label:"First Name",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(l.ZP,{children:(0,m.jsx)(s.Z,{sx:{mb:1},id:"last_name",label:"Last Name",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(l.ZP,{children:(0,m.jsx)(s.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(l.ZP,{children:(0,m.jsxs)(i.Z,{fullWidth:!0,children:[(0,m.jsx)(c.Z,{id:"agent-gender",children:"Gender"}),(0,m.jsxs)(a.Z,{labelId:"agent-gender",id:"gender",value:"m",label:"Gender",onChange:function(){},children:[(0,m.jsx)(r.Z,{value:"m",children:"Male"}),(0,m.jsx)(r.Z,{value:"f",children:"Female"})]})]})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(l.ZP,{children:(0,m.jsx)(s.Z,{sx:{mb:1},id:"primary_contact",label:"Primary Contact",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(l.ZP,{children:(0,m.jsx)(s.Z,{sx:{mb:1},id:"secondary_contact",label:"Secondary Contact",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,m.jsx)(l.ZP,{children:(0,m.jsx)(s.Z,{sx:{mb:1},id:"address",label:"Address",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,m.jsx)(o.ZP,{item:!0,xs:12,md:12,lg:6,sx:{m:1},children:(0,m.jsx)("div",{style:{display:"flex",justifyContent:"right",margin:"0px"},children:(0,m.jsx)(d.Z,{variant:"contained",children:"Submit"})})})]})})})})}},1650:function(e,t,n){n.d(t,{ym:function(){return l}});var r=n(2982),i=n(1413),a=n(7947),d=n(4569),o=n.n(d),s=n(4758),c=(0,a.oM)({name:"agents",initialState:{data:[]},reducers:{SET_DATA:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{data:(0,r.Z)(t.payload.data)})}}}),l=function(){return function(e,t){o().post(s.SX,{},{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(t){if(200===t.status){var n=t.data;!0===n.success&&(console.log(n.data.data),e({type:u,payload:{data:n.data.data}}))}})).catch((function(e){console.log(e)}))}},u=c.actions.SET_DATA;t.ZP=c.reducer},7689:function(e,t,n){n.d(t,{gQ:function(){return d}});var r=n(3767),i=n(9658),a=n(184),d=function(e){return(0,a.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,a.jsx)(r.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,a.jsx)(i.Z,{severity:"error",children:(0,a.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,a.jsx)("li",{children:e.msg})})})}):null]})};t.ZP=function(e){return(0,a.jsxs)(a.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,a.jsx)(r.Z,{sx:{width:"100%"},spacing:2,children:(0,a.jsx)(i.Z,{severity:"error",children:(0,a.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,t){return(0,a.jsx)("li",{children:e},t)}))})})}):null]})}},1030:function(e,t,n){var r=n(885),i=n(2791),a=n(6022),d=n(184);t.Z=function(e){var t=i.useState(!1),n=(0,r.Z)(t,2),o=n[0],s=n[1];return i.useEffect((function(){s(!0)}),[]),(0,d.jsx)(d.Fragment,{children:void 0!==e.modules?(0,d.jsx)(a.DynamicModuleLoader,{modules:e.modules,children:!0===o?e.children:null}):(0,d.jsx)("div",{children:!0===o?e.children:null})})}},133:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(5159);function i(e){return(0,r.Z)("MuiDivider",e)}var a=(0,n(208).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},6014:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(5159);function i(e){return(0,r.Z)("MuiListItemIcon",e)}var a=(0,n(208).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=a},9849:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(5159);function i(e){return(0,r.Z)("MuiListItemText",e)}var a=(0,n(208).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=a},3786:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(4942),i=n(3366),a=n(7462),d=n(2791),o=n(8182),s=n(767),c=n(2065),l=n(7630),u=n(1046),x=n(6199),m=n(3701),h=n(162),p=n(2071),f=n(133),Z=n(6014),b=n(9849),g=n(5159);function v(e){return(0,g.Z)("MuiMenuItem",e)}var j=(0,n(208).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=n(184),C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],P=(0,l.ZP)(m.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,a.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!i.disableGutters&&{paddingLeft:16,paddingRight:16},i.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(t,"&.".concat(j.selected),(0,r.Z)({backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(j.selected,":hover"),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,r.Z)(t,"&.".concat(j.focusVisible),{backgroundColor:n.palette.action.focus}),(0,r.Z)(t,"&.".concat(j.disabled),{opacity:n.palette.action.disabledOpacity}),(0,r.Z)(t,"& + .".concat(f.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,r.Z)(t,"& + .".concat(f.Z.inset),{marginLeft:52}),(0,r.Z)(t,"& .".concat(b.Z.root),{marginTop:0,marginBottom:0}),(0,r.Z)(t,"& .".concat(b.Z.inset),{paddingLeft:36}),(0,r.Z)(t,"& .".concat(Z.Z.root),{minWidth:36}),t),!i.dense&&(0,r.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),i.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,r.Z)({},"& .".concat(Z.Z.root," svg"),{fontSize:"1.25rem"})))})),w=d.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),r=n.autoFocus,c=void 0!==r&&r,l=n.component,m=void 0===l?"li":l,f=n.dense,Z=void 0!==f&&f,b=n.divider,g=void 0!==b&&b,j=n.disableGutters,w=void 0!==j&&j,M=n.focusVisibleClassName,S=n.role,I=void 0===S?"menuitem":S,k=n.tabIndex,A=(0,i.Z)(n,C),F=d.useContext(x.Z),R={dense:Z||F.dense||!1,disableGutters:w},D=d.useRef(null);(0,h.Z)((function(){c&&D.current&&D.current.focus()}),[c]);var L,T=(0,a.Z)({},n,{dense:R.dense,divider:g,disableGutters:w}),W=function(e){var t=e.disabled,n=e.dense,r=e.divider,i=e.disableGutters,d=e.selected,o=e.classes,c={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",d&&"selected"]},l=(0,s.Z)(c,v,o);return(0,a.Z)({},o,l)}(n),V=(0,p.Z)(D,t);return n.disabled||(L=void 0!==k?k:-1),(0,y.jsx)(x.Z.Provider,{value:R,children:(0,y.jsx)(P,(0,a.Z)({ref:V,role:I,tabIndex:L,component:m,focusVisibleClassName:(0,o.Z)(W.focusVisible,M)},A,{ownerState:T,classes:W}))})}))}}]);
//# sourceMappingURL=374.b073b2cb.chunk.js.map