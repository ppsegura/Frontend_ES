import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/model/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docente-list',
  templateUrl: './docente-list.component.html',
  styleUrls: ['./docente-list.component.css']
})
export class DocenteListComponent {

  docente : Docente[] = [];

  constructor(
    private docenteService : DocenteService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getDocente();
  }

  getDocente(){
    this.docenteService.getDocente().subscribe({
      next: (data) => {
        this.docente = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  eliminarDocente( id : number){
    this.docenteService.deleteDocente(id)
    .subscribe(() => {
      this.getDocente();
    });
  }

  editarDocente( id : number){
    this.router.navigate(['/docente-update', id]);
  }

  crearDocente(){
    this.router.navigate(['/docente-create'])
  }

  regresar(){
    this.router.navigate(['/home'])
  }
}
