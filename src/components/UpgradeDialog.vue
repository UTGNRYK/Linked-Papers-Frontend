

<script setup lang="ts">
import { ref } from "vue";
import { userUpdate } from "../api/user";

const dialogVisible = ref(false);

// 开关弹窗
export function openDialog() {
  dialogVisible.value = true;
}
const closeDialog = () => {
  dialogVisible.value = false;
};

// 确认升级为 VIP 的方法
const confirmUpgrade = async () => {
  try {
    const updateInfo = { role: "VIP" };
    const res = await userUpdate(updateInfo);
    if (res) {
      sessionStorage.setItem("role", "VIP"); // 更新 sessionStorage 中的角色
      alert("升级成功，您现在是 VIP 用户！");
      closeDialog();
      location.reload(); // 刷新页面
    }
  } catch (error) {
    console.error("升级失败：", error);
    alert("升级失败，请重试。");
  }
};
</script>

<template>
  <el-dialog
      v-model="dialogVisible"
      title="VIP 升级"
      width="30%"
  >
    <img src="../../public/img.png" style="width: 100%; margin-bottom: 20px;" />
    <span>确认升级为VIP？</span>

    <template #footer>
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="confirmUpgrade">已支付</el-button>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
