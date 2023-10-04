import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    async function submit(e){
        e.preventDefault()
        try{
            await axios.post("http://localhost:4000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                    // navigate("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    // alert("User have not signed up")
                    navigate("/")
                }
            })
            .catch(e=>{
                alert("Wrong Details")
                console.log(e)
            })
        }
        catch(e){
            console.log("Something went wrong")
        }

    }

    return (
        <>
            <h1>SignUp</h1>
            <form action="POST">
                <input onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type="text" name="" id="" />
                <input onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type="text" name="" id="" />
                <input onClick={submit} type='submit'/>
            </form>

            <br/>
            <p>OR</p>

            <Link to="/">Login Page</Link>

    </>
    );
}

export default SignUp;
