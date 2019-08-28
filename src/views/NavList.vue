<template>
    <nav class="nav">
        <ul class="nav-ul clearfix" v-on:click="changeStyle" id="navUl" >
            <!-- <li>
                <router-link to="/" v-bind:class="{selected:defaultTitle.default}">{{defaultTitle.name}}</router-link>
            </li> -->
            <li v-for="x in title" :key="x.id">
                <router-link v-bind:to="'/'+x.id"><div v-bind:class="{selected:x.default}">{{x.name}}</div></router-link>
            </li>
        </ul>
        <div id="navLine"></div>
    </nav>
</template>

<script>
    const classSelected = 'selected';
    export default {
        data(){
            return {
                selected:{

                },
                defaultTitle:{
                    name:"全部",
                    default:true
                }
                ,
                title:[
                    {
                        id:1,
                        name:"全部",
                        default:true
                    },
                    {
                        id:2,
                        name:"前端",
                        default:false
                    },
                    {
                        id:3,
                        name:"插件",
                        default:false
                    },
                    {
                        id:4,
                        name:"UI",
                        default:false
                    },
                    {
                        id:5,
                        name:"平面",
                        default:false
                    },
                    {
                        id:6,
                        name:"其他",
                        default:false
                    }
                ]
            }
        },
        methods:{
            changeStyle:function(params){
                let e = params || window.event;
                let target = e.target || e.srcElement;
                
                if(target.tagName.toLowerCase() === 'div'){
                    //DOM添加点击后class
                    target.classList.add(classSelected);
                    // console.log(target.parentNode.parentNode);
                    //其他DOM删除点击后的class
                    sibs(target.parentNode.parentNode).forEach(function(el,index){
                        if(hasClass(el.children[0].children[0],classSelected)){
                            el.children[0].children[0].classList.remove(classSelected);
                        }
                    });
                    
                    let targetLeft = target.offsetLeft;
                    let targetWidth = target.offsetWidth;
                    let $navline = $('#navLine');

                    // console.log(targetLeft,targetWidth);
                    //计算运动的距离
                    let offsetLeftPX = (targetWidth/2) + targetLeft - ($navline.width()/2)
   
                    $navline.animate({marginLeft:offsetLeftPX},200,"swing")
                }
                
            },
            upDataTarget:function(){

            }
        },
        mounted(){
            // let liNum = Number((this.$route.params.id)?this.$route.params.id:1)-1
            let ax = document.getElementById("navUl").children[0];
            // console.log(ax);
            // ax.children[0].classList.add(classSelected);
            let bx = document.getElementById("navLine");
            // 设置初始距离
            bx.style.marginLeft = ax.offsetWidth/2+ax.offsetLeft - bx.offsetWidth/2+ 'px';
        }
    };

    function sibs(el){
        let arr=[];
        let sibs = el.parentNode.children;
        // console.log(sibs);
        
        for(let i = 0;i < sibs.length;i++){
            if(el != sibs[i]){
                arr.push(sibs[i])
            }
        }
        return arr;
    }
    function hasClass(el,name){
        let newstr = ' ' + name + ' ';        
        return (' ' + el.className + ' ').indexOf(newstr)>-1;
    }
</script>

<style scoped>
.nav{
    height: 7rem;
    position: absolute;
    z-index: 1000;
    right: 2rem;
    box-sizing: border-box;
}
.nav-ul{
    float: right;
    padding-top: 2rem;
    color: #cecece;
    position: relative;
    /* font-weight: 500; */
    margin-right: 2rem;
}
.nav-ul>li{
    float: left;
    
}
/* .nav-ul>li:hover{
    cursor: pointer;
    color: #111111;
    top: -2px;
} */
.nav-ul>li>a{
    margin: 0 0.8rem;
}
.nav-ul>li div{
    display: block;
    position: relative;
    top: 0px;
    color: #444444;
    padding: 0.2rem 0.5rem;
    transition: top .2s,color .2s;
}
.nav-ul>li div:hover{
    cursor: pointer;
    color: #111111;
    font-weight: 500;
    top: -2px;
}
.nav-ul .selected{
    color: #111111;
    top: -2px;
    font-weight: 500;
}
.nav-ul .selected:hover{
    cursor: pointer;
    color: #111111;
    
}
#navLine{
    width: 1.5rem;
    height: 0.3rem;
    position: relative;
    /* left: 50%;
    transform: translateX(-50%); */
    display: block;
    margin-top: 4rem;
    background: #111111;
}
a{
    display: block;
}
</style>
