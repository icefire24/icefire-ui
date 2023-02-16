<script lang="ts">
import { defineComponent, computed } from 'vue';
import { iconProps } from './icon';
export default defineComponent({
  name: 'IceIcon',
  props:{    size: {
        type: Number,
    },
    test: {
        type: String,
    },
    color: {
        type: String,
    },} ,
  setup(props) {
    const style = computed(() => {
      if (!props.color && !props.size) return {};
      return {
        ...(props.color ? { color: props.color } : {}),
        ...(props.size ? { fontSize: props.size + 'px' } : {}),
      };
    });
    return { style };
  },
});
</script>
<template>
  <i :style="style" class=""><slot></slot></i>
</template>
