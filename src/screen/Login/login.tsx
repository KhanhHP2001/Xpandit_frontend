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
      console.log(data);

      navigate("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
