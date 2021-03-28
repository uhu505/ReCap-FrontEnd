import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../modules/interface/car-detail';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string): CarDetail[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((cd:CarDetail) => cd.brandName.toLocaleLowerCase().indexOf(filterText) !== -1): value;
  }

}
