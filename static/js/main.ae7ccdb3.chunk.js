(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,n){e.exports=n(407)},223:function(e,t,n){},225:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},226:function(e,t,n){},337:function(e,t){},407:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(56),c=n.n(o),l=(n(223),n(37)),i=n(38),s=n(40),u=n(39),m=n(41),d=n(421),p=n(427),h=n(428),f=(n(225),n(226),n(426)),g=n(408),b=n(69),v=n(422),E=n(425),w=n(423),y=n(416),O=n(424),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).generateHeader=function(){if(n.props.edit)return r.a.createElement(v.a.HeaderCell,{textAlign:"center"},r.a.createElement(E.a,{as:"h2",color:"blue"},r.a.createElement(E.a.Content,null,"Delete")))},n.generateMenu=function(){var e=Object(b.a)(Object(b.a)(n));return n.props.edit||0!==n.props.todaymenu.length?0===e.props.todaymenu.length?r.a.createElement(v.a.Row,{key:"blank",warning:!0},r.a.createElement(v.a.Cell,{textAlign:"center",key:"blank"},"Menu for today not set")):e.props.todaymenu.map(function(t){return e.props.edit?r.a.createElement(v.a.Row,{key:t},r.a.createElement(v.a.Cell,{textAlign:"center",key:t},t),r.a.createElement(v.a.Cell,null,r.a.createElement(O.a,{disabled:n.props.deleteitem,onClick:n.props.removeFoodItem,deleteitem:t},"Delete"))):r.a.createElement(v.a.Row,{key:t},r.a.createElement(v.a.Cell,{textAlign:"center",key:t},r.a.createElement(E.a,{as:"h3"},t)))}):r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Cell,null,r.a.createElement(w.a,{active:!0,inverted:!0},r.a.createElement(y.a,{size:"small"},"Loading"))))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{key:"orange",className:"menuFont",unstackable:!0,color:"orange",celled:!0,basic:!!this.props.edit&&"very"},r.a.createElement(v.a.Header,null,r.a.createElement(v.a.Row,null,r.a.createElement(v.a.HeaderCell,{textAlign:"center"},r.a.createElement(E.a,{as:"h2",color:"orange"},r.a.createElement(E.a.Content,null,"Today's Menu",r.a.createElement(E.a.Subheader,{color:"grey"},"Updated on")))),this.generateHeader())),r.a.createElement(v.a.Body,null,this.generateMenu()))}}]),t}(r.a.Component),I=n(32),k=n.n(I),C=n(70),F=n(119),D=n(31),Y=n.n(D),M=n(196),x=new(n.n(M).a);function S(e,t){this.owner="rohitbels",this.repo=e,this.path=t}x.authenticate({type:"basic",username:"rohitbels",password:"githubrohit93"}),S.prototype.decode=function(e){return new F.Buffer(e,"base64").toString("utf8")},S.prototype.encode=function(e){return new F.Buffer(JSON.stringify(e)).toString("base64")},S.prototype.getFileData=Object(C.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this),e.prev=1,e.next=4,x.repos.getContent({owner:this.owner,repo:this.repo,path:this.path});case 4:return t=e.sent,e.abrupt("return",JSON.parse(this.decode(t.data.content)));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{status:-1});case 11:case"end":return e.stop()}},e,this,[[1,8]])})),S.prototype.getFileDetails=Object(C.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.owner,this.path),e.next=3,x.repos.getContent({owner:this.owner,repo:this.repo,path:this.path});case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e,this)})),S.prototype.updateFileContent=function(){var e=Object(C.a)(k.a.mark(function e(t,n){var a,r,o,c,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getFileDetails();case 2:return a=e.sent,r=JSON.parse(this.decode(a.content)),o=Y()().format("YYYYMMDD"),r instanceof Array?r.push(t):r instanceof Object&&(r[o],r[o]=t),c=a.sha,r=this.encode(r),e.next=10,x.repos.updateFile({owner:this.owner,repo:this.repo,path:this.path,message:n,content:r,sha:c});case 10:return l=e.sent,e.prev=11,e.abrupt("return",l);case 15:return e.prev=15,e.t0=e.catch(11),e.abrupt("return",{});case 18:case"end":return e.stop()}},e,this,[[11,15]])}));return function(t,n){return e.apply(this,arguments)}}(),S.prototype.createFile=Object(C.a)(k.a.mark(function e(){var t,n,a,r,o,c=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:{},n=c.length>1&&void 0!==c[1]?c[1]:"menu",a={},r=Y()().format("YYYYMMDD"),a[r]=t,t=this.encode(a),e.next=8,x.repos.createFile({owner:this.owner,repo:this.repo,path:this.path,message:n,content:t});case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}},e,this)}));var A=S,R=new A("hostingIO",Y()().format("YYYYMMDD").concat(".json")),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){R.getFileData().then(function(e){n.setState({todaymenu:e[Y()().format("YYYYMMDD")]})})},n.state={todaymenu:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(f.a.Row,null,r.a.createElement(f.a.Column,{width:4,only:"computer"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{src:"/tiffin.png",size:"medium"})),r.a.createElement(f.a.Column,{width:2,only:"mobile"}),r.a.createElement(f.a.Column,{computer:8,mobile:12},r.a.createElement(g.a,{src:"/logo.png",size:"large",centered:!0}),r.a.createElement(f.a,null,r.a.createElement(f.a.Row,null,r.a.createElement(j,{todaymenu:this.state.todaymenu,edit:!1})))),r.a.createElement(f.a.Column,{width:4,only:"computer"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{src:"/thali.png",size:"medium"})),r.a.createElement(f.a.Column,{width:2,only:"mobile"})),r.a.createElement(f.a.Row,null,r.a.createElement(f.a.Column,{width:8,only:"mobile"},r.a.createElement(g.a,{src:"/tiffin.png",size:"small"})),r.a.createElement(f.a.Column,{width:8,only:"mobile"},r.a.createElement(g.a,{src:"/thali.png",size:"medium"})))))}}]),t}(r.a.Component),z=(n(391),n(417)),H=n(418),B=n(420),J=n(419),W=new A("hostingIO",Y()().format("YYYYMMDD").concat(".json")),L=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setSelected=function(e){n.setState({value:e.value},function(){console.log("Option selected:",n.state.value)})},n.addMenuItem=function(){""!==n.state.currentFoodItem.trim()?n.setState({todaymenu:n.state.todaymenu.concat([n.state.currentFoodItem]),currentFoodItem:"",saveloading:!1,foodItemInput:Object.assign({},{error:!1},n.state.foodItemInput)}):n.setState({currentFoodItem:"",foodItemInput:Object.assign({},{error:!0},n.state.foodItemInput)})},n.removeFoodItem=function(e,t){var a=n.state.todaymenu,r=a.indexOf(t.deleteitem),o=a.slice(0,r);o=o.concat(a.slice(r+1)),n.setState({todaymenu:o})},n.saveMenu=function(){n.setState({saveloading:!0,disableDelete:!0,foodItemInput:Object.assign({},{disabled:!0},n.state.foodItemInput)},function(){W.updateFileContent(n.state.todaymenu,"Aaj cha special").then(function(){n.setState({saveloading:!1})})})},n.componentDidMount=function(){W.getFileData().then(function(e){e.status&&-1===e.status?W.createFile():n.setState({todaymenu:e[Y()().format("YYYYMMDD")]})})},n.state={currentFoodItem:"",todaymenu:[],foodItemInput:{error:!1,disabled:!1},disableDelete:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(z.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j,{todaymenu:this.state.todaymenu,disableDelete:this.state.disableDelete,removeFoodItem:this.removeFoodItem,edit:!0}),r.a.createElement(H.a,null),r.a.createElement(B.a,null,r.a.createElement(B.a.Group,null,r.a.createElement(B.a.Field,null,r.a.createElement(J.a,Object.assign({label:"Add Food Here",onChange:function(t){e.setState({currentFoodItem:t.target.value})},placeholder:"Food Name",value:this.state.currentFoodItem},this.state.foodItemInput))),r.a.createElement(B.a.Field,null,r.a.createElement(O.a,{content:"Add",onClick:this.addMenuItem})),r.a.createElement(B.a.Field,null,r.a.createElement(O.a,{onClick:this.saveMenu,loading:this.state.saveloading,content:"Save",primary:!0})))))}}]),t}(r.a.Component),T=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:N}),r.a.createElement(h.a,{path:"/addmenu",component:L}))))}}]),t}(a.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(T,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");U?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):G(e)})}}()}},[[218,2,1]]]);
//# sourceMappingURL=main.ae7ccdb3.chunk.js.map