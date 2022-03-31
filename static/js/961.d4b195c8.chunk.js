"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[961],{695:function(n,e,t){var r=t(2982),i=(t(2791),t(1889)),a=t(3517),s=t(890),d=t(3767),c=t(8333),l=t(3060),o=t(184);function u(n){n.preventDefault(),console.info("You clicked a breadcrumb.")}function f(n){return(0,o.jsx)(l.Z,{underline:"hover",color:"inherit",href:n.href,onClick:u,children:n.text},n.id)}function h(n){return(0,o.jsx)(s.Z,{color:"text.primary",children:n.text},n.id)}function p(n){var e=[].concat((0,r.Z)(n.breadcrumbs.slice(0,-1).map((function(n){return(0,o.jsx)(f,{href:n.href,id:n.id,text:n.text},n.id)}))),[(0,o.jsx)(h,{id:n.breadcrumbs[n.breadcrumbs.length-1].id,text:n.breadcrumbs[n.breadcrumbs.length-1].text},n.breadcrumbs[n.breadcrumbs.length-1].id)]);return(0,o.jsx)(d.Z,{spacing:2,children:(0,o.jsx)(a.Z,{separator:(0,o.jsx)(c.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:e})})}e.Z=function(n){return(0,o.jsxs)("div",{children:[(0,o.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,o.jsx)(p,{breadcrumbs:n.breadcrumbs})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:n.children})]})}},6330:function(n,e,t){t(2791);var r=t(6151),i=t(5289),a=t(7123),s=t(9157),d=t(1691),c=t(5661),l=t(184);e.Z=function(n){return(0,l.jsx)("div",{children:(0,l.jsxs)(i.Z,{open:n.open,onClose:n.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,l.jsx)(c.Z,{id:"alert-dialog-title",style:{paddingTop:"32px"},children:n.heading}),(0,l.jsx)(s.Z,{children:(0,l.jsx)(d.Z,{id:"alert-dialog-description",children:n.content})}),(0,l.jsxs)(a.Z,{children:[(0,l.jsx)(r.Z,{onClick:n.handleClose,children:"Cancel"}),(0,l.jsx)(r.Z,{onClick:n.handleOk,autoFocus:!0,children:"Ok"})]})]})})}},6154:function(n,e,t){t(2791);var r=t(4663),i=t(703),a=t(7621),s=t(890),d=t(9504),c=t(184);e.Z=function(n){return(0,c.jsx)(i.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,c.jsxs)(a.Z,{variant:"outlined",children:[(0,c.jsx)(r.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,c.jsx)(s.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:n.heading})}),(0,c.jsx)(d.Z,{children:n.children})]})})}},910:function(n,e,t){t.r(e);t(2791);var r=t(695),i=t(1030),a=t(1650),s=t(184);e.default=function(n){var e=n.breadcrumbs?n.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents"}];return(0,s.jsx)(i.Z,{modules:[{id:"agents",reducerMap:{agents:a.ZP},sagas:[]}],children:(0,s.jsx)(r.Z,{breadcrumbs:e,children:n.children})})}},3961:function(n,e,t){t.r(e);var r=t(885),i=t(2791),a=t(364),s=t(9955),d=t(7247),c=t(1286),l=t(9836),o=t(3382),u=t(3994),f=t(9281),h=t(6890),p=t(5855),x=t(3033),E=t(4454),_=t(910),m=(t(7689),t(6154)),Z=t(6330),T=t(1650),S=t(184);function A(n){var e=(0,a.useDispatch)(),t=i.useState(0),_=(0,r.Z)(t,2),A=(_[0],_[1],i.useState(!1)),g=(0,r.Z)(A,2),N=g[0],j=g[1],b=i.useState(!1),D=(0,r.Z)(b,2),V=D[0],L=D[1];i.useEffect((function(){e((0,T.ym)())}),[]);var y=function(){j(!0)},C=function(){j(!1)},I=function(){j(!1)},v=function(){L(!0)},R=function(){L(!1)},O=function(){L(!1)};return(0,S.jsx)(m.Z,{heading:"List Agents",children:(0,S.jsxs)(f.Z,{children:[(0,S.jsxs)(l.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,S.jsx)(h.Z,{children:(0,S.jsxs)(p.Z,{children:[(0,S.jsx)(u.Z,{padding:"checkbox",onClick:function(){},children:(0,S.jsx)(E.Z,{color:"primary",checked:!1})}),n.data.headCells?n.data.headCells.map((function(n,e){return(0,S.jsx)(u.Z,{align:0==e?"left":"right",children:n.label},e)})):null,(0,S.jsx)(u.Z,{padding:"checkbox",children:(0,S.jsx)("div",{style:{width:"100px",textAlign:"center"},children:"Actions"})})]})}),(0,S.jsx)(o.Z,{children:n.data.rows?n.data.rows.map((function(n,e){return(0,S.jsxs)(p.Z,{children:[(0,S.jsx)(u.Z,{padding:"checkbox",onClick:function(){},children:(0,S.jsx)(E.Z,{color:"primary",checked:!1})}),Object.keys(n).map((function(e,t){return(0,S.jsx)(u.Z,{align:0==t?"left":"right",children:n[e]},t)})),(0,S.jsx)(u.Z,{align:"right",children:(0,S.jsxs)("div",{style:{display:"flex",width:"100px",justifyContent:"center"},onClick:function(n){n.preventDefault()},children:[(0,S.jsx)("a",{href:"/",title:"Edit",children:(0,S.jsx)(c.Z,{color:"action",fontSize:"small",onClick:function(){L(!0)}})}),(0,S.jsx)(Z.Z,{heading:"Update Lead",content:"asd",open:V,handleClickOpen:v,handleClose:R,handleOk:O}),(0,S.jsx)(s.Z,{size:"small",checked:!0,onChange:function(){},inputProps:{"aria-label":"controlled"}}),(0,S.jsx)(d.Z,{color:"action",style:{cursor:"pointer"},fontSize:"small",onClick:function(n){n.preventDefault(),y()}}),(0,S.jsx)(Z.Z,{heading:"Are you sure, you want to delete this record?",content:"",open:N,handleClickOpen:y,handleClose:C,handleOk:I})]})})]},e)})):null})]}),(0,S.jsx)(x.Z,{rowsPerPageOptions:[10,25,50,100],component:"div",count:2,rowsPerPage:2,page:0,onPageChange:function(){},onRowsPerPageChange:function(){}})]})})}e.default=function(n){var e=(0,a.useSelector)((function(n){return n.agents})),t=i.useState([]),s=(0,r.Z)(t,2),d=s[0],c=s[1];return i.useEffect((function(){if(void 0!==e){for(var n=[],t=0;t<e.data.length;t++)n.push({email:e.data[t].email,name:e.data[t].firstName+" "+e.data[t].lastName,contactNumber:e.data[t].contactNumber,alternateNumber:e.data[t].alternateNumber,approvalStatus:e.data[t].approvalStatus});c(n)}}),[e]),(0,S.jsx)("div",{children:(0,S.jsx)(_.default,{breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents",href:"/dashboard/agents"},{id:3,text:"List"}],children:void 0!=e?(0,S.jsx)(A,{data:{headCells:[{id:"email",numeric:!1,disablePadding:!0,label:"Email"},{id:"name",numeric:!0,disablePadding:!1,label:"Name"},{id:"primary_contact",numeric:!0,disablePadding:!1,label:"Prim. Contact"},{id:"secondary_contact",numeric:!0,disablePadding:!1,label:"Sec. Contact"},{id:"status",numeric:!0,disablePadding:!1,label:"Status"}],rows:d}}):null})})}},1650:function(n,e,t){t.d(e,{ym:function(){return o},CN:function(){return u},eh:function(){return p},Wt:function(){return x},zb:function(){return E},Hl:function(){return _},rC:function(){return m},ND:function(){return Z},gh:function(){return T},ow:function(){return S},QO:function(){return A},Rg:function(){return g},D9:function(){return N},E6:function(){return j},oo:function(){return b},ph:function(){return D},G2:function(){return V},Qf:function(){return L},E2:function(){return y},s:function(){return C},jP:function(){return I},aj:function(){return v},Dj:function(){return R},iN:function(){return O},wA:function(){return k},TZ:function(){return P}});var r=t(2982),i=t(1413),a=t(7947),s=t(4569),d=t.n(s),c=t(4758),l=(0,a.oM)({name:"agents",initialState:{data:[],email:"",isValidEmail:!1,username:"",isValidUsername:!1,password:"",isValidPassword:!1,confirm_password:"",isValidConfirmPassword:!1,firstName:"",isValidFirstName:!1,lastName:"",isValidLastName:!1,gender:"",isValidGender:!1,contact:"",isValidContact:!1,address:"",isValidAddress:!1,userType:"",isValidUserType:!1},reducers:{SET_DATA:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{data:(0,r.Z)(e.payload.data)})},SET_EMAIL:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{email:e.payload.email})},SET_USERNAME:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{username:e.payload.username})},SET_USERNAME_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidUsername:!0})},SET_USERNAME_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidUsername:!1})},SET_FIRST_NAME:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{firstName:e.payload.firstName})},SET_FIRST_NAME_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidFirstName:!0})},SET_FIRST_NAME_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidFirstName:!1})},SET_LAST_NAME:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{lastName:e.payload.lastName})},SET_LAST_NAME_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidLastName:!0})},SET_LAST_NAME_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidLastName:!1})},SET_GENDER:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{gender:e.payload.gender})},SET_GENDER_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidGender:!0})},SET_GENDER_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidGender:!1})},SET_CONTACT:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{contact:e.payload.contact})},SET_CONTACT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidContact:!0})},SET_CONTACT_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidContact:!1})},SET_ADDRESS:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{address:e.payload.address})},SET_ADDRESS_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidAddress:!0})},SET_ADDRESS_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidAddress:!1})},SET_USER_TYPE:function(n,e){return(0,i.Z)((0,i.Z)({},n),{},{userType:e.payload.userType})},SET_USER_TYPE_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidUserType:!0})},SET_USER_TYPE_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidUserType:!1})},SET_EMAIL_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidEmail:!0})},SET_EMAIL_NOT_VALID:function(n){return(0,i.Z)((0,i.Z)({},n),{},{isValidEmail:!1})}}}),o=function(){return function(n,e){d().post(c.SX,{},{headers:{Authorization:"Bearer "+e().auth.token}}).then((function(e){if(200===e.status){var t=e.data;!0===t.success&&n({type:h,payload:{data:t.data.data.data}})}})).catch((function(n){console.log(n)}))}},u=function(){return function(n,e){var t=new FormData;t.append("email",e().agents.email),t.append("username",e().agents.username),t.append("firstName",e().agents.firstName),t.append("lastName",e().agents.lastName),t.append("gender",e().agents.gender),t.append("contact1",e().agents.contact.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),t.append("address",e().agents.address),t.append("userType",e().agents.userType),d().post(c.JE,t,{headers:{Authorization:"Bearer "+e().auth.token}}).then((function(e){if(200===e.status){var t=e.data;!0===t.success&&n({type:h,payload:{data:t.data.data.data}})}})).catch((function(n){console.log(n)}))}},f=l.actions,h=f.SET_DATA,p=f.SET_EMAIL,x=f.SET_USERNAME,E=f.SET_EMAIL_VALID,_=f.SET_EMAIL_NOT_VALID,m=f.SET_FIRST_NAME,Z=f.SET_LAST_NAME,T=f.SET_GENDER,S=f.SET_CONTACT,A=f.SET_ADDRESS,g=f.SET_USER_TYPE,N=f.SET_USERNAME_VALID,j=f.SET_USERNAME_NOT_VALID,b=f.SET_FIRST_NAME_VALID,D=f.SET_FIRST_NAME_NOT_VALID,V=f.SET_LAST_NAME_VALID,L=f.SET_LAST_NAME_NOT_VALID,y=f.SET_GENDER_VALID,C=f.SET_GENDER_NOT_VALID,I=f.SET_CONTACT_VALID,v=f.SET_CONTACT_NOT_VALID,R=f.SET_ADDRESS_VALID,O=f.SET_ADDRESS_NOT_VALID,k=f.SET_USER_TYPE_VALID,P=f.SET_USER_TYPE_NOT_VALID;e.ZP=l.reducer},7689:function(n,e,t){t.d(e,{gQ:function(){return s}});var r=t(3767),i=t(9658),a=t(184),s=function(n){return(0,a.jsxs)("div",{style:{marginBottom:"10px"},children:[n.children,void 0!==n.error&&!0===n.error?(0,a.jsx)(r.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,a.jsx)(i.Z,{severity:"error",children:(0,a.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,a.jsx)("li",{children:n.msg})})})}):null]})};e.ZP=function(n){return(0,a.jsxs)(a.Fragment,{children:[n.children,void 0!==n.errors&&n.errors.length>0?(0,a.jsx)(r.Z,{sx:{width:"100%"},spacing:2,children:(0,a.jsx)(i.Z,{severity:"error",children:(0,a.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:n.errors.map((function(n,e){return(0,a.jsx)("li",{children:n},e)}))})})}):null]})}},1030:function(n,e,t){var r=t(885),i=t(2791),a=t(6022),s=t(184);e.Z=function(n){var e=i.useState(!1),t=(0,r.Z)(e,2),d=t[0],c=t[1];return i.useEffect((function(){c(!0)}),[]),(0,s.jsx)(s.Fragment,{children:void 0!==n.modules?(0,s.jsx)(a.DynamicModuleLoader,{modules:n.modules,children:!0===d?n.children:null}):(0,s.jsx)("div",{children:!0===d?n.children:null})})}}}]);
//# sourceMappingURL=961.d4b195c8.chunk.js.map