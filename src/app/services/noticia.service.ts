import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais +
      '&category=' + parametros.categoria + '&apiKey=1dcaf2f473cd4176b18fa4940c13d9cb';
    return this.http.get(URL);
  }

}
