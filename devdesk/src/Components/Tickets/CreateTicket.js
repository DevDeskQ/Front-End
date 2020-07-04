import React, {useEffect, useState} from 'react';
import Axios from '../../Utils/Axios';
import { connect } from 'react-redux';
import { postStudentTicket } from "../../Actions/StudentTickets";

const CreateTicket = ({ postStudentTicket, history, id }) => {
    const [cat, setCat] = useState(null);
    const [data, setData] = useState({
        student_id: id,
        title: "",
        description: "",
        tried: "",
        category: [],
        status: "open"
    });

    useEffect(() => {
        Axios()
            .get("categories")
            .then(res => {
                console.log(res.data);
                setCat(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);


    const arrayHandler = e => {
        console.log(e.target.value)
        e.preventDefault();
        data.category.push(Number(e.target.value));
    };

    const changeHandler = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        postStudentTicket(data);
        setTimeout(() => {
            history.push("/dashboard")
        }, 300)
    };

    if (!cat) {
        return <h1>Is Loading</h1>
    }
    return (
        <div className="Container createTicket">
           <form className="createForm" onSubmit={onSubmit}>
               <h3 className="center createTitle">Create New Ticket</h3>
               <label className="titles">Ticket Title<input className="create" type="text" name="title" placeholder="Title" value={data.title} onChange={changeHandler} /></label>
               <label className="titles">Description<input className="create" type="text" name="description" placeholder="Description" value={data.description} onChange={changeHandler} /></label>
               <label className="titles">What have you tried so far <textarea className="createTried" name="tried" placeholder="What I've tried so far" value={data.tried} onChange={changeHandler} /></label>
               <label className="align titles">Select Category</label>
                   <select onChange={arrayHandler} className="categories" multiple >
                       {cat.map((item, index, ) => {
                           return <option name={item.title} value={item.id}  key={index}>{item.title}</option>
                       })}
                   </select>
               <button type="submit" className="loginBtn">Submit</button>
           </form>
        </div>
    )
};

function mapStateToProps(state) {
    return {
        id: state.student.id
    }
}

const mapDispatchToProps = {
   postStudentTicket
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket);
