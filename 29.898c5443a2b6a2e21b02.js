(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"sT4/":function(l,n,c){"use strict";c.r(n);var u=c("CcnG"),r=function(){return function(){}}(),o=c("zl1X"),e=c("pMnS"),b=c("8KBR"),t=c("xLE1"),a=c("mN7P"),s=c("2HPr"),i=c("Ip0R"),p=c("6/Z3"),d=c("QkwE"),m=c("vAyd"),A=function(){return function(){this.codeExample='\n<form clrForm [clrLayout]="\'horizontal\'" class="clr-row">\n    <h4 class="clr-col-12">Personal Data</h4>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">First name</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Last name</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-radio-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Gender</label>\n        <clr-radio-wrapper>\n            <label>Male</label>\n            <input clrRadio class="clr-col-12 clr-col-sm-4 clr-col-lg-6" type="radio" name="gender"/>\n        </clr-radio-wrapper>\n        <clr-radio-wrapper>\n            <label>Female</label>\n            <input clrRadio class="clr-col-12 clr-col-sm-4 clr-col-lg-6" type="radio" name="gender"/>\n        </clr-radio-wrapper>\n    </clr-radio-container>\n    <clr-select-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Country</label>\n        <select clrSelect class="clr-col-12 clr-col-sm-3 clr-col-lg-5">\n            <option>Austria</option>\n            <option>Germany</option>\n            <option>United States of America</option>\n        </select>\n    </clr-select-container>\n    <clr-date-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Date of Birth</label>\n        <input clrDate type="text" class="clr-col-12 clr-col-sm-6 clr-col-lg-6"/>\n    </clr-date-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">E-Mail</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Phone</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n\n    <h4 class="clr-col-12">User Data</h4>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Username</label>\n        <input clrInput type="text" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-input-container>\n    <clr-password-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Password</label>\n        <input clrPassword type="password" class="clr-col-12 clr-col-sm-4 clr-col-lg-6"/>\n    </clr-password-container>\n\n    <h4 class="clr-col-12">Other Data</h4>\n    <clr-date-time-container class="clr-col-12 clr-col-lg-6 clr-row">\n        <clr-date-container class="clr-col-12">\n            <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Start date & time</label>\n            <input clrDate type="text" class="clr-col-12 clr-col-sm-10 clr-col-lg-9"/>\n        </clr-date-container>\n        <input clrTime type="time" />\n    </clr-date-time-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">End time</label>\n        <input clrInput type="time" class="clr-col-12 clr-col-sm-3 clr-col-lg-5"/>\n    </clr-input-container>\n    <clr-input-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Daily Donation</label>\n        <input clrInput clrNumeric [clrUnit]="\'\u20ac\'" type="text" class="clr-col-12 clr-col-sm-3 clr-col-lg-5"/>\n    </clr-input-container>\n    <clr-checkbox-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Newsletter Subscriptions</label>\n        <clr-checkbox-wrapper>\n            <label>Weekly</label>\n            <input clrCheckbox class="clr-col-12 clr-col-sm-6 clr-col-lg-6" type="checkbox"/>\n        </clr-checkbox-wrapper>\n        <clr-checkbox-wrapper>\n            <label>Monthly</label>\n            <input clrCheckbox class="clr-col-12 clr-col-sm-6 clr-col-lg-6" type="checkbox"/>\n        </clr-checkbox-wrapper>\n    </clr-checkbox-container>\n    <clr-textarea-container class="clr-col-12 clr-col-lg-6">\n        <label class="clr-col-12 clr-col-sm-2 clr-col-lg-3">Comment / Feedback</label>\n        <textarea clrTextarea type="text" class="clr-col-12 clr-col-sm-10 clr-col-lg-9"></textarea>\n    </clr-textarea-container>\n</form>\n'}}(),g=u.ob({encapsulation:2,styles:[],data:{}});function F(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,257,"clr-main-container",[],[[2,"main-container",null]],null,null,null,null)),u.pb(1,212992,null,0,t.pb,[u.k,t.Kd],null,null),u.pb(2,8404992,null,0,t.uc,[],null,null),(l()(),u.qb(3,0,null,null,1,"clr-demo-menu",[],null,null,null,a.b,a.a)),u.pb(4,49152,null,0,s.a,[i.e,u.B],null,null),(l()(),u.qb(5,0,null,null,4,"div",[["class","content-header"]],null,null,null,null,null)),(l()(),u.qb(6,0,null,null,1,"clr-back-button",[],null,null,null,b.w,b.b)),u.pb(7,49152,null,0,p.b,[i.l],null,null),(l()(),u.qb(8,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Forms Layout"])),(l()(),u.qb(10,0,null,null,247,"div",[["class","content-container"]],null,null,null,null,null)),(l()(),u.qb(11,0,null,null,246,"div",[["class","content-area"]],null,null,null,null,null)),(l()(),u.qb(12,0,null,null,239,"form",[["class","clr-row"],["clrForm",""]],[[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],null,null,null,null)),u.Fb(512,null,t.ke,t.ke,[]),u.Fb(512,null,t.ne,t.ne,[]),u.pb(15,16384,null,0,t.Y,[t.ke,t.ne],null,null),u.pb(16,81920,null,0,t.kb,[t.ke],{layout:[0,"layout"]},null),u.Fb(256,null,t.oe,!0,[]),(l()(),u.qb(18,0,null,null,1,"h4",[["class","clr-col-12"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Personal Data"])),(l()(),u.qb(20,0,null,null,11,"clr-input-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.T,o.x)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(24,180224,null,1,t.hb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,1,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(27,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(28,212992,[[1,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["First name"])),(l()(),u.qb(30,16777216,null,1,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrInput",""],["type","text"]],[[2,"clr-input",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,31).triggerValidation()&&r),r},null,null)),u.pb(31,212992,null,0,t.gb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(32,0,null,null,11,"clr-input-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.T,o.x)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(36,180224,null,1,t.hb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,2,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(39,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(40,212992,[[2,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Last name"])),(l()(),u.qb(42,16777216,null,1,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrInput",""],["type","text"]],[[2,"clr-input",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,43).triggerValidation()&&r),r},null,null)),u.pb(43,212992,null,0,t.gb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(44,0,null,null,26,"clr-radio-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.V,o.z)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(48,180224,null,1,t.Bb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,3,{label:0}),(l()(),u.qb(50,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(51,212992,[[3,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Gender"])),(l()(),u.qb(53,0,null,1,8,"clr-radio-wrapper",[],[[2,"clr-radio-wrapper",null]],null,null,o.W,o.A)),u.pb(54,114688,null,1,t.Db,[],null,null),u.Gb(335544320,4,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(57,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),u.pb(58,212992,[[4,4],[3,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Male"])),(l()(),u.qb(60,16777216,null,0,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrRadio",""],["name","gender"],["type","radio"]],[[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,61).triggerValidation()&&r),r},null,null)),u.pb(61,212992,null,0,t.Ab,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(62,0,null,1,8,"clr-radio-wrapper",[],[[2,"clr-radio-wrapper",null]],null,null,o.W,o.A)),u.pb(63,114688,null,1,t.Db,[],null,null),u.Gb(335544320,5,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(66,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),u.pb(67,212992,[[5,4],[3,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Female"])),(l()(),u.qb(69,16777216,null,0,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrRadio",""],["name","gender"],["type","radio"]],[[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,70).triggerValidation()&&r),r},null,null)),u.pb(70,212992,null,0,t.Ab,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(71,0,null,null,18,"clr-select-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.X,o.B)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(75,180224,null,2,t.Fb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,6,{label:0}),u.Gb(335544320,7,{multiple:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(79,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(80,212992,[[6,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Country"])),(l()(),u.qb(82,16777216,null,1,7,"select",[["class","clr-col-12 clr-col-sm-3 clr-col-lg-5"],["clrSelect",""]],[[2,"clr-select",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,83).triggerValidation()&&r),r},null,null)),u.pb(83,212992,null,0,t.Eb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(84,0,null,null,1,"option",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Austria"])),(l()(),u.qb(86,0,null,null,1,"option",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Germany"])),(l()(),u.qb(88,0,null,null,1,"option",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["United States of America"])),(l()(),u.qb(90,0,null,null,19,"clr-date-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"date-container",null],[2,"clr-form-control-disabled",null],[2,"clr-form-control",null],[2,"clr-row",null]],null,null,o.P,o.t)),u.Fb(512,null,t.vd,t.vd,[]),u.Fb(512,null,t.Dc,t.Dc,[]),u.Fb(512,null,t.Ic,t.Ic,[i.e]),u.Fb(512,null,t.Ec,t.Ec,[]),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Gc,t.Gc,[]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(99,245760,null,1,t.J,[t.vd,t.Dc,t.Ic,t.Ec,t.s,t.me,t.Gc,t.Ac,[2,t.ke],[2,t.oe],t.le],null,null),u.Gb(335544320,8,{label:0}),u.Fb(512,null,t.je,t.je,[]),u.Fb(512,null,t.Fc,t.Fc,[u.u]),u.Fb(512,null,t.Hc,t.Hc,[t.Fc]),(l()(),u.qb(104,0,null,1,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(105,212992,[[8,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Date of Birth"])),(l()(),u.qb(107,16777216,null,4,2,"input",[["class","clr-col-12 clr-col-sm-6 clr-col-lg-6"],["clrDate",""],["type","text"]],[[2,"date-input",null],[2,"clr-input",null],[8,"id",0],[1,"placeholder",0],[1,"type",0]],[[null,"blur"],[null,"focus"],[null,"change"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,109).triggerValidation()&&r),"focus"===n&&(r=!1!==u.Ab(l,109).setFocusStates()&&r),"change"===n&&(r=!1!==u.Ab(l,109).onValueChange(c.target)&&r),r},null,null)),u.Fb(512,null,t.Jc,t.Jc,[u.z,u.B]),u.pb(109,4407296,null,0,t.K,[u.Q,u.q,u.k,u.F,[8,null],[2,t.J],[2,t.Hc],[2,t.Dc],[2,t.Ic],[2,t.Ec],u.B,[2,t.Gc],[2,t.oe],t.Jc],{date:[0,"date"]},null),(l()(),u.qb(110,0,null,null,11,"clr-input-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.T,o.x)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(114,180224,null,1,t.hb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,9,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(117,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(118,212992,[[9,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["E-Mail"])),(l()(),u.qb(120,16777216,null,1,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrInput",""],["type","text"]],[[2,"clr-input",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,121).triggerValidation()&&r),r},null,null)),u.pb(121,212992,null,0,t.gb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(122,0,null,null,11,"clr-input-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.T,o.x)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(126,180224,null,1,t.hb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,10,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(129,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(130,212992,[[10,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Phone"])),(l()(),u.qb(132,16777216,null,1,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrInput",""],["type","text"]],[[2,"clr-input",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,133).triggerValidation()&&r),r},null,null)),u.pb(133,212992,null,0,t.gb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(134,0,null,null,1,"h4",[["class","clr-col-12"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["User Data"])),(l()(),u.qb(136,0,null,null,11,"clr-input-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.T,o.x)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(140,180224,null,1,t.hb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,11,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(143,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(144,212992,[[11,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Username"])),(l()(),u.qb(146,16777216,null,1,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrInput",""],["type","text"]],[[2,"clr-input",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,147).triggerValidation()&&r),r},null,null)),u.pb(147,212992,null,0,t.gb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(148,0,null,null,13,"clr-password-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.U,o.y)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.Fb(512,null,t.Gc,t.Gc,[]),u.Fb(1024,null,t.wc,t.xc,[]),u.pb(154,180224,null,1,t.xb,[t.me,[2,t.ke],t.Ac,t.Gc,t.le,t.wc,t.s],null,null),u.Gb(335544320,12,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(157,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(158,212992,[[12,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Password"])),(l()(),u.qb(160,16777216,null,1,1,"input",[["class","clr-col-12 clr-col-sm-4 clr-col-lg-6"],["clrPassword",""],["type","password"]],[[2,"clr-input",null],[8,"id",0]],[[null,"blur"],[null,"focus"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,161).triggerValidation()&&r),"focus"===n&&(r=!1!==u.Ab(l,161).triggerFocus()&&r),r},null,null)),u.pb(161,212992,null,0,t.wb,[u.Q,u.q,[8,null],u.F,u.k,[2,t.Gc],[2,t.wc]],null,null),(l()(),u.qb(162,0,null,null,1,"h4",[["class","clr-col-12"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Other Data"])),(l()(),u.qb(164,0,null,null,23,"clr-date-time-container",[["class","clr-col-12 clr-col-lg-6 clr-row"]],[[2,"date-time-container",null]],null,null,b.E,b.j)),u.pb(165,4308992,null,0,p.p,[u.F,u.k],null,null),(l()(),u.qb(166,0,null,0,19,"clr-date-container",[["class","clr-col-12"]],[[2,"date-container",null],[2,"clr-form-control-disabled",null],[2,"clr-form-control",null],[2,"clr-row",null]],null,null,o.P,o.t)),u.Fb(512,null,t.vd,t.vd,[]),u.Fb(512,null,t.Dc,t.Dc,[]),u.Fb(512,null,t.Ic,t.Ic,[i.e]),u.Fb(512,null,t.Ec,t.Ec,[]),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Gc,t.Gc,[]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(175,245760,null,1,t.J,[t.vd,t.Dc,t.Ic,t.Ec,t.s,t.me,t.Gc,t.Ac,[2,t.ke],[2,t.oe],t.le],null,null),u.Gb(335544320,13,{label:0}),u.Fb(512,null,t.je,t.je,[]),u.Fb(512,null,t.Fc,t.Fc,[u.u]),u.Fb(512,null,t.Hc,t.Hc,[t.Fc]),(l()(),u.qb(180,0,null,1,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(181,212992,[[13,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Start date & time"])),(l()(),u.qb(183,16777216,null,4,2,"input",[["class","clr-col-12 clr-col-sm-10 clr-col-lg-9"],["clrDate",""],["type","text"]],[[2,"date-input",null],[2,"clr-input",null],[8,"id",0],[1,"placeholder",0],[1,"type",0]],[[null,"blur"],[null,"focus"],[null,"change"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,185).triggerValidation()&&r),"focus"===n&&(r=!1!==u.Ab(l,185).setFocusStates()&&r),"change"===n&&(r=!1!==u.Ab(l,185).onValueChange(c.target)&&r),r},null,null)),u.Fb(512,null,t.Jc,t.Jc,[u.z,u.B]),u.pb(185,4407296,null,0,t.K,[u.Q,u.q,u.k,u.F,[8,null],[2,t.J],[2,t.Hc],[2,t.Dc],[2,t.Ic],[2,t.Ec],u.B,[2,t.Gc],[2,t.oe],t.Jc],{date:[0,"date"]},null),(l()(),u.qb(186,0,null,1,1,"input",[["clrTime",""],["type","time"]],[[2,"clr-input",null]],null,null,null,null)),u.pb(187,16384,null,0,p.J,[],null,null),(l()(),u.qb(188,0,null,null,11,"clr-input-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.T,o.x)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(192,180224,null,1,t.hb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,14,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(195,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(196,212992,[[14,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["End time"])),(l()(),u.qb(198,16777216,null,1,1,"input",[["class","clr-col-12 clr-col-sm-3 clr-col-lg-5"],["clrInput",""],["type","time"]],[[2,"clr-input",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,199).triggerValidation()&&r),r},null,null)),u.pb(199,212992,null,0,t.gb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(200,0,null,null,12,"clr-input-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.T,o.x)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(204,180224,null,1,t.hb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,15,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(207,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(208,212992,[[15,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Daily Donation"])),(l()(),u.qb(210,16777216,null,1,2,"input",[["class","clr-col-12 clr-col-sm-3 clr-col-lg-5"],["clrInput",""],["clrNumeric",""],["type","text"]],[[2,"clr-input",null],[8,"id",0],[2,"text-right",null]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,211).triggerValidation()&&r),r},null,null)),u.pb(211,212992,null,0,t.gb,[u.Q,u.q,[8,null],u.F,u.k],null,null),u.pb(212,8601600,null,0,p.y,[u.F,u.k],{unit:[0,"unit"]},null),(l()(),u.qb(213,0,null,null,26,"clr-checkbox-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.H,o.l)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(217,245760,null,1,t.m,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,16,{label:0}),(l()(),u.qb(219,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(220,212992,[[16,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Newsletter Subscriptions"])),(l()(),u.qb(222,0,null,1,8,"clr-checkbox-wrapper",[],[[2,"clr-checkbox-wrapper",null]],null,null,o.I,o.m)),u.pb(223,114688,null,1,t.q,[],null,null),u.Gb(335544320,17,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(226,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),u.pb(227,212992,[[17,4],[16,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Weekly"])),(l()(),u.qb(229,16777216,null,0,1,"input",[["class","clr-col-12 clr-col-sm-6 clr-col-lg-6"],["clrCheckbox",""],["type","checkbox"]],[[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,230).triggerValidation()&&r),r},null,null)),u.pb(230,212992,null,0,t.l,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(231,0,null,1,8,"clr-checkbox-wrapper",[],[[2,"clr-checkbox-wrapper",null]],null,null,o.I,o.m)),u.pb(232,114688,null,1,t.q,[],null,null),u.Gb(335544320,18,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(235,0,null,1,2,"label",[],[[1,"for",0]],null,null,null,null)),u.pb(236,212992,[[18,4],[16,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Monthly"])),(l()(),u.qb(238,16777216,null,0,1,"input",[["class","clr-col-12 clr-col-sm-6 clr-col-lg-6"],["clrCheckbox",""],["type","checkbox"]],[[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,239).triggerValidation()&&r),r},null,null)),u.pb(239,212992,null,0,t.l,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(240,0,null,null,11,"clr-textarea-container",[["class","clr-col-12 clr-col-lg-6"]],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,o.Y,o.C)),u.Fb(512,null,t.le,t.le,[]),u.Fb(131584,null,t.me,t.me,[t.le]),u.Fb(512,null,t.Ac,t.Ac,[]),u.pb(244,180224,null,1,t.Xb,[t.me,[2,t.ke],t.Ac,t.le],null,null),u.Gb(335544320,19,{label:0}),u.Fb(512,null,t.je,t.je,[]),(l()(),u.qb(247,0,null,0,2,"label",[["class","clr-col-12 clr-col-sm-2 clr-col-lg-3"]],[[1,"for",0]],null,null,null,null)),u.pb(248,212992,[[19,4]],0,t.jb,[[2,t.je],[2,t.ke],[2,t.le],u.F,u.k],null,null),(l()(),u.Ib(-1,null,["Comment / Feedback"])),(l()(),u.qb(250,16777216,null,1,1,"textarea",[["class","clr-col-12 clr-col-sm-10 clr-col-lg-9"],["clrTextarea",""],["type","text"]],[[2,"clr-textarea",null],[8,"id",0]],[[null,"blur"]],function(l,n,c){var r=!0;return"blur"===n&&(r=!1!==u.Ab(l,251).triggerValidation()&&r),r},null,null)),u.pb(251,212992,null,0,t.Wb,[u.Q,u.q,[8,null],u.F,u.k],null,null),(l()(),u.qb(252,0,null,null,5,"div",[["class","mt-3"]],null,null,null,null,null)),(l()(),u.qb(253,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["Source Code"])),(l()(),u.qb(255,0,null,null,2,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),u.qb(256,0,null,null,1,"clr-code-snippet",[["class","clr-col-8"]],null,null,null,d.b,d.a)),u.pb(257,4243456,null,0,m.a,[],{code:[0,"code"]},null)],function(l,n){var c=n.component;l(n,1,0),l(n,16,0,"horizontal"),l(n,28,0),l(n,31,0),l(n,40,0),l(n,43,0),l(n,51,0),l(n,54,0),l(n,58,0),l(n,61,0),l(n,63,0),l(n,67,0),l(n,70,0),l(n,80,0),l(n,83,0),l(n,99,0),l(n,105,0),l(n,109,0,""),l(n,118,0),l(n,121,0),l(n,130,0),l(n,133,0),l(n,144,0),l(n,147,0),l(n,158,0),l(n,161,0),l(n,165,0),l(n,175,0),l(n,181,0),l(n,185,0,""),l(n,196,0),l(n,199,0),l(n,208,0),l(n,211,0),l(n,212,0,"\u20ac"),l(n,217,0),l(n,220,0),l(n,223,0),l(n,227,0),l(n,230,0),l(n,232,0),l(n,236,0),l(n,239,0),l(n,248,0),l(n,251,0),l(n,257,0,c.codeExample)},function(l,n){l(n,0,0,!0),l(n,12,0,!0,u.Ab(n,15).layoutService.isHorizontal(),u.Ab(n,15).layoutService.isCompact()),l(n,20,0,!0,null==u.Ab(n,24).control?null:u.Ab(n,24).control.disabled,u.Ab(n,24).addGrid()),l(n,27,0,u.Ab(n,28).forAttr),l(n,30,0,!0,u.Ab(n,31).id),l(n,32,0,!0,null==u.Ab(n,36).control?null:u.Ab(n,36).control.disabled,u.Ab(n,36).addGrid()),l(n,39,0,u.Ab(n,40).forAttr),l(n,42,0,!0,u.Ab(n,43).id),l(n,44,0,!0,null==u.Ab(n,48).control?null:u.Ab(n,48).control.disabled,u.Ab(n,48).addGrid()),l(n,50,0,u.Ab(n,51).forAttr),l(n,53,0,!0),l(n,57,0,u.Ab(n,58).forAttr),l(n,60,0,u.Ab(n,61).id),l(n,62,0,!0),l(n,66,0,u.Ab(n,67).forAttr),l(n,69,0,u.Ab(n,70).id),l(n,71,0,!0,null==u.Ab(n,75).control?null:u.Ab(n,75).control.disabled,u.Ab(n,75).addGrid()),l(n,79,0,u.Ab(n,80).forAttr),l(n,82,0,!0,u.Ab(n,83).id),l(n,90,0,!u.Ab(n,99).newFormsLayout,null==u.Ab(n,99).control?null:u.Ab(n,99).control.disabled,u.Ab(n,99).newFormsLayout,u.Ab(n,99).addGrid()),l(n,104,0,u.Ab(n,105).forAttr),l(n,107,0,!u.Ab(n,109).newFormsLayout,u.Ab(n,109).newFormsLayout,u.Ab(n,109).id,u.Ab(n,109).placeholderText,u.Ab(n,109).inputType),l(n,110,0,!0,null==u.Ab(n,114).control?null:u.Ab(n,114).control.disabled,u.Ab(n,114).addGrid()),l(n,117,0,u.Ab(n,118).forAttr),l(n,120,0,!0,u.Ab(n,121).id),l(n,122,0,!0,null==u.Ab(n,126).control?null:u.Ab(n,126).control.disabled,u.Ab(n,126).addGrid()),l(n,129,0,u.Ab(n,130).forAttr),l(n,132,0,!0,u.Ab(n,133).id),l(n,136,0,!0,null==u.Ab(n,140).control?null:u.Ab(n,140).control.disabled,u.Ab(n,140).addGrid()),l(n,143,0,u.Ab(n,144).forAttr),l(n,146,0,!0,u.Ab(n,147).id),l(n,148,0,!0,null==u.Ab(n,154).control?null:u.Ab(n,154).control.disabled,u.Ab(n,154).addGrid()),l(n,157,0,u.Ab(n,158).forAttr),l(n,160,0,!0,u.Ab(n,161).id),l(n,164,0,!0),l(n,166,0,!u.Ab(n,175).newFormsLayout,null==u.Ab(n,175).control?null:u.Ab(n,175).control.disabled,u.Ab(n,175).newFormsLayout,u.Ab(n,175).addGrid()),l(n,180,0,u.Ab(n,181).forAttr),l(n,183,0,!u.Ab(n,185).newFormsLayout,u.Ab(n,185).newFormsLayout,u.Ab(n,185).id,u.Ab(n,185).placeholderText,u.Ab(n,185).inputType),l(n,186,0,!0),l(n,188,0,!0,null==u.Ab(n,192).control?null:u.Ab(n,192).control.disabled,u.Ab(n,192).addGrid()),l(n,195,0,u.Ab(n,196).forAttr),l(n,198,0,!0,u.Ab(n,199).id),l(n,200,0,!0,null==u.Ab(n,204).control?null:u.Ab(n,204).control.disabled,u.Ab(n,204).addGrid()),l(n,207,0,u.Ab(n,208).forAttr),l(n,210,0,!0,u.Ab(n,211).id,"right"===u.Ab(n,212).textAlign),l(n,213,0,!0,null==u.Ab(n,217).control?null:u.Ab(n,217).control.disabled,u.Ab(n,217).addGrid()),l(n,219,0,u.Ab(n,220).forAttr),l(n,222,0,!0),l(n,226,0,u.Ab(n,227).forAttr),l(n,229,0,u.Ab(n,230).id),l(n,231,0,!0),l(n,235,0,u.Ab(n,236).forAttr),l(n,238,0,u.Ab(n,239).id),l(n,240,0,!0,null==u.Ab(n,244).control?null:u.Ab(n,244).control.disabled,u.Ab(n,244).addGrid()),l(n,247,0,u.Ab(n,248).forAttr),l(n,250,0,!0,u.Ab(n,251).id)})}function y(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,1,"clr-forms-layout-demo",[],null,null,null,F,g)),u.pb(1,49152,null,0,A,[],null,null)],null,null)}var f=u.mb("clr-forms-layout-demo",A,y,{},{},[]),k=c("gIcY"),q=c("ZYCi"),j=c("fTK2"),w=c("XPsC");c.d(n,"FormsLayoutDemoModuleNgFactory",function(){return h});var h=u.nb(r,[],function(l){return u.xb([u.yb(512,u.j,u.db,[[8,[o.eb,o.a,o.b,o.d,o.e,o.f,o.g,o.h,o.c,o.ab,o.bb,o.cb,o.db,e.a,b.a,f]],[3,u.j],u.x]),u.yb(4608,i.r,i.q,[u.u,[2,i.H]]),u.yb(4608,k.C,k.C,[]),u.yb(4608,p.f,p.f,[]),u.yb(1073742336,i.c,i.c,[]),u.yb(1073742336,t.db,t.db,[]),u.yb(1073742336,t.zc,t.zc,[]),u.yb(1073742336,t.de,t.de,[]),u.yb(1073742336,t.V,t.V,[]),u.yb(1073742336,t.d,t.d,[]),u.yb(1073742336,t.X,t.X,[]),u.yb(1073742336,t.r,t.r,[]),u.yb(1073742336,t.pe,t.pe,[]),u.yb(1073742336,t.p,t.p,[]),u.yb(1073742336,t.Bc,t.Bc,[]),u.yb(1073742336,t.L,t.L,[]),u.yb(1073742336,k.z,k.z,[]),u.yb(1073742336,k.j,k.j,[]),u.yb(1073742336,t.ib,t.ib,[]),u.yb(1073742336,t.yb,t.yb,[]),u.yb(1073742336,t.Cb,t.Cb,[]),u.yb(1073742336,t.Gb,t.Gb,[]),u.yb(1073742336,t.Yb,t.Yb,[]),u.yb(1073742336,t.ab,t.ab,[]),u.yb(1073742336,t.ob,t.ob,[]),u.yb(1073742336,t.Lc,t.Lc,[]),u.yb(1073742336,t.P,t.P,[]),u.yb(1073742336,t.Ed,t.Ed,[]),u.yb(1073742336,t.E,t.E,[]),u.yb(1073742336,t.Qb,t.Qb,[]),u.yb(1073742336,t.ec,t.ec,[]),u.yb(1073742336,t.v,t.v,[]),u.yb(1073742336,t.sb,t.sb,[]),u.yb(1073742336,t.nb,t.nb,[]),u.yb(1073742336,t.i,t.i,[]),u.yb(1073742336,t.j,t.j,[]),u.yb(1073742336,t.qb,t.qb,[]),u.yb(1073742336,t.vb,t.vb,[]),u.yb(1073742336,t.Ld,t.Ld,[]),u.yb(1073742336,t.Vb,t.Vb,[]),u.yb(1073742336,t.jc,t.jc,[]),u.yb(1073742336,t.lb,t.lb,[]),u.yb(1073742336,t.Jb,t.Jb,[]),u.yb(1073742336,t.bc,t.bc,[]),u.yb(1073742336,t.zb,t.zb,[]),u.yb(1073742336,t.nc,t.nc,[]),u.yb(1073742336,t.a,t.a,[]),u.yb(1073742336,q.o,q.o,[[2,q.u],[2,q.l]]),u.yb(1073742336,p.R,p.R,[]),u.yb(1073742336,p.G,p.G,[]),u.yb(1073742336,p.E,p.E,[]),u.yb(1073742336,p.h,p.h,[]),u.yb(1073742336,p.e,p.e,[]),u.yb(1073742336,p.u,p.u,[]),u.yb(1073742336,p.o,p.o,[]),u.yb(1073742336,p.w,p.w,[]),u.yb(1073742336,p.s,p.s,[]),u.yb(1073742336,p.c,p.c,[]),u.yb(1073742336,p.z,p.z,[]),u.yb(1073742336,p.N,p.N,[]),u.yb(1073742336,p.I,p.I,[]),u.yb(1073742336,p.j,p.j,[]),u.yb(1073742336,p.q,p.q,[]),u.yb(1073742336,p.a,p.a,[]),u.yb(1073742336,j.a,j.a,[]),u.yb(1073742336,w.a,w.a,[]),u.yb(1073742336,r,r,[]),u.yb(1024,q.j,function(){return[[{path:"",component:A,outlet:"fullpage"}]]},[])])})}}]);