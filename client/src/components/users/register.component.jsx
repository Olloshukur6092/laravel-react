import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Register = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createRegister = async (e) => {
        e.preventDefault();
        
        await axios.post("http://localhost:8000/api/register", {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }).then(({data}) => {
            console.log(data.message)
            navigate('/')
        }).catch((res) => {
            console.log(res)
        })
    }
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <form onSubmit={createRegister}>
                        <label htmlFor="firstname">Firstname</label>
                        <input 
                            type={"text"}
                            className="form-control mb-3"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label htmlFor="lastname">Lastname</label>
                        <input 
                            type={"text"}
                            className="form-control mb-3"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input 
                            type={"text"}
                            className="form-control mb-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                        <input 
                            type={"text"}
                            className="form-control mb-3"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;