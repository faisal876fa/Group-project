import './App.css';
import Record from './Pages/Doctor/Record';
import FindPatient from './Pages/Doctor/FindPatient';
import MyAppointments from './Pages/Doctor/MyAppointments';
import {Routes,Route,Link} from 'react-router-dom';
import Doctor from './Pages/Doctor/Doctor';
import Patient from './Pages/Patient/Patient';
import Admin from './Pages/Admin/Admin';
import Logout from './Pages/Doctor/Logout';
import MedicalRecords from './Pages/Doctor/MedicalRecords';
import Login from './Pages/Login';



function App() {
  return (
    <>
        
        
        <Link to="/"></Link>
        
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Doctor' element={<Doctor/>}/>
          <Route path='/Patient' element={<Patient/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/FindPatient' element={<FindPatient/>}/>
          <Route path='/MyAppointments' element={<MyAppointments/>}/>
          <Route path='/Logout' element={<Logout/>}/>
          <Route path='/MedicalRecords/:NHSnumber' element={<MedicalRecords/>}/>
          <Route path='/Record/:NHSnumber' element={<Record/>}/>
        </Routes> 
        
          
      
    </>
  );
}

export default App;
