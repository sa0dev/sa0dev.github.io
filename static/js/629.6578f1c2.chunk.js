"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[629],{695:function(e,t,a){var n=a(2982),i=(a(2791),a(1889)),r=a(3517),s=a(890),l=a(3767),c=a(8333),d=a(3060),o=a(184);function u(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function Z(e){return(0,o.jsx)(d.Z,{underline:"hover",color:"inherit",href:e.href,onClick:u,children:e.text},e.id)}function h(e){return(0,o.jsx)(s.Z,{color:"text.primary",children:e.text},e.id)}function x(e){var t=[].concat((0,n.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,o.jsx)(Z,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,o.jsx)(h,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,o.jsx)(l.Z,{spacing:2,children:(0,o.jsx)(r.Z,{separator:(0,o.jsx)(c.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:t})})}t.Z=function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,o.jsx)(x,{breadcrumbs:e.breadcrumbs})}),(0,o.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},6330:function(e,t,a){a(2791);var n=a(6151),i=a(5289),r=a(7123),s=a(9157),l=a(1691),c=a(5661),d=a(184);t.Z=function(e){return(0,d.jsx)("div",{children:(0,d.jsxs)(i.Z,{open:e.open,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,d.jsx)(c.Z,{id:"alert-dialog-title",style:{paddingTop:"32px"},children:e.heading}),(0,d.jsx)(s.Z,{children:(0,d.jsx)(l.Z,{id:"alert-dialog-description",children:e.content})}),(0,d.jsxs)(r.Z,{children:[(0,d.jsx)(n.Z,{onClick:e.handleClose,children:"Cancel"}),(0,d.jsx)(n.Z,{onClick:e.handleOk,autoFocus:!0,children:"Ok"})]})]})})}},6154:function(e,t,a){a(2791);var n=a(4663),i=a(703),r=a(7621),s=a(890),l=a(9504),c=a(184);t.Z=function(e){return(0,c.jsx)(i.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,c.jsxs)(r.Z,{variant:"outlined",children:[(0,c.jsx)(n.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,c.jsx)(s.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:e.heading})}),(0,c.jsx)(l.Z,{children:e.children})]})})}},9206:function(e,t,a){a.r(t);a(2791);var n=a(695),i=a(1030),r=a(6512),s=a(184);t.default=function(e){var t=e.breadcrumbs?e.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Leads"}];return(0,s.jsx)(i.Z,{modules:[{id:"leads",reducerMap:{leads:r.ZP},sagas:[]}],children:(0,s.jsx)("div",{children:(0,s.jsx)(n.Z,{breadcrumbs:t,children:e.children})})})}},7629:function(e,t,a){a.r(t);var n=a(885),i=a(2791),r=a(364),s=a(4554),l=a(1889),c=a(7391),d=a(9124),o=a(3896),u=a(9955),Z=a(1286),h=a(7247),x=a(9206),m=a(7689),p=a(9836),f=a(3382),g=a(3994),S=a(9281),j=a(6890),b=a(5855),E=a(3033),T=a(4454),C=a(8029),y=a(4925),_=a(3786),A=a(8096),V=a(9900),v=a(9321),P=a(6154),D=a(6330),N=a(6512),w=a(184),k={PaperProps:{style:{maxHeight:224,width:250}}};function I(e){var t=i.useState([]),a=(0,n.Z)(t,2),r=a[0],s=a[1];return(0,w.jsx)("div",{children:(0,w.jsxs)(A.Z,{sx:{m:1,width:300},children:[(0,w.jsx)(y.Z,{id:"multiple-checkbox-label",children:e.heading}),(0,w.jsx)(v.Z,{labelId:"multiple-checkbox-label",id:"multiple-checkbox",multiple:!0,value:r,onChange:function(e){var t=e.target.value;s("string"===typeof t?t.split(","):t)},input:(0,w.jsx)(C.Z,{label:e.heading}),renderValue:function(e){return e.join(", ")},MenuProps:k,children:e.names.map((function(e){return(0,w.jsxs)(_.Z,{value:e,children:[(0,w.jsx)(T.Z,{checked:r.indexOf(e)>-1}),(0,w.jsx)(V.Z,{primary:e})]},e)}))})]})})}function L(e){var t=i.useState(0),a=(0,n.Z)(t,2),r=a[0],l=a[1],c=i.useState(!1),x=(0,n.Z)(c,2),m=x[0],C=x[1],y=i.useState(!1),_=(0,n.Z)(y,2),A=_[0],V=_[1],v=function(){C(!0)},N=function(){C(!1)},k=function(){C(!1)},L=function(){V(!0)},R=function(){V(!1)},M=function(){V(!1)};return(0,w.jsx)(P.Z,{heading:"List Leads",children:(0,w.jsxs)(S.Z,{children:[(0,w.jsx)(I,{heading:"Colleges",names:["wewqewqe","qwewqeqweq"]}),(0,w.jsx)(s.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,w.jsxs)(d.Z,{value:r,onChange:function(e,t){l(t)},"aria-label":"",children:[(0,w.jsx)(o.Z,{label:"Fresh"}),(0,w.jsx)(o.Z,{label:"Active"}),(0,w.jsx)(o.Z,{label:"Archived"})]})}),(0,w.jsxs)(p.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,w.jsx)(j.Z,{children:(0,w.jsxs)(b.Z,{children:[(0,w.jsx)(g.Z,{padding:"checkbox",onClick:function(){},children:(0,w.jsx)(T.Z,{color:"primary",checked:!1})}),e.data.headCells?e.data.headCells.map((function(e,t){return(0,w.jsx)(g.Z,{align:0==t?"left":"right",children:e.label},t)})):null,(0,w.jsx)(g.Z,{padding:"checkbox",children:(0,w.jsx)("div",{style:{width:"100px",textAlign:"center"},children:"Actions"})})]})}),(0,w.jsx)(f.Z,{children:e.data.rows?e.data.rows.map((function(e,t){return(0,w.jsxs)(b.Z,{children:[(0,w.jsx)(g.Z,{padding:"checkbox",onClick:function(){},children:(0,w.jsx)(T.Z,{color:"primary",checked:!1})}),Object.keys(e).map((function(t,a){return(0,w.jsx)(g.Z,{align:0==a?"left":"right",children:e[t]},a)})),(0,w.jsx)(g.Z,{align:"right",children:(0,w.jsxs)("div",{style:{display:"flex",width:"100px",justifyContent:"center"},onClick:function(e){e.preventDefault()},children:[(0,w.jsx)("a",{href:"/",title:"Edit",children:(0,w.jsx)(Z.Z,{color:"action",fontSize:"small",onClick:function(){V(!0)}})}),(0,w.jsx)(D.Z,{heading:"Update Lead",content:(0,w.jsx)(O,{}),open:A,handleClickOpen:L,handleClose:R,handleOk:M}),(0,w.jsx)(u.Z,{size:"small",checked:!0,onChange:function(){},inputProps:{"aria-label":"controlled"}}),(0,w.jsx)(h.Z,{color:"action",style:{cursor:"pointer"},fontSize:"small",onClick:function(e){e.preventDefault(),v()}}),(0,w.jsx)(D.Z,{heading:"Are you sure, you want to delete this record?",content:"",open:m,handleClickOpen:v,handleClose:N,handleOk:k})]})})]},t)})):null})]}),(0,w.jsx)(E.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:2,rowsPerPage:2,page:0,onPageChange:function(){},onRowsPerPageChange:function(){}})]})})}function O(e){return(0,w.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(m.ZP,{children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"first_name",label:"First Name",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(m.ZP,{children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"last_name",label:"Last Name",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(m.ZP,{children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(m.ZP,{children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"gender",label:"Gender",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(m.ZP,{children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"primary_contact",label:"Primary Contact",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(m.ZP,{children:(0,w.jsx)(c.Z,{sx:{mb:1},id:"secondary_contact",label:"Secondary Contact",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})}),(0,w.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,w.jsx)(m.ZP,{children:(0,w.jsx)(c.Z,{multiline:!0,sx:{mb:1},id:"address",label:"Address",type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return e}})})})]})}function R(e){var t=(0,r.useDispatch)(),a=(0,r.useSelector)((function(e){return e.leads})),s=i.useState([]),l=(0,n.Z)(s,2),c=l[0],d=l[1];i.useEffect((function(){t((0,N.rJ)())}),[]),i.useEffect((function(){if(void 0!==a){for(var e=[],t=0;t<a.data.length;t++)e.push({email:a.data[t].email,name:a.data[t].firstName+" "+a.data[t].lastName,contact1:a.data[t].contact1,stream:a.data[t].stream,city:a.data[t].city,course:a.data[t].course,status:a.data[t].status});d(e)}}),[a]);var o=i.useState(0),u=(0,n.Z)(o,2);u[0],u[1];return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(L,{data:{headCells:[{id:"email",numeric:!1,disablePadding:!0,label:"Email"},{id:"name",numeric:!0,disablePadding:!1,label:"Name"},{id:"primary_contact",numeric:!0,disablePadding:!1,label:"Mobile No."},{id:"stream",numeric:!0,disablePadding:!1,label:"Stream"},{id:"city",numeric:!0,disablePadding:!1,label:"City"},{id:"course",numeric:!0,disablePadding:!1,label:"Course"},{id:"status",numeric:!0,disablePadding:!1,label:"Status"}],rows:c}})})}t.default=function(e){return(0,w.jsx)("div",{children:(0,w.jsx)(x.default,{breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Leads",href:"/dashboard/leads"},{id:3,text:"List"}],children:(0,w.jsx)(R,{})})})}},6512:function(e,t,a){a.d(t,{Md:function(){return o},rJ:function(){return u},rC:function(){return x},gh:function(){return m},ag:function(){return p},Q3:function(){return f}});var n=a(2982),i=a(1413),r=a(7947),s=a(4569),l=a.n(s),c=a(4758),d=(0,r.oM)({name:"leads",initialState:{data:[],cities:[],states:[],email:"",isValidEmail:!1,secEmail:"",isValidSecEmail:!1,firstName:"",isValidFirstName:!1,lastName:"",isValidLastName:!1,gender:"",isValidGender:!1,category:"",isValidCategory:!1,stream:"",isValidStream:!1,contact1:"",isValidContact1:!1,contact2:"",isValidContact2:!1,address:"",isValidAddress:!1,stateSelected:"",isValidState:!1,citySelected:"",isValidCity:!1,pincode:"",isValidPincode:!1,birthDate:"",isValidBirthDate:!1,contactDate:"",isValidContactDate:!1,collegeSelected:"",isValidCollegeSelected:!1,courseSelected:"",isValidCourseSelected:!1},reducers:{SET_DATA:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{data:(0,n.Z)(t.payload.data)})},SET_CITIES:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{cities:t.payload.cities})},SET_STATES:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{states:t.payload.states})},SET_EMAIL:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{email:t.payload.email})},SET_SEC_EMAIL:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{secEmail:t.payload.email})},SET_FIRST_NAME:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{first_name:t.payload.first_name})},SET_LAST_NAME:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{last_name:t.payload.last_name})},SET_GENDER:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{gender:t.payload.gender})},SET_CATEGORY:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{category:t.payload.category})},SET_STREAM:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{stream:t.payload.stream})},SET_CONTACT1:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{contact1:t.payload.contact1})},SET_CONTACT2:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{contact2:t.payload.contact2})},SET_ADDRESS:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{address:t.payload.address})},SET_STATE:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{stateSelected:t.payload.stateSelected})},SET_CITY:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{citySelected:t.payload.citySelected})},SET_PINCODE:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{pincode:t.payload.pincode})},SET_BIRTH_DATE:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{birthDate:t.payload.birthDate})},SET_CONTACT_DATE:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{contactDate:t.payload.contactDate})},SET_COLLEGE:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{collegeSelected:t.payload.collegeSelected})},SET_COURSE:function(e,t){return(0,i.Z)((0,i.Z)({},e),{},{courseSelected:t.payload.courseSelected})},SET_INPUT_VALID:function(e,t){switch(t.payload.input){case"email":return(0,i.Z)((0,i.Z)({},e),{},{isValidEmail:!0});case"secEmail":return(0,i.Z)((0,i.Z)({},e),{},{isValidSecEmail:!0});case"firstName":return(0,i.Z)((0,i.Z)({},e),{},{isValidFirstName:!0});case"lastName":return(0,i.Z)((0,i.Z)({},e),{},{isValidLastName:!0});case"gender":return(0,i.Z)((0,i.Z)({},e),{},{isValidGender:!0});case"category":return(0,i.Z)((0,i.Z)({},e),{},{isValidCategory:!0});case"stream":return(0,i.Z)((0,i.Z)({},e),{},{isValidStream:!0});case"contact1":return(0,i.Z)((0,i.Z)({},e),{},{isValidContact1:!0});case"contact2":return(0,i.Z)((0,i.Z)({},e),{},{isValidContact2:!0});case"address":return(0,i.Z)((0,i.Z)({},e),{},{isValidAddress:!0});case"stateSelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidState:!0});case"citySelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidCity:!0});case"pincode":return(0,i.Z)((0,i.Z)({},e),{},{isValidPincode:!0});case"birthDate":return(0,i.Z)((0,i.Z)({},e),{},{isValidBirthDate:!0});case"contactDate":return(0,i.Z)((0,i.Z)({},e),{},{isValidContactDate:!0});case"collegeSelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidCollegeSelected:!0});case"courseSelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidCourseSelected:!0})}},SET_INPUT_NOT_VALID:function(e,t){switch(t.payload.input){case"email":return(0,i.Z)((0,i.Z)({},e),{},{isValidEmail:!1});case"secEmail":return(0,i.Z)((0,i.Z)({},e),{},{isValidSecEmail:!1});case"firstName":return(0,i.Z)((0,i.Z)({},e),{},{isValidFirstName:!1});case"lastName":return(0,i.Z)((0,i.Z)({},e),{},{isValidLastName:!1});case"gender":return(0,i.Z)((0,i.Z)({},e),{},{isValidGender:!1});case"category":return(0,i.Z)((0,i.Z)({},e),{},{isValidCategory:!1});case"stream":return(0,i.Z)((0,i.Z)({},e),{},{isValidStream:!1});case"contact1":return(0,i.Z)((0,i.Z)({},e),{},{isValidContact1:!1});case"contact2":return(0,i.Z)((0,i.Z)({},e),{},{isValidContact2:!1});case"address":return(0,i.Z)((0,i.Z)({},e),{},{isValidAddress:!1});case"stateSelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidState:!1});case"citySelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidCity:!1});case"pincode":return(0,i.Z)((0,i.Z)({},e),{},{isValidPincode:!1});case"birthDate":return(0,i.Z)((0,i.Z)({},e),{},{isValidBirthDate:!1});case"contactDate":return(0,i.Z)((0,i.Z)({},e),{},{isValidContactDate:!1});case"collegeSelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidCollegeSelected:!1});case"courseSelected":return(0,i.Z)((0,i.Z)({},e),{},{isValidCourseSelected:!1})}}}}),o=function(){return function(e,t){var a=new FormData;a.append("email",t().agents.email),a.append("secEmail",t().agents.secEmail),a.append("firstName",t().agents.firstName),a.append("lastName",t().agents.lastName),a.append("gender",t().agents.gender),a.append("category",t().category),a.append("stream",t().agents.stream),a.append("contact1",t().agents.contact1.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),a.append("contact2",t().agents.contact2.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),a.append("address",t().agents.address),a.append("stateSelected",t().agents.stateSelected),a.append("citySelected",t().agents.citySelected),a.append("pincode",t().agents.pincode),a.append("birthDate",t().agents.birthDate),a.append("contactDate",t().agents.contactDate),a.append("collegeSelected",t().agents.collegeSelected),a.append("courseSelected",t().agents.courseSelected),l().post(c.mu,a,{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(e){200===e.status&&e.data.success})).catch((function(e){console.log(e)}))}},u=function(){return function(e,t){l().post(c.M0,{},{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(t){if(200===t.status){var a=t.data;!0===a.success&&e({type:h,payload:{data:a.data.data.data}})}})).catch((function(e){console.log(e)}))}},Z=d.actions,h=Z.SET_DATA,x=(Z.SET_CITIES,Z.SET_STATES,Z.SET_FIRST_NAME),m=(Z.SET_LAST_NAME,Z.SET_EMAIL,Z.SET_SEC_EMAIL,Z.SET_GENDER),p=(Z.SET_CATEGORY,Z.SET_STREAM,Z.SET_CONTACT1,Z.SET_CONTACT2,Z.SET_ADDRESS,Z.SET_STATE,Z.SET_CITY,Z.SET_PINCODE,Z.SET_BIRTH_DATE,Z.SET_CONTACT_DATE,Z.SET_COLLEGE,Z.SET_COURSE,Z.SET_INPUT_VALID),f=Z.SET_INPUT_NOT_VALID;t.ZP=d.reducer},7689:function(e,t,a){a.d(t,{gQ:function(){return s}});var n=a(3767),i=a(9658),r=a(184),s=function(e){return(0,r.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,r.jsx)(n.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,r.jsx)(i.Z,{severity:"error",children:(0,r.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,r.jsx)("li",{children:e.msg})})})}):null]})};t.ZP=function(e){return(0,r.jsxs)(r.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,r.jsx)(n.Z,{sx:{width:"100%"},spacing:2,children:(0,r.jsx)(i.Z,{severity:"error",children:(0,r.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,t){return(0,r.jsx)("li",{children:e},t)}))})})}):null]})}},1030:function(e,t,a){var n=a(885),i=a(2791),r=a(6022),s=a(184);t.Z=function(e){var t=i.useState(!1),a=(0,n.Z)(t,2),l=a[0],c=a[1];return i.useEffect((function(){c(!0)}),[]),(0,s.jsx)(s.Fragment,{children:void 0!==e.modules?(0,s.jsx)(r.DynamicModuleLoader,{modules:e.modules,children:!0===l?e.children:null}):(0,s.jsx)("div",{children:!0===l?e.children:null})})}}}]);
//# sourceMappingURL=629.6578f1c2.chunk.js.map