<template lang="pug">
  .app
    Navigation(:class="{ 'navigation--open' : drawerOpen }" v-on:navClick="closeDrawer")
    .app__view(ref="body" @click.self="closeDrawer" :class="{ 'app__view--open' : drawerOpen }")
      .app__menu.material-icons(@click.self="toggleMenu") menu 
      transition(name="fade")
        router-view
</template>

<script>
import Navigation from './components/Navigation'
import ContactForm from './components/ContactForm';
export default {
  name: 'app',
  data: () => ({
    drawerOpen: false
  }),
  methods:{
    toggleMenu(){
      this.drawerOpen = !this.drawerOpen;
    },
    closeDrawer(){
      if(this.drawerOpen){
        this.toggleMenu();
      }
    }
  },
  components:{
    ContactForm,
    Navigation,
  }
}
</script>

<style lang="scss">

.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-to, .fade-enter-active   {
  transition: all .5s ease;
  opacity: 1;
}

.fade-enter, .fade-leave, .fade-leave-to {
  transition: all .5s ease;
  opacity: 0;
}

.app{
  height: 100vh;
  width: 100vw;

  &__view{
    position: absolute;
    left: 40vh;
    width: calc(100% - 40vh);
    height: 100vh;
    display: inline-block;
    transition: all .5s ease;
    z-index: 1;
    
    @media (max-width: 768px){
      transition: all .5 ease;
      left: 0;
      width:100vw;
    }

    &--open{
      left: 40vh;
      opacity: .4;
    }
  }

  &__menu{
    position: absolute;
    padding: 10px;
    font-size: 36px;
    transition: all .5s ease;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    
    @media (max-width: 768px){
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
