// import { StrictMode } from 'react'
// import { createRoot } from 
// 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import React from "react";
// import ReactDOM from "react-dom/client";  // ✅ Make sure this is correct


// // createRoot(document.getElementById('root')).render(
//   ReactDOM.createRoot(document.getElementById('root')).render(

//    <React.StrictMode>
//      <App />
//  </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <App />
    </AuthProvider>

  </React.StrictMode>,
)