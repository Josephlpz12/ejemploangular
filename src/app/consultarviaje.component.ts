import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
    selector: 'app-consultarviaje',
    templateUrl: './consultarviaje.component.html',
    styleUrls: ['./consultarviaje.component.css']
  })
  export class ConsultarviajeComponent {
  
    viaje:any = [];
    constructor(private http:HttpClient){
      this.buscarViajes();
    }
  
    buscarViajes(){
      this.servicioBuscarViaje().subscribe(
        (us:any) => this.viaje = us
      )
    }
  
    servicioBuscarViaje():Observable<any>{
      return this.http.get("http://localhost:8080/viaje/buscarviaje");
    }
  
  }