<template>
  <q-page padding>
  <hello/>
  </q-page>
</template>

<script>

import Hello from '../components/hello'

export default {
  // name: 'PageName',
  components:{
    'hello': Hello
  },
  mounted(){
      console.log(this.$axios.get('http://www.schoolofnet.com'));
      console.log(this.dede)
  
  }

}
</script>

<style>
</style>
