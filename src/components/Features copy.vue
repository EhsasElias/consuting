<template>
  <section
    class="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
    id="services"
  >
    <div class="container relative">
      <!-- العنوان -->
      <div class="grid grid-cols-1 pb-10 text-center">
        <h6
          class="mb-2 text-sm font-semibold tracking-widest uppercase text-primary"
        >
          مجالاتنا
        </h6>
        <h3
          class="mb-4 text-3xl font-bold leading-normal text-slate-900 dark:text-white"
        >
          خدماتنا الاستشارية
        </h3>
        <p class="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          نقدم حلولًا مبتكرة تجمع بين التقنية والخبرة لتطوير أعمالك، عبر شبكة من
          العملاء والمستشارين وإدارة فعّالة للمنصة.
        </p>
      </div>

      <!-- البطاقات -->
      <div
        class="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="item in servicesData"
          :key="item.id"
          class="relative p-8 overflow-hidden transition-all duration-500 bg-white border shadow-md dark:bg-slate-900 rounded-2xl border-slate-100 dark:border-slate-700 group hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- خلفية الأيقونة الكبيرة -->
          <div
            class="absolute inset-0 flex justify-center items-center opacity-[0.05] group-hover:opacity-10 transition duration-500"
          >
            <i
              :class="item.icon"
              class="text-[110px] text-primary/70"
            ></i>
          </div>

          <!-- الأيقونة الأمامية -->
          <div
            class="relative flex items-center justify-center w-20 h-20 mx-auto transition-transform duration-500 rounded-full shadow-sm text-primary bg-secondary/40 group-hover:scale-105"
          >
            <i :class="item.icon" class="text-4xl"></i>
          </div>

          <!-- المحتوى -->
          <div class="relative z-10 mt-6 text-center">
            <h4
              class="mb-3 text-xl font-semibold transition text-slate-900 dark:text-white group-hover:text-primary"
            >
              {{ item.title }}
            </h4>
            <p
              class="leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      servicesData: [
        {
          id: 1,
          icon: "mdi mdi-account-group-outline",
          title: "العملاء",
          desc: "خدمات استشارية مخصصة تلبي جميع احتياجاتك بجودة عالية واهتمام بالتفاصيل.",
        },
        {
          id: 2,
          icon: "mdi mdi-account-tie-outline",
          title: "المستشارين والمكاتب",
          desc: "مجتمع من الخبراء والمتخصصين في مختلف المجالات لتقديم المشورة المثلى والدعم المهني.",
        },
        {
          id: 3,
          icon: "mdi mdi-monitor-dashboard",
          title: "إدارة المنصة",
          desc: "نظام إدارة ذكي يضمن تجربة سلسة وفعالة لجميع المستخدمين، مع أداء مستقر ومستمر.",
        },
      ],
    };
  },
};
</script>
