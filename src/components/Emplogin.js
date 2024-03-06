import React, { useState } from 'react'
import './emplogin.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Emplogin() {
    const [empdata, setEmpdata] = useState({
        empname: '',
        empmail: '',
        empsalary: ''

    })
    const change = (e) => {
        setEmpdata({
            ...empdata,
            [e.target.name]: e.target.value
        })
    }
    const submit = (e) => {
        e.preventDefault();
        if (empdata.empname && empdata.empmail && empdata.empsalary) {
            axios.post('http://localhost:4000/addemploye', empdata)
                .then((responce) => {
                    alert(responce.data.msg);
                    setEmpdata({
                        empname:'',
                        empmail:'',
                        empsalary:''
                    })

                })
                .catch((err) => {
                    console.log(err);;
                })
        } else {
            alert("please enter all values")
        }
    }
    return (
        <div className='employeebg'>
            <h2 className='head'>Employee detail</h2>
            <div className='outer'>

                <div className='employeeborder'>
                    <h3 id='regi'>Register</h3>
                    <label className='la'>Employee Name</label>
                    <input className='form-control mb-4' name='empname' value={empdata.empname} onChange={change} type='text' required></input>
                    <label className='la '>Employee mail</label>
                    <input className='form-control mb-4' name='empmail' value={empdata.empmail} onChange={change} type='email' required></input>
                    <label className='la'>Employee Salary</label>
                    <input className='form-control mb-4' name='empsalary' value={empdata.empsalary} onChange={change} type='number' required></input>
                    <Button className='btn' onClick={submit} variant="danger">Register</Button>
                    <Link to={"/empdetail"}><Button className='btn ' id='bt' variant="danger">Empdetail</Button></Link>
                </div>
            </div>


        </div>
    )
}

export default Emplogin
