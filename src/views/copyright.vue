<template>
    <div class="copyright">
        {{ title }}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                title:"尹竹群 版权所有 ©www.4687494.com       ICP备案号:苏ICP备14047197号-3      欢迎联系交流，收藏... (ง •̀_•́)ง (*•̀ㅂ•́)و(ง •̀_•́)ง"
            }
        }
    };
</script>

<style scoped>
.copyright{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.5rem;
    font-size: 12px;
    color: #c4c4c4;
    text-align: center;
}
</style>
