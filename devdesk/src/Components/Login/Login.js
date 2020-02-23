import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postStudentLogin } from "../../Actions/StudentLogin";
import { Link } from 'react-router-dom';
import  loginImg  from '../../Images/loginImg.jpg';

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
        <div className="Container">
        <form className="loginForm" onSubmit={submitHandler}>
            <h2 className="loginTitle">Login</h2>
            <input className="loginInput" type="text" name="username" value={login.username} placeholder="Username..." onChange={changeHandler} />
            <input className="loginInput" type="password" name="password" value={login.password} placeholder="Password..." onChange={changeHandler} />
            <button className="loginBtn" type="submit">Login</button>
            <h4 className="loginPB">Not a member yet?</h4>
            <Link to="/registration" className="loginBtn logLink" type="submit">Sign Up</Link>
        </form>
            <img className="loginImg" src={loginImg} alt="perfectCode" />
        </div>
    )
}

const mapDispatchToProps = {
    postStudentLogin
};

export default connect(null, mapDispatchToProps)(Login);
