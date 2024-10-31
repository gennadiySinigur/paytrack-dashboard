<template>
  <div :style="dividerStyleObject" class="bg-primary-light mb-2"></div>
</template>

<script setup lang="ts">
const { type } = defineProps<{
  type: "horizontal" | "vertical";
}>();

const dividerStyleObject = computed(() => {
  if (type === "horizontal") {
    return {
      height: "2px",
    };
  }

  return {
    width: "2px",
  };
})
</script>