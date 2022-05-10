import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart-service/cart.service';
import { ProductsService } from '../../services/product-services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input()
  product?:Product;
  @Input()
  card?: boolean = true;

  constructor(
    private productService: ProductsService, 
    private router: Router,
    private cartService :CartService) { }

  ngOnInit(): void {
  }
  updatecompleto(){
    if (this.product) {
      this.product.completed = !this.product?.completed;
    }
  }
  
  productsDetails() {
    this.router.navigateByUrl(`/products-details/${this.product?.id}`);
  }
  addToCart(){
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Produto adicionado ao carrinho!')
    };
  }
}

