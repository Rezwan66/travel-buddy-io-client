import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   console.log(location.pathname);
  //   console.log(user, loading);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
