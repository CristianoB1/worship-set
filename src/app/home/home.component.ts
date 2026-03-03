import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, inject } from '@angular/core';
import { ModalInsertComponent } from '../modal-insert/modal-insert.component';
import { MusicasService } from '../musicas/musicas.service';
import { Musicas } from '../musicas/musicas';
import { CommonModule } from '@angular/common';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicas: Musicas[] = [];
  musicasOriginal: Musicas[] = [];

  readonly dialogInsert = inject(MatDialog);
  openDialogInsert(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogInsert.open(ModalInsertComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  readonly dialogDel = inject(MatDialog);
  openDialogDel(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogInsert.open(ModalDeleteComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(private musicasService: MusicasService) {

  }

  ngOnInit() {
    this.musicasService.getMusicas().subscribe({
      next: (data) => {
        this.musicas = data;
        this.musicasOriginal = data;
      },
      error: (err) => console.error('erro ao obter musicas:', err),
    });

  }

  //filtro por nome da musica em um input de busca
  filterSongs(searchTerm: string): void {
    if (!searchTerm) {
      this.musicas = this.musicasOriginal;
      return;
    }

    this.musicas = this.musicasOriginal.filter(musica =>
      musica.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}


