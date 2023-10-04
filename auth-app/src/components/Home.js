import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <div>
        <h1>Hello {location.state.id} and welcome to the home</h1>
        <button onClick={()=>navigate('/find',{state:{email:location.state.id}})}>Find User</button>
    </div>
  )
}
