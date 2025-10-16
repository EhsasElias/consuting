<template>
  <div>
    <nav class="navbar" id="navbar">
      <div
        class="container relative flex flex-wrap items-center justify-between"
      >
        <a class="navbar-brand md:me-8" href="index.html">
          <img
            src="../assets/images/logo.png"
            class="inline-block dark:hidden"
            alt=""
          />
          <img
            src="../assets/images/logo.png"
            class="hidden dark:inline-block"
            alt=""
          />
        </a>

        <div class="flex items-center px-4 nav-icons lg_992:order-2 ms-auto md:ms-8">
          <!-- Navbar Collapse Manu Button -->
          <button
            data-collapse="menu-collapse"
            type="button"
            class="inline-flex items-center collapse-btn ms-2 text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded="false"
            @click="handler"
          >
            <span class="sr-only">Navigation Menu</span>
            <i class="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <!-- Navbar Manu -->

        <div
          class="navigation lg_992:order-1 lg_992:flex ms-auto"
          :class="{ hidden: !toggle }"
          id="menu-collapse"
        >
        <ul
  id="navbar-navlist"
  class="flex flex-col items-stretch w-full gap-2 mt-2 navbar-nav lg:flex-row lg:items-center lg:w-auto lg:gap-0 lg:mt-0"
>
  <!-- روابط التنقّل -->
  <li class="nav-item ms-0">
    <a class="block px-3 py-2 nav-link lg:py-0" href="/">الرئيسية</a>
  </li>
  <li class="nav-item ms-0">
    <a class="block px-3 py-2 nav-link lg:py-0" href="#services">خدماتنا</a>
  </li>
  <li class="nav-item ms-0">
    <a class="block px-3 py-2 nav-link lg:py-0" href="#support">المساندة</a>
  </li>

  <!-- فاصل خفيف للموبايل فقط -->
  <li class="block my-2 border-t lg:hidden border-white/20 dark:border-slate-800/50"></li>

  <!-- أزرار الدخول/التسجيل: ممتدّة بالموبايل، مدمجة أفقياً بالديسكتوب -->
  <li class="order-last nav-item ms-0 lg:order-none">
    <a
      href="/login"
      class="h-10 w-full lg:w-auto px-4 text-[12px] tracking-wider inline-flex items-center justify-center
             font-medium rounded-md bg-primary text-white uppercase hover:bg-primary-light transition"
    >
      تسجيل دخول
    </a>
  </li>
  <li class="nav-item ms-0 lg:ms-2">
    <a
      href="/registerone"
      class="h-10 w-full lg:w-auto px-4 text-[12px] tracking-wider inline-flex items-center justify-center
             font-medium rounded-md border border-primary text-primary bg-transparent uppercase
             hover:bg-secondary hover:text-black transition"
    >
      إنشاء حساب
    </a>
  </li>
</ul>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// This may come from a CMS, markdown file, etc.

export default {
  components: {},
  data() {
    return {
      toggle: false,
      scroll: true,
      sections: document.querySelectorAll("section"),
      navLi: document.querySelectorAll("nav .container .navigation ul li"),
      current: "",
      sectionTop: null,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.onscroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.onscroll);
  },

  methods: {
    handler: function () {
      this.toggle = !this.toggle;
    },

    handleScroll(event) {
      const navbar = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    },

    onscroll() {
      document.querySelectorAll("section").forEach((section) => {
        this.sectionTop = section.offsetTop;
        if (pageYOffset >= this.sectionTop - 60) {
          this.current = section.getAttribute("id");
        }
      });
    },
  },
};
</script>
