import { createContext } from "react"
import { useState } from "react"
import axios from "axios"

export const DoctorContext = createContext()
function DoctorProvider({children}) {
    let [newdoctor, setNewdoctor] = useState(null);
    async function deletedata(id){
      try{
        await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
      alert('deleted')
      setNewdoctor(id)
      }catch(err){
        console.log(err)
      }
    }

    async function updatedata(id){
      let updated={
        name:prompt('Enter new name'),
        specialization:prompt('Enter new specialization'),
        age:prompt('Enter new age'),
        gender:prompt('Enter new gender'),
        salary:prompt('Enter new salary'),
      }
      try{
        await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,updated)
      alert('data updated')
      setNewdoctor(updated)
      }catch(err){
        console.log(err)
      }
    }
  return (
    <DoctorContext.Provider value={{newdoctor,setNewdoctor,deletedata,updatedata}}>
        {children}
    </DoctorContext.Provider>
  )
}

export default DoctorProvider