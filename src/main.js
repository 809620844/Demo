import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './Routes.js'

Vue.config.productionTip = false
Vue.use(Resource)
Vue.use(VueRouter)

// 注册一个全局自定义指令 `v-focus`
Vue.directive('allbg', {
    bind:function(el,binding,vnode){
        el.style.background="#f1f1f1"
    }
})

// 创建路由
const router = new VueRouter({
    routes:Routes,
    mode:"history"
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
