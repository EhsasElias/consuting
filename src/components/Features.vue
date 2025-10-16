<template>
  <!-- Services (نفس هوية قيمنا) -->
  <section
    id="services"
    class="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
  >
    <div class="container relative">
      <!-- عنوان بنفس هوية values-goals -->
      <div class="mb-12 text-center">
        <h6 class="mb-2 text-sm font-semibold tracking-widest uppercase text-primary">
          خدماتنا
        </h6>
        <h3 class="text-3xl font-bold leading-normal text-slate-900 dark:text-white">
          مجالات الاستشارة
        </h3>
        <p class="max-w-2xl mx-auto mt-3 text-slate-600 dark:text-slate-400">
          نقدم استشارات متخصصة تدعم المنشآت الصغيرة والمتوسطة لتحقيق نمو مستدام وكفاءة أعلى.
        </p>
      </div>

      <!-- شبكة البطاقات (تساوي الارتفاع) -->
      <div
        class="grid items-stretch max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="(s, i) in services"
          :key="'svc-' + i"
          class="relative flex flex-col h-full transition-all duration-500 border shadow-sm group p-7 rounded-2xl hover:-translate-y-2 bg-slate-50/60 dark:bg-slate-800/50 border-slate-200 dark:border-slate-600 hover:shadow-lg"
        >
          <div class="flex items-center justify-center rounded-full w-14 h-14 bg-secondary/40 text-primary">
            <i :class="s.mdi" class="text-2xl"></i>
          </div>

          <h4 class="mt-3 text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary">
            {{ s.title }}
          </h4>

          <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {{ s.desc }}
          </p>

          <!-- رابط ثابت أسفل البطاقة -->
          <div class="pt-4 mt-auto">
            <a href="#get-in-touch" class="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              اقرأ المزيد <i class="mdi mdi-chevron-left text-[16px]"></i>
            </a>
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
      services: [
        {
          title: "الاستشارات في مجال إدارة الموارد البشرية",
          desc: "حلول التوظيف، التدريب، وتطوير السياسات الداخلية لرفع الكفاءة والإنتاجية.",
          mdi: "mdi mdi-account-tie",
        },
        {
          title: "الاستشارات في المجال القانونية التجارية",
          desc: "امتثال للأنظمة واللوائح التجارية ودعم قانوني لقرارات الأعمال.",
          mdi: "mdi mdi-scale-balance",
        },
        {
          title: "الاستشارات في مجال التسويق",
          desc: "استراتيجيات تسويق ونمو العلامة التجارية وزيادة المبيعات.",
          mdi: "mdi mdi-bullhorn",
        },
        {
          title: "الاستشارات في المجال المالي",
          desc: "تخطيط مالي، إدارة تدفق نقدي، وتحسين الربحية والنمو.",
          mdi: "mdi mdi-finance",
        },
        {
          title: "الاستشارات في مجال التدريب والتطوير",
          desc: "تصميم برامج تدريبية متخصصة لرفع مهارات الفرق.",
          mdi: "mdi mdi-school-outline",

        },
        {
          title: "الاستشارات في التصميم",
          desc: "هوية بصرية وتصاميم تدعم رسالتك وتُبرز علامتك.",
          mdi: "mdi mdi-palette",
        },
        {
          title: "التعامل مع المنصات الحكومية",
          desc: "دعم إجرائي وتقني للتعامل مع الأنظمة والمنصات الحكومية بكفاءة.",
          mdi: "mdi mdi-domain",
        },
        {
          title: "الاستشارات المستقبلية",
          desc: "رؤى واستراتيجيات مبتكرة لمواكبة التحولات القادمة.",
          mdi: "mdi mdi-lightbulb-outline",
        },
      ],
    };
  },
};
</script>
