import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'silder'
})
export class SilderPipe implements PipeTransform {

  transform(value: Array<any>, ...args: Array<any>): unknown {
    console.log('SilderPipe' , value , args) ;
    return value ? value.filter( (obj) => obj.volume <= args[0]   ) : [];
  }

}
