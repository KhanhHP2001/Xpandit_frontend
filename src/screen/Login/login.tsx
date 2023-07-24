import './login.scss'

const LoginPage = () => {




    return (
        <div>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form >
                            <h2>Login</h2>
                            <div className="inputbox">
                                {/* <ion-icon name="mail-outline"></ion-icon> */}
                                <input type="email" />
                                <label for="">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" />
                                <label for="">Password</label>
                            </div>
                            <div className="forget">
                                <label for=""><input type="checkbox" />Remember Me  </label>

                            </div>
                            <button>Log in</button>

                            <span className="text">Wrong email or password!</span>

                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LoginPage;