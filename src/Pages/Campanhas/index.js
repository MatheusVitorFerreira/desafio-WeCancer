import { ContainerWrapper } from '../../Components/Atoms/Container/styles'; 
import CardsCampanha from '../../Components/Molecules/CardsCampanha';
import { SubHeader } from './style';

import useGetPesquisas from '../Campanhas/Hooks/use-get-pesquisas';
import useDeletePesquisa from '../Campanhas/Hooks/use-delete-pesquisa';
import Loading from '../../Components/Molecules/Loading';


function Campanhas() {
  const { data: campanhas, isLoading, isError, error } = useGetPesquisas();
  const deleteMutation = useDeletePesquisa();

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return <Loading></Loading>
  }

  if (isError) {
    return <div>Erro ao carregar campanhas: {error.message}</div>;
  }

  return (
      <ContainerWrapper>
        <div>
          <h1>Equipes de Saúde</h1>
          <SubHeader>
            Plataforma de campanhas e gestão de pesquisas
          </SubHeader>
        </div>
        <CardsCampanha 
          campanhas={campanhas} 
          onDelete={handleDelete} 
          />
      </ContainerWrapper>
  );
}

export default Campanhas;
