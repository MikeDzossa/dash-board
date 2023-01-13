<template>
  <div class="my-schedule-item button" v-on:click="changeItem">
    <div class="info">
        <div class="icon">
            <span class="material-icons">{{item.icon}}</span>
        </div>
        <div class="text">
                <div class="name">{{item.name}}</div>
                <div class="time">{{item.time}}</div>
        </div>
    </div>
    <div class="people">
        <span class="material-icons">{{item.people}}</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ScheduleItem',
    props: {
        item: Object
    }
}   
</script>

<script setup>
const changeItem=(evt)=> {
    var i, scheduleItems;
    scheduleItems = document.getElementsByClassName("my-schedule-item");
    for (i = 0; i < scheduleItems.length; i++) {
        scheduleItems[i].className = scheduleItems[i].className.replace(" active", "");
        // console.log(tabLink[i].textContent);
    }
    evt.currentTarget.className += " active";
}
</script>

<style lang="scss">
    .my-schedule-item {
        //  >*{
        //         border: 1px solid red;
        //     }
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--white);
        height: 100px;
        width: inherit;
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 1em;
        margin: 0.6em 0em;
        .info{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex: 0 0 80%;
            // min-width: 18em;
            // background-color: blue;
            height: 100%;
            padding: 10px;
            .icon{
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--light-orange);
                border-radius: 10px;
                width: 15%;
                height: 50px;
            }
            .text{
                width: 80%;
                .name{
                    color: var(--black);
                    font-size: 18px;

                }
                .time{
                    color: var(--gray);
                    font-size: 14px;
                }
            }
        }
        .people{
            display: flex;
            align-items: center;
            min-width: 50px;
            padding: 5px;
            >*{font-size: 40px;}
        }
        &.active{
            background-color: var(--dark);
            transition: 0.2s ease-out;
            .info{
                .icon{background: var(--white);}
                .text{
                    .time{color: var(--grey);}
                    .name{color: var(--white);}
                }
            }
            .people{color: var(--white);}
            &:hover{
                background-color: var(--gray);
            }
        }
        &:hover{
            background-color: var(--grey);
            transition: 0.2s ease-out;
        }

    }

</style>