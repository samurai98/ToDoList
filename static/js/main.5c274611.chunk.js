(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,r){t.exports={wrapper:"Preloader_wrapper__Zb6ZJ",message:"Preloader_message__XM94j",five:"Preloader_five__2l-AP",second:"Preloader_second__2c4sU",like:"Preloader_like__1rSZs",first:"Preloader_first__32m0g","tap-upper-1":"Preloader_tap-upper-1__24l31","tap-upper-2":"Preloader_tap-upper-2__3QCgz","tap-upper-3":"Preloader_tap-upper-3__1lmn7","tap-upper-4":"Preloader_tap-upper-4__16l6O"}},13:function(t,e,r){t.exports={"todoList-task":"ToDoListTask_todoList-task__2GoPs",editMode:"ToDoListTask_editMode__3N71D",taskInfo:"ToDoListTask_taskInfo__3Xo5k",taskTitle:"ToDoListTask_taskTitle__c1k9o",priorityStyle:"ToDoListTask_priorityStyle__2rD-2",priorityStyle1:"ToDoListTask_priorityStyle1__3S5CZ",priorityStyle2:"ToDoListTask_priorityStyle2__1NRsq",priorityStyle3:"ToDoListTask_priorityStyle3__Xi2Gs",priorityStyle4:"ToDoListTask_priorityStyle4__2LD3n",priorityStyle5:"ToDoListTask_priorityStyle5__3qQ1l",done:"ToDoListTask_done__dnIHD"}},16:function(t,e,r){t.exports={header:"Header_header__3p-lt",main:"Header_main__3w32D",error:"Header_error__20WgW",logout:"Header_logout__aifUX"}},17:function(t,e,r){t.exports={login:"Login_login__2-TOz",info:"Login_info__wc-q-",input:"Login_input__QoWlM",checkbox:"Login_checkbox__1hFLo",button:"Login_button__3wOUf"}},19:function(t,e,r){},22:function(t,e,r){t.exports={"todoList-footer":"ToDoListFooter_todoList-footer__2kPFC","filter-active":"ToDoListFooter_filter-active__17ebQ"}},26:function(t,e,r){t.exports={"todoList-header":"ToDoListTitle_todoList-header__3qu1E","todoList-header__title":"ToDoListTitle_todoList-header__title__2TgYa"}},28:function(t,e,r){t.exports={"todoList-newTaskForm":"AddNewItemForm_todoList-newTaskForm__13B71",error:"AddNewItemForm_error__1-rYP"}},29:function(t,e,r){t.exports={todoList:"ToDoList_todoList__3n6Oc",content:"ToDoList_content__180RX"}},41:function(t,e,r){t.exports={"todoList-deleteTaskForm":"DeleteItemForm_todoList-deleteTaskForm__2M6aH"}},42:function(t,e,r){t.exports={"todoList-tasks":"ToDoListTasks_todoList-tasks__1HORG"}},46:function(t,e,r){t.exports=r(75)},51:function(t,e,r){},75:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(14),i=r.n(o),s=(r(51),r(3)),c=r.n(s),u=r(1),l=r(7),d=r(4),p=r(24),f=r(6),T=r(5),m=(r(19),r(41)),h=r.n(m),E=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).render=function(){return a.a.createElement("span",{className:h.a["todoList-deleteTaskForm"]},a.a.createElement("button",{onClick:function(){t.props.delete(t.props.id)}},"X"))},t}return r}(a.a.Component),O=r(13),b=r.n(O),k=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isEditMode:!1,title:t.props.task.title,priority:t.props.task.priority},t.onIsDoneChanged=function(e){t.props.changeStatus(t.props.task,e.currentTarget.checked)},t.onTitleChanged=function(e){t.setState({title:e.currentTarget.value})},t.onPriorityChanged=function(e){t.setState({priority:+e.currentTarget.value})},t.activateEditMode=function(){t.setState({isEditMode:!0})},t.deActivateEditMode=function(){t.setState({isEditMode:!1}),t.props.changeTitle(t.props.task,t.state.title,t.state.priority)},t.render=function(){var e=2===t.props.task.status,r=e?"".concat(b.a["todoList-task"]," ").concat(b.a.done):b.a["todoList-task"],n=[t.props.task.priority,"priorityStyle"+t.props.task.priority];return a.a.createElement("div",Object.assign({className:"".concat(r," item ").concat(t.props.snapshot.isDragging&&"dragging"),title:"Click to edit!",ref:t.props.provided.innerRef},t.props.provided.draggableProps,t.props.provided.dragHandleProps),t.state.isEditMode?a.a.createElement("div",{className:b.a.editMode},a.a.createElement("input",{type:"checkbox",checked:e,onChange:t.onIsDoneChanged}),a.a.createElement("input",{onChange:t.onTitleChanged,autoFocus:!0,value:t.state.title}),a.a.createElement("span",null,"priority: "),a.a.createElement("input",{onChange:t.onPriorityChanged,type:"number",min:"1",max:"5",value:t.state.priority}),a.a.createElement("button",{onClick:t.deActivateEditMode},"Save")):a.a.createElement("div",{className:b.a.taskInfo,onClick:t.activateEditMode},a.a.createElement("div",{className:"".concat(b.a.priorityStyle," ").concat(b.a[n[1]]),title:"Priority: ".concat(t.props.task.priority)}," "),a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",checked:e,onChange:t.onIsDoneChanged}),a.a.createElement("span",{className:b.a.taskTitle,onClick:t.activateEditMode},t.props.task.title))),a.a.createElement("div",null,a.a.createElement(E,{delete:t.props.deleteTask,id:t.props.task.id})))},t}return r}(a.a.Component),v=r(42),g=r.n(v),S=r(15),L=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).render=function(){var e=t.props.tasks.map(function(e,r){return a.a.createElement(S.b,{draggableId:e.id,index:r,key:e.id},function(n,o){return a.a.createElement(k,{key:e.id,index:r,task:e,changeStatus:t.props.changeStatus,changeTitle:t.props.changeTitle,deleteTask:t.props.deleteTask,provided:n,snapshot:o})})});return a.a.createElement("div",{className:g.a["todoList-tasks"]},e)},t}return r}(a.a.Component),A=r(22),j=r.n(A),_=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isHidden:!1},t.onAllFilterClick=function(){t.props.changeFilter("All")},t.onCompletedFilterClick=function(){t.props.changeFilter("Completed")},t.onActiveFilterClick=function(){t.props.changeFilter("Active")},t.onShowFiltersClick=function(){t.setState({isHidden:!0})},t.onHideFiltersClick=function(){t.setState({isHidden:!1})},t.render=function(){var e="All"===t.props.filterValue?j.a["filter-active"]:"",r="Completed"===t.props.filterValue?j.a["filter-active"]:"",n="Active"===t.props.filterValue?j.a["filter-active"]:"";return a.a.createElement("div",{className:j.a["todoList-footer"]},!t.state.isHidden&&a.a.createElement("div",null,a.a.createElement("button",{className:e,onClick:t.onAllFilterClick},"All"),a.a.createElement("button",{className:r,onClick:t.onCompletedFilterClick},"Completed"),a.a.createElement("button",{className:n,onClick:t.onActiveFilterClick},"Active")),!t.state.isHidden&&a.a.createElement("span",{onClick:t.onShowFiltersClick},"hide"),t.state.isHidden&&a.a.createElement("span",{onClick:t.onHideFiltersClick},"show"))},t}return r}(a.a.Component),y=r(28),P=r.n(y),D=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={error:!1,title:""},t.onAddItemClick=function(){var e=t.state.title.trim();""===e?t.setState({error:!0}):(t.setState({title:"",error:!1}),t.props.addItem(e))},t.onTitleChanged=function(e){t.setState({error:!1,title:e.currentTarget.value})},t.onKeyPress=function(e){"Enter"===e.key&&t.onAddItemClick()},t.render=function(){var e=t.state.error?"".concat(P.a.error):"";return a.a.createElement("div",{className:P.a["todoList-newTaskForm"]},a.a.createElement("input",{type:"text",placeholder:"New item name",className:e,onChange:t.onTitleChanged,onKeyPress:t.onKeyPress,value:t.state.title}),a.a.createElement("button",{onClick:t.onAddItemClick},"Add"))},t}return r}(a.a.Component),C=r(26),R=r.n(C),I=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isEditMode:!1,title:t.props.title},t.onTitleChanged=function(e){t.setState({title:e.currentTarget.value})},t.activateEditMode=function(){t.setState({isEditMode:!0})},t.deActivateEditMode=function(){t.setState({isEditMode:!1}),t.props.updateTodolist(t.state.title)},t.render=function(){return a.a.createElement("div",{className:R.a["todoList-header"]},a.a.createElement("div",{className:R.a["todoList-header__title"]},t.state.isEditMode?a.a.createElement("input",{onBlur:t.deActivateEditMode,onChange:t.onTitleChanged,autoFocus:!0,value:t.state.title}):a.a.createElement("h3",{className:R.a["todoList-header__title"],onClick:t.activateEditMode},t.props.title)),a.a.createElement("div",null,a.a.createElement(E,{id:t.props.idList,delete:t.props.delete})))},t}return r}(a.a.Component),w=r(8),x=r(30),N=r(44),U=r.n(N).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"641371ec-d5ac-4e54-91b7-f9eab8c7c8f0"}}),F=function(){return U.get("todo-lists/").then(function(t){return t.data})},M=function(t){return U.get("todo-lists/".concat(t,"/tasks")).then(function(t){return t.data})},K=function(t){return U.post("todo-lists/",{title:t}).then(function(t){return t.data})},H=function(t,e){return U.post("todo-lists/".concat(e,"/tasks"),{title:t}).then(function(t){return t.data})},G=function(t,e){return U.put("todo-lists/".concat(t),{title:e}).then(function(t){return t.data})},V=function(t){return U.put("todo-lists/".concat(t.todoListId,"/tasks/").concat(t.id),t).then(function(t){return t.data})},W=function(t){return U.delete("todo-lists/".concat(t)).then(function(t){return t.data})},X=function(t,e){return U.delete("todo-lists/".concat(t,"/tasks/").concat(e)).then(function(t){return t.data})},q=function(t,e){return U.put("todo-lists/".concat(t,"/reorder"),{putAfterItemId:e}).then(function(t){return t.data})},B=function(t,e,r){return U.put("todo-lists/".concat(t,"/tasks/").concat(e,"/reorder"),{putAfterItemId:r}).then(function(t){return t.data})},Q=function(){return U.get("auth/me").then(function(t){return t.data})},Z=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return U.post("auth/login",{email:t,password:e,rememberMe:r,captcha:n})},z=function(){return U.post("auth/logout")},J=function(){return U.get("security/get-captcha-url")},Y={todolists:[],error:"",isLoading:!0,isLoadingList:!0},$=function(t){return{type:"TodoAPP/Todolist/SET-TODOLISTS-ERROR",error:t}},tt=function(t){return{type:"TodoAPP/Todolist/SET-TASKS-ERROR",error:t}},et=function(t){return{type:"TodoAPP/Todolist/ADD-TODOLIST-ERROR",error:t}},rt=function(t){return{type:"TodoAPP/Todolist/ADD-TASK-ERROR",error:t}},nt=function(t){return{type:"TodoAPP/Todolist/UPDATE_TODOLIST-ERROR",error:t}},at=function(t){return{type:"TodoAPP/Todolist/UPDATE-TASK-ERROR",error:t}},ot=function(t){return{type:"TodoAPP/Todolist/DELETE-TODOLIST-ERROR",error:t}},it=function(t,e){return{type:"TodoAPP/Todolist/DELETE-TASK-SUCCESS",todolistId:t,taskId:e}},st=function(t){return{type:"TodoAPP/Todolist/DELETE-TASK-ERROR",error:t}},ct=function(t){return{type:"TodoAPP/Todolist/TOGGLE-IS-LOADING",isLoading:t}},ut=function(t){return{type:"TodoAPP/Todolist/TOGGLE-IS-LOADING-LIST",isLoading:t}},lt=function(){return function(){var t=Object(l.a)(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(ct(!0)),t.next=3,F().then(function(t){e({type:"TodoAPP/Todolist/SET-TODOLISTS-SUCCESS",todolists:t})}).catch(function(t){e($(t))});case 3:e(ct(!1));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},dt=function(t){return function(){var e=Object(l.a)(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(ut(!0)),e.next=3,M(t).then(function(e){var n,a;r((n=t,a=e.items,{type:"TodoAPP/Todolist/SET-TASKS-SUCCESS",todolistId:n,tasks:a}))}).catch(function(t){r(tt(t))});case 3:r(ut(!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},pt=function(t,e){return function(){var r=Object(l.a)(c.a.mark(function r(n){var a;return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n(ct(!0)),a="",r.next=4,H(t,e).then(function(t){var r,o;n((r=e,o=t.data.item,{type:"TodoAPP/Todolist/ADD-TASK-SUCCESS",todolistId:r,newTask:o})),n(rt("")),a=t.data.item.id}).catch(function(t){n(rt(t))});case 4:return n(ct(!1)),r.abrupt("return",a);case 6:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}()},ft=function(t){return function(){var e=Object(l.a)(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(ct(!0)),e.next=3,V(t).then(function(t){r({type:"TodoAPP/Todolist/UPDATE-TASK-SUCCESS",task:t.data.item}),r(at(""))}).catch(function(t){r(at(t))});case 3:r(ct(!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Tt=function(t,e){return function(){var r=Object(l.a)(c.a.mark(function r(n){return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n(ct(!0)),r.next=3,X(t,e).then(function(){n(it(t,e)),n(st(""))}).catch(function(t){n(st(t))});case 3:n(ct(!1));case 4:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}()},mt=r(29),ht=r.n(mt),Et=r(12),Ot=r.n(Et),bt=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).render=function(){return a.a.createElement("div",{className:Ot.a.wrapper,style:{height:t.props.height}},a.a.createElement("div",{className:Ot.a.five},a.a.createElement("div",{className:Ot.a.first}," "),a.a.createElement("div",{className:Ot.a.first}," "),a.a.createElement("div",{className:Ot.a.first}," "),a.a.createElement("div",{className:Ot.a.first}," "),a.a.createElement("div",{className:Ot.a.second}," "),a.a.createElement("div",{className:Ot.a.like}," ")),a.a.createElement("div",{className:Ot.a.message},"Waiting for server response..."))},t}return r}(a.a.Component),kt=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).restoreState=function(){t.props.setTasks(t.props.idList)},t.state={state:[],filterValue:"All"},t.addTask=function(e){t.props.addTask(e,t.props.idList)},t.deleteToDoList=function(){t.props.deleteToDoList(t.props.idList)},t.deleteTask=function(e){t.props.deleteTask(t.props.idList,e)},t.changeFilter=function(e){t.setState({filterValue:e})},t.changeStatus=function(e,r){t.changeTask(Object(u.a)(Object(u.a)({},e),{},{status:r?2:0}))},t.changeTitle=function(e,r,n){t.changeTask(Object(u.a)(Object(u.a)({},e),{},{title:r,priority:n}))},t.changeTask=function(e){t.props.updateTask(e)},t.updateTodolist=function(e){t.props.updateToDoList(t.props.idList,e)},t.render=function(){var e=t.props.tasks,r=(void 0===e?[]:e).filter(function(e){switch(t.state.filterValue){case"Completed":return 2===e.status;case"Active":return 0===e.status;default:return!0}});return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",Object.assign({className:ht.a.todoList,ref:t.props.provided.innerRef},t.props.provided.draggableProps),a.a.createElement("div",{className:ht.a.content,key:t.props.idList},t.props.isLoadingList?a.a.createElement(bt,{height:"35vh"}):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",t.props.provided.dragHandleProps,a.a.createElement(I,{title:t.props.title,idList:t.props.idList,delete:t.deleteToDoList,updateTodolist:t.updateTodolist})),a.a.createElement(S.c,{droppableId:t.props.index+"",type:"task"},function(e){return a.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),a.a.createElement(L,{tasks:r,changeStatus:t.changeStatus,changeTitle:t.changeTitle,deleteTask:t.deleteTask}),e.placeholder)}),a.a.createElement(D,{addItem:t.addTask})),a.a.createElement(_,{filterValue:t.state.filterValue,changeFilter:t.changeFilter}))))},t}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.restoreState()}}]),r}(a.a.Component),vt=Object(w.b)(function(t){return{isLoadingList:t.reducer.isLoadingList}},{setTasks:dt,addTask:pt,updateToDoList:function(t,e){return function(){var r=Object(l.a)(c.a.mark(function r(n){return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n(ct(!0)),r.next=3,G(t,e).then(function(r){0===r.resultCode&&(n({type:"TodoAPP/Todolist/UPDATE_TODOLIST-SUCCESS",todoListId:t,newTitle:e}),n(nt("")))}).catch(function(t){n(nt(t))});case 3:n(ct(!1));case 4:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}()},updateTask:ft,deleteToDoList:function(t){return function(){var e=Object(l.a)(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(ct(!0)),e.next=3,W(t).then(function(){r({type:"TodoAPP/Todolist/DELETE-TODOLIST-SUCCESS",todolistId:t}),r(ot(""))}).catch(function(t){r(ot(t))});case 3:r(ct(!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},deleteTask:Tt})(kt),gt={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null,authError:""},St=function(t,e,r,n){return{type:"TodoAPP/Todolist/auth/SET-USER-DATA",userId:t,email:e,login:r,isAuth:n}},Lt=function(t){return{type:"TodoAPP/Todolist/auth/GET-CAPTCHA-URL",captchaUrl:t}},At=function(t){return{type:"TodoAPP/Todolist/auth/SET-AUTH-ERROR",error:t}},jt=function(){return function(){var t=Object(l.a)(c.a.mark(function t(e){var r,n,a,o,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q();case 2:0===(r=t.sent).resultCode&&(n=r.data,a=n.id,o=n.login,i=n.email,e(St(a,i,o,!0)),e(lt()));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},_t=function(){return function(){var t=Object(l.a)(c.a.mark(function t(e){var r,n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J();case 2:r=t.sent,n=r.data.url,e(Lt(n));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},yt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:gt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoAPP/Todolist/auth/SET-USER-DATA":return Object(u.a)(Object(u.a)({},t),{},{userId:e.userId,email:e.email,login:e.login,isAuth:e.isAuth});case"TodoAPP/Todolist/auth/GET-CAPTCHA-URL":return Object(u.a)(Object(u.a)({},t),{},{captchaUrl:e.captchaUrl});case"TodoAPP/Todolist/auth/SET-AUTH-ERROR":return Object(u.a)(Object(u.a)({},t),{},{authError:e.error});default:return t}},Pt=r(23),Dt=r(17),Ct=r.n(Dt),Rt=r(16),It=r.n(Rt),wt=function(){var t=Object(n.useState)(""),e=Object(Pt.a)(t,2),r=e[0],o=e[1],i=Object(n.useState)(""),s=Object(Pt.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(!1),f=Object(Pt.a)(p,2),T=f[0],m=f[1],h=Object(n.useState)(""),E=Object(Pt.a)(h,2),O=E[0],b=E[1],k=Object(w.d)(function(t){return t.authReducer.captchaUrl}),v=Object(w.d)(function(t){return t.reducer.isLoading}),g=Object(w.d)(function(t){return t.authReducer.authError}),S=Object(w.c)();return a.a.createElement(a.a.Fragment,null,v?a.a.createElement(bt,{height:"100vh"}):a.a.createElement("div",{className:Ct.a.login},a.a.createElement("div",{className:Ct.a.info},a.a.createElement("h1",null,"TODOLIST!"),a.a.createElement("p",null,"For test this app, enter"),a.a.createElement("p",null,"Login: ",a.a.createElement("b",null,"vl.bkmebel@bk.ru")),a.a.createElement("p",null,"Password: ",a.a.createElement("b",null,"test_account")),a.a.createElement("p",null,"or"),a.a.createElement("p",null,"Login: ",a.a.createElement("b",null,"free@samuraijs.com")),a.a.createElement("p",null,"Password: ",a.a.createElement("b",null,"free"))),g&&a.a.createElement("div",{className:It.a.error},"Error: ",g),a.a.createElement("input",{type:"email",className:Ct.a.input,onChange:function(t){return o(t.currentTarget.value)},value:r,placeholder:"Email"}),a.a.createElement("input",{type:"password",className:Ct.a.input,onChange:function(t){return d(t.currentTarget.value)},value:u,placeholder:"Password"}),a.a.createElement("div",{className:Ct.a.checkbox},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",checked:T,onChange:function(t){return m(t.currentTarget.checked)}}),a.a.createElement("span",null,"remember me"))),k&&a.a.createElement("img",{src:k,alt:"captcha"}),k&&a.a.createElement("input",{className:Ct.a.input,type:"text",onChange:function(t){return b(t.currentTarget.value)},value:O,placeholder:"Enter captcha"}),a.a.createElement("div",null,a.a.createElement("button",{className:Ct.a.button,onClick:function(){return S(function(t,e,r,n){return function(){var a=Object(l.a)(c.a.mark(function a(o){var i,s;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Z(t,e,r,n);case 2:0===(i=a.sent).data.resultCode?(o(jt()),o(At(""))):(10===i.data.resultCode&&o(_t()),s=i.data.messages.length>0?i.data.messages[0]:"Some Error",o(At("Auth error. "+s)));case 4:case"end":return a.stop()}},a)}));return function(t){return a.apply(this,arguments)}}()}(r,u,T,O))}},"Login"))))},xt=function(){var t=Object(w.d)(function(t){return t.reducer.error}),e=Object(w.d)(function(t){return t.authReducer.login}),r=Object(w.c)();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:It.a.header},t?a.a.createElement("div",{className:It.a.error}," Error: ",t," "):a.a.createElement("div",null," "),a.a.createElement("div",{className:It.a.main},a.a.createElement("div",{className:It.a.userInfo},"Welcome, ",a.a.createElement("b",null,e)),a.a.createElement("button",{className:It.a.logout,onClick:function(){return r(function(){var t=Object(l.a)(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:0===t.sent.data.resultCode&&e(St(null,null,null,!1));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},"Logout"))))},Nt=function(t){Object(f.a)(r,t);var e=Object(T.a)(r);function r(){var t;Object(d.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).restoreState=function(){t.props.setToDoLists()},t.addToDoList=function(e){t.props.addToDoList(e)},t.onDragEnd=function(){var e=Object(l.a)(c.a.mark(function e(r){var n,a,o,i,s,l,d,p,f,T,m,h,E;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.destination){e.next=2;break}return e.abrupt("return");case 2:if(r.destination.index!==r.source.index||r.destination.droppableId!==r.source.droppableId){e.next=4;break}return e.abrupt("return");case 4:if("column"!==r.type){e.next=10;break}return n=r.draggableId,a=r.destination.index,o=0===r.destination.index?"":r.source.index>r.destination.index?t.props.todolists[a-1].id:t.props.todolists[a].id,e.next=10,t.props.reorderList(n,o);case 10:if("task"!==r.type){e.next=35;break}if(r.destination.droppableId===r.source.droppableId){e.next=28;break}return i=t.props.todolists[r.source.droppableId].tasks[r.source.index],s=t.props.todolists[r.destination.droppableId].id,e.next=16,t.props.addTask(i.title,s);case 16:if(l=e.sent,1===i.priority){e.next=20;break}return e.next=20,t.props.updateTask(Object(u.a)(Object(u.a)({},i),{},{todoListId:s,id:l,priority:i.priority}));case 20:return d=t.props.todolists[r.source.droppableId].id,e.next=23,t.props.deleteTask(d,r.draggableId);case 23:return p=0===r.destination.index?"":t.props.todolists[r.destination.droppableId].tasks[r.destination.index-1].id,e.next=26,t.props.reorderTask(s,l,p);case 26:e.next=35;break;case 28:return f=r.destination.droppableId,T=t.props.todolists[f].id,m=r.draggableId,h=r.destination.index,E=0===h?"":r.source.index>h?t.props.todolists[f].tasks[h-1].id:t.props.todolists[f].tasks[h].id,e.next=35,t.props.reorderTask(T,m,E);case 35:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.render=function(){t.props.isAuth||(t.props.getAuthUserData(),t.props.setToDoListsError(""));var e=t.props.todolists.map(function(t,e){return a.a.createElement(S.b,{draggableId:t.id,index:e,key:t.id},function(r,n){return a.a.createElement(vt,{key:t.id,index:e,idList:t.id,title:t.title,tasks:t.tasks,provided:r,snapshot:n})})});return a.a.createElement(a.a.Fragment,null,t.props.isAuth?t.props.isLoading?a.a.createElement(bt,{height:"100vh"}):a.a.createElement("div",{className:"App"},a.a.createElement(xt,null),a.a.createElement(S.a,{onDragEnd:t.onDragEnd},a.a.createElement(S.c,{droppableId:"all-columns",direction:"horizontal",type:"column"},function(t){return a.a.createElement("div",Object.assign({className:"todolists"},t.droppableProps,{ref:t.innerRef}),e,t.placeholder)}),a.a.createElement(D,{addItem:t.addToDoList}))):a.a.createElement(wt,null))},t}return Object(p.a)(r,[{key:"componentDidMount",value:function(){this.restoreState()}}]),r}(a.a.Component),Ut=Object(w.b)(function(t){return{todolists:t.reducer.todolists,isLoading:t.reducer.isLoading,isAuth:t.authReducer.isAuth}},{setToDoLists:lt,addToDoList:function(t){return function(){var e=Object(l.a)(c.a.mark(function e(r){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r(ct(!0)),e.next=3,K(t).then(function(t){var e=t.data.item;r({type:"TodoAPP/Todolist/ADD-TODOLIST-SUCCESS",newToDoList:e}),r(et(""))}).catch(function(t){r(et(t))});case 3:r(ct(!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},reorderTask:function(t,e,r){return function(){var n=Object(l.a)(c.a.mark(function n(a){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a(ct(!0)),n.next=3,B(t,e,r).then(function(){a(dt(t)),a(tt(""))}).catch(function(t){a(tt(t))});case 3:a(ct(!1));case 4:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},reorderList:function(t,e){return function(){var r=Object(l.a)(c.a.mark(function r(n){return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n(ct(!0)),r.next=3,q(t,e).then(function(){n(lt()),n($(""))}).catch(function(t){n($(t))});case 3:n(ct(!1));case 4:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}()},addTask:pt,updateTask:ft,deleteTask:Tt,toggleIsLoading:ct,getAuthUserData:jt,setToDoListsError:$})(Nt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ft=r(10),Mt=r(45),Kt=Object(Ft.c)({reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoAPP/Todolist/SET-TODOLISTS-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:e.todolists.map(function(t){return Object(u.a)(Object(u.a)({},t),{},{tasks:[]})})});case"TodoAPP/Todolist/SET-TODOLISTS-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"SET TODOLISTS ERROR. "+e.error:""});case"TodoAPP/Todolist/SET-TASKS-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id!==e.todolistId?t:Object(u.a)(Object(u.a)({},t),{},{tasks:e.tasks})})});case"TodoAPP/Todolist/SET-TASKS-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"SET TASKS ERROR. "+e.error:""});case"TodoAPP/Todolist/ADD-TODOLIST-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:[].concat(Object(x.a)(t.todolists),[e.newToDoList])});case"TodoAPP/Todolist/ADD-TODOLIST-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"ADD TODOLIST ERROR. "+e.error:""});case"TodoAPP/Todolist/ADD-TASK-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id!==e.todolistId?t:Object(u.a)(Object(u.a)({},t),{},{tasks:[].concat(Object(x.a)(t.tasks),[e.newTask])})})});case"TodoAPP/Todolist/ADD-TASK-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"ADD TASK ERROR. "+e.error:""});case"TodoAPP/Todolist/UPDATE_TODOLIST-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id!==e.todoListId?t:Object(u.a)(Object(u.a)({},t),{},{title:e.newTitle})})});case"TodoAPP/Todolist/UPDATE_TODOLIST-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"UPDATE TODOLIST ERROR. "+e.error:""});case"TodoAPP/Todolist/UPDATE-TASK-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id!==e.task.todoListId?t:Object(u.a)(Object(u.a)({},t),{},{tasks:t.tasks.map(function(t){return t.id!==e.task.id?t:e.task})})})});case"TodoAPP/Todolist/UPDATE-TASK-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"UPDATE TASK ERROR. "+e.error:""});case"TodoAPP/Todolist/DELETE-TODOLIST-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:t.todolists.filter(function(t){return t.id!==e.todolistId})});case"TodoAPP/Todolist/DELETE-TODOLIST-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"DELETE TODOLIST ERROR. "+e.error:""});case"TodoAPP/Todolist/DELETE-TASK-SUCCESS":return Object(u.a)(Object(u.a)({},t),{},{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(u.a)(Object(u.a)({},t),{},{tasks:t.tasks.filter(function(t){return t.id!==e.taskId})}):t})});case"TodoAPP/Todolist/DELETE-TASK-ERROR":return Object(u.a)(Object(u.a)({},t),{},{error:e.error?"DELETE TASK ERROR. "+e.error:""});case"TodoAPP/Todolist/TOGGLE-IS-LOADING":return Object(u.a)(Object(u.a)({},t),{},{isLoading:e.isLoading});case"TodoAPP/Todolist/TOGGLE-IS-LOADING-LIST":return Object(u.a)(Object(u.a)({},t),{},{isLoadingList:e.isLoading});default:return t}},authReducer:yt}),Ht=Object(Ft.e)(Kt,Object(Ft.a)(Mt.a));i.a.render(a.a.createElement(w.a,{store:Ht},a.a.createElement(Ut,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.5c274611.chunk.js.map