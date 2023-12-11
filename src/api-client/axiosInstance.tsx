import axios from "axios";

const instance = axios.create({
  baseURL: 'https://tdb-backend.up.railway.app',
  // baseURL: 'http://localhost:3001',
});

// instance.defaults.headers.common["Authorization"] = "Authorization Token";

export default instance;