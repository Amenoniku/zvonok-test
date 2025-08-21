<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  cities: string[]
  selectedCity: string
}>()

const emit = defineEmits<{
  (e: 'update:city', city: string): void
}>()

const isOpen = ref(false)

const selectCity = (city: string) => {
  emit('update:city', city)
  isOpen.value = false
}
</script>

<template>
  <div class="city-selector">
    <div class="selector-button" @click="isOpen = !isOpen">
      {{ selectedCity }}
    </div>

    <div v-if="isOpen" class="selector-dropdown">
      <div
        v-for="city in cities"
        :key="city"
        class="selector-option"
        :class="{ active: city === selectedCity }"
        @click="selectCity(city)"
      >
        {{ city }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.city-selector {
  position: relative;
  display: none;
}

@media (max-width: 768px) {
  .city-selector {
    display: block;
    margin: var(--spacing-md);
  }

  .selector-button {
    width: 100%;
    background: var(--inactive-tab);
    color: var(--text-color);
    border: none;
    border-radius: var(--border-radius-sm);
    padding: var(--spacing-md);
    font-family: var(--font-primary);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-regular);
    text-align: center;
    cursor: pointer;
  }

  .selector-dropdown {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background: var(--card-background);
    border: 1px solid var(--card-border);
    border-radius: var(--border-radius-sm);
    margin-bottom: var(--spacing-xs);
    z-index: 100;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .selector-option {
    padding: var(--spacing-md);
    font-family: var(--font-primary);
    font-size: var(--font-size-medium);
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid var(--card-border);
  }

  .selector-option:last-child {
    border-bottom: none;
  }

  .selector-option.active {
    background: var(--active-tab);
  }

  .selector-option:hover {
    background: var(--card-border);
  }
}
</style>
