import React, { FC, useState } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface ICardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode;
  changeNumber: (num: number) => void | undefined;
}

const Card: FC<ICardProps> = ({ width, height, variant, changeNumber }) => {
  const [state, setState] = useState(0);
  return (
    <div
      onClick={() => changeNumber(state)}
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? '1px silod gray' : 'none',
        background: variant === CardVariant.primary ? 'gray' : '',
      }}
    >
      Hello word
    </div>
  );
};

export default Card;
