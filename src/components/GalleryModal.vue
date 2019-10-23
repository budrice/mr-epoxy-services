<template>
   <div>
      <div class="vuemodal" :class="{'is-active': isOpen}">
         <div class="vuemodal-content">
            <div class="vuemodal-content-bar">
               <span class="vuemodal-content-bar-title">{{title}}</span>
               <span class="vuemodal-content-bar-close" @click="closeModal" title="close modal">&#10006;</span>
            </div>
            <div class="vuemodal-content-view">
               <div id="carouselCaptions" class="carousel slide" data-ride="carousel" data-interval="3500">
                  <ol class="carousel-indicators" :class="isMultipleSlides ? 'show-arrow' : 'not-active'">
                     <li v-for="(image, index) in gallery" :key="index" data-target="#carouselCaptions" :data-slide-to="index" :class="index === 0 ? 'active' : ''"></li>
                  </ol>
                  <div class="carousel-inner">
                     <div v-for="(image, index) in gallery" :key="index" :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                        <img :src="require(`../assets/images/galleries/${image.filename}`)" :alt="`${image.alt}`" class="d-block w-100">
                        <div class="dark carousel-caption d-none d-md-block">
                           <h5>{{ image.alt }}</h5>
                           <p>{{ image.title }}</p>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" :class="isMultipleSlides ? 'show-arrow' : 'not-active'" href="#carouselCaptions" role="button" data-slide="prev"><span class="arrows">&#171;</span></a>
                  <a class="carousel-control-next" :class="isMultipleSlides ? 'show-arrow' : 'not-active'" href="#carouselCaptions" role="button" data-slide="next"><span class="arrows">&#187;</span></a>
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
      title: {
         type: String,
         required: true
      },
      open: {
         type: Boolean,
         required: true
      }
   },
   data() {
      return {
         isOpen: this.open,
         test: false
      }
   },
   computed: {
      isMultipleSlides: function() { return this.gallery.length > 1 }
   },
   methods: {
      openModal() {

         // ignore jquery warning
         // eslint-disable-next-line
         $('.carousel').carousel(0)
         this.isOpen = true
         return
      },
      closeModal() {
         this.isOpen = false
         return
      }
   },
   watch: {
      open(val) {
         if (val) {
            this.openModal()
         }
      }
   }
}
</script>

<style scoped lang="scss">
$base-bgcolor: rgb(60, 50, 40);
$radius: 15px;
.vuemodal {
   display: none;
   position: fixed;
   z-index: 10;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(60, 50, 40, 0.75);
   overflow: hidden;
   &-content {
      background-color: $base-bgcolor;
      margin: 7.5vh auto 0;
      z-index: 100;
      border-radius: $radius;
      max-width: 600px;
      box-shadow: 3px 3px 10px #000;
      &-bar {
         text-align: center;
         background-image: linear-gradient(rgb(155, 255, 225), rgb(0, 128, 90), rgb(0, 60, 40));
         // border: 1px solid #000;
         border-top-left-radius: $radius;
         border-top-right-radius: $radius;
         padding: 6px 4px;
         &-icon {
            float: left;
         }
         &-title {
            font-size: 14px;
            font-weight: 600;
            color: rgb(255, 255, 255);
            letter-spacing: 5px;
            text-shadow: -1px -1px 1px #000;
         }
         &-close {
            background-color: #ff0000;
            border: 1px solid #990000;
            line-height: 18px;
            float: right;
            color: #000;
            font-size: 18px;
            font-weight: 900;
            padding: 4px 2px;
            border-radius: $radius;
            margin-top: -3px;
            cursor: pointer;
            &:hover {
               cursor: pointer;
               background-color: #990000;
            }
         }
      }
      &-view {
         background-color: rgb(60, 50, 40);
         background-image: url('./../assets/images/paisley2.png');
         // min-height: 255px;
         border-bottom-left-radius: $radius;
         border-bottom-right-radius: $radius;
         border: 1px solid rgb(60, 50, 40);
         max-height: 90vh;
         overflow: auto;
         
      }
   }
}
.is-active {
   display: block !important;
}
.show-arrow {
   display: inline-flex !important;
}
.not-active {
   display: none !important;
}
.carousel-item img {
   max-width: 600px;
   max-height: 600px;
   margin: 0 auto;
}
.carousel-control-prev,
.carousel-control-next {
   font-size: 4em;
   font-weight: 900;
   text-shadow: 2px 2px 2px rgb(0, 0, 0);
   color: rgb(255, 255, 255);
}
.dark {
   background-color: rgba( 0, 0, 0, 0.5);
}
.app-button {
   font-size: 20px;
   border-radius: $radius;
   transition: transform .2s;
   &:hover {
      cursor: pointer;
      transform: scale(1.05);
   }
}
@media (max-width: 768px) {
   .vuemodal {
      padding: 0;
      &-content {
         margin: 0 auto;
         max-width: none;
      }
   }
}
</style>