import { Button,  TextField } from "@mui/material";
import { push, ref} from "firebase/database";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseDatabase } from "../../../backend/firebaseHandler";

const JobDetails = ({data}) => {

    const navigate = useNavigate();
    const [companyDetails,setCompanyDetails] = useState(data);
    
    const [jobPostDetails,setJobPostDetails] = useState({
        companyName: companyDetails.companyName,
        HRName:companyDetails.HRName,
        location:companyDetails.location,
        post:"",
        package:"",
        sslccutoff:"",
        puccutoff:"",
        semcutoff:"",
        cgpacutoff:""
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setJobPostDetails({
            ...jobPostDetails,
            [name]:value
        })
    }
    
    const handleClick = () => {
      if(jobPostDetails.companyName == "" || jobPostDetails.HRName == "" || jobPostDetails.location == "" || jobPostDetails.post == "" || jobPostDetails.package == "" || jobPostDetails.sslccutoff == "" || jobPostDetails.puccutoff == "" || jobPostDetails.semcutoff == "" || jobPostDetails.cgpacutoff == ""){
            alert("All Fields are Required!")
      }else {

         const sendData = async () => {
         const fireDatabaseRef = ref(firebaseDatabase,"Company-Post");
         await push(fireDatabaseRef,jobPostDetails)
         alert("Job Added Succesfully!")
         navigate('/');

        }
        sendData();
      }

    }

    return (
    <div style={{backgroundColor:"lavender",height:"100%",width:"100%"}}>
        <h2>WelCome {jobPostDetails.companyName}!</h2>
        <h3>POST A JOB</h3>
        <div style={{border:'solid',marginLeft:"200px" , borderRadius:'10px',width:"960px", height:"80vh"}}> 
            <TextField sx={{margin:"15px",width:"930px"}} id="outlined-basic" label="Company Name" variant="outlined" value={jobPostDetails.companyName} disabled/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="HR Name" variant="outlined" name="HRName" value={jobPostDetails.HRName} onChange={handleChange}/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="Location" variant="outlined" name="location" value={jobPostDetails.location} onChange={handleChange}/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="Post" variant="outlined" name="post" value={jobPostDetails.post} onChange={handleChange}/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="Package" variant="outlined" type={'number'} name="package" value={jobPostDetails.package} onChange={handleChange}/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="10th Cutoff" variant="outlined" type={'number'} name="sslccutoff" value={jobPostDetails.sslccutoff} onChange={handleChange}/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="12th Cutoff" variant="outlined" type={'number'} name="puccutoff" value={jobPostDetails.puccutoff} onChange={handleChange}/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="Sem Cutoff" variant="outlined" type={'number'} name="semcutoff" value={jobPostDetails.semcutoff} onChange={handleChange}/>
            <TextField sx={{margin:"15px",width:"450px"}} id="outlined-basic" label="CGPA Cutoff" variant="outlined" type={'number'} name="cgpacutoff" value={jobPostDetails.cgpacutoff} onChange={handleChange}/>
            <Button sx={{height:"60px",width:"460px",margin:"250px" ,marginTop:"10px"}} variant="contained" onClick={handleClick}>Post Job</Button>
        </div>
    </div>
    )
}

export default JobDetails;