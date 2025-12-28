export default defineNuxtPlugin(() => {
  if (process.client) {
    // Force light mode immediately
    const html = document.documentElement
    html.classList.remove('dark')
    html.setAttribute('data-theme', 'light')
    html.style.colorScheme = 'light'
    
    // Watch for any dark class being added and remove it
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (html.classList.contains('dark')) {
            html.classList.remove('dark')
          }
        }
      })
    })
    
    observer.observe(html, {
      attributes: true,
      attributeFilter: ['class']
    })
  }
  
  const colorMode = useColorMode()
  colorMode.preference = 'light'
  colorMode.value = 'light'
})