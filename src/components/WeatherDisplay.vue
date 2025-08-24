<script setup lang="ts">
import CurrentWeather from '@/components/WeatherDisplay/CurrentWeather.vue'
import HourlyWeather from '@/components/WeatherDisplay/HourlyWeather.vue'
import WeeklyWeather from '@/components/WeatherDisplay/WeeklyWeather.vue'
import { useWeatherStore } from '@/stores/weather'
defineProps<{
  weatherData: any
}>()

const weatherStore = useWeatherStore()
</script>

<template>
  <div class="title">
    <h2 class="city-title">Погода в городе {{ weatherStore.activeCity }}</h2>
    <p class="date">{{ weatherData.current.date }}</p>
  </div>
  <div class="weather-display">
    <template v-if="weatherStore.activeTab === 'hourly'">
      <CurrentWeather :weatherData="weatherData.current" />
      <HourlyWeather :weatherData="weatherData.hourly" />
    </template>
    <template v-else-if="weatherStore.activeTab === 'weekly'">
      <WeeklyWeather :weatherData="weatherData.weekly" />
    </template>
  </div>
</template>

<style scoped>
.weather-display {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-xxl);
  flex-wrap: wrap;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.city-title {
  font-size: var(--font-size-xxlarge);
  font-weight: var(--font-weight-medium);
  text-align: center;
  margin: 0;
}

.date {
  font-size: var(--font-size-xlarge);
  font-weight: var(--font-weight-regular);
  color: var(--text-tertiary-color);
  text-align: center;
  margin: 0;
}

</style>
