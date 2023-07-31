import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const poppins = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
import { usePathname } from "next/navigation";
export const metadata = {
  title: "metrix test app",
  description: "A test application",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const login = pathname === "/";
  const conversation = pathname === "/conversation";
  return (
    <html lang="en">
      <body className={poppins.className}>
        {login ? null : <Sidebar />}
        <div
          className={
            login
              ? ""
              : !conversation
              ? "children"
              : "children conversation-child"
          }
        >
          {children}
        </div>
      </body>
    </html>
  );
}
