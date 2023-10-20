import axios from "axios";

const instance = axios.create({
  baseURL: 'https://backend-production-967c.up.railway.app',
});

// instance.defaults.headers.common["Authorization"] = "Authorization Token";

export default instance;