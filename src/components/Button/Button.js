import classnames from "classnames";
import "./button.css";
export const Button = (props) => {
  const {
    type = "button",
    children,
    onClick,
    variant = "primary",
    disabled,
    isFullWidth = false,
  } = props;
  return (
    <button
      className={classnames(`button-style`, {
        "primary-color": variant === "primary",
        "bg-red-600 text-white hover:bg-red-500": variant === "danger",
        "is-full": isFullWidth,
      })}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {disabled ? "gg" : children}
    </button>
  );
};
