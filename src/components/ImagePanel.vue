<template>
<div>
   <div class="bgimg-1">
      <div class="container">
         <div class="row">
            <div class="col-1"></div>
            <div class="col-10">
               <img src="./../assets/images/mr-epoxy.png" alt="logo" class="logo img-fluid">
            </div>
            <div class="col-1"></div>
            
         </div>
         <div class="row justify-content-center">
            <div class="caption-box">Epoxy Coatings<br>Diamond Polishing<br>Concrete Surface Preparation<br>~ est 1986 ~</div>
         </div>
      </div>
   </div>

   <div class="article-1">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-3" v-for="card in cards" :key="card.id">
               <nav-card :card="card" :content-height="133" class="mx-auto mb-3" />
            </div>
         </div>
      </div>
   </div>

   <div class="bgimg-2" id="epoxy_coatings">
      <div class="container">
         <div class="row justify-content-center mb-4">
            <div class="caption-box">Epoxy Coatings</div>
         </div>
         <div class="row">
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="epoxy_galleries[0].title" :gallery="epoxy_galleries[0].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="epoxy_galleries[1].title" :gallery="epoxy_galleries[1].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :thumbnailIndex="3" :title="epoxy_galleries[2].title" :gallery="epoxy_galleries[2].gallery" />
            </div>
         </div>
      </div>
   </div>

   <div class="article-1">
      <multi-column 
         :title="'Epoxy Coatings'" 
         :paragraphs="epoxy_paragraphs" />
   </div>

   <div class="bgimg-3" id="diamond_polish">
      <div class="container">
         <div class="row no-gutters justify-content-center mb-4">
            <div class="caption-box">Diamond Polishing</div>
         </div>
         <div class="row no-gutters">
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="polish_galleries[0].title" :gallery="polish_galleries[0].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="polish_galleries[1].title" :gallery="polish_galleries[1].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="polish_galleries[2].title" :gallery="polish_galleries[2].gallery" />
            </div>
         </div>
      </div>
   </div>

   <div class="article-1">
      <multi-column :title="'Diamond Polishing'" :paragraphs="polish_paragraphs" />
   </div>

   <div class="bgimg-4" id="moisture">
      <div class="container">
         <div class="row no-gutters justify-content-center mb-4">
            <div class="caption-box">Moisture Mitigation</div>
         </div>
         <div class="row no-gutters">
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="moisture_galleries[0].title" :gallery="moisture_galleries[0].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="moisture_galleries[1].title" :gallery="moisture_galleries[1].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="moisture_galleries[2].title" :gallery="moisture_galleries[2].gallery" />
            </div>
         </div>
      </div>
   </div>

   <div class="article-1">
      <multi-column :title="'Moisture Mitigation'" :paragraphs="moisture_paragraphs" />
   </div>

   <div class="bgimg-5" id="preparation">
      <div class="container">
         <div class="row no-gutters justify-content-center mb-4">
            <div class="caption-box">Concrete Surface Preparation</div>
         </div>
         <div class="row no-gutters">
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="preparation_galleries[0].title" :gallery="preparation_galleries[0].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="preparation_galleries[1].title" :gallery="preparation_galleries[1].gallery" />
            </div>
            <div class="p-2 col-12 col-md-4">
               <gallery-box :title="preparation_galleries[2].title" :gallery="preparation_galleries[2].gallery" />
            </div>
         </div>
      </div>
   </div>

   <div class="article-1">
      <multi-column :title="'Concrete Surface Preparation'" :paragraphs="preparation_paragraphs" />
   </div>

   <div class="bgimg-6">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-12">
               <div class="row justify-content-center">
                  <figure class="figbox">
                     <img :src="require(`../assets/images/${contact_pic.filename}`)" :alt="contact_pic.alt" class="img-fluid" />
                     <figcaption>{{ quote }}</figcaption>
                  </figure>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="footer-1" id="contact">
      <company-footer />
   </div>

</div>
</template>
<script>

import store from '@/store'
import navCard from '@/components/NavCard'
import galleryBox from '@/components/GalleryBox'
import multiColumn from '@/components/MultiColumn'
import companyFooter from '@/components/CompanyFooter'

export default {
   components: {
      navCard,
      galleryBox,
      multiColumn,
      companyFooter
   },
   data() {
      return {
         cards: store.state.cards,
         epoxy_galleries: store.state.epoxy_galleries,
         epoxy_paragraphs: store.state.epoxy_paragraphs,
         polish_galleries: store.state.polish_galleries,
         polish_paragraphs: store.state.polish_paragraphs,
         moisture_galleries: store.state.moisture_galleries,
         moisture_paragraphs: store.state.moisture_paragraphs,
         preparation_galleries: store.state.preparation_galleries,
         preparation_paragraphs: store.state.preparation_paragraphs,
         contact: store.state.contact,
         quote: store.state.epoxy_paragraphs[5].paragraph,
         contact_pic: store.state.contact.pic
      }
   }
}

</script>
<style scoped lang="scss">
.logo {
   margin-bottom: 25px;

}
.bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4, .bgimg-5, .bgimg-6 {
   background-color: rgb(60, 50, 40);
   position: relative;
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   & .container {
      max-width: 1280px;
      background-color: transparent;
      & .image {
         max-width: 440px;
      }
   }
}
.bgimg-1, .bgimg-6 {
   padding: 155px 35px 35px;
}
.bgimg-2, .bgimg-3, .bgimg-4, .bgimg-5 {
   padding: 100px 35px 35px;
}
$bg_url: './../assets/images/backgrounds/';
.bgimg-1 {
   background-image: url($bg_url + 'epoxy_coating_2.jpg');
}
.bgimg-2 {
  background-image: url($bg_url + 'epoxy_coating_1.jpg');
}
.bgimg-3 {
  background-image: url($bg_url + 'restaurant_1.jpg');
}
.bgimg-4 {
  background-image: url($bg_url + 'mm1.jpg');
}
.bgimg-5 {
  background-image: url($bg_url + 'scrape.jpg');
}
.bgimg-6 {
   background-image: url($bg_url + 'epoxy_coating_2.jpg');
}
gallery-box {
   max-width: 400px;
}
.article-1, .footer-1 {
   font-size: 14px;
   color: rgb(0, 255, 180);
   padding: 18px;
   background-color: rgb(60, 50, 40);
   background-image: url('./../assets/images/paisley2.png');
   border-top: 10px solid rgb(60, 50, 40);
   border-bottom: 10px solid rgb(60, 50, 40);
   & .container {
      max-width: 1280px;
      background-color: transparent;
   }
}
.caption-box {
   background-color: rgba(60, 50, 40, 0.8);
   color: rgb(0, 255, 180);
   padding: 18px;
   font-size: 16px;
   text-align: center;
   font-weight: 600;
   border-radius: 5px;
   max-width: 400px !important;
   max-height: 400px !important;
}
figure.figbox {
   background-color: rgba(60, 50, 40, 0.8);
   color: rgb(0, 255, 180);
   font-size: 16px;
   font-weight: 600;
   border-radius: 5px;
   max-width: 800px !important;
   & img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
   }
   & figcaption {
      font-size: 1.25em;
      padding: 10px 15px;
   }
}
.button {
   width: 100%;
   font-size: 12px;
}

.gutter {
   padding-left: 7.5px;
   padding-right: 7.5px;
}

@media (max-width: 768px) {
   .bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4, .bgimg-5, .bgimg-6 {
      padding: 55px 5px !important;
   }
   figure.figbox {
      font-size: 16px;
      font-weight: 600;
      border-radius: 0;
      width: 100% !important;
      max-width: 100% !important;
      & img {
         border-top-left-radius: 0;
         border-top-right-radius: 0;
      }
      & figcaption {
         font-size: 1.25em;
         padding: 10px 15px;
      }
   }
}
</style>
