"use strict";(self.webpackChunkBookIt=self.webpackChunkBookIt||[]).push([[530],{2530:(C,d,a)=>{a.r(d),a.d(d,{AuthModule:()=>w});var m=a(9808),u=a(6110),r=a(2382),p=a(8306),e=a(1223),h=a(6115);function f(o,s){1&o&&(e.TgZ(0,"p"),e._uU(1,"Log In with Your Credentials"),e.qZA())}function A(o,s){1&o&&(e.TgZ(0,"p"),e._uU(1,"Sign Up with a New Account"),e.qZA())}function Z(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return i.isLoginMode=!i.isLoginMode}),e.TgZ(1,"small"),e._uU(2,"Sign Up for a New Account"),e.qZA(),e.qZA()}}function M(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"a",14),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return i.isLoginMode=!i.isLoginMode}),e.TgZ(1,"small"),e._uU(2,"Already a member? Log In."),e.qZA(),e.qZA()}}function T(o,s){if(1&o&&(e.TgZ(0,"div",15),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" ",t.errorMessage," ")}}const v=[{path:"",component:(()=>{class o{constructor(t,n){this.auth=t,this.router=n,this.isLoginMode=!0,this.errorMessage="";const i=new r.cw({email:new r.NI("zelda@zeldamazur.com"),password:new r.NI("123456")});this.onAuthFormSubmit(i)}onAuthFormSubmit(t){if(t.invalid)return;let n=new p.y;const i=t.value.email,c=t.value.password;n=this.isLoginMode?this.auth.logIn(i,c):this.auth.signUp(i,c),n.subscribe({next:l=>{console.log(l),this.router.navigate(["bookshelf"])},error:l=>{const g=l.error.error.code;400==g&&this.isLoginMode?this.errorMessage="Invalid login credentials":400==g&&0==this.isLoginMode&&(this.errorMessage="This email has already been registered"),console.error("There was an error authenticating: ",l.error),t.reset()}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.e),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-auth"]],decls:20,vars:7,consts:[[1,"row"],[1,"col-xs-12","col-md-6","offset-md-3"],[3,"ngSubmit"],["authFormRef","ngForm"],[4,"ngIf"],[1,"form-group"],["for","email"],["type","email","id","email","name","email","email","","ngModel","","required","",1,"form-control"],["for","password"],["type","password","id","password","name","password","minlength","6","ngModel","","required","",1,"form-control"],[2,"display","inline-grid"],[3,"click",4,"ngIf"],["type","submit",1,"btn","btn-primary",3,"disabled"],["class","alert alert-danger mt-4",4,"ngIf"],[3,"click"],[1,"alert","alert-danger","mt-4"]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(i);const l=e.MAs(3);return n.onAuthFormSubmit(l)}),e.YNc(4,f,2,0,"p",4),e.YNc(5,A,2,0,"p",4),e.TgZ(6,"div",5),e.TgZ(7,"label",6),e._uU(8,"Email"),e.qZA(),e._UZ(9,"input",7),e.qZA(),e.TgZ(10,"div",5),e.TgZ(11,"label",8),e._uU(12,"Password"),e.qZA(),e._UZ(13,"input",9),e.qZA(),e.TgZ(14,"div",10),e.YNc(15,Z,3,0,"a",11),e.YNc(16,M,3,0,"a",11),e.TgZ(17,"button",12),e._uU(18),e.qZA(),e.qZA(),e.qZA(),e.YNc(19,T,2,1,"div",13),e.qZA(),e.qZA()}if(2&t){const i=e.MAs(3);e.xp6(4),e.Q6J("ngIf",n.isLoginMode),e.xp6(1),e.Q6J("ngIf",0==n.isLoginMode),e.xp6(10),e.Q6J("ngIf",n.isLoginMode),e.xp6(1),e.Q6J("ngIf",0==n.isLoginMode),e.xp6(1),e.Q6J("disabled",i.invalid),e.xp6(1),e.hij(" ",n.isLoginMode?"Log In":"Sign Up"," "),e.xp6(1),e.Q6J("ngIf",n.errorMessage.length)}},directives:[r._Y,r.JL,r.F,m.O5,r.Fj,r.on,r.JJ,r.On,r.Q7,r.wO],styles:["a[_ngcontent-%COMP%]{cursor:pointer}"]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(v)],u.Bz]}),o})(),w=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,r.u5,_]]}),o})()}}]);