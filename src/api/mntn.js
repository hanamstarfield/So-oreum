import axios from "axios";

const getMountains = async () => {
  const data = (await axios.get(`https://hushed-violet-polo.glitch.me/items`)).data;
  return data;
}

const getMountainById = async (mntnid) => {
  const data = (await axios.get(`https://hushed-violet-polo.glitch.me/items?mntnid=${mntnid}`)).data[0];
  return data;
}

const mntnApi = {
  getMountains,
  getMountainById
}

export default mntnApi;