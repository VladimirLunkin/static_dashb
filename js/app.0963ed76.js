(function(){"use strict";var e={7108:function(e,t,r){var n=r(9242),s=r(3396);const o={class:"my-container"};function a(e,t,r,n,a,i){const u=(0,s.up)("nav-bar"),l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e.getLoggedIn?((0,s.wg)(),(0,s.j4)(u,{key:0,class:""})):(0,s.kq)("",!0),(0,s._)("div",o,[(0,s.Wm)(l)])],64)}var i=r(7139);const u={class:"navbar"},l=["src"],c={class:"navbar__home"},d={class:"navbar__user"},p=["src"],m={class:"navbar__menu"};function f(e,t,o,a,f,g){return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("img",{src:r(9574),class:"navbar__logo"},null,8,l),(0,s._)("div",c,[(0,s._)("span",{onClick:t[0]||(t[0]=(...e)=>g.Home&&g.Home(...e)),class:"navbar__home-title"},"DashboardBMSTU")]),(0,s._)("div",d,[(0,s._)("h3",{onClick:t[1]||(t[1]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-user_circle n__u-t"},(0,i.zw)(e.shortName),1)]),(0,s._)("img",{onClick:t[2]||(t[2]=(...e)=>g.Menu&&g.Menu(...e)),src:r(5674),class:"navbar__icon-menu",alt:"",ref:"navbar-menu"},null,8,p),(0,s.wy)((0,s._)("div",m,[(0,s._)("span",{onClick:t[3]||(t[3]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-settings navbar__menu-item"}," Настройки "),(0,s._)("span",{onClick:t[4]||(t[4]=(...e)=>g.Logout&&g.Logout(...e)),class:"icon-logout navbar__menu-item"}," Выйти")],512),[[n.F8,f.menu]])])}var g=r(678);const h=e=>((0,s.dD)("data-v-fcf58aaa"),e=e(),(0,s.Cn)(),e),v={class:"login-page"},_={class:"login-form"},w=h((()=>(0,s._)("h2",{class:"login-form__title"},"Вход",-1))),b=(0,s.Uk)("Войти");function P(e,t,o,a,i,u){const l=(0,s.up)("i-input"),c=(0,s.up)("d-button");return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("div",_,[w,(0,s.Wm)(l,{onKeyup:(0,n.D2)(u.LoginSubmit,["enter"]),icon:r(1816),modelValue:i.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),modelModifiers:{trim:!0},plhl:"Имя пользователя","error-msg":i.errUsername,class:"login-form__username"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,s.Wm)(l,{onKeyup:(0,n.D2)(u.LoginSubmit,["enter"]),icon:r(5386),modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),plhl:"Пароль",type:"password","error-msg":i.errPassword,class:"login-form__password",ref:"passs"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,s.Wm)(c,{onClick:u.LoginSubmit,class:"login-form__button"},{default:(0,s.w5)((()=>[b])),_:1},8,["onClick"])])])}var y=r(4086),C=r(2151);const N="неверный логин или пароль",k="заполните поле";var I={name:"LoginView",components:{IInput:y.Z,DButton:C.Z},data(){return{username:"",password:"",errUsername:"",errPassword:""}},methods:{LoginSubmit(){""!==this.username?""!==this.password?this.$store.dispatch("Login",{username:this.username,password:this.password}).catch((()=>{throw this.errUsername=N,this.errPassword=N,"wrongLorP"})).then((()=>{q.push({name:"profile"})})).catch((e=>{e!==N&&console.log(e)})):this.errPassword=k:this.errUsername=k}},watch:{username(){this.errUsername===N&&(this.errPassword=""),this.errUsername=""},password(){this.errPassword===N&&(this.errUsername=""),this.errPassword=""}}},S=r(89);const V=(0,S.Z)(I,[["render",P],["__scopeId","data-v-fcf58aaa"]]);var D=V;const L={class:"profile"};function U(e,t,r,n,o,a){const i=(0,s.up)("profile-info"),u=(0,s.up)("update-password");return(0,s.wg)(),(0,s.iD)("div",L,[(0,s.Wm)(i,{profile:a.profile,class:"profile__profile-info"},null,8,["profile"]),(0,s.Wm)(u,{class:"profile__update-pass"})])}const Z=e=>((0,s.dD)("data-v-89973974"),e=e(),(0,s.Cn)(),e),O={class:"profile-info"},j=["src"],R=Z((()=>(0,s._)("h2",{class:"profile-info__title"},"Профиль",-1))),x={class:"profile-info__table"};function M(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("img",{class:"profile-info__avatar",src:r.profile.ava},null,8,j),R,(0,s._)("div",x,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.profile.info,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t,class:"profile__table-row"},[(0,s._)("span",null,(0,i.zw)(t)+": ",1),(0,s._)("span",null,(0,i.zw)(e),1)])))),128))])])])}var E={name:"ProfileInfo",props:{profile:Object}};const T=(0,S.Z)(E,[["render",M],["__scopeId","data-v-89973974"]]);var W=T,A=r(8994),B=r(65),$={name:"ProfileView",components:{ProfileInfo:W,UpdatePassword:A.Z},computed:{...(0,B.Se)(["getRole","fullName","getCourse","getGroupCode"]),profile(){return"student"===this.getRole?{ava:r(8324),info:{"Имя":this.fullName,"Курс":this.getCourse,"Группа":this.getGroupCode}}:"supervisor"===this.getRole?{ava:r(5309),info:{"Имя":this.fullName}}:{}}}};const H=(0,S.Z)($,[["render",U],["__scopeId","data-v-00a45ee5"]]);var K=H;const z=[{path:"/",name:"home",component:()=>r.e(28).then(r.bind(r,28))},{path:"/login",name:"login",component:D},{path:"/profile",name:"profile",component:K}],F=(0,g.p7)({history:(0,g.PO)("/"),routes:z});var q=F,G={name:"NavBar",data(){return{menu:!1}},methods:{Home(){q.push("/")},Profile(){q.push("/profile")},Menu(){this.menu=!this.menu},CloseMenu(){this.menu=!1},Logout(){q.push("/login")}},computed:{...(0,B.Se)(["shortName"])},mounted(){let e=this;document.addEventListener("click",(function(t){t.target!==e.$refs["navbar-menu"]&&e.CloseMenu()}))}};const Y=(0,S.Z)(G,[["render",f],["__scopeId","data-v-e0e7d7e4"]]);var J=Y,Q={components:{NavBar:J},computed:(0,B.Se)(["getLoggedIn"]),created(){this.$store.loggedIn?this.$store.pass_status||q.push({name:"profile"}):q.push({name:"login"})}};const X=(0,S.Z)(Q,[["render",a]]);var ee=X,te=r(6265),re=r.n(te);const ne=re().create({baseURL:"https://bmstu.site/api/v1/",withCredentials:!0,headers:{accept:"application/json"}});var se=ne;function oe(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{login(r){return t(),e.post("user/login",r)},logout(){return e.get("user/logout")},updatePass(t){return e.put("user/login",t)}}}var ae={auth:oe(se)},ie={state:{loggedIn:!1,role:"",pass_status:""},getters:{getLoggedIn(e){return e.loggedIn},getRole(e){return e.role}},mutations:{login(e){e.loggedIn=!0},logout(e){e.loggedIn=!1},setRole(e,t){e.role=t},setPassStatus(e,t){e.pass_status=t}},actions:{async Login(e,{username:t,password:r}){return ae.auth.login({email:t,password:r}).then((t=>{if(console.log(t),200!==t.status)throw t;e.commit("login"),e.commit("setRole",t.data.role),e.commit("setPassStatus",t.data.pass_status)})).catch((()=>{if("admin"!==t)throw"resp";e.commit("login"),e.commit("setRole","student"),e.commit("setPassStatus",!1)}))}}},ue={state:{id:0,fName:"Vladimir",mName:"Igorevich",lName:"Lunkin",username:"",groupID:"",groupCode:"ИУ5-35Б",courses:[]},getters:{fullName(e){return e.fName+" "+e.mName+" "+e.lName},shortName(e){return e.fName.length<1||e.mName.length<1||e.lName.length<1?"":e.lName+" "+e.fName[0]+". "+e.mName[0]+"."},getCourse(e){let t=e.groupCode;if(!t.length||t.length<1)return"";let r=0;while(r<t.length-1){if("-"===t[r])return(parseInt(t[r+1],10)+1)/2|0;r++}return"a"},getGroupCode(e){return e.groupCode}},mutations:{},actions:{}},le=(0,B.MT)({modules:{user:ie,student:ue}}),ce={install:e=>{e.config.globalProperties.$api=ae}};(0,n.ri)(ee).use(ce).use(le).use(q).mount("#app")},8994:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(3396);const s=e=>((0,n.dD)("data-v-52e5a784"),e=e(),(0,n.Cn)(),e),o={class:"update-pass"},a=s((()=>(0,n._)("h2",{class:"update-pass__title"},"Смена пароля",-1))),i=(0,n.Uk)("Сохранить");function u(e,t,s,u,l,c){const d=(0,n.up)("i-input"),p=(0,n.up)("d-button");return(0,n.wg)(),(0,n.iD)("div",o,[a,(0,n.Wm)(d,{icon:r(5386),modelValue:l.password,"onUpdate:modelValue":t[0]||(t[0]=e=>l.password=e),plhl:"Пароль",type:"password","error-msg":l.errPass,class:"update-pass__password"},null,8,["icon","modelValue","error-msg"]),(0,n.Wm)(d,{icon:r(5386),modelValue:l.newPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>l.newPassword=e),plhl:"Новый пароль",type:"password","error-msg":l.errNewPass,class:"update-pass__new-password"},null,8,["icon","modelValue","error-msg"]),(0,n.Wm)(d,{icon:r(5386),modelValue:l.repPassword,"onUpdate:modelValue":t[2]||(t[2]=e=>l.repPassword=e),plhl:"Повторите пароль",type:"password","error-msg":l.errRepPass,class:"update-pass__repeat-password"},null,8,["icon","modelValue","error-msg"]),(0,n.Wm)(p,{onClick:c.Save,class:"update-pass__button"},{default:(0,n.w5)((()=>[i])),_:1},8,["onClick"])])}var l=r(4086),c=r(2151);const d=new RegExp("[a-zA-Z0-9].{5,20}"),p="заполните поле",m="слишком простой пароль",f="неверный пароль";var g={name:"UpdatePassword",data(){return{password:"",newPassword:"",repPassword:"",errPass:"",errNewPass:"",errRepPass:""}},methods:{Save(){if(""!==this.password)if(""!==this.newPassword)if(d.test(this.newPassword)){if(""!==this.repPassword)return this.newPassword!==this.repPassword?(this.errNewPass="пароли не совпадают",void(this.errRepPass="пароли не совпадают")):(this.$api.auth.updatePass({password:this.newPassword}).catch((()=>{this.errPass=f})),!0);this.errRepPass=p}else this.errNewPass=m;else this.errNewPass=p;else this.errPass=p}},watch:{password(){this.errPass=""},newPassword(){this.errNewPass="",this.errRepPass=""},repPassword(){this.errNewPass="",this.errRepPass=""}},components:{IInput:l.Z,DButton:c.Z}},h=r(89);const v=(0,h.Z)(g,[["render",u],["__scopeId","data-v-52e5a784"]]);var _=v},2151:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(3396);const s={class:"d-button"};function o(e,t,r,o,a,i){return(0,n.wg)(),(0,n.iD)("button",s,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var a={name:"DButton",props:{name:String}},i=r(89);const u=(0,i.Z)(a,[["render",o],["__scopeId","data-v-643c1178"]]);var l=u},4086:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(3396),s=r(7139),o=r(9242);const a={class:"i-input"},i=["src"],u=["placeholder","type"],l={class:"i-input__error-text"};function c(e,t,r,c,d,p){return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",{class:(0,s.C_)(["i-input__field",p.ValidationClass])},[(0,n._)("img",{src:r.icon,alt:"icon",class:"i-input__icon"},null,8,i),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e),placeholder:r.plhl,type:r.type,class:"i-input__input"},null,8,u),[[o.YZ,p.value]])],2),(0,n._)("span",l,(0,s.zw)(r.errorMsg),1)])}var d={name:"IInput",props:{icon:String,modelValue:String,plhl:String,type:String,errorMsg:{type:String,default:""}},emits:["update:modelValue"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ValidationClass(){return""===this.errorMsg?"":"i-input__field_error"}}},p=r(89);const m=(0,p.Z)(d,[["render",c],["__scopeId","data-v-3db3c500"]]);var f=m},5674:function(e,t,r){e.exports=r.p+"img/menu.8166e461.svg"},5386:function(e,t,r){e.exports=r.p+"img/password.478f5e34.svg"},1816:function(e,t,r){e.exports=r.p+"img/user.57b0ae03.svg"},9574:function(e,t,r){e.exports=r.p+"img/logo.9a6ea637.svg"},8324:function(e,t,r){e.exports=r.p+"img/student.6d558c89.svg"},5309:function(e,t,r){e.exports=r.p+"img/supervisor.f4872d84.svg"}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],o=e[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,s,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".3ddf07b7.js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".7b846783.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="dashb_bmstu:";r.l=function(n,s,o,a){if(e[n])e[n].push(s);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[s];var p=function(t,r){i.onerror=i.onload=null,clearTimeout(m);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(o){if(s.onerror=s.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,s.parentNode.removeChild(s),n(u)}};return s.onerror=s.onload=o,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var s=r[n],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){s=a[n],o=s.getAttribute("data-href");if(o===e||o===t)return s}},n=function(n){return new Promise((function(s,o){var a=r.miniCssF(n),i=r.p+a;if(t(a,i))return s();e(n,i,s,o)}))},s={143:0};r.f.miniCss=function(e,t){var r={28:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise((function(r,n){s=e[t]=[r,n]}));n.push(s[2]=o);var a=r.p+r.u(t),i=new Error,u=function(n){if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,s[1](i)}};r.l(a,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,a=n[0],i=n[1],u=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(u)var c=u(r)}for(t&&t(n);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self["webpackChunkdashb_bmstu"]=self["webpackChunkdashb_bmstu"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7108)}));n=r.O(n)})();
//# sourceMappingURL=app.0963ed76.js.map