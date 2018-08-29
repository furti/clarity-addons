(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{U2p9:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},o=u("zl1X"),t=u("+Xo0"),i=u("0G9f"),r=u("QkwE"),c=u("vAyd"),d=u("mrSG"),s='\n\x3c!-- This is the router outlet for full screen dialogs --\x3e\n<router-outlet name="overlay" (activate)="overlayActive = true" (deactivate)="overlayActive = false"></router-outlet>\n\n\x3c!-- This is the default router outlet for all of your default pages --\x3e\n<div [hidden]="overlayActive">\n    <router-outlet></router-outlet>\n</div>\n',b=function(l){function n(){var n=l.call(this,"full-screen-dialog")||this;return n.htmlExample=s,n}return Object(d.b)(n,l),n}(u("N+3j").a),h=a.La({encapsulation:2,styles:[],data:{}});function f(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,39,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,t.b,t.a)),a.Ma(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),a.Na(2,0,null,0,37,"article",[],null,null,null,null,null)),(l()(),a.Na(3,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["The Full Screen Dialog is an alternative to the default modal dialog."])),(l()(),a.Na(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["The Full Screen Dialog looks and feels like any other page though it is conceptually a modal dialog. This means that a full screen dialog can have any page layout. From a technical point of view, full screen dialogs are shown in a router outlet above the current page. This eliminates the loading time which usually occurs while navigating from page to page."])),(l()(),a.Na(7,0,null,null,27,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),a.Na(8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Design Guidelines"])),(l()(),a.Na(10,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["A Full Screen Dialog usually contains mutliple input elements and "])),(l()(),a.Na(12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Save"])),(l()(),a.fb(-1,null,[" and "])),(l()(),a.Na(15,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Cancel"])),(l()(),a.fb(-1,null,[" options. Place these call to action buttons on the left side of the bottom of the page. Just like you would in a regular form. Optionally the dialog can also have a Back-button. Provide a confirmation prompt if the user has already entered data and Back was selected. Note that this prompt is not required for the Cancel-button, since the user deliberately choose Cancel to discard the input."])),(l()(),a.Na(18,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Use when"])),(l()(),a.Na(20,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Use the Full Screen Dialog if:"])),(l()(),a.Na(22,0,null,null,12,"ul",[["class","list"]],null,null,null,null,null)),(l()(),a.Na(23,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["You want to display a complex input form that requires "])),(l()(),a.Na(25,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Save"])),(l()(),a.fb(-1,null,[" and "])),(l()(),a.Na(28,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Cancel"])),(l()(),a.fb(-1,null,[" options"])),(l()(),a.Na(31,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["You need to show additional modal dialogs. In general you should not show another modal over a modal, but you can open a modal over a Full Screen Dialog."])),(l()(),a.Na(33,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["The dialog's content would require too much scrolling in a modal dialog. Try to avoid scrolling in modal dialogs."])),(l()(),a.Na(35,0,null,null,4,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),a.Na(36,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Code"])),(l()(),a.Na(38,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.Ma(39,4243456,null,0,c.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,39,0,u.htmlExample)},function(l,n){l(n,0,0,!0)})}var p=a.Ja("clr-full-screen-dialog-demo-docu",b,function(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,1,"clr-full-screen-dialog-demo-docu",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,f,h)),a.Ma(1,49152,null,0,b,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),V=u("Ip0R"),g=u("KZfJ"),m=u("gIcY"),v=u("XPsC"),y=u("ZYCi"),N=u("JsA7");u.d(n,"FullScreenDialogDemoModuleNgFactory",function(){return w});var w=a.Ka(e,[],function(l){return a.Ua([a.Va(512,a.j,a.Aa,[[8,[o.z,o.b,o.y,p]],[3,a.j],a.v]),a.Va(4608,V.q,V.p,[a.s,[2,V.F]]),a.Va(4608,g.Kb,g.Kb,[]),a.Va(4608,m.r,m.r,[]),a.Va(5120,g.xc,g.yc,[[3,g.xc]]),a.Va(1073742336,V.b,V.b,[]),a.Va(1073742336,g.Y,g.Y,[]),a.Va(1073742336,g.Lb,g.Lb,[]),a.Va(1073742336,g.Vc,g.Vc,[]),a.Va(1073742336,g.R,g.R,[]),a.Va(1073742336,g.d,g.d,[]),a.Va(1073742336,g.T,g.T,[]),a.Va(1073742336,g.n,g.n,[]),a.Va(1073742336,g.bd,g.bd,[]),a.Va(1073742336,g.dd,g.dd,[]),a.Va(1073742336,g.K,g.K,[]),a.Va(1073742336,g.U,g.U,[]),a.Va(1073742336,m.o,m.o,[]),a.Va(1073742336,m.e,m.e,[]),a.Va(1073742336,g.Ha,g.Ha,[]),a.Va(1073742336,g.Pb,g.Pb,[]),a.Va(1073742336,g.pc,g.pc,[]),a.Va(1073742336,g.D,g.D,[]),a.Va(1073742336,g.db,g.db,[]),a.Va(1073742336,g.qb,g.qb,[]),a.Va(1073742336,g.u,g.u,[]),a.Va(1073742336,g.La,g.La,[]),a.Va(1073742336,g.Ga,g.Ga,[]),a.Va(1073742336,g.i,g.i,[]),a.Va(1073742336,g.j,g.j,[]),a.Va(1073742336,g.eb,g.eb,[]),a.Va(1073742336,g.q,g.q,[]),a.Va(1073742336,g.Ja,g.Ja,[]),a.Va(1073742336,g.Oa,g.Oa,[]),a.Va(1073742336,g.zc,g.zc,[]),a.Va(1073742336,g.jb,g.jb,[]),a.Va(1073742336,g.vb,g.vb,[]),a.Va(1073742336,g.Ea,g.Ea,[]),a.Va(1073742336,g.Wa,g.Wa,[]),a.Va(1073742336,g.ob,g.ob,[]),a.Va(1073742336,g.Ra,g.Ra,[]),a.Va(1073742336,g.zb,g.zb,[]),a.Va(1073742336,g.a,g.a,[]),a.Va(1073742336,v.a,v.a,[]),a.Va(1073742336,y.o,y.o,[[2,y.t],[2,y.l]]),a.Va(1073742336,N.a,N.a,[]),a.Va(1073742336,e,e,[]),a.Va(1024,y.j,function(){return[[{path:"",component:b}]]},[])])})}}]);