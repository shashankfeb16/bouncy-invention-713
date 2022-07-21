import { Box, Button, Input, InputGroup } from '@chakra-ui/react'
import React from 'react'

const LoginPage = () => {
  return (
    <div style={{border:"1px solid red",width:"550px",margin:"auto",marginTop:"200px",height:"fitContent",borderRadius:"5px"}} >
        <h5 style={{marginLeft:"15px",color:"rgb(119,119,119)"}} >Login/Register to Cricket.com</h5>
        <Box p={4}  >
           
           <InputGroup>
           
           <Input variant='flushed' type='tel' placeholder='+91 Mobile number' />
           </InputGroup>
           <div style={{margin:"auto",width:"250px",marginTop:"50px"}}>
           <Button bg='rgb(119,119,119)' color="white" width='250px' height='35px'>Get OTP</Button>
           </div>
           <span style={{margin:'0 0 0 250px',color:"rgb(119,119,119)"}} >or</span>
           <div style={{marginTop:"30px", marginLeft:"130px"}} >
             <span style={{color:"rgb(119,119,119)"}} >Loggin in from outside India? <a href='#d' style={{color:"red"}} >Click Here</a></span>
           </div>
        </Box>
    </div>
  )
}

export default LoginPage