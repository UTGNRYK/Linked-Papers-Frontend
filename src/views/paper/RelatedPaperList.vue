<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getRelatedPaperById } from "../../api/paper";
import PaperItem from "../components/PaperItem.vue";
import { ElPagination } from "element-plus";

interface Paper {
  id: string;
  title: string;
}

const route = useRoute();
const id = ref(route.params.paperId as string);
const paperId =+id;
const papers = ref<Paper[]>([]);
const totalPapers = ref(0);
const currentPage = ref(1);
const papersPerPage = 10;

const fetchRelatedPapers = async () => {
  try {
    const res = await getRelatedPaperById(paperId);
    if (res && res.data) {
      papers.value = res.data.result.papers;
      totalPapers.value = res.data.result.totalCount;
    }
  } catch (error) {
    console.error("获取相关论文失败：", error);
  }
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
  fetchRelatedPapers(); // 根据当前页重新获取论文数据
};

onMounted(() => {
  fetchRelatedPapers();
});
</script>

<template>
  <div class="paper-list-page">
    <h2>相关论文列表</h2>
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
