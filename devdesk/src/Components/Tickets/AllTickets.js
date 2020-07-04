import React, { useState, useEffect } from 'react';
import Axios from '../../Utils/Axios';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAllStudentTickets, sortAllStudentTickets} from "../../Actions/StudentTickets";

function AllTickets({ allTickets, info, sortAllStudentTickets, getAllStudentTickets }) {

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

    useEffect(() => {
        (async () => {
            await getAllStudentTickets
        })()
    }, [])

    const arrayHandler = (e) => {
        console.log(e.target.value)
        console.log(cat)
        e.preventDefault();
        let arrID = Number(e.target.value);
        let newArr = []
            cat.map((item) => {
            if (item.id === arrID) {
                newArr.push(item)
            }
        });
        setData(newArr[0].title);
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
                        return <option name={item.title} value={Number(item.id)}  key={index}>{item.title}</option>
                    })}
                </select>
                    <button type="submit" onClick={filterHandler} className="linkBtn loginBtn helpBtn" >Submit</button>
                </div>
            <div className="studentTicket">
                {allTickets.map((arr, index) => {
                    return (
                        <div key={arr.id} {...arr.status === "open" ? {className: "open"} : {className: "resolved"}} >
                            <h2 className="titles ticketTitle">{arr.title}</h2>
                            {arr.categories.map((arr => {
                                return  <h4 key={Math.random()} className="titles">{arr.title}</h4>
                            }))}
                            <h4><span className="titles">Students Name - </span>{arr.username}</h4>
                            <p><span className="titles"> Description - </span>{arr.description}</p>
                            <p><span className="titles">What I've Tried - </span>{arr.tried}</p>
                            <p><span className="titles">Status of Ticket - </span>{arr.status}</p>
                            <Link className="linkBtn loginBtn" to={`/helper/${arr.id}`}>Light The Way...</Link>
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
    sortAllStudentTickets,
    getAllStudentTickets
};



export default connect(mapStateToProps, mapDispatchToProps)(AllTickets);
