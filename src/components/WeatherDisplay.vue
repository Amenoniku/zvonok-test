<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  weatherData: any
  selectedCity: string
}>()

// Weather icons mapping
const getWeatherIcon = (condition: string) => {
  switch (condition) {
    case 'Солнечно':
      return '☀️'
    case 'Облачно':
      return '☁️'
    case 'Дождливо':
      return '🌧️'
    case 'Ветренно':
      return '💨'
    default:
      return '☁️'
  }
}
</script>

<template>
  <div class="weather-display">
    <div class="current-weather">
      <h2 class="city-title">Погода в городе {{ selectedCity }}</h2>
      <p class="date">{{ weatherData.current.date }}</p>

      <div class="weather-main">
        <div class="weather-icon">
          {{ getWeatherIcon(weatherData.current.condition) }}
        </div>
        <div class="temperature">{{ weatherData.current.temperature }}°</div>
        <div class="weather-details">
          <p class="condition">{{ weatherData.current.condition }}</p>
          <p class="humidity">Влажность: {{ weatherData.current.humidity }}%</p>
          <p class="wind">Ветер: {{ weatherData.current.wind }} м/с</p>
        </div>
      </div>
    </div>

    <div class="hourly-forecast">
      <div
        v-for="(hour, index) in weatherData.hourly"
        :key="index"
        class="hour-card"
      >
        <p class="hour-time">{{ hour.time }}</p>
        <p class="hour-period">{{ hour.period }}</p>
        <div class="hour-icon">{{ getWeatherIcon(hour.condition) }}</div>
        <p class="hour-temp">{{ hour.temperature }}°</p>
        <p class="hour-condition">{{ hour.condition }}</p>
        <div class="hour-details">
          <span class="hour-wind">{{ hour.wind }} м/с</span>
          <span class="hour-humidity">{{ hour.humidity }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.weather-display {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxl);
}

.current-weather {
  display: flex;
  flex-direction: column;
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
  gap: var(--spacing-xl);
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

.hourly-forecast {
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding: var(--spacing-md) 0;
}

.hour-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  background: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-md);
  min-width: 120px;
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

.hour-details {
  display: flex;
  gap: var(--spacing-xs);
}

.hour-wind,
.hour-humidity {
  font-family: var(--font-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
}
</style>
