<template>
  <div class='container'>
    <img src="./../assets/images/logo.png" class="banner-img" @click="goHome">
    <div class="banner-text">
      <div class="text" :class="{'linkClass': linkClass === 'About'}" @click="goView('About')">
      <span>About</span>
      <img :src="active" class="active-icon">
      <div class="about-menu" v-show="isShow">
        <div class="menu-title">About</div>
        <div class="menu-box">
          <div class="menu-row" @click="goHome">
            <div class="border-radius"></div>
            <div class="nav-text">About</div>
          </div>
          <div class="menu-row1" @click="goTeam">
            <div class="border-radius"></div>
            <div class="nav-text1">Team</div>
          </div>
        </div>
      </div>
      </div>
      <div class="text1" :class="{'linkClass': linkClass === 'Portfolios'}" @click="goView('Portfolios')">
      <span>Portfolios</span>
      <img :src="active" class="active-icon">
      <div class="about-menu" v-show="isShow1">
        <div class="menu-title">Portfolios</div>
        <div class="menu-box">
          <div class="menu-row" @click="goPortfolios">
            <div class="border-radius"></div>
            <div class="nav-text">Funding</div>
          </div>
          <div class="menu-row1" @click="goProjects">
            <div class="border-radius"></div>
            <div class="nav-text1">Projects</div>
          </div>
        </div>
      </div>
      </div>
      <div class="text2" :class="{'linkClass': linkClass === 'Contact'}" @click="goView('Contact')">Contact</div>
    </div>
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
    const data = reactive({
      isShow:false,
      isShow1:false,
      linkClass:'About',
      active: new URL('./../assets/images/arrow.svg',import.meta.url).href
    })
    onMounted(() => {
      
    })
    const infoMethods = {
      goView(name:any){
        if(name === 'About'){
          data.isShow1 = false
          data.isShow = !data.isShow
        }
        if(name === 'Portfolios'){
          data.isShow = false
          data.isShow1 = !data.isShow1
        }
        if(name === 'Contact'){
          router.push(`/${name}`);
          data.isShow =false
          data.isShow1 =false
        }
        data.linkClass = name;
      },
      goHome(){
        router.push('/')
      },
      goTeam(){
        router.push('/Team')
      },
      goPortfolios(){
        router.push('/Portfolios1')
      },
      goProjects(){
        router.push({
                name:'portfolios',
                params:{
                    no:2
                }
            })
      }
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
.container{
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
}
.banner-img{
  display: block;
  width: 164px;
  height: 40px;
  object-fit: cover;
  cursor: pointer;
}
.banner-text{
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #666666;
  font-size: 24px;
  font-weight: 400;
}
.text{
  margin-right: 80px;
  width: 75px;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}
.text1{
  margin-right: 80px;
  width: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
}
.text2{
  width: 100px;
  text-align: center;
}
.linkClass{
  font-size: 24px;
  color: #000;
  font-weight: bold;
}
.active-icon{
  margin-left: 12px;
}
.about-menu{
  position: absolute;
  top: 43px;
  left: 0;
  width: 272px;
  height: 242px;
  flex-shrink: 0;
  border: 1px solid #EEE;
  background: #FFF;
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.08);
}
.menu-title{
  font-size: 20px;
  color: #999;
  font-weight: 400;
  margin-top: 36px;
  margin-left: 36px;
  margin-right: 36px;
  text-align: left;
  border-bottom: 1px solid #999;
  padding-bottom: 24px;
}
.menu-box{
  margin-top: 24px;
  margin-left: 36px;
  margin-right: 36px;
}
.nav-text{
  font-size: 20px;
  color: #333;
  margin-left: 8px;
  font-weight: 400;
}
.nav-text1{
  font-size: 20px;
  color: #333;
  margin-left: 8px;
  font-weight: 400;
}
.menu-row{
  display: flex;
  align-items: center;
}
.menu-row1{
  margin-top: 32px;
  display: flex;
  align-items: center;
}
.border-radius{
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #333;
  margin-top: 3px;
}
</style>