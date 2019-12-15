import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Components/Login/Login";
import StudentDashboard from "../Components/Dashboard/StudentDashboard";
function AppRouting() {

    return (
        <div>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={StudentDashboard} />
        </div>
    )
}

export default AppRouting