<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      {{ label }}
    </label>

    <input
      :type="type"
      :placeholder="placeholder"
      :inputmode="inputmode"
      class="w-full px-3 bg-white border rounded-lg h-11 dark:bg-slate-900 focus:outline-none focus:ring-2 border-primary/30 focus:ring-primary/40 text-slate-800 dark:text-slate-100 placeholder-slate-400"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <p v-if="error" class="mt-1 text-xs text-red-600">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: [String, Number],
    label: String,
    type: { type: String, default: "text" },
    placeholder: String,
    error: String,
    inputmode: String,
  },
  emits: ["update:modelValue"],
};
</script>
