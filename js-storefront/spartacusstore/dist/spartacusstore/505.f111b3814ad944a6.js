"use strict";(self.webpackChunkspartacusstore=self.webpackChunkspartacusstore||[]).push([[505],{9505:(br,$e,h)=>{h.d($e,{YA:()=>Lr,$:()=>rr,YW:()=>Fe,Jp:()=>Gr,r_:()=>we,CQ:()=>Mt,vI:()=>le,n5:()=>Ue,i4:()=>_r,Eu:()=>Ee,N4:()=>v,F5:()=>gr,Qx:()=>xr,T6:()=>M,xb:()=>_,F7:()=>Tt});var c=h(4650),n=h(9057),l=h(8555),o=h(3749),u=h(4850),$=h(1406),R=h(7221),m=h(1709),Ne=h(4002),I=h(7545),S=h(7168),p=h(2198),y=h(5778),V=h(2994),g=h(2986),q=h(2313),Dt=h(5154),Ye=h(519),Z=h(1177);class He{constructor(r){this.durationSelector=r}call(r,t){return t.subscribe(new ze(r,this.durationSelector))}}class ze extends Z.Ds{constructor(r,t){super(r),this.durationSelector=t,this.hasValue=!1}_next(r){try{const t=this.durationSelector.call(this,r);t&&this._tryNext(r,t)}catch(t){this.destination.error(t)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(r,t){let s=this.durationSubscription;this.value=r,this.hasValue=!0,s&&(s.unsubscribe(),this.remove(s)),s=(0,Z.ft)(t,new Z.IY(this)),s&&!s.closed&&this.add(this.durationSubscription=s)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const r=this.value,t=this.durationSubscription;t&&(this.durationSubscription=void 0,t.unsubscribe(),this.remove(t)),this.value=void 0,this.hasValue=!1,super._next(r)}}}var T=h(5254),F=h(1086),tt=h(2654),We=h(5409),N=h(6053),je=h(839),Ke=h(8723),Xe=h(8896),C=h(5024),et=h(655),Qe=h(3125),Je=h(6538),qe=h(6895),Ze=h(610);const v="[Multi Cart] Multi Cart Data",D="addVoucher",k="[Cart-entry] Add Entry",b="[Cart-entry] Add Entry Success",Y="[Cart-entry] Add Entry Fail",rt="[Cart-entry] Remove Entry",B="[Cart-entry] Remove Entry Success",st="[Cart-entry] Remove Entry Fail",it="[Cart-entry] Update Entry",H="[Cart-entry] Update Entry Success",at="[Cart-entry] Update Entry Fail";class nt extends n.kPG.EntityProcessesIncrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=k}}class ct extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=b}}class ot extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=Y}}class Vt extends n.kPG.EntityProcessesIncrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=rt}}class Pt extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=B}}class Gt extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=st}}class Lt extends n.kPG.EntityProcessesIncrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=it}}class _t extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=H}}class xt extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=at}}const z="[Cart-voucher] Add Cart Vouchers",bt="[Cart-voucher] Add Cart Voucher Fail",dt="[Cart-voucher] Add Cart Voucher Success",wt="[Cart-voucher] Reset Add Cart Voucher",ut="[Cart-voucher] Remove Cart Voucher",Ot="[Cart-voucher] Remove Cart Voucher Fail",Ct="[Cart-voucher] Remove Cart Voucher Success";class $t extends n.kPG.EntityLoadAction{constructor(r){super(n.BzF,D),this.payload=r,this.type=z}}class Nt extends n.kPG.EntityFailAction{constructor(r){super(n.BzF,D,r.error),this.payload=r,this.type=bt}}class kt extends n.kPG.EntitySuccessAction{constructor(r){super(n.BzF,D),this.payload=r,this.type=dt}}class Yt extends n.kPG.EntityLoaderResetAction{constructor(){super(n.BzF,D),this.type=wt}}class Bt extends n.kPG.EntityProcessesIncrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=ut}}class Ht extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=Ot}}class zt extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=Ct}}const P="[Cart] Create Cart",ht="[Cart] Create Cart Fail",G="[Cart] Create Cart Success",w="[Cart] Load Cart",Wt="[Cart] Load Cart Fail",U="[Cart] Load Cart Success",lt="[Cart] Load Carts Success",vt="[Cart] Add Email to Cart",jt="[Cart] Add Email to Cart Fail",Kt="[Cart] Add Email to Cart Success",Et="[Cart] Merge Cart",Xt="[Cart] Merge Cart Success",Qt="[Cart] Reset Cart Details",pt="[Cart] Remove Cart",W="[Cart] Delete Cart",j="[Cart] Delete Cart Success",It="[Cart] Delete Cart Fail";class St extends n.kPG.EntityLoadAction{constructor(r){super(v,r.tempCartId),this.payload=r,this.type=P}}class Jt extends n.kPG.EntityFailAction{constructor(r){super(v,r.tempCartId),this.payload=r,this.type=ht}}class qt extends n.kPG.EntitySuccessAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=G}}class Zt extends n.kPG.EntityProcessesIncrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=vt}}class te extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=jt}}class ee extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=Kt}}class f extends n.kPG.EntityLoadAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=w}}class gt extends n.kPG.EntityFailAction{constructor(r){super(v,r.cartId,r.error),this.payload=r,this.type=Wt}}class re extends n.kPG.EntitySuccessAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=U}}class se{constructor(r){this.payload=r,this.type=Et}}class ie extends n.kPG.EntityRemoveAction{constructor(r){super(v,r.oldCartId),this.payload=r,this.type=Xt}}class ae extends n.kPG.ProcessesLoaderResetAction{constructor(){super(v),this.type=Qt}}class O extends n.kPG.EntityRemoveAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=pt}}class ne{constructor(r){this.payload=r,this.type=W}}class ce extends n.kPG.EntityRemoveAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=j}}class oe{constructor(r){this.payload=r,this.type=It}}const de="[Cart] Cart Processes Increment",ue="[Cart] Cart Processes Decrement",K="[Cart] Set Active Cart Id",ft="[Cart] Clear Cart State",yt="[Cart] Set cart type index",At="[Cart] Set cart data";class Ce extends n.kPG.EntityProcessesIncrementAction{constructor(r){super(v,r),this.payload=r,this.type=de}}class Rt extends n.kPG.EntityProcessesDecrementAction{constructor(r){super(v,r),this.payload=r,this.type=ue}}class mt{constructor(r){this.payload=r,this.type=K}}class he extends n.kPG.EntityRemoveAllAction{constructor(){super(v),this.type=ft}}class L{constructor(r){this.payload=r,this.type=yt}}var rr=Object.freeze({__proto__:null,CART_ADD_ENTRY:k,CART_ADD_ENTRY_SUCCESS:b,CART_ADD_ENTRY_FAIL:Y,CART_REMOVE_ENTRY:rt,CART_REMOVE_ENTRY_SUCCESS:B,CART_REMOVE_ENTRY_FAIL:st,CART_UPDATE_ENTRY:it,CART_UPDATE_ENTRY_SUCCESS:H,CART_UPDATE_ENTRY_FAIL:at,CartAddEntry:nt,CartAddEntrySuccess:ct,CartAddEntryFail:ot,CartRemoveEntry:Vt,CartRemoveEntrySuccess:Pt,CartRemoveEntryFail:Gt,CartUpdateEntry:Lt,CartUpdateEntrySuccess:_t,CartUpdateEntryFail:xt,CART_ADD_VOUCHER:z,CART_ADD_VOUCHER_FAIL:bt,CART_ADD_VOUCHER_SUCCESS:dt,CART_RESET_ADD_VOUCHER:wt,CART_REMOVE_VOUCHER:ut,CART_REMOVE_VOUCHER_FAIL:Ot,CART_REMOVE_VOUCHER_SUCCESS:Ct,CartAddVoucher:$t,CartAddVoucherFail:Nt,CartAddVoucherSuccess:kt,CartResetAddVoucher:Yt,CartRemoveVoucher:Bt,CartRemoveVoucherFail:Ht,CartRemoveVoucherSuccess:zt,CREATE_CART:P,CREATE_CART_FAIL:ht,CREATE_CART_SUCCESS:G,LOAD_CART:w,LOAD_CART_FAIL:Wt,LOAD_CART_SUCCESS:U,LOAD_CARTS_SUCCESS:lt,ADD_EMAIL_TO_CART:vt,ADD_EMAIL_TO_CART_FAIL:jt,ADD_EMAIL_TO_CART_SUCCESS:Kt,MERGE_CART:Et,MERGE_CART_SUCCESS:Xt,RESET_CART_DETAILS:Qt,REMOVE_CART:pt,DELETE_CART:W,DELETE_CART_SUCCESS:j,DELETE_CART_FAIL:It,CreateCart:St,CreateCartFail:Jt,CreateCartSuccess:qt,AddEmailToCart:Zt,AddEmailToCartFail:te,AddEmailToCartSuccess:ee,LoadCart:f,LoadCartFail:gt,LoadCartSuccess:re,LoadCartsSuccess:class tr extends n.kPG.EntitySuccessAction{constructor(r){super(v,r.map(t=>t?.code??"")),this.payload=r,this.type=lt}},MergeCart:se,MergeCartSuccess:ie,ResetCartDetails:ae,RemoveCart:O,DeleteCart:ne,DeleteCartSuccess:ce,DeleteCartFail:oe,CART_PROCESSES_INCREMENT:de,CART_PROCESSES_DECREMENT:ue,SET_ACTIVE_CART_ID:K,CLEAR_CART_STATE:ft,SET_CART_TYPE_INDEX:yt,SET_CART_DATA:At,CartProcessesIncrement:Ce,CartProcessesDecrement:Rt,SetActiveCartId:mt,ClearCartState:he,SetCartTypeIndex:L,SetCartData:class er extends n.kPG.EntitySuccessAction{constructor(r){super(v,r.cartId),this.payload=r,this.type=At}}});class le{}let ve=(()=>{class e{constructor(t){this.adapter=t}add(t,s,i,a){return this.adapter.add(t,s,i,a)}update(t,s,i,a,d){return this.adapter.update(t,s,i,a,d)}remove(t,s,i){return this.adapter.remove(t,s,i)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(le))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),sr=(()=>{class e{constructor(t,s){this.actions$=t,this.cartEntryConnector=s,this.contextChange$=this.actions$.pipe((0,C.l4)(n.dO9.CURRENCY_CHANGE,n.dO9.LANGUAGE_CHANGE)),this.addEntry$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(k),(0,u.U)(i=>i.payload),(0,$.b)(i=>this.cartEntryConnector.add(i.userId,i.cartId,i.productCode,i.quantity).pipe((0,u.U)(a=>new ct({...i,...a})),(0,R.K)(a=>(0,T.D)([new ot({...i,error:(0,n.cxH)(a)}),new f({cartId:i.cartId,userId:i.userId})])))),(0,n.FM_)(this.contextChange$))),this.removeEntry$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(rt),(0,u.U)(i=>i.payload),(0,$.b)(i=>this.cartEntryConnector.remove(i.userId,i.cartId,i.entryNumber).pipe((0,u.U)(()=>new Pt({...i})),(0,R.K)(a=>(0,T.D)([new Gt({...i,error:(0,n.cxH)(a)}),new f({cartId:i.cartId,userId:i.userId})])))),(0,n.FM_)(this.contextChange$))),this.updateEntry$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(it),(0,u.U)(i=>i.payload),(0,$.b)(i=>this.cartEntryConnector.update(i.userId,i.cartId,i.entryNumber,i.quantity).pipe((0,u.U)(()=>new _t({...i})),(0,R.K)(a=>(0,T.D)([new xt({...i,error:(0,n.cxH)(a)}),new f({cartId:i.cartId,userId:i.userId})])))),(0,n.FM_)(this.contextChange$)))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(C.eX),c.LFG(ve))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})();class Ee{}let pe=(()=>{class e{constructor(t){this.adapter=t}add(t,s,i){return this.adapter.add(t,s,i)}remove(t,s,i){return this.adapter.remove(t,s,i)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(Ee))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ir=(()=>{class e{constructor(t,s,i){this.actions$=t,this.cartVoucherConnector=s,this.messageService=i,this.addCartVoucher$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(z),(0,u.U)(a=>a.payload),(0,m.zg)(a=>this.cartVoucherConnector.add(a.userId,a.cartId,a.voucherId).pipe((0,u.U)(()=>(this.showGlobalMessage("voucher.applyVoucherSuccess",a.voucherId,n.xUg.MSG_TYPE_CONFIRMATION),new kt({...a}))),(0,R.K)(d=>(0,T.D)([new Nt({...a,error:(0,n.cxH)(d)}),new Rt(a.cartId),new f({userId:a.userId,cartId:a.cartId})])))))),this.removeCartVoucher$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(ut),(0,u.U)(a=>a.payload),(0,m.zg)(a=>this.cartVoucherConnector.remove(a.userId,a.cartId,a.voucherId).pipe((0,u.U)(()=>(this.showGlobalMessage("voucher.removeVoucherSuccess",a.voucherId,n.xUg.MSG_TYPE_INFO),new zt({userId:a.userId,cartId:a.cartId,voucherId:a.voucherId}))),(0,R.K)(d=>(0,T.D)([new Ht({error:(0,n.cxH)(d),cartId:a.cartId,userId:a.userId,voucherId:a.voucherId}),new f({userId:a.userId,cartId:a.cartId})]))))))}showGlobalMessage(t,s,i){this.messageService.add({key:t,params:{voucherCode:s}},i)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(C.eX),c.LFG(pe),c.LFG(n.IWp))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})();function M(e,r){return r===n.Fds?e?.guid??"":e?.code??""}function Tt(e=""){return e.startsWith("selectivecart")}function Ie(e){return"notFound"===e.reason&&"cart"===e.subjectType&&!Tt(e.subject)}function cr(e){return"VoucherOperationError"===e.type}function or(e){return"CartError"===e.type||"CartAddressError"===e.type||"CartEntryError"===e.type||"CartEntryGroupError"===e.type}function Se(e){return e.startsWith("temp-")}function _(e){return!e||"object"==typeof e&&0===Object.keys(e).length}const X=(0,l.ZF)("cart"),x=(0,l.P1)(X,e=>e.carts),ge=e=>(0,l.P1)(x,r=>n.kPG.entityProcessesLoaderStateSelector(r,e)),Ft=e=>(0,l.P1)(x,r=>n.kPG.entityValueSelector(r,e)),fe=e=>(0,l.P1)(x,r=>n.kPG.entityIsStableSelector(r,e)),ye=e=>(0,l.P1)(x,r=>n.kPG.entityHasPendingProcessesSelector(r,e)),Q=e=>(0,l.P1)(Ft(e),r=>r&&r.entries?r.entries:[]),Ae=(e,r)=>(0,l.P1)(Q(e),t=>t.find(s=>s.product?.code===r)),Re=(0,l.P1)(x,e=>Object.keys(e.entities).map(r=>n.kPG.entityValueSelector(e,r))),me=(0,l.P1)(X,e=>e.index),Te=e=>(0,l.P1)(me,r=>r&&r[e]);class Fe{}let Mt=(()=>{class e{constructor(t){this.adapter=t}loadAll(t){return this.adapter.loadAll(t)}load(t,s){return this.adapter.load(t,s)}create(t,s,i){return this.adapter.create(t,s,i)}delete(t,s){return this.adapter.delete(t,s)}save(t,s,i,a){return this.adapter.save(t,s,i,a)}addEmail(t,s,i){return this.adapter.addEmail(t,s,i)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(Fe))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Cr=[sr,ir,(()=>{class e{constructor(t,s,i){this.actions$=t,this.cartConnector=s,this.store=i,this.contextChange$=this.actions$.pipe((0,C.l4)(n.dO9.CURRENCY_CHANGE,n.dO9.LANGUAGE_CHANGE)),this.loadCart$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(w),(0,u.U)(a=>a.payload),(0,Ne.v)(a=>a.cartId),(0,m.zg)(a=>a.pipe((0,I.w)(d=>(0,F.of)(d).pipe((0,S.M)(this.store.pipe((0,l.Ys)(ye(d.cartId)))))),(0,p.h)(([d,E])=>!E),(0,u.U)(([d])=>d),(0,I.w)(d=>this.cartConnector.load(d.userId,d.cartId).pipe((0,m.zg)(E=>{let A=[];return E?(A.push(new re({...d,cart:E,cartId:M(E,d.userId)})),d.cartId===n.gSv&&A.push(new O({cartId:n.gSv}))):A=[new gt({...d,error:{}})],A}),(0,R.K)(E=>{if(E?.error?.errors){if(E.error.errors.filter(J=>"invalid"===J.reason).length>0)return(0,F.of)(new f({...d}));if(E.error.errors.filter(J=>Ie(J)||"UnknownResourceError"===J.reason).length>0)return(0,F.of)(new O({cartId:d.cartId}))}return(0,F.of)(new gt({...d,error:(0,n.cxH)(E)}))}))))),(0,n.FM_)(this.contextChange$))),this.createCart$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(P),(0,u.U)(a=>a.payload),(0,m.zg)(a=>this.cartConnector.create(a.userId,a.oldCartId,a.toMergeCartGuid).pipe((0,I.w)(d=>{const E=[];return a.oldCartId&&E.push(new ie({extraData:a.extraData,userId:a.userId,tempCartId:a.tempCartId,cartId:M(d,a.userId),oldCartId:a.oldCartId})),[new qt({...a,cart:d,cartId:M(d,a.userId)}),new O({cartId:a.tempCartId}),...E]}),(0,R.K)(d=>(0,F.of)(new Jt({...a,error:(0,n.cxH)(d)}))))),(0,n.FM_)(this.contextChange$))),this.mergeCart$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(Et),(0,u.U)(a=>a.payload),(0,I.w)(a=>this.cartConnector.load(a.userId,n.gSv).pipe((0,u.U)(d=>{if(d?.code!==a.cartId)return new St({userId:a.userId,oldCartId:a.cartId,toMergeCartGuid:d?d.guid:void 0,extraData:a.extraData,tempCartId:a.tempCartId})}),(0,p.h)(n.pTN))),(0,n.FM_)(this.contextChange$))),this.refresh$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(dt),(0,u.U)(a=>a.payload),(0,$.b)(a=>(0,T.D)([new Rt(a.cartId),new f({userId:a.userId,cartId:a.cartId})])))),this.refreshWithoutProcesses$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(b,B,H,Ct),(0,u.U)(a=>a.payload),(0,u.U)(a=>new f({userId:a.userId,cartId:a.cartId})))),this.resetCartDetailsOnSiteContextChange$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(n.dO9.LANGUAGE_CHANGE,n.dO9.CURRENCY_CHANGE),(0,m.zg)(()=>[new ae]))),this.addEmail$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(vt),(0,u.U)(a=>a.payload),(0,m.zg)(a=>this.cartConnector.addEmail(a.userId,a.cartId,a.email).pipe((0,m.zg)(()=>[new ee({...a}),new f({userId:a.userId,cartId:a.cartId})]),(0,R.K)(d=>(0,T.D)([new te({...a,error:(0,n.cxH)(d)}),new f({userId:a.userId,cartId:a.cartId})])))),(0,n.FM_)(this.contextChange$))),this.deleteCart$=(0,C.GW)(()=>this.actions$.pipe((0,C.l4)(W),(0,u.U)(a=>a.payload),(0,m.zg)(a=>this.cartConnector.delete(a.userId,a.cartId).pipe((0,u.U)(()=>new ce({...a})),(0,R.K)(d=>(0,T.D)([new oe({...a,error:(0,n.cxH)(d)}),new f({...a})]))))))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(C.eX),c.LFG(Mt),c.LFG(l.yh))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})(),(()=>{class e{constructor(t){this.actions$=t,this.processesIncrement$=this.actions$.pipe((0,C.l4)(z),(0,u.U)(s=>s.payload),(0,u.U)(s=>new Ce(s.cartId))),this.setSelectiveId$=this.actions$.pipe((0,C.l4)(U),(0,u.U)(s=>{switch(s.type){case U:{const i=s.payload;if(Tt(i.cartId))return new L({cartType:o.EI.SELECTIVE,cartId:i.cartId});break}}}),(0,p.h)(n.pTN)),this.setActiveCartId$=this.actions$.pipe((0,C.l4)(U,w,G,P,K),(0,u.U)(s=>{switch(s.type){case w:if(s?.payload?.cartId===n.gSv)return new L({cartType:o.EI.ACTIVE,cartId:""});break;case U:case P:if(s?.payload?.extraData?.active)return new L({cartType:o.EI.ACTIVE,cartId:s.meta.entityId});break;case G:return new L({cartType:s?.payload?.extraData?.active?o.EI.ACTIVE:o.EI.NEW_CREATED,cartId:s.meta.entityId});case K:return new L({cartType:o.EI.ACTIVE,cartId:s.payload})}}),(0,p.h)(n.pTN))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(C.eX))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),(0,et.gn)([(0,C.Qm)()],e.prototype,"processesIncrement$",void 0),(0,et.gn)([(0,C.Qm)()],e.prototype,"setSelectiveId$",void 0),(0,et.gn)([(0,C.Qm)()],e.prototype,"setActiveCartId$",void 0),e})()],Me={[o.EI.ACTIVE]:""};function hr(e=Me,r){switch(r.type){case yt:return{...e,[r.payload.cartType]:r.payload.cartId};case pt:case j:return r.payload?.cartId===e[o.EI.ACTIVE]?{...e,[o.EI.ACTIVE]:""}:e;case ft:return Me}return e}function vr(e,r){switch(r.type){case lt:return r.payload;case U:case G:case At:return r.payload.cart}return e}const pr=[function Er(e){return function(r,t){return t.type===n.uQL.LOGOUT&&(r=void 0),e(r,t)}}],De=new c.OlP("MultiCartReducers"),Sr={provide:De,useFactory:function Ir(){return{carts:n.kPG.entityProcessesLoaderReducer(v,vr),index:hr}}};var gr=Object.freeze({__proto__:null,getMultiCartState:X,getMultiCartEntities:x,getCartEntitySelectorFactory:ge,getCartSelectorFactory:Ft,getCartIsStableSelectorFactory:fe,getCartHasPendingProcessesSelectorFactory:ye,getCartEntriesSelectorFactory:Q,getCartEntrySelectorFactory:Ae,getCartsSelectorFactory:Re,getCartTypeIndex:me,getCartIdByTypeFactory:Te});let fr=(()=>{class e{constructor(t,s,i){this.statePersistenceService=t,this.store=s,this.siteContextParamsService=i,this.subscription=new tt.w}initSync(){this.subscription.add(this.statePersistenceService.syncWithStorage({key:"cart",state$:this.getCartState(),context$:this.siteContextParamsService.getValues([n.iEg]),storageType:n.iHd.LOCAL_STORAGE,onRead:t=>this.onRead(t)}))}getCartState(){return this.store.pipe((0,p.h)(t=>!!t.cart),(0,l.Ys)(X),(0,p.h)(t=>!!t),(0,u.U)(t=>t.index),function ke(e,r){return(0,y.x)((t,s)=>r?r(t[e],s[e]):t[e]===s[e])}("Active"),(0,u.U)(t=>({active:t[o.EI.ACTIVE]??""})))}onRead(t){this.store.dispatch(new he),this.store.dispatch(new mt(t?t.active:""))}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(n.WBb),c.LFG(l.yh),c.LFG(n.Qnj))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function yr(e,r){return()=>r.getStable("context").pipe((0,V.b)(()=>{e.initSync()})).toPromise()}function Ar(){return r=>(t,s)=>{const i={...t};return"@ngrx/store/init"===s.type&&(i.cart={...i.cart,index:{[o.EI.ACTIVE]:void 0}}),r(i,s)}}let Rr=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[{provide:n.z4I,useFactory:yr,deps:[fr,n.yUt],multi:!0},{provide:l.sr,useFactory:Ar,multi:!0}]}),e})();class Ue{}let Ve=(()=>{class e{constructor(t){this.adapter=t}validate(t,s){return this.adapter.validate(t,s)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(Ue))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),mr=(()=>{class e{constructor(t,s,i,a){this.actionsSubject=t,this.event=s,this.activeCartService=i,this.stateEventService=a,this.register()}register(){this.registerCreateCart(),this.registerAddEntry(),this.registerRemoveEntry(),this.registerUpdateEntry(),this.registerDeleteCart()}registerAddEntry(){this.registerMapped({action:k,event:o.uP}),this.registerMapped({action:b,event:o.VD}),this.registerMapped({action:Y,event:o.K$})}registerRemoveEntry(){this.registerMapped({action:B,event:o.A7}),this.registerMapped({action:st,event:o.dC})}registerUpdateEntry(){this.registerMapped({action:H,event:o.X}),this.registerMapped({action:at,event:o.gI})}registerCreateCart(){this.stateEventService.register({action:P,event:o.su}),this.stateEventService.register({action:G,event:o.cA}),this.stateEventService.register({action:ht,event:o.Cj})}registerDeleteCart(){this.stateEventService.register({action:W,event:o.aY,factory:t=>(0,n.PjU)(o.aY,{...t.payload,cartCode:t.payload.cartId})}),this.stateEventService.register({action:j,event:o.N0,factory:t=>(0,n.PjU)(o.N0,{...t.payload,cartCode:t.payload.cartId})}),this.stateEventService.register({action:It,event:o.Ks,factory:t=>(0,n.PjU)(o.Ks,{...t.payload,cartCode:t.payload.cartId})})}registerMapped(t){const s=this.getAction(t.action).pipe((0,I.w)(i=>(0,F.of)(i).pipe((0,S.M)(this.activeCartService.getActive(),this.activeCartService.getActiveCartId()))),(0,p.h)(([i,a,d])=>i.payload.cartId===d),(0,u.U)(([i,a])=>(0,n.PjU)(t.event,{...i.payload,cartCode:a.code,entry:i.payload.entry?i.payload.entry:a.entries?.[Number(i.payload.entryNumber)]})));return this.event.register(t.event,s)}getAction(t){return this.actionsSubject.pipe((0,C.l4)(...[].concat(t)))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(l.UO),c.LFG(n.POd),c.LFG(o.bu),c.LFG(n.vL$))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Tr=(()=>{class e{constructor(t){}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(mr))},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({}),e})(),Fr=(()=>{class e{constructor(t){this.eventService=t,this.register()}register(){this.eventService.register(o.uB,this.buildCartPageEvent())}buildCartPageEvent(){return this.eventService.get(Qe.z4w).pipe((0,p.h)(t=>"cart"===t.semanticRoute),(0,u.U)(t=>(0,n.PjU)(o.uB,{navigation:t})))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(n.POd))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Mr=(()=>{class e{constructor(t){}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(Fr))},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({}),e})(),Pe=(()=>{class e{constructor(t,s){this.multiCartFacade=t,this.userIdService=s,this.subscription=new tt.w,this.activeCartId$=this.userIdService.getUserId().pipe((0,g.q)(1),(0,q.c)(this.multiCartFacade.getCartIdByType(o.EI.ACTIVE)),(0,p.h)(i=>void 0!==i),(0,u.U)(i=>""===i?n.gSv:i)),this.cartEntity$=this.activeCartId$.pipe((0,I.w)(i=>this.multiCartFacade.getCartEntity(i))),this.checkInitLoad=void 0,this.initActiveCart(),this.detectUserChange()}initActiveCart(){const t=this.cartEntity$.pipe((0,u.U)(i=>({cart:i.value,isStable:!i.loading&&0===i.processesCount,loaded:Boolean((i.error||i.success)&&!i.loading)})),(0,p.h)(({isStable:i,cart:a})=>i||_(a))),s=t.pipe((0,S.M)(this.activeCartId$,this.userIdService.getUserId()),(0,V.b)(([{cart:i,loaded:a,isStable:d},E,A])=>{d&&_(i)&&!a&&!Se(E)&&this.load(E,A)}));this.activeCart$=(0,We.g)(()=>s.subscribe(),()=>t).pipe((0,u.U)(({cart:i})=>i||{}),(0,y.x)(),(0,Dt.d)({bufferSize:1,refCount:!0}))}detectUserChange(){this.subscription.add(this.userIdService.getUserId().pipe((0,Ye.G)(),(0,S.M)(this.activeCartId$)).subscribe(([[t,s],i])=>{(function ur(e,r){return e!==n.Fds&&r!==e})(s,t)&&this.loadOrMerge(i,s,t)}))}getActive(){return this.activeCart$}takeActive(){return this.isStable().pipe((0,p.h)(t=>t),(0,I.w)(()=>this.getActive()),(0,p.h)(t=>!!t),(0,g.q)(1))}getActiveCartId(){return this.activeCart$.pipe((0,S.M)(this.userIdService.getUserId()),(0,u.U)(([t,s])=>M(t,s)),(0,y.x)())}takeActiveCartId(){return this.isStable().pipe((0,p.h)(t=>t),(0,I.w)(()=>this.getActiveCartId()),(0,p.h)(t=>!!t),(0,g.q)(1))}getEntries(){return this.activeCartId$.pipe((0,I.w)(t=>this.multiCartFacade.getEntries(t)),(0,y.x)())}getLastEntry(t){return this.activeCartId$.pipe((0,I.w)(s=>this.multiCartFacade.getLastEntry(s,t)),(0,y.x)())}getLoading(){return this.cartEntity$.pipe((0,u.U)(t=>Boolean(t.loading)),(0,y.x)())}isStable(){return this.activeCartId$.pipe((0,I.w)(t=>this.multiCartFacade.isStable(t)))}load(t,s){s===n.Fds&&t===n.gSv||this.multiCartFacade.loadCart({userId:s,cartId:t,extraData:{active:!0}})}loadOrMerge(t,s,i){t===n.gSv||i!==n.Fds?this.multiCartFacade.loadCart({userId:s,cartId:t,extraData:{active:!0}}):Boolean((0,n.P51)(this.isGuestCart()))?this.guestCartMerge(t):this.multiCartFacade.mergeToCurrentCart({userId:s,cartId:t,extraData:{active:!0}})}guestCartMerge(t){this.getEntries().pipe((0,g.q)(1)).subscribe(s=>{this.multiCartFacade.deleteCart(t,n.Fds),this.addEntriesGuestMerge(s)})}addEntriesGuestMerge(t){const s=t.map(i=>({productCode:i.product?.code??"",quantity:i.quantity??0}));this.requireLoadedCart(!0).pipe((0,S.M)(this.userIdService.getUserId())).subscribe(([i,a])=>{this.multiCartFacade.addEntries(a,M(i,a),s)})}isCartCreating(t,s){return Se(s)&&(t.loading||t.success||t.error)}requireLoadedCart(t=!1){this.checkInitLoad=void 0===this.checkInitLoad;const s=(t?this.cartEntity$.pipe((0,p.h)(()=>!Boolean((0,n.P51)(this.isGuestCart())))):this.cartEntity$).pipe((0,p.h)(i=>!i.loading||!!this.checkInitLoad));return this.activeCartId$.pipe((0,S.M)(s),(0,p.h)(([i,a])=>!this.isCartCreating(a,i)),(0,u.U)(([,i])=>i),(0,g.q)(1),(0,S.M)(this.userIdService.getUserId()),(0,V.b)(([i,a])=>{_(i.value)&&a!==n.Fds&&!i.loading&&this.load(n.gSv,a),this.checkInitLoad=!1}),(0,q.c)(s),(0,S.M)(this.userIdService.getUserId()),(0,p.h)(([i,a])=>Boolean(a===n.Fds||i.success||i.error)),(0,g.q)(1),(0,V.b)(([i,a])=>{_(i.value)&&this.multiCartFacade.createCart({userId:a,extraData:{active:!0}})}),(0,q.c)(s),(0,p.h)(i=>i.success||i.error),(0,S.M)(this.activeCartId$),(0,p.h)(([i,a])=>!this.isCartCreating(i,a)),(0,u.U)(([i])=>i.value),(0,p.h)(i=>!_(i)),(0,g.q)(1))}addEntry(t,s){this.requireLoadedCart().pipe((0,S.M)(this.userIdService.getUserId())).subscribe(([i,a])=>{this.multiCartFacade.addEntry(a,M(i,a),t,s)})}removeEntry(t){this.activeCartId$.pipe((0,S.M)(this.userIdService.getUserId()),(0,g.q)(1)).subscribe(([s,i])=>{this.multiCartFacade.removeEntry(i,s,t.entryNumber)})}updateEntry(t,s){this.activeCartId$.pipe((0,S.M)(this.userIdService.getUserId()),(0,g.q)(1)).subscribe(([i,a])=>{this.multiCartFacade.updateEntry(a,i,t,s)})}getEntry(t){return this.activeCartId$.pipe((0,I.w)(s=>this.multiCartFacade.getEntry(s,t)),(0,y.x)())}addEmail(t){this.activeCartId$.pipe((0,S.M)(this.userIdService.getUserId()),(0,g.q)(1)).subscribe(([s,i])=>{this.multiCartFacade.assignEmail(s,i,t)})}getAssignedUser(){return this.activeCart$.pipe((0,u.U)(t=>t.user))}isGuestCart(t){return t?(0,F.of)(this.isCartUserGuest(t)):this.activeCart$.pipe((0,u.U)(s=>this.isCartUserGuest(s)),(0,y.x)())}isCartUserGuest(t){const s=t.user;return Boolean(s&&(s.name===n.YI5||function dr(e){return!!e&&!!e.match(n.QIJ)}(s.uid?.split("|").slice(1).join("|"))))}addEntries(t){const s=t.map(i=>({productCode:i.product?.code??"",quantity:i.quantity??0}));this.requireLoadedCart().pipe((0,S.M)(this.userIdService.getUserId())).subscribe(([i,a])=>{i&&this.multiCartFacade.addEntries(a,M(i,a),s)})}reloadActiveCart(){(0,N.aj)([this.getActiveCartId(),this.userIdService.takeUserId()]).pipe((0,g.q)(1),(0,u.U)(([t,s])=>{this.multiCartFacade.loadCart({cartId:t,userId:s,extraData:{active:!0}})})).subscribe()}ngOnDestroy(){this.subscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(o.WT),c.LFG(n.XBV))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})(),Ge=(()=>{class e{constructor(t){this.routingService=t,this.NAVIGATION_SKIPS=2,this.navigationIdCount=0,this.subscription=new tt.w,this.cartValidationResult$=new je.t(1),this.checkForValidationResultClear$=this.routingService.getRouterState().pipe((0,S.M)(this.cartValidationResult$),(0,V.b)(([s,i])=>{this.navigationIdCount+this.NAVIGATION_SKIPS<=s.navigationId&&i.length&&(this.cartValidationResult$.next([]),this.navigationIdCount=s.navigationId)})),this.setInitialState()}ngOnDestroy(){this.subscription.unsubscribe()}setInitialState(){this.setNavigationIdStep(),this.subscription.add(this.checkForValidationResultClear$.subscribe())}updateValidationResultAndRoutingId(t){this.cartValidationResult$.next(t),this.setNavigationIdStep()}setNavigationIdStep(){this.routingService.getRouterState().pipe((0,g.q)(1)).subscribe(t=>this.navigationIdCount=t.navigationId)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(n.Znh))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Le=(()=>{class e{constructor(t,s,i,a,d){this.cartValidationConnector=t,this.command=s,this.userIdService=i,this.activeCartFacade=a,this.cartValidationStateService=d,this.validateCartCommand=this.command.create(()=>(0,N.aj)([this.activeCartFacade.getActiveCartId(),this.userIdService.takeUserId(),this.activeCartFacade.isStable()]).pipe((0,p.h)(([E,A,Oe])=>Oe),(0,g.q)(1),(0,I.w)(([E,A])=>this.cartValidationConnector.validate(E,A))),{strategy:n.flE.CancelPrevious})}validateCart(){return this.validateCartCommand.execute()}getValidationResults(){return this.cartValidationStateService.cartValidationResult$}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(Ve),c.LFG(n.VDr),c.LFG(n.XBV),c.LFG(o.bu),c.LFG(Ge))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})(),_e=(()=>{class e{constructor(t,s,i){this.store=t,this.activeCartFacade=s,this.userIdService=i}addVoucher(t,s){this.combineUserAndCartId(s).subscribe(([i,a])=>this.store.dispatch(new $t({userId:i,cartId:a,voucherId:t})))}removeVoucher(t,s){this.combineUserAndCartId(s).subscribe(([i,a])=>this.store.dispatch(new Bt({userId:i,cartId:a,voucherId:t})))}getAddVoucherResultError(){return this.store.pipe((0,l.Ys)(n.VkE.getProcessErrorFactory(D)))}getAddVoucherResultSuccess(){return this.store.pipe((0,l.Ys)(n.VkE.getProcessSuccessFactory(D)))}getAddVoucherResultLoading(){return this.store.pipe((0,l.Ys)(n.VkE.getProcessLoadingFactory(D)))}resetAddVoucherProcessingState(){this.store.dispatch(new Yt)}combineUserAndCartId(t){return t?this.userIdService.getUserId().pipe((0,g.q)(1),(0,u.U)(s=>[s,t])):(0,N.aj)([this.userIdService.getUserId(),this.activeCartFacade.getActiveCartId()]).pipe((0,g.q)(1))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(l.yh),c.LFG(o.bu),c.LFG(n.XBV))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})(),xe=(()=>{class e{constructor(t,s){this.store=t,this.userIdService=s}getCart(t){return this.store.pipe((0,l.Ys)(Ft(t)))}getCarts(){return this.store.pipe((0,l.Ys)(Re))}getCartEntity(t){return this.store.pipe((0,l.Ys)(ge(t)))}isStable(t){return this.store.pipe((0,l.Ys)(fe(t)),function Be(e){return r=>r.lift(new He(e))}(s=>s?(0,Ke.H)(0):Xe.E),(0,y.x)())}generateTempCartId(){return`temp-${Math.random().toString(36).substr(2,9)}`}createCart({userId:t,oldCartId:s,toMergeCartGuid:i,extraData:a}){const d=this.generateTempCartId();return this.store.dispatch(new St({extraData:a,userId:t,oldCartId:s,toMergeCartGuid:i,tempCartId:d})),this.getCartIdByType(a?.active?o.EI.ACTIVE:o.EI.NEW_CREATED).pipe((0,I.w)(E=>this.getCart(E)),(0,p.h)(n.pTN))}mergeToCurrentCart({userId:t,cartId:s,extraData:i}){const a=this.generateTempCartId();this.store.dispatch(new se({userId:t,cartId:s,extraData:i,tempCartId:a}))}loadCart({cartId:t,userId:s,extraData:i}){this.store.dispatch(new f({userId:s,cartId:t,extraData:i}))}getEntries(t){return this.store.pipe((0,l.Ys)(Q(t)))}getLastEntry(t,s){return this.store.pipe((0,l.Ys)(Q(t)),(0,u.U)(i=>{const a=i.filter(d=>d.product?.code===s);return a?a[a.length-1]:void 0}))}addEntry(t,s,i,a){this.store.dispatch(new nt({userId:t,cartId:s,productCode:i,quantity:a}))}addEntries(t,s,i){i.forEach(a=>{this.store.dispatch(new nt({userId:t,cartId:s,productCode:a.productCode,quantity:a.quantity}))})}removeEntry(t,s,i){this.store.dispatch(new Vt({userId:t,cartId:s,entryNumber:`${i}`}))}updateEntry(t,s,i,a){a>0?this.store.dispatch(new Lt({userId:t,cartId:s,entryNumber:`${i}`,quantity:a})):this.removeEntry(t,s,i)}getEntry(t,s){return this.store.pipe((0,l.Ys)(Ae(t,s)))}assignEmail(t,s,i){this.store.dispatch(new Zt({userId:s,cartId:t,email:i}))}removeCart(t){this.store.dispatch(new O({cartId:t}))}deleteCart(t,s){this.store.dispatch(new ne({userId:s,cartId:t}))}reloadCart(t,s){this.userIdService.takeUserId().subscribe(i=>this.store.dispatch(new f({userId:i,cartId:t,extraData:s})))}getCartIdByType(t){return this.store.pipe((0,l.Ys)(Te(t)),(0,y.x)())}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(l.yh),c.LFG(n.XBV))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})(),be=(()=>{class e{constructor(t,s,i,a){this.userProfileFacade=t,this.multiCartFacade=s,this.baseSiteService=i,this.userIdService=a}getCart(){return this.selectiveCart$||(this.selectiveCart$=(0,N.aj)([this.getSelectiveCartId(),this.userProfileFacade.get(),this.userIdService.getUserId(),this.baseSiteService.getActive()]).pipe((0,y.x)(),(0,V.b)(([t,s,i,a])=>{!Boolean(t)&&i!==n.Fds&&s?.customerId&&this.multiCartFacade.loadCart({userId:i,cartId:`selectivecart${a}${s.customerId}`})}),(0,p.h)(([t])=>Boolean(t)),(0,I.w)(([t])=>this.multiCartFacade.getCart(t)),(0,Dt.d)({bufferSize:1,refCount:!0}))),this.selectiveCart$}getEntries(){return this.getSelectiveCartId().pipe((0,I.w)(t=>this.multiCartFacade.getEntries(t)))}isStable(){return this.getSelectiveCartId().pipe((0,I.w)(t=>this.multiCartFacade.isStable(t)))}addEntry(t,s){this.getSelectiveIdWithUserId().subscribe(([i,a])=>{this.multiCartFacade.addEntry(a,i,t,s)})}removeEntry(t){this.getSelectiveIdWithUserId().subscribe(([s,i])=>{this.multiCartFacade.removeEntry(i,s,t.entryNumber)})}updateEntry(t,s){this.getSelectiveIdWithUserId().subscribe(([i,a])=>{this.multiCartFacade.updateEntry(a,i,t,s)})}getEntry(t){return this.getSelectiveCartId().pipe((0,I.w)(s=>this.multiCartFacade.getEntry(s,t)))}getSelectiveCartId(){return this.multiCartFacade.getCartIdByType(o.EI.SELECTIVE)}getSelectiveIdWithUserId(){return this.getSelectiveCartId().pipe((0,y.x)(),(0,S.M)(this.userIdService.getUserId()),(0,g.q)(1))}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(Je.aT),c.LFG(o.WT),c.LFG(n.Do$),c.LFG(n.XBV))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})();const Dr=[Pe,{provide:o.bu,useExisting:Pe},_e,{provide:o.LN,useExisting:_e},xe,{provide:o.WT,useExisting:xe},be,{provide:o.Oo,useExisting:be},Le,{provide:o.mU,useExisting:Le}];let Ur=(()=>{class e extends n.kck{constructor(){super(...arguments),this.responseStatus=n.sdw.BAD_REQUEST}getPriority(){return 0}hasMatch(t){return super.hasMatch(t)&&this.getErrors(t).some(or)}handleError(t,s){this.handleCartNotFoundError(t,s),this.handleOtherCartErrors(t,s)}handleCartNotFoundError(t,s){this.getErrors(s).filter(i=>Ie(i)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.cartNotFound"},n.xUg.MSG_TYPE_ERROR)})}handleOtherCartErrors(t,s){this.getErrors(s).filter(i=>"notFound"!==i.reason||"cart"!==i.subjectType).forEach(i=>{this.globalMessageService.add(i.message?i.message:{key:"httpHandlers.otherCartErrors"},n.xUg.MSG_TYPE_ERROR)})}getErrors(t){return(t.error?.errors||[]).filter(s=>"JaloObjectNoLongerValidError"!==s.type)}}return e.\u0275fac=function(){let r;return function(s){return(r||(r=c.n5z(e)))(s||e)}}(),e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Vr=(()=>{class e extends n.kck{constructor(){super(...arguments),this.responseStatus=n.sdw.BAD_REQUEST}getPriority(){return 0}hasMatch(t){return super.hasMatch(t)&&this.getErrors(t).some(cr)}handleError(t,s){this.handleVoucherExceededError(t,s),this.handleVoucherInvalidError(t,s)}handleVoucherExceededError(t,s){this.getErrors(s).filter(i=>function ar(e){return"coupon.already.redeemed"===e.message}(i)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.voucherExceeded"},n.xUg.MSG_TYPE_ERROR)})}handleVoucherInvalidError(t,s){this.getErrors(s).filter(i=>function nr(e){return"coupon.invalid.code.provided"===e.message}(i)).forEach(()=>{this.globalMessageService.add({key:"httpHandlers.invalidCodeProvided"},n.xUg.MSG_TYPE_ERROR)})}getErrors(t){return(t.error?.errors||[]).filter(s=>"JaloObjectNoLongerValidError"!==s.type)}}return e.\u0275fac=function(){let r;return function(s){return(r||(r=c.n5z(e)))(s||e)}}(),e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Pr=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[Sr],imports:[qe.ez,n.vUS,l.Aw.forFeature("cart",De,{metaReducers:pr}),C.sQ.forFeature(Cr)]}),e})(),Gr=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({providers:[Mt,ve,pe,Ve,...Dr,{provide:n.kck,useExisting:Ur,multi:!0},{provide:n.kck,useExisting:Vr,multi:!0}],imports:[Tr,Pr,Rr,Mr]}),e})();const Lr=new c.OlP("CartValidationNormalizer");let we=(()=>{class e{constructor(t){this.config=t}isSelectiveCartEnabled(){return Boolean(this.config?.cart?.selectiveCart?.enabled)}isCartValidationEnabled(){return Boolean(this.config?.cart?.validation?.enabled)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(o.qB))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),_r=(()=>{class e{constructor(t,s,i,a,d,E,A){this.cartValidationService=t,this.semanticPathService=s,this.router=i,this.globalMessageService=a,this.activeCartService=d,this.cartValidationStateService=E,this.cartConfigService=A,this.GLOBAL_MESSAGE_TIMEOUT=1e4}canActivate(){return this.cartConfigService.isCartValidationEnabled()?this.cartValidationService.validateCart().pipe((0,S.M)(this.activeCartService.getEntries()),(0,u.U)(([t,s])=>{if(this.cartValidationStateService.updateValidationResultAndRoutingId(t.cartModifications??[]),void 0!==t.cartModifications&&0!==t.cartModifications.length){let i;const a=t.cartModifications[0];return i=1===s.length&&s[0].product?.code===a.entry?.product?.code&&a.statusCode===o.v$.NO_STOCK?{key:"validation.cartEntryRemoved",params:{name:a.entry?.product?.name}}:{key:"validation.cartEntriesChangeDuringCheckout"},this.globalMessageService.add(i,n.xUg.MSG_TYPE_ERROR,this.GLOBAL_MESSAGE_TIMEOUT),this.activeCartService.reloadActiveCart(),this.router.parseUrl(this.semanticPathService.get("cart")??"")}return!0})):(0,F.of)(!0)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(o.mU),c.LFG(n.hCH),c.LFG(Ze.F0),c.LFG(n.IWp),c.LFG(o.bu),c.LFG(Ge),c.LFG(we))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),xr=(()=>{class e{constructor(t){this.actionsSubject=t}getResults(t){return this.actionsSubject.pipe((0,C.l4)(b,Y),(0,p.h)(s=>s.payload.cartId===t),(0,u.U)(s=>this.mapMessages(s)))}mapMessages(t){const{productCode:s}=t.payload;if(t instanceof ct){const{quantity:i,quantityAdded:a,entry:d,statusCode:E}=t.payload;if(E===o.QX.LOW_STOCK)return{productCode:s,statusCode:E,productName:d?.product?.name,quantity:i,quantityAdded:a};if(E===o.QX.SUCCESS||E===o.QX.NO_STOCK)return{productCode:s,statusCode:E,productName:d?.product?.name}}else if(t instanceof ot){const{error:i}=t.payload;if("UnknownIdentifierError"===i?.details[0]?.type)return{productCode:s,statusCode:o.QX.UNKNOWN_IDENTIFIER}}return(0,c.X6Q)()&&console.warn("Unrecognized cart add entry action type while mapping messages",t),{productCode:s,statusCode:o.QX.UNKNOWN_ERROR}}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(l.UO))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);