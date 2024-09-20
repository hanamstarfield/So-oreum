import meetApi from '@/api/meet';
import queryKey from './queryKeys'
import { useQuery } from '@tanstack/react-query';
import speedMeetListService from '@/services/speedMeetListService';


const useGetSpeedMeetsQuery = (pageParam) => {
  const { data, isPending } = useQuery({
    queryKey: [queryKey.default.speedMeets(pageParam)],
    queryFn: () => meetApi.getSpeedMeets(pageParam),
    onError: (error) => {
      alert(error);
    },
    staleTime: 0,
  });

  const sortList = speedMeetListService.sortSpeedMeetList(data);

  return { data: sortList, isPending };
}

export default useGetSpeedMeetsQuery