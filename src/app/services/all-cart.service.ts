import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../modules/interface/rental';
import { ResponseModel } from '../modules/responseModel/base/responseModel';
import { ListResponseModel } from '../modules/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AllCartService {

  apiUrl = "https://localhost:44327/api";

  constructor(private httpClient:HttpClient) { }

  getAllRentalCars():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "/rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  RentACar(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/rentals/add", rental);
  }
}
