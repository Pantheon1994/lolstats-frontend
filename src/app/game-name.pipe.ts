import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameNamePipe',
  standalone: true
})
export class GameNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\s/g,'');
  }

}
