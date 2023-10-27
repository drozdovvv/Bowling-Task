import {FramesModel} from "../models/frames.model";
import {State} from "@ngrx/store";

export interface BowlingStateModel {
  frames: FramesModel [],
  round: number,
  score: number
}

const BOWLING_INITIAL_STATE: BowlingStateModel = {
  frames: [],
  round: 0,
  score: 0
};

export class BowlingStateModel {};
export { BOWLING_INITIAL_STATE };
