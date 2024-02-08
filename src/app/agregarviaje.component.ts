import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-agregarviaje',
  templateUrl: './agregarviaje.component.html',
  styleUrls: ['./agregarviaje.component.css']
})
export class agregarviajeComponent {

  viaje:any = {};
  viajes:any = {};
  estados:any = [];
  lugares:any = [];
  
  constructor(private http:HttpClient){
    this.buscarViajes();
    this.buscarEstados();
    this.buscarLugares();

  }

  buscarViajes(){
    this.servicioBuscarViajes().subscribe(
      (v:any)=>this.viajes = v
    )
  }

  servicioBuscarViajes():Observable<any>{
    return this.http.get<any>("http://localhost:8080/viaje/buscar");
  }

  CrearViaje(){
    let validarFormulario:any = document.getElementById("viajeForm");
    if(validarFormulario.reportValidity()){
      this.servicioGuardar().subscribe(
        (u:any) => this.actualizar(u)
      )
    }
  }

  modificar(v:any){
    this.viaje = v;
  }

  actualizar(u:any){
    this.buscarViajes();
    this.buscarLugares();
    this.viaje = {};
  }
  
  servicioGuardar(){
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>
    ("http://localhost:8080/viaje/guardarviaje",this.viaje,httpOptions);
  }

  buscarEstados(){
    this.servicioBuscarEstados().subscribe(
      (u:any)=>this.estados = u
    )
  }

  servicioBuscarEstados():Observable<any>{
    return this.http.get<any>("http://localhost:8080/estado/buscar");
  }

  buscarLugares(){
    this.servicioBuscarLugares().subscribe(
      (l:any)=>this.lugares = l
    )
  }

  servicioBuscarLugares():Observable<any>{
    return this.http.get<any>("http://localhost:8080/lugar/buscar");
  }

  eliminar(u:any){
    this.eliminarViaje(u).subscribe(
      (u:any)=>this.actualizar(u)
    )
  }

  eliminarViaje(v:any):Observable<any>{
    return this.http.delete<any>("http://localhost:8080/viaje/eliminar/"+v.idviaje).pipe(
      catchError(e=>"error")
  );
  }
  
  limiarFormulario(){
    this.viaje = {};
  }
}