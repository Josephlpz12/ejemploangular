import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';


@Component({
  selector: 'app-agregartipoanuncio',
  templateUrl: './agregartipoanuncio.component.html',
  styleUrls: ['./agregartipoanuncio.component.css']
})
export class agregartipoanuncioComponent {

  tipoanuncio:any = {};
  tipoanuncios:any = {};
  imagen:any = {};

  constructor(private http:HttpClient){
    this.buscartipoAnuncios();
  }

  
  buscartipoAnuncios(){
    this.servicioBuscartipoAnuncio().subscribe(
      (us:any) => this.tipoanuncios = us
    )
  }

  servicioBuscartipoAnuncio():Observable<any>{
    return this.http.get("http://localhost:8080/tipoanuncio/buscar");
  }

  
  guardartipoAnuncio(){
    let validarFormulario:any = document.getElementById("tipoanuncioForm");
    if(validarFormulario.reportValidity()){
      this.servicioGuardartipoanuncio().subscribe(
      )
    }
  }


  servicioGuardartipoanuncio(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/tipoanuncio/guardar",this.tipoanuncio,httpOptions);
  }

  
  handleUpload(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.tipoanuncio.imagen = reader.result;
        
    };
    
    }

    
    limiarFormulario(){
      this.tipoanuncio = {};
    }

    modificar(u:any){
      this.tipoanuncio = u;
    }
  
    actualizar(u:any){
      this.buscartipoAnuncios();
      this.tipoanuncio = {};
    }

    
    eliminar(u:any){
      this.eliminarLugar(u).subscribe(
        (u:any)=>this.actualizar(u)
      )
    }
  
    eliminarLugar(us:any):Observable<any>{
      return this.http.delete<any>("http://localhost:8080/tipoanuncio/eliminar/"+us.idtipoAnuncio).pipe(
        catchError(e=>"error")
    );
    }
}