<template>
  <!-- Flowbite Application UI – Stats Grid Block -->
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <!-- Stat Card 1 -->
    <StatsCard
      label="Total de Usuários"
      value="1"
      footer="↗ Sistema ativo"
      icon-bg="bg-blue-100 dark:bg-blue-900/30"
      footer-bg="bg-blue-50 dark:bg-blue-900/20"
      footer-text="text-blue-700 dark:text-blue-400"
      trend="up"
      trend-label="+100%"
    >
      <template #icon>
        <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </template>
    </StatsCard>

    <!-- Stat Card 2 -->
    <StatsCard
      label="Documentos"
      value="0"
      footer="📄 Pronto para começar"
      icon-bg="bg-green-100 dark:bg-green-900/30"
      footer-bg="bg-green-50 dark:bg-green-900/20"
      footer-text="text-green-700 dark:text-green-400"
    >
      <template #icon>
        <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </template>
    </StatsCard>

    <!-- Stat Card 3 -->
    <StatsCard
      label="Status"
      value="Ativo"
      footer="✓ Tudo funcionando"
      icon-bg="bg-purple-100 dark:bg-purple-900/30"
      footer-bg="bg-purple-50 dark:bg-purple-900/20"
      footer-text="text-purple-700 dark:text-purple-400"
      trend="up"
      trend-label="Online"
    >
      <template #icon>
        <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </template>
    </StatsCard>
  </div>
</template>

<script setup lang="ts">
import StatsCard from './StatsCard.vue'
</script>
