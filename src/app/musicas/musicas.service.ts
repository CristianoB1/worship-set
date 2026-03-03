import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Musicas } from './musicas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private readonly url = 'http://localhost:3000/musicas';

  constructor(private http: HttpClient) {
    this.getMusicas();
  }

  getMusicas(): Observable<Musicas[]> {
    return this.http.get<Musicas[]>(this.url);
  }

  postMusica(musica: Musicas) {
    this.http.post(this.url, musica).subscribe({
      next: (data) => console.log('musica inserida:', data),
      error: (err) => console.error('erro ao inserir musica:', err),
    });
  }

  deleteMusica(id: number) {
    this.http.delete(`${this.url}/${id}`).subscribe({
      next: (data) => console.log('musica deletada:', data),
      error: (err) => console.error('erro ao deletar musica:', err),
    });
  }

}
