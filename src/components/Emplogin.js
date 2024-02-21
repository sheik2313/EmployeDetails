import React, { useState } from 'react'
import './emplogin.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Emplogin() {
    const [empdata, setEmpdata] = useState({
        empname: '',
        empuserid: '',
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
        axios.post('http://localhost:4009/addemploye', empdata)



        console.log(empdata);
        setEmpdata({
            empname: '',
            empuserid: '',
            empsalary: ''
        })
    }
    return (
        <div className='employeebg'>
            <h2 className='head'>Employee detail</h2>
            <div className='outer'>

                <div className='employeeborder'>
                    <h3 id='regi'>Register</h3>
                    <label className='la'>Employee Name</label>
                    <input className='form-control mb-4' name='empname' value={empdata.empname} onChange={change} type='text'></input>
                    <label className='la '>Employee UserId</label>
                    <input className='form-control mb-4' name='empuserid' value={empdata.empuserid} onChange={change} type='number'></input>
                    <label className='la'>Employee Salary</label>
                    <input className='form-control mb-4' name='empsalary' value={empdata.empsalary} onChange={change} type='number'></input>
                    <Button className='btn' onClick={submit} variant="danger">Register</Button>
                    <Link to={"/"}><Button className='btn ' id='bt' variant="danger">Back</Button></Link>
                </div>
            </div>


        </div>
    )
}

export default Emplogin
