import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Link.module.css";

export const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <div className={styles.link}>
      <Link href={href} className={isActive ? styles.active : ""} passHref>
        <span className={styles.child}>{children}</span>
      </Link>
    </div>
  );
};
