import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePesquisa } from  '../Services';

const useDeletePesquisa = () => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: deletePesquisa,
      onSuccess: () => {
        queryClient.invalidateQueries(['pesquisas']);
      },
      onError: (error) => {
        console.error('Erro ao excluir campanha:', error);
      }
    });
  };
  
  export default useDeletePesquisa;