import React, { useEffect, useState } from 'react';
import {connect} from "react-redux";
import { getTicketById } from "../../Actions/StudentTickets";
import {Link} from "react-router-dom";

function EditTicket({ getTicketById, match, editData }) {

    const id = match.params.id;
    useEffect(() => {
        getTicketById(id)
    },[]);

    // console.log(ticket[0].categories[0]);
    console.log(editData);
    return (
        <div className="Container">
            <div className="studentTicket">
                        <div  {...editData.status === "opened" ? {className: "open"} : {className: "resolved"}} >
                            <h2 className="titles ticketTitle">{editData.title}</h2>
                            <h4 className="titles">{editData.categories}</h4>
                            <h4><span className="titles">Students Name - </span>{editData.username}</h4>
                            <p><span className="titles"> Description - </span>{editData.description}</p>
                            <p><span className="titles">What I've Tried - </span>{editData.tried}</p>
                            <p><span className="titles">Status of Ticket - </span>{editData.status}</p>
                            <Link to={`/ticket/${editData.id}`}>Update</Link>
                        </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    getTicketById
};

function mapStateToProps(state) {
    return {
        info: state,
        editData: state.student.edit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTicket);