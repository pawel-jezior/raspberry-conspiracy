import "./ErrorHandler.css";
import error from "../../media/images/error.png";

export const ErrorHandler = () => {
  return (
    <div className="error">
      <div className="textError">Something broke...</div>
      <img className="errorImage" src={error} />
      <div className="text-bottom">Come back in an hour</div>
    </div>
  );
};
