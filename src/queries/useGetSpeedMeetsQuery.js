import meetApi from '@/api/meet';
import queryKey from './queryKeys'
import { useQuery } from '@tanstack/react-query';

const useGetSpeedMeetsQuery = () => {
  return useQuery({
    queryKey: [queryKey.default.speedMeets],
    queryFn: meetApi.getSpeedMeets,
    onError: (error) => {
      alert(error);
    }
  });
}

export default useGetSpeedMeetsQuery