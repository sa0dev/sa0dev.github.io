"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[219],{8953:function(e,r,n){var t=n(1413),a=(n(2791),n(1979)),i=n(7630),s=n(7012),l=n(4708),o=n(4554),d=n(4395),u=n(4663),c=n(890),h=n(6445),p=n(3060),x=n(7621),g=n(9504),m=n(184),f=(0,a.Z)(),v=(0,i.ZP)(d.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var r=e.theme,n=e.open;return(0,t.Z)({background:"#1976d2",zIndex:r.zIndex.drawer+1,transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen})},n&&{width:"calc(100%)",transition:r.transitions.create(["width","margin"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.enteringScreen})})})),Z=function(e){return(0,m.jsxs)(c.Z,(0,t.Z)((0,t.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,m.jsx)(p.Z,{color:"inherit",target:"_blank",href:"",children:"Dashboard"})," ",(new Date).getFullYear(),"."]}))};r.Z=function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(s.Z,{theme:f,children:(0,m.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,m.jsx)(l.ZP,{}),(0,m.jsx)(v,{position:"absolute",children:(0,m.jsx)(u.Z,{children:(0,m.jsx)(c.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"WebSite"})})}),(0,m.jsxs)(o.Z,{component:"main",sx:{backgroundColor:"#edf4fc",flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,m.jsx)(u.Z,{}),(0,m.jsxs)(h.Z,{maxWidth:"lg",sx:{mt:2,mb:4},children:[(0,m.jsx)("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 30vh)"},children:(0,m.jsxs)(x.Z,{variant:"outlined",sx:{display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",width:"80%",maxWidth:"520px",minHeight:"240px"},children:[(0,m.jsx)(u.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,m.jsx)(c.Z,{sx:{flex:"1 1 100%",textAlign:"center",marginTop:"24px"},variant:"h5",id:"tableTitle",component:"div",children:e.heading?e.heading:null})}),(0,m.jsx)(g.Z,{children:e.children})]})}),(0,m.jsx)(Z,{sx:{pt:4}})]})]})]})})})}},2219:function(e,r,n){n.r(r);n(4942);var t=n(885),a=n(1413),i=n(5987),s=n(2791),l=n(367),o=n(364),d=n(6151),u=n(1889),c=n(7391),h=n(8029),p=n(4554),x=n(4925),g=n(3786),m=n(8096),f=n(9321),v=n(8953),Z=n(7689),y=n(1138),j=n(1747),w=n(184),b=["onChange"],C=s.forwardRef((function(e,r){var n=e.onChange,t=(0,i.Z)(e,b);return(0,w.jsx)(l.oc,(0,a.Z)((0,a.Z)({},t),{},{mask:"(#0) 000-000-0000",definitions:{"#":/[1-9]/},onAccept:function(r){return n({target:{name:e.name,value:r}})},overwrite:!0}))}));r.default=function(){var e=(0,o.useDispatch)(),r=(0,o.useSelector)((function(e){return e.auth})),n=s.useState(""),a=(0,t.Z)(n,2),i=(a[0],a[1],s.useState("")),l=(0,t.Z)(i,2),b=(l[0],l[1],s.useState({textmask:"(91) 000-000-0000"})),N=(0,t.Z)(b,2);return N[0],N[1],(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(v.Z,{heading:"Signup",children:(0,w.jsxs)(u.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:[(0,w.jsx)(Z.gQ,{error:r.email.length>0&&!r.isValidEmail,msg:"Please provide a valid email address.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,error:r.email.length>0&&!r.isValidEmail,maxRows:4,value:r.email,onChange:function(r){return(0,y.oH)(r.target.value)?e({type:j.zb}):e({type:j.Hl}),e({type:j.eh,payload:{email:r.target.value}}),r}})}),(0,w.jsx)(Z.gQ,{error:r.username.length>0&&!r.isValidUsername,msg:"Please provide a valid username.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"username",label:"Username",type:"text",fullWidth:!0,error:r.username.length>0&&!r.isValidUsername,maxRows:4,value:r.username,onChange:function(r){return(0,y.rV)(r.target.value)?e({type:j.D9}):e({type:j.E6}),e({type:j.Wt,payload:{username:r.target.value}}),r}})}),(0,w.jsx)(Z.gQ,{error:r.password.length>0&&!r.isValidPassword,msg:"Password must contain minimum 8 characters with 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.",children:(0,w.jsx)(c.Z,{id:"password",label:"Password",type:"password",fullWidth:!0,error:r.password.length>0&&!(0,y.uo)(r.password),maxRows:4,onChange:function(r){return(0,y.uo)(r.target.value)?e({type:j.al}):e({type:j.Bc}),e({type:j.cg,payload:{password:r.target.value}}),r}})}),(0,w.jsx)(Z.gQ,{error:r.confirm_password.length>0&&!r.isValidConfirmPassword,msg:"Password does not match.",children:(0,w.jsx)(c.Z,{id:"confirm_password",label:"Confirm Password",type:"password",fullWidth:!0,error:r.confirm_password.length>0&&!(0,y.uo)(r.confirm_password),maxRows:4,onChange:function(r){return(0,y.uo)(r.target.value)?e({type:j.j}):e({type:j.t1}),e({type:j.BS,payload:{confirm_password:r.target.value}}),r}})}),(0,w.jsx)(Z.gQ,{error:r.firstName.length>0&&!r.isValidFirstName,msg:"Please provide a valid username.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"first_name",label:"First Name",type:"text",fullWidth:!0,maxRows:4,value:r.firstName,onChange:function(r){return(0,y.f9)(r.target.value)?e({type:j.oo}):e({type:j.ph}),e({type:j.rC,payload:{firstName:r.target.value}}),r}})}),(0,w.jsx)(Z.gQ,{error:r.lastName.length>0&&!r.isValidLastName,msg:"Please provide a valid username.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"last_name",label:"Last Name",type:"text",fullWidth:!0,maxRows:4,value:r.lastName,onChange:function(r){return(0,y.E2)(r.target.value)?e({type:j.G2}):e({type:j.Qf}),e({type:j.ND,payload:{lastName:r.target.value}}),r}})}),(0,w.jsx)(Z.gQ,{error:r.gender.length>0&&!r.isValidGender,msg:"Please provide a valid username.",children:(0,w.jsx)(p.Z,{sx:{minWidth:120},children:(0,w.jsxs)(m.Z,{fullWidth:!0,children:[(0,w.jsx)(x.Z,{id:"gender-label",children:"Gender"}),(0,w.jsxs)(f.Z,{labelId:"gender-label",id:"gender",value:r.gender,label:"Gender",onChange:function(r){(0,y.yZ)(r.target.value)?e({type:j.E2}):e({type:j.s}),e({type:j.gh,payload:{gender:r.target.value}})},children:[(0,w.jsx)(g.Z,{value:"male",children:"Male"}),(0,w.jsx)(g.Z,{value:"female",children:"Female"})]})]})})}),(0,w.jsx)(Z.gQ,{error:r.contact.length>0&&!r.isValidContact,msg:"Please provide a valid contact.",children:(0,w.jsxs)(m.Z,{sx:{width:"100%"},variant:"outlined",children:[(0,w.jsx)(x.Z,{id:"contact-label",children:"Contact"}),(0,w.jsx)(h.Z,{id:"contact",label:"Contact",value:r.contact,onChange:function(r){return(0,y.ks)(r.target.value)?e({type:j.jP}):e({type:j.aj}),e({type:j.ow,payload:{contact:r.target.value}}),r},inputComponent:C})]})}),(0,w.jsx)(Z.gQ,{error:r.address.length>0&&!r.isValidAddress,msg:"Please provide a valid address.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"address",label:"Address",type:"text",fullWidth:!0,maxRows:4,value:r.address,onChange:function(r){return(0,y.YN)(r.target.value)?e({type:j.Dj}):e({type:j.iN}),e({type:j.QO,payload:{address:r.target.value}}),r}})}),(0,w.jsx)(Z.gQ,{error:r.userType.length>0&&!r.isValidUserType,msg:"Please provide a valid user type.",children:(0,w.jsx)(p.Z,{sx:{minWidth:120},children:(0,w.jsxs)(m.Z,{fullWidth:!0,children:[(0,w.jsx)(x.Z,{id:"user-type-label",children:"User Type"}),(0,w.jsxs)(f.Z,{labelId:"user-type-label",id:"user-type",value:r.userType,label:"User Type",onChange:function(r){return(0,y.Lh)(r.target.value)?e({type:j.wA}):e({type:j.TZ}),e({type:j.Rg,payload:{userType:r.target.value}}),r},children:[(0,w.jsx)(g.Z,{value:3,children:"Calling Agent"}),(0,w.jsx)(g.Z,{value:4,children:"Sub Agent"})]})]})})}),(0,w.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px"},children:(0,w.jsx)(d.Z,{variant:"contained",disabled:!(r.email.length>0&&r.username.length>0&&r.password.length>0&&(0,y.oH)(r.email)&&(0,y.uo)(r.password)&&r.firstName.length>0&&r.lastName.length>0&&r.address.length>0&&""!==r.gender&&""!==r.userType&&""!==r.contact),onClick:function(r){e((0,j.r2)())},children:"Submit"})})]})})})}},7689:function(e,r,n){n.d(r,{gQ:function(){return s}});var t=n(3767),a=n(9658),i=n(184),s=function(e){return(0,i.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,i.jsx)(t.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,i.jsx)(a.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,i.jsx)("li",{children:e.msg})})})}):null]})};r.ZP=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,i.jsx)(t.Z,{sx:{width:"100%"},spacing:2,children:(0,i.jsx)(a.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,r){return(0,i.jsx)("li",{children:e},r)}))})})}):null]})}},1138:function(e,r,n){n.d(r,{rV:function(){return t},oH:function(){return a},uo:function(){return i},f9:function(){return s},E2:function(){return l},yZ:function(){return o},ks:function(){return d},YN:function(){return u},Lh:function(){return c}});var t=function(e){return e.length>=3&&/^[a-zA-Z0-9-]+$/.test(e)},a=function(e){return e.length>=3&&/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},i=function(e){return e.length>=3&&/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e)},s=function(e){return e.length>=3},l=function(e){return e.length>=3},o=function(e){return""!==e},d=function(e){return 17===e.length},u=function(e){return e.length>=10},c=function(e){return""!==e}},7621:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(7462),a=n(3366),i=n(2791),s=n(8182),l=n(767),o=n(7630),d=n(1046),u=n(703),c=n(5159);function h(e){return(0,c.Z)("MuiCard",e)}(0,n(208).Z)("MuiCard",["root"]);var p=n(184),x=["className","raised"],g=(0,o.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),m=i.forwardRef((function(e,r){var n=(0,d.Z)({props:e,name:"MuiCard"}),i=n.className,o=n.raised,u=void 0!==o&&o,c=(0,a.Z)(n,x),m=(0,t.Z)({},n,{raised:u}),f=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},h,r)}(m);return(0,p.jsx)(g,(0,t.Z)({className:(0,s.Z)(f.root,i),elevation:u?8:void 0,ref:r,ownerState:m},c))}))},9504:function(e,r,n){n.d(r,{Z:function(){return g}});var t=n(7462),a=n(3366),i=n(2791),s=n(8182),l=n(767),o=n(7630),d=n(1046),u=n(5159);function c(e){return(0,u.Z)("MuiCardContent",e)}(0,n(208).Z)("MuiCardContent",["root"]);var h=n(184),p=["className","component"],x=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),g=i.forwardRef((function(e,r){var n=(0,d.Z)({props:e,name:"MuiCardContent"}),i=n.className,o=n.component,u=void 0===o?"div":o,g=(0,a.Z)(n,p),m=(0,t.Z)({},n,{component:u}),f=function(e){var r=e.classes;return(0,l.Z)({root:["root"]},c,r)}(m);return(0,h.jsx)(x,(0,t.Z)({as:u,className:(0,s.Z)(f.root,i),ownerState:m,ref:r},g))}))}}]);
//# sourceMappingURL=219.58a2a2ee.chunk.js.map