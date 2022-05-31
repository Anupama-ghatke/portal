import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SignUpPage from './pages/SignUp/SignUpPageComponent';
import JobList from './pages/jobList/jobListComponent';
import JobDetails from './pages/jobDetails/jobDetailsComponent';


function App() {

  const [name,setName] = useState("");
  const [jobposts,setJobposts] = useState([]);

  const sendName = (name) => {
      setName(name)
  }

  const sendPosts = (post) => {
       setJobposts(post)
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage sendName={sendName}/>}/>
        <Route path='/job-list' element={<JobList name={name} sendPosts={sendPosts} />} />
        <Route path='/job-detail' element={<JobDetails posts={jobposts}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;