import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Launchpad from '../components/Launchpad';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="launchpad" element={<Launchpad />} />
      </Route>
    )
  );
export default router;