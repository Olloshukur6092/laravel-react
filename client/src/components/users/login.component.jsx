import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ errors, setErrors ] = useState([]);

  const createLogin = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .then(({data : {errors, message, token}}) => {
          
          if (message) {
              localStorage.setItem('user', token);
              navigate('/profile')
          } else {
              setErrors(errors)
          }
        
      })
      .catch((res) => {
        console.log(res);
      });

  };

  useEffect(() => {
    let token = localStorage.getItem('user');
    if (token) {
        navigate('/profile')
    } else {
        navigate('/login')
    }
  }, [])

  return (
    <div className="container">
      <div className="row">
         {
             Object.keys(errors).length > 0 && 
                Object.entries(errors).map(([key, error]) => (
                    <div className="alert alert-danger" key={key}>{error}</div>
                    // console.log(error)
                ))
         }
        <div className="col-md-10">
          <form onSubmit={createLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type={"text"}
                className="form-control mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={"password"}
                className="form-control mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
                <button className="btn btn-success">
                    Send
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
