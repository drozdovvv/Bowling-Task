import { Action, createReducer, on } from '@ngrx/store';
import {bowlingActions} from "./bowling.actions";
import {BOWLING_INITIAL_STATE, BowlingStateModel} from "./bowling.state";


export const reducer = createReducer(
  BOWLING_INITIAL_STATE,
  on(bowlingActions.postFrame, (state, {frame}) => {
    const newFrames = [...state.frames, frame];
    return { ...state, frames: newFrames };
  }),
  on(bowlingActions.postRound, (state) => {
    return { ...state, round: state.round + 1 };
  }),
  on(bowlingActions.postScore, (state, {score}) => {
    return { ...state, score: state.score + score };
  }),
  on(bowlingActions.postBowlingData, (state, {frame, score}) => {
    const newFrames = [...state.frames, frame];
    return { ...state,
      frames: newFrames,
      round: state.round + 1,
      score: state.score + score };
  }),
  on(bowlingActions.resetStore, () => {
    return { ...BOWLING_INITIAL_STATE };
  }),
)



