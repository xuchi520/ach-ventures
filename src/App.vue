<template>
  <div id="app">
    <!-- <headerBar></headerBar> -->
    <router-view v-if="isRouterAlive"></router-view>
    <footerBar></footerBar>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, provide, nextTick, onMounted } from 'vue'
import useHook from './../common/useHook'
import headerBar from './components/headerBar.vue'
import footerBar from './components/footerBar.vue'

// import Vconsole from "vconsole";
// const vconsole = new Vconsole()
export default defineComponent({
  components: {
    headerBar,
    footerBar
  },
  setup() {
    let timer: any;
    const { handleScroll } = useHook()
    const data = reactive({
      isRouterAlive: true
    })
    // 局部组件刷新
    const reload = () => {
      data.isRouterAlive = false;
      nextTick(() => {
        data.isRouterAlive = true;
      });
    };
    provide("reload", reload);
    onMounted(() => {
      // handleScroll()
      if (timer) {
        clearInterval(timer)
      }
      handleScroll()
      timer = window.addEventListener('resize', handleScroll);
    })
    return {
      ...toRefs(data),
      reload,
    }
  },
})

</script>
<style lang='scss'>
#app {
  width: 100%;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  background: url('./assets/images/page-bg.png'), lightgray 50% / cover no-repeat;
}

* {
  margin: 0;
  padding: 0;
}
</style>