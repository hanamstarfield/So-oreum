const sortSpeedMeetList = (speedMeetList) => {
  let sortedData = [];

  if (speedMeetList) {
    sortedData = speedMeetList.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  return { ...speedMeetList, data: sortedData }
}

const speedMeetListService = {
  sortSpeedMeetList,
}

export default speedMeetListService;