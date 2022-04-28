import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

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
  seachProduct(event:any){
    const value = event.target.value;

    this.filterProducts = this.productService.getProductsByFilterName(value);
    {if (this.filterProducts.length === 0) this.mensagemdeErro = true;
      else this.mensagemdeErro = false;
      return this.filterProducts;
      }
}
findById(event:any){
  const  value = event.target.value;
  if(!value) return this.filterProducts = this.product;
  const product = this.productService.getProductById(parseInt(value));
  if(!product) return this.filterProducts = this.product;
  return this.filterProducts = [product];
}
}
