import "./login.scss";
import { useLogin } from "../../data/mutation/login/login-mutation";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync: loginMutate } = useLogin();
  
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const { data } = await loginMutate({ email, password });
      localStorage.setItem("accessToken", JSON.stringify(data.token));
      navigate("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
  
  const nagivateToRegister = () => {
    navigate("/register");
  }

  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
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
              <div className="forget">
                <label>
                  <input type="checkbox" />
                  Remember Me{" "}
                </label>
              </div>
              <button type="submit">Log in</button>
              <button type="submit" onClick={nagivateToRegister}>Register</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
