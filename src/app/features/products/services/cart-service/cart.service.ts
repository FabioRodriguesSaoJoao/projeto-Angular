import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Product> = []

  constructor() { }

  getAll(){
    return this.cart;
  }

  addToCart(cart:Product){
    this.cart.push(cart);
    console.log("Compra realizada com sucesso");
}

  carts(){
  sessionStorage.setItem("carrinho",this.cart.length.toString())
  return ;
};
}
