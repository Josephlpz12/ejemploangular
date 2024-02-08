import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { MiPerfilComponent } from './miperfil.component';
import { ConsultarReservasComponent } from './consultarreservas.component';
import { agregartipoanuncioComponent } from './agregartipoanuncio.component';

const routes: Routes = [
  { path:'',component:LoginComponent},
  { path:'consultarusuario',component:ConsultarusuarioComponent},
  { path:'menuadmin',component:MenuComponent},
  { path:'consultaranuncio',component:ConsultaranuncioComponent},
  { path:'agregaranuncio',component:agregaranuncioComponent},
  { path:'eliminaranuncio',component:eliminaranuncioComponent},
  { path:'consultarexamen',component:ConsultarexamenComponent},
  { path:'agregarexamen',component:agregarexamenComponent},
  { path:'consultarlugar',component:ConsultarlugarComponent},
  { path:'agregarlugar',component:agregarlugarComponent},
  { path:'eliminarlugar',component:eliminarlugarComponent},
  { path:'consultarviaje',component:ConsultarviajeComponent},
  { path:'agregarviaje',component:agregarviajeComponent},
  { path:'miperfil',component:MiPerfilComponent},
  { path:'consultarreservas',component:ConsultarReservasComponent},
  { path:'agregartipoanuncio',component:agregartipoanuncioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
