import BarChart from "./charts/BarChart";
import PiChart from "./charts/PiChart";

const Dashboard = () => {

  return (
    <>
      <div class="row">
        <div class="col-lg-3 col-6">
          {/* small box */}
          <div class="small-box bg-info">
            <div class="inner">
              <h3>3500</h3>

              <p>Total Students</p>
            </div>
            <div class="icon">
              <i class="ion ion-bag"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        {/* ./col */}
        <div class="col-lg-3 col-6">
          {/* small box */}
          <div class="small-box bg-success">
            <div class="inner">
              <h3>230</h3>

              <p>Current Students</p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        {/* ./col */}
        <div class="col-lg-3 col-6">
          {/* small box */}
          <div class="small-box bg-warning">
            <div class="inner">
              <h3>1500</h3>

              <p>Girls</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
        {/* ./col */}
        <div class="col-lg-3 col-6">
          {/* small box */}
          <div class="small-box bg-danger">
            <div class="inner">
              <h3>2000</h3>

              <p>Boys</p>
            </div>
            <div class="icon">
              <i class="ion ion-pie-graph"></i>
            </div>
            <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
          </div>
        </div>
      </div>
      {/* ./col */}


      <div class="row">
        <div class="col-lg-6 col-6">
          <PiChart />
        </div>
        <div class="col-lg-6 col-6">
          <BarChart />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
