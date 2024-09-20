import meetApi from "@/api/meet"
import queryKey from "@/queries/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"

const handleCreateAttendee = async (attendee) => {
  await meetApi.createAttendee(attendee);

  const speedMeet = await meetApi.getSpeedMeetById(attendee.speedMeetId);

  await meetApi.editSpeedMeet(attendee.speedMeetId, { attendance: speedMeet.attendance + 1 });

}

const useCreateAttendeeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: handleCreateAttendee,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.default.speedMeet)
    }
  })
}

export default useCreateAttendeeMutation;