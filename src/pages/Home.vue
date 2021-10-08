<template>
  <Home
    :count="count"
    @countUp="countUp"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted , computed } from "vue";
import useCount from "@/composables/count";
import Home from "@/components/templates/Home.vue";

export default defineComponent({
  components: {
    Home,
  },
  setup() {
    const countStore = useCount()

    onMounted( async () => {
      await countStore.fetch()
    })

    const count = computed<number>( () => {
      return countStore.count.value
    })

    return {
      count,
      countUp: countStore.countUp,
    }
  }
})

</script>
