import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, inject } from '@angular/core';
import { ModalInsertComponent } from '../modal-insert/modal-insert.component';
import { MusicasService } from '../musicas/musicas.service';
import { Musicas } from '../musicas/musicas';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  musicas: Musicas[] = [];

  readonly dialogInsert = inject(MatDialog);
  openDialogInsert(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogInsert.open(ModalInsertComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(private musicasService: MusicasService) { 
    this.musicasService.getMusicas().subscribe({
      next: (data) => this.musicas = data,
      error: (err) => console.error('erro ao obter musicas:', err),
    });
  }

  ngOnInit() {
    this.musicasService.getMusicas().subscribe({
      next: (data) => this.musicas = data,
      error: (err) => console.error('erro ao obter musicas:', err),
    });
  }

}


