import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [ errors, setErrors ] = useState([]);
  const [ message, setMessage ] = useState('');

  const createRegister = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/api/register", {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        password: password,
      })
      .then(({ data:{errors, message} }) => {
          if (errors) {
              setErrors(errors);
          } else {
             setMessage(message);
             navigate('/register');
          }
        
      })
      .catch((res) => {
        console.log(res);
      });

    //   console.log(errors);
  };

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
         {
             message && (
                <div className="alert alert-success">{message}</div>
             )
         }
        <div className="col-md-10">
          <form onSubmit={createRegister}>

            <div className="form-group">
              <label htmlFor="firstname">Firstname</label>
              <input
                type={"text"}
                className="form-control mb-3"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <input
                type={"text"}
                className="form-control mb-3"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

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
              <label htmlFor="phone">Phone</label>
              <input
                type={"text"}
                className="form-control mb-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

export default Register;
