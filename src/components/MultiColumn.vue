<template>
   <div class="container">
      <div class="row justify-content-center">
         <h2>{{ title }}</h2>
      </div>
      <div class="row">
         <div class="columns txt_style col-12">
            <p v-for="(p, i) in paragraphs" :key="i">{{ p.paragraph }}</p>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      title: {
         type: String,
         required: true
      },
      paragraphs: {
         type: Array,
         required: true
      }
   }
}
</script>
<style lang="scss" scoped>
.txt_style {
   text-align: justify;
   text-indent: 24px;
   padding: 0 15px 35px;
}
.columns {
   -webkit-column-count: 5;
   -moz-column-count: 5;
   column-count: 5;
}
@media (max-width: 1024px) {
   .columns {
      -webkit-column-count: 4;
      -moz-column-count: 4;
      column-count: 4;
   }
}
@media (max-width: 872px) {
   .columns {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
   }
}
@media (max-width: 768px) {
   h2 {
      font-size: 1.3rem;
   }
   .columns {
      -webkit-column-count: 1;
      -moz-column-count: 1;
      column-count: 1;
   }
}
</style>
