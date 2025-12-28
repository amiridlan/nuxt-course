export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const router = useRouter();
    const isLoading = ref(false);

    // Show loading on route change start
    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        isLoading.value = true;
      }
    });

    // Hide loading on route change complete
    router.afterEach(() => {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        isLoading.value = false;
      }, 300);
    });

    // Also hide on navigation error
    router.onError(() => {
      isLoading.value = false;
    });

    // Provide the loading state globally
    return {
      provide: {
        pageLoading: isLoading
      }
    };
  }
});