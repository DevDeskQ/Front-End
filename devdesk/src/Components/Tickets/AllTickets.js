import React, { useState, useEffect } from 'react';
import Axios from '../../Utils/Axios';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { sortAllStudentTickets } from "../../Actions/StudentTickets";

function AllTickets({ allTickets, info, sortAllStudentTickets }) {

    const [cat, setCat] = useState(null);
    const [data, setData] = useState({});

    useEffect(() => {
        Axios()
            .get("categories")
            .then(res => {
                setCat(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[allTickets]);

    const arrayHandler = (e) => {
        e.preventDefault();
        let arrID = Number(e.target.value);
        let newArr = cat.filter((item) => {
            if (item.id === arrID) {
                return item
            }
        });
        setData(newArr[0].name.toString());
    };

    const filterHandler = (e) => {
        e.preventDefault();
        sortAllStudentTickets(data);
        setTimeout(() => {
            // window.location.reload()
        },3000)
    };

    console.log(allTickets);
if (allTickets === undefined ) {
    return <h1>Is Loading</h1>
} else if (cat === null) {
    return <h1>Is Loading</h1>
} else {
    return (
        <div className="Container">
            <div>
            <div className="helpBlock">
                <h1>Share your knowledge {info.student.username}</h1>
                <h3 className="slogan">Reveal the path for those lost in code</h3>
            </div>
                <div className="searchBlock">
                <label className="align titles helpTitle">Select a Category to Search</label>
                <select onChange={arrayHandler} className="categories helpCate" >
                    {cat.map((item, index, ) => {
                        return <option name={item.name} value={Number(item.id)}  key={index}>{item.name}</option>
                    })}
                </select>
                    <button type="submit" onClick={filterHandler} className="linkBtn loginBtn helpBtn" >Submit</button>
                </div>
            <div className="studentTicket">
                {allTickets.map((arr, index) => {
                    return (
                        <div key={arr.id} {...arr.status === "opened" ? {className: "open"} : {className: "resolved"}} >
                            <h2 className="titles ticketTitle">{arr.title}</h2>
                            {arr.categories.map((arr => {
                                return  <h4 key={arr.id} className="titles">{arr.name}</h4>
                            }))}
                            <h4><span className="titles">Students Name - </span>{arr.student.username}</h4>
                            <p><span className="titles"> Description - </span>{arr.description}</p>
                            <p><span className="titles">What I've Tried - </span>{arr.tried}</p>
                            <p><span className="titles">Status of Ticket - </span>{arr.status}</p>
                            <Link className="linkBtn loginBtn" to={`/helper/${arr.id}`}>Update</Link>
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    )}
}

function mapStateToProps(state) {
    return {
        allTickets: state.student.allTickets,
        info: state
    }
}

const mapDispatchToProps = {
    sortAllStudentTickets
};



export default connect(mapStateToProps, mapDispatchToProps)(AllTickets);
