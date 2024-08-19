<template>
  <div class="message">{{ message }}</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello Vue Component'
    }
  }
}
</script>

<style scoped>
.message {
  font-weight: bold;
}
</style>