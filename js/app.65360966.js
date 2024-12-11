(function(){"use strict";var e={4097:function(e,t,r){var o=r(6848),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],a=r(1656),i={},l=(0,a.A)(i,n,s,!1,null,null,null),c=l.exports,u=r(6178),m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("header",{staticClass:"navbar"},[t("nav",[t("ul",[t("li",[t("a",{class:{active:"home"===e.currentPage},attrs:{href:"#"},on:{click:function(t){e.currentPage="home"}}},[e._v(" Home ")])]),t("li",[t("a",{class:{active:"fitness-planner"===e.currentPage},attrs:{href:"#"},on:{click:function(t){e.currentPage="fitness-planner"}}},[e._v(" Fitness and Diet Planner ")])]),t("li",[t("a",{class:{active:"community"===e.currentPage},attrs:{href:"#"},on:{click:function(t){e.currentPage="community"}}},[e._v(" Community ")])]),t("li",[t("a",{class:{active:"contact"===e.currentPage},attrs:{href:"#"},on:{click:function(t){e.currentPage="contact"}}},[e._v(" Contact Me ")])]),t("li",[t("button",{staticClass:"logout-button",on:{click:e.logout}},[e._v("Log Out")])])])])]),t("div",{key:e.currentPage,staticClass:"page-container"},[t("transition",{attrs:{name:"fade"}},["home"===e.currentPage?t("div",[t("h1",[e._v("Welcome to the Home Page")]),t("p",[e._v("This is the home page content. Explore and enjoy!")])]):e._e()]),t("transition",{attrs:{name:"slide-up"}},["fitness-planner"===e.currentPage?t("div",[t("div",{staticClass:"chat-container"},[t("h1",{staticClass:"section-title"},[e._v("Fitness and Diet Planner")]),t("div",{staticClass:"chat-box"},e._l(e.messages,(function(r,o){return t("div",{key:o,class:["message","user"===r.role?"user":"assistant"]},["user"===r.role?t("div",{staticClass:"message-user"},[t("p",[t("strong",[e._v("You:")]),e._v(" "+e._s(r.content))])]):t("div",{staticClass:"message-assistant",domProps:{innerHTML:e._s(r.content)}})])})),0),t("div",{staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.userMessage,expression:"userMessage"}],staticClass:"chat-input",attrs:{placeholder:"Type your message..."},domProps:{value:e.userMessage},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage.apply(null,arguments)},input:function(t){t.target.composing||(e.userMessage=t.target.value)}}}),t("button",{staticClass:"send-button",on:{click:e.sendMessage}},[e._v("Send")])])])]):e._e()]),t("transition",{attrs:{name:"slide-up"}},["community"===e.currentPage?t("div",[t("h1",[e._v("Community")]),t("p",[e._v("Welcome to the community page, share your thoughts and experiences.")])]):e._e()]),t("transition",{attrs:{name:"fade"}},["contact"===e.currentPage?t("div",[t("h1",[e._v("Contact Me")]),t("p",[e._v("Reach out to us through the following ways.")])]):e._e()])],1)])},d=[],p=(r(4114),r(8355)),h={data(){return{currentPage:"home",userMessage:"",messages:[]}},methods:{async sendMessage(){if(!this.userMessage)return;const e={role:"user",content:this.userMessage};this.messages.push(e);try{const e=await p.A.post("http://localhost:3231/api/chat",{userMessage:this.userMessage},{headers:{"Content-Type":"application/json"}}),t=this.formatResponse(e.data);this.messages.push({role:"assistant",content:t}),this.userMessage=""}catch(t){console.error("Error:",t)}},formatResponse(e){const t=e.split("\n").filter((e=>""!==e.trim()));return t.map((e=>/^[0-9]+\./.test(e)?`<h3 class="response-heading">${e.trim()}</h3>`:`<p class="response-body">${e.trim()}</p>`)).join("")},logout(){localStorage.removeItem("authToken"),sessionStorage.clear(),fetch("/api/logout",{method:"POST",credentials:"include"}).then((e=>{e.ok?console.log("Successfully logged out"):console.error("Failed to log out from the server")})).catch((e=>{console.error("Logout error:",e)})),this.$emit("user-logged-out"),window.location.href="/"}}},g=h,f=(0,a.A)(g,m,d,!1,null,"7a7e38a8",null),v=f.exports,b=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"bgimg"}},[t("body",{attrs:{id:"poster"}},[t("el-form",{staticClass:"login-container",attrs:{"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"login_title"},[e._v("Login")]),t("el-form-item",[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"Username","prefix-icon":"el-icon-user-solid"},model:{value:e.loginForm.loginName,callback:function(t){e.$set(e.loginForm,"loginName",t)},expression:"loginForm.loginName"}})],1),t("el-form-item",[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Password","prefix-icon":"el-icon-lock"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),t("el-form-item",[t("el-select",{attrs:{placeholder:"Please select identity","prefix-icon":"el-icon-user"},model:{value:e.loginForm.identity,callback:function(t){e.$set(e.loginForm,"identity",t)},expression:"loginForm.identity"}},[t("el-option",{attrs:{label:"Ordinary user",value:"User"}}),t("el-option",{attrs:{label:"Administrator",value:"Admin"}})],1)],1),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%",background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:e.Login}},[e._v("Login")])],1),t("el-button",{on:{click:e.toRegister}},[e._v("Click me to register")])],1)],1)])},y=[],w={name:"Login",data(){return{loginForm:{loginName:"",password:"",identity:""}}},methods:{Login(){const e=this.loginForm.loginName;this.axios.post("http://localhost:3231/sys-user/login",this.loginForm).then((t=>{let r=t.data;r.success?(localStorage.setItem("userRole","Admin"===e?"Admin":"User"),localStorage.setItem("isAuthenticated",!0),this.loginForm={},this.$message({message:`Welcome to home page, ${e}!`,type:"success"}),"Admin"===e?this.$router.push({path:"/Admin"}):this.$router.push({path:"/Home"})):"User not found"===r.message?this.$message({message:"Username does not exist, please register.",type:"error"}):"Incorrect password"===r.message?this.$message({message:"Incorrect password, please try again.",type:"error"}):this.$message({message:"Login failed, please try again.",type:"error"})}))},toRegister(){this.$router.push({path:"/Register"})}}},k=w,x=(0,a.A)(k,b,y,!1,null,null,null),C=x.exports,_=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"bgimg"}},[t("h1",[e._v("Welcome to the Admin homepage")]),t("div",{staticClass:"container"},[t("div",{staticClass:"search-bar"},[t("el-input",{staticClass:"custom-search-input",attrs:{placeholder:"Search by username or email",clearable:""},on:{input:e.handleSearch},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}},[t("template",{slot:"prepend"},[t("el-icon",{staticClass:"custom-icon"},[t("i",{staticClass:"el-icon-search"})])],1)],2)],1),t("div",{staticClass:"table-container"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.filteredData,border:"","header-cell-style":{backgroundColor:"#f0f0f0"},"row-class-name":e.tableRowClassName}},[t("el-table-column",{attrs:{prop:"id",label:"ID",formatter:e=>e.id.toString(),width:"200"}}),t("el-table-column",{attrs:{prop:"loginName",label:"UserName",width:"200"}}),t("el-table-column",{attrs:{prop:"email",label:"Email",width:"200"}}),t("el-table-column",{attrs:{prop:"password",label:"Password",width:"300"}}),t("el-table-column",{attrs:{label:"Operation",align:"center","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteRow(r.row)}}},[e._v(" Delete ")])]}}])})],1)],1)])])},F=[],P={data(){return{tableData:[],searchQuery:""}},computed:{filteredData(){if(!this.searchQuery)return this.tableData;const e=this.searchQuery.toLowerCase();return this.tableData.filter((t=>t.loginName.toLowerCase().includes(e)||t.email.toLowerCase().includes(e)))}},mounted(){this.fetchData()},methods:{fetchData(){p.A.get("http://localhost:3231/sys-user/Admin").then((e=>{this.tableData=e.data.map((e=>(e.id=BigInt(e.id),e)))})).catch((e=>{console.error("Error fetching data:",e)}))},handleSearch(){},tableRowClassName({rowIndex:e}){return e%2===0?"row-even":"row-odd"},deleteRow(e){this.$confirm("This action will permanently delete the user. Continue?","Warning",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then((()=>{p.A.delete(`http://localhost:3231/sys-user/${e.id}`).then((()=>{const t=this.tableData.indexOf(e);-1!==t&&(this.tableData.splice(t,1),this.$message.success("Successfully deleted"))})).catch((e=>{console.error("Error deleting row:",e),this.$message.error("Deletion failure")}))})).catch((()=>{this.$message.info("Deletion canceled")}))}}},A=P,S=(0,a.A)(A,_,F,!1,null,"765d14f0",null),$=S.exports,E=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"bgimg"}},[t("div",{attrs:{id:"poster"}},[t("el-form",{ref:"ruleForm",staticClass:"register-container",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px","label-position":"left"}},[t("h3",{staticClass:"register_title"},[e._v(" Register ")]),t("el-form-item",{attrs:{label:"",prop:"loginName"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"Please enter your username","prefix-icon":"el-icon-user-solid"},model:{value:e.ruleForm.loginName,callback:function(t){e.$set(e.ruleForm,"loginName",t)},expression:"ruleForm.loginName"}})],1),t("el-form-item",{attrs:{label:"",prop:"email"}},[t("el-input",{attrs:{type:"text",autocomplete:"off","prefix-icon":"el-icon-user-solid",placeholder:"Please enter your Email"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),t("el-form-item",{attrs:{label:"",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Please enter password","prefix-icon":"el-icon-lock"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),t("el-form-item",{attrs:{label:"",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",placeholder:"Please enter your password again","prefix-icon":"el-icon-lock",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),t("el-form-item",[t("el-button",{staticStyle:{background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm(e.ruleForm)}}},[e._v("Register")]),t("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("Reset")])],1),t("el-button",{on:{click:function(t){return e.toLogin()}}},[e._v("Click to login")])],1)],1)])},N=[],O={name:"Register",data(){var e=(e,t,r)=>{""===t?r(new Error("Please enter password")):(""!==this.ruleForm.checkPass&&this.$refs.ruleForm.validateField("checkPass"),r())},t=(e,t,r)=>{""===t?r(new Error("Please enter your password again")):t!==this.ruleForm.password?r(new Error("Two password inconsistencies!")):r()};return{ruleForm:{loginName:"",password:"",email:"",checkPass:""},rules:{loginName:[{required:!0,message:"Please enter user name",trigger:"blur"}],email:[{required:!0,message:"Please enter your Email",trigger:"blur"}],password:[{validator:e,trigger:"blur"},{min:2,max:9,message:"Length: 2 to 9 characters"}],checkPass:[{validator:t,trigger:"blur"},{min:2,max:9,message:"Length: 2 to 9 characters"}]}}},methods:{submitForm(e){this.axios.post("http://localhost:3231/sys-user/register",this.ruleForm).then((e=>{console.log(e);let t=e.data;t.success?(this.ruleForm={},this.$message({message:"Congratulations, registration success!!!",type:"success"})):"The user name already exists"===t.message&&this.$message({message:"The user name has been registered, please re-register",type:"error"})})).catch((e=>{console.error(e),this.$message({message:"Formatting error",type:"error"})}))},resetForm(e){this.$refs[e].resetFields()},toLogin(){this.$router.push({path:"/"})}}},L=O,T=(0,a.A)(L,E,N,!1,null,null,null),M=T.exports;o["default"].use(u.Ay);const D=[{path:"/",name:"Login",component:C},{path:"/Register",name:"Register",component:M},{path:"/Home",name:"Home",component:v},{path:"/Admin",name:"Admin",component:$},{path:"/about",name:"about",component:()=>r.e(594).then(r.bind(r,4007))}],R=new u.Ay({mode:"hash",base:"",routes:D});R.beforeEach(((e,t,r)=>{const o=localStorage.getItem("isAuthenticated"),n=localStorage.getItem("userRole");"/Admin"===e.path&&"Admin"!==n?r({path:"/"}):"/Home"!==e.path&&"/Admin"!==e.path||o?r():r({path:"/"})}));var j=R,I=r(3518);o["default"].use(I.Ay);var H=new I.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),U=r(9143),B=r.n(U),Q=r(6942);o["default"].config.productionTip=!1,o["default"].use(B()),o["default"].use(Q.A,p.A),new o["default"]({router:j,store:H,render:e=>e(c)}).$mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,o,n,s){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],s=e[u][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.0dab61ec.js"}}(),function(){r.miniCssF=function(e){return"css/about.8da9b2ea.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="login01:";r.l=function(o,n,s,a){if(e[o])e[o].push(n);else{var i,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var m=c[u];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+s){i=m;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[n];var d=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,s){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",r.nc&&(a.nonce=r.nc);var i=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var o=r&&r.type,i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,a.parentNode&&a.parentNode.removeChild(a),s(l)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],s=n.getAttribute("data-href");if(s===e||s===t)return n}},o=function(o){return new Promise((function(n,s){var a=r.miniCssF(o),i=r.p+a;if(t(a,i))return n();e(o,i,null,n,s)}))},n={524:0};r.f.miniCss=function(e,t){var r={594:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={524:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var s=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=s);var a=r.p+r.u(t),i=new Error,l=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,n[1](i)}};r.l(a,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],i=o[1],l=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var u=l(r)}for(t&&t(o);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},o=self["webpackChunklogin01"]=self["webpackChunklogin01"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(4097)}));o=r.O(o)})();
//# sourceMappingURL=app.65360966.js.map