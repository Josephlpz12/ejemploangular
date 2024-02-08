import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
    selector: 'app-consultarlugar',
    templateUrl: './consultarlugar.component.html',
    styleUrls: ['./consultarlugar.component.css']
  })
  export class ConsultarlugarComponent {
  
    lugar:any = [];
    constructor(private http:HttpClient){
      this.buscarLugar();
    }
  
    buscarLugar(){
      this.servicioBuscarLugar().subscribe(
        (us:any) => this.lugar = us
      )
    }
  
    servicioBuscarLugar():Observable<any>{
      return this.http.get("http://localhost:8080/lugar/buscarlugar");
    }
  
  }