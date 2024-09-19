import axios from "axios";

const getMountains = async () => {
  const data = (await axios.get(`http://localhost:4000/items`)).data;
  return data;
}


const mntnApi = {
  getMountains
}

export default mntnApi;