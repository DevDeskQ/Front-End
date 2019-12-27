import Axios from "../Utils/Axios";

export const GET_STUDENT_TICKETS = "GET_STUDENT_TICKETS";
export const GET_TICKET_BY_ID = "GET_TICKET_BY_ID";

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

export function getTicketById(id) {

    return dispatch => {
        Axios()
            .get(`tickets/${id}`)
            .then(res => {
                console.log(res.data);
                dispatch({ type: GET_TICKET_BY_ID, payload: {
                            username: res.data.student.username,
                            description: res.data.description,
                            id: res.data.id,
                            status: res.data.status,
                            studentID: res.data.student_id,
                            title: res.data.title,
                            tried: res.data.tried,
                            categories: res.data.categories[0].name
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}