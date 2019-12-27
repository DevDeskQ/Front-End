import { POST_STUDENT_LOGIN } from "../Actions/StudentLogin";
import { POST_STUDENT_REGISTRATION } from "../Actions/Registration";
import { GET_STUDENT_TICKETS } from "../Actions/StudentTickets";
import { GET_TICKET_BY_ID } from "../Actions/StudentTickets";

const initialState = {
    username: "",
    email: "",
    role: "",
    id: 0,
    tickets: [],
    edit: {}
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
        case GET_STUDENT_TICKETS:
            return {
                ...state,
                tickets: action.payload.data.filter(arr => {
                    return arr.student_id === state.id;
                })
            };
        case GET_TICKET_BY_ID:
            return  {
                ...state,
                edit: action.payload
            };
        default:
            return state
    }
}