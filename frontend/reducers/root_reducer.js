import {combineReducers} from "redux";
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';

export default combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  errors: ErrorsReducer
});

