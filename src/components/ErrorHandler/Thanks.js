import "./ErrorHandler.css";
import win from "../../media/images/win.png";

export const Thanks = () => {
  return (
    <div className="error">
      <div className="textError">Thanks Bashia!</div>
      <img className="errorImage" src={win} />
      <div className="text-bottom-thanks">Please uninstall the application from your phone.</div>
    </div>
  );
};