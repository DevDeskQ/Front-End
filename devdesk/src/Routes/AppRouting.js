import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import StudentDashboard from "../Components/Dashboard/StudentDashboard";
import Logout from "../Components/Login/Logout";
import EditTicket from "../Components/Tickets/EditTicket";

function AppRouting() {

    return (

        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/logout" component={Logout} />
            <ProtectedRoute exact path="/dashboard" component={StudentDashboard} />
            <ProtectedRoute exact path="/ticket/:id" component={EditTicket} />
        </div>
    )
}

export default AppRouting