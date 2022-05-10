import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart-service/cart.service';




@Component({
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  @Input()
  product?:Product;

  @Input()
  card?:boolean = true;

  constructor(
    private cartService: CartService,
    ) { }

  cart:Array<Product> = this.cartService.getAll()

  ngOnInit(): void { }

    
}
