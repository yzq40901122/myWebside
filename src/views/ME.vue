<template>
    <div class="body-ME clearfix">
        <self></self>
        <works v-bind:dataList="dataList"></works>
    </div>
</template>

<script>
    import self from './SelfInroduce.vue';
    import works from './WorkShow.vue';

    import axios from 'axios';

    export default {
        data(){
            return {
                dataBody:null,
                dataList:null,
            }
        },
        components:{
            "self":self,
            "works":works
        },
        created(){
            // const dataUrl = "http://www.4687494.com/list.json"; 
            const dataUrl = "../../static/mock/list.json";
            axios.get(dataUrl).then((data)=>{
                // console.log(data);
                this.dataBody = data.data;
                let name = this.$route.params.id;
                // console.log(name);

                if(!Array.isArray(this.dataBody.list)){
                    return this;
                }
                let showData = dataFilters(name,this.dataBody.list);
                // console.log(showData);
                
                this.dataList = showData;
                // console.log(this.dataList);
            })

            function dataFilters(id,dataList){
                let array = [];
                switch(Number(id)){
                    case 1:
                        dataList.forEach(function(el,index){
                            array.push(el)
                        });
                        break;
                    default:
                        dataList.forEach(function(el,index){
                            if(el.dataType.type == id){
                                array.push(el)
                            }
                        })
                }
                return array;
            }
        },
        mounted(){
            
        },
        beforeRouteUpdate(to, from, next) {
            //在当前路由改变，但是该组件被复用时调用
            //对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
            // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`

            let changeS = (typeof to.fullPath === 'string')?to.fullPath:String(to.fullPath);
            let dataStrings = changeS.slice(changeS.indexOf('/')+1);
            // console.log(dataStrings);

            if(dataStrings == 1){
                this.dataList = this.dataBody.list;
            }
            else{
                let _data = this.dataBody.list;
                let arrData = [];

                _data.forEach((element,index) => {
                    // console.log(element);
                    if(element.dataType.type == dataStrings){
                        arrData.push(element)
                    }
                });
                // console.log(arrData);
                this.dataList = arrData
            }
            next();
            
            
        },
    };
</script>

<style scoped>
.body-ME{
    width: 100%;
    height: 100%;
}

</style>
