<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section
      class="relative flex items-center bg-center bg-no-repeat bg-cover md:h-screen py-36"
      :style="{
        backgroundImage: `url(${require('@/assets/images/brand-pattern.png')})`,
        backgroundSize: '900px',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }"
    >
      <div class="container relative z-10">
        <div class="grid items-center grid-cols-1 gap-10 md:grid-cols-2">
          <!-- Text Content -->
          <div class="space-y-5">
            <h1
              class="text-4xl font-bold leading-normal tracking-wide lg:text-5xl text-primary"
            >
              نبذة عن المشروع
            </h1>
            <p class="max-w-2xl text-lg text-slate-700 dark:text-slate-300">
              هي منصة رقمية مبتكرة تهدف إلى تمكين المنشآت الصغيرة والمتوسطة في
              المملكة العربية السعودية، من خلال تقديم خدمات استشارية مهنية
              وسريعة عبر الإنترنت. حيث تجمع المنصة بين الخبرات البشرية المتخصصة
              والأدوات التقنية الذكية، لتقديم حلول شاملة في مجالات مختلفة مثل :
              الإدارة، المالية، الموارد البشرية، الجوانب القانونية، والتعامل مع
              الأنظمة الحكومية. بذلك، تسعى المنصة إلى سد الفجوة بين احتياج
              المنشآت للدعم المهني وصعوبة الوصول إلى مستشارين أكفاء، وذلك لرفع
              كفاءتها وضمان نموها المستدام، مساهمة في تحقيق رؤية المملكة 2030.
            </p>

            <!-- Buttons -->
            <div class="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#consulting"
                class="inline-flex items-center justify-center font-semibold tracking-wide text-white transition-all duration-300 rounded-md shadow-md h-11 px-7 bg-primary hover:bg-primary-light"
              >
                <i class="text-xl mdi mdi-briefcase-outline me-2"></i>
                الاستشارات
              </a>

              <a
                href="#get-in-touch"
                class="inline-flex items-center justify-center font-semibold tracking-wide text-white transition-all duration-300 rounded-md shadow-md h-11 px-7 bg-secondary hover:bg-secondary-dark"
              >
                <i class="text-xl mdi mdi-chat-outline me-2"></i>
                تواصل معنا
              </a>
            </div>
          </div>

          <!-- Image / Side Visual -->
          <div class="relative">
            <img
              src="../assets/images/about.jpg"
              class="mx-auto rounded-[120px] rounded-br-2xl shadow-lg dark:shadow-gray-800 w-[80%] h-[540px] object-cover"
              alt="Consulting Team"
            />

            <!-- Visitor Card -->
            <div
              class="absolute bottom-0 flex items-center justify-between p-4 mb-20 border rounded-lg shadow-md right-3 bg-white/50 dark:bg-slate-900/70 w-60 backdrop-blur-sm border-white/40"
            >
              <div class="flex items-center">
                <div
                  class="flex items-center justify-center h-[65px] min-w-[65px] bg-secondary/40 text-primary rounded-full me-3"
                >
                  <i class="text-3xl mdi mdi-monitor"></i>
                </div>
                <div>
                  <span class="text-sm text-slate-500">الزوار</span>
                  <p class="text-xl font-bold text-primary">4,589</p>
                </div>
              </div>
              <span class="flex items-center gap-1 text-sm text-red-600">
                <i class="mdi mdi-trending-down"></i> 0.5%
              </span>
            </div>

            <!-- Consulting Card -->
            <div
              class="absolute flex flex-col justify-between p-4 border rounded-lg shadow-md left-5 top-12 bg-white/50 dark:bg-slate-900/70 w-52 backdrop-blur-sm border-white/40 text-primary"
            >
              <h5 class="mb-2 text-sm font-semibold">نسبة المشاريع الفعالة</h5>
              <div class="flex justify-between mb-1 text-xs text-slate-500">
                <span>التقدم</span>
                <span>84%</span>
              </div>
              <div
                class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-[6px]"
              >
                <div
                  class="bg-gradient-to-r from-primary to-secondary h-[6px] rounded-full"
                  style="width: 84%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Sections -->
    <Features />
    <About />
    <Values />
    <!-- <AgencyTab />
    <Cta />
    <Client /> -->
    <Pricing />
    <!-- <Blogs />
    <GetInTouch /> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import About from "@/components/About.vue";
import Features from "@/components/Features.vue";
import Values from "@/components/Values.vue";
// import AgencyTab from "@/components/AgencyTab.vue";
// import Cta from "@/components/Cta.vue";
// import Client from "@/components/Client.vue";
import Pricing from "@/components/Pricing.vue";
// import Blogs from "@/components/Blogs.vue";
// import GetInTouch from "@/components/GetInTouch.vue";

export default {
  components: {
    Navbar,
    Features,
    About,
    Values,
    // AgencyTab,
    // Cta,
    // Client,
    Pricing,
    // Blogs,
    // GetInTouch,
  },
};
</script>
