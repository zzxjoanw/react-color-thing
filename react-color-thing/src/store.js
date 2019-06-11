import { createStore } from 'redux';

export function reducer(state, action) {
    switch(action.type) {
        case "CHANGE_INPUT_COLOR":
            return Object.assign({}, state, { newColor:action.newColor })
        case "CHANGE_MODE":
            return Object.assign({}, state, { mode:action.newMode })
        case "CHANGE_BASE_COLOR":
            return Object.assign({}, state, { newBaseColor:action.newBaseColor })
        case "CHANGE_SCHEME_DATA":
            return Object.assign({}, state, { schemeData:action.schemeData })
        case "CHANGE_H":
            return Object.assign({}, state, { h:action.h })
        case "CHANGE_S":
            return Object.assign({}, state, { s:action.s })
        case "CHANGE_V":
            return Object.assign({}, state, { v:action.v })
        case "CHANGE_MEANING":
            return Object.assign({}, state, { meaning:action.meaning })
        default: return state;
    }
}

export default createStore(reducer, {
    newColor:"012345", mode:"unset", newBaseColor:"", h:"", s:"", v:"", schemeData:{}, meaning:"" 
});
/*
store.subscribe(() => {
    console.log("store changed. new store:", store.getState());
    //
})

export default store*/