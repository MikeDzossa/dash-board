<template>
    <div class="my-chart-box">
        <b-container class="my-container">
            <b-row>
                <b-col>Illustration Template</b-col>
                <b-col class="my-flex d-flex justify-content-end">
                    <span class="material-icons button">save_alt</span>
                    <span class="material-icons button">edit_document</span>
                </b-col>
            </b-row>
        </b-container>
        <b-container class="my-chart-flexbox">
            <b-row>
                <b-col class="col-lg-6">
                    <div class="my-chart">
                        <Doughnut
                            id="my-chart-id"
                            :options="chartOptions"
                            :data="chartData"
                            ::dataset-id-key="datasetIdKey"
                            :plugins="plugins"
                            :width="width"
                            :height="height"
                        />
                    </div>
                </b-col>
                <b-col class="col-lg-6">
                    <div class="my-label-box">
                        <b-container class="my-label">
                            <b-row>
                                <b-col class="my-dot">
                                    <span id="dot-1" class="material-icons">fiber_manual_record</span>
                                </b-col>
                                <b-col>
                                <h3>Cartoon illustration</h3>
                                <p>Modern storytelling</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col class="my-dot">
                                    <span id="dot-2" class="material-icons">fiber_manual_record</span>
                                </b-col>
                                <b-col>
                                    <h3>Abstract pattern</h3>
                                <p>Geometric shapes</p>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
// eslint-disable-next-line 
import Chart from 'chart.js/auto'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
);

export default {
  name: 'DoughnutChart',
  components: { Doughnut },
  props:{
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 210
    },
    height: {
      type: Number,
      default: 210
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          "35%",
          "65%",
        ],
        datasets: [
          {
            label: "Doughnut",
            backgroundColor: ['#e16212', '#3f0d0d'],
            data: [35,65],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style lang="scss">
    .my-chart-box{
        width: 100%;
        border-radius: 10px;
        background-color: var(--grey);
        padding: 0.5em;
        .my-flex{
            flex: 0 1 25%;
            max-width: 90%;
            *{
                padding-left:0.5em;
                font-size: 20px;
            }
        }
        .my-chart-flexbox{
            padding: 0.5em;
            background-color: inherit;
            .my-chart{
                display: flex;
                justify-content: center;
                padding: 1em;
                #my-chart-id{
                    margin: 0;
                    padding: 0px;
                }
            }
            .my-label-box{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .my-label{
                    margin: auto;
                    width: 15em;
                    .my-dot{
                        max-width: 1.3em;
                        padding: 2px;
                        flex: 0 0 10%;
                    }
                    #dot-1{
                        color: var(--orange);
                        font-size: 15px;
                    }
                    #dot-2{
                        color: var(--maroon);
                        font-size: 15px;
                    }
                    h3{
                    font-size: 20px;
                    color: var(--dark); 
                    padding: 0;
                    margin: 0;
                    }
                    p{
                        color: var(--gray);
                        font-size: 15px;
                    }
                }
            }
            
        }
        
    }
</style>