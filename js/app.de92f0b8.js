(function(){var e={9261:function(e,t,s){"use strict";var n=s(9242),o=s(3396);const a={class:"my-container"};function r(e,t,s,n,r,i){const u=(0,o.up)("nav-bar"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.getLoggedIn?((0,o.wg)(),(0,o.j4)(u,{key:0,class:""})):(0,o.kq)("",!0),(0,o._)("div",a,[(0,o.Wm)(l)])],64)}var i=s(7139);const u={class:"navbar"},l=["src"],d={class:"navbar__home"},c={class:"navbar__user"},m=["src"],p={class:"navbar__menu"};function v(e,t,a,r,v,g){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("img",{src:s(9574),class:"navbar__logo"},null,8,l),(0,o._)("div",d,[(0,o._)("span",{onClick:t[0]||(t[0]=(...e)=>g.Home&&g.Home(...e)),class:"navbar__home-title"},"DashboardBMSTU")]),(0,o._)("div",c,[(0,o._)("h3",{onClick:t[1]||(t[1]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-user_circle n__u-t"},(0,i.zw)(e.shortName),1)]),(0,o._)("img",{onClick:t[2]||(t[2]=(...e)=>g.Menu&&g.Menu(...e)),src:s(5674),class:"navbar__icon-menu",alt:"",ref:"navbar-menu"},null,8,m),(0,o.wy)((0,o._)("div",p,[(0,o._)("span",{onClick:t[3]||(t[3]=(...e)=>g.Profile&&g.Profile(...e)),class:"icon-settings navbar__menu-item"}," Настройки "),(0,o._)("span",{onClick:t[4]||(t[4]=(...e)=>g.Logout&&g.Logout(...e)),class:"icon-logout navbar__menu-item"}," Выйти")],512),[[n.F8,v.menu]])])}var g=s(678);const h=e=>((0,o.dD)("data-v-0d7e915a"),e=e(),(0,o.Cn)(),e),f={class:"login-page"},_={class:"login-form"},w=h((()=>(0,o._)("h2",{class:"login-form__title"},"Вход",-1))),N=(0,o.Uk)("Войти");function I(e,t,a,r,i,u){const l=(0,o.up)("i-input"),d=(0,o.up)("d-button");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",_,[w,(0,o.Wm)(l,{onKeyup:(0,n.D2)(u.LoginSubmit,["enter"]),icon:s(1816),modelValue:i.username,"onUpdate:modelValue":t[0]||(t[0]=e=>i.username=e),modelModifiers:{trim:!0},plhl:"Имя пользователя","error-msg":i.errUsername,class:"login-form__username"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,o.Wm)(l,{onKeyup:(0,n.D2)(u.LoginSubmit,["enter"]),icon:s(5386),modelValue:i.password,"onUpdate:modelValue":t[1]||(t[1]=e=>i.password=e),plhl:"Пароль",type:"password","error-msg":i.errPassword,class:"login-form__password",ref:"passs"},null,8,["onKeyup","icon","modelValue","error-msg"]),(0,o.Wm)(d,{onClick:u.LoginSubmit,class:"login-form__button"},{default:(0,o.w5)((()=>[N])),_:1},8,["onClick"])])])}const b={class:"i-input"},S=["src"],C=["placeholder","type"],D={class:"i-input__error-text"};function k(e,t,s,a,r,u){return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",{class:(0,i.C_)(["i-input__field",u.ValidationClass])},[(0,o._)("img",{src:s.icon,alt:"icon",class:"i-input__icon"},null,8,S),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),placeholder:s.plhl,type:s.type,class:"i-input__input"},null,8,C),[[n.YZ,u.value]])],2),(0,o._)("span",D,(0,i.zw)(s.errorMsg),1)])}var P={name:"IInput",props:{icon:String,modelValue:String,plhl:String,type:String,errorMsg:{type:String,default:""}},emits:["update:modelValue"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},ValidationClass(){return""===this.errorMsg?"":"i-input__field_error"}}},U=s(89);const y=(0,U.Z)(P,[["render",k],["__scopeId","data-v-3db3c500"]]);var E=y;const V={class:"d-button"};function F(e,t,s,n,a,r){return(0,o.wg)(),(0,o.iD)("button",V,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var x={name:"DButton",props:{name:String}};const O=(0,U.Z)(x,[["render",F],["__scopeId","data-v-643c1178"]]);var $=O,z=s(65);const M="неверный логин или пароль",L="заполните поле";var G={name:"LoginView",components:{IInput:E,DButton:$},data(){return{username:"",password:"",errUsername:"",errPassword:""}},methods:{LoginSubmit(){""!==this.username?""!==this.password?this.$store.dispatch("Login",{username:this.username,password:this.password}).then((()=>{this.$store.dispatch("Update"+this.getRole).then((()=>{this.getPassStatus?(this.isSupervisor&&Lt.push({name:"control"}),this.isStudent&&Lt.push({name:"progress"})):Lt.push({name:"profile"})})).catch((()=>{this.$store.dispatch("Logout"),Lt.push({name:"login"})}))})).catch((()=>{this.errUsername=M,this.errPassword=M})):this.errPassword=L:this.errUsername=L}},computed:{...(0,z.Se)(["getPassStatus","getRole","isSupervisor","isStudent"])},watch:{username(){this.errUsername===M&&(this.errPassword=""),this.errUsername=""},password(){this.errPassword===M&&(this.errUsername=""),this.errPassword=""}}};const B=(0,U.Z)(G,[["render",I],["__scopeId","data-v-0d7e915a"]]);var T=B;const K={class:"profile"};function j(e,t,s,n,a,r){const i=(0,o.up)("profile-info"),u=(0,o.up)("update-password");return(0,o.wg)(),(0,o.iD)("div",K,[(0,o.Wm)(i,{profile:r.profile,class:"profile__profile-info"},null,8,["profile"]),(0,o.Wm)(u,{class:"profile__update-pass"})])}const Z=e=>((0,o.dD)("data-v-89973974"),e=e(),(0,o.Cn)(),e),H={class:"profile-info"},W=["src"],R=Z((()=>(0,o._)("h2",{class:"profile-info__title"},"Профиль",-1))),Y={class:"profile-info__table"};function q(e,t,s,n,a,r){return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("img",{class:"profile-info__avatar",src:s.profile.ava},null,8,W),R,(0,o._)("div",Y,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.profile.info,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,class:"profile__table-row"},[(0,o._)("span",null,(0,i.zw)(t)+": ",1),(0,o._)("span",null,(0,i.zw)(e),1)])))),128))])])])}var A={name:"ProfileInfo",props:{profile:Object}};const J=(0,U.Z)(A,[["render",q],["__scopeId","data-v-89973974"]]);var Q=J;const X=e=>((0,o.dD)("data-v-7810104a"),e=e(),(0,o.Cn)(),e),ee={class:"update-pass"},te=X((()=>(0,o._)("h2",{class:"update-pass__title"},"Смена пароля",-1))),se=(0,o.Uk)("Сохранить"),ne={key:0,class:"update-pass__message"};function oe(e,t,n,a,r,i){const u=(0,o.up)("i-input"),l=(0,o.up)("d-button");return(0,o.wg)(),(0,o.iD)("div",ee,[te,(0,o.Wm)(u,{icon:s(5386),modelValue:r.password,"onUpdate:modelValue":t[0]||(t[0]=e=>r.password=e),plhl:"Пароль",type:"password","error-msg":r.errPass,class:"update-pass__password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(u,{icon:s(5386),modelValue:r.newPassword,"onUpdate:modelValue":t[1]||(t[1]=e=>r.newPassword=e),plhl:"Новый пароль",type:"password","error-msg":r.errNewPass,class:"update-pass__new-password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(u,{icon:s(5386),modelValue:r.repPassword,"onUpdate:modelValue":t[2]||(t[2]=e=>r.repPassword=e),plhl:"Повторите пароль",type:"password","error-msg":r.errRepPass,class:"update-pass__repeat-password"},null,8,["icon","modelValue","error-msg"]),(0,o.Wm)(l,{onClick:i.Save,class:"update-pass__button"},{default:(0,o.w5)((()=>[se])),_:1},8,["onClick"]),r.isUpdatedPass?((0,o.wg)(),(0,o.iD)("span",ne,"Пароль успешно обновлен!")):(0,o.kq)("",!0)])}const ae=new RegExp("[a-zA-Z0-9].{5,20}"),re="заполните поле",ie="слишком простой пароль",ue="неверный пароль";var le={name:"UpdatePassword",data(){return{password:"",newPassword:"",repPassword:"",errPass:"",errNewPass:"",errRepPass:"",isUpdatedPass:!1}},methods:{Save(){if(""!==this.password)if(""!==this.newPassword)if(ae.test(this.newPassword)){if(""!==this.repPassword)return this.newPassword!==this.repPassword?(this.errNewPass="пароли не совпадают",void(this.errRepPass="пароли не совпадают")):(this.$store.dispatch("UpdatePass",{new_pass:this.newPassword,old_pass:this.password}).then((()=>{this.isUpdatedPass=!0,setTimeout((()=>{this.isUpdatedPass=!1}),3e3)})).catch((()=>{this.errPass=ue})),!0);this.errRepPass=re}else this.errNewPass=ie;else this.errNewPass=re;else this.errPass=re}},watch:{password(){this.errPass=""},newPassword(){this.errNewPass="",this.errRepPass=""},repPassword(){this.errNewPass="",this.errRepPass=""}},components:{IInput:E,DButton:$}};const de=(0,U.Z)(le,[["render",oe],["__scopeId","data-v-7810104a"]]);var ce=de,me={name:"ProfileView",components:{ProfileInfo:Q,UpdatePassword:ce},computed:{...(0,z.Se)(["isSupervisor","isStudent","fullName","getCourseNumber","getGroupCode"]),profile(){return this.isStudent?{ava:s(8324),info:{"Имя":this.fullName,"Курс":this.getCourseNumber,"Группа":this.getGroupCode}}:this.isSupervisor?{ava:s(5309),info:{"Имя":this.fullName}}:{}}}};const pe=(0,U.Z)(me,[["render",j],["__scopeId","data-v-515e7314"]]);var ve=pe;const ge=e=>((0,o.dD)("data-v-ae188c1c"),e=e(),(0,o.Cn)(),e),he=ge((()=>(0,o._)("caption",null,[(0,o._)("h1",null,"8 семестр")],-1))),fe=ge((()=>(0,o._)("th",null,"Дисциплина",-1))),_e=["colspan"],we=["onClick"],Ne=["src"];function Ie(e,t,s,n,a,r){const u=(0,o.up)("event-info");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{modelValue:a.eventInfo,"onUpdate:modelValue":t[0]||(t[0]=e=>a.eventInfo=e)},null,8,["modelValue"]),(0,o._)("table",null,[he,(0,o._)("tr",null,[fe,(0,o._)("th",{colspan:e.getMaxEvents},"Успеваемость",8,_e)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getTable,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.courseId},[(0,o._)("td",null,(0,i.zw)(e.courseName),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.getEvent(e.events),(t=>((0,o.wg)(),(0,o.iD)("td",{key:t.eventId,onClick:s=>r.OpenEventInfo(e.courseId,t.eventId),class:"event"},[(0,o._)("span",null,(0,i.zw)(t.eventName),1),(0,o._)("img",{src:r.getEventIcon(t.status),class:"event__status-icon"},null,8,Ne)],8,we)))),128))])))),128))])])}const be=e=>((0,o.dD)("data-v-a5fcac6a"),e=e(),(0,o.Cn)(),e),Se={key:0,class:"modal",ref:"modal"},Ce={class:"event"},De={class:"modal__header"},ke={class:"modal__header-title"},Pe={class:""},Ue=["src"],ye={class:""},Ee=["src"],Ve={class:"event__body"},Fe={class:"event__table"},xe={class:"event__cell"},Oe=["src"],$e={class:"event__description"},ze=be((()=>(0,o._)("h4",null,"Описание",-1))),Me={key:0,class:"event__upload-files"},Le=be((()=>(0,o._)("h4",null,"Загруженные файлы",-1))),Ge=["onClick"],Be=["onClick","src"],Te={key:1,class:"event__description"},Ke=be((()=>(0,o._)("h4",null,"Комментарий",-1))),je=(0,o.Uk)("Загрузить файл"),Ze=(0,o.Uk)("Отправить на проверку");function He(e,t,n,a,r,u){const l=(0,o.up)("i-button"),d=(0,o.up)("d-button");return u.eventInfo.isModalVisible?((0,o.wg)(),(0,o.iD)("div",Se,[(0,o._)("div",Ce,[(0,o._)("div",De,[(0,o._)("div",ke,[(0,o._)("h3",Pe,(0,i.zw)(u.courseName),1),(0,o._)("img",{src:s(8687),class:"",alt:""},null,8,Ue),(0,o._)("h3",ye,(0,i.zw)(u.eventName),1)]),(0,o._)("img",{onClick:t[0]||(t[0]=(...e)=>u.Close&&u.Close(...e)),src:s(420),class:"modal__close-icon",alt:""},null,8,Ee)]),(0,o._)("div",Ve,[(0,o._)("table",Fe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.eventTable,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,i.zw)(e.name),1),(0,o._)("td",xe,[(0,o._)("img",{src:e.icon,class:"event__cell-icon"},null,8,Oe),(0,o._)("span",null,(0,i.zw)(e.value),1)])])))),128))]),(0,o._)("div",$e,[ze,(0,o._)("div",null,(0,i.zw)(r.event.description),1)]),u.isUploadFiles?((0,o.wg)(),(0,o.iD)("div",Me,[Le,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.event.files,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"event__files-list",key:t},[(0,o._)("span",null,(0,i.zw)((t+1).toString()+"."),1),(0,o._)("a",{onClick:e=>u.OpenFile(t),class:"event__file"},(0,i.zw)(e),9,Ge),(0,o._)("img",{onClick:e=>u.DeleteFile(t),src:s(2539),class:"event__delete-icon",alt:""},null,8,Be)])))),128))])):(0,o.kq)("",!0),u.isComment?((0,o.wg)(),(0,o.iD)("div",Te,[Ke,(0,o._)("div",null,(0,i.zw)(r.event.comment),1)])):(0,o.kq)("",!0),u.isUploadButton?((0,o.wg)(),(0,o.j4)(l,{key:2,onClick:u.UploadFiles,icon:"upload",class:"event__upload-button"},{default:(0,o.w5)((()=>[je])),_:1},8,["onClick"])):(0,o.kq)("",!0),u.isSubmitButton?((0,o.wg)(),(0,o.j4)(d,{key:3,onClick:u.SubmitFiles,class:"event__submit-button"},{default:(0,o.w5)((()=>[Ze])),_:1},8,["onClick"])):(0,o.kq)("",!0)])])],512)):(0,o.kq)("",!0)}function We(e,t,s,n,a,r){const u=(0,o.up)("d-button");return(0,o.wg)(),(0,o.j4)(u,{class:(0,i.C_)(r.IconClass)},{default:(0,o.w5)((()=>[(0,o.WI)(e.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}var Re={name:"IButton",components:{DButton:$},props:{icon:String,name:String},computed:{IconClass(){return"icon-"+this.icon}}};const Ye=(0,U.Z)(Re,[["render",We],["__scopeId","data-v-3768b2df"]]);var qe=Ye,Ae={name:"EventInfo",components:{DButton:$,IButton:qe},props:{modelValue:Object},data(){return{event:{},newFiles:!1}},emits:["update:modelValue"],computed:{...(0,z.Se)(["getCourseName","getEventName","getEvent"]),eventInfo:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},getEventStatus(){const e=["Не выдано","Выдано","На проверке","Требуются правки","Выполнено","Защищено","Просрочено"];return e[this.event.status]},getIconStatus(){return s(3834)("./status_"+this.event.status+".svg")},eventTable(){return[{name:"Статус:",icon:this.getIconStatus,value:this.getEventStatus},{name:"Выдано в работу:",icon:s(874),value:this.convertFullDate(this.event.eventDate)},{name:"Дедлайн:",icon:s(7126),value:this.convertFullDate(this.event.deadline)},{name:"Дней до дедлайна:",icon:s(7563),value:this.getDeadlineDays(this.event.deadline)}]},courseName(){return this.getCourseName(this.eventInfo.courseId)},eventName(){return this.event.eventName},isUploadFiles(){return!(!this.event.files||!this.event.files.length)&&this.event.files.length>0},isComment(){return this.event.comment&&this.event.comment.length>0},isUploadButton(){const e=this.event.status;return 0<e&&e<4||6===e},isSubmitButton(){return this.newFiles}},methods:{Close(){this.eventInfo.isModalVisible=!1},OpenFile(e){console.log("open file: ",this.event.files[e])},DeleteFile(e){console.log("delete file: ",this.event.files[e])},UploadFiles(){this.newFiles=!0},SubmitFiles(){this.newFiles=!1},getDeadlineDays(e){const t=new Date(e);return(t-Date.now())/864e5|0},convertFullDate(e){const t=new Date(e);return t.toLocaleDateString()},convertShortDate(e){const t=new Date(e);return t.getDay()+"."+t.getMonth()}},watch:{eventInfo(){this.event=this.getEvent(this.eventInfo.courseId,this.eventInfo.eventId)}},mounted(){let e=this;document.addEventListener("click",(function(t){t.target===e.$refs["modal"]&&e.Close()}))}};const Je=(0,U.Z)(Ae,[["render",He],["__scopeId","data-v-a5fcac6a"]]);var Qe=Je,Xe={name:"ProgressView",created(){this.$store.dispatch("UpdateCoursesTable").catch((e=>{alert("Хреновый запрос или ответ"),console.log(e)}))},data(){return{eventInfo:{isModalVisible:!1,courseId:0,eventId:0}}},components:{EventInfo:Qe},computed:{...(0,z.Se)(["getTable","getMaxEvents"])},methods:{getEvent(e){return e},getEventIcon(e){return s(3834)(`./status_${e}.svg`)},OpenEventInfo(e,t){this.eventInfo={courseId:e,eventId:t},this.eventInfo.isModalVisible=!0}}};const et=(0,U.Z)(Xe,[["render",Ie],["__scopeId","data-v-ae188c1c"]]);var tt=et;const st=e=>((0,o.dD)("data-v-7bce7c24"),e=e(),(0,o.Cn)(),e),nt=st((()=>(0,o._)("caption",null,[(0,o._)("h1",null,"Контроль успеваемости")],-1))),ot=st((()=>(0,o._)("th",null,"Студент",-1))),at=["onClick"],rt=["src"];function it(e,t,s,n,a,r){const u=(0,o.up)("event-info");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(u,{modelValue:a.eventInfo,"onUpdate:modelValue":t[0]||(t[0]=e=>a.eventInfo=e)},null,8,["modelValue"]),(0,o._)("table",null,[nt,(0,o._)("tr",null,[ot,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getEventNames,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e.id},(0,i.zw)(e.eventName),1)))),128))]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getStudents,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,i.zw)(e.shortName),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.getEvents(e.id),(t=>((0,o.wg)(),(0,o.iD)("td",{key:t.eventId,onClick:s=>r.OpenEventInfo(e.id,t.eventId),class:"event"},[(0,o._)("img",{src:r.getEventIcon(t.status),class:"event__status-icon"},null,8,rt)],8,at)))),128))])))),128))])])}const ut=e=>((0,o.dD)("data-v-6b9d2729"),e=e(),(0,o.Cn)(),e),lt={key:0,class:"modal",ref:"modal"},dt={class:"event"},ct={class:"modal__header"},mt={class:"modal__header-title"},pt={class:""},vt=["src"],gt={class:""},ht=["src"],ft={class:"event__body"},_t={class:"event__table"},wt={class:"event__cell"},Nt=["src"],It={class:"event__description"},bt=ut((()=>(0,o._)("h4",null,"Описание",-1))),St={key:0,class:"event__upload-files"},Ct=ut((()=>(0,o._)("h4",null,"Загруженные файлы",-1))),Dt=["onClick"],kt={key:1,class:"event__description"},Pt=ut((()=>(0,o._)("h4",null,"Комментарий",-1))),Ut=(0,o.Uk)("Принять");function yt(e,t,n,a,r,u){const l=(0,o.up)("i-button");return u.eventInfo.isModalVisible?((0,o.wg)(),(0,o.iD)("div",lt,[(0,o._)("div",dt,[(0,o._)("div",ct,[(0,o._)("div",mt,[(0,o._)("h3",pt,(0,i.zw)(u.studentName),1),(0,o._)("img",{src:s(8687),class:"",alt:""},null,8,vt),(0,o._)("h3",gt,(0,i.zw)(u.eventName),1)]),(0,o._)("img",{onClick:t[0]||(t[0]=(...e)=>u.Close&&u.Close(...e)),src:s(420),class:"modal__close-icon",alt:""},null,8,ht)]),(0,o._)("div",ft,[(0,o._)("table",_t,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.eventTable,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("td",null,(0,i.zw)(e.name),1),(0,o._)("td",wt,[(0,o._)("img",{src:e.icon,class:"event__cell-icon"},null,8,Nt),(0,o._)("span",null,(0,i.zw)(e.value),1)])])))),128))]),(0,o._)("div",It,[bt,(0,o._)("div",null,(0,i.zw)(r.event.description),1)]),u.isUploadFiles?((0,o.wg)(),(0,o.iD)("div",St,[Ct,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.event.files,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"event__files-list",key:t},[(0,o._)("span",null,(0,i.zw)((t+1).toString()+"."),1),(0,o._)("a",{onClick:e=>u.OpenFile(t),class:"event__file"},(0,i.zw)(e),9,Dt)])))),128))])):(0,o.kq)("",!0),u.isComment?((0,o.wg)(),(0,o.iD)("div",kt,[Pt,(0,o._)("div",null,(0,i.zw)(r.event.comment),1)])):(0,o.kq)("",!0),u.isOKButton?((0,o.wg)(),(0,o.j4)(l,{key:2,onClick:u.OKButton,icon:"check_all",class:"event__ok-button"},{default:(0,o.w5)((()=>[Ut])),_:1},8,["onClick"])):(0,o.kq)("",!0)])])],512)):(0,o.kq)("",!0)}var Et={props:{modelValue:Object},components:{IButton:qe},data(){return{event:{}}},emits:["update:modelValue"],computed:{...(0,z.Se)({getStudentName:"getShortStudent",getEvent:"getSupervisorEvent"}),eventInfo:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},getEventStatus(){const e=["Не выдано","Выдано","На проверке","Требуются правки","Выполнено","Защищено","Просрочено"];return e[this.event.status]},getIconStatus(){let e=this.event.status;return 2===e&&(e="2.1"),3===e&&(e="3.1"),s(3834)(`./status_${e}.svg`)},getDeadlineDays(){return 5},eventTable(){return[{name:"Статус:",icon:this.getIconStatus,value:this.getEventStatus},{name:"Выдано в работу:",icon:s(874),value:this.event.eventDate},{name:"Дедлайн:",icon:s(7126),value:this.event.deadline},{name:"Дней до дедлайна:",icon:s(7563),value:this.getDeadlineDays}]},studentName(){return this.getStudentName(this.eventInfo.studentId)},eventName(){return this.event.eventName},isUploadFiles(){return!(!this.event.files||!this.event.files.length)&&this.event.files.length>0},isComment(){return this.event.comment&&this.event.comment.length>0},isOKButton(){return 2===this.event.status}},methods:{Close(){this.eventInfo.isModalVisible=!1},OpenFile(e){console.log("open file: ",this.event.files[e])},OKButton(){console.log("ok")}},watch:{eventInfo(){this.event=this.getEvent(this.eventInfo.studentId,this.eventInfo.eventId)}},mounted(){let e=this;document.addEventListener("click",(function(t){t.target===e.$refs["modal"]&&e.Close()}))}};const Vt=(0,U.Z)(Et,[["render",yt],["__scopeId","data-v-6b9d2729"]]);var Ft=Vt,xt={name:"ProgressControlView",data(){return{eventInfo:{isModalVisible:!1,studentId:0,eventId:0}}},components:{EventInfo:Ft},computed:{...(0,z.Se)({getStudents:"getShortStudents",getEventNames:"getSupervisorEventTitle",getSupervisorEvents:"getSupervisorEvents"})},methods:{getEvents(e){return this.getSupervisorEvents(e)},getEventIcon(e){return 2===e&&(e="2.1"),3===e&&(e="3.1"),s(3834)(`./status_${e}.svg`)},OpenEventInfo(e,t){this.eventInfo={studentId:e,eventId:t},this.eventInfo.isModalVisible=!0}}};const Ot=(0,U.Z)(xt,[["render",it],["__scopeId","data-v-7bce7c24"]]);var $t=Ot;const zt=[{path:"/login",name:"login",component:T},{path:"/profile",name:"profile",component:ve},{path:"/progress",name:"progress",component:tt},{path:"/control",name:"control",component:$t}],Mt=(0,g.p7)({history:(0,g.PO)("/"),routes:zt});var Lt=Mt,Gt={name:"NavBar",data(){return{menu:!1}},methods:{Home(){this.isSupervisor&&Lt.push({name:"control"}),this.isStudent&&Lt.push({name:"progress"})},Profile(){Lt.push("/profile")},Menu(){this.menu=!this.menu},CloseMenu(){this.menu=!1},Logout(){this.$store.dispatch("Logout").then((()=>{Lt.push("/login")})).catch((e=>{console.log("logout"),console.log(e),Lt.push("/login")}))}},computed:{...(0,z.Se)(["shortName","isSupervisor","isStudent"])},mounted(){let e=this;document.addEventListener("click",(function(t){t.target!==e.$refs["navbar-menu"]&&e.CloseMenu()}))}};const Bt=(0,U.Z)(Gt,[["render",v],["__scopeId","data-v-70042b3f"]]);var Tt=Bt,Kt={components:{NavBar:Tt},computed:(0,z.Se)(["getLoggedIn","getRole","isSupervisor","isStudent","getPassStatus"]),created(){this.$store.loggedIn||this.$store.dispatch("GetUser").then((()=>{this.$store.dispatch("Update"+this.getRole).then((()=>{this.getPassStatus?(this.isSupervisor&&Lt.push({name:"control"}),this.isStudent&&Lt.push({name:"progress"})):Lt.push({name:"profile"})})).catch((e=>{console.log(e),this.$store.dispatch("Logout"),Lt.push({name:"login"})}))})).catch((()=>{this.$store.dispatch("ClearStores"),Lt.push({name:"login"})}))}};const jt=(0,U.Z)(Kt,[["render",r]]);var Zt=jt,Ht=s(6265),Wt=s.n(Ht);const Rt=Wt().create({baseURL:"https://bmstu.site/api/v1/",withCredentials:!0,headers:{accept:"application/json"}});var Yt=Rt;function qt(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{login(s){return t(),e.post("user/login",s)},logout(){return t(),e.get("user/logout")},updatePass(s){return t(),e.put("user/login",s)},getUser(){return t(),e.get("user")}}}function At(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{getStudent(){return t(),e.get("student")},getGroup(){return t(),e.get("student/group")},getCoursesTable(){return t(),e.get("student/table")},uploadFile(s,n){return t(),e.post(`event/${s}/file`,n)},downloadFile(s){return t(),e.get(`event/${s}/file`)},deleteFile(s){return t(),e.delete(`event/${s}/file`)}}}function Jt(e){const t=()=>{e.defaults.headers["x-csrf-token"]=sessionStorage.getItem("csrf")};return{getSupervisor(){return t(),e.get("supervisor")},getCourses(){return t(),e.get("supervisor/courses")},getGroupsOnCourse(s){return t(),e.get(`course/${s}/group`)},getStudentsFromGroup(s){return t(),e.get(`group/${s}/students`)}}}var Qt={auth:qt(Yt),student:At(Yt),supervisor:Jt(Yt)};function Xt(e){e.commit("logout"),e.commit("clearCourses"),e.commit("clearStudent"),e.commit("clearSupervisorCourses"),e.commit("clearEvents"),e.commit("clearGroups"),e.commit("clearSupervisor")}var es={state:{loggedIn:!1,fName:"Vladimir",mName:"Igorevich",lName:"Lunkin",username:"",role:"",pass_status:!1},getters:{getLoggedIn(e){return e.loggedIn},fullName(e){return e.fName+" "+e.mName+" "+e.lName},shortName(e){return e.fName.length<1||e.mName.length<1||e.lName.length<1?"":e.lName+" "+e.fName[0]+". "+e.mName[0]+"."},getRole(e){return e.role},isSupervisor(e){return"Supervisor"===e.role},isStudent(e){return"Student"===e.role},getPassStatus(e){return e.pass_status}},mutations:{login(e){e.loggedIn=!0},logout(e){e.loggedIn=!1,e.fName="",e.mName="",e.lName="",e.username="",e.role="",e.pass_status=!1},setUser(e,t){e.fName=t.firstname,e.mName=t.middleName,e.lName=t.lastname,e.username=t.email,e.role=t.is_super?"Supervisor":"Student",e.pass_status=t.pass_status},updatePass(e){e.pass_status=!0}},actions:{async Login(e,{username:t,password:s}){return Qt.auth.login({email:t,password:s}).then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setUser",t.data)}))},async Logout(e){return Xt(e),Qt.auth.logout().then((e=>{if(200!==e.status)throw e}))},async ClearStores(e){Xt(e)},async GetUser(e){return Qt.auth.getUser().then((t=>{if(200!==t.status)throw t;e.commit("login"),e.commit("setUser",t.data)}))},async UpdatePass(e,{new_pass:t,old_pass:s}){return Qt.auth.updatePass({new_pass:t,old_pass:s}).then((t=>{if(200!==t.status)throw t;e.commit("updatePass")}))}}},ts={state:{id:0,groupID:"",groupCode:"ИУ5-35Б"},getters:{getCourseNumber(e){let t=e.groupCode;if(!t.length||t.length<1)return"";let s=0;while(s<t.length-1){if("-"===t[s])return(parseInt(t[s+1],10)+1)/2|0;s++}return"a"},getGroupCode(e){return e.groupCode}},mutations:{setStudent(e,t){e.id=t.id,e.groupID=t.groupID},setGroup(e,t){e.groupCode=t.groupCode},clearStudent(e){e.id=0,e.groupID="",e.groupCode=""}},actions:{async UpdateStudent(e){return Qt.student.getGroup().then((t=>{if(200!==t.status)throw t;e.commit("setGroup",{groupCode:t.data.groupCode})})).catch((()=>{console.log("!!! запрос на группу студента не сработал !!!"),e.commit("setGroup",{groupCode:"ИУ5-85Б"})})),Qt.student.getStudent().then((t=>{if(200!==t.status)throw t;e.commit("setStudent",{id:t.data.id,groupID:t.data.groupId})}))}}},ss={state:{courses:[{courseId:0,courseName:"Эксплуатация АСОИУ",events:[{eventId:0,eventDate:1,deadline:1,status:5,eventName:"Лаб 1",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:["Экспл_АСОИУ_Отчет_по_Лаб.1.docx","скриншоты.pdf"],comment:"Обновите титульник. В 5 пункте ошибка в расчетах. Перестроить график из 7 пункта."},{eventId:1,eventDate:1,deadline:1,status:4,eventName:"Лаб 2",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:["Экспл_АСОИУ_Отчет_по_Лаб.2.docx"]},{eventId:2,eventDate:1,deadline:1,status:3,eventName:"РК 1",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:[]},{eventId:3,eventDate:1,deadline:1,status:2,eventName:"Лаб 3",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:[]},{eventId:4,eventDate:1,deadline:1,status:6,eventName:"Лаб 4",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей.",files:["скриншоты.pdf"],comment:"Обновите титульник. В 5 пункте ошибка в расчетах. Перестроить график из 7 пункта."}]},{courseId:1,courseName:"Беспроводные сети",events:[{eventId:0,eventDate:1,deadline:1,status:5,eventName:"Лаб 1",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:1,eventDate:1,deadline:1,status:4,eventName:"Лаб 2",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:2,eventDate:1,deadline:1,status:3,eventName:"Лаб 3",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:3,eventDate:1,deadline:1,status:1,eventName:"ДЗ",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{eventId:4,eventDate:1,deadline:1,status:0,eventName:"Лаб 4",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."}]}]},getters:{getTable(e){return e.courses},getMaxEvents(e){let t=0;return e.courses.forEach((e=>{e.events.length>t&&(t=e.events.length)})),t},getEvent:e=>(t,s)=>{let n=[],o=0;while(o<e.courses.length){if(e.courses[o].courseId===t){n=e.courses[o].events;break}o++}let a=[];o=0;while(o<n.length){if(n[o].eventId===s){a=n[o];break}o++}return a},getEventName:e=>(t,s)=>e.courses[t].events[s].eventName,getCourseName:e=>t=>{let s="",n=0;while(n<e.courses.length){if(e.courses[n].courseId===t){s=e.courses[n].courseName;break}n++}return s}},mutations:{setCourses(e,t){e.courses=t},clearCourses(e){e.courses=[]}},actions:{async UpdateCoursesTable(e){return Qt.student.getCoursesTable().then((t=>{if(200!==t.status)throw t;e.commit("setCourses",t.data.courses)}))}}},ns={state:{id:10},getters:{},mutations:{setSupervisor(e,t){e.id=t.id},clearSupervisor(e){e.id=0}},actions:{async UpdateSupervisor(e){return Qt.supervisor.getSupervisor().then((t=>{if(200!==t.status)throw t;e.commit("setSupervisor",{id:t.data.id})}))}}},os={state:{courses:[{courseId:0,courseName:"Эксплуатация АСОИУ"},{courseId:1,courseName:"Беспроводные сети"},{courseId:2,courseName:"Русский язык делового общения"}]},getters:{},mutations:{setSupervisorCourses(e,t){e.courses=t},clearSupervisorCourses(e){e.courses=[]}},actions:{async GetSupervisorCourses(e){return Qt.supervisor.getCourses().then((t=>{if(200!==t.status)throw t;e.commit("setSupervisorCourses",t.data)}))}}},as={state:{eventsCommon:[{id:0,eventName:"ЛР 1",eventDate:"2022-05-23",deadline:"2022-05-23",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{id:1,eventName:"ЛР 2",eventDate:"2022-05-23",deadline:"2022-05-23",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."},{id:2,eventName:"ЛР 3",eventDate:"2022-05-23",deadline:"2022-05-23",description:"Установка операционной системы Ubuntu. Настройка прав доступа различным категориям пользователей."}],events:{0:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:6},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:5},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:4}],1:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:3},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:2},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:1}],2:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:0}],3:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:0}],4:[{eventId:0,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:1,uploadedFiles:["скриншоты.pdf"],status:0},{eventId:2,uploadedFiles:["скриншоты.pdf"],status:0}]}},getters:{getSupervisorEventTitle(e){return e.eventsCommon},getSupervisorEvents:e=>t=>e.events[t],getSupervisorEvent:e=>(t,s)=>{let n={},o=0;while(o<e.eventsCommon.length){if(e.eventsCommon[o].id===s){n=e.eventsCommon[o];break}o++}let a={};o=0;while(o<e.events[t].length){if(e.events[t][o].eventId===s){a=e.events[t][o];break}o++}return{eventId:s,eventDate:n.eventDate,deadline:n.deadline,status:a.status,eventName:n.eventName,description:n.description,files:a.uploadedFiles,comment:a.comment}}},mutations:{clearEvents(e){e.eventsCommon=[],e.events={}}},action:{}},rs={state:{groups:[{id:0,code:"ИУ5-75Б",students:[{id:0,fName:"0fName",mName:"0mName",lName:"0lName"},{id:1,fName:"1fName",mName:"1mName",lName:"1lName"},{id:2,fName:"2fName",mName:"mName",lName:"lName"},{id:3,fName:"3fName",mName:"mName",lName:"lName"},{id:4,fName:"4fName",mName:"mName",lName:"lName"}]},{id:1,code:"ИУ5-85Б",students:[{id:0,fName:"0fName",mName:"0mName",lName:"0lName"},{id:1,fName:"1fName",mName:"1mName",lName:"1lName"},{id:2,fName:"2fName",mName:"mName",lName:"lName"},{id:3,fName:"3fName",mName:"mName",lName:"lName"},{id:4,fName:"4fName",mName:"mName",lName:"lName"}]}],currGroup:1},getters:{getShortStudents(e){const t=e.currGroup;return!e.groups.length||e.groups.length<t||t<0?[]:e.groups[t].students.map((e=>e.fName.length<1||e.mName.length<1||e.lName.length<1?{}:{id:e.id,shortName:e.lName+" "+e.fName[0]+". "+e.mName[0]+"."}))},getShortStudent:e=>t=>{const s=e.currGroup;if(!e.groups.length||e.groups.length<s||s<0)return"";const n=e.groups[s].students;let o=0;while(o<n.length){if(n[o].id===t)return n[o].lName+" "+n[o].fName[0]+". "+n[o].mName[0]+".";o++}return""}},mutations:{clearGroups(e){e.groups=[],e.currGroup=0}},actions:{}},is=(0,z.MT)({modules:{user:es,student:ts,studentCourses:ss,Supervisor:ns,SupervisorCourses:os,SupervisorEvents:as,SupervisorGroups:rs}}),us={install:e=>{e.config.globalProperties.$api=Qt}};(0,n.ri)(Zt).use(us).use(is).use(Lt).mount("#app")},3834:function(e,t,s){var n={"./status_0.svg":2502,"./status_1.svg":602,"./status_2.1.svg":4163,"./status_2.svg":435,"./status_3.1.svg":2663,"./status_3.svg":113,"./status_4.svg":8642,"./status_5.svg":96,"./status_6.svg":4598};function o(e){var t=a(e);return s(t)}function a(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=3834},874:function(e,t,s){"use strict";e.exports=s.p+"img/calendar.5b6d21a8.svg"},7126:function(e,t,s){"use strict";e.exports=s.p+"img/calendar_event.e436ece3.svg"},8687:function(e,t,s){"use strict";e.exports=s.p+"img/caret_right.7477c40f.svg"},420:function(e,t,s){"use strict";e.exports=s.p+"img/close.8ef1dd4b.svg"},2539:function(e,t,s){"use strict";e.exports=s.p+"img/delete.89a97f84.svg"},7563:function(e,t,s){"use strict";e.exports=s.p+"img/hourglass_empty.f7d94d1e.svg"},5674:function(e,t,s){"use strict";e.exports=s.p+"img/menu.8166e461.svg"},5386:function(e,t,s){"use strict";e.exports=s.p+"img/password.478f5e34.svg"},2502:function(e,t,s){"use strict";e.exports=s.p+"img/status_0.ad3dda61.svg"},602:function(e,t,s){"use strict";e.exports=s.p+"img/status_1.44b8c29a.svg"},4163:function(e,t,s){"use strict";e.exports=s.p+"img/status_2.1.c76d8a7b.svg"},435:function(e,t,s){"use strict";e.exports=s.p+"img/status_2.43b0f8ca.svg"},2663:function(e,t,s){"use strict";e.exports=s.p+"img/status_3.1.7f7c200f.svg"},113:function(e,t,s){"use strict";e.exports=s.p+"img/status_3.39701250.svg"},8642:function(e,t,s){"use strict";e.exports=s.p+"img/status_4.5910b6fc.svg"},96:function(e,t,s){"use strict";e.exports=s.p+"img/status_5.f8372363.svg"},4598:function(e,t,s){"use strict";e.exports=s.p+"img/status_6.f08633c1.svg"},1816:function(e,t,s){"use strict";e.exports=s.p+"img/user.57b0ae03.svg"},9574:function(e,t,s){"use strict";e.exports=s.p+"img/logo.9a6ea637.svg"},8324:function(e,t,s){"use strict";e.exports=s.p+"img/student.6d558c89.svg"},5309:function(e,t,s){"use strict";e.exports=s.p+"img/supervisor.f4872d84.svg"}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,n,o,a){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],a=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[u])}))?n.splice(u--,1):(i=!1,a<r&&(r=a));if(i){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],i=n[1],u=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(u)var d=u(s)}for(t&&t(n);l<r.length;l++)a=r[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},n=self["webpackChunkdashb_bmstu"]=self["webpackChunkdashb_bmstu"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(9261)}));n=s.O(n)})();
//# sourceMappingURL=app.de92f0b8.js.map