import React from "react";
import Link from "gatsby-link";

export default function navbar() {
  return (
    <div className="sidebar">
      <nav>
        <Link to="/">
          <i className="mdi mdi-home-outline" />
        </Link>
        <Link to="/projects">
          <i className="mdi mdi-briefcase-outline" />
        </Link>
        <Link to="/contact">
          <i className="mdi mdi-email-outline" />
        </Link>
      </nav>
    </div>
  );
}
