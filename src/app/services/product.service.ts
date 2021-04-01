import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../modules/interface/car-detail';
import { CarImage } from '../modules/interface/car-image';
import { ListResponseModel } from '../modules/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44327/api/";
  constructor(private htppClient:HttpClient) { }

  getAllProducts():Observable<ListResponseModel<CarDetail>>{ 
   let newPath = this.apiUrl + "cars/getcardetails";
   return this.htppClient.get<ListResponseModel<CarDetail>>(newPath);//<ProductResponseModel>Gelen api karşılığını map et.
  }
  
  getAllSelectedFilterItem(brandId:number, colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getallselectedfilteritem?brandId=" + brandId + "&colorId=" + colorId;
    return this.htppClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<CarDetail>>{
   let newPath = this.apiUrl + "cars/getcarbydetails?brandId=" + categoryId;
   return this.htppClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getProductsByColorCategory(categoryId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbydetails?colorId=" + categoryId;
    return this.htppClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getProductsByImage(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carImages/getimagesbycarid?carId=" + carId;
    return this.htppClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getProductsByIdCar(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbyiddetails?carId=" + carId;
    return this.htppClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
