<template>
 <div>
    <router-view/>
    <Footer/>
    <switcher/>

 </div>
</template>


<script>
  import feather from 'feather-icons'
  import Switcher from '@/components/Switcher.vue'
  import Footer from '@/components/Footer.vue'

export default {
  mounted() {
      feather.replace();
  },
  components:{
        Switcher, Footer
    },
}
</script>
