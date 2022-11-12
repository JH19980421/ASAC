const BookmarkItem = ({ id, bookmarks }) => {
    return (
        <img 
            src={ bookmarks.bookmarks.has(id)? require('../../assets/images/bookmark.png'): require('../../assets/images/bookmark-outline.png') } 
            alt="bookmark"
        /> 
    )
}


const Bookmarks = ({ id, bookmarks, checkBookmark, uncheckBookmark }) => {
    const onClickBookmark = e => {
        e.preventDefault();
        if(bookmarks.bookmarks.has(id)) {
            uncheckBookmark();
        } else {
            checkBookmark();
        }
    }

    return (
        <div onClick={onClickBookmark}>
            <BookmarkItem
                key={id}
                id={id}
                bookmarks={bookmarks}
            />       
        </div>
    )
}

export default Bookmarks;