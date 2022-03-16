import * as React from "react";
import "./App.css";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditProduct from "./components/product/edit.component";
import ProductList from "./components/product/list.component";
import CreateProduct from "./components/product/create.component";
import Register from "./components/users/register.component";
import Login from "./components/users/login.component";
import Navbar from "./components/layouts/navbar.component";
import Home from "./containers/Home";
import About from "./containers/About";
import Blogs from "./containers/Blogs";
import Services from "./containers/Services";
import Projects from "./containers/Projects";
function App() {
  return (
    <Router>
      {/* <Navbar bg="primary">
        <Container>
          <Link to={"/"} className="navbar-brand text-white">
            Basic Crud App
          </Link>
          <Link to={"/register"} className="navbar-brand text-white">
            Register
          </Link>
          <Link to={"/login"} className="navbar-brand text-white">
            Login
          </Link>
        </Container>
      </Navbar> */}
      <Navbar/>

      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={ <Login /> } />
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
              <Route exact path="/" element={<ProductList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
