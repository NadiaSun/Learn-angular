import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

  transform<T extends string>(arr: T[], value: string): T[] {
    return arr.filter(info => info.toLowerCase().includes(value.toLowerCase()));
  }
}
