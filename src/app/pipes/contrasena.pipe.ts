import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, args: boolean): string {
    if(args){
      let salida:string="";
      for(let i=0; i< value.length; i++){
        salida+="*";
      }
      return salida;
    }else{
      return value;
    }
    
  }

}
