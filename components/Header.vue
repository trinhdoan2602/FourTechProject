<!-- Please remove this file from your project -->
<template>
  <div>
    <div id="header">
      <header>
        <nav
          class="navbar nav-bar navbar-expand-lg navbar-light bg-light col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
        >
          <div class="container-fluid row">
            <img
              class="logo navbar-brand col-xl-1 col-lg-2 col-md-2 col-sm-2 col-2"
              src="~/assets/images/logo.png"
            />
            <button
              class="navbar-toggler col-xl-0 col-lg-0 col-md-2 col-sm-2 col-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarSupportedContent"
              class="collapse navbar-collapse col-xl-11 col-lg-10 col-md-8 col-sm-8 col-8"
            >
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#about-us">{{
                    $t('header.about')
                  }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#our-games">{{
                    $t('header.games')
                  }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#our-partners">{{
                    $t('header.partners')
                  }}</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#footer">{{
                    $t('header.contact')
                  }}</a>
                </li>
                <li>
                  <select
                    v-model="lang"
                    class="form-select"
                    @change="handleLanguageChange($event, $store)"
                  >
                    <option value="en">English</option>
                    <option value="vn">Việt Nam</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="row">
          <div class="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12"></div>
          <div
            class="content-header col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12"
          >
            <div class="block-header">
              <h1 class="header-title">{{ $t('header.title') }}</h1>
            </div>
            <div class="countdown">
              <div class="container-day">
                <h3 class="day">30</h3>
                <h3 class="duoi-count-down">{{ $t('header.days') }}</h3>
              </div>
              <div class="hai-cham">:</div>
              <div class="container-hour">
                <h3 class="hour">18</h3>
                <h3 class="duoi-count-down">{{ $t('header.hours') }}</h3>
              </div>
              <div class="hai-cham">:</div>
              <div class="container-minute">
                <h3 class="minute">20</h3>
                <h3 class="duoi-count-down">{{ $t('header.minutes') }}</h3>
              </div>
              <div class="hai-cham">:</div>
              <div class="container-second">
                <h3 class="second">11</h3>
                <h3 class="duoi-count-down">{{ $t('header.second') }}</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
              <div class="col-xl-8 col-lg-8 col-md-10 col-sm-10 col-10">
                <p class="we-will">{{ $t('header.we_will') }}</p>
                <div class="enter-email">
                  <input type="" placeholder="Enter your email" />
                  <a href="">
                    <img
                      class="arrow-right"
                      src="~/assets/images/arrowRight.png"
                    />
                  </a>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-2 col-md-6 col-sm-12 col-12"></div>
        </div>
        <div class="row">
          <img
            class="img-ongtien-header col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
            src="~/assets/images/ongTien.png"
            alt=""
          />
        </div>
      </header>
    </div>
    <img
      class="img-ongtien-header-mobile col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
      src="~/assets/images/ongTien.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'NuxtHeader',
  data() {
    const lang = process.client ? localStorage.getItem('lang') || 'en' : ''
    return { lang }
  },
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
* {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

#header {
  height: 988.64px;
  background-image: url('~/assets/images/backgroundHeader.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
}

.img-ongtien-header {
  position: absolute;
  width: auto;
  height: auto;
  z-index: 2;
  margin-top: -650px;
}

.img-ongtien-header-mobile {
  visibility: hidden;
  display: inline-block;
  width: 0;
  height: 0;
}

#header header .logo {
  margin-top: 20px;
  margin-left: 4.11%;
  z-index: 3;
  cursor: pointer;
  width: auto;
  height: auto;
}

.navbar-toggler {
  margin-top: 20px;
  margin-right: 4.11%;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
  padding: 0;
}

.navbar-toggler-icon {
  background-image: url('~/assets/images/menu.png') !important;
  display: inline-block;
  width: 40px;
  height: 40px;
  color: #fff;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.bg-light {
  background-color: transparent !important;
}

.navbar-light .navbar-nav .nav-link {
  color: #fff;
  font-family: Montserrat, sans-serif;
}

.nav-bar {
  width: 100%;
  top: 0;
  right: 0;
  float: right;
  z-index: 2;
}

.nav-bar ul {
  float: right;
  z-index: 2;
}

.nav-bar li {
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  display: inline-block;
  align-items: center;
  margin-top: 40px;
  margin-right: 80px;
}

.nav-bar .language-select {
  display: inline-block;
  margin-right: 80px;
}

.content-header {
  text-align: center;
  z-index: 3;
}

.content-header h1 {
  font-family: Montserrat, sans-serif;
  margin-top: 132px;
  margin-bottom: 21px;
  color: #fff;
  font-size: 80px;
  font-weight: 900;
  line-height: 120px;
  font-style: normal;
}

.content-header p {
  margin: auto;
  margin-top: 97.1px;
  color: #fff;
  font-size: 18px;
  width: 100%;
  height: 46px;
  font-weight: 400;
  line-height: 126%;
  text-align: center;
  font-style: normal;
}

.enter-email {
  margin-top: 32px;
  width: 100%;
}

.enter-email input {
  display: inline-block;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 10px;
  width: 100%;
  height: 56px;
  padding-left: 14px;
  background: #fff;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #545454;
}

.enter-email .arrow-right {
  position: absolute;
  display: inline-block;
  align-items: center;
  margin-top: 16px;
  margin-left: -40.75px;
}

.countdown {
  padding: 25px;
  border-radius: 21px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: #fff;
}

.day,
.hour,
.minute,
.second,
.hai-cham {
  font-family: 'Playfair Display', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 64px;
  text-align: center;
  letter-spacing: 4.8px;
}

.we-will {
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 126%;
  text-align: center;
  color: #fff;
}

.waiting {
  height: 50vh;
}

.navbar-collapse {
  text-align: center;
  align-items: center;
}

@media only screen and (max-width: 1140px) {
  .img-ongtien-header {
    visibility: hidden;
    display: inline-block;
    width: 0;
    height: 0;
  }

  .img-ongtien-header-mobile {
    visibility: visible;
    display: inline;
    width: 100%;
    height: 100%;
    margin-top: -150px;
    margin-left: 150px;
  }

  .nav-bar li {
    margin-right: 50px;
  }
}

@media only screen and (max-width: 991px) {
  .navbar-collapse {
    text-align: center;
    align-items: center;
  }

  .nav-bar ul {
    float: initial;
    z-index: 2;
  }

  .nav-bar li {
    margin-right: 0;
  }

  .form-select {
    background-color: 'transparent' !important;
    width: auto;
    margin-left: calc(50% - 55px);
  }

  .countdown {
    margin-left: 16px;
    margin-right: 16px;
    padding: 20px;
    border-radius: 21px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    background-color: #fff;
  }

  .day,
  .hour,
  .minute,
  .second,
  .hai-cham {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 10px;
    text-align: center;
    letter-spacing: 0.8px;
  }

  .duoi-count-down {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: -0.6px;
  }

  .waiting {
    height: 30vh;
  }
}

@media only screen and (max-width: 960px) {
  #header {
    height: 800px;
    background-image: url('~/assets/images/backGroundHeaderMobile.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% auto;
  }
}

@media only screen and (max-width: 720px) {
  #header {
    height: 608px;
    background-image: url('~/assets/images/backGroundHeaderMobile.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% auto;
  }

  .img-ongtien-header-mobile {
    visibility: visible;
    display: inline;
    width: 100%;
    height: 100%;
    margin-top: -100px;
    margin-left: 50px;
  }

  .content-header h1 {
    margin-top: 24px;
    margin-bottom: 38px;
    color: #fff;
    font-size: 40px;
    font-weight: 900;
    line-height: 50px;
    font-style: normal;
  }

  .content-header p {
    margin: auto;
    margin-top: 40px;
    color: #fff;
    font-size: 12px;
    width: 100%;
    height: 45px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0.9px;
    text-align: center;
    font-style: normal;
  }
}

@media only screen and (max-width: 440px) {
  .day,
  .hour,
  .minute,
  .second,
  .hai-cham {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 10px;
    text-align: center;
    letter-spacing: 0.8px;
  }

  .duoi-count-down {
    font-size: 15px;
  }
}
</style>
