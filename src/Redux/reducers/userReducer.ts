import { Action } from "redux"

interface CustomAction extends Action {
    token: string;
    payload:any
}

const userState = {
    firsrName: "",
    lastName: "",
    userName: "",
    token:""
}

const userReducer = (state = userState, action: CustomAction) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload,
            };
        case 'DELETE_TOKEN_ACTION':
            return {
                ...state,
                token: ""
            }
        // other cases
        default:
            return state;
    }
}

export default userReducer;