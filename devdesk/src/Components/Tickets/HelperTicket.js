import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import {createAnswer, getTicketById } from "../../Actions/StudentTickets";
import Axios from "../../Utils/Axios";

function HelperTicket({ getTicketById, createAnswer, match, editData, history, info }) {

     const id = match.params.id;
    const [newState, setNewState] = useState({
        answer: '',
        ticket_id: id,
        user_id: info.student.id
    });
    const [answers, setAnswer] = useState(null)


    useEffect(() => {
        getTicketById(id);
    },[getTicketById, id]);

    useEffect(() => {
        (async () => {
            Axios()
                .get(`answer/${id}`)
                .then(res => {
                    console.log(res)
                    setAnswer(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        })()
    },[id])


    const saveEdit = (e) => {
        e.preventDefault();
        createAnswer(newState);
        setTimeout(() => {
            history.push("/dashboard")
        }, 300);
    };


    if (editData.categories === undefined || answers === null) {
        return <h1>Is Loading</h1>
    } else {
        return (
            <div className="containerForm">
                <div className="studentTicketForm">
                    <div {...editData.status === "open" ? {className: "open"} : {className: "resolved"}} >
                        <h2 className="titles ticketTitle">{editData.title}</h2>
                        {editData.categories.map((item, index) => {
                            return ( <h4 key={index} className="titles">{item}</h4> )
                        })}
                        <h4><span className="titles">Students Name - </span>{editData.username}</h4>
                        <p><span className="titles"> Description - </span>{editData.description}</p>
                        <p><span className="titles">What I've Tried - </span>{editData.tried}</p>
                        <p><span className="titles">Status of Ticket - </span>{editData.status}</p>

                    </div>
                    </div>
                    <form className="answerForm" onSubmit={saveEdit}>
                        <h3 className="ticketTitle center">Share your Knowledge</h3>
                        <label className="titles ">
                            <textarea className="titleInput editInput answerInput" onChange={e => setNewState({...newState, answer: e.target.value})} placeholder="Words of Wisdom..."  />
                        </label>
                        <button className="loginBtn" type="submit">Submit</button>
                    </form>
                {answers.map(arr => {
                    return (
                        <div className="answerContainer" key={arr.id}>
                             <h4>{arr.username}</h4>
                            <p>{arr.answer}</p>
                        </div>
                    )
                })}
            </div>
        )}
}

const mapDispatchToProps = {
    getTicketById,
    createAnswer
};

function mapStateToProps(state) {
    return {
        info: state,
        editData: state.student.edit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelperTicket);
