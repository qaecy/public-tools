import{a as $}from"./chunk-H67MZRKE.js";import{a as z,b as G}from"./chunk-US4LGVEV.js";import{c as Q,d as X}from"./chunk-XH644ECB.js";import{b as H,e as J,f as K}from"./chunk-2ELQPX5B.js";import{a as A}from"./chunk-HGQPUHNU.js";import{a as Y,b as Z}from"./chunk-YT77FPBW.js";import{b as O,f as R,h as U,k as q}from"./chunk-C5TAFYHE.js";import{ab as W,ac as N,nb as k,pc as j}from"./chunk-4NDDJHS7.js";import{ea as v,ha as E,ia as F}from"./chunk-L6BWHE7V.js";import{$b as x,Ab as M,Cb as L,Db as B,Eb as l,Fb as o,Jc as D,Kb as _,Mb as w,Mc as V,Nb as a,Wb as c,Xb as I,Za as d,Zb as u,_ as b,_b as f,bc as T,ea as h,ia as y,ra as p,sa as m,sb as P,ub as C}from"./chunk-NZYFJ7MV.js";import{j as g}from"./chunk-RZZ4GCVR.js";var ee=(()=>{let r=class r{constructor(){this._components=new N,this._lbdParser=this._components.get(Z)}ngOnDestroy(){this._lbdParser.dispose()}processFile(s){return g(this,null,function*(){let e=yield s.arrayBuffer(),i=new j(this._components);$(i),i.settings.excludedCategories=new Set,i.settings.optionalCategories=[W,k],i.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.53/",absolute:!0},yield i.load(new Uint8Array(e))})}processTriples(s){return g(this,null,function*(){console.time("Parse LBD"),this._lbdParser.setSettings(s),this._lbdParser.events.addListener("trackProgress",e=>console.log(e)),yield this._lbdParser.run(),console.timeEnd("Parse LBD")})}downloadTriples(){return g(this,null,function*(){this._lbdParser.downloadResult()})}};r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=b({token:r,factory:r.\u0275fac,providedIn:"root"});let n=r;return n})();function ie(n,r){if(n&1){let t=_();l(0,"mat-slide-toggle",8),x("ngModelChange",function(e){let i=p(t).$implicit,S=a(2);return f(S.enabledParsers[i],e)||(S.enabledParsers[i]=e),m(e)}),c(1),o()}if(n&2){let t=r.$implicit,s=a(2);u("ngModel",s.enabledParsers[t]),d(),I(t)}}function ne(n,r){if(n&1){let t=_();l(0,"mat-slide-toggle",8),x("ngModelChange",function(e){p(t);let i=a(2);return f(i.parserSettings.subSettings.bot.includeInterfaces,e)||(i.parserSettings.subSettings.bot.includeInterfaces=e),m(e)}),c(1,"Include BOT interfaces"),o()}if(n&2){let t=a(2);u("ngModel",t.parserSettings.subSettings.bot.includeInterfaces)}}function re(n,r){if(n&1){let t=_();l(0,"mat-slide-toggle",8),x("ngModelChange",function(e){p(t);let i=a(2);return f(i.parserSettings.subSettings.products.includeParents,e)||(i.parserSettings.subSettings.products.includeParents=e),m(e)}),c(1,"Include product parents"),o()}if(n&2){let t=a(2);u("ngModel",t.parserSettings.subSettings.products.includeParents)}}function se(n,r){if(n&1){let t=_();l(0,"mat-slide-toggle",8),x("ngModelChange",function(e){p(t);let i=a(2);return f(i.parserSettings.subSettings.fso.includePorts,e)||(i.parserSettings.subSettings.fso.includePorts=e),m(e)}),c(1,"Include ports"),o()}if(n&2){let t=a(2);u("ngModel",t.parserSettings.subSettings.fso.includePorts)}}function oe(n,r){if(n&1){let t=_();l(0,"button",2),w("click",function(){p(t);let e=a(2);return m(e.downloadTriples())}),c(1,"Download"),o()}}function ae(n,r){if(n&1){let t=_();l(0,"div",1),L(1,ie,2,2,"mat-slide-toggle",4,M),l(3,"mat-form-field")(4,"mat-label"),c(5,"Namespace"),o(),l(6,"input",5),x("ngModelChange",function(e){p(t);let i=a();return f(i.parserSettings.namespace,e)||(i.parserSettings.namespace=e),m(e)}),o()(),l(7,"mat-form-field")(8,"mat-label"),c(9,"File name"),o(),l(10,"input",5),x("ngModelChange",function(e){p(t);let i=a();return f(i.parserSettings.fileName,e)||(i.parserSettings.fileName=e),m(e)}),o()(),P(11,ne,2,1,"mat-slide-toggle",6)(12,re,2,1,"mat-slide-toggle",6)(13,se,2,1,"mat-slide-toggle",6),l(14,"button",2),w("click",function(){p(t);let e=a();return m(e.process())}),c(15,"Process LBD"),o(),P(16,oe,2,0,"button",7),o()}if(n&2){let t=a();d(),B(t.parsers),d(5),u("ngModel",t.parserSettings.namespace),d(4),u("ngModel",t.parserSettings.fileName),d(),C("ngIf",t.enabledParsers.bot),d(),C("ngIf",t.enabledParsers.products),d(),C("ngIf",t.enabledParsers.fso),d(3),C("ngIf",t.triplesProcessed)}}var ve=(()=>{let r=class r{constructor(){this._parser=h(ee),this.parserSettings=new Y,this.parsers=Object.keys(this.parserSettings.enabledParsers),this.enabledParsers=this.parserSettings.enabledParsers,this.fileProcessed=!1,this.triplesProcessed=!1}loadIFC(){return g(this,null,function*(){console.log(this.enabledParsers),this.fileProcessed=!1;let s=yield A(".ifc");yield this._parser.processFile(s),this.fileProcessed=!0})}process(){return g(this,null,function*(){this.triplesProcessed=!1,this.parserSettings.enabledParsers=this.enabledParsers,yield this._parser.processTriples(this.parserSettings),this.triplesProcessed=!0})}downloadTriples(){this._parser.downloadTriples()}};r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=y({type:r,selectors:[["app-lbd-parser"]],standalone:!0,features:[T],decls:5,vars:1,consts:[["title","LBD Parser"],[2,"display","flex","flex-direction","column","gap","5px"],["mat-stroked-button","",3,"click"],["style","display: flex; flex-direction: column; gap: 5px;",4,"ngIf"],[3,"ngModel"],["matInput","",3,"ngModelChange","ngModel"],[3,"ngModel","ngModelChange",4,"ngIf"],["mat-stroked-button","",3,"click",4,"ngIf"],[3,"ngModelChange","ngModel"]],template:function(e,i){e&1&&(l(0,"lib-page-section",0)(1,"div",1)(2,"button",2),w("click",function(){return i.loadIFC()}),c(3,"Load file"),o(),P(4,ae,17,6,"div",3),o()()),e&2&&(d(4),C("ngIf",i.fileProcessed))},dependencies:[V,D,F,E,v,G,z,q,O,R,U,K,J,H,X,Q]});let n=r;return n})();export{ve as a};