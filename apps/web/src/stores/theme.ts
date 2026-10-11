import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'system'

export type AccentColor =
  | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink'
  | 'rose' | 'red' | 'orange' | 'amber' | 'green' | 'teal' | 'cyan'

export interface AccentOption {
  name: AccentColor
  label: string
  swatch: string
}

export const ACCENT_OPTIONS: AccentOption[] = [
  { name: 'blue',   label: 'Azul',     swatch: '#2563eb' },
  { name: 'indigo', label: 'Índigo',   swatch: '#4f46e5' },
  { name: 'violet', label: 'Violeta',  swatch: '#7c3aed' },
  { name: 'purple', label: 'Roxo',     swatch: '#9333ea' },
  { name: 'pink',   label: 'Rosa',     swatch: '#db2777' },
  { name: 'rose',   label: 'Rosé',     swatch: '#e11d48' },
  { name: 'red',    label: 'Vermelho', swatch: '#dc2626' },
  { name: 'orange', label: 'Laranja',  swatch: '#ea580c' },
  { name: 'amber',  label: 'Âmbar',   swatch: '#d97706' },
  { name: 'green',  label: 'Verde',    swatch: '#16a34a' },
  { name: 'teal',   label: 'Teal',     swatch: '#0d9488' },
  { name: 'cyan',   label: 'Ciano',    swatch: '#0891b2' },
]

const STORAGE_MODE   = 'theme-mode'
const STORAGE_ACCENT = 'theme-accent'

function applyMode(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = mode === 'dark' || (mode === 'system' && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
}

function applyAccent(accent: AccentColor) {
  document.documentElement.setAttribute('data-accent', accent)
}

export const useThemeStore = defineStore('theme', () => {
  const mode   = ref<ThemeMode>((localStorage.getItem(STORAGE_MODE)   as ThemeMode)   ?? 'system')
  const accent = ref<AccentColor>((localStorage.getItem(STORAGE_ACCENT) as AccentColor) ?? 'blue')

  function setMode(m: ThemeMode) {
    mode.value = m
    localStorage.setItem(STORAGE_MODE, m)
    applyMode(m)
  }

  function setAccent(a: AccentColor) {
    accent.value = a
    localStorage.setItem(STORAGE_ACCENT, a)
    applyAccent(a)
  }

  function init() {
    applyMode(mode.value)
    applyAccent(accent.value)

    // Re-apply when the OS preference changes (only affects 'system' mode)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (mode.value === 'system') applyMode('system')
    }
    mq.addEventListener('change', handler)

    // Return a cleanup fn so callers (e.g. onUnmounted) can tear down the listener
    return () => mq.removeEventListener('change', handler)
  }

  return { mode, accent, setMode, setAccent, init }
})
