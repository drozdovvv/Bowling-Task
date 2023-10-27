import {Component, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'finished-game-window',
  styleUrls: ['finished-game-window.component.css'],
  templateUrl: 'finished-game-window.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, AsyncPipe],
})

export class FinishedGameWindowComponent {
  @Input() score: number = 1;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {score: Observable<number>}
  ) {}
}

