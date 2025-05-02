import { useQuery } from '@tanstack/react-query';
import { getPesquisas } from '../Services';


export const useGetPesquisas = (params, options = {}) => {
  return useQuery({
    queryKey: ['GET_PESQUISAS_KEY', params.id],
    queryFn: () => getPesquisas(params).then(res => res.data), 
    enabled: !!params?.id,
    ...options,
  });
};

export default useGetPesquisas;
