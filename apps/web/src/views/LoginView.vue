<template>
  <!-- Flowbite Marketing UI – Authentication Page -->
  <div class="min-h-screen flex bg-gray-50 dark:bg-gray-900">
    <!-- Left panel – branding / illustration (hidden on mobile) -->
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex-col justify-between p-12">
      <div>
        <div class="flex items-center gap-3 mb-12">
          <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-2xl font-extrabold text-white">MyApp</span>
        </div>
        <h1 class="text-4xl font-bold text-white mb-4 leading-tight">
          A plataforma mais simples para o seu negócio
        </h1>
        <p class="text-blue-100 text-lg leading-relaxed">
          Gerencie seus dados, usuários e conteúdo com facilidade usando PocketBase + Vue 3.
        </p>
      </div>

      <!-- Feature list -->
      <ul class="space-y-4">
        <li v-for="feature in features" :key="feature" class="flex items-center gap-3 text-white">
          <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span class="text-sm font-medium">{{ feature }}</span>
        </li>
      </ul>
    </div>

    <!-- Right panel – form -->
    <div class="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
      <div class="w-full max-w-md space-y-6">
        <AuthBrand
          :title="isRegistering ? 'Criar nova conta' : 'Bem-vindo de volta'"
          :subtitle="isRegistering ? 'Preencha os dados para criar sua conta' : 'Entre com suas credenciais para continuar'"
        />

        <AuthFormCard
          :is-registering="isRegistering"
          :loading="loading"
          :error="error"
          :name="formData.name"
          :email="formData.email"
          :password="formData.password"
          :password-confirm="formData.passwordConfirm"
          @submit="handleSubmit"
          @toggle-mode="toggleMode"
          @update:name="formData.name = $event"
          @update:email="formData.email = $event"
          @update:password="formData.password = $event"
          @update:password-confirm="formData.passwordConfirm = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import AuthBrand from '../components/auth/AuthBrand.vue'
import AuthFormCard from '../components/auth/AuthFormCard.vue'

const router = useRouter()
const authStore = useAuthStore()

const isRegistering = ref(false)
const loading = ref(false)
const error = ref('')

const formData = ref({
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
})

const features = [
  'Autenticação segura com PocketBase',
  'Dashboard moderno com Vue 3 + TypeScript',
  'UI inspirada nos blocos do Flowbite',
  'Totalmente customizável e responsivo',
]

function toggleMode() {
  isRegistering.value = !isRegistering.value
  error.value = ''
  formData.value = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }
}

async function handleSubmit() {
  error.value = ''
  loading.value = true

  try {
    let result

    if (isRegistering.value) {
      result = await authStore.register(
        formData.value.email,
        formData.value.password,
        formData.value.passwordConfirm,
        formData.value.name
      )
    } else {
      result = await authStore.login(
        formData.value.email,
        formData.value.password
      )
    }

    if (result.success) {
      await nextTick()
      await router.push('/dashboard')
    } else {
      error.value = result.error || 'Ocorreu um erro'
    }
  } catch (e: any) {
    error.value = e?.message || 'Ocorreu um erro'
  } finally {
    loading.value = false
  }
}
</script>
