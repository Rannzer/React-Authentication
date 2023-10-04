import axios from 'axios'
import React,{useState} from 'react'

export default function FindUser() {

    const [birthdate,setBirthdate] = useState("")

    async function submit(e){
        e.preventDefault()
        try{
            await axios.post('http://localhost:4000/user',{
               birthdate
           })
           .then(res=>{
            if(res.data){
                console.log(res.data)
            }
            else{
                alert("Nothing Found")
            }
           })

        }
        catch(err){
            alert("Gadbad hai")
        }
    }

  return (
    <>
    <input onChange={(e)=>setBirthdate(e.target.value)} placeholder='Check kro yaar jldi' type="text" />
    <input onClick={submit} type="button" value="Chekc" />
    </>
  )
}
