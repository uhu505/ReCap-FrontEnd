import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/modules/interface/car-detail';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  carDetail:CarDetail[];
  dataLoaded = false;
  number:number = 18;
  filterText:string = "";
  filterColorText:string = "";
  
  constructor(
    private productService:ProductService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService:CartService
    ) { }

  ngOnInit(): void {
    this.checkActivatedRoute();
  }

  checkActivatedRoute(){
    this.activatedRoute.params.subscribe((params) => {
       if(params["brandId"]){
         this.getProductsByCategory(params["brandId"]);
       } 
       else if(params["colorId"]){
         this.getProductsByColorCategory(params["colorId"]);
       }
       else{
         this.getAllProduct();
       }
    });
  }

  getAllProduct(){
    this.productService.getAllProducts().subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByColorCategory(categoryId:number){
    this.productService.getProductsByColorCategory(categoryId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(car:CarDetail){
    this.toastrService.success("Sepete Eklendi", car.brandName);
    this.cartService.addToCart(car);
  }

}
