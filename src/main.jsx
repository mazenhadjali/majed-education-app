// src/main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { APP, APP_LIST, HOME, P1, SETUP } from './constants';
import AppList from './pages/AppList';
import SetUp from './pages/SetUp';
import Wrapper1 from './components/wrapper1';
import Home from './pages/Home';
import WrapperP from './components/wrapperp.jsx';
import EXP1 from './pages/p1/index.jsx';

export const routes = [
  {
    path: APP,
    element: <Layout />,
    children: [
      {
        path: SETUP,
        element: <SetUp />,
      },
      {
        path: HOME,
        element: <Wrapper1><Home /></Wrapper1>,
      },
      {
        path: APP_LIST,
        element: <Wrapper1><AppList /></Wrapper1>,
      },
      {
        path: P1,
        element: <WrapperP><EXP1 /></WrapperP>,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
