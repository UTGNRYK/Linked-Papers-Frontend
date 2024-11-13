<script setup lang="ts">
import {Document,SwitchButton} from "@element-plus/icons-vue"   //图标
import { Search } from "@element-plus/icons-vue"
import {useRouter} from "vue-router";
import {computed} from "vue";
import UpgradeDialog from "../../components/UpgradeDialog.vue"; // 导入封装的弹窗组件
import { openDialog } from "./UpgradeDialog.vue"; // 引入 openDialog 方法

const router = useRouter()
const role = sessionStorage.getItem('role')    //登录的时候插入的

const roleText = computed(() => {
  return role == "VIP" ? "尊贵的 VIP 用户" : "普通用户";
});

// 点击事件处理，根据角色决定是否显示弹窗
const handleClick = () => {
  if (role == "USER") {
    openDialog(); // 仅在用户为 USER 时显示升级弹窗
  } else {
    alert("您已是尊贵的 VIP 用户！");
  }
};
//退出登录
function logout() {
  ElMessageBox.confirm(
      '是否要退出登录？',
      '提示',
      {
        customClass: "customDialog",
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: "warning",
        showClose: false,
        roundButton: true,
        center: true
      }
  ).then(() => {
    sessionStorage.setItem('token', '')
    router.push({path: "/login"})
  })
}
</script>


<template>

  <el-header class="custom-header" height="20">
    <el-row :gutter="20">

      <el-col :span="3" class="header-icon">
        <router-link to="/allStore" v-slot="{navigate}" class="no-link">
          <h1 @click="navigate" class="header-text">论文网站</h1>
        </router-link>
      </el-col>

      <el-col :span="2">

        <el-tag class="role-tag" size="large" @click="handleClick">{{ roleText }}</el-tag>
        <UpgradeDialog />
      </el-col>

      <el-col :span="14"></el-col>

      <el-col :span="1" class="header-icon">
        <router-link to="/search" v-slot="{navigate}">
          <el-icon @click="navigate" :size="35" color="white" style="cursor: pointer" ><Search /></el-icon>
        </router-link>
      </el-col>

      <el-col :span="1" class="header-icon">
        <router-link to="/allOrder" v-slot="{navigate}">
          <el-icon @click="navigate" :size="35" color="white" ><Document /></el-icon>
        </router-link>
      </el-col>


      <el-col :span="1" class="header-icon">
        <a @click="logout">
          <el-icon :size="35" color="white" ><SwitchButton /></el-icon>
        </a>
      </el-col>
    </el-row>
  </el-header>
</template>


<style scoped>
.custom-header {
  background-color: #409eff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  flex-direction: column;
}

.no-link {
  text-decoration: none;
}

.role-tag {
  margin-top: 20px;
  font-size: 20px;
}

.header-text {
  color:white;
  font-size: x-large;
  min-width: max-content;
  margin-top: 15px;
  margin-bottom: 15px;
}

.header-icon {
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
}

</style>
