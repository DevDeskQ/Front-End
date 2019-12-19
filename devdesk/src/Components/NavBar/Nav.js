import React from 'react';

function Nav() {

    return (
        <div className="Container Nav">
           <nav className="navBar">
               <button>Home</button>
               <button>Create Ticket</button>
               <button>View All Tickets</button>
               <button>Log Out</button>
           </nav>
        </div>
    )
}

export default Nav;