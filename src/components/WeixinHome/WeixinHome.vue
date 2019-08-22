<template>
    <div class="lisser">
        <div class="header-b" v-allbg>
            <div class="header-text">微信(45)</div>
            <div class="header-top" @click="newbar"><i class="iconfont">&#xe650;</i></div>
            <div class="search-top" v-allbg>
                <input type="text" name="" v-model="search" >
                <!-- <span>搜索</span> -->
            </div>
            <div class="newbars" v-show="barShow">
                <ul>
                    <li><i class="iconfont">&#xe743;</i><span>发起群聊</span></li>
                    <li><i class="iconfont">&#xe743;</i><span>添加朋友</span></li>
                    <li><i class="iconfont">&#xe743;</i><span>扫一扫</span></li>
                    <li><i class="iconfont">&#xe743;</i><span>收付款</span></li>
                </ul>
            </div>
        </div>

        <div class="items-list">
            <div class="items" v-for="newa in news">
                <div class="item-img"><img :src="newa.img"  alt=""></div>
                <div class="item-text" ref="companyStyle">
                    <div class="item-text-title">{{newa.title}}</div>
                    <div class="item-text-cont">{{newa.content}}</div>
                </div>
                <div class="time">{{newa.time}}</div>
                <div class="line"></div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'WeixinHome',
        props: {
            msg: String
        },
        data(){
            return {
                barShow:false,
                news:[],
                search:'',
            }
        },
        methods:{
            newbar:function(){
                    if(this.barShow){
                        this.barShow=false;
                    }else{
                        this.barShow=true;
                    }

            },

        },
        created(){
          this.$http.get('./../news.json')
          .then(function(data){
                this.news=data.body
          })
        }
    }
</script>
<style scoped>
ul{
    padding:0;
    margin:0;
}
.lisser{
    max-width:1200px;
    min-width:600px;
}
/* 头部 */
.header-b{
    width: 100%;
    max-width:1200px;
    min-width:600px;
    background-color: #e7e7e7;
    position:relative;
    position: fixed;
    top:0;
    z-index:1;
}
.header-text{
    display: inline-block;
    font-size: 1rem;
    height:50px;
    line-height:50px;
}
.header-top{display: inline-block;position: absolute;right: 10px;top:15px;}
/* 右上角加号弹出框 */
.newbars{
    position: absolute;
    top: 42px;
    right: 6px;
    z-index: 3;
    background: #544343;
    color: #fff;
    border-radius:3px;
}
.newbars ul{
    /* padding:20px 20px; */
    text-align:left;
}
.newbars ul li {
    list-style:none;
    height:40px;
    line-height:40px;
    padding:0 25px;
    /* padding-bottom:20px; */
    position: relative;
}
.newbars ul li:after{
    display:block;
    content:' ';
    width:90px;
    position: absolute;
    bottom:0;
    right:0;
    height:1px;
    background:#888;
}
.newbars ul li:last-child{
    padding-bottom:0;
}
.newbars ul li span{
    margin-left:10px;
}
/* 搜索 */
.search-top{
    width: 100%;
    height: 50px;
    max-width:1200px;
    min-width:600px;
    background-color: #e7e7e7;
    position:relative;
    position: fixed;
    top:50px;
    z-index:1;
}
.search-top input{
    position: absolute;
    width: 90%;
    height: 30px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border:none;
    border-radius:3px;
    outline:none;
    padding-left:10px;
    z-index:1;
}
.search-top span{
    position: absolute;
    height: 18px;
    font-size:0.7rem;
    z-index:1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
}
/* 列表 */
.items-list{
    margin-top:100px;
}
.items{
    padding:10px;
    position: relative;
}
.items:after{
    display: block;
    content:' ';
    clear: both;
}
.item-img{
    width:50px;
    height:50px;
    float:left;
    margin-right:20px;
}
.item-img img{
    width:50px;
    height:50px;
    border-radius:3px;
}

.item-text{
    float: left;
    display: table;
    text-align: left;
    line-height: 25px;
    width:calc(100% - 70px);
}
.item-text-title{
    display: table-row;
    font-size: 1rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-text-cont{
    display:table-row;
    color:#999;
    font-size:0.8rem;
}
.line{
    width: calc(100% - 70px);
    height: 1px;
    background: #e7e7e7;
    position: absolute;
    right: 0;
    bottom: 0;
}
.time{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size:0.5rem;
}
</style>