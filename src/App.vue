<template>
  <div id="app">
    <div class="mobile-nav">
      <my-side-bar />
      <search-bar />
      <span class="material-icons my-profile button">account_circle</span>
    </div>
    <div class="full-screen">
      <side-bar />    
      <router-view />
    </div>
     
  </div>
</template>

<script>
/* eslint-disable */
import SideBar from '@/components/SideBar.vue'
import MySideBar from '@/components/MySideBar.vue'
import SearchBar from './components/SearchBar.vue'
export default {
  name: 'App',
  components: {
    SideBar,
    MySideBar,
    SearchBar
  }
}
</script>

<style lang="scss">
@import url('@/styles/reset.css');
@import url('@/styles/preset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', Arial, sans-serif;
  .full-screen{display: flex; width: 100%; padding: 0; margin: 0;}
  .mobile-nav{
    margin:0; padding: 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    max-width: 450px;
    max-height:50px;
    .my-searchbar{
      width: auto;
      *{width: auto;}
      min-width: 100px;
      max-width: 300px;
      max-height: 50px;
      margin: 0.5em 0;;
      background-color: transparent;
    }
    .my-profile {
      font-size: 40px;
      padding: 0;
      padding-top: 3px;
      margin:0;
    }
  }
  .button{
    cursor: pointer;
  }
  .mobile-nav{
    display: none;
  }
  @media (max-width: 450px){
    aside, .my-heading.my-search{
       display:none;
       .full-screen{display: block; width: 100%;}
   }
    .mobile-nav{
      display: flex;
    }
  }
   @media (max-width: 700px){
           .my-level-box .my-label{
                font-size: 13px;
                h3{font-size: 17px;}
                
            }
            transition: 0.2s ease-out;
        }
         @media (max-width: 500px){
            .my-level-box .my-label{
                font-size: 11px;
                h3{font-size: 14px;}
                
            }
            transition: 0.2s ease-out;
        }
}
</style>
