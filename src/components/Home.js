import logo from '../assets/images/logo.png';
import person1 from '../assets/images/home/person_1.jpg';
import person2 from '../assets/images/home/person_2.jpg';
import person3 from '../assets/images/home/person_3.jpg';
import person4 from '../assets/images/home/person_5.jpg';
import person5 from '../assets/images/home/person_6.jpg';
import person6 from '../assets/images/home/person_7.jpg';
import studentBg from '../assets/images/student_bg.jpg';
import CustomCorousel from './CustomCorousel';
import '../assets/css/home.css';

const Home = () => {

    return (
        // <div style={{ margin: '0 8%' }}>
        <div>
            <nav class="navbar navbar-expand navbar-light" style={{ marginLeft: 0, backgroundColor: '#fff', width: '100%', borderBottom: '1px solid lightgrey', height: '2rem', fontSize: '12px' }}>
                <ul class="navbar-nav">
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fa fa-map-marker-alt' />&nbsp; Shibapura, Bahanaga, Balasore - 756042, Odisha</span>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fa fa-phone-alt' />&nbsp; 8892403207</span>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fa fa-envelope' />&nbsp; pranabandhubidyapitha@gmail.com</span>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fab fa-facebook-f facebook' /></span>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fab fa-twitter twitter' /></span>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fab fa-instagram instagram' /></span>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fab fa-youtube youtube' /></span>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <span href="index3.html" class="nav-link"><i class='fab fa-whatsapp whatsapp' /></span>
                    </li>
                </ul>
            </nav>





            <nav class="navbar navbar-expand navbar-light" style={{ marginLeft: 0, backgroundColor: '#fff', width: '100%' }}>
                <a href="index3.html" class="brand-link">
                    <img src={logo} alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                </a>
                {/* Left navbar links */}
                <ul class="navbar-nav">
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" class="nav-link active">Home</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">About us</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Teachers</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Gallery</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>

                {/* Right navbar links */}
                <ul class="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="/login" class="nav-link"><i class="fas fa-sign-in-alt" />&nbsp;Login</a>
                    </li>
                </ul>
            </nav>
            {/* End: Navbar */}




            <CustomCorousel style={{ width: '10%' }} />
            <h1 class="text-center school-excellence" style={{ paddingBottom: '5%', paddingTop: '5%' }}>Welcome to School of Excellence</h1>
            <div class="row" style={{ padding: '20px' }}>
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-info"><i class="far fa-user"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-number">20,410</span>
                            <span class="info-box-text">Students Enrolled</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                </div>
                {/* /.col */}
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-success"><i class="fa fa-user-secret"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-number">200</span>
                            <span class="info-box-text">Certified Teachers</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                </div>
                {/* /.col */}
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-warning"><i class="fa fa-university"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-number">99%</span>
                            <span class="info-box-text">Passing Rate</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                </div>
                {/* /.col */}
                <div class="col-md-3 col-sm-6 col-12">
                    <div class="info-box">
                        <span class="info-box-icon bg-danger"><i class="far fa-smile-o"></i></span>

                        <div class="info-box-content">
                            <span class="info-box-number">100%</span>
                            <span class="info-box-text">Parents Satisfaction</span>
                        </div>
                        {/* /.info-box-content */}
                    </div>
                    {/* /.info-box */}
                </div>
                {/* /.col */}
            </div>


            <div style={{ backgroundColor: '#e7e1fd', paddingTop: '5%', paddingBottom: '5%' }}>
                <h1 class="mt-4 mb-4 text-center" style={{ paddingBottom: '3%' }}>Meet Our Qualified Teachers</h1>
                <div class='row' style={{ padding: '10px' }}>
                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-info">
                                <h3 class="widget-user-username">Pradeep Kumar Kabi</h3>
                                <h5 class="widget-user-desc">Mathematics &amp; Science</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person1} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>

                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-primary">
                                <h3 class="widget-user-username">Ramakanta Behera</h3>
                                <h5 class="widget-user-desc">Oriya &amp; Geography</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person2} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>

                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-warning">
                                <h3 class="widget-user-username">Narendra Panigrahi</h3>
                                <h5 class="widget-user-desc">English &amp; Oriya</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person3} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>
                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-success">
                                <h3 class="widget-user-username">Dasarathi Muduli</h3>
                                <h5 class="widget-user-desc">English &amp; History</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person4} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>
                </div>

                <div class='row' style={{ padding: '10px' }}>
                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-danger">
                                <h3 class="widget-user-username">Pradeep Kumar Kabi</h3>
                                <h5 class="widget-user-desc">Mathematics &amp; Science</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person5} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>

                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-secondary">
                                <h3 class="widget-user-username">Subrat Panda</h3>
                                <h5 class="widget-user-desc">Sanskrit &amp; Hindi</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person6} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>

                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-dark">
                                <h3 class="widget-user-username">Akash Rout</h3>
                                <h5 class="widget-user-desc">Mathematics &amp; PET</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person1} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>
                    <div class="col-md-3">
                        {/* Widget: user widget style 1 */}
                        <div class="card card-widget widget-user shadow">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div class="widget-user-header bg-info">
                                <h3 class="widget-user-username">Brahmananda Tripathy</h3>
                                <h5 class="widget-user-desc">Science &amp; Geography</h5>
                            </div>
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={person1} alt="User Avatar" />
                            </div>
                            <div class="card-footer">
                                <div class="row">
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">3,200</h5>
                                            <span class="description-text">SALES</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4 border-right">
                                        <div class="description-block">
                                            <h5 class="description-header">13,000</h5>
                                            <span class="description-text">FOLLOWERS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-sm-4">
                                        <div class="description-block">
                                            <h5 class="description-header">35</h5>
                                            <span class="description-text">PRODUCTS</span>
                                        </div>
                                        {/* /.description-block */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>
                </div>
            </div>





            <div style={{ backgroundColor: '#eef9ee', paddingTop: '5%' }}>
                <h1 class="mt-4 mb-4 text-center" style={{ paddingBottom: '3%' }}>Why Choose Pranabandhu Bidyapitha School</h1>
                <div class='row' style={{ padding: '10px' }}>
                    <div class="col-md-6">
                        <h4 class="why-choose-pbbp-heading"><strong><i class="fas fa-check-double mr-1"></i> Good Education</strong></h4>
                        <p class="text-muted">
                            Here we are providing good education and each student is examined personally and we are trying to figure out
                            what is the root cause of the students for scoring results.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <h4 class="why-choose-pbbp-heading"><strong><i class="fas fa-check-double mr-1"></i> Dedicated Practical Rooms</strong></h4>
                        <p class="text-muted">
                            Here we are providing good education and each student is examined personally and we are trying to figure out
                            what is the root cause of the students for scoring results.
                        </p>
                    </div>
                </div>
                <div class='row' style={{ padding: '10px' }}>
                    <div class="col-md-6">
                        <h4 class="why-choose-pbbp-heading"><strong><i class="fas fa-check-double mr-1"></i> Individual class rooms</strong></h4>
                        <p class="text-muted">
                            Here we are providing good education and each student is examined personally and we are trying to figure out
                            what is the root cause of the students for scoring results.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <h4 class="why-choose-pbbp-heading"><strong><i class="fas fa-check-double mr-1"></i> Doubt sessions after school</strong></h4>
                        <p class="text-muted">
                            Here we are providing good education and each student is examined personally and we are trying to figure out
                            what is the root cause of the students for scoring results.
                        </p>
                    </div>
                </div>

                <div class='row' style={{ padding: '10px' }}>
                    <div class="col-md-6">
                        <h4 class="why-choose-pbbp-heading"><strong><i class="fas fa-check-double mr-1"></i> Tiffin and lunch system for students</strong></h4>
                        <p class="text-muted">
                            Here we are providing good education and each student is examined personally and we are trying to figure out
                            what is the root cause of the students for scoring results.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <h4 class="why-choose-pbbp-heading"><strong><i class="fas fa-check-double mr-1"></i> Awarding system each month</strong></h4>
                        <p class="text-muted">
                            Here we are providing good education and each student is examined personally and we are trying to figure out
                            what is the root cause of the students for scoring results.
                        </p>
                    </div>
                </div>
            </div>




            <h1 class="school-excellence">
                Get your admission now!
                <div class="float-right d-none d-sm-inline">
                    <button type="button" class="btn btn-block bg-gradient-warning btn-lg"><strong>Enroll Now</strong></button>
                </div>
            </h1>

            <footer class="footer-distributed">
                <div class="footer-left">
                    <div class='widget-user-2'>
                        <div class="widget-user-header">
                            <div class="widget-user-image">
                                <img class="img-circle elevation-2" src={logo} alt="Logo" />
                            </div>
                            <h3 class="widget-user-username" style={{ color: '#1FB2AA', fontWeight: '500' }}>Pranabandhu</h3>
                            <h5 class="widget-user-desc" style={{ color: '#1FB2AA' }}>Bidyapitha</h5>
                        </div>
                    </div>
                    <p class="footer-links">
                        <a href="#" class="link-1">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Teachers</a>
                        <a href="#">Gallery</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </p>
                    Copyright &copy; 2023-2024 <a href="https://pbbp.in">PPBP Student Connect</a>. All rights reserved.
                </div>
                <div class="footer-center">
                    <div>
                        <i class="fas fa-map-marker-alt" style={{ fontSize: '22px' }}></i>
                        <p><span>Shibapura, Bahanaga, Balasore</span> Odisha - 756042, India</p>
                    </div>
                    <div>
                        <i class="fa fa-phone-alt" style={{ fontSize: '18px' }}></i>
                        <p>+91 8892403207</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">pranabandhubidyapitha@gmail.com</a></p>
                    </div>
                </div>

                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About our school</span>
                        School is the place where we learn to read and write. It is the most crucial place for a student, and it helps us to learn new things. The teachers are always helpful and teach us important things in life. We must always be regular to school as missing classes can lead to problems during exams.
                    </p>
                    <div class="footer-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
