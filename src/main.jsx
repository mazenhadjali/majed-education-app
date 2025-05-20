// src/main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { APP, APP_LIST, HOME, P1, P2, P3, P4, P5, P6, P7, SETUP } from './constants';
import AppList from './pages/AppList';
import SetUp from './pages/SetUp';
import Wrapper1 from './components/wrapper1';
import Home from './pages/Home';
import WrapperP from './components/wrapperp.jsx';
import EXP1 from './pages/p1/index.jsx';
import EXP2 from './pages/p2/index.jsx';
import EXP4 from './pages/p4/index.jsx';
import EXP3 from './pages/p3/index.jsx';
import EXP5 from './pages/p5/index.jsx';
import EXP6 from './pages/p6/index.jsx';
import EXP7 from './pages/p7/index.jsx';

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
      {
        path: P2,
        element: <WrapperP><EXP2 /></WrapperP>,
      },
      {
        path: P3,
        element: <WrapperP><EXP3 /></WrapperP>,
      },
      {
        path: P4,
        element: <WrapperP><EXP4 /></WrapperP>,
      },
      {
        path: P5,
        element: <WrapperP><EXP5 /></WrapperP>,
      },
      {
        path: P6,
        element: <WrapperP><EXP6 /></WrapperP>,
      },
      {
        path: P7,
        element: <WrapperP><EXP7 /></WrapperP>,
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
