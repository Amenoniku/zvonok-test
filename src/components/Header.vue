<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  selectedCity: string
}>()

const emit = defineEmits<{
  (e: 'update:city', city: string): void
}>()

const cities = ['Казань', 'Москва', 'Новосибирск', 'Краснодар', 'Красноярск', 'Уфа']
const isOpen = ref(false)

const selectCity = (city: string) => {
  emit('update:city', city)
  isOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header-content">
      <nav class="navigation">
        <button class="nav-button active" @click="$emit('update:city', 'Казань')">Главная</button>
        <button class="nav-button" @click="$emit('update:city', 'Казань')">Погода за неделю</button>
      </nav>

      <div class="city-selector">
        <div class="selected-city" @click="isOpen = !isOpen">
          <span>{{ selectedCity }}</span>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 7.5L10.5 12.5L15.5 7.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div v-if="isOpen" class="city-dropdown">
          <div v-for="city in cities" :key="city" class="city-option" @click="selectCity(city)">
            {{ city }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: var(--card-background);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm);
  margin: var(--spacing-md);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation {
  display: flex;
  gap: var(--spacing-md);
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
  border-radius: var(--border-radius-sm);
  transition: all 0.2s ease;
}

.nav-button.active {
  background: var(--card-border);
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
  gap: var(--spacing-sm);
  background: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
}

.city-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius-sm);
  margin-top: var(--spacing-xs);
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.city-option {
  padding: var(--spacing-sm) var(--spacing-lg);
  cursor: pointer;
  transition: background 0.2s ease;
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
}

.city-option:hover {
  background: var(--card-border);
}
</style>
