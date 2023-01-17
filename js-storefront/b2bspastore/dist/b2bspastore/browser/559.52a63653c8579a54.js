"use strict";(self.webpackChunkb2bspastore=self.webpackChunkb2bspastore||[]).push([[559],{1559:(P,g,e)=>{e.r(g),e.d(g,{AddToWishListComponent:()=>u,AddToWishListModule:()=>I});var t=e(4650),_=e(9057),r=e(3125),l=e(2198),p=e(2994),x=e(4850),L=e(700),d=e(6895),h=e(610);function T(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div")(1,"button",4),t.NdJ("click",function(){const c=t.CHM(n).ngIf,y=t.oxw(5);return t.KtG(y.remove(c))}),t.ALo(2,"async"),t.ALo(3,"cxTranslate"),t._UZ(4,"cx-icon",5),t.TgZ(5,"span",6),t._uU(6),t.ALo(7,"cxTranslate"),t.qZA()()()}if(2&o){const n=t.oxw(5);t.xp6(1),t.Q6J("disabled",t.lcZ(2,4,n.loading$))("cxAtMessage",t.lcZ(3,6,"addToWishList.removedFromWishList")),t.xp6(3),t.Q6J("type",n.iconTypes.HEART),t.xp6(2),t.Oqu(t.lcZ(7,8,"addToWishList.remove"))}}function f(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(n);const a=t.oxw(4).ngIf,c=t.oxw();return t.KtG(c.add(a))}),t.ALo(1,"async"),t.ALo(2,"cxTranslate"),t._UZ(3,"cx-icon",5),t.TgZ(4,"span",6),t._uU(5),t.ALo(6,"cxTranslate"),t.qZA()()}if(2&o){const n=t.oxw(5);t.Q6J("disabled",t.lcZ(1,4,n.loading$))("cxAtMessage",t.lcZ(2,6,"addToWishList.addedToWishList")),t.xp6(3),t.Q6J("type",n.iconTypes.EMPTY_HEART),t.xp6(2),t.Oqu(t.lcZ(6,8,"addToWishList.add"))}}function m(o,i){if(1&o&&(t.ynx(0),t.YNc(1,T,8,10,"div",2),t.YNc(2,f,7,10,"ng-template",null,3,t.W1O),t.BQk()),2&o){const n=t.MAs(3),s=t.oxw().ngIf,a=t.oxw(2).ngIf,c=t.oxw();t.xp6(1),t.Q6J("ngIf",c.getProductInWishList(a,s))("ngIfElse",n)}}function A(o,i){if(1&o&&(t.ynx(0),t.YNc(1,m,4,2,"ng-container",0),t.BQk()),2&o){const n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",n.hasStock)}}function W(o,i){if(1&o&&(t.ynx(0),t.YNc(1,A,2,1,"ng-container",0),t.ALo(2,"async"),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,n.wishListEntries$))}}function E(o,i){if(1&o&&(t.ynx(0),t.YNc(1,W,3,3,"ng-container",2),t.ALo(2,"async"),t.BQk()),2&o){const n=t.oxw(),s=t.MAs(3);t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,n.userLoggedIn$))("ngIfElse",s)}}const M=function(){return{cxRoute:"login"}};function v(o,i){if(1&o&&(t.ynx(0),t.TgZ(1,"a",8),t.ALo(2,"cxUrl"),t._UZ(3,"cx-icon",5),t.TgZ(4,"span",6),t._uU(5),t.ALo(6,"cxTranslate"),t.qZA()(),t.BQk()),2&o){const n=t.oxw(2);t.xp6(1),t.Q6J("routerLink",t.lcZ(2,3,t.DdM(7,M))),t.xp6(2),t.Q6J("type",n.iconTypes.EMPTY_HEART),t.xp6(2),t.Oqu(t.lcZ(6,5,"addToWishList.anonymous"))}}function C(o,i){if(1&o&&t.YNc(0,v,7,8,"ng-container",0),2&o){const n=t.oxw();t.Q6J("ngIf",n.hasStock)}}let u=(()=>{class o{constructor(n,s,a){this.wishListFacade=n,this.currentProductService=s,this.authService=a,this.product$=this.currentProductService.getProduct().pipe((0,l.h)(_.jWE),(0,p.b)(c=>this.setStockInfo(c))),this.userLoggedIn$=this.authService.isUserLoggedIn().pipe((0,p.b)(c=>{c&&(this.wishListEntries$=this.getWishListEntries(),this.loading$=this.wishListFacade.getWishListLoading())})),this.hasStock=!1,this.iconTypes=r.e1G}add(n){n.code&&this.wishListFacade.addEntry(n.code)}remove(n){this.wishListFacade.removeEntry(n)}getProductInWishList(n,s){return s.find(c=>c.product?.code===n.code)}setStockInfo(n){this.hasStock=Boolean(n.stock&&"outOfStock"!==n.stock.stockLevelStatus)}getWishListEntries(){return this.wishListFacade.getWishList().pipe((0,l.h)(n=>Boolean(n)),(0,x.U)(n=>n.entries??[]))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(L.qs),t.Y36(r.pHG),t.Y36(_.e80))},o.\u0275cmp=t.Xpm({type:o,selectors:[["cx-add-to-wishlist"]],decls:4,vars:3,consts:[[4,"ngIf"],["loginPrompt",""],[4,"ngIf","ngIfElse"],["addItem",""],[1,"btn","btn-link","button-remove","cx-action-link",3,"disabled","cxAtMessage","click"],[3,"type"],[1,"button-text"],[1,"btn","btn-link","button-add","cx-action-link",3,"disabled","cxAtMessage","click"],[1,"btn","btn-link","button-add-link","cx-action-link",3,"routerLink"]],template:function(n,s){1&n&&(t.YNc(0,E,3,4,"ng-container",0),t.ALo(1,"async"),t.YNc(2,C,1,1,"ng-template",null,1,t.W1O)),2&n&&t.Q6J("ngIf",t.lcZ(1,1,s.product$))},dependencies:[d.O5,r.oJW,h.yS,r.cgP,d.Ov,_.X$D,_.l2T],encapsulation:2,changeDetection:0}),o})(),I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[(0,_.i51)({cmsComponents:{AddToWishListComponent:{component:u}}})],imports:[d.ez,_.LUR,r.QX1,h.Bz,_.bhT,r.p$5]}),o})()}}]);