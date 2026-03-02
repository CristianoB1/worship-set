import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, inject } from '@angular/core';
import { ModalInsertComponent } from '../modal-insert/modal-insert.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly dialogInsert = inject(MatDialog);
  openDialogInsert(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialogInsert.open(ModalInsertComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor() { }

  ngOnInit() {
  }

}


