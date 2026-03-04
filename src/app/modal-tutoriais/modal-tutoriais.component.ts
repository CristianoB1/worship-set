import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-modal-tutoriais',
  standalone: true,
  templateUrl: './modal-tutoriais.component.html',
  styleUrls: ['./modal-tutoriais.component.css'],
  imports: [MatDialogContent, CommonModule]
})
export class ModalTutoriaisComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalTutoriaisComponent>) { }

  ngOnInit() {
  }

  fecharModal() {
    this.dialogRef.close();
  }

}
