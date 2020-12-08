import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any): any {
    return ( typeof(value) === "object" ) ? value["@value"] : value ;
  }

}
