<template>
  <!-- Flowbite Marketing UI – Auth Form Card Block -->
  <div class="w-full bg-white rounded-2xl shadow-xl border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-8 sm:p-10">
      <!-- Error Alert -->
      <div
        v-if="error"
        class="flex items-start gap-3 p-4 mb-6 text-sm text-red-800 bg-red-50 rounded-lg border border-red-200 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
        role="alert"
      >
        <svg class="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span>{{ error }}</span>
      </div>

      <form class="space-y-5" @submit.prevent="$emit('submit')">
        <!-- Name field (register only) -->
        <div v-if="isRegistering">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nome Completo
          </label>
          <input
            id="name"
            :value="name"
            type="text"
            autocomplete="name"
            placeholder="João Silva"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            @input="$emit('update:name', ($event.target as HTMLInputElement).value)"
          />
        </div>

        <!-- Email field -->
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            E-mail
          </label>
          <input
            id="email"
            :value="email"
            type="email"
            autocomplete="email"
            required
            placeholder="seu@email.com"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            @input="$emit('update:email', ($event.target as HTMLInputElement).value)"
          />
        </div>

        <!-- Password field -->
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Senha
          </label>
          <input
            id="password"
            :value="password"
            type="password"
            autocomplete="current-password"
            required
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            @input="$emit('update:password', ($event.target as HTMLInputElement).value)"
          />
        </div>

        <!-- Confirm Password field (register only) -->
        <div v-if="isRegistering">
          <label for="passwordConfirm" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirmar Senha
          </label>
          <input
            id="passwordConfirm"
            :value="passwordConfirm"
            type="password"
            autocomplete="new-password"
            required
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            @input="$emit('update:passwordConfirm', ($event.target as HTMLInputElement).value)"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span v-if="loading" class="inline-flex items-center justify-center gap-2">
            <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Carregando...
          </span>
          <span v-else>
            {{ isRegistering ? 'Criar conta' : 'Entrar' }}
          </span>
        </button>
      </form>

      <!-- Divider + Toggle -->
      <div class="mt-6">
        <div class="relative flex items-center">
          <div class="flex-grow border-t border-gray-200 dark:border-gray-600" />
          <span class="mx-4 shrink-0 text-sm text-gray-500 dark:text-gray-400">
            {{ isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?' }}
          </span>
          <div class="flex-grow border-t border-gray-200 dark:border-gray-600" />
        </div>
        <button
          type="button"
          class="mt-4 w-full py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-colors dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
          @click="$emit('toggleMode')"
        >
          {{ isRegistering ? 'Fazer Login' : 'Criar Nova Conta' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isRegistering: boolean
  loading: boolean
  error: string
  name: string
  email: string
  password: string
  passwordConfirm: string
}>()

defineEmits<{
  submit: []
  toggleMode: []
  'update:name': [value: string]
  'update:email': [value: string]
  'update:password': [value: string]
  'update:passwordConfirm': [value: string]
}>()
</script>
