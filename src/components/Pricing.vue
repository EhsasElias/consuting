<template>
  <section
    id="unique-value"
    class="relative py-16 md:py-24 bg-slate-50 dark:bg-slate-800"
  >
    <div class="container relative">
      <!-- العنوان -->
      <div class="grid grid-cols-1 pb-6 text-center">
        <h3 class="mb-4 text-3xl font-bold leading-normal text-slate-900 dark:text-white">
          مميزاتنا <span class="text-primary">القيمة الفريدة</span>
        </h3>
        <p class="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
          المنصة الأولى التي تدمج بين الخبرة الاستشارية المتخصصة والذكاء التقني في حل موحد،
          لتقديم استشارات شاملة وسريعة للمنشآت الصغيرة والمتوسطة، بأسعار ليست فقط مناسبة،
          بل مرنة تمامًا مع إمكانياتها.
        </p>
      </div>

      <!-- الشبكة -->
      <div class="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-5">
        <!-- 1) الخبرة المتخصصة -->
        <div class="relative flex flex-col h-full p-6 overflow-hidden bg-white shadow rounded-xl group dark:shadow-gray-700 dark:bg-slate-900">
          <div class="flex items-center justify-center mb-4 rounded-full w-14 h-14 text-primary bg-secondary/40">
            <i class="text-2xl mdi mdi-account-tie"></i>
          </div>
          <h6 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            الخبرة المتخصصة
          </h6>
          <p class="text-slate-600 dark:text-slate-400">
            فريق استشاري بخبرات قطاعية عميقة يقدم حلولًا عملية ودقيقة.
          </p>
        </div>

        <!-- 2) السرعة -->
        <div class="relative flex flex-col h-full p-6 overflow-hidden bg-white shadow rounded-xl group dark:shadow-gray-700 dark:bg-slate-900">
          <div class="flex items-center justify-center mb-4 rounded-full w-14 h-14 text-primary bg-secondary/40">
            <i class="text-2xl mdi mdi-speedometer"></i>
          </div>
          <h6 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            السرعة
          </h6>
          <p class="text-slate-600 dark:text-slate-400">
            تنفيذ سريع وتدفق عمل واضح لإنجاز الاستشارات بكفاءة عالية.
          </p>
        </div>

        <!-- 3) الذكاء التقني في حل موحد (الأكثر تميزًا) -->
        <div class="relative flex flex-col h-full overflow-hidden bg-white border shadow rounded-xl group dark:shadow-gray-700 dark:bg-slate-900 border-secondary/40">
          <div class="px-6 py-2 text-lg font-medium text-white rounded-t-lg bg-gradient-to-tr from-primary to-secondary">
            الأكثر تميّزًا
          </div>
          <div class="flex flex-col flex-grow p-6">
            <div class="flex items-center justify-center mb-4 text-white rounded-full w-14 h-14 bg-gradient-to-tr from-primary to-secondary">
              <i class="text-2xl mdi mdi-brain"></i>
            </div>
            <h6 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              الذكاء التقني في حل موحّد
            </h6>
            <p class="text-slate-600 dark:text-slate-400">
              دمج الخوارزميات الذكية مع الخبرة البشرية لرفع دقة التوصيات وتسريع القرار.
            </p>
          </div>
        </div>

        <!-- 4) الشمولية -->
        <div class="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-xl bg-gradient-to-tr from-primary to-secondary flex flex-col h-full">
          <div class="flex flex-col flex-grow p-6 bg-white rounded-xl dark:bg-slate-900">
            <div class="flex items-center justify-center mb-4 rounded-full w-14 h-14 text-primary bg-secondary/40">
              <i class="text-2xl mdi mdi-layers-triple-outline"></i>
            </div>
            <h6 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
              الشمولية
            </h6>
            <p class="text-slate-600 dark:text-slate-400">
              تغطية شاملة للإدارة والمالية والموارد البشرية والقانون والأنظمة الحكومية.
            </p>
          </div>
        </div>

        <!-- 5) المرونة في الأسعار -->
        <div class="relative flex flex-col h-full p-6 overflow-hidden bg-white shadow rounded-xl group dark:shadow-gray-700 dark:bg-slate-900">
          <div class="flex items-center justify-center mb-4 rounded-full w-14 h-14 text-primary bg-secondary/40">
            <i class="text-2xl mdi mdi-cash-multiple"></i>
          </div>
          <h6 class="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
            المرونة في الأسعار
          </h6>
          <p class="text-slate-600 dark:text-slate-400">
            خطط مرنة تتناسب مع إمكانيات المنشآت الصغيرة والمتوسطة بمختلف أحجامها.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
