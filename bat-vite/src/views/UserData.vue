<template>
  <div>
    <!-- {{ data }} -->
    <el-table
      :data="tableData"
      border
      class="table"
      ref="multipleTable"
      header-cell-class-name="table-header"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="55"
        align="center"
      ></el-table-column>
      <!-- <el-table-column prop="open_id" label="openid"></el-table-column>
      <el-table-column prop="union_id" label="unionid"></el-table-column> -->
      <el-table-column prop="nickname" label="用户名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column label="头像(查看大图)" align="center">
        <template #default="user">
          <el-image
            class="table-td-thumb"
            :src="user.row.avatar"
            :preview-src-list="[user.row.avatar]"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template #default="scope">
          <el-button type="text" icon="edit" @click="changeSex()"
            >改变性别
          </el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column label="账户余额">
          <template #default="scope">￥{{ scope.row.money }}</template>
        </el-table-column>
        <el-table-column label="头像(查看大图)" align="center">
          <template #default="scope">
            <el-image
              class="table-td-thumb"
              :src="scope.row.thumb"
              :preview-src-list="[scope.row.thumb]"
            >
            </el-image>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="状态" align="center">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.state === '成功'
                  ? 'success'
                  : scope.row.state === '失败'
                  ? 'danger'
                  : ''
              "
              >{{ scope.row.state }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column prop="date" label="注册时间"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <el-button
              type="text"
              icon="edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button
              type="text"
              icon="delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column> -->
    </el-table>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "axios";
var offset = 0;
var tableData = ref([]);
// axios.get("http://jsonplaceholder.typicode.com/posts")
axios
  .get("http://www.batenglish.cn:3000/member", { params: { offset: offset } })
  .then((res) => {
    console.log(res.data);
    offset = offset + res.data.length;
    tableData.value = res.data;
  });
const changeSex = () => {
  alert("changeSex");
};
const labels = {
  0: "id",
  1: "open_id",
  2: "nickname",
  3: "avatar",
  4: "sex",
  5: "country",
  6: "province",
  7: "city",
  8: "total_sign_count",
  9: "month_sign_count",
  10: "last_sign_date",
  11: "last_sign_month",
  12: "is_new_user",
  13: "is_admin",
  14: "is_deleted",
  15: "version",
  16: "create_user",
  17: "create_at",
  18: "update_user",
  19: "update_at",
  20: "union_id",
  21: "is_super_vip",
  22: "is_vip",
  23: "expiry_date",
  24: "new_course_notice_time_id",
  25: "not_sign_in_notice_time_id",
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
