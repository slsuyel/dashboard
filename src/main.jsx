import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AuthProviders from './providers/AuthProviders';

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router} />
  </AuthProviders>,
)
