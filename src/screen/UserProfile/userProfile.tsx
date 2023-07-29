import "./userProfile.scss";
import Sidebar from "../../components/morecules/sidebar/Sidebar";
import Navbar from "../../components/morecules/navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfilePage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    role: "User",
    avatarUrl:
      "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  };
  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="user-profile">
          <div className="avatar-container">
            <img src={user.avatarUrl} alt="Avatar" className="avatar" />
          </div>
          <div className="user-info">
            <h3>Acount Detail</h3>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Role: {user.role}</p>
          </div>
          <button className="button-edit">Edit User</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
