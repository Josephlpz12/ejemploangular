import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
    selector: 'app-consultarusuario',
    templateUrl: './consultarusuario.component.html',
    styleUrls: ['./consultarusuario.component.css']
  })
  export class ConsultarusuarioComponent {
  
    usuarios:any = [];
    constructor(private http:HttpClient){
      this.buscarUsuarios();
    }
  
    buscarUsuarios(){
      this.servicioBuscarUsuarios().subscribe(
        (us:any) => this.usuarios = us
      )
    }
  
    servicioBuscarUsuarios():Observable<any>{
      return this.http.get("http://localhost:8080/usuario/buscar");
    }
  
  }