import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-agregarexamen',
  templateUrl: './agregarexamen.component.html',
  styleUrls: ['./agregarexamen.component.css']
})
export class agregarexamenComponent {

  examen:any = {};

  constructor(private http:HttpClient){

  }

  guardarExamen(){
    let validarFormulario:any = document.getElementById("examenForm");
    if(validarFormulario.reportValidity()){
      this.servicioLogin().subscribe(
      )
    }
  }


  servicioLogin(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/examen/guardarexamen",this.examen,httpOptions);
  }

}