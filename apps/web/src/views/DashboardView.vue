<template>
  <!-- Flowbite Application UI – Dashboard Layout -->
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Sidebar -->
    <AppSidebar
      :is-open="sidebarOpen"
      :user-name="userName"
      @logout="handleLogout"
      @close="sidebarOpen = false"
    />

    <!-- Main wrapper (shifted right on desktop) -->
    <div class="lg:ml-64">
      <!-- Top Navbar -->
      <AppNavbar
        :user-name="userName"
        @logout="handleLogout"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />

      <!-- Page content (below fixed navbar) -->
      <main class="pt-16 px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        <!-- Welcome Banner -->
        <WelcomeBanner :user-name="userName" />

        <!-- Stats Grid -->
        <StatsGrid />

        <!-- Quick Actions -->
        <QuickActions />

        <!-- Info Alert -->
        <InfoAlert />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import AppSidebar from '../components/dashboard/AppSidebar.vue'
import AppNavbar from '../components/dashboard/AppNavbar.vue'
import WelcomeBanner from '../components/dashboard/WelcomeBanner.vue'
import StatsGrid from '../components/dashboard/StatsGrid.vue'
import QuickActions from '../components/dashboard/QuickActions.vue'
import InfoAlert from '../components/dashboard/InfoAlert.vue'

const router = useRouter()
const authStore = useAuthStore()

const sidebarOpen = ref(false)

const userName = computed(() => {
  return authStore.user?.name || authStore.user?.email || 'Usuário'
})

function handleLogout() {
  authStore.logout()
  router.push('/login')
}
</script>
