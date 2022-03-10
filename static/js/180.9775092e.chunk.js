"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[180],{1889:function(n,r,t){t.d(r,{ZP:function(){return W}});var i=t(2982),e=t(4942),o=t(3366),a=t(7462),c=t(2791),s=t(8182),u=t(1184),d=t(8519),p=t(767),l=t(7630),g=t(1046);var m=c.createContext(),v=t(5159);function f(n){return(0,v.Z)("MuiGrid",n)}var x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],S=(0,t(208).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,i.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,i.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,i.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-xs-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-sm-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-md-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-lg-".concat(n)}))),(0,i.Z)(x.map((function(n){return"grid-xl-".concat(n)}))))),w=t(184),h=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(n){var r=parseFloat(n);return"".concat(r).concat(String(n).replace(String(r),"")||"px")}function Z(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]||"spacing-xs-".concat(String(n))];var i=n.xs,e=n.sm,o=n.md,a=n.lg,c=n.xl;return[Number(i)>0&&(t["spacing-xs-".concat(String(i))]||"spacing-xs-".concat(String(i))),Number(e)>0&&(t["spacing-sm-".concat(String(e))]||"spacing-sm-".concat(String(e))),Number(o)>0&&(t["spacing-md-".concat(String(o))]||"spacing-md-".concat(String(o))),Number(a)>0&&(t["spacing-lg-".concat(String(a))]||"spacing-lg-".concat(String(a))),Number(c)>0&&(t["spacing-xl-".concat(String(c))]||"spacing-xl-".concat(String(c)))]}var k=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,r){var t=n.ownerState,e=t.container,o=t.direction,a=t.item,c=t.lg,s=t.md,u=t.sm,d=t.spacing,p=t.wrap,l=t.xl,g=t.xs,m=t.zeroMinWidth;return[r.root,e&&r.container,a&&r.item,m&&r.zeroMinWidth].concat((0,i.Z)(Z(d,e,r)),["row"!==o&&r["direction-xs-".concat(String(o))],"wrap"!==p&&r["wrap-xs-".concat(String(p))],!1!==g&&r["grid-xs-".concat(String(g))],!1!==u&&r["grid-sm-".concat(String(u))],!1!==s&&r["grid-md-".concat(String(s))],!1!==c&&r["grid-lg-".concat(String(c))],!1!==l&&r["grid-xl-".concat(String(l))]])}})((function(n){var r=n.ownerState;return(0,a.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(n){var r=n.theme,t=n.ownerState,i=(0,u.P$)({values:t.direction,breakpoints:r.breakpoints.values});return(0,u.k9)({theme:r},i,(function(n){var r={flexDirection:n};return 0===n.indexOf("column")&&(r["& > .".concat(S.item)]={maxWidth:"none"}),r}))}),(function(n){var r=n.theme,t=n.ownerState,i=t.container,o=t.rowSpacing,a={};if(i&&0!==o){var c=(0,u.P$)({values:o,breakpoints:r.breakpoints.values});a=(0,u.k9)({theme:r},c,(function(n){var t=r.spacing(n);return"0px"!==t?(0,e.Z)({marginTop:"-".concat(b(t))},"& > .".concat(S.item),{paddingTop:b(t)}):{}}))}return a}),(function(n){var r=n.theme,t=n.ownerState,i=t.container,o=t.columnSpacing,a={};if(i&&0!==o){var c=(0,u.P$)({values:o,breakpoints:r.breakpoints.values});a=(0,u.k9)({theme:r},c,(function(n){var t=r.spacing(n);return"0px"!==t?(0,e.Z)({width:"calc(100% + ".concat(b(t),")"),marginLeft:"-".concat(b(t))},"& > .".concat(S.item),{paddingLeft:b(t)}):{}}))}return a}),(function(n){var r,t=n.theme,i=n.ownerState;return t.breakpoints.keys.reduce((function(n,e){var o={};if(i[e]&&(r=i[e]),!r)return n;if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,u.P$)({values:i.columns,breakpoints:t.breakpoints.values}),s="object"===typeof c?c[e]:c;if(void 0===s||null===s)return n;var d="".concat(Math.round(r/s*1e8)/1e6,"%"),p={};if(i.container&&i.item&&0!==i.columnSpacing){var l=t.spacing(i.columnSpacing);if("0px"!==l){var g="calc(".concat(d," + ").concat(b(l),")");p={flexBasis:g,maxWidth:g}}}o=(0,a.Z)({flexBasis:d,flexGrow:0,maxWidth:d},p)}return 0===t.breakpoints.values[e]?Object.assign(n,o):n[t.breakpoints.up(e)]=o,n}),{})})),W=c.forwardRef((function(n,r){var t,e=(0,g.Z)({props:n,name:"MuiGrid"}),u=(0,d.Z)(e),l=u.className,v=u.columns,x=u.columnSpacing,S=u.component,b=void 0===S?"div":S,W=u.container,M=void 0!==W&&W,N=u.direction,y=void 0===N?"row":N,P=u.item,z=void 0!==P&&P,B=u.lg,G=void 0!==B&&B,R=u.md,$=void 0!==R&&R,j=u.rowSpacing,C=u.sm,L=void 0!==C&&C,O=u.spacing,T=void 0===O?0:O,A=u.wrap,D=void 0===A?"wrap":A,E=u.xl,F=void 0!==E&&E,q=u.xs,H=void 0!==q&&q,I=u.zeroMinWidth,J=void 0!==I&&I,K=(0,o.Z)(u,h),Q=j||T,U=x||T,V=c.useContext(m),X=v||V||12,Y=(0,a.Z)({},u,{columns:X,container:M,direction:y,item:z,lg:G,md:$,sm:L,rowSpacing:Q,columnSpacing:U,wrap:D,xl:F,xs:H,zeroMinWidth:J}),_=function(n){var r=n.classes,t=n.container,e=n.direction,o=n.item,a=n.lg,c=n.md,s=n.sm,u=n.spacing,d=n.wrap,l=n.xl,g=n.xs,m={root:["root",t&&"container",o&&"item",n.zeroMinWidth&&"zeroMinWidth"].concat((0,i.Z)(Z(u,t)),["row"!==e&&"direction-xs-".concat(String(e)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==g&&"grid-xs-".concat(String(g)),!1!==s&&"grid-sm-".concat(String(s)),!1!==c&&"grid-md-".concat(String(c)),!1!==a&&"grid-lg-".concat(String(a)),!1!==l&&"grid-xl-".concat(String(l))])};return(0,p.Z)(m,f,r)}(Y);return t=(0,w.jsx)(k,(0,a.Z)({ownerState:Y,className:(0,s.Z)(_.root,l),as:b,ref:r},K)),12!==X?(0,w.jsx)(m.Provider,{value:X,children:t}):t}))},3767:function(n,r,t){var i=t(4942),e=t(3366),o=t(7462),a=t(2791),c=t(1184),s=t(5682),u=t(8519),d=t(2466),p=t(7630),l=t(1046),g=t(184),m=["component","direction","spacing","divider","children"];function v(n,r){var t=a.Children.toArray(n).filter(Boolean);return t.reduce((function(n,i,e){return n.push(i),e<t.length-1&&n.push(a.cloneElement(r,{key:"separator-".concat(e)})),n}),[])}var f=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(n,r){return[r.root]}})((function(n){var r=n.ownerState,t=n.theme,e=(0,o.Z)({display:"flex"},(0,c.k9)({theme:t},(0,c.P$)({values:r.direction,breakpoints:t.breakpoints.values}),(function(n){return{flexDirection:n}})));if(r.spacing){var a=(0,s.hB)(t),u=Object.keys(t.breakpoints.values).reduce((function(n,t){return null==r.spacing[t]&&null==r.direction[t]||(n[t]=!0),n}),{}),p=(0,c.P$)({values:r.direction,base:u}),l=(0,c.P$)({values:r.spacing,base:u});e=(0,d.Z)(e,(0,c.k9)({theme:t},l,(function(n,t){return{"& > :not(style) + :not(style)":(0,i.Z)({margin:0},"margin".concat((e=t?p[t]:r.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[e])),(0,s.NA)(a,n))};var e})))}return e})),x=a.forwardRef((function(n,r){var t=(0,l.Z)({props:n,name:"MuiStack"}),i=(0,u.Z)(t),a=i.component,c=void 0===a?"div":a,s=i.direction,d=void 0===s?"column":s,p=i.spacing,x=void 0===p?0:p,S=i.divider,w=i.children,h=(0,e.Z)(i,m),b={direction:d,spacing:x};return(0,g.jsx)(f,(0,o.Z)({as:c,ownerState:b,ref:r},h,{children:S?v(w,S):w}))}));r.Z=x}}]);
//# sourceMappingURL=180.9775092e.chunk.js.map