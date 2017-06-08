import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(names: any, search: any): any {

    if( search === undefined)
    {
      return names;
      }
      else {
      return (names.filter(function(obj:any){
          return (obj.fname.toLowerCase().includes(search.toLowerCase()));
      }));
      }
    }
}
