import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleSignInBtnClick = () => {
        navigate('/');
        localStorage.setItem('auth-token', 'sometoken');
        
    }

    return (
        <div class="hold-transition login-page">
            <div class="login-box">
                {/*/.login-logo */}
                <div class="card card-outline card-primary">
                    <div class="card-header text-center">
                        <a href="../../index2.html" class="h1"><b>Sign</b>In</a>
                    </div>
                    <div class="card-body">
                        <p class="login-box-msg">Sign in to start your session</p>


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
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label for="remember">&nbsp;
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            {/*/.col */}
                            <div class="col-4">
                                <button onClick={handleSignInBtnClick} type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            {/*/.col */}
                        </div>

                        <p class="mb-1">
                            <a href="/forgot-password">I forgot my password</a>
                        </p>
                        <p class="mb-0">
                            <a href="/register" class="text-center">Register now</a>
                        </p>
                    </div>
                    {/*/.card-body */}
                </div>
                {/*/.card */}
            </div>
            {/*/.login-box */}
        </div>
    );
}

export default Login;
