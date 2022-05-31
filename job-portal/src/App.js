import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import JobDetails from './pages/component/JobDetails/JobPostComponent';
import SignUpPage from './pages/component/SignUpPage/companysignuppage';

function App() {
  const [details,setDetails] = useState({})

  const fetchDetails = (companyuserInputs) => {
     setDetails(companyuserInputs)
  }

  return (

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUpPage fetchDetails={fetchDetails} />} />
        <Route path='/job-post' element={<JobDetails data={details}/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;