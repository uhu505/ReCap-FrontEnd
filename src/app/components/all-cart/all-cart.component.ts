import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CartItems } from 'src/app/modules/interface/cart-items';
import { Rental } from 'src/app/modules/interface/rental';
import { AllCartService } from 'src/app/services/all-cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-cart',
  templateUrl: './all-cart.component.html',
  styleUrls: ['./all-cart.component.css'],
})
export class AllCartComponent implements OnInit {

  cartItem: typeof CartItems = environment.cartItems;
  payment: number = 0;
  date = new FormControl();
  deliveryDate:Date;
  rental:Rental[];
  rentCheck:boolean = false;
  rentalAddForm:FormGroup;
  constructor(
    private formBuildir:FormBuilder,
    private allCartService:AllCartService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllRentalCars();
  }

  createRentalAddForm(){
    let rental = this.cartItem[0].product;
    this.rentalAddForm = this.formBuildir.group({
      carId:[rental.id],
      customerId:[1],
      rentDate:[new Date(Date.now()).toJSON()],
      returnDate:[this.deliveryDate.toJSON()]
    });
  }

  onSubmit():void{
   this.deliveryDate = new Date(this.date.value);
   this.totalAmount();
   this.rentACarCheck();
  }

  totalAmount(){
    this.payment = this.cartItem[0].product.dailyPrice * this.cartItem[0].quantity * this.timeDifference();
  }

  timeDifference():number{
    let newDate = new Date(Date.now());
    return this.deliveryDate.getDate() - newDate.getDate();
  }

  getAllRentalCars(){
    this.allCartService.getAllRentalCars().subscribe((response) => {
      this.rental = response.data;
    })
  }

  rentACarCheck(){
    for(let index = 0; index < this.rental.length; index++) {
      const element = this.rental[index];

      if(this.cartItem[0].product.id === element.id) {
        if(new Date(Date.now()) > new Date(element.returnDate)) {
          this.toastrService.success("Kiralanabilir")
          this.rentCheck = true;
        }
        else{
          this.rentCheck = false;
          this.toastrService.error("Araç zaten kiralı.", this.rentCheck.toString())
        }
        break;
      }
      else{
        this.rentCheck = true;
      }
    }
    if(this.rentCheck){
      this.toastrService.success("Kiralanabilir");
      this.createRentalAddForm();
    };
  }

  rentalAdd(){
    if (this.rentCheck) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value);
      this.allCartService.RentACar(rentalModel).subscribe((response) => {
        this.toastrService.success("Araç kiralandı.", "Bilgilendirme");
      }, (responseError) => {
        if(responseError.error.Errors.length > 0){
          for (let index = 0; index < responseError.error.Errors.length; index++) {
            const element = responseError.error.Errors[index];
            this.toastrService.error(element.ErrorMessage, "Doğrulama Hatası");
          }
        }
      });
    }
    else{
      this.toastrService.error("Bu araç belirtilen tarihte kiralanmış.", "Kiralama Hatası");
    }
  }
}
