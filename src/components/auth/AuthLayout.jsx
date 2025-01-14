import React from "react";
import "../../styles/Auth.css";
export default function AuthLayout({ children, image, imageSideStyles }) {
  return (
    <div className="container">
      <div className="login-container">
        {/* image */}
        <div
          className="image-side"
          style={{
            backgroundImage: `url(${image})`,
            borderRadius: imageSideStyles,
          }}
        />
        {/* content */}
        <div className="content-side">{children}</div>
      </div>
    </div>
  );
}
