<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-600">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input v-model="form.username" class="form" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input v-model="form.password" class="form" id="password" type="password" placeholder="******************">
    </div>
    <div class="flex items-center justify-end">
      <BaseButton>
        Sign In
      </BaseButton>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  components: { BaseButton },
  setup(){
    const form = reactive({
      username: "",
      password: ""
    })

    return {
      form
    }
  }
})
</script>

<style scoped>
.form {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
}
</style>
