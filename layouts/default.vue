<template lang="pug">
  div
    link(rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png")
    link(rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png")
    link(rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png")
    link(rel="manifest" href="/site.webmanifest")
    link(rel="mask-icon" href="/safari-pinned-tab.svg" color="#003366")
    meta(name="msapplication-TileColor" content="#da532c")
    meta(name="theme-color" content="#ffffff")
    navbar
    full-page(:options="options" ref="fullpage" id="fullpage")
      nuxt
    footer-links
</template>

<script>
import Navbar from '~/components/Navbar'
import FooterLinks from '~/components/FooterLinks'

export default {
  components: {
    Navbar,
    FooterLinks
  },
  data () {
    return {
      options: {
        licenseKey: 'K?cJZsO&v0',
        controlArrows: true,
        verticalCentered: false,
        scrollOverflow: true,
        css3: true
      }
    }
  },
  beforeMount () {
    // console.log(this.$refs.fullpage)
    // this.$refs.fullpage.api.silentMoveTo(1)
  }
}
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  .title {
    font-size: 2rem;
  }

  .serif {
    font-family: 'Playfair Display', serif;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }

  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }

  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }

  #header {
    z-index:9;
    background-color: #EDEDED;
    color: #003366;
  }
</style>
