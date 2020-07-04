import Axios from '../Utils/Axios';
import { getStudentTickets } from "./StudentTickets";

export const POST_STUDENT_LOGIN = 'POST_STUDENT_LOGIN';

export function postStudentLogin(creds) {
    return dispatch => {

        Axios()
            .post('auth/login', creds)
            .then(res => {
                console.log(res.data.token);
                localStorage.setItem("token", res.data.token);
                dispatch({ type: POST_STUDENT_LOGIN, payload: {
                    data: res.data.payload
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}
