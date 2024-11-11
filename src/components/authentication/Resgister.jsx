import React, { useEffect, useState } from "react";
import { endPoints } from "../../apiURL/apiUrl";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axiosInstance from "../../axiosInstance/axiosInstance";

function Resgister() {
  const navigate = useNavigate();
  const api = endPoints.register;

  // state for collected-data
  const [formData, setFormData] = useState({
    fName: "",
    email: "",
    username: "",
    password: "",
  });

  // state for  database data
  const [prevData, setData] = useState([]);

  // state for error
  const [errors, setErrors] = useState({
    fName: "",
    email: "",
    username: "",
    password: "",
  });

  //state for image
  const [img, setImg] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(api)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [setData]);
  // console.log(prevData);

  let msg = "";
  const matching = prevData.find(
    (data) =>
      (msg += data.email == formData.email ? "email already exists" : "") ||
      (msg +=
        data.username == formData.username ? "username already exists" : "")
  );
  // console.log(matching);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImage = (file) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", () => {
      setImg(fileReader.result);
    });
  };

  const formValue = {
    fName: formData.fName,
    email: formData.email,
    username: formData.username,
    password: formData.password,
    profile_pic: img,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errMsg = {};

    // check for required field
    if (formData.fName == "") {
      errMsg.fName = "name is required";
    }
    if (formData.email == "") {
      errMsg.email = "email name is required";
    }
    if (formData.username == "") {
      errMsg.username = "usename name is required";
    }
    if (formData.password == "") {
      errMsg.password = "password name is required";
    } else {
      if (matching) {
        toast.error(msg, {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        axiosInstance
          .post(api, formValue)
          .then((res) => {
            console.log("axios response", res);
            toast.success("Registered Successfully", {
              position: "top-right",
              autoClose: 2000,
            });
            setTimeout(() => {
              navigate("/login");
            }, 2600);
          })
          .catch((err) => console.log(err));
      }
    }

    setErrors({ ...errors, ...errMsg });
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // height: "100vh",
        height: "700px",
      }}
    >
      <Container className="d-flex align-items-center justify-content-center h-100">
        <div style={{ marginTop: "50px", width: "100%" }}>
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
              <h2 className="text-center mb-4 mt-3">Register</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicFullName"
                >
                  <Form.Label>
                    <b>Full Name</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fName"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  {errors.fName && (
                    <p className="text-danger">{errors.fName}</p>
                  )}
                </Form.Group>

                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicEmail"
                >
                  <Form.Label>
                    <b>Email</b>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </Form.Group>

                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicUsername"
                >
                  <Form.Label>
                    <b>Username</b>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="text-danger">{errors.username}</p>
                  )}
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
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-danger">{errors.password}</p>
                  )}
                </Form.Group>

                <Form.Group
                  className="mb-3 text-start"
                  controlId="formBasicProfilePic"
                >
                  <Form.Label>
                    <b>Profile Picture</b>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    name="profilePic"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Log in
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Resgister;
