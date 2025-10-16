<template>
  <div>
    <nav class="navbar" id="navbar">
      <div
        class="container relative flex flex-wrap items-center justify-between"
      >
        <a class="navbar-brand md:me-8" href="/">
          <span class="inline-block dark:hidden">
            <img src="../assets/images/logo-dark.png" class="l-dark" alt="" />
            <img src="../assets/images/logo-light.png" class="l-light" alt="" />
          </span>
          <img
            src="../assets/images/logo-light.png"
            class="hidden dark:inline-block"
            alt=""
          />
        </a>

        <div class="flex items-center nav-icons lg_992:order-2 ms-auto md:ms-8">
          <!-- Navbar Button -->
          <ul class="mb-0 list-none menu-social">
            <li class="inline">
              <a
                href="#login"
                class="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-primary text-white uppercase"
              >
                تسجيل دخول
              </a>
            </li>
            <li class="inline ms-2">
              <a
                href="#signup"
                class="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md border border-primary text-primary bg-transparent uppercase hover:bg-primary hover:text-white transition"
              >
                إنشاء حساب
              </a>
            </li>
          </ul>
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
          <ul class="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
            <li class="nav-item ms-0 active home">
              <a class="nav-link" href="#home">الرئيسية</a>
            </li>
            <li class="nav-item ms-0 services">
              <a class="nav-link" href="#services">خدماتنا</a>
            </li>
            <li class="nav-item ms-0 support">
              <a class="nav-link" href="#support">المساندة</a>
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
