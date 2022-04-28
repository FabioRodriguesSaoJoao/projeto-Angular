import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './create-client-page.component.html',
  styleUrls: ['./create-client-page.component.scss']
})
export class CreateClientPageComponent implements OnInit {

  product: Product = this.productsService.getDefaultProduct()

  // client : Client = this.productsService.getDefaultClient()

  constructor(
    private productsService : ProductsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    console.log(this.product)
  }
  onSubmit(productForm: NgForm) {
    console.log(productForm.value);
    const formValue = productForm.value;
    this.product.name = formValue.name;
    this.product.email = formValue.email;
    this.product.password = formValue.password;
    this.product.quantity = formValue.quantity;
    this.productsService.createProduct(this.product);
    alert('Cliente adicionado com sucesso!');
    this.router.navigateByUrl('/products');
  }
}
