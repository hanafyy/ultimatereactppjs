import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UserUpdateComponent from "./UserUpdateComponent";
function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>UserProfile</h1>
      <h2>Name: {user.name}</h2>
      <UserUpdateComponent />
    </div>
  );
}

export default UserProfile;
