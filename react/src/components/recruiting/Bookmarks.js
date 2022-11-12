import { useDispatch, useSelector } from "react-redux";

import "../../css/recruiting/Bookmarks.css";

import { checkBookmark, uncheckBookmark } from "../../modules/bookmarks";

const Bookmarks = (props) => {
    const bookmarks = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();

    const onClickBookmark = (e) => {
        e.preventDefault();
        
        if(bookmarks.bookmarks.has(props.id)) {
            dispatch(uncheckBookmark(props.id))
        } else {
            dispatch(checkBookmark(props.id))
        }
    }

    return (
        <div onClick={onClickBookmark}>
            <img
                className={ bookmarks.bookmarks.has(props.id)? "bookmark-module-item": null }
                src={ bookmarks.bookmarks.has(props.id)? require('../../assets/images/bookmark.png'): require('../../assets/images/bookmark-outline.png') }
                alt="bookmark"
            />
        </div>
    )
}

export default Bookmarks;