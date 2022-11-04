import React from "react";
import Button from "elements/Button";
import Logo from "assets/images/icons/logo.svg";

export default function IconText() {
  return (
    <Button className="brand-text-icon" href="/" type="link">
       <img src={Logo} alt="logo" />
    </Button>
  );
}
