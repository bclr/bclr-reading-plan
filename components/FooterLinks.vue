
<template lang="pug">
  footer.footer-links.fixed-bottom.bg-secondary.text-light
    .justify-content-center.pt-2
      social
      small &copy; Copyright 2020,&nbsp;
        abbr(title="The Bible Church of Little Rock") BCLR
</template>

<script>
import Social from '~/components/Social'

export default {
  components: {
    Social
  }
}
</script>

<style>
  .footer-links {
    height: 3rem;
  }
  .fp-controlArrow {
    position: absolute;
    z-index: 4;
    top: 33% !important;
    cursor: pointer;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: -38px;
  }

  .fp-controlArrow.fp-prev {
    left: 15px !important;
    width: 0;
    border-width: 38.5px 34px 38.5px 0 !important;
    border-color: transparent rgba(255, 255, 255, 0.5) transparent transparent !important;
  }

  .fp-controlArrow.fp-next {
      right: 15px !important;
      border-width: 38.5px 0 38.5px 34px !important;
      border-color: transparent transparent transparent rgba(255, 255, 255, 0.5) !important;
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
