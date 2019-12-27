import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import { getTicketById, putStudentTicket } from "../../Actions/StudentTickets";
import {Link} from "react-router-dom";

function EditTicket({ getTicketById, putStudentTicket, match, editData, history }) {

    const id = match.params.id;
    useEffect(() => {
        getTicketById(id)
    },[]);

    const [editState, setEditState] = useState(false);
    const [newState, setNewState] = useState({
        title: editData.title,
        description: editData.description,
        tried: editData.tried,
        status: editData.status
    });

    const edit = tick => {
        setEditState(true);
        setNewState(tick);
    };

    const saveEdit = (e) => {
      e.preventDefault();
      putStudentTicket(editData.id, newState);
      history.push("/dashboard")
    };

    return (
        <div className="Container">
            <div className="studentTicket">
                <div onClick={() => edit(newState)} {...editData.status === "opened" ? {className: "open"} : {className: "resolved"}} >
                    <h2 className="titles ticketTitle">{editData.title}</h2>
                    <h4 className="titles">{editData.categories}</h4>
                    <h4><span className="titles">Students Name - </span>{editData.username}</h4>
                    <p><span className="titles"> Description - </span>{editData.description}</p>
                    <p><span className="titles">What I've Tried - </span>{editData.tried}</p>
                    <p><span className="titles">Status of Ticket - </span>{editData.status}</p>
                    <Link to={`/ticket/${editData.id}`}>Update</Link>
                </div>
            </div>
            {editState && (
                <form onSubmit={saveEdit}>
                    <h3>Update Ticket Information</h3>
                    <label>
                        Title -
                        <input onChange={e => setNewState({...newState, title: e.target.value})} placeholder="Title of Tickets" value={newState.title} />
                    </label>
                    <label>
                        Description -
                        <input onChange={e => setNewState({...newState, description: e.target.value})} placeholder="Description" value={newState.description} />
                    </label>
                    <label>
                        Tried -
                        <input onChange={e => setNewState({...newState, tried: e.target.value})} placeholder="What I've Tried..." value={newState.tried} />
                    </label>
                    <label>
                        Status -
                            <input type="radio" id="opened" name="status" value="opened" onChange={e => setNewState({...newState, status: e.target.value})} />
                                <label htmlFor="opened">Open</label>

                            <input type="radio" id="resolved" name="status" value="resolved" onChange={e => setNewState({...newState, status: e.target.value})} />
                                <label htmlFor="resolved">Resolved</label>

                    </label>
                    <button type="submit">save</button>
                    <button onClick={() => setEditState(false)}>cancel</button>
                </form>
            )}
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(EditTicket);