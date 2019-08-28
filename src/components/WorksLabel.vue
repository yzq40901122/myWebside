<template>
    <div class="label-main">
        <span v-bind:class="typeClass(dataMessage.dataType.name)">{{dataMessage.dataType.name}}</span>
        <span v-bind:class="labelClass(dataMessage.dataLabel)">{{dataMessage.dataLabel}}</span>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            labelClass:function(label){
                const LabelContent=["原创","临摹","其他"];

                let labelRed = (typeof label === 'string') && (label === LabelContent[1])?true:false;
                let labelGreen = (typeof label === 'string') && (label === LabelContent[0])?true:false;
                let labelyellow = (typeof label === 'string') && (label === LabelContent[2])?true:false;

                // console.log(labelGreen,labelRed,labelyellow);
                
                return {
                    "label-red":labelRed,
                    "label-yellow":labelyellow,
                    "label-green":labelGreen,
                    "label-blue":false,
                    "label-purple":false
                }
            },
            typeClass:function(type){
                const LabelContent=["前端","插件","UI","平面","其他"];

                let labelRed = (typeof type === 'string') && (type === LabelContent[2])?true:false;
                let labelGreen = (typeof type === 'string') && (type === LabelContent[1])?true:false;
                let labelyellow = (typeof type === 'string') && (type === LabelContent[4])?true:false;
                let labelPurple = (typeof type === 'string') && (type === LabelContent[3])?true:false;
                let labelBlue = (typeof type === 'string') && (type === LabelContent[0])?true:false;

                // console.log(labelGreen,labelRed,labelyellow,labelPurple,labelBlue);
                return {
                    "label-red":labelRed,
                    "label-yellow":labelyellow,
                    "label-green":labelGreen,
                    "label-purple":labelPurple,
                    "label-blue":labelBlue
                }
            },
        },
        props:{
            dataMessage:Object
        }
    };
</script>

<style scoped>
.label-main{
    margin-right: 1.5rem;
    float: left;
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
.label-red{
    background: #eb7070;
}
.label-yellow{
    background: #fec771;
}
.label-green{
    background: #7ecfc0;
}
.label-blue{
    background: #64c4ed;
}
.label-purple{
    background: #ffdcf7;
}
</style>
