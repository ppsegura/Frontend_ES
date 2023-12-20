import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpClient: HttpClient) { }

  UrlCategoria = 'http://localhost:8080/categoria';

  getCategoria(){
    return this.httpClient.get<Categoria[]>(this.UrlCategoria);
  }

  createCategoria(categoria : Categoria){
    return this.httpClient.post<Categoria>(this.UrlCategoria, categoria);
  }

  updateCategoria(categoria : Categoria){
    return this.httpClient.put<Categoria>(this.UrlCategoria + "/" + categoria.id_categoria, categoria);
  }

  getCategoriaId(id : number){
    return this.httpClient.get<Categoria>(this.UrlCategoria + "/" + id);
  }

  deleteCategoria(id : number){
    return this.httpClient.delete<Categoria>(this.UrlCategoria + "/" + id);
  }
}
