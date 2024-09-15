import meetApi from "@/api/meet"
import { useQuery } from "@tanstack/react-query"
import queryKey from "./queryKeys"

const useGetAttendees = (speedMeetId) => {
  return useQuery({
    queryKey: queryKey.default.attendee,
    queryFn: () => meetApi.getAttendeesBySpeedMeetId(speedMeetId),
    onError: (error) => {
      alert(error);
    }
  })
}

export default useGetAttendees;