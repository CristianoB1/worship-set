import { Component, OnInit } from '@angular/core';
import { MatDialogActions, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-insert',
  templateUrl: './modal-insert.component.html',
  imports: [MatDialogActions, MatDialogContent],
  styleUrls: ['./modal-insert.component.css']
})
export class ModalInsertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
