import meetApi from "@/api/meet";
import queryKey from "@/queries/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateSpeedMeetMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (speedMeet) => meetApi.createSpeedMeet(speedMeet),
    onMutate: () => { },
    onSuccess: () => {
      console.log("벙개 추가 성공")
      queryClient.invalidateQueries(queryKey.default.speedMeet)
    }
  })

}

export default useCreateSpeedMeetMutation;