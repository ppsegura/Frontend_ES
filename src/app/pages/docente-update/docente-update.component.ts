import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { Docente } from 'src/app/model/docente';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docente-update',
  templateUrl: './docente-update.component.html',
  styleUrls: ['./docente-update.component.css']
})
export class DocenteUpdateComponent {

  docente : Docente = new Docente();
  categoria : Categoria[]=[];

  constructor(
    private docenteService : DocenteService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getDocenteById();
    this.getCategoria();
    }

    getCategoria() {
      this.categoriaService.getCategoria()
        .subscribe(data => {
          this.categoria = data;
        });
    }


  getDocenteById() {
    const id = this.route.snapshot.params['id'];
    this.docenteService.getDocenteId(id)
      .subscribe({
        next: (data) => {
          this.docente = data;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  actualizarDocente() {
    this.docenteService.updateDocente(this.docente)
      .subscribe({
        next: () => {
          this.router.navigate(['/docente-list']);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
        }
      });

    }

    cancelar(){
      this.router.navigate(['/docente-list'])
    }
}
