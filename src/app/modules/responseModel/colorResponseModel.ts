import { Color } from "../interface/color";
import { ResponseModel } from "../responseModel/base/responseModel";

export interface ColorResponseModel extends ResponseModel{
    data:Color[];
}