<script setup lang="ts">
import { ref } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import Icon from '@/components/Icon.vue'

defineProps<{
  selectedCity: string
}>()

const weatherStore = useWeatherStore()

const tabs = [{key:'hourly', label:'Главная'}, {key:'weekly', label:'Погода за неделю'}]
const cities = ['Казань', 'Москва', 'Новосибирск', 'Краснодар', 'Красноярск', 'Уфа']
const isOpen = ref(false)

</script>

<template>
  <header class="header">
    <div class="header-content">
      <nav class="navigation">
        <button v-for="tab in tabs" :key="tab.key" class="nav-button" :class="{ active: weatherStore.activeTab === tab.key }" @click="weatherStore.activeTab = tab.key">{{ tab.label }}</button>
      </nav>

      <div class="city-selector">
        <div class="selected-city" @click="isOpen = !isOpen">
          <span>{{ weatherStore.activeCity }}</span>
          <Icon class="icon" :class="isOpen ? 'icon-open' : 'icon-closed'" name="arrow_down" size="sm" />
        </div>

        <div v-if="isOpen" class="city-dropdown">
          <div v-for="city in cities" :key="city" class="city-option" :class="{ active: city === weatherStore.activeCity }" @click="weatherStore.activeCity = city; isOpen = false">
            {{ city }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: var(--spacing-sm);
  margin: var(--spacing-md);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-xxl);
}

.navigation {
  display: flex;
  background: var(--card-background);
  border-radius: var(--border-radius-sm);
}

.nav-button {
  background: transparent;
  border: none;
  color: var(--text-secondary-color);
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-button:first-of-type {
  border-right: 1px solid var(--card-border);
  border-radius: var(--border-radius-sm) 0 0 var(--border-radius-sm);
}
.nav-button:last-of-type {
  border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
}

.nav-button.active {
  color: var(--text-color);
}

.nav-button:hover {
  background: var(--card-border);
}

.city-selector {
  position: relative;
}

.selected-city {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
  background: var(--selection-color);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  width: 250px;
}

.selected-city .icon {
  transition: transform 0.2s ease;
}

.selected-city .icon-open {
  transform: rotate(0deg);
}

.selected-city .icon-closed {
  transform: rotate(-90deg);
}

.city-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--selection-color);
  border-radius: var(--border-radius-sm);
  margin-top: var(--spacing-xs);
  width: 250px;
  z-index: 100;
}

.city-option {
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  transition: background 0.2s ease;
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
}

.city-option:hover,
.city-option.active {
  background: var(--card-border);
}
</style>
