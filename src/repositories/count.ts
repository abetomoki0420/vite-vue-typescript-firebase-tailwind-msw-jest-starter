import { AxiosInstance } from "axios";

const resource = "/count"

export default (axios: AxiosInstance) => {
  
  return {
    async fetch(){
      return await axios.get(resource)
    },
    async post(count: number) {
      return await axios.post(resource, {
        count
      })
    }
  }
}
