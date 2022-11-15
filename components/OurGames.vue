<template>
  <div id="our-games" class="content-our-games">
    <h1 class="title">{{ $t('our_games.title') }}</h1>
    <div class="row">
      <div class="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-1"></div>
      <p class="content col-xl-4 col-lg-6 col-md-8 col-sm-10 col-10">
        {{ $t('our_games.content') }}
      </p>
      <div class="col-xl-4 col-lg-3 col-md-2 col-sm-1 col-1"></div>
    </div>
    <div class="block-games row">
      <div class="block-games-cards col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
        <img
          class="img-block-card"
          src="~/assets/images/cardGames1.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames2.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames3.png"
          alt=""
        />
      </div>
      <div
        class="block-games-cards block-games-cards-chan block-games-cards-chan-mobile col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"
      >
        <img
          class="img-block-card"
          src="~/assets/images/cardGames4.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames5.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames6.png"
          alt=""
        />
      </div>
      <div
        class="block-games-cards block-games-cards-chan-mobile-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"
      >
        <img
          class="img-block-card"
          src="~/assets/images/cardGames7.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames8.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames9.png"
          alt=""
        />
      </div>
      <div
        class="block-games-cards block-games-cards-chan col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6"
      >
        <img
          class="img-block-card"
          src="~/assets/images/cardGames10.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames11.png"
          alt=""
        />
        <img
          class="img-block-card"
          src="~/assets/images/cardGames12.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NuxtOurGames',
  head() {
    return {
      link: [
        {
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
          rel: 'stylesheet',
          integrity:
            'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          integrity:
            'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
          crossorigin: 'anonymous',
        },
      ],
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
.content-our-games {
  margin-top: 128.04px;
  margin-bottom: 130px;
  text-align: center;
}

.content-our-games .title {
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  letter-spacing: 3.6px;
  margin-bottom: 24.46px;
}

.content-our-games .content {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  margin-bottom: 80px;
  text-align: center;
  color: #757575;
}

.content-our-games .block-games {
  padding-left: 20px;
  padding-right: 20px;
}

.content-our-games .block-games-cards-chan {
  margin-top: 120px;
}

.content-our-games .img-block-card {
  width: 100%;
  height: auto;
  opacity: 0.9;
}

.content-our-games .img-block-card:hover {
  opacity: 1;
}

@media only screen and (max-width: 991px) {
  .content-our-games {
    margin-top: 50.77px;
    margin-bottom: 48px;
  }

  .content-our-games .title {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.6px;
  }

  .content-our-games .block-games-cards-chan {
    margin-top: 0;
  }

  .block-games-cards-chan-mobile {
    margin-top: 60px !important;
  }

  .block-games-cards-chan-mobile-2 {
    margin-top: -50px !important;
  }
}

@media only screen and (max-width: 450px) {
  .block-games-cards-chan-mobile-2 {
    margin-top: -57px !important;
  }
}
</style>
