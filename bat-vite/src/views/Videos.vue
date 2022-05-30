<template>
  <div>
    <el-upload
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :limit="1"
      :on-exceed="handleExceed"
      :auto-upload="true"
      accept=".mp4"
    >
      <template #trigger v-show="true">
        <el-button type="primary">upload file</el-button>
      </template>
      <!-- <template #file> </template> -->
      <!-- <template #tip>
        <div class="el-upload__tip text-red">
          limit 1 file, new file will cover the old file
        </div>
      </template> -->
    </el-upload>
    <!-- <el-button type="primary" @click="handleAddVideo">Upload</el-button> -->
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
      <el-table-column width="150" align="center" label="Date">
        <template #default="scope">{{ scope.row.date.substr(0, 10) }}</template>
      </el-table-column>
      <el-table-column prop="title" width="450" align="center" label="Title">
      </el-table-column>

      <el-table-column label="操作" width="180" align="center">
        <template #default="scope">
          <el-button
            type="text"
            icon="edit"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑弹出框 -->
    <el-dialog title="编辑" v-model="editVisible" width="50%">
      <el-form label-width="60px">
        <el-form-item label="Title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveEdit">确 定</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog title="Upload" v-model="uploadShow" width="50%">
      <el-form label-width="60px">
        <el-form-item label="upload">
          <!-- <el-input v-model="form.title"></el-input> -->
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="uploadShow = false">取 消</el-button>
          <el-button type="primary" @click="saveUpload">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "axios";
var tableData = ref([]);
// axios.get("http://jsonplaceholder.typicode.com/posts")
var limit = 50,
  offset = 0,
  action = 0,
  id = 1,
  field = "sex",
  value = 1, //1male 0female
  orderby = "id",
  order = "desc";
axios
  .get("http://www.batenglish.cn:3000/course", {
    params: { action, limit, offset, id, field, value, orderby, order },
  })
  .then((res) => {
    console.log(res.data);
    tableData.value = res.data;
  });

// const labels = {
//   'id',
//   'date',
//   'title',
//   'analysis_img',
//   'tips_img',
//   'video_title',
//   'video_url',
//   'audio_title',
//   'audio_url',
//   'irc_title',
//   'irc_url',
//   'irc_content',
//   'is_deleted',
//   'create_user',
//   'create_at',
//   'update_user',
//   'update_at'
// };
const editVisible = ref(false);
let form = reactive({
  id: "",
  title: "",
});
let idx = -1;
const handleEdit = (index, row) => {
  idx = index;
  Object.keys(form).forEach((item) => {
    console.log(item);
    form[item] = row[item];
  });
  editVisible.value = true;
};
const saveEdit = () => {
  Object.keys(form).forEach((item) => {
    tableData.value[idx][item] = form[item];
  });
  axios
    .get("http://www.batenglish.cn:3000/course", {
      params: {
        action: 2,
        limit,
        offset,
        id: form.id,
        field: "title",
        value: form.title,
        orderby,
        order,
      },
    })
    .then((res) => {
      console.log(res);
      editVisible.value = false;
      ElMessage.success(`修改第 ${idx + 1} 行成功`);
    });
};
const uploadShow = ref(false);
const upload = ref();
const handleExceed = (files) => {
  console.log(files);
};
const handleAddVideo = () => {
  upload.value.handleStart();
};
const saveUpload = () => {
  // axios
  //   .get("http://www.batenglish.cn:3000/course", {
  //     params: {
  //       action: 3,}
  //   }).then()
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
