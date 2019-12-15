import Axios from '../Utils/Axios';

export const POST_STUDENT_LOGIN = 'POST_STUDENT_LOGIN';

export function postStudentLogin(creds) {
    return dispatch => {

        Axios()
            .post('auth/login', creds)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                dispatch({ type: POST_STUDENT_LOGIN, payload: {
                    data: res.data.user
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}