<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="block-logo-footer col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12">
          <div class="block-img-footer">
            <img class="img-logo-footer" src="~/assets/images/logoFooter.png" alt="" />
          </div>
          <img
            class="img-logo-small-footer"
            src="~/assets/images/logoTwitterFooter.png"
            alt=""
          />
          <img
            class="img-logo-small-footer"
            src="~/assets/images/logoFacebookFooter.png"
            alt=""
          />
          <img
            class="img-logo-small-footer"
            src="~/assets/images/logoLinkedinFooter.png"
            alt=""
          />
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12"></div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <h2>Address</h2>
          <div class="block-address">
            <img class="img-address" src="~/assets/images/locationFooter.png" alt="" />
            <p>Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US</p>
            <p>20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam</p>
          </div>
          <div class="block-address">
            <img class="img-address" src="~/assets/images/mobileFooter.png" alt="" />
            <p>(+1) 555-0108-000 or (+236) 555-0108</p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <h2>Subscribe</h2>
          <div class="text-subscribe">
            <p>Subscribe to our newsletter and be the first to know about our updates</p>
          </div>
          <div class="enter-email">
            <input class="input-email" type="" placeholder="Enter your email" />
            <img class="arrow-right" src="~/assets/images/arrowRightWhite.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NuxtFooter",

  head() {
    return {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src:
            "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
          crossorigin: "anonymous",
        },
      ],
    };
  },
};
</script>

<style>
#footer {
  padding-top: 24px;
  padding-bottom: 110px;
  background-image: url("~/assets/images/backGroundFooter.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.block-img-footer {
  text-align: center;
  display: block;
}

.block-logo-footer {
  text-align: center;
}

.img-logo-footer {
  width: auto;
  height: auto;
  margin-bottom: 40px;
  padding-top: 80px;
}

.img-logo-small-footer {
  display: inline;
  margin-right: 20px;
}

h2 {
  font-style: normal;
  padding-top: 80px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  margin-bottom: 40px;
}

.block-address {
  margin-top: 40px;
}

.block-address .img-address {
  float: left;
}

.block-address p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #fff;
  padding-top: 10px;
  padding-left: 50px;
}

.text-subscribe {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #fff;
}

.input-email {
  background: transparent !important;
  border-color: #fff;
  color: #fff !important;
}

.input-email::placeholder {
  color: #fff !important;
}

@media only screen and (max-width: 576px) {
  #footer {
    padding-bottom: 62px;
  }

  .img-logo-footer {
    padding-top: 40px;
  }
}
</style>
