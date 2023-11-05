import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AllServices from '../pages/AllServices';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../layouts/Dashboard';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/services.json'),
      },
      {
        path: '/all-services',
        element: <AllServices></AllServices>,
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
