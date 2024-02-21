import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import './emphome.css'
import { BsPersonFillAdd } from "react-icons/bs";

function Emphome() {
  const Navigate=useNavigate();
  const add=()=>{
    Navigate('/emplogin')
  }

  return (
    <div id='embg'>
        
      <h1 id='a'>EMPLOYEE MANAGEMENT</h1>
      
      <Button id='btn' onClick={add} variant="danger"><BsPersonFillAdd />
</Button>
    
    
    </div>
  )
}

export default Emphome
