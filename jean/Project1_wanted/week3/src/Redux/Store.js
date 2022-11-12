import { createStore } from 'redux';
import { useState } from 'react';

export const ADD = 'ADD';

const init = localStorage.getItem('reduxState').split(',');

function reducer(state = init, action) {
    switch (action.type) {
        case ADD:
            var id = action.id;
            var newState;

            if (state.includes(id)) {
                newState = state.filter(e => e !== id);
            } else {
                newState = [...state, id];
            }
            localStorage.clear();
            localStorage.setItem('reduxState', newState);
            
            return newState;

        default:
            return state;
    }
}

export default createStore(reducer);
