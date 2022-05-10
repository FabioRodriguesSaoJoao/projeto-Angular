import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/product-services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  mensagemdeErro = false;

  datadehoje: Date = new Date();

  product : Array<Product> = this.productService.getProducts();

  filterProducts: Array<Product> = this.product;

  @Input()
  products: Array<Product> = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }
}