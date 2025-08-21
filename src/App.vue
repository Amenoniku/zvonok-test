<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import WeatherDisplay from './components/WeatherDisplay.vue'
import PopularCities from './components/PopularCities.vue'
import CitySelector from './components/CitySelector.vue'

const selectedCity = ref('Казань')
const cities = ['Казань', 'Москва', 'Новосибирск', 'Краснодар', 'Красноярск', 'Уфа']

const weatherData = {
  current: {
    temperature: 34,
    condition: 'Облачно',
    humidity: 85,
    wind: 1,
    date: 'понедельник, 25 августа',
  },
  hourly: [
    { time: '00:00', period: 'Ночь', temperature: 34, condition: 'Облачно', wind: 1, humidity: 85 },
    {
      time: '03:00',
      period: 'Ночь',
      temperature: 34,
      condition: 'Солнечно',
      wind: 1,
      humidity: 85,
    },
    {
      time: '06:00',
      period: 'Утро',
      temperature: 34,
      condition: 'Ветренно',
      wind: 1,
      humidity: 85,
    },
    { time: '09:00', period: 'Утро', temperature: 34, condition: 'Облачно', wind: 1, humidity: 85 },
    {
      time: '12:00',
      period: 'День',
      temperature: 34,
      condition: 'Дождливо',
      wind: 1,
      humidity: 85,
    },
    { time: '15:00', period: 'День', temperature: 34, condition: 'Облачно', wind: 1, humidity: 85 },
    {
      time: '18:00',
      period: 'Вечер',
      temperature: 34,
      condition: 'Дождливо',
      wind: 1,
      humidity: 85,
    },
    {
      time: '21:00',
      period: 'Вечер',
      temperature: 34,
      condition: 'Облачно',
      wind: 1,
      humidity: 85,
    },
  ],
  popularCities: [
    { name: 'Москва', temperature: 34, condition: 'Облачно', humidity: 80 },
    { name: 'Новосибирск', temperature: 34, condition: 'Солнечно', humidity: 80 },
    { name: 'Краснодар', temperature: 34, condition: 'Ветренно', humidity: 80 },
    { name: 'Красноярск', temperature: 34, condition: 'Ветренно', humidity: 80 },
    { name: 'Тула', temperature: 34, condition: 'Дождливо', humidity: 80 },
  ],
}
</script>

<template>
  <div class="app">
    <Header :selected-city="selectedCity" @update:city="selectedCity = $event" />
    <main class="main-content">
      <WeatherDisplay :weather-data="weatherData" :selected-city="selectedCity" />
      <PopularCities :cities="weatherData.popularCities" />
    </main>
    <CitySelector
      :cities="cities"
      :selected-city="selectedCity"
      @update:city="selectedCity = $event"
    />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--background-gradient);
  color: var(--text-color);
  font-family: var(--font-primary);
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxl);
  padding: var(--spacing-md);
  flex: 1;
}

@media (min-width: 769px) {
  .main-content {
    padding: var(--spacing-xxl) var(--spacing-xxl) 0;
  }
}
</style>
