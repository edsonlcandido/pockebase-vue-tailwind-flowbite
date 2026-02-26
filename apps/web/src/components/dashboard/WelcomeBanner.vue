<template>
  <!-- Flowbite Application UI – Welcome Hero Banner Block -->
  <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 shadow-xl">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>

    <div class="relative flex items-center justify-between">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
            ✓ Conta ativa
          </span>
        </div>
        <h2 class="text-3xl font-bold text-white mt-2">
          Olá, {{ userName }}! 👋
        </h2>
        <p class="mt-2 text-blue-100 text-base max-w-md">
          Seja bem-vindo de volta ao seu painel de controle. Aqui está um resumo do seu sistema.
        </p>
        <div class="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors shadow"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Novo item
          </button>
          <button
            type="button"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white border border-white/30 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Ver relatórios
          </button>
        </div>
      </div>
      <div class="hidden lg:flex w-28 h-28 bg-white/15 backdrop-blur-sm rounded-full items-center justify-center shrink-0">
        <span class="text-6xl select-none">🎉</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  userName: string
}>()
</script>
