import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

const useAxios = () => {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    instance.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('error tracked in the interceptor', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log('logout the user');
          logoutUser()
            .then(() => {
              toast.success('Logged out user!');
              navigate('/login');
            })
            .catch(error => toast.error(error.message));
        }
      }
    );
  }, [logoutUser, navigate]);

  return instance;
};

export default useAxios;
