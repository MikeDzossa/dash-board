<template>
    <div :class="`${is_focused ? 'my-searchbar is-focused' : 'my-searchbar'}`">
        <div class="my-icon"><span class="material-icons button">search</span></div>
        <div class="my-textbox">
            <input type="text" placeholder="Search" @focus="ToggleFocus" @blur="ToggleFocus">
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<script setup>
    import { ref } from 'vue'
    const is_focused = ref(localStorage.getItem("is_focused") === "false")
    const ToggleFocus = () => {
        is_focused.value = !is_focused.value
        localStorage.setItem("is_focused", is_focused.value)
    }
</script>

<style lang="scss">
    .my-searchbar{
        &.is-focused{outline: 2px solid;}
        margin:0 2px;
        padding: 0 5px;
        width: 100%;
        display: flex;
        font-size: 20px;
        background-color: var(--grey);
        color: var(--dark);
        border-radius: 10px;

        .my-textbox{
            flex: 1 1 0;
            input{
                border-style: none;
                outline: none;
                width: 100%;
                background-color: transparent;
                
            }
        }

        .my-icon{
            // width: 5%;
            // max-width: 1em;
            padding-right: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            >*{
                font-size: 20px;
                color: var(--gray);
                font-weight: 900;
            }
        }
    }
</style>