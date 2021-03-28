import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/modules/interface/car-detail';
import { CarImage } from 'src/app/modules/interface/car-image';
import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  carImage:CarImage[];
  carDetail:CarDetail;
  dataLoaded = false;
  basePath = environment.basePath;
  constructor(private httpClient:HttpClient, private productService:ProductService, private activatedRoute:ActivatedRoute, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.checkActivatedRoute();
  }

  checkActivatedRoute(){
   this.activatedRoute.params.subscribe((params) => {
      if(params["carId"]){
        this.getProductsByImage(params["carId"]);
        this.getProductsByIdCar(params["carId"]);
      } 
   });
  }

  getProductsByImage(carId:number){
      this.productService.getProductsByImage(carId).subscribe((response) => {
      this.carImage = response.data;
      console.log(response.message);
    });
  }

  getProductsByIdCar(carId:number){
      this.productService.getProductsByIdCar(carId).subscribe((response) => {
      this.carDetail = response.data[0];
      this.dataLoaded = true;
    });
  }
  
 
}
