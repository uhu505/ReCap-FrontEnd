import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Color } from '../modules/interface/color';
import { ResponseModel } from '../modules/responseModel/base/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44327/api";

  constructor(
    private httpClient:HttpClient
  ) { }

  carAdd(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/colors/add", color);
  }
}
