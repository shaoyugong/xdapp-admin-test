<template>
    <el-select v-model="type" :size="style" clearable placeholder="货币">
        <el-option v-for="(info, key) in maps" :key="ikey" :label="key + '-' + info.label" :value="key"></el-option>
    </el-select>
</template>

<script>
  import {CURRENCY_MAP} from './index';

  export default {
    name: 'currency',
    props: [
        'value',
        'map',
        'size'
    ],
    data() {
      return {
          type: this.value,
          style: this.size,
          maps: this.map ? this.map : CURRENCY_MAP,
      };
    },
    watch: {
      type(currency) {
        this.$emit('input', currency)
      }
    }
  }
</script>
