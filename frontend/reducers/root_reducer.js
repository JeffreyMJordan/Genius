import {combineReducers} from "redux";
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import SongsReducer from './songs_reducer';
import ArtistsReducer from './artists_reducer';
import AlbumsReducer from './albums_reducer';
import ReferentsReducer from './referents_reducer';
import AnnotationsReducer from './annotations_reducer';
import CommentsReducer from './comments_reducer';

export default combineReducers({
  session: SessionReducer,
  songs: SongsReducer,
  errors: ErrorsReducer,
  artists: ArtistsReducer,
  albums: AlbumsReducer,
  referents: ReferentsReducer,
  annotations: AnnotationsReducer,
  comments: CommentsReducer
});

