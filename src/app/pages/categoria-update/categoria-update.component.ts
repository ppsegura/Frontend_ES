import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent {

  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoriaById();
  }

  getCategoriaById() {
    const id = this.route.snapshot.params['id'];
    this.categoriaService.getCategoriaId(id)
      .subscribe((data) => {
        this.categoria = data;
      });
  }

  actualizarCategoria() {
    this.categoriaService.updateCategoria(this.categoria)
      .subscribe({
        next: () => {
          this.router.navigate(['/categoria-list']);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
        }
      });
  }

  cancelar(){
    this.router.navigate(['/categoria-list'])
  }
}
