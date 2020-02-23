import React, { useState, useEffect } from 'react';
import Axios from '../../Utils/Axios';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function AllTickets({ allTickets }) {


    console.log(allTickets);
if (allTickets === null) {
    return <h1>Is Loading</h1>
} else {
    return (
        <div className="Container">
            <h1>Hey you guys</h1>
            <div className="studentTicket">
                {allTickets.map((arr, index) => {
                    return (
                        <div key={arr.id} {...arr.status === "opened" ? {className: "open"} : {className: "resolved"}} >
                            <h2 className="titles ticketTitle">{arr.title}</h2>
                            {arr.categories.map((arr => {
                                return  <h4 key={arr.id} className="titles">{arr.name}</h4>
                            }))}
                            <h4><span className="titles">Students Name - </span>{arr.student.username}</h4>
                            <p><span className="titles"> Description - </span>{arr.description}</p>
                            <p><span className="titles">What I've Tried - </span>{arr.tried}</p>
                            <p><span className="titles">Status of Ticket - </span>{arr.status}</p>
                            <Link className="linkBtn loginBtn" to={`/ticket/${arr.id}`}>Update</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )}
}

function mapStateToProps(state) {
    return {
        allTickets: state.student.alltickets
    }
}



export default connect(mapStateToProps, null)(AllTickets);
