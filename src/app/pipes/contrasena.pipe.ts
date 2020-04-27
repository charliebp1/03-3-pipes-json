import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, contrasena: boolean = true, ...args: any[]): any {
    
    
    const stream = value;
    const input = value;
    const output = '*';
    //value = value.toLocaleLowerCase();

    let nombres = value.split(' ');
    var contra = '';

    if ( contrasena ) {
      for (var x = 0; x <= value.length; x++){
        contra+=output;
      }
      return stream.replace(input, contra)
    } else {
      return nombres.join(' ');
    }
  }
}


