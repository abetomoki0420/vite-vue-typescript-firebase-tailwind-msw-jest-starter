import httpClient from "@/repositories/httpClient";
import count from "./count"

export default {
  countRepository: count(httpClient)
}
