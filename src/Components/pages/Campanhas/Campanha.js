import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './campanha.module.css';
import Container from '../../Atoms/Container'; 

function Campanha() {
  const { id } = useParams();
  const [campanha, setCampanha] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/pesquisas/${id}`)
      .then((resp) => setCampanha(resp.data))
      .catch(error => console.error("Erro ao buscar campanha:", error));
  }, [id]);

  const limparTitulo = (titulo) => {
    return titulo.replace(' -', '').trim();
  };

  if (!campanha) return <p>Carregando...</p>;

  return (
    <Container customClass="columnStart">
      <h1 className={styles.header}>Detalhes da pesquisa</h1>

      <section className={styles.box}>
        <h2>Título</h2>
        <p>{limparTitulo(campanha.titulo)}</p>
        <h2>Descrição</h2>
        <p>{campanha.descricao}</p>
        <div className={styles.inlineDates}>
          <div>
            <p className={styles.label}>Data de criação:</p>
            <p className={styles.value}>
              {new Date(campanha.dataCriacao).toLocaleDateString('pt-BR')}
            </p>
          </div>
          <div>
            <p className={styles.label}>Data de disparo:</p>
            <p className={styles.value}>
              {new Date(campanha.dataDisparo).toLocaleDateString('pt-BR')}
            </p>
          </div>
          <div>
            <p className={styles.label}>Data da última modificação:</p>
            <p className={styles.value}>
              {new Date(campanha.dataUltimaModificacao).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Campanha;
