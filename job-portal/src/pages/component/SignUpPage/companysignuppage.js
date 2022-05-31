import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from "../../../backend/firebaseHandler";
import { useNavigate } from "react-router-dom";

const SignUpPage = (props) => {

    const navigate = useNavigate();
    const [companyuserInputs,setCompanyuserInputs] = useState({
        companyName:"",
        HRName:"",
        location:"",
        emailId:"",
        password:""

    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setCompanyuserInputs({
            ...companyuserInputs,
            [name]:value
        })
    }

    const handleClick = async () => {
        if(companyuserInputs.companyName == "" || companyuserInputs.HRName == "" || companyuserInputs.location == "" || companyuserInputs.emailId == "" || companyuserInputs.password == ""){
              alert("Enter All fields!")
        }else{
          try {
            await createUserWithEmailAndPassword(firebaseAuth,companyuserInputs.emailId,companyuserInputs.password);
            alert("Account Created!");
            props.fetchDetails(companyuserInputs);
            navigate('/job-post');
          }catch(err) {
              alert(err);
              setCompanyuserInputs({
                companyName:"",
                HRName:"",
                location:"",
                emailId:"",
                password:""
        
            });
          }
        }
    }

    return (
        <div style={{backgroundColor:"lavender",height:"100vh"}}>
            <h1>Create Account</h1>
            <br/>
            <br/>
            <div style={{border:'solid',marginLeft:"250px" , borderRadius:'10px',width:"760px"}} >
                    <TextField sx={{margin:"15px",width:"730px"}} id="outlined-basic" label="Company Name" variant="outlined" name="companyName" value={companyuserInputs.companyName} onChange={handleChange}/>
                    <TextField sx={{margin:"15px",width:"350px"}} id="outlined-basic" label="HR Name" variant="outlined" name="HRName" value={companyuserInputs.HRName} onChange={handleChange}/>
                    <TextField sx={{margin:"15px",width:"350px"}} id="outlined-basic" label="Location" variant="outlined" name="location" value={companyuserInputs.location} onChange={handleChange}/>
                    <TextField sx={{margin:"15px",width:"350px"}} id="outlined-basic" label="Email Id" variant="outlined" type={'email'} name="emailId" value={companyuserInputs.emailId} onChange={handleChange}/>
                    <TextField sx={{margin:"15px",width:"350px"}} id="outlined-basic" label="Password" variant="outlined" type={'password'} name="password" value={companyuserInputs.password} onChange={handleChange}/>
                    <Button sx={{height:"60px",width:"330px",margin:'15px',marginLeft:"200px"}} variant="contained" onClick={handleClick}>Sign Up</Button>
            </div>
        </div>
    )
}


export default SignUpPage;