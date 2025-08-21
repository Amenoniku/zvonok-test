<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  cities: Array<{
    name: string
    temperature: number
    condition: string
    humidity: number
  }>
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
  <div class="popular-cities">
    <div class="section-header">
      <h2 class="section-title">Погода в популярных городах</h2>
      <div class="info-icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 12V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 6H9.0075" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <div class="cities-grid">
      <div
        v-for="(city, index) in cities"
        :key="index"
        class="city-card"
      >
        <div class="city-info">
          <h3 class="city-name">{{ city.name }}</h3>
          <p class="city-condition">{{ city.condition }}</p>
        </div>
        <div class="city-weather">
          <div class="weather-icon">{{ getWeatherIcon(city.condition) }}</div>
          <div class="temperature">{{ city.temperature }}°</div>
        </div>
        <p class="city-humidity">Влажность: {{ city.humidity }}%</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popular-cities {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.section-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.section-title {
  font-family: var(--font-primary);
  font-size: var(--font-size-xxlarge);
  font-weight: var(--font-weight-medium);
  margin: 0;
}

.info-icon {
  color: var(--text-color);
  cursor: pointer;
}

.cities-grid {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
}

.city-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  background: var(--popular-city-card-background);
  border: 1px solid var(--popular-city-card-border);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-lg);
  width: 242px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.city-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  width: 100%;
}

.city-name {
  font-family: var(--font-primary);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  margin: 0;
}

.city-condition {
  font-family: var(--font-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-regular);
  margin: 0;
}

.city-weather {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.weather-icon {
  font-size: 2rem;
}

.temperature {
  font-family: var(--font-primary);
  font-size: var(--font-size-xxxlarge);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

.city-humidity {
  font-family: var(--font-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  margin: 0;
}
</style>
