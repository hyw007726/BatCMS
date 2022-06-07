<template>
  <div>
    <el-dialog v-model="uploadShow" title="Upload" width="50%">
      <el-form label-width="60px">
        <el-form-item label="Title">
          <el-input v-model="data.title" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <span style="width: 60px; padding: 15px 15px">Date</span>
        <el-date-picker
          ref="datePicker"
          v-model="data.date"
          type="date"
          placeholder="Pick a day"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
          @change="dateChange"
        />
      </div>
      <br />
      <el-upload
        ref="upload"
        action="http://www.batenglish.cn:3000/upload"
        :limit="4"
        :on-change="handleChange"
        :auto-upload="false"
        accept=".mp4,.mp3,.txt,.png"
        multiple
        :file-list="fileList"
        :data="data"
        :on-success="handleSuccess"
      >
        <template #trigger>
          <el-button type="primary">Upload file</el-button>
        </template>
      </el-upload>
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
import { ElMessage } from "element-plus";
const uploadShow = ref(false);
defineExpose({ uploadShow });
const upload = ref();
const datePicker = ref();
const fileList = ref([]);
const data = reactive({
  date: "test",
  id: "test",
  fileCount: 0,
  title: "",
});
const handleChange = (file, files) => {
  // console.log(file, files);
  // console.log(file.raw);
};

const saveUpload = () => {
  if (!data.date) {
    ElMessage.error("You must choose a date.");
    datePicker.value.focus();
  } else {
    if (!data.title) data.title = "Test";
    data.id = Date.parse(new Date());
    data.fileCount = fileList.value.length;
    upload.value.submit();
  }
};
const handleSuccess = (res) => {
  console.log(res);
  uploadShow.value = false;
  // upload.value.clearFiles();
  fileList.value = [];
  data.date = "";
};

const shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
];
const disabledDate = (time) => {
  // return time.getTime() > Date.now();
};
const dateChange = (d) => {
  // console.log(d);
};
</script>
