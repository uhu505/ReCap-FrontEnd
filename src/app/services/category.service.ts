import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../modules/interface/brand';
import { Color } from '../modules/interface/color';
import { ListResponseModel } from '../modules/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44327/api";
  constructor(private httpClient:HttpClient) { }

  getBrandCategories():Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + "/brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getColorCategories():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "/colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
