import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const RegisterPage = () => {

    const handleRegister = () => {
        console.log("login");
    }

    return (
        <div>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleRegister}>
                            <h2>Register</h2>
                            <div className="inputbox">
                                <input type="email" />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" />
                                <label>Password</label>
                            </div>
                            <div className="forget">
                                <label><input type="checkbox" />Remember Me  </label>

                            </div>
                            <button>Register</button>

                            <span className="text">Wrong email or password!</span>

                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RegisterPage;