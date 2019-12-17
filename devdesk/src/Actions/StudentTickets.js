import Axios from "../Utils/Axios";

export const GET_STUDENT_TICKETS = "GET_STUDENT_TICKETS";

export function getStudentTickets() {

    return dispatch => {

        Axios()
            .get(`tickets`)
            .then(res => {
                dispatch({ type: GET_STUDENT_TICKETS, payload: {
                    data: res.data
                    }});
            })
            .catch(err => {
                console.log(err)
            })
    }
}