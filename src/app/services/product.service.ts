import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../modules/responseModel/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44327/api/cars/getcardetails";
  constructor(private htppClient:HttpClient) { }

  getAllProducts():Observable<ProductResponseModel>{ 
   return this.htppClient.get<ProductResponseModel>(this.apiUrl);//<ProductResponseModel>Gelen api karşılığını map et.
 }
}
