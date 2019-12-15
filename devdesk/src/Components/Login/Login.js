import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postStudentLogin } from "../../Actions/StudentLogin";

function Login({ postStudentLogin, history }) {

    const [login, setLogin] = useState({
    username: "",
    password: ""
    });

    const changeHandler = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        postStudentLogin(login);
        setTimeout(() => {
            history.push("/dashboard")
        },1000);
    };

    return (
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <input type="text" name="username" value={login.username} placeholder="Username..." onChange={changeHandler} />
            <input type="password" name="password" value={login.password} placeholder="Password..." onChange={changeHandler} />
            <button type="submit">Login</button>
        </form>
    )
}

const mapDispatchToProps = {
    postStudentLogin
};

export default connect(null, mapDispatchToProps)(Login);