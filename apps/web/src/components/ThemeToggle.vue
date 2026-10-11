<template>
  <!-- Flowbite Application UI – Theme Toggle Block -->
  <div class="relative" ref="wrapperRef">
    <!-- Trigger: paint-brush icon button -->
    <button
      type="button"
      :title="'Tema: ' + modeLabel + ' · Cor: ' + currentAccent.label"
      class="relative p-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      @click="open = !open"
    >
      <span class="sr-only">Alterar tema</span>
      <!-- Palette icon -->
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
      <!-- Accent dot indicator -->
      <span
        class="absolute bottom-1 right-1 w-2 h-2 rounded-full border border-white dark:border-gray-800"
        :style="{ backgroundColor: currentAccent.swatch }"
      />
    </button>

    <!-- Dropdown panel -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="open"
        class="absolute right-0 top-full mt-2 z-50 w-72 origin-top-right rounded-xl bg-white dark:bg-gray-800 shadow-xl ring-1 ring-black/5 dark:ring-white/10 p-4 space-y-4"
      >
        <!-- Section: Mode -->
        <div>
          <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Modo</p>
          <div class="flex gap-2">
            <button
              v-for="m in modes"
              :key="m.value"
              type="button"
              :title="m.label"
              :class="[
                'flex-1 flex flex-col items-center gap-1.5 py-2 px-3 rounded-lg border text-xs font-medium transition-colors',
                themeStore.mode === m.value
                  ? 'bg-primary-600 border-primary-600 text-white'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600',
              ]"
              @click="themeStore.setMode(m.value)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="m.icon" />
              </svg>
              {{ m.label }}
            </button>
          </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-100 dark:border-gray-700" />

        <!-- Section: Accent Color -->
        <div>
          <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
            Cor de destaque · <span class="normal-case font-normal">{{ currentAccent.label }}</span>
          </p>
          <div class="grid grid-cols-6 gap-2">
            <button
              v-for="color in ACCENT_OPTIONS"
              :key="color.name"
              type="button"
              :title="color.label"
              :style="{ backgroundColor: color.swatch }"
              :class="[
                'w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-1',
                themeStore.accent === color.name
                  ? 'border-gray-900 dark:border-white scale-110'
                  : 'border-transparent',
              ]"
              @click="themeStore.setAccent(color.name)"
            >
              <span v-if="themeStore.accent === color.name" class="flex items-center justify-center">
                <svg class="w-4 h-4 text-white drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useThemeStore, ACCENT_OPTIONS } from '../stores/theme'
import type { ThemeMode, AccentOption } from '../stores/theme'

const themeStore = useThemeStore()
const open = ref(false)
const wrapperRef = ref<HTMLElement | null>(null)

const modes: { value: ThemeMode; label: string; icon: string }[] = [
  {
    value: 'light',
    label: 'Claro',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  },
  {
    value: 'dark',
    label: 'Escuro',
    icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
  },
  {
    value: 'system',
    label: 'Sistema',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
  },
]

const modeLabel = computed(() => modes.find((m) => m.value === themeStore.mode)?.label ?? '')
const currentAccent = computed(
  () => ACCENT_OPTIONS.find((c: AccentOption) => c.name === themeStore.accent) ?? ACCENT_OPTIONS[0],
)

// Close when clicking outside
function onClickOutside(e: MouseEvent) {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', onClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', onClickOutside))
</script>
