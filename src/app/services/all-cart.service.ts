import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../modules/interface/rental';
import { ListResponseModel } from '../modules/responseModel/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AllCartService {

  getHeaders(){
    return new HttpHeaders({
      
    });
  }

  apiUrl = "https://localhost:44327/api";

  constructor(private httpClient:HttpClient) { }

  rentACar(rental:Rental):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "/rentals/add";
    return this.httpClient.post<ListResponseModel<Rental>>(newPath, rental);
  }
}
