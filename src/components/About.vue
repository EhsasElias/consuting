<template>
  <section class="relative md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900" id="about">
    <div class="container relative">
      <div class="grid items-center grid-cols-1 gap-6 md:grid-cols-12">
        <!-- الصورة -->
        <div class="md:col-span-6">
          <div class="lg:me-8">
            <div class="relative">
              <img
                src="../assets/images/about.jpg"
                class="rounded-full shadow dark:shadow-gray-700"
                alt="About"
              />

              <div
                class="absolute flex items-center justify-center mx-auto -translate-y-1/2 bg-white rounded-full shadow top-1/2 start-0 end-0 size-56 dark:bg-slate-900 dark:shadow-gray-700"
              >
                <div class="text-center">
                  <span
                    class="flex items-center mb-0 text-2xl font-semibold text-primary"
                  >
                    <count-up
                      :end-val="15"
                      class="text-6xl font-semibold counter-value"
                    ></count-up
                    >+
                  </span>
                  <span
                    class="block mt-0 font-semibold text-slate-700 dark:text-slate-300"
                  >
                    سنوات <br />
                    خبرة
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- النص -->
        <div class="md:col-span-6">
          <div class="lg:ms-8">
            <!-- العنوان الرئيسي -->
            <h6
              class="mb-2 text-sm font-semibold tracking-wider uppercase text-primary"
            >
              لماذا نحن؟
            </h6>

            <!-- العنوان الفرعي -->
            <h3
              class="mb-4 text-2xl font-semibold leading-normal text-slate-900 dark:text-white"
            >
              لأننا نضع احتياجات منشأتك في قلب كل استشارة نقدمها
            </h3>

            <!-- النص التوضيحي -->
            <p class="max-w-xl mb-6 text-slate-500 dark:text-slate-400">
              نؤمن بأن كل منشأة تستحق الدعم المهني الذي يساعدها على النمو،
              ونجمع بين الخبرة البشرية والتقنيات الحديثة لتقديم حلول عملية
              تُحدث فرقًا حقيقيًا في أداء أعمالك واستدامتها.
            </p>

            <!-- الرؤية والرسالة -->
            <div class="mb-8 space-y-4">
              <!-- الرؤية -->
              <div class="flex items-start gap-3">
                <div
                  class="flex items-center justify-center rounded-full w-14 h-14 bg-secondary/40 text-primary shrink-0"
                >
                  <i class="text-2xl mdi mdi-eye-outline"></i>
                </div>
                <div>
                  <h5
                    class="text-base font-semibold text-slate-900 dark:text-white"
                  >
                    رؤيتنا
                  </h5>
                  <p
                    class="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    أن نصبح المرجع الأول للمشورة المهنية في المملكة.
                  </p>
                </div>
              </div>

              <!-- الرسالة -->
              <div class="flex items-start gap-3">
                <div
                  class="flex items-center justify-center rounded-full w-14 h-14 bg-secondary/40 text-primary shrink-0"
                >
                  <i class="text-2xl mdi mdi-bullhorn-outline"></i>
                </div>
                <div>
                  <h5
                    class="text-base font-semibold text-slate-900 dark:text-white"
                  >
                    رسالتنا
                  </h5>
                  <p
                    class="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    تقديم خدمات استشارية رقمية متكاملة تمكّن المنشآت من تجاوز
                    تحديات التشغيل والنمو بثقة وكفاءة.
                  </p>
                </div>
              </div>
              
            </div>

            <!-- الزر -->
            <a
              href="#get-in-touch"
              class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition rounded-md bg-primary hover:bg-primary-light"
            >
              تواصل معنا
              <i class="text-lg align-middle mdi mdi-chevron-left ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup >
    import CountUp from 'vue-countup-v3'
</script>