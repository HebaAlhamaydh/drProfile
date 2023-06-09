import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children, className }) {
  //to make layout and navbar general on all page
  return (
    <div className={`layout ${className}`}>
      <Navbar/>
      {children}
    </div>
  );
}
