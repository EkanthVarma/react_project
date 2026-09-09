import React from 'react'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Doctordetails() {
  let {id} = useParams()
  let [doctor, setDoctor] = React.useState()
  async function getapidata(){
    let response=await axios.get("https://doctorapibackend.onrender.com/doctors")
    let finaldata = response.data.find((val) => id == val.id)
    setDoctor(finaldata)
  }
  // function getapidata(){
  //   let data = [
  //     {
  //       id: 1,
  //       name: "Teja",
  //       age: 26,
  //       gender: "Male",
  //       specialization: "Muscles",
  //       salary: 7000000,
  //     },

  //     {
  //       id: 2,
  //       name: "Sam",
  //       age: 26,
  //       gender: "Male",
  //       specialization: "Bones",
  //       salary: 4000000,
  //     },

  //     {
  //       id: 3,
  //       name: "Anu",
  //       age: 25,
  //       gender: "Female",
  //       specialization: "Heart",
  //       salary: 5000000,
  //     },
      
  //   ];
  //   let finaldata = data.find((val) => id == val.id)
  //   setDoctor(finaldata)
  // }
  useEffect(() => {
    getapidata()
  }, [])
  return (
    <div>
        {doctor && (
            <div>
                <h1>{doctor.id}</h1>
                <h2>Name: {doctor.name}</h2>
                <h2>Age: {doctor.age}</h2>
                <h2>Gender: {doctor.gender}</h2>
                <h2>Specialization: {doctor.specialization}</h2>
                <h2>Salary: {doctor.salary}</h2>
            </div>
        )}
    </div>
  )
}

export default Doctordetails