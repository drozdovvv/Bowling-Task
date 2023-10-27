import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'end-of-game-window',
  styleUrls: ['end-of-game-window.component.css'],
  templateUrl: 'end-of-game-window.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class EndOfGameWindowComponent {
  @Output() userAnswerEvent = new EventEmitter<boolean>();
  constructor() {}
}

