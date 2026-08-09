import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './components/app/app';
import router from './router/router';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
