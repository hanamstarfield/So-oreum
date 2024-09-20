import meetApi from "@/api/meet";
import queryKey from "@/queries/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteSpeedMeetMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => meetApi.deleteSpeedMeetById(id),
    onMutate: () => { },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.default.speedMeet(1))
    }
  })

}

export default useDeleteSpeedMeetMutation;