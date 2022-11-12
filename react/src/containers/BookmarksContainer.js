import { connect, useDispatch, useSelector } from "react-redux";

import Bookmarks from "../components/recruiting/Bookmarks";
import { checkBookmark, uncheckBookmark } from "../modules/bookmarks";

const BookmarksContainer = (props) => {
    const bookmarks = useSelector(state => state.bookmarks);
    const dispatch = useDispatch();

    return (
        <Bookmarks
            id={props.id}
            bookmarks={bookmarks}
            checkBookmark={() => dispatch(checkBookmark(props.id))}
            uncheckBookmark={() => dispatch(uncheckBookmark(props.id))}
        />
    );
};

export default BookmarksContainer;














// const mapStateToProps = state => ({
//     bookmarks: state.bookmarks.bookmarks
    
// });
// const mapDispatchToProps = dispatch => ({
//     checkBookmark: () => {
//         dispatch(checkBookmark())
//     },

// });



// export default connect(
//     (state) => ({
//         bookmarks: state.bookmarks.bookmarks
//     }),
//     {
//         checkBookmark,
//         uncheckBookmark
//     },
// )(BookmarksContainer);

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// ) (BookmarksContainer);

