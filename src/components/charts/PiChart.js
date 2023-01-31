import { CChart } from "@coreui/react-chartjs";


const PiChart = () => {
    return (

        <div class="card card-info">
            <div class="card-header">
                <h3 class="card-title">Pi Chart</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                    {/* <CChart
                        type="doughnut"
                        data={{
                            labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                            datasets: [
                                {
                                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                                    data: [40, 20, 80, 10],
                                },
                            ],
                        }}
                    /> */}
                    <CChart
                        type="line"
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June", "July"],
                            datasets: [
                                {
                                    label: "My First dataset",
                                    backgroundColor: "rgba(220, 220, 220, 0.2)",
                                    borderColor: "rgba(220, 220, 220, 1)",
                                    pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                    pointBorderColor: "#fff",
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                                },
                                {
                                    label: "My Second dataset",
                                    backgroundColor: "rgba(151, 187, 205, 0.2)",
                                    borderColor: "rgba(151, 187, 205, 1)",
                                    pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                    pointBorderColor: "#fff",
                                    data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default PiChart;
