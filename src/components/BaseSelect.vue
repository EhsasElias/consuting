<template>
  <div class="flex flex-col gap-1">
    <label
      v-if="label"
      class="block text-sm font-medium text-slate-700 dark:text-slate-300"
    >
      {{ label }}
    </label>

    <select
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-3 transition-all bg-white border rounded-lg h-11 border-slate-300 dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      <option disabled value="">{{ placeholder || "اختر..." }}</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>

    <p v-if="hint" class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
      {{ hint }}
    </p>
    <p v-if="error" class="text-xs text-red-600 mt-0.5">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    label: String,
    modelValue: [String, Number],
    options: { type: Array, required: true },
    placeholder: String,
    hint: String,
    error: String,
  },
};
</script>
