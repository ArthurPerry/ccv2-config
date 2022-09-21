import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product, ProductService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


class Product1 {
  id: string = "";
}

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  @Input() atype: string = "";
  title: string = "";
  prod: Product;
  items$: Observable<Observable<Product>[]>;
  productItems: any = [];
  selectedProduct: Product1;
  temp: Product1[];
  buiprod: Product;
  uid: string;
  carouselType = '';
  recommendationServiceUrl = 'https://localhost:1234/';

  constructor(
    private userService: UserAccountFacade,
    private productService: ProductService,
    private http: HttpClient,
    protected currentPageService: CurrentProductService,
    private ref: ChangeDetectorRef
  ) {
    if (environment.recommendationServiceUrl) {
      this.recommendationServiceUrl = environment.recommendationServiceUrl;
    }
  }

  ngOnInit() {
    this.title = 'Customers who ' + this.atype + ' this item also ' + this.atype;

    this.items$ = <Observable<Observable<Product>[]>>this.userService.get().pipe(
      mergeMap(data => {
        if(data){
          this.uid = data.uid?? "";
        }
        return of(data);
      }),
      filter(data => data !== undefined),
      mergeMap(data => this.currentPageService.getProduct()),
      mergeMap(v => {
        if(v){
          this.buiprod = v;
        }
        return of(v);
      }),
      filter(v => v !== undefined),
      mergeMap(() => {
        let u = '';
        if (this.atype == 'bought') {
          if (this.uid) {
            u = '/' + this.uid;
          } else {
            u = '/0';
          }
        }
        return this.http.get<any>(this.recommendationServiceUrl + this.atype + '/' + this.buiprod.code + u);
      }),
      mergeMap(res => {
        console.log('res = ' + JSON.stringify(res));
        let resultArray: any[] = [];
        if (res) {
          if (res.recommendationType == 'alsoBoughtProducts') {
            console.log('Bought products');
            this.temp = res.products;
            this.temp.forEach(p => {
              let prod = this.productService.get(p.id);
              if (prod !== undefined) {
                resultArray.push(prod);
              }
            });
            this.carouselType = 'bought-products';
          } else if (res.recommendationType == 'alsoViewedProducts') {
            console.log('Viewed products');
            this.temp = res.products;
            this.temp.forEach(p => {
              let prod = this.productService.get(p.id);
              if (prod !== undefined) {
                resultArray.push(prod);
              }
            });
            this.carouselType = 'viewed-products';
          }
        } else {
          console.log('No recos');
        }
        return combineLatest(resultArray);
      }),
      map(array => {
        let resultArray: ({} | null)[] = [];
        array.forEach(elem => {
          if (elem !== undefined) resultArray.push(elem);
        });
        return resultArray.map(element => of(element));
      })
    );
  }
}
