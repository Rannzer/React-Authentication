import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function FeedInfo() {

    const location = useLocation()   
    const navigate = useNavigate() 

    const [email,setEmail] = useState(location.state.email)

    async function submit(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:4000/feed",{
                email,name,birthdate,idType,idNum,occupation,gender,mobileNo
            })
            .then(res=>{
                if(res.body==="Done"){
                    alert("Hogya bhai chill maro")
                }
                else if(res.body === "Fault"){
                    alert("Nhi hua yaar")
                }
            })
            .catch(err=>{
                alert("Kuch toh gadbad hai")
            })
        }
        catch(err){
            alert("Abe yaar")
        }
    }

    const [name,setName] = useState("")
    const [birthdate,setBirthdate] = useState("")
    const [idType,setIdType] = useState("")
    const [idNum,setIdNum] = useState("")
    const [occupation,setOccupation] = useState("")
    const [gender,setGender] = useState("")
    const [mobileNo,setMobileNo] = useState("")


  return (
    <>
    <div>FeedInfo</div>
    <h2>{location.state.email}</h2>
    <form action="" method="post">
        <input onChange={(e)=>setName(e.target.value)} placeholder='Name' type="text" name="" id="" />
        <input onChange={(e)=>setBirthdate(e.target.value)} placeholder='BirthDate' type="text" name="" id="" />
        <input onChange={(e)=>setIdType(e.target.value)} placeholder='Id Type' type="text" name="" id="" />
        <input onChange={(e)=>setIdNum(e.target.value)} placeholder='Id Number' type="text" name="" id="" />
        <input onChange={(e)=>setOccupation(e.target.value)} placeholder='Occupation' type="text" name="" id="" />
        <input onChange={(e)=>setGender(e.target.value)} placeholder='Gender' type="text" name="" id="" />
        <input onChange={(e)=>setMobileNo(e.target.value)} placeholder='Mobile No.' type="text" name="" id="" />
    </form>
    <input onClick={submit} type="button" value="Submit" />
    <input onClick={()=>navigate('/user')} type="button" value="Find User" />
    </>
  )
}
