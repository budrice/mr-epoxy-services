<template>
   <div>
      <div class="app-button" id="app_todo_modal_button" @click="open">
         <img :src="require(`../assets/images/galleries/${pic}`)" :alt="`${alt}`" class="mx-auto d-block img-fluid rounded" />
      </div>
      <div class="vuemodal" :class="{'is-active': isOpen}">
         <div class="vuemodal-content">
            <div class="vuemodal-content-header">
               <span class="vuemodal-content-header-title">{{title}}</span>
               <span class="vuemodal-content-header-close" @click="closeModal" title="close modal">X</span>
            </div>
            <div class="vuemodal-content-view">
               <div class="row">
                  <div class="col-12"><img :src="require(`../assets/images/galleries/${expanded}`)" :alt="`${alt}`" class="img-fluid" /></div>
               </div>
               <div class="row pad">
                  <div class="col-2 no-pad" v-for="image in gallery" :key="image.key">
                     <div class="app-button" @click.prevent="expanded = image.filename; alt = image.alt">
                        <img :src="require(`../assets/images/galleries/${image.filename}`)" :alt="image.alt" class="img-fluid" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      gallery: {
         type: Array,
         required: true
      },
      thumbnailIndex: {
         type: Number,
         required: false,
         default: 0
      },
      title: {
         type: String,
         required: true
      }
   },
   data() {
      return {
         isOpen: false,
         pic: this.gallery[this.thumbnailIndex].filename,
         expanded: this.gallery[0].filename,
         alt: this.gallery[0].alt
      }
   },
   methods: {
      open() {
         this.isOpen = true
      },
      closeModal() {
         this.isOpen = false
      },
      change(picture) {
         this.expanded = picture
      }
   }
}
</script>
<style scoped lang="scss">
$base-bgcolor: rgb(60, 50, 40);
.vuemodal {
   display: none;
   position: fixed;
   z-index: 10;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   background-color: rgba(60, 50, 40, 0.5);
   &-content {
      background-color: $base-bgcolor;
      margin: 12vh auto;
      padding: 3px;
      border: 1px solid #000;
      border-radius: 3px;
      width: 96%;
      max-width: 600px;
      box-shadow: 3px 3px 10px #000;
      &-header {
         text-align: center;
         background-image: linear-gradient(rgb(155, 255, 225), rgb(0, 128, 90), rgb(0, 60, 40));
         border: 1px solid #000;
         border-top-left-radius: 3px;
         border-top-right-radius: 3px;
         padding: 6px 18px;
         margin-bottom: 3px;
         &-icon {
            float: left;
         }
         &-title {
            font-size: 14px;
            font-weight: 600;
            color: rgb(0, 255, 180);
            letter-spacing: 5px;
            text-shadow: -1px -1px 1px #000;
         }
         &-close {
            background-color: #a00000;
            border: 1px solid #000099;
            line-height: 18px;
            float: right;
            color: #fff;
            font-size: 12px;
            font-weight: 300;
            padding: 1px 6px;
            border-radius: 3px;
            &:hover {
               cursor: pointer;
               color: #fdcccc;
               background-color: #ff0000;
            }
         }
      }
      &-view {
         background-color: #fff;
         min-height: 255px;
         border-bottom-left-radius: 3px;
         border-bottom-right-radius: 3px;
         border: 1px solid rgb(60, 50, 40);
      }
   }
   &.is-active {
      display: block;
   }
}
.app-button {
   font-size: 20px;
   border-radius: 5px;
   transition: transform .2s;
   &:hover {
      cursor: pointer;
      transform: scale(1.05);
   }
}
.no-pad {
   padding: 0;
}
.pad {
   padding-left: 15px;
   padding-right: 14px;
}
</style>
