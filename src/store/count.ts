import {　ActionTree, GetterTree, Module, MutationTree　} from "vuex";
import { RootState } from "./index";
import repositories from "@/repositories";
const { countRepository } = repositories;

export interface State {
  count: number
}

const state: State = {
  count: 0
}

const getters: GetterTree<State, RootState>= {
  count(state){
    return state.count
  }
}

const mutations: MutationTree<State> = {
  setCount(state, count){
    state.count = count;
  }
}

const actions: ActionTree<State, RootState> = {
  async fetch( context ) {
    const res = await countRepository.fetch();
  
    if(res){
      const { count } = res.data;
      context.commit("setCount", count)
    }
  },
  async countUp( context ){
    
    const res = await countRepository.post(context.getters.count)
  
    if(res){
      const { count } = res.data;
      context.commit("setCount", count)
    }
  }
}

const countModule: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions
}

export default countModule;
