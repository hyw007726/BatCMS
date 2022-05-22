<template>
  <div>
    <!-- {{ data }} -->
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "axios";
var offset = 0;
// axios.get("http://jsonplaceholder.typicode.com/posts")
axios
  .get("http://www.batenglish.cn:3000/member", { params: { offset: offset } })
  .then((res) => {
    console.log(res.data);
    offset = offset + res.data.length;
  });
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
