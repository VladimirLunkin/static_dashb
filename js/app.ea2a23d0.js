(function(){"use strict";var e={991:function(e,t,s){var r=s(9242),o=s(3396);const n={class:"my-container"};function a(e,t,s,r,a,i){const u=(0,o.up)("nav-bar"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.getLoggedIn?((0,o.wg)(),(0,o.j4)(u,{key:0,class:""})):(0,o.kq)("",!0),(0,o._)("div",n,[(0,o.Wm)(l)])],64)}var i=s(7139);const u={class:"navbar"},l=["src"],d={class:"navbar__home"},c={class:"navbar__user"},p=["src"],m={class:"navbar__menu"};function f(e,t,n,a,f,g){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("img",{src:s(9574),class:"navbar__logo"},null,8,l),(0,o._)("div",d,[(0,o._)("span",{onClick:t[0]||(t[0]=(...e)=>g.Home&&g.Home(...e)),class:"navbar__home-title"},"DashboardBMSTU")]),(0,o._)("div",c,[(0,o._)("h3",{onClick:t[1]||(t[1]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-user_circle n__u-t"},(0,i.zw)(e.shortName),1)]),(0,o._)("img",{onClick:t[2]||(t[2]=(...e)=>g.Menu&&g.Menu(...e)),src:s(5674),class:"navbar__icon-menu",alt:"",ref:"navbar-menu"},null,8,p),(0,o.wy)((0,o._)("div",m,[(0,o._)("span",{onClick:t[3]||(t[3]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-settings navbar__menu-item"}," Настройки "),(0,o._)("span",{onClick:t[4]||(t[4]=(...e)=>g.Logout&&g.Logout(...e)),class:"icon-logout navbar__menu-item"}," Выйти")],512),[[r.F8,f.menu]])])}var g=s(678);const h=e=>((0,o.dD)("data-v-0e924928"),e=e(),(0,o.Cn)(),e),v={class:"login-page"},_={class:"login-form"},w=h((()=>(0,o._)("h2",{class:"login-form__title"},"Вход",-1))),b=(0,o.Uk)("Войти");function P(e,t,n,a,i,u){const l=(0,o.up)("i-input"),d=(0,o.up)("d-button");return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",_,[w,(0,o.Wm)(l,{onKeyup:(0,r.D2)(u.LoginSubmit,["enter"]),icon:s(1816),modelValue:i.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),modelModifiers:{trim:!0},plhl:"Имя пользователя","error-msg":i.errUsername,class:"login-form__username"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,o.Wm)(l,{onKeyup:(0,r.D2)(u.LoginSubmit,["enter"]),icon:s(5386),modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),plhl:"Пароль",type:"password","error-msg":i.errPassword,class:"login-form__password",ref:"passs"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,o.Wm)(d,{onClick:u.LoginSubmit,class:"login-form__button"},{default:(0,o.w5)((()=>[b])),_:1},8,["onClick"])])])}const y={class:"i-input"},N=["src"],C=["placeholder","type"],S={class:"i-input__error-text"};function I(e,t,s,n,a,u){return(0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",{class:(0,i.C_)(["i-input__field",u.ValidationClass])},[(0,o._)("img",{src:s.icon,alt:"icon",class:"i-input__icon"},null,8,N),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),placeholder:s.plhl,type:s.type,class:"i-input__input"},null,8,C),[[r.YZ,u.value]])],2),(0,o._)("span",S,(0,i.zw)(s.errorMsg),1)])}var k={name:"IInput",props:{icon:String,modelValue:String,plhl:String,type:String,errorMsg:{type:String,default:""}},emits:["update:modelValue"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ValidationClass(){return""===this.errorMsg?"":"i-input__field_error"}}},D=s(89);const V=(0,D.Z)(k,[["render",I],["__scopeId","data-v-3db3c500"]]);var L=V;const U={class:"d-button"};function O(e,t,s,r,n,a){return(0,o.wg)(),(0,o.iD)("button",U,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var R={name:"DButton",props:{name:String}};const j=(0,D.Z)(R,[["render",O],["__scopeId","data-v-643c1178"]]);var x=j,M=s(65);const E="неверный логин или пароль",T="заполните поле";var W={name:"LoginView",components:{IInput:L,DButton:x},data(){return{username:"",password:"",errUsername:"",errPassword:""}},methods:{LoginSubmit(){""!==this.username?""!==this.password?this.$store.dispatch("Login",{username:this.username,password:this.password}).catch((e=>{if(401===e.status)throw this.errUsername=E,this.errPassword=E,"wrongLorP";throw e})).then((()=>{this.getPassStatus?he.push({name:"home"}):he.push({name:"profile"})})).catch((e=>{e!==E&&console.log(e)})):this.errPassword=T:this.errUsername=T}},computed:{...(0,M.Se)(["getPassStatus"])},watch:{username(){this.errUsername===E&&(this.errPassword=""),this.errUsername=""},password(){this.errPassword===E&&(this.errUsername=""),this.errPassword=""}}};const A=(0,D.Z)(W,[["render",P],["__scopeId","data-v-0e924928"]]);var Z=A;const $={class:"profile"};function B(e,t,s,r,n,a){const i=(0,o.up)("profile-info"),u=(0,o.up)("update-password");return(0,o.wg)(),(0,o.iD)("div",$,[(0,o.Wm)(i,{profile:a.profile,class:"profile__profile-info"},null,8,["profile"]),(0,o.Wm)(u,{class:"profile__update-pass"})])}const H=e=>((0,o.dD)("data-v-89973974"),e=e(),(0,o.Cn)(),e),K={class:"profile-info"},z=["src"],F=H((()=>(0,o._)("h2",{class:"profile-info__title"},"Профиль",-1))),G={class:"profile-info__table"};function q(e,t,s,r,n,a){return(0,o.wg)(),(0,o.iD)("div",K,[(0,o._)("img",{class:"profile-info__avatar",src:s.profile.ava},null,8,z),F,(0,o._)("div",G,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.profile.info,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:"profile__table-row"},[(0,o._)("span",null,(0,i.zw)(t)+": ",1),(0,o._)("span",null,(0,i.zw)(e),1)])))),128))])])])}var Y={name:"ProfileInfo",props:{profile:Object}};const J=(0,D.Z)(Y,[["render",q],["__scopeId","data-v-89973974"]]);var Q=J;const X=e=>((0,o.dD)("data-v-01a23382"),e=e(),(0,o.Cn)(),e),ee={class:"update-pass"},te=X((()=>(0,o._)("h2",{class:"update-pass__title"},"Смена пароля",-1))),se=(0,o.Uk)("Сохранить");function re(e,t,r,n,a,i){const u=(0,o.up)("i-input"),l=(0,o.up)("d-button");return(0,o.wg)(),(0,o.iD)("div",ee,[te,(0,o.Wm)(u,{icon:s(5386),modelValue:a.password,"onUpdate:modelValue":t[0]||(t[0]=e=>a.password=e),plhl:"Пароль",type:"password","error-msg":a.errPass,class:"update-pass__password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(u,{icon:s(5386),modelValue:a.newPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>a.newPassword=e),plhl:"Новый пароль",type:"password","error-msg":a.errNewPass,class:"update-pass__new-password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(u,{icon:s(5386),modelValue:a.repPassword,"onUpdate:modelValue":t[2]||(t[2]=e=>a.repPassword=e),plhl:"Повторите пароль",type:"password","error-msg":a.errRepPass,class:"update-pass__repeat-password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(l,{onClick:i.Save,class:"update-pass__button"},{default:(0,o.w5)((()=>[se])),_:1},8,["onClick"])])}const oe=new RegExp("[a-zA-Z0-9].{5,20}"),ne="заполните поле",ae="слишком простой пароль",ie="неверный пароль";var ue={name:"UpdatePassword",data(){return{password:"",newPassword:"",repPassword:"",errPass:"",errNewPass:"",errRepPass:""}},methods:{Save(){if(""!==this.password)if(""!==this.newPassword)if(oe.test(this.newPassword)){if(""!==this.repPassword)return this.newPassword!==this.repPassword?(this.errNewPass="пароли не совпадают",void(this.errRepPass="пароли не совпадают")):(this.$api.auth.updatePass({new_pass:this.newPassword,old_pass:this.password}).then((e=>{if(200!==e.status)throw e;he.push({name:"home"})})).catch((()=>{this.errPass=ie})),!0);this.errRepPass=ne}else this.errNewPass=ae;else this.errNewPass=ne;else this.errPass=ne}},watch:{password(){this.errPass=""},newPassword(){this.errNewPass="",this.errRepPass=""},repPassword(){this.errNewPass="",this.errRepPass=""}},components:{IInput:L,DButton:x}};const le=(0,D.Z)(ue,[["render",re],["__scopeId","data-v-01a23382"]]);var de=le,ce={name:"ProfileView",components:{ProfileInfo:Q,UpdatePassword:de},computed:{...(0,M.Se)(["getRole","fullName","getCourse","getGroupCode"]),profile(){return"student"===this.getRole?{ava:s(8324),info:{"Имя":this.fullName,"Курс":this.getCourse,"Группа":this.getGroupCode}}:"supervisor"===this.getRole?{ava:s(5309),info:{"Имя":this.fullName}}:{}}}};const pe=(0,D.Z)(ce,[["render",B],["__scopeId","data-v-00a45ee5"]]);var me=pe;const fe=[{path:"/",name:"home",component:()=>s.e(779).then(s.bind(s,2779))},{path:"/login",name:"login",component:Z},{path:"/profile",name:"profile",component:me}],ge=(0,g.p7)({history:(0,g.PO)("/"),routes:fe});var he=ge,ve={name:"NavBar",data(){return{menu:!1}},methods:{Home(){he.push("/")},Profile(){he.push("/profile")},Menu(){this.menu=!this.menu},CloseMenu(){this.menu=!1},Logout(){this.$store.dispatch("Logout").then((()=>{he.push("/login")})).catch((e=>{console.log("logout"),console.log(e),he.push("/login")}))}},computed:{...(0,M.Se)(["shortName"])},mounted(){let e=this;document.addEventListener("click",(function(t){t.target!==e.$refs["navbar-menu"]&&e.CloseMenu()}))}};const _e=(0,D.Z)(ve,[["render",f],["__scopeId","data-v-4c8131ec"]]);var we=_e,be={components:{NavBar:we},computed:(0,M.Se)(["getLoggedIn"]),created(){this.$store.loggedIn?this.$store.pass_status||he.push({name:"profile"}):this.$store.dispatch("GetUser").then((()=>{this.getPassStatus?he.push({name:"home"}):he.push({name:"profile"})})).catch((e=>{console.log(e),he.push({name:"login"})}))}};const Pe=(0,D.Z)(be,[["render",a]]);var ye=Pe,Ne=s(6265),Ce=s.n(Ne);const Se=Ce().create({baseURL:"http://localhost:8001/api/v1/",withCredentials:!0,headers:{accept:"application/json"}});var Ie=Se;function ke(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{login(s){return t(),e.post("user/login",s)},logout(){return e.get("user/logout")},updatePass(t){return e.put("user/login",t)},getUser(){return e.get("user")}}}var De={auth:ke(Ie)},Ve={state:{loggedIn:!1,role:"",pass_status:!1},getters:{getLoggedIn(e){return e.loggedIn},getRole(e){return e.role},getPassStatus(e){return e.pass_status}},mutations:{login(e){e.loggedIn=!0},logout(e){e.loggedIn=!1,e.pass_status=!1,e.role=""},setRole(e,t){e.role=t},setPassStatus(e,t){e.pass_status=t}},actions:{async Login(e,{username:t,password:s}){return De.auth.login({email:t,password:s}).then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setRole",t.data.is_super?"supervisor":"student"),e.commit("setPassStatus",t.data.pass_status),e.commit("setStudent",{id:t.data.id,fName:t.data.firstname,mName:t.data.middleName,lName:t.data.lastname,username:t.data.email,groupID:t.data.groupID,groupCode:t.data.groupCode})})).catch((()=>{if("admin"!==t)throw"resp";e.commit("login"),e.commit("setRole","student"),e.commit("setPassStatus",!0)}))},async Logout(e){return e.commit("logout"),e.commit("clearStudent"),De.auth.logout().then((e=>{if(200!==e.status)throw e}))},async GetUser(e){return De.auth.getUser().then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setRole",t.data.is_super?"supervisor":"student"),e.commit("setPassStatus",t.data.pass_status),e.commit("setStudent",{id:t.data.id,fName:t.data.firstname,mName:t.data.middleName,lName:t.data.lastname,username:t.data.email,groupID:t.data.groupID,groupCode:t.data.groupCode})}))}}},Le={state:{id:0,fName:"Vladimir",mName:"Igorevich",lName:"Lunkin",username:"",groupID:"",groupCode:"ИУ5-35Б",courses:[]},getters:{fullName(e){return e.fName+" "+e.mName+" "+e.lName},shortName(e){return e.fName.length<1||e.mName.length<1||e.lName.length<1?"":e.lName+" "+e.fName[0]+". "+e.mName[0]+"."},getCourse(e){let t=e.groupCode;if(!t.length||t.length<1)return"";let s=0;while(s<t.length-1){if("-"===t[s])return(parseInt(t[s+1],10)+1)/2|0;s++}return"a"},getGroupCode(e){return e.groupCode}},mutations:{setStudent(e,t){e.id=t.id,e.fName=t.fName,e.mName=t.mName,e.lName=t.lName},clearStudent(e){e.id=0,e.fName="",e.mName="",e.lName="",e.username="",e.groupID="",e.groupCode="",e.courses=[]}},actions:{}},Ue=(0,M.MT)({modules:{user:Ve,student:Le}}),Oe={install:e=>{e.config.globalProperties.$api=De}};(0,r.ri)(ye).use(Oe).use(Ue).use(he).mount("#app")},5674:function(e,t,s){e.exports=s.p+"img/menu.8166e461.svg"},5386:function(e,t,s){e.exports=s.p+"img/password.478f5e34.svg"},1816:function(e,t,s){e.exports=s.p+"img/user.57b0ae03.svg"},9574:function(e,t,s){e.exports=s.p+"img/logo.9a6ea637.svg"},8324:function(e,t,s){e.exports=s.p+"img/student.6d558c89.svg"},5309:function(e,t,s){e.exports=s.p+"img/supervisor.f4872d84.svg"}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,r,o,n){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],n=e[d][2];for(var i=!0,u=0;u<r.length;u++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](r[u])}))?r.splice(u--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))}}(),function(){s.u=function(e){return"js/"+e+".7f42fd0c.js"}}(),function(){s.miniCssF=function(e){return"css/"+e+".c9d588fc.css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dashb_bmstu:";s.l=function(r,o,n,a){if(e[r])e[r].push(o);else{var i,u;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+n){i=c;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",t+n),i.src=r),e[r]=[o];var p=function(t,s){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(s)})),t)return t(s)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var e=function(e,t,s,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=function(n){if(o.onerror=o.onload=null,"load"===n.type)s();else{var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=n,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var o=s[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===e||n===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],n=o.getAttribute("data-href");if(n===e||n===t)return o}},r=function(r){return new Promise((function(o,n){var a=s.miniCssF(r),i=s.p+a;if(t(a,i))return o();e(r,i,o,n)}))},o={143:0};s.f.miniCss=function(e,t){var s={779:1};o[e]?t.push(o[e]):0!==o[e]&&s[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};s.f.j=function(t,r){var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise((function(s,r){o=e[t]=[s,r]}));r.push(o[2]=n);var a=s.p+s.u(t),i=new Error,u=function(r){if(s.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}};s.l(a,u,"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,a=r[0],i=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(u)var d=u(s)}for(t&&t(r);l<a.length;l++)n=a[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=self["webpackChunkdashb_bmstu"]=self["webpackChunkdashb_bmstu"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(991)}));r=s.O(r)})();
//# sourceMappingURL=app.ea2a23d0.js.map