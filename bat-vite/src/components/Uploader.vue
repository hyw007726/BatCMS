<template>
  <div>
    <el-dialog v-model="uploadShow" title="Upload" width="50%">
      <span style="width: 60px; padding: 5px 15px">Date</span>
      <el-date-picker
        ref="datePicker"
        v-model="data.date"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
        :shortcuts="shortcuts"
        @change="dateChange"
      />

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
  date: "",
});
const handleChange = (file, files) => {
  // console.log(file, files);
  // console.log(file.raw);
};

const saveUpload = () => {
  if (!data.date) {
    ElMessage.error("You must choose a date.");
    datePicker.value.focus();
  } else upload.value.submit();
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
