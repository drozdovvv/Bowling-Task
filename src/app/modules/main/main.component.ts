import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { bowlingActions } from '../../store/bowling.actions';
import {FramesModel} from "../../models/frames.model";
import { sumGreaterThanTenValidator } from "../../utils/custom-form-validators.fun";
import { EndOfGameWindowComponent } from '../../shared/components/dialog-windows/end-of-game-window/end-of-game-window.component'
import { FinishedGameWindowComponent } from '../../shared/components/dialog-windows/finished-game-window/finished-game-window.component'
import {filter, Observable, take, takeLast} from "rxjs";
import {selectFrames, selectRound, selectScore, selectState} from "../../store/bowling.selectors";
import {MatDialog} from "@angular/material/dialog";
import { scoringSystem } from "../../shared/common/scoringSystem.enum";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  form: FormGroup = new FormGroup({
    scoreOne: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
    scoreTwo: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(10)]),
  },{ validators: sumGreaterThanTenValidator( 'scoreOne', 'scoreTwo' ) }
  );
  // TODO do I need scoreThree in sumGreaterThanTenValidator?
  score$: Observable<number>;
  round$: Observable<number>;
  frames$: Observable<FramesModel[]>;
  displayedColumns: string[] = ['number', 'Frames'];
  answer: boolean = true;
  previousScore: string = scoringSystem.open;

  constructor(private formBuilder: FormBuilder, private state: Store, public dialog: MatDialog) {
    this.score$ = this.state.select(selectScore);
    this.round$ = this.state.select(selectRound);
    this.frames$ = this.state.select(selectFrames);
  }

  // listenToFormChanges(){
  //   this.form.valueChanges.subscribe((data) => console.log(data));
  //   // form changes listener
  // }

  submitPoints( ){

    console.log("submit");

    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    const currentScore = this.form.get("scoreOne")?.value + this.form.get("scoreTwo")?.value;

    let countedScore: number;
    if ( this.previousScore === scoringSystem.strike ) countedScore = currentScore + currentScore;
    else if ( this.previousScore === scoringSystem.spare ) countedScore = currentScore + this.form.get("scoreOne")?.value;
    else countedScore = currentScore;

    // strike
    if ( this.form.get("scoreOne")?.value === 10) { this.previousScore = scoringSystem.strike; }
    // spare
    else if ( currentScore === 10 ) { this.previousScore = scoringSystem.spare; }
    // open
    else this.previousScore = scoringSystem.open;

    this.state.dispatch(bowlingActions.postBowlingData({frame: this.form.value, score: countedScore}))

    this.form.reset();

    //this.state.select(selectState).subscribe(x => console.log(x));

    this.state.select(selectRound).pipe(take(1)).subscribe(round => {
      console.log(round);
      //TODO change to 10
      if (round === 5){
        console.log("open End Of Game Dialog");
        this.openEndOfGameDialog();
      }
    });
  }

  openEndOfGameDialog(): void {
    let dialogRef = this.dialog.open(EndOfGameWindowComponent, {data: this.answer});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.state.dispatch(bowlingActions.resetStore());
      }
      else {
        this.dialog.open(FinishedGameWindowComponent, {data: {score: this.score$}});
      }
    });
  }
}
