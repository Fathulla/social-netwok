import React from 'react';

interface MusicElementProps {
    mainText: string;
    secondaryText: string;
}

export const MusicElement = ({ mainText, secondaryText }: MusicElementProps) => {
  return (
    <div className="MusicElem">
      <img src="./img/music/album-1.png" alt="Album" />
      <div className="music__description">
        <p className="main__text">{mainText}</p>
        <p className="secondary__text">{secondaryText}</p>
      </div>
      <div className="plus-button _active"></div>
    </div>
  );
};
