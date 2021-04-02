import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/modules/interface/car-detail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product:CarDetail[];
  productUpdateForm:FormGroup;
  
  constructor(
    private formBuildir:FormBuilder,
    private productService:ProductService, 
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.createProductUpdateForm();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((response) => {
      this.product = response.data;
    })
  }

  createProductUpdateForm(){
    this.productUpdateForm = this.formBuildir.group({
      id:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    });
  }

  update(){
    if(this.productUpdateForm.valid){
    let productModel = Object.assign({}, this.productUpdateForm.value);
    productModel.id = Number(productModel.id);
    this.productService.carUpdate(productModel).subscribe(response => {
      this.toastrService.success("Araç Güncellendi", "Form bilgilendirme");
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
      this.toastrService.error("Araç güncellenemedi.", "Form Hatası")
    }
  }
}
