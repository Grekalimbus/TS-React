import React, { FC } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface ICardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: React.ReactNode;
}

const Card: FC<ICardProps> = ({ width, height, variant }) => {
  return (
    <div
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
