import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as bowlingReducer from './bowling.reducer';
@NgModule({
  imports: [
    StoreModule.forFeature(
      'BOWLING_STATE', bowlingReducer.reducer
    )
  ],
})
export class AppStoreModule {}
