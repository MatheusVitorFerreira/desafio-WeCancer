import axios from 'axios';

export const updateCampanha = (id, data) => {
  return axios.put(`http://localhost:8080/campanhas/${id}`, data);
};
