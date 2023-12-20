import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  ListarDocente(){
    this.router.navigate(["docente-list"]);
  }

  ListarCategoria(){
    this.router.navigate(["categoria-list"]);
  }

}
