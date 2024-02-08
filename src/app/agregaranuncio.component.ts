import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Component({
  selector: 'app-agregaranuncio',
  templateUrl: './agregaranuncio.component.html',
  styleUrls: ['./agregaranuncio.component.css']
})
export class agregaranuncioComponent {

  anuncio:any = {};
  anuncios:any = {};
  imagen:any = {};
  tipoanuncio:any = {};


  constructor(private http:HttpClient){
    this.buscarAnuncios();
    this.buscartipoAnuncios();
    
  }

  buscarAnuncios(){
    this.servicioBuscarAnuncio().subscribe(
      (us:any) => this.anuncios = us
    )
  }

  servicioBuscarAnuncio():Observable<any>{
    return this.http.get("http://localhost:8080/anuncio/buscaranuncio");
  }

  guardarAnuncio(){
    let validarFormulario:any = document.getElementById("anuncioForm");
    if(validarFormulario.reportValidity()){
      this.servicioGuardar().subscribe(
      )
    }
  }


  servicioGuardar(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/anuncio/guardaranuncio",this.anuncio,httpOptions);
  }


  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.anuncio.imagen = reader.result;
        
    };
    
    }

    limiarFormulario(){
      this.anuncio = {};
    }

    modificar(u:any){
      this.anuncio = u;
    }
  
    actualizar(u:any){
      this.buscarAnuncios();
      this.anuncio = {};
    }
  
  
    eliminar(u:any){
      this.eliminarLugar(u).subscribe(
        (u:any)=>this.actualizar(u)
      )
    }
  
    eliminarLugar(us:any):Observable<any>{
      return this.http.delete<any>("http://localhost:8080/lugar/eliminar/"+us.idanucnio).pipe(
        catchError(e=>"error")
    );
    }


    
  buscartipoAnuncios(){
    this.servicioBuscartipoAnuncio().subscribe(
      (us:any) => this.tipoanuncio = us
    )
  }

  servicioBuscartipoAnuncio():Observable<any>{
    return this.http.get("http://localhost:8080/tipoanuncio/buscar");
  }
}