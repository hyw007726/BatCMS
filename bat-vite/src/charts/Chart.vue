<template>
  <div class="Echarts">
    <div :id="id"></div>
  </div>
</template>

<script setup>
// import * as echarts from "echarts";
import { onMounted } from "vue";
import { inject } from "vue";

let echarts = inject("ec");
const props = defineProps({
  option: Object,
  width: Number,
  height: Number,
  id: String,
});

function myEcharts() {
  var myChart = echarts.init(document.getElementById(props.id), null, {
    width: props.width,
    height: props.height,
  });
  myChart.setOption(props.option);
}
onMounted(() => {
  // console.log(props);
  myEcharts();
});
</script>

<style scoped></style>
