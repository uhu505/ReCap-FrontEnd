import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/modules/interface/car-detail';
import { CartItem } from 'src/app/modules/interface/cart-item';
import { CartItems } from 'src/app/modules/interface/cart-items';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  carItems:CartItem[] = [];

  constructor(
    private cartService:CartService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.carItems = this.cartService.list();
    environment.cartItems = this.cartService.list();
  }

  
  removeFromCart(product:CarDetail){
    let item:CartItem = CartItems.find(c => c.product.id == product.id);
    CartItems.splice(CartItems.indexOf(item),1);
    this.toastrService.error("Ürün Silindi.", product.brandName);
  }
}
