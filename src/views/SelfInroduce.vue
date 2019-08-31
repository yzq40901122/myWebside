<template>
    <div class="self">
        <!-- <div class="img"></div> -->
        <img src="../../static/images/de_portrait.png" class="img" alt="">
        <div class="content">
            <h2>尹竹群</h2>
            <div class="work">
                <div class="clearfix">
                    <span>前端开发</span><span class="line"></span><span>UI设计</span>
                </div>
            </div>
            <div class="sp-line"></div>
            <aside class="other">
                目前就职于莱弗德网络科技，岗位是前端开发，UI设计及负责部分测试工作
            </aside>
            <router-link class="more1" to="">更多  &gt;</router-link>
            <!-- <button class="more"></button> -->
        </div>
        
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>
.self{
    width: 22%;
    height: 100%;
    float: left;
    /* background: #222328; */
    box-sizing: border-box;
    padding: 7.8rem 0rem 3rem;
    position: relative;
    border-radius: 2rem 0 0 2rem;
}
.img{
    display: block;
    margin: 0 auto 0;
    width: 12rem;
    height: 12rem;
    background: #e1e1e1;
    border-radius: 50%;
}
.content{
    position: relative;
    width: 12rem;;
    margin: 1.5rem auto;
}
h2{
    width: 100%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #111111;
    font-size: 1.5rem;
    font-weight: 500;
}
.line{
    width: 50%;
    height: 1px;
    margin: 2rem auto;
    background: #dedede;
}
.work{
    font-size: 0.9rem;
    color:#666666;
    text-align: center;
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: .5rem;
}
.work span{
    display: block;
    float: left;
}
.work .line{
    width: 1px;
    margin: 0.2rem .5rem;
    height: 0.8rem;
    background: #999999;
}
.sp-line{
    width: 30%;
    height: 2px;
    margin: 1.4rem auto;
    background: #999999;
}
.other{
    font-size: 0.8rem;
    text-align: center;
    color: #666666;
    margin: 0 auto;
    width: 94%;
    line-height: 1.4rem;
}
.more{
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    background-attachment:fixed;
    margin: 2.5rem auto 0;
    display: block;
    background: url("../../static/images/icon.png");
}
.more{
    background-position: -2px -3px;
}
.more:hover{
    background-position: -60px -3px;
}
.more1{
    padding: 0.3rem 0.7rem;
    font-size: 0.5rem;
    position: relative;
    left: 50%;
    display: block;
    float: left;
    transform: translateX(-50%);
    border: none;
    background: none;
    margin-top: 2rem;
    color: #666666;
}
</style>
