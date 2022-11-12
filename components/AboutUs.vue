<template>
  <div id="about-us" class="row">
    <div class="col-xl-2"></div>
    <div class="content-about-us-left col-xl-4 col-lg-8">
      <h1>About Us</h1>
      <p class="about">
        Browse our selection of free online games and have a great time without leaving
        the site! Our Kids Games option also includes game reviews, extensive game cheats
        and walkthroughs, and much more. We have exclusive free downloads, videos, and
        articles as well. Etech reviews the most popular kids games from all the most
        popular video gaming platforms, so you don’t need to search around for fun
        anywhere else on the Internet. Explore a whole new world of gaming on Etech.
      </p>
      <div class="block-user-game row">
        <div class="col-xl-12 col-lg-6">
          <div class="block-user-game-color">
            <p>600</p>
            <p class="user-m">M</p>
            <p>+</p>
          </div>
          <p class="users-games">Users</p>
        </div>
      </div>
      <div class="block-user-game">
        <div class="col-xl-12 col-lg-6">
          <div class="block-user-game-color">
            <p>135</p>
            <p class="user-m"></p>
            <p>+</p>
          </div>
          <p class="users-games">Games</p>
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
          <h2>24 - Hour</h2>
          <p>24/7 access ensures operators' businesses runs smoothly all year long.</p>
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
          <h2>Design</h2>
          <p>
            Combining imaginative universes, play dynamics, and unprecedented gameplay,
            our games transcend the boundaries of the virtual world by weaving innovative
            gameplay.
          </p>
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
          <h2>Team</h2>
          <p>
            Etech is an award-winning, international studio of designers, artists,
            animators and producers that create content for the biggest names in film and
            video games.
          </p>
        </div>
        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
      </div>
    </div>
    <div class="col-xl-2"></div>
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
  name: "NuxtAboutUs",
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
    };
  },
};
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
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 3.6px;
  color: #000;
  margin-bottom: 40px;
}

.content-about-us-left .about {
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
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000;
}

.content-about-us-right {
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

.about-us-img .img-map {
  margin-top: -100px;
  width: 100%;
}

@media only screen and (max-width: 720px) {
  .about-us-img .img-cotien {
    width: 60%;
  }

  .about-us-img .img-map {
    margin-top: -50px;
    width: 100%;
  }
}
</style>
