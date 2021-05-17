(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),o=a(17),i=a(29),s=a(68),u=a(84),m=a(11),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(m.a)({},null===t||void 0===t?void 0:t.data))),Object(m.a)(Object(m.a)({},e),{},{authData:t.data,loading:!1,errors:null});case"LOGOUT":return localStorage.clear(),Object(m.a)(Object(m.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},p=Object(i.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:d}),f=a(168),g=a(35),v=a(12),b=a(23),h=a(158),E=a(125),y=a(160),x=a(173),O=a(161),j=a(69),w=a(70),k=a.n(w),C=a(154),S=a(157),N=Object(C.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(S.a[500]),backgroundColor:S.a[500]}}})),I=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(o.b)(),i=Object(v.g)(),s=Object(v.f)(),u=N(),m=function(){c({type:"LOGOUT"}),s.push("/auth"),l(null)};return Object(n.useEffect)((function(){var e=null===a||void 0===a?void 0:a.token;e&&(1e3*Object(j.a)(e).exp<(new Date).getTime()&&m());l(JSON.parse(localStorage.getItem("profile")))}),[i]),r.a.createElement(h.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:u.brandContainer},r.a.createElement(E.a,{component:g.b,to:"/",className:u.heading,variant:"h2",align:"center"},"Sports Cards"),r.a.createElement("img",{className:u.image,src:k.a,alt:"icon",height:"60"})),r.a.createElement(y.a,{className:u.toolbar},(null===a||void 0===a?void 0:a.result)?r.a.createElement("div",{className:u.profile},r.a.createElement(x.a,{className:u.purple,alt:null===a||void 0===a?void 0:a.result.name,src:null===a||void 0===a?void 0:a.result.imageUrl},null===a||void 0===a?void 0:a.result.name.charAt(0)),r.a.createElement(E.a,{className:u.userName,variant:"h6"},null===a||void 0===a?void 0:a.result.name),r.a.createElement(O.a,{variant:"contained",className:u.logout,color:"secondary",onClick:m},"Logout")):r.a.createElement(O.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},T=a(172),D=a(167),A=a(14),L=a.n(A),F=a(21),_=a(75),P=a.n(_).a.create({baseURL:"https://mongoldb-db.herokuapp.com/"});P.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var z=function(e){return P.patch("/posts/".concat(e,"/likePost"))},U=function(e,t){return P.patch("/posts/".concat(e),t)},W=function(e){return P.delete("/posts/".concat(e))},B=function(e){return P.post("/user/signin",e)},J=function(e){return P.post("/user/signup",e)},H=function(e){return function(){var t=Object(F.a)(L.a.mark((function t(a){var n,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,P.post("/posts",l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},R=function(e,t){return function(){var a=Object(F.a)(L.a.mark((function a(n){var r,l;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,U(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},M=a(166),q=a(162),G=a(163),K=a(164),V=a(165),Y=a(77),Q=a.n(Y),X=a(54),Z=a.n(X),$=a(79),ee=a.n($),te=a(78),ae=a.n(te),ne=a(76),re=a.n(ne),le=Object(C.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ce=function(e){var t,a,n,l,c=e.post,i=e.setCurrentId,s=Object(o.b)(),u=le(),m=JSON.parse(localStorage.getItem("profile")),d=function(){return c.likes.length>0?c.likes.find((function(e){var t,a;return e===((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.googleId)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(q.a,{className:u.card},r.a.createElement(G.a,{className:u.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),r.a.createElement("div",{className:u.overlay},r.a.createElement(E.a,{variant:"h6"},c.name),r.a.createElement(E.a,{variant:"body2"},re()(c.createdAt).fromNow())),((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement("div",{className:u.overlay2},r.a.createElement(O.a,{onClick:function(){return i(c._id)},style:{color:"white"},size:"small"},r.a.createElement(ae.a,{fontSize:"default"}))),r.a.createElement("div",{className:u.details},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},c.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2"},c.title),r.a.createElement(K.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},c.message)),r.a.createElement(V.a,{className:u.cardActions},r.a.createElement(O.a,{size:"small",color:"primary",disabled:!(null===m||void 0===m?void 0:m.result),onClick:function(){return s((e=c._id,function(){var t=Object(F.a)(L.a.mark((function t(a){var n,r,l;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.parse(localStorage.getItem("profile")),t.prev=1,t.next=4,z(e,null===n||void 0===n||n.token);case 4:r=t.sent,l=r.data,a({type:"LIKE",payload:l}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(d,null)),((null===m||void 0===m||null===(n=m.result)||void 0===n?void 0:n.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===m||void 0===m||null===(l=m.result)||void 0===l?void 0:l._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement(O.a,{size:"small",color:"secondary",onClick:function(){return s((e=c._id,function(){var t=Object(F.a)(L.a.mark((function t(a){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,W(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(ee.a,{fontSize:"small"})," Delete")))},oe=Object(C.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ie=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=oe();return a.length?r.a.createElement(D.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(D.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(ce,{post:e,setCurrentId:t}))}))):r.a.createElement(M.a,null)},se=a(86),ue=a(171),me=a(80),de=a.n(me),pe=Object(C.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),fe=function(e){var t,a=e.currentId,l=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(b.a)(c,2),s=i[0],u=i[1],d=Object(o.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),p=Object(o.b)(),f=pe(),g=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){d&&u(d)}),[d]);var v=function(){l(0),u({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(F.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(p(H(Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.name}))),v()):(p(R(a,Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(r=g.result)||void 0===r?void 0:r.name}))),v());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name)?r.a.createElement(se.a,{className:f.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:h},r.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(d.title,'"'):"Creating a Post"),r.a.createElement(ue.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ue.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(ue.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:f.fileInput},r.a.createElement(de.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(m.a)(Object(m.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(O.a,{className:f.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(O.a,{variant:"contained",color:"secondary",size:"small",onClick:v,fullWidth:!0},"Clear"))):r.a.createElement(se.a,{className:f.paper},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to create your own memories and like other's memories."))},ge=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(o.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(F.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,c]),r.a.createElement(T.a,{in:!0},r.a.createElement(f.a,null,r.a.createElement(D.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(D.a,{item:!0,xs:12,sm:7},r.a.createElement(ie,{setCurrentId:l})),r.a.createElement(D.a,{item:!0,xs:12,sm:4},r.a.createElement(fe,{currentId:a,setCurrentId:l})))))},ve=a(47),be=a(83),he=a.n(be),Ee=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),ye=a(169),xe=a(170),Oe=a(81),je=a.n(Oe),we=a(82),ke=a.n(we),Ce=function(e){var t=e.name,a=e.handleChange,n=e.label,l=e.half,c=e.autoFocus,o=e.type,i=e.handleShowPassword;return r.a.createElement(D.a,{item:!0,xs:12,sm:l?6:12},r.a.createElement(ue.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:o,InputProps:"password"===t?{endAdornment:r.a.createElement(ye.a,{position:"end"},r.a.createElement(xe.a,{onClick:i},"password"===o?r.a.createElement(je.a,null):r.a.createElement(ke.a,null)))}:null}))},Se={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Ne=function(){var e=Object(n.useState)(Se),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(b.a)(c,2),s=i[0],u=i[1],d=Object(o.b)(),p=Object(v.f)(),g=Ee(),h=Object(n.useState)(!1),y=Object(b.a)(h,2),j=y[0],w=y[1],k=function(e){return l(Object(m.a)(Object(m.a)({},a),{},Object(ve.a)({},e.target.name,e.target.value)))};return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(se.a,{className:g.paper,elevation:3},r.a.createElement(x.a,{className:g.avatar},r.a.createElement(he.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h5"},s?"Sign up":"Sign in"),r.a.createElement("form",{className:g.form,onSubmit:function(e){var t,n;e.preventDefault(),d(s?(t=a,n=p,function(){var e=Object(F.a)(L.a.mark((function e(a){var r,l;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(t);case 3:r=e.sent,l=r.data,a({type:"AUTH",data:l}),n.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var a=Object(F.a)(L.a.mark((function a(n){var r,l;return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,B(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(a,p))}},r.a.createElement(D.a,{container:!0,spacing:2},s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{name:"firstName",label:"First Name",handleChange:k,autoFocus:!0,half:!0}),r.a.createElement(Ce,{name:"lastName",label:"Last Name",handleChange:k,half:!0})),r.a.createElement(Ce,{name:"email",label:"Email Address",handleChange:k,type:"email"}),r.a.createElement(Ce,{name:"password",label:"Password",handleChange:k,type:j?"text":"password",handleShowPassword:function(){return w(!j)}}),s&&r.a.createElement(Ce,{name:"confirmPassword",label:"Repeat Password",handleChange:k,type:"password"})),r.a.createElement(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:g.submit},s?"Sign Up":"Sign In"),r.a.createElement(D.a,{container:!0,justify:"flex-end"},r.a.createElement(D.a,{item:!0},r.a.createElement(O.a,{onClick:function(){l(Se),u((function(e){return!e})),w(!1)}},s?"Already have an account? Sign in":"Don't have an account? Sign Up"))))))},Ie=function(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"lg"},r.a.createElement(I,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,component:ge}),r.a.createElement(v.a,{path:"/auth",exact:!0,component:Ne}))))},Te=(a(123),Object(i.e)(p,Object(i.d)(Object(i.a)(s.a))));c.a.render(r.a.createElement(o.a,{store:Te},r.a.createElement(Ie,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a.p+"static/media/sportscards.d777e3c8.png"},93:function(e,t,a){e.exports=a(124)}},[[93,1,2]]]);
//# sourceMappingURL=main.df0ec0d6.chunk.js.map