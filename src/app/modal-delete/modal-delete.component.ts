import { Component, OnInit } from '@angular/core';
import { MatDialogContent } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MusicasService } from "../musicas/musicas.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css'],
  imports: [MatDialogContent, CommonModule, FormsModule],
})
export class ModalDeleteComponent implements OnInit {

  id!: number;

  constructor(private musicaService: MusicasService) { }


  ngOnInit() {
  }

  deleteMusica() {
    console.log('deletar musica com id:', this.id);

    this.musicaService.deleteMusica(this.id).subscribe({
      next: () => console.log('Música deletada com sucesso'),
      error: (err: any) => console.error(err)
    });
  }

}
