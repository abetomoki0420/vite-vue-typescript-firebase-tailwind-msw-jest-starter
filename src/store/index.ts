import { createStore } from "vuex";
import count from "./count";
import user from "./user";

export interface RootState {
  modules: {
    count: typeof count;
    user: typeof user;
  };
}

const store = createStore<RootState>({
  modules: {
    count,
    user,
  },
});

export default store;
