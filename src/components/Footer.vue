<template>
  <footer
    class="relative text-gray-200 bg-dark-footer dark:text-gray-200"
  >
    <div class="py-[30px] px-0 border-t border-slate-800">
      <div class="container relative text-center">
        <div
          class="grid items-center grid-cols-1 lg:grid-cols-12 md:grid-cols-3"
        >
          <!-- Logo -->
          <div class="text-center lg:col-span-3 md:text-start">
            <a
              href="#"
              class="text-[22px] focus:outline-none inline-block"
            >
              <img
                src="../assets/images/logo-light.png"
                class="mx-auto md:me-auto md:ms-0 w-[120px]"
                alt="منصة الاستشارات الذكية"
              />
            </a>
          </div>

          <!-- النص -->
          <div
            class="mt-6 leading-relaxed text-center lg:col-span-5 md:mt-0"
          >
            <p class="mb-0 text-sm text-gray-300">
              جميع الحقوق محفوظة © {{ date }} <span class="font-semibold text-secondary">منصة الاستشارات الذكية</span>  
              <br />
              تم التطوير وفق <span class="font-semibold text-primary">رؤية المملكة العربية السعودية 2030</span>
            </p>
          </div>

          <!-- Icons -->
          <ul
            class="flex items-center justify-center gap-2 mt-6 text-center list-none lg:col-span-4 md:text-end md:mt-0 md:justify-end"
          >
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                class="inline-flex items-center justify-center transition-all border rounded-md border-slate-700 size-8 hover:border-secondary hover:bg-secondary hover:text-primary"
              >
                <i data-feather="linkedin" class="align-middle size-4"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com"
                target="_blank"
                class="inline-flex items-center justify-center transition-all border rounded-md border-slate-700 size-8 hover:border-secondary hover:bg-secondary hover:text-primary"
              >
                <i data-feather="twitter" class="align-middle size-4"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                class="inline-flex items-center justify-center transition-all border rounded-md border-slate-700 size-8 hover:border-secondary hover:bg-secondary hover:text-primary"
              >
                <i data-feather="instagram" class="align-middle size-4"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:info@smartconsult.sa"
                class="inline-flex items-center justify-center transition-all border rounded-md border-slate-700 size-8 hover:border-secondary hover:bg-secondary hover:text-primary"
              >
                <i data-feather="mail" class="align-middle size-4"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import feather from "feather-icons";

export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  mounted() {
    feather.replace();
  },
};
</script>
