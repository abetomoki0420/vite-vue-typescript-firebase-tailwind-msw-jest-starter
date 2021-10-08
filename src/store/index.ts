import { createStore } from "vuex";
import count from "./count"
import user from "./user"

export interface RootState {
  // empty
}

const store = createStore<RootState>({
  modules: {
    count,
    user
  }
})

export default store;
