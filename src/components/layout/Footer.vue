<template>
    <footer id="footer" class="text-center py-4">
        <div class="container">
        <p class="mb-0">© {{ currentYear }} {{ $t('footer.copyright') }}</p>
        <div class="mt-4">
            <a href="tel:+614297881" class="mx-2">
                <i class="fas fa-mobile-alt"></i>
            </a>
            <a href="mailto:kibs8@proton.me" class="mx-2">
                <i class="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/robin-everaert/" target="_blank" class="mx-2">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/robin-everaert" target="_blank" class="mx-2">
                <i class="fab fa-github"></i>
            </a>
        </div>
        </div>
    </footer>
  </template>
  <script>
  export default {
    name: 'Footer',
    setup() {
        const currentYear = new Date().getFullYear(); 
        return {
        currentYear,
        };
    },
  };
  </script>

  