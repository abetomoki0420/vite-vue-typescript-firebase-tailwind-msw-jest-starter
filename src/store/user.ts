import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "./index";

interface State {
  name: string
}

const state: State = {
  name: "foobar"
}

const getters: GetterTree<State, RootState> = {
  name(state){
    return state.name
  }
}

const mutations: MutationTree<State> = {
  setName(state, name){
    state.name = name
  }
}

const actions: ActionTree<State, RootState> = {
  setName(context, name){
    context.commit("setName", name)
  }
}

const userModule: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions
}

export default userModule
