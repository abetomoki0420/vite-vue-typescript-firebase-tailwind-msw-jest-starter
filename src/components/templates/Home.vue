<template>
  <h1 class="text-4xl">Home</h1>
  <Counter/>
  <div class="mt-4">
    <div>count API request: {{ count }}</div>
    <BaseButton @click="countUpHandler">Click me to send a request API</BaseButton>
  </div>
  <div class="mt-4">
    <BaseForm/>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs  } from "vue";
import Counter from "@/components/Counter.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseForm from "@/components/BaseForm.vue";


export default defineComponent({
  components: {
    BaseForm,
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
    const { count } = toRefs(props);

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
