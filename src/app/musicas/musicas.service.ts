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
    this.getMusicas();
  }

  getMusicas(): Observable<Musicas[]> {
    return this.http.get<Musicas[]>(this.url);
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
