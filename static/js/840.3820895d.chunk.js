"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[840],{695:function(e,t,a){var n=a(2982),r=(a(2791),a(1889)),i=a(3517),l=a(890),s=a(3767),c=a(8333),d=a(3060),o=a(184);function u(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function m(e){return(0,o.jsx)(d.Z,{underline:"hover",color:"inherit",href:e.href,onClick:u,children:e.text},e.id)}function x(e){return(0,o.jsx)(l.Z,{color:"text.primary",children:e.text},e.id)}function Z(e){var t=[].concat((0,n.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,o.jsx)(m,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,o.jsx)(x,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,o.jsx)(s.Z,{spacing:2,children:(0,o.jsx)(i.Z,{separator:(0,o.jsx)(c.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:t})})}t.Z=function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,o.jsx)(Z,{breadcrumbs:e.breadcrumbs})}),(0,o.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},6154:function(e,t,a){a(2791);var n=a(4663),r=a(703),i=a(7621),l=a(890),s=a(9504),c=a(184);t.Z=function(e){return(0,c.jsx)(r.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,c.jsxs)(i.Z,{variant:"outlined",children:[(0,c.jsx)(n.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,c.jsx)(l.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:e.heading})}),(0,c.jsx)(s.Z,{children:e.children})]})})}},9206:function(e,t,a){a.r(t);a(2791);var n=a(695),r=a(1030),i=a(6512),l=a(184);t.default=function(e){var t=e.breadcrumbs?e.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Leads"}];return(0,l.jsx)(r.Z,{modules:[{id:"leads",reducerMap:{leads:i.ZP},sagas:[]}],children:(0,l.jsx)("div",{children:(0,l.jsx)(n.Z,{breadcrumbs:t,children:e.children})})})}},2840:function(e,t,a){a.r(t);var n=a(885),r=a(2791),i=a(364),l=a(4554),s=(a(367),a(6151)),c=a(1889),d=a(7391),o=a(8096),u=a(7689),m=a(4925),x=a(9321),Z=a(3786),h=a(9206),f=a(6154),p=a(6512),g=a(1138),S=a(184);function y(e){var t=(0,i.useDispatch)(),a=e.state;return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(f.Z,{heading:"Add Lead",children:(0,S.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,value:a.email,error:!1,maxRows:4,onChange:function(e){return t({type:p.eh,payload:{email:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{sx:{mb:1},id:"semail",label:"Secondary Email",type:"text",value:a.secEmail,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.v1,payload:{secEmail:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsxs)(u.ZP,{children:[(0,S.jsx)(d.Z,{sx:{mb:1},id:"first_name",label:"First Name",type:"text",value:a.firstName,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.rC,payload:{first_name:e.target.value}}),e}}),a.first_name]})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{sx:{mb:1},id:"last_name",label:"Last Name",type:"text",value:a.lastName,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.ND,payload:{last_name:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.gQ,{error:a.gender.length>0&&!a.isValidGender,msg:"Please provide a valid username.",children:(0,S.jsx)(l.Z,{sx:{minWidth:120},children:(0,S.jsxs)(o.Z,{fullWidth:!0,children:[(0,S.jsx)(m.Z,{id:"gender-label",children:"Gender"}),(0,S.jsxs)(x.Z,{labelId:"gender-label",id:"gender",value:a.gender,label:"Gender",onChange:function(e){(0,g.yZ)(e.target.value)?t({type:p.ag,payload:{input:"gender"}}):t({type:p.Q3}),t({type:p.gh,payload:{gender:e.target.value}})},children:[(0,S.jsx)(Z.Z,{value:"male",children:"Male"}),(0,S.jsx)(Z.Z,{value:"female",children:"Female"})]})]})})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{sx:{mb:1},id:"contact1",label:"Primary Contact",type:"text",value:a.contact1,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.u9,payload:{contact1:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{sx:{mb:1},id:"contact2",label:"Secondary Contact",type:"text",value:a.contact2,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.eW,payload:{contact2:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"address",label:"Address",value:a.address,type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.QO,payload:{address:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"category",label:"Category",type:"text",value:a.category,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.$g,payload:{category:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"stream",label:"Stream",type:"text",value:a.stream,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.f4,payload:{stream:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"state",label:"State",value:a.stateSelected,type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.lI,payload:{stateSelected:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"city",label:"City",value:a.citySelected,type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.ng,payload:{citySelected:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"pincode",label:"Pincode",value:a.pincode,type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.HN,payload:{pincode:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"birthdate",label:"Bith Date",value:a.birthDate,type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.LZ,payload:{birthDate:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"contactdate",label:"Contact Date",type:"text",value:a.contactDate,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.No,payload:{contactDate:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"college",label:"College",type:"text",value:a.collegeSelected,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.TS,payload:{collegeSelected:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,S.jsx)(u.ZP,{children:(0,S.jsx)(d.Z,{multiline:!0,sx:{mb:1},id:"course",label:"Course",type:"text",value:a.courseSelected,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:p.bq,payload:{courseSelected:e.target.value}}),e}})})}),(0,S.jsx)(c.ZP,{item:!0,xs:12,md:12,lg:6,sx:{m:1},children:(0,S.jsx)("div",{style:{display:"flex",justifyContent:"right",margin:"0px"},children:(0,S.jsx)(s.Z,{variant:"contained",onClick:function(){t((0,p.Md)())},children:"Submit"})})})]})})})}t.default=function(e){var t=(0,i.useSelector)((function(e){return e.leads})),a=r.useState(!1),l=(0,n.Z)(a,2),s=l[0],c=l[1];return r.useEffect((function(){c(!0)}),[]),(0,S.jsx)(h.default,{breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Leads",href:"/dashboard/leads"},{id:3,text:"Add"}],children:!0===s?(0,S.jsx)(y,{state:t}):null})}},6512:function(e,t,a){a.d(t,{Md:function(){return o},rJ:function(){return u},rC:function(){return Z},ND:function(){return h},eh:function(){return f},v1:function(){return p},gh:function(){return g},$g:function(){return S},f4:function(){return y},u9:function(){return E},eW:function(){return j},QO:function(){return T},lI:function(){return b},ng:function(){return C},HN:function(){return v},LZ:function(){return _},No:function(){return A},TS:function(){return V},bq:function(){return N},ag:function(){return D},Q3:function(){return P}});var n=a(2982),r=a(1413),i=a(7947),l=a(4569),s=a.n(l),c=a(4758),d=(0,i.oM)({name:"leads",initialState:{data:[],cities:[],states:[],email:"",isValidEmail:!1,secEmail:"",isValidSecEmail:!1,firstName:"",isValidFirstName:!1,lastName:"",isValidLastName:!1,gender:"",isValidGender:!1,category:"",isValidCategory:!1,stream:"",isValidStream:!1,contact1:"",isValidContact1:!1,contact2:"",isValidContact2:!1,address:"",isValidAddress:!1,stateSelected:"",isValidState:!1,citySelected:"",isValidCity:!1,pincode:"",isValidPincode:!1,birthDate:"",isValidBirthDate:!1,contactDate:"",isValidContactDate:!1,collegeSelected:"",isValidCollegeSelected:!1,courseSelected:"",isValidCourseSelected:!1},reducers:{SET_DATA:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{data:(0,n.Z)(t.payload.data)})},SET_CITIES:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{cities:t.payload.cities})},SET_STATES:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{states:t.payload.states})},SET_EMAIL:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{email:t.payload.email})},SET_SEC_EMAIL:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{secEmail:t.payload.email})},SET_FIRST_NAME:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{first_name:t.payload.first_name})},SET_LAST_NAME:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{last_name:t.payload.last_name})},SET_GENDER:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{gender:t.payload.gender})},SET_CATEGORY:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{category:t.payload.category})},SET_STREAM:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{stream:t.payload.stream})},SET_CONTACT1:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{contact1:t.payload.contact1})},SET_CONTACT2:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{contact2:t.payload.contact2})},SET_ADDRESS:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{address:t.payload.address})},SET_STATE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{stateSelected:t.payload.stateSelected})},SET_CITY:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{citySelected:t.payload.citySelected})},SET_PINCODE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{pincode:t.payload.pincode})},SET_BIRTH_DATE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{birthDate:t.payload.birthDate})},SET_CONTACT_DATE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{contactDate:t.payload.contactDate})},SET_COLLEGE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{collegeSelected:t.payload.collegeSelected})},SET_COURSE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{courseSelected:t.payload.courseSelected})},SET_INPUT_VALID:function(e,t){switch(t.payload.input){case"email":return(0,r.Z)((0,r.Z)({},e),{},{isValidEmail:!0});case"secEmail":return(0,r.Z)((0,r.Z)({},e),{},{isValidSecEmail:!0});case"firstName":return(0,r.Z)((0,r.Z)({},e),{},{isValidFirstName:!0});case"lastName":return(0,r.Z)((0,r.Z)({},e),{},{isValidLastName:!0});case"gender":return(0,r.Z)((0,r.Z)({},e),{},{isValidGender:!0});case"category":return(0,r.Z)((0,r.Z)({},e),{},{isValidCategory:!0});case"stream":return(0,r.Z)((0,r.Z)({},e),{},{isValidStream:!0});case"contact1":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact1:!0});case"contact2":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact2:!0});case"address":return(0,r.Z)((0,r.Z)({},e),{},{isValidAddress:!0});case"stateSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidState:!0});case"citySelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCity:!0});case"pincode":return(0,r.Z)((0,r.Z)({},e),{},{isValidPincode:!0});case"birthDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidBirthDate:!0});case"contactDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidContactDate:!0});case"collegeSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCollegeSelected:!0});case"courseSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCourseSelected:!0})}},SET_INPUT_NOT_VALID:function(e,t){switch(t.payload.input){case"email":return(0,r.Z)((0,r.Z)({},e),{},{isValidEmail:!1});case"secEmail":return(0,r.Z)((0,r.Z)({},e),{},{isValidSecEmail:!1});case"firstName":return(0,r.Z)((0,r.Z)({},e),{},{isValidFirstName:!1});case"lastName":return(0,r.Z)((0,r.Z)({},e),{},{isValidLastName:!1});case"gender":return(0,r.Z)((0,r.Z)({},e),{},{isValidGender:!1});case"category":return(0,r.Z)((0,r.Z)({},e),{},{isValidCategory:!1});case"stream":return(0,r.Z)((0,r.Z)({},e),{},{isValidStream:!1});case"contact1":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact1:!1});case"contact2":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact2:!1});case"address":return(0,r.Z)((0,r.Z)({},e),{},{isValidAddress:!1});case"stateSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidState:!1});case"citySelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCity:!1});case"pincode":return(0,r.Z)((0,r.Z)({},e),{},{isValidPincode:!1});case"birthDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidBirthDate:!1});case"contactDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidContactDate:!1});case"collegeSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCollegeSelected:!1});case"courseSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCourseSelected:!1})}}}}),o=function(){return function(e,t){var a=new FormData;a.append("email",t().leads.email),a.append("secEmail",t().leads.secEmail),a.append("firstName",t().leads.firstName),a.append("lastName",t().leads.lastName),a.append("gender",t().leads.gender),a.append("category",t().leads.category),a.append("stream",t().leads.stream),a.append("contact1",t().leads.contact1.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),a.append("contact2",t().leads.contact2.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),a.append("address",t().leads.address),a.append("stateSelected",t().leads.stateSelected),a.append("citySelected",t().leads.citySelected),a.append("pincode",t().leads.pincode),a.append("birthDate",t().leads.birthDate),a.append("contactDate",t().leads.contactDate),a.append("collegeSelected",t().leads.collegeSelected),a.append("courseSelected",t().leads.courseSelected),s().post(c.mu,a,{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(e){200===e.status&&e.data.success})).catch((function(e){console.log(e)}))}},u=function(){return function(e,t){s().post(c.M0,{},{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(t){if(200===t.status){var a=t.data;!0===a.success&&e({type:x,payload:{data:a.data.data.data}})}})).catch((function(e){console.log(e)}))}},m=d.actions,x=m.SET_DATA,Z=(m.SET_CITIES,m.SET_STATES,m.SET_FIRST_NAME),h=m.SET_LAST_NAME,f=m.SET_EMAIL,p=m.SET_SEC_EMAIL,g=m.SET_GENDER,S=m.SET_CATEGORY,y=m.SET_STREAM,E=m.SET_CONTACT1,j=m.SET_CONTACT2,T=m.SET_ADDRESS,b=m.SET_STATE,C=m.SET_CITY,v=m.SET_PINCODE,_=m.SET_BIRTH_DATE,A=m.SET_CONTACT_DATE,V=m.SET_COLLEGE,N=m.SET_COURSE,D=m.SET_INPUT_VALID,P=m.SET_INPUT_NOT_VALID;t.ZP=d.reducer},7689:function(e,t,a){a.d(t,{gQ:function(){return l}});var n=a(3767),r=a(9658),i=a(184),l=function(e){return(0,i.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,i.jsx)(n.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,i.jsx)(r.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,i.jsx)("li",{children:e.msg})})})}):null]})};t.ZP=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,i.jsx)(n.Z,{sx:{width:"100%"},spacing:2,children:(0,i.jsx)(r.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,t){return(0,i.jsx)("li",{children:e},t)}))})})}):null]})}},1030:function(e,t,a){var n=a(885),r=a(2791),i=a(6022),l=a(184);t.Z=function(e){var t=r.useState(!1),a=(0,n.Z)(t,2),s=a[0],c=a[1];return r.useEffect((function(){c(!0)}),[]),(0,l.jsx)(l.Fragment,{children:void 0!==e.modules?(0,l.jsx)(i.DynamicModuleLoader,{modules:e.modules,children:!0===s?e.children:null}):(0,l.jsx)("div",{children:!0===s?e.children:null})})}},1138:function(e,t,a){a.d(t,{rV:function(){return n},oH:function(){return r},uo:function(){return i},f9:function(){return l},E2:function(){return s},yZ:function(){return c},ks:function(){return d},YN:function(){return o},Lh:function(){return u}});var n=function(e){return e.length>=3&&/^[a-zA-Z0-9-]+$/.test(e)},r=function(e){return e.length>=3&&/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},i=function(e){return e.length>=3&&/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e)},l=function(e){return e.length>=3},s=function(e){return e.length>=3},c=function(e){return""!==e},d=function(e){return 17===e.length},o=function(e){return e.length>=10},u=function(e){return""!==e}},4554:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),i=a(2791),l=a(8182),s=a(594),c=a(104),d=a(8519),o=a(418),u=a(184),m=["className","component"];var x=a(7125),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,a=e.defaultClassName,x=void 0===a?"MuiBox-root":a,Z=e.generateClassName,h=(0,s.ZP)("div")(c.Z),f=i.forwardRef((function(e,a){var i=(0,o.Z)(t),s=(0,d.Z)(e),c=s.className,f=s.component,p=void 0===f?"div":f,g=(0,r.Z)(s,m);return(0,u.jsx)(h,(0,n.Z)({as:p,ref:a,className:(0,l.Z)(c,Z?Z(x):x),theme:i},g))}));return f}({defaultTheme:(0,a(1979).Z)(),defaultClassName:"MuiBox-root",generateClassName:x.Z.generate}),h=Z}}]);
//# sourceMappingURL=840.3820895d.chunk.js.map