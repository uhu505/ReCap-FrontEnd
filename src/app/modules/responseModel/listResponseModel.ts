import { ResponseModel } from "./base/responseModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}