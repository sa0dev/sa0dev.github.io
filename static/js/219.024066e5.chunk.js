"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[219],{8953:function(e,t,n){var r=n(1413),i=(n(2791),n(1979)),a=n(7630),o=n(7012),s=n(4708),l=n(4554),d=n(4395),c=n(4663),u=n(890),p=n(6445),m=n(3060),h=n(7621),x=n(9504),g=n(184),v=(0,i.Z)(),f=(0,a.ZP)(d.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return(0,r.Z)({background:"#1976d2",zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100%)",transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),Z=function(e){return(0,g.jsxs)(u.Z,(0,r.Z)((0,r.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,g.jsx)(m.Z,{color:"inherit",target:"_blank",href:"",children:"Dashboard"})," ",(new Date).getFullYear(),"."]}))};t.Z=function(e){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(o.Z,{theme:v,children:(0,g.jsxs)(l.Z,{sx:{display:"flex"},children:[(0,g.jsx)(s.ZP,{}),(0,g.jsx)(f,{position:"absolute",children:(0,g.jsx)(c.Z,{children:(0,g.jsx)(u.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"WebSite"})})}),(0,g.jsxs)(l.Z,{component:"main",sx:{backgroundColor:"#edf4fc",flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,g.jsx)(c.Z,{}),(0,g.jsxs)(p.Z,{maxWidth:"lg",sx:{mt:2,mb:4},children:[(0,g.jsx)("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 30vh)"},children:(0,g.jsxs)(h.Z,{variant:"outlined",sx:{display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",width:"80%",maxWidth:"520px",minHeight:"240px"},children:[(0,g.jsx)(c.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,g.jsx)(u.Z,{sx:{flex:"1 1 100%",textAlign:"center",marginTop:"24px"},variant:"h5",id:"tableTitle",component:"div",children:e.heading?e.heading:null})}),(0,g.jsx)(x.Z,{children:e.children})]})}),(0,g.jsx)(Z,{sx:{pt:4}})]})]})]})})})}},2219:function(e,t,n){n.r(t);var r=n(885),i=n(2791),a=n(364),o=n(6151),s=n(1889),l=n(7391),d=n(4554),c=n(4925),u=n(3786),p=n(8096),m=n(9321),h=n(8953),x=n(7689),g=n(1138),v=n(8333),f=n(184);t.default=function(){var e=(0,a.useDispatch)(),t=(0,a.useSelector)((function(e){return e.auth})),n=i.useState(""),Z=(0,r.Z)(n,2),b=(Z[0],Z[1],i.useState("")),y=(0,r.Z)(b,2);return y[0],y[1],(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(h.Z,{heading:"Signup",children:(0,f.jsxs)(s.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:[(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid email address.",children:(0,f.jsx)(l.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,error:t.email.length>0&&!t.isValidEmail,maxRows:4,value:t.email,onChange:function(t){return(0,g.oH)(t.target.value)?e({type:v.zb}):e({type:v.Hl}),e({type:v.eh,payload:{email:t.target.value}}),t}})}),(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid username.",children:(0,f.jsx)(l.Z,{sx:{mb:1},id:"username",label:"Username",type:"text",fullWidth:!0,maxRows:4,value:t.username,onChange:function(t){return e({type:v.Wt,payload:{username:t.target.value}}),t}})}),(0,f.jsx)(x.gQ,{error:t.password.length>0&&!(0,g.oH)(t.email),msg:"Password must contain minimum 8 characters with 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.",children:(0,f.jsx)(l.Z,{id:"password",label:"Password",type:"password",fullWidth:!0,error:t.password.length>0&&!(0,g.uo)(t.password),maxRows:4,onChange:function(t){return(0,g.uo)(t.target.value)?e({type:v.al}):e({type:v.Bc}),e({type:v.cg,payload:{password:t.target.value}}),t}})}),(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid username.",children:(0,f.jsx)(l.Z,{sx:{mb:1},id:"first_name",label:"First Name",type:"text",fullWidth:!0,maxRows:4,value:t.firstName,onChange:function(t){return e({type:v.rC,payload:{firstName:t.target.value}}),t}})}),(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid username.",children:(0,f.jsx)(l.Z,{sx:{mb:1},id:"last_name",label:"Last Name",type:"text",fullWidth:!0,maxRows:4,value:t.lastName,onChange:function(t){return e({type:v.ND,payload:{lastName:t.target.value}}),t}})}),(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid username.",children:(0,f.jsx)(d.Z,{sx:{minWidth:120},children:(0,f.jsxs)(p.Z,{fullWidth:!0,children:[(0,f.jsx)(c.Z,{id:"gender-label",children:"Gender"}),(0,f.jsxs)(m.Z,{labelId:"gender-label",id:"gender",value:t.gender,label:"Gender",onChange:function(t){e({type:v.gh,payload:{gender:t.target.value}})},children:[(0,f.jsx)(u.Z,{value:"male",children:"Male"}),(0,f.jsx)(u.Z,{value:"female",children:"Female"})]})]})})}),(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid username.",children:(0,f.jsx)(l.Z,{sx:{mb:1},id:"contact",label:"Contact",type:"text",fullWidth:!0,maxRows:4,value:t.contact,onChange:function(t){return e({type:v.ow,payload:{contact:t.target.value}}),t}})}),(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid username.",children:(0,f.jsx)(l.Z,{sx:{mb:1},id:"address",label:"Address",type:"text",fullWidth:!0,maxRows:4,value:t.address,onChange:function(t){return e({type:v.QO,payload:{address:t.target.value}}),t}})}),(0,f.jsx)(x.gQ,{error:t.email.length>0&&!t.isValidEmail,msg:"Please provide a valid username.",children:(0,f.jsx)(d.Z,{sx:{minWidth:120},children:(0,f.jsxs)(p.Z,{fullWidth:!0,children:[(0,f.jsx)(c.Z,{id:"user-type-label",children:"User Type"}),(0,f.jsxs)(m.Z,{labelId:"user-type-label",id:"user-type",value:t.userType,label:"User Type",onChange:function(t){return e({type:v.Rg,payload:{userType:t.target.value}}),t},children:[(0,f.jsx)(u.Z,{value:3,children:"Calling Agent"}),(0,f.jsx)(u.Z,{value:4,children:"Sub Agent"})]})]})})}),(0,f.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px"},children:(0,f.jsx)(o.Z,{variant:"contained",disabled:!(t.email.length>0&&t.password.length>0&&(0,g.oH)(t.email)&&(0,g.uo)(t.password)),onClick:function(t){e((0,v.r2)())},children:"Submit"})})]})})})}},7689:function(e,t,n){n.d(t,{gQ:function(){return o}});var r=n(3767),i=n(9658),a=n(184),o=function(e){return(0,a.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,a.jsx)(r.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,a.jsx)(i.Z,{severity:"error",children:(0,a.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,a.jsx)("li",{children:e.msg})})})}):null]})};t.ZP=function(e){return(0,a.jsxs)(a.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,a.jsx)(r.Z,{sx:{width:"100%"},spacing:2,children:(0,a.jsx)(i.Z,{severity:"error",children:(0,a.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,t){return(0,a.jsx)("li",{children:e},t)}))})})}):null]})}},1138:function(e,t,n){n.d(t,{oH:function(){return r},uo:function(){return i}});var r=function(e){return e.length>=3&&/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},i=function(e){return e.length>=3&&/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e)}},7621:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),i=n(3366),a=n(2791),o=n(8182),s=n(767),l=n(7630),d=n(1046),c=n(703),u=n(5159);function p(e){return(0,u.Z)("MuiCard",e)}(0,n(208).Z)("MuiCard",["root"]);var m=n(184),h=["className","raised"],x=(0,l.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),g=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCard"}),a=n.className,l=n.raised,c=void 0!==l&&l,u=(0,i.Z)(n,h),g=(0,r.Z)({},n,{raised:c}),v=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(g);return(0,m.jsx)(x,(0,r.Z)({className:(0,o.Z)(v.root,a),elevation:c?8:void 0,ref:t,ownerState:g},u))}))},9504:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7462),i=n(3366),a=n(2791),o=n(8182),s=n(767),l=n(7630),d=n(1046),c=n(5159);function u(e){return(0,c.Z)("MuiCardContent",e)}(0,n(208).Z)("MuiCardContent",["root"]);var p=n(184),m=["className","component"],h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiCardContent"}),a=n.className,l=n.component,c=void 0===l?"div":l,x=(0,i.Z)(n,m),g=(0,r.Z)({},n,{component:c}),v=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u,t)}(g);return(0,p.jsx)(h,(0,r.Z)({as:c,className:(0,o.Z)(v.root,a),ownerState:g,ref:t},x))}))},133:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(5159);function i(e){return(0,r.Z)("MuiDivider",e)}var a=(0,n(208).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=a},6014:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(5159);function i(e){return(0,r.Z)("MuiListItemIcon",e)}var a=(0,n(208).Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=a},9849:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(5159);function i(e){return(0,r.Z)("MuiListItemText",e)}var a=(0,n(208).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=a},3786:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(4942),i=n(3366),a=n(7462),o=n(2791),s=n(8182),l=n(767),d=n(2065),c=n(7630),u=n(1046),p=n(6199),m=n(3701),h=n(162),x=n(2071),g=n(133),v=n(6014),f=n(9849),Z=n(5159);function b(e){return(0,Z.Z)("MuiMenuItem",e)}var y=(0,n(208).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),j=n(184),w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],C=(0,c.ZP)(m.Z,{shouldForwardProp:function(e){return(0,c.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,i=e.ownerState;return(0,a.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!i.disableGutters&&{paddingLeft:16,paddingRight:16},i.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,r.Z)(t,"&.".concat(y.selected),(0,r.Z)({backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(y.focusVisible),{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(y.selected,":hover"),{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,r.Z)(t,"&.".concat(y.focusVisible),{backgroundColor:n.palette.action.focus}),(0,r.Z)(t,"&.".concat(y.disabled),{opacity:n.palette.action.disabledOpacity}),(0,r.Z)(t,"& + .".concat(g.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,r.Z)(t,"& + .".concat(g.Z.inset),{marginLeft:52}),(0,r.Z)(t,"& .".concat(f.Z.root),{marginTop:0,marginBottom:0}),(0,r.Z)(t,"& .".concat(f.Z.inset),{paddingLeft:36}),(0,r.Z)(t,"& .".concat(v.Z.root),{minWidth:36}),t),!i.dense&&(0,r.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),i.dense&&(0,a.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,r.Z)({},"& .".concat(v.Z.root," svg"),{fontSize:"1.25rem"})))})),M=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),r=n.autoFocus,d=void 0!==r&&r,c=n.component,m=void 0===c?"li":c,g=n.dense,v=void 0!==g&&g,f=n.divider,Z=void 0!==f&&f,y=n.disableGutters,M=void 0!==y&&y,I=n.focusVisibleClassName,S=n.role,P=void 0===S?"menuitem":S,R=n.tabIndex,W=(0,i.Z)(n,w),V=o.useContext(p.Z),k={dense:v||V.dense||!1,disableGutters:M},F=o.useRef(null);(0,h.Z)((function(){d&&F.current&&F.current.focus()}),[d]);var N,T=(0,a.Z)({},n,{dense:k.dense,divider:Z,disableGutters:M}),z=function(e){var t=e.disabled,n=e.dense,r=e.divider,i=e.disableGutters,o=e.selected,s=e.classes,d={root:["root",n&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",o&&"selected"]},c=(0,l.Z)(d,b,s);return(0,a.Z)({},s,c)}(n),G=(0,x.Z)(F,t);return n.disabled||(N=void 0!==R?R:-1),(0,j.jsx)(p.Z.Provider,{value:k,children:(0,j.jsx)(C,(0,a.Z)({ref:G,role:P,tabIndex:N,component:m,focusVisibleClassName:(0,s.Z)(z.focusVisible,I)},W,{ownerState:T,classes:z}))})}))}}]);
//# sourceMappingURL=219.024066e5.chunk.js.map