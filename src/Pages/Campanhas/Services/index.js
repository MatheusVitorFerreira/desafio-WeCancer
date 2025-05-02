import axios from 'axios';

export const getPesquisas = async () => {
  const response = await axios.get('http://localhost:5000/pesquisas');
  return response.data;
};

export const deletePesquisa = async (id) => {
  const response = await axios.delete(`http://localhost:5000/pesquisas/${id}`);
  return response.data;
};
