<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      {{ label }}
    </label>

    <input
      type="file"
      class="block w-full text-sm border rounded-lg file:me-3 file:px-4 file:py-2 file:rounded-md file:border-0 file:text-white file:bg-primary hover:file:bg-primary-light file:cursor-pointer h-11 border-primary/30 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
      @change="$emit('update:modelValue', $event.target.files?.[0] || null)"
    />

    <p v-if="error" class="mt-1 text-xs text-red-600">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseFile",
  props: {
    modelValue: [Object, String], // File | null (نستخدم Object لتجنّب مشاكل وقت البناء)
    label: String,
    error: String,
  },
  emits: ["update:modelValue"],
};
</script>
