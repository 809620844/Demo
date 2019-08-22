<template>
  <div id="app">
    <!-- <WeixinHome></WeixinHome> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import WeixinHome from './components/WeixinHome/WeixinHome.vue'
import MailList from './components/WeixinHome/MailList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    WeixinHome,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0;
}
@font-face {
  font-family: 'iconfont';  /* project id 1305033 */
  src: url('//at.alicdn.com/t/font_1305033_j69cr8thari.eot');
  src: url('//at.alicdn.com/t/font_1305033_j69cr8thari.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1305033_j69cr8thari.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1305033_j69cr8thari.woff') format('woff'),
  url('//at.alicdn.com/t/font_1305033_j69cr8thari.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1305033_j69cr8thari.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
</style>
