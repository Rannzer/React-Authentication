import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Find from './components/Find';
import FeedInfo from './components/FeedInfo';
import FindUser from './FindUser';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/find' element={<Find/>}/>
          <Route path='/feed' element={<FeedInfo/>}/>
          <Route path='/user' element={<FindUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
