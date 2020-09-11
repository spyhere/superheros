import { superman } from './state';
import { ironMan } from './state';


const CREATE = "CREATE";
const EDIT = "EDIT";
const DELETE = "DELETE";


const createState = (newState) => {
    return {type: CREATE, newState}
}
const editState = (newState) => {
    return {type: EDIT, newState}
}
const deleteState = (marker) => {
    return {type: DELETE, marker}
}


let stateInit = {superheros: [superman, ironMan]};

export const stateReducer = (state = stateInit, action) => {
    let prevState = {...state};
    switch (action.type) {
        case EDIT:
            return prevState;
        case DELETE:
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
        }
    }
}