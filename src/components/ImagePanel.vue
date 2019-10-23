<template>
   <div>
      <div class="home" :style="home.style">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-md-auto">
                  <img :src="require(`../assets/images/${home.logo}`)" alt="logo" class="logo img-fluid">
               </div>
            </div>
            <div class="row justify-content-center">
               <div class="caption-box" :style="captionbox.style">
                  <div v-for="(text, index) in home.intro" :key="index">{{ text }}<br></div>
               </div>
            </div>
         </div>
      </div>
      <div class="articles" :style="article.style">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-12 col-md-6 col-lg-3" v-for="card in navcards" :key="card.id">
                  <nav-card :card="card" :content-height="133" class="mx-auto mb-3" />
               </div>
            </div>
         </div>
      </div>

      <!-- sections loop -->
      <div v-for="(sect, index) in sections" :key="index">
         <div class="section_style" :id="sect.id" :style="sect.style">
            <div class="container">
               <div class="row justify-content-center mb-4">
                  <div class="caption-box" :style="captionbox.style">{{ sect.title }}</div>
               </div>
               <div class="row">
                  <!-- galleries loop -->
                  <div class="p-2 col-8 col-md-4 mx-auto" v-for="(box, index) in sect.galleries" :key="index">
                     <div class="app-button" :id="box.btn" @click="openGallery(box.title, box.gallery)">
                        <img :src="require(`../assets/images/galleries/${box.gallery[0].filename}`)" :alt="`${box.gallery[0].alt}`" class="mx-auto d-block img-fluid rounded" />
                     </div>
                  </div>
                  <!-- end galleries loop -->
               </div>
            </div>
         </div>
         <div class="articles" :style="article.style">
            <multi-column :title="sect.text.header" :paragraphs="sect.text.content" />
         </div>
      </div>
      <!-- end sections loop -->

      <div class="contact" :style="contact.style" id="contact">
         <div class="container">
            <div class="row">
               <div class="col-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
                  <figure class="figbox" :style="captionbox.style">
                     <img :src="require(`../assets/images/${contact.pic.filename}`)" :alt="contact.pic.alt" class="img-fluid" />
                     <figcaption :style="captionbox.style">{{ contact.quote }}</figcaption>
                  </figure>
               </div>
            </div>
         </div>
      </div>

      <div class="footer" :style="article.style">
         <company-footer />
      </div>

      <gallery-modal :title="gallery_title" :gallery="gallery" :open="open_gallery" />

   </div>
</template>

<script>
import store from '@/store'
import navCard from '@/components/NavCard'
import galleryModal from '@/components/GalleryModal'
import multiColumn from '@/components/MultiColumn'
import companyFooter from '@/components/CompanyFooter'

export default {
   components: {
      navCard,
      galleryModal,
      multiColumn,
      companyFooter
   },
   data() {
      return {
         captionbox: store.state.captionbox,
         article: store.state.article,
         home: store.state.home,
         navcards: store.state.navcards,
         sections: store.state.sections,
         contact: store.state.contact,
         gallery_title: '',
         gallery: [],
         open_gallery: false
      }
   }, 
   methods: {
      openGallery(title, gallery) {
         this.gallery_title = title
         this.gallery = gallery
         this.open_gallery = true
         setTimeout(() => { this.open_gallery = false }, 100)
      }
   },
   watch: {
      open_gallery(val) {
         this.open_gallery = val
      }
   }
}
</script>

<style scoped lang="scss">
$radius: 5px;
.logo {
   margin-bottom: 25px;
}
.section_style, .home, .contact {
   position: relative;
   background-attachment: fixed;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
}
.articles, .footer {
   font-size: 14px;
   padding: 18px;
}
.caption-box {
   padding: 18px;
   font-size: 16px;
   text-align: center;
   font-weight: 600;
   border-radius: $radius;
   max-width: 400px !important;
   max-height: 400px !important;
}
figure.figbox {
   font-size: 16px;
   font-weight: 600;
   border-radius: $radius;
   max-width: 800px !important;
   & img {
      border-top-left-radius: $radius;
      border-top-right-radius: $radius;
   }
   & figcaption {
      font-size: 1.25em;
      border-radius: $radius;
      padding: 10px 15px;
   }
}

@media (max-width: 768px) {
   .home, .sections, .contact {
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
