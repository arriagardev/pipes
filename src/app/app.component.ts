import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre =  'Capitán América';
  nombre2 =  'hUmBErtO ArRIagA';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: 1000
    }
  };

  valorPromesa = new Promise<string>(resolve => {

    setTimeout(() => {
      resolve('Llegó el dato');
    }, 4500);

  });

  fecha = new Date();

  idioma = 'es';

  videoUrl = 'https://www.youtube.com/embed/RSl9wYWQIcs';

  activar = true;

}
