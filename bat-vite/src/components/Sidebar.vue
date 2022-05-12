<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-sub-menu>
              <!-- <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item> -->
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <!-- <i :class="item.icon"></i> -->
            <i :class="item.icon" v-html="item.svg"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { computed, watch } from "vue";
import { useStore } from "../store";
import { useRoute } from "vue-router";
const items = [
  {
    index: "/overview",
    title: "Overview",
    icon: "el-icon",
    svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"></path></svg>',
  },
  {
    index: "/userdata",
    title: "Userdata",
    icon: "el-icon",
    svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-ba633cb8=""><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"></path></svg>',
  },
];
// const items = [
//   {
//     icon: "el-icon-lx-home",
//     index: "/dashboard",
//     title: "系统首页",
//   },
//   {
//     icon: "el-icon-lx-cascades",
//     index: "/table",
//     title: "基础表格",
//   },
//   {
//     icon: "el-icon-lx-copy",
//     index: "/tabs",
//     title: "tab选项卡",
//   },
//   {
//     icon: "el-icon-lx-calendar",
//     index: "3",
//     title: "表单相关",
//     subs: [
//       {
//         index: "/form",
//         title: "基本表单",
//       },
//       {
//         index: "/upload",
//         title: "文件上传",
//       },
//       {
//         index: "4",
//         title: "三级菜单",
//         subs: [
//           {
//             index: "/editor",
//             title: "富文本编辑器",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     icon: "el-icon-lx-emoji",
//     index: "/icon",
//     title: "自定义图标",
//   },
//   {
//     icon: "el-icon-pie-chart",
//     index: "/charts",
//     title: "schart图表",
//   },
//   {
//     icon: "el-icon-lx-global",
//     index: "/i18n",
//     title: "国际化功能",
//   },
//   {
//     icon: "el-icon-lx-warn",
//     index: "7",
//     title: "错误处理",
//     subs: [
//       {
//         index: "/permission",
//         title: "权限测试",
//       },
//       {
//         index: "/404",
//         title: "404页面",
//       },
//     ],
//   },
//   {
//     icon: "el-icon-lx-redpacket_fill",
//     index: "/donate",
//     title: "支持作者",
//   },
// ];

const route = useRoute();

const onRoutes = computed(() => {
  return route.path;
});

const store = useStore();
const collapse = computed(() => store.collapse);
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
