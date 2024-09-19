import meetApi from '@/api/meet';
import queryKey from './queryKeys'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';


const useGetSpeedMeetsQuery = (pageParam) => {
  console.log('useQuery  pageParam => ', pageParam);
  return useQuery({
    queryKey: [queryKey.default.speedMeets(pageParam)],
    queryFn: () => meetApi.getSpeedMeets(pageParam),
    onError: (error) => {
      alert(error);
    },
    staleTime: 0,
  });
}

export default useGetSpeedMeetsQuery