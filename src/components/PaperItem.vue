<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router"; // 导入 Vue Router

const props = defineProps({
  paperVO: {
    type: Object,
    required: true
  }
})

const title = ref(props.paperVO.title);

// 使用 Vue Router 进行跳转
const router = useRouter();

const goToDetailPage = (storeId: string) => {
  router.push({ name: 'paperDetail', params: { storeId } });
}
</script>

<template>
  <el-card class="paper-item-card" :body-style="{ padding: '0px' }" shadow="hover" @click="goToDetailPage(props.paperVO.storeId)">
    <div class="paper-item-main">
      <el-row>
        Title : {{title}}
      </el-row>
      <!-- 如果你有其他的属性展示可以在这里加 -->
    </div>
  </el-card>
</template>

<style scoped>
.paper-item-card {
  margin: 20px;
  border-radius: 8px;
  width: 60%;
  cursor: pointer; /* 让卡片可点击 */
}

.paper-item-main {
  margin: 20px;
  line-height: 30px;
}
</style>
