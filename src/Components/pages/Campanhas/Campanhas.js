import Container from '../../Atoms/Container';
import Styles from './Campanhas.module.css';
import CardsCampanha from '../../molecules/CardsCampanha';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Campanhas() {
  const [campanhas, setCampanhas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/pesquisas")
      .then((resp) => {
        setCampanhas(resp.data);
      })
      .catch(error => {
        console.error("Erro ao buscar campanhas:", error);
      });
  }, []);

  return (
    <Container customClass="columnStart">
      <div>
        <h1 className={Styles.header}>Campanhas e Pesquisas</h1>
        <p className={Styles.subHeader}>
          Plataforma de campanhas e gestão de pesquisas
        </p>
      </div>
      <CardsCampanha campanhas={campanhas} />
    </Container>
  );
}

export default Campanhas;
