import React from 'react';
import { UserInitials } from './UserAvatar.style';

interface UserAvatarProps {
    avatarUrl: string;
    onAvatarClick: () => void;
}

export const UserAvatar = ({ avatarUrl, onAvatarClick}: UserAvatarProps) => {
    return (
        <>
            {
                avatarUrl ? 
                (<img src="./img/users/denis-frolov.jpeg" alt="Denis Frolov" />) :
                (<UserInitials>D F</UserInitials>)
            }
            <input type="file" />
        </>
    );
};

