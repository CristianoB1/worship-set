import { Component, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogRef } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MusicasService } from "../musicas/musicas.service";
import { FormsModule } from '@angular/forms';
import { Musicas } from '../musicas/musicas';

@Component({
  selector: 'app-modal-delete',
  standalone: true,
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.css'],
  imports: [MatDialogContent, CommonModule, FormsModule],
})
export class ModalDeleteComponent implements OnInit {

  musicas: Musicas[] = [];
  erroMsg: string = '';
  id!: number;

  constructor(private musicaService: MusicasService,
    private dialogRef: MatDialogRef<ModalDeleteComponent>
  ) { }


  ngOnInit() {
  }

  deleteMusica() {
    console.log('deletar musica com id:', this.id);

    this.musicaService.deleteMusica(this.id).subscribe({
      next: () => {
        console.log('Música deletada com sucesso');

        this.musicaService.getMusicas().subscribe((data) => {
          this.musicas = data; // ATUALIZA A TELA
        });

      },
      error: (err: any) => {
        console.error(err)
        this.erroMsg = 'Erro ao deletar a música. Verifique o ID e tente novamente.';
      },
    });
  }

  fecharModal() {
    this.dialogRef.close();
  }

}
