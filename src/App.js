import { useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import logo from './assets/images/logo.png';
import profile from './assets/images/profile.png';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import StudentDetails from './modules/student/StudentDetails';
import { useOnClickOutside } from './utils/hooks';

function App() {

    const [isToggleIconClick, setIsToggleIconClick] = useState(false);
    const [isProfileIconClick, setIsProfileIconClick] = useState(false);
    const [isAlertIconClick, setIsAlertIconClick] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuClicked, setIsSubMenuClicked] = useState(false);
    const [breadcrumb, setBreadcrumb] = useState({ left: 'Dashboard', right: ['Home', 'Dashboard'] });

    const profileIconRef = useRef();
    const profileContentRef = useRef();
    const alertIconRef = useRef();
    const alertContentRef = useRef();
    const navigate = useNavigate();

    const handleToggleBtnClick = () => {
        setIsToggleIconClick(!isToggleIconClick);
    }

    const handleProfileIconClick = () => {
        setIsProfileIconClick(!isProfileIconClick);
    }

    const handleAlertIconClick = () => {
        setIsAlertIconClick(!isAlertIconClick);
    }

    const handleMenuIconClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleSubMenuIconClick = () => {
        setIsSubMenuClicked(!isSubMenuClicked);
        setBreadcrumb({ left: 'Total Students', right: ['Home', 'Student Details', 'Total Students'] });
        navigate('/student-details');
    }

    const handleSignOutBtnClick = () => {
        localStorage.removeItem('auth-token');
        navigate('/home');
    }

    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(profileIconRef, profileContentRef, () => setIsProfileIconClick(false));
    useOnClickOutside(alertIconRef, alertContentRef, () => setIsAlertIconClick(false));

    return (
        <>
            {localStorage.getItem('auth-token') ?
                <div className={`sidebar-mini ${isToggleIconClick ? 'sidebar-collapse' : ''}`}>
                    <div class="wrapper">
                        {/* Navbar */}
                        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                            {/* Left navbar links */}
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a onClick={handleToggleBtnClick} class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                                </li>
                                <li class="nav-item d-none d-sm-inline-block">
                                    <a href="index3.html" class="nav-link">Home</a>
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
                                <li class="nav-item">
                                    <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                                        <i class="fas fa-search"></i>
                                    </a>
                                    <div class="navbar-search-block">
                                        <form class="form-inline">
                                            <div class="input-group input-group-sm">
                                                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-navbar" type="submit">
                                                        <i class="fas fa-search"></i>
                                                    </button>
                                                    <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                                        <i class="fas fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>


                                <li class="nav-item dropdown">
                                    <a ref={alertIconRef} onClick={handleAlertIconClick} class="nav-link" data-toggle="dropdown" href="#">
                                        <i class="far fa-bell"></i>
                                        <span class="badge badge-danger navbar-badge">13</span>
                                    </a>
                                    <div ref={alertContentRef} class={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${isAlertIconClick ? 'show' : ''}`}>
                                        <span class="dropdown-header">15 Notifications</span>
                                        <div class="dropdown-divider"></div>
                                        <a href="#" class="dropdown-item">
                                            <i class="fas fa-envelope mr-2"></i> 4 new messages
                                            <span class="float-right text-muted text-sm">3 mins</span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a href="#" class="dropdown-item">
                                            <i class="fas fa-users mr-2"></i> 8 friend requests
                                            <span class="float-right text-muted text-sm">12 hours</span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a href="#" class="dropdown-item">
                                            <i class="fas fa-file mr-2"></i> 3 new reports
                                            <span class="float-right text-muted text-sm">2 days</span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                                    </div>
                                </li>



                                <li class="nav-item dropdown user-menu">
                                    <a ref={profileIconRef} onClick={handleProfileIconClick} href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                                        <img src={profile} class="user-image img-circle elevation-2" alt="User Image" />
                                        <span class="d-none d-md-inline">Abhimanyu</span>
                                    </a>
                                    <ul ref={profileContentRef} class={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${isProfileIconClick ? 'show' : ''}`}>
                                        {/* User image */}
                                        <li class="user-header bg-primary">
                                            <img src={profile} class="img-circle elevation-2" alt="User Image" />

                                            <p>
                                                Abhimanyu Patra
                                                <small>Member since Dec. 2014</small>
                                            </p>
                                        </li>
                                        {/* Menu Body */}
                                        <li class="user-body">
                                            <div class="row">
                                                <div class="col-4 text-center">
                                                    <a href="#">Followers</a>
                                                </div>
                                                <div class="col-4 text-center">
                                                    <a href="#">Sales</a>
                                                </div>
                                                <div class="col-4 text-center">
                                                    <a href="#">Friends</a>
                                                </div>
                                            </div>
                                            {/* /.row */}
                                        </li>
                                        {/* Menu Footer*/}
                                        <li class="user-footer">
                                            <a href="#" class="btn btn-default btn-flat">Profile</a>
                                            <a onClick={handleSignOutBtnClick} href="#" class="btn btn-default btn-flat float-right">Sign out</a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                        {/* End: Navbar */}


                        <aside class="main-sidebar sidebar-dark-primary elevation-4">
                            {/* Brand Logo */}
                            <a href="index3.html" class="brand-link">
                                <img src={logo} alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
                                <span class="brand-text font-weight-light">PBBP</span>
                            </a>

                            {/* Sidebar */}
                            <div class="sidebar">
                                {/* SidebarSearch Form */}


                                {/* Sidebar Menu */}
                                <nav class="mt-2">
                                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                        <li class="nav-item">
                                            <a href="/" class="nav-link">
                                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                                <p>
                                                    Dashboard
                                                </p>
                                            </a>
                                        </li>
                                        <li class={`nav-item ${isMenuOpen ? 'menu-open' : ''}`}>
                                            <a onClick={handleMenuIconClick} href="#" class={`nav-link ${isMenuOpen ? 'active' : ''}`}>
                                                <i class="nav-icon fas fa-user"></i>
                                                <p>
                                                    Student Details
                                                    <i class="right fas fa-angle-left"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a onClick={handleSubMenuIconClick} href='#' class={`nav-link ${isSubMenuClicked ? 'active' : ''}`}>
                                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                                        <p>Total Students</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                                        <p>Student Results</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-user-secret"></i>
                                                <p>
                                                    Teacher Details
                                                    <i class="right fas fa-angle-left"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                                        <p>Active Page</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                                        <p>Inactive Page</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-bar-chart"></i>
                                                <p>
                                                    Reports
                                                    <i class="right fas fa-angle-left"></i>
                                                </p>
                                            </a>
                                            <ul class="nav nav-treeview">
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                                        <p>Active Page</p>
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="#" class="nav-link">
                                                        <i class="fa fa-angle-double-right nav-icon"></i>
                                                        <p>Inactive Page</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link">
                                                <i class="nav-icon fas fa-th"></i>
                                                <p>
                                                    Notice Board
                                                    <span class="right badge badge-danger">New</span>
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /.sidebar-menu */}
                            </div>
                            {/* /.sidebar */}
                        </aside>


                        <div class="content-wrapper">
                            {/* Content Header (Page header) */}
                            <div class="content-header">
                                <div class="container-fluid">
                                    <div class="row mb-2">
                                        <div class="col-sm-6">
                                            <h4 class="m-0">{breadcrumb.left}</h4>
                                        </div>{/* /.col */}
                                        <div class="col-sm-6">
                                            <ol class="breadcrumb float-sm-right">
                                                {
                                                    breadcrumb.right.map((item, key) => key === breadcrumb.right.length - 1 ? <li class="breadcrumb-item active">{item}</li> : <li class="breadcrumb-item"><a href="#">{item}</a></li>)
                                                }
                                            </ol>
                                        </div>{/* /.col */}
                                    </div>{/* /.row */}
                                </div>{/* /.container-fluid */}
                            </div>
                            {/* /.content-header */}


                            {/* Main content */}
                            <div class="content">
                                <div class="container-fluid">

                                    <Routes>
                                        <Route path='/' element={<Dashboard />}></Route>
                                        <Route path='/student-details' element={<StudentDetails />}></Route>
                                    </Routes>

                                </div>{/* /.container-fluid */}
                            </div>
                            {/* /.content */}
                        </div>
                        {/* /.content-wrapper */}


                        {/* Control Sidebar */}
                        <aside class="control-sidebar control-sidebar-dark">
                            {/* Control sidebar content goes here */}
                            <div class="p-3">
                                <h5>Title</h5>
                                <p>Sidebar content</p>
                            </div>
                        </aside>
                        {/* /.control-sidebar */}


                        {/* Main Footer */}
                        <footer class="main-footer">
                            {/* To the right */}
                            <div class="float-right d-none d-sm-inline">
                                <strong>Version</strong> 0.1.0
                            </div>
                            {/* Default to the left */}
                            <strong>Copyright &copy; 2023-2024 <a href="https://pbbp.in">PPBP Student Connect</a>.</strong> All rights reserved.
                        </footer>
                    </div>
                </div> :
                <Home />
            }
        </>
    );
}

export default App;