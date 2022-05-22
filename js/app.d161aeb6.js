(function(){"use strict";var e={2401:function(e,t,r){var s=r(9242),n=r(3396);const o={class:"my-container"};function a(e,t,r,s,a,i){const u=(0,n.up)("nav-bar"),l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[e.getLoggedIn?((0,n.wg)(),(0,n.j4)(u,{key:0,class:""})):(0,n.kq)("",!0),(0,n._)("div",o,[(0,n.Wm)(l)])],64)}var i=r(7139);const u={class:"navbar"},l=["src"],d={class:"navbar__home"},c={class:"navbar__user"},p=["src"],m={class:"navbar__menu"};function f(e,t,o,a,f,g){return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("img",{src:r(9574),class:"navbar__logo"},null,8,l),(0,n._)("div",d,[(0,n._)("span",{onClick:t[0]||(t[0]=(...e)=>g.Home&&g.Home(...e)),class:"navbar__home-title"},"DashboardBMSTU")]),(0,n._)("div",c,[(0,n._)("h3",{onClick:t[1]||(t[1]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-user_circle n__u-t"},(0,i.zw)(e.shortName),1)]),(0,n._)("img",{onClick:t[2]||(t[2]=(...e)=>g.Menu&&g.Menu(...e)),src:r(5674),class:"navbar__icon-menu",alt:"",ref:"navbar-menu"},null,8,p),(0,n.wy)((0,n._)("div",m,[(0,n._)("span",{onClick:t[3]||(t[3]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-settings navbar__menu-item"}," Настройки "),(0,n._)("span",{onClick:t[4]||(t[4]=(...e)=>g.Logout&&g.Logout(...e)),class:"icon-logout navbar__menu-item"}," Выйти")],512),[[s.F8,f.menu]])])}var g=r(678);const h=e=>((0,n.dD)("data-v-0e924928"),e=e(),(0,n.Cn)(),e),v={class:"login-page"},_={class:"login-form"},w=h((()=>(0,n._)("h2",{class:"login-form__title"},"Вход",-1))),b=(0,n.Uk)("Войти");function P(e,t,o,a,i,u){const l=(0,n.up)("i-input"),d=(0,n.up)("d-button");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n._)("div",_,[w,(0,n.Wm)(l,{onKeyup:(0,s.D2)(u.LoginSubmit,["enter"]),icon:r(1816),modelValue:i.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),modelModifiers:{trim:!0},plhl:"Имя пользователя","error-msg":i.errUsername,class:"login-form__username"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,n.Wm)(l,{onKeyup:(0,s.D2)(u.LoginSubmit,["enter"]),icon:r(5386),modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),plhl:"Пароль",type:"password","error-msg":i.errPassword,class:"login-form__password",ref:"passs"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,n.Wm)(d,{onClick:u.LoginSubmit,class:"login-form__button"},{default:(0,n.w5)((()=>[b])),_:1},8,["onClick"])])])}var y=r(4086),N=r(2151),C=r(65);const S="неверный логин или пароль",I="заполните поле";var k={name:"LoginView",components:{IInput:y.Z,DButton:N.Z},data(){return{username:"",password:"",errUsername:"",errPassword:""}},methods:{LoginSubmit(){""!==this.username?""!==this.password?this.$store.dispatch("Login",{username:this.username,password:this.password}).catch((e=>{if(401===e.status)throw this.errUsername=S,this.errPassword=S,"wrongLorP";throw e})).then((()=>{this.getPassStatus?G.push({name:"home"}):G.push({name:"profile"})})).catch((e=>{e!==S&&console.log(e)})):this.errPassword=I:this.errUsername=I}},computed:{...(0,C.Se)(["getPassStatus"])},watch:{username(){this.errUsername===S&&(this.errPassword=""),this.errUsername=""},password(){this.errPassword===S&&(this.errUsername=""),this.errPassword=""}}},D=r(89);const V=(0,D.Z)(k,[["render",P],["__scopeId","data-v-0e924928"]]);var L=V;const U={class:"profile"};function Z(e,t,r,s,o,a){const i=(0,n.up)("profile-info"),u=(0,n.up)("update-password");return(0,n.wg)(),(0,n.iD)("div",U,[(0,n.Wm)(i,{profile:a.profile,class:"profile__profile-info"},null,8,["profile"]),(0,n.Wm)(u,{class:"profile__update-pass"})])}const O=e=>((0,n.dD)("data-v-89973974"),e=e(),(0,n.Cn)(),e),R={class:"profile-info"},j=["src"],x=O((()=>(0,n._)("h2",{class:"profile-info__title"},"Профиль",-1))),M={class:"profile-info__table"};function E(e,t,r,s,o,a){return(0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("img",{class:"profile-info__avatar",src:r.profile.ava},null,8,j),x,(0,n._)("div",M,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.profile.info,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:"profile__table-row"},[(0,n._)("span",null,(0,i.zw)(t)+": ",1),(0,n._)("span",null,(0,i.zw)(e),1)])))),128))])])])}var T={name:"ProfileInfo",props:{profile:Object}};const W=(0,D.Z)(T,[["render",E],["__scopeId","data-v-89973974"]]);var A=W,$=r(8994),B={name:"ProfileView",components:{ProfileInfo:A,UpdatePassword:$.Z},computed:{...(0,C.Se)(["getRole","fullName","getCourse","getGroupCode"]),profile(){return"student"===this.getRole?{ava:r(8324),info:{"Имя":this.fullName,"Курс":this.getCourse,"Группа":this.getGroupCode}}:"supervisor"===this.getRole?{ava:r(5309),info:{"Имя":this.fullName}}:{}}}};const H=(0,D.Z)(B,[["render",Z],["__scopeId","data-v-00a45ee5"]]);var K=H;const z=[{path:"/",name:"home",component:()=>r.e(28).then(r.bind(r,28))},{path:"/login",name:"login",component:L},{path:"/profile",name:"profile",component:K}],F=(0,g.p7)({history:(0,g.PO)("/"),routes:z});var G=F,q={name:"NavBar",data(){return{menu:!1}},methods:{Home(){G.push("/")},Profile(){G.push("/profile")},Menu(){this.menu=!this.menu},CloseMenu(){this.menu=!1},Logout(){this.$store.dispatch("Logout").then((()=>{G.push("/login")})).catch((e=>{console.log("logout"),console.log(e),G.push("/login")}))}},computed:{...(0,C.Se)(["shortName"])},mounted(){let e=this;document.addEventListener("click",(function(t){t.target!==e.$refs["navbar-menu"]&&e.CloseMenu()}))}};const Y=(0,D.Z)(q,[["render",f],["__scopeId","data-v-4c8131ec"]]);var J=Y,Q={components:{NavBar:J},computed:(0,C.Se)(["getLoggedIn"]),created(){this.$store.loggedIn?this.$store.pass_status||G.push({name:"profile"}):this.$store.dispatch("GetUser").then((()=>{this.getPassStatus?G.push({name:"home"}):G.push({name:"profile"})})).catch((e=>{console.log(e),G.push({name:"login"})}))}};const X=(0,D.Z)(Q,[["render",a]]);var ee=X,te=r(6265),re=r.n(te);const se=re().create({baseURL:"https://bmstu.site/api/v1/",withCredentials:!0,headers:{accept:"application/json"}});var ne=se;function oe(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{login(r){return t(),e.post("user/login",r)},logout(){return e.get("user/logout")},updatePass(t){return e.put("user/login",t)},getUser(){return e.get("user")}}}var ae={auth:oe(ne)},ie={state:{loggedIn:!1,role:"",pass_status:!1},getters:{getLoggedIn(e){return e.loggedIn},getRole(e){return e.role},getPassStatus(e){return e.pass_status}},mutations:{login(e){e.loggedIn=!0},logout(e){e.loggedIn=!1,e.pass_status="",e.role=""},setRole(e,t){e.role=t},setPassStatus(e,t){e.pass_status=t}},actions:{async Login(e,{username:t,password:r}){return ae.auth.login({email:t,password:r}).then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setRole",t.data.is_super?"supervisor":"student"),e.commit("setPassStatus",t.data.pass_status),e.commit("setStudent",{id:t.data.id,fName:t.data.firstname,mName:t.data.middleName,lName:t.data.lastname,username:t.data.email,groupID:t.data.groupID,groupCode:t.data.groupCode})})).catch((()=>{if("admin"!==t)throw"resp";e.commit("login"),e.commit("setRole","student"),e.commit("setPassStatus",!0)}))},async Logout(e){return ae.auth.logout().then((t=>{if(200!==t.status)throw t;e.commit("logout"),e.commit("clearStudent")}))},async GetUser(e){return ae.auth.getUser().then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setRole",t.data.is_super?"supervisor":"student"),e.commit("setPassStatus",t.data.pass_status),e.commit("setStudent",{id:t.data.id,fName:t.data.firstname,mName:t.data.middleName,lName:t.data.lastname,username:t.data.email,groupID:t.data.groupID,groupCode:t.data.groupCode})}))}}},ue={state:{id:0,fName:"Vladimir",mName:"Igorevich",lName:"Lunkin",username:"",groupID:"",groupCode:"ИУ5-35Б",courses:[]},getters:{fullName(e){return e.fName+" "+e.mName+" "+e.lName},shortName(e){return e.fName.length<1||e.mName.length<1||e.lName.length<1?"":e.lName+" "+e.fName[0]+". "+e.mName[0]+"."},getCourse(e){let t=e.groupCode;if(!t.length||t.length<1)return"";let r=0;while(r<t.length-1){if("-"===t[r])return(parseInt(t[r+1],10)+1)/2|0;r++}return"a"},getGroupCode(e){return e.groupCode}},mutations:{setStudent(e,t){e.id=t.id,e.fName=t.fName,e.mName=t.mName,e.lName=t.lName},clearStudent(e){e.id=0,e.fName="",e.mName="",e.lName="",e.username="",e.groupID="",e.groupCode="",e.courses=[]}},actions:{}},le=(0,C.MT)({modules:{user:ie,student:ue}}),de={install:e=>{e.config.globalProperties.$api=ae}};(0,s.ri)(ee).use(de).use(le).use(G).mount("#app")},8994:function(e,t,r){r.d(t,{Z:function(){return _}});var s=r(3396);const n=e=>((0,s.dD)("data-v-52e5a784"),e=e(),(0,s.Cn)(),e),o={class:"update-pass"},a=n((()=>(0,s._)("h2",{class:"update-pass__title"},"Смена пароля",-1))),i=(0,s.Uk)("Сохранить");function u(e,t,n,u,l,d){const c=(0,s.up)("i-input"),p=(0,s.up)("d-button");return(0,s.wg)(),(0,s.iD)("div",o,[a,(0,s.Wm)(c,{icon:r(5386),modelValue:l.password,"onUpdate:modelValue":t[0]||(t[0]=e=>l.password=e),plhl:"Пароль",type:"password","error-msg":l.errPass,class:"update-pass__password"},null,8,["icon","modelValue","error-msg"]),(0,s.Wm)(c,{icon:r(5386),modelValue:l.newPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>l.newPassword=e),plhl:"Новый пароль",type:"password","error-msg":l.errNewPass,class:"update-pass__new-password"},null,8,["icon","modelValue","error-msg"]),(0,s.Wm)(c,{icon:r(5386),modelValue:l.repPassword,"onUpdate:modelValue":t[2]||(t[2]=e=>l.repPassword=e),plhl:"Повторите пароль",type:"password","error-msg":l.errRepPass,class:"update-pass__repeat-password"},null,8,["icon","modelValue","error-msg"]),(0,s.Wm)(p,{onClick:d.Save,class:"update-pass__button"},{default:(0,s.w5)((()=>[i])),_:1},8,["onClick"])])}var l=r(4086),d=r(2151);const c=new RegExp("[a-zA-Z0-9].{5,20}"),p="заполните поле",m="слишком простой пароль",f="неверный пароль";var g={name:"UpdatePassword",data(){return{password:"",newPassword:"",repPassword:"",errPass:"",errNewPass:"",errRepPass:""}},methods:{Save(){if(""!==this.password)if(""!==this.newPassword)if(c.test(this.newPassword)){if(""!==this.repPassword)return this.newPassword!==this.repPassword?(this.errNewPass="пароли не совпадают",void(this.errRepPass="пароли не совпадают")):(this.$api.auth.updatePass({password:this.newPassword}).catch((()=>{this.errPass=f})),!0);this.errRepPass=p}else this.errNewPass=m;else this.errNewPass=p;else this.errPass=p}},watch:{password(){this.errPass=""},newPassword(){this.errNewPass="",this.errRepPass=""},repPassword(){this.errNewPass="",this.errRepPass=""}},components:{IInput:l.Z,DButton:d.Z}},h=r(89);const v=(0,h.Z)(g,[["render",u],["__scopeId","data-v-52e5a784"]]);var _=v},2151:function(e,t,r){r.d(t,{Z:function(){return l}});var s=r(3396);const n={class:"d-button"};function o(e,t,r,o,a,i){return(0,s.wg)(),(0,s.iD)("button",n,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var a={name:"DButton",props:{name:String}},i=r(89);const u=(0,i.Z)(a,[["render",o],["__scopeId","data-v-643c1178"]]);var l=u},4086:function(e,t,r){r.d(t,{Z:function(){return f}});var s=r(3396),n=r(7139),o=r(9242);const a={class:"i-input"},i=["src"],u=["placeholder","type"],l={class:"i-input__error-text"};function d(e,t,r,d,c,p){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",{class:(0,n.C_)(["i-input__field",p.ValidationClass])},[(0,s._)("img",{src:r.icon,alt:"icon",class:"i-input__icon"},null,8,i),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e),placeholder:r.plhl,type:r.type,class:"i-input__input"},null,8,u),[[o.YZ,p.value]])],2),(0,s._)("span",l,(0,n.zw)(r.errorMsg),1)])}var c={name:"IInput",props:{icon:String,modelValue:String,plhl:String,type:String,errorMsg:{type:String,default:""}},emits:["update:modelValue"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ValidationClass(){return""===this.errorMsg?"":"i-input__field_error"}}},p=r(89);const m=(0,p.Z)(c,[["render",d],["__scopeId","data-v-3db3c500"]]);var f=m},5674:function(e,t,r){e.exports=r.p+"img/menu.8166e461.svg"},5386:function(e,t,r){e.exports=r.p+"img/password.478f5e34.svg"},1816:function(e,t,r){e.exports=r.p+"img/user.57b0ae03.svg"},9574:function(e,t,r){e.exports=r.p+"img/logo.9a6ea637.svg"},8324:function(e,t,r){e.exports=r.p+"img/student.6d558c89.svg"},5309:function(e,t,r){e.exports=r.p+"img/supervisor.f4872d84.svg"}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,o){if(!s){var a=1/0;for(d=0;d<e.length;d++){s=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,u=0;u<s.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](s[u])}))?s.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,s){return r.f[s](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".3ddf07b7.js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".7b846783.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dashb_bmstu:";r.l=function(s,n,o,a){if(e[s])e[s].push(n);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==s||c.getAttribute("data-webpack")==t+o){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=s),e[s]=[n];var p=function(t,r){i.onerror=i.onload=null,clearTimeout(m);var n=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,s){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,n.parentNode.removeChild(n),s(u)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var n=r[s],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var a=document.getElementsByTagName("style");for(s=0;s<a.length;s++){n=a[s],o=n.getAttribute("data-href");if(o===e||o===t)return n}},s=function(s){return new Promise((function(n,o){var a=r.miniCssF(s),i=r.p+a;if(t(a,i))return n();e(s,i,n,o)}))},n={143:0};r.f.miniCss=function(e,t){var r={28:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=s(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,s){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)s.push(n[2]);else{var o=new Promise((function(r,s){n=e[t]=[r,s]}));s.push(n[2]=o);var a=r.p+r.u(t),i=new Error,u=function(s){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}};r.l(a,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,a=s[0],i=s[1],u=s[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(u)var d=u(r)}for(t&&t(s);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},s=self["webpackChunkdashb_bmstu"]=self["webpackChunkdashb_bmstu"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(2401)}));s=r.O(s)})();
//# sourceMappingURL=app.d161aeb6.js.map