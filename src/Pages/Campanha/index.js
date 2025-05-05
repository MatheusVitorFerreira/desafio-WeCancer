import { useParams } from 'react-router-dom';
import { useGetPesquisas } from './Hooks/use-get-pesquisas-id';
import { InlineDates, Label, Value } from './styles';
import { ContainerWrapper, Box } from '../../Components/Atoms/Container/styles'; 
import Select from '../../Components/Atoms/Select'; 
import { useState } from 'react';
import Loading from '../../Components/Molecules/Loading'; 

function Campanha() {
  const { id } = useParams();
  const { data: campanha, isLoading, error } = useGetPesquisas({ id });

  const [respostasSelecionadas, setRespostasSelecionadas] = useState({});

  const handleAlternativaChange = (perguntaIndex) => (e) => {
    setRespostasSelecionadas((prev) => ({
      ...prev,
      [perguntaIndex]: e.target.value,
    }));
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Erro ao carregar os dados da campanha.</p>;

  return (
    <ContainerWrapper>
      <h1>Detalhes da pesquisa</h1>

      <Box>
        <h2>Título</h2>
        <p>{campanha.titulo}</p>
        <h2>Descrição</h2>
        <p>{campanha.descricao}</p>
        <InlineDates>
          <div>
            <Label>Data de criação:</Label>
            <Value>{new Date(campanha.dataCriacao).toLocaleDateString('pt-BR')}</Value>
          </div>
          <div>
            <Label>Data de disparo:</Label>
            <Value>{new Date(campanha.dataDisparo).toLocaleDateString('pt-BR')}</Value>
          </div>
          <div>
            <Label>Data da última modificação:</Label>
            <Value>{new Date(campanha.dataUltimaModificacao).toLocaleDateString('pt-BR')}</Value>
          </div>
        </InlineDates>
      </Box>

      {campanha.perguntas?.map((pergunta, index) => (
        <Box key={pergunta.id || index}> 
          <div>
            <Label>{pergunta.pergunta}</Label>
            <Select
              name={`alternativa-${index}`}
              text="Selecione uma alternativa"
              value={respostasSelecionadas[index] || ''}
              handleOnChange={handleAlternativaChange(index)}
              options={pergunta.alternativas}
            />
          </div>
        </Box>
      ))}
    </ContainerWrapper>
  );
}

export default Campanha;
