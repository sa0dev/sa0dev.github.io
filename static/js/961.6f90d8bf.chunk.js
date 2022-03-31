"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[961],{695:function(n,e,t){var r=t(2982),a=(t(2791),t(1889)),i=t(3517),s=t(890),c=t(3767),d=t(8333),o=t(3060),u=t(184);function l(n){n.preventDefault(),console.info("You clicked a breadcrumb.")}function f(n){return(0,u.jsx)(o.Z,{underline:"hover",color:"inherit",href:n.href,onClick:l,children:n.text},n.id)}function E(n){return(0,u.jsx)(s.Z,{color:"text.primary",children:n.text},n.id)}function _(n){var e=[].concat((0,r.Z)(n.breadcrumbs.slice(0,-1).map((function(n){return(0,u.jsx)(f,{href:n.href,id:n.id,text:n.text},n.id)}))),[(0,u.jsx)(E,{id:n.breadcrumbs[n.breadcrumbs.length-1].id,text:n.breadcrumbs[n.breadcrumbs.length-1].text},n.breadcrumbs[n.breadcrumbs.length-1].id)]);return(0,u.jsx)(c.Z,{spacing:2,children:(0,u.jsx)(i.Z,{separator:(0,u.jsx)(d.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:e})})}e.Z=function(n){return(0,u.jsxs)("div",{children:[(0,u.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,u.jsx)(_,{breadcrumbs:n.breadcrumbs})}),(0,u.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:n.children})]})}},6330:function(n,e,t){t(2791);var r=t(6151),a=t(5289),i=t(7123),s=t(9157),c=t(1691),d=t(5661),o=t(184);e.Z=function(n){return(0,o.jsx)("div",{children:(0,o.jsxs)(a.Z,{open:n.open,onClose:n.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,o.jsx)(d.Z,{id:"alert-dialog-title",style:{paddingTop:"32px"},children:n.heading}),(0,o.jsx)(s.Z,{children:(0,o.jsx)(c.Z,{id:"alert-dialog-description",children:n.content})}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(r.Z,{onClick:n.handleClose,children:"Cancel"}),(0,o.jsx)(r.Z,{onClick:n.handleOk,autoFocus:!0,children:"Ok"})]})]})})}},6154:function(n,e,t){t(2791);var r=t(4663),a=t(703),i=t(7621),s=t(890),c=t(9504),d=t(184);e.Z=function(n){return(0,d.jsx)(a.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,d.jsxs)(i.Z,{variant:"outlined",children:[(0,d.jsx)(r.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,d.jsx)(s.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:n.heading})}),(0,d.jsx)(c.Z,{children:n.children})]})})}},910:function(n,e,t){t.r(e);t(2791);var r=t(695),a=t(1030),i=t(1650),s=t(184);e.default=function(n){var e=n.breadcrumbs?n.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents"}];return(0,s.jsx)(a.Z,{modules:[{id:"agents",reducerMap:{agents:i.ZP},sagas:[]}],children:(0,s.jsx)(r.Z,{breadcrumbs:e,children:n.children})})}},3961:function(n,e,t){t.r(e);var r=t(885),a=t(2791),i=t(364),s=t(9955),c=t(7247),d=t(1286),o=t(9836),u=t(3382),l=t(3994),f=t(9281),E=t(6890),_=t(5855),h=t(3033),p=t(4454),S=t(910),T=(t(7689),t(6154)),x=t(6330),Z=t(1650),m=t(184);function A(n){var e=(0,i.useDispatch)(),t=a.useState(0),S=(0,r.Z)(t,2),A=(S[0],S[1],a.useState(!1)),g=(0,r.Z)(A,2),N=g[0],j=g[1],b=a.useState(!1),D=(0,r.Z)(b,2),V=D[0],L=D[1];a.useEffect((function(){e((0,Z.ym)())}),[]);var C=function(){j(!0)},y=function(){j(!1)},I=function(){j(!1)},v=function(){L(!0)},O=function(){L(!1)},R=function(){L(!1)};return(0,m.jsx)(T.Z,{heading:"List Agents",children:(0,m.jsxs)(f.Z,{children:[(0,m.jsxs)(o.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,m.jsx)(E.Z,{children:(0,m.jsxs)(_.Z,{children:[(0,m.jsx)(l.Z,{padding:"checkbox",onClick:function(){},children:(0,m.jsx)(p.Z,{color:"primary",checked:!1})}),n.data.headCells?n.data.headCells.map((function(n,e){return(0,m.jsx)(l.Z,{align:0==e?"left":"right",children:n.label},e)})):null,(0,m.jsx)(l.Z,{padding:"checkbox",children:(0,m.jsx)("div",{style:{width:"100px",textAlign:"center"},children:"Actions"})})]})}),(0,m.jsx)(u.Z,{children:n.data.rows?n.data.rows.map((function(n,e){return(0,m.jsxs)(_.Z,{children:[(0,m.jsx)(l.Z,{padding:"checkbox",onClick:function(){},children:(0,m.jsx)(p.Z,{color:"primary",checked:!1})}),Object.keys(n).map((function(e,t){return(0,m.jsx)(l.Z,{align:0==t?"left":"right",children:n[e]},t)})),(0,m.jsx)(l.Z,{align:"right",children:(0,m.jsxs)("div",{style:{display:"flex",width:"100px",justifyContent:"center"},onClick:function(n){n.preventDefault()},children:[(0,m.jsx)("a",{href:"/",title:"Edit",children:(0,m.jsx)(d.Z,{color:"action",fontSize:"small",onClick:function(){L(!0)}})}),(0,m.jsx)(x.Z,{heading:"Update Lead",content:"asd",open:V,handleClickOpen:v,handleClose:O,handleOk:R}),(0,m.jsx)(s.Z,{size:"small",checked:!0,onChange:function(){},inputProps:{"aria-label":"controlled"}}),(0,m.jsx)(c.Z,{color:"action",style:{cursor:"pointer"},fontSize:"small",onClick:function(n){n.preventDefault(),C()}}),(0,m.jsx)(x.Z,{heading:"Are you sure, you want to delete this record?",content:"",open:N,handleClickOpen:C,handleClose:y,handleOk:I})]})})]},e)})):null})]}),(0,m.jsx)(h.Z,{rowsPerPageOptions:[10,25,50,100],component:"div",count:2,rowsPerPage:2,page:0,onPageChange:function(){},onRowsPerPageChange:function(){}})]})})}e.default=function(n){var e=(0,i.useSelector)((function(n){return n.agents})),t=a.useState([]),s=(0,r.Z)(t,2),c=s[0],d=s[1];return a.useEffect((function(){if(void 0!==e){for(var n=[],t=0;t<e.data.length;t++)n.push({email:e.data[t].email,name:e.data[t].firstName+" "+e.data[t].lastName,contactNumber:e.data[t].contactNumber,alternateNumber:e.data[t].alternateNumber,approvalStatus:e.data[t].approvalStatus});d(n)}}),[e]),(0,m.jsx)("div",{children:(0,m.jsx)(S.default,{breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents",href:"/dashboard/agents"},{id:3,text:"List"}],children:void 0!=e?(0,m.jsx)(A,{data:{headCells:[{id:"email",numeric:!1,disablePadding:!0,label:"Email"},{id:"name",numeric:!0,disablePadding:!1,label:"Name"},{id:"primary_contact",numeric:!0,disablePadding:!1,label:"Prim. Contact"},{id:"secondary_contact",numeric:!0,disablePadding:!1,label:"Sec. Contact"},{id:"status",numeric:!0,disablePadding:!1,label:"Status"}],rows:c}}):null})})}},1650:function(n,e,t){t.d(e,{ym:function(){return u},Tj:function(){return l},CN:function(){return f},eh:function(){return h},Wt:function(){return p},zb:function(){return S},Hl:function(){return T},rC:function(){return x},ND:function(){return Z},gh:function(){return m},ow:function(){return A},QO:function(){return g},Rg:function(){return N},D9:function(){return j},E6:function(){return b},oo:function(){return D},ph:function(){return V},G2:function(){return L},Qf:function(){return C},E2:function(){return y},s:function(){return I},jP:function(){return v},aj:function(){return O},Dj:function(){return R},iN:function(){return k},wA:function(){return P},TZ:function(){return M},ee:function(){return U},rZ:function(){return w},wk:function(){return G}});var r=t(2982),a=t(1413),i=t(7947),s=t(4569),c=t.n(s),d=t(4758),o=(0,i.oM)({name:"agents",initialState:{data:[],agentSources:[],email:"",isValidEmail:!1,username:"",isValidUsername:!1,password:"",isValidPassword:!1,confirm_password:"",isValidConfirmPassword:!1,firstName:"",isValidFirstName:!1,lastName:"",isValidLastName:!1,agentSource:"",isValidAgentSource:!1,gender:"",isValidGender:!1,contact:"",isValidContact:!1,address:"",isValidAddress:!1,userType:"",isValidUserType:!1},reducers:{SET_DATA:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{data:(0,r.Z)(e.payload.data)})},SET_AGENT_SOURCES:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{agentSources:e.payload.agentSources})},SET_AGENT_SOURCE:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{agentSource:e.payload.agentSource})},SET_AGENT_SOURCE_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidAgentSource:!0})},SET_AGENT_SOURCE_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidAgentSource:!1})},SET_EMAIL:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{email:e.payload.email})},SET_USERNAME:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{username:e.payload.username})},SET_USERNAME_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidUsername:!0})},SET_USERNAME_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidUsername:!1})},SET_FIRST_NAME:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{firstName:e.payload.firstName})},SET_FIRST_NAME_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidFirstName:!0})},SET_FIRST_NAME_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidFirstName:!1})},SET_LAST_NAME:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{lastName:e.payload.lastName})},SET_LAST_NAME_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidLastName:!0})},SET_LAST_NAME_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidLastName:!1})},SET_GENDER:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{gender:e.payload.gender})},SET_GENDER_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidGender:!0})},SET_GENDER_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidGender:!1})},SET_CONTACT:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{contact:e.payload.contact})},SET_CONTACT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidContact:!0})},SET_CONTACT_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidContact:!1})},SET_ADDRESS:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{address:e.payload.address})},SET_ADDRESS_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidAddress:!0})},SET_ADDRESS_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidAddress:!1})},SET_USER_TYPE:function(n,e){return(0,a.Z)((0,a.Z)({},n),{},{userType:e.payload.userType})},SET_USER_TYPE_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidUserType:!0})},SET_USER_TYPE_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidUserType:!1})},SET_EMAIL_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidEmail:!0})},SET_EMAIL_NOT_VALID:function(n){return(0,a.Z)((0,a.Z)({},n),{},{isValidEmail:!1})}}}),u=function(){return function(n,e){c().post(d.SX,{},{headers:{Authorization:"Bearer "+e().auth.token}}).then((function(e){if(200===e.status){var t=e.data;!0===t.success&&n({type:_,payload:{data:t.data.data.data}})}})).catch((function(n){console.log(n)}))}},l=function(){return function(n,e){c().post(d.O6,{},{headers:{Authorization:"Bearer "+e().auth.token}}).then((function(e){if(200===e.status){var t=e.data;!0===t.success&&n({type:F,payload:{data:t.data}})}})).catch((function(n){console.log(n)}))}},f=function(){return function(n,e){var t=new FormData;t.append("email",e().agents.email),t.append("username",e().agents.username),t.append("firstName",e().agents.firstName),t.append("lastName",e().agents.lastName),t.append("gender",e().agents.gender),t.append("contact1",e().agents.contact.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),t.append("address",e().agents.address),t.append("userType",e().agents.userType),t.append("agentSource",e().agents.agentSource),c().post(d.JE,t,{headers:{Authorization:"Bearer "+e().auth.token}}).then((function(e){if(200===e.status){var t=e.data;!0===t.success&&n({type:_,payload:{data:t.data.data.data}})}})).catch((function(n){console.log(n)}))}},E=o.actions,_=E.SET_DATA,h=E.SET_EMAIL,p=E.SET_USERNAME,S=E.SET_EMAIL_VALID,T=E.SET_EMAIL_NOT_VALID,x=E.SET_FIRST_NAME,Z=E.SET_LAST_NAME,m=E.SET_GENDER,A=E.SET_CONTACT,g=E.SET_ADDRESS,N=E.SET_USER_TYPE,j=E.SET_USERNAME_VALID,b=E.SET_USERNAME_NOT_VALID,D=E.SET_FIRST_NAME_VALID,V=E.SET_FIRST_NAME_NOT_VALID,L=E.SET_LAST_NAME_VALID,C=E.SET_LAST_NAME_NOT_VALID,y=E.SET_GENDER_VALID,I=E.SET_GENDER_NOT_VALID,v=E.SET_CONTACT_VALID,O=E.SET_CONTACT_NOT_VALID,R=E.SET_ADDRESS_VALID,k=E.SET_ADDRESS_NOT_VALID,P=E.SET_USER_TYPE_VALID,M=E.SET_USER_TYPE_NOT_VALID,U=E.SET_AGENT_SOURCE,w=E.SET_AGENT_SOURCE_VALID,G=E.SET_AGENT_SOURCE_NOT_VALID,F=E.SET_AGENT_SOURCES;e.ZP=o.reducer},7689:function(n,e,t){t.d(e,{gQ:function(){return s}});var r=t(3767),a=t(9658),i=t(184),s=function(n){return(0,i.jsxs)("div",{style:{marginBottom:"10px"},children:[n.children,void 0!==n.error&&!0===n.error?(0,i.jsx)(r.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,i.jsx)(a.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,i.jsx)("li",{children:n.msg})})})}):null]})};e.ZP=function(n){return(0,i.jsxs)(i.Fragment,{children:[n.children,void 0!==n.errors&&n.errors.length>0?(0,i.jsx)(r.Z,{sx:{width:"100%"},spacing:2,children:(0,i.jsx)(a.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:n.errors.map((function(n,e){return(0,i.jsx)("li",{children:n},e)}))})})}):null]})}},1030:function(n,e,t){var r=t(885),a=t(2791),i=t(6022),s=t(184);e.Z=function(n){var e=a.useState(!1),t=(0,r.Z)(e,2),c=t[0],d=t[1];return a.useEffect((function(){d(!0)}),[]),(0,s.jsx)(s.Fragment,{children:void 0!==n.modules?(0,s.jsx)(i.DynamicModuleLoader,{modules:n.modules,children:!0===c?n.children:null}):(0,s.jsx)("div",{children:!0===c?n.children:null})})}}}]);
//# sourceMappingURL=961.6f90d8bf.chunk.js.map