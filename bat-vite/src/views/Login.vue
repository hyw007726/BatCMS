<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">奔流域后台 Riverrun CMS</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="I am a visitor">
            <template #prepend>
              <!-- <el-button icon="el-icon-user"></el-button> -->
              <el-button>
                <el-icon><user /></el-icon>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
            @keyup.enter="submitForm()"
            :disabled="param.username == ''"
          >
            <template #prepend>
              <!-- <el-button icon="lock"></el-button> -->
              <el-button>
                <el-icon><lock /></el-icon>
              </el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">{{
            param.username == "" ? "Log in as a visitor" : "Log in"
          }}</el-button>
        </div>
        <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const router = useRouter();
const param = reactive({
  username: "",
  password: "",
});
const rules = {
  username: [
    {
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [{ message: "请输入密码", trigger: "blur" }],
};
const login = ref(null);
const submitForm = () => {
  // login.value.validate().then(res=>console.log(res))
  login.value.validate((valid) => {
    if (valid && param.username == "wesley" && param.password == 123321) {
      ElMessage.success("Logged in successfully");
      localStorage.setItem("ms_username", param.username);
      router.push("/videos");
    } else {
      localStorage.setItem("ms_username", "visitor");
      ElMessage.success("Logged in as visitor");
      router.push("/overview");
      // ElMessage.error("Failed");
      //   return false;
    }
  });
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
