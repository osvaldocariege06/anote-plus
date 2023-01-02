import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// React Modal
import Modal from 'react-modal';
import { api } from './services/api';
Modal.setAppElement('#root');





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
