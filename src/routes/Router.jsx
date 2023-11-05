import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AllServices from '../pages/AllServices';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../layouts/Dashboard';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage';
import ServiceDetails from '../pages/ServiceDetails';
import axios from 'axios';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/services'),
      },
      {
        path: '/all-services',
        element: <AllServices></AllServices>,
      },
      {
        path: '/services/:id',
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
  },
]);
export default Router;
