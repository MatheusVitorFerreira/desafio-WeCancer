import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetPesquisas } from '../Campanha/Hooks/use-get-pesquisas-id';
import { useUpdateCampanha } from './Hooks/use-update-campanha';
import { ContainerWrapper, Box  } from '../../Components/Atoms/Container/styles';
import { Form } from './styles';

import Input from '../../Components/Atoms/Input';
import Loading from '../../Components/Molecules/Loading';
import LinkButton from '../../Components/Atoms/LinkButton';
 

function CampanhaEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: campanhaData, isLoading, error } = useGetPesquisas({ id });
  const [campanha, setCampanha] = useState(null);

  useEffect(() => {
    if (campanhaData) setCampanha(campanhaData);
  }, [campanhaData]);

  const { mutate } = useUpdateCampanha({
    onSuccess: () => navigate('/campanhas'),
    onError: (err) => console.error("Erro ao atualizar campanha:", err),
  });

  if (isLoading || !campanha) return <Loading />;
  if (error) return <p>Erro ao carregar os dados da campanha.</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampanha({ ...campanha, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ id, data: campanha });
  };

  return (
      <ContainerWrapper>
        <h1>Editar Campanha</h1>
        <Form onSubmit={handleSubmit}>
          <Box>
            <h2>Informações da Campanha</h2>
            <Input name="titulo" text="Título" value={campanha.titulo} handleOnChange={handleChange} />
            <Input name="mes" text="Mês" value={campanha.mes} handleOnChange={handleChange} />
            <Input name="descricao" text="Descrição" value={campanha.descricao} handleOnChange={handleChange} />
            <Input name="status" text="Status" value={campanha.status} handleOnChange={handleChange} />
          </Box>
            <LinkButton type="submit" to="/campanhas" text="Atualizar Campanha" />
        </Form>
      </ContainerWrapper>
  );
}

export default CampanhaEdit;
