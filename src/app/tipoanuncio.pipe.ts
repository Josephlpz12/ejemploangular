import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoanuncio'
})
export class TipoanuncioPipe implements PipeTransform {

  transform(value: number, tipoAnuncio: any[]): String {
    let t : any;
    for(t of tipoAnuncio){
      if(t.idtipoAnuncio == value){
        return t.descripcion;
      }
    }
    return "No hay informacion";
  }

}
