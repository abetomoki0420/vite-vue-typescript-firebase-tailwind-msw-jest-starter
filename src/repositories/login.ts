import axios from "axios";
const VITE_API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT

const resource = "login"
export const endpoint = `${VITE_API_ENDPOINT}/${resource}`

const loginRepository = {
  async fetch(){
    return await axios.get(endpoint)
  }
}

export default loginRepository
