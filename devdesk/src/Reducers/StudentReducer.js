import { POST_STUDENT_LOGIN } from "../Actions/StudentLogin";
import { POST_STUDENT_REGISTRATION } from "../Actions/Registration";
import { GET_STUDENT_TICKETS, PUT_STUDENT_TICKET, SORT_ALL_STUDENT_TICKETS } from "../Actions/StudentTickets";
import { GET_TICKET_BY_ID } from "../Actions/StudentTickets";
import { POST_STUDENT_TICKET } from "../Actions/StudentTickets";
import { GET_ALL_STUDENT_TICKETS } from "../Actions/StudentTickets";
import { POST_ANSWER} from "../Actions/StudentTickets";

const initialState = {
    username: "",
    email: "",
    role: "",
    id: 0,
    tickets: [],
    edit: {},
    allTickets: []
};

export default function StudentReducer( state = initialState, action ) {
    switch (action.type) {
        case POST_STUDENT_LOGIN:
            return {
                ...state,
                username: action.payload.data.username,
                email: action.payload.data.email,
                role: action.payload.data.role || "student",
                id: action.payload.data.userId
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
                tickets: action.payload.data,
            };
        case GET_TICKET_BY_ID:
            return  {
                ...state,
                edit: action.payload.data
            };
        case POST_STUDENT_TICKET:
            return  {
                ...state
            };
        case PUT_STUDENT_TICKET:
            return  {
                ...state,
                edit: {}
            };
        case SORT_ALL_STUDENT_TICKETS:
            return {
                ...state,
                allTickets: action.payload.sorted
            };
        case GET_ALL_STUDENT_TICKETS:
            return {
                ...state,
                // allTickets: action.payload.data
            };
        case POST_ANSWER:
            return {
                ...state
            };
        default:
            return state
    }
}
