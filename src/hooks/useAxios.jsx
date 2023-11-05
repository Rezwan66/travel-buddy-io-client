import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
