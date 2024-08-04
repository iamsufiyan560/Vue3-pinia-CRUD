<script setup lang="ts">
import { Button } from "@/components/ui/button";
// @ts-ignore
import GlobalLoader from "vue-global-loader/GlobalLoader.vue";
// @ts-ignore
import CircleSpinner from "vue-global-loader/CircleSpinner.vue";
</script>

<template>
  <GlobalLoader>
    <CircleSpinner />
  </GlobalLoader>
  <div>
    <Button>Click me</Button>
  </div>
  <RouterView />
</template>
