import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Component({
  selector: 'app-eliminarlugar',
  templateUrl: './eliminarlugar.component.html',
  styleUrls: ['./eliminarlugar.component.css']
})
export class eliminarlugarComponent {

  lugar:any = {};

  constructor(private http:HttpClient){

  }

  eliminarLugar(lugar:any){
    let validarFormulario:any = document.getElementById("idlugarForm");
    if(validarFormulario.reportValidity()){
        this.eliminarLugarServicio(lugar.idlugar).subscribe()
    }

  }

  eliminarLugarServicio(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/lugar/eliminar/"+id).pipe(
        catchError(e=>"error")
    )
  }

}