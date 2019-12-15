import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import StudentDashboard from "../Components/Dashboard/StudentDashboard";
function AppRouting() {

    return (
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/registration" component={Registration} />
            <ProtectedRoute exact path="/dashboard" component={StudentDashboard} />
        </div>
    )
}

export default AppRouting