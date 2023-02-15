<script lang="ts" setup>
import { defineComponent, defineProps } from "vue";
defineProps({
  color: {
    type: String,
    default: "",
  },
  size: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <div>testhello</div>
  <div>{{ color }}</div>
</template>
<style scoped lang="scss"></style>
