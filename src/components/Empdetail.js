import React, { useEffect, useState } from 'react'
import './empdetail.css'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { TbUserEdit } from "react-icons/tb";
import { MdAutoDelete } from "react-icons/md";


function Empdetail() {
  const [detail, setDetail] = useState([])

  const Navigate = useNavigate();

  const home = () => {
    Navigate('/')
  }

  const reg = () => {
    Navigate('/Emplogin')
  }
  
  const edit=(empid)=>{
    Navigate('/Editemp/'+empid)
  }

  useEffect(() => {
    getData()
  }, [])
  
  const getData = () => {
    axios.get('http://localhost:4000/findempdata')
    .then((response) => { setDetail(response.data.data); })
    .catch((err) => {
      console.log(err);
    })
  }
  const handledelete = (empid) => {
    axios.post('http://localhost:4000/empdelete/' + empid)
      .then((response) => {
        console.log(response);;
        getData()
      })
      .catch(err => {
        console.log(err);
      })
  }
  


  return (
    <div id='empbg'>

      <Navbar className="bg-danger">
        <Container className='bg-danger'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://th.bing.com/th/id/OIP.qCraXXh3WdQRffddmZuSVgHaFd?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              width="60"
              height="50"
            />
          </Navbar.Brand>

          <Button id='homebt' onClick={home} variant="dark">Home</Button>
          <Button id='regbt' onClick={reg} variant="dark">Register</Button>

        </Container>
      </Navbar>
      <h1 className='emplist'>Employee List</h1>
      <div className='emptable'>

        <table >
          <thead>
            <tr>
              <th>Empname</th>
              <th>Empmail</th>
              <th>Empsalary</th>
              <th>Actions</th>
            </tr>
          </thead>
          {
            detail.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{item.empname}</td>
                  <td>{item.empmail}</td>
                  <td>{item.empsalary}</td>
                  <td>{item._id}</td>
                  <td><button  onClick={(e)=>{edit(item._id)}}><TbUserEdit /></button>{' '}<button onClick={() => { handledelete(item._id) }}><MdAutoDelete /></button></td>
                </tr>
              </tbody>

            ))
          }


        </table>

      </div>

    </div>
  )
}

export default Empdetail
