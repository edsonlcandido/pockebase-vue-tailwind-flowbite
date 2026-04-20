<template>
  <div id="app" class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()
let cleanupTheme: (() => void) | undefined

onMounted(() => {
  cleanupTheme = themeStore.init()
})
onUnmounted(() => cleanupTheme?.())
</script>
