<template>
  <!-- Flowbite Marketing UI – Auth Brand Block -->
  <div class="text-center">
    <a href="/" class="inline-flex items-center gap-3 mb-6">
      <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <span class="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        MyApp
      </span>
    </a>

    <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
      {{ title }}
    </h1>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {{ subtitle }}
    </p>

    <a
      href="/"
      class="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-purple-600 transition-colors"
    >
      <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Voltar para a landing page
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>
