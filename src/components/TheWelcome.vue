<script setup>
import { ref } from 'vue'

const a = ref(10)
const b = ref(20)
const c = ref(0)

</script>

<template> 
  <input type="text" id="a" v-model="a" />
  <input type="text" id="b" v-model="b" />
  <div>Result: {{ c }}</div>
  <button id='plus' @click="c=parseInt(a)+parseInt(b)">A+B</button>
  <button id='div' @click="c=parseInt(a)/parseInt(b)">A/B</button>
</template>
