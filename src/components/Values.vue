<template>
  <section
    id="values-goals"
    class="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
  >
    <div class="container relative">
      <!-- عنوان -->
      <div class="mb-12 text-center">
        <h6 class="mb-2 text-sm font-semibold tracking-widest uppercase text-primary">
          هويتنا
        </h6>
        <h3 class="text-3xl font-bold leading-normal text-slate-900 dark:text-white">
          قيمنا وأهدافنا
        </h3>
        <p class="max-w-2xl mx-auto mt-3 text-slate-600 dark:text-slate-400">
          نعكس قيمنا في عملنا اليومي، ونحدد أهدافًا واضحة تقود مسيرتنا نحو التميز.
        </p>
      </div>

      <!-- قيمنا -->
      <div
        class="grid max-w-6xl grid-cols-1 gap-6 mx-auto mb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <div
          v-for="(value, i) in values"
          :key="'value-' + i"
          class="relative transition-all duration-500 border shadow-sm group p-7 rounded-2xl hover:-translate-y-2 bg-slate-50/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-600 hover:shadow-lg"
        >
          <div class="flex items-center justify-center rounded-full w-14 h-14 bg-secondary/40 text-primary">
            <i :class="value.icon" class="text-2xl"></i>
          </div>
          <h4
            class="mt-3 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary"
          >
            {{ value.title }}
          </h4>
          <p
            class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {{ value.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: [
        {
          id: 1,
          icon: "mdi mdi-briefcase-check-outline",
          title: "الاحترافية",
          desc: "نلتزم بأعلى معايير الجودة والدقة في كل خطوة.",
        },
        {
          id: 2,
          icon: "mdi mdi-lightbulb-on-outline",
          title: "الابتكار",
          desc: "نبحث دائمًا عن حلول جديدة تدفع التطوير إلى الأمام.",
        },
        {
          id: 3,
          icon: "mdi mdi-flash-outline",
          title: "السرعة",
          desc: "ننجز أعمالنا بكفاءة عالية وسرعة تلبي احتياجات عملائنا.",
        },
        {
          id: 4,
          icon: "mdi mdi-shield-check-outline",
          title: "الثقة",
          desc: "نبني علاقات مستدامة قائمة على الشفافية والالتزام.",
        },
        {
          id: 5,
          icon: "mdi mdi-arrow-up-bold-circle-outline",
          title: "التمكين",
          desc: "نمكّن عملاءنا بالأدوات والمعرفة لتحقيق نجاح دائم.",
        },
      ],
    
    };
  },
 
};
</script>
