<template>
  <footer class="py-4 text-gray-300 border-t bg-dark-footer border-slate-800/70">
    <div class="container flex flex-col items-center justify-between gap-3 text-center md:flex-row">
      <!-- شعار -->
      <a href="#" class="flex items-center gap-2">
        <img
          src="../assets/images/logo-light.png"
          alt="منصة الاستشارات الذكية"
          class="w-[90px]"
        />
        <span class="hidden text-sm font-semibold text-secondary md:inline">
          منصة الاستشارات الذكية
        </span>
      </a>

      <!-- معلومات التواصل -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-sm">
        <a href="tel:0509212155" class="flex items-center gap-1 transition hover:text-secondary">
          <i class="text-base mdi mdi-phone text-secondary"></i>
          <span>0509212155</span>
        </a>
        <span class="text-slate-500">|</span>
        <a href="mailto:hr@mharat.com.sa" class="flex items-center gap-1 transition hover:text-secondary">
          <i class="text-base mdi mdi-email-outline text-secondary"></i>
          <span>hr@mharat.com.sa</span>
        </a>
        <span class="text-slate-500">|</span>
        <a href="https://wa.me/966509212155" target="_blank" class="flex items-center gap-1 transition hover:text-green-400">
          <i class="text-base text-green-500 mdi mdi-whatsapp"></i>
          <span>واتساب</span>
        </a>
      </div>

      <!-- سوشال -->
      <div class="flex items-center justify-center gap-2">
        <a
          href="https://linkedin.com"
          target="_blank"
          class="inline-flex items-center justify-center transition rounded-full size-8 bg-white/5 hover:bg-secondary hover:text-primary"
        >
          <i data-feather="linkedin" class="size-4"></i>
        </a>
        <a
          href="https://x.com"
          target="_blank"
          class="inline-flex items-center justify-center transition rounded-full size-8 bg-white/5 hover:bg-secondary hover:text-primary"
        >
          <i data-feather="twitter" class="size-4"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="inline-flex items-center justify-center transition rounded-full size-8 bg-white/5 hover:bg-secondary hover:text-primary"
        >
          <i data-feather="instagram" class="size-4"></i>
        </a>
      </div>
    </div>

    <!-- الحقوق -->
    <div class="pt-2 text-center text-[12px] text-slate-500">
      جميع الحقوق محفوظة © {{ date }} | <span class="text-secondary">رؤية 2030</span>
    </div>
  </footer>
</template>

<script>
import feather from "feather-icons";

export default {
  data() {
    return { date: new Date().getFullYear() };
  },
  mounted() {
    feather.replace();
  },
};
</script>
