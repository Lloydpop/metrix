import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
const NotificationSlider = ({
  handleCloseClick,
  handleNotificationClick,
  showNotification,
}) => {
  return (
    <>
      <div
        className={`notification-slider ${showNotification ? "active" : ""}`}
      >
        <p>No notification try again later......</p>
        <XMarkIcon className="close" onClick={handleCloseClick} />
      </div>
    </>
  );
};

export default NotificationSlider;
