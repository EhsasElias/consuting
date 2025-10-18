<template>
  <section
    id="about"
    class="relative md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
  >
    <div class="container relative">
      <div class="grid items-center grid-cols-1 gap-6 md:grid-cols-12">
        <!-- الصورة -->
        <div class="md:col-span-6">
          <div class="lg:me-8">
            <div class="relative">
              <img
                src="../assets/images/home.jpg"
                class="object-cover rounded-full shadow dark:shadow-gray-700"
                style="height: 500px"
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

            <!-- الرؤية والرسالة والأهداف -->
            <div class="mb-8 space-y-5">
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
                    أن نكون البوصلةَ الرقميةَ لتمكين رواد الأعمال والمنشآت
                    الصغيرة والمتوسطة، عبر حلولنا الاستشارية المتكاملة لقيادة
                    المستقبل وتحقيق رؤية المملكة 2030.
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
                    نحن منصةٌ رقميةٌ شاملةٌ لتمكين رواد الأعمال والمنشآت الصغيرة
                    والمتوسطة، نقدّم حلولاً استشارية متكاملة تجمع بين الخبرة
                    الاستشارية المعتمدة والأدوات التقنية المبتكرة. نحلّل
                    التحديات في مجالات الإدارة والمالية والقانونية والتسويقية
                    لتصميم حلول مخصصة تدفع عجلة النمو المستدام. نؤمن بأن نجاح
                    عملائنا هو محور نجاحنا، ونسخر إمكاناتنا لبناء شراكات
                    استراتيجية طويلة الأمد، مع الالتزام بأعلى معايير الجودة
                    والمسؤولية المجتمعية، مساهمين بذلك في تحقيق رؤية المملكة
                    2030
                  </p>
                </div>
              </div>

              <!-- الأهداف الاستراتيجية -->
              <div class="flex items-start gap-3">
                <div
                  class="flex items-center justify-center rounded-full w-14 h-14 bg-secondary/40 text-primary shrink-0"
                >
                  <i class="text-2xl mdi mdi-target"></i>
                </div>
                <div>
                  <h5
                    class="text-base font-semibold text-slate-900 dark:text-white"
                  >
                    الأهداف الاستراتيجية
                  </h5>
                  <ul
                    class="mt-2 space-y-2 text-sm list-disc list-inside text-slate-600 dark:text-slate-400"
                  >
                    <li>
                      تمكين المنشآت السعودية لتحقيق النمو المستدام والتميز في
                      أدائها.
                    </li>
                    <li>
                      الريادة في النمو والاستدامة المالية ضمن قطاع الاستشارات
                      الرقمية.
                    </li>
                    <li>التميز في تقديم حلول رقمية متكاملة ومبتكرة.</li>
                    <li>
                      الريادة في ابتكار حلول استشارية ذكية تلبي مستقبل الأعمال.
                    </li>
                  </ul>
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

<script setup>
import CountUp from "vue-countup-v3";
</script>
