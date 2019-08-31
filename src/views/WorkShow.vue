<template>
    <div class="works" v-on:mouseover="mouseoverEvent" v-on:mouseleave="mouseleaveEvent">
        <div class="input-screen">
            <input type="text" class="input-style" v-model="searchtitle.content">
            <div class="input-style-div" v-if="!searchtitle.content">
                <span>{{searchtitle.title}}</span>
            </div>
        </div>
        <!-- <div>{{newDataList}}</div> -->
        <transition v-if="leftShow" name="fade" mode="out-in">
            <div class="left" id="workLeftBtn" v-on:click="worksMove(1)"></div>
        </transition>
        <transition v-if="rightSHow" name="fade" mode="out-in">
            <div class="right" id="workRightBtn"  v-on:click="worksMove(2)"></div>
        </transition>
        <ul>
            <div id="worksList" class="clearfix" >
                <li v-for="x in dataListShow" v-bind:key="x.dataId" v-on:click="dataUp(x)">
                    <router-link v-bind:to="'/detail/'+x.dataId">
                        <div class="show">
                            <img v-bind:src="x.imageUrl">
                            <!-- <img src="../assets/works/web_works/copybilibili/cover.png"> -->
                        </div>
                        <div class="message">
                            <h3>{{ x.dataTittle }}</h3>
                            <span>{{ x.dataTime }}</span>
                        </div>
                        <div class="subtitle">
                            {{ x.dataExplain }}
                        </div>
                        <workslabel v-bind:dataMessage = "x"></workslabel>
                    </router-link>
                </li>
            </div>
            
        </ul>
        <div class="progress-bar">
            <div class="show-bar" id="showBar" v-setWidth></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import label from "../components/WorksLabel.vue";

    //JQ动画持续时间
    const animateTime = 300;
    const idName = "worksList"
    let initializeWidth;

    export default {
        data(){
            return {
                leftShow:false,
                rightSHow:false,
                newDataList:[],
                // search:"",
                // content1:"请输入项目标题",
                searchtitle:{
                    title:"请输入项目标题",
                    content:""
                },
                firstWorksWidth:1
            }
        },
        props:{
            dataList:Array
        }
        ,
        methods:{
            showData(){
                console.log(this.dataBody);
            },
            dataUp:function(params){
                // console.log(params);
                this.$store.commit('changeData',params);
                // this.bus.$emit("detail",'数据')
            },
            mouseoverEvent:function(){
                this.leftShow = true;
                this.rightSHow = true;
            },
            mouseleaveEvent:function(){
                this.leftShow = false;
                this.rightSHow = false;
            },
            worksMove:function(x){
                

                let offsetNum = singleWidth();
                //项目的可视区域宽度
                let testWidth = document.getElementById(idName).offsetWidth;
                //单个项目的宽度
                //1为左，2为右
                if(x === 1){
                    let ulOffsetRight = document.getElementById(idName).offsetLeft;
                    let w = document.getElementById(idName).offsetWidth;
                    // console.log(w);
                    if(ulOffsetRight<0){
                        // console.log(ulOffsetRight,"执行中");
                        $("#"+idName).stop().animate({marginLeft:"+=" + offsetNum},animateTime);
                        let percentWidth = computerWidth(testWidth - offsetNum,this.newDataList.length,offsetNum,initializeWidth);
                        // console.log(percentWidth);
                        
                        $("#showBar").stop().animate({width:percentWidth+"%"},animateTime)
                    }
                    else{
                        console.log(ulOffsetRight,"已经到开头了");
                    }
                }
                else if(x === 2){
                    let childNum = Number(document.getElementById(idName).childNodes.length);
                    // console.log(childNum);
                    let maxOffsetWidth = offsetNum*(childNum);
                    // console.log(maxOffsetWidth);
                    
                    if(maxOffsetWidth>testWidth){                        
                        // console.log(testWidth);
                        
                        $("#"+idName).stop().animate({marginLeft:"-=" + offsetNum},animateTime);

                        let percentWidth = computerWidth(testWidth + offsetNum,this.newDataList.length,offsetNum,initializeWidth);
                        console.log(percentWidth);
                        
                        $("#showBar").stop().animate({width:percentWidth+"%"},animateTime)
                    }
                    else{
                        console.log(testWidth,maxOffsetWidth,"已经到开头了");
                    }
                }
            }
        },
        created(){
            // let name = this.$route.params.id;          
        },
        beforeUpdate(){
            // console.log("更新前"+this.newDataList.length);   
            // const baseNum = 16;
            // let worksOffseWidth = baseNum*(19.5+1.2)*this.newDataList.length;
            // console.log(worksOffseWidth);
             
        },
        mounted(){
            initializeWidth = document.getElementById(idName).offsetWidth;
        },
        directives:{
            setWidth:{
                bind:(el) => {
                    // console.log(el);
                    // console.log();
                    
                },
                inserted:(el) => {
                    // console.log(el.offsetWidth = 20);
                }
            }
        },
        watch:{
            dataList:function(data){
                this.newDataList = data;
                initialWorksDom(idName,initializeWidth,animateTime);
                // console.log(this.newDataList);
                // $('#worksList').stop().animate({marginLeft:0},animateTime);
                let worksWidth = document.getElementById(idName).offsetWidth;
                // console.log(worksWidth);
                // console.log(initializeWidth);
                
                //计算单个项目的宽度
                let testSize = singleWidth();
                // this.firstWorksWidth = worksWidth;
                // console.log("可视宽度"+worksWidth);
                // console.log("宽度"+document.getElementById(idName).style.width);
                
                let percentWidth = computerWidth(initializeWidth,this.newDataList.length,testSize,initializeWidth);
                console.log(percentWidth);
                
                $("#showBar").stop().animate({width:percentWidth+"%"},animateTime)
            }
        },
        computed:{
            dataListShow:function(){
                return this.newDataList.filter((currentValue)=>{
                    let textWatch = this.searchtitle.content;
                    if(textWatch !== '' && typeof textWatch === 'string'){
                        return currentValue.dataTittle.match(textWatch)
                    }
                    else{
                        return currentValue;
                    }
                })
            }
        },
        components:{
            "workslabel":label
        }
    };
    function initialWorksDom(id,x,time){
        $('#'+id).stop().animate({marginLeft:0},time);
        // $('#'+id).stop().animate({width:x},time);
        // document.getElementById(id).style.width = x;
    }
    function singleWidth(){
        const maxWidth = 1200;
        const minWidth = 980;
        const baseNumMax = 16;
        const baseNumMin = 12;

        let windowWidth = document.body.offsetWidth;
        if(windowWidth >= maxWidth){
            return baseNumMax*(19.5+1.2);
        }
        else if(windowWidth >= minWidth && windowWidth <maxWidth){
            return baseNumMin*(19.5+1.2);
        }
        else{
            return baseNumMin*(19.5+1.2);
        }
        
    }
    function computerWidth(offWidth,dataLength,single,initializeWidth){
        // console.log("可视宽度"+offWidth );
        // console.log("数据长度"+dataLength);
        // console.log("单个宽度"+single);
        // console.log("初始化可视宽度"+initializeWidth);
        
        let maxOffWidth = Number(dataLength)*Number(single);
        if(maxOffWidth<=initializeWidth){
            return 100;
        }
        else{
            for(let i = 0;i <= dataLength;i++){
                if(single*i>initializeWidth){
                    /**
                     * 返回的百分比应该是，当前窗口的宽度 / 单个项目的宽度*项目的个数+没有显示完整的那个项目的可视宽度
                     * 
                     * 没有显示完整的那个项目的可视宽度：这个是因为即使点击右侧的按钮，显示到最后一个，也会多余一个可视宽度的距离，所以总长度得加上
                     */
                    return (offWidth / (maxOffWidth+(initializeWidth-single*(i-1))))*100;
                }
            }
        }
    }
</script>

<style scoped>
.works{
    float: left;
    width: 78%;
    height: 100%;
    border-radius: 0 2rem 2rem 0;
    box-sizing: border-box;
    padding-top: 7.5rem;
    position: relative;
    overflow: hidden;
}
.works>ul{
    width: 100%;
    height: 100%;
    /* margin-left: -.6rem; */
    position: relative;
    white-space: nowrap;
    /* overflow: hidden; */
}
.works>ul>div{
    position: relative;
    white-space: nowrap;
    word-break: keep-all;
}
.works>ul li{
    width: 19.5rem;
    display: inline-block;
    /* float: left; */
    border-radius: 1.5rem 1.5rem 0 0;
    margin: 0 .6rem 0 .6rem;
    position: relative;
}
.works>ul li>a{
    width: 100%;
    height: 100%;
    display: inline-block;
}
.show{
    width: 19.5rem;
    height: 32rem;
    border-radius: 1.5rem;
    position: relative;
}
.show>img{
    display: block;
    width: 19.5rem;
    height: 32rem;
    border-radius: 1.5rem;
    position: relative;
    background: #cccccc;
    top:0;
    transition: all .2s;
}
.show>img:hover{
    cursor: pointer;
    top: -1.8rem;
    width: 20.5rem;
    height: 33.6rem;
    box-shadow: 0 .5rem 2rem #e6e6e6;
    margin: 0 -0.5rem;
}
.right,.left{
    width: 2rem;
    position: absolute;
    height: 4rem;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    top: 21.5rem;
    transition: top .2s,color .2s;
    background-image: url("../../static/images/icon.png");
}
.right:hover,.left:hover{
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    top: 21rem;
}
.left{
    left: .6rem;
    background-position:-6px -87px; 
}
.right{
    right: 0;
    background-position:-4px -44px; 
}
.message{
    width: 100%;
    height: 2rem;
    margin-top: 1.5rem;
    position: relative;
}
.message .title{
    display: block;
    width: 2.5rem;
    height: 2rem;
    float: left;
    border-radius: 50%;
}
.message h3{
    color: #111111;
    left: 0.2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    right: 6rem;
    font-size: 1.1rem;
    white-space: nowrap;
    position: absolute;
    overflow: hidden;
    text-overflow: ellipsis;
}
.message span{
    position: absolute;
    color: #999999;
    right:0.5rem;
    white-space: nowrap;
    overflow: hidden;
    height: 2rem;
    font-size: 0.8rem;
    text-align: right;
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
}
.subtitle{
    font-size: 0.9rem;
    color: #999999;
    margin-bottom: 1.5rem;
    width: 96%;
    white-space: nowrap;
    overflow: hidden;
    margin-top: .3rem;
    text-overflow: ellipsis;
}
.label-type{
    margin-top: .1rem;
}
.label-type>span{
    color:#fff;
    display: inline-block;
    padding: .2rem .6rem;
    font-size: 12px;
    border-radius: 4px;
}
.input-screen{
    position: absolute;
    width: 30%;
    height: 2.5rem;
    border-radius: .6rem;
    left: .6rem;
    background: #eeeeee;
    top: 2.2rem;
}
.input-screen .input-style{
    position: absolute;
    width: 86%;
    left: 7%;
    display: block;
    top: 0;
    background: none;
    border: none;
    bottom: 0;
    cursor: text;
    z-index: 1000;
    color: #555;
    font-size: .9rem;
}
.input-screen .input-style:focus{
    outline: none;
}
.input-screen .input-style-div{
    position: absolute;
    width: 84%;
    left: 8%;
    display: block;
    top: 0;
    border: none;
    bottom: 0;
    cursor: text;
    z-index: 10;
}
.input-screen .input-style-div > span{
    display: block;
    position: absolute;
    height: 100%;
    left: 0rem;
    box-sizing: border-box;
    padding-left: 1.8rem;
    right: 0.1rem;
    top: 0;
    line-height: 2.5rem;
    font-size: .7rem;
    color: #999;
    background-image: url("../../static/images/icon.png");
}
.input-screen .input-style-div > span{
    background-position: -4px -138px;
}
.progress-bar{
    width: 100%;
    height: .2rem;
    background: rgba(218, 218, 218, 0.5);
    position: absolute;
    bottom: 1.5rem;
    border-radius: 0.6rem;
    z-index: 2000;
}
.show-bar{
    width: 10%;
    height: 100%;
    border-radius: 0.6rem;
    background: linear-gradient(to right,#b7e778, #40dab2);
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .2s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>
