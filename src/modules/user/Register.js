import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const handleRegisterBtnBtnClick = () => {
        navigate('/');
        localStorage.setItem('auth-token', 'sometoken');
    }

    return (
        <div class="hold-transition register-page">
            <div class="register-box">
                <div class="card card-outline card-primary">
                    <div class="card-header text-center">
                        <a href="../../index2.html" class="h1"><b>Register</b></a>
                    </div>
                    <div class="card-body">
                        <p class="login-box-msg">Register a new membership</p>

                        <div action="../../index.html" method="post">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Full name" />
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-user"></span>
                                        </div>
                                    </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="Email" />
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Password" />
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Retype password" />
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                            </div>
                            <div class="row">
                                <div class="col-8">
                                    <div class="icheck-primary">
                                        <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                                            <label for="agreeTerms"> &nbsp;
                                                I agree to the <a href="#">terms</a>
                                            </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div class="col-4">
                                    <button onClick={handleRegisterBtnBtnClick} class="btn btn-primary btn-block">Register</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </div>

                        <a href='/login' class="text-center">I already have a membership</a>
                    </div>
                    {/* /.form-box */}
                </div>{/* /.card */}
            </div>
            {/* /.register-box */}
        </div>
    );
}

export default Register;
