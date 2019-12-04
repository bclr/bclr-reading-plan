<template lang="pug">
  .display-inline
    a.serif.verse-ref.mr-3(:href="bibleGatewayUrl") {{ reference }}
    a.mr-3(:href="youversionUrl")
      img.youversion(src="~/assets/youversion_icon.png")
    a.mr-3(:href="olivetreeUrl")
      img.olivetree(src="~/assets/olivetree_icon.png")
</template>

<script>
export default {
  props: {
    reference: {
      default: () => '',
      type: String
    }
  },
  computed: {
    bibleGatewayUrl () {
      return `http://www.biblegateway.com/bible?language=en&version=NASB&passage=${this.sanitizeRef(this.reference, '+')}:1`
    },
    youversionUrl () {
      return `youversion://bible?reference=${this.sanitizeRef(this.reference, '.')}.1`
    },
    olivetreeUrl () {
      return `olivetree://bible/${this.sanitizeRef(this.reference, '%20')}%201`
    }
  },
  methods: {
    sanitizeRef (ref, delimitter) {
      const sanitized = ref.includes('-') ? ref.substring(0, ref.indexOf('-')) : ref
      return sanitized.replace(' ', delimitter)
    }
  }
}
</script>
<style>
  .verse-ref {
    color: #002345;
    font-size: 1.5rem;
  }
  .youversion {
    width: 1.3rem;
  }
  .olivetree {
    width: 1.5rem;
  }
</style>
