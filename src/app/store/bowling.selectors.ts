import {createFeatureSelector, createSelector} from '@ngrx/store';
import {BowlingStateModel} from "./bowling.state";

const getBowlingState = createFeatureSelector<BowlingStateModel>('BOWLING_STATE');

const selectFrames = createSelector(getBowlingState, (state) => state.frames);
const selectRound = createSelector(getBowlingState, (state) => state.round);
const selectScore = createSelector(getBowlingState, (state) => state.score);
const selectState = createSelector(getBowlingState, (state) => state);

export { selectFrames, selectRound, selectScore, selectState };

