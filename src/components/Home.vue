<template lang="pug">
  .home
    .home__background
    .home__container
      h1 Hi, I'm Spencer.
      h2 I'm a Software Engineer.
      hr

</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
@import '../styles/DEFAULT.scss';
.home{
  height:100vh;
  pointer-events: none;

  &__background{
    background:url('../assets/computer.jpg') no-repeat center;
    background-size: cover;
    height: 100vh;
    width: 100%;

    @media (max-width:975px){
      background-size: contain;
    };

  }

  &__container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-100%);

    @media (max-width:975px){
      transform: translate(-50%,-50%);
    };

    h1, h2{
      color:white;
      font-size: 36px;
      text-align:left;

      @media (max-width:975px){
        font-size: 31px;
      };

    }
    hr{
      border: 1px solid $googleBlue;
    }
  }
}

</style>
