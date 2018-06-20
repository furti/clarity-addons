(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{m81k:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},t=u("zl1X"),i=u("+Xo0"),o=u("0G9f"),c=u("8KBR"),s=u("5lT0"),d=u("gIcY"),r=u("QkwE"),g=u("vAyd"),m=u("KZfJ"),p=u("mrSG"),b='\n<div class="col-xs-12 col-lg-6">\n    <clr-view-edit-section [clrTitle]="sectionTitle" (clrSectionSubmitted)="sectionSubmitted()" (clrSectionEditCancelled)="sectionCancelled()">\n        <div view-block>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="first">First name</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="text-truncate">{{first || "&nbsp;"}}</span>\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="last">Last name</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="text-truncate">{{last || "&nbsp;"}}</span>\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="email">E-mail</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="text-truncate">{{email || "&nbsp;"}}</span>\n                </div>\n            </div>\n        </div>\n        <div edit-block>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="first">First name</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="first" type="text" [(ngModel)]="editFirst" name="first">\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="last">Last name</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="last" type="text" [(ngModel)]="editLast" name="last">\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="email">E-mail</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="email" type="text" [(ngModel)]="editEmail" name="email">\n                </div>\n            </div>\n        </div>\n    </clr-view-edit-section>\n</div>\n',h='\n<div class="col-xs-12">\n    <clr-view-edit-section [clrTitle]="compSectionTitle" [clrEditIcon]="compEditIcon" (clrSectionSubmitted)="compSectionSubmitted()" (clrSectionEditCancelled)="compSectionCancelled()">\n        <div view-block>\n            ...\n        </div>\n        <div edit-block>\n            ...\n        </div>\n    </clr-view-edit-section>\n</div>\n',v='\ncompEditIcon: string = "cog";\n',M=function(l){function n(){var n=l.call(this,"view-edit-section")||this;return n.htmlExampleSideBySide=b,n.htmlExampleFullIcon=h,n.htmlExampleFullIconAngular=v,n.birthdate="06/14/2018",n.gender="male",n.status="Active",n.editBirthdate=n.birthdate,n.editGender=n.gender,n.editStatus=1,n.first="Max",n.last="Mustermann",n.email="m.mustermann@mail.com",n.editFirst=n.first,n.editLast=n.last,n.editEmail=n.email,n.compSectionTitle="Different components",n.sectionTitle="Personal Data",n.addSectionTitle="Additional Data",n.compEditIcon="cog",n}return Object(p.b)(n,l),n.prototype.compSectionSubmitted=function(){this.birthdate=this.editBirthdate,this.gender=this.editGender,this.status=1===this.editStatus?"Active":"Inactive",this.terms=this.editTerms},n.prototype.compSectionCancelled=function(){this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus="Active"===this.status?1:2,this.editTerms=this.terms},n.prototype.getTermsText=function(){return this.terms?"I agreed":"I disagreed"},n.prototype.sectionSubmitted=function(){this.first=this.editFirst,this.last=this.editLast,this.email=this.editEmail},n.prototype.sectionCancelled=function(){this.editFirst=this.first,this.editLast=this.last,this.editEmail=this.email},n.prototype.addSectionSubmitted=function(){this.hobby=this.editHobby,this.licence=this.editLicence},n.prototype.addSectionCancelled=function(){this.editHobby=this.hobby,this.editLicence=this.licence},n}(u("N+3j").a),f=a.Ka({encapsulation:2,styles:[],data:{}});function C(l){return a.db(0,[(l()(),a.Ma(0,0,null,null,268,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,i.b,i.a)),a.La(1,49152,null,0,o.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),a.Ma(2,0,null,0,266,"article",[],null,null,null,null,null)),(l()(),a.Ma(3,0,null,null,3,"h5",[["class","component-summary"],["id","view-edit-section-header"]],null,null,null,null,null)),(l()(),a.cb(-1,null,[" The View-Edit Section (VES) is a basic component used to display and edit data. "])),(l()(),a.Ma(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" View-Edit Sections should semantically group information that belongs together, providing a meaningful information structure to the user. "])),(l()(),a.Ma(7,0,null,null,14,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),a.Ma(8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["View-mode"])),(l()(),a.Ma(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" In view-mode the section consists of label-value pairs to display data to user. The user can switch the mode of the section clicking the pencil-icon when editing data is required. "])),(l()(),a.Ma(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["Edit-mode"])),(l()(),a.Ma(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" In edit-mode the label-value pairs transform to label-input fields, a form, and can be edited. The changes can be saved or cancelled, which will return the VES back to view-mode. "])),(l()(),a.Ma(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["Multiple View-Edit Sections"])),(l()(),a.Ma(18,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["There can be multiple View-Edit sections placed in the content area, multiple sections can be edited at once, no automatic inactivation of other View-Edit Sections should occur. "])),(l()(),a.Ma(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" The user needs to actively end the edit-mode by saving or cancelling the changes."])),(l()(),a.Ma(22,0,null,null,246,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),a.Ma(23,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Code & Examples"])),(l()(),a.Ma(25,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To layout the view-mode of the component simply add an element with attribute "])),(l()(),a.Ma(27,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["view-block"])),(l()(),a.cb(-1,null,[" and for the edit-mode of the component add an element with attribute "])),(l()(),a.Ma(30,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["edit-block"])),(l()(),a.cb(-1,null,[". Those blocks will get rendered into the body of the view-edit section in their corresponding modes. "])),(l()(),a.Ma(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" Following interactions are available: "])),(l()(),a.Ma(35,0,null,null,20,"ul",[],null,null,null,null,null)),(l()(),a.Ma(36,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To define the title add a "])),(l()(),a.Ma(38,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["[clrTitle]"])),(l()(),a.cb(-1,null,[" input to the component. "])),(l()(),a.Ma(41,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To define the edit icon add a "])),(l()(),a.Ma(43,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["[clrEditIcon]"])),(l()(),a.cb(-1,null,[" input to the component. Every shape from clr-icon can be used. "])),(l()(),a.Ma(46,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To react to submit clicks, bind to the event "])),(l()(),a.Ma(48,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["(clrSectionSubmitted)"])),(l()(),a.cb(-1,null,[". "])),(l()(),a.Ma(51,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" To react to cancel clicks, bind to the event "])),(l()(),a.Ma(53,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["(clrSectionEditCancelled)"])),(l()(),a.cb(-1,null,[". "])),(l()(),a.Ma(56,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["Side by side example"])),(l()(),a.Ma(58,0,null,null,100,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Ma(59,0,null,null,58,"div",[["class","col-xs-12 col-lg-6"]],null,null,null,null,null)),(l()(),a.Ma(60,0,null,null,57,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var a=!0,e=l.component;return"clrSectionSubmitted"===n&&(a=!1!==e.sectionSubmitted()&&a),"clrSectionEditCancelled"===n&&(a=!1!==e.sectionCancelled()&&a),a},c.f,c.c)),a.La(61,49152,null,0,s.f,[],{_title:[0,"_title"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),a.Ma(62,0,null,0,21,"div",[["view-block",""]],null,null,null,null,null)),(l()(),a.Ma(63,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(64,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(65,0,null,null,1,"label",[["for","first"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["First name"])),(l()(),a.Ma(67,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(68,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(69,null,["",""])),(l()(),a.Ma(70,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(71,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(72,0,null,null,1,"label",[["for","last"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Last name"])),(l()(),a.Ma(74,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(75,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(76,null,["",""])),(l()(),a.Ma(77,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(78,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(79,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["E-mail"])),(l()(),a.Ma(81,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(82,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(83,null,["",""])),(l()(),a.Ma(84,0,null,1,33,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),a.Ma(85,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(86,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(87,0,null,null,1,"label",[["for","first"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["First name"])),(l()(),a.Ma(89,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(90,0,null,null,5,"input",[["id","first"],["name","first"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,91)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,91).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,91)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,91)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editFirst=u)&&e),e},null,null)),a.La(91,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.d]),a.La(93,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(95,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(96,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(97,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(98,0,null,null,1,"label",[["for","last"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Last name"])),(l()(),a.Ma(100,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(101,0,null,null,5,"input",[["id","last"],["name","last"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,102)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,102).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,102)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,102)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editLast=u)&&e),e},null,null)),a.La(102,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.d]),a.La(104,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(106,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(107,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(108,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(109,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["E-mail"])),(l()(),a.Ma(111,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(112,0,null,null,5,"input",[["id","email"],["name","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,113)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,113).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,113)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,113)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editEmail=u)&&e),e},null,null)),a.La(113,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.d]),a.La(115,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(117,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(118,0,null,null,40,"div",[["class","col-xs-12 col-lg-6"]],null,null,null,null,null)),(l()(),a.Ma(119,0,null,null,39,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var a=!0,e=l.component;return"clrSectionSubmitted"===n&&(a=!1!==e.addSectionSubmitted()&&a),"clrSectionEditCancelled"===n&&(a=!1!==e.addSectionCancelled()&&a),a},c.f,c.c)),a.La(120,49152,null,0,s.f,[],{_title:[0,"_title"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),a.Ma(121,0,null,0,14,"div",[["view-block",""]],null,null,null,null,null)),(l()(),a.Ma(122,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(123,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(124,0,null,null,1,"label",[["for","hobby"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Hobby"])),(l()(),a.Ma(126,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(127,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(128,null,["",""])),(l()(),a.Ma(129,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(130,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(131,0,null,null,1,"label",[["for","licence"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Driving licence number"])),(l()(),a.Ma(133,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(134,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(135,null,["",""])),(l()(),a.Ma(136,0,null,1,22,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),a.Ma(137,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(138,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(139,0,null,null,1,"label",[["for","hobby"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Hobby"])),(l()(),a.Ma(141,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(142,0,null,null,5,"input",[["id","hobby"],["name","hobby"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,143)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,143).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,143)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,143)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editHobby=u)&&e),e},null,null)),a.La(143,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.d]),a.La(145,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(147,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(148,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Ma(149,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Ma(150,0,null,null,1,"label",[["for","licence"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Driving licence number"])),(l()(),a.Ma(152,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Ma(153,0,null,null,5,"input",[["id","licence"],["name","licence"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,154)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,154).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,154)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,154)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editLicence=u)&&e),e},null,null)),a.La(154,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.d]),a.La(156,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(158,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(159,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.La(160,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ma(161,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["Custom icon"])),(l()(),a.Ma(163,0,null,null,88,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Ma(164,0,null,null,87,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),a.Ma(165,0,null,null,86,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var a=!0,e=l.component;return"clrSectionSubmitted"===n&&(a=!1!==e.compSectionSubmitted()&&a),"clrSectionEditCancelled"===n&&(a=!1!==e.compSectionCancelled()&&a),a},c.f,c.c)),a.La(166,49152,null,0,s.f,[],{_title:[0,"_title"],_editIcon:[1,"_editIcon"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),a.Ma(167,0,null,0,20,"div",[["view-block",""]],null,null,null,null,null)),(l()(),a.Ma(168,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(169,0,null,null,1,"label",[["for","birthdate"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Date of birth"])),(l()(),a.Ma(171,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(172,null,["",""])),(l()(),a.Ma(173,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(174,0,null,null,1,"label",[["for","gender"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Gender"])),(l()(),a.Ma(176,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(177,null,["",""])),(l()(),a.Ma(178,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(179,0,null,null,1,"label",[["for","status"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Status"])),(l()(),a.Ma(181,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(182,null,["",""])),(l()(),a.Ma(183,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(184,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Terms & Conditions"])),(l()(),a.Ma(186,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.cb(187,null,["",""])),(l()(),a.Ma(188,0,null,1,63,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),a.Ma(189,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(190,0,null,null,1,"label",[["for","birthdate"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Date of birth"])),(l()(),a.Ma(192,16777216,null,null,6,"input",[["clrDate",""],["id","birthdate"],["name","birthdate"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"date-input",null],[8,"id",0],[1,"placeholder",0],[1,"type",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,193)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,193).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,193)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,193)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Wa(l,198).onValueChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(t.editBirthdate=u)&&e),e},null,null)),a.La(193,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.d]),a.La(195,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(197,16384,null,0,d.h,[[4,d.g]],null,null),a.La(198,4407296,null,0,m.H,[[2,m.G],a.O,a.k,a.D,[6,d.g],[2,m.Eb],[2,m.Yc],[2,m.Fb],[2,m.Zc],a.z],{id:[0,"id"],date:[1,"date"]},null),(l()(),a.Ma(199,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(200,0,null,null,1,"label",[["for","gender"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Gender"])),(l()(),a.Ma(202,0,null,null,14,"div",[["class","select"]],null,null,null,null,null)),(l()(),a.Ma(203,0,null,null,13,"select",[["id","gender"],["name","gender"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,t=l.component;return"change"===n&&(e=!1!==a.Wa(l,204).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,204).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editGender=u)&&e),e},null,null)),a.La(204,16384,null,0,d.n,[a.D,a.k],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.n]),a.La(206,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(208,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(209,0,null,null,3,"option",[],null,null,null,null,null)),a.La(210,147456,null,0,d.l,[a.k,a.D,[2,d.n]],null,null),a.La(211,147456,null,0,d.r,[a.k,a.D,[8,null]],null,null),(l()(),a.cb(-1,null,["male"])),(l()(),a.Ma(213,0,null,null,3,"option",[],null,null,null,null,null)),a.La(214,147456,null,0,d.l,[a.k,a.D,[2,d.n]],null,null),a.La(215,147456,null,0,d.r,[a.k,a.D,[8,null]],null,null),(l()(),a.cb(-1,null,["female"])),(l()(),a.Ma(217,0,null,null,22,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(218,0,null,null,1,"label",[["for","status"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Status"])),(l()(),a.Ma(220,0,null,null,9,"div",[["class","radio"]],null,null,null,null,null)),(l()(),a.Ma(221,0,null,null,6,"input",[["id","status_1"],["name","status"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,222)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,222).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,222)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,222)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Wa(l,223).onChange()&&e),"blur"===n&&(e=!1!==a.Wa(l,223).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editStatus=u)&&e),e},null,null)),a.La(222,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.La(223,212992,null,0,d.m,[a.D,a.k,d.q,a.p],{name:[0,"name"],value:[1,"value"]},null),a.Za(1024,null,d.f,function(l,n){return[l,n]},[d.d,d.m]),a.La(225,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(227,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(228,0,null,null,1,"label",[["for","status_1"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Active"])),(l()(),a.Ma(230,0,null,null,9,"div",[["class","radio"]],null,null,null,null,null)),(l()(),a.Ma(231,0,null,null,6,"input",[["id","status_2"],["name","status"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Wa(l,232)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Wa(l,232).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Wa(l,232)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Wa(l,232)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Wa(l,233).onChange()&&e),"blur"===n&&(e=!1!==a.Wa(l,233).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editStatus=u)&&e),e},null,null)),a.La(232,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.La(233,212992,null,0,d.m,[a.D,a.k,d.q,a.p],{name:[0,"name"],value:[1,"value"]},null),a.Za(1024,null,d.f,function(l,n){return[l,n]},[d.d,d.m]),a.La(235,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(237,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(238,0,null,null,1,"label",[["for","status_2"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Inactive"])),(l()(),a.Ma(240,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Ma(241,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["Terms & Conditions"])),(l()(),a.Ma(243,0,null,null,8,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),a.Ma(244,0,null,null,5,"input",[["id","terms"],["name","terms"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,t=l.component;return"change"===n&&(e=!1!==a.Wa(l,245).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==a.Wa(l,245).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editTerms=u)&&e),e},null,null)),a.La(245,16384,null,0,d.b,[a.D,a.k],null,null),a.Za(1024,null,d.f,function(l){return[l]},[d.b]),a.La(247,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.Za(2048,null,d.g,null,[d.k]),a.La(249,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Ma(250,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["I agree to the terms and conditions"])),(l()(),a.Ma(252,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.La(253,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Ma(254,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.La(255,4243456,null,0,g.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),a.Ma(256,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.cb(-1,null,["Tips"])),(l()(),a.Ma(258,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),a.Ma(259,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" Use class "])),(l()(),a.Ma(261,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,["text-truncate"])),(l()(),a.cb(-1,null,[" in view-block to prevent long texts from destroying your layout. "])),(l()(),a.Ma(264,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.cb(-1,null,[" Use pipe "])),(l()(),a.Ma(266,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.cb(-1,null,['|| "&nbsp;"'])),(l()(),a.cb(-1,null,[" in view-block so the span element always has a correct height. "]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,61,0,u.sectionTitle),l(n,93,0,"first",u.editFirst),l(n,104,0,"last",u.editLast),l(n,115,0,"email",u.editEmail),l(n,120,0,u.addSectionTitle),l(n,145,0,"hobby",u.editHobby),l(n,156,0,"licence",u.editLicence),l(n,160,0,u.htmlExampleSideBySide),l(n,166,0,u.compSectionTitle,u.compEditIcon),l(n,195,0,"birthdate",u.editBirthdate),l(n,198,0,"birthdate",""),l(n,206,0,"gender",u.editGender),l(n,223,0,"status",1),l(n,225,0,"status",u.editStatus),l(n,233,0,"status",2),l(n,235,0,"status",u.editStatus),l(n,247,0,"terms",u.editTerms),l(n,253,0,u.htmlExampleFullIcon),l(n,255,0,u.htmlExampleFullIconAngular,"typescript")},function(l,n){var u=n.component;l(n,0,0,!0),l(n,69,0,u.first||"\xa0"),l(n,76,0,u.last||"\xa0"),l(n,83,0,u.email||"\xa0"),l(n,90,0,a.Wa(n,95).ngClassUntouched,a.Wa(n,95).ngClassTouched,a.Wa(n,95).ngClassPristine,a.Wa(n,95).ngClassDirty,a.Wa(n,95).ngClassValid,a.Wa(n,95).ngClassInvalid,a.Wa(n,95).ngClassPending),l(n,101,0,a.Wa(n,106).ngClassUntouched,a.Wa(n,106).ngClassTouched,a.Wa(n,106).ngClassPristine,a.Wa(n,106).ngClassDirty,a.Wa(n,106).ngClassValid,a.Wa(n,106).ngClassInvalid,a.Wa(n,106).ngClassPending),l(n,112,0,a.Wa(n,117).ngClassUntouched,a.Wa(n,117).ngClassTouched,a.Wa(n,117).ngClassPristine,a.Wa(n,117).ngClassDirty,a.Wa(n,117).ngClassValid,a.Wa(n,117).ngClassInvalid,a.Wa(n,117).ngClassPending),l(n,128,0,u.hobby||"\xa0"),l(n,135,0,u.licence||"\xa0"),l(n,142,0,a.Wa(n,147).ngClassUntouched,a.Wa(n,147).ngClassTouched,a.Wa(n,147).ngClassPristine,a.Wa(n,147).ngClassDirty,a.Wa(n,147).ngClassValid,a.Wa(n,147).ngClassInvalid,a.Wa(n,147).ngClassPending),l(n,153,0,a.Wa(n,158).ngClassUntouched,a.Wa(n,158).ngClassTouched,a.Wa(n,158).ngClassPristine,a.Wa(n,158).ngClassDirty,a.Wa(n,158).ngClassValid,a.Wa(n,158).ngClassInvalid,a.Wa(n,158).ngClassPending),l(n,172,0,u.birthdate||"\xa0"),l(n,177,0,u.gender||"\xa0"),l(n,182,0,u.status||"\xa0"),l(n,187,0,u.getTermsText()),l(n,192,1,[a.Wa(n,197).ngClassUntouched,a.Wa(n,197).ngClassTouched,a.Wa(n,197).ngClassPristine,a.Wa(n,197).ngClassDirty,a.Wa(n,197).ngClassValid,a.Wa(n,197).ngClassInvalid,a.Wa(n,197).ngClassPending,!0,a.Wa(n,198).id,a.Wa(n,198).placeholderText,a.Wa(n,198).inputType]),l(n,203,0,a.Wa(n,208).ngClassUntouched,a.Wa(n,208).ngClassTouched,a.Wa(n,208).ngClassPristine,a.Wa(n,208).ngClassDirty,a.Wa(n,208).ngClassValid,a.Wa(n,208).ngClassInvalid,a.Wa(n,208).ngClassPending),l(n,221,0,a.Wa(n,227).ngClassUntouched,a.Wa(n,227).ngClassTouched,a.Wa(n,227).ngClassPristine,a.Wa(n,227).ngClassDirty,a.Wa(n,227).ngClassValid,a.Wa(n,227).ngClassInvalid,a.Wa(n,227).ngClassPending),l(n,231,0,a.Wa(n,237).ngClassUntouched,a.Wa(n,237).ngClassTouched,a.Wa(n,237).ngClassPristine,a.Wa(n,237).ngClassDirty,a.Wa(n,237).ngClassValid,a.Wa(n,237).ngClassInvalid,a.Wa(n,237).ngClassPending),l(n,244,0,a.Wa(n,249).ngClassUntouched,a.Wa(n,249).ngClassTouched,a.Wa(n,249).ngClassPristine,a.Wa(n,249).ngClassDirty,a.Wa(n,249).ngClassValid,a.Wa(n,249).ngClassInvalid,a.Wa(n,249).ngClassPending)})}var W=a.Ia("clr-view-edit-section-demo",M,function(l){return a.db(0,[(l()(),a.Ma(0,0,null,null,1,"clr-view-edit-section-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,C,f)),a.La(1,49152,null,0,M,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),S=u("Ip0R"),y=u("XPsC"),w=u("ZYCi"),U=u("JsA7");u.d(n,"ViewEditSectionDemoModuleNgFactory",function(){return k});var k=a.Ja(e,[],function(l){return a.Ta([a.Ua(512,a.j,a.Z,[[8,[t.k,t.a,t.j,W]],[3,a.j],a.v]),a.Ua(4608,S.n,S.m,[a.s,[2,S.B]]),a.Ua(4608,m.Ab,m.Ab,[]),a.Ua(4608,d.q,d.q,[]),a.Ua(5120,m.qc,m.rc,[[3,m.qc]]),a.Ua(1073742336,S.b,S.b,[]),a.Ua(1073742336,m.W,m.W,[]),a.Ua(1073742336,m.Bb,m.Bb,[]),a.Ua(1073742336,m.Nc,m.Nc,[]),a.Ua(1073742336,m.P,m.P,[]),a.Ua(1073742336,m.d,m.d,[]),a.Ua(1073742336,m.R,m.R,[]),a.Ua(1073742336,m.n,m.n,[]),a.Ua(1073742336,m.Uc,m.Uc,[]),a.Ua(1073742336,m.Wc,m.Wc,[]),a.Ua(1073742336,m.I,m.I,[]),a.Ua(1073742336,m.S,m.S,[]),a.Ua(1073742336,d.o,d.o,[]),a.Ua(1073742336,d.e,d.e,[]),a.Ua(1073742336,m.Da,m.Da,[]),a.Ua(1073742336,m.Ib,m.Ib,[]),a.Ua(1073742336,m.ic,m.ic,[]),a.Ua(1073742336,m.B,m.B,[]),a.Ua(1073742336,m.Xa,m.Xa,[]),a.Ua(1073742336,m.ib,m.ib,[]),a.Ua(1073742336,m.s,m.s,[]),a.Ua(1073742336,m.Ha,m.Ha,[]),a.Ua(1073742336,m.Ca,m.Ca,[]),a.Ua(1073742336,m.i,m.i,[]),a.Ua(1073742336,m.j,m.j,[]),a.Ua(1073742336,m.Ya,m.Ya,[]),a.Ua(1073742336,m.q,m.q,[]),a.Ua(1073742336,m.Fa,m.Fa,[]),a.Ua(1073742336,m.Ka,m.Ka,[]),a.Ua(1073742336,m.sc,m.sc,[]),a.Ua(1073742336,m.db,m.db,[]),a.Ua(1073742336,m.nb,m.nb,[]),a.Ua(1073742336,m.Aa,m.Aa,[]),a.Ua(1073742336,m.Qa,m.Qa,[]),a.Ua(1073742336,m.gb,m.gb,[]),a.Ua(1073742336,m.La,m.La,[]),a.Ua(1073742336,m.rb,m.rb,[]),a.Ua(1073742336,m.a,m.a,[]),a.Ua(1073742336,y.a,y.a,[]),a.Ua(1073742336,w.o,w.o,[[2,w.t],[2,w.l]]),a.Ua(1073742336,U.a,U.a,[]),a.Ua(1073742336,s.g,s.g,[]),a.Ua(1073742336,s.e,s.e,[]),a.Ua(1073742336,s.c,s.c,[]),a.Ua(1073742336,s.a,s.a,[]),a.Ua(1073742336,e,e,[]),a.Ua(1024,w.j,function(){return[[{path:"",component:M}]]},[])])})}}]);