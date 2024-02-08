import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrls: ['./menuadmin.component.css']
})
export class MenuComponent {

  constructor(private http:HttpClient){

  }

  darBienvenida(anuncio:any){
    if(anuncio){
      location.href="/consultaranuncio"
    }
    else{
      alert("Ha ocurido un error")
    }
  }

  servicioMenu(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/Menuadmin",httpOptions);
  }
  
  buscarAnuncio(){
    location.href="/consultaranuncio"
}
  buscarUsuario(){
  location.href="/consultarusuario"
}
  guardarAnuncio(){
  location.href="/agregaranuncio"
}
  eliminarAnuncio(){
  location.href="/eliminaranuncio"
}
 buscarExamen(){
  location.href="/consultarexamen"
}

  guardarExamen(){
  location.href="/agregarexamen"
}

buscarLugar(){
  location.href="/consultarlugar"
}

  guardarLugar(){
  location.href="/agregarlugar"
}

  eliminarLugar(){
  location.href="/eliminarlugar"
}
  buscarViaje(){
  location.href="/consultarviaje"
}

  guardarViaje(){
  location.href="/agregarviaje"
}
  
buscarReservas(){
  location.href="/consultarreservas"
}

 
guardartipoanuncio(){
  location.href="/agregartipoanuncio"
}


}