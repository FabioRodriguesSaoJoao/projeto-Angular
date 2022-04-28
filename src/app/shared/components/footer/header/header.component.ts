import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/features/products/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private router : Router) { }

  product?:Product

  ngOnInit(): void {
    const productsStorage = sessionStorage.getItem('product');
    if (productsStorage) {
      this.product = JSON.parse(productsStorage); 
    }
  }
  navegateByUrl(ulr: string){
    this.router.navigateByUrl(ulr);
  }
  sair(){
    sessionStorage.clear();
    this.navegateByUrl('login');
  }
}
