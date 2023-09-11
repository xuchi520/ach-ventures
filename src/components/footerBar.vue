<template>
  <div class='container'>
  </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, onMounted, getCurrentInstance } from 'vue'
import {useRouter,useRoute} from 'vue-router'
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
<style scoped lang='scss'></style>