import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
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
  logout(){
    localStorage.clear();
    location.href="#";
  }
  


}

