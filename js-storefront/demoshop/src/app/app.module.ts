import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import {ConfigModule} from "@spartacus/core";
import { LayoutConfig } from '@spartacus/storefront';
import { ProductRecommendationsModule } from './cms-components/product-recommendations/product-recommendations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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

    ProductRecommendationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
