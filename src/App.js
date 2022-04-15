import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Login from './components/Login/Login';
import Lunch from './components/Lunch/Lunch';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
