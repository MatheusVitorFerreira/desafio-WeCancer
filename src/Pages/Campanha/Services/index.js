import axios from 'axios';

export const getPesquisas = ({ id }) => {
    return axios.get(`http://localhost:5000/pesquisas/${id}`);
  };