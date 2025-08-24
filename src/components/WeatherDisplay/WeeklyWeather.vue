<script setup lang="ts">
import { getWeatherIcon } from '@/utils/getWeatherIcon'
import Icon from '@/components/Icon.vue'

defineProps<{
  weatherData: any
}>()
</script>

<template>
<div class="weekly-grid">
  <div v-for="(data, index) in weatherData" :key="index" class="week-card">
    <div class="day">{{ data.day }}</div>
    <Icon :name="getWeatherIcon(data.condition)" size="lg" />
    <div class="temperature">{{ data.temperature }}°</div>
  </div>
</div>
</template>

<style scoped>
.weekly-grid {
  display: flex;
  gap: calc(var(--spacing-xxl));
  flex-wrap: wrap;
}
.week-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing-xs))
}

</style>
