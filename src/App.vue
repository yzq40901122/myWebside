<template>
  <div id="app">
    <indexBody></indexBody>
    <coryright></coryright>
  </div>
</template>

<script>
import index from './views/index';
import copyRight from './views/copyright'


export default {
  name: 'App',
  components:{
    'indexBody':index,
    'coryright':copyRight
  }
}
</script>

<style>

</style>
