import meetApi from "@/api/meet";
import { useQuery } from "@tanstack/react-query";
import queryKey from "./queryKeys";
import mntnApi from "@/api/mntn";

const useGetSpeedMeetAndMountainQuery = (id) => {
  return useQuery({
    queryKey: [queryKey.default.speedMeet(id)],
    queryFn: async () => {
      const speedMeet = await meetApi.getSpeedMeetById(id);
      const mntn = await mntnApi.getMountainById(speedMeet.mntnid);

      return { speedMeet, mntn };

    },
    onError: (error) => {
      alert(error);
    }
  });
}

export default useGetSpeedMeetAndMountainQuery;