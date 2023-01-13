<template>
    <div class="my-meeting-box">
        <div class="my-content">
            <meeting-item v-for="(m_item, i) in meeting_items" :key="i" :item="m_item" />
        </div>
    </div>
</template>

<script>
import MeetingItem from '@/components/MeetingItem.vue'
import { meeting_items } from '@/assets/data.js'
export default {
    name: 'MeetingBox',
    components:{
        MeetingItem
    },
     data() {
        return {
            meeting_items: meeting_items
        }
    }  
}
</script>

<style lang="scss">
.my-meeting-box{
    width: 100%;
    border-radius: 10px;
    background-color: rgba(251, 199, 166, 0.24);
    .my-content{
       width: inherit; 
       display: flex;
       justify-content: space-evenly;
       align-items: center;
       padding: 0.5em;
    }
}

</style>