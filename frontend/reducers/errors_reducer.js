import SessionErrorsReducer from './session_errors_reducer';
import SongErrorsReducer from './song_errors_reducer';
import {combineReducers} from "redux";

export default combineReducers({
  session: SessionErrorsReducer,
  songs: SongErrorsReducer
});