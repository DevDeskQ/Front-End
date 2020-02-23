import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import { getTicketById, putStudentTicket } from "../../Actions/StudentTickets";
import { Link } from "react-router-dom";
import Axios from "../../Utils/Axios";

function HelperTicket({ getTicketById, putStudentTicket, match, editData, history, info }) {

    const [editState, setEditState] = useState(false);
    const [newState, setNewState] = useState({
        helper_id: info.student.id,
        title: editData.title,
        description: editData.description,
        tried: editData.tried,
        status: editData.status,
    });

    const id = match.params.id;
    useEffect(() => {
        getTicketById(id);
    },[getTicketById, id]);


    const edit = tick => {
        setEditState(true);
        // setNewState(tick);
    };

    const saveEdit = (e) => {
        e.preventDefault();
        putStudentTicket(editData.id, newState);
        setEditState(false);
        setTimeout(() => {
            // window.location.reload();
            history.push("/dashboard")
        }, 300);
    };


    const clickHandler = (e) => {
        e.preventDefault();
        Axios()
            .delete(`tickets/${editData.id}`, {
                data: {
                    id: editData.id
                }
            })
            .then(res => {
                console.log(res);
                history.push("/dashboard")
            })
            .catch(err => {
                console.log(err)
            })
    };

    console.log(newState);
    console.log(editData);
    console.log(newState);

    if (editData.categories === undefined) {
        return <h1>Is Loading</h1>
    } else {
        return (
            <div className="Container">
                <div className="studentTicket">
                    <div onClick={() => edit(newState)} {...editData.status === "opened" ? {className: "open"} : {className: "resolved"}} >
                        <h2 className="titles ticketTitle">{editData.title}</h2>
                        {editData.categories.map((item, index) => {
                            return ( <h4 key={index} className="titles">{item.name}</h4> )
                        })}
                        <h4><span className="titles">Students Name - </span>{editData.username}</h4>
                        <p><span className="titles"> Description - </span>{editData.description}</p>
                        <p><span className="titles">What I've Tried - </span>{editData.tried}</p>
                        <p><span className="titles">Status of Ticket - </span>{editData.status}</p>
                        <Link className="loginBtn linkBtn" to={`/ticket/${editData.id}`}>Update</Link>
                    </div>
                </div>
                {editState && (
                    <form className="editForm" onSubmit={saveEdit}>
                        <h3 className="ticketTitle center">Update Ticket Information</h3>
                        <label className="titles ">
                            Title - <input type="text" className="titleInput editInput" onChange={e => setNewState({...newState, title: e.target.value})} placeholder="Title of Tickets" defaultValue={editData.title} />
                        </label>
                        <label className="titles ">
                            Description - <textarea className="editInput" onChange={e => setNewState({...newState, description: e.target.value})} placeholder="Description" defaultValue={editData.description} />
                        </label>
                        <label className="titles ">
                            Tried - <textarea className="editInput" onChange={e => setNewState({...newState, tried: e.target.value})} placeholder="What I've Tried..." defaultValue={"</br>" + editData.tried}  />
                        </label>

                        <label className="titles center">
                            Status - <input type="radio" id="opened"  name="status" value="opened" onChange={e => setNewState({...newState, status: e.target.value})} />
                            <label htmlFor="opened">Open</label>

                            <input type="radio" id="resolved" name="status" value="resolved" onChange={e => setNewState({...newState, status: e.target.value})} />
                            <label htmlFor="resolved">Resolved</label>

                        </label>
                        <button className="loginBtn" type="submit">save</button>
                        <button className="loginBtn" onClick={() => setEditState(false)}>cancel</button>
                        <button onClick={clickHandler} className="deleteBtn">Delete</button>
                    </form>
                )}
            </div>
        )}
}

const mapDispatchToProps = {
    getTicketById,
    putStudentTicket
};

function mapStateToProps(state) {
    return {
        info: state,
        editData: state.student.edit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelperTicket);
