(function(){var e={1037:function(){},3689:function(e,t,r){"use strict";var o=r(6848),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},s=[],a=r(1656),i={},l=(0,a.A)(i,n,s,!1,null,null,null),u=l.exports,c=r(6178),m=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div")},d=[],p=r(1037),f=r.n(p),h=f(),g=(0,a.A)(h,m,d,!1,null,null,null),b=g.exports,v=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"bgimg"}},[t("body",{attrs:{id:"poster"}},[t("el-form",{staticClass:"login-container",attrs:{"label-position":"left","label-width":"0px"}},[t("h3",{staticClass:"login_title"},[e._v("Login")]),t("el-form-item",{attrs:{label:""}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"username","prefix-icon":"el-icon-user-solid"},model:{value:e.loginForm.loginName,callback:function(t){e.$set(e.loginForm,"loginName",t)},expression:"loginForm.loginName"}})],1),t("el-form-item",{attrs:{label:""}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Password","prefix-icon":"el-icon-lock"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),t("el-form-item",[t("el-select",{attrs:{placeholder:"Please select identity","prefix-icon":"el-icon-user"},model:{value:e.loginForm.identity,callback:function(t){e.$set(e.loginForm,"identity",t)},expression:"loginForm.identity"}},[t("el-option",{attrs:{label:"Ordinary user",value:"Ordinary user"}}),t("el-option",{attrs:{label:"Administrator",value:"Administrator"}})],1)],1),t("el-form-item",{staticStyle:{width:"100%"}},[t("el-button",{staticStyle:{width:"100%",background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:e.Login}},[e._v("Login")])],1),t("el-button",{on:{click:e.toRegister}},[e._v("Click me to register")])],1)],1)])},y=[],w=(r(4114),{name:"Login",data(){return{loginForm:{loginName:"",password:"",identity:""}}},methods:{Login(){const e=this.loginForm.loginName;this.axios.post("http://localhost:3231/sys-user/login",this.loginForm).then((t=>{let r=t.data;r.success?(this.loginForm={},this.$message({message:`Welcome to the main page, ${e}!`,type:"success"}),"Admin"===e?this.$router.push({path:"/Admin"}):this.$router.push({path:"/Home"})):"User not found"===r.message?this.$message({message:"Username does not exist, please register.",type:"error"}):"Incorrect password"===r.message?this.$message({message:"Incorrect password, please try again.",type:"error"}):this.$message({message:"Login failed, please try again.",type:"error"})}))},toRegister(){this.$router.push({path:"/Register"})}}}),k=w,F=(0,a.A)(k,v,y,!1,null,null,null),x=F.exports,_=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"bgimg"}},[t("h1",[e._v("Welcome to the Admin homepage")]),t("div",{staticClass:"container"},[t("div",{staticClass:"table-container"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","header-cell-style":{backgroundColor:"#f0f0f0"},"row-class-name":e.tableRowClassName}},[t("el-table-column",{attrs:{prop:"id",label:"ID"}}),t("el-table-column",{attrs:{prop:"loginName",label:"UserName"}}),t("el-table-column",{attrs:{prop:"name",label:"ScreenName"}}),t("el-table-column",{attrs:{prop:"password",label:"Password"}}),t("el-table-column",{attrs:{label:"Operation"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.deleteRow(r.row)}}},[e._v(" Delete ")])]}}])})],1)],1)])])},A=[],P=r(8355),C={data(){return{tableData:[]}},mounted(){this.fetchData()},methods:{fetchData(){P.A.get("http://localhost:3231/sys-user/Admin").then((e=>{this.tableData=e.data})).catch((e=>{console.error("Error fetching data:",e)}))},tableRowClassName({rowIndex:e}){return e%2===0?"row-even":"row-odd"},deleteRow(e){P.A.delete(`http://localhost:3231/sys-user/${e.id}`).then((()=>{const t=this.tableData.indexOf(e);-1!==t&&(this.tableData.splice(t,1),this.$message.success("Successfully deleted"))})).catch((e=>{console.error("Error deleting row:",e),this.$message.error("Deletion failure")}))}}},N=C,$=(0,a.A)(N,_,A,!1,null,"fc717090",null),O=$.exports,E=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"bgimg"}},[t("div",{attrs:{id:"poster"}},[t("el-form",{ref:"ruleForm",staticClass:"register-container",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"0px","label-position":"left"}},[t("h3",{staticClass:"register_title"},[e._v(" Register ")]),t("el-form-item",{attrs:{label:"",prop:"loginName"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"Please enter your username","prefix-icon":"el-icon-user-solid"},model:{value:e.ruleForm.loginName,callback:function(t){e.$set(e.ruleForm,"loginName",t)},expression:"ruleForm.loginName"}})],1),t("el-form-item",{attrs:{label:"",prop:"name"}},[t("el-input",{attrs:{type:"text",autocomplete:"off","prefix-icon":"el-icon-user-solid",placeholder:"Please enter a screen name"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),t("el-form-item",{attrs:{label:"",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"Please enter password","prefix-icon":"el-icon-lock"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),t("el-form-item",{attrs:{label:"",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",placeholder:"Please enter your password again","prefix-icon":"el-icon-lock",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(t){e.$set(e.ruleForm,"checkPass",t)},expression:"ruleForm.checkPass"}})],1),t("el-form-item",[t("el-button",{staticStyle:{background:"#505458",border:"none"},attrs:{type:"primary"},on:{click:function(t){return e.submitForm(e.ruleForm)}}},[e._v("Register")]),t("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("Reset")])],1),t("el-button",{on:{click:function(t){return e.toLogin()}}},[e._v("Click to login")])],1)],1)])},S=[],L={name:"Register",data(){var e=(e,t,r)=>{""===t?r(new Error("Please enter password")):(""!==this.ruleForm.checkPass&&this.$refs.ruleForm.validateField("checkPass"),r())},t=(e,t,r)=>{""===t?r(new Error("Please enter your password again")):t!==this.ruleForm.password?r(new Error("Two password inconsistencies!")):r()};return{ruleForm:{loginName:"",password:"",name:"",checkPass:""},rules:{loginName:[{required:!0,message:"Please enter a screen name",trigger:"blur"}],password:[{validator:e,trigger:"blur"},{min:2,max:9,message:"Length: 2 to 9 characters"}],checkPass:[{validator:t,trigger:"blur"},{min:2,max:9,message:"Length: 2 to 9 characters"}]}}},methods:{submitForm(e){this.axios.post("http://localhost:3231/sys-user/register",this.ruleForm).then((e=>{console.log(e);let t=e.data;t.success?(this.ruleForm={},this.$message({message:"Congratulations, registration success!!!",type:"success"})):"The user name already exists"===t.message&&this.$message({message:"The user name has been registered, please re-register",type:"error"})})).catch((e=>{console.error(e),this.$message({message:"Formatting error",type:"error"})}))},resetForm(e){this.$refs[e].resetFields()},toLogin(){this.$router.push({path:"/"})}}},j=L,R=(0,a.A)(j,E,S,!1,null,null,null),T=R.exports;o["default"].use(c.Ay);const D=[{path:"/",name:"Login",component:x},{path:"/Register",name:"Register",component:T},{path:"/Home",name:"Home",component:b},{path:"/Admin",name:"Admin",component:O},{path:"/about",name:"about",component:()=>r.e(594).then(r.bind(r,4007))}],I=new c.Ay({mode:"hash",base:"",routes:D});var M=I,U=r(3518);o["default"].use(U.Ay);var B=new U.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),H=r(9143),q=r.n(H),W=r(6942);o["default"].config.productionTip=!1,o["default"].use(q()),o["default"].use(W.A,P.A),new o["default"]({router:M,store:B,render:e=>e(u)}).$mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(s.exports,s,s.exports,r),s.loaded=!0,s.exports}r.m=e,function(){r.amdO={}}(),function(){var e=[];r.O=function(t,o,n,s){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],s=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[o,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.0dab61ec.js"}}(),function(){r.miniCssF=function(e){return"css/about.8da9b2ea.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="login01:";r.l=function(o,n,s,a){if(e[o])e[o].push(n);else{var i,l;if(void 0!==s)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var m=u[c];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+s){i=m;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+s),i.src=o),e[o]=[n];var d=function(t,r){i.onerror=i.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,n,s){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",r.nc&&(a.nonce=r.nc);var i=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var o=r&&r.type,i=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+i+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=i,a.parentNode&&a.parentNode.removeChild(a),s(l)}};return a.onerror=a.onload=i,a.href=t,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],s=n.getAttribute("data-href");if(s===e||s===t)return n}},o=function(o){return new Promise((function(n,s){var a=r.miniCssF(o),i=r.p+a;if(t(a,i))return n();e(o,i,null,n,s)}))},n={524:0};r.f.miniCss=function(e,t){var r={594:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={524:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var s=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=s);var a=r.p+r.u(t),i=new Error,l=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,n[1](i)}};r.l(a,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],i=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var c=l(r)}for(t&&t(o);u<a.length;u++)s=a[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},o=self["webpackChunklogin01"]=self["webpackChunklogin01"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(3689)}));o=r.O(o)})();
//# sourceMappingURL=app.5f6921ef.js.map