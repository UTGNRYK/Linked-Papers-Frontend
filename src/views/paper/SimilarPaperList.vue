<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import {getSimilarPaperById} from "../../api/paper";
import PaperItem from "../components/PaperItem.vue";
import { ElPagination } from "element-plus";

interface Paper {
  id: string;
  title: string;
}

const route = useRoute();
const id = ref(route.params.paperId as string); // 获取论文ID
const paperId =+ id;
const papers = ref<Paper[]>([]); // 存储同类论文列表
const totalPapers = ref(0); // 存储同类论文总数
const currentPage = ref(1); // 当前页码
const papersPerPage = 10;

const fetchSimilarPapers = async () => {
  try {
    const res = await getSimilarPaperById(paperId,currentPage.value);
    if (res && res.data) {
      papers.value = res.data.result; // 设置同类论文列表
      totalPapers.value = res.data.result; // 设置总数
    }
  } catch (error) {
    console.error("获取同类论文失败：", error);
  }
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
  fetchSimilarPapers(); // 根据当前页重新获取论文数据
};

onMounted(() => {
  fetchSimilarPapers();
});
</script>

<template>
  <div class="paper-list-page">
    <h2>同类论文列表</h2>
    <div class="paper-list">
      <PaperItem
          v-for="paper in papers"
          :key="paper.id"
          :paperVO="paper"
      />
    </div>

    <el-pagination
        :current-page="currentPage"
        :page-size="papersPerPage"
        :total="totalPapers"
        @current-change="handlePageChange"
        layout="prev, pager, next, jumper"
    />
  </div>
</template>
