import { useQuery } from '@tanstack/react-query';
import { getPesquisas } from '../Services';

const useGetPesquisas = () => {
  return useQuery({
    queryKey: ['pesquisas'],
    queryFn: getPesquisas,
  });
};

export default useGetPesquisas;
