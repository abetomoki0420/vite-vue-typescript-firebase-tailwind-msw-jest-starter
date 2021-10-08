<template>
  <div>
    <div>Count: {{ count }}</div>
    <BaseButton @click="countUp">Click me</BaseButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  components:{
    BaseButton,
  },
  setup(){
    const count = ref(0);
    const countUp = () => {
      count.value++
    }

    return {
      count,
      countUp
    }
  }
})
</script>
