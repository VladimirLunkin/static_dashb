(function(){var e={1597:function(e,t,s){"use strict";var n=s(9242),o=s(3396);const r={class:"my-container"};function a(e,t,s,n,a,i){const u=(0,o.up)("nav-bar"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.getLoggedIn?((0,o.wg)(),(0,o.j4)(u,{key:0,class:""})):(0,o.kq)("",!0),(0,o._)("div",r,[(0,o.Wm)(l)])],64)}var i=s(7139);const u={class:"navbar"},l=["src"],d={class:"navbar__home"},c={class:"navbar__user"},m=["src"],p={class:"navbar__menu"};function v(e,t,r,a,v,g){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("img",{src:s(9574),class:"navbar__logo"},null,8,l),(0,o._)("div",d,[(0,o._)("span",{onClick:t[0]||(t[0]=(...e)=>g.Home&&g.Home(...e)),class:"navbar__home-title"},"DashboardBMSTU")]),(0,o._)("div",c,[(0,o._)("h3",{onClick:t[1]||(t[1]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-user_circle n__u-t"},(0,i.zw)(e.shortName),1)]),(0,o._)("img",{onClick:t[2]||(t[2]=(...e)=>g.Menu&&g.Menu(...e)),src:s(5674),class:"navbar__icon-menu",alt:"",ref:"navbar-menu"},null,8,m),(0,o.wy)((0,o._)("div",p,[(0,o._)("span",{onClick:t[3]||(t[3]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-settings navbar__menu-item"}," Настройки "),(0,o._)("span",{onClick:t[4]||(t[4]=(...e)=>g.Logout&&g.Logout(...e)),class:"icon-logout navbar__menu-item"}," Выйти")],512),[[n.F8,v.menu]])])}var g=s(678);const f=e=>((0,o.dD)("data-v-61cb2f1f"),e=e(),(0,o.Cn)(),e),h={class:"login-page"},_={class:"login-form"},w=f((()=>(0,o._)("h2",{class:"login-form__title"},"Вход",-1))),N=(0,o.Uk)("Войти");function I(e,t,r,a,i,u){const l=(0,o.up)("i-input"),d=(0,o.up)("d-button");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",_,[w,(0,o.Wm)(l,{onKeyup:(0,n.D2)(u.LoginSubmit,["enter"]),icon:s(1816),modelValue:i.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),modelModifiers:{trim:!0},plhl:"Имя пользователя","error-msg":i.errUsername,class:"login-form__username"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,o.Wm)(l,{onKeyup:(0,n.D2)(u.LoginSubmit,["enter"]),icon:s(5386),modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),plhl:"Пароль",type:"password","error-msg":i.errPassword,class:"login-form__password",ref:"passs"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,o.Wm)(d,{onClick:u.LoginSubmit,class:"login-form__button"},{default:(0,o.w5)((()=>[N])),_:1},8,["onClick"])])])}const b={class:"i-input"},S=["src"],C=["placeholder","type"],D={class:"i-input__error-text"};function k(e,t,s,r,a,u){return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",{class:(0,i.C_)(["i-input__field",u.ValidationClass])},[(0,o._)("img",{src:s.icon,alt:"icon",class:"i-input__icon"},null,8,S),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),placeholder:s.plhl,type:s.type,class:"i-input__input"},null,8,C),[[n.YZ,u.value]])],2),(0,o._)("span",D,(0,i.zw)(s.errorMsg),1)])}var y={name:"IInput",props:{icon:String,modelValue:String,plhl:String,type:String,errorMsg:{type:String,default:""}},emits:["update:modelValue"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ValidationClass(){return""===this.errorMsg?"":"i-input__field_error"}}},P=s(89);const U=(0,P.Z)(y,[["render",k],["__scopeId","data-v-3db3c500"]]);var E=U;const V={class:"d-button"};function F(e,t,s,n,r,a){return(0,o.wg)(),(0,o.iD)("button",V,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var x={name:"DButton",props:{name:String}};const O=(0,P.Z)(x,[["render",F],["__scopeId","data-v-643c1178"]]);var $=O,z=s(65);const M="неверный логин или пароль",L="заполните поле";var B={name:"LoginView",components:{IInput:E,DButton:$},data(){return{username:"",password:"",errUsername:"",errPassword:""}},methods:{LoginSubmit(){""!==this.username?""!==this.password?this.$store.dispatch("Login",{username:this.username,password:this.password}).then((()=>{this.$store.dispatch("Update"+this.getRole).then((()=>{this.getPassStatus?(this.isSupervisor&&Mt.push({name:"control"}),this.isStudent&&Mt.push({name:"progress"})):Mt.push({name:"profile"})})).catch((()=>{this.$store.dispatch("Logout"),Mt.push({name:"login"})}))})).catch((e=>{if(!e.status)throw e;console.log(e.status),401===e.status&&(this.errUsername=M,this.errPassword=M)})):this.errPassword=L:this.errUsername=L}},computed:{...(0,z.Se)(["getPassStatus","getRole","isSupervisor","isStudent"])},watch:{username(){this.errUsername===M&&(this.errPassword=""),this.errUsername=""},password(){this.errPassword===M&&(this.errUsername=""),this.errPassword=""}}};const K=(0,P.Z)(B,[["render",I],["__scopeId","data-v-61cb2f1f"]]);var T=K;const j={class:"profile"};function G(e,t,s,n,r,a){const i=(0,o.up)("profile-info"),u=(0,o.up)("update-password");return(0,o.wg)(),(0,o.iD)("div",j,[(0,o.Wm)(i,{profile:a.profile,class:"profile__profile-info"},null,8,["profile"]),(0,o.Wm)(u,{class:"profile__update-pass"})])}const Z=e=>((0,o.dD)("data-v-89973974"),e=e(),(0,o.Cn)(),e),H={class:"profile-info"},W=["src"],R=Z((()=>(0,o._)("h2",{class:"profile-info__title"},"Профиль",-1))),Y={class:"profile-info__table"};function q(e,t,s,n,r,a){return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("img",{class:"profile-info__avatar",src:s.profile.ava},null,8,W),R,(0,o._)("div",Y,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.profile.info,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:"profile__table-row"},[(0,o._)("span",null,(0,i.zw)(t)+": ",1),(0,o._)("span",null,(0,i.zw)(e),1)])))),128))])])])}var A={name:"ProfileInfo",props:{profile:Object}};const J=(0,P.Z)(A,[["render",q],["__scopeId","data-v-89973974"]]);var Q=J;const X=e=>((0,o.dD)("data-v-01a23382"),e=e(),(0,o.Cn)(),e),ee={class:"update-pass"},te=X((()=>(0,o._)("h2",{class:"update-pass__title"},"Смена пароля",-1))),se=(0,o.Uk)("Сохранить");function ne(e,t,n,r,a,i){const u=(0,o.up)("i-input"),l=(0,o.up)("d-button");return(0,o.wg)(),(0,o.iD)("div",ee,[te,(0,o.Wm)(u,{icon:s(5386),modelValue:a.password,"onUpdate:modelValue":t[0]||(t[0]=e=>a.password=e),plhl:"Пароль",type:"password","error-msg":a.errPass,class:"update-pass__password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(u,{icon:s(5386),modelValue:a.newPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>a.newPassword=e),plhl:"Новый пароль",type:"password","error-msg":a.errNewPass,class:"update-pass__new-password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(u,{icon:s(5386),modelValue:a.repPassword,"onUpdate:modelValue":t[2]||(t[2]=e=>a.repPassword=e),plhl:"Повторите пароль",type:"password","error-msg":a.errRepPass,class:"update-pass__repeat-password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(l,{onClick:i.Save,class:"update-pass__button"},{default:(0,o.w5)((()=>[se])),_:1},8,["onClick"])])}const oe=new RegExp("[a-zA-Z0-9].{5,20}"),re="заполните поле",ae="слишком простой пароль",ie="неверный пароль";var ue={name:"UpdatePassword",data(){return{password:"",newPassword:"",repPassword:"",errPass:"",errNewPass:"",errRepPass:""}},methods:{Save(){if(""!==this.password)if(""!==this.newPassword)if(oe.test(this.newPassword)){if(""!==this.repPassword)return this.newPassword!==this.repPassword?(this.errNewPass="пароли не совпадают",void(this.errRepPass="пароли не совпадают")):(this.$api.auth.updatePass({new_pass:this.newPassword,old_pass:this.password}).then((e=>{if(200!==e.status)throw e;Mt.push({name:"home"})})).catch((()=>{this.errPass=ie})),!0);this.errRepPass=re}else this.errNewPass=ae;else this.errNewPass=re;else this.errPass=re}},watch:{password(){this.errPass=""},newPassword(){this.errNewPass="",this.errRepPass=""},repPassword(){this.errNewPass="",this.errRepPass=""}},components:{IInput:E,DButton:$}};const le=(0,P.Z)(ue,[["render",ne],["__scopeId","data-v-01a23382"]]);var de=le,ce={name:"ProfileView",components:{ProfileInfo:Q,UpdatePassword:de},computed:{...(0,z.Se)(["isSupervisor","isStudent","fullName","getCourseNumber","getGroupCode"]),profile(){return this.isStudent?{ava:s(8324),info:{"Имя":this.fullName,"Курс":this.getCourseNumber,"Группа":this.getGroupCode}}:this.isSupervisor?{ava:s(5309),info:{"Имя":this.fullName}}:{}}}};const me=(0,P.Z)(ce,[["render",G],["__scopeId","data-v-515e7314"]]);var pe=me;const ve=e=>((0,o.dD)("data-v-ae188c1c"),e=e(),(0,o.Cn)(),e),ge=ve((()=>(0,o._)("caption",null,[(0,o._)("h1",null,"8 семестр")],-1))),fe=ve((()=>(0,o._)("th",null,"Дисциплина",-1))),he=["colspan"],_e=["onClick"],we=["src"];function Ne(e,t,s,n,r,a){const u=(0,o.up)("event-info");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{modelValue:r.eventInfo,"onUpdate:modelValue":t[0]||(t[0]=e=>r.eventInfo=e)},null,8,["modelValue"]),(0,o._)("table",null,[ge,(0,o._)("tr",null,[fe,(0,o._)("th",{colspan:e.getMaxEvents},"Успеваемость",8,he)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getTable,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.courseId},[(0,o._)("td",null,(0,i.zw)(e.courseName),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.getEvent(e.events),(t=>((0,o.wg)(),(0,o.iD)("td",{key:t.eventId,onClick:s=>a.OpenEventInfo(e.courseId,t.eventId),class:"event"},[(0,o._)("span",null,(0,i.zw)(t.eventName),1),(0,o._)("img",{src:a.getEventIcon(t.status),class:"event__status-icon"},null,8,we)],8,_e)))),128))])))),128))])])}const Ie=e=>((0,o.dD)("data-v-21ef1a7c"),e=e(),(0,o.Cn)(),e),be={key:0,class:"modal",ref:"modal"},Se={class:"event"},Ce={class:"modal__header"},De={class:"modal__header-title"},ke={class:""},ye=["src"],Pe={class:""},Ue=["src"],Ee={class:"event__body"},Ve={class:"event__table"},Fe={class:"event__cell"},xe=["src"],Oe={class:"event__description"},$e=Ie((()=>(0,o._)("h4",null,"Описание",-1))),ze={key:0,class:"event__upload-files"},Me=Ie((()=>(0,o._)("h4",null,"Загруженные файлы",-1))),Le=["onClick"],Be=["onClick","src"],Ke={key:1,class:"event__description"},Te=Ie((()=>(0,o._)("h4",null,"Комментарий",-1))),je=(0,o.Uk)("Загрузить файл"),Ge=(0,o.Uk)("Отправить на проверку");function Ze(e,t,n,r,a,u){const l=(0,o.up)("i-button"),d=(0,o.up)("d-button");return u.eventInfo.isModalVisible?((0,o.wg)(),(0,o.iD)("div",be,[(0,o._)("div",Se,[(0,o._)("div",Ce,[(0,o._)("div",De,[(0,o._)("h3",ke,(0,i.zw)(u.courseName),1),(0,o._)("img",{src:s(8687),class:"",alt:""},null,8,ye),(0,o._)("h3",Pe,(0,i.zw)(u.eventName),1)]),(0,o._)("img",{onClick:t[0]||(t[0]=(...e)=>u.Close&&u.Close(...e)),src:s(420),class:"modal__close-icon",alt:""},null,8,Ue)]),(0,o._)("div",Ee,[(0,o._)("table",Ve,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.eventTable,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,i.zw)(e.name),1),(0,o._)("td",Fe,[(0,o._)("img",{src:e.icon,class:"event__cell-icon"},null,8,xe),(0,o._)("span",null,(0,i.zw)(e.value),1)])])))),128))]),(0,o._)("div",Oe,[$e,(0,o._)("div",null,(0,i.zw)(a.event.description),1)]),u.isUploadFiles?((0,o.wg)(),(0,o.iD)("div",ze,[Me,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.event.files,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"event__files-list",key:t},[(0,o._)("span",null,(0,i.zw)((t+1).toString()+"."),1),(0,o._)("a",{onClick:e=>u.OpenFile(t),class:"event__file"},(0,i.zw)(e),9,Le),(0,o._)("img",{onClick:e=>u.DeleteFile(t),src:s(2539),class:"event__delete-icon",alt:""},null,8,Be)])))),128))])):(0,o.kq)("",!0),u.isComment?((0,o.wg)(),(0,o.iD)("div",Ke,[Te,(0,o._)("div",null,(0,i.zw)(a.event.comment),1)])):(0,o.kq)("",!0),u.isUploadButton?((0,o.wg)(),(0,o.j4)(l,{key:2,onClick:u.UploadFiles,icon:"upload",class:"event__upload-button"},{default:(0,o.w5)((()=>[je])),_:1},8,["onClick"])):(0,o.kq)("",!0),u.isSubmitButton?((0,o.wg)(),(0,o.j4)(d,{key:3,onClick:u.SubmitFiles,class:"event__submit-button"},{default:(0,o.w5)((()=>[Ge])),_:1},8,["onClick"])):(0,o.kq)("",!0)])])],512)):(0,o.kq)("",!0)}function He(e,t,s,n,r,a){const u=(0,o.up)("d-button");return(0,o.wg)(),(0,o.j4)(u,{class:(0,i.C_)(a.IconClass)},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}var We={name:"IButton",components:{DButton:$},props:{icon:String,name:String},computed:{IconClass(){return"icon-"+this.icon}}};const Re=(0,P.Z)(We,[["render",He],["__scopeId","data-v-3768b2df"]]);var Ye=Re,qe={name:"EventInfo",components:{DButton:$,IButton:Ye},props:{modelValue:Object},data(){return{event:{},newFiles:!1}},emits:["update:modelValue"],computed:{...(0,z.Se)(["getCourseName","getEventName","getEvent"]),eventInfo:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},getEventStatus(){const e=["Не выдано","Выдано","На проверке","Требуются правки","Выполнено","Защищено","Просрочено"];return e[this.event.status]},getIconStatus(){return s(3834)("./status_"+this.event.status+".svg")},getDeadlineDays(){return 5},eventTable(){return[{name:"Статус:",icon:this.getIconStatus,value:this.getEventStatus},{name:"Выдано в работу:",icon:s(874),value:this.event.eventDate},{name:"Дедлайн:",icon:s(7126),value:this.event.deadline},{name:"Дней до дедлайна:",icon:s(7563),value:this.getDeadlineDays}]},courseName(){return this.getCourseName(this.eventInfo.courseId)},eventName(){return this.event.eventName},isUploadFiles(){return!(!this.event.files||!this.event.files.length)&&this.event.files.length>0},isComment(){return this.event.comment&&this.event.comment.length>0},isUploadButton(){const e=this.event.status;return 0<e&&e<4||6===e},isSubmitButton(){return this.newFiles}},methods:{Close(){this.eventInfo.isModalVisible=!1},OpenFile(e){console.log("open file: ",this.event.files[e])},DeleteFile(e){console.log("delete file: ",this.event.files[e])},UploadFiles(){this.newFiles=!0},SubmitFiles(){this.newFiles=!1}},watch:{eventInfo(){this.event=this.getEvent(this.eventInfo.courseId,this.eventInfo.eventId)}},mounted(){let e=this;document.addEventListener("click",(function(t){t.target===e.$refs["modal"]&&e.Close()}))}};const Ae=(0,P.Z)(qe,[["render",Ze],["__scopeId","data-v-21ef1a7c"]]);var Je=Ae,Qe={name:"ProgressView",created(){this.$store.dispatch("UpdateCoursesTable").catch((e=>{alert("Хреновый запрос или ответ"),console.log(e)}))},data(){return{eventInfo:{isModalVisible:!1,courseId:0,eventId:0}}},components:{EventInfo:Je},computed:{...(0,z.Se)(["getTable","getMaxEvents"])},methods:{getEvent(e){return e},getEventIcon(e){return s(3834)(`./status_${e}.svg`)},OpenEventInfo(e,t){this.eventInfo={courseId:e,eventId:t},this.eventInfo.isModalVisible=!0}}};const Xe=(0,P.Z)(Qe,[["render",Ne],["__scopeId","data-v-ae188c1c"]]);var et=Xe;const tt=e=>((0,o.dD)("data-v-7bce7c24"),e=e(),(0,o.Cn)(),e),st=tt((()=>(0,o._)("caption",null,[(0,o._)("h1",null,"Контроль успеваемости")],-1))),nt=tt((()=>(0,o._)("th",null,"Студент",-1))),ot=["onClick"],rt=["src"];function at(e,t,s,n,r,a){const u=(0,o.up)("event-info");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{modelValue:r.eventInfo,"onUpdate:modelValue":t[0]||(t[0]=e=>r.eventInfo=e)},null,8,["modelValue"]),(0,o._)("table",null,[st,(0,o._)("tr",null,[nt,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getEventNames,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e.id},(0,i.zw)(e.eventName),1)))),128))]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getStudents,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,i.zw)(e.shortName),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.getEvents(e.id),(t=>((0,o.wg)(),(0,o.iD)("td",{key:t.eventId,onClick:s=>a.OpenEventInfo(e.id,t.eventId),class:"event"},[(0,o._)("img",{src:a.getEventIcon(t.status),class:"event__status-icon"},null,8,rt)],8,ot)))),128))])))),128))])])}const it=e=>((0,o.dD)("data-v-6b9d2729"),e=e(),(0,o.Cn)(),e),ut={key:0,class:"modal",ref:"modal"},lt={class:"event"},dt={class:"modal__header"},ct={class:"modal__header-title"},mt={class:""},pt=["src"],vt={class:""},gt=["src"],ft={class:"event__body"},ht={class:"event__table"},_t={class:"event__cell"},wt=["src"],Nt={class:"event__description"},It=it((()=>(0,o._)("h4",null,"Описание",-1))),bt={key:0,class:"event__upload-files"},St=it((()=>(0,o._)("h4",null,"Загруженные файлы",-1))),Ct=["onClick"],Dt={key:1,class:"event__description"},kt=it((()=>(0,o._)("h4",null,"Комментарий",-1))),yt=(0,o.Uk)("Принять");function Pt(e,t,n,r,a,u){const l=(0,o.up)("i-button");return u.eventInfo.isModalVisible?((0,o.wg)(),(0,o.iD)("div",ut,[(0,o._)("div",lt,[(0,o._)("div",dt,[(0,o._)("div",ct,[(0,o._)("h3",mt,(0,i.zw)(u.studentName),1),(0,o._)("img",{src:s(8687),class:"",alt:""},null,8,pt),(0,o._)("h3",vt,(0,i.zw)(u.eventName),1)]),(0,o._)("img",{onClick:t[0]||(t[0]=(...e)=>u.Close&&u.Close(...e)),src:s(420),class:"modal__close-icon",alt:""},null,8,gt)]),(0,o._)("div",ft,[(0,o._)("table",ht,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.eventTable,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,i.zw)(e.name),1),(0,o._)("td",_t,[(0,o._)("img",{src:e.icon,class:"event__cell-icon"},null,8,wt),(0,o._)("span",null,(0,i.zw)(e.value),1)])])))),128))]),(0,o._)("div",Nt,[It,(0,o._)("div",null,(0,i.zw)(a.event.description),1)]),u.isUploadFiles?((0,o.wg)(),(0,o.iD)("div",bt,[St,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.event.files,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"event__files-list",key:t},[(0,o._)("span",null,(0,i.zw)((t+1).toString()+"."),1),(0,o._)("a",{onClick:e=>u.OpenFile(t),class:"event__file"},(0,i.zw)(e),9,Ct)])))),128))])):(0,o.kq)("",!0),u.isComment?((0,o.wg)(),(0,o.iD)("div",Dt,[kt,(0,o._)("div",null,(0,i.zw)(a.event.comment),1)])):(0,o.kq)("",!0),u.isOKButton?((0,o.wg)(),(0,o.j4)(l,{key:2,onClick:u.OKButton,icon:"check_all",class:"event__ok-button"},{default:(0,o.w5)((()=>[yt])),_:1},8,["onClick"])):(0,o.kq)("",!0)])])],512)):(0,o.kq)("",!0)}var Ut={props:{modelValue:Object},components:{IButton:Ye},data(){return{event:{}}},emits:["update:modelValue"],computed:{...(0,z.Se)({getStudentName:"getShortStudent",getEvent:"getSupervisorEvent"}),eventInfo:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},getEventStatus(){const e=["Не выдано","Выдано","На проверке","Требуются правки","Выполнено","Защищено","Просрочено"];return e[this.event.status]},getIconStatus(){let e=this.event.status;return 2===e&&(e="2.1"),3===e&&(e="3.1"),s(3834)(`./status_${e}.svg`)},getDeadlineDays(){return 5},eventTable(){return[{name:"Статус:",icon:this.getIconStatus,value:this.getEventStatus},{name:"Выдано в работу:",icon:s(874),value:this.event.eventDate},{name:"Дедлайн:",icon:s(7126),value:this.event.deadline},{name:"Дней до дедлайна:",icon:s(7563),value:this.getDeadlineDays}]},studentName(){return this.getStudentName(this.eventInfo.studentId)},eventName(){return this.event.eventName},isUploadFiles(){return!(!this.event.files||!this.event.files.length)&&this.event.files.length>0},isComment(){return this.event.comment&&this.event.comment.length>0},isOKButton(){return 2===this.event.status}},methods:{Close(){this.eventInfo.isModalVisible=!1},OpenFile(e){console.log("open file: ",this.event.files[e])},OKButton(){console.log("ok")}},watch:{eventInfo(){this.event=this.getEvent(this.eventInfo.studentId,this.eventInfo.eventId)}},mounted(){let e=this;document.addEventListener("click",(function(t){t.target===e.$refs["modal"]&&e.Close()}))}};const Et=(0,P.Z)(Ut,[["render",Pt],["__scopeId","data-v-6b9d2729"]]);var Vt=Et,Ft={name:"ProgressControlView",data(){return{eventInfo:{isModalVisible:!1,studentId:0,eventId:0}}},components:{EventInfo:Vt},computed:{...(0,z.Se)({getStudents:"getShortStudents",getEventNames:"getSupervisorEventTitle",getSupervisorEvents:"getSupervisorEvents"})},methods:{getEvents(e){return this.getSupervisorEvents(e)},getEventIcon(e){return 2===e&&(e="2.1"),3===e&&(e="3.1"),s(3834)(`./status_${e}.svg`)},OpenEventInfo(e,t){this.eventInfo={studentId:e,eventId:t},this.eventInfo.isModalVisible=!0}}};const xt=(0,P.Z)(Ft,[["render",at],["__scopeId","data-v-7bce7c24"]]);var Ot=xt;const $t=[{path:"/login",name:"login",component:T},{path:"/profile",name:"profile",component:pe},{path:"/progress",name:"progress",component:et},{path:"/control",name:"control",component:Ot}],zt=(0,g.p7)({history:(0,g.PO)("/"),routes:$t});var Mt=zt,Lt={name:"NavBar",data(){return{menu:!1}},methods:{Home(){this.isSupervisor&&Mt.push({name:"control"}),this.isStudent&&Mt.push({name:"progress"})},Profile(){Mt.push("/profile")},Menu(){this.menu=!this.menu},CloseMenu(){this.menu=!1},Logout(){this.$store.dispatch("Logout").then((()=>{Mt.push("/login")})).catch((e=>{console.log("logout"),console.log(e),Mt.push("/login")}))}},computed:{...(0,z.Se)(["shortName","isSupervisor","isStudent"])},mounted(){let e=this;document.addEventListener("click",(function(t){t.target!==e.$refs["navbar-menu"]&&e.CloseMenu()}))}};const Bt=(0,P.Z)(Lt,[["render",v],["__scopeId","data-v-70042b3f"]]);var Kt=Bt,Tt={components:{NavBar:Kt},computed:(0,z.Se)(["getLoggedIn","getRole","isSupervisor","isStudent","getPassStatus"]),created(){this.$store.loggedIn||this.$store.dispatch("GetUser").then((()=>{this.$store.dispatch("Update"+this.getRole).then((()=>{this.getPassStatus?(this.isSupervisor&&Mt.push({name:"control"}),this.isStudent&&Mt.push({name:"progress"})):Mt.push({name:"profile"})})).catch((e=>{console.log(e),this.$store.dispatch("Logout"),Mt.push({name:"login"})}))})).catch((()=>{this.$store.dispatch("ClearStores"),Mt.push({name:"login"})}))}};const jt=(0,P.Z)(Tt,[["render",a]]);var Gt=jt,Zt=s(6265),Ht=s.n(Zt);const Wt=Ht().create({baseURL:"https://bmstu.site/api/v1/",withCredentials:!0,headers:{accept:"application/json"}});var Rt=Wt;function Yt(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{login(s){return t(),e.post("user/login",s)},logout(){return t(),e.get("user/logout")},updatePass(s){return t(),e.put("user/login",s)},getUser(){return t(),e.get("user")}}}function qt(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{getStudent(){return t(),e.get("student")},getCoursesTable(){return t(),e.get("student/table")},uploadFile(s,n){return t(),e.post(`event/${s}/file`,n)},downloadFile(s){return t(),e.get(`event/${s}/file`)},deleteFile(s){return t(),e.delete(`event/${s}/file`)}}}function At(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{getSupervisor(){return t(),e.get("supervisor")},getCourses(){return t(),e.get("supervisor/courses")},getGroupsOnCourse(s){return t(),e.get(`course/${s}/group`)},getStudentsFromGroup(s){return t(),e.get(`group/${s}/students`)}}}var Jt={auth:Yt(Rt),student:qt(Rt),supervisor:At(Rt)};function Qt(e){e.commit("logout"),e.commit("clearCourses"),e.commit("clearStudent"),e.commit("clearSupervisorCourses"),e.commit("clearEvents"),e.commit("clearGroups"),e.commit("clearSupervisor")}var Xt={state:{loggedIn:!1,fName:"Vladimir",mName:"Igorevich",lName:"Lunkin",username:"",role:"",pass_status:!1},getters:{getLoggedIn(e){return e.loggedIn},fullName(e){return e.fName+" "+e.mName+" "+e.lName},shortName(e){return e.fName.length<1||e.mName.length<1||e.lName.length<1?"":e.lName+" "+e.fName[0]+". "+e.mName[0]+"."},getRole(e){return e.role},isSupervisor(e){return"Supervisor"===e.role},isStudent(e){return"Student"===e.role},getPassStatus(e){return e.pass_status}},mutations:{login(e){e.loggedIn=!0},logout(e){e.loggedIn=!1,e.fName="",e.mName="",e.lName="",e.username="",e.role="",e.pass_status=!1},setUser(e,t){e.fName=t.firstname,e.mName=t.middleName,e.lName=t.lastname,e.username=t.email,e.role=t.is_super?"Supervisor":"Student",e.pass_status=t.pass_status}},actions:{async Login(e,{username:t,password:s}){return Jt.auth.login({email:t,password:s}).then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setUser",t.data)}))},async Logout(e){return Qt(e),Jt.auth.logout().then((e=>{if(200!==e.status)throw e}))},async ClearStores(e){Qt(e)},async GetUser(e){return Jt.auth.getUser().then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setUser",t.data)}))}}},es={state:{id:0,groupID:"",groupCode:"ИУ5-35Б"},getters:{getCourseNumber(e){let t=e.groupCode;if(!t.length||t.length<1)return"";let s=0;while(s<t.length-1){if("-"===t[s])return(parseInt(t[s+1],10)+1)/2|0;s++}return"a"},getGroupCode(e){return e.groupCode}},mutations:{setStudent(e,t){e.id=t.id,e.groupID=t.groupID,e.groupCode=t.groupCode},clearStudent(e){e.id=0,e.groupID="",e.groupCode=""}},actions:{async UpdateStudent(e){return Jt.student.getStudent().then((t=>{if(200!==t.status)throw t;e.commit("setStudent",{id:t.data.id,groupID:t.data.group.id,groupCode:t.data.group.group_code})}))}}},ts={state:{courses:[{courseId:0,courseName:"Эксплуатация АСОИУ",events:[{eventId:0,eventDate:1,deadline:1,status:5,eventName:"Лаб 1",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:["Экспл_АСОИУ_Отчет_по_Лаб.1.docx","скриншоты.pdf"],comment:"Обновите титульник. В 5 пункте ошибка в расчетах. Перестроить график из 7 пункта."},{eventId:1,eventDate:1,deadline:1,status:4,eventName:"Лаб 2",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:["Экспл_АСОИУ_Отчет_по_Лаб.2.docx"]},{eventId:2,eventDate:1,deadline:1,status:3,eventName:"РК 1",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:[]},{eventId:3,eventDate:1,deadline:1,status:2,eventName:"Лаб 3",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:[]},{eventId:4,eventDate:1,deadline:1,status:6,eventName:"Лаб 4",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:["скриншоты.pdf"],comment:"Обновите титульник. В 5 пункте ошибка в расчетах. Перестроить график из 7 пункта."}]},{courseId:1,courseName:"Беспроводные сети",events:[{eventId:0,eventDate:1,deadline:1,status:5,eventName:"Лаб 1",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:1,eventDate:1,deadline:1,status:4,eventName:"Лаб 2",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:2,eventDate:1,deadline:1,status:3,eventName:"Лаб 3",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:3,eventDate:1,deadline:1,status:1,eventName:"ДЗ",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:4,eventDate:1,deadline:1,status:0,eventName:"Лаб 4",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."}]}]},getters:{getTable(e){return e.courses},getMaxEvents(e){let t=0;return e.courses.forEach((e=>{e.events.length>t&&(t=e.events.length)})),t},getEvent:e=>(t,s)=>e.courses[t].events[s],getEventName:e=>(t,s)=>e.courses[t].events[s].eventName,getCourseName:e=>t=>e.courses[t].courseName},mutations:{setCourses(e,t){e.courses=t},clearCourses(e){e.courses=[]}},actions:{async UpdateCoursesTable(e){return Jt.student.getCoursesTable().then((t=>{if(200!==t.status)throw t;e.commit("setCourses",t.data.courses)}))}}},ss={state:{id:10},getters:{},mutations:{setSupervisor(e,t){e.id=t.id},clearSupervisor(e){e.id=0}},actions:{async UpdateSupervisor(e){return Jt.supervisor.getSupervisor().then((t=>{if(200!==t.status)throw t;e.commit("setSupervisor",{id:t.data.id})}))}}},ns={state:{courses:[{courseId:0,courseName:"Эксплуатация АСОИУ"},{courseId:1,courseName:"Беспроводные сети"},{courseId:2,courseName:"Русский язык делового общения"}]},getters:{},mutations:{setSupervisorCourses(e,t){e.courses=t},clearSupervisorCourses(e){e.courses=[]}},actions:{async GetSupervisorCourses(e){return Jt.supervisor.getCourses().then((t=>{if(200!==t.status)throw t;e.commit("setSupervisorCourses",t.data)}))}}},os={state:{eventsCommon:[{id:0,eventName:"ЛР 1",eventDate:"2022-05-23",deadline:"2022-05-23",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{id:1,eventName:"ЛР 2",eventDate:"2022-05-23",deadline:"2022-05-23",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{id:2,eventName:"ЛР 3",eventDate:"2022-05-23",deadline:"2022-05-23",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."}],events:{0:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:6},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:5},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:4}],1:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:3},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:2},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:1}],2:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:0}],3:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:0}],4:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:0}]}},getters:{getSupervisorEventTitle(e){return e.eventsCommon},getSupervisorEvents:e=>t=>e.events[t],getSupervisorEvent:e=>(t,s)=>{let n={},o=0;while(o<e.eventsCommon.length){if(e.eventsCommon[o].id===s){n=e.eventsCommon[o];break}o++}let r={};o=0;while(o<e.events[t].length){if(e.events[t][o].eventId===s){r=e.events[t][o];break}o++}return{eventId:s,eventDate:n.eventDate,deadline:n.deadline,status:r.status,eventName:n.eventName,description:n.description,files:r.uploadedFiles,comment:r.comment}}},mutations:{clearEvents(e){e.eventsCommon=[],e.events={}}},action:{}},rs={state:{groups:[{id:0,code:"ИУ5-75Б",students:[{id:0,fName:"0fName",mName:"0mName",lName:"0lName"},{id:1,fName:"1fName",mName:"1mName",lName:"1lName"},{id:2,fName:"2fName",mName:"mName",lName:"lName"},{id:3,fName:"3fName",mName:"mName",lName:"lName"},{id:4,fName:"4fName",mName:"mName",lName:"lName"}]},{id:1,code:"ИУ5-85Б",students:[{id:0,fName:"0fName",mName:"0mName",lName:"0lName"},{id:1,fName:"1fName",mName:"1mName",lName:"1lName"},{id:2,fName:"2fName",mName:"mName",lName:"lName"},{id:3,fName:"3fName",mName:"mName",lName:"lName"},{id:4,fName:"4fName",mName:"mName",lName:"lName"}]}],currGroup:1},getters:{getShortStudents(e){const t=e.currGroup;return!e.groups.length||e.groups.length<t||t<0?[]:e.groups[t].students.map((e=>e.fName.length<1||e.mName.length<1||e.lName.length<1?{}:{id:e.id,shortName:e.lName+" "+e.fName[0]+". "+e.mName[0]+"."}))},getShortStudent:e=>t=>{const s=e.currGroup;if(!e.groups.length||e.groups.length<s||s<0)return"";const n=e.groups[s].students;let o=0;while(o<n.length){if(n[o].id===t)return n[o].lName+" "+n[o].fName[0]+". "+n[o].mName[0]+".";o++}return""}},mutations:{clearGroups(e){e.groups=[],e.currGroup=0}},actions:{}},as=(0,z.MT)({modules:{user:Xt,student:es,studentCourses:ts,Supervisor:ss,SupervisorCourses:ns,SupervisorEvents:os,SupervisorGroups:rs}}),is={install:e=>{e.config.globalProperties.$api=Jt}};(0,n.ri)(Gt).use(is).use(as).use(Mt).mount("#app")},3834:function(e,t,s){var n={"./status_0.svg":2502,"./status_1.svg":602,"./status_2.1.svg":4163,"./status_2.svg":435,"./status_3.1.svg":2663,"./status_3.svg":113,"./status_4.svg":8642,"./status_5.svg":96,"./status_6.svg":4598};function o(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=3834},874:function(e,t,s){"use strict";e.exports=s.p+"img/calendar.5b6d21a8.svg"},7126:function(e,t,s){"use strict";e.exports=s.p+"img/calendar_event.e436ece3.svg"},8687:function(e,t,s){"use strict";e.exports=s.p+"img/caret_right.7477c40f.svg"},420:function(e,t,s){"use strict";e.exports=s.p+"img/close.8ef1dd4b.svg"},2539:function(e,t,s){"use strict";e.exports=s.p+"img/delete.89a97f84.svg"},7563:function(e,t,s){"use strict";e.exports=s.p+"img/hourglass_empty.f7d94d1e.svg"},5674:function(e,t,s){"use strict";e.exports=s.p+"img/menu.8166e461.svg"},5386:function(e,t,s){"use strict";e.exports=s.p+"img/password.478f5e34.svg"},2502:function(e,t,s){"use strict";e.exports=s.p+"img/status_0.ad3dda61.svg"},602:function(e,t,s){"use strict";e.exports=s.p+"img/status_1.44b8c29a.svg"},4163:function(e,t,s){"use strict";e.exports=s.p+"img/status_2.1.c76d8a7b.svg"},435:function(e,t,s){"use strict";e.exports=s.p+"img/status_2.43b0f8ca.svg"},2663:function(e,t,s){"use strict";e.exports=s.p+"img/status_3.1.7f7c200f.svg"},113:function(e,t,s){"use strict";e.exports=s.p+"img/status_3.39701250.svg"},8642:function(e,t,s){"use strict";e.exports=s.p+"img/status_4.5910b6fc.svg"},96:function(e,t,s){"use strict";e.exports=s.p+"img/status_5.f8372363.svg"},4598:function(e,t,s){"use strict";e.exports=s.p+"img/status_6.f08633c1.svg"},1816:function(e,t,s){"use strict";e.exports=s.p+"img/user.57b0ae03.svg"},9574:function(e,t,s){"use strict";e.exports=s.p+"img/logo.9a6ea637.svg"},8324:function(e,t,s){"use strict";e.exports=s.p+"img/student.6d558c89.svg"},5309:function(e,t,s){"use strict";e.exports=s.p+"img/supervisor.f4872d84.svg"}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,r){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&r||a>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[u])}))?n.splice(u--,1):(i=!1,r<a&&(a=r));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],i=n[1],u=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(u)var d=u(s)}for(t&&t(n);l<a.length;l++)r=a[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},n=self["webpackChunkdashb_bmstu"]=self["webpackChunkdashb_bmstu"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(1597)}));n=s.O(n)})();
//# sourceMappingURL=app.032ba484.js.map