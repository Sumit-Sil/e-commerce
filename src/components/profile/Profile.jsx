import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import baseUrl, { endPoints } from "../../apiURL/apiUrl";
import Button from "react-bootstrap/Button";

function Profile() {
  const { id } = useParams();
  const api = baseUrl + endPoints.register + "/" + id;
  const navigate = useNavigate();

  const [userData, setData] = useState([]);
  useEffect(() => {
    axios
      .get(api)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [setData]);
  const handleLogOut = () => {
    window.localStorage.removeItem("uid");
    navigate("/login");
  };
  console.log(userData);
  const { profile_pic, fName, lName, username, email } = userData;
  return (
    <>
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Card.Img
          variant="top"
          src={profile_pic}
          style={{ borderRadius: "400px" }}
        />
        <Card.Body>
          <Card.Title>
            {fName} {lName}
          </Card.Title>
          <Card.Text>{username}</Card.Text>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
      <div style={{ marginTop: "20px",marginBottom:"20px"}}>
        <Button onClick={handleLogOut}>Log Out</Button>
      </div>
    </>
  );
}

export default Profile;
