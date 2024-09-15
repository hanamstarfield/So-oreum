import axios from "axios";

const getSpeedMeets = async () => {
  return (await api.get('/speedMeets')).data;
}

const getSpeedMeetById = async (id) => {
  return (await api.get(`/speedMeets?id=${id}`)).data[0];
}

const getDummyMountain = async () => {
  const { data } = await axios.get(`http://localhost:4000/dummyMnt`);
  return data;
}

const createSpeedMeet = async (speedMeet) => {
  const { data } = await api.post('/speedMeets', speedMeet);
  return data;
}

const editSpeedMeet = async (id, edit) => {
  await api.patch(`/speedMeets/${id}`, edit);
}

const getAttendeesBySpeedMeetId = async (speedMeetId) => {
  const { data } = await api.get(`/speedMeetAttendee?speedMeetId=${speedMeetId}`);
  return data;
}

const createAttendee = async (attendee) => {
  await api.post(`/speedMeetAttendee`, attendee);
}

// attendance를 ..

const getAttendeeByUserId = async (userId) => {
  const { data } = await api.get(`/speedMeetAttendee?userId?=${userId}`);
  return data;
}


const meetApi = {
  getSpeedMeets,
  getSpeedMeetById,
  createSpeedMeet,
  editSpeedMeet,
  getDummyMountain,
  getAttendeesBySpeedMeetId,
  getAttendeeByUserId,
  createAttendee,

}

const api = axios.create({
  baseURL: "http://localhost:4000",
})


export default meetApi;