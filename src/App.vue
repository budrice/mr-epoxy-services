<template>
   <div id="app">
      <image-panel />
  </div>
</template>
<script>
import imagePanel from '@/components/ImagePanel'
export default {
  name: 'app',
  components: {
     imagePanel
  }
}
</script>
<style>
body {
   background-color: rgba(60, 50, 40);
}
#app {
   color: #000;
}
</style>
