import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-login-pag',
  templateUrl: './login-pag.component.html',
  styleUrls: ['./login-pag.component.scss']
})
export class LoginPagComponent implements OnInit {

  error: boolean = false;

  email?: string;
  password?: string;
  
  constructor(
    private productService : ProductsService,
    private router :Router) { }

  ngOnInit(): void {
  }
  authenticate() {
    const product = this.productService.getproductByEmailAndPassword(this.email, this.password);
    if (!product) {
      this.error = true;
    } else{
      delete product.password;

      sessionStorage.setItem('product', JSON.stringify(product));

      this.router.navigateByUrl('products');
    }
  }
}
