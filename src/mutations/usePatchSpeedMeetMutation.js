import meetApi from "@/api/meet";
import queryKey from "@/queries/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePatchSpeedMeetMutation = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...speedMeet }) => meetApi.editSpeedMeet(id, speedMeet),
    onMutate: () => { },
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.default.speedMeet(id))
    }
  })

}

export default usePatchSpeedMeetMutation;