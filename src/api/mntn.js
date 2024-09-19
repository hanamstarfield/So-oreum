import axios from "axios";

const getMountains = async () => {
  const data = (await axios.get(`http://localhost:4000/items`)).data;
  return data;
}

const getMountainById = async (mntnid) => {
  const data = (await axios.get(`http://localhost:4000/items?mntnid=${mntnid}`)).data[0];
  return data;
}

const mntnApi = {
  getMountains,
  getMountainById
}

export default mntnApi;