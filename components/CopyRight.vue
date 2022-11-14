<template>
  <div class="copy-right">
    <p>2017 Copyright. Policy.</p>
  </div>
</template>
<script>
export default {
  name: "NuxtCopyRight",
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
.copy-right {
  padding-top: 15px;
  padding-bottom: 5px;
  text-align: center;
  background: #000;
}

.copy-right p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 126%;
  text-align: center;
  color: #fff;
}
</style>
