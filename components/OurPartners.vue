<template>
  <div id="our-partners" class="content-our-partners">
    <h1 class="title">{{ $t('our_partners.title') }}</h1>
    <VueSlickCarousel :arrows="true" v-bind="settings" class="slide-slick">
      <img class="img-block-slick" src="~/assets/images/imgslick1.png" alt="" />
      <img class="img-block-slick" src="~/assets/images/imgslick2.png" alt="" />
      <img class="img-block-slick" src="~/assets/images/imgslick3.png" alt="" />
      <img class="img-block-slick" src="~/assets/images/imgslick4.png" alt="" />
      <img class="img-block-slick" src="~/assets/images/imgslick5.png" alt="" />
      <img class="img-block-slick" src="~/assets/images/imgslick6.png" alt="" />
      <img class="img-block-slick" src="~/assets/images/imgslick7.png" alt="" />
      <!-- <div class="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-1"></div> -->
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'NuxtOurPartners',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    handleLanguageChange(event, store) {
      store.commit('language/setLang', event.target.value)
      location.reload()
    },
  },
}
</script>

<style>
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 50%;
  display: block;
  width: 33.33px;
  height: 33.33px;
  padding: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  border: none;
  outline: none;
  background: #333;
  border-radius: 10px;
}

.content-our-partners {
  margin-top: 130px;
  padding-top: 120px;
  padding-bottom: 120px;
  text-align: center;
  background: #f6f6f6;
}

.content-our-partners .title {
  font-family: 'Playfair Display', sans-serif;
  margin-bottom: 80px;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 3.6px;
}

.content-our-partners .slide-slick {
  margin-left: 100px;
  margin-right: 100px;
}

.img-block-slick {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 576px) {
  .content-our-partners {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .content-our-partners .title {
    margin-bottom: 80px;
    font-style: normal;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.6px;
    color: #000;
  }

  .content-our-partners .slide-slick {
    margin-left: 40px;
    margin-right: 40px;
  }
}
</style>
