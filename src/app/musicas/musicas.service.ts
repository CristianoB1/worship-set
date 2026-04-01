import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Musicas } from './musicas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  //private readonly url = 'http://localhost:3000/musicas';
  private readonly url = 'https://worshipsetapi.onrender.com/musicas'

  constructor(private http: HttpClient) {
  }

  // getMusicas(): Observable<Musicas[]> {
  //   return this.http.get<Musicas[]>(this.url);
  // }
  getMusicas(): Observable<Musicas[]> {
    // Adiciona um timestamp para garantir que a URL seja única a cada chamada
    const urlComCacheBuster = `${this.url}?t=${new Date().getTime()}`;
    return this.http.get<Musicas[]>(urlComCacheBuster);
  }
  // postMusica(musicaData: Musicas) {
  //   this.http.post(this.url, musicaData).subscribe({
  //     next: (data) => console.log('musica inserida:', data),
  //     error: (err) => console.error('erro ao inserir musica:', err),
  //   });
  // }
  postMusica(musica: any): Observable<any> {
    return this.http.post<Musicas>(this.url, musica);
  }

  deleteMusica(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

}
