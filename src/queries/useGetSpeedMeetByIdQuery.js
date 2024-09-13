import meetApi from '@/api/meet';
import queryKey from './queryKeys'
import { useQuery } from '@tanstack/react-query';

const useGetSpeedMeetByIdQuery = (id) => {
  return useQuery({
    queryKey: [queryKey.default.speedMeet(id)],
    queryFn: () => meetApi.getSpeedMeetById(id),
    onError: (error) => {
      alert(error);
    }
  });
}

export default useGetSpeedMeetByIdQuery;