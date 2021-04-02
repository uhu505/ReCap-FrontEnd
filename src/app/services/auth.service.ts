import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { LoginModel } from '../modules/interface/loginModel';
import { SingleResponseModel } from '../modules/interface/singleResponseModel';
import { TokenModel } from '../modules/interface/tokenModel';
import { ResponseModel } from '../modules/responseModel/base/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44327/api/auth";

  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "/login", loginModel);
  }

  isAuthenticated(){
    if (localStorage.getItem("token")){
      return true;
    } else {
      return false;
    }
  }
}
