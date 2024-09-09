import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AccountAddresses } from 'src/app/models/accounts-addresses.model';
import { TokensModel } from 'src/app/models/auth-models';
import { CartItem, OrderSammary } from 'src/app/models/cart.model';
import { AppType } from 'src/app/models/type.model';
import { WishList } from 'src/app/models/wishlist.model';
import { AddressesAction } from 'src/app/store/accounts/addresses/addresses-action';
import { StoreTokenActions } from 'src/app/store/auth/auth-action';
import { StoreCartItemsAction } from 'src/app/store/cart/cart.actions';
import { SetOrderSummaryAction } from 'src/app/store/cart/order-summaryaction';
import { StoreTypeActions } from 'src/app/store/types/type-action ';
import { GetWishlistAction } from 'src/app/store/wishlist/wishlist-action';
import { CartService } from '../../cart.service';
import { HttpService, imgUrl } from '../../http/http.service';
declare let UIkit: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mainLang!: string;
  langs!: string;
  types: any;
  cartItems: number = 0;
  cartSub!: Subscription;
  numberSub!: Subscription;
  cartContent!: CartItem[];
  imgUrl = imgUrl;
  totalPrice!: number;
  userName: any;
  cartItemsSub!: Subscription;
  OrderSummarySub!: Subscription;
  AddedToCartLocalSub!: Subscription;
  isLogin: boolean = false;
  isInHome: boolean = false;
  isCollaspse: boolean = false;
  isScroll!: boolean;

  constructor(
    private CoService: CookieService,
    private ts: TranslateService,
    public http: HttpService,
    private store: Store<{
      types: AppType;
      cart: CartItem[];
      orderSummay: OrderSammary;
      tokens: TokensModel;
      wishlist: WishList;
      accountAddresses: AccountAddresses[];
    }>,
    private router: Router,
    private cartService: CartService,
    private cs: CookieService
  ) {
    this.checkRouterUrl();
  }

  ngOnInit(): void {
    this.http.logoutSubj.subscribe(() => this.logout());
    // set lang
    this.setLang();
    // change web Direction
    this.webDirection();
    this.ts.use(this.langs);
    // get products Types
    this.getTypes();
    //  check if this user or not
    this.checkIsUser();
    // cart number
    this.cartLength();
    this.cartService.generalsObject.subscribe((res) => {
      if (!res.pointValue) {
        this.cartService.isLoading.next(true);
        this.cartService.general().subscribe(
          () => {
            this.cartService.isLoading.next(false);
          },
          (error) => {
            this.cartService.isLoading.next(false);
          }
        );
      } else this.cartService.isLoading.next(false);
    });
    if (this.CoService.get('token')) {
      if (this.AddedToCartLocalSub) this.AddedToCartLocalSub.unsubscribe();
      this.cartItemsSub = this.store.select('cart').subscribe((res: any) => {
        this.cartContent = res;
      });
      this.OrderSummarySub = this.store
        .select('orderSummay')
        .subscribe((res: any) => {
          if (res) {
            this.totalPrice = res.total_price;
          }
        });
    } else {
      if (this.cartItemsSub) this.cartItemsSub.unsubscribe();
      if (this.OrderSummarySub) this.OrderSummarySub.unsubscribe();
      this.GetLocalCart();
      this.AddedToCartLocalSub = this.cartService.AddedToCartLocal.subscribe(
        (val) => {
          this.GetLocalCart();
        }
      );
    }
    this.store.select('tokens').subscribe((res) => {
      if (this.cs.get('token')) {
        this.isLogin = true;
        if (this.numberSub) this.numberSub.unsubscribe();
        if (this.AddedToCartLocalSub) this.AddedToCartLocalSub.unsubscribe();
        this.cartSub = this.store.select('cart').subscribe((res: any[]) => {
          try {
            this.cartItems = res.length;
            this.cartItems = res.reduce(
              (prev, curr) => prev + curr.quantity,
              0
            );
            this.cartContent = res;
          } catch (error) {
            this.cartItems = 0;
          }
        });
        this.OrderSummarySub = this.store
          .select('orderSummay')
          .subscribe((res: any) => {
            if (res) {
              this.totalPrice = res.total_price;
            }
          });
      } else {
        this.isLogin = false;
        if (this.cartSub) this.cartSub.unsubscribe();
        if (this.cartItemsSub) this.cartItemsSub.unsubscribe();
        if (this.OrderSummarySub) this.OrderSummarySub.unsubscribe();
        // this.numberSub = this.cartService.itemsNumber.subscribe((res) => {
        //   console.log(res);

        //   this.cartItems = res;
        // });
        this.cartItems = this.cartService
          .getOrCreateCart()
          .reduce(
            (prev: number, curr: { quantity: number }) => prev + curr.quantity,
            0
          );

        this.GetLocalCart();

        this.AddedToCartLocalSub = this.cartService.AddedToCartLocal.subscribe(
          (val) => {
            this.GetLocalCart();
          }
        );
      }
    });
    this.http.userName.subscribe((res) => {
      this.userName = res ? res : localStorage.getItem('userName');
    });
  }

  checkRouterUrl() {
    console.log(this.router.url);
    this.router.events.subscribe((val: any) => {
      if (val instanceof NavigationEnd) {
        if (val.url != '/') {
          this.isInHome = false;
          console.log('is in other [page ');
        } else {
          this.isInHome = true;
          this.onWindowScroll();
          console.log('is in home ');
        }
      }
    });
  }
  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (window.pageYOffset > 0) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }

  setLang() {
    this.langs = this.CoService.get('language') || 'en';
    if (this.langs === 'en') {
      this.mainLang = 'ar';
    } else {
      this.mainLang = 'en';
    }
  }
  webDirection() {
    if (this.mainLang === 'en') {
      document.querySelector('html')?.classList.add('rtl');
    }
  }

  changeLanguage() {
    this.CoService.set('language', this.mainLang);
    window.location.reload();
  }
  getTypes() {
    this.store.select('types').subscribe((types) => {
      this.types = types;
      if (!types) {
        this.http.getReq('api/product/types').subscribe((res) => {
          this.store.dispatch(new StoreTypeActions(res));
        });
      }
    });
  }

  checkIsUser() {
    if (this.CoService.get('token')) {
      this.http.isAuthenticated = true;
    } else {
      this.http.isAuthenticated = false;
    }
  }

  logout() {
    let lang = this.CoService.get('language');
    this.CoService.deleteAll();
    this.CoService.delete('token', '/');
    if (lang) this.CoService.set('language', lang);
    this.http.isAuthenticated = false;
    this.router.navigate(['']);
    this.store.dispatch(new StoreTokenActions(undefined));
    this.store.dispatch(new StoreCartItemsAction([]));
    this.store.dispatch(new SetOrderSummaryAction(undefined));
    this.store.dispatch(new GetWishlistAction(undefined));
    this.store.dispatch(new AddressesAction([]));
    this.cartItems = 0;
    if (this.cartItemsSub) this.cartItemsSub.unsubscribe();
    if (this.OrderSummarySub) this.OrderSummarySub.unsubscribe();
    this.GetLocalCart();
    this.AddedToCartLocalSub = this.cartService.AddedToCartLocal.subscribe(
      (val) => {
        this.GetLocalCart();
      }
    );
  }
  closeOffCanvasMobile() {
    UIkit.offcanvas('#offcanvas-slide').hide();
  }
  // openSearch() {
  //   this.isCollaspse = !this.isCollaspse;
  // }
  cartLength() {
    if (this.http.isAuthenticated) {
      this.store.select('cart').subscribe((res: any) => {
        try {
          this.cartItems = res.length;
        } catch (error) {
          this.cartItems = 0;
        }
      });
    } else {
      this.cartService.itemsNumber.subscribe((res: any) => {
        this.cartItems = res;
      });
    }
  }
  GetLocalCart() {
    this.cartContent = this.cartService.getOrCreateCart().map((data: any) => {
      data['product'] = {
        main_image: data.main_image,
        title: data.title,
        price: data.price,
        sale_price: data.sale_price,
      };
      return data;
    });
    this.totalPrice = this.cartService.calculateSummary().total_price;
  }

  deleteFromCart(id: any) {
    if (this.CoService.get('token')) {
      this.cartService.deleteRemoteItem(id).subscribe(
        (res) => {},
        (error) => {}
      );
    } else {
      this.cartService.deleteCartItem(id);
      this.cartContent = this.cartContent.filter((item: any) => item.id != id);
      this.GetLocalCart();
    }
  }
  // searchAction(searchedText: string) {
  //   this.router.navigate(['search/', searchedText]);
  // }
  openSearch(): void {
    this.isCollaspse = !this.isCollaspse;
  }

  searchAction(searchedText: string): void {
    if (searchedText.trim()) {
      this.router.navigate(['search', searchedText]);
    } else {
      // Clear search results or perform any necessary actions
    }
  }
}
