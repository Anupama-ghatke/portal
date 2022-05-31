
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import { firebaseAuth, firebaseDatabase } from "../../backend/firebaseHandler";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const SignUpPage = (props) => {

    const navigate = useNavigate();
    const [isDisabled,setIsDisable] = useState(false);

    const [studentinputs,setStudentinputs] = useState({
        studentName:"",
        college:"",
        department:"",
        sslcper:"",
        pucper:"",
        semester:"",
        cgpa:"",
        emailID:"",
        password:""
    })
    
    const handleChange = (e) => {
         const {name,value} = e.target;
         setStudentinputs({
             ...studentinputs,
             [name]:value
         })
    }

    const sendData =  () => {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
          if(user){
              const uid = user.uid;
              const fireref = ref(firebaseDatabase,`Student-List/${uid}`)
              await set(fireref,{
                studentName : studentinputs.studentName,
                college:studentinputs.college,
                department:studentinputs.department,
                sslcper:studentinputs.sslcper,
                pucper:studentinputs.pucper,
                semester:studentinputs.semester,
                cgpa:studentinputs.cgpa,
                emailId:studentinputs.emailID
            })
            alert("Account Created!")
            props.sendName(studentinputs.studentName);
            navigate('/job-list')
          }
      })
    }

    const handleClick = async () => {
        if(studentinputs.studentName == "" || studentinputs.college == "" || studentinputs.department == "" || studentinputs.sslcper == "" || studentinputs.pucper == "" || studentinputs.semester == "" || studentinputs.cgpa == "" || studentinputs.emailID == "" || studentinputs.password == "") {
            alert("Enter All Fields")
        }else{
            try {
            await createUserWithEmailAndPassword(firebaseAuth,studentinputs.emailID,studentinputs.password)
            sendData();
            }catch(err){
                alert(err)
            }
        }
    }

    return (
            <div style={{backgroundColor:"lavender",height:"100%",width:"100%"}} >
            <h1>Create Account</h1>
            <div style={{border:'solid',marginLeft:"200px" , borderRadius:'10px',width:"960px", height:"80vh"}}>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"930px"}} id="outlined-basic" label="Name" variant="outlined" value={studentinputs.studentName} name="studentName"  onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="College" variant="outlined" value={studentinputs.college} name="college"  onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="Department" variant="outlined" value={studentinputs.department} name="department"  onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="SSLC Percentage" variant="outlined" type={'number'} value={studentinputs.sslcper} name="sslcper" onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="PUC Percentage" variant="outlined" type={'number'} value={studentinputs.pucper} name="pucper" onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="Semester" variant="outlined" type={'number'} name="semester" value={studentinputs.semester} onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="CGPA" variant="outlined" type={'number'} name="cgpa" value={studentinputs.cgpa} onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="Email ID" variant="outlined" type={'email'} name="emailID" value={studentinputs.emailID} onChange={handleChange}/>
            <TextField sx={{marginRight:"200px", margin:"15px",width:"450px"}} id="outlined-basic" label="Password" variant="outlined" type={'password'} name="password" value={studentinputs.password} onChange={handleChange}/>
            <Button sx={{margin:'300px', height:"60px",width:"360px", marginTop:"20px"}} variant="contained" onClick={handleClick}>Sign Up</Button>
            </div>
            </div>
    )
}

export default SignUpPage