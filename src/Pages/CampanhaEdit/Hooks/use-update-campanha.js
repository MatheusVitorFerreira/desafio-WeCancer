import { useMutation } from '@tanstack/react-query';
import { updateCampanha } from '../Service';

export const useUpdateCampanha = () => {
  return useMutation({
    mutationFn: ({ id, data }) => updateCampanha(id, data),
  });
};

export default useUpdateCampanha;
