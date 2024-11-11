import React, { useEffect, useState } from "react";
import baseUrl, { endPoints } from "../../apiURL/apiUrl";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance/axiosInstance";

function LogIn() {
  const navigate = useNavigate();
  const api = endPoints.register;
  const [loading, setloading] = useState(false);
  // state for collected-data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //state for error handling
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // state for  database data
  const [PrevData, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(api)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log("login error", err));
  }, [setFormData]);

  // check for existing data
  const match = PrevData.find(
    (data) => data.email == formData.email || data.username == formData.email
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("match data", match);
    // checking if all fields are filled or not
    if (formData.email == "" && formData.password) {
      setErrors({ email: "email is required", password: "" });
    } else if (formData.email && formData.password == "") {
      setErrors({ email: "", password: "password is required" });
    } else if (formData.email == "" && formData.password == "") {
      setErrors({
        email: "email is required",
        password: "password is required",
      });
    }
    // ckecking password and username
    else {
      if (match) {
        if (match.password == formData.password) {
          toast.success("Log in Successfull", {
            position: "bottom-center",
            autoClose: 2000,
          });
          setloading(true);
          setTimeout(() => {
            window.localStorage.setItem("id", match.id);
            // navigate(`/profile/${match.id}`);
            navigate(`/all`);
          }, 2600);
          // console.log(crypto.randomUUID())
          window.localStorage.setItem("uid", crypto.randomUUID());
        } else {
          setErrors({ email: "", password: "password is incorrect" });
        }
      } else {
        toast.error("Invalid Credentials");
        setErrors({ email: "Invalid email or username", password: "" });
      }
    }
  };
  // console.log(formData);
  // console.log(errors);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="justify-content-md-center">
          <Col
            xs={12}
            md={6}
            lg={4}
            style={{
              backgroundColor: "rgba(254, 243, 199, 0.9)",
              border: "1px solid black",
              borderRadius: "10px",
              padding: "10px",
              width: "400px",
            }}
          >
            <h2 className="text-center mb-4 mt-3">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicEmail"
              >
                <Form.Label>
                  <b>Email address or Username</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </Form.Group>

              <Form.Group
                className="mb-3 text-start"
                controlId="formBasicPassword"
              >
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </Form.Group>
              {loading ? (
                <>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100"
                    disabled
                  >
                    Loging In...
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </>
              )}
            </Form>
            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LogIn;
