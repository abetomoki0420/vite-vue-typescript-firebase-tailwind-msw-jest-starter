import { computed } from "vue";
import { useStore } from "vuex";

const useCount = () => {
  const store = useStore();
  
  const count = computed( () => {
    return store.getters.count
  })
  
  const fetch = async () => {
    await store.dispatch("fetch")
  }
  
  const countUp = async () => {
    await store.dispatch("countUp")
  }
  
  return {
    count,
    fetch,
    countUp
  }
}

export default useCount
