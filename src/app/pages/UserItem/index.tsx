import { useParams } from "react-router-dom";
import BackgroundImage from "../../assests/images/bgg.webp";
import "./style.css";

const UserItem = () => {
  const { id } = useParams();
  return (
    <div className="mainItem">
      <div className="bg">
        <img src={BackgroundImage} alt="BackgroundImage" />
      </div>
      UserItem {id}
    </div>
  );
};

export default UserItem;
