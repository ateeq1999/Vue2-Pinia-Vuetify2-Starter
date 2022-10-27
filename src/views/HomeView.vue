<template>
  <hello-world />
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import { useMainStore } from '@/store/main'
import { mapState } from 'pinia'

export default {
  name: 'Home',

  data() {
    return {
      drawer: false
    }
  },

  computed: {
    ...mapState(useMainStore, ['drawer'])
  },

  components: {
    HelloWorld
  },

  created() {
    console.log(this.drawer)
  }
}
</script>
