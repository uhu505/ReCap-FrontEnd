import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/modules/interface/brand';
import { CarDetail } from 'src/app/modules/interface/car-detail';
import { Color } from 'src/app/modules/interface/color';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  carDetail:CarDetail[];
  allColor:Color[];
  allBrand:Brand[];
  selectedColor:string;
  selectedBrand:string;
  dataLoaded:boolean = false;
  number:number = 18;
  filterText:string = "";
  filterColorText:string = "";
  
  constructor(
    private productService:ProductService, 
    private activatedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService:CartService,
    private categoryService:CategoryService
    ) { }

  ngOnInit(): void {
    this.checkActivatedRoute();
    this.getAllFilterItem();
  }

  checkActivatedRoute():void{
    this.activatedRoute.params.subscribe((params) => {
      if(params["brandId"]){
        this.getProductsByCategory(params["brandId"]);
      } 
      else if(params["colorId"]){
        this.getProductsByColorCategory(params["colorId"]);
      }
      else if(params["selectedBrand"] && params["selectedColor"]){
        this.getAllSelectedFilterItem(params["selectedBrand"], params["selectedColor"]);
      } 
      else{
        this.getAllProduct();
      }
    });
  }

  getAllProduct():void{
    this.productService.getAllProducts().subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId:number):void{
    this.productService.getProductsByCategory(categoryId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByColorCategory(categoryId:number):void{
    this.productService.getProductsByColorCategory(categoryId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getAllSelectedFilterItem(brandId:number, colorId:number):void{
    this.productService.getAllSelectedFilterItem(brandId, colorId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;  
    });
  }

  getAllFilterItem():void{
    this.getAllColor();
    this.getAllBrand();
  }

  getAllColor():void{
    this.categoryService.getColorCategories().subscribe((response) => {
      this.allColor = response.data;
    });
  }

  getAllBrand():void{
    this.categoryService.getBrandCategories().subscribe((response) => {
      this.allBrand = response.data;
    });
  }

  addToCart(car:CarDetail):void{
    this.toastrService.success("Sepete Eklendi", car.brandName);
    this.cartService.addToCart(car);
  }

  filterSearch(colorId:string, brandId:string):void{
    if(colorId === "Renk Seç" || brandId === "Marka Seç") {
      this.toastrService.error("Filtre değerleri boş geçilemez.");
    } 
    else{
      this.selectedBrand = brandId;
      this.selectedColor = colorId;
    }
  }

 
}
