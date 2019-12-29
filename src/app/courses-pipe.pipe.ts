import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursesPipe'
})
export class CoursesPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
