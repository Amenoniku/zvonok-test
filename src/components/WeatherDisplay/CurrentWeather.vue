<script setup lang="ts">
import { getWeatherIcon } from '@/utils/getWeatherIcon'
import Icon from '@/components/Icon.vue'
defineProps<{
  weatherData: any
}>()
</script>

<template>
<div class="current-weather">
  <div class="weather-main">
    <div class="weather-icon">
      <Icon :name="getWeatherIcon(weatherData.condition)" size="xl" />
    </div>
    <div class="temperature">{{ weatherData.temperature }}°</div>
    <div class="weather-details">
      <p class="condition">{{ weatherData.condition }}</p>
      <p class="humidity">Влажность: {{ weatherData.humidity }}%</p>
      <p class="wind">Ветер: {{ weatherData.wind }} м/с</p>
    </div>
  </div>
</div>
</template>

<style scoped>

.current-weather {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.city-title {
  font-family: var(--font-primary);
  font-size: var(--font-size-xxlarge);
  font-weight: var(--font-weight-medium);
  text-align: center;
  margin: 0;
}

.date {
  font-family: var(--font-primary);
  font-size: var(--font-size-xlarge);
  font-weight: var(--font-weight-regular);
  color: var(--text-tertiary-color);
  text-align: center;
  margin: 0;
}

.weather-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xxl);
  margin-top: var(--spacing-lg);
}

.weather-icon {
  font-size: 4rem;
}

.temperature {
  font-family: var(--font-primary);
  font-size: var(--font-size-xxxxlarge);
  font-weight: var(--font-weight-bold);
  line-height: 1;
}

.weather-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.condition {
  font-family: var(--font-primary);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  margin: 0;
}

.humidity,
.wind {
  font-family: var(--font-primary);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  margin: 0;
}

</style>
