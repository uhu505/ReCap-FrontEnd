import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm:FormGroup;

  constructor(
    private formBuildir:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuildir.group({
      brandId:["", Validators.required],
      colorId:["", Validators.required],
      modelYear:["", Validators.required],
      dailyPrice:["", Validators.required],
      description:["", Validators.required]
    });
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.carAdd(productModel).subscribe(response => {
        this.toastrService.success(response.message, "Form bilgilendirme");
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let index = 0; index < responseError.error.Errors.length; index++) {
            const element = responseError.error.Errors[index];
            this.toastrService.error(element.ErrorMessage, "Doğrulama Hatası");
          }
        }
      });
    }
    else{
      this.toastrService.error("Yeni araç eklenemedi.", "Form Hatası")
    }
  }
}
