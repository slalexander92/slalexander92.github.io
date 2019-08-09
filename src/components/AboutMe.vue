<template lang="pug">
  .about-me
    .about-me__title-container
      h1.about-me__title About Me 
      hr
      .about-me__social-wrapper
        .about-me__icon(@click="redirect('instagram')")
          .about-me__icon--instagram
        .about-me__icon(@click="redirect('github')")
          .about-me__icon--github
        .about-me__icon(@click="redirect('linkedin')")
          .about-me__icon--linkedin

</template>

<script>

export default {
  name: 'AboutMe',
  methods:{
    redirect(location){
      const urlMap = {
        instagram: 'https://www.instagram.com/photodispencer',
        github: 'https://github.com/slalexander92',
        linkedin: 'https://www.linkedin.com/in/spencer-alexander-8a888757/',
      }
      const tab = window.open(urlMap[location], '_blank');
      tab.focus();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/DEFAULT.scss';

  .about-me{
    position: relative;
    width: 100%;
    height: 100vh;

    .app__view--open & {
      pointer-events: none;
    }

    &__title-container{
      position: absolute;
      left: 50%;
      top: 33%;
      transform: translate(-50%);
      width: 100%;
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

    &__social-wrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px;
    }

    &__icon{
      height: 75px;
      width: 75px;
      padding: 5px;
      transition: all .2s ease;
      transform: translate(0px);
      border-bottom: 3px solid transparent;
      background-size: cover;
      cursor: pointer;

      &:hover{
        transform: translate(0, -2px);
        border-bottom: 3px solid #f3f5f9;
      }

      &--github{
        background-image: url('../assets/github.svg');
        background-repeat: no-repeat;
        height: 100%;
        &:hover{
          fill: #181717;
        }
      }

      &--instagram{
        background-image: url('../assets/instagram.svg');
        background-repeat: no-repeat;
        height: 100%;
        &:hover{
          fill:#E4405F;
        }
      }

      &--linkedin{
        background-image: url('../assets/linkedin.svg');
        background-repeat: no-repeat;
        height: 100%;
        &:hover{
          fill:#0077B5;
        }
      }
    }

  }
</style>
