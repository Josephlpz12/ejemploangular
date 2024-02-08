import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiPerfilComponent {

  administradorpassword: any = {};
  administrador:any = {};
 
  constructor(private http:HttpClient){
    let t = localStorage.getItem("administrador");
    if(t){
      this.administrador = JSON.parse(t);
    }

    
  }
  
  buscarAdministrador(){
    this.servicioBuscarAdministrador().subscribe(
      (a:any)=>this.administrador = a
    )
  }
  
  servicioBuscarAdministrador():Observable<any>{
    return this.http.get<any>("http://localhost:8080/administrador/buscar");
  }


  ModificarPassword(){
    let validarFormulario:any = document.getElementById("passwordForm");
    if(validarFormulario.reportValidity()){
      this.servicioGuardar().subscribe((a:any) => this.actualizar = a)
      console.log(this.administrador);
      this.limpiarFormulario();
    }
  }
  

  servicioGuardar(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.administrador.password = this.administradorpassword.password;
    return this.http.post("http://localhost:8080/administrador/guardar",this.administrador,httpOptions);
  }

  actualizar(u:any){
    this.administradorpassword = {};
  }

  limpiarFormulario(){
    alert("Contraseña modificadda exitosamente.")
    this.administradorpassword = {};
  }
}