import axios from "axios";

const getSpeedMeets = async (pageParam = 1) => {
  console.log('pageParam', pageParam);
  const response = await api.get(`/speedMeets?_page=${pageParam}&_limit=10&_sort=createdAt&_order=desc`);

  const data = response.data;
  const totalCount = parseInt(response.headers['x-total-count'], 10);
  const itemsPerPage = 10;
  const lastPage = Math.ceil(totalCount / itemsPerPage);

  data.last = lastPage;

  return data;
}

const getSpeedMeetById = async (id) => {
  return (await api.get(`/speedMeets?id=${id}`)).data[0];
}

const getDummyMountain = async () => {
  const { data } = await axios.get(`https://hushed-violet-polo.glitch.me/dummyMnt`);
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

const getAttendeeByUserId = async (userId) => {
  const { data } = await api.get(`/speedMeetAttendee?userId?=${userId}`);
  return data;
}

const deleteSpeedMeetById = async (id) => {
  try {
    await api.delete(`/speedMeets/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting speed meet:", error);
    return false;
  }
};


const meetApi = {
  getSpeedMeets,
  getSpeedMeetById,
  createSpeedMeet,
  editSpeedMeet,
  getDummyMountain,
  getAttendeesBySpeedMeetId,
  getAttendeeByUserId,
  createAttendee,
  deleteSpeedMeetById,

}

const api = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "https://hushed-violet-polo.glitch.me",
})


export default meetApi;