import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
    selector: 'app-consultarreservas',
    templateUrl: './consultarreservas.component.html',
    styleUrls: ['./consultarreservas.component.css']
  })
  export class ConsultarReservasComponent {
  
    estados:any = [];
    reservas:any = [];
    constructor(private http:HttpClient){
      this.buscarReservas();
      this.buscarEstados();
    }
  
    buscarReservas(){
      this.servicioBuscarReservas().subscribe(
        (us:any) => this.reservas = us
      )
    }
  
    servicioBuscarReservas():Observable<any>{
      return this.http.get("http://localhost:8080/reservacion/buscar");
    }
  

    buscarEstados(){
      this.servicioBuscarEstados().subscribe(
        (u:any)=>this.estados = u
      )
    }
  
    servicioBuscarEstados():Observable<any>{
      return this.http.get<any>("http://localhost:8080/estado/buscar");
    }
  }