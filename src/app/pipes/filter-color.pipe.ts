import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../modules/interface/car-detail';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: CarDetail[], filterColorText:string): CarDetail[] {
    filterColorText = filterColorText ? filterColorText.toLocaleLowerCase() : "";
    return filterColorText ? value.filter((cd:CarDetail) => cd.colorName.toLocaleLowerCase().indexOf(filterColorText) !== -1): value;
  }

}
