<template>
  <h1 class="text-4xl">Home</h1>
  <Counter/>
  <div class="mt-4">
    <div>count API request: {{ count }}</div>
    <BaseButton @click="countUpHandler">Click me to send a request API</BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent  } from "vue";
import Counter from "@/components/Counter.vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  components: {
    BaseButton,
    Counter,
  },
  emits: ["countUp"],
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  setup(props, {emit}) {

    const { count } = props;

    const countUpHandler = () => {
      emit("countUp")
    }

    return {
      count,
      countUpHandler
    }
  }
})

</script>
