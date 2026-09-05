import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
// import { useState } from 'react'
//import { useEffect } from 'react'
function App() {
  //let [count, setCount] = useState(0)
  //let [data, newData] = useState('')
  //useEffect(() => {
  //  console.log('api calling')
  //},[data])
  return (
    <div>
      {/* {data}
      <button onClick={() => {
        let a = prompt('enter a name')
        newData(a)}}>newdata</button>
      count is {count}
      <button onClick={() => {setCount(count + 1)}}>add</button> */}
      <Navbar />
      <Section />

      <div className='doctorcontainer'>
        <Doctorcard imglink='./images/deepika.jpg' name='deepika' gender='female' specialization='Cardiologist' />
        <Doctorcard imglink='./images/bharat.jpg' name='bharat' gender='male' specialization='Heart Specialist' />
        <Doctorcard imglink='./images/rohith.jpg' name='rohith' gender='male' specialization='Neurologist' />
        <Doctorcard imglink='./images/babu.jpg' name='babu' gender='male' specialization='Orthopedic' />
        <Doctorcard imglink='./images/sankar.jpg' name='sankar' gender='male' specialization='Heart Specialist' />
        <Doctorcard imglink='./images/deepika.jpg' name='ekanth' gender='male' specialization='Heart Specialist' />
      </div>
      <Addnewdoctor />
    </div>
  )
}

export default App