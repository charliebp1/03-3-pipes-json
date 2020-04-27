import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private DomSanitizer: DomSanitizer ) {

  }

  transform(value: string, ...args: any[]): SafeResourceUrl {
    return this.DomSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
