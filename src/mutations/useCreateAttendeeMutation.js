import meetApi from "@/api/meet"
import queryKey from "@/queries/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"

const handleCreateAttendee = async (attendee) => {
  await meetApi.createAttendee(attendee);

  const speedMeet = await meetApi.getSpeedMeetById(attendee.speedMeetId);

  await meetApi.editSpeedMeet(attendee.speedMeetId, { attendance: speedMeet.attendance + 1 });

}

const useCreateAttendeeMutation = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: handleCreateAttendee,
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey.default.speedMeet(id))
    },
    onMutate: async (newSpeedMeet) => {
      await queryClient.cancelQueries({ queryKey: queryKey.default.speedMeet(id) });
      const prevSpeedMeet = queryClient.getQueryData([queryKey.default.speedMeet(id)]);


      queryClient.setQueryData([queryKey.default.speedMeet(id)], (old) => {
        return {
          ...old,
          speedMeet: {
            ...old.speedMeet,
            attendance: old.speedMeet.attendance + 1,
          }
        }
      })

      return { prevSpeedMeet };

    }
  })
}

export default useCreateAttendeeMutation;