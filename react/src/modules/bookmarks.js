/** Action Type */
const CHECK_BOOKMARK = 'bookmarks/CHECK_BOOKMARK';
const UNCHECK_BOOKMARK = 'bookmarks/UNCHECK_BOOKMARK';

 
/** Action Functions */
export const checkBookmark = (id) => ({ 
    type: CHECK_BOOKMARK,
    id: id 
});

export const uncheckBookmark = (id) => ({ 
    type: UNCHECK_BOOKMARK,
    id
});


/** Initial State */
const initialState = {
    bookmarks: new Set()
};


/** Reducer */
function bookmarks(state=initialState, action) {
    switch(action.type) {
        case CHECK_BOOKMARK:
            console.log('as', state, action);
            return {
                ...state,
                bookmarks: state.bookmarks.add(action.id)
            };
        case UNCHECK_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.delete(action.id)
            };
        default:
            return state
    }
}

export default bookmarks;