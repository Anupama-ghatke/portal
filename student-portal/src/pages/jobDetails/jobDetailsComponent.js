import React, { useEffect, useState } from "react";
import './jobDetails.css';
import { Button } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import { firebaseDatabase } from "../../backend/firebaseHandler";


const JobDetails = ({posts}) => {
    
    const nav = useNavigate();
    const [studentDetails,setStudentDetails] = useState([]);
    const [isDisable,setIsDisable] = useState(false);

    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth,(user) => {
          if(user){
              const uid = user.uid;
              const fireref = ref(firebaseDatabase,`Student-List/${uid}`)
              onValue(fireref, (snap) => {
                setStudentDetails(snap.val());
              });
              setIsDisable(!isDisable);
          }
      })
 
    },[])

    const handleClick = () => {
        if(parseFloat(studentDetails.sslcper) < parseFloat(posts.sslccutoff)){
            alert("Your marks is less than Cutoff marks");
            nav('/job-list')
        }else if(parseFloat(studentDetails.pucper) < parseFloat(posts.puccutoff)){
            alert("Your marks is less than Cutoff marks");
            nav('/job-list')

        }
        else if(parseFloat(studentDetails.cgpa) < parseFloat(posts.cgpacutoff)){
            alert("Your marks is less than Cutoff marks");
            nav('/job-list')

        }else {
            alert("Applied SuccesFully!");
            nav('/job-list')

        }
    }

    return (
        <div style={{backgroundColor:"lavender",height:"100%",width:"100%"}} >
            <h1>Company Details</h1>
            <div style={{border:'solid',marginLeft:"200px" , borderRadius:'10px',width:"960px", height:"85vh"}}>
                <div >
                    <h2>Company Name: {posts.companyName}</h2>
                    <h2>HR Name : {posts.HRName}</h2>
                </div>
                <div>
                    <h2>Job Role : {posts.post}</h2>
                    <h2>Package : {posts.package}</h2>
                </div>
                <div>
                    <div>
                        <h2>10th CutOff : {posts.sslccutoff}</h2>
                        <h2>12th CutOff : {posts.puccutoff}</h2>
                    </div>
                    <div>
                        <h2>Sem CutOff : {posts.semcutoff}</h2>
                        <h2>Current CGPA CutOff : {posts.cgpacutoff}</h2>
                     </div>
                </div>
                    <div>
                        <h2>Location : {posts.location}</h2>
                    </div>
                    <Button sx={{margin:"5px 0 5px 150px",width:"300px"}} variant="contained" onClick={handleClick}>Apply For Job</Button> 
            </div>
        </div>
    )
}

export default JobDetails;