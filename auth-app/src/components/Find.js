import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate, Link, useLocation} from 'react-router-dom'

export default function Find() {

    const navigate = useNavigate()
    const location = useLocation()

    async function submit(e){
        e.preventDefault()
        try{
                await axios.post("http://localhost:4000/find",{
                email
            })
            .then(res=>{
                if(res.data){
                    const {email,password} = res.data
                    console.log(res.data)
                    setData(email)
                    // setData(res.data)
                    
                }else{
                    setData("Nothing founnd")
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    const [email,setEmail] = useState("")
    const [data,setData] = useState("Search Something")


  return (
    <>
    <div>Find</div>
    <h1>{location.state.email}</h1>
    <form action="POST">
        <input onChange={(e)=>setEmail(e.target.value)} placeholder='email' type="text" name="" id="" />
        <input onClick={submit} type='submit'/>
    </form>
    <h1>{data}</h1>
    <input onClick={()=>navigate("/feed",{state:{email:location.state.email}})} placeholder='' type='submit'/>
    </>
  )
}
