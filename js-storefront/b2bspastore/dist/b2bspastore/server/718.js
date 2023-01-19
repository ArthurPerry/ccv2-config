"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=718,exports.ids=[718],exports.modules={718:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MiniCartComponent:()=>MiniCartComponent,MiniCartComponentService:()=>MiniCartComponentService,MiniCartModule:()=>MiniCartModule});var _angular_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(5e3),_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8374),_spartacus_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4029),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1086),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6053),rxjs_operators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7545),rxjs_operators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1059),rxjs_operators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4850),rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5778),rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4290),_spartacus_storefront__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(312),_angular_router__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(9516),_angular_common__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(9808);const _c0=__name(function(){return{cxRoute:"cart"}},"_c0"),_c1=__name(function(a0){return{count:a0}},"_c1"),_c2=__name(function(a0){return{total:a0}},"_c2");class MiniCartComponentService{constructor(activeCartFacade,authService,statePersistenceService,siteContextParamsService,eventService){this.activeCartFacade=activeCartFacade,this.authService=authService,this.statePersistenceService=statePersistenceService,this.siteContextParamsService=siteContextParamsService,this.eventService=eventService}getQuantity(){return this.activeCartRequired().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.w)(activeCartRequired=>activeCartRequired?this.activeCartFacade.getActive().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.O)({deliveryItemsQuantity:0}),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.U)(cart=>cart.deliveryItemsQuantity||0)):(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(0)))}getTotalPrice(){return this.activeCartRequired().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.w)(activeCartRequired=>activeCartRequired?this.activeCartFacade.getActive().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.U)(cart=>{var _a,_b;return null!==(_b=null===(_a=cart.totalPrice)||void 0===_a?void 0:_a.formattedValue)&&void 0!==_b?_b:""})):(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)("")))}activeCartRequired(){return(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.aj)([this.hasActiveCartInStorage(),this.authService.isUserLoggedIn(),this.isCartCreated()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.U)(([hasCartInStorage,isUserLoggedIn,isCartCreated])=>hasCartInStorage||isUserLoggedIn||isCartCreated),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.x)(),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.o)(hasCart=>!hasCart,!0))}hasActiveCartInStorage(){return this.getCartStateFromBrowserStorage().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.U)(state=>Boolean(null==state?void 0:state.active)))}isCartCreated(){return this.eventService.get(_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_7__.su).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.U)(_=>!0),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.O)(!1))}getCartStateFromBrowserStorage(){return this.siteContextParamsService.getValues([_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.iEg]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.U)(context=>this.statePersistenceService.readStateFromStorage({key:"cart",context,storageType:_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.iHd.LOCAL_STORAGE})))}}__name(MiniCartComponentService,"MiniCartComponentService"),MiniCartComponentService.\u0275fac=__name(function(t){return new(t||MiniCartComponentService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.LFG(_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_7__.bu),_angular_core__WEBPACK_IMPORTED_MODULE_9__.LFG(_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.e80),_angular_core__WEBPACK_IMPORTED_MODULE_9__.LFG(_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.WBb),_angular_core__WEBPACK_IMPORTED_MODULE_9__.LFG(_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.Qnj),_angular_core__WEBPACK_IMPORTED_MODULE_9__.LFG(_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.POd))},"MiniCartComponentService_Factory"),MiniCartComponentService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_9__.Yz7({token:MiniCartComponentService,factory:MiniCartComponentService.\u0275fac,providedIn:"root"});class MiniCartComponent{constructor(miniCartComponentService){this.miniCartComponentService=miniCartComponentService,this.iconTypes=_spartacus_storefront__WEBPACK_IMPORTED_MODULE_10__.e1G,this.quantity$=this.miniCartComponentService.getQuantity(),this.total$=this.miniCartComponentService.getTotalPrice()}}__name(MiniCartComponent,"MiniCartComponent"),MiniCartComponent.\u0275fac=__name(function(t){return new(t||MiniCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.Y36(MiniCartComponentService))},"MiniCartComponent_Factory"),MiniCartComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_9__.Xpm({type:MiniCartComponent,selectors:[["cx-mini-cart"]],decls:13,vars:29,consts:[[3,"routerLink"],[3,"type"],[1,"total"],[1,"count"]],template:__name(function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(0,"a",0),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(1,"cxTranslate"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(2,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(3,"cxUrl"),_angular_core__WEBPACK_IMPORTED_MODULE_9__._UZ(4,"cx-icon",1),_angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(5,"span",2),_angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(6),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(7,"cxTranslate"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(8,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_9__.TgZ(9,"span",3),_angular_core__WEBPACK_IMPORTED_MODULE_9__._uU(10),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(11,"cxTranslate"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.ALo(12,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_9__.qZA()()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("routerLink",_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(3,10,_angular_core__WEBPACK_IMPORTED_MODULE_9__.DdM(22,_c0))),_angular_core__WEBPACK_IMPORTED_MODULE_9__.uIk("aria-label",_angular_core__WEBPACK_IMPORTED_MODULE_9__.xi3(1,5,"miniCart.item",_angular_core__WEBPACK_IMPORTED_MODULE_9__.VKq(23,_c1,_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(2,8,ctx.quantity$)))),_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_9__.Q6J("type",ctx.iconTypes.CART),_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_9__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_9__.xi3(7,12,"miniCart.total",_angular_core__WEBPACK_IMPORTED_MODULE_9__.VKq(25,_c2,_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(8,15,ctx.total$)))," "),_angular_core__WEBPACK_IMPORTED_MODULE_9__.xp6(4),_angular_core__WEBPACK_IMPORTED_MODULE_9__.hij(" ",_angular_core__WEBPACK_IMPORTED_MODULE_9__.xi3(11,17,"miniCart.count",_angular_core__WEBPACK_IMPORTED_MODULE_9__.VKq(27,_c1,_angular_core__WEBPACK_IMPORTED_MODULE_9__.lcZ(12,20,ctx.quantity$)))," "))},"MiniCartComponent_Template"),dependencies:[_angular_router__WEBPACK_IMPORTED_MODULE_11__.yS,_spartacus_storefront__WEBPACK_IMPORTED_MODULE_10__.oJW,_angular_common__WEBPACK_IMPORTED_MODULE_12__.Ov,_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.l2T,_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.X$D],encapsulation:2,changeDetection:0});class MiniCartModule{}__name(MiniCartModule,"MiniCartModule"),MiniCartModule.\u0275fac=__name(function(t){return new(t||MiniCartModule)},"MiniCartModule_Factory"),MiniCartModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_9__.oAB({type:MiniCartModule}),MiniCartModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_9__.cJS({providers:[(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.i51)({cmsComponents:{MiniCartComponent:{component:MiniCartComponent}}})],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_12__.ez,_angular_router__WEBPACK_IMPORTED_MODULE_11__.Bz,_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.bhT,_spartacus_storefront__WEBPACK_IMPORTED_MODULE_10__.QX1,_spartacus_core__WEBPACK_IMPORTED_MODULE_8__.LUR]})}};