import { Action } from "redux"

interface CustomAction extends Action {
    token: string;
    payload:any
}

const userState = {
    firstName: "",
    lastName: "",
    userName: "",
    token:""
}

const userReducer = (state = userState, action: CustomAction) => {
    switch (action.type) {
        case 'TOKEN_ACTION':
            return {
                ...state,
                token: action.payload,
            };
        case 'DELETE_USER_ACTION':
            return {
                ...state,
                token: "",
                firstname: "",
                lastName: "",
                userName: ""
            };
            case 'USER_ACTION':
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                userName: action.payload.userName
            }
        // other cases
        default:
            return state;
    }
}

export default userReducer;