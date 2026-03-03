import { MusicasService } from './../musicas/musicas.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal-insert',
  standalone: true,
  templateUrl: './modal-insert.component.html',
  imports: [MatDialogContent, CommonModule, FormsModule],
  styleUrls: ['./modal-insert.component.css']
})
export class ModalInsertComponent implements OnInit {

  musicaData = {
    nome: '',
    tom: '',
    bpm: null,
    link: '',
    categoria: '',
    duracao: ''
  }

  constructor(private musicasService: MusicasService) {
    console.log(this.musicasService)
  }

  ngOnInit() {
  }

  addMusica() {
    console.log('Musica a ser inserida:', this.musicaData);
    this.musicasService.postMusica(this.musicaData).subscribe({
      next: (data) => {
        console.log('Musica inserida com sucesso:', data);
        // Aqui você pode adicionar lógica para fechar o modal ou atualizar a lista de músicas
      },
      error: (err) => console.error('Erro ao inserir musica:', err),
    });
  }

  // isValidDuration(value: string): boolean {
  //   const regex = /^[0-5]?\d:[0-5]\d$/;
  //   return regex.test(value);
  // }
}
