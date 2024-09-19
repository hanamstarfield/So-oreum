import axios from "axios";

const getSpeedMeets = async (pageParam = 1) => {
  console.log('axios pageParam =>> ', pageParam);
  console.log(`url =>>>>   /speedMeets?_page=${pageParam}&_per_page=10`)
  const data = (await api.get(`/speedMeets?_page=${pageParam}&_per_page=10`)).data;

  return data;
}

const getSpeedMeetById = async (id) => {
  return (await api.get(`/speedMeets?id=${id}`)).data[0];
}

const getDummyMountain = async () => {
  const { data } = await axios.get(`http://localhost:4000/dummyMnt`);
  return data;
}

const createSpeedMeet = async (speedMeet) => {
  const createdAt = new Date().toISOString();

  const { data } = await api.post('/speedMeets', { ...speedMeet, createdAt });
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