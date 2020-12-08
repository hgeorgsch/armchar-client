import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class NumberPipe implements PipeTransform {

  transform(value: any): any {
    return ( typeof(value) === "object" ) ? value["@value"] : value ;
  }

}
