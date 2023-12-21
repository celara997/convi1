<template>
<label v-for="(item, index) in list" class="form-check" :key="index">
    <input type="radio" id="one" :value="item" v-model="checkedValues" @change="updateValue" />
    {{ item }}
</label>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const { modelValue, list, type } = defineProps(['modelValue', 'list', 'type']);
const emit = defineEmits();

const checkedValues = ref(modelValue);

const updateValue = () => {
  console.log(checkedValues)
  const selectedValue = type === 'unique' ? checkedValues.value : checkedValues.value;
  console.log(selectedValue)
  emit('update:modelValue', selectedValue);
};
</script>