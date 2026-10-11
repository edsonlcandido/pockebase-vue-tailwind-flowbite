<template>
  <!-- Flowbite Application UI – Quick Actions Panel Block -->
  <div class="bg-white rounded-2xl border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div class="px-6 py-5 border-b border-gray-100 dark:border-gray-700">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
        <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Ações Rápidas
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Execute tarefas comuns rapidamente</p>
    </div>
    <div class="p-6">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Action 1: New Item -->
        <button
          type="button"
          class="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-blue-900/20"
        >
          <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors shrink-0 dark:bg-blue-900/40">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div class="text-left min-w-0">
            <p class="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors dark:text-white">Novo Item</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">Criar um novo registro</p>
          </div>
        </button>

        <!-- Action 2: Settings -->
        <button
          type="button"
          class="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:bg-purple-50 hover:border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-purple-900/20"
        >
          <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors shrink-0 dark:bg-purple-900/40">
            <svg class="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="text-left min-w-0">
            <p class="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors dark:text-white">Configurações</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">Ajustar preferências</p>
          </div>
        </button>

        <!-- Action 3: Home -->
        <a
          href="/"
          class="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:bg-green-50 hover:border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-green-900/20"
        >
          <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors shrink-0 dark:bg-green-900/40">
            <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div class="text-left min-w-0">
            <p class="text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors dark:text-white">Ir para Home</p>
            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">Voltar à página inicial</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

