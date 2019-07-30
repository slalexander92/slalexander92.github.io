<template lang="pug">
  .navigation
    .navigation__img
    .navigation__name Spencer Alexander
    .navigation__title Software Engineer
    .navigation__list
      router-link.navigation__link(
        v-for='(link, i) in links', 
        :key='i' 
        :to='link.path', 
        v-html='link.name'
        exact
      )

</template>

<script>
export default {
  name: 'Navigation',
  computed:{
    links(){
      return this.$router.options.routes
    }
  },
}
</script>

<style lang="scss">
  @import '../styles/DEFAULT';

  .navigation{
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 40vh;
    background-color: #f3f5f9;
    transition: all .5s ease;

    @media (max-width: 768px){
      left: -100%;

      &__menu{
        right: 0;
      }

    }

    &--open{
      left: 0;
    }

    &__img{
      border-radius: 100%;
      background: url("../assets/facey.png") no-repeat center;
      background-size: 100%;
      height: 150px;
      width: 150px;
      border: 1px solid #afafaf;
      align-self: center;
      margin: 35px 0;
    } 

    &__name{
      text-align:center;
    }

    &__title{
      text-align: center
    }

    &__list{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__link{
      text-decoration:none;
      color: $googleBlue;

      &.active{
        border-bottom: 1px solid $googleBlue;
      }

    }




  }
</style>
