<template>
    <div class="bg">
        <navList></navList>
        <!-- <router-view></router-view> -->
        <!--动画-->
        <transition name="an" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import navList from './NavList.vue';
    import axios from 'axios'
    

    export default {
        data(){
            return {
                title:"测试"
            }
        },
        components:{
            "navList":navList
        },
        created(){
            // this.$router.push('/location').catch(err => { console.log(err) })
            this.$router.push('/'+1)
            
        }
    };
</script>

<style scoped>
.bg{
    z-index: 10;
    position: absolute;
    top: 3.5%;
    bottom: 3.5%;
    left: 4%;
    right: 4%;
    border-radius: 1.7rem;
    background-color: #ffffff;
    box-shadow: 0 0.2rem .2rem #cfcfcf;
    overflow: hidden;
    box-sizing: border-box;
}
.an-enter-active,.an-leave-active{
  transition: all 0.1s;
}
.an-enter,.an-leave-to{
  opacity: 0;
}
</style>
