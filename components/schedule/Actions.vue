<template lang="pug">
  .pt-4
    a.btn.btn-outline-dark.text-light(href="/2020BCLRReadingTogether.pdf")
      span {{ $t('actions.download') }} &nbsp;
      i.fa.fas.fa-download
    a.m-1.btn.btn-outline-dark.text-light(href="/March_Reading.pdf")
      span {{ $t('actions.march') }} &nbsp;
      i.fa.fas.fa-book
</template>

<script>
export default {
}
</script>

<style scoped>
  .btn-outline-dark {
    border-color: #f8f9fa;
  }
</style>
