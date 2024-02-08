import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  administrador:any = {};

  constructor(private http:HttpClient){

  }

  login(){
    let validarFormulario:any = document.getElementById("loginForm");
    if(validarFormulario.reportValidity()){
      this.servicioLogin().subscribe(
        (u:any)=> this.darBienvenida(u)
      )
    }
  }

  darBienvenida(administrador:any){
    if(administrador){
      let t = JSON.stringify(administrador);
      localStorage.setItem("administrador", t);
      this.administrador = {};
      location.href="/menuadmin"
    }
    else{
      alert("Usuario o password invalidos.")
    }
  }

  

  servicioLogin(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/administrador/login",this.administrador,httpOptions);
  }

}