<template>
  <div class="container">
    <div class="title">Contact us</div>
    <div class="row">
      <div class="text-box">
        <div class="borderBottom-class"></div>
        <div class="text">Email</div>
        <div class="router-text">info@atherton.vc ➔</div>
        <div class="borderBottom-class"></div>
        <div class="footer-text">© Copyright 2023 Greylock Partners</div>
      </div>
      <div class="text-box">
        <div class="borderBottom-class"></div>
        <div class="text">Social</div>
        <div class="router-text">Twitter ➔</div>
        <div class="borderBottom-class"></div>
        <div class="footer-text1">Term of Use</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
} from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  components: {},
  setup() {
    const { proxy } = getCurrentInstance() as any;
    const router = useRouter();
    const queryRoute = useRoute();
    const data = reactive({});
    onMounted(() => {});
    const infoMethods = {};
    return {
      ...toRefs(data),
      router,
      queryRoute,
      ...infoMethods,
    };
  },
});
</script>
<style scoped lang='scss'>
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 120px;
  box-sizing: border-box;
}
.title {
  font-size: 48px;
  color: #000;
  font-weight: bold;
  text-align: center;
}
.row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
}
.borderBottom-class{
  width: 488px;
  height: 1px;
  background: #999;
}
.text{
  margin-top: 64px;
  font-size: 16px;
  color: #666;
  font-weight: 400;
}
.router-text{
  font-size: 36px;
  color: #000;
  font-weight: 500;
  margin-top: 100px;
  margin-block: 64px;
}
.footer-text{
  font-size: 16px;
  color: #666;
  font-weight: 300;
  margin-top: 138px;
}
.footer-text1{
  font-size: 16px;
  color: #666;
  font-weight: 300;
  margin-top: 138px;
  text-align: right;
}
</style>