<template>
  <router-link to="/">Home</router-link>
  <router-link class="ml-2" to="about">About</router-link>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
