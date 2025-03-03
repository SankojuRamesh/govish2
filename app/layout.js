
"use client";
import "./global.css";
import "./custom.scss";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
// const DynamicFooter = dynamic(() => import("./components/footer"));
const DynamicHeader = dynamic(() => import("./components/header"));


export default function RootLayout({ children }) {
  const path = usePathname();
  const isDynamicRoute = (path) => {
    const dynamicRoutes = [
      // "/bloodRequestDetails/",
      // "/create-request/",
      // "/becomeADonor/",
      // "/create-campaign/",
    ];

    return dynamicRoutes.some((route) => path.startsWith(route));
  };
  const routesToHideHeader = [
    // "/",
    
  ];
  const routesToHideFooter = [
    // "/",
    
  ];
  const shouldHideHeader =
  routesToHideHeader.includes(path) || isDynamicRoute(path);
// const shouldHideFooter =
//   routesToHideFooter.includes(path) || isDynamicRoute(path);
  return (
    <html lang="en">
      <body >
      {!shouldHideHeader && <DynamicHeader />}
        {children}
        {/* {!shouldHideFooter && <DynamicFooter />} */}
      </body>
    </html>
  );
}
