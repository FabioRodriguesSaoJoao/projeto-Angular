import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../products/services/client-service/client-service.service';
import { Client } from '../../products/models/product.model';
import { ProductsService } from '../../products/services/product-services/products.service';

@Component({
  selector: 'app-login-pag',
  templateUrl: './login-pag.component.html',
  styleUrls: ['./login-pag.component.scss']
})
export class LoginPagComponent implements OnInit {

  client : Client = this.clientService.getDefaultClient()

  error: boolean = false;

  email?: string;
  password?: string;
  
  constructor(
    private productService : ProductsService,
    private router :Router,
    private clientService: ClientServiceService,) { }

  ngOnInit(): void {
    console.log(this.client)
  }
 
  authenticate() {
    const client = this.clientService.getclientByEmailAndPassword(this.email, this.password);
    if (!client) {
      this.error = true;
    } else{
      delete client.password;

      sessionStorage.setItem('product', JSON.stringify(client));

      this.router.navigateByUrl('products');
    }
  }

  onSubmit(clintForm: NgForm) {
    console.log(clintForm.value);
    const formValue = clintForm.value;
    this.client.name = formValue.name;
    this.client.email = formValue.email;
    this.client.password = formValue.password;
    this.client.address = formValue.address;
    this.client.formOfPayment = formValue.formOfPayment;
    this.client.inclusionDate = formValue.inclusionDate;
    this.clientService.createClient(this.client);
    alert('Adicionado com sucesso!');
    this.router.navigateByUrl('/products');
  }

}
