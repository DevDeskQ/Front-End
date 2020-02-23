import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {


    return (
        <div className="Container Nav">
           <nav className="navBar">
               <Link to="/dashboard">Home</Link>
               <Link to="/createticket">Create Ticket</Link>
               <Link to="/alltickets">View All Tickets</Link>
               <Link to="/logout">Log Out</Link>

           </nav>
        </div>
    )
}

export default Nav;
