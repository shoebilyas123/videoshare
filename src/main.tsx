import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';

import './index.css';
import App from './App.tsx';
import router from '~/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
