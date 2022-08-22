import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PIPES';

  nombre:string="Jorge";
  nombreCompleto:string='jorge rivera';
  arreglo=[1,2,3,4,5,6,7,8,9];
  pi=Math.PI;
  a=0.234;
  salario=1234.5;
  heroe={
    nombre:"Logan",
    clave:"Wolverine",
    edad:500,
    direccion:{
      calle:"Primaria",
      casa:"19"
    }
  }
  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Llego Data!"),3500);
  });
  fecha = new Date();
  video="D9W4DLjmoOM";
  activar=false;
}
