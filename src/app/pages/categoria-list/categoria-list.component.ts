import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent {

  categoria: Categoria[] = [];

  constructor(
    private categoriaService : CategoriaService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria() {
    this.categoriaService.getCategoria().subscribe({
      next: (data) => {
        this.categoria = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  eliminarCategoria( id : number){
    this.categoriaService.deleteCategoria(id)
    .subscribe(() => {
      this.getCategoria();
    });
  }

  editarCategoria( id : number){
    this.router.navigate(['/categoria-update', id]);
  }

  crearCategoria(){
    this.router.navigate(['/categoria-create'])
  }

  regresar(){
    this.router.navigate(['/home'])
  }
}
