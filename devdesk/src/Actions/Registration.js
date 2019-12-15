import Axios from '../Utils/Axios';

export const POST_STUDENT_REGISTRATION = "POST_STUDENT_REGISTRATION";

export function postStudentRegistration(data) {

    return dispatch => {

        Axios()
            .post('auth/register', data)
            .then(res => {
                console.log(res);
                localStorage.setItem("toke", res.data.token);
                dispatch({ type: POST_STUDENT_REGISTRATION, payload: {
                    data: res.data.user
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}