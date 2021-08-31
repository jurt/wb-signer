import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fill'
})
export class FillPipe implements PipeTransform {

  transform(value: string, replacement: string): string {
    const placeholder = '%предмету%';
    return value.replace(placeholder, replacement);
  }

}
