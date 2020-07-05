import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentTickets } from "../../Actions/StudentTickets";
import student from '../../Images/student.png'
import { Link } from 'react-router-dom';

function StudentDashboard({ info, id, getStudentTickets, tickets, category }) {

    useEffect( () => {
        (async () => {
          await getStudentTickets(id)
       })()
    },[getStudentTickets, id]);

     let openTicket = tickets.filter(arr => {
        return arr.status === "open"
    });

    let resolvedTicket = tickets.filter(arr => {
        return arr.status === "resolved"
    });

    if ( tickets.categories === null) {
        return <h1>Is Loading....</h1>
    } else {
    return (
        <div className="Container studentContainer">
            <div className="titleBlock">
                <h1>Welcome back {info.student.username}</h1>
                <h3>Dev Desk</h3>
                <h3 className="slogan">Your Path to Perfect Code Harmony</h3>
            </div>
            <div className='studentCard'>
                <img className="studentImg" src={student} alt="student"/>
                <div className="studentInfo">
                    <p><span className="titles">Email - </span>{info.student.email}</p>
                    <p><span className="titles">Role - </span>{info.student.role}</p>
                    <p><span className="titles">Submitted Tickets - </span> {tickets.length}</p>
                    <p><span className="titles">Open Tickets - </span> {openTicket.length}</p>
                    <p><span className="titles">Resolved Tickets - </span> {resolvedTicket.length}</p>
                </div>
            </div>

            <div className="studentTicket">

                {tickets.map((arr, index) => {
                    return (
                        <div key={arr.id} {...arr.status === "open" ? {className: "open"} : {className: "resolved"}} >
                            <h2 className="titles ticketTitle">{arr.title}</h2>
                            {arr.categories.map((arr => {
                               return  <h4 key={Math.random()} className="titles">{arr}</h4>
                            }))}
                            <h4><span className="titles">Students Name - </span>{info.student.username}</h4>
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

const mapDispatchToProps = {
    getStudentTickets
};

function mapStateToProps(state) {
    return {
        info: state,
        id: state.student.id,
        tickets: state.student.tickets
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);

