import { MusicasService } from './../musicas/musicas.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-insert',
  standalone: true,
  templateUrl: './modal-insert.component.html',
  imports: [MatDialogContent, CommonModule, FormsModule],
  styleUrls: ['./modal-insert.component.css']
})
export class ModalInsertComponent implements OnInit {

  erroMsg: string = '';

  musicaData = {
    nome: '',
    tom: '',
    bpm: null,
    link: '',
    categoria: '',
    duracao: ''
  }

  constructor(private musicasService: MusicasService,
    private dialogRef: MatDialogRef<ModalInsertComponent>
  ) {
    console.log(this.musicasService)
  }

  ngOnInit() {
  }



  addMusica() {
    console.log('Musica a ser inserida:', this.musicaData);
    this.musicasService.postMusica(this.musicaData).subscribe({
      next: (data) => {
        console.log('Musica inserida com sucesso:', data);
        this.erroMsg = '';
        this.fecharModal();
        setTimeout(() => {
        window.location.reload()}, 2000);
      },
      error: (err) => {
        console.error('Erro ao inserir musica:', err);
        this.erroMsg = 'Erro ao inserir música. Tente novamente.';
      }
    });
  }

  fecharModal() {
    this.dialogRef.close();
  }
  // isValidDuration(value: string): boolean {
  //   const regex = /^[0-5]?\d:[0-5]\d$/;
  //   return regex.test(value);
  // }
}
