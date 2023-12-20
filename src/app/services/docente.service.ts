import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Docente } from '../model/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private httpClient: HttpClient) { }

  UrlDocente = 'http://localhost:8080/docente';

  getDocente(){
    return this.httpClient.get<Docente[]>(this.UrlDocente);
  }

  createDocente(docente : Docente){
    return this.httpClient.post<Docente>(this.UrlDocente, docente);
  }

  updateDocente(docente : Docente){
    return this.httpClient.put<Docente>(this.UrlDocente + "/" + docente.id_docente, docente);
  }

  getDocenteId(id : number){
    return this.httpClient.get<Docente>(this.UrlDocente + "/" + id);
  }

  deleteDocente(id : number){
    return this.httpClient.delete<Docente>(this.UrlDocente + "/" + id);
  }

}
