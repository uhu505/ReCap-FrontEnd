import { CarDetail } from "../interface/car-detail";
import { ResponseModel } from "./base/responseModel";

export interface ProductResponseModel extends ResponseModel{
    data:CarDetail[];
}