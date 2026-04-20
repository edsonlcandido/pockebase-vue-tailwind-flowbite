<template>
  <!-- Flowbite Application UI – Stat Card Block -->
  <div class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="p-5">
      <div class="flex items-center justify-between mb-3">
        <div
          :class="[
            'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
            iconBg,
          ]"
        >
          <slot name="icon" />
        </div>
        <span
          v-if="trend"
          :class="[
            'inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full',
            trend === 'up' ? 'text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400' : 'text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400',
          ]"
        >
          <svg v-if="trend === 'up'" class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <svg v-else class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          {{ trendLabel }}
        </span>
      </div>
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{{ label }}</p>
      <p class="text-3xl font-bold text-gray-900 dark:text-white">{{ value }}</p>
    </div>
    <div :class="['px-5 py-3 rounded-b-2xl border-t border-gray-100 dark:border-gray-700', footerBg]">
      <p :class="['text-xs font-medium', footerText]">{{ footer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  footer: string
  iconBg: string
  footerBg: string
  footerText: string
  trend?: 'up' | 'down'
  trendLabel?: string
}>()
</script>
