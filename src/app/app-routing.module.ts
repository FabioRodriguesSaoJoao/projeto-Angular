import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagComponent } from './features/login/login-pag/login-pag.component';
import { CartPageComponent } from './features/products/pages/cart-page/cart-page.component';
import { ProductDetailsPageComponent } from './features/products/pages/product-details-page/product-details-page.component';
import { ProdutsPageComponent } from './features/products/pages/produts-page/produts-page.component';
import { GuardGuard } from './shared/guards/guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'products', component: ProdutsPageComponent, canActivate: [GuardGuard] },
  { path: 'products-details/:id', component: ProductDetailsPageComponent, canActivate: [GuardGuard] },
  { path: 'cart', component: CartPageComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginPagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
