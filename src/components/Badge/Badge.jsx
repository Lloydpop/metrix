import classNames from "classnames";
import "./Badge.css";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const Badge = ({ children, status = "completed" }) => {
  return (
    <span
      className={classNames(`${inter.className}`, {
        pending: ["pending"].includes(status),
        completed: ["completed"].includes(status),
      })}
      i
    >
      {children}
    </span>
  );
};
