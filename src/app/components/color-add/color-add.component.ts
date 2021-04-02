import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm:FormGroup;

  constructor(
    private formBuildir:FormBuilder,
    private toastrService:ToastrService,
    private colorService:ColorService
  ) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuildir.group({
      colorName:["", Validators.required]
    });
  }

  add(){
    if(this.colorAddForm.valid){
      let productModel = Object.assign({}, this.colorAddForm.value);
      this.colorService.carAdd(productModel).subscribe(response => {
        this.toastrService.success("Renk Eklendi", "Form bilgilendirme");
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

