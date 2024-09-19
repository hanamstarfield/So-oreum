import useGetSpeedMeetAndMountainQuery from "@/queries/useGetSpeedMeetAndMountainQuery";

const splitSpeedMeetResult = (id) => {
  const { data: result } = useGetSpeedMeetAndMountainQuery(id);
  console.log('result', result);
  return result;
}

const speedMeetDetailService = {
  splitSpeedMeetResult,
}

export default speedMeetDetailService