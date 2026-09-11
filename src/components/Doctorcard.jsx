import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import {DoctorContext} from './DoctorProvider'
function Doctorcard({name, gender, specialization,id}) {
  let {updatedata,deletedata} = useContext(DoctorContext)
  let navigate = useNavigate()
  return (
    <div className='card'>
        <div><img src="https://www.lospaziobianco.it/wp-content/uploads/2025/11/sadiesink.jpg" alt="Doctor" /></div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button onClick={() => navigate(`/doctordetails/${id}`)}>view details</button>
        <button onClick={() => deletedata(id)}>Delete</button>
        <button onClick={() => updatedata(id)}>Update</button>
    </div>
  )
}

export default Doctorcard