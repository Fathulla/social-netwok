import React from 'react';


interface UserParamenterProps {
  parameterName: string;
  value: number;
}

export const UserParamenter = ({ parameterName, value }: UserParamenterProps) => {
  return (
    <div className="parameter">
      <span className="key">{parameterName}</span>
      <span className="value">{value}</span>
    </div>
  );
};
