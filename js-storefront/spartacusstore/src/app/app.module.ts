import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';

import { environment } from '../environments/environment';
import {ConfigModule} from "@spartacus/core";
import { LayoutConfig } from '@spartacus/storefront';
import { ProductRecommendationsModule } from './cms-components/product-recommendations/product-recommendations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    ConfigModule.withConfig(<LayoutConfig>{
      layoutSlots: {
        ProductDetailsPageTemplate: {
          slots: [
            'PlaceholderContentSlot',
            'Summary',
            'SpaProductRecommendationsPosition',
            'UpSelling',
            'CrossSelling',
            'Tabs',
          ],
        },
      },
    }),
    ProductRecommendationsModule,
    BrowserTransferStateModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
