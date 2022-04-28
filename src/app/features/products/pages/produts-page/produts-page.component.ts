import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  templateUrl: './produts-page.component.html',
  styleUrls: ['./produts-page.component.scss']
})
export class ProdutsPageComponent implements OnInit {
  
  products: Array<Product> = [];

  filteredProducts: Array<Product> = [];

  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
  findProductsByFilter(event: any, type: 'Name' | 'Id') {
    const value = event.target.value;
    const students = type === 'Id' ? this.productService.getProductsByFilterId(value) : this.productService.getProductsByFilterName(value);
    if(value.length === 0) {
      return this.filteredProducts = this.products;
    }
    return this.filteredProducts = students;
  }
}
