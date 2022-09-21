import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { PageViewedService } from './page-viewed.service';

@Component({
  selector: 'app-page-viewed',
  templateUrl: './page-viewed.component.html',
  styleUrls: ['./page-viewed.component.scss'],
})
export class PageViewedComponent implements OnInit {
  product$: Observable<Product|null> = this.currentPageService.getProduct().pipe(filter<Product|null>(Boolean));

  uid: string = "";
  //assignedUser: string;
  cartId: string = "";

  res$: Observable<any> = this.product$.pipe(
    filter(Boolean),
    switchMap(
      product =>
        this.uid
          ? this.pageViewedService.postView(this.uid, eval('product.code'), true)
          : this.pageViewedService.postView('cart' + this.cartId, eval('product.code'), false)
      // : new Observable()
    )
  );

  constructor(
    private http: HttpClient,
    protected currentPageService: CurrentProductService,
    private userService: UserAccountFacade, // UserService,
    private pageViewedService: PageViewedService
  ) {}

  ngOnInit() {
    this.res$.subscribe();
    this.getUser();
    console.log('uid: ' + this.getUser());
  }

  getUser(): void {
      this.userService.get().subscribe(data => {
        if(data){
          this.uid = data.uid ?? "";
        }
    });

  }
}
