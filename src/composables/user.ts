import { useStore } from "vuex";
import { computed } from "vue";

const useUser = () => {
  const store = useStore();
  
  const user = computed( () => {
    return store.getters.name
  })
  
  const setName = async (name: string) => {
    await store.dispatch("setName", name)
  }
  
  return {
    user,
    setName
  }
}

export default useUser
