import { useParams } from "react-router-dom";

const UserItem = () => {
  const { id } = useParams();
  return (
    <div className="user">
      UserItem {id}
    </div>
  );
};

export default UserItem;
