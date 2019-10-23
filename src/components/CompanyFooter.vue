<template>
   <div class="container">
      <div class="row">
         <div class="col-12 col-md-3">
            <div class="row justify-content-center">
               <img :src="require(`../assets/images/${logo}`)" alt="logo" class="img-fluid logo">
            </div>
            <div class="pb-2 row justify-content-center">
               <span class="copyright">&copy;{{ `2019 ${company_name}` }} all rights reserved</span>
            </div>
         </div>
         <div class="d-none d-md-block col-1"></div>
         <div class="mb-2 col-6 col-md-3 box">
            <div class="row">
               <h5>{{ company_name }}</h5>
            </div>
            <div class="row">
               <span>{{ address }}</span>
            </div>
            <div class="row">
               <span>{{ `${city}, ${state} ${zip}` }}</span>
            </div>
         </div>
         <div class="mb-2 col-6 col-md-3 box">
            <div class="row">
               <span>{{ name }}</span>
            </div>
            <div class="row">
               <span>{{ job_title }}</span>
            </div>
            <div class="row">
               <span>{{ phone }}</span>
            </div>
            <div class="row">
               <span><a :href="`mailto:${link}`" class="link">{{ link }}</a></span>
            </div>
         </div>
         <div class="pb-2 col-12 col-md-2">
            <i class="fa fa-facebook-square" />
         </div>
      </div>
   </div>
</template>
<script>
import store from '@/store'
export default {
   data() {
      return {
         logo: store.state.home.logo,
         company_name: store.state.contact.company_name,
         name: store.state.contact.name,
         job_title: store.state.contact.job_title,
         address: store.state.contact.address,
         city: store.state.contact.city,
         state: store.state.contact.state,
         zip: store.state.contact.zip,
         phone: store.state.contact.phone,
         link: store.state.contact.link
      }
   }
}
</script>
<style lang="scss" scoped>
// .box {
//    & .row {
//       padding: 2px;
//    }
// }
.copyright {
   font-size: 12px;
}

a.link {
   &:link {
      text-decoration: none;
      color: rgb(0, 255, 180);
   }
   &:visited {
      text-decoration: none;
      color: rgb(0, 168, 118);
   }
   &:hover {
      text-decoration: none;
      color: rgb(0, 168, 118);
   }
   &:active {
      text-decoration: none;
      color: rgb(0, 255, 180);
   }
}
.logo {
   max-height: 70px;
}
.fa-facebook-square {
   font-size: 64px;
}
@media (max-width: 768px) {
   .box {
      font-size: 12px !important;
   }
   .logo {
      max-height: 70px;
   }
}
@media (min-width: 1047px) {
   .logo {
      max-height: 100px;
   }
}
</style>
