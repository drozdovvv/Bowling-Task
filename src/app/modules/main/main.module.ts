import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MainComponent } from './main.component';
import {CommonModule} from "@angular/common";
import {MainRoutingModule} from "./main-routing.module";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from '@angular/material/dialog';
import {
  EndOfGameWindowComponent
} from "../../shared/components/dialog-windows/end-of-game-window/end-of-game-window.component";
import {
  FinishedGameWindowComponent
} from "../../shared/components/dialog-windows/finished-game-window/finished-game-window.component";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    EndOfGameWindowComponent,
    FinishedGameWindowComponent,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MainRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    EndOfGameWindowComponent,
    FinishedGameWindowComponent,
  ],
})
export class MainModule { }
