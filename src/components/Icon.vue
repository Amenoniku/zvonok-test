<template>
  <svg class="icon" :width="iconSize" :height="iconSize" aria-hidden="true">
    <use :xlink:href="`#icn-${name}`" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define props
interface Props {
  name: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

// Define size breakpoints
const sizeMap = {
  xs: 12,
  sm: 21,
  md: 38,
  lg: 60,
  xl: 180,
}

// Compute icon size
const iconSize = computed(() => {
  if (typeof props.size === 'number') {
    return props.size
  }
  return sizeMap[props.size] || sizeMap.md
})
</script>

<style scoped>
.icon {
  fill: currentColor;
  display: inline-block;
  vertical-align: middle;
}
</style>
