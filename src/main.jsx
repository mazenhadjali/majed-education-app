// src/main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import { APP_LIST, HOME, SETUP } from './constants';
import AppList from './pages/AppList';
import SetUp from './pages/SetUp';
import Wrapper1 from './components/wrapper1';
import Home from './pages/Home';

export const routes = [
  {
    path: '/',
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
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
