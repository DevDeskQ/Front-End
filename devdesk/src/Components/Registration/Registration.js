import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postStudentRegistration } from "../../Actions/Registration";

function Registration({ postStudentRegistration, history }) {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        // role: ""
    });

    const changeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        postStudentRegistration(user);
        setTimeout(() => {
            history.push("/dashboard")
        },2000)};

    return (
        <form onSubmit={submitHandler}>
            <h2>Registration Form</h2>
            <input type="text" name="username" placeholder="Username" value={user.username} onChange={changeHandler} />
            <input type="email" name="email" placeholder="Email" value={user.email} onChange={changeHandler} />
            <input type="password" name="password" placeholder="Password" value={user.password} onChange={changeHandler} />
            {/*<input type="radio" name="role" value="Student" id="student" onChange={changeHandler} />*/}
            {/*<label htmlFor="student">Student</label>*/}
            {/*<input type="radio" name="role" value="Helper" id="helper" onChange={changeHandler} />*/}
            {/*<label htmlFor="helper">Helper</label>*/}
            <button type="submit" >Register</button>
        </form>
    )
}

const mapDispatchToProps = {
    postStudentRegistration
};

export default connect(null, mapDispatchToProps)(Registration);

