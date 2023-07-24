import { useMutation } from "@tanstack/react-query";
import "./login.scss";
import { login } from "../../data/api/auth";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(
    (credentials: { email: string; password: string }) =>
      login(credentials.email, credentials.password)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
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
              <span className="text">Wrong email or password!</span>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
