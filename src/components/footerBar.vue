<template>
  <div class='btm-container'>
    <div class="line-btm"></div>
    <div class="btm-mark">
      <div class="mark-left">© Copyright 2023 Greylock Partners</div>
      <div class="mark-left">Term of Use</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  components: {},
  setup() {
    const { proxy } = getCurrentInstance() as any
    const router = useRouter()
    const queryRoute = useRoute()
    const data = reactive({})
    onMounted(() => {

    })
    const infoMethods = {

    }
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
    }
  },
})

</script>
<style scoped lang='scss'>
@media screen and (max-width: 600px) {
  .btm-container {
    padding-top: 100px;
    .line-btm{
      display: none;
    }
    .btm-mark{
      display: none;
    }
  }
}

@media screen and (min-width:600px) and (max-width: 800px) {
  .btm-container {
    max-width: 800px;
    margin: 100px auto;
    padding-bottom: 106px;

    .line-btm {
      width: 100%;
      height: 1px;
      background: #999;
    }

    .btm-mark {
      font-size: 16px;
      color: #666;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
    }

  }
}

@media screen and (min-width:800px) and (max-width: 1000px) {
  .btm-container {
    max-width: 1000px;
    margin: 100px auto;
    padding-bottom: 106px;

    .line-btm {
      width: 100%;
      height: 1px;
      background: #999;
    }

    .btm-mark {
      font-size: 16px;
      color: #666;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
    }

  }
}
</style>