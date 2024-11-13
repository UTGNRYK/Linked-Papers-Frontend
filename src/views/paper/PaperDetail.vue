<script setup lang="ts">
import { ref, onMounted} from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPaperById} from "../../api/paper";


interface Paper {
  title: string;
  summary: string;
  category: string;
}

const route = useRoute();
const router = useRouter();
const id = ref(route.params.paperId as string);
const paperId =+ id;
const paper = ref<Paper | null>(null);
const role = sessionStorage.getItem('role')

// 获取论文详情的函数
const fetchPaperDetail = async () => {
  try {
    const res = await getPaperById(paperId);
    if (res) {
      paper.value = res.data;
    }
  } catch (error) {
    console.error("获取论文详情失败：", error);
  }
};

// 按钮点击跳转处理，根据角色进行鉴权
const navigateTo = (path: string) => {
  if (path === "similar" || path === "related") {
    if (role !== "VIP") {
      alert("您需要 VIP 角色才能访问此内容");
      return;
    }
  }
  router.push({ name: path, params: { paperId: paperId } });
};

// 页面加载时获取论文详情
onMounted(() => {
  fetchPaperDetail();
});
</script>

<template>
  <div class="paper-detail-container">
    <h2>{{ paper?.title }}</h2>
    <p><strong>摘要：</strong> {{ paper?.summary }}</p>
    <p><strong>类别：</strong> {{ paper?.category }}</p>

    <!-- 按钮部分 -->
    <el-button
        type="primary"
        @click="navigateTo('similarPaperList')"
        style="margin-top: 10px;"
    >
      <el-text>查看同类论文</el-text>
    </el-button>
    <el-button
        type="primary"
        @click="navigateTo('relatedPaperList')"
        style="margin-top: 10px;"
    >
      <el-text>查看相似论文</el-text>
    </el-button>
    <el-button
        type="primary"
        @click="navigateTo('citedPaperList')"
        style="margin-top: 10px;"
    >
      <el-text>查看引用论文</el-text>
    </el-button>
  </div>
</template>

<style scoped>
.paper-detail-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 10px;
}
.paper-detail-container h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}
.paper-detail-container p {
  margin: 10px 0;
}
</style>
