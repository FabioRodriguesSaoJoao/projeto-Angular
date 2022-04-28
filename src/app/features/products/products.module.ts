import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { RouterModule } from '@angular/router';
import { CreateClientPageComponent } from './pages/create-client-page/create-client-page.component';
import { FormsModule } from '@angular/forms';
import { ProdutsPageComponent } from './pages/produts-page/produts-page.component';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductsComponent,
    ProductDetailsPageComponent,
    CreateClientPageComponent,
    ProdutsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class ProductsModule { }
