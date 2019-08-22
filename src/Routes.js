import WeixinHome from './components/WeixinHome/WeixinHome.vue'
import MailList from './components/WeixinHome/MailList.vue'
import Find from './components/WeixinHome/Find.vue'
import MyCenter from './components/WeixinHome/MyCenter.vue'

export default[
    {path:'/',component:WeixinHome},
    {path:'/maillist',component:MailList},
    {path:'/find',component:Find},
    {path:'/Mycenter',component:MyCenter}
]