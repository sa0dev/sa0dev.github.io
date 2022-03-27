"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[219],{8953:function(e,n,r){var t=r(1413),a=(r(2791),r(1979)),i=r(7630),s=r(7012),l=r(4708),o=r(4554),d=r(4395),u=r(4663),c=r(890),h=r(6445),p=r(3060),x=r(7621),g=r(9504),m=r(184),f=(0,a.Z)(),v=(0,i.ZP)(d.Z,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var n=e.theme,r=e.open;return(0,t.Z)({background:"#1976d2",zIndex:n.zIndex.drawer+1,transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen})},r&&{width:"calc(100%)",transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})})})),y=function(e){return(0,m.jsxs)(c.Z,(0,t.Z)((0,t.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,m.jsx)(p.Z,{color:"inherit",target:"_blank",href:"",children:"Dashboard"})," ",(new Date).getFullYear(),"."]}))};n.Z=function(e){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(s.Z,{theme:f,children:(0,m.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,m.jsx)(l.ZP,{}),(0,m.jsx)(v,{position:"absolute",children:(0,m.jsx)(u.Z,{children:(0,m.jsx)(c.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"WebSite"})})}),(0,m.jsxs)(o.Z,{component:"main",sx:{backgroundColor:"#edf4fc",flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,m.jsx)(u.Z,{}),(0,m.jsxs)(h.Z,{maxWidth:"lg",sx:{mt:2,mb:4},children:[(0,m.jsx)("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 30vh)"},children:(0,m.jsxs)(x.Z,{variant:"outlined",sx:{display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",width:"80%",maxWidth:"520px",minHeight:"240px"},children:[(0,m.jsx)(u.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,m.jsx)(c.Z,{sx:{flex:"1 1 100%",textAlign:"center",marginTop:"24px"},variant:"h5",id:"tableTitle",component:"div",children:e.heading?e.heading:null})}),(0,m.jsx)(g.Z,{children:e.children})]})}),(0,m.jsx)(y,{sx:{pt:4}})]})]})]})})})}},2219:function(e,n,r){r.r(n);r(4942);var t=r(885),a=r(1413),i=r(5987),s=r(2791),l=r(367),o=r(364),d=r(6151),u=r(1889),c=r(7391),h=r(8029),p=r(4554),x=r(4925),g=r(3786),m=r(8096),f=r(9321),v=r(8953),y=r(7689),j=r(1138),Z=r(8333),w=r(184),b=["onChange"],C=s.forwardRef((function(e,n){var r=e.onChange,t=(0,i.Z)(e,b);return(0,w.jsx)(l.oc,(0,a.Z)((0,a.Z)({},t),{},{mask:"(#0) 000-000-0000",definitions:{"#":/[1-9]/},onAccept:function(n){return r({target:{name:e.name,value:n}})},overwrite:!0}))}));n.default=function(){var e=(0,o.useDispatch)(),n=(0,o.useSelector)((function(e){return e.auth})),r=s.useState(""),a=(0,t.Z)(r,2),i=(a[0],a[1],s.useState("")),l=(0,t.Z)(i,2),b=(l[0],l[1],s.useState({textmask:"(91) 000-000-0000"})),P=(0,t.Z)(b,2);return P[0],P[1],(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(v.Z,{heading:"Signup",children:(0,w.jsxs)(u.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:[(0,w.jsx)(y.gQ,{error:n.email.length>0&&!n.isValidEmail,msg:"Please provide a valid email address.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,error:n.email.length>0&&!n.isValidEmail,maxRows:4,value:n.email,onChange:function(n){return(0,j.oH)(n.target.value)?e({type:Z.zb}):e({type:Z.Hl}),e({type:Z.eh,payload:{email:n.target.value}}),n}})}),(0,w.jsx)(y.gQ,{error:n.username.length>0&&!n.isValidUsername,msg:"Please provide a valid username.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"username",label:"Username",type:"text",fullWidth:!0,error:n.username.length>0&&!n.isValidUsername,maxRows:4,value:n.username,onChange:function(n){return(0,j.rV)(n.target.value)?e({type:Z.D9}):e({type:Z.E6}),e({type:Z.Wt,payload:{username:n.target.value}}),n}})}),(0,w.jsx)(y.gQ,{error:n.password.length>0&&!n.isValidPassword,msg:"Password must contain minimum 8 characters with 1 lowercase letter, 1 uppercase letter, 1 number and 1 special character.",children:(0,w.jsx)(c.Z,{id:"password",label:"Password",type:"password",fullWidth:!0,error:n.password.length>0&&!(0,j.uo)(n.password),maxRows:4,onChange:function(n){return(0,j.uo)(n.target.value)?e({type:Z.al}):e({type:Z.Bc}),e({type:Z.cg,payload:{password:n.target.value}}),n}})}),(0,w.jsx)(y.gQ,{error:n.confirm_password.length>0&&!n.isValidConfirmPassword,msg:"Password does not match.",children:(0,w.jsx)(c.Z,{id:"confirm_password",label:"Confirm Password",type:"password",fullWidth:!0,error:n.confirm_password.length>0&&!(0,j.uo)(n.confirm_password),maxRows:4,onChange:function(n){return(0,j.uo)(n.target.value)?e({type:Z.j}):e({type:Z.t1}),e({type:Z.BS,payload:{confirm_password:n.target.value}}),n}})}),(0,w.jsx)(y.gQ,{error:n.firstName.length>0&&!n.isValidFirstName,msg:"Please provide a valid username.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"first_name",label:"First Name",type:"text",fullWidth:!0,maxRows:4,value:n.firstName,onChange:function(n){return(0,j.f9)(n.target.value)?e({type:Z.oo}):e({type:Z.ph}),e({type:Z.rC,payload:{firstName:n.target.value}}),n}})}),(0,w.jsx)(y.gQ,{error:n.lastName.length>0&&!n.isValidLastName,msg:"Please provide a valid username.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"last_name",label:"Last Name",type:"text",fullWidth:!0,maxRows:4,value:n.lastName,onChange:function(n){return(0,j.E2)(n.target.value)?e({type:Z.G2}):e({type:Z.Qf}),e({type:Z.ND,payload:{lastName:n.target.value}}),n}})}),(0,w.jsx)(y.gQ,{error:n.gender.length>0&&!n.isValidGender,msg:"Please provide a valid username.",children:(0,w.jsx)(p.Z,{sx:{minWidth:120},children:(0,w.jsxs)(m.Z,{fullWidth:!0,children:[(0,w.jsx)(x.Z,{id:"gender-label",children:"Gender"}),(0,w.jsxs)(f.Z,{labelId:"gender-label",id:"gender",value:n.gender,label:"Gender",onChange:function(n){(0,j.yZ)(n.target.value)?e({type:Z.E2}):e({type:Z.s}),e({type:Z.gh,payload:{gender:n.target.value}})},children:[(0,w.jsx)(g.Z,{value:"male",children:"Male"}),(0,w.jsx)(g.Z,{value:"female",children:"Female"})]})]})})}),(0,w.jsx)(y.gQ,{error:n.contact.length>0&&!n.isValidContact,msg:"Please provide a valid contact.",children:(0,w.jsxs)(m.Z,{sx:{width:"100%"},variant:"outlined",children:[(0,w.jsx)(x.Z,{id:"contact-label",children:"Contact"}),(0,w.jsx)(h.Z,{id:"contact",label:"Contact",value:n.contact,onChange:function(n){return(0,j.ks)(n.target.value)?e({type:Z.jP}):e({type:Z.aj}),e({type:Z.ow,payload:{contact:n.target.value}}),n},inputComponent:C})]})}),(0,w.jsx)(y.gQ,{error:n.address.length>0&&!n.isValidAddress,msg:"Please provide a valid address.",children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"address",label:"Address",type:"text",fullWidth:!0,maxRows:4,value:n.address,onChange:function(n){return(0,j.YN)(n.target.value)?e({type:Z.Dj}):e({type:Z.iN}),e({type:Z.QO,payload:{address:n.target.value}}),n}})}),(0,w.jsx)(y.gQ,{error:n.userType.length>0&&!n.isValidUserType,msg:"Please provide a valid user type.",children:(0,w.jsx)(p.Z,{sx:{minWidth:120},children:(0,w.jsxs)(m.Z,{fullWidth:!0,children:[(0,w.jsx)(x.Z,{id:"user-type-label",children:"User Type"}),(0,w.jsxs)(f.Z,{labelId:"user-type-label",id:"user-type",value:n.userType,label:"User Type",onChange:function(n){return(0,j.Lh)(n.target.value)?e({type:Z.wA}):e({type:Z.TZ}),e({type:Z.Rg,payload:{userType:n.target.value}}),n},children:[(0,w.jsx)(g.Z,{value:3,children:"Calling Agent"}),(0,w.jsx)(g.Z,{value:4,children:"Sub Agent"})]})]})})}),(0,w.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px"},children:(0,w.jsx)(d.Z,{variant:"contained",disabled:!(n.email.length>0&&n.username.length>0&&n.password.length>0&&(0,j.oH)(n.email)&&(0,j.uo)(n.password)&&n.firstName.length>0&&n.lastName.length>0&&n.address.length>0&&""!==n.gender&&""!==n.userType&&""!==n.contact),onClick:function(n){e((0,Z.r2)())},children:"Submit"})})]})})})}},7689:function(e,n,r){r.d(n,{gQ:function(){return s}});var t=r(3767),a=r(9658),i=r(184),s=function(e){return(0,i.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,i.jsx)(t.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,i.jsx)(a.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,i.jsx)("li",{children:e.msg})})})}):null]})};n.ZP=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,i.jsx)(t.Z,{sx:{width:"100%"},spacing:2,children:(0,i.jsx)(a.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,n){return(0,i.jsx)("li",{children:e},n)}))})})}):null]})}},1138:function(e,n,r){r.d(n,{rV:function(){return t},oH:function(){return a},uo:function(){return i},f9:function(){return s},E2:function(){return l},yZ:function(){return o},ks:function(){return d},YN:function(){return u},Lh:function(){return c}});var t=function(e){return e.length>=3&&/^[a-zA-Z0-9-]+$/.test(e)},a=function(e){return e.length>=3&&/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},i=function(e){return e.length>=3&&/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e)},s=function(e){return e.length>=3},l=function(e){return e.length>=3},o=function(e){return""!==e},d=function(e){return 17===e.length},u=function(e){return e.length>=10},c=function(e){return""!==e}}}]);
//# sourceMappingURL=219.1df92bec.chunk.js.map