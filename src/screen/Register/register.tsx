import { useState, FormEvent } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../../data/mutation/register/register-mutation";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date_of_birth, setDateOfBirth] = useState("");
    const { mutateAsync: registerMutate } = useRegister();

    const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const { data } = await registerMutate({ name, email, password, date_of_birth });
            console.log(data);
            navigate("/login");
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }
    const navigateToLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleRegister}>
                            <h2>Register</h2>
                            <div className="inputbox">
                                <input
                                    type="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                                <label>Name</label>
                            </div>
                            <div className="inputbox">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                <label>Password</label>
                            </div>
                            <div className="inputbox">
                                <input
                                    type="date_of_birth"
                                    value={date_of_birth}
                                    onChange={(e) => {
                                        setDateOfBirth(e.target.value);
                                    }}
                                />
                                <label>Date of Birth</label>
                            </div>
                            <div className="forget">
                                <a>Do you have acount ? <Link style={{ color: "White" }} onClick={navigateToLogin} to={""}>Back to Login</Link></a>
                            </div>
                            <button>Register</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RegisterPage;