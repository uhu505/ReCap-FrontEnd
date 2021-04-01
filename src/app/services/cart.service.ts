import { Injectable } from '@angular/core';
import { CarDetail } from '../modules/interface/car-detail';
import { CartItems } from '../modules/interface/cart-items';
import { CartItem } from '../modules/interface/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:CarDetail){
    let item = CartItems.find(c => c.product.id == product.id);
    if(item){
      item.quantity += 1;
    } 
    else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  list():CartItem[]{
    return CartItems;
  }
}
