import React from "react";
import { ThemeUserDescription } from "./../../ProfileHeader/UserDescription.style";

interface UserElementProps {
  mainText: string;
  secondaryText: string;
  badgeNumber: number;
}

export const UserElement = ({
  mainText,
  secondaryText,
  badgeNumber,
}: UserElementProps) => {
  return (
    <div className="UserElem">
      <img src="./img/profile/profile-img-1.jpeg" alt="User" />
      <ThemeUserDescription>
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </ThemeUserDescription>
      <span className="Badge">{badgeNumber}</span>
    </div>
  );
};

export const UserElem = ({
  mainText,
  secondaryText,
  badgeNumber,
}: UserElementProps) => {
  return (
    <div className="UserElem">
      <img src="./img/users/aleksandr-maykov.jpeg" alt="User" />
      <div className="user__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text _online">{secondaryText}</p>
      </div>
      <span className="Badge">{badgeNumber}</span>
    </div>
  );
};
