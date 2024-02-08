import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ConsultarusuarioComponent } from './consultarusuario.component';
import { MenuComponent } from './menuadmin.component';
import { ConsultaranuncioComponent } from './consultaranuncio.component';
import { agregaranuncioComponent } from './agregaranuncio.component';
import { eliminaranuncioComponent } from './eliminaranuncio.component';
import { ConsultarexamenComponent } from './consultarexamen.component';
import { agregarexamenComponent } from './agregarexamen.component';
import { ConsultarlugarComponent } from './consultarlugar.component';
import { agregarlugarComponent } from './agregarlugar.component';
import { eliminarlugarComponent } from './eliminarlugar.component';
import { ConsultarviajeComponent } from './consultarviaje.component';
import { agregarviajeComponent } from './agregarviaje.component';
import { EstadosPipe } from './estados.pipe';
import { LugaresPipe } from './lugares.pipe';
import { MiPerfilComponent } from './miperfil.component';
import { ConsultarReservasComponent } from './consultarreservas.component';
import { agregartipoanuncioComponent } from './agregartipoanuncio.component';
import { TipoanuncioPipe } from './tipoanuncio.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsultarusuarioComponent,
    MenuComponent,
    ConsultaranuncioComponent,
    agregaranuncioComponent,
    eliminaranuncioComponent,
    ConsultarexamenComponent,
    agregarexamenComponent,
    ConsultarlugarComponent,
    agregarlugarComponent,
    eliminarlugarComponent,
    ConsultarviajeComponent,
    agregarviajeComponent,
    EstadosPipe,
    LugaresPipe,
    MiPerfilComponent,
    ConsultarReservasComponent,
    agregartipoanuncioComponent,
    TipoanuncioPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  sesionIniciada:boolean = false;
  constructor(){
    let t = localStorage.getItem("administrador");
    if(t){
      this.sesionIniciada = true;
    }
    else{
      this.sesionIniciada = false;
    }
  }

}


