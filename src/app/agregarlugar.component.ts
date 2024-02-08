import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, catchError } from 'rxjs';


@Component({
  selector: 'app-agregarlugar',
  templateUrl: './agregarlugar.component.html',
  styleUrls: ['./agregarlugar.component.css']
})
export class agregarlugarComponent {

  lugar:any = {};
  lugares:any = {};
  imagen:any = {};
 


  constructor(private http:HttpClient){
    this.buscarLugares();

  }

  buscarLugares(){
    this.servicioBuscarLugares().subscribe(
      (l:any)=>this.lugares = l
    )
  }

  servicioBuscarLugares():Observable<any>{
    return this.http.get<any>("http://localhost:8080/lugar/buscar");
  }



  guardarLugar(){
    let validarFormulario:any = document.getElementById("lugarForm");
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
    ("http://localhost:8080/lugar/guardarlugar",this.lugar,httpOptions);
  }


  limiarFormulario(){
    this.lugar = {};
  }

 

  handleUpload(event:any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
      this.lugar.imagen = reader.result;
      
  };
  
  }

  modificar(u:any){
    this.lugar = u;
  }

  actualizar(u:any){
    this.buscarLugares();
    this.lugar = {};
  }


  eliminar(u:any){
    this.eliminarLugar(u).subscribe(
      (u:any)=>this.actualizar(u)
    )
  }

  eliminarLugar(us:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/lugar/eliminar/"+us.idlugar).pipe(
      catchError(e=>"error")
  );
  }
}