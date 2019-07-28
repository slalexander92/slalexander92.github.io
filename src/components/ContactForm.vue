<template lang="pug">
  #contact-form
    form(name="contact" data-netlify-recaptcha="true" netlify-honeypot="bot-field" netlify)
      p
        label Name 
          input(type="text" name="name")
      p
        label Email 
          input(type="email" name="email")
          input(name="bot-field")
      p 
        input(data-netlify-recaptcha="true")
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
