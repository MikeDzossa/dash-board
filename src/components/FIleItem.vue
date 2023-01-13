<template>
  <div class="my-file-item button" v-on:click="changeItem">
    <div class="info">
        <div class="icon">
            <span class="material-icons">{{item.icon}}</span>
        </div>
        <div class="text">
                <div class="name">{{item.name}}</div>
                <div class="time">{{item.date}}</div>
        </div>
    </div>
    <div class="size">
        <span>{{item.size}}</span>
        <span class="material-icons">save_alt</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FileItem',
    props: {
        item: Object
    }
}
</script>

<script setup>
const changeItem=(evt)=> {
    var i, fileItems;
    fileItems = document.getElementsByClassName("my-file-item");
    for (i = 0; i < fileItems.length; i++) {
        fileItems[i].className = fileItems[i].className.replace(" active", "");
        // console.log(tabLink[i].textContent);
    }
    evt.currentTarget.className += " active";
}
</script>

<style lang="scss">
    .my-file-item {

        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--white);
        height: 100px;
        width: inherit;
        border: 2px solid var(--dark);
        border-radius: 10px;
        padding: 0.5em;
        margin: 0.8em 0em;
        .info{
            // background-color: red;
            display: flex;
            align-items: center;
            justify-content: space-between;
            // min-width: 18em;
            flex:0 0 80%;
            height: 100%;
            padding: 10px;
            .icon{
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--black);
                border-radius: 10px;
                width: 15%;
                height: 50px;
                color: white;
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
        .size{
            display: flex;
            align-items: center;
            min-width: 2em;
            padding: 5px;
            // background-color: blue;
            color: var(--gray);
            >*{
                font-size: 15px;
                &:last-child{
                    padding-left: 1em;
                }
            }
        }
        &.active{
            background-color: var(--dark);
            transition: 0.2s ease-out;
            .info{
                .icon{
                    background: var(--white);
                    color: var(--dark);
                }
                .text{
                    .time{color: var(--grey);}
                    .name{color: var(--white);}
                }
            }
            .size{color: var(--white);}
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