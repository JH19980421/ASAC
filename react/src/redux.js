import { createStore } from 'redux';


/** Store */
const store = createStore(reducer);


/** Subscribe */
store.subscribe(() => console.log(store.getState()));


/** Dispatch */
store.dispatch({ type: ADD_BOOKMARK });
store.dispatch({ type: REMOVE_BOOKMARK });