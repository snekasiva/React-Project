import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
  const [name,setName]=useState('')
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,mail,password})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }
  return (

    <Box sx={{ display: 'flex', justifyContent: 'center',marginTop:'20%' }}>
      <form onSubmit={handleSubmit}>
      <Box sx={{ textAlign:'center' }}>
      <Box>
          <TextField label="UserName" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
        </Box>
        <br />
        <Box>
          <TextField label="Mail Id" variant="outlined" onChange={(e)=>setMail(e.target.value)}/>
        </Box>
        <br />
        <Box>
          <TextField label="Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}/>
        </Box>
        <Box>
          <Button  type="submit">Sign Up</Button>
        </Box>
        Already Have an account?
        
      </Box>
      </form>
      <Box>
          <Link to='/home'>LogIn</Link>
        </Box>
    </Box>
  )
}

export default Login