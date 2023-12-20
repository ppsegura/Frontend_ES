import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent {

  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  registrarCategoria() {
    this.categoriaService.createCategoria(this.categoria)
      .subscribe(() => {
        this.router.navigate(['/categoria-list']);
      });
  }

  cancelar(){
    this.router.navigate(['/categoria-list'])
  }

}
