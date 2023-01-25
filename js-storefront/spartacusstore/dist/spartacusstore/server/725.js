"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=725,exports.ids=[725],exports.modules={4725:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PersonalizationModule:()=>PersonalizationModule});var core=__webpack_require__(5e3),empty=__webpack_require__(8896),filter=__webpack_require__(2198),map=__webpack_require__(4850),spartacus_tracking_personalization_root=__webpack_require__(2186),spartacus_core=__webpack_require__(8284);class PersonalizationCoreModule{}__name(PersonalizationCoreModule,"PersonalizationCoreModule"),PersonalizationCoreModule.\u0275fac=__name(function(t){return new(t||PersonalizationCoreModule)},"PersonalizationCoreModule_Factory"),PersonalizationCoreModule.\u0275mod=core.oAB({type:PersonalizationCoreModule}),PersonalizationCoreModule.\u0275inj=core.cJS({});class PersonalizationContextService{constructor(config,cmsService){this.config=config,this.cmsService=cmsService}getPersonalizationContext(){var _a;if(null!==(_a=this.config.personalization)&&void 0!==_a&&_a.context){const context=this.config.personalization.context;return this.cmsService.getCurrentPage().pipe((0,filter.h)(Boolean),(0,map.U)(page=>{var _a2;return null===(_a2=page.slots)||void 0===_a2?void 0:_a2[context.slotPosition]}),(0,filter.h)(Boolean),(0,map.U)(slot=>{var _a2,_b,_c;const scriptComponent=null===(_a2=slot.components)||void 0===_a2?void 0:_a2.find(i=>i.uid===context.componentId);return this.buildPersonalizationContext(null===(_c=null===(_b=null==scriptComponent?void 0:scriptComponent.properties)||void 0===_b?void 0:_b.script)||void 0===_c?void 0:_c.data)}))}return(0,core.X6Q)()&&console.warn("There is no context configured in Personalization."),empty.E}buildPersonalizationContext(data){if(data){const context=JSON.parse(atob(data));context.actions.forEach(action=>{Object.keys(action).forEach(key=>{action[key]=atob(action[key])})});for(let i=0;i<context.segments.length;i++)context.segments[i]=atob(context.segments[i]);return context}}}__name(PersonalizationContextService,"PersonalizationContextService"),PersonalizationContextService.\u0275fac=__name(function(t){return new(t||PersonalizationContextService)(core.LFG(spartacus_tracking_personalization_root.TG),core.LFG(spartacus_core.ctt))},"PersonalizationContextService_Factory"),PersonalizationContextService.\u0275prov=core.Yz7({token:PersonalizationContextService,factory:PersonalizationContextService.\u0275fac,providedIn:"root"});class PersonalizationModule{}__name(PersonalizationModule,"PersonalizationModule"),PersonalizationModule.\u0275fac=__name(function(t){return new(t||PersonalizationModule)},"PersonalizationModule_Factory"),PersonalizationModule.\u0275mod=core.oAB({type:PersonalizationModule}),PersonalizationModule.\u0275inj=core.cJS({imports:[PersonalizationCoreModule]})}};