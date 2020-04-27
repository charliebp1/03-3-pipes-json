import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre  : string = 'Capitan América';
  nombre2 : string = 'caRloS BrItOs pErEIra';
  fecha  : Date = new Date();
  activar : boolean = true;
  
  idioma : string = 'en';
  videoUrl: string = 'https://www.youtube.com/embed/-CBKW-90VxQ';

  valorPromesa = new Promise<string>((resolve) => {

    setTimeout(() => {
        resolve('Llegaron los datos');
    }, 4500);
  });
  
  cambiarIdioma (languaje: string ) {
    this.idioma = languaje;
  }

  setPassword() {
    
    if(this.activar){
      this.activar = false;
    } else {
      this.activar = true;
    }

    // console.log(this.activar);
    return this.activar;
    
  }

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  
}
