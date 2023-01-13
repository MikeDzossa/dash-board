<template>
    <div class="my-file-box">
        <div class="my-content">
            <file-item v-for="(f_item, i) in file_items" :key="i" :item="f_item" />
        </div>
    </div>
</template>

<script>
import FileItem from '@/components/FIleItem.vue'
import { file_items } from '@/assets/data.js'
export default {
    name: 'FileBox',
    components:{
        FileItem
    },
    data() {
        return {
        file_items: file_items
        }
    }        
}
</script>

<style lang="scss">
.my-file-box{
    width: 100%;
    // background-color: red;
    .my-content{
       width: inherit; 
       padding: 0 0.5em;
    }
}

</style>