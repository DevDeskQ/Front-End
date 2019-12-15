import { POST_STUDENT_LOGIN } from "../Actions/StudentLogin";
import { POST_STUDENT_REGISTRATION } from "../Actions/Registration";

const initialState = {
    username: "",
    email: "",
    role: "",
    id: 0
};

export default function StudentReducer( state = initialState, action ) {
    switch (action.type) {
        case POST_STUDENT_LOGIN:
            return {
                ...state,
                username: action.payload.data.username,
                email: action.payload.data.email,
                role: action.payload.data.role,
                id: action.payload.data.id
            };
        case POST_STUDENT_REGISTRATION:
            return {
                ...state,
                username: action.payload.data.username,
                email: action.payload.data.email,
                role: action.payload.data.role,
                id: action.payload.data.id
            };
        default:
            return state
    }
}