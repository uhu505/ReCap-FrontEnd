import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/modules/interface/car-detail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  carDetail:CarDetail[] = [];
  dataLoaded = false;
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProducts().subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }
}
