import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { initFakeApi } from './mirage'; 
import './index.css';
import Home from './Pages/Home';
import RoomDetails from './Pages/RoomDetail';


// don't touch this line
initFakeApi();

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/rooms/:id',
    element: <RoomDetails />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <Home  /> 
    </RouterProvider>
  </React.StrictMode>
);
