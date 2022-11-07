/** Action types */
const ADD_BOOKMARK = "ADD_BOOKMARK";
const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";


/** Action functions */
const addBookmark = () => {
    type: ADD_BOOKMARK,
    item
}

const removeBookmark = () => {
    type: REMOVE_BOOKMARK,
    item
}


/** Initial state */
const initialState = {

}


/** Reducer */
export default function bookmarkCheck(state = initialState, action) {
    switch(action.type) {
        case ADD_BOOKMARK:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        case REMOVE_BOOKMARK:
            return {
                ...state,
                list: state.list.splice(action.item, 1)
            };
        default:
            return state;
    }
}