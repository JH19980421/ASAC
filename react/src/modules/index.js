import { combineReducers } from 'redux';
import bookmarks from "./bookmarks";


/** root reducer */
const rootReducer = combineReducers({
    bookmarks,
});

export default rootReducer;