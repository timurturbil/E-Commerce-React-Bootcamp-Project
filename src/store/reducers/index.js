import { combineReducers } from "redux";
import {photosReducer} from './photoReducer';
import {commentReducer} from './commentReducer';
const rootReducer = combineReducers({
  photosReducer,
  commentReducer
});

export default rootReducer;