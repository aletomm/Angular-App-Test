import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst'
})
export class UcfirstPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ')
      .map((word: string) => {
        return ' '+ word.substring(0,1).toLocaleUpperCase() +word.substr(1);
       })
      .join('');
  }

}
