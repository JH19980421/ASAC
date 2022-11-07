import { combineReducers } from 'redux';
import { 
    useSelector, 
    useDispatch 
} from 'react-redux';

import { 
    addBookmark, 
    removeBookmark 
} from "./boomark-check-container";

function BookmarkCheckContainer() {
    const isChecked = useSelector(state => state.bookmarkCheck);
    const dispatch = useDispatch();

    const onClickCheck = (checked) => {
        if(checked) {
            dispatch(addBookmark);
        } else {
            dispatch(removeBookmark);
        }
    }

    return (
        <div></div>
    );
}

export default BookmarkCheckContainer;