import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavbarComponent} from "./components/navbar/navbar.component";
import {UserDropDownComponent} from "./components/user-drop-down/user-drop-down.component";
import { ProductsMainComponent } from './components/products-main/products-main.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { TrustComponent } from './components/trust/trust.component';
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule} from "@angular/router";
import {ProductsRouterModule} from "./products-router.module";

@NgModule({
  declarations: [
      NavbarComponent,
      UserDropDownComponent,
      ProductsMainComponent,
      FiltersComponent,
      ProductListComponent,
      ProductItemComponent,
      TrustComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRouterModule
  ]
})
export class ProductsModule { }
