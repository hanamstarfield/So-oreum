import axios from "axios";

const getSpeedMeets = async () => {
  return (await api.get()).data;
}

const getSpeedMeetById = async (id) => {
  return (await api.get(`?id=${id}`)).data[0];
}


const meetApi = {
  getSpeedMeets,
  getSpeedMeetById
}

const api = axios.create({
  baseURL: "http://localhost:4000/speedMeets",
})


export default meetApi;