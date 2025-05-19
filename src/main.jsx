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
        element: <h1 className="text-3xl font-bold text-center mt-4">مرحبا بك في التطبيق</h1>,
      },
      {
        path: APP_LIST,
        element: <AppList />,
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
