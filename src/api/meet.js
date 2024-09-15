import axios from "axios";

const getSpeedMeets = async () => {
  return (await api.get()).data;
}

const getSpeedMeetById = async (id) => {
  return (await api.get(`?id=${id}`)).data[0];
}

const getDummyMountain = async () => {
  const { data } = await axios.get(`http://localhost:4000/dummyMnt`);
  return data;
}


const createSpeedMeet = async (speedMeet) => {
  const { data } = await api.post('/', speedMeet);
  return data;
}

const meetApi = {
  getSpeedMeets,
  getSpeedMeetById,
  createSpeedMeet,
  getDummyMountain,

}

const api = axios.create({
  baseURL: "http://localhost:4000/speedMeets",
})


export default meetApi;