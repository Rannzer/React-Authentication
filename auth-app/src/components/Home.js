import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'

export default function Home() {
    const location = useLocation()
  return (
    <div>
        <h1>Hello {location.state.id} and welcome to the home</h1>
    </div>
  )
}
