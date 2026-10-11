import './style.css'

// ── Mobile navigation toggle ────────────────────────────────────────────────
const navToggle = document.getElementById('nav-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const iconOpen = document.getElementById('icon-open')
const iconClose = document.getElementById('icon-close')

if (navToggle && mobileMenu && iconOpen && iconClose) {
  navToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden')
    mobileMenu.classList.toggle('hidden', isOpen)
    iconOpen.classList.toggle('hidden', !isOpen)
    iconClose.classList.toggle('hidden', isOpen)
    navToggle.setAttribute('aria-expanded', String(!isOpen))
  })

  // Close mobile menu when a link inside it is clicked
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
      iconOpen.classList.remove('hidden')
      iconClose.classList.add('hidden')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })
}

// ── FAQ accordion ─────────────────────────────────────────────────────────
document.querySelectorAll<HTMLButtonElement>('.faq-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const body = btn.nextElementSibling as HTMLElement | null
    const icon = btn.querySelector<SVGElement>('.faq-icon')
    if (!body) return

    const isExpanded = btn.getAttribute('aria-expanded') === 'true'

    // Close all others
    document.querySelectorAll<HTMLButtonElement>('.faq-btn').forEach((other) => {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false')
        const otherBody = other.nextElementSibling as HTMLElement | null
        const otherIcon = other.querySelector<SVGElement>('.faq-icon')
        otherBody?.classList.add('hidden')
        otherIcon?.style.setProperty('transform', '')
      }
    })

    // Toggle current
    btn.setAttribute('aria-expanded', String(!isExpanded))
    body.classList.toggle('hidden', isExpanded)
    if (icon) {
      icon.style.transform = isExpanded ? '' : 'rotate(180deg)'
    }
  })
})

// ── Smooth scroll for anchor links ─────────────────────────────────────────
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href')
    if (!href || href === '#') return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

