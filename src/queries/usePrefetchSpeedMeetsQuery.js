import { useQueryClient } from "@tanstack/react-query";
import queryKey from "./queryKeys";
import meetApi from "@/api/meet";

const usePrefetchSpeedMeetsQuery = (page) => {
  const queryClient = useQueryClient();
  return queryClient.prefetchQuery({
    queryKey: [queryKey.default.speedMeets(page)],
    queryFn: () => meetApi.getSpeedMeets(page)
  });
}

export default usePrefetchSpeedMeetsQuery;