import axios from 'axios';
import React from 'react';



const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

const useAxios = () => {
    return instance;
};

export default useAxios;