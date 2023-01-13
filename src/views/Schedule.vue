<template>
    <b-container class="page" fluid>
        <b-row>
            <b-col class="main-col col-md-6">
                <!-- First column on page -->
                <b-row class="my-row my-schedule">
                    <!-- Schedule portion -->
                    <b-col>
                        <b-row class="my-heading">
                            <b-col  class="my-flex"><h1>Schedule</h1></b-col>
                            <b-col class="d-flex justify-content-end">
                                <date-picker v-model="time1" :format="format" :lang="lang" ></date-picker>
                            </b-col>
                        </b-row>
                        <b-row>
                            <!-- Schedule component -->
                            <schedule-box />
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="my-row my-process">
                    <!-- Process Progress portion -->
                    <b-col>
                        <b-row class="my-heading my-project">
                            <b-col><h2>Project Progress</h2></b-col>
                            <b-col class="my-flex d-flex justify-content-end"><h2 class="button">...</h2></b-col>
                        </b-row>
                        <b-row>
                            <!-- Project Graphic -->
                            <doughnut-chart />    
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col class="main-col col-md-6">
                <!-- Second column on page -->
                <b-row class="my-row my-heading my-search">
                    <!-- Search bar + profile pic -->
                    <b-col class="d-flex align-items-center">
                        <search-bar />
                    </b-col>
                    <b-col class="d-flex justify-content-end my-flex">
                        <span class="material-icons my-profile button">account_circle</span>
                    </b-col>
                </b-row>
                <b-row class="my-row my-meeting">
                     <!-- Meeting portion -->
                    <b-col>
                        <b-row class="my-heading">
                            <b-col class="my-flex"><h2>Meeting</h2></b-col>
                            <b-col class="d-flex justify-content-end">
                                <date-picker v-model="time2" :format="format" range></date-picker>
                            </b-col>
                        </b-row>
                        <b-row>
                            <!-- Meeting component -->
                            <meeting-box />
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="my-row my-files">
                     <!-- Files portion -->
                    <b-col>
                        <b-row class="my-heading">
                            <b-col  class="my-flex"><h2>Files</h2></b-col>
                            <b-col  class="d-flex justify-content-end button">
                                <span class="material-icons">arrow_back</span>
                                <span class="view-all">view all</span>
                            </b-col>
                        </b-row>
                        <b-row>
                            <!-- Files component -->
                            <file-box />
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import SearchBar from '@/components/SearchBar.vue'
import ScheduleBox from '@/components/ScheduleBox.vue'
import FileBox from '@/components/FileBox.vue'
import MeetingBox from '@/components/MeetingBox.vue'
import DoughnutChart from '@/components/Chart.vue'
export default {
    name: 'SchedulePage',
    components: {
        DatePicker,
        SearchBar,
        ScheduleBox,
        DoughnutChart,
        FileBox,
        MeetingBox
    },
    data() {
      return {
        time1: new Date(2021,7,5),
        time2: [
            new Date(2021,7,3),
            new Date(2021,7,7)
        ],
        lang: {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: true,
        },
        format: 'MMM DD, YYYY',
      };
    }
}
</script>

<script setup>

</script>

<style lang="scss">
    // Container setup
   
    .container-fluid.page{
        width: 100%;
       padding: 0 0;
       h1{font-size: 35px;}
       h2{font-size: 25px;}
       h1, h2, .view-all{font-weight: 900; color: var(--dark);}
       .my-profile{font-size: 40px;}
       >.row{
            height: 100%;
            margin: 0;
            padding: 0;
            div{
                &.col, &.row{
                    margin: 0;
                    padding: 0;
                    .my-process{
                        margin-top: -0.5em;
                     }
                     .my-schedule{
                        padding-bottom: 0;
                     }
                }
            }
            .main-col{
                min-width: 350px;
                &:last-child, .main-col:first-child{
                    padding: 0.5em 0.2em;
                }
            }
            div.my-row{
                &:first-child{margin-bottom: 0.5em;}
                padding: 0.5em 1em;
            }
            // .my-search, .my-files, .my-search>*, .my-files>*{ border: 2px solid blue;}
            .my-flex{
                flex: 0 1 25%;
                max-width: 90%;
            }
        }
        // Date picker setup
        .mx-datepicker{
            max-width: 8em;
            .mx-input-wrapper{
                .mx-input{
                    font-family: 'Roboto', Arial, sans-serif;
                    color: var(--gray);
                    font-weight: bold;
                    padding-bottom: 2px;
                    padding-top: 2px;
                    height: 25px;
                    // margin: 0px;
                    border-style: none;
                    &:hover{
                        background-color: rgba(0, 0, 0, 0.059);
                    }
                }
            }
            &.mx-datepicker-range{
                max-width: 14em;
            }
        }

    }

</style>