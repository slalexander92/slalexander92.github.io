<template lang="pug">
  #contact-form
    form(name="contact" method="POST" data-netlify="true")
      p
        label Name 
          input(type="text" name="name")
      p
        label Email 
          input(type="email" name="email")
      p
        button(type="submit") Send

</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">

</style>
