import React, { useEffect, useState } from 'react'
import './emplogin.css'
import Button from 'react-bootstrap/Button';
import { Link ,useParams} from 'react-router-dom';
import axios from 'axios';
function Editemp() {
  const [ename,SetEname]=useState('')
  const[email,setEmail]=useState('')
  const[esalary,setEsalary]=useState('')


    const params=useParams()

    const fetchdata=(req,res)=>{
        // console.log(params.id);
        axios.get('http://localhost:4000/editemp/'+params.id)

        .then((response)=>{
            console.log(response.data.data);
            SetEname(response.data.data.empname)
            setEmail(response.data.data.empmail)
            setEsalary(response.data.data.empsalary)
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    useEffect(()=>{
        fetchdata()

    })




  
    const submit = (e) => {
        e.preventDefault();
        if (ename&& email&& esalary) {
            axios.post('http://localhost:4000/addemploye')
                .then((responce) => {
                    alert(responce.data.msg);
                    // setEmpdata({
                    //     empname:'',
                    //     empmail:'',
                    //     empsalary:''
                    // })

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
            <h2 className='head'>Edit Employee detail</h2>
            <div className='outer'>

                <div className='employeeborder'>
                    <h3 id='regi'>Register</h3>
                    <label className='la'>Employee Name</label>
                    <input className='form-control mb-4' name='empname' value={ename} onChange={(e)=>SetEname(e.target.value)} type='text' ></input>
                    <label className='la '>Employee mail</label>
                    <input className='form-control mb-4' name='empmail' value={email} onChange={(e)=>setEmail(e.target.value)} type='email' required></input>
                    <label className='la'>Employee Salary</label>
                    <input className='form-control mb-4' name='empsalary' value={esalary} onChange={(e)=>setEsalary(e.target.value)} type='number' required></input>
                    <Button className='btn' onClick={submit} variant="danger">Register</Button>
                    <Link to={"/empdetail"}><Button className='btn ' id='bt' variant="danger">Empdetail</Button></Link>
                </div>
            </div>


        </div>
    )
}

export default Editemp
