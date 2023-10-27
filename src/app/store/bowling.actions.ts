
import { createAction, props } from '@ngrx/store';
import {FramesModel} from "../models/frames.model";

const enum BowlingActionsTypes {

  PostFrame = 'Post new frame',
  PostRound = 'Post round value',
  PostScore = 'Post score value',
  PostBowlingData = 'Post frame round and score',
  ResetStore = 'Reset store to initial state after 10 rounds'
}

const postFrame = createAction(BowlingActionsTypes.PostFrame, props<{ frame: FramesModel }>());
const postRound = createAction(BowlingActionsTypes.PostRound);
const postScore = createAction(BowlingActionsTypes.PostScore, props<{ score: number }>());
const postBowlingData = createAction(BowlingActionsTypes.PostBowlingData, props<{ frame: FramesModel, score: number }>());
const resetStore = createAction(BowlingActionsTypes.ResetStore);

const bowlingActions = {
  postFrame,
  postRound,
  postScore,
  postBowlingData,
  resetStore
};

export { BowlingActionsTypes, bowlingActions };
