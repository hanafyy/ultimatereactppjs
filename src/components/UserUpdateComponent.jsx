import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
function UserUpdateComponent() {
  const { updateUser } = useContext(UserContext);
  return (
    <div>
      <span>change name</span>
      <input onChange={(e) => updateUser(e.target.value)} />
    </div>
  );
}

export default UserUpdateComponent;
