"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=724,exports.ids=[724],exports.modules={9724:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProductVariantsModule:()=>ProductVariantsModule});var core=__webpack_require__(5e3),common=__webpack_require__(9808),spartacus_core=__webpack_require__(3409);class ProductVariantsOccModule{}__name(ProductVariantsOccModule,"ProductVariantsOccModule"),ProductVariantsOccModule.\u0275fac=__name(function(t){return new(t||ProductVariantsOccModule)},"ProductVariantsOccModule_Factory"),ProductVariantsOccModule.\u0275mod=core.oAB({type:ProductVariantsOccModule}),ProductVariantsOccModule.\u0275inj=core.cJS({providers:[(0,spartacus_core.i51)({backend:{occ:{endpoints:{product:{variants:"products/${productCode}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType"}}}}})],imports:[common.ez]});var router=__webpack_require__(9516),filter=__webpack_require__(2198),take=__webpack_require__(2986),distinctUntilChanged=__webpack_require__(5778),tap=__webpack_require__(2994),switchMap=__webpack_require__(7545),map=__webpack_require__(4850),spartacus_storefront=__webpack_require__(7516),of=__webpack_require__(1086);function ProductVariantColorSelectorComponent_option_6_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"option",4),core._uU(1),core.qZA()),2&rf){const v_r1=ctx.$implicit,ctx_r0=core.oxw();core.s9C("value",v_r1.code),core.Q6J("selected",v_r1.code===(null==ctx_r0.product?null:ctx_r0.product.code)),core.xp6(1),core.hij(" ",ctx_r0.getVariantOptionValue(v_r1.variantOptionQualifiers)," ")}}function ProductVariantSizeSelectorComponent_option_6_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"option",5),core._uU(1),core.qZA()),2&rf){const v_r1=ctx.$implicit,ctx_r0=core.oxw();core.s9C("value",v_r1.code),core.Q6J("selected",v_r1.code===(null==ctx_r0.product?null:ctx_r0.product.code)),core.xp6(1),core.hij(" ",ctx_r0.getVariantOptionValue(v_r1.variantOptionQualifiers)," ")}}function ProductVariantStyleSelectorComponent_div_2_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",4),core._uU(1),core.ALo(2,"cxTranslate"),core.TgZ(3,"span",5),core._uU(4),core.qZA()()),2&rf){const ctx_r0=core.oxw();core.xp6(1),core.hij(" ",core.lcZ(2,2,"productVariants.style"),": "),core.xp6(3),core.Oqu(ctx_r0.getVariantOptionValue(null==ctx_r0.variants?null:ctx_r0.variants.selected.variantOptionQualifiers))}}__name(ProductVariantColorSelectorComponent_option_6_Template,"ProductVariantColorSelectorComponent_option_6_Template"),__name(ProductVariantSizeSelectorComponent_option_6_Template,"ProductVariantSizeSelectorComponent_option_6_Template"),__name(ProductVariantStyleSelectorComponent_div_2_Template,"ProductVariantStyleSelectorComponent_div_2_Template");const _c0=__name(function(a0){return{"selected-variant":a0}},"_c0");function ProductVariantStyleSelectorComponent_li_4_Template(rf,ctx){if(1&rf){const _r4=core.EpF();core.TgZ(0,"li",6)(1,"button",7),core.NdJ("click",__name(function(){const v_r2=core.CHM(_r4).$implicit,ctx_r3=core.oxw();return core.KtG(ctx_r3.changeStyle(v_r2.code))},"ProductVariantStyleSelectorComponent_li_4_Template_button_click_1_listener")),core._UZ(2,"img",8),core.qZA()()}if(2&rf){const v_r2=ctx.$implicit,ctx_r1=core.oxw();core.Q6J("ngClass",core.VKq(4,_c0,v_r2.code===(null==ctx_r1.variants||null==ctx_r1.variants.selected?null:ctx_r1.variants.selected.code))),core.xp6(2),core.s9C("src",ctx_r1.getVariantThumbnailUrl(v_r2.variantOptionQualifiers),core.LSH),core.s9C("title",ctx_r1.getVariantOptionValue(v_r2.variantOptionQualifiers)),core.s9C("alt",ctx_r1.getVariantOptionValue(v_r2.variantOptionQualifiers))}}function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template(rf,ctx){if(1&rf&&core._UZ(0,"cx-product-variant-style-selector",5),2&rf){const ctx_r3=core.oxw(3);core.Q6J("variants",ctx_r3.variants[ctx_r3.variantType.STYLE])}}function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template(rf,ctx){if(1&rf&&core._UZ(0,"cx-product-variant-size-selector",6),2&rf){const product_r1=core.oxw(2).ngIf,ctx_r4=core.oxw();core.Q6J("product",product_r1)("variants",ctx_r4.variants[ctx_r4.variantType.SIZE])}}function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template(rf,ctx){if(1&rf&&core._UZ(0,"cx-product-variant-color-selector",6),2&rf){const product_r1=core.oxw(2).ngIf,ctx_r5=core.oxw();core.Q6J("product",product_r1)("variants",ctx_r5.variants[ctx_r5.variantType.COLOR])}}function ProductVariantsContainerComponent_ng_container_0_div_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"div",2),core.YNc(1,ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template,1,1,"cx-product-variant-style-selector",3),core.YNc(2,ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template,1,2,"cx-product-variant-size-selector",4),core.YNc(3,ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template,1,2,"cx-product-variant-color-selector",4),core.qZA()),2&rf){const ctx_r2=core.oxw(2);core.xp6(1),core.Q6J("ngIf",ctx_r2.variants[ctx_r2.variantType.STYLE]),core.xp6(1),core.Q6J("ngIf",ctx_r2.variants[ctx_r2.variantType.SIZE]),core.xp6(1),core.Q6J("ngIf",ctx_r2.variants[ctx_r2.variantType.COLOR])}}function ProductVariantsContainerComponent_ng_container_0_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,ProductVariantsContainerComponent_ng_container_0_div_1_Template,4,3,"div",1),core.BQk()),2&rf){const product_r1=ctx.ngIf;core.xp6(1),core.Q6J("ngIf",null==product_r1.baseOptions?null:product_r1.baseOptions.length)}}__name(ProductVariantStyleSelectorComponent_li_4_Template,"ProductVariantStyleSelectorComponent_li_4_Template"),__name(ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template,"ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template"),__name(ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template,"ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template"),__name(ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template,"ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template"),__name(ProductVariantsContainerComponent_ng_container_0_div_1_Template,"ProductVariantsContainerComponent_ng_container_0_div_1_Template"),__name(ProductVariantsContainerComponent_ng_container_0_Template,"ProductVariantsContainerComponent_ng_container_0_Template");class ProductVariantColorSelectorComponent{constructor(routingService){this.routingService=routingService}changeColor(code,name){return code&&this.routingService.go({cxRoute:"product",params:{code,name}}),null}getVariantOptionValue(qualifiers){const obj=qualifiers.find(q=>q.qualifier===spartacus_core.zYO.COLOR);return obj?obj.value:""}}__name(ProductVariantColorSelectorComponent,"ProductVariantColorSelectorComponent"),ProductVariantColorSelectorComponent.\u0275fac=__name(function(t){return new(t||ProductVariantColorSelectorComponent)(core.Y36(spartacus_core.Znh))},"ProductVariantColorSelectorComponent_Factory"),ProductVariantColorSelectorComponent.\u0275cmp=core.Xpm({type:ProductVariantColorSelectorComponent,selectors:[["cx-product-variant-color-selector"]],inputs:{product:"product",variants:"variants"},decls:7,vars:4,consts:[[1,"variant-selector"],[1,"variant-name"],[1,"form-control","variant-select",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[3,"value","selected"]],template:__name(function(rf,ctx){1&rf&&(core.ynx(0),core.TgZ(1,"div",0)(2,"div",1),core._uU(3),core.ALo(4,"cxTranslate"),core.qZA(),core.TgZ(5,"select",2),core.NdJ("change",__name(function($event){return ctx.changeColor($event.target.value,null==ctx.product?null:ctx.product.name)},"ProductVariantColorSelectorComponent_Template_select_change_5_listener")),core.YNc(6,ProductVariantColorSelectorComponent_option_6_Template,2,3,"option",3),core.qZA()(),core.BQk()),2&rf&&(core.xp6(3),core.hij("",core.lcZ(4,2,"productVariants.color"),":"),core.xp6(3),core.Q6J("ngForOf",null==ctx.variants?null:ctx.variants.options))},"ProductVariantColorSelectorComponent_Template"),dependencies:[common.sg,spartacus_core.X$D],encapsulation:2,changeDetection:0});class ProductVariantColorSelectorModule{}__name(ProductVariantColorSelectorModule,"ProductVariantColorSelectorModule"),ProductVariantColorSelectorModule.\u0275fac=__name(function(t){return new(t||ProductVariantColorSelectorModule)},"ProductVariantColorSelectorModule_Factory"),ProductVariantColorSelectorModule.\u0275mod=core.oAB({type:ProductVariantColorSelectorModule}),ProductVariantColorSelectorModule.\u0275inj=core.cJS({imports:[common.ez,router.Bz,spartacus_core.bhT,spartacus_core.LUR]});class ProductVariantSizeSelectorComponent{constructor(productService,routingService){this.productService=productService,this.routingService=routingService}changeSize(code){return code&&this.productService.get(code,"list").pipe((0,filter.h)(spartacus_core.pTN),(0,take.q)(1)).subscribe(product=>{this.routingService.go({cxRoute:"product",params:product})}),null}getVariantOptionValue(qualifiers){const obj=qualifiers.find(q=>q.qualifier===spartacus_core.zYO.SIZE);return obj?obj.value:""}}__name(ProductVariantSizeSelectorComponent,"ProductVariantSizeSelectorComponent"),ProductVariantSizeSelectorComponent.\u0275fac=__name(function(t){return new(t||ProductVariantSizeSelectorComponent)(core.Y36(spartacus_core.M52),core.Y36(spartacus_core.Znh))},"ProductVariantSizeSelectorComponent_Factory"),ProductVariantSizeSelectorComponent.\u0275cmp=core.Xpm({type:ProductVariantSizeSelectorComponent,selectors:[["cx-product-variant-size-selector"]],inputs:{product:"product",variants:"variants"},decls:11,vars:10,consts:[[1,"variant-selector"],[1,"variant-name"],[1,"form-control","variant-select",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],["href","#",1,"size-guide",3,"title"],[3,"value","selected"]],template:__name(function(rf,ctx){1&rf&&(core.ynx(0),core.TgZ(1,"div",0)(2,"div",1),core._uU(3),core.ALo(4,"cxTranslate"),core.qZA(),core.TgZ(5,"select",2),core.NdJ("change",__name(function($event){return ctx.changeSize($event.target.value)},"ProductVariantSizeSelectorComponent_Template_select_change_5_listener")),core.YNc(6,ProductVariantSizeSelectorComponent_option_6_Template,2,3,"option",3),core.qZA(),core.TgZ(7,"a",4),core.ALo(8,"cxTranslate"),core._uU(9),core.ALo(10,"cxTranslate"),core.qZA()(),core.BQk()),2&rf&&(core.xp6(3),core.hij("",core.lcZ(4,4,"productVariants.size"),":"),core.xp6(3),core.Q6J("ngForOf",null==ctx.variants?null:ctx.variants.options),core.xp6(1),core.s9C("title",core.lcZ(8,6,"productVariants.sizeGuideLabel")),core.xp6(2),core.hij(" ",core.lcZ(10,8,"productVariants.sizeGuideLabel")," "))},"ProductVariantSizeSelectorComponent_Template"),dependencies:[common.sg,spartacus_core.X$D],encapsulation:2,changeDetection:0});class ProductVariantSizeSelectorModule{}__name(ProductVariantSizeSelectorModule,"ProductVariantSizeSelectorModule"),ProductVariantSizeSelectorModule.\u0275fac=__name(function(t){return new(t||ProductVariantSizeSelectorModule)},"ProductVariantSizeSelectorModule_Factory"),ProductVariantSizeSelectorModule.\u0275mod=core.oAB({type:ProductVariantSizeSelectorModule}),ProductVariantSizeSelectorModule.\u0275inj=core.cJS({imports:[common.ez,router.Bz,spartacus_core.bhT,spartacus_core.LUR]});class ProductVariantStyleSelectorComponent{constructor(config,productService,routingService){this.config=config,this.productService=productService,this.routingService=routingService,this.variantQualifier=spartacus_core.zYO}getVariantOptionValue(qualifiers){const obj=qualifiers.find(q=>q.qualifier===spartacus_core.zYO.STYLE);return obj?obj.value:""}getVariantThumbnailUrl(variantOptionQualifiers){var _a,_b,_c,_d;const qualifier=variantOptionQualifiers.find(item=>item.image);return qualifier?`${null===(_c=null===(_b=null===(_a=this.config)||void 0===_a?void 0:_a.backend)||void 0===_b?void 0:_b.occ)||void 0===_c?void 0:_c.baseUrl}${null===(_d=qualifier.image)||void 0===_d?void 0:_d.url}`:""}changeStyle(code){return code&&this.productService.get(code,"list").pipe((0,filter.h)(spartacus_core.pTN),(0,take.q)(1)).subscribe(product=>{this.routingService.go({cxRoute:"product",params:product})}),null}}__name(ProductVariantStyleSelectorComponent,"ProductVariantStyleSelectorComponent"),ProductVariantStyleSelectorComponent.\u0275fac=__name(function(t){return new(t||ProductVariantStyleSelectorComponent)(core.Y36(spartacus_core.Vri),core.Y36(spartacus_core.M52),core.Y36(spartacus_core.Znh))},"ProductVariantStyleSelectorComponent_Factory"),ProductVariantStyleSelectorComponent.\u0275cmp=core.Xpm({type:ProductVariantStyleSelectorComponent,selectors:[["cx-product-variant-style-selector"]],inputs:{variants:"variants"},decls:5,vars:2,consts:[[1,"variant-selector"],["class","variant-name",4,"ngIf"],[1,"variant-list"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"variant-name"],[1,"style-name"],[3,"ngClass"],[1,"variant-button",3,"click"],[3,"src","title","alt"]],template:__name(function(rf,ctx){1&rf&&(core.ynx(0),core.TgZ(1,"div",0),core.YNc(2,ProductVariantStyleSelectorComponent_div_2_Template,5,4,"div",1),core.TgZ(3,"ul",2),core.YNc(4,ProductVariantStyleSelectorComponent_li_4_Template,3,6,"li",3),core.qZA()(),core.BQk()),2&rf&&(core.xp6(2),core.Q6J("ngIf",ctx.variants.selected),core.xp6(2),core.Q6J("ngForOf",null==ctx.variants?null:ctx.variants.options))},"ProductVariantStyleSelectorComponent_Template"),dependencies:[common.mk,common.sg,common.O5,spartacus_core.X$D],encapsulation:2,changeDetection:0});class ProductVariantStyleSelectorModule{}__name(ProductVariantStyleSelectorModule,"ProductVariantStyleSelectorModule"),ProductVariantStyleSelectorModule.\u0275fac=__name(function(t){return new(t||ProductVariantStyleSelectorModule)},"ProductVariantStyleSelectorModule_Factory"),ProductVariantStyleSelectorModule.\u0275mod=core.oAB({type:ProductVariantStyleSelectorModule}),ProductVariantStyleSelectorModule.\u0275inj=core.cJS({imports:[common.ez,router.Bz,spartacus_core.bhT,spartacus_core.LUR]});class ProductVariantsContainerComponent{constructor(currentProductService){this.currentProductService=currentProductService,this.variants={},this.variantType=spartacus_core.JyF}ngOnInit(){this.product$=this.currentProductService.getProduct().pipe((0,filter.h)(spartacus_core.jWE),(0,filter.h)(product=>!!product.baseOptions),(0,distinctUntilChanged.x)(),(0,tap.b)(product=>{product.baseOptions.forEach(option=>{null!=option&&option.variantType&&(this.variants[option.variantType]=option)})}))}}__name(ProductVariantsContainerComponent,"ProductVariantsContainerComponent"),ProductVariantsContainerComponent.\u0275fac=__name(function(t){return new(t||ProductVariantsContainerComponent)(core.Y36(spartacus_storefront.pHG))},"ProductVariantsContainerComponent_Factory"),ProductVariantsContainerComponent.\u0275cmp=core.Xpm({type:ProductVariantsContainerComponent,selectors:[["cx-product-variants-container"]],decls:2,vars:3,consts:[[4,"ngIf"],["class","variant-section",4,"ngIf"],[1,"variant-section"],[3,"variants",4,"ngIf"],[3,"product","variants",4,"ngIf"],[3,"variants"],[3,"product","variants"]],template:__name(function(rf,ctx){1&rf&&(core.YNc(0,ProductVariantsContainerComponent_ng_container_0_Template,2,1,"ng-container",0),core.ALo(1,"async")),2&rf&&core.Q6J("ngIf",core.lcZ(1,1,ctx.product$))},"ProductVariantsContainerComponent_Template"),dependencies:[common.O5,ProductVariantStyleSelectorComponent,ProductVariantSizeSelectorComponent,ProductVariantColorSelectorComponent,common.Ov],encapsulation:2,changeDetection:0});class ProductVariantsContainerModule{}__name(ProductVariantsContainerModule,"ProductVariantsContainerModule"),ProductVariantsContainerModule.\u0275fac=__name(function(t){return new(t||ProductVariantsContainerModule)},"ProductVariantsContainerModule_Factory"),ProductVariantsContainerModule.\u0275mod=core.oAB({type:ProductVariantsContainerModule}),ProductVariantsContainerModule.\u0275inj=core.cJS({imports:[common.ez,router.Bz,spartacus_core.bhT,spartacus_core.LUR,ProductVariantStyleSelectorModule,ProductVariantSizeSelectorModule,ProductVariantColorSelectorModule]});class ProductVariantsGuard{constructor(productService,semanticPathService,router2){this.productService=productService,this.semanticPathService=semanticPathService,this.router=router2}canActivate(activatedRoute){var _a;const productCode=null===(_a=activatedRoute.params)||void 0===_a?void 0:_a.productCode;return productCode?this.productService.get(productCode,"variants").pipe((0,filter.h)(spartacus_core.pTN),(0,switchMap.w)(product=>{if(!product.purchasable){const purchasableCode=this.findPurchasableProductCode(product);if(purchasableCode)return this.productService.get(purchasableCode,"list").pipe((0,filter.h)(spartacus_core.pTN),(0,take.q)(1),(0,map.U)(_product=>this.router.createUrlTree(this.semanticPathService.transform({cxRoute:"product",params:_product}))))}return(0,of.of)(!0)})):(0,of.of)(!0)}findPurchasableProductCode(product){var _a,_b,_c;if(null!==(_a=product.variantOptions)&&void 0!==_a&&_a.length){const results=product.variantOptions.filter(variant=>!(!variant.stock||!variant.stock.stockLevel)&&variant);return results&&results.length?null===(_b=results[0])||void 0===_b?void 0:_b.code:null===(_c=product.variantOptions[0])||void 0===_c?void 0:_c.code}}}__name(ProductVariantsGuard,"ProductVariantsGuard"),ProductVariantsGuard.\u0275fac=__name(function(t){return new(t||ProductVariantsGuard)(core.LFG(spartacus_core.M52),core.LFG(spartacus_core.hCH),core.LFG(router.F0))},"ProductVariantsGuard_Factory"),ProductVariantsGuard.\u0275prov=core.Yz7({token:ProductVariantsGuard,factory:ProductVariantsGuard.\u0275fac,providedIn:"root"});class ProductVariantsComponentsModule{}__name(ProductVariantsComponentsModule,"ProductVariantsComponentsModule"),ProductVariantsComponentsModule.\u0275fac=__name(function(t){return new(t||ProductVariantsComponentsModule)},"ProductVariantsComponentsModule_Factory"),ProductVariantsComponentsModule.\u0275mod=core.oAB({type:ProductVariantsComponentsModule}),ProductVariantsComponentsModule.\u0275inj=core.cJS({providers:[(0,spartacus_core.i51)({cmsComponents:{ProductVariantSelectorComponent:{component:ProductVariantsContainerComponent,guards:[ProductVariantsGuard]}}})],imports:[ProductVariantsContainerModule,ProductVariantColorSelectorModule,ProductVariantSizeSelectorModule,ProductVariantStyleSelectorModule]});class ProductVariantsModule{}__name(ProductVariantsModule,"ProductVariantsModule"),ProductVariantsModule.\u0275fac=__name(function(t){return new(t||ProductVariantsModule)},"ProductVariantsModule_Factory"),ProductVariantsModule.\u0275mod=core.oAB({type:ProductVariantsModule}),ProductVariantsModule.\u0275inj=core.cJS({imports:[ProductVariantsOccModule,ProductVariantsComponentsModule]})}};