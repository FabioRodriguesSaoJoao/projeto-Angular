import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

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

  constructor(private productService: ProductsService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  updatecompleto(){
    if (this.product) {
      this.product.completed = !this.product?.completed;
    }
  }
  removeProduct(){
   if (this.product) this.productService.removeByID(this.product.id);
  }

  productsDetails() {
    this.router.navigateByUrl(`/products-details/${this.product?.id}`);
  }
}

