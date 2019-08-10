<template lang="pug">
  .contact-form
    form(name="contact" method="POST" data-netlify="true")
      h1.contact-form__title Contact Me 
      hr
      .contact-form__input-row
        input(name="name" required)
        label Name 
      .contact-form__input-row
        input(name="email" required)
        label Email 
      button(type="submit") 
        .material-icons send

</template>

<script>

export default {
  name: 'ContactForm'
}
</script>

<style lang="scss" scoped>
@import '../styles/DEFAULT.scss';

  .contact-form{

    .app__view--open & {
      pointer-events: none;
    }

    form{
      position: absolute;
      left: 50%;
      top: 40%;
      transform: translate(-50%,-50%);
      display: flex;
      flex-direction: column;
      padding: 2rem;
      width: 55%;

      @media(max-width: 415px){
        width: 75%;
      }

    } 

    &__title{
      text-align: center;
      font-size: 41px
    }

    hr{
      width: 100px;
      margin: auto;
      border: 1px solid $googleBlue;
    }

    &__input-row{
      position: relative;
      width: 100%;
      margin: 10px auto;

      label{
        transition: all .2s ease;
        position: absolute;
        left: 0;
        top:0;
        pointer-events: none;
      }

      input{
        width: 100%;
        padding: 5px 0;
        transition: all .2s linear;
        border-bottom: 1px solid black;

        &:valid{
           ~label{
            transform: scale(.7) translate(-15%, -100%);
            color: gray;
          }
        }

        &:focus{
          border-bottom: 1px solid $googleBlue;

          ~label{
            transform: scale(.7) translate(-15%, -100%);
            color: $googleBlue;
          }
        }
      }
    }
  }
</style>
