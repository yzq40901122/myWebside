<template>
    <div id="detailImg" class="detail-bg">
        <div class="content-style">
            <vuescroll v-bind:ops="ops">
                <div class="scroll-outside">
                    <div class="clearfix">
                        <h2>{{ data.dataTittle}}</h2>
                    </div>
                    <div class="clearfix content-message">
                        <workslabel v-bind:dataMessage="data"></workslabel>
                        <div class="content-time">
                            <span>满意度：</span><time>{{ data.dataScore}}</time>
                        </div>
                        <div class="content-time">
                            <span>最后修改：</span><time>{{ data.dataTime}}</time>
                        </div>
                        <a v-if="vif.hrefShow" v-on:click="openTargetWindow">前往预览</a>
                    </div>
                    
                    <div class="line"></div>
                    <div class="content-text">
                        <p>{{ data.dataExplainMore }}</p>
                    </div>
                    <div class="content-img">
                        <img v-for="x in data.dataImgUrl" v-bind:src="x">
                    </div>
                </div>
            </vuescroll>
        </div>
    </div>
</template>


<script>
    import vuescroll from "vuescroll"
    import label from "../components/WorksLabel.vue"

    export default {
        data(){
            return {
                title:'测试',
                data:null,
                vif:{
                    hrefShow:false
                },
                ops:{
                    bar:{
                        background:"#d1d1d1",
                        onlyShowBarOnScroll:false,
                        keepShow:false
                    }
                }
            }
        },
        computed:{
  
        },
        methods:{
            openTargetWindow:function(){
                window.open(this.data.dataUrl, "_blank");
                // window.location.href = this.data.dataUrl;
            }
        },
        created(){
            // console.log(this.$store.getters.dataShow);
            this.data = this.$store.getters.dataShow
            console.log(this.data);
            
        },
        mounted(){
            //设置背景图
            let bgDiv = document.getElementById("detailImg");
            const srcLoad = "../../static/images/coverAll4.jpg";
            let imgSrc = (this.data.imageAll && typeof this.data.imageAll === 'string' && this.data.imageAll != "none")?this.data.imageAll:srcLoad;
            bgDiv.style.backgroundImage = 'url("'+imgSrc+'")';

            //设置展示图
            if(!Array.isArray(this.data.dataImgUrl)){
                throw new Error("展示图片的来源必须是数组")
            }

            //设置效果预览按钮
            if(this.data.dataUrl && this.data.dataUrl !== 'none' && typeof this.data.dataUrl === 'string'){
                this.vif.hrefShow = true;
            }
        }
        ,
        props:{
                
        },
        components:{
            "vuescroll":vuescroll,
            "workslabel":label
        }
    };
</script>

<style scoped>
h2{
    font-size: 1.5rem;
    height: 2rem;
    line-height: 2rem;
    color: #111111;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    /* float: left; */
    white-space: nowrap;
}
.label-main{
    margin-right: 1.5rem;
    float: left;
}
.content-time{
    font-size: .9rem;
    color: #999999;
    padding: .2rem 0;
    float: left;
    margin-right: 1rem;
}
.content-time time{
    color: #555555;
}
.label-main span{
    color:#fff;
    display: block;
    padding: .2rem .6rem;
    font-size: .8rem;
    float: left;
    border-radius: 4px;
}
.label-main span:nth-child(2){
    margin-left: .5rem;
}
.content-message{
    margin-top: .9rem;
    margin-bottom: 1rem;
}
.content-message > a{
    display: block;
    float: right;
    font-size: .8rem;
    color: #0057cd;
    position: relative;
    top: 0;
    padding: .2rem 0;
    transition: all .2s;
}
.content-message > a:hover{
    cursor: pointer;
    top: -2px;
    color: #0d4da7;
    text-decoration: underline;
}
.line{
    width: 15%;
    height: 2px;
    background: #333333;
    margin: .6rem 0 .8rem 0;
}
.detail-bg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f5f5f5;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 0;
}
.detail-bg .content-text p{
    font-size: .8rem;
    color: #333333;
    line-height: 1.5rem;
}
.detail-bg .content-img{
    margin-top: .8rem;
}
.detail-bg .content-img img{
    width: 100%;
    display: block;
}
.content-style{
    position: absolute;
    left: 4%;
    top: 12%;
    bottom: 6%;
    right: 48%;
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 1.2rem .5rem 1.2rem 1.2rem;
    background-color: rgba(255, 2555, 255, .75);
}
.scroll-outside{
    padding-right: 1rem;
    padding-top: .5rem;
}
</style>