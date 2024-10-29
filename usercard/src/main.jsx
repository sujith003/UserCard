import React from 'react'
import ReactDom from "react-dom/client"
import './index.css'
import { UserCard } from './UserCard'
// import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/*  <App /> */}
   <UserCard/>
  </React.StrictMode>,
  
)
