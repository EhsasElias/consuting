<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900">
    <Navbar />

    <section class="container py-16 md:py-28">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12">
        <!-- Sidebar -->
        <aside class="space-y-6 md:col-span-4">
          <!-- نوع المستخدم (تصميم بسيط وواضح) -->
          <div
            class="p-5 bg-white border rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700"
          >
            <h4
              class="mb-4 text-base font-semibold text-slate-900 dark:text-white"
            >
              نوع المستخدم
            </h4>

            <!-- على الموبايل صفين، وعلى الديسكتوب عمود -->
            <!-- استبدل الأزرار داخل الـ sidebar -->
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-1">
              <RouterLink
                v-for="t in clientTypes"
                :key="t.key"
                :to="toPath(t.key)"
                class="w-full px-4 py-3 text-sm text-right transition border rounded-lg"
                :class="
                  isActiveType(t.key)
                    ? 'border-primary/60 text-primary bg-secondary/20'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                "
              >
                {{ t.label }}
              </RouterLink>
            </div>

            <p class="mt-3 text-xs text-slate-500 dark:text-slate-400">
              تم الاختيار:
              <span class="font-semibold text-primary">{{
                currentClientTypeLabel
              }}</span>
            </p>
          </div>

          <!-- المتطلبات -->
          <div
            class="p-5 bg-white border rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700"
          >
            <h4
              class="mb-4 text-base font-semibold text-slate-900 dark:text-white"
            >
              المتطلبات والموافقة
            </h4>
            <ul class="space-y-3">
              <li class="flex items-start gap-2">
                <span
                  class="mt-0.5 inline-flex items-center justify-center rounded-full size-6 bg-secondary/30 text-primary"
                >
                  <i class="mdi mdi-check-bold text-[13px]"></i>
                </span>
                <div>
                  <p
                    class="text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    بيانات صحيحة
                  </p>
                  <p class="text-xs text-slate-500">
                    تأكد من مطابقة السجل التجاري.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="mt-0.5 inline-flex items-center justify-center rounded-full size-6 bg-secondary/30 text-primary"
                >
                  <i class="mdi mdi-check-bold text-[13px]"></i>
                </span>
                <div>
                  <p
                    class="text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    رقم جوال مفعّل
                  </p>
                  <p class="text-xs text-slate-500">
                    سيصلك رمز تحقق عبر الرسائل.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-2">
                <span
                  class="mt-0.5 inline-flex items-center justify-center rounded-full size-6 bg-secondary/30 text-primary"
                >
                  <i class="mdi mdi-check-bold text-[13px]"></i>
                </span>
                <div>
                  <p
                    class="text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    بريد رسمي
                  </p>
                  <p class="text-xs text-slate-500">
                    لإشعارات العقود والفواتير.
                  </p>
                </div>
              </li>
            </ul>

            <!-- Progress -->
            <div class="mt-6">
              <div
                class="mb-1 text-xs font-medium text-slate-600 dark:text-slate-300"
              >
                التقدّم: {{ percent }}%
              </div>
              <div
                class="w-full h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
              >
                <div
                  class="h-2 transition-all rounded-full bg-primary"
                  :style="{ width: percent + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </aside>

        <!-- Main -->
        <div class="space-y-4 md:col-span-8">
         <!-- Stepper متجاوب -->
<div class="p-4 bg-white border rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700">
  <!-- موبايل: شريط مختصر -->
  <div class="flex items-center justify-between sm:hidden">
    <div class="text-xs font-semibold text-slate-700 dark:text-slate-200">
      الخطوة {{ step + 1 }} من {{ steps.length }}
    </div>
    <div class="flex items-center gap-1">
      <span
        v-for="(s, i) in steps"
        :key="s.key"
        class="inline-block transition-all rounded-full"
        :class="step === i ? 'w-2.5 h-2.5 bg-primary' : 'w-2 h-2 bg-slate-300 dark:bg-slate-600'"
      ></span>
    </div>
  </div>

  <!-- موبايل: شريط تقدّم -->
  <div class="mt-2 sm:hidden">
    <div class="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
      <div
        class="h-2 transition-all rounded-full bg-primary"
        :style="{ width: Math.round(((step + 1) / steps.length) * 100) + '%' }"
      ></div>
    </div>
  </div>

  <!-- من sm وما فوق: الشكل الحالي مع تمرير عند الحاجة -->
  <div class="items-center hidden gap-3 sm:flex">
    <div class="flex items-center w-full gap-2 overflow-x-auto no-scrollbar">
      <template v-for="(s, i) in steps" :key="s.key">
        <div class="flex items-center flex-none gap-2">
          <span
            class="inline-flex items-center justify-center text-xs font-bold border rounded-full size-7"
            :class="step >= i
              ? 'bg-primary text-white border-primary'
              : 'bg-white dark:bg-slate-900 text-primary border-slate-300 dark:border-slate-600'">
            {{ i + 1 }}
          </span>
          <span
            class="text-sm"
            :class="step >= i ? 'text-primary font-semibold' : 'text-slate-500 dark:text-slate-400'">
            {{ s.title }}
          </span>
        </div>
        <div
          v-if="i < steps.length - 1"
          class="flex-1 h-px bg-slate-200 dark:bg-slate-700">
        </div>
      </template>
    </div>
  </div>
</div>

          <!-- المحتوى -->
          <div
            class="p-5 bg-white border rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700"
          >
            <!-- النماذج (تظهر إذا لم نصل لمرحلة OTP) -->
            <template v-if="!showOtp">
              <!-- STEP 1 -->
              <div
                v-if="step === 0"
                class="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <!-- unified dropdown: changes label + options based on sidebar -->
                <div class="md:col-span-2">
                  <BaseSelect
                    :label="dropdownLabel"
                    v-model="selectedTypeModel"
                    :options="dropdownOptions"
                    :hint="
                      isClient ? 'اختر نوع العميل المناسب' : 'اختر نوع المستشار'
                    "
                    :error="errors.type"
                  />
                </div>

                <!-- your existing inputs -->
                <BaseInput
                  label="اسم المنشأة"
                  v-model="form.customer.orgName"
                  :error="errors.orgName"
                  placeholder="مثال: منصة الاستشارات الذكية"
                />
                <BaseInput
                  label="النشاط"
                  v-model="form.customer.activity"
                  :error="errors.activity"
                  placeholder="مثال: استشارات أعمال"
                />
                <BaseInput
                  label="اسم المدير"
                  v-model="form.customer.manager"
                  :error="errors.manager"
                  placeholder="مثال: أحمد العتيبي"
                />
                <BaseInput
                  label="رقم الجوال"
                  v-model="form.customer.mobile"
                  :error="errors.mobile"
                  inputmode="tel"
                  placeholder="05XXXXXXXX"
                />
                <BaseInput
                  class="md:col-span-2"
                  label="الإيميل الرسمي"
                  v-model="form.customer.email"
                  :error="errors.email"
                  type="email"
                  placeholder="name@company.sa"
                />
              </div>

              <!-- STEP 2 -->
              <div
                v-else-if="step === 1"
                class="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <BaseInput
                  label="المنطقة"
                  v-model="form.address.region"
                  :error="errors.region"
                />
                <BaseInput
                  label="المدينة"
                  v-model="form.address.city"
                  :error="errors.city"
                />
                <BaseInput
                  label="الحي"
                  v-model="form.address.district"
                  :error="errors.district"
                />
                <BaseInput
                  label="الشارع"
                  v-model="form.address.street"
                  :error="errors.street"
                />
                <BaseInput
                  label="رقم المبنى"
                  v-model="form.address.buildingNo"
                  :error="errors.buildingNo"
                />
                <BaseInput
                  label="الرمز البريدي"
                  v-model="form.address.zip"
                  :error="errors.zip"
                />
                <BaseInput
                  label="الرقم الإضافي"
                  v-model="form.address.extraNo"
                />
                <BaseInput
                  class="md:col-span-2"
                  label="العنوان المختصر"
                  v-model="form.address.shortAddress"
                />
              </div>

              <!-- STEP 3 -->
              <div
                v-else-if="step === 2"
                class="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <BaseInput
                  label="اسم صاحب الحساب"
                  v-model="form.bank.owner"
                  :error="errors.owner"
                />
                <BaseInput
                  label="اسم البنك"
                  v-model="form.bank.bankName"
                  :error="errors.bankName"
                />
                <BaseInput
                  label="رقم الحساب البنكي"
                  v-model="form.bank.account"
                  :error="errors.account"
                  inputmode="numeric"
                />
                <BaseInput
                  label="IBAN"
                  v-model="form.bank.iban"
                  :error="errors.iban"
                  placeholder="SAxx xxxx xxxx xxxx xxxx xxxx"
                />
                <BaseInput
                  class="md:col-span-2"
                  label="الرقم الضريبي"
                  v-model="form.bank.taxNo"
                />
              </div>

              <!-- STEP 4: بيانات المنشأة -->
              <div
                v-else-if="step === 3"
                class="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <BaseInput
                  label="رقم السجل"
                  v-model="form.org.cr"
                  :error="errors.cr"
                />
                <BaseInput label="رقم المنشأة" v-model="form.org.orgNo" />
                <BaseInput label="الرقم الموحد" v-model="form.org.unifiedNo" />
                <BaseFile
                  label="مرفق الشعار"
                  v-model="form.org.logo"
                  :error="errors.logo"
                />
                <BaseFile label="الورق الرسمي" v-model="form.org.letterhead" />

                <!-- الإقرارات -->
                <div class="md:col-span-2">
                  <div
                    class="p-4 border rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/60"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <span
                        class="inline-flex items-center justify-center rounded-full size-7 bg-secondary/30 text-primary ring-1 ring-black/5"
                      >
                        <i class="mdi mdi-shield-check-outline text-[16px]"></i>
                      </span>
                      <h5
                        class="text-sm font-semibold text-slate-900 dark:text-white"
                      >
                        الإقرارات
                      </h5>
                    </div>

                    <div class="space-y-3">
                      <label
                        class="flex items-start gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <input
                          type="checkbox"
                          v-model="form.acceptData"
                          class="mt-1 rounded border-slate-300 text-primary focus:ring-primary"
                        />
                        <span>
                          أُقرّ أنا المستخدم بأن جميع المعلومات والبيانات
                          المدخلة أثناء عملية التسجيل صحيحة وكاملة وتعود لي
                          شخصيًا، وأتحمّل المسؤولية القانونية الكاملة عن أي
                          بيانات غير صحيحة أو مزيفة.
                        </span>
                      </label>

                      <div class="h-px bg-slate-200 dark:bg-slate-700"></div>

                      <label
                        class="flex items-start gap-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                      >
                        <input
                          type="checkbox"
                          v-model="form.acceptTerms"
                          class="mt-1 rounded border-slate-300 text-primary focus:ring-primary"
                        />
                        <span>
                          أُقرّ بأنني قد اطلعت على كافة الشروط والأحكام المنظمة
                          لاستخدام المنصة، وقبلت بها بشكل نهائي وملزم، ويُعد هذا
                          الإقرار بمثابة قبول قانوني لا يحق معه الاعتراض لاحقًا.
                        </span>
                      </label>

                      <div class="pt-1">
                        <p
                          v-if="errors.acceptData"
                          class="text-xs text-red-600"
                        >
                          {{ errors.acceptData }}
                        </p>
                        <p
                          v-if="errors.acceptTerms"
                          class="text-xs text-red-600"
                        >
                          {{ errors.acceptTerms }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- أزرار التنقّل -->
              <div class="flex items-center justify-between mt-6">
                <button
                  class="h-10 px-4 text-sm font-semibold rounded-md text-primary bg-secondary/30 hover:bg-secondary/40 disabled:opacity-40"
                  :disabled="step === 0"
                  @click="step = Math.max(0, step - 1)"
                >
                  السابق
                </button>

                <div class="flex gap-2">
                  <button
                    v-if="step < steps.length - 1"
                    class="h-10 px-6 text-sm font-semibold text-white rounded-md bg-primary hover:bg-primary/90"
                    @click="nextStep"
                  >
                    التالي
                  </button>
                  <button
                    v-else
                    class="h-10 px-6 text-sm font-semibold text-black rounded-md bg-secondary hover:bg-secondary/90"
                    @click="submit"
                  >
                    حفظ
                  </button>
                </div>
              </div>
            </template>

            <!-- شاشة التحقق بالرمز (OTP) تظهر بعد الحفظ) -->
            <template v-else>
              <div class="max-w-xl mx-auto text-center">
                <h4
                  class="mb-2 text-lg font-bold text-slate-900 dark:text-white"
                >
                  التحقق من الحساب
                </h4>
                <p class="mb-6 text-sm text-slate-600 dark:text-slate-300">
                  تم إرسال رمز تحقق مكوّن من 6 أرقام إلى
                  <span class="font-semibold text-primary">{{
                    form.customer.mobile || form.customer.email
                  }}</span>
                </p>

                <!-- خانات الرمز -->
                <div class="flex justify-center gap-2 mb-5">
                  <input
                    v-for="(d, i) in otp"
                    :key="i"
                    type="text"
                    inputmode="numeric"
                    maxlength="1"
                    class="w-12 h-12 text-center bg-white border rounded-lg focus:outline-none focus:ring-2 border-primary/30 focus:ring-primary/40 dark:bg-slate-900 text-slate-900 dark:text-white"
                    v-model="otp[i]"
                    @input="onOtpInput(i, $event)"
                    @keydown.backspace.prevent="onOtpBackspace(i, $event)"
                    @paste.prevent="onOtpPaste($event)"
                    :ref="(el) => (otpRefs[i] = el)"
                  />
                </div>

                <!-- إجراءات -->
                <div class="flex items-center justify-center gap-3">
                  <button
                    class="h-10 px-6 text-sm font-semibold text-white rounded-md bg-primary hover:bg-primary/90 disabled:opacity-50"
                    :disabled="!isOtpComplete"
                    @click="verifyOtp"
                  >
                    تأكيد
                  </button>

                  <button
                    class="h-10 px-6 text-sm font-semibold rounded-md text-primary bg-secondary/30 hover:bg-secondary/40 disabled:opacity-50"
                    :disabled="otpTimer > 0"
                    @click="resendOtp"
                  >
                    إعادة الإرسال
                    <span v-if="otpTimer > 0">({{ otpTimer }}s)</span>
                  </button>
                </div>

                <!-- رسالة خطأ/نجاح اختيارية -->
                <p v-if="errors.otp" class="mt-3 text-xs text-red-600">
                  {{ errors.otp }}
                </p>
                <p v-if="otpSuccess" class="mt-3 text-xs text-green-600">
                  تم التحقق بنجاح ✅
                </p>
              </div>
            </template>
          </div>
        </div>
        <!-- /Main -->
      </div>
    </section>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseFile from "@/components/BaseFile.vue";
import BaseSelect from "@/components/BaseSelect.vue";

export default {
  components: { Navbar, BaseInput, BaseFile, BaseSelect },
  data() {
    return {
      step: 0,
      steps: [
        { key: "customer", title: "معلومات العميل" },
        { key: "address", title: "العنوان الوطني" },
        { key: "bank", title: "البيانات البنكية" },
        { key: "org", title: "بيانات المنشأة" },
      ],
      form: {
        customer: {
          orgName: "",
          activity: "",
          manager: "",
          mobile: "",
          email: "",
          type: "",
        },
        address: {
          region: "",
          city: "",
          district: "",
          street: "",
          buildingNo: "",
          zip: "",
          extraNo: "",
          shortAddress: "",
        },
        bank: { owner: "", bankName: "", account: "", iban: "", taxNo: "" },
        org: { cr: "", orgNo: "", unifiedNo: "", logo: null, letterhead: null },
        consultant: {
          type: "",
        },
        accept: false,
      },

      selectedClientType: "client",
      clientTypes: [
        { key: "client", label: "عميل" },
        { key: "consultant", label: "مستشار" },
        { key: "office", label: "مكتب استشارات" },
      ],

      errors: {},
      clientTypeOptions: [
        { value: "entrepreneur", label: "رواد أعمال" },
        { value: "nascent", label: "منشأة ناشئة" },
        { value: "smallBusiness", label: "منشأة صغيرة" },
      ],
      consultantTypeOptions: [
        { value: "individual", label: "فردي" },
        { value: "office", label: "مكتب استشارات" },
      ],
      /* ---- OTP state ---- */
      showOtp: false, // يظهر واجهة التحقق بعد الحفظ
      otp: ["", "", "", "", "", ""],
      otpRefs: [], // refs لمدخلات الرمز
      otpTimer: 60, // مؤقّت لإعادة الإرسال
      otpInterval: null, // setInterval reference
      otpSuccess: false, // حالة نجاح التحقق
      selectedConsultantType: "individual",
    };
  },

  computed: {
    percent() {
      // أثناء خطوات النموذج نعتمد على رقم الخطوة، وبعد فتح شاشة OTP نعتبره مكتمل 100%
      if (this.showOtp) return 100;
      const total = this.steps.length;
      return Math.round(((this.step + 1) / total) * 100);
    },

    currentClientTypeLabel() {
      const m = this.clientTypes.find((t) => t.key === this.selectedClientType);
      return m ? m.label : "";
    },
    isOtpComplete() {
      return this.otp.every((d) => d !== "" && /^\d$/.test(d));
    },
    // keep only one of these:
    isClient() {
      return this.selectedClientType === "client";
    },

    dropdownLabel() {
      return this.isClient ? "نوع العميل" : "نوع المستشار";
    },
    dropdownOptions() {
      return this.isClient
        ? this.clientTypeOptions
        : this.consultantTypeOptions;
    },

    // one v-model that switches between customer.type and consultant.type
    selectedTypeModel: {
      get() {
        return this.isClient
          ? this.form.customer?.type ?? ""
          : this.form.consultant?.type ?? "";
      },
      set(val) {
        if (this.isClient) this.form.customer.type = val;
        else this.form.consultant.type = val;
      },
    },
  },

  watch: {
    selectedClientType(newVal) {
      if (newVal === "client") {
        this.form.consultant.type = "";
      } else {
        this.form.customer.type = "";
      }
    },
  },

  methods: {
    toPath(key) {
      if (key === "client") return "/registerClient";
      if (key === "consultant") return "/regiserConsultant"; 
      if (key === "office") return "/registerOffice"; 
      // باقي الأنواع لو ما عندها صفحات حالياً:
      return "#";
    },
    isActiveType(key) {
      const path = this.$route.path;
      if (key === "client") return path.startsWith("/registerClient");
      if (key === "consultant") return path.startsWith("/regiserConsultant");
      if (key === "office") return path.startsWith("/registerOffice");
      return false;
    },
    nextStep() {
      this.step = Math.min(this.step + 1, this.steps.length - 1);
    },

    /* عند الضغط على حفظ في الخطوة الأخيرة نعرض شاشة OTP */
    submit() {
      // TODO: نفّذ حفظ البيانات للـ API هنا ثم اعرض OTP عند النجاح
      this.showOtp = true;
      this.startOtpTimer();

      // ركّز أول خانة بعد عرض الواجهة
      this.$nextTick(() => {
        if (this.otpRefs[0]) this.otpRefs[0].focus();
      });
    },

    /* ===== OTP Handlers ===== */
    onOtpInput(i, e) {
      const val = e.target.value.replace(/\D/g, "");
      this.otp[i] = val.slice(-1);
      if (val && this.otpRefs[i + 1]) this.otpRefs[i + 1].focus();
    },
    onOtpBackspace(i, e) {
      if (!this.otp[i] && this.otpRefs[i - 1]) {
        this.otpRefs[i - 1].focus();
      } else {
        this.otp[i] = "";
      }
    },
    onOtpPaste(e) {
      const paste = (e.clipboardData || window.clipboardData)
        .getData("text")
        .replace(/\D/g, "");
      if (!paste) return;
      for (let i = 0; i < Math.min(6, paste.length); i++) {
        this.otp[i] = paste[i];
      }
      this.$nextTick(() => {
        const next = Math.min(paste.length, 5);
        if (this.otpRefs[next]) this.otpRefs[next].focus();
      });
    },

    startOtpTimer() {
      this.clearOtpTimer();
      this.otpTimer = 60;
      this.otpInterval = setInterval(() => {
        if (this.otpTimer > 0) this.otpTimer--;
        else this.clearOtpTimer();
      }, 1000);
    },
    clearOtpTimer() {
      if (this.otpInterval) {
        clearInterval(this.otpInterval);
        this.otpInterval = null;
      }
    },

    async verifyOtp() {
      const code = this.otp.join("");

      // TODO: استبدل الشرط باستدعاء API الفعلي
      const ok = code === "123456";

      if (!ok) {
        this.errors.otp = "الرمز غير صحيح، حاول مرة أخرى.";
        this.otpSuccess = false;
        return;
      }

      // نجاح
      this.errors.otp = "";
      this.otpSuccess = true;

      // أوقف مؤقت الإرسال
      this.clearOtpTimer();

      // (اختياري) بعد 800ms اعرض رسالة نجاح/أعد توجيه
      setTimeout(() => {
        // مثال 1: إغلاق شاشة OTP والعودة للنموذج (لو حاب)
        // this.showOtp = false;

        // مثال 2: توجيه لصفحة رئيسية/لوحة التحكم
        // this.$router.push({ name: "dashboard" });

        // مثال 3: عرض تنبيه بسيط
        alert("تم التحقق بنجاح ✅");
      }, 800);
    },

    resendOtp() {
      if (this.otpTimer > 0) return;
      // TODO: نادِ API لإعادة إرسال الرمز
      this.otp = ["", "", "", "", "", ""];
      this.otpSuccess = false;
      this.errors.otp = "";
      this.startOtpTimer();
      if (this.otpRefs[0]) this.otpRefs[0].focus();
    },
  },

  beforeUnmount() {
    this.clearOtpTimer();
  },
};
</script>

<style scoped>
:host,
:root,
section {
  direction: rtl;
}
</style>
