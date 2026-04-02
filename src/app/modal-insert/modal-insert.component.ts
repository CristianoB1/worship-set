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
    bpm: null as number | null,
    link: '',
    categoria: '',
    duracao: ''
  }

  constructor(
    private musicasService: MusicasService,
    private dialogRef: MatDialogRef<ModalInsertComponent>
  ) {
    // console.log(this.musicasService)
  }

  ngOnInit() {
  }



  addMusica() {

    if (!this.musicaData.nome || !this.musicaData.duracao) {
      this.erroMsg = 'Por favor, preencha os campos obrigatórios.';
      return;
    }

    console.log('Musica a ser inserida:', this.musicaData);
    this.musicasService.postMusica(this.musicaData).subscribe({
      next: (data) => {
        console.log('Musica inserida com sucesso:', data);
        this.erroMsg = '';

        this.dialogRef.close(data);
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
validarBpm(event: any) {
  // 1. Pega o valor atual e remove tudo que NÃO for número
  let valor = event.target.value.replace(/\D/g, '');

  // 2. Corta para no máximo 3 caracteres (garantia extra além do maxlength)
  if (valor.length > 3) {
    valor = valor.substring(0, 3);
  }

  // 3. Converte para número para salvar no objeto (ou mantém null se vazio)
  this.musicaData.bpm = valor ? parseInt(valor, 10) : null;

  // 4. Atualiza o valor visual do input imediatamente
  event.target.value = valor;
}

  formatarDuracao(event: any) {
  let v = event.target.value.replace(/\D/g, ''); // Remove o que não é número
  
  if (v.length > 4) v = v.substring(0, 4); // Limita a 4 dígitos numéricos

  if (v.length >= 3) {
    // Insere os dois pontos após o segundo dígito
    v = v.substring(0, 2) + ':' + v.substring(2);
  }
  
  this.musicaData.duracao = v;
}

}
