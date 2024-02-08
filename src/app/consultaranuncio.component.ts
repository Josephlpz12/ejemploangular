import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Component({
    selector: 'app-consultaranuncio',
    templateUrl: './consultaranuncio.component.html',
    styleUrls: ['./consultaranuncio.component.css']
  })
  export class ConsultaranuncioComponent {
  
    anuncio:any = [];
    constructor(private http:HttpClient){
      this.buscarAnuncios();
    }
  
    buscarAnuncios(){
      this.servicioBuscarAnuncio().subscribe(
        (us:any) => this.anuncio = us
      )
    }
  
    servicioBuscarAnuncio():Observable<any>{
      return this.http.get("http://localhost:8080/anuncio/buscaranuncio");
    }
  
  }
  