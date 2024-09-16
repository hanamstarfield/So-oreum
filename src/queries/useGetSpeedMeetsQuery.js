import meetApi from '@/api/meet';
import queryKey from './queryKeys'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const useGetSpeedMeetsQuery = (pageParam) => {
  console.log('pageParam', pageParam);
  return useInfiniteQuery({
    queryKey: [queryKey.default.speedMeets],
    queryFn: () => meetApi.getSpeedMeets({ pageParam }),
    // pages : 누적 (무한 스크롤경우)
    // lastPAge: 현재
    getNextPageParam: (lastPage, pages) => {
      console.log('lastPage', lastPage);
      console.log('pages', pages);
      return lastPage.nextPage ?? false;
    },
    onError: (error) => {
      alert(error);
    }
  });
}

export default useGetSpeedMeetsQuery