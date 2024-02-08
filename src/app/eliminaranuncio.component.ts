import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Component({
  selector: 'app-eliminaranuncio',
  templateUrl: './eliminaranuncio.component.html',
  styleUrls: ['./eliminaranuncio.component.css']
})
export class eliminaranuncioComponent {

  anuncio:any = {};

  constructor(private http:HttpClient){

  }

  eliminarAnuncio(anuncio:any){
    let validarFormulario:any = document.getElementById("idanuncioForm");
    if(validarFormulario.reportValidity()){
        this.eliminarAnuncioServicio(anuncio.idanuncio).subscribe()
    }

  }

  eliminarAnuncioServicio(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/anuncio/eliminar/"+id).pipe(
        catchError(e=>"error")
    )
  }

}