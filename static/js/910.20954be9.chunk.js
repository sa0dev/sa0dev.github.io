(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[910],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},695:function(e,n,r){"use strict";var t=r(2982),a=(r(2791),r(1889)),i=r(3517),u=r(890),o=r(3767),s=r(8333),c=r(3060),l=r(184);function d(e){e.preventDefault(),console.info("You clicked a breadcrumb.")}function f(e){return(0,l.jsx)(c.Z,{underline:"hover",color:"inherit",href:e.href,onClick:d,children:e.text},e.id)}function _(e){return(0,l.jsx)(u.Z,{color:"text.primary",children:e.text},e.id)}function p(e){var n=[].concat((0,t.Z)(e.breadcrumbs.slice(0,-1).map((function(e){return(0,l.jsx)(f,{href:e.href,id:e.id,text:e.text},e.id)}))),[(0,l.jsx)(_,{id:e.breadcrumbs[e.breadcrumbs.length-1].id,text:e.breadcrumbs[e.breadcrumbs.length-1].text},e.breadcrumbs[e.breadcrumbs.length-1].id)]);return(0,l.jsx)(o.Z,{spacing:2,children:(0,l.jsx)(i.Z,{separator:(0,l.jsx)(s.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:n})})}n.Z=function(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:(0,l.jsx)(p,{breadcrumbs:e.breadcrumbs})}),(0,l.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,sx:{m:1},children:e.children})]})}},910:function(e,n,r){"use strict";r.r(n);r(2791);var t=r(695),a=r(1030),i=r(1650),u=r(184);n.default=function(e){var n=e.breadcrumbs?e.breadcrumbs:[{id:1,text:"Dashboard",href:"/"},{id:2,text:"Agents"}];return(0,u.jsx)(a.Z,{modules:[{id:"agents",reducerMap:{agents:i.ZP},sagas:[]}],children:(0,u.jsx)(t.Z,{breadcrumbs:n,children:e.children})})}},1650:function(e,n,r){"use strict";r.d(n,{ym:function(){return l},CN:function(){return d},eh:function(){return p},Wt:function(){return E},zb:function(){return m},Hl:function(){return T},rC:function(){return Z},ND:function(){return S},gh:function(){return A},ow:function(){return h},QO:function(){return N},Rg:function(){return g},D9:function(){return b},E6:function(){return x},oo:function(){return D},ph:function(){return V},G2:function(){return v},Qf:function(){return I},E2:function(){return L},s:function(){return y},jP:function(){return R},aj:function(){return M},Dj:function(){return C},iN:function(){return j},wA:function(){return O},TZ:function(){return w}});var t=r(2982),a=r(1413),i=r(7947),u=r(4569),o=r.n(u),s=r(4758),c=(0,i.oM)({name:"agents",initialState:{data:[],email:"",isValidEmail:!1,username:"",isValidUsername:!1,password:"",isValidPassword:!1,confirm_password:"",isValidConfirmPassword:!1,firstName:"",isValidFirstName:!1,lastName:"",isValidLastName:!1,gender:"",isValidGender:!1,contact:"",isValidContact:!1,address:"",isValidAddress:!1,userType:"",isValidUserType:!1},reducers:{SET_DATA:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{data:(0,t.Z)(n.payload.data)})},SET_EMAIL:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{email:n.payload.email})},SET_USERNAME:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{username:n.payload.username})},SET_USERNAME_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidUsername:!0})},SET_USERNAME_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidUsername:!1})},SET_FIRST_NAME:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{firstName:n.payload.firstName})},SET_FIRST_NAME_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidFirstName:!0})},SET_FIRST_NAME_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidFirstName:!1})},SET_LAST_NAME:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{lastName:n.payload.lastName})},SET_LAST_NAME_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidLastName:!0})},SET_LAST_NAME_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidLastName:!1})},SET_GENDER:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{gender:n.payload.gender})},SET_GENDER_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidGender:!0})},SET_GENDER_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidGender:!1})},SET_CONTACT:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{contact:n.payload.contact})},SET_CONTACT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidContact:!0})},SET_CONTACT_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidContact:!1})},SET_ADDRESS:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{address:n.payload.address})},SET_ADDRESS_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidAddress:!0})},SET_ADDRESS_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidAddress:!1})},SET_USER_TYPE:function(e,n){return(0,a.Z)((0,a.Z)({},e),{},{userType:n.payload.userType})},SET_USER_TYPE_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidUserType:!0})},SET_USER_TYPE_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidUserType:!1})},SET_EMAIL_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidEmail:!0})},SET_EMAIL_NOT_VALID:function(e){return(0,a.Z)((0,a.Z)({},e),{},{isValidEmail:!1})}}}),l=function(){return function(e,n){o().post(s.SX,{},{headers:{Authorization:"Bearer "+n().auth.token}}).then((function(n){if(200===n.status){var r=n.data;!0===r.success&&e({type:_,payload:{data:r.data.data.data}})}})).catch((function(e){console.log(e)}))}},d=function(){return function(e,n){var r=new FormData;r.append("email",n().agents.email),r.append("username",n().agents.username),r.append("firstName",n().agents.firstName),r.append("lastName",n().agents.lastName),r.append("gender",n().agents.gender),r.append("contact1",n().agents.contact.replaceAll("(","").replaceAll(")","").replaceAll(" ","").replaceAll("-","")),r.append("address",n().agents.address),r.append("userType",n().agents.userType),o().post(s.JE,r,{headers:{Authorization:"Bearer "+n().auth.token}}).then((function(n){if(200===n.status){var r=n.data;!0===r.success&&e({type:_,payload:{data:r.data.data.data}})}})).catch((function(e){console.log(e)}))}},f=c.actions,_=f.SET_DATA,p=f.SET_EMAIL,E=f.SET_USERNAME,m=f.SET_EMAIL_VALID,T=f.SET_EMAIL_NOT_VALID,Z=f.SET_FIRST_NAME,S=f.SET_LAST_NAME,A=f.SET_GENDER,h=f.SET_CONTACT,N=f.SET_ADDRESS,g=f.SET_USER_TYPE,b=f.SET_USERNAME_VALID,x=f.SET_USERNAME_NOT_VALID,D=f.SET_FIRST_NAME_VALID,V=f.SET_FIRST_NAME_NOT_VALID,v=f.SET_LAST_NAME_VALID,I=f.SET_LAST_NAME_NOT_VALID,L=f.SET_GENDER_VALID,y=f.SET_GENDER_NOT_VALID,R=f.SET_CONTACT_VALID,M=f.SET_CONTACT_NOT_VALID,C=f.SET_ADDRESS_VALID,j=f.SET_ADDRESS_NOT_VALID,O=f.SET_USER_TYPE_VALID,w=f.SET_USER_TYPE_NOT_VALID;n.ZP=c.reducer},1030:function(e,n,r){"use strict";var t=r(885),a=r(2791),i=r(6022),u=r(184);n.Z=function(e){var n=a.useState(!1),r=(0,t.Z)(n,2),o=r[0],s=r[1];return a.useEffect((function(){s(!0)}),[]),(0,u.jsx)(u.Fragment,{children:void 0!==e.modules?(0,u.jsx)(i.DynamicModuleLoader,{modules:e.modules,children:!0===o?e.children:null}):(0,u.jsx)("div",{children:!0===o?e.children:null})})}},8333:function(e,n,r){"use strict";var t=r(5318);n.Z=void 0;var a=t(r(5649)),i=r(184),u=(0,a.default)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");n.Z=u},5649:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=r(4421)},3517:function(e,n,r){"use strict";r.d(n,{Z:function(){return L}});var t=r(2982),a=r(885),i=r(4942),u=r(7462),o=r(3366),s=r(2791),c=(r(7441),r(8182)),l=r(767),d=r(7630),f=r(1046),_=r(890),p=r(2065),E=r(9201),m=r(184),T=(0,E.Z)((0,m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=r(3701),S=(0,d.ZP)(Z.Z)((function(e){var n=e.theme;return(0,u.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,u.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,u.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,p._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,p._4)(n.palette.grey[600],.12)})})})),A=(0,d.ZP)(T)({width:24,height:16});var h=function(e){var n=e;return(0,m.jsx)("li",{children:(0,m.jsx)(S,(0,u.Z)({focusRipple:!0},e,{ownerState:n,children:(0,m.jsx)(A,{ownerState:n})}))})},N=r(5159);function g(e){return(0,N.Z)("MuiBreadcrumbs",e)}var b=(0,r(208).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),x=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],D=(0,d.ZP)(_.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,i.Z)({},"& .".concat(b.li),n.li),n.root]}})({}),V=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),v=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,n,r,t){return e.reduce((function(a,i,u){return u<e.length-1?a=a.concat(i,(0,m.jsx)(v,{"aria-hidden":!0,className:n,ownerState:t,children:r},"separator-".concat(u))):a.push(i),a}),[])}var L=s.forwardRef((function(e,n){var r=(0,f.Z)({props:e,name:"MuiBreadcrumbs"}),i=r.children,d=r.className,_=r.component,p=void 0===_?"nav":_,E=r.expandText,T=void 0===E?"Show path":E,Z=r.itemsAfterCollapse,S=void 0===Z?1:Z,A=r.itemsBeforeCollapse,N=void 0===A?1:A,b=r.maxItems,v=void 0===b?8:b,L=r.separator,y=void 0===L?"/":L,R=(0,o.Z)(r,x),M=s.useState(!1),C=(0,a.Z)(M,2),j=C[0],O=C[1],w=(0,u.Z)({},r,{component:p,expanded:j,expandText:T,itemsAfterCollapse:S,itemsBeforeCollapse:N,maxItems:v,separator:y}),P=function(e){var n=e.classes;return(0,l.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},g,n)}(w),U=s.useRef(null),k=s.Children.toArray(i).filter((function(e){return s.isValidElement(e)})).map((function(e,n){return(0,m.jsx)("li",{className:P.li,children:e},"child-".concat(n))}));return(0,m.jsx)(D,(0,u.Z)({ref:n,component:p,color:"text.secondary",className:(0,c.Z)(P.root,d),ownerState:w},R,{children:(0,m.jsx)(V,{className:P.ol,ref:U,ownerState:w,children:I(j||v&&k.length<=v?k:function(e){return N+S>=e.length?e:[].concat((0,t.Z)(e.slice(0,N)),[(0,m.jsx)(h,{"aria-label":T,onClick:function(){O(!0);var e=U.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,t.Z)(e.slice(e.length-S,e.length)))}(k),P.separator,y,w)})}))}))},4421:function(e,n,r){"use strict";r.r(n),r.d(n,{capitalize:function(){return t.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return u.Z},deprecatedPropType:function(){return o},isMuiElement:function(){return s.Z},ownerDocument:function(){return c.Z},ownerWindow:function(){return l.Z},requirePropFactory:function(){return d},setRef:function(){return f},unstable_ClassNameGenerator:function(){return A.Z},unstable_useEnhancedEffect:function(){return _.Z},unstable_useId:function(){return p.Z},unsupportedProp:function(){return E},useControlled:function(){return m.Z},useEventCallback:function(){return T.Z},useForkRef:function(){return Z.Z},useIsFocusVisible:function(){return S.Z}});var t=r(4036),a=r(8949).Z,i=r(9201),u=r(3199);var o=function(e,n){return function(){return null}},s=r(9103),c=r(8301),l=r(7602);r(7462);var d=function(e,n){return function(){return null}},f=r(2971).Z,_=r(162),p=r(7384);var E=function(e,n,r,t,a){return null},m=r(8744),T=r(9683),Z=r(2071),S=r(3031),A=r(7125)},7384:function(e,n,r){"use strict";var t=r(6248);n.Z=t.Z}}]);
//# sourceMappingURL=910.20954be9.chunk.js.map