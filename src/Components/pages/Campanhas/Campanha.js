import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Campanha() {
  const { id } = useParams(); 
  const [campanha, setCampanha] = useState([""]); 

  useEffect(() => {
    axios.get(`http://localhost:5000/pesquisas/${id}`)
      .then((resp) => {
        setCampanha(resp.data);
      })
      .catch(error => {
        console.error("Erro ao buscar campanha:", error);
      });
  }, [id]);

  return (
    <div>
      <h1>Detalhes de Pesquisa</h1>
      <h2>{campanha.titulo}</h2>
      <p>{campanha.descricao}</p>
    </div>
  );
}

export default Campanha;
