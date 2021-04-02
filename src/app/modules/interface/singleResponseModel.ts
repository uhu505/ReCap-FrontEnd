import { ResponseModel } from "../responseModel/base/responseModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}