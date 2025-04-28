import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from '../../Atoms/input/Input';

import Container from '../../Atoms/Container';
import Styles from './CampanhaEdit.module.css';
import LinkButton from '../../Atoms/LinkButton';

function CampanhaEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campanha, setCampanha] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/pesquisas/${id}`)
      .then((resp) => {
        setCampanha(resp.data);
      })
      .catch(error => console.error("Erro ao buscar campanha:", error));
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCampanha(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`http://localhost:8080/campanhas/${id}`, campanha)
      .then(() => navigate('/campanhas'))
      .catch(error => console.error("Erro ao atualizar campanha:", error));
  }

  if (!campanha) {
    return <p>Carregando dados da campanha...</p>;
  }

  return (
    <Container customClass="columnStart">
      <h1 className={Styles.header}>Editar Campanha</h1>

      <form onSubmit={handleSubmit} className={Styles.form}>
        <section className={Styles.box}>
          <h2>Informações da Campanha</h2>

          <Input
            type="text"
            name="titulo"
            text="Título"
            placeholder="Digite o título da campanha"
            handleOnChange={handleChange}
            value={campanha.titulo ?? ''}
          />
          <Input
            type="text"
            name="mes"
            text="Mês"
            placeholder="Digite o mês"
            handleOnChange={handleChange}
            value={campanha.mes ?? ''}
          />
          <Input
            type="text"
            name="descricao"
            text="Descrição"
            placeholder="Digite a descrição"
            handleOnChange={handleChange}
            value={campanha.descricao ?? ''}
          />
          <Input
            type="text"
            name="status"
            text="Status"
            placeholder="Ativo/Inativo"
            handleOnChange={handleChange}
            value={campanha.status ?? ''}
          />
        <LinkButton to="/campanhas" text="Atualizar Campanha" />
        </section>
      </form>
    </Container>
  );
}

export default CampanhaEdit;
