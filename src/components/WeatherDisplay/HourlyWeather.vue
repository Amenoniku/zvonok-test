<script setup lang="ts">
import { getWeatherIcon } from '@/utils/getWeatherIcon'
import Icon from '@/components/Icon.vue'
defineProps<{
  weatherData: any[]
}>()
</script>

<template>
<div
  class="hourly-forecast"
  :style="{
    '--rows': weatherData.length,
  }"
>
  <div class="hourly-forecast-row" v-for="(hour, index) in weatherData" :key="index">
    <div class="time-period">
      <p class="hour-time">{{ hour.time }}</p>
      <p class="hour-period">{{ hour.period }}</p>
    </div>
    <p class="hour-temp">{{ hour.temperature }}°</p>
    <Icon :name="getWeatherIcon(hour.condition)" size="lg" />
    <p class="hour-condition">{{ hour.condition }}</p>
    <span class="hour-wind">{{ hour.wind }} м/с</span>
    <span class="hour-humidity">{{ hour.humidity }}%</span>
  </div>
</div>
</template>

<style scoped>
.hourly-forecast {
  display: flex;
  flex-direction: column;
  gap: calc(var(--spacing-xl) / 2);
}

.hourly-forecast-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: var(--spacing-xl);
  padding-bottom: calc(var(--spacing-xl) / 2);
  align-items: center;
  text-align: center;
  border-bottom: 1px solid var(--card-background);
  position: relative;
}

.time-period {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.hour-time,
.hour-period {
  font-family: var(--font-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-regular);
  margin: 0;
}

.hour-icon {
  font-size: 2rem;
}

.hour-temp {
  font-family: var(--font-primary);
  font-size: var(--font-size-xxxlarge);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.hour-condition {
  font-family: var(--font-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-regular);
  margin: 0;
}

.hour-wind,
.hour-humidity {
  font-family: var(--font-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
}
</style>
