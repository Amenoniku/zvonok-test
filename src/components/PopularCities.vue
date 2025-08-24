<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { getWeatherIcon } from '@/utils/getWeatherIcon'
defineProps<{
  cities: Array<{
    name: string
    temperature: number
    condition: string
    humidity: number
  }>
}>()
</script>

<template>
  <div class="popular-cities">
    <div class="section-header">
      <h2 class="section-title">Погода в популярных городах</h2>
      <Icon name="question" size="md" />
    </div>

    <div class="cities-grid">
      <div v-for="(city, index) in cities" :key="index" class="city-card">
        <div class="city-info">
          <h3 class="city-name">{{ city.name }}</h3>
          <p class="city-condition">{{ city.condition }}</p>
        </div>
        <div class="city-weather">
          <Icon :name="getWeatherIcon(city.condition)" size="lg" />
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
  gap: var(--spacing-md);
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
  gap: var(--spacing-xl);
  flex-wrap: wrap;
}

.city-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
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
  flex-direction: column;
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
