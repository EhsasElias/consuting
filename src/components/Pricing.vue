<template>
  <section
    id="features"
    class="relative py-16 md:py-24 bg-slate-50 dark:bg-slate-800"
  >
    <div class="container relative">
      <!-- العنوان -->
      <div class="grid grid-cols-1 pb-6 text-center">
        <h3
          class="mb-4 text-3xl font-bold leading-normal text-slate-900 dark:text-white"
        >
          مميزات منصتنا
        </h3>
        <p class="max-w-2xl mx-auto text-slate-500 dark:text-slate-400">
          نقدم لك مجموعة من المميزات التي تجعل تجربتك الاستشارية أكثر سهولة وفعالية واحترافية.
        </p>
      </div>

      <!-- الشبكة -->
      <div class="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-4 md:grid-cols-2">
        <!-- ميزة 1 -->
        <div
          class="relative p-6 overflow-hidden bg-white shadow rounded-xl group dark:shadow-gray-700 dark:bg-slate-900 h-fit"
        >
          <div
            class="flex items-center justify-center mb-4 rounded-full w-14 h-14 text-primary bg-secondary/40"
          >
            <i class="text-2xl mdi mdi-robot"></i>
          </div>
          <h6 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            ذكاء استشاري
          </h6>
          <p class="text-slate-600 dark:text-slate-400">
            ندمج بين الذكاء الاصطناعي والخبرة البشرية لنقدم استشارات دقيقة وسريعة.
          </p>
        </div>

        <!-- ميزة 2 -->
        <div
          class="relative p-6 overflow-hidden bg-white shadow rounded-xl group dark:shadow-gray-700 dark:bg-slate-900 h-fit"
        >
          <div
            class="flex items-center justify-center mb-4 rounded-full w-14 h-14 text-primary bg-secondary/40"
          >
            <i class="text-2xl mdi mdi-speedometer"></i>
          </div>
          <h6 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            أداء وسرعة
          </h6>
          <p class="text-slate-600 dark:text-slate-400">
            واجهة سلسة وسريعة تساعدك على الوصول إلى خدماتك في ثوانٍ معدودة.
          </p>
        </div>

        <!-- ميزة 3 -->
        <div
          class="relative overflow-hidden bg-white border shadow rounded-xl group dark:shadow-gray-700 dark:bg-slate-900 h-fit border-secondary/40"
        >
          <div
            class="px-6 py-2 text-lg font-medium text-white rounded-t-lg bg-gradient-to-tr from-primary to-secondary"
          >
            الأكثر تميزًا
          </div>
          <div class="p-6">
            <div
              class="flex items-center justify-center mb-4 text-white rounded-full w-14 h-14 bg-gradient-to-tr from-primary to-secondary"
            >
              <i class="text-2xl mdi mdi-account-group"></i>
            </div>
            <h6
              class="mb-3 text-xl font-semibold text-slate-900 dark:text-white"
            >
              مجتمع مهني
            </h6>
            <p class="text-slate-600 dark:text-slate-400">
              تواصل مع شبكة من المستشارين والخبراء في مختلف التخصصات المهنية.
            </p>
          </div>
        </div>

        <!-- ميزة 4 -->
        <div
          class="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-xl bg-gradient-to-tr from-primary to-secondary h-fit"
        >
          <div class="p-6 bg-white rounded-xl dark:bg-slate-900">
            <div
              class="flex items-center justify-center mb-4 rounded-full w-14 h-14 text-primary bg-secondary/40"
            >
              <i class="text-2xl mdi mdi-shield-check-outline"></i>
            </div>
            <h6
              class="mb-3 text-xl font-semibold text-slate-900 dark:text-white"
            >
              حماية وأمان
            </h6>
            <p class="text-slate-600 dark:text-slate-400">
              نحرص على سرية بياناتك باستخدام أحدث تقنيات الأمان والتشفير.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
