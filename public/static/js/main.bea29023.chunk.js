(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{156:function(e,t){},158:function(e,t){},177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(10),i=a.n(c),r=a(15),s=a(222),l=a(213),o=a(224),d=a.p+"static/media/logo.14b6b15b.png",j=a(101),b=a(214),u=a(179),m=a(227),x=a(23),O=a(102),p=a(67),f=a.n(p),h=a(4),g=Object(n.createContext)(),v=Object(O.io)("http://localhost:5000"),y=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(x.a)(a,2),i=c[0],r=c[1],s=Object(n.useState)(!1),l=Object(x.a)(s,2),o=l[0],d=l[1],j=Object(n.useState)(),b=Object(x.a)(j,2),u=b[0],m=b[1],O=Object(n.useState)(""),p=Object(x.a)(O,2),y=p[0],w=p[1],C=Object(n.useState)({}),N=Object(x.a)(C,2),k=N[0],S=N[1],I=Object(n.useState)(""),D=Object(x.a)(I,2),P=D[0],R=D[1],T=Object(n.useRef)(),A=Object(n.useRef)(),B=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){m(e),T.current.srcObject=e})),v.on("me",(function(e){return R(e)})),v.on("callUser",(function(e){var t=e.from,a=e.name,n=e.signal;S({isReceivingCall:!0,from:t,name:a,signal:n})}))}),[]);return Object(h.jsx)(g.Provider,{value:{call:k,callAccepted:i,myVideo:T,userVideo:A,stream:u,name:y,setName:w,callEnded:o,me:P,callUser:function(e){var t=new f.a({initiator:!0,trickle:!1,stream:u});t.on("signal",(function(t){v.emit("callUser",{userToCall:e,signalData:t,from:P,name:y})})),t.on("stream",(function(e){A.current.srcObject=e})),v.on("callAccepted",(function(e){r(!0),t.signal(e)})),B.current=t},leaveCall:function(){d(!0),B.current.destroy(),window.location.reload()},answerCall:function(){r(!0);var e=new f.a({initiator:!1,trickle:!1,stream:u});e.on("signal",(function(e){v.emit("answerCall",{signal:e,to:k.from})})),e.on("stream",(function(e){A.current.srcObject=e})),e.signal(k.signal),B.current=e}},children:t})};function w(e){return Object(h.jsx)(o.a,Object(j.a)({elevation:6,variant:"filled"},e))}var C=Object(l.a)((function(e){return{video:Object(r.a)({width:"550px"},e.breakpoints.down("xs"),{width:"300px"}),gridContainer:Object(r.a)({justifyContent:"center"},e.breakpoints.down("xs"),{flexDirection:"column"}),paper:{padding:"10px",margin:"10px"}}})),N=function(){var e=Object(n.useContext)(g),t=e.name,a=e.callAccepted,c=e.myVideo,i=e.userVideo,r=e.callEnded,s=e.stream,l=e.call,o=C();return Object(h.jsxs)(b.a,{container:!0,className:o.gridContainer,children:[s?Object(h.jsxs)(u.a,{className:o.paper,children:[Object(h.jsx)(w,{severity:"success",children:t||"Name"}),Object(h.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(h.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:o.video})})]}):Object(h.jsx)(u.a,{className:o.paper,children:Object(h.jsx)(b.a,{item:!0,children:Object(h.jsxs)(w,{severity:"error",children:[Object(h.jsx)(m.a,{children:"Permission needed"}),"Please grant the access of camera and microphone. ",Object(h.jsx)("strong",{children:"Then refresh the tab"})]})})}),a&&!r&&Object(h.jsxs)(u.a,{className:o.paper,children:[Object(h.jsx)(w,{severity:"success",children:l.name||"Name"}),Object(h.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(h.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:o.video})})]})]})},k=a(215),S=a(223),I=a(217),D=a(108),P=a(218),R=a(219),T=a(220),A=a(59),B=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column"},gridContainer:Object(r.a)({width:"100%"},e.breakpoints.down("xs"),{flexDirection:"column"}),container:Object(r.a)({width:"600px",margin:"35px 0",padding:0},e.breakpoints.down("xs"),{width:"80%"}),margin:{marginTop:20},padding:{padding:20},paper:{padding:"10px 20px"}}})),E=function(){var e=Object(n.useContext)(g),t=e.me,a=e.callAccepted,c=e.name,i=e.setName,r=e.callEnded,s=e.leaveCall,l=e.callUser,d=Object(n.useState)(""),j=Object(x.a)(d,2),m=j[0],O=j[1],p=B();return Object(h.jsx)(k.a,{className:p.container,children:Object(h.jsx)(u.a,{elevation:1,className:p.paper,children:Object(h.jsx)("form",{className:p.root,noValidate:!0,autoComplete:"off",children:Object(h.jsxs)(b.a,{container:!0,className:p.gridContainer,children:[Object(h.jsxs)(b.a,{item:!0,xs:12,md:6,className:p.padding,children:[Object(h.jsx)(o.a,{variant:"outlined",severity:"info",children:"Please enter your name and roll no. (i.e xyz-123)"}),Object(h.jsx)(S.a,{label:"Name-Roll no",value:c,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(h.jsx)(D.CopyToClipboard,{text:t,className:p.margin,children:Object(h.jsx)(I.a,{variant:"contained",fullWidth:!0,startIcon:Object(h.jsx)(P.a,{style:{color:A.a[500]},fontSize:"large"}),children:"Generate code"})})]}),Object(h.jsxs)(b.a,{item:!0,xs:12,md:6,className:p.padding,children:[Object(h.jsx)(o.a,{variant:"outlined",severity:"info",children:"Please enter the code shared by administration"}),Object(h.jsx)(S.a,{label:"Enter Code",value:m,onChange:function(e){return O(e.target.value)},fullWidth:!0}),a&&!r?Object(h.jsx)(I.a,{variant:"contained",color:"secondary",startIcon:Object(h.jsx)(R.a,{fontSize:"large"}),fullWidth:!0,onClick:s,className:p.margin,children:"Leave the meeting"}):Object(h.jsx)(I.a,{variant:"contained",style:{backgroundColor:A.a[500]},startIcon:Object(h.jsx)(T.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return l(m)},className:p.margin,children:"Join meeting"})]})]})})})})},V=a(109),z=a.n(V),U=Object(l.a)((function(){return{"@keyframes blinker":{from:{opacity:1},to:{opacity:0}},headerGT:{animationName:"$blinker",animationDuration:"1s",animationTimingFunction:"linear",animationIterationCount:"infinite",color:"red"}}})),W=function(){var e=Object(n.useContext)(g),t=e.answerCall,a=e.call,c=e.callAccepted,i=U();return Object(h.jsx)(h.Fragment,{children:a.isReceivingCall&&!c&&Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(h.jsxs)("h1",{className:i.headerGT,children:[a.name," is calling: \xa0"]}),Object(h.jsx)(I.a,{variant:"contained",style:{backgroundColor:A.a[500]},startIcon:Object(h.jsx)(z.a,{fontSize:"large"}),onClick:t,children:"Allow"})]})})},G=a(221),J=a(111),F=a.n(J),K=a(226),M=Object(l.a)((function(e){return{fab:{margin:e.spacing(2)},absolute:Object(r.a)({position:"absolute",bottom:e.spacing(50),left:e.spacing(3)},e.breakpoints.down("xs"),{bottom:e.spacing(2),left:e.spacing(1),width:"10px"})}}));function L(){var e=M();return Object(h.jsx)("div",{children:Object(h.jsx)(K.a,{title:"Contributed by : Kunal Kumar 11492 (Btech cse).","aria-label":"add",children:Object(h.jsx)(G.a,{className:e.absolute,children:Object(h.jsx)(F.a,{})})})})}var $=Object(l.a)((function(e){return{appBar:Object(r.a)({borderRadius:0,margin:"0px 0px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%",border:"none",background:"#0c477f"},e.breakpoints.down("xs"),{width:"100%"}),image:Object(r.a)({},e.breakpoints.down("xs"),{width:"70%"}),alertBox:{margin:"20px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}})),q=function(){var e=$();return Object(h.jsxs)("div",{className:e.wrapper,children:[Object(h.jsx)(s.a,{className:e.appBar,position:"static",color:"inherit",children:Object(h.jsx)("img",{className:e.image,src:d})}),Object(h.jsx)(o.a,{className:e.alertBox,severity:"info",children:"Viva room : please wait for your turn (Meeting will be start on given time by your professor)."}),Object(h.jsx)(W,{}),Object(h.jsx)(N,{}),Object(h.jsx)(L,{}),Object(h.jsx)(E,{})]})};a(177);i.a.render(Object(h.jsx)(y,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[178,1,2]]]);
//# sourceMappingURL=main.bea29023.chunk.js.map