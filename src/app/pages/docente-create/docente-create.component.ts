import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { Docente } from 'src/app/model/docente';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docente-create',
  templateUrl: './docente-create.component.html',
  styleUrls: ['./docente-create.component.css']
})
export class DocenteCreateComponent {

  docente : Docente = new Docente();
  categoria : Categoria[]=[];


  constructor(
    private docenteService: DocenteService,
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria() {
    this.categoriaService.getCategoria()
      .subscribe(data => {
        this.categoria = data;
      });
  }

  registrarDocente() {
    this.docenteService.createDocente(this.docente)
      .subscribe(() => {
        this.router.navigate(['/docente-list']);
      });
  }

  cancelar(){
    this.router.navigate(['/docente-list'])
  }
}
