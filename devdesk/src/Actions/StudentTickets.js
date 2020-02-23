import Axios from "../Utils/Axios";

export const GET_STUDENT_TICKETS = "GET_STUDENT_TICKETS";
export const GET_TICKET_BY_ID = "GET_TICKET_BY_ID";
export const PUT_STUDENT_TICKET = "PUT_STUDENT_TICKET";
export const POST_STUDENT_TICKET = "POST_STUDENT_TICKET";
export const SORT_ALL_STUDENT_TICKETS = "SORT_ALL_STUDENT_TICKETS";

export function getStudentTickets() {

    return dispatch => {

        Axios()
            .get(`tickets`)
            .then(res => {
                console.log(res)
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
                console.log(res.data.categories);
                dispatch({ type: GET_TICKET_BY_ID, payload: {
                            username: res.data.student.username,
                            description: res.data.description,
                            id: res.data.id,
                            status: res.data.status,
                            studentID: res.data.student_id,
                            title: res.data.title,
                            tried: res.data.tried,
                            categories: res.data.categories
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function putStudentTicket(id, data) {

    return dispatch => {

        Axios()
            .put(`tickets/${id}`, data)
            .then(res => {
                console.log(data);
                console.log(res.data);
                dispatch({ type: PUT_STUDENT_TICKET })
            })
                .catch(err => {
                    console.log(err)
                })
    }}

export function postStudentTicket(data) {

    return dispatch => {

        Axios()
            .post(`tickets`, data)
            .then(res => {
                console.log(res);
                dispatch({ type: POST_STUDENT_TICKET });
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

export function sortAllStudentTickets(data) {

    return dispatch => {
        Axios()
            .get("tickets")
            .then(res => {
                console.log(data);
                console.log(res.data[0].categories[0].name);
                let sorted = [];
                   for (let i = 0; i < res.data.length; i ++) {
                       res.data[i].categories.map(arr => {
                           if (arr.name === data) {
                               sorted.push(res.data[i]);
                               console.log(sorted)
                           }
                           return sorted
                       });
                }
                dispatch({ type: SORT_ALL_STUDENT_TICKETS, payload: { sorted } })
            })
            .catch(err => {
                console.log(err)
            });
    }
}

