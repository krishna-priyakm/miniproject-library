import './App.css';
import Home from './Pages/Home';
import AdminDash from './Pages/AdminDash';
import UserDash from './Pages/UserDash';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Addbook from './Components/Addbook';
import Viewbook from './Components/Viewbook';
import Studentlist from './Components/Studentlist';
import Bookinglist from './Components/Bookinglist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/userdb' element={<UserDash/>}/>
        <Route path='/admindb' element={<AdminDash/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/userdash' element={<UserDash/>}/>
        <Route path='/addbook' element={<Addbook/>}/>
        <Route path='/viewbook' element={<Viewbook/>}/>
        <Route path='/studentlist' element={<Studentlist/>}/>
        <Route path='/bookinglist' element={<Bookinglist/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
