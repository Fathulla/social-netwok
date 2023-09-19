import React from 'react';


interface UserParamenterProps {
  className: "key" | "value";
  key: string
  value: number
}

export const UserParamenter = ({ className, key, value }: UserParamenterProps) => {
  return (
    <div className="parameter">
      <span className={className}>{key}</span>
      <span className={className}>{value}</span>
    </div>
  );
};
