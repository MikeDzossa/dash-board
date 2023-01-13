<template>
  <div>
    <b-button v-b-toggle.sidebar-footer id="my-sidebar-toggle">
      <span class="material-icons">list</span>
    </b-button>
    <b-sidebar id="sidebar-footer" 
        aria-label="Sidebar with custom footer" 
        no-header bg-variant="dark" 
        text-variant="light" 
        no-close-on-route-change=true 
        width="200px"
        expanded="true"
        :backdrop-variant="variant"
         backdrop
        shadow
    >
      <template #footer="">
       <div class="d-flex text-light align-items-center justify-content-center px-3 py-2" style="background-color: #131b17;">
            <b-button class="button" size="md">
              <a href="/" target="_self">
                <span class="material-icons">logout</span>
                <span class="text">Logout</span>
              </a>   
            </b-button>
       </div>
      </template>
      <div class="px-3 py-2 my-options">
        <div class="my-logo">
            <img src="@/assets/logo.png" alt="">
        </div>
        <nav class="mb-3">
            <b-nav vertical>
               <b-nav-item active-class="active" class="nav-link button" v-for="(route, i) in routes" :key="i" :to="route.path" >
                <span class="material-icons">{{route.icon}}</span>
                <span class="text">{{ route.component }}</span>
              </b-nav-item>  
            </b-nav>
          </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { routes } from '@/assets/data.js'
export default {
  name: 'MySideBar',
   data() {
        return {
            routes: routes
        }
    }  
}
</script>

<style lang="scss">
  #my-sidebar-toggle{
    position: relative;
    height: 40px;
    width: 50px;
    padding: 0;
    background: transparent;
    color: var(--dark);
    border: none;
    .material-icons{ font-size: 30px;}
    &:hover{
      border: 2px solid var(--gray);
    }
  }
  .b-sidebar-body{
    background-color: #131b17;
  }
  #sidebar-footer{
    background-color: var(--black);
    .my-options{
      .my-logo{
        display: flex;
        justify-content: center;
        padding: 1em 0 2em 0;
        // background: red;
        margin: auto;          
        img {
            width: 2.5em;;
        }
      }   
    }
    a, .btn.btn-secondary.btn-md{
        display: flex;
        align-items: center;
        text-decoration: none;
        background-color: transparent;
        border: none;
        width: 100%;
    }

    .button, .btn.btn-secondary.btn-md{
      padding: 0.5em 1em;
      margin: 0.5em 0;
      transition: 0.2s ease-out;
      *{padding: 0; margin: 0;}
      
      .material-icons{
        font-size: 2em;
        color: var(--gray);
        transition: 0.2s ease-out;
      }
      .text{
        color: var(--gray);
        padding-left: 1em;
        transition: 0.2s ease-out;
      }
  
      &:hover{
         border: 2px solid var(--blue);
         border-radius: 5px;
       }
      a.active{
        .material-icons, .text{
          color: var(--white);
          font-weight: bold;
        }
      }
    }
}
</style>