<script setup lang="ts">
import { ref, computed } from 'vue';
import { router } from '../../router';
import { userRegister } from "../../api/user.ts";
import { ElMessage } from "element-plus";

// 输入框值
const email = ref('');
const name = ref('');
const password = ref('');
const confirmPassword = ref('');

// Email 格式验证正则
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = computed(() => emailRegex.test(email.value));

// 密码一致性校验
const isPasswordIdentical = computed(() => password.value === confirmPassword.value);

// 注册按钮可用性
const registerDisabled = computed(() => {
  return !(email.value && name.value && password.value && confirmPassword.value && isEmailValid.value && isPasswordIdentical.value);
});

// 注册按钮触发
function handleRegister() {
  userRegister({
    email: email.value,
    name: name.value,
    password: password.value,
  }).then(res => {
    if (res.data.code === '000') {
      ElMessage({
        message: "注册成功！请登录账号",
        type: 'success',
        center: true,
      });
      router.push({ path: "/login" });
    } else if (res.data.code === '400') {
      ElMessage({
        message: res.data.msg,
        type: 'error',
        center: true,
      });
    }
  });
}
</script>

<template>
  <el-main class="main-frame bgimage">
    <el-card class="login-card">
      <div>
        <h1>创建一个新的账户</h1>

        <el-form>
          <el-form-item>
            <label for="email">邮箱</label>
            <el-input id="email" v-model="email" placeholder="请输入邮箱"/>
            <span v-if="email && !isEmailValid" class="error-warn">邮箱格式不正确</span>
          </el-form-item>

          <el-form-item>
            <label for="name">昵称</label>
            <el-input id="name" v-model="name" placeholder="请输入昵称"/>
          </el-form-item>

          <el-form-item>
            <label for="password">密码</label>
            <el-input type="password" id="password" v-model="password" placeholder="••••••••"/>
          </el-form-item>

          <el-form-item>
            <label for="confirm-password">确认密码</label>
            <el-input type="password" id="confirm-password" v-model="confirmPassword" placeholder="••••••••"/>
            <span v-if="confirmPassword&& !isPasswordIdentical" class="error-warn">密码不一致</span>
          </el-form-item>

          <span class="button-group">
            <el-button @click.prevent="handleRegister" :disabled="registerDisabled" type="primary">
              创建账户
            </el-button>
            <router-link to="/login" v-slot="{ navigate }">
              <el-button @click="navigate">去登录</el-button>
            </router-link>
          </span>

        </el-form>
      </div>
    </el-card>
  </el-main>
</template>

<style scoped>
.main-frame {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bgimage {
  background-image: url("../../assets/shopping-1s-1084px.svg");
}

.login-card {
  width: 60%;
  padding: 10px;
}

.error-warn {
  color: red;
}

.button-group {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  justify-content: right;
}
</style>
