<template>
    <div class="my-schedule-box">
        <div class="my-tab">
            <button class="my-tab-link active" v-on:click="changeTab">Recent Added</button>
            <button class="my-tab-link" v-on:click="changeTab">In Progress</button>
            <button class="my-tab-link" v-on:click="changeTab">In Review</button>
            <button class="my-tab-link" v-on:click="changeTab">Complete</button>
        </div>
        <div class="my-content">
            <schedule-item v-for="(s_item, i) in schedule_items" :key="i" :item="s_item" />
        </div>
    </div>
</template>

<script>
import ScheduleItem from '@/components/ScheduleItem.vue'
import { schedule_items } from '@/assets/data.js'
export default {
    name: 'ScheduleBox',
    components:{
        ScheduleItem
    }
}
</script>

<script setup>
const changeTab=(evt)=> {
    var i, tabLink;
    tabLink = document.getElementsByClassName("my-tab-link");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
        console.log(tabLink[i].textContent);
    }
    // evt.currentTarget.className += " active";
}
</script>

<style lang="scss">
.my-schedule-box{
    width: 100%;
    // background-color: blue;
    .my-tab {
        width: 100%;
        overflow: hidden;
        background-color: inherit;
        display: flex;
        justify-content: space-between;
        .my-tab-link {
            background-color: inherit;
            cursor: pointer;
            border: none;
            color: var(--grey);
            font-weight: 900;
            padding: 0em 1em;
            transition: 0.3s;
            width: 25%;
            &:hover {
                transition: 0.3s ease-out;
                text-decoration: underline;
                color: var(--black);
            }
            &.active {
                text-decoration: underline;
                color: var(--gray);
                transition: 0.3s ease-out;
                &:hover{
                    color: var(--black);
                }
            }
        }
        
    }
    .my-content{
       width: auto; 
       padding: 0.5em;
    }
}

</style>