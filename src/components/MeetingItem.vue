<template>
  <div class="my-meeting-item button" v-on:click="changeItem">
        <div class="my-day">
            <span class="my-wDay">{{item.wDay}}</span>
            <span class="my-dDay">{{item.dDay}}</span>
        </div>
        <div class="my-time">
            <div class="time">{{item.time1}}</div>
            <div class="time">{{item.time2}}</div>
            <div class="time">{{item.time3}}</div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'MeetingItem',
    props: {
        item: Object
    }
}
</script>

<script setup>
const changeItem=(evt)=> {
    var i, meetingItems;
    meetingItems = document.getElementsByClassName("my-meeting-item");
    for (i = 0; i < meetingItems.length; i++) {
        meetingItems[i].className = meetingItems[i].className.replace(" active", "");
        // console.log(tabLink[i].textContent);
    }
    evt.currentTarget.className += " active";
}
</script>

<style lang="scss">
    .my-meeting-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: inherit;
        min-width: 90px;
        min-height: 13em;
        height: 100%;
        border: 2px solid transparent;
        border-radius: 10px;
        padding: 0.5em;
        margin: 0.6em 0em;
        font-size: 14px;
        .my-day{
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            background-color: var(--light-orange);
            padding: 5px;
            width: 63px;
            height: auto;
            color: var(--dark);
            margin: 0;
            .my-dDay{
                font-weight: 900;
                font-size: 17px;
            }
        }
        .my-time{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: inherit;
            flex: 1 1 0;
            padding: 5px;
            color: var(--gray);
            font-weight: 500;
            // background-color: red;
        }
        &.active{
            border-color: var(--dark);
            transition: 0.2s ease-out;
            .time{
                font-weight: 900;
                color: var(--black);
            }
            // &:hover{
            //     border-color: var(--dark);
            // }
        }
        &:hover{
            background-color: var(--grey);
            transition: 0.2s ease-out;
        }
        @media (max-width: 950px){
            min-width: 40px;
            font-size: 9px;
            .my-day{
                width: 38px;
                .my-dDay{font-size: 12px;}
            }
            transition: 0.2s ease-out;
        }
        @media (max-width: 700px){
            min-width: 63px;
            font-size: 14px;
            .my-day{
                width: 50px;
                .my-dDay{font-size: 17px;}
            }
            transition: 0.2s ease-out;
        }
         @media (max-width: 500px){
            min-width: 50px;
            font-size: 10px;
            .my-day{
                width: 45px;
                .my-dDay{font-size: 14px;}
            }
            transition: 0.2s ease-out;
        }
    }

</style>