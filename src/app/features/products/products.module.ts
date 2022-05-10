import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { RouterModule } from '@angular/router';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import { ProdutsPageComponent } from './pages/produts-page/produts-page.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductsComponent,
    ProductDetailsPageComponent,
    CartPageComponent,
    ProdutsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    MatIconModule
  ]
})
export class ProductsModule { }
