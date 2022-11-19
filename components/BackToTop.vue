<template>
  <client-only>
    <a href="#">
      <div v-show="isVisible" class="scrollup-button">
        <img src="../assets/images/up-arrow.png" alt="back to top" />
      </div>
    </a>
  </client-only>
</template>
<script>
import { debounce } from 'vue-debounce'
export default {
  name: 'NuxtBackToTop',
  data() {
    return {
      scrollTop: null,
      isVisible: false,
      visibleDistance: 200,
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.scrollListener, 100), true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      if (window.pageYOffset) {
        this.scrollTop = window.pageYOffset
      } else {
        this.scrollTop = 0
      }
      if (this.scrollTop > this.visibleDistance) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.scrollup-button {
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 3px 3px 3px rgb(82, 82, 82);
  border-radius: 50%;
  opacity: 0.6;
  padding: 0.5rem;
  z-index: 1000;
  transition: opacity 0.15s ease;
  &:hover {
    opacity: 0.9;
  }
  img {
    text-align: center;
    width: 66.67px;
    height: 66.67px;
    width: auto;
    height: auto;
    rotate: (180deg);
  }
}
</style>
