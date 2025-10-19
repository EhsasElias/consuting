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
          <div
            class="p-4 bg-white border rounded-xl border-slate-200 dark:bg-slate-800 dark:border-slate-700"
          >
            <!-- موبايل: شريط مختصر -->
            <div class="flex items-center justify-between sm:hidden">
              <div
                class="text-xs font-semibold text-slate-700 dark:text-slate-200"
              >
                الخطوة {{ step + 1 }} من {{ steps.length }}
              </div>
              <div class="flex items-center gap-1">
                <span
                  v-for="(s, i) in steps"
                  :key="s.key"
                  class="inline-block transition-all rounded-full"
                  :class="
                    step === i
                      ? 'w-2.5 h-2.5 bg-primary'
                      : 'w-2 h-2 bg-slate-300 dark:bg-slate-600'
                  "
                ></span>
              </div>
            </div>

            <!-- موبايل: شريط تقدّم -->
            <div class="mt-2 sm:hidden">
              <div
                class="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
              >
                <div
                  class="h-2 transition-all rounded-full bg-primary"
                  :style="{
                    width: Math.round(((step + 1) / steps.length) * 100) + '%',
                  }"
                ></div>
              </div>
            </div>

            <!-- من sm وما فوق: الشكل الحالي مع تمرير عند الحاجة -->
            <div class="items-center hidden gap-3 sm:flex">
              <div
                class="flex items-center w-full gap-2 overflow-x-auto no-scrollbar"
              >
                <template v-for="(s, i) in steps" :key="s.key">
                  <div class="flex items-center flex-none gap-2">
                    <span
                      class="inline-flex items-center justify-center text-xs font-bold border rounded-full size-7"
                      :class="
                        step >= i
                          ? 'bg-primary text-white border-primary'
                          : 'bg-white dark:bg-slate-900 text-primary border-slate-300 dark:border-slate-600'
                      "
                    >
                      {{ i + 1 }}
                    </span>
                    <span
                      class="text-sm"
                      :class="
                        step >= i
                          ? 'text-primary font-semibold'
                          : 'text-slate-500 dark:text-slate-400'
                      "
                    >
                      {{ s.title }}
                    </span>
                  </div>
                  <div
                    v-if="i < steps.length - 1"
                    class="flex-1 h-px bg-slate-200 dark:bg-slate-700"
                  ></div>
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

                <BaseInput
                  label="الاسم"
                  v-model="form.consultant.name"
                  :error="errors.name"
                  placeholder="مثال: مكتب خبراء الاستشارات"
                />

                <BaseInput
                  label="رقم الرخصة"
                  v-model="form.consultant.licenseNo"
                  :error="errors.licenseNo"
                  inputmode="numeric"
                  placeholder="مثال: 123456"
                />

                <BaseInput
                  label="اسم المستشار"
                  v-model="form.consultant.consultantName"
                  :error="errors.consultantName"
                  placeholder="مثال: أحمد العتيبي"
                />

                <BaseInput
                  label="رقم الجوال"
                  v-model="form.consultant.mobile"
                  :error="errors.mobile"
                  inputmode="tel"
                  placeholder="05XXXXXXXX"
                />

                <BaseInput
                  class="md:col-span-2"
                  label="الإيميل الرسمي"
                  v-model="form.consultant.email"
                  :error="errors.email"
                  type="email"
                  placeholder="name@office.sa"
                />

                <BaseInput
                  class="md:col-span-2"
                  label="الرقم السري"
                  v-model="form.consultant.password"
                  :error="errors.password"
                  type="password"
                  placeholder="••••••••"
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

              <!-- STEP 4: المؤهلات العلمية -->
              <div
                v-else-if="step === 3"
                class="grid grid-cols-1 gap-4 md:grid-cols-2"
              >
                <!-- المؤهلات العلمية -->
                <BaseInput
                  label="المؤهلات العلمية"
                  v-model="form.org.degree"
                  :error="errors.degree"
                  placeholder="مثال: ماجستير إدارة أعمال"
                />

                <!-- التخصص -->
                <BaseInput
                  label="التخصص"
                  v-model="form.org.specialization"
                  :error="errors.specialization"
                  placeholder="مثال: إدارة مشاريع"
                />

                <!-- مرفق الشهادة -->
                <BaseFile
                  label="مرفق الشهادة"
                  v-model="form.org.certificateFile"
                  :error="errors.certificateFile"
                  accept=".pdf,.jpg,.jpeg,.png"
                />

                <!-- مرفقات الوثائق -->
                <div class="md:col-span-2">
                  <label
                    class="block mb-1 text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    مرفقات الوثائق
                  </label>

                  <div class="space-y-2">
                    <div
                      v-for="(doc, index) in form.org.documents"
                      :key="index"
                      class="flex items-center gap-2"
                    >
                      <BaseFile
                        v-model="form.org.documents[index].file"
                        :label="`مرفق ${index + 1}`"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <BaseInput
                        v-model="form.org.documents[index].title"
                        :label="`عنوان ${index + 1}`"
                        placeholder="كتابة عنوان مرفق"
                      />
                      <button
                        type="button"
                        class="px-3 py-2 mt-5 text-xs font-semibold text-white bg-red-500 rounded-md hover:bg-red-600"
                        @click="removeDocument(index)"
                      >
                        حذف
                      </button>
                    </div>
                  </div>

                  <!-- زر الإضافة -->
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 mt-2 text-sm font-semibold text-white rounded-md bg-primary hover:bg-primary/90"
                    @click="addDocument"
                  >
                    <i class="mr-1 text-lg mdi mdi-plus-circle-outline"></i>
                    إضافة مرفق
                  </button>
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
                    form.consulting.mobile || form.consulting.email
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
        { key: "consulting", title: "معلومات المستشار" },
        { key: "address", title: "العنوان الوطني" },
        { key: "bank", title: "البيانات البنكية" },
        { key: "org", title: "بيانات المستشار" },
      ],
      form: {
        consulting: {
          name: "", // الاسم
          licenseNo: "", // رقم الرخصة
          consultantName: "", // اسم المستشار
          mobile: "", // رقم الجوال
          email: "", // الإيميل الرسمي
          password: "",
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
        org: {
          cr: "", // رقم السجل
          crAttachment: null, // مرفق السجل
          orgNo: "", // رقم المنشأة
          orgAttachment: null, // مرفق رقم المنشأة
          unifiedNo: "", // الرقم الموحد
          unifiedAttachment: null, // مرفق الرقم الموحد
          taxNo: "", // الرقم الضريبي

          // 🎓 المؤهلات العلمية
          degree: "", // المؤهلات العلمية
          specialization: "", // التخصص
          certificateFile: null, // مرفق الشهادة

          // 📎 مرفقات الوثائق
          documents: [
            { file: null, title: "" }, // مرفق + عنوان
          ],
        },

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

    // one v-model that switches between consulting.type and consultant.type
    selectedTypeModel: {
      get() {
        return this.isClient
          ? this.form.consulting?.type ?? ""
          : this.form.consultant?.type ?? "";
      },
      set(val) {
        if (this.isClient) this.form.consulting.type = val;
        else this.form.consultant.type = val;
      },
    },
  },

  watch: {
    selectedClientType(newVal) {
      if (newVal === "client") {
        this.form.consultant.type = "";
      } else {
        this.form.consulting.type = "";
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
    addDocument() {
  this.form.org.documents.push({ file: null, title: "" });
},
removeDocument(index) {
  this.form.org.documents.splice(index, 1);
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
