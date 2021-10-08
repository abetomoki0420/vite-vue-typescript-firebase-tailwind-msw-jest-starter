<template>
  <Home
    :count="count"
    @countUp="countUp"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useCount from "@/composables/count";
import Home from "@/components/templates/Home.vue";

export default defineComponent({
  components: {
    Home,
  },
  setup() {
    const { count, fetch, countUp} = useCount()

    onMounted( async () => {
      await fetch()
    })

    return {
      count,
      countUp
    }
  }
})

</script>
