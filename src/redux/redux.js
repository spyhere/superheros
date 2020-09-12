import { superman } from './state';
import { ironMan } from './state';


const CREATE = "CREATE";
const EDIT = "EDIT";
const DELETE = "DELETE";
const ADD = "ADD";


const createState = (newState) => {
    return {type: CREATE, newState}
}
const editState = (newState) => {
    return {type: EDIT, newState}
}
const deleteState = (marker) => {
    return {type: DELETE, marker}
}
const addState = (newState) => {
    return {type: ADD, newState}
}


let stateInit = {superheros: [superman, ironMan], edit: false, id: null};

export const stateReducer = (state = stateInit, action) => {
    let prevState = {...state};
    switch (action.type) {
        case CREATE:
            prevState.superheros.push(action.newState);
            return prevState;
        case EDIT:
            prevState.superheros[state.id] = action.newState;
            prevState.edit = false;
            return prevState;
        case DELETE:
            prevState.superheros.splice(action.marker, 1)
            return prevState;
        case ADD:
            let keys = Object.keys(action.newState);
            for (let n in keys) {
                prevState[keys[n]] = action.newState[keys[n]]
            }
            return prevState;
        default: 
            return state; 
    }
}

export const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        create: (newState) => {
            dispatch(createState(newState))
        },
        edit: (newState) => {
            dispatch(editState(newState))
        },
        delete: (marker) => {
            dispatch(deleteState(marker))
        },
        add: (newState) => {
            dispatch(addState(newState))
        }
    }
}