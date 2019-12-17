import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentTickets } from "../../Actions/StudentTickets";

function StudentDashboard({ info, id, getStudentTickets, tickets, category }) {

    useEffect(() => {
        getStudentTickets();
    },[getStudentTickets]);


    return (
        <div>
            <div>
                <h3>Welcome Back {info.student.username}</h3>
                <p>Email - {info.student.email}</p>
                <p>Role - {info.student.role}</p>
            </div>

            <div>
                <h3>My Open Tickets</h3>
                {tickets.map(arr => {
                    return (
                        <div key={arr.id}>
                        <h4>{arr.title}</h4>
                        <h4>{tickets[0].categories[0].name}</h4>
                        <h4>Students Name - {arr.student.username}</h4>
                        <p>Description - {arr.description}</p>
                        <p>What I've Tried - {arr.tried}</p>
                        <p>Status of Ticket - {arr.status}</p>
                        </div>
                    )})}
            </div>
        </div>
    )
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

