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
    full-page(:options="options")
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
        licenseKey: 'YOUR KEY HERE',
        controlArrows: true,
        verticalCentered: false,
        css3: true
      }
    }
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

  body {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  #header {
    z-index:9;
    background-color: #EDEDED;
    color: #003366;
  }

  .title {
    font-size: 2rem;
  }

  .serif {
    font-family: 'Playfair Display', serif;
  }

  .fp-controlArrow {
      position: absolute;
      z-index: 4;
      top: 50%;
      cursor: pointer;
      width: 0;
      height: 0;
      border-style: solid;
      margin-top: -38px;
  }

  .fp-controlArrow.fp-prev {
      left: 15px;
      width: 0;
      border-width: 38.5px 34px 38.5px 0;
      border-color: transparent rgba(255, 255, 255, 0.5) transparent transparent;
  }

  .fp-controlArrow.fp-next {
      right: 15px;
      border-width: 38.5px 0 38.5px 34px;
      border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
  }

  .container-fluid {
    margin: 0 auto;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 6rem;
  }
  .section {
    background-color: #002345;
  }
  .bg-bclr {
    background-image: url('~assets/bclr.svg');
    background-size: 110%;
    background-position-x: 20%;
    background-position-y: 10%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  @media only screen and (max-width: 768px) {
    .bg-bclr  {
      background-size: auto 110%;
      background-position-x: 20%;
      background-position-y: 10%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
  }
</style>
