

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{options:any,value:any}>(),{options:null})

const values = computed(() => {
  if (props.value !== null && typeof props.value !== 'undefined') {
    return Array.isArray(props.value) ? props.value : [String(props.value)];
  } else {
    return [];
  }
})

</script>
<template>
  <div>
    <template v-for="(item, index) in options">
      <template v-if="values.includes(item.value)">
        <span
          v-if="item.elTagType == 'default' || item.elTagType == ''"
          :key="item.value"
          :index="index"
          :class="item.elTagClass"
        >{{ item.label }}</span>
        <el-tag
          v-else
          :disable-transitions="true"
          :key="item.value + ''"
          :index="index"
          :type="item.elTagType === 'primary' ? '' : item.elTagType"
          :class="item.elTagClass"
        >{{ item.label }}</el-tag>
      </template>
    </template>
  </div>
</template>


<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>
