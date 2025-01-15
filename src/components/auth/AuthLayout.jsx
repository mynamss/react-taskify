import React from "react";
import "../../styles/Auth.css";
export default function AuthLayout({ children, image }) {
  return (
    <div className="container">
      <div className="login-container">
        {/* image */}
        <div
          className="image-side"
          style={{
            backgroundImage: `url(${image})`,
            borderRadius: "1rem 0 0 1rem",
          }}
        />
        {/* content */}
        <div className="content-side">{children}</div>
      </div>
    </div>
  );
}
