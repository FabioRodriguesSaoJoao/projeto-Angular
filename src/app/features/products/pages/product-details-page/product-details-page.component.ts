import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/product-services/products.service';

@Component({
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {
  @Input()
  product?:Product;

  @Input()
  card?: boolean = true;

  constructor(
    private productService: ProductsService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.product = this.productService.getProductById(parseInt(params['id']))
    });
  }
  updatecompleto(){
    if (this.product) {
      this.product.completed = !this.product?.completed;
    }
  }
}
