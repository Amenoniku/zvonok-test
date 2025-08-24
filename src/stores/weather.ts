import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const activeTab = ref('hourly')
  const activeCity = ref('Казань')
  const weather = ref({})

  return { weather, activeTab, activeCity }
})
