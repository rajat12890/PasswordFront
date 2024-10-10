import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from "axios"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './component/User/Signup.jsx';
import Login from './component/User/Login.jsx';
import NotesHome from './component/NotesHome.jsx'
import Notes from './component/Notes.jsx'
axios.defaults.baseURL = 'https://localhost:8015';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* <App /> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/notes" element={<Notes />} />
    </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
