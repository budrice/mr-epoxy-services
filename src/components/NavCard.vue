<template>
   <div class="card">
      <img :src="require(`../assets/images/${card.imageName}`)" class="card-img-top img-thumbnail" alt="epoxy pool coating">
      <div class="card-body" :style="`height: ${contentHeight}px`">
         <h6 class="card-title">{{card.title}}</h6>
         <p class="card-text" style="white-space: pre-line">{{card.description}}</p>
      </div>
      <div class="row no-gutters justify-content-center">
         <div class="card-button-container col-6"><a :href="`${card.href}`" class="button btn btn-primary form-control">Learn more...</a></div>
         <div class="card-button-container col-6"><a href="#contact" class="button btn btn-success form-control">Contact</a></div>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      card: {
         type: Object,
         required: true
      },
      contentHeight: {
         type: Number,
         required: false,
         default: 100
      }
   }
}
</script>
<style lang="scss" scoped>
.card {
   color: #000;
   background-color: rgb(225, 255, 245);
   max-width: 440px;
   padding: 3px;
   &-title {
      text-align: center;
   }
   &-body {
      padding: 10px 6px;
      text-align: justify;
      font-size: 12px !important;
   }
   &-button-container {
      padding: 2px
   }
}
.button {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>