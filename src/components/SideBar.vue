<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <b-container class="my-container">
            <b-row>
                <div class="logo">
                    <button class="menu-toggle" @click="ToggleMenu">
                        <img src="@/assets/logo.png" alt="">
                    </button> 
                </div>
            </b-row>
            <b-row>
                <div class="menu">
                    <side-bar-item v-for="(sb_item, i) in sidebar_items.slice(0, -1)" :key="i" :item="sb_item" />
                </div>
            </b-row>
            <b-row class="my-separator"></b-row>
            <b-row class="my-logout">
                <div class="menu">
                    <side-bar-item v-for="(sb_item, i) in sidebar_items.slice(sidebar_items.length-1)" :key="i" :item="sb_item" />
                </div>
            </b-row>
        </b-container>
    </aside>
</template>

<script>
import SideBarItem from '@/components/SideBarItem.vue'
import { routes } from '@/assets/data.js'
export default {
    name: 'SideBar',
    components: {
        SideBarItem
    },
      data() {
        return {
            sidebar_items: routes.concat([
                {
                    path: '/',
                    icon: 'logout',
                    component: 'Logout'
                }
            ])
        }
    } 
}
</script>
    
<script setup>
    import { ref } from 'vue'
    const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
    const ToggleMenu = () => {
        is_expanded.value = !is_expanded.value
        localStorage.setItem("is_expanded", is_expanded.value)
    }
</script>


<style lang="scss">
    aside{
        background-color: var(--black);
        width: calc(2em + 32px);
        min-height: 100vh;
        overflow: hidden;
        transition: 0.2s ease-out;
        .my-container{
           min-height: 100%;
           padding: 2em 1.5em 0 1.5em;
        }
        .logo{
            margin: auto;          
            img {
                width: 2em;;
            }
        }
        .menu{
            margin: 0rem -0.5rem; 
            min-width: 100%; 
        }
        
        .my-separator{
            min-height: calc(100vh - 500px)
        }
        
        &.is-expanded{
            width: var(--sidebar-width);
            .button .text {
                opacity: 1;
            }
            .button {
                margin: 0.5em;
                .material-icons {
                    margin-right: 1rem;
                }
            }
        }
          button {
            cursor: pointer;
            appearance: none;
            border: none;
            outline: none;
            background: none;
        }
    }
</style>