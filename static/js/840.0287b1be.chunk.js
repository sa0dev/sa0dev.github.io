"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[840],{695:function(e,t,a){var n=a(2982),r=(a(2791),a(1889)),i=a(3517),l=a(890),s=a(3767),c=a(8333),d=a(3060),o=a(184);function u(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function h(e){return(0,o.jsx)(d.Z,{underline:"hover",color:"inherit",href:e.href,onClick:u,children:e.text},e.id)}function Z(e){return(0,o.jsx)(l.Z,{color:"text.primary",children:e.text},e.id)}function p(e){var t=[].concat((0,n.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,o.jsx)(h,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,o.jsx)(Z,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,o.jsx)(s.Z,{spacing:2,children:(0,o.jsx)(i.Z,{separator:(0,o.jsx)(c.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:t})})}t.Z=function(e){return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,o.jsx)(p,{breadcrumbs:e.breadcrumbs})}),(0,o.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},6154:function(e,t,a){a(2791);var n=a(4663),r=a(703),i=a(7621),l=a(890),s=a(9504),c=a(184);t.Z=function(e){return(0,c.jsx)(r.Z,{sx:{p:2,mt:2,mb:2,display:"flex",flexDirection:"column",boxShadow:"rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px;",padding:"0px"},children:(0,c.jsxs)(i.Z,{variant:"outlined",children:[(0,c.jsx)(n.Z,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:(0,c.jsx)(l.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:e.heading})}),(0,c.jsx)(s.Z,{children:e.children})]})})}},9206:function(e,t,a){a.r(t);a(2791);var n=a(695),r=a(1030),i=a(6512),l=a(184);t.default=function(e){var t=e.breadcrumbs?e.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Leads"}];return(0,l.jsx)(r.Z,{modules:[{id:"leads",reducerMap:{leads:i.ZP},sagas:[]}],children:(0,l.jsx)("div",{children:(0,l.jsx)(n.Z,{breadcrumbs:t,children:e.children})})})}},2840:function(e,t,a){a.r(t);var n=a(885),r=a(1413),i=a(2791),l=a(364),s=a(4554),c=(a(367),a(6151)),d=a(1889),o=a(7391),u=a(8096),h=a(7689),Z=a(4925),p=a(9321),x=a(3786),f=a(9206),m=a(8264),g=a(3915),y=a(5716),S=a(6154),j=a(6512),E=a(1138),b=a(184);function T(e){var t=(0,l.useDispatch)(),a=e.state,f=i.useState(null),T=(0,n.Z)(f,2),v=T[0];T[1];return i.useEffect((function(){t({type:j.LZ,payload:{birthDate:v}}),t({type:j.No,payload:{contactDate:v}})}),[]),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(S.Z,{heading:"Add Lead",children:(0,b.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{sx:{mb:1},id:"email",label:"Email",type:"text",fullWidth:!0,value:a.email,error:!1,maxRows:4,onChange:function(e){return t({type:j.eh,payload:{email:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{sx:{mb:1},id:"semail",label:"Secondary Email",type:"text",value:a.secEmail,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.v1,payload:{email:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsxs)(h.ZP,{children:[(0,b.jsx)(o.Z,{sx:{mb:1},id:"first_name",label:"First Name",type:"text",value:a.firstName,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.rC,payload:{firstName:e.target.value}}),e}}),a.first_name]})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{sx:{mb:1},id:"last_name",label:"Last Name",type:"text",value:a.lastName,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.ND,payload:{lastName:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.gQ,{error:a.gender.length>0&&!a.isValidGender,msg:"Please provide a valid username.",children:(0,b.jsx)(s.Z,{sx:{minWidth:120},children:(0,b.jsxs)(u.Z,{fullWidth:!0,children:[(0,b.jsx)(Z.Z,{id:"gender-label",children:"Gender"}),(0,b.jsxs)(p.Z,{labelId:"gender-label",id:"gender",value:a.gender,label:"Gender",onChange:function(e){(0,E.yZ)(e.target.value)?t({type:j.ag,payload:{input:"gender"}}):t({type:j.Q3}),t({type:j.gh,payload:{gender:e.target.value}})},children:[(0,b.jsx)(x.Z,{value:"male",children:"Male"}),(0,b.jsx)(x.Z,{value:"female",children:"Female"})]})]})})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{sx:{mb:1},id:"contact1",label:"Primary Contact",type:"text",value:a.contact1,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.u9,payload:{contact1:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{sx:{mb:1},id:"contact2",label:"Secondary Contact",type:"text",value:a.contact2,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.eW,payload:{contact2:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{multiline:!0,sx:{mb:1},id:"address",label:"Address",value:a.address,type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.QO,payload:{address:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{multiline:!0,sx:{mb:1},id:"category",label:"Category",type:"text",value:a.category,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.$g,payload:{category:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{multiline:!0,sx:{mb:1},id:"stream",label:"Stream",type:"text",value:a.stream,fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.f4,payload:{stream:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.gQ,{error:a.stateSelected.length>0&&!a.isValidState,msg:"Please provide a valid state.",children:(0,b.jsx)(s.Z,{sx:{minWidth:120},children:(0,b.jsxs)(u.Z,{fullWidth:!0,children:[(0,b.jsx)(Z.Z,{id:"state-label",children:"State"}),(0,b.jsx)(p.Z,{labelId:"state-label",id:"state",value:a.stateSelected,label:"State",onChange:function(e){(0,E.yZ)(e.target.value)?(t({type:j.ag,payload:{input:"state"}}),t((0,j.Cf)(e.target.value))):t({type:j.Q3}),t({type:j.lI,payload:{stateSelected:e.target.value}})},children:a.states.map((function(e,t){return(0,b.jsx)(x.Z,{value:e.id,children:e.name})}))})]})})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.gQ,{error:a.citySelected.length>0&&!a.isValidCity,msg:"Please provide a valid city.",children:(0,b.jsx)(s.Z,{sx:{minWidth:120},children:(0,b.jsxs)(u.Z,{fullWidth:!0,children:[(0,b.jsx)(Z.Z,{id:"city-label",children:"City"}),(0,b.jsx)(p.Z,{labelId:"city-label",id:"city",value:a.citySelected,label:"City",onChange:function(e){(0,E.yZ)(e.target.value)?t({type:j.ag,payload:{input:"city"}}):t({type:j.Q3}),t({type:j.ng,payload:{citySelected:e.target.value}})},children:a.cities.map((function(e,t){return(0,b.jsx)(x.Z,{value:e.id,children:e.name})}))})]})})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(o.Z,{multiline:!0,sx:{mb:1},id:"pincode",label:"Pincode",value:a.pincode,type:"text",fullWidth:!0,error:!1,maxRows:4,onChange:function(e){return t({type:j.HN,payload:{pincode:e.target.value}}),e}})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{style:{width:"100%"},children:(0,b.jsx)(g.Z,{dateAdapter:m.Z,children:(0,b.jsx)(y.Z,{label:"Birth Date",maxDate:new Date("2008-01-01"),inputFormat:"yyyy-MM-dd",value:a.birthDate,onChange:function(e){t({type:j.LZ,payload:{birthDate:e}})},renderInput:function(e){return(0,b.jsx)(o.Z,(0,r.Z)((0,r.Z)({},e),{},{fullWidth:!0}))}})})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.ZP,{children:(0,b.jsx)(g.Z,{dateAdapter:m.Z,children:(0,b.jsx)(y.Z,{label:"Contact Date",minDate:new Date,inputFormat:"yyyy-MM-dd",value:a.contactDate,onChange:function(e){t({type:j.No,payload:{contactDate:e}})},renderInput:function(e){return(0,b.jsx)(o.Z,(0,r.Z)((0,r.Z)({},e),{},{fullWidth:!0}))}})})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.gQ,{error:a.collegeSelected.length>0&&!a.isValidCollegeSelected,msg:"Please provide a valid college.",children:(0,b.jsx)(s.Z,{sx:{minWidth:120},children:(0,b.jsxs)(u.Z,{fullWidth:!0,children:[(0,b.jsx)(Z.Z,{id:"college-label",children:"College"}),(0,b.jsx)(p.Z,{labelId:"college-label",id:"college",value:a.collegeSelected,label:"College",onChange:function(e){(0,E.yZ)(e.target.value)?(t({type:j.ag,payload:{input:"college"}}),t((0,j.Pb)(e.target.value))):t({type:j.Q3}),t({type:j.TS,payload:{collegeSelected:e.target.value}})},children:a.colleges.map((function(e,t){return(0,b.jsx)(x.Z,{value:e.id,children:e.collegeName})}))})]})})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(h.gQ,{error:a.courseSelected.length>0&&!a.isValidCourseSelected,msg:"Please provide a valid course.",children:(0,b.jsx)(s.Z,{sx:{minWidth:120},children:(0,b.jsxs)(u.Z,{fullWidth:!0,children:[(0,b.jsx)(Z.Z,{id:"course-label",children:"Course"}),(0,b.jsx)(p.Z,{labelId:"course-label",id:"course",value:a.courseSelected,label:"Course",onChange:function(e){(0,E.yZ)(e.target.value)?t({type:j.ag,payload:{input:"course"}}):t({type:j.Q3}),t({type:j.bq,payload:{courseSelected:e.target.value}})},children:a.courses.map((function(e,t){return(0,b.jsx)(x.Z,{value:e.id,children:e.source})}))})]})})})}),(0,b.jsx)(d.ZP,{item:!0,xs:12,md:12,lg:6,sx:{m:1},children:(0,b.jsx)("div",{style:{display:"flex",justifyContent:"right",margin:"0px"},children:(0,b.jsx)(c.Z,{variant:"contained",onClick:function(){t((0,j.Md)())},children:"Submit"})})})]})})})}t.default=function(e){var t=(0,l.useDispatch)(),a=(0,l.useSelector)((function(e){return e.leads})),r=i.useState(!1),s=(0,n.Z)(r,2),c=s[0],d=s[1];return i.useEffect((function(){d(!0),t((0,j.eq)()),t((0,j.Ut)())}),[]),(0,b.jsx)(f.default,{breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Leads",href:"/dashboard/leads"},{id:3,text:"Add"}],children:!0===c?(0,b.jsx)(T,{state:a}):null})}},6512:function(e,t,a){a.d(t,{eq:function(){return o},Cf:function(){return u},Ut:function(){return h},Pb:function(){return Z},Md:function(){return p},rJ:function(){return x},rC:function(){return S},ND:function(){return j},eh:function(){return E},v1:function(){return b},gh:function(){return T},$g:function(){return v},f4:function(){return C},u9:function(){return _},eW:function(){return A},QO:function(){return V},lI:function(){return D},ng:function(){return N},HN:function(){return P},LZ:function(){return I},No:function(){return L},TS:function(){return W},bq:function(){return w},ag:function(){return R},Q3:function(){return O}});var n=a(2982),r=a(1413),i=a(7947),l=a(4569),s=a.n(l),c=a(4758),d=(0,i.oM)({name:"leads",initialState:{data:[],cities:[],states:[],colleges:[],courses:[],listLeadtype:"fresh",email:"",isValidEmail:!1,secEmail:"",isValidSecEmail:!1,firstName:"",isValidFirstName:!1,lastName:"",isValidLastName:!1,gender:"",isValidGender:!1,category:"",isValidCategory:!1,stream:"",isValidStream:!1,contact1:"",isValidContact1:!1,contact2:"",isValidContact2:!1,address:"",isValidAddress:!1,stateSelected:"",isValidState:!1,citySelected:"",isValidCity:!1,pincode:"",isValidPincode:!1,birthDate:"",isValidBirthDate:!1,contactDate:"",isValidContactDate:!1,collegeSelected:"",isValidCollegeSelected:!1,courseSelected:"",isValidCourseSelected:!1},reducers:{SET_DATA:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{data:(0,n.Z)(t.payload.data)})},SET_CITIES:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{cities:t.payload.cities})},SET_STATES:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{states:t.payload.states})},SET_COLLEGES:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{colleges:t.payload.colleges})},SET_COURSES:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{courses:t.payload.courses})},SET_EMAIL:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{email:t.payload.email})},SET_SEC_EMAIL:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{secEmail:t.payload.email})},SET_FIRST_NAME:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{firstName:t.payload.firstName})},SET_LAST_NAME:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{lastName:t.payload.lastName})},SET_GENDER:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{gender:t.payload.gender})},SET_CATEGORY:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{category:t.payload.category})},SET_STREAM:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{stream:t.payload.stream})},SET_CONTACT1:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{contact1:t.payload.contact1})},SET_CONTACT2:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{contact2:t.payload.contact2})},SET_ADDRESS:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{address:t.payload.address})},SET_STATE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{stateSelected:t.payload.stateSelected})},SET_CITY:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{citySelected:t.payload.citySelected})},SET_PINCODE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{pincode:t.payload.pincode})},SET_BIRTH_DATE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{birthDate:t.payload.birthDate})},SET_CONTACT_DATE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{contactDate:t.payload.contactDate})},SET_COLLEGE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{collegeSelected:t.payload.collegeSelected})},SET_COURSE:function(e,t){return(0,r.Z)((0,r.Z)({},e),{},{courseSelected:t.payload.courseSelected})},SET_INPUT_VALID:function(e,t){switch(t.payload.input){case"email":return(0,r.Z)((0,r.Z)({},e),{},{isValidEmail:!0});case"secEmail":return(0,r.Z)((0,r.Z)({},e),{},{isValidSecEmail:!0});case"firstName":return(0,r.Z)((0,r.Z)({},e),{},{isValidFirstName:!0});case"lastName":return(0,r.Z)((0,r.Z)({},e),{},{isValidLastName:!0});case"gender":return(0,r.Z)((0,r.Z)({},e),{},{isValidGender:!0});case"category":return(0,r.Z)((0,r.Z)({},e),{},{isValidCategory:!0});case"stream":return(0,r.Z)((0,r.Z)({},e),{},{isValidStream:!0});case"contact1":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact1:!0});case"contact2":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact2:!0});case"address":return(0,r.Z)((0,r.Z)({},e),{},{isValidAddress:!0});case"stateSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidState:!0});case"citySelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCity:!0});case"pincode":return(0,r.Z)((0,r.Z)({},e),{},{isValidPincode:!0});case"birthDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidBirthDate:!0});case"contactDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidContactDate:!0});case"collegeSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCollegeSelected:!0});case"courseSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCourseSelected:!0})}},SET_INPUT_NOT_VALID:function(e,t){switch(t.payload.input){case"email":return(0,r.Z)((0,r.Z)({},e),{},{isValidEmail:!1});case"secEmail":return(0,r.Z)((0,r.Z)({},e),{},{isValidSecEmail:!1});case"firstName":return(0,r.Z)((0,r.Z)({},e),{},{isValidFirstName:!1});case"lastName":return(0,r.Z)((0,r.Z)({},e),{},{isValidLastName:!1});case"gender":return(0,r.Z)((0,r.Z)({},e),{},{isValidGender:!1});case"category":return(0,r.Z)((0,r.Z)({},e),{},{isValidCategory:!1});case"stream":return(0,r.Z)((0,r.Z)({},e),{},{isValidStream:!1});case"contact1":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact1:!1});case"contact2":return(0,r.Z)((0,r.Z)({},e),{},{isValidContact2:!1});case"address":return(0,r.Z)((0,r.Z)({},e),{},{isValidAddress:!1});case"stateSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidState:!1});case"citySelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCity:!1});case"pincode":return(0,r.Z)((0,r.Z)({},e),{},{isValidPincode:!1});case"birthDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidBirthDate:!1});case"contactDate":return(0,r.Z)((0,r.Z)({},e),{},{isValidContactDate:!1});case"collegeSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCollegeSelected:!1});case"courseSelected":return(0,r.Z)((0,r.Z)({},e),{},{isValidCourseSelected:!1})}}}}),o=function(){return function(e,t){s().get(c.u_,{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(t){if(200===t.status){var a=t.data;!0===a.success&&(console.log(a.data),e({type:y,payload:{states:a.data}}))}})).catch((function(e){console.log(e)}))}},u=function(e){return function(t,a){s().get(c.a1+"/"+e,{headers:{Authorization:"Bearer "+a().auth.token}}).then((function(e){if(200===e.status){var a=e.data;!0===a.success&&t({type:g,payload:{cities:a.data}})}})).catch((function(e){console.log(e)}))}},h=function(){return function(e,t){s().get(c.pW,{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(t){if(200===t.status){var a=t.data;!0===a.success&&e({type:M,payload:{colleges:a.data}})}})).catch((function(e){console.log(e)}))}},Z=function(e){return function(t,a){s().get(c.m3+"/"+e,{headers:{Authorization:"Bearer "+a().auth.token}}).then((function(e){if(200===e.status){var a=e.data;!0===a.success&&t({type:k,payload:{courses:a.data}})}})).catch((function(e){console.log(e)}))}},p=function(){return function(e,t){var a=new FormData;a.append("email",t().leads.email),a.append("secEmail",t().leads.secEmail),a.append("firstName",t().leads.firstName),a.append("lastName",t().leads.lastName),a.append("gender",t().leads.gender),a.append("category",t().leads.category),a.append("stream",t().leads.stream),a.append("contact1",t().leads.contact1.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),a.append("contact2",t().leads.contact2.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),a.append("address",t().leads.address),a.append("stateSelected",t().leads.stateSelected),a.append("citySelected",t().leads.citySelected),a.append("pincode",t().leads.pincode),a.append("birthDate",t().leads.birthDate),a.append("contactDate",t().leads.contactDate),a.append("collegeSelected",t().leads.collegeSelected),a.append("courseSelected",t().leads.courseSelected),s().post(c.mu,a,{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(e){200===e.status&&(!0===e.data.success&&(window.location.href="/dashboard/leads/list"))})).catch((function(e){console.log(e)}))}},x=function(){return function(e,t){s().post(c.M0,{leadtype:t().leads.listLeadtype},{headers:{Authorization:"Bearer "+t().auth.token}}).then((function(t){if(200===t.status){var a=t.data;!0===a.success&&e({type:m,payload:{data:a.data.data.data}})}})).catch((function(e){console.log(e)}))}},f=d.actions,m=f.SET_DATA,g=f.SET_CITIES,y=f.SET_STATES,S=f.SET_FIRST_NAME,j=f.SET_LAST_NAME,E=f.SET_EMAIL,b=f.SET_SEC_EMAIL,T=f.SET_GENDER,v=f.SET_CATEGORY,C=f.SET_STREAM,_=f.SET_CONTACT1,A=f.SET_CONTACT2,V=f.SET_ADDRESS,D=f.SET_STATE,N=f.SET_CITY,P=f.SET_PINCODE,I=f.SET_BIRTH_DATE,L=f.SET_CONTACT_DATE,W=f.SET_COLLEGE,w=f.SET_COURSE,R=f.SET_INPUT_VALID,O=f.SET_INPUT_NOT_VALID,M=f.SET_COLLEGES,k=f.SET_COURSES;t.ZP=d.reducer},7689:function(e,t,a){a.d(t,{gQ:function(){return l}});var n=a(3767),r=a(9658),i=a(184),l=function(e){return(0,i.jsxs)("div",{style:{marginBottom:"10px"},children:[e.children,void 0!==e.error&&!0===e.error?(0,i.jsx)(n.Z,{sx:{width:"100%",marginBottom:"10px"},spacing:2,children:(0,i.jsx)(r.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:(0,i.jsx)("li",{children:e.msg})})})}):null]})};t.ZP=function(e){return(0,i.jsxs)(i.Fragment,{children:[e.children,void 0!==e.errors&&e.errors.length>0?(0,i.jsx)(n.Z,{sx:{width:"100%"},spacing:2,children:(0,i.jsx)(r.Z,{severity:"error",children:(0,i.jsx)("ul",{style:{fontSize:"13px",fontWeight:500,margin:"5px 10px",padding:"0px 15px"},children:e.errors.map((function(e,t){return(0,i.jsx)("li",{children:e},t)}))})})}):null]})}},1030:function(e,t,a){var n=a(885),r=a(2791),i=a(6022),l=a(184);t.Z=function(e){var t=r.useState(!1),a=(0,n.Z)(t,2),s=a[0],c=a[1];return r.useEffect((function(){c(!0)}),[]),(0,l.jsx)(l.Fragment,{children:void 0!==e.modules?(0,l.jsx)(i.DynamicModuleLoader,{modules:e.modules,children:!0===s?e.children:null}):(0,l.jsx)("div",{children:!0===s?e.children:null})})}},1138:function(e,t,a){a.d(t,{rV:function(){return n},oH:function(){return r},uo:function(){return i},f9:function(){return l},E2:function(){return s},yZ:function(){return c},ks:function(){return d},YN:function(){return o},Lh:function(){return u}});var n=function(e){return e.length>=3&&/^[a-zA-Z0-9-]+$/.test(e)},r=function(e){return e.length>=3&&/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)},i=function(e){return e.length>=3&&/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(e)},l=function(e){return e.length>=3},s=function(e){return e.length>=3},c=function(e){return""!==e},d=function(e){return 17===e.length},o=function(e){return e.length>=10},u=function(e){return""!==e}}}]);
//# sourceMappingURL=840.0287b1be.chunk.js.map