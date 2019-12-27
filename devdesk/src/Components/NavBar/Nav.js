import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Login/Logout';

function Nav() {


    return (
        <div className="Container Nav">
           <nav className="navBar">
               <Link to="/dashboard">Home</Link>
               <Link to="/">Create Ticket</Link>
               <Link to="/">View All Tickets</Link>
               <Link to="/logout">Log Out</Link>

           </nav>
        </div>
    )
}

export default Nav;