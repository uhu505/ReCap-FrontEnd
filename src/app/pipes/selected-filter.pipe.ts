import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectedFilter'
})
export class SelectedFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
