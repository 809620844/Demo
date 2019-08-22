<template>
    <div class="foot-item" v-allbg>
        <ul>
            <router-link to="/" tag="li" exact><i class="iconfont">&#xe743;</i><span>微信</span></router-link>
            <router-link to="/maillist" tag="li" exact><i class="iconfont">&#xe655;</i><span>通讯录</span></router-link>
            <router-link to="/find" tag="li" exact><i class="iconfont">&#xe726;</i><span>发现</span></router-link>
            <router-link to="/Mycenter" tag="li" exact><i class="iconfont">&#xe62d;</i><span>我</span></router-link>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"Footer",
        data(){
            return {

            }
        }
    }
</script>
<style scoped>

.foot-item{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    max-width:1200px;
    min-width:600px;
    line-height: 40px;
    font-size: 0.3rem;
    background-color:#e7e7e7;
    margin:0 auto;
}
ul{
    margin:0;
    padding:0;
}
ul li{
    list-style:none;
    float:left;
    display:block-inline;
    width:25%;
    text-align: center;
    display: flex;
    flex-direction:column;
    position:relative;
}
ul:after{
    display: block;
    clear: both;
    content:" ";
}
ul li i{
    font-size:1.3rem!important;
    display:block;
}
ul li span{
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top:20px;
}
.router-link-active{
    color:red;
}

</style>