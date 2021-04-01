import { Component, OnInit } from '@angular/core';
import { CartItems } from 'src/app/modules/interface/cart-items';
import { Rental } from 'src/app/modules/interface/rental';
import { AllCartService } from 'src/app/services/all-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-cart',
  templateUrl: './all-cart.component.html',
  styleUrls: ['./all-cart.component.css']
})
export class AllCartComponent implements OnInit {

  cartItem:typeof CartItems = environment.cartItems;
  constructor(private allCartService:AllCartService) { }
  ngOnInit(): void {
    this.rentACar();
  }

  rentACar(){
    let myRental:Rental={
      carId:1,
      customerId:1,
      id:1,
      rentDate: Date.now.toString(),
      returnDate:"19.02.2021"
    };
    this.allCartService.rentACar(myRental).subscribe((response) => {
      console.log(response.message + " - " + response.success);
    });
  }

}
