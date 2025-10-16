<template>
  <div>
    <!-- Back to top -->
    <button
      v-show="showTopButton"
      @click="scrollToTop"
      aria-label="العودة للأعلى"
      id="back-to-top"
      class="fixed z-40 bottom-5 right-5 size-11 rounded-full shadow-lg ring-1 ring-black/5
             bg-gradient-to-tr from-primary to-secondary text-white
             hover:shadow-xl transition transform hover:-translate-y-0.5 focus:outline-none"
    >
      <i class="text-xl leading-none mdi mdi-arrow-up"></i>
    </button>

    <!-- Theme Switcher -->
    <div class="fixed z-30 top-1/4 right-3">
      <button
        type="button"
        @click="toggleTheme"
        class="relative inline-flex items-center justify-between w-16 px-1 rounded-full shadow-md h-9 bg-white/90 dark:bg-slate-900/90 backdrop-blur ring-1 ring-slate-200 dark:ring-slate-700"
        aria-label="تبديل النمط"
      >
        <i class="text-xl mdi mdi-white-balance-sunny text-primary"></i>
        <i class="text-xl mdi mdi-weather-night text-primary"></i>
        <!-- ball -->
        <span
          class="absolute transition-transform duration-300 rounded-full shadow-sm top-1 left-1 size-7 bg-secondary"
          :class="isDark ? 'translate-x-7' : 'translate-x-0'"
        ></span>
      </button>
    </div>

    <!-- LTR / RTL Switcher -->
    <div class="fixed z-30 top-[40%] right-2">
      <div class="flex flex-col items-center gap-2">
        <button
          type="button"
          @click="setDir('ltr')"
          class="inline-flex items-center justify-center px-3 py-1 text-xs font-medium transition rotate-90 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur ring-1 ring-slate-200 dark:ring-slate-700 hover:bg-secondary/30 text-primary"
          :class="dir==='ltr' ? 'bg-secondary/50' : ''"
        >
          LTR
        </button>
        <button
          type="button"
          @click="setDir('rtl')"
          class="inline-flex items-center justify-center px-3 py-1 text-xs font-medium transition rotate-90 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur ring-1 ring-slate-200 dark:ring-slate-700 hover:bg-secondary/30 text-primary"
          :class="dir==='rtl' ? 'bg-secondary/50' : ''"
        >
          RTL
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlEl: document.documentElement,
      showTopButton: false,
      isDark: false,
      dir: document.documentElement.dir || 'rtl',
    };
  },

  created() {
    // sync initial states
    this.isDark = this.htmlEl.classList.contains('dark');
    this.dir = this.htmlEl.dir || 'rtl';
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      this.showTopButton = y >= 80;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    toggleTheme() {
      this.isDark = !this.isDark;
      this.htmlEl.classList.toggle('dark', this.isDark);
      this.htmlEl.classList.toggle('light', !this.isDark);
    },

    setDir(mode) {
      this.dir = mode;
      this.htmlEl.setAttribute('dir', mode);
    },
  },
};
</script>
