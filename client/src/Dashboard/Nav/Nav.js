import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../resources/images/logoPlaceholder.svg";
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import { logout } from "../../shared/utils";

const NavLogo = () => {
  return (
    <div className="nav-logo-container">
      <img className="nav-logo" width="100%" height="100%" src={logo} alt="" />
    </div>
  );
};

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Nav = () => {
  const { isLogged } = useUserDetails();
  const navigate = useNavigate();
  const handleNavigateToAuth = () => {
    navigate("/auth");
  };
  const handleNavigateToSettings = () => {
    navigate("/settings");
  };
  const handleNavigateToChannels = () => {
    navigate("/channels");
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="nav-container">
      <NavLogo />
      <div className="nav-buttons-container">
        <NavButton text="Browse" onClickHandler={handleNavigateToChannels} />
        {!isLogged ? (
          <NavButton text="Login" onClickHandler={handleNavigateToAuth} />
        ) : (
          <div>
            <NavButton
              text="My account"
              onClickHandler={handleNavigateToSettings}
            />
            <NavButton text="Log out" onClickHandler={handleLogout} />
          </div>
        )}
      </div>
    </div>
  );
};
