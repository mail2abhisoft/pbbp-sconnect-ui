import { CChart } from "@coreui/react-chartjs";


const BarChart = () => {
    return (

        <div class="card card-success">
            <div class="card-header">
                <h3 class="card-title">Bar Chart</h3>

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
                    <CChart
                        type="bar"
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                            datasets: [
                                {
                                    label: 'GitHub Commits',
                                    backgroundColor: '#f87979',
                                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                },
                            ],
                        }}
                        labels="months"
                    />
                </div>
            </div>
        </div>


    );
}

export default BarChart;
