<template>
  <div id="about-us" class="container">
    <div class="row">
      <div class="col-xl-2"></div>
      <div class="content-about-us-left col-xl-4 col-lg-8">
        <h1>{{ $t('about_us.title') }}</h1>
        <p class="about">{{ $t('about_us.content') }}</p>
        <div class="row">
          <div
            class="block-user-game col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6"
          >
            <div class="block-user-game-color">
              <p>600</p>
              <p class="user-m">M</p>
              <p>+</p>
            </div>
            <p class="users-games">{{ $t('about_us.users') }}</p>
          </div>
          <div
            class="block-user-game col-xl-12 col-lg-6 col-md-6 col-sm-6 col-6"
          >
            <div class="block-user-game-color">
              <p>135</p>
              <p class="user-m"></p>
              <p>+</p>
            </div>
            <p class="users-games">{{ $t('about_us.games') }}</p>
          </div>
        </div>
      </div>
      <div class="content-about-us-right col-xl-4 col-lg-8">
        <div class="block-us-right row">
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <img
            class="icon-about-us col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
            src="~/assets/images/hourAboutUs.png"
          />
          <div class="content-right col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
            <h2>{{ $t('about_us.hour') }}</h2>
            <p>{{ $t('about_us.hour_content') }}</p>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
        </div>
        <div class="block-us-right row">
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <img
            class="icon-about-us col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
            src="~/assets/images/designAboutUs.png"
          />
          <div class="content-right col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
            <h2>{{ $t('about_us.design') }}</h2>
            <p>{{ $t('about_us.design_content') }}</p>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
        </div>
        <div class="block-us-right row">
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
          <img
            class="icon-about-us col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2"
            src="~/assets/images/teamAboutUs.png"
          />
          <div class="content-right col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
            <h2>{{ $t('about_us.team') }}</h2>
            <p>{{ $t('about_us.team_content') }}</p>
          </div>
          <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
        </div>
      </div>
      <div class="col-xl-2"></div>
    </div>
    <div class="about-us-img">
      <img class="img-cotien" src="~/assets/images/coTien.png" alt="" />
      <div class="container">
        <img class="img-map" src="~/assets/images/pinMap.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtAboutUs',
  methods: {
    handleLanguageChange(event, store) {
      store.commit('language/setLang', event.target.value)
      location.reload()
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#about-us {
  margin-top: 128px;
}

.content-about-us {
  margin-bottom: 68px;
}

.content-about-us-left {
  padding-left: 16px;
  padding-right: 16px;
}

.content-about-us-left h1 {
  font-family: 'Playfair Display', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 3.6px;
  color: #000;
  margin-bottom: 40px;
}

.content-about-us-left .about {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #757575;
  margin-bottom: 40.29px;
}

.block-user-game {
  margin-top: 39px;
}

.block-user-game-color {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 98px;
  letter-spacing: -1px;
  color: #079bee;
}

.block-user-game-color p {
  display: inline-block;
}

.block-user-game-color .user-m {
  font-size: 40px;
  margin: -15px;
}

.block-user-game .users-games {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000;
}

.content-about-us-right {
  font-family: Montserrat, sans-serif;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 58.38px;
  background-color: #eee;
}

.content-about-us-right .block-us-right {
  margin-bottom: 41.62px;
}

.content-about-us-right .icon-about-us {
  padding: 0;
  width: 50px;
  height: 50px;
}

.content-right {
  margin-top: -83px;
}

.content-about-us-right h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000;
  margin-bottom: 8.08px;
}

.content-about-us-right p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #757575;
}

.about-us-img {
  margin-top: 68px;
  text-align: center;
}

.about-us-img .img-cotien {
  animation-direction: normal;
  animation-iteration-count: infinite;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}

@keyframes example {
  0% {
    bottom: 0;
    right: 0;
  }

  25% {
    bottom: 100px;
    right: 100px;
  }

  50% {
    bottom: 100px;
    right: 0;
  }

  75% {
    bottom: 0;
    right: 100px;
  }

  100% {
    bottom: 0;
    right: 0;
  }
}

.about-us-img .img-map {
  margin-top: -100px;
  width: 100%;
}

@media only screen and (max-width: 720px) {
  #about-us {
    margin-top: 40px;
  }

  .block-user-game-color {
    font-size: 44px;
    line-height: 54px;
  }

  .block-user-game-color .user-m {
    font-size: 20px;
    margin: -10px;
  }

  .content-about-us-left .about {
    margin-bottom: 0;
  }

  .content-about-us-left h1 {
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.6px;
    margin-bottom: 16px;
  }

  .about-us-img .img-map {
    margin-top: -50px;
    width: 100%;
  }

  .content-about-us-right {
    padding-top: 40px;
    padding-bottom: 0;
    background-color: #eee;
  }

  .block-user-game .users-games {
    margin-top: -20px;
  }

  .about-us-img .img-cotien {
    width: 60%;
    animation-direction: normal;
    animation-iteration-count: infinite;
    position: relative;
    animation-name: example;
    animation-duration: 4s;
    animation-delay: 2s;
  }

  @keyframes example {
    0% {
      bottom: 0;
      right: 0;
    }

    25% {
      bottom: 50px;
      right: 50px;
    }

    50% {
      bottom: 50px;
      right: 0;
    }

    75% {
      bottom: 0;
      right: 50px;
    }

    100% {
      bottom: 0;
      right: 0;
    }
  }
}
</style>
